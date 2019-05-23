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





## rewards_getConfidantRewords

根据confidant地址查询获得的空投总量

- **Parameters**: 
  - `string`: confidant地址 
- **Returns**: 
  - `map[string]uint64`: 各个设备获得的空投总量
    - `key`: 设备ID的hash
    - `value`: 获得的空投量
    

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getConfidantRewords",
	"params": [
        "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"
	]
}


```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"657b75d793dbb31d8db4716e53590e54712ac235afd33b9cd1711333e094c101": 10000000,
		"31774e65e074922542fa76f0980e6a55437ea44dfa573812d2d247e380f575ee": 20000000
	}
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rewards_getConfidantRewords",
	"params": [
	]
}


```

:::







