# Net


**支持的调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe |
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



## net_peersCount

返回网络中的节点个数

- **Parameters**: 无

- **Returns**: 
  - `peersCount` 
    - `all`: 网络所有的节点个数
    - `connect`: 与当前节点建立连接的节点个数
    - `online`: 网络中所有在线节点

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

返回所有网络中的节点详情

- **Parameters**: 
  - `count`:  返回节点个数
  - `offset`: 偏移量
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

返回网络中在线节点的详情

- **Parameters**: 
  - `count`:  返回节点个数
  - `offset`: 偏移量
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

返回当前节点连接的节点详情

- **Parameters**: 
  - `count`:  返回个数
  - `offset`: 偏移量
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



## net_getBandwidthStats

返回带宽指标

- **Parameters**: `null`
- **Returns**:
  - `带宽状态`:
    - `TotalIn TotalOut`：`TotalIn和TotalOut字段记录已发送/已接收的累积字节。`
    - `RateIn RateOut`   ：`RateIn和RateOut字段记录每秒发送/接收的字节数。`
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

返回在线代表信息，在线权重总量以及在线权重占全网权重的百分比

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