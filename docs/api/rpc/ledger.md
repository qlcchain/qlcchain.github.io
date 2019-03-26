
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
  -  `[]block`: blocks for the account

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

## ledger_accountInfo
Return account detail info, include each token in the account

- **Parameters**: 
    - `string` : the account address
  
- **Returns**: 
    - `account` :  the account address
    - `coinBalance` : balance of main token of the account (default is QLC)
    - `representative` : representative address of the account
    - `[]token`: each token info for the account, 

|     field      |  type  |                 describe                  |
| :------------: | :----: | :---------------------------------------: |
|      type      | string |                token hash                 |
|     header     | string | the latest block hash for the token chain |
| representative | string |          representative address           |
|      open      | string |  the open block hash for the token chain  |
|    balance     | string |           balance for the token           |
|    account     | string |        account that token belong to        |
|    modified    | int64  |                 timestamp                 |
|   blockCount   |  int   |    total block number for the token chain    |
|   tokenName    | string |                token name                 |
|    pending     | string |              pending amount               |



- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_accountInfo",
	"params": [
		"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "account": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
    "coinBalance": "40000000000000",
    "representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
    "tokens": [
      {
        "type": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
        "header": "758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1",
        "representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
        "open": "758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1",
        "balance": "40000000000000",
        "account": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
        "modified": 1552455585,
        "blockCount": 1,
        "tokenName": "QLC",
        "pending": "0"
      }
    ]
  }
}

```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_accountInfo",
	"params": [
		"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44"
	]
}


```
:::


## ledger_accountRepresentative
Return the representative address for account

- **Parameters**: 
  - `string` : the account address
  
- **Returns**: 
  - `string`: representative address for the account (if account not found, return error)

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_accountRepresentative",
	"params": [
		"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_accountRepresentative",
	"params": [
		"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44"
	]
}


```
:::


## ledger_accountVotingWeight
Return the vote weight for account

- **Parameters**: 
  - `string` : the account address
  
- **Returns**: 
  - `string`: the vote weight for the account  (if account not found, return error)

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_accountVotingWeight",
	"params": [
		"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44"
	]
}

```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "600000000000"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_accountVotingWeight",
	"params": [
		"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44"
	]
}


```
:::


## ledger_accounts
Return account list of chain

- **Parameters**: 
    - `int`: number of accounts to return 
    - `int`: `optional` , offset, index of account where to start, default is 0

  
- **Returns**: 
  - `[]address`: addresses list of accounts

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_accounts",
	"params": [
		5,
		5
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": [
    "qlc_1cnripmqjj3f8ag3fdgaxku1wdw5ik6d9rsyze8umst7kjghdd1cqrxxm5zh",
    "qlc_1q1jog6eywemc6am4etjx68yegbjy6d1o594j11xs7jsc7rwdh3kej8yzbrg",
    "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
    "qlc_3c6ezoskbkgajq8f89ntcu75fdpcsokscgp9q5cdadndg1ju85fief7rrt11",
    "qlc_3nihnp4a5zf5iq9pz54twp1dmksxnouc4i5k4y6f8gbnkc41p1b5ewm3inpw"
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_accounts",
	"params": [
		5,
		5
	]
}


```
:::
