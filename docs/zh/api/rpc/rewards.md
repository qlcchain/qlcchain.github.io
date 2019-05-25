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




