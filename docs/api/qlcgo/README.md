# Golang SDK

Golang SDK can create a client to get data from chain, include module:

```go
type QLCClient struct {
	client   *rpc.Client
	Account  *module.AccountApi
	Contract *module.ContractApi
	Ledger   *module.LedgerApi
	Mintage  *module.MintageApi
	Network  *module.NetApi
	SMS      *module.SMSApi
	Util     *module.UtilApi
} 
```

use as:
```go
func main(){
    c, err := NewQLCClient("http://127.0.0.1:9735")
	if err != nil {
		return err
	}
	defer c.client.Close()
	r, err := c.Ledger.BlocksCount()
	if err != nil {
		return err
	}
	fmt.Println(r)
}
```