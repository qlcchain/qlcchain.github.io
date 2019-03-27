# P2P

创建Net模块对象
```go
func NewNetApi(c *rpc.Client) *NetApi
```


## OnlineRepresentatives
返回在线代表账户地址列表
```go
func (q *NetApi) OnlineRepresentatives() ([]types.Address, error)
```
