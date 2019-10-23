# Net

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe |
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |





## net_connectPeersInfo
Return connect peers

- **Parameters**: `none`
  
- **Returns**: 
  - `peerInfo` 

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



## net_syncing

Return sync status

- **Parameters**: `null`
- **Returns**: 
  - `sync status`:   
    - `true`：`syncing now`
    - `false`：`not syncing`
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



## net_getBandwidthStats

Return bandwidth metrics

- **Parameters**: `null`
- **Returns**:
  - `bandwidth stats`:
    - `TotalIn TotalOut`：`The TotalIn and TotalOut fields record cumulative bytes sent / received.`
    - `RateIn RateOut`   ：`The RateIn and RateOut fields record bytes sent / received per second.`
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id":18,
	"method":"net_getBandwidthStats"
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": {
    "TotalIn": 598546022,
    "TotalOut": 3524381031,
    "RateIn": 7498.377919815488,
    "RateOut": 28352.544366668382
  }
}
```

```json test
{
	"jsonrpc": "2.0",
	"id":18,
  	"method":"net_getBandwidthStats"
}
```

:::



## net_onlineRepsInfo

Return online representative info ，validVotes and validVotesPercent

- **Parameters**: `null`
- **Returns**:
  - ` online representative info`
  - `validVotes`
  - `validVotesPercent`
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id":18,
	"method":"net_onlineRepsInfo"
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": {
    "Reps": [
      {
        "Account": "qlc_1odgyakfyk6jot381bdzmqubguejtpo8ame8kzymk4ukgh6kurt6rpj7ip4j",
        "Vote": "100000000000000"
      },
      {
        "Account": "qlc_3du37ycreqgse861rcx8qkkpscdttc99ro834zhwuftrtmhbnidnmrkyz4xr",
        "Vote": "20100000000000000"
      },
      {
        "Account": "qlc_3yefwog1ojkcsbxfwfdctyydkxsjofh9s7xy3jpt3n33m7mfqxmpchjazgnu",
        "Vote": "20100000000000000"
      },
      {
        "Account": "qlc_1d5zregxfjgd6cegrbhisajebia85qrfjkk49gtn8u93btdo55kmqg89ba1h",
        "Vote": "100000000000000"
      },
      {
        "Account": "qlc_3ix9hyt3shurhnp4jmuc6whz4zb37wfq4ifxh1b9j5jgkkawscf7j1df91pz",
        "Vote": "100000000000000"
      }
    ],
    "ValidVotes": "40200000000000000",
    "ValidVotesPercent": "67.00%"
  }
}
```

```json test
{
	"jsonrpc": "2.0",
	"id":18,
	"method":"net_onlineRepsInfo"
}
```

:::