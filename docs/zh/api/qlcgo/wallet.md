# Wallet
创建wallet模块对象
```go
func NewWallet(dir string) (*Wallet, error)
```

## NewWallet
创建新钱包 
```go
func (w *Wallet) NewWallet() (types.Address, error)
```


## NewWalletBySeed
根据seed和密码创建新钱包
```go
func (w *Wallet) NewWalletBySeed(seed, password string) (types.Address, error)
```


## ChangePassword
修改钱包密码
```go
func (w *Wallet) ChangePassword(addr types.Address, pwd string, newPwd string) error
```


## Close
关闭钱包
```go
func (ws *Wallet) Close() error
```


## CurrentId
返回钱包当前主地址
```go
func (w *Wallet) CurrentId() (types.Address, error)
```


## IsWalletExist
根据钱包主地址查询钱包是否存在
```go
func (w *Wallet) IsWalletExist(address types.Address) (bool, error)
```


## RemoveWallet
删除钱包
```go
func (w *Wallet) RemoveWallet(id types.Address) error
```


## WalletIds
返回所有钱包的主地址
```go
func (w *Wallet) WalletIds() ([]types.Address, error)
```


