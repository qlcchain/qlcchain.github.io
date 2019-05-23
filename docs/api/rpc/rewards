# Rewards

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



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





## rewards_getConfidantRewords
returns airdrop amount for a specific confidant address 
- **Parameters**: 
  - `string`: confidant address 
- **Returns**: 
  - `map[string]uint64`: airdrop amount of each confidant 
    - `key`: hash of confidant id
    - `value`: airdrop amount
    
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








