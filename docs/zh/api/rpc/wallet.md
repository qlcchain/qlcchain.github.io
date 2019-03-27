
# Wallet

**支持的调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



## wallet_getBalances
返回钱包里每种token的余额

- **Parameters**: 
    - `string`: 钱包主地址
    - `string`: 密码  

- **Returns**: 
  - 每种token及其余额

- **Example**:

::: demo
```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "wallet_getBalances"
}


```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "QLC": "234000000000000000000",
        "QN1": "234991200",
        "QN2": "23499001200"
    }
}


```

```json test
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "wallet_getBalances"
}


```
:::




## wallet_getRawKey

返回钱包账户的私钥和公钥
- **Parameters**: 
  - `string`:  账户地址
  - `string`:  密码 

  
- **Returns**: 
  - 私钥和公钥

- **Example**:

::: demo
```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "wallet_getRawKey",
    "params": ["qlc_3s1agkbw6osftnodbcu9otawgdhz6q74xzpgsu641qzjgs8qdqfujim3z7ii","ge#QWDdsf123"]
}


```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": {
        "pubKey": "c39010e6c0a9d53a3e83f3a36970b660257f000ee940648d6cdfbc1d7a932b71",
        "privKey": "f59e77456e068c5e4384776c9a6bbfd774abb7bdd99aa072a3304e40599fd658c39010e6c0a9d53a3e83f3a36970b660257f000ee940648d6cdfbc1d7a932b71"
    }
}


```

```json test
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "wallet_getRawKey",
    "params": ["qlc_3s1agkbw6osftnodbcu9otawgdhz6q74xzpgsu641qzjgs8qdqfujim3z7ii","ge#QWDdsf123"]
}


```
:::




## wallet_newSeed
创建新的seed
- **Parameters**: `null`
  
- **Returns**: 
  - `string`: seed

- **Example**:

::: demo
```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "wallet_newSeed"
}


```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 2,
    "result": "1234567890123456789012345678901234567890123456789012345678901234"
}


```

```json test
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "wallet_newSeed"
}


```
:::



## wallet_newWallet
创建新的钱包并返回主地址
- **Parameters**: 
    - `string`:  密码
    - `string`: seed，可空，如果不设置，则随机生成

  
- **Returns**: 
  - `string` : 钱包主地址

- **Example**:

::: demo
```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "wallet_newWallet",
    "params": ["fgeQW#1234","1234567890123456789012345678901234567890123456789012345678901234"]
}


```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 2,
    "result": "qlc_3s1agkbw6osftnodbcu9otawgdhz6q74xzpgsu641qzjgs8qdqfujim3z7ii"
}


```

```json test
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "wallet_newWallet",
    "params": ["fgeQW#1234","1234567890123456789012345678901234567890123456789012345678901234"]
}


```
:::




## wallet_changePassword
修改钱包密码
- **Parameters**: 
    - `string`:  钱包主地址
    - `string`:  旧密码
    - `string`:  新密码

- **Returns**: `null`

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "wallet_changePassword",
	"params": [
		"qlc_3p1mnf5w3opm6sf4f9m7faeamks6cdeemx7p63tp4c9z456emzhhb1n9srco",
		"qlc",
		"qlcqlc"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": null
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "wallet_changePassword",
	"params": [
		"qlc_3p1mnf5w3opm6sf4f9m7faeamks6cdeemx7p63tp4c9z456emzhhb1n9srco",
		"qlc",
		"qlcqlc"
	]
}


```
:::

