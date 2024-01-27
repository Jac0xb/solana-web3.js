import type { Address } from '@solana/addresses';
import type { IRpcApiMethods, Slot } from '@solana/rpc-types';

/** array of Node identity public keys as base-58 encoded strings */
type GetSlotLeadersApiResponse = Address[];

export interface GetSlotLeadersApi extends IRpcApiMethods {
    /**
     * Returns the slot leaders for a given slot range
     */
    getSlotLeaders(
        /** Start slot, as u64 integer */
        startSlot: Slot,
        /** Limit (between 1 and 5000) */
        limit: number,
    ): GetSlotLeadersApiResponse;
}