# Publisher


**Supported protocols:**

| JSON-RPC 2.0 | Websocket |   IPC    | Publish–subscribe |
| :----------: | :-------: | :------: | :---------------: |
|   &#x2713;   | &#x2713;  | &#x2713; |        TBD        |

## publisher_getPublishBlock

Get a publish block to publish a id/publicKey pair

-  **Parameters**: 
  - `account` : account to publish
  - `type` : verifier type (email/weChat)
  - `id` : id address
  - `pubKey` : public key
  - `fee` : fee of this publish (5 qgas at least)
  - `verifiers` : verifiers to verify this id

- **Returns**: 
  -  `block`: publish block
  -  `verifiers` : verifier info with a random verification code

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "publisher_getPublishBlock",
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
	"method": "publisher_getPublishBlock",
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

## publisher_getUnPublishBlock

Get a unpublish block to unpublish a id/publicKey pair

-  **Parameters**: 
  - `account` : account to publish
  - `type` : verifier type (email/weChat)
  - `id` : id address

- **Returns**: 
  -  `block`: unpublish block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "publisher_getUnPublishBlock",
	"params": [
		{
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "3@qq.com"
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
	"method": "publisher_getUnPublishBlock",
	"params": [
		{
			"account": "qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
			"type": "email",
			"id": "3@qq.com"
		}
	]
}


```

:::

## publisher_getPubKeyByTypeAndID

Get publish info by type and id address

-  **Parameters**: 
  - `type` : verifier type (email/weChat)
  - `id` : id address

- **Returns**: 
  -  `publishInfo`: published infos

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "publisher_getPubKeyByTypeAndID",
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
			]
		}
	]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "publisher_getPubKeyByTypeAndID",
	"params": [
		"email",
		"4@qq.com"
	]
}


```

:::

## publisher_getPublishInfosByType

Get publish info by type

-  **Parameters**: 
  - `type` : verifier type (email/weChat)

- **Returns**: 
  -  `publishInfo`: published infos

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "publisher_getPublishInfosByType",
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
			]
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
			]
		}
	]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "publisher_getPublishInfosByType",
	"params": [
		"email"
	]
}


```

:::

## publisher_getPublishInfosByAccountAndType

Get publish info by account and type

-  **Parameters**: 
  - `account` : account to publish
  - `type` : verifier type (email/weChat)

- **Returns**: 
  -  `publishInfo`: published infos
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "publisher_getPublishInfosByAccountAndType",
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
			]
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
			]
		}
	]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "publisher_getPublishInfosByAccountAndType",
	"params": [
		"qlc_3t1mwnf8u4oyn7wc7wuptnsfz83wsbrubs8hdhgkty56xrrez4x7fcttk5f3",
		"email"
	]
}


```

:::