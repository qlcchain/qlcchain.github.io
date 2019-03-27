# Golang SDK

Golang SDK 可以创建一个QLC client，然后查询链上数据，包括的模块有：

```go
type QLCClient struct {
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

Golang SDK 还可以创建和管理钱包,  见 [wallet](../qlcgo/wallet.html) 