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



