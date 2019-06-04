# Rewards

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## rewards_getReceiveRewardBlock

returns airdrop contract reward block by contract send block hash
- **Parameters**: 
  - `string`: contract send block hash 
- **Returns**: 
  - `block`: contract reward block

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getReceiveRewardBlock",
	"params": [
        "04223e8259cf00b84cfe31ef895073a4154ac88c66c43efa977b9c8c714fbeda"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
      "type": "ContractReward",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
      "balance": "0",
      "vote": "0",
      "network": "20000000000",
      "storage": "0",
      "oracle": "0",
      "previous": "fec7c242f19bca90506367ce727573dc7cd77c10eac32e00bae6cfea3897987a",
      "link": "6a8460b892377e044178ef6f97e9b6c085016234f8e387424fc85ef412c65021",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO5rKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABc54XBbAss3VM+46IWaPGZ4RH2yGFAQOYOcKc6tsjaA28qete/hsg/tL+59Jubj6WTyM9BKMniFyDEh1ZbUvxmQKno8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA2ZmRlY2Y4ZGJjYjgzMDEzMWJiN2NmYjE4ZGI3NmYxZDhiMmFjZjhkZjEwZDhmOGVmZGRhN2ZhOGQ1MTZlNjZl",
      "povHeight": 0,
      "timestamp": 1558676751,
      "extra": "5055b5ab0b0ea44895f1e3099ec59ee579f4194fbe01ee70390db53e4b9d5343",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000000203df2",
      "signature": "9f19b41b3c125169c978d004539109329f9567a78f3d75f68e1fd9a5cb4d83281b53a6150b8efc31bda81ffe54c36456d91c12dc76358a22e72f19f80ba1110f"
    }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getReceiveRewardBlock",
	"params": [
        "04223e8259cf00b84cfe31ef895073a4154ac88c66c43efa977b9c8c714fbeda"
	]
}


```

:::



## rewards_getTotalRewards
returns total airdrop qgas amount for a specific pledge 
- **Parameters**: 
  - `string`:  transaction id for the pledge
- **Returns**: 
  - `uint64`: total rewards

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

returns airdrop qgas reward detail info for a specific pledge
 
- **Parameters**: 
  - `string`:  transaction id for the pledge
- **Returns**: 
  - `rewardsInfo`: rewards detail

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
returns airdrop qgas rewards for a specific confidant address 
- **Parameters**: 
  - `string`:  confidant address 
- **Returns**: 
  - `map`: rewards
        - `key`: hash of confidant Id
        - `value`: rewards amount

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
returns airdrop qgas rewards detail info for a specific confidant address

- **Parameters**: 
  - `string`:  confidant address 
- **Returns**: 
  - `rewardsInfo`: detail info for rewards

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

