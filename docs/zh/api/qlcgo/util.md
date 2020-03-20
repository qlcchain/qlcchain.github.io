# Utility

创建Util模块对象
```go
func NewUtilApi(c *rpc.Client) *UtilApi
```


## BalanceToRaw
返回指定单位余额对应的最小单位的余额
```go
func (u *UtilApi) BalanceToRaw(balance types.Balance, unit string) (types.Balance, error)
```


## BalanceToRawForToken
根据token名称返回该token余额对应的最小单位余额
```go
func (u *UtilApi) BalanceToRawForToken(balance types.Balance, tokenName string) (types.Balance, error)
```

## RawToBalance
返回最小单位余额对应的指定单位的余额
```go
func (u *UtilApi) RawToBalance(balance types.Balance, unit string) (types.Balance, error)
```


## RawToBalanceForToken
根据token名称返回该token最小单位余额对应的余额
```go
func (u *UtilApi) RawToBalanceForToken(balance types.Balance, tokenName string) (types.Balance, error)
```

## Decrypt
通过密码解密密文
```go
func (u *UtilApi) Decrypt(cryptograph string, passphrase string) (string, error)
```


## Encrypt
通过密码加密原文
```go
func (u *UtilApi) Encrypt(raw string, passphrase string) (string, error)
```

