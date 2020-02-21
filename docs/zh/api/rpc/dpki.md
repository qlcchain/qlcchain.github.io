

# Decentralized Public Key Infrastructure

**Supported protocols:**

| JSON-RPC 2.0 | Websocket |   IPC    | Publish–subscribe |
| :----------: | :-------: | :------: | :---------------: |
|   &#x2713;   | &#x2713;  | &#x2713; |        TBD        |



## dpki_getVerifierRegisterBlock

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
"method": "dpki_getVerifierRegisterBlock",
"params":[{
    	"account":"qlc_1zb3tn7ifmcnj9p96u63jio4qyhm6w5yfgyi55pew9dma5qus1hhwmx7989k",
    	"type":"email", 
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
"method": "dpki_getVerifierRegisterBlock",
"params":[{
    	"account":"qlc_1zb3tn7ifmcnj9p96u63jio4qyhm6w5yfgyi55pew9dma5qus1hhwmx7989k",
    	"type":"email", 
    	"id":"v1@google.com"
	}]
}
```

:::

## dpki_getVerifierUnregisterBlock

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
"method": "dpki_getVerifierUnregisterBlock",
"params":[{
    	"account":"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
    	"type":"email"
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
"method": "dpki_getVerifierUnregisterBlock",
"params":[{
    	"account":"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
    	"type":"email"
	}]
}


```

:::

## dpki_getAllVerifiers

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
    "method": "dpki_getAllVerifiers",
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
    "method": "dpki_getAllVerifiers",
    "params": null
}
```

:::

## dpki_getVerifiersByType

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
	"method": "dpki_getVerifiersByType",
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
	"method": "dpki_getVerifiersByType",
	"params": [
		"email"
	]
}
```

:::

## dpki_getActiveVerifiers

Get up to 5 active verifiers of specified type, active means have sent a oracle block in last 24 hours.

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
	"method": "dpki_getActiveVerifiers",
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
	"method": "dpki_getActiveVerifiers",
	"params": [
		"email"
	]
}
```

:::

## dpki_getVerifiersByAccount

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
	"method": "dpki_getVerifiersByAccount",
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
	"method": "dpki_getVerifiersByAccount",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}
```

:::

## dpki_getVerifierStateByBlockHeight

Get verifier state by the specified account and pov height

- **Parameters**: 
  - `height` : pov height
  - `account` : verifier register account
- **Returns**: 
  - `totalVerify` : verified amount
  - `totalReward` : total reward
  - `activeHeight` : lastest oracle action in pov height for each verifier type
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getVerifierStateByBlockHeight",
	"params": [
		100,
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"totalVerify": 1,
		"totalReward": 100000000,
		"activeHeight": {
			"email": 1
		}
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getVerifierStateByBlockHeight",
	"params": [
		100,
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}
```

:::

## dpki_getAllVerifierStatesByBlockHeight

Get all verifiers's state by the specified pov height

- **Parameters**: 
  - `height` : pov height
- **Returns**: 
  - `totalVerify` : verified amount
  - `totalReward` : total reward
  - `activeHeight` : lastest oracle action in pov height for each verifier type
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getAllVerifierStatesByBlockHeight",
	"params": [
		100
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"verifierNum": 8,
		"allVerifiers": {
			"qlc_176iqjxz1tif1m8xarzhzhwg5b1dtgmmp1g1emb5d1bij18ahwwhsyoaqc8m": {
				"totalVerify": 1,
				"totalReward": 200000000,
				"activeHeight": {
					"email": 1
				}
			},
			"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe": {
				"totalVerify": 1,
				"totalReward": 100000000,
				"activeHeight": {
					"email": 1
				}
			},
			"qlc_1hgntwsa9wmqq6z8onpwzmpofs76ay5drqg45c74tjur5cqhmiye3exiuqtw": {
				"totalVerify": 1,
				"totalReward": 100000000,
				"activeHeight": {
					"email": 1
				}
			}
		}
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getAllVerifierStatesByBlockHeight",
	"params": [
		100
	]
}
```

:::

## dpki_getVerifierHeartBlock

Get verifier heart block

- **Parameters**: 
  - `account` : verifier account
  - `types` : verifier types
- **Returns**: 
  - `stateBlock` : verifierHeartBlock
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getVerifierHeartBlock",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		["email", "weChat"]
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"type": "ContractSend",
		"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
		"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"balance": "9999980000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "2d62ff14f263ad1a7ea814de2262bcf634d5167d0a9046ed0a01daefea5f299d",
		"link": "0000000000000000000000000000000000000000000000000000000000000018",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "YSVblgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
		"povHeight": 1,
		"timestamp": 1582252085,
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
	"method": "dpki_getVerifierHeartBlock",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		["email", "weChat"]
	]
}
```

:::

## dpki_getPublishBlock

Get a publish block to publish a id/publicKey pair

-  **Parameters**: 
   - `account` : account to publish
   - `type` : verifier type (email/weChat)
   - `id` : id address
   - `pubKey` : public key
   - `fee` : fee of this publish (5 qgas at least)
   - `verifiers` : verifiers to verify this id

-  **Returns**: 
   -  `block`: publish block
   -  `verifiers` : verifier info with a random verification code

-  **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getPublishBlock",
	"params": [
		{
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "11@qq.com",
			"pubkey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e4942211",
			"fee": "500000000",
			"verifiers": [
				"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"
			]
		}
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"block": {
			"type": "ContractSend",
			"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
			"address": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"balance": "9989999000000000",
			"vote": "0",
			"network": "0",
			"storage": "0",
			"oracle": "0",
			"previous": "90b57aed976db4e37a5a141685c9323f1f5e0ce1f2684854b13e6583598b4660",
			"link": "0000000000000000000000000000000000000000000000000000000000000019",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"data": "hIXmgugT5Rptir6heKLzdtUy35g8ynG05M9b3S14ZO4wz4ulAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLemtIlvcf98NaTICc1JlR0QjU8yHjikeGUeBhsf0HTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdzWUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAInkdWhaX1FREj57quiozblItV2flcLMmJ49VMhlPZCyL+GyD+0v7n0m5uPpZPIz0EoyeIXIMSHVltS/GZAqejzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIMsBL/Bo8Lh9z6KWmdJQxJNqxc2DxaV6Zoh1ri6EyTYMwJjC0ijC7WSdr0w5KG0YYuC25CoTVohiAuMOBNVlbt",
			"povHeight": 0,
			"timestamp": 1577252008,
			"extra": "23ef2fc8a80f0500844a515ba13424be73bcc78f8144333973f352ef955f2d1a",
			"representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"work": "0000000000000000",
			"signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
		},
		"verifiers": {
			"lc2@qq.com": {
				"pubKey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e4942211",
				"code": "2hTx16nDIOA66zWZ",
				"hash": "a987da2a34d976c320247361be7165462a3e59356fc21cbdb2e11a8708b99ee5"
			},
			"lc@qq.com": {
				"pubKey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e4942211",
				"code": "NN3A6jgxmBtVIY6h",
				"hash": "a987da2a34d976c320247361be7165462a3e59356fc21cbdb2e11a8708b99ee5"
			}
		}
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getPublishBlock",
	"params": [
		{
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "11@qq.com",
			"pubkey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e4942211",
			"fee": "500000000",
			"verifiers": [
				"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"
			]
		}
	]
}
```

:::

## dpki_getUnPublishBlock

Get a unpublish block to unpublish a id/publicKey pair

-  **Parameters**: 
   - `account` : account to publish
   - `type` : verifier type (email/weChat)
   - `id` : id address
   - `pubKey`: public key to unpublish
   - `hash`: hash returned by dpki_getPublishBlock
   
-  **Returns**: 
   -  `block`: unpublish block

-  **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getUnPublishBlock",
	"params": [
		{
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "3@qq.com",
			"pubKey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e4942211",
			"hash": "a987da2a34d976c320247361be7165462a3e59356fc21cbdb2e11a8708b99ee5"
		}
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"type": "ContractSend",
		"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
		"address": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
		"balance": "9979999000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2",
		"link": "0000000000000000000000000000000000000000000000000000000000000019",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "RoyIg+gT5Rptir6heKLzdtUy35g8ynG05M9b3S14ZO4wz4ulAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADaH/S3Ze4E6aAWkyZpegE8mWVeZsD8XQZEV0p0HjYa1g==",
		"povHeight": 0,
		"timestamp": 1577265130,
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
	"method": "dpki_getUnPublishBlock",
	"params": [
		{
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "3@qq.com",
			"pubKey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e4942211",
			"hash": "a987da2a34d976c320247361be7165462a3e59356fc21cbdb2e11a8708b99ee5"
		}
	]
}
```

:::

## dpki_getPubKeyByTypeAndID

Get publish info by type and id address

-  **Parameters**: 
   - `type` : verifier type (email/weChat)
   - `id` : id address

-  **Returns**: 
   -  `publishInfo`: published infos

-  **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getPubKeyByTypeAndID",
	"params": [
		"email",
		"4@qq.com"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "7c30a50845d87ae02aa7bdcb82a36a4d454a4e9308d4680db4186449b4746d23",
			"pubKey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"fee": "500000000",
			"verifiers": [
				"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
			],
			"codes": [
				"adb62153d702faf450a9a51d62543cf8ecb7154eefdb8ad5076d3749f5e50ffe",
				"cdc1007bb6e21fcc7c42ec43ad16be7b628ee1de8cadebb94d7f54a095a1cd7f"
			],
			"hash": "a987da2a34d976c320247361be7165462a3e59356fc21cbdb2e11a8708b99ee5"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getPubKeyByTypeAndID",
	"params": [
		"email",
		"4@qq.com"
	]
}
```

:::

## dpki_getRecommendPubKey

Get the recommend public key by type and id, will only return one record.

-  **Parameters**: 
   - `type` : id type (email/weChat)
   - `id` : id address

-  **Returns**: 
   -  `publishInfo`: published infos
   -  `publishHeight`: publish time
   -  `verifiedHeight`: the time of this record's state changed from unverified to verified
   -  `verifiedStatus`: verified status(0:unverified 1:verified)
   -  `oracleAccounts`: verifiers that make the proof for this publish

-  **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getRecommendPubKey",
	"params": [
		"email",
		"4@qq.com"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "7c30a50845d87ae02aa7bdcb82a36a4d454a4e9308d4680db4186449b4746d23",
			"pubKey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"fee": "500000000",
			"verifiers": [
				"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
			],
			"codes": [
				"adb62153d702faf450a9a51d62543cf8ecb7154eefdb8ad5076d3749f5e50ffe",
				"cdc1007bb6e21fcc7c42ec43ad16be7b628ee1de8cadebb94d7f54a095a1cd7f"
			],
			"hash": "a987da2a34d976c320247361be7165462a3e59356fc21cbdb2e11a8708b99ee5",
      "state": {
        "oracleAccounts": [
          "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
          "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
          "qlc_1zb3tn7ifmcnj9p96u63jio4qyhm6w5yfgyi55pew9dma5qus1hhwmx7989k",
          "qlc_3j3yr5ofohby1d94o3kyursf9tgnotborcrnty48g3wi4ryq6bxjgaeqs1nu",
          "qlc_1hgntwsa9wmqq6z8onpwzmpofs76ay5drqg45c74tjur5cqhmiye3exiuqtw"
        ],
        "publishHeight": 1,
        "verifiedHeight": 1,
        "verifiedStatus": 1,
        "bonusFee": 500000000
      }
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getRecommendPubKey",
	"params": [
		"email",
		"4@qq.com"
	]
}
```

:::

## dpki_getPublishInfosByType

Get publish info by type

-  **Parameters**: 
   - `type` : verifier type (email/weChat)

-  **Returns**: 
   -  `publishInfo`: published infos

-  **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getPublishInfosByType",
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
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "7c30a50845d87ae02aa7bdcb82a36a4d454a4e9308d4680db4186449b4746d23",
			"pubKey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"fee": "500000000",
			"verifiers": [
				"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
			],
			"codes": [
				"adb62153d702faf450a9a51d62543cf8ecb7154eefdb8ad5076d3749f5e50ffe",
				"cdc1007bb6e21fcc7c42ec43ad16be7b628ee1de8cadebb94d7f54a095a1cd7f"
			],
			"hash": "a987da2a34d976c320247361be7165462a3e59356fc21cbdb2e11a8708b99ee5"
		},
		{
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "da1ff4b765ee04e9a0169326697a013c99655e66c0fc5d0644574a741e361ad6",
			"pubKey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a3",
			"fee": "500000000",
			"verifiers": [
				"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
			],
			"codes": [
				"9a9dfcc079c7bdeaa41de0d80bb5f3acda0026195b784116320c83642696e1e5",
				"2991b9070b296efc30da2baaa4ea63571c2afb1cf898172c54efc870652a683f"
			],
			"hash": "a987da2a34d976c320247361be7165462a3e59356fc21cbdb2e11a8708b99ee5"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getPublishInfosByType",
	"params": [
		"email"
	]
}
```

:::

## dpki_getPublishInfosByAccountAndType

Get publish info by account and type

-  **Parameters**: 
   - `account` : account to publish
   - `type` : verifier type (email/weChat)

-  **Returns**: 
   -  `publishInfo`: published infos
-  **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getPublishInfosByAccountAndType",
	"params": [
		"qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
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
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "7c30a50845d87ae02aa7bdcb82a36a4d454a4e9308d4680db4186449b4746d23",
			"pubKey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"fee": "500000000",
			"verifiers": [
				"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
			],
			"codes": [
				"adb62153d702faf450a9a51d62543cf8ecb7154eefdb8ad5076d3749f5e50ffe",
				"cdc1007bb6e21fcc7c42ec43ad16be7b628ee1de8cadebb94d7f54a095a1cd7f"
			],
			"hash": "a987da2a34d976c320247361be7165462a3e59356fc21cbdb2e11a8708b99ee5"
		},
		{
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "da1ff4b765ee04e9a0169326697a013c99655e66c0fc5d0644574a741e361ad6",
			"pubKey": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a3",
			"fee": "500000000",
			"verifiers": [
				"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
			],
			"codes": [
				"9a9dfcc079c7bdeaa41de0d80bb5f3acda0026195b784116320c83642696e1e5",
				"2991b9070b296efc30da2baaa4ea63571c2afb1cf898172c54efc870652a683f"
			],
			"hash": "a987da2a34d976c320247361be7165462a3e59356fc21cbdb2e11a8708b99ee5"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getPublishInfosByAccountAndType",
	"params": [
		"qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
		"email"
	]
}
```

:::

## dpki_getOracleBlock

Get a oracle block

- **Parameters**: 
  - `account` : verify account
  - `type` : verify type (email/weChat)
  - `id` : id address to verify
  - `pk` : public key to verify
  - `code` : random code returned by pushlisher_getPublishBlock
  - `hash` : publish block hash to verify

- **Returns**: 
  -  `block`: oracle block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "dpki_getOracleBlock",
	"params": [
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "4@qq.com",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"code": "2LvHuM8Wt9GNWtjq",
			"hash": "c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2"
		}
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 2,
	"result": {
		"type": "ContractSend",
		"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
		"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"balance": "9999970000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "c28440922f15dd42e2a2b5d2250e74fcd77e62bb5250b89d75c2484c510926a4",
		"link": "000000000000000000000000000000000000000000000000000000000000001a",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "92wlmyeR1aFpfUVESPnuq6KjNuUi1XZ+VwsyYnj1UyGU9kLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8MKUIRdh64CqnvcuCo2pNRUpOkwjUaA20GGRJtHRtIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODEiH/WMkX9qmh46cy8eSGqgFy0AkFc1BhkXhOlKYBHogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQMkx2SHVNOFd0OUdOV3RqcQAAAAAAAAAAAAAAAAAAAAA=",
		"povHeight": 0,
		"timestamp": 1577267220,
		"extra": "a79c4432e1eb05eebfbb3b527dc578d47dd2f8c6c9f46a2593ddde9613741b48",
		"representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
		"work": "0000000000000000",
		"signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "dpki_getOracleBlock",
	"params": [
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "4@qq.com",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"code": "2LvHuM8Wt9GNWtjq",
			"hash": "c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2"
		}
	]
}
```

:::

## dpki_getOracleInfosByType

Get oracle infos by type

- **Parameters**: 
  - `type` : verify type (email/weChat), get all types if type is empty

- **Returns**: 
  -  `oracleInfo`: oracle info

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "dpki_getOracleInfosByType",
	"params": [
		"email"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 2,
	"result": [
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "7c30a50845d87ae02aa7bdcb82a36a4d454a4e9308d4680db4186449b4746d23",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"code": "2LvHuM8Wt9GNWtjq",
			"hash": "c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2"
		},
		{
			"account": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"type": "email",
			"id": "7c30a50845d87ae02aa7bdcb82a36a4d454a4e9308d4680db4186449b4746d23",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"code": "YZGPvp0iqBQVmxYj",
			"hash": "c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2"
		},
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "da1ff4b765ee04e9a0169326697a013c99655e66c0fc5d0644574a741e361ad6",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a3",
			"code": "sTCQWjF810K4vrPX",
			"hash": "51b98440d8d166e39b5f8c341d92fa12c23397cb7f65828f492053173a3da187"
		},
		{
			"account": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"type": "email",
			"id": "da1ff4b765ee04e9a0169326697a013c99655e66c0fc5d0644574a741e361ad6",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a3",
			"code": "VP2a9oqwI8xTBMPT",
			"hash": "51b98440d8d166e39b5f8c341d92fa12c23397cb7f65828f492053173a3da187"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "dpki_getOracleInfosByType",
	"params": [
		"email"
	]
}
```

:::

## dpki_getOracleInfosByTypeAndID

Get oracle infos by type and id

- **Parameters**: 
  - `type` : verify type (email/weChat)
  - `id` : id address

- **Returns**: 
  -  `oracleInfo`: oracle info

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "dpki_getOracleInfosByTypeAndID",
	"params": [
		"email",
		"3@qq.com"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 2,
	"result": [
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "da1ff4b765ee04e9a0169326697a013c99655e66c0fc5d0644574a741e361ad6",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a3",
			"code": "sTCQWjF810K4vrPX",
			"hash": "51b98440d8d166e39b5f8c341d92fa12c23397cb7f65828f492053173a3da187"
		},
		{
			"account": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"type": "email",
			"id": "da1ff4b765ee04e9a0169326697a013c99655e66c0fc5d0644574a741e361ad6",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a3",
			"code": "VP2a9oqwI8xTBMPT",
			"hash": "51b98440d8d166e39b5f8c341d92fa12c23397cb7f65828f492053173a3da187"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "dpki_getOracleInfosByTypeAndID",
	"params": [
		"email",
		"3@qq.com"
	]
}
```

:::

## dpki_getOracleInfosByAccountAndType

Get oracle infos by account and type

- **Parameters**: 
  - `account` : verify account
  - `type` : verify type (email/weChat), get all types if type is empty

- **Returns**: 
  -  `oracleInfo`: oracle info
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "dpki_getOracleInfosByAccountAndType",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"email"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 2,
	"result": [
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "7c30a50845d87ae02aa7bdcb82a36a4d454a4e9308d4680db4186449b4746d23",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"code": "2LvHuM8Wt9GNWtjq",
			"hash": "c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2"
		},
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "da1ff4b765ee04e9a0169326697a013c99655e66c0fc5d0644574a741e361ad6",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a3",
			"code": "sTCQWjF810K4vrPX",
			"hash": "51b98440d8d166e39b5f8c341d92fa12c23397cb7f65828f492053173a3da187"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "dpki_getOracleInfosByAccountAndType",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"email"
	]
}
```

:::

## dpki_getOracleInfosByHash

Get oracle infos by hash

- **Parameters**: 
  - `hash` : publish block hash to verify

- **Returns**: 
  -  `oracleInfo`: oracle info
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "dpki_getOracleInfosByHash",
	"params": [
		"c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 2,
	"result": [
		{
			"account": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"type": "email",
			"id": "7c30a50845d87ae02aa7bdcb82a36a4d454a4e9308d4680db4186449b4746d23",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"code": "2LvHuM8Wt9GNWtjq",
			"hash": "c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2"
		},
		{
			"account": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"type": "email",
			"id": "7c30a50845d87ae02aa7bdcb82a36a4d454a4e9308d4680db4186449b4746d23",
			"pk": "0ae6c2ade291b398c3dc4b4c0164bf72813d6150b25da69371bb3008e49422a4",
			"code": "YZGPvp0iqBQVmxYj",
			"hash": "c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 2,
	"method": "dpki_getOracleInfosByHash",
	"params": [
		"c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2"
	]
}
```

:::

## dpki_getAvailRewardInfo

Get available reward info for specified verifier

- **Parameters**: 
  - `account` : verifier account

- **Returns**: 
  -  `lastEndHeight`: last reward height
  -  `latestBlockHeight`: current pov height
  -  `nodeRewardHeight`: can reward up to this height on the node
  -  `availEndHeight`: available reward height
  -  `availRewardAmount`: available reward amount
  -  `needCallReward`: if need to claim the reward
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getAvailRewardInfo",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
  ]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"lastEndHeight": 0,
		"latestBlockHeight": 4,
		"nodeRewardHeight": 0,
		"availEndHeight": 0,
		"availRewardAmount": "0",
		"needCallReward": false
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getAvailRewardInfo",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
  ]
}
```

:::

## dpki_getRewardSendBlock

Get reward send block

- **Parameters**: 
  - `account` : verifier account
  - `beneficial`: beneficial account
  - `endHeight`: claim to this height
  - `rewardAmount`: reward amount

- **Returns**: 
  -  `stateBlock`: reward send block
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getRewardSendBlock",
	"params": [
		{
			"account:": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"beneficial": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"endHeight": 2880,
			"rewardAmount": 100000000
		}
  ]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
			"type": "ContractSend",
			"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
			"address": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"balance": "9314997500000000",
			"vote": "0",
			"network": "0",
			"storage": "0",
			"oracle": "0",
			"previous": "89292b7f32dac4fd84eff1e8f5b364463309bc62dd22b858b9ef10200e1fc708",
			"link": "0000000000000000000000000000000000000000000000000000000000000018",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"data": "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",
			"povHeight": 30,
			"timestamp": 1582256948,
			"extra": "323ac1c3da127258e4219e2750f705397c22d65b5d5910b3b52414e5b8b08160",
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
	"method": "dpki_getRewardSendBlock",
	"params": [
		{
			"account:": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"beneficial": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"endHeight": 2880,
			"rewardAmount": 100000000
		}
  ]
}
```

:::

## dpki_getRewardRecvBlockBySendHash

Get reward send block

- **Parameters**: 
  - `hash` : send block hash

- **Returns**: 
  -  `stateBlock`: reward receive block
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getRewardRecvBlockBySendHash",
	"params": [
		"f436d8b49fab5180b343269ce4da7adf5498122eeccec1e3a5600041199c5965"
  ]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
			"type": "ContractSend",
			"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
			"address": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"balance": "9314997500000000",
			"vote": "0",
			"network": "0",
			"storage": "0",
			"oracle": "0",
			"previous": "89292b7f32dac4fd84eff1e8f5b364463309bc62dd22b858b9ef10200e1fc708",
			"link": "0000000000000000000000000000000000000000000000000000000000000018",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"data": "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",
			"povHeight": 30,
			"timestamp": 1582256948,
			"extra": "323ac1c3da127258e4219e2750f705397c22d65b5d5910b3b52414e5b8b08160",
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
	"method": "dpki_getRewardRecvBlockBySendHash",
	"params": [
		"f436d8b49fab5180b343269ce4da7adf5498122eeccec1e3a5600041199c5965"
  ]
}
```

:::

## dpki_getRewardHistory

Get reward history

- **Parameters**: 
  - `account` : verifier account

- **Returns**: 
  -  `lastEndHeight`: last reward height
  -  `lastBeneficial`: last beneficial account
  -  `LastRewardTime`: last claim time
  -  `RewardAmount`: reward have claimed
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getRewardHistory",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
  ]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"lastEndHeight": 2880,
		"lastBeneficial": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"LastRewardTime": 1582256948,
		"RewardAmount": 200000000
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "dpki_getRewardHistory",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
  ]
}
```

:::