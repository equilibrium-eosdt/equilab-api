# EQUILIBRIUM API

API bindings to access Equilibruim substrate queries and transactions  
**NOTE** Typescript bindings included  

## Equilibrium node list  

 - **Mainnet** node: _wss://node.equilibrium.io_  
 - **Testnet** node: _wss://testnet.equilibrium.io_ (this node implements latest features)  

## Genshiro node list  

 - **Testnet** node: _wss://testnet.genshiro.io_ (this node implements latest features)  

## Getting started

```bash
$ npm i --save @equilab/api     # if you are using npm or  
$ yarn add @equilab/api         # for yarn package manager  

## Usage

### API Init  

Use *getApiCreator(nodeSpec: "Eq" | "EqNext" | "Genshiro")* factory from __@equilab/api__ package  
```typescript
import { getApiCreator } from "@equilab/api";  

(async () => { // async/await usage
  /*
   * nodeSpec can be either 
   * "Eq" for mainnet node,
   * or "EqNext" for testnet node,
   * or "Gens" for genshiro nodes
   */

  // Connect to mainnet node with websocket
  const api = await getApiCreator("Eq")("wss://node.equilibrium.io");
  // do the interaction below
  const balance = await api.getBalance("YOUR_ADDRESS", "EQ"); // get EQ tokens
  console.log(balance.toJSON());
})();

createApi("wss://tge.equilibrium.io:9944")
  .then(api => api.getBalance("YOUR_ADDRESS", "EQ"))
  .then(balance => console.log(balance.toJSON())); // Promise usage
```  

## Types

```typescript
type UserGroup = "Unknown" | "Balances" | "Bailsmen" | "Borrowers" | "Lenders";
type UnsubscribePromise = Promise<() => void /* call this func to unsubscribe */>;

interface SignedBalance {
  readonly isPositive: boolean;
  readonly asPositive: Balance;
  readonly isNegative: boolean;
  readonly asNegative: Balance;
}

interface DataPoint {
  price: u64;
  account_id: AccountId;
  block_number: BlockNumber;
  timestamp: u64;
}

interface PricePoint {
  block_number: BlockNumber;
  timestamp: u64;
  price: u64;
  data_points: Vec<DataPoint>;
}

/**
 * In order to get asset:
 * 
 * import { tokenToAsset } from "@equilab/api";
 * const asset = tokenToAsset("Btc");
 */

interface Asset {
  0: u64;
}

/**
 * Use Currency only on current version of mainnet
 * 
 * @deprecated
 */
type Currency = "Unknown" | "Usd" | "EQ" | "Eth" | "Btc" | "Eos" | "Dot";
```

## API Methods  

### getAccounts(): Promise&lt;string[]&gt;  
Fetch list of addresses in system  

### getBlockHash(blockNumber: number): Promise&lt;Hash&gt;  
Fetch hash of block by its number  

### subscribeNewBlockHeads(blockHandler: (header: BlockHeader) => Promise&lt;void&gt; | void): UnsubscribePromise  
Retrieves the best finalized header via subscription  

### setSigner(signer: Signer): void  
Sets transaction signer, can be used with [injected wallet](https://github.com/polkadot-js/extension/tree/master/packages/extension-dapp)  

### multi(calls: QueryableStorageMultiArg&lt;"promise"&gt;[], callback: (result: Codec[]) => void | Promise&lt;void&gt;): UnsubscribePromise  
Allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription. Refer to [multiple queries section of polkadot.js api docs](https://polkadot.js.org/api/start/api.query.multi.html)  

### getNonce(address: string): Promise&lt;Index&gt;  
Fetch next available nonce for this address  
  
## API Storage queries  

Storage queries are compliant with [Polkadot.JS storage interfaces](https://polkadot.js.org/docs/api/cookbook/storage)  

### getBalance(key1: AccountId, key2: Asset): Promise&lt;SignedBalance&gt;  

 Pallet storage - balances for all accounts  

  

### getRate(key: Asset): Promise&lt;PricePoint&gt;  

 Pallet storage for added price points  

  

### getVested(key: AccountId): Promise&lt;BalanceOf&gt;  

 Pallet storage: information about already vested balances for given account  

  

### getVesting(key: AccountId): Promise&lt;VestingInfo&gt;  

 Pallet storage: information regarding the vesting of a given account  

  

### getClaim(key: EthereumAddress): Promise&lt;BalanceOf&gt;  

 Pallet storage - stores amount to be claimed by each `EthereumAddress`  

  

### getClaimSigning(key: EthereumAddress): Promise&lt;bool&gt;  

 Pallet storage - stores Ethereum addresses from which additional statement  
 singing is required  

  

### getClaimVesting(key: EthereumAddress): Promise&lt;(BalanceOf,BalanceOf,BlockNumber)&gt;  

 Pallet storage - vesting schedule for a claim.  
 First balance is the total amount that should be held for vesting.  
 Second balance is how much should be unlocked per block.  
 The block number is when the vesting should start.  

  

### getTotalClaim(): Promise&lt;BalanceOf&gt;  

 Pallet storage - total `Claims` amount  

  

### hasGroup(key1: UserGroup, key2: AccountId): Promise&lt;bool&gt;  

  

### aggregatesByGroup(key1: UserGroup, key2: Asset): Promise&lt;TotalAggregates&gt;  

 Pallet storage - stores aggregates for each user group  

  

### getAddress(key1: AccountId, key2: SubAccType): Promise&lt;AccountId&gt;  

 Pallet storage - double map storing subaccounts as `AccountId` where  
 user's main `AccountId` and `SubAccType` used as keys  

  

### getOwner(key: AccountId): Promise&lt;(AccountId,SubAccType)&gt;  

 Pallet storage - a map storing a tuple  (`AccountId`, `SubAccType`)  
 for each existing subaccount. First element in stored tuple is  
 `AccountId` of main user account, owning the subaccount and second  
 is `SubAccType` of key subaccount  

  

### getMetrics(): Promise&lt;FinancialMetrics&gt;  

 Financial metrics for all known assets.  

  

### getLocks(key: AccountId): Promise&lt;Balance&gt;  

 Pallet storage - accounts locks  

  

### getLockTime(): Promise&lt;u64&gt;  

 Pallet storage - start of lock program.  
 Value is UnixTime timestamp in seconds  

  

### getPool(key: PoolId): Promise&lt;PoolInfo&gt;  

 Existing pools  


## API Transaction methods 

Transaction methods are compliant with [Polkadot.JS transaction interfaces](https://polkadot.js.org/docs/api/cookbook/tx)  

### batch(calls: Vec<Call>,): SubmittableExtrinsic  

 Send a batch of dispatch calls.  
  
 May be called from any origin.  
  
 - `calls`: The calls to be dispatched from the same origin.  
  
 If origin is root then call are dispatch without checking origin filter. (This includes  
 bypassing `frame_system::Config::BaseCallFilter`).  
  
 # <weight>  
 - Complexity: O(C) where C is the number of calls to be batched.  
 # </weight>  
  
 This will return `Ok` in all circumstances. To determine the success of the batch, an  
 event is deposited. If a call failed and the batch was interrupted, then the  
 `BatchInterrupted` event is deposited, along with the number of successful calls made  
 and the error of the failed call. If all were successful, then the `BatchCompleted`  
 event is deposited.  

  

### sudo(call: Call,): SubmittableExtrinsic  

 Authenticates the sudo key and dispatches a function call with `Root` origin.  
  
 The dispatch origin for this call must be _Signed_.  
  
 # <weight>  
 - O(1).  
 - Limited storage reads.  
 - One DB write (event).  
 - Weight of derivative `call` execution + 10,000.  
 # </weight>  

  

### setPrice(asset: Asset,price: FixedI64,): SubmittableExtrinsic  

 Adds new `DataPoint` containing `asset` price information. It  
 would be used for `PricePoint` calculation. Only whitelisted  
 accounts can add `DataPoint`s  

  

### vest(): SubmittableExtrinsic  

 Unlock any vested funds of the sender account.  
  
 The dispatch origin for this call must be _Signed_ and the sender must have funds still  
 locked under this module.  
  
 Emits either `VestingCompleted` or `VestingUpdated`.  

  

### vestTo(target: LookupSource,): SubmittableExtrinsic  

 Unlock any vested funds of a `target` account.  
  
 The dispatch origin for this call must be _Signed_.  
  
 - `target`: The account whose vested funds should be unlocked. Must have funds still  
 locked under this module.  
  
 Emits either `VestingCompleted` or `VestingUpdated`.  

  

### claim(dest: AccountId,ethereum_signature: EcdsaSignature,): SubmittableExtrinsic  

 Make a claim to collect your currency.  
  
 The dispatch origin for this call must be _None_.  
  
 Unsigned Validation:  
 A call to claim is deemed valid if the signature provided matches  
 the expected signed message of:  
  
 > Ethereum Signed Message:  
 > (configured prefix string)(address)  
  
 and `address` matches the `dest` account.  
  
 Parameters:  
 - `dest`: The destination account to payout the claim.  
 - `ethereum_signature`: The signature of an ethereum signed message  
    matching the format described above.  

  

### claimAttest(dest: AccountId,ethereum_signature: EcdsaSignature,statement: Bytes,): SubmittableExtrinsic  

 Make a claim to collect your currency by signing a statement.  
  
 The dispatch origin for this call must be _None_.  
  
 Unsigned Validation:  
 A call to `claim_attest` is deemed valid if the signature provided matches  
 the expected signed message of:  
  
 > Ethereum Signed Message:  
 > (configured prefix string)(address)(statement)  
  
 and `address` matches the `dest` account; the `statement` must match that which is  
 expected according to your purchase arrangement.  
  
 Parameters:  
 - `dest`: The destination account to payout the claim.  
 - `ethereum_signature`: The signature of an ethereum signed message  
    matching the format described above.  
 - `statement`: The identity of the statement which is being attested to in the signature.  

  

### withdrawExternal(amount: Balance,recipient: Bytes,dest_id: ChainId,resource_id: ResourceId,): SubmittableExtrinsic  

 Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.  
 Charges fee and accumulates it on the special account.  

  

### lockdrop(amount: Balance,): SubmittableExtrinsic  

 Lock `amount` of Eq for lock  

  

### curveExchange(pool_id: PoolId,i: PoolTokenIndex,j: PoolTokenIndex,dx: Balance,min_dy: Balance,): SubmittableExtrinsic  

 Perform an exchange between two coins.  
 `i` - index value of the coin to send,  
 `j` - index value of the coin to recieve,  
 `dx` - amount of `i` being exchanged,  
 `min_dy` - minimum amount of `j` to receive.  

  

### curveAdd(pool_id: PoolId,amounts: Vec<Balance>,min_mint_amount: Balance,): SubmittableExtrinsic  

 Deposit coins into the pool  
 `amounts` - list of amounts of coins to deposit,  
 `min_mint_amount` - minimum amout of LP tokens to mint from the deposit.  

  

### curveRemove(pool_id: PoolId,amount: Balance,min_amounts: Vec<Balance>,): SubmittableExtrinsic  

 Withdraw coins from the pool.  
 Withdrawal amount are based on current deposit ratios.  
 `amount` - quantity of LP tokens to burn in the withdrawal,  
 `min_amounts` - minimum amounts of underlying coins to receive.  

  

### curveRemoveImbalance(pool_id: PoolId,amounts: Vec<Balance>,max_burn_amount: Balance,): SubmittableExtrinsic  

 Withdraw coins from the pool in an imbalanced amount.  
 `amounts` - list of amounts of underlying coins to withdraw,  
 `max_burn_amount` - maximum amount of LP token to burn in the withdrawal.  

  

### curveRemoveOne(pool_id: PoolId,token_amount: Balance,i: PoolTokenIndex,min_amount: Balance,): SubmittableExtrinsic  

 Withdraw a single coin from the pool.  
 `token_amount` - amount of LP tokens to burn in the withdrawal,  
 `i` - index value of the coin to withdraw,  
 `min_amount` - minimum amount of coin to receive.  


