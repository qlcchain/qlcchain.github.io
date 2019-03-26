# Wallet
NewWallet creates a new wallet
```go
func NewWallet(dir string) (*Wallet, error)
```

## NewWallet
NewWallet create new wallet and save 
```go
func (w *Wallet) NewWallet() (types.Address, error)
```


## NewWalletBySeed
NewWalletBySeed create wallet from hex seed string
```go
func (w *Wallet) NewWalletBySeed(seed, password string) (types.Address, error)
```


## ChangePassword
ChangePassword changes password to a new password
```go
func (w *Wallet) ChangePassword(addr types.Address, pwd string, newPwd string) error
```


## Close
Close closes wallet
```go
func (ws *Wallet) Close() error
```


## CurrentId
CurrentId returns current wallet id
```go
func (w *Wallet) CurrentId() (types.Address, error)
```


## IsWalletExist
IsWalletExist check is the wallet exist by master address
```go
func (w *Wallet) IsWalletExist(address types.Address) (bool, error)
```


## RemoveWallet
RemoveWallet removes wallet by account
```go
func (w *Wallet) RemoveWallet(id types.Address) error
```


## WalletIds
WalletIds returns all wallet ids
```go
func (w *Wallet) WalletIds() ([]types.Address, error)
```


