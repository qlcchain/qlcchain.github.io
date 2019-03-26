# Utility

NewUtilApi creates unit module for client
```go
func NewUtilApi(c *rpc.Client) *UtilApi
```


## BalanceToRaw
RawToBalance transforms QLC amount from unit to raw
```go
func (u *UtilApi) BalanceToRaw(balance types.Balance, unit string) (types.Balance, error)
```


## BalanceToRawForToken
RawToBalance transforms token (not QLC) amount to raw
```go
func (u *UtilApi) BalanceToRawForToken(balance types.Balance, tokenName string) (types.Balance, error)
```

## RawToBalance
RawToBalance transforms QLC amount from raw to unit
```go
func (u *UtilApi) RawToBalance(balance types.Balance, unit string) (types.Balance, error)
```


## RawToBalanceForToken
RawToBalance transforms token (not QLC) amount from raw
```go
func (u *UtilApi) RawToBalanceForToken(balance types.Balance, tokenName string) (types.Balance, error)
```

## Decrypt
Decrypt decrypts cryptograph to raw by passphrase
```go
func (u *UtilApi) Decrypt(cryptograph string, passphrase string) (string, error)
```


## Encrypt
Encrypt encrypts raw to cryptograph by passphrase
```go
func (u *UtilApi) Encrypt(raw string, passphrase string) (string, error)
```

