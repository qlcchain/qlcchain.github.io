# P2P

NewNetApi creates net module for client
```go
func NewNetApi(c *rpc.Client) *NetApi
```


## OnlineRepresentatives
OnlineRepresentatives returns representatives that online at this moment
```go
func (q *NetApi) OnlineRepresentatives() ([]types.Address, error)
```
