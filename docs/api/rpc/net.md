# P2P

**Supported protocols:**

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



## net_onlineRepresentatives
Return online representative accounts that have voted recently  
- **Parameters**: `null`
  
- **Returns**: 
  - `[]address`:  addresses list for representative accounts 

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

