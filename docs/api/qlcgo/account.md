# Account

```go
type AccountApi struct {
	client *rpc.Client
}
```
NewAccountApi creates account module for client
```go
func NewAccountApi(c *rpc.Client) *AccountApi
```


## Create 
Create gets account by index from seed
```go 
func (a *AccountApi) Create(seedStr string, index uint32) (map[string]string, error)
```


## ForPublicKey
ForPublicKey returns address for public key 
```go
func (a *AccountApi) ForPublicKey(pubStr string) (types.Address, error)
```

## PublicKey 
PublicKey returns public key for address

```go
func (a *AccountApi) PublicKey(addr types.Address) string 
```

## Validate 
Validate accepts a address string and checks if it's valid.
```go
func (a *AccountApi) Validate(addr string) bool
```
