# Contract

NewContractApi creates contract module for client
```go
func NewContractApi(c *rpc.Client) *ContractApi
```


## ContractAddressList
ContractAddressList return all contract addresses
```go
func (c *ContractApi) ContractAddressList() []types.Address 
```

## GetAbiByContractAddress 
GetAbiByContractAddress return contract abi by contract address
```go
func (c *ContractApi) GetAbiByContractAddress(address types.Address) (string, error) 
```

## PackContractData
PackContractData parse a ABI interface and pack the given method name to conform the ABI.
```go 
func (c *ContractApi) PackContractData(abiStr string, methodName string, params []string) ([]byte, error)
```