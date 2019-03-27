# Account

创建Account模块对象
```go
func NewAccountApi(c *rpc.Client) *AccountApi
```


## Create 
通过seed和index创建一个新的账户，返回账户的公钥和私钥
```go 
func (a *AccountApi) Create(seedStr string, index uint32) (map[string]string, error)
```


## ForPublicKey
通过账户公钥返回账户的地址
```go
func (a *AccountApi) ForPublicKey(pubStr string) (types.Address, error)
```

## PublicKey 
通过账户地址返回账户公钥

```go
func (a *AccountApi) PublicKey(addr types.Address) string 
```

## Validate 
检测账户地址是否合法
```go
func (a *AccountApi) Validate(addr string) bool
```
