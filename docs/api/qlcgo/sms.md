# SMS

NewSMSApi creates sms module for client
```go
func NewSMSApi(c *rpc.Client) *SMSApi
```

## MessageBlocks
MessageBlock accepts a message hash, and returns blocks that relevant to the hash
```go
func (s *SMSApi) MessageBlocks(hash types.Hash) ([]*api.APIBlock, error)
```

## MessageHash
MessageHash returns hash of message
```go
func (s *SMSApi) MessageHash(message string) (types.Hash, error)
```

## MessageInfo
MessageInfo returns message for message hash
```go
func (s *SMSApi) MessageInfo(mHash types.Hash) (string, error)
```

## MessageStore
MessageStore stores message and returns message hash
```go
func (s *SMSApi) MessageStore(message string) (types.Hash, error)
```

## PhoneBlocks
PhoneBlocks accepts a phone number, and returns send blocks and receiver blocks that relevant to the number
```go
func (s *SMSApi) PhoneBlocks(phone string) (map[string][]*api.APIBlock, error)
```


