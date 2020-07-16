# KYC

**Supported protocols:**

| JSON-RPC 2.0 | Websocket |   IPC    | Publish–subscribe |
| :----------: | :-------: | :------: | :---------------: |
|   &#x2713;   | &#x2713;  | &#x2713; |        TBD        |



## Scenario

All these interfaces are used to update user's KYC status to chain.

The genesis account is the initial admin user, it can handover the right to another account by calling **KYC_getAdminHandoverBlock** , the admin can add/remove operator by calling **KYC_getUpdateOperatorBlock**, the admin can add/remove user's stable coin address by calling **KYC_getUpdateTradeAddressBlock**. A user means a qlc address, it can have more than one stable coin address. The operator and admin can update user's KYC status by calling **KYC_getUpdateStatusBlock**.



## KYC_getAdminHandoverBlock

Get a contractSend block to update admin

- **Parameters**: 
  - `admin` : current admin qlc account
  - `successor` : successor account of current admin
  - `comment` : comment message(max 128 bytes)

- **Returns**: 
  -  `block`: contract block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getAdminHandoverBlock",
	"params": [
		{
			"admin": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"successor": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"comment": "t1"
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
		"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
		"address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
		"balance": "59999999999999999",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "51ca286d74aac6730c7ef61f8a1a5e50535066d1e563829370e8bb573d14166b",
		"link": "000000000000000000000000000000000000000000000000000000000000001e",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "k/KOjCeR1aFpfUVESPnuq6KjNuUi1XZ+VwsyYnj1UyGU9kLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnQxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		"povHeight": 16,
		"timestamp": 1594886955,
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
	"method": "KYC_getAdminHandoverBlock",
	"params": [
		{
			"admin": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"successor": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"comment": "t1"
		}
	]
}
```

:::

## KYC_getUpdateOperatorBlock

Get a contractSend block to add/remove a operator, a operator can update the KYC status.

- **Parameters**: 
  - `admin` : current admin's qlc address
  - `operator` : operator's qlc address
  - `action`: add/remove
  - `comment` : comment message(max 128 bytes)

- **Returns**: 
  -  `block`: contract block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getUpdateOperatorBlock",
	"params": [
		{
			"admin": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"operator": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"action": "add",
			"comment": "address1"
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
		"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
		"address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
		"balance": "59999999999999999",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "51ca286d74aac6730c7ef61f8a1a5e50535066d1e563829370e8bb573d14166b",
		"link": "000000000000000000000000000000000000000000000000000000000000001e",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "Ls0CdLuNHJysrjJmJ2vtR/GC3KoJsG2JE4tZntsvdamBWOG4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIYWRkcmVzczEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
		"povHeight": 16,
		"timestamp": 1594887102,
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
	"method": "KYC_getUpdateOperatorBlock",
	"params": [
		{
			"admin": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"operator": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"action": "add",
			"comment": "address1"
		}
	]
}
```

:::

## KYC_getUpdateStatusBlock

Get a contractSend block to update KYC status

- **Parameters**: 

  - `operator` : operator's qlc address

  - `chainAddress` : qlc address of the user whose state will be changed

  - `status`: 

    ```
    "KYC_STATUS_NOT_STARTED"
    "KYC_STATUS_IN_PROGRESS"
    "KYC_STATUS_PROCESSING"
    "KYC_STATUS_FAILED_JUMIO"
    "KYC_STATUS_FAILED_COMPLYADVANTAGE"
    "KYC_STATUS_DENIED"
    "KYC_STATUS_PENDING"
    "KYC_STATUS_PENDING_INSTITUTION"
    "KYC_STATUS_APPROVED"
    "KYC_STATUS_SET_FOR_CLOSURE"
    ```

- **Returns**: 

  -  `block`: contract block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getUpdateStatusBlock",
	"params": [
		{
			"operator": "qlc_1zb3tn7ifmcnj9p96u63jio4qyhm6w5yfgyi55pew9dma5qus1hhwmx7989k",
			"chainAddress": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"status": "KYC_STATUS_IN_PROGRESS"
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
		"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
		"address": "qlc_1zb3tn7ifmcnj9p96u63jio4qyhm6w5yfgyi55pew9dma5qus1hhwmx7989k",
		"balance": "1",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "cb8c0be48dbdf1cc7a1db72e42bd52da90aee728f0fed0febd2e16f6b5af2848",
		"link": "000000000000000000000000000000000000000000000000000000000000001e",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "ArFnL7uNHJysrjJmJ2vtR/GC3KoJsG2JE4tZntsvdamBWOG4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFktZQ19TVEFUVVNfSU5fUFJPR1JFU1MAAAAAAAAAAAAA",
		"povHeight": 19,
		"timestamp": 1594887265,
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
	"method": "KYC_getUpdateStatusBlock",
	"params": [
		{
			"operator": "qlc_1zb3tn7ifmcnj9p96u63jio4qyhm6w5yfgyi55pew9dma5qus1hhwmx7989k",
			"chainAddress": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"status": "KYC_STATUS_IN_PROGRESS"
		}
	]
}
```

:::

## KYC_getUpdateTradeAddressBlock

Get a contractSend block to add/remove user's stable coin address

- **Parameters**: 
  - `admin` : current admin's qlc address
  - `chainAddress` : user's qlc address
  - `add`: add/remove
  - `tradeAddress`: stable coin address
  - `comment` : comment message(max 128 bytes)

- **Returns**: 
  -  `block`: contract block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getUpdateTradeAddressBlock",
	"params": [
		{
			"admin": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"chainAddress": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"action": "add",
			"tradeAddress": "0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826",
			"comment": "address1"
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
		"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
		"address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
		"balance": "59999999999999999",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "51ca286d74aac6730c7ef61f8a1a5e50535066d1e563829370e8bb573d14166b",
		"link": "000000000000000000000000000000000000000000000000000000000000001e",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "Gg5uYruNHJysrjJmJ2vtR/GC3KoJsG2JE4tZntsvdamBWOG4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoweGNkMmEzZDlmOTM4ZTEzY2Q5NDdlYzA1YWJjN2ZlNzM0ZGY4ZGQ4MjYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhZGRyZXNzMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
		"povHeight": 27,
		"timestamp": 1594887864,
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
	"method": "KYC_getUpdateTradeAddressBlock",
	"params": [
		{
			"admin": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
			"chainAddress": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"action": "add",
			"tradeAddress": "0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826",
			"comment": "address1"
		}
	]
}
```

:::

## KYC_getAdmin

Get current admin

- **Parameters**: 
  - null
- **Returns**: 
  -  `admin`: admin's qlc address
  -  `comment`: comment of this admin
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getAdmin",
	"params": null
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"admin": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
		"comment": "Initial admin"
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getAdmin",
	"params": null
}
```

:::

## KYC_getStatusCount

Get all KYC status count

- **Parameters**: 
  - null

- **Returns**: 
  -  `result`: count

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getStatusCount",
	"params": null
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": 1
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getStatusCount",
	"params": null
}
```

:::

## KYC_getStatus

Get KYC status detail info

- **Parameters**: 

  - `count` : count you want to be returned
  - `offset`: offset of the records

- **Returns**: 

  - array of KYC status

    - `chainAddress`: user's qlc address

    - `status`: KYC status

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getStatus",
	"params": [
		10,
		0
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"chainAddress": "qlc_3j3yr5ofohby1d94o3kyursf9tgnotborcrnty48g3wi4ryq6bxjgaeqs1nu",
			"status": "KYC_STATUS_DENIED"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getStatus",
	"params": [
		10,
		0
	]
}
```

:::

## KYC_getStatusByChainAddress

Get KYC status by qlc address

- **Parameters**: 

  - qlc address

- **Returns**: 

  -  `chainAddress`: user's qlc address

  - `status`: KYC status

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getStatusByChainAddress",
	"params": [
		"qlc_3j3yr5ofohby1d94o3kyursf9tgnotborcrnty48g3wi4ryq6bxjgaeqs1nu"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"chainAddress": "qlc_3j3yr5ofohby1d94o3kyursf9tgnotborcrnty48g3wi4ryq6bxjgaeqs1nu",
		"status": "KYC_STATUS_DENIED"
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getStatusByChainAddress",
	"params": [
		"qlc_3j3yr5ofohby1d94o3kyursf9tgnotborcrnty48g3wi4ryq6bxjgaeqs1nu"
	]
}
```

:::

## KYC_getStatusByTradeAddress

Get KYC status by stable coin address

- **Parameters**: 

  - stable coin address

- **Returns**: 

  -  `chainAddress`: user's qlc address

  - `status`: KYC status

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getStatusByTradeAddress",
	"params": [
		"0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"chainAddress": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"status": "KYC_STATUS_APPROVED"
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getStatusByTradeAddress",
	"params": [
		"0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826"
	]
}
```

:::

## KYC_getTradeAddress

Get user's stable coin address by qlc address

- **Parameters**: 

  - qlc address

- **Returns**: 

  -  `chainAddress`: user's qlc address

  - `tradeAddress`: array of stable coin address

    - `address`: stable coin address

    - `comment`: address comment

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getTradeAddress",
	"params": [
		"qlc_3j3yr5ofohby1d94o3kyursf9tgnotborcrnty48g3wi4ryq6bxjgaeqs1nu"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"chainAddress": "qlc_3j3yr5ofohby1d94o3kyursf9tgnotborcrnty48g3wi4ryq6bxjgaeqs1nu",
		"tradeAddress": [
			{
				"address": "0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826",
				"comment": "t1"
			}
		]
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getTradeAddress",
	"params": [
		"qlc_3j3yr5ofohby1d94o3kyursf9tgnotborcrnty48g3wi4ryq6bxjgaeqs1nu"
	]
}
```

:::

## KYC_getOperatorCount

Get all operator count

- **Parameters**: 
  - null

- **Returns**: 
  -  `result`: count

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getOperatorCount",
	"params": null
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": 1
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getOperatorCount",
	"params": null
}
```

:::

## KYC_getOperator

Get operator detail info

- **Parameters**: 

  - `count` : count you want to be returned
  - `offset`: offset of the records

- **Returns**: 

  - array of operator

    - `operator`:operator's qlc address

    - `comment`: operator comment

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getOperator",
	"params": [
		10,
		0
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"operator": "qlc_1zb3tn7ifmcnj9p96u63jio4qyhm6w5yfgyi55pew9dma5qus1hhwmx7989k",
			"comment": "op3"
		},
		{
			"operator": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"comment": "op1"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "KYC_getOperator",
	"params": [
		10,
		0
	]
}
```

:::