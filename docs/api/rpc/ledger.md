
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



## ledger_accountsBalances
Returns balance and pending (amount that has not yet been received) for each account 
- **Parameters**: 
  - `[]string`:  addresses list
  
- **Returns**: 
  - balance and pending amount of each token for  each account

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_accountsBalances",
	"params": [
		[
			"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic"
		]
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": {
    "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44": {
      "QLC": {
        "balance": "10000000000",
        "pending": "100"
      },
      "QN": {
        "balance": "1010000000",
        "pending": "0"
      }
    },
    "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic": {
      "QLC": {
        "balance": "100000000000",
        "pending": "0"
      }
    }
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_accountsBalances",
	"params": [
		[
			"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic"
		]
	]
}


```
:::



## ledger_accountsPending
Return pending info for accounts

- **Parameters**: 
  - `[]string`:  addresses list for accounts
  - `int`: get the maximum number of pending for each account, if set -1, return all pending
  
- **Returns**: 
  - pending info for each token of each account, means:
    - `tokenName` :  token name
    - `type` :  token type
    - `source` :  sender account of transaction
    - `amount` : amount of transaction
    - `hash` : hash of send block 
    - `timestamp`: timestamp


- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_accountsPending",
	"params": [
		[
		"qlc_114uzirae3kz7emrm58mtonjpcbdem6es7xewcnxe719sabqc17m4ycqng13","qlc_3bbupqkeydr9fy535hryyrdbkw934mzwm1zjwytygkn63qbjjq5wou63399d"
		],
		-1
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": {
    "qlc_114uzirae3kz7emrm58mtonjpcbdem6es7xewcnxe719sabqc17m4ycqng13": [],
    "qlc_3bbupqkeydr9fy535hryyrdbkw934mzwm1zjwytygkn63qbjjq5wou63399d": [
      {
        "source": "qlc_36z9ojcgu6891jhcae6jd4a3dmxr8urx55516y4e7rqr9bob8kec1ddpemyt",
        "amount": "30000000000",
        "type": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
        "tokenName": "QLC",
        "hash": "dbb764589e9e9e5b5ff7fdb1cf1a6f01e4483d7d376de71736eb4869a361110d",
        "timestamp": 1553225891
      }
    ],
    "qlc_3d3mmy9stq1dqx9hagh71bmixzcxuminjphq1paox9e3gxgxjtgwu4qbzho8": []
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_accountsPending",
	"params": [
		[
		"qlc_114uzirae3kz7emrm58mtonjpcbdem6es7xewcnxe719sabqc17m4ycqng13","qlc_3bbupqkeydr9fy535hryyrdbkw934mzwm1zjwytygkn63qbjjq5wou63399d"
		],
		-1
	]
}


```
:::



## ledger_accountsCount
Return total number of accounts of chain
- **Parameters**: `null`
  
- **Returns**: 
  - `int`:  total number of accounts 

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":2,
  "method":"ledger_accountsCount"
}


```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 2,
    "result": 10
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":2,
  "method":"ledger_accountsCount"
}


```
:::



## ledger_blockAccount
Return the account that the block belong to

- **Parameters**: 
  - `string`:  block hash
  
- **Returns**: 
  - `string`: the account address (if block not found, return error)

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_blockAccount",
	"params": [
		"758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1"
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
	"method": "ledger_blockAccount",
	"params": [
		"758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1"
	]
}


```
:::


## ledger_blockHash
Return hash for the block 

- **Parameters**: 
  - `block`: block info
  
- **Returns**: 
  - `string`: block hash

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "ledger_blockHash",
	"params": [
		{
			"type": "Send",
			"token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
			"address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"balance": "9800000000000000",
			"previous": "200e172c39ddb3699d7252fd08ee47c3d19ec18351d2a2b23424b8852434e980",
			"link": "5ddd17a268272f89aaaa061b24441bfb9b46af4036e37fd6fa08c8bdbce44a48",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"quota": 0,
			"timestamp": 1552629044,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"work": "0000000000243a87",
			"signature": "1b87dd68b282d3fe81b516e31be61f6d6542a1440d2786fa394e35d923d0a1d3ed5a9fc22e16af80f27ca75884182fcf507e1f80880f0ddf4c999a5fa9fd2a03",
			"tokenName": "QLC",
			"amount": "10000000000000",
			"hash": "fc30c65c808eab537ad2bf4c72ed6e3b6635bf1cd65f965c3fabf56ad52c79ba"
		}
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": "fc30c65c808eab537ad2bf4c72ed6e3b6635bf1cd65f965c3fabf56ad52c79ba"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "ledger_blockHash",
	"params": [
		{
			"type": "Send",
			"token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
			"address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"balance": "9800000000000000",
			"previous": "200e172c39ddb3699d7252fd08ee47c3d19ec18351d2a2b23424b8852434e980",
			"link": "5ddd17a268272f89aaaa061b24441bfb9b46af4036e37fd6fa08c8bdbce44a48",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"quota": 0,
			"timestamp": 1552629044,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"work": "0000000000243a87",
			"signature": "1b87dd68b282d3fe81b516e31be61f6d6542a1440d2786fa394e35d923d0a1d3ed5a9fc22e16af80f27ca75884182fcf507e1f80880f0ddf4c999a5fa9fd2a03",
			"tokenName": "QLC",
			"amount": "10000000000000",
			"hash": "fc30c65c808eab537ad2bf4c72ed6e3b6635bf1cd65f965c3fabf56ad52c79ba"
		}
	]
}


```
:::



## ledger_blocks
Return blocks list of chain
- **Parameters**: 
    - `int`: number of blocks to return 
    - `int`: `optional`, offset, index of block where to start, default is 0
  
- **Returns**: 
    - `[]block`:  blocks list

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "ledger_blocks",
	"params": [
		5,
		5
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": [
    {
      "type": "Send",
      "token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
      "address": "qlc_1q1jog6eywemc6am4etjx68yegbjy6d1o594j11xs7jsc7rwdh3kej8yzbrg",
      "balance": "40000000000",
      "previous": "af5da09dfc9c23d5c208bb54c2e276dc4b0bee4d3df958d9234728e78a4b1b46",
      "link": "2a9885a778c42d321c16adc8ecb60e2f838488b3e33efb0db9e745945cf5ac0a",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "quota": 0,
      "timestamp": 1553990410,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_1q1jog6eywemc6am4etjx68yegbjy6d1o594j11xs7jsc7rwdh3kej8yzbrg",
      "work": "00000000007b4d66",
      "signature": "68d9edd802ab5078fb90993d6ce1c75395ce0b78854a54bcf7f3a9ffcfa5e73bb0d649c1dde796ec957d3ee07e00b6a945eb8964624459c2557b568fa491c20e",
      "tokenName": "QLC",
      "amount": "600000",
      "hash": "ae114fe97a4bc525d3771e3651cf0a0c0a55ab449dee213c470cecaeec77e7c6"
    },
    {
      "type": "Open",
      "token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
      "address": "qlc_1q1jog6eywemc6am4etjx68yegbjy6d1o594j11xs7jsc7rwdh3kej8yzbrg",
      "balance": "100000000000",
      "previous": "0000000000000000000000000000000000000000000000000000000000000000",
      "link": "5c11ab88cf71935111313351e90de63931f1160a8ce28801dc96395171c5bc32",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "quota": 0,
      "timestamp": 1553990411,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_1q1jog6eywemc6am4etjx68yegbjy6d1o594j11xs7jsc7rwdh3kej8yzbrg",
      "work": "0000000000271561",
      "signature": "ea76053ee94a73961ece8d9c7cd7a5e8d89ce8ff9b67fbca652c950cab4f96f79e544882644d5bf9f841808f4651ea8598c970996808676b7a028f910eb11e03",
      "tokenName": "QLC",
      "amount": "1000000",
      "hash": "af5da09dfc9c23d5c208bb54c2e276dc4b0bee4d3df958d9234728e78a4b1b46"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "ledger_blocks",
	"params": [
		5,
		5
	]
}


```
:::



## ledger_blocksCountByType
Report number of blocks by type of chain
- **Parameters**: `null`
  
- **Returns**: 
  - number of blocks for each type

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"ledger_blocksCountByType"
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "Change": 2,
    "ContractRefund": 0,
    "ContractReward": 1,
    "ContractSend": 1,
    "Open": 5,
    "Receive": 1,
    "Send": 3
  }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"ledger_blocksCountByType"
}


```
:::



## ledger_blocksInfo
Return blocks info for blocks hash
- **Parameters**: 
  - `[]string`:  blocks hash
  
- **Returns**: 
  - `[]block`:   blocks info 

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_blocksInfo",
	"params": [
		[
			"1792bad5a68be9c4d13e010f43a119c4d37be20142061d63f2f866a13cdb72c2",
			"5f03854f8b14c7d6a2be18ea6d271c59830b85a3cb33a7e175644e2be5cc3854"
		]
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": [
    {
      "type": "Open",
      "token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
      "address": "qlc_13u8auukg1tjbmny1b6bxh91ysx6m3ikce9tuztw8tc3wzd58dyoy7x9oa7c",
      "balance": "100000000000",
      "previous": "0000000000000000000000000000000000000000000000000000000000000000",
      "link": "0000000000000000000000000000000000000000000000000000000000000000",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "quota": 0,
      "timestamp": 1553493453,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_13u8auukg1tjbmny1b6bxh91ysx6m3ikce9tuztw8tc3wzd58dyoy7x9oa7c",
      "work": "0000000000250b0f",
      "signature": "cda41b88a4c04dbca572922a8a324e4bb247ec6002ef2f5fcd8cdb53c4781cf80d153a62938842caf182ea8f4fb91a719f62f0d71138f0e80e8f38a18daa0809",
      "tokenName": "QLC",
      "amount": "100000000000",
      "hash": "1792bad5a68be9c4d13e010f43a119c4d37be20142061d63f2f866a13cdb72c2"
    },
    {
      "type": "Open",
      "token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
      "address": "qlc_1izo13skbqk1acazyug1cm9qazsczin5un66akmz8gd3ikmzbso1rt51cyjn",
      "balance": "6495",
      "previous": "34ddaa0140995e6a04850aa71a12ff46024e25a66bf01f28243efe202c515127",
      "link": "0000000000000000000000000000000000000000000000000000000000000000",
      "sender": "MTYw",
      "receiver": "MTgw",
      "message": "15c656f49d59e1dd02107700d3f349a946ee80d4bd7dce25cbc558841f67e72e",
      "quota": 0,
      "timestamp": 0,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "work": "0000000000000000",
      "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "tokenName": "QLC",
      "amount": "6495",
      "hash": "5f03854f8b14c7d6a2be18ea6d271c59830b85a3cb33a7e175644e2be5cc3854"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_blocksInfo",
	"params": [
		[
			"1792bad5a68be9c4d13e010f43a119c4d37be20142061d63f2f866a13cdb72c2",
			"5f03854f8b14c7d6a2be18ea6d271c59830b85a3cb33a7e175644e2be5cc3854"
		]
	]
}


```
:::


## ledger_chain
Accept a specific block hash and return a consecutive blocks hash list， starting with this block, and traverse forward to the maximum number 
- **Parameters**: 
  - `string` : block hash to start at 
  - `int`: get the maximum number of blocks, if set n to -1,  will list blocks to open block

- **Returns**: 
  - `[]string`:  block hash list

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"ledger_chain",
  "params":  ["203042e945be24f6c177846ad101a3f9e829e7f1d314bad323578508af23dd28",2]
}


```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": [
        "203042e945be24f6c177846ad101a3f9e829e7f1d314bad323578508af23dd28",
        "35db29e4022cca1416f7b2327e9965d3e399b9f8a9b7bf7b712a0217bc34afc6"
    ]
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"ledger_chain",
  "params":  ["203042e945be24f6c177846ad101a3f9e829e7f1d314bad323578508af23dd28",2]
}


```
:::

