
# Wallet

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



## wallet_getBalances
Return balance for each token of the wallet  
- **Parameters**: 
    - `string`: master address of the wallet
    - `string`: passphrase  

- **Returns**: 
  - balance of each token in the wallet

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
Returns raw key (public key and private key) for a account
- **Parameters**: 
  - `string`:  account address
  - `string`:  passphrase 

  
- **Returns**: 
  - private key and public key for the address

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
Generate new seed
- **Parameters**: `null`
  
- **Returns**: 
  - `string`: hex string for seed 

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
Create new wallet and Return the master address 
- **Parameters**: 
    - `string`:  passphrase
    - `string`: `optional`, hex string for seed,  if not set, will create seed randomly

  
- **Returns**: 
  - `string` : master address of the wallet

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
Change wallet password 
- **Parameters**: 
    - `string`:  master address of the wallet
    - `string`:  old passphrase 
    - `string`:  new passphrase 

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

