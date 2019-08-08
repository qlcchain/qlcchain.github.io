# Ledger

创建Ledger模块对象
```go 
func NewLedgerApi(c *rpc.Client) *LedgerApi
```


## AccountBlocksCount
返回指定账户对应的区块总数量
```go
func (l *LedgerApi) AccountBlocksCount(address types.Address) (int64, error)
```


## AccountHistoryTopn
返回指定账户对应的区块，包含账户下的每个token，返回区块顺序从最后一个区块开始，向前遍历到指定数量。参数count表示要返回的区块数量，offset表示偏移量，从第几个区块开始查询。
```go
func (l *LedgerApi) AccountHistoryTopn(address types.Address, count int, offset int) ([]*api.APIBlock, error)
```


## AccountInfo
返回账户的详细信息，包含该账户下的每个token
```go
func (l *LedgerApi) AccountInfo(address types.Address) (*api.APIAccount, error)
```


## AccountRepresentative
返回该账户的代表账户
```go
func (l *LedgerApi) AccountRepresentative(address types.Address) (types.Address, error)
```


## AccountVotingWeight
返回该账户的投票权重
```go
func (l *LedgerApi) AccountVotingWeight(address types.Address) (types.Balance, error)
```

## Accounts
返回链上的账户地址列表。count表示返回的账户数量，offset表示偏移量，从第几个账户开始返回。
```go
func (l *LedgerApi) Accounts(count int, offset int) ([]*types.Address, error)
```


## AccountsBalance
返回每个账户的余额和待接收数量
```go
func (l *LedgerApi) AccountsBalance(addresses []types.Address) (map[types.Address]map[string]map[string]types.Balance, error)
```

## AccountsCount
返回链上的账户总量
```go
func (l *LedgerApi) AccountsCount() (uint64, error)
```


## AccountsFrontiers
返回每个账户下的token hash以及每个token所对应链的最后一个区块哈希
```go
func (l *LedgerApi) AccountsFrontiers(addresses []types.Address) (map[types.Address]map[string]types.Hash, error)
```

## AccountsPending
返回账户的待接收交易信息。n表示每个账户要返回待接收交易信息的最大数量，如果设置为－1，则返回所有待接收交易
```go
func (l *LedgerApi) AccountsPending(addresses []types.Address, n int) (map[types.Address][]*api.APIPending, error)
```


## BlockAccount
根据区块hash返回该区块所属的账户地址
```go
func (l *LedgerApi) BlockAccount(hash types.Hash) (types.Address, error)
```


## BlockHash
返回区块hash
```go
func (l *LedgerApi) BlockHash(block types.StateBlock) types.Hash
```


## BlockInfo
根据block hash返回block具体信息
```go
func (l *LedgerApi) BlockInfo(hash types.Hash) (*api.APIBlock, error)
```

## BlockConfirmedStatus
返回区块的链上确认状态，如果已经被确认，返回true，否则返回false
```
func (l *LedgerApi) BlockConfirmedStatus(hash types.Hash) (bool, error)
```

## Blocks
返回链上的区块列表，count表示要返回的区块数量，offset表示偏移量，从第几个区块开始查询
```go
func (l *LedgerApi) Blocks(count int, offset int) ([]*api.APIBlock, error)
```


## BlocksCount
返回已确认（包含智能合约区块）和未确认的区块数量
```go
func (l *LedgerApi) BlocksCount() (map[string]uint64, error)
```


## BlocksCountByType
根据类型返回区块数量
```go
func (l *LedgerApi) BlocksCountByType() (map[string]uint64, error)
```


## BlocksInfo
根据区块hash的列表返回区块信息列表
```go
func (l *LedgerApi) BlocksInfo(hash []types.Hash) ([]*api.APIBlock, error)
```

## ConfirmedAccountInfo
返回账户的确认信息
```go
func (l *LedgerApi) ConfirmedAccountInfo(address types.Address) (*APIAccount, error) 
```


## Chain
接收一个特定的区块哈希，然后从这个区块开始向前遍历，直到指定的区块数量。n表示要返回区块数量，如果设置为－1，则遍历到第一个区块
```go
func (l *LedgerApi) Chain(hash types.Hash, n int) ([]types.Hash, error)
```


## Delegators
返回指定代表账户所代表的地址和每个地址的余额
```go
func (l *LedgerApi) Delegators(hash types.Address) ([]*api.APIAccountBalance, error)
```


## DelegatorsCount
返回特定代表账户所代表的账户总数
```go
func (l *LedgerApi) DelegatorsCount(hash types.Address) (int64, error)
```


## GenerateChangeBlock
根据账户和私钥产生修改代表的区块
```go
func (l *LedgerApi) GenerateChangeBlock(account types.Address, representative types.Address, sign Signature) (*types.StateBlock, error)
```


## GenerateReceiveBlock
根据发送区块和私钥产生接收区块
```go
func (l *LedgerApi) GenerateReceiveBlock(txBlock *types.StateBlock, sign Signature) (*types.StateBlock, error)
```

## GenerateReceiveBlockByHash
根据发送区块hash和私钥产生接收区块
```go
func (l *LedgerApi) GenerateReceiveBlockByHash(txHash types.Hash, sign Signature) (*types.StateBlock, error)
```

## GenerateSendBlock
根据交易参数和私钥生成发送区块
```go
func (l *LedgerApi) GenerateSendBlock(para *api.APISendBlockPara, sign Signature) (*types.StateBlock, error)
```

## Pending
根据地址和token hash查询该地址对应的待接收交易信息
```go
func (l *LedgerApi) Pending(address types.Address, hash types.Hash) (*api.APIPending, error)
```
## Performance
返回Performance数据
```go
func (l *LedgerApi) Performance() ([]*types.PerformanceTime, error)
```

## Process
接收一个特定区块，然后检测区块基本信息，根据区块更新链信息，并且广播区块
```go
func (l *LedgerApi) Process(block *types.StateBlock) (types.Hash, error)
```

## Representatives
返回链上的代表账户及其权重。sorting如果设置为false，将会以随机顺序返回代表账户，如果设置为true，则会以代表账户权重进行排序
```go
func (l *LedgerApi) Representatives(sorting bool) (*api.APIAccountBalances, error)
```

## TokenMeta
根据账户地址和token hash返回该账户下token的meta信息
```go
func (l *LedgerApi) TokenMeta(hash types.Hash, address types.Address) (*api.APITokenMeta, error)
```


## TokenInfoById
根据token id返回token信息
```go
func (l *LedgerApi) TokenInfoById(tokenId types.Hash) (*api.ApiTokenInfo, error)
```

## TokenInfoByName
根据token名称返回token信息
```go
func (l *LedgerApi) TokenInfoByName(tokenName string) (*api.ApiTokenInfo, error)
```

## Tokens
返回链上的token列表
```go
func (l *LedgerApi) Tokens() ([]*types.TokenInfo, error)
```

## TransactionsCount
返回链上的确认区块（不包括智能合约）和未确认区块数
```go
func (l *LedgerApi) TransactionsCount() (map[string]uint64, error)
```
