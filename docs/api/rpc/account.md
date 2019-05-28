

# Account


**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## account_create
Create a new account by seed and index

- **Parameters**: 
  - `string` : seed
  - `int` : `optional`, index for account, if not set, default value is 0
  
- **Returns**: 
 `account`  the private and public key for account
  -  `privKey`: private key for the new account
  -  `pubKey`: public key for the new account

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
Create a new seed randomly

- **Parameters**: `none`
  
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
Create new accounts randomly

- **Parameters**: 
  - `int` : number of accounts, default is 10
  
- **Returns**: 
 - `accountInfo`  account info 


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
Return account address by public key

- **Parameters**: 
  - `string`: public key
  
- **Returns**: 
  - `string`: account address

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
Return public key for account address
- **Parameters**: 
  - `string`: account address
  
- **Returns**: 
  - `string`: public key

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
Returns whether the address is valid or not 
- **Parameters**: 
  - `string`:  address
  
- **Returns**: 
  - `bool`:   if valid , return `true`, or return `false`

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

