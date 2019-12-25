

# Verifier


**Supported protocols:**

| JSON-RPC 2.0 | Websocket |   IPC    | Publish–subscribe |
| :----------: | :-------: | :------: | :---------------: |
|   &#x2713;   | &#x2713;  | &#x2713; |        TBD        |

## verifier_getRegisterBlock

Get a verifier register block

- **Parameters**: 
  - `account` : account to register verifier
  - `type` : verifier type (email/weChat)
  - `id` : verifier address to receive verify request (email address/weChat id)

- **Returns**: 
  -  `block`: verifier register block

- **Example**:

::: demo

```json tab:Request
{
"jsonrpc": "2.0",
"id": 3,
"method": "verifier_getRegisterBlock",
"params":[{
    	"account":"qlc_1zb3tn7ifmcnj9p96u63jio4qyhm6w5yfgyi55pew9dma5qus1hhwmx7989k", 			"type":"email", 
    	"id":"v1@google.com"
	}]
}


```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"type": "ContractSend",
		"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
		"address": "qlc_1zb3tn7ifmcnj9p96u63jio4qyhm6w5yfgyi55pew9dma5qus1hhwmx7989k",
		"balance": "0",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "300000000000000",
		"previous": "0a00775ce5dd0f14a35555cef0241359f16dfe30ccbb38421fbeae26bd5aa885",
		"link": "0000000000000000000000000000000000000000000000000000000000000018",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "QXEwXX0h1QsGzVSJ7HJsgYwqK/nzJwfmu9AY7M4dc0DvvIHvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANdjFAZ29vZ2xlLmNvbQAAAAAAAAAAAAAAAAAAAAAAAAA=",
		"povHeight": 0,
		"timestamp": 1577261817,
		"extra": "72beb0751b3adc84875f76e569d5ed37d34425c2fba1e7d5e629d976177dd1c3",
		"representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
		"work": "0000000000000000",
		"signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
	}
}


```

```json test
{
"jsonrpc": "2.0",
"id": 3,
"method": "verifier_getRegisterBlock",
"params":[{
    	"account":"qlc_1zb3tn7ifmcnj9p96u63jio4qyhm6w5yfgyi55pew9dma5qus1hhwmx7989k", 			"type":"email", 
    	"id":"v1@google.com"
	}]
}


```

:::

## verifier_getUnregisterBlock

Get a verifier unregister block

- **Parameters**: 
  - `account` : account to register verifier
  - `type` : verifier type (email/weChat)

- **Returns**: 
  -  `block`: verifier unregister block

- **Example**:

::: demo

```json tab:Request
{
"jsonrpc": "2.0",
"id": 3,
"method": "verifier_getUnregisterBlock",
"params":[{
    	"account":"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe", 			"type":"email"
	}]
}


```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"type": "ContractSend",
		"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
		"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"balance": "0",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "300000000000000",
		"previous": "89c85c79253b10d9614e0632e4b39fc28443d07dcb059e0c7df4f4f1a678be71",
		"link": "0000000000000000000000000000000000000000000000000000000000000018",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "9I2H4ieR1aFpfUVESPnuq6KjNuUi1XZ+VwsyYnj1UyGU9kLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
		"povHeight": 0,
		"timestamp": 1577262113,
		"extra": "0000000000000000000000000000000000000000000000000000000000000000",
		"representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
		"work": "0000000000000000",
		"signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
	}
}


```

```json test
{
"jsonrpc": "2.0",
"id": 3,
"method": "verifier_getUnregisterBlock",
"params":[{
    	"account":"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe", 			"type":"email"
	}]
}


```

:::

## verifier_getAllVerifiers

Get all the verifiers

- **Parameters**: 
  - null
- **Returns**: 
  - `account` : verifier account
  - `type` : verifier type
  - `id` : verifier address to receive verify request
- **Example**:

::: demo

```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "verifier_getAllVerifiers",
    "params": null
}


```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "1111@qq.com"
		},
		{
			"account": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"type": "email",
			"id": "2222@qq.com"
		}
	]
}


```

```json test
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "verifier_getAllVerifiers",
    "params": null
}


```

:::

## verifier_getVerifiersByType

Get all the specified type of verifiers

- **Parameters**: 
  - `type` : verifier type (email/weChat)
- **Returns**: 
  - `account` : verifier account
  - `type` : verifier type
  - `id` : verifier address to receive verify request
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "verifier_getVerifiersByType",
	"params": [
		"email"
	]
}


```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "1111@qq.com"
		},
		{
			"account": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"type": "email",
			"id": "2222@qq.com"
		}
	]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "verifier_getVerifiersByType",
	"params": [
		"email"
	]
}


```

:::

## verifier_getVerifiersByAccount

Get all the verifiers registered by the specified account

- **Parameters**: 
  - `account` : verifier register account
- **Returns**: 
  - `account` : verifier account
  - `type` : verifier type
  - `id` : verifier address to receive verify request
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "verifier_getVerifiersByAccount",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}


```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "1111@qq.com"
		}
	]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "verifier_getVerifiersByAccount",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}


```

:::