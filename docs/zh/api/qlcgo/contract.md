# Contract

创建Contract模块对象
```go
func NewContractApi(c *rpc.Client) *ContractApi
```


## ContractAddressList
获取链上所有合约地址
```go
func (c *ContractApi) ContractAddressList() []types.Address 
```

## GetAbiByContractAddress 
根据合约地址获取合约abi
```go
func (c *ContractApi) GetAbiByContractAddress(address types.Address) (string, error) 
```


## PackContractData
根据ABI打包指定的方法
```go 
func (c *ContractApi) PackContractData(abiStr string, methodName string, params []string) ([]byte, error)
```