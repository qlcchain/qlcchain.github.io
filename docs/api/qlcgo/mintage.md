# Mintage

NewMintageApi creates mintage module for client
```go
func NewMintageApi(c *rpc.Client) *MintageApi
```


## GetMintageBlock
GetMintageBlock returns mintage block by mintage parameters
```go
func (m *MintageApi) GetMintageBlock(param *api.MintageParams) (*types.StateBlock, error)
```


## GetMintageData
GetMintageData returns mintage data by mintage parameters
```go
func (m *MintageApi) GetMintageData(param *api.MintageParams) ([]byte, error)
```


## GetRewardBlock
GetRewardBlock returns reward block by mintage block
```go
func (m *MintageApi) GetRewardBlock(input *types.StateBlock) (*types.StateBlock, error)
```


## GetWithdrawMintageData
GetWithdrawMintageData returns withdraw mintage data by token id
```go
func (m *MintageApi) GetWithdrawMintageData(tokenId types.Hash) ([]byte, error)
```
