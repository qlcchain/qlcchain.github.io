# P2P

**Supported protocols:**

**Supported protocols:**

| JSON-RPC 2.0 | HTTP |Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|:-----:|
| &#x2713; | &#x2713; | &#x2713; | &#x2713;|TBD |



## net_syncInfo
Return the sync status of the node

- **Parameters**: `none`

- **Returns**: `SyncInfo`

| Name | JSON type | Actual type | Desc |
|:------------:|:-----------:|:-----:|:-----:|
| from | string | uint64 | The starting sync height |
| to | string | uint64| The target sync height |
| received | string | uint64 | The number of received snapshot blocks |
| current | string | uint64 | The current height of snapshot chain |
| state | uint | uint | Sync state: 0 Sync not started, 1 Sync in process, 2 Sync complete, 3 Sync error, 4 Sync cancelled, 5 Data download complete |
| status | string | string | The description of sync status |

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
