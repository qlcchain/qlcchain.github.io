# Contract

创建Contract模块对象
```go
func NewContractApi(c *rpc.Client) *ContractApi
```


## PackContractData
根据ABI打包指定的方法
```go 
func (c *ContractApi) PackContractData(abiStr string, methodName string, params []string) ([]byte, error)
```