

# Account


**支持调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## account_create
通过seed和index创建一个新的账户，返回账户的公钥和私钥

- **Parameters**: 
  - `string` : seed
  - `int` : 账户index，可空，如果不设置，则默认为0
  
- **Returns**: 
 `account`  账户信息
  -  `privKey`: 账户私钥
  -  `pubKey`: 账户公钥

- **Example**:

::: demo

```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "account_create",
    "params": ["1234567890123456789012345678901234567890123456789012345678901234"]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "privKey": "f59e77456e068c5e4384776c9a6bbfd774abb7bdd99aa072a3304e40599fd658c39010e6c0a9d53a3e83f3a36970b660257f000ee940648d6cdfbc1d7a932b71",
    "pubKey": "c39010e6c0a9d53a3e83f3a36970b660257f000ee940648d6cdfbc1d7a932b71"
  }
}


```

```json test
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "account_create",
    "params": ["1234567890123456789012345678901234567890123456789012345678901234"]
}


```
:::





## account_newSeed
随机产生一个seed

- **Parameters**: 无
  
- **Returns**: 
  - `string`  seed


- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "account_newSeed"
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": "9be88e0cbe786ab2c7528837d457b5ad53df55da8d5f6d71a59417d461c3b189"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "account_newSeed"
}


```
:::




## account_newAccounts
随机产生账户

- **Parameters**: 
  - `int` : 返回账户的个数，默认为10
  
- **Returns**: 
 - `accountInfo`  账户信息


- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "account_newAccounts",
	"params": [2]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": [
    {
      "seed": "0010af679d0fea318ca5da72fe253fc3f7a62439774cbf0cff82a8606f29d1bf",
      "privateKey": "3f44cd06efc658da99e02539774082fa02030b56d56ea6dda130bd68e6dcacf3affc56cf731aafb9bc724058c63a18242011b57afbd9486ffa9ae3e8b1060efd",
      "publicKey": "affc56cf731aafb9bc724058c63a18242011b57afbd9486ffa9ae3e8b1060efd",
      "address": "qlc_3dzwcu9q88ohq8y96i4rrrx3ib3148tqoyysb3qzo8q5x4rie5qxmmzftykm"
    },
    {
      "seed": "908e30716f445624dd6a80f650fcea2f634956ddcea80196f01418d1eac284eb",
      "privateKey": "f11ad396042a6f8cc4875343275cd079f6fb9247bea55904ab27a5a77dd7d2d978901d92c333484d7781a7f4fbf26e169fad88365444639faa345faeef1f3ebb",
      "publicKey": "78901d92c333484d7781a7f4fbf26e169fad88365444639faa345faeef1f3ebb",
      "address": "qlc_1y6i5pbe8etabour5bznzhs8w7nzop65eo46eghtnf4zouqjyhouk68uzd76"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 18,
	"method": "account_newAccounts",
	"params": [2]
}


```
:::






## account_forPublicKey
通过账户公钥返回账户的地址

- **Parameters**: 
  - `string`: 账户公钥
  
- **Returns**: 
  - `string`: 账户地址

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"account_forPublicKey",
  "params":["d813a347c0d6d3265a269e656a1889cb2452d8c9f4b620756128ff10c8c9fdEF"]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": "qlc_3p1mnf5w3opm6sf4f9m7faeamks6cdeemx7p63tp4c9z456emzhhb1n9srco"
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"account_forPublicKey",
  "params":["d813a347c0d6d3265a269e656a1889cb2452d8c9f4b620756128ff10c8c9fdEF"]
}


```
:::

## account_publicKey
通过账户地址返回账户公钥
- **Parameters**: 
  - `string`: 账户地址
  
- **Returns**: 
  - `string`: 账户私钥

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"account_publicKey",
  "params":["qlc_1x8zh6nd55gfaptrqkyecr3ms6mcmidzyb3d16zf9wtiipsjkqiie6saqs1q"]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": "74df7928b18dcd45b58bcbcc56033c926a9c17ff242b013ed3f35085b3195e10"
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"account_publicKey",
  "params":["qlc_1x8zh6nd55gfaptrqkyecr3ms6mcmidzyb3d16zf9wtiipsjkqiie6saqs1q"]
}


```
:::





## account_validate
检测账户地址是否合法
- **Parameters**: 
  - `string`:  账户地址
  
- **Returns**: 
  - `bool`:  如果合法，则返回`true`，否则返回`false`

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"account_validate",
  "params":  ["qlc_3nihnp4a5zf5iq9pz54twp1dmksxnouc4i5k4y6f8gbnkc41p1b5ewm3inpw"]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"account_validate",
  "params": ["qlc_3nihnp4a5zf5iq9pz54twp1dmksxnouc4i5k4y6f8gbnkc41p1b5ewm3inpw"]
}


```
:::

