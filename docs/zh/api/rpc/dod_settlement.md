# DoD Settlement

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe |
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## DoDSettlement Scenario

- Create Products Interface Calling Flow:

  DoDSettlement_getCreateOrderBlock(as createBlock) By Buyer

  DoDSettlement_getPendingRequest By Seller

  DoDSettlement_getCreateOrderRewardBlock By Seller

  Pass createBlock's previous hash as external ID to sonata API and Call sonata API to create products

  DoDSettlement_getUpdateOrderInfoBlock By Buyer

  DoDSettlement_GetPendingResourceCheck By Seller

  DoDSettlement_getResourceReadyBlock By Seller

  DoDSettlement_getUpdateOrderInfoRewardBlock By Seller

- Change Products Interface Calling Flow:

  DoDSettlement_getChangeOrderBlock(as changeBlock) By Buyer

  DoDSettlement_getPendingRequest By Seller

  DoDSettlement_getChangeOrderRewardBlock By Seller

  Pass changeBlock's previous hash as external ID to sonata API and Call sonata API to change products

  DoDSettlement_getUpdateOrderInfoBlock By Buyer

  DoDSettlement_getResourceReadyBlock By Seller

  DoDSettlement_getUpdateOrderInfoRewardBlock By Seller

- Terminate Products Interface Calling Flow:

  DoDSettlement_getTerminateOrderBlock(as terminateBlock) By Buyer

  DoDSettlement_getPendingRequest By Seller

  DoDSettlement_getTerminateOrderRewardBlock By Seller

  Pass terminateBlock's previous hash as external ID to sonata API and Call sonata API to terminate products

  DoDSettlement_getUpdateOrderInfoBlock By Buyer

  DoDSettlement_GetPendingResourceCheck By Seller

  DoDSettlement_getResourceReadyBlock By Seller

  DoDSettlement_getUpdateOrderInfoRewardBlock By Seller



## DoDSettlement_getCreateOrderBlock

Generate a block to create a request for creating a connection or other product.
- **Parameters**: 
    - `buyer`: buyer info
      - `address`: buyer's qlc address
      - `name`: buyer's name
    - `seller`: seller info
      - `address`: seller's qlc address
      - `name`: seller's name
    - `connections`: array of connection params
      - `connectionName`: 
      - `srcCompanyName`: 
      - `srcRegion`:
      - `srcCity`:
      - `srcDataCenter`:
      - `srcPort`:
      - `dstCompanyName`:
      - `dstRegion`:
      - `dstCity`:
      - `dstDataCenter`:
      - `dstPort`:
      - `paymentType`: invoice/stablecoin
      - `billingType`: PAYG/DOD
      - `currency`:
      - `bandwidth`:
      - `billingUnit`: year/month/week/day/hour/minute/second, only for PAYG
      - `price`:
      - `startTime`: need to be set when billingType is DOD
      - `endTime`: need to be set when billingType is DOD
      - `serviceClass`: gold/silver/bronze
- **Returns**: 
  - `block`: a block
  
- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getCreateOrderBlock",
	"params": [
		{
			"buyer": {
				"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"name": "CBC"
			},
			"seller": {
				"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
				"name": "PCCWG"
			},
			"connections": [
				{
					"connectionName": "connection665737529435949039",
					"srcCompanyName": "CBC",
					"srcRegion": "CHN",
					"srcCity": "HK",
					"srcDataCenter": "DCX",
					"srcPort": "port1",
					"dstCompanyName": "CBC",
					"dstRegion": "USA",
					"dstCity": "NYC",
					"dstDataCenter": "DCY",
					"dstPort": "port2",
					"paymentType": "invoice",
					"billingType": "PAYG",
					"currency": "USD",
					"bandwidth": "100 Mbps",
					"billingUnit": "second",
					"price": 1,
					"startTime": 0,
					"endTime": 0,
					"serviceClass": "gold"
				}
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
		"type": "ContractSend",
		"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
		"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "01a88fc4afc87b866d3d0e7b15bed6e36ba9bd7ec5b4c02e1970189415f96901",
		"link": "000000000000000000000000000000000000000000000000000000000000001d",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "HS0P1IOhYoKhYccgYyeR1aFpfUVESPnuq6KjNuUi1XZ+VwsyYnj1UyGU9kLIoW6jQ0JDoXOCoWHHIGO7jRycrK4yZidr7UfxgtyqCbBtiROLWZ7bL3WpgVjhuKFupVBDQ1dHoWORgr5Eb0RTZXR0bGVDb25uZWN0aW9uU3RhdGljUGFyYW2LonBpoKNzY26jQ0JDonNyo0NITqJzY6JIS6NzZGOjRENYonNwpXBvcnQxo2RjbqNDQkOiZHKjVVNBomRjo05ZQ6NkZGOjRENZomRwpXBvcnQyv0RvRFNldHRsZUNvbm5lY3Rpb25EeW5hbWljUGFyYW2KomNuvGNvbm5lY3Rpb242NjU3Mzc1Mjk0MzU5NDkwMzmicHQBomJ0AaJjcqNVU0Sjc2NzAaJid6gxMDAgTWJwc6JidQehcMs/8AAAAAAAAKJzdACiZXQA",
		"povHeight": 0,
		"timestamp": 1589376428,
		"extra": "2406ce1851f0487e575216af2ebd49f8ec574375aa7944b052ffaaddc3eb27eb",
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
	"method": "DoDSettlement_getCreateOrderBlock",
	"params": [
		{
			"buyer": {
				"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"name": "CBC"
			},
			"seller": {
				"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
				"name": "PCCWG"
			},
			"connections": [
				{
					"connectionName": "connection665737529435949039",
					"srcCompanyName": "CBC",
					"srcRegion": "CHN",
					"srcCity": "HK",
					"srcDataCenter": "DCX",
					"srcPort": "port1",
					"dstCompanyName": "CBC",
					"dstRegion": "USA",
					"dstCity": "NYC",
					"dstDataCenter": "DCY",
					"dstPort": "port2",
					"paymentType": "invoice",
					"billingType": "PAYG",
					"currency": "USD",
					"bandwidth": "100 Mbps",
					"billingUnit": "second",
					"price": 1,
					"startTime": 0,
					"endTime": 0,
					"serviceClass": "gold"
				}
			]
		}
	]
}
```
:::

## DoDSettlement_getCreateOrderRewardBlock

Generate a block to confirm or reject a creating request.

- **Parameters**: 
  - `requestHash`: request block hash
  - `action`: confirm/reject this request
- **Returns**: 
  - `block`: a block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getCreateOrderRewardBlock",
	"params": [
		{
			"requestHash": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
			"action": "confirm"
		}
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"type": "ContractReward",
		"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
		"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "95ba0b85d6458739fff02d34152cba61f7d01ea1ae85eea1b6bac58931153e51",
		"link": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "gaFjAQ==",
		"povHeight": 0,
		"timestamp": 1589377020,
		"extra": "121259be61fd87612a1e8bcb89264d00ab93d77cca07c57291a55d3b144be182",
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
	"method": "DoDSettlement_getCreateOrderRewardBlock",
	"params": [
		{
			"requestHash": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
			"action": "confirm"
		}
	]
}
```

:::

## DoDSettlement_getUpdateOrderInfoBlock

Generate a block to update order id and product id to chain.

- **Parameters**: 
  - `buyer`: buyer's qlc address
  - `internalId`: order's internal id in qlcchain
  - `orderId`: order's id from sonata api
  - `productId`: array of product's id from sonata api
  - `orderStatus`: success/fail, result of sonata api
  - `failReason`: fail reason of sonata api
- **Returns**: 
  - `block`: a block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getUpdateOrderInfoBlock",
	"params": [
		{
			"buyer": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"internalId": "01a88fc4afc87b866d3d0e7b15bed6e36ba9bd7ec5b4c02e1970189415f96901",
			"orderId": "order000001",
			"productId": ["product001", "product001"],
			"orderStatus": "success",
			"failReason": ""
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
		"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
		"link": "000000000000000000000000000000000000000000000000000000000000001d",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "KXBN84WhaccgZQGoj8SvyHuGbT0OexW+1uNrqb1+xbTALhlwGJQV+WkBom9pq29yZGVyMDAwMDAxonBpkqpwcm9kdWN0MDAxqnByb2R1Y3QwMDGhcwCiZnKg",
		"povHeight": 0,
		"timestamp": 1589377380,
		"extra": "92a6cad90ecc9b8e1ebd0ab7f27c76de62c9bfe16fa6dc8a3bf0293cc7bff3ed",
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
	"method": "DoDSettlement_getUpdateOrderInfoBlock",
	"params": [
		{
			"buyer": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"internalId": "01a88fc4afc87b866d3d0e7b15bed6e36ba9bd7ec5b4c02e1970189415f96901",
			"orderId": "order000001",
			"productId": ["product001", "product001"],
			"orderStatus": "success",
			"failReason": ""
		}
	]
}
```

:::

## DoDSettlement_getUpdateOrderInfoRewardBlock

Generate a block to update order state to complete when all products in this order can be used normally.

- **Parameters**: 
  - `requestHash`: request block hash
- **Returns**: 
  - `block`: a block
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getUpdateOrderInfoRewardBlock",
	"params": [
		{
			"requestHash": "c06cae752f78029da5c861d3d87e35c0492f201a8a4550ce57eb9d91d476f7cb"
		}
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"type": "ContractReward",
		"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
		"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "b8d51bdfd178f6f7a6207fc134c612d0d90e7baf808b5464627ac6c2c8515d53",
		"link": "c06cae752f78029da5c861d3d87e35c0492f201a8a4550ce57eb9d91d476f7cb",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "gaFjAA==",
		"povHeight": 0,
		"timestamp": 1589378113,
		"extra": "c07ba5be46f85dc12a9098673c85d5ccbe6e8bcdbe9870b4d14a9f3c851c6f87",
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
	"method": "DoDSettlement_getUpdateOrderInfoRewardBlock",
	"params": [
		{
			"requestHash": "c06cae752f78029da5c861d3d87e35c0492f201a8a4550ce57eb9d91d476f7cb"
		}
	]
}
```

:::

## DoDSettlement_getChangeOrderBlock

Generate a block to create a request for changing a connection or other product.

- **Parameters**: 
  - `buyer`: buyer info
    - `address`: buyer's qlc address
    - `name`: buyer's name
  - `seller`: seller info
    - `address`: seller's qlc address
    - `name`: seller's name
  - `connections`: array of connection params
    - `ProductId`: product's id from sonata api 
    - `connectionName`: 
    - `paymentType`: invoice/stablecoin
    - `billingType`: PAYG/DOD
    - `currency`:
    - `bandwidth`:
    - `billingUnit`: year/month/week/day/hour/minute/second, only for PAYG
    - `price`:
    - `startTime`: need to be set when billingType is DOD
    - `endTime`: need to be set when billingType is DOD
    - `serviceClass`: gold/silver/bronze
- **Returns**: 
  - `block`: a block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getChangeOrderBlock",
	"params": [
		{
			"buyer": {
				"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"name": "CBC"
			},
			"seller": {
				"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
				"name": "PCCWG"
			},
			"connections": [
				{
					"productId": "product9104893720245486982",
					"bandwidth": "200 Mbps",
					"price": 2
				}
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
		"type": "ContractSend",
		"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
		"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "c06cae752f78029da5c861d3d87e35c0492f201a8a4550ce57eb9d91d476f7cb",
		"link": "000000000000000000000000000000000000000000000000000000000000001d",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "4Srd7oOhYoKhYccgYyeR1aFpfUVESPnuq6KjNuUi1XZ+VwsyYnj1UyGU9kLIoW6jQ0JDoXOCoWHHIGO7jRycrK4yZidr7UfxgtyqCbBtiROLWZ7bL3WpgVjhuKFupVBDQ1dHoWORgqFvunByb2R1Y3Q5MTA0ODkzNzIwMjQ1NDg2OTgyv0RvRFNldHRsZUNvbm5lY3Rpb25EeW5hbWljUGFyYW2KomNuoKJwdACiYnQAomNyoKNzY3MAomJ3qDIwMCBNYnBzomJ1AKFwy0AAAAAAAAAAonN0AKJldAA=",
		"povHeight": 0,
		"timestamp": 1589378796,
		"extra": "d88fbe052f2b76b8c5f6009ff95a4f03bcdbbbd1e7be03e5ffa57d44e70b3bf8",
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
	"method": "DoDSettlement_getChangeOrderBlock",
	"params": [
		{
			"buyer": {
				"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"name": "CBC"
			},
			"seller": {
				"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
				"name": "PCCWG"
			},
			"connections": [
				{
					"productId": "product9104893720245486982",
					"bandwidth": "200 Mbps",
					"price": 2
				}
			]
		}
	]
}
```

:::

## DoDSettlement_getChangeOrderRewardBlock

Generate a block to confirm or reject a changing request.

- **Parameters**: 
  - `requestHash`: request block hash
  - `action`: confirm/reject this request
- **Returns**: 
  - `block`: a block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getChangeOrderRewardBlock",
	"params": [
		{
			"requestHash": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
			"action": "confirm"
		}
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"type": "ContractReward",
		"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
		"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "95ba0b85d6458739fff02d34152cba61f7d01ea1ae85eea1b6bac58931153e51",
		"link": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "gaFjAQ==",
		"povHeight": 0,
		"timestamp": 1589377020,
		"extra": "121259be61fd87612a1e8bcb89264d00ab93d77cca07c57291a55d3b144be182",
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
	"method": "DoDSettlement_getChangeOrderRewardBlock",
	"params": [
		{
			"requestHash": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
			"action": "confirm"
		}
	]
}
```

:::

## DoDSettlement_getTerminateOrderBlock

Generate a block to create a request for terminating a connection or other product.

- **Parameters**: 
  - `buyer`: buyer info
    - `address`: buyer's qlc address
    - `name`: buyer's name
  - `seller`: seller info
    - `address`: seller's qlc address
    - `name`: seller's name
  - `productId`: array of product id that will be terminated
- **Returns**: 
  - `block`: a block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getTerminateOrderBlock",
	"params": [
		{
			"buyer": {
				"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"name": "CBC"
			},
			"seller": {
				"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
				"name": "PCCWG"
			},
			"productId": ["product001","product002"]
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
		"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "c06cae752f78029da5c861d3d87e35c0492f201a8a4550ce57eb9d91d476f7cb",
		"link": "000000000000000000000000000000000000000000000000000000000000001d",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "17DF1YOhYoKhYccgYyeR1aFpfUVESPnuq6KjNuUi1XZ+VwsyYnj1UyGU9kLIoW6jQ0JDoXOCoWHHIGO7jRycrK4yZidr7UfxgtyqCbBtiROLWZ7bL3WpgVjhuKFupVBDQ1dHoXCRunByb2R1Y3Q5MTA0ODkzNzIwMjQ1NDg2OTgy",
		"povHeight": 0,
		"timestamp": 1589379191,
		"extra": "3804142c0fa22403d1e9bcfd8b43bb9b72310a42b5ba6842c488578673394969",
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
	"method": "DoDSettlement_getTerminateOrderBlock",
	"params": [
		{
			"buyer": {
				"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"name": "CBC"
			},
			"seller": {
				"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
				"name": "PCCWG"
			},
			"productId": ["product001","product002"]
		}
	]
}
```

:::

## DoDSettlement_getTerminateOrderRewardBlock

Generate a block to confirm or reject a terminating request.

- **Parameters**: 
  - `requestHash`: request block hash
  - `action`: confirm/reject this request
- **Returns**: 
  - `block`: a block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getTerminateOrderRewardBlock",
	"params": [
		{
			"requestHash": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
			"action": "confirm"
		}
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"type": "ContractReward",
		"token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
		"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "95ba0b85d6458739fff02d34152cba61f7d01ea1ae85eea1b6bac58931153e51",
		"link": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "gaFjAQ==",
		"povHeight": 0,
		"timestamp": 1589377020,
		"extra": "121259be61fd87612a1e8bcb89264d00ab93d77cca07c57291a55d3b144be182",
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
	"method": "DoDSettlement_getTerminateOrderRewardBlock",
	"params": [
		{
			"requestHash": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
			"action": "confirm"
		}
	]
}
```

:::

## DoDSettlement_getResourceReadyBlock

Generate a block to notify the resouce can be used now.

- **Parameters**: 
  - `address`:operator's qlc address
  - `orderId`: order's id from sonata api
  - `productId`: array of product's id from sonata api
- **Returns**: 
  - `block`: a block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getResourceReadyBlock",
	"params": [
		{
			"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"orderId": "order000001",
			"productId": ["product001", "product001"]
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
		"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "a2b736d91b4ff5b2a93287f20f5f5c67f271367a3015adc5e39cb427bcd37266",
		"link": "000000000000000000000000000000000000000000000000000000000000001d",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "KXBN84WhaccgZQGoj8SvyHuGbT0OexW+1uNrqb1+xbTALhlwGJQV+WkBom9pq29yZGVyMDAwMDAxonBpkqpwcm9kdWN0MDAxqnByb2R1Y3QwMDGhcwCiZnKg",
		"povHeight": 0,
		"timestamp": 1589377380,
		"extra": "92a6cad90ecc9b8e1ebd0ab7f27c76de62c9bfe16fa6dc8a3bf0293cc7bff3ed",
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
	"method": "DoDSettlement_getResourceReadyBlock",
	"params": [
		{
			"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"orderId": "order000001",
			"productId": ["product001", "product001"]
		}
	]
}
```

:::

## DoDSettlement_GetOrderIdListByAddress

Get buyer's all order id.

- **Parameters**: 
  - buyer's qlc address
- **Returns**: 
  - Array of order id and seller's qlc address pairs.

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderIdListByAddress",
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
			"seller": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"orderId": "order001"
		},
		{
			"seller": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"orderId": "order002"
		},
		{
			"seller": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"orderId": "order003"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderIdListByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}
```

:::

## DoDSettlement_getOrderIdListByAddressAndSeller

Get buyer's all order id with a specified seller.

- **Parameters**: 
  - buyer's qlc address
  - seller's qlc address
- **Returns**: 
  - Array of order id and seller's qlc address pairs.

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderIdListByAddressAndSeller",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
    "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"seller": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"orderId": "order001"
		},
		{
			"seller": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"orderId": "order002"
		},
		{
			"seller": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"orderId": "order003"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderIdListByAddressAndSeller",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
    "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

:::

## DoDSettlement_getProductIdListByAddress

Get buyer's all product id.

- **Parameters**: 
  - buyer's qlc address
- **Returns**: 
  - Array of product id and seller's qlc address pairs.

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getProductIdListByAddress",
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
			"seller": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"productId": "product8770789891961219555"
		},
		{
			"seller": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"productId": "product8762813907531150227"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getProductIdListByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}
```

:::

## DoDSettlement_getProductIdListByAddressAndSeller

Get buyer's all product id with a specified seller.

- **Parameters**: 
  - buyer's qlc address
  - seller's qlc address
- **Returns**: 
  - Array of product id and seller's qlc address pairs.

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getProductIdListByAddressAndSeller",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
    "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"seller": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"productId": "product8770789891961219555"
		},
		{
			"seller": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"productId": "product8762813907531150227"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getProductIdListByAddressAndSeller",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
    "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

:::

## DoDSettlement_getOrderInfoBySellerAndOrderId

get order info by seller address and order id.

- **Parameters**: 
  - seller's qlc address
  - order id from sonata api
- **Returns**: 
  - order's detail info
  - `track`: the contract's life track, from this we can know the time of request/confirmed/rejected/complete, and which block do the actions(record the block's previous hash).

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderInfoBySellerAndOrderId",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"order001"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"buyer": {
			"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"name": "CBC"
		},
		"seller": {
			"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"name": "PCCWG"
		},
		"orderId": "order001",
		"orderType": "create",
		"orderState": "success",
		"contractState": "confirmed",
		"connections": [
			{
				"productId": "product8859633503872504239",
				"srcCompanyName": "CBC",
				"srcRegion": "CHN",
				"srcCity": "HK",
				"srcDataCenter": "DCX",
				"srcPort": "port1",
				"dstCompanyName": "CBC",
				"dstRegion": "USA",
				"dstCity": "NYC",
				"dstDataCenter": "DCY",
				"dstPort": "port2",
				"connectionName": "connection7766481457385609998",
				"paymentType": "invoice",
				"billingType": "PAYG",
				"currency": "USD",
				"serviceClass": "gold",
				"bandwidth": "100 Mbps",
				"billingUnit": "second",
				"price": 1,
				"startTime": 0,
				"endTime": 0
			},
			{
				"productId": "product2301480569929582637",
				"srcCompanyName": "CBC",
				"srcRegion": "CHN",
				"srcCity": "HK",
				"srcDataCenter": "DCX",
				"srcPort": "port1",
				"dstCompanyName": "CBC",
				"dstRegion": "USA",
				"dstCity": "NYC",
				"dstDataCenter": "DCY",
				"dstPort": "port2",
				"connectionName": "connection7998373670406906764",
				"paymentType": "invoice",
				"billingType": "PAYG",
				"currency": "USD",
				"serviceClass": "gold",
				"bandwidth": "100 Mbps",
				"billingUnit": "second",
				"price": 1,
				"startTime": 0,
				"endTime": 0
			}
		],
		"track": [
			{
				"contractState": "request",
				"orderState": "null",
				"reason": "",
				"time": 1589371307,
				"hash": "d792df87b66a59f78550d29a8fb2867b4d68a2fe14156ba9c5ab78828d72a2b0"
			},
			{
				"contractState": "confirmed",
				"orderState": "null",
				"reason": "",
				"time": 1589371465,
				"hash": "b1240a35a5daf52200be588339fcd3384fef959814e038cd1c72e03d4854e51c"
			},
			{
				"contractState": "confirmed",
				"orderState": "success",
				"reason": "",
				"time": 1589371551,
				"hash": "002d82bbf0f0a2906276ead5ad33af3f2c8f5c9e7ae1f0188cd1b43df1bc6c94"
			}
		]
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderInfoBySellerAndOrderId",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"order001"
	]
}
```

:::

## DoDSettlement_getConnectionInfoBySellerAndProductId

get product info by seller address and product id.

- **Parameters**: 
  - seller's qlc address
  - product id from sonata api
- **Returns**: 
  - product's detail info
  - `active`:  current product rule
  - `done`: finished billing sections
  - `track`: the product's life track, from this we can know when the product was created/changed/terminated, and detai info of every action.

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getConnectionInfoBySellerAndProductId",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"product8770789891961219555"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"productId": "product8770789891961219555",
		"srcCompanyName": "CBC",
		"srcRegion": "CHN",
		"srcCity": "HK",
		"srcDataCenter": "DCX",
		"srcPort": "port1",
		"dstCompanyName": "CBC",
		"dstRegion": "USA",
		"dstCity": "NYC",
		"dstDataCenter": "DCY",
		"dstPort": "port2",
		"active": null,
		"done": [
			{
				"connectionName": "connection6262024276067780718",
				"paymentType": "invoice",
				"billingType": "PAYG",
				"currency": "USD",
				"serviceClass": "gold",
				"bandwidth": "100 Mbps",
				"billingUnit": "second",
				"price": 1,
				"startTime": 1589374485,
				"endTime": 1589374605
			},
			{
				"connectionName": "connection6262024276067780718",
				"paymentType": "invoice",
				"billingType": "PAYG",
				"currency": "USD",
				"serviceClass": "gold",
				"bandwidth": "200 Mbps",
				"billingUnit": "second",
				"price": 2,
				"startTime": 1589374605,
				"endTime": 1589374690
			}
		],
		"track": [
			{
				"orderType": "create",
				"orderId": "order001",
				"time": 1589374485,
				"changed": {
					"connectionName": "connection6262024276067780718",
					"paymentType": "invoice",
					"billingType": "PAYG",
					"currency": "USD",
					"serviceClass": "gold",
					"bandwidth": "100 Mbps",
					"billingUnit": "second",
					"price": 1,
					"startTime": 0,
					"endTime": 0
				}
			},
			{
				"orderType": "change",
				"orderId": "order002",
				"time": 1589374605,
				"changed": {
					"connectionName": "",
					"paymentType": "null",
					"billingType": "null",
					"currency": "",
					"serviceClass": "null",
					"bandwidth": "200 Mbps",
					"billingUnit": "second",
					"price": 2,
					"startTime": 0,
					"endTime": 0
				}
			},
			{
				"orderType": "terminate",
				"orderId": "order003",
				"time": 1589374690,
				"changed": null
			}
		]
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getConnectionInfoBySellerAndProductId",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"product8770789891961219555"
	]
}
```

:::

## DoDSettlement_getPendingRequest

Get all pending requests for seller.

- **Parameters**: 
  - seller's qlc address
- **Returns**: 
  - `hash`: request block's hash
  - `order`：order's detai info

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getPendingRequest",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"hash": "45f39c6907586af092efc7750674d8bf8f56e003a1ce482530194c253c6c749a",
			"order": {
				"buyer": {
					"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
					"name": "CBC"
				},
				"seller": {
					"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
					"name": "PCCWG"
				},
				"orderId": "",
				"orderType": "create",
				"orderState": "null",
				"contractState": "request",
				"connections": [
					{
						"productId": "",
						"srcCompanyName": "CBC",
						"srcRegion": "CHN",
						"srcCity": "HK",
						"srcDataCenter": "DCX",
						"srcPort": "port1",
						"dstCompanyName": "CBC",
						"dstRegion": "USA",
						"dstCity": "NYC",
						"dstDataCenter": "DCY",
						"dstPort": "port2",
						"connectionName": "connection1897620432303744180",
						"paymentType": "invoice",
						"billingType": "PAYG",
						"currency": "USD",
						"serviceClass": "gold",
						"bandwidth": "100 Mbps",
						"billingUnit": "second",
						"price": 1,
						"startTime": 0,
						"endTime": 0
					}
				],
				"track": [
					{
						"contractState": "request",
						"orderState": "null",
						"reason": "",
						"time": 1589382707,
						"hash": "d792df87b66a59f78550d29a8fb2867b4d68a2fe14156ba9c5ab78828d72a2b0"
					}
				]
			}
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getPendingRequest",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

:::

## DoDSettlement_getPendingResourceCheck

Get all pending orders for seller to check. Seller need to check every product's status in each order.

- **Parameters**: 
  - seller's qlc address
- **Returns**: 
  - Array of order id.

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getPendingResourceCheck",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		"order001",
    "order002"
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getPendingResourceCheck",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

:::