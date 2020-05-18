# Net

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe |
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



## net_peersCount
Return peers count

- **Parameters**: `none`
  
- **Returns**: 
  - `peersCount` 
  - `all`: all nodes in the network
    - `connect`: how many nodes are connected
    - `online`: online nodes in the network
  
- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":2,
  "method":"net_peersCount"
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": {
    "all": 3,
    "connect": 2,
    "online": 3
  }
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":2,
  "method":"net_peersCount"
}
```
:::



## net_getAllPeersInfo

Return all peers info in the network

- **Parameters**: 
  - `count`:  number of returned peers
  - `offset`: offset of all peers records
- **Returns**: 
  - `peer details`：`peerid`,`address`,`version`,`rtt`,`lastUpdateTime`
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "net_getAllPeersInfo",
	"params": [
		3,
		0
	]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": [
    {
      "peerid": "QmToDLHJJ8mgSZcWewTyWBiArqmNMfLhGGkJpA5E62M6yW",
      "address": "/ip4/10.128.0.5/tcp/19734",
      "version": "v1.3.4-b444edc",
      "rtt": 0.000722892,
      "lastUpdateTime": "2020-03-03T05:34:47Z"
    },
    {
      "peerid": "QmUGgsPH6kaZFHCy392vBDYqZC3HPexewuZrSoEHgNaHYz",
      "address": "/ip4/10.128.0.7/tcp/19734",
      "version": "v1.3.4-055c231",
      "rtt": 0.000471442,
      "lastUpdateTime": "2020-03-06T06:33:37Z"
    },
    {
      "peerid": "QmfMSZSGBaLobW6WKzqaVhXnbVg8kJEaRbWyEfsxi94dMw",
      "address": "/ip4/10.128.0.6/tcp/19734",
      "version": "v1.3.4-055c231",
      "rtt": 0.000746629,
      "lastUpdateTime": "2020-03-06T06:33:37Z"
    }
  ]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "net_getAllPeersInfo",
	"params": [
		3,
		0
	]
}
```

:::



## net_getOnlinePeersInfo

Return online peers info in the network

- **Parameters**: 
  - `count`:  number of returned peers
  - `offset`: offset of online peers
- **Returns**: 
  - `peer details`：`peerid`,`address`,`version`,`rtt`,`lastUpdateTime`
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "net_getOnlinePeersInfo",
	"params": [
		3,
		0
	]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": [
    {
      "peerid": "QmToDLHJJ8mgSZcWewTyWBiArqmNMfLhGGkJpA5E62M6yW",
      "address": "/ip4/0.0.0.0/tcp/19734",
      "version": "",
      "rtt": 0,
      "lastUpdateTime": "2020-03-06T06:42:07Z"
    },
    {
      "peerid": "QmfMSZSGBaLobW6WKzqaVhXnbVg8kJEaRbWyEfsxi94dMw",
      "address": "/ip4/10.128.0.6/tcp/19734",
      "version": "v1.3.4-055c231",
      "rtt": 0.000899847,
      "lastUpdateTime": "2020-03-06T06:42:07Z"
    },
    {
      "peerid": "QmUGgsPH6kaZFHCy392vBDYqZC3HPexewuZrSoEHgNaHYz",
      "address": "/ip4/10.128.0.7/tcp/19734",
      "version": "v1.3.4-055c231",
      "rtt": 0.000730122,
      "lastUpdateTime": "2020-03-06T06:42:07Z"
    }
  ]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "net_getOnlinePeersInfo",
	"params": [
		3,
		0
	]
}
```

:::



## net_connectPeersInfo

Return connect peers info

- **Parameters**: 
  - `count`:  number of returned peers
  - `offset`: offset of connect peers
- **Returns**: 
  - `peer details`：`peerid`,`address`,`version`,`rtt`,`lastUpdateTime`
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "net_connectPeersInfo",
	"params": [
		2,
		0
	]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": [
    {
      "peerid": "QmfMSZSGBaLobW6WKzqaVhXnbVg8kJEaRbWyEfsxi94dMw",
      "address": "/ip4/10.128.0.6/tcp/19734",
      "version": "v1.3.4-055c231",
      "rtt": 0.000870462,
      "lastUpdateTime": "2020-03-06T06:43:37Z"
    },
    {
      "peerid": "QmUGgsPH6kaZFHCy392vBDYqZC3HPexewuZrSoEHgNaHYz",
      "address": "/ip4/10.128.0.7/tcp/19734",
      "version": "v1.3.4-055c231",
      "rtt": 0.000461146,
      "lastUpdateTime": "2020-03-06T06:43:37Z"
    }
  ]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "net_connectPeersInfo",
	"params": [
		2,
		0
	]
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
	"id": 3,
	"method": "net_onlineRepsInfo",
	"params": [
		3,
		0
	]
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



## net_getPeerId

Return node peerid

- **Parameters**: `null`
- **Returns**:
  - ` peerid`
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "net_getPeerId",
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": "QmX9JEPNShHB8dF7iWSCJHERY2oU6gjZBM953och3CvS3X"
}
```

```json test
{
	"jsonrpc": "2.0",
	"id":18,
	"method":"net_getPeerId"
}
```

:::
