# Ledger

NewLedgerApi creates ledger module for client
```go 
func NewLedgerApi(c *rpc.Client) *LedgerApi
```


## AccountBlocksCount
AccountBlocksCount returns number of blocks for a specific account of chain
```go
func (l *LedgerApi) AccountBlocksCount(address types.Address) (int64, error)
```


## AccountHistoryTopn
AccountHistoryTopn returns blocks list for a specific account of chain count is number of blocks to return, and offset is index of block where to start
```go
func (l *LedgerApi) AccountHistoryTopn(address types.Address, count int, offset int) ([]*api.APIBlock, error)
```


## AccountInfo
AccountInfo returns account detail info, include each token meta for the account If account not found, will return error
```go
func (l *LedgerApi) AccountInfo(address types.Address) (*api.APIAccount, error)
```


## AccountRepresentative
AccountRepresentative returns the representative address for account If account not found, will return error
```go
func (l *LedgerApi) AccountRepresentative(address types.Address) (types.Address, error)
```


## AccountVotingWeight
AccountVotingWeight returns the voting weight for account, if account not found, will return error
```go
func (l *LedgerApi) AccountVotingWeight(address types.Address) (types.Balance, error)
```

## Accounts
Accounts returns accounts list of chain count is number of accounts to return, and offset is index of account where to start
```go
func (l *LedgerApi) Accounts(count int, offset int) ([]*types.Address, error)
```


## AccountsBalance
AccountsBalance returns balance and pending(amount that has not yet been received) for each account
```go
func (l *LedgerApi) AccountsBalance(addresses []types.Address) (map[types.Address]map[string]map[string]types.Balance, error)
```


## AccountsCount
AccountsCount returns total number of accounts of chain
```go
func (l *LedgerApi) AccountsCount() (uint64, error)
```


## AccountsFrontiers
AccountsFrontiers returns frontier info for each token of account
```go
func (l *LedgerApi) AccountsFrontiers(addresses []types.Address) (map[types.Address]map[string]types.Hash, error)
```

## AccountsPending
AccountsPending returns pending info list for each account maximum number of pending for each account return is n, and if n set to -1, will return all pending for each account
```go
func (l *LedgerApi) AccountsPending(addresses []types.Address, n int) (map[types.Address][]*api.APIPending, error)
```


## BlockAccount
BlockAccount accepts a block hash, and returns account of block owner
```go
func (l *LedgerApi) BlockAccount(hash types.Hash) (types.Address, error)
```


## BlockHash
BlockHash return hash of block
```go
func (l *LedgerApi) BlockHash(block types.StateBlock) types.Hash
```


## BlockInfo
BlockInfo accepts a block hash, and returns block info for the hash
```go
func (l *LedgerApi) BlockInfo(hash types.Hash) (*api.APIBlock, error)
```


## Blocks
Blocks returns blocks list of chain count is number of blocks to return, and offset is index of block where to start
```go
func (l *LedgerApi) Blocks(count int, offset int) ([]*api.APIBlock, error)
```


## BlocksCount
BlocksCount returns the number of blocks(include smartcontract block) and unchecked blocks of chain
```go
func (l *LedgerApi) BlocksCount() (map[string]uint64, error)
```


## BlocksCountByType
BlocksCountByType returns number of blocks by type of chain
```go
func (l *LedgerApi) BlocksCountByType() (map[string]uint64, error)
```


## BlocksInfo
BlocksInfo accepts blocks hash list, and returns block info for each hash
```go
func (l *LedgerApi) BlocksInfo(hash []types.Hash) ([]*api.APIBlock, error)
```


## Chain
Chain returns a consecutive block hash list for a specific hash maximum number of blocks hash to return is n, and if n set to -1, will return blocks hash to the open block
```go
func (l *LedgerApi) Chain(hash types.Hash, n int) ([]types.Hash, error)
```


## Delegators
Delegators accepts a representative account, and returns its delegator and each delegator's balance
```go
func (l *LedgerApi) Delegators(hash types.Address) ([]*api.APIAccountBalance, error)
```


## DelegatorsCount
DelegatorsCount gets number of delegators for specific representative account
```go
func (l *LedgerApi) DelegatorsCount(hash types.Address) (int64, error)
```


## GenerateChangeBlock
GenerateChangeBlock returns change block by account and new representative address, sign is a function to sign the block
```go
func (l *LedgerApi) GenerateChangeBlock(account types.Address, representative types.Address, sign Signature) (*types.StateBlock, error)
```


## GenerateReceiveBlock
GenerateReceiveBlock returns receive block by send block, sign is a function to sign the block
```go
func (l *LedgerApi) GenerateReceiveBlock(txBlock *types.StateBlock, sign Signature) (*types.StateBlock, error)
```

## GenerateReceiveBlockByHash
GenerateReceiveBlockByHash returns receive block by send block hash, sign is a function to sign the block
```go
func (l *LedgerApi) GenerateReceiveBlockByHash(txHash types.Hash, sign Signature) (*types.StateBlock, error)
```

## GenerateSendBlock
GenerateSendBlock returns send block by transaction parameter, sign is a function to sign the block
```go
func (l *LedgerApi) GenerateSendBlock(para *api.APISendBlockPara, sign Signature) (*types.StateBlock, error)
```

## Pending
Pending return pending info by account and token hash, if pending not found, return error
```go
func (l *LedgerApi) Pending(address types.Address, hash types.Hash) (*api.APIPending, error)
```
## Performance
Performance returns performance time
```go
func (l *LedgerApi) Performance() ([]*types.PerformanceTime, error)
```

## Process
Process checks block base info , updates info of chain for the block ,and broadcasts block
```go
func (l *LedgerApi) Process(block *types.StateBlock) (types.Hash, error)
```

## Representatives
Representatives returns pairs of representative and its voting weight of chain if set sorting false , will return representatives randomly, if set true, will sorting representative balance in descending order
```go
func (l *LedgerApi) Representatives(sorting bool) (*api.APIAccountBalances, error)
```

## TokenMeta
TokenMeta return tokenmeta info by account and token hash
```go
func (l *LedgerApi) TokenMeta(hash types.Hash, address types.Address) (*api.APITokenMeta, error)
```


## TokenInfoById
TokenInfoById returns token info by token id
```go
func (l *LedgerApi) TokenInfoById(tokenId types.Hash) (*api.ApiTokenInfo, error)
```

## TokenInfoByName
TokenInfoById returns token info by token name
```go
func (l *LedgerApi) TokenInfoByName(tokenName string) (*api.ApiTokenInfo, error)
```

## Tokens
Tokens return all token info of chain
```go
func (l *LedgerApi) Tokens() ([]*types.TokenInfo, error)
```

## TransactionsCount
TransactionsCount returns the number of blocks(not include smartcontract block) and unchecked blocks of chain
```go
func (l *LedgerApi) TransactionsCount() (map[string]uint64, error)
```
