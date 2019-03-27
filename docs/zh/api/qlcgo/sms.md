# SMS

创建SMS模块对象
```go
func NewSMSApi(c *rpc.Client) *SMSApi
```

## MessageBlocks
根据短信hash返回区块列表，这些区块的message字段为短信hash
```go
func (s *SMSApi) MessageBlocks(hash types.Hash) ([]*api.APIBlock, error)
```

## MessageHash
返回短信消息哈希
```go
func (s *SMSApi) MessageHash(message string) (types.Hash, error)
```

## MessageStore
存储短信消息并返回消息hash
```go
func (s *SMSApi) MessageStore(message string) (types.Hash, error)
```

## PhoneBlocks
根据手机号返回对应的区块列表，这些区块的sender或者receiver字段为该手机号
```go
func (s *SMSApi) PhoneBlocks(phone string) (map[string][]*api.APIBlock, error)
```