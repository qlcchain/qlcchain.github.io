# Pledge

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe |
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |


## pledge_getPledgeInfo
Return pledge data by pledge parameters ，if there are multiple identical pledge in the query result, it will be returned in time order
- **Parameters**: 
  - `pledgeParams`:  pledge parameters
    - beneficial：beneficial account
    - amount：amount of pledge
    - pType：type of pledge
  
- **Returns**: 
  - `pledgeInfo`:  data for pledge

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeInfo",
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
	"method": "pledge_getPledgeInfo",
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




## pledge_getAllPledgeInfo
Return all pledge info
- **Parameters**: 
    - `pledgeParams`:  `null`
- **Returns**: 
  - `[]pledgeInfo`: all pledge data

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getAllPledgeInfo",
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
	"method": "pledge_getAllPledgeInfo",
	"params": [
	]
}


```

:::



## pledge_getTotalPledgeAmount
returns total pledge amount on chain
- **Parameters**: 
  - `pledgeParams`:  `null`
- **Returns**: 
  - `uint64`:total pledge amount on chain 

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getTotalPledgeAmount",
	"params": [
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
	"method": "pledge_getTotalPledgeAmount",
	"params": [
	]
}


```

:::




