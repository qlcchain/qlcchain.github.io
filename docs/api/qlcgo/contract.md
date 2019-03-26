# Contract

NewContractApi creates contract module for client
```go
func NewContractApi(c *rpc.Client) *ContractApi
```


## PackContractData
PackContractData parse a ABI interface and pack the given method name to conform the ABI.
```go 
func (c *ContractApi) PackContractData(abiStr string, methodName string, params []string) ([]byte, error)
```