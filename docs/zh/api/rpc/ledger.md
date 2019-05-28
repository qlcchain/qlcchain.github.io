
# Ledger

**支持调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## ledger_accountBlocksCount

返回指定账户对应的区块总数量

- **Parameters**: 
  - `string` : 账户地址
  
- **Returns**: 
  -  `int`: 区块数量

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

返回指定账户对应的区块，包含账户下的每个token，返回区块顺序从最后一个区块开始，向前遍历到指定数量

- **Parameters**: 
    - `string` : 账户地址
    - `int`:  需要返回的区块数量
    - `int`:  偏移量，表示从第几个区块开始查询，可空，如果不设置，默认为0
  
- **Returns**: 
  -  `[]block`: 查询到的区块信息

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
返回账户的详细信息，包含该账户下的每个token

- **Parameters**: 
    - `string` : 账户地址
  
- **Returns**: 
    - `account` :  账户地址
    - `coinBalance` : 该账户下的主token（默认为QLC）
    - `vote`,`network`,`storage`,`oracle`: 账户获得的权益，如果该账户没有QLC，这些字段为空
    - `representative` : 该账户的代表账户的地址
    - `[]token`: 账户下每个token的信息

|     字段      |  类型  |                 描述                  |
| :------------: | :----: | :---------------------------------------: |
|      type      | string |                token hash                 |
|     header     | string | 该token所在链的最后一个区块 |
| representative | string |          代表账户的地址          |
|      open      | string |  该token所在链的第一个区块  |
|    balance     | string |          余额          |
|    account     | string |        该token所在的地址        |
|    modified    | int64  |                 时间戳                 |
|   blockCount   |  int   |   该token所在链的区块总量    |
|   tokenName    | string |                token名称                 |
|    pending     | string |              待接收数量              |



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
    "account": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
    "coinBalance": "0",
    "vote": "4400000000",
    "network": "0",
    "storage": "0",
    "oracle": "0",
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
返回该账户的代表账户

- **Parameters**: 
  - `string` : 账户地址
  
- **Returns**: 
  - `string`: 代表账户的地址

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
返回该账户的投票权重

- **Parameters**: 
  - `string` : 账户地址
  
- **Returns**: 
  - `string`: 投票权重 

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

返回链上的账户地址列表

- **Parameters**: 
    - `int`: 返回的账户数量
    - `int`:  偏移量，表示从第几个账户开始返回。可空，如果不设置，则返回0

  
- **Returns**: 
  - `[]address`: 账户地址列表

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


## ledger_accountsBalance

返回每个账户下各个token的余额和待接收数量，如果token为QLC，则同时返回vote，oracle，network，storage字段

- **Parameters**: 
  - `[]string`: 账户的地址列表
  
- **Returns**: 
  - 每个账户下各个token的余额情况

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_accountsBalance",
	"params": [
		[
			"qlc_1kk5xst583y8hpn9c48ruizs5cxprdeptw6s5wm6ezz6i1h5srpz3mnjgxao",
			"qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
			"qlc_3agkmeufj9z7ntkm8nf7o8e9w3b3tuqyyud5uc5iywajrgxz9re4w7m3pgdx"
		]
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "qlc_1kk5xst583y8hpn9c48ruizs5cxprdeptw6s5wm6ezz6i1h5srpz3mnjgxao": {
      "QGAS": {
        "balance": "474263800000132",
        "pending": "0"
      }
    },
    "qlc_3agkmeufj9z7ntkm8nf7o8e9w3b3tuqyyud5uc5iywajrgxz9re4w7m3pgdx": {
      "QLC": {
        "balance": "0",
        "vote": "4000000000000",
        "network": "0",
        "storage": "0",
        "oracle": "0",
        "pending": "0"
      }
    },
    "qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p": {
      "QGAS": {
        "balance": "500932805778976",
        "pending": "0"
      },
      "QLC": {
        "balance": "0",
        "vote": "10001000000000",
        "network": "0",
        "storage": "0",
        "oracle": "0",
        "pending": "0"
      }
    }
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_accountsBalance",
	"params": [
		[
			"qlc_1kk5xst583y8hpn9c48ruizs5cxprdeptw6s5wm6ezz6i1h5srpz3mnjgxao",
			"qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
			"qlc_3agkmeufj9z7ntkm8nf7o8e9w3b3tuqyyud5uc5iywajrgxz9re4w7m3pgdx"
		]
	]
}


```
:::






## ledger_accountsFrontiers
返回每个账户下的token hash以及每个token所对应链的最后一个区块哈希
- **Parameters**: 
  - `[]string`:  address list
  
- **Returns**: 
  - token name and block hash for each account

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_accountsFrontiers",
	"params": [
		[
			"qlc_13u8auukg1tjbmny1b6bxh91ysx6m3ikce9tuztw8tc3wzd58dyoy7x9oa7c",
			"qlc_1fx7t3nppodq5tf16mdkzah8b5u1z34u3g44scmqf3a1hozfmqq915m4srqj"
		]
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": {
    "qlc_13u8auukg1tjbmny1b6bxh91ysx6m3ikce9tuztw8tc3wzd58dyoy7x9oa7c": {
      "QLC": "738a5ac75507b0ebf294ffa4c1e490265a5d16a8bcaad21c19cb432df2e1d21a"
    },
    "qlc_1fx7t3nppodq5tf16mdkzah8b5u1z34u3g44scmqf3a1hozfmqq915m4srqj": {
      "QLC": "69255624061c642673e2b4849add6eff5e5cf521c8f3ec9c5c559be25e160769"
    }
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_accountsFrontiers",
	"params": [
		[
			"qlc_13u8auukg1tjbmny1b6bxh91ysx6m3ikce9tuztw8tc3wzd58dyoy7x9oa7c",
			"qlc_1fx7t3nppodq5tf16mdkzah8b5u1z34u3g44scmqf3a1hozfmqq915m4srqj"
		]
	]
}


```
:::




## ledger_accountsPending

返回账户的待接收交易信息

- **Parameters**: 
  - `[]string`:  账户地址列表
  - `int`: 每个账户要返回待接收交易信息的最大数量，如果设置为－1，则返回所有待接收交易
  
- **Returns**: 
  - 每个账户下的待接收信息：
    - `tokenName` :  token名称
    - `type` :  token类型
    - `source` :  交易的发起者
    - `amount` : 交易量
    - `hash` : 发送区块的hash
    - `timestamp`: 时间戳

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
返回链上的账户总量

- **Parameters**: `null`
  
- **Returns**: 
  - `int`:  账户总量

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
根据区块hash返回该区块所属的账户地址

- **Parameters**: 
  - `string`:  区块哈希
  
- **Returns**: 
  - `string`: 账户地址

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
返回区块hash

- **Parameters**: 
  - `block`: 区块信息
  
- **Returns**: 
  - `string`: 区块hash

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
返回链上的区块列表

- **Parameters**: 
    - `int`: 返回的区块数量
    - `int`: 偏移量，表示从第几个区块开始查询，可空，如果设置为空，默认为0 
  
- **Returns**: 
    - `[]block`:  区块列表

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



## ledger_blocksCount
返回已确认（包含智能合约区块）和未确认的区块数量

- **Parameters**: `null`
  
- **Returns**: 
    - `count`: `int`, 已确定区块数量，包括智能合约数量 
    - `unchecked`: `int`, 未确定区块数量


- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"ledger_blocksCount"
}


```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": {
        "count": 9000,
        "unchecked": 100
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"ledger_blocksCount"
}


```
:::



## ledger_blocksCountByType
根据类型返回区块数量

- **Parameters**: `null`
  
- **Returns**: 
  - 返回每种类型的区块数量

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

根据区块hash的列表返回区块信息列表

- **Parameters**: 
  - `[]string`:  区块hash列表
  
- **Returns**: 
  - `[]block`:  区块信息列表

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

接收一个特定的区块哈希，然后从这个区块开始向前遍历，直到指定的区块数量

- **Parameters**: 
  - `string` : 开始区块哈希
  - `int`: 获取区块的最大数目，如果设置为－1，则遍历到第一个区块

- **Returns**: 
  - `[]string`:  区块哈希列表

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



## ledger_delegators

返回指定代表账户所代表的地址和每个地址的余额
- **Parameters**: 
  - `string`:  代表账户地址
  
- **Returns**: 
  - 所代表的每个账户及其余额

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_delegators",
	"params": [
		"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "balance": "59998900000000000"
    },
    {
      "address": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
      "balance": "100000000000"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_delegators",
	"params": [
		"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44"
	]
}


```
:::




## ledger_delegatorsCount

返回特定代表账户所代表的账户总数

- **Parameters**: 
  - `string`: 代表账户地址
  
- **Returns**: 
  - `int`:  所代表的账户总数

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"ledger_delegatorsCount",
  "params":  ["qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic"]
}


```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 1,
    "result":3
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"ledger_delegatorsCount",
  "params":  ["qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic"]
}


```
:::





## ledger_generateSendBlock

根据发送参数和私钥生成发送区块

- **Parameters**: 
    - 发送参数:
        - `from`: 交易发送者 
        - `to`: 交易接收者
        - `tokenName`: token名称
        - `amount`: 交易数量
        - `sender`: 可空, 短信发送者
        - `receiver`: 可空, 短信接收者
        - `message`: 可空, 短信消息的hash
    - `string`: 可空，私钥，如果为空，则返回不包含签名和work的区块
- **Returns**: 
    - `block`: 发送区块

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "ledger_generateSendBlock",
	"params": [
		{
			"from": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"tokenName": "QLC",
			"to": "qlc_371pkh5kkd1dn43cwxnbb1a4yg363rh9un9a13kkezbcppuicejxgixyyrrw",
			"amount": "1000000",
			"sender": "158111100000",
			"receiver": "18500001111",
			"message": "086802b5b3def1802882740cb91bac8929edd80901e5db4c95786389bfcf7ae4"
		},
		"8911d87b2cfed6872be509a0e5b95ff068c4dd5e439538444424aa139f9612b0681bf5253c64672fc54c93d3b5b9a20d28965cb8f80ba70460ed3f99cb547231"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "type": "Send",
    "token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
    "address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
    "balance": "59998899999000000",
    "previous": "bd348dc1c2567060ce596bc5c7fd41ed1ded27752f0e088c8c0b54d1abd6d7c4",
    "link": "941693c7292c0ba082ae768948102f38240e1e7dd0e80065267d2ab5b705323d",
    "sender": "IjE1ODExMTEwMDAwMCI=",
    "receiver": "IjE4NTAwMDAxMTExIg==",
    "message": "086802b5b3def1802882740cb91bac8929edd80901e5db4c95786389bfcf7ae4",
    "quota": 0,
    "timestamp": 1552469200,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
    "work": "000000000055a435",
    "signature": "02ba735276f3e7d4b43aa16255df141765739e4df10b585cf43d69653df6b30c994a727867b74d19978872c66850d1fce79436940d9f96044ad35367b06fe809"
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "ledger_generateSendBlock",
	"params": [
		{
			"from": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"tokenName": "QLC",
			"to": "qlc_371pkh5kkd1dn43cwxnbb1a4yg363rh9un9a13kkezbcppuicejxgixyyrrw",
			"amount": "1000000",
			"sender": "158111100000",
			"receiver": "18500001111",
			"message": "086802b5b3def1802882740cb91bac8929edd80901e5db4c95786389bfcf7ae4"
		},
		"8911d87b2cfed6872be509a0e5b95ff068c4dd5e439538444424aa139f9612b0681bf5253c64672fc54c93d3b5b9a20d28965cb8f80ba70460ed3f99cb547231"
	]
}


```
:::




## ledger_generateReceiveBlock
根据发送区块和私钥产生接收区块

- **Parameters**: 
   - `block`:  发送区块
   - `string`: 可空，私钥，如果为空，则返回不包含签名和work的区块钥
 
- **Returns**: 
  - `block`:  接收区块

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "ledger_generateReceiveBlock",
	"params": [
		{
			"type": "Send",
			"token": "cfb64601dee031fc045a2880ea0b8b4823c4f0ce9241d245a012d40910137536",
			"address": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
			"balance": "59999999999999990",
			"previous": "0a5f919673c3a95b66c520b74a7b2416abf6fe6cc8606d04303819f81e6db1a1",
			"link": "941693c7292c0ba082ae768948102f38240e1e7dd0e80065267d2ab5b705323d",
			"sender": "",
			"receiver": "",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"data": null,
			"quota": 0,
			"timestamp": 0,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
			"work": "0000000001063d8a",
			"signature": "edfb07a3575853fe833efc9f5288de89df69d243239b8d92723452cd456fcd2170e239eedc16c9650b626f26b305dcaf6a03ad8c4cb99302e6284df019c6790d"
		},
		"5f760341a57b35a09b6ea61b16d3309651ed349cbda964c976f3d54acb801d20941693c7292c0ba082ae768948102f38240e1e7dd0e80065267d2ab5b705323d"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "type": "Open",
    "token": "cfb64601dee031fc045a2880ea0b8b4823c4f0ce9241d245a012d40910137536",
    "address": "qlc_371pkh5kkd1dn43cwxnbb1a4yg363rh9un9a13kkezbcppuicejxgixyyrrw",
    "balance": "10",
    "previous": "0000000000000000000000000000000000000000000000000000000000000000",
    "link": "4438eb09b1469b72a436fe42df3af0f6acb28b085042917210301500c0cea576",
    "sender": "",
    "receiver": "",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "data": null,
    "quota": 0,
    "timestamp": 0,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
    "work": "000000000007faf2",
    "signature": "c80bdeeebf4263337316965afc9cf6835a04c59e6af1dd7abbe51df7683cfb8704e9f7d802e330fcd31eedb6ff390c4af520215732d7ea1cb3c3ca2f63537a07"
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "ledger_generateReceiveBlock",
	"params": [
		{
			"type": "Send",
			"token": "cfb64601dee031fc045a2880ea0b8b4823c4f0ce9241d245a012d40910137536",
			"address": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
			"balance": "59999999999999990",
			"previous": "0a5f919673c3a95b66c520b74a7b2416abf6fe6cc8606d04303819f81e6db1a1",
			"link": "941693c7292c0ba082ae768948102f38240e1e7dd0e80065267d2ab5b705323d",
			"sender": "",
			"receiver": "",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"data": null,
			"quota": 0,
			"timestamp": 0,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
			"work": "0000000001063d8a",
			"signature": "edfb07a3575853fe833efc9f5288de89df69d243239b8d92723452cd456fcd2170e239eedc16c9650b626f26b305dcaf6a03ad8c4cb99302e6284df019c6790d"
		},
		"5f760341a57b35a09b6ea61b16d3309651ed349cbda964c976f3d54acb801d20941693c7292c0ba082ae768948102f38240e1e7dd0e80065267d2ab5b705323d"
	]
}


```
:::



## ledger_generateChangeBlock

根据账户和私钥产生修改代表的区块

- **Parameters**: 
    - `string`: 账户地址
    - `string`: 新代表地址
    - `string`: 可空，私钥，如果为空，则返回不包含签名和work的区块 

  
- **Returns**: 
  - `block`:  修改代表的区块

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "ledger_generateChangeBlock",
	"params": [
		"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
		"qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
		"df5d9818629e5d77bac5c99c79c2b437e3661e8ef3b443a81a4de8fd8442158993d31686ecd3922de39a634271360990f0ad100053483b9bcdaa19e504998104"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "type": "Change",
    "token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
    "address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
    "balance": "59998900000000000",
    "previous": "bd348dc1c2567060ce596bc5c7fd41ed1ded27752f0e088c8c0b54d1abd6d7c4",
    "link": "0000000000000000000000000000000000000000000000000000000000000000",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "quota": 0,
    "timestamp": 1552469321,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
    "work": "000000000055a435",
    "signature": "2f3555e4a6d4e91e736cdc8074f3e070017a95ee42a049034cf596e6384522b4c0e4b608b35a8c4f408c1f4ffc9221c05c1b3f59ae828b5cd3ca87b0f1539a04"
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "ledger_generateChangeBlock",
	"params": [
		"qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
		"qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
		"df5d9818629e5d77bac5c99c79c2b437e3661e8ef3b443a81a4de8fd8442158993d31686ecd3922de39a634271360990f0ad100053483b9bcdaa19e504998104"
	]
}


```
:::




## ledger_process

接收一个特定区块，然后检测区块基本信息，根据区块更新链信息，并且广播区块

- **Parameters**: 
  - `block`: 区块
  
- **Returns**: 
  - `string`:  区块哈希

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_process",
	"params": [
		{
			"type": "Change",
			"token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
			"address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"balance": "59998900000000000",
			"previous": "bd348dc1c2567060ce596bc5c7fd41ed1ded27752f0e088c8c0b54d1abd6d7c4",
			"link": "0000000000000000000000000000000000000000000000000000000000000000",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"quota": 0,
			"timestamp": 1552469321,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
			"work": "000000000055a435",
			"signature": "2f3555e4a6d4e91e736cdc8074f3e070017a95ee42a049034cf596e6384522b4c0e4b608b35a8c4f408c1f4ffc9221c05c1b3f59ae828b5cd3ca87b0f1539a04"
		}
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": "7f22b5987e351ce80b62733c3d5faec362662db48911fcfc743e582c3e5ee40c"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_process",
	"params": [
		{
			"type": "Change",
			"token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
			"address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"balance": "59998900000000000",
			"previous": "bd348dc1c2567060ce596bc5c7fd41ed1ded27752f0e088c8c0b54d1abd6d7c4",
			"link": "0000000000000000000000000000000000000000000000000000000000000000",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"quota": 0,
			"timestamp": 1552469321,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_3oftfjxu9x9pcjh1je3xfpikd441w1wo313qjc6ie1es5aobwed5x4pjojic",
			"work": "000000000055a435",
			"signature": "2f3555e4a6d4e91e736cdc8074f3e070017a95ee42a049034cf596e6384522b4c0e4b608b35a8c4f408c1f4ffc9221c05c1b3f59ae828b5cd3ca87b0f1539a04"
		}
	]
}


```
:::




## ledger_representatives

返回链上的代表账户及其权重

- **Parameters**: 
  - `bool` , 如果设置为`false`，将会以随机顺序返回代表账户，如果设置为`true`，则会以代表账户权重进行排序
  
- **Returns**: 
  - 每个代表及其权重

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":2,
  "method":"ledger_representatives",
  "params": [true]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": [
    {
      "address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "balance": "60000000000000000",
      "vote": "5000000000",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "total": "60000005000000000"
    },
    {
      "address": "qlc_1717brdo1cu6tosia7i46bdxekai3gu9knuu1bsayd5z9exhjq9aqfsfpeah",
      "balance": "40000000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "total": "40000000000"
    }
  ]
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":2,
  "method":"ledger_representatives",
  "params": [true]
}


```
:::




## ledger_tokens

返回链上的token列表

- **Parameters**: `null`
  
- **Returns**: 
  - `[]token`: token列表

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"ledger_tokens"
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "tokenId": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
      "tokenName": "QLC",
      "tokenSymbol": "QLC",
      "totalSupply": 60000000000000000,
      "decimals": 8,
      "owner": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "pledgeAmount": 0,
      "withdrawTime": 0
    },
    {
      "tokenId": "fa696094adbf9683e4283c3cdabdf9768042d35c1b6e6609ec06e005137e9dbc",
      "tokenName": "QN",
      "tokenSymbol": "QN",
      "totalSupply": 10000000000000,
      "decimals": 8,
      "owner": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "pledgeAmount": 1000000000000,
      "withdrawTime": 1552464838
    }
  ]
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"ledger_tokens"
}


```
:::




## ledger_tokenInfoById

根据token id返回token信息
- **Parameters**: 
  - `string`:  token id
  
- **Returns**: 
  - `token`:  token信息

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_tokenInfoById",
	"params": [
		"45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "tokenId": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
    "tokenName": "QLC",
    "tokenSymbol": "QLC",
    "totalSupply": 60000000000000000,
    "decimals": 8,
    "owner": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
    "pledgeAmount": 0,
    "withdrawTime": 0
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_tokenInfoById",
	"params": [
		"45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad"
	]
}


```
:::






## ledger_tokenInfoByName
根据token名称返回token信息
- **Parameters**: 
  - `string`:  token名称
  
- **Returns**: 
  - `token`:  token信息

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_tokenInfoByName",
	"params": [
		"QLC"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "tokenId": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
    "tokenName": "QLC",
    "tokenSymbol": "QLC",
    "totalSupply": 60000000000000000,
    "decimals": 8,
    "owner": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
    "pledgeAmount": 0,
    "withdrawTime": 0
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ledger_tokenInfoByName",
	"params": [
		"QLC"
	]
}


```
:::



## ledger_transactionsCount
返回链上的确认区块（不包括智能合约）和未确认区块数

- **Parameters**: `null`
  
- **Returns**: 
    - `count`: `int`, 已确认的区块数目，不包括智能合约 
    - `unchecked`: `int`, 未确认的区块数目


- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"ledger_transactionsCount"
}


```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": {
        "count": 9000,
        "unchecked": 100
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"ledger_transactionsCount"
}


```
:::

