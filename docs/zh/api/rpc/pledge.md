# Pledge

**支持调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe |
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |


## pledge_searchPledgeInfo
根据抵押参数返回抵押合约的数据 ，如果有多笔相同的抵押，则按时间先手顺序返回
- **Parameters**: 
  - `pledgeParams`:  抵押参数
    - beneficial：受益人账户
    - amount：抵押金额
    - pType：抵押类型
  
- **Returns**: 
  - `string`:  抵押数据

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_searchPledgeInfo",
	"params": [
		{
			"beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
			"amount": "2000000000000000",
			"pType": "vote"
		}
	]
}

```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "PType": "vote",
      "Amount": 2000000000000000,
      "WithdrawTime": "2019-04-28 19:02:34 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "fgkhlfkv903ffe11a256fd8e7bbda9dff5021fbc261f2d93971028fcfhgk67"
    },
    {
      "PType": "vote",
      "Amount": 2000000000000000,
      "WithdrawTime": "2019-04-28 19:02:37 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "e11e0d9a96f5fe11a256fd8e7bbda9dff5021fbc261f2d93971028fcaad5642"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_searchPledgeInfo",
	"params": [
		{
			"beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
			"amount": "2000000000000000",
			"pType": "vote"
		}
	]
}
```

:::




## pledge_searchAllPledgeInfo
返回所有的抵押合约数据
- **Parameters**: 
    - `pledgeParams`:  无
- **Returns**: 
  - `string`: 所有的抵押合约数据

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_searchAllPledgeInfo",
	"params": [
	]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "PType": "network",
      "Amount": 40000000000000,
      "WithdrawTime": "2019-04-28 19:04:06 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "hbvf56djkob7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aecesdcbh"
    },
    {
      "PType": "vote",
      "Amount": 2000000000000000,
      "WithdrawTime": "2019-04-28 19:04:11 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "thjri73363b7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aecesdcbh"
    },
    {
      "PType": "vote",
      "Amount": 1000000000000000,
      "WithdrawTime": "2019-04-28 19:04:47 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "afgee73363b7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aece11527"
    }
  ]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_searchAllPledgeInfo",
	"params": [
	]
}
```

:::
