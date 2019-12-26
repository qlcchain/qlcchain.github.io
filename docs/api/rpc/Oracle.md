# Oracle

**Supported protocols:**

| JSON-RPC 2.0 | Websocket |   IPC    | Publish–subscribe |
| :----------: | :-------: | :------: | :---------------: |
|   &#x2713;   | &#x2713;  | &#x2713; |        TBD        |

## oracle_getOracleBlock

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
	"method": "oracle_getOracleBlock",
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
	"method": "oracle_getOracleBlock",
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

## oracle_getOracleInfosByType

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
	"method": "oracle_getOracleInfosByType",
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
	"method": "oracle_getOracleInfosByType",
	"params": [
		"email"
	]
}


```

:::

## oracle_getOracleInfosByTypeAndID

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
	"method": "oracle_getOracleInfosByTypeAndID",
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
	"method": "oracle_getOracleInfosByTypeAndID",
	"params": [
		"email",
		"3@qq.com"
	]
}


```

:::

## oracle_getOracleInfosByAccountAndType

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
	"method": "oracle_getOracleInfosByAccountAndType",
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
	"method": "oracle_getOracleInfosByAccountAndType",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"email"
	]
}


```

:::

## oracle_getOracleInfosByHash

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
	"method": "oracle_getOracleInfosByHash",
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
	"method": "oracle_getOracleInfosByHash",
	"params": [
		"c4887fd63245fdaa6878e9ccbc7921aa805cb402415cd418645e13a5298047a2"
	]
}


```

:::