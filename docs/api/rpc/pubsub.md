# Publish–Subscribe

:::warning
Available from go-qlc v1.3 and above
:::

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|&#x2713; |

## Introduction

From version 1.3 gqlc has experimental support for pub/sub using subscriptions as defined in the JSON-RPC 2.0 specification. This allows clients to wait for events instead of polling for them

It works by subscribing to particular events. The node will return a subscription id. For each event that matches the subscription a notification with relevant data is send together with the subscription id

Example:

```
// create subscription
>> {"id": 1, "method": "qlc_subscribe", "params": ["newBlock"]}
<< {"jsonrpc":"2.0","id":1,"result":"0xcd0c3e8af590364c09d0fa6a1210faf5"}

// incoming notifications
<< {"jsonrpc":"2.0","method":"qlc_subscription","params":{"subscription":"0xcd0c3e8af590364c09d0fa6a1210faf5","result":{"type":"State","token":"a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",<...>}}}
<< {"jsonrpc":"2.0","method":"qlc_subscription","params":{"subscription":"0xcd0c3e8af590364c09d0fa6a1210faf5","result":{"type":"State","token":"38b13da6e7425ee4f21194504c9c9ceea0b09f65da3f32bed0c36cbced44ce0b",<...>}}}

// cancel subscription
>> {"id": 1, "method": "qlc_unsubscribe", "params": ["0xcd0c3e8af590364c09d0fa6a1210faf5"]}
<< {"jsonrpc":"2.0","id":1,"result":true}
```

Notice: 

- subscriptions require a full duplex connection. gqlc offers such connections in the form of websockets and ipc 
- subscriptions are coupled to a connection. If the connection is closed all subscriptions that are created over this connection are removed


## Create subscription

Subscriptions are creates with a regular RPC call with ledger_subscribe as method and the subscription name as first parameter. If successful it returns the subscription id.


- **Parameters**: 
  - the first one is subscription name, like "balanceChange"
  - others are optional arguments
  

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_subscribe",
	"params": ["balanceChange","qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"]
}


```


- **Returns**: 
If successful it returns the subscription id immediately。

