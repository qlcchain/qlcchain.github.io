
# Ledger

**Supported protocols:**

| JSON-RPC 2.0 | HTTP |Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|:-----:|
| &#x2713; | &#x2713; | &#x2713; | &#x2713;|TBD |

## ledger_accountBlocksCount
Return number of blocks for a specific account

- **Parameters**: 
  - `string` : the account address
  
- **Returns**: 
  -  `int`: blocks number for the account

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"ledger_accountBlocksCount",
  "params":  ["qlc_1x8zh6nd55gfaptrqkyecr3ms6mcmidzyb3d16zf9wtiipsjkqiie6saqs1q"]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result":10
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"ledger_accountBlocksCount",
  "params":  ["qlc_1fx7t3nppodq5tf16mdkzah8b5u1z34u3g44scmqf3a1hozfmqq915m4srqj"]
}


```
:::


## ledger_accountHistoryTopn
Return blocks for the account, include each token of the account and order of blocks is forward from the last one

- **Parameters**: 
    - `string` : the account address
    - `int`:  number of blocks to return 
    - `int`:  `optional` , offset, index of block where to start, default is 0

  
- **Returns**: 
  -  `[]Block`: blocks for the account

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_accountHistoryTopn",
	"params": [
		"qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
		5,
        5
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "type": "Receive",
      "token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
      "address": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
      "balance": "3300000000000",
      "previous": "0231d0aa82df9a2e9cf074e9481f1d38982b56b8c1b4f04904657ede5f22e702",
      "link": "0e8c6e1c7d30e13d1167660bd76fdb3bb38a951cc6684cf66f720355d89becc9",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "quota": 0,
      "timestamp": 1552454728,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "work": "000000000014d619",
      "signature": "81bf5ad2cf694ed8cc51514c0834c4d2dce0c384b5a2fea24d3919fb5cd587cb8e5c5499f38e14ffd9b367fc95050a2761df8f0df1c1e1bd067f05e881235708",
      "tokenName": "QLC",
      "amount": "2200000000000",
      "hash": "27751229f46e99b88a7503708eceab833b9ad03685591d494b412c4b37d85318"
    },
    {
      "type": "Open",
      "token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
      "address": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
      "balance": "1100000000000",
      "previous": "0000000000000000000000000000000000000000000000000000000000000000",
      "link": "d1a60317af550d4836d78e235fd6c729f0516260a9c09e44db30411743c15e6e",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "quota": 0,
      "timestamp": 1552453874,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "work": "000000000000e408",
      "signature": "719619313b8b0d08fc35a446bc7e41e258fc3c5fe99df3ae7868fc59a70b362aaec10c69b96f44d8082f8f59d12727bed93ed88762f352cb0c0c21ad70350d0e",
      "tokenName": "QLC",
      "amount": "1100000000000",
      "hash": "0231d0aa82df9a2e9cf074e9481f1d38982b56b8c1b4f04904657ede5f22e702"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_accountHistoryTopn",
	"params": [
		"qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
		5,
        5
	]
}


```
:::
