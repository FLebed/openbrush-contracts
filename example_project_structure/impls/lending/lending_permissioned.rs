use super::{
    data,
    data::*,
};
use crate::traits::lending::*;
use ink::storage::traits::{
    ManualKey,
    ResolverKey,
    Storable,
    StorableHint,
};
use openbrush::{
    contracts::{
        access_control::*,
        pausable::*,
        traits::psp22::PSP22Ref,
    },
    modifiers,
    traits::{
        AccountId,
        Balance,
        OccupiedStorage,
        Storage,
        ZERO_ADDRESS,
    },
};

pub const MANAGER: RoleType = ink::selector_id!("MANAGER");

impl<T, M> LendingPermissioned for T
where
    T: Internal,
    T: Storage<data::Data> + Storage<pausable::Data> + Storage<access_control::Data<M>>,
    T: OccupiedStorage<{ access_control::STORAGE_KEY }, WithData = access_control::Data<M>>,
    M: members::MembersManager,
    M: Storable
        + StorableHint<ManualKey<{ access_control::STORAGE_KEY }>>
        + StorableHint<
            ResolverKey<
                <M as StorableHint<ManualKey<{ access_control::STORAGE_KEY }>>>::PreferredKey,
                ManualKey<3218979580, ManualKey<{ access_control::STORAGE_KEY }>>,
            >,
            Type = M,
        >,
{
    #[modifiers(only_role(MANAGER))]
    default fn allow_asset(&mut self, asset_address: AccountId) -> Result<(), LendingError> {
        // we will ensure the asset is not accepted already
        if self.is_accepted_lending(asset_address) {
            return Err(LendingError::AssetSupported)
        }

        // instantiate the shares of the lended assets
        let shares_address = self._instantiate_shares_contract("LendingShares", "LS");
        // instantiate the reserves of the borrowed assets
        let reserves_address = self._instantiate_shares_contract("LendingReserves", "LR");
        // accept the asset and map shares and reserves to it

        accept_lending(self, asset_address, shares_address, reserves_address);
        Ok(())
    }

    #[modifiers(only_role(MANAGER))]
    default fn disallow_lending(&mut self, asset_address: AccountId) -> Result<(), LendingError> {
        let reserve_asset = get_reserve_asset(self, &asset_address)?;
        if PSP22Ref::balance_of(&asset_address, Self::env().account_id()) > 0
            || PSP22Ref::balance_of(&reserve_asset, Self::env().account_id()) > 0
        {
            return Err(LendingError::AssetsInTheContract)
        }
        disallow_lending(self, asset_address);
        Ok(())
    }

    #[modifiers(only_role(MANAGER))]
    default fn allow_collateral(&mut self, asset_address: AccountId) -> Result<(), LendingError> {
        // we will ensure the asset is not accepted already
        if self.is_accepted_collateral(asset_address) {
            return Err(LendingError::AssetSupported)
        }
        set_collateral_accepted(self, asset_address, true);
        Ok(())
    }

    #[modifiers(only_role(MANAGER))]
    default fn disallow_collateral(&mut self, asset_address: AccountId) -> Result<(), LendingError> {
        // we will ensure the asset is not accepted already
        if self.is_accepted_collateral(asset_address) {
            set_collateral_accepted(self, asset_address, false);
        }
        Ok(())
    }

    #[modifiers(only_role(MANAGER))]
    default fn set_asset_price(
        &mut self,
        asset_in: AccountId,
        asset_out: AccountId,
        price: Balance,
    ) -> Result<(), LendingError> {
        set_asset_price(self, &asset_in, &asset_out, &price);
        Ok(())
    }
}

pub trait Internal {
    /// Internal function which instantiates a shares contract and returns its AccountId
    fn _instantiate_shares_contract(&self, contract_name: &str, contract_symbol: &str) -> AccountId;
}

fn accept_lending<T: Storage<data::Data>>(
    instance: &mut T,
    asset_address: AccountId,
    share_address: AccountId,
    reserve_address: AccountId,
) {
    instance.data().asset_shares.insert(&asset_address, &share_address);
    instance.data().shares_asset.insert(&share_address, &asset_address);
    instance.data().assets_lended.insert(&asset_address, &reserve_address);
}

fn disallow_lending<T: Storage<data::Data>>(instance: &mut T, asset_address: AccountId) {
    let share_address = instance
        .data()
        .asset_shares
        .get(&asset_address)
        .unwrap_or(ZERO_ADDRESS.into());
    instance.data().asset_shares.remove(&asset_address);
    instance.data().shares_asset.remove(&share_address);
    instance.data().assets_lended.remove(&asset_address);
}

/// this function will accept `asset_address` for using as collateral
fn set_collateral_accepted<T: Storage<data::Data>>(instance: &mut T, asset_address: AccountId, accepted: bool) {
    instance.data().collateral_accepted.insert(&asset_address, &accepted);
}
