
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
		"qlc_1jeh4ce4dcmarxm7q5zq1kspdie49y79gbzrar6sdse165jy9rk31dxapy7s",
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
      "type": "Send",
      "token": "ea842234e4dc5b17c33b35f99b5b86111a3af0bd8e4a8822602b866711de6d81",
      "address": "qlc_1jeh4ce4dcmarxm7q5zq1kspdie49y79gbzrar6sdse165jy9rk31dxapy7s",
      "balance": "0",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "2f566b5f369c7f48ea0fc706a033c3b3f771fca07b65e762e57e008a9fdfc78b",
      "link": "d1c8e3af74497efba134bc59883ff42ef9e838e8ae98337946758dfb3c520a49",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "povHeight": 0,
      "timestamp": 1562228755,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "work": "bb6b8f701cb549ba",
      "signature": "d5230746bcdcec74879d56a91b2f274a37e421b5d56ec865237243c8a57ef9a10da5986a4c9b45faf18259a140c2cd0bbc15e999c56254d062a35da72a33e200",
      "tokenName": "QGAS",
      "amount": "500000000",
      "hash": "e7adbd91bbf1c5113163d0da8f92a557be4d7e4d759e5419b8139ffcc03546df"
    },
    {
      "type": "Open",
      "token": "ea842234e4dc5b17c33b35f99b5b86111a3af0bd8e4a8822602b866711de6d81",
      "address": "qlc_1jeh4ce4dcmarxm7q5zq1kspdie49y79gbzrar6sdse165jy9rk31dxapy7s",
      "balance": "100000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "0000000000000000000000000000000000000000000000000000000000000000",
      "link": "40cd275aaeec3f0d852d25048c47d3c8ee0017ede0932976e8cc6f338a193c24",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "povHeight": 0,
      "timestamp": 1561706700,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "work": "6bcb16aef36c445c",
      "signature": "2f24be08472ec2d0206c23354dc622fbc8d4176ac67f412a9348f2042edd9989d80ba04b757fa826443c512985407a02a1db5d9c30ac135759ea82ee79919809",
      "tokenName": "QGAS",
      "amount": "100000000",
      "hash": "33bb1eaa2b6b4d025a94963b99b46294b179f6a6aede8663b658de6adce3f2fd"
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
返回账户的最新的详细信息，包含该账户下的每个token

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

## ledger_confirmedAccountInfo

返回已确认的账户的详细信息，包含该账户下的每个token

- **Parameters**: 
  - `string` : 账户地址
- **Returns**: 
  - `account` :  账户地址
  - `coinBalance` : 该账户下的主token（默认为QLC）
  - `vote`,`network`,`storage`,`oracle`: 账户获得的权益，如果该账户没有QLC，这些字段为空
  - `representative` : 该账户的代表账户的地址
  - `[]token`: 账户下每个token的信息

|      字段      |  类型  |            描述             |
| :------------: | :----: | :-------------------------: |
|      type      | string |         token hash          |
|     header     | string | 该token所在链的最后一个区块 |
| representative | string |       代表账户的地址        |
|      open      | string |  该token所在链的第一个区块  |
|    balance     | string |            余额             |
|    account     | string |      该token所在的地址      |
|    modified    | int64  |           时间戳            |
|   blockCount   |  int   |   该token所在链的区块总量   |
|   tokenName    | string |          token名称          |
|    pending     | string |         待接收数量          |



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
			"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
			"address": "qlc_3d83qux3mo53cuufi3znh5xkm6kb9fj6usmng8stgq17ppfwoabkbupaoohd",
			"balance": "9999999500000",
			"vote": "0",
			"network": "0",
			"storage": "0",
			"oracle": "0",
			"previous": "6903c0ef8ab5ccf5154a565cf256fa2fbc07a84d5c1bcecf131dc6343a9643df",
			"link": "4d68f7b943d81a638b950ffe82a89536f978040f8d88c2d3d803001e5d502637",
			"sender": "MTg4MDAwMDAwMDA=",
			"receiver": "MTU4MTExMTExMTE=",
			"message": "f536401418d04eed2e26533ac22245638b9c812488059afb0eabbcadc5dcb38a",
			"povHeight": 0,
			"timestamp": 1553859640,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"work": "000000000034234c",
			"signature": "eb516a10fdd89d763c210c2a2f157fe596711dfec2d64aeeb4e8876ce3e7a64e865a688b73eed180f7fae1dc453b25a3f539afb6652c3e4a8a946b0e061ddd03"
		}
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": "9b1e493a6b754839aa2aece98089863cc6e91fb0a8968f1d381a4b6fdd175a73"
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
			"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
			"address": "qlc_3d83qux3mo53cuufi3znh5xkm6kb9fj6usmng8stgq17ppfwoabkbupaoohd",
			"balance": "9999999500000",
			"vote": "0",
			"network": "0",
			"storage": "0",
			"oracle": "0",
			"previous": "6903c0ef8ab5ccf5154a565cf256fa2fbc07a84d5c1bcecf131dc6343a9643df",
			"link": "4d68f7b943d81a638b950ffe82a89536f978040f8d88c2d3d803001e5d502637",
			"sender": "MTg4MDAwMDAwMDA=",
			"receiver": "MTU4MTExMTExMTE=",
			"message": "f536401418d04eed2e26533ac22245638b9c812488059afb0eabbcadc5dcb38a",
			"povHeight": 0,
			"timestamp": 1553859640,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"work": "000000000034234c",
			"signature": "eb516a10fdd89d763c210c2a2f157fe596711dfec2d64aeeb4e8876ce3e7a64e865a688b73eed180f7fae1dc453b25a3f539afb6652c3e4a8a946b0e061ddd03"
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
      "type": "ContractReward",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_3agkmeufj9z7ntkm8nf7o8e9w3b3tuqyyud5uc5iywajrgxz9re4w7m3pgdx",
      "balance": "0",
      "vote": "1900000000",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "0000000000000000000000000000000000000000000000000000000000000000",
      "link": "f16b74d1c9662c6d266868d9685759585152354e2296609e15aa16517edf2897",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcT+zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABdFJ2rodKbNtif5aalM1GlqZh+BSHW7+9tY9qHD3ERw7vz4YK/hsg/tL+59Jubj6WTyM9BKMniFyDEh1ZbUvxmQKno8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAwYjg3ZmQ2MjY5ZWE2ZTBlZjM2YzdkMDdkNzk3YTk4Y2Q5ZmMyNjVhNzhkOTZhNTJhZTM2ZWJhZDZiZjNmMmFk",
      "povHeight": 8,
      "timestamp": 1561631572,
      "extra": "ee1f60b6be7566f6609a9f53a5b62b308ff578d8b4bc7b466a9b66b142bc5b75",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000000311685",
      "signature": "6c413dab0d7aa57c81a53035962dd98d4dd614ddc6c4dd3ecc1922f2d80ebf50b60364bb713b69713c4aba36ab4703d953ca5a77387ef9193d9718555f375604",
      "tokenName": "QLC",
      "amount": "1900000000",
      "hash": "534139d7f31c454aaa540d60acebf7ed984521df6a611b69a56560712287e821"
    },
    {
      "type": "ContractSend",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "balance": "59799948100000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "dce35ac96ea5638ee54d7fbcc1a2b094db2d0f0d84232a1d0def849e5594fc12",
      "link": "b7902600dfc79387b2601edc347b854d55d6b31142e324a4e54ff00a4c519c91",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "uuDnSKHSmzbYn+WmpTNRpamYfgUh1u/vbWPahw9xEcO78+GCv4bIP7S/ufSbm4+lk8jPQSjJ4hcgxIdWW1L8ZkCp6PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAwYjg3ZmQ2MjY5ZWE2ZTBlZjM2YzdkMDdkNzk3YTk4Y2Q5ZmMyNjVhNzhkOTZhNTJhZTM2ZWJhZDZiZjNmMmFk",
      "povHeight": 8,
      "timestamp": 1561631571,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "00000000002db58d",
      "signature": "c7a9ab9cf2cd6ffc590d3625ee7362ee6212d8339453e90d0b15b82bb427212cca60830504471a68251e14322729e0bbfb83fd76db2799829ba3276292530707",
      "tokenName": "QLC",
      "amount": "1900000000",
      "hash": "f16b74d1c9662c6d266868d9685759585152354e2296609e15aa16517edf2897"
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
			"81cf7f588aab1d756d3048f5236003e15860e9add9a6900664652ca28ad0af38",
			"e7adbd91bbf1c5113163d0da8f92a557be4d7e4d759e5419b8139ffcc03546df"
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
      "type": "ContractReward",
      "token": "ea842234e4dc5b17c33b35f99b5b86111a3af0bd8e4a8822602b866711de6d81",
      "address": "qlc_1ks4fphbeyy1ps9yxakcst4p77ttq7xrcj8fdukzztabb1y9mkor3ombaten",
      "balance": "10775904970",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "7dfa6e1ad61cd12e987cf6627fa9cbcea85c809cfd68a85554bc41c0831143e4",
      "link": "6b6e28ab103c92d00a1d5cdb5170a04c1a31635487bb439c51d85c216ed3e1e5",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "povHeight": 0,
      "timestamp": 1562228107,
      "extra": "79da0a65b3cbb18a051310b72165cf2bee3226267580090534dec27c7cf974f2",
      "representative": "qlc_1111111111111111111111111111111111111111111111111111hifc8npp",
      "work": "0000000000000000",
      "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "tokenName": "QGAS",
      "amount": "10055666",
      "hash": "81cf7f588aab1d756d3048f5236003e15860e9add9a6900664652ca28ad0af38"
    },
    {
      "type": "Send",
      "token": "ea842234e4dc5b17c33b35f99b5b86111a3af0bd8e4a8822602b866711de6d81",
      "address": "qlc_1jeh4ce4dcmarxm7q5zq1kspdie49y79gbzrar6sdse165jy9rk31dxapy7s",
      "balance": "0",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "2f566b5f369c7f48ea0fc706a033c3b3f771fca07b65e762e57e008a9fdfc78b",
      "link": "d1c8e3af74497efba134bc59883ff42ef9e838e8ae98337946758dfb3c520a49",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "povHeight": 0,
      "timestamp": 1562228755,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "work": "bb6b8f701cb549ba",
      "signature": "d5230746bcdcec74879d56a91b2f274a37e421b5d56ec865237243c8a57ef9a10da5986a4c9b45faf18259a140c2cd0bbc15e999c56254d062a35da72a33e200",
      "tokenName": "QGAS",
      "amount": "500000000",
      "hash": "e7adbd91bbf1c5113163d0da8f92a557be4d7e4d759e5419b8139ffcc03546df"
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
			"81cf7f588aab1d756d3048f5236003e15860e9add9a6900664652ca28ad0af38",
			"e7adbd91bbf1c5113163d0da8f92a557be4d7e4d759e5419b8139ffcc03546df"
		]
	]
}


```
:::

## ledger_blockConfirmedStatus

根据区块hash返回区块的确认状态

- **Parameters**: 
  - `string`:  区块hash
- **Returns**: 
  - `bool`:  如果已确认，返回`true`，否则，返回`false`
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_blockConfirmedStatus",
	"params": [
		"5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d"
	]
}

```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": true
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "ledger_blockConfirmedStatus",
	"params": [
		"5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d"
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
			"from": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"tokenName": "QLC",
			"to": "qlc_1mnw9gbzdaxz7sz18pyjcffiqaocxnunfdtu1u3fc4wjkib97rp1wcdw6ato",
			"amount": "50000000000"
		},
	"1c4abdd687fe3f2e2a947d1a29566a868e46431767402ef9a073ffd17f6bd2aabf86c83fb4bfb9f49b9b8fa593c8cf4128c9e21720c487565b52fc6640a9e801"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "type": "Send",
    "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
    "address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "balance": "59799950000000000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "522c50fec4662a1fe57132fc0a89adfa682f8dddc0d3ab78951521f7d179611c",
    "link": "4e9c3b93f5a3bf2e7e035bd1535b0ba2aaed3746af5b06c2d50b91941272e2c0",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "povHeight": 7,
    "timestamp": 1561631298,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000002d81cc0",
    "signature": "7d2464330086efc989a53bd66955ab86477d40e83f0404ae642a0d51592aafad09f1490e38ca3341d1c87aa742e1c64a7fa58ff39823ff2ffd462f109a8f6601"
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
			"from": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"tokenName": "QLC",
			"to": "qlc_1mnw9gbzdaxz7sz18pyjcffiqaocxnunfdtu1u3fc4wjkib97rp1wcdw6ato",
			"amount": "50000000000"
		},
	"1c4abdd687fe3f2e2a947d1a29566a868e46431767402ef9a073ffd17f6bd2aabf86c83fb4bfb9f49b9b8fa593c8cf4128c9e21720c487565b52fc6640a9e801"
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
			"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
			"address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"balance": "59799950000000000",
			"vote": "0",
			"network": "0",
			"storage": "0",
			"oracle": "0",
			"previous": "522c50fec4662a1fe57132fc0a89adfa682f8dddc0d3ab78951521f7d179611c",
			"link": "4e9c3b93f5a3bf2e7e035bd1535b0ba2aaed3746af5b06c2d50b91941272e2c0",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"povHeight": 7,
			"timestamp": 1561631298,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"work": "0000000002d81cc0",
			"signature": "7d2464330086efc989a53bd66955ab86477d40e83f0404ae642a0d51592aafad09f1490e38ca3341d1c87aa742e1c64a7fa58ff39823ff2ffd462f109a8f6601"
		},
		"12492ec58fb840bcdaf400731c60616ea7f3275b3781cf8bb69b2a7eb74185264e9c3b93f5a3bf2e7e035bd1535b0ba2aaed3746af5b06c2d50b91941272e2c0"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "type": "Open",
    "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
    "address": "qlc_1mnw9gbzdaxz7sz18pyjcffiqaocxnunfdtu1u3fc4wjkib97rp1wcdw6ato",
    "balance": "50000000000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "0000000000000000000000000000000000000000000000000000000000000000",
    "link": "dce35ac96ea5638ee54d7fbcc1a2b094db2d0f0d84232a1d0def849e5594fc12",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "povHeight": 7,
    "timestamp": 1561631359,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000991443",
    "signature": "16a1188460194a0d535d3ed6db92652935edba1ae25edc8905cc5383efb63de6804f6bdd25e7aba2aac26a7be50439e65cd89d2310b5dcc830dbae4e71f7e107"
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
			"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
			"address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"balance": "59799950000000000",
			"vote": "0",
			"network": "0",
			"storage": "0",
			"oracle": "0",
			"previous": "522c50fec4662a1fe57132fc0a89adfa682f8dddc0d3ab78951521f7d179611c",
			"link": "4e9c3b93f5a3bf2e7e035bd1535b0ba2aaed3746af5b06c2d50b91941272e2c0",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"povHeight": 7,
			"timestamp": 1561631298,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"work": "0000000002d81cc0",
			"signature": "7d2464330086efc989a53bd66955ab86477d40e83f0404ae642a0d51592aafad09f1490e38ca3341d1c87aa742e1c64a7fa58ff39823ff2ffd462f109a8f6601"
		},
		"12492ec58fb840bcdaf400731c60616ea7f3275b3781cf8bb69b2a7eb74185264e9c3b93f5a3bf2e7e035bd1535b0ba2aaed3746af5b06c2d50b91941272e2c0"
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
    "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
    "address": "qlc_37ig6u5fsxhq3r38gu5qs6cpsyy5bmun45zp3hxbhjqzdczhur54u8ztehtp",
    "balance": "0",
    "vote": "100000000000000",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "9af624b278329c65b47523302f6f3f1ba524845aed9f5f8d1908b1b1328df88a",
    "link": "0000000000000000000000000000000000000000000000000000000000000000",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "povHeight": 0,
    "timestamp": 1561736192,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_37ig6u5fsxhq3r38gu5qs6cpsyy5bmun45zp3hxbhjqzdczhur54u8ztehtp",
    "work": "0000000000a97f04",
    "signature": "5274add4c25faddd7a30dceef344e59a042fc200481c11c3bafa9367cd404e06751ef8b9bc9adba2389ce17bb11dca779238e93124e73103235193c4d145da07"
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
    "type": "Open",
    "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
    "address": "qlc_1mnw9gbzdaxz7sz18pyjcffiqaocxnunfdtu1u3fc4wjkib97rp1wcdw6ato",
    "balance": "50000000000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "0000000000000000000000000000000000000000000000000000000000000000",
    "link": "dce35ac96ea5638ee54d7fbcc1a2b094db2d0f0d84232a1d0def849e5594fc12",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "povHeight": 7,
    "timestamp": 1561631359,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000991443",
    "signature": "16a1188460194a0d535d3ed6db92652935edba1ae25edc8905cc5383efb63de6804f6bdd25e7aba2aac26a7be50439e65cd89d2310b5dcc830dbae4e71f7e107"
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
    "type": "Open",
    "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
    "address": "qlc_1mnw9gbzdaxz7sz18pyjcffiqaocxnunfdtu1u3fc4wjkib97rp1wcdw6ato",
    "balance": "50000000000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "0000000000000000000000000000000000000000000000000000000000000000",
    "link": "dce35ac96ea5638ee54d7fbcc1a2b094db2d0f0d84232a1d0def849e5594fc12",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "povHeight": 7,
    "timestamp": 1561631359,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000991443",
    "signature": "16a1188460194a0d535d3ed6db92652935edba1ae25edc8905cc5383efb63de6804f6bdd25e7aba2aac26a7be50439e65cd89d2310b5dcc830dbae4e71f7e107"
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

