# Net


**支持的调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



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

