# Net


**支持的调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe |
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |




## net_connectPeersInfo
返回节点的连接信息

- **Parameters**: 无
  
- **Returns**: 
  － 连接节点信息

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"net_connectPeersInfo"
}



```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "count": 3,
    "infos": {
      "QmW9ocg4fRjckCMQvRNYGyKxQd6GiutAY4HBRxMrGrZRfc": "/ip4/47.112.112.138/tcp/19734",
      "QmXcotWHqn5k9id2ZiTzS61t5MJpJCux4msMX2oMDMuVNx": "/ip4/178.63.50.78/tcp/19734",
      "QmdFSukPUMF3t1JxjvTo14SEEb5JV9JBT6PukGRo6A2g4f": "/ip4/47.103.40.20/tcp/19734"
    }
  }
}


```

```json test
{
	"jsonrpc": "2.0",
  "id":1,
  "method":"net_connectPeersInfo"
}


```
:::




## net_onlineRepresentatives
返回在线代表账户地址列表
- **Parameters**: `null`
  
- **Returns**: 
  - `[]address`:  地址列表

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":2,
  "method":"net_onlineRepresentatives"
}


```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 2,
	"result": [
		"qlc_3s1agkbw6osftnodbcu9otawgdhz6q74xzpgsu641qzjgs8qdqfujim3z7ii",
		"qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic"
	]
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":2,
  "method":"net_onlineRepresentatives"
}


```
:::



## net_syncing

返回节点同步状态

- **Parameters**: `null`
- **Returns**: 
  - 连接同步状态：true代表正在同步，false代表没在同步
- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"net_syncing"
}


```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": false
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"net_syncing"
}


```

:::

