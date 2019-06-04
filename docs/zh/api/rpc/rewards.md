# Rewards

**支持的调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



## rewards_getTotalRewards
根据抵押的交易ID查询获得的空投gas总量

- **Parameters**: 
  - `string`:  抵押的交易ID
- **Returns**: 
  - `uint64`: 获得的空投总量

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getTotalRewards",
	"params": [
        "04223e8259cf00b84cfe31ef895073a4154ac88c66c43efa977b9c8c714fbeda"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 14000000000
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getTotalRewards",
	"params": [
	]
}


```

:::






## rewards_getRewardsDetail
根据抵押的交易ID查询获得空投的详情
 
- **Parameters**: 
  - `string`:  抵押的交易ID
- **Returns**: 
  - 空投详情

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getRewardsDetail",
	"params": [
		"7f3603fab53c3917e272090892937e15c954bc470ca4a5dcdfe5b58962f2b809"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "type": 1,
      "from": "qlc_1kk5xst583y8hpn9c48ruizs5cxprdeptw6s5wm6ezz6i1h5srpz3mnjgxao",
      "to": "qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
      "txHeader": "49af41404159bc8380aacbaecbf36e4b67b062854dcc5eefca646e9d8e7fcd71",
      "rxHeader": "50c0fb145315848e4fa44a8e61275fcfef7fc4ea90baac2dca3aff46b39d35c2",
      "amount": 342886408035
    },
    {
      "type": 1,
      "from": "qlc_1kk5xst583y8hpn9c48ruizs5cxprdeptw6s5wm6ezz6i1h5srpz3mnjgxao",
      "to": "qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
      "txHeader": "51264065dc0a5cdf58be3d38763cdebeec583a435cc3d1b0cc65f3ddf3e96fa4",
      "rxHeader": "e2ba46887d7bd1c6248191920c3f69eb99d9ffb16d73104d1637707c17182992",
      "amount": 535574894684
    },
    {
      "type": 1,
      "from": "qlc_1kk5xst583y8hpn9c48ruizs5cxprdeptw6s5wm6ezz6i1h5srpz3mnjgxao",
      "to": "qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
      "txHeader": "9fe8c2784600948cf76e89c02f24de110541910ed2d00ffab7ca2d8e6b4d7986",
      "rxHeader": "95036ca89e7ce87daf1e88d2a80b537e804376d4b8b851506686e07a300b716a",
      "amount": 342858086817
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getRewardsDetail",
	"params": [
		"7f3603fab53c3917e272090892937e15c954bc470ca4a5dcdfe5b58962f2b809"
	]
}


```

:::


## rewards_getConfidantRewards

根据confidant地址查询confidant的空投收益

- **Parameters**: 
  - `string`:  confidant地址 
- **Returns**: 
  - `map`: 空投收益
        - `key`: confidant id的hash值
        - `value`: 收益量

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getConfidantRewards",
	"params": [
		"qlc_3947hepb6ipq1m8b1jdbi6h7te3epqiakeb1j59ppwmi7wnj5optopsdgo5g"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "6ba9a8dff67863b72a77b07fce4e0ba08da9b36c662bdba4371e784e882c6e73": 2742934081058
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getConfidantRewards",
	"params": [
		"qlc_3947hepb6ipq1m8b1jdbi6h7te3epqiakeb1j59ppwmi7wnj5optopsdgo5g"
	]
}


```

:::


## rewards_getConfidantRewordsDetail

根据confidant的地址查询空投详情

- **Parameters**: 
  - `string`:  confidant地址 
- **Returns**: 
  - 空投详情

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getConfidantRewordsDetail",
	"params": [
		"qlc_3947hepb6ipq1m8b1jdbi6h7te3epqiakeb1j59ppwmi7wnj5optopsdgo5g"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "6ba9a8dff67863b72a77b07fce4e0ba08da9b36c662bdba4371e784e882c6e73": [
      {
        "type": 0,
        "from": "qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
        "to": "qlc_3947hepb6ipq1m8b1jdbi6h7te3epqiakeb1j59ppwmi7wnj5optopsdgo5g",
        "txHeader": "95036ca89e7ce87daf1e88d2a80b537e804376d4b8b851506686e07a300b716a",
        "rxHeader": "1e1845e9a59b9f7d6d18e8db57ce7d95a035559c05ab3647b418aff07b1e0ffb",
        "amount": 342872246841
      },
      {
        "type": 0,
        "from": "qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
        "to": "qlc_3947hepb6ipq1m8b1jdbi6h7te3epqiakeb1j59ppwmi7wnj5optopsdgo5g",
        "txHeader": "6a79808ff869a0093e2a21427a86dc2225eaec1aea8ba41d071fb5d5a9e684eb",
        "rxHeader": "99368a59eb0341e5046322e317bfe23f3f96f78f5ea98a23d13a82e4796f2684",
        "amount": 342886408035
      }
    ]
  }


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getConfidantRewordsDetail",
	"params": [
		"qlc_3947hepb6ipq1m8b1jdbi6h7te3epqiakeb1j59ppwmi7wnj5optopsdgo5g"
	]
}


```

:::

