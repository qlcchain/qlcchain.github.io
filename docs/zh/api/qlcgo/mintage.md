# Mintage

创建Mintage模块对象
```go
func NewMintageApi(c *rpc.Client) *MintageApi
```


## GetMintageBlock
根据铸币参数返回铸币合约的数据
```go
func (m *MintageApi) GetMintageBlock(param *api.MintageParams) (*types.StateBlock, error)
```


## GetMintageData
根据铸币参数返回ContractSend区块
```go
func (m *MintageApi) GetMintageData(param *api.MintageParams) ([]byte, error)
```


## GetRewardBlock
根据ContractSend区块返回ContractReward区块
```go
func (m *MintageApi) GetRewardBlock(input *types.StateBlock) (*types.StateBlock, error)
```


## GetWithdrawMintageData
根据token id返回提取铸币合约抵押的数据
```go
func (m *MintageApi) GetWithdrawMintageData(tokenId types.Hash) ([]byte, error)
```
