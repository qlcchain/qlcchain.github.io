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
  
    - `privateFrom`: sender's ptm key, if this is a private transaction
    - `privateFor`: receiver's ptm key, if this is a private transaction
    - `privateGroupID`: ptm group key, if this is a private transaction
    
    - `buyer`: buyer info
      - `address`: buyer's qlc address
      - `name`: buyer's name
    - `seller`: seller info
      - `address`: seller's qlc address
      - `name`: seller's name
    - `connections`: array of connection params
      - `itemId`: item id of this connection (required)
      - `buyerProductId`: buyer product id, unique in this order at least (required)
      - `quoteId`: id of the quotation (required)
      - `quoteItemId`: item id of the quotation (required)
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
					"itemId": "item001",
					"buyerProductId": "buyProductId001",
					"quoteId": "quote001",
					"quoteItemId": "quoteItemId001",
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
					"itemId": "item001",
					"buyerProductId": "buyProductId001",
					"quoteId": "quote001",
					"quoteItemId": "quoteItemId001",
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
  
  - `privateFrom`: sender's ptm key, if this is a private transaction
  - `privateFor`: receiver's ptm key, if this is a private transaction
  - `privateGroupID`: ptm group key, if this is a private transaction
  
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
  
  - `privateFrom`: sender's ptm key, if this is a private transaction
  - `privateFor`: receiver's ptm key, if this is a private transaction
  - `privateGroupID`: ptm group key, if this is a private transaction
  
  - `buyer`: buyer's qlc address
  - `internalId`: order's internal id in qlcchain
  - `orderId`: order's id from sonata api
  - `productIds`: array of product's id from sonata api
    - `productId`: id of this product
    - `buyerProductId`: buyer product id, required when updating create order
  - `status`: success/fail, result of sonata api
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
			"productIds": [
				{"productId": "product001", "buyerProductId": "buyerProductId001"},
				{"productId": "product002", "buyerProductId": "buyerProductId002"}
			],
			"status": "success",
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
			"productIds": [
				{"productId": "product001", "buyerProductId": "buyerProductId001"},
				{"productId": "product002", "buyerProductId": "buyerProductId002"}
			],
			"status": "success",
			"failReason": ""
		}
	]
}
```

:::

## DoDSettlement_getUpdateOrderInfoRewardBlock

Generate a block to update order state to complete when all products in this order can be used normally.

- **Parameters**: 
  
  - `privateFrom`: sender's ptm key, if this is a private transaction
  - `privateFor`: receiver's ptm key, if this is a private transaction
  - `privateGroupID`: ptm group key, if this is a private transaction
  
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
  
  - `privateFrom`: sender's ptm key, if this is a private transaction
  - `privateFor`: receiver's ptm key, if this is a private transaction
  - `privateGroupID`: ptm group key, if this is a private transaction
  
  - `buyer`: buyer info
    - `address`: buyer's qlc address
    - `name`: buyer's name
  - `seller`: seller info
    - `address`: seller's qlc address
    - `name`: seller's name
  - `connections`: array of connection params
    - `productId`: product's id from sonata api 
    - `connectionName`: 
    - `quoteId`: id of the quotation
    - `quoteItemId`: item id of the quotation
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
					"price": 2,
					"quoteId": "quote001",
					"quoteItemId": "quote001"
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
					"price": 2,
					"quoteId": "quote001",
					"quoteItemId": "quote001"
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
  
  - `privateFrom`: sender's ptm key, if this is a private transaction
  - `privateFor`: receiver's ptm key, if this is a private transaction
  - `privateGroupID`: ptm group key, if this is a private transaction
  
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
  
  - `privateFrom`: sender's ptm key, if this is a private transaction
  - `privateFor`: receiver's ptm key, if this is a private transaction
  - `privateGroupID`: ptm group key, if this is a private transaction
  
  - `buyer`: buyer info
    - `address`: buyer's qlc address
    - `name`: buyer's name
  - `seller`: seller info
    - `address`: seller's qlc address
    - `name`: seller's name
  - `connections`: array of product id that will be terminated
    - `productId`: id of product to be terminated
    - `quoteId`: quote id for this product
    - `quoteItemId`: quote item id for this product
    - `price`: price of this quote
  
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
			"connections": [
				{
					"productId": "product9104893720245486982",
					"price": 2,
					"quoteId": "quote001",
					"quoteItemId": "quote001"
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
			"connections": [
				{
					"productId": "product9104893720245486982",
					"price": 2,
					"quoteId": "quote001",
					"quoteItemId": "quote001"
				}
			]
		}
	]
}
```

:::

## DoDSettlement_getTerminateOrderRewardBlock

Generate a block to confirm or reject a terminating request.

- **Parameters**: 
  
  - `privateFrom`: sender's ptm key, if this is a private transaction
  - `privateFor`: receiver's ptm key, if this is a private transaction
  - `privateGroupID`: ptm group key, if this is a private transaction
  
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
  
  - `privateFrom`: sender's ptm key, if this is a private transaction
  - `privateFor`: receiver's ptm key, if this is a private transaction
  - `privateGroupID`: ptm group key, if this is a private transaction
  
  - `address`: operator's qlc address
  - `internalId`: internal id of this order
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
			"internalId": "fcde1a26c11de74eb94653c689486a6026d49c6e03e7650991f47b4091120997",
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
			"internalId": "fcde1a26c11de74eb94653c689486a6026d49c6e03e7650991f47b4091120997",
			"productId": ["product001", "product001"]
		}
	]
}
```

:::

## DoDSettlement_getOrderIdListByAddress

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

## DoDSettlement_getOrderInfoByInternalId

get order info by internal id.

- **Parameters**: 
  - Internal id from chain
- **Returns**: 
  - order's detail info
  - `track`: the contract's life track, from this we can know the time of request/confirmed/rejected/complete, and which block do the actions(record the block's previous hash).

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderInfoByInternalId",
	"params": [
		"10f24ebd14aa86bab26757b4db16ba313b2cdcb363d8540ee0184aae087e7edc"
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
	"method": "DoDSettlement_getOrderInfoByInternalId",
	"params": [
		"10f24ebd14aa86bab26757b4db16ba313b2cdcb363d8540ee0184aae087e7edc"
	]
}
```

:::

## DoDSettlement_getProductInfoBySellerAndProductId

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
	"method": "DoDSettlement_getProductInfoBySellerAndProductId",
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
	"method": "DoDSettlement_getProductInfoBySellerAndProductId",
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
  
- Array of pending info.
  
    - `sendHash`: hash of send block
    
    - `orderId`: id of order that needs to check
    
    - `internalId`: internal id of order that needs to check
    
    - `products`: product ino
    
      - `ProductId`: id of product
      - `active`: if this product is active
    
      
  
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
		{
      "sendHash": "45f39c6907586af092efc7750674d8bf8f56e003a1ce482530194c253c6c749a",
			"orderId": "order002",
      "internalId": "d792df87b66a59f78550d29a8fb2867b4d68a2fe14156ba9c5ab78828d72a2b0",
			"products": [
				{
					"productId": "product2397676495791057537",
					"active": false
				}
			]
		},
		{
      "sendHash": "45f39c6907586af092efc7750674d8bf8f56e003a1ce482530194c253c6c749a",
			"orderId": "order001",
      "internalId": "d792df87b66a59f78550d29a8fb2867b4d68a2fe14156ba9c5ab78828d72a2b2",
			"products": [
				{
					"productId": "product7507455791188971715",
					"active": true
				}
			]
		}
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

## DoDSettlement_getPlacingOrder

Get all placing orders (contractState = confirmed && orderState == null)

- **Parameters**: 

  - buyer's qlc address
  - seller's qlc address

- **Returns**: 

  - Array of placing order.

    - `internalId`: internal id of the order

    - `orderInfo`: detail info the order

      

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getPlacingOrder",
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
			"internalId": "8cfb5cfbbc6af630a105c038e0a9912bef950c782e90eb7e0f2e28c38cbb35b9",
			"orderInfo": {
				"buyer": {
					"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
					"name": "CBC"
				},
				"seller": {
					"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
					"name": "PCCWG"
				},
				"quoteId": "quote010",
				"orderType": "create",
				"orderState": "null",
				"contractState": "confirmed",
				"connections": [
					{
						"itemId": "item5369971299831324653",
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
						"quoteItemId": "quoteItem2343919744548390990",
						"connectionName": "connection3563592678537211153",
						"paymentType": "invoice",
						"billingType": "DOD",
						"currency": "USD",
						"serviceClass": "gold",
						"bandwidth": "100 Mbps",
						"price": 100,
						"startTime": 1590063500,
						"endTime": 1590063550
					},
					{
						"itemId": "item7485218530270967308",
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
						"quoteItemId": "quoteItem2354497211633616723",
						"connectionName": "connection7618275438432431357",
						"paymentType": "invoice",
						"billingType": "DOD",
						"currency": "USD",
						"serviceClass": "gold",
						"bandwidth": "100 Mbps",
						"price": 100,
						"startTime": 1590063500,
						"endTime": 1590063550
					}
				],
				"track": [
					{
						"contractState": "request",
						"orderState": "null",
						"time": 1590111916,
						"hash": "8cfb5cfbbc6af630a105c038e0a9912bef950c782e90eb7e0f2e28c38cbb35b9"
					},
					{
						"contractState": "confirmed",
						"orderState": "null",
						"time": 1590111940,
						"hash": "85d03d337bd1833b47d6b2e2f74f4b7e53a49ca13ddf12f6801969ac73ccc61f"
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
	"method": "DoDSettlement_getPlacingOrder",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

:::

## DoDSettlement_getProductIdListByAddress

Get buyer's all product ids.

- **Parameters**: 

  - buyer's qlc address

- **Returns**: 

  - Array of product id.

    - `productId`: id of product
    - `seller`: seller's qlc address

    

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

## DoDSettlement_getOrderIdListByAddress

Get buyer's all order ids.

- **Parameters**: 

  - buyer's qlc address

- **Returns**: 

  - Array of order info.

    - `orderId`: id of order
    - `seller`: seller's qlc address

    

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

## DoDSettlement_getProductIdListByAddressAndSeller

Get buyer's all product ids with specified seller.

- **Parameters**: 

  - buyer's qlc address
  - seller's qlc address

- **Returns**: 

  Array of product id.

  - `productId`: id of product
  - `seller`: seller's qlc address

  

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

## DoDSettlement_getOrderIdListByAddressAndSeller

Get buyer's all order ids with specified seller.

- **Parameters**: 

  - buyer's qlc address
  - seller's qlc address

- **Returns**: 

  - Array of order info.

    - `orderId`: id of order
    - `seller`: seller's qlc address

    

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

## DoDSettlement_generateInvoiceByOrderId

Generate invoice by order id.

- **Parameters**: 

  - seller's qlc address
  - order id
  - startTime
  - endTime
  - inFlight order allowed (true: in-flight order will be included)
  - split order allowed (true: cacl completed duration false: calc whole duration or exclueded, depends on if the startTime of the order was in the invoice duration)

- **Returns**: 

  - Invoice info

  

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_generateInvoiceByOrderId",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"order003",
		1590063500,
		1590063550,
		true,
		true
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"totalConnectionCount": 2,
		"totalAmount": 200,
		"currency": "USD",
		"startTime": 1590063500,
		"endTime": 1590063550,
		"buyer": {
			"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"name": "CBC"
		},
		"seller": {
			"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"name": "PCCWG"
		},
		"order": {
			"orderId": "order003",
			"connectionCount": 2,
			"orderAmount": 200,
			"connections": [
				{
					"connectionAmount": 100,
					"productId": "product003",
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
					"usage": [
						{
							"connectionName": "connection5251568543453672711",
							"paymentType": "invoice",
							"billingType": "DOD",
							"currency": "USD",
							"serviceClass": "gold",
							"bandwidth": "100 Mbps",
							"price": 100,
							"startTime": 1590063500,
							"endTime": 1590063550,
							"invoiceStartTime": 0,
							"invoiceEndTime": 0,
							"invoiceUnitCount": 0,
							"amount": 100
						}
					]
				},
				{
					"connectionAmount": 100,
					"productId": "product004",
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
					"usage": [
						{
							"connectionName": "connection2486610007254462746",
							"paymentType": "invoice",
							"billingType": "DOD",
							"currency": "USD",
							"serviceClass": "gold",
							"bandwidth": "100 Mbps",
							"price": 100,
							"startTime": 1590063500,
							"endTime": 1590063550,
							"invoiceStartTime": 0,
							"invoiceEndTime": 0,
							"invoiceUnitCount": 0,
							"amount": 100
						}
					]
				}
			]
		}
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_generateInvoiceByOrderId",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"order003",
		1590063500,
		1590063550,
		true,
		true
	]
}
```

:::

## DoDSettlement_generateInvoiceByBuyer

Generate invoice by buyer's qlc address.

- **Parameters**: 

  - seller's qlc address
  - buyer's qlc address
  - startTime
  - endTime
  - inFlight order allowed (true: in-flight order will be included)
  - split order allowed (true: cacl completed duration false: calc whole duration or exclueded, depends on if the startTime of the order was in the invoice duration)

- **Returns**: 

  - invoice info

    

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_generateInvoiceByBuyer",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		1590063500,
		1590063550,
		false,
		false
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"orderCount": 4,
		"totalConnectionCount": 5,
		"totalAmount": 500,
		"currency": "USD",
		"startTime": 1590063500,
		"endTime": 1590063550,
		"buyer": {
			"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"name": "CBC"
		},
		"seller": {
			"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"name": "PCCWG"
		},
		"orders": [
			{
				"orderId": "order001",
				"connectionCount": 1,
				"orderAmount": 0,
				"connections": [
					{
						"connectionAmount": 0,
						"itemId": "",
						"productId": "product001",
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
						"usage": []
					}
				]
			},
			{
				"orderId": "order002",
				"connectionCount": 1,
				"orderAmount": 100,
				"connections": [
					{
						"connectionAmount": 100,
						"itemId": "",
						"productId": "product001",
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
						"usage": [
							{
								"orderId": "",
								"quoteItemId": "",
								"connectionName": "connection4117279165879118174",
								"paymentType": "invoice",
								"billingType": "PAYG",
								"currency": "USD",
								"serviceClass": "gold",
								"bandwidth": "200 Mbps",
								"billingUnit": "second",
								"price": 2,
								"startTime": 1590061933,
								"endTime": 0,
								"invoiceStartTime": 1590063500,
								"invoiceEndTime": 1590063550,
								"invoiceUnitCount": 50,
								"amount": 100
							}
						]
					}
				]
			},
			{
				"orderId": "order003",
				"connectionCount": 2,
				"orderAmount": 200,
				"connections": [
					{
						"connectionAmount": 100,
						"itemId": "",
						"productId": "product003",
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
						"usage": [
							{
								"orderId": "",
								"quoteItemId": "",
								"connectionName": "connection5251568543453672711",
								"paymentType": "invoice",
								"billingType": "DOD",
								"currency": "USD",
								"serviceClass": "gold",
								"bandwidth": "100 Mbps",
								"billingUnit": "null",
								"price": 100,
								"startTime": 1590063500,
								"endTime": 1590063550,
								"invoiceStartTime": 0,
								"invoiceEndTime": 0,
								"invoiceUnitCount": 0,
								"amount": 100
							}
						]
					},
					{
						"connectionAmount": 100,
						"itemId": "",
						"productId": "product004",
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
						"usage": [
							{
								"orderId": "",
								"quoteItemId": "",
								"connectionName": "connection2486610007254462746",
								"paymentType": "invoice",
								"billingType": "DOD",
								"currency": "USD",
								"serviceClass": "gold",
								"bandwidth": "100 Mbps",
								"billingUnit": "null",
								"price": 100,
								"startTime": 1590063500,
								"endTime": 1590063550,
								"invoiceStartTime": 0,
								"invoiceEndTime": 0,
								"invoiceUnitCount": 0,
								"amount": 100
							}
						]
					}
				]
			},
			{
				"orderId": "order004",
				"connectionCount": 1,
				"orderAmount": 200,
				"connections": [
					{
						"connectionAmount": 200,
						"itemId": "",
						"productId": "product003",
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
						"usage": [
							{
								"orderId": "",
								"quoteItemId": "",
								"connectionName": "connection5251568543453672711",
								"paymentType": "invoice",
								"billingType": "DOD",
								"currency": "USD",
								"serviceClass": "gold",
								"bandwidth": "200 Mbps",
								"billingUnit": "null",
								"price": 200,
								"startTime": 1590063510,
								"endTime": 1590063530,
								"invoiceStartTime": 0,
								"invoiceEndTime": 0,
								"invoiceUnitCount": 0,
								"amount": 200
							}
						]
					}
				]
			}
		]
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_generateInvoiceByBuyer",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		1590063500,
		1590063550,
		false,
		false
	]
}
```

:::

## DoDSettlement_generateInvoiceByProductId

Generate invoice by product id.

- **Parameters**: 

  - seller's qlc address
  - product id
  - startTime
  - endTime
  - inFlight order allowed (true: in-flight order will be included)
  - split order allowed (true: cacl completed duration false: calc whole duration or exclueded, depends on if the startTime of the order was in the invoice duration)

- **Returns**: 

  - invoice info

    

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_generateInvoiceByProductId",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"product003",
		1590063500,
		1590063550,
		true,
		false
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"totalAmount": 300,
		"currency": "USD",
		"startTime": 1590063500,
		"endTime": 1590063550,
		"buyer": {
			"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
			"name": "CBC"
		},
		"seller": {
			"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
			"name": "PCCWG"
		},
		"connection": {
			"connectionAmount": 300,
			"itemId": "",
			"productId": "product003",
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
			"usage": [
				{
					"orderId": "order004",
					"quoteItemId": "",
					"connectionName": "connection5251568543453672711",
					"paymentType": "invoice",
					"billingType": "DOD",
					"currency": "USD",
					"serviceClass": "gold",
					"bandwidth": "200 Mbps",
					"billingUnit": "null",
					"price": 200,
					"startTime": 1590063510,
					"endTime": 1590063530,
					"invoiceStartTime": 0,
					"invoiceEndTime": 0,
					"invoiceUnitCount": 0,
					"amount": 200
				},
				{
					"orderId": "order003",
					"quoteItemId": "",
					"connectionName": "connection5251568543453672711",
					"paymentType": "invoice",
					"billingType": "DOD",
					"currency": "USD",
					"serviceClass": "gold",
					"bandwidth": "100 Mbps",
					"billingUnit": "null",
					"price": 100,
					"startTime": 1590063500,
					"endTime": 1590063550,
					"invoiceStartTime": 0,
					"invoiceEndTime": 0,
					"invoiceUnitCount": 0,
					"amount": 100
				}
			]
		}
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_generateInvoiceByProductId",
	"params": [
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		"product003",
		1590063500,
		1590063550,
		true,
		false
	]
}
```

:::

## DoDSettlement_getOrderCountByAddress

Get order count by buyer's address.

- **Parameters**: 

  - buyer's qlc address

- **Returns**: 

  - order count

    

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderCountByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": 3
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderCountByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}
```

:::

## DoDSettlement_getOrderInfoByAddress

Get order info by buyer's address.

- **Parameters**: 

  - buyer's qlc address
  - count
  - offset

- **Returns**: 

  - order array (ordered by create time desc)

    

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderInfoByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		5,
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
			"buyer": {
				"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"name": "CBC"
			},
			"seller": {
				"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
				"name": "PCCWG"
			},
			"orderId": "order003",
			"orderType": "change",
			"orderState": "complete",
			"contractState": "confirmed",
			"connections": [
				{
					"productId": "product001",
					"quoteId": "quote4197810719442062891",
					"quoteItemId": "quoteItem7326938129530071554",
					"currency": "USD",
					"bandwidth": "30 Mbps",
					"price": 330,
					"addition": 0,
					"startTime": 1590076800,
					"endTime": 1591372800
				}
			],
			"track": [
				{
					"contractState": "request",
					"orderState": "null",
					"time": 1590717470,
					"hash": "5bd701accb161c3e81a1631826a0c496ebbc1cb2b7b374bcda0f16d008cef1b7"
				},
				{
					"contractState": "confirmed",
					"orderState": "null",
					"time": 1590717480,
					"hash": "781203794a36b1e55df43f7373439dd70960a0e535ef6114b6ced0c12c7130fb"
				},
				{
					"contractState": "confirmed",
					"orderState": "success",
					"time": 1590717503,
					"hash": "182c4f83595baa00bba024e0c67d0d6b226cef23a6faff440de83e5100c4bd77"
				},
				{
					"contractState": "confirmed",
					"orderState": "complete",
					"time": 1590717512,
					"hash": "fadaa97f1d7154110058f95619729f093bac1e15c12609dac3d528e09fdf73fd"
				}
			]
		},
		{
			"buyer": {
				"address": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
				"name": "CBC"
			},
			"seller": {
				"address": "qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
				"name": "PCCWG"
			},
			"orderId": "order002",
			"orderType": "change",
			"orderState": "complete",
			"contractState": "confirmed",
			"connections": [
				{
					"productId": "product001",
					"quoteId": "quote5339833170131078171",
					"quoteItemId": "quoteItem20288420106995345",
					"currency": "USD",
					"bandwidth": "20 Mbps",
					"price": 100,
					"addition": 0,
					"startTime": 1589904000,
					"endTime": 1590336000
				}
			],
			"track": [
				{
					"contractState": "request",
					"orderState": "null",
					"time": 1590717382,
					"hash": "fa4474a792ea60a93139ed47786bf135a0cf9c1a03b8e9a8116e38255519ef39"
				},
				{
					"contractState": "confirmed",
					"orderState": "null",
					"time": 1590717404,
					"hash": "4db010243f85a8827f5beb01361b5c24bbfed7ac918f7db46d79ecd3fd3d9745"
				},
				{
					"contractState": "confirmed",
					"orderState": "success",
					"time": 1590717423,
					"hash": "392ec08da6eca8703985b8182d3328bdc5d07ff7237fc65b38dca0698ea84f58"
				},
				{
					"contractState": "confirmed",
					"orderState": "complete",
					"time": 1590717433,
					"hash": "cb947d94062c1f02b8550b535ef4f96d6364d8aeda12d7f604c903fab4b1396a"
				}
			]
		},
		{
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
			"orderState": "complete",
			"contractState": "confirmed",
			"connections": [
				{
					"itemId": "item3683248281921503753",
					"buyerProductId": "buyerProduct774847696419776906",
					"productId": "product001",
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
					"quoteId": "quote256896256719277793",
					"quoteItemId": "quoteItem4629235557499493669",
					"connectionName": "connection8634530631046857655",
					"paymentType": "invoice",
					"billingType": "DOD",
					"currency": "USD",
					"serviceClass": "gold",
					"bandwidth": "10 Mbps",
					"price": 300,
					"addition": 0,
					"startTime": 1589472000,
					"endTime": 1592064000
				}
			],
			"track": [
				{
					"contractState": "request",
					"orderState": "null",
					"time": 1590717103,
					"hash": "d792df87b66a59f78550d29a8fb2867b4d68a2fe14156ba9c5ab78828d72a2b0"
				},
				{
					"contractState": "confirmed",
					"orderState": "null",
					"time": 1590717116,
					"hash": "97cc19c87bde8e5cfe040a5e93f831173d9de33caf9dd9ae98ae353b3721b6f7"
				},
				{
					"contractState": "confirmed",
					"orderState": "success",
					"time": 1590717146,
					"hash": "52ce9ac4d6be519f6c6a0aa97a54c06d728a630b0df3af9345ce93273dccd62c"
				},
				{
					"contractState": "confirmed",
					"orderState": "complete",
					"time": 1590717159,
					"hash": "878e582f7de5a0efddddd718424938a2498b032d1c498bc1b0c93e860ad996c2"
				}
			]
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderInfoByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		5,
		0
	]
}
```

:::

## DoDSettlement_getOrderCountByAddressAndSeller

Get order count by buyer's address and seller's address.

- **Parameters**: 

  - buyer's qlc address
  - seller's qlc address

- **Returns**: 

  - order count

    

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderCountByAddressAndSeller",
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
	"result": 3
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderCountByAddressAndSeller",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

:::

## DoDSettlement_getOrderInfoByAddressAndSeller

Get order info by buyer's address and seller's address.

- **Parameters**: 

  - buyer's qlc address
  - seller's qlc address

- **Returns**: 

  - order info array

    

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderInfoByAddressAndSeller",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		3,
		2
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
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
			"orderState": "complete",
			"contractState": "confirmed",
			"connections": [
				{
					"itemId": "item3683248281921503753",
					"buyerProductId": "buyerProduct774847696419776906",
					"productId": "product001",
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
					"quoteId": "quote256896256719277793",
					"quoteItemId": "quoteItem4629235557499493669",
					"connectionName": "connection8634530631046857655",
					"paymentType": "invoice",
					"billingType": "DOD",
					"currency": "USD",
					"serviceClass": "gold",
					"bandwidth": "10 Mbps",
					"price": 300,
					"addition": 0,
					"startTime": 1589472000,
					"endTime": 1592064000
				}
			],
			"track": [
				{
					"contractState": "request",
					"orderState": "null",
					"time": 1590717103,
					"hash": "d792df87b66a59f78550d29a8fb2867b4d68a2fe14156ba9c5ab78828d72a2b0"
				},
				{
					"contractState": "confirmed",
					"orderState": "null",
					"time": 1590717116,
					"hash": "97cc19c87bde8e5cfe040a5e93f831173d9de33caf9dd9ae98ae353b3721b6f7"
				},
				{
					"contractState": "confirmed",
					"orderState": "success",
					"time": 1590717146,
					"hash": "52ce9ac4d6be519f6c6a0aa97a54c06d728a630b0df3af9345ce93273dccd62c"
				},
				{
					"contractState": "confirmed",
					"orderState": "complete",
					"time": 1590717159,
					"hash": "878e582f7de5a0efddddd718424938a2498b032d1c498bc1b0c93e860ad996c2"
				}
			]
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderInfoByAddressAndSeller",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3",
		3,
		2
	]
}
```

:::

## DoDSettlement_getProductCountByAddress

Get product count by buyer's address.

- **Parameters**: 

  - buyer's qlc address

- **Returns**: 

  - product count

    

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getProductCountByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": 3
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getProductCountByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe"
	]
}
```

:::

## DoDSettlement_getProductInfoByAddress

Get product info by buyer's address.

- **Parameters**: 

  - buyer's qlc address

- **Returns**: 

  - product info array

    

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getProductInfoByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		5,
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
			"itemId": "item3683248281921503753",
			"buyerProductId": "buyerProduct774847696419776906",
			"productId": "product001",
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
			"active": {
				"orderId": "order003",
				"connectionName": "connection8634530631046857655",
				"paymentType": "invoice",
				"billingType": "DOD",
				"currency": "USD",
				"serviceClass": "gold",
				"bandwidth": "30 Mbps",
				"price": 330,
				"addition": 150,
				"startTime": 1590076800,
				"endTime": 1591372800
			},
			"done": [
				{
					"orderId": "order001",
					"connectionName": "connection8634530631046857655",
					"paymentType": "invoice",
					"billingType": "DOD",
					"currency": "USD",
					"serviceClass": "gold",
					"bandwidth": "10 Mbps",
					"price": 300,
					"addition": 300,
					"startTime": 1589472000,
					"endTime": 1592064000
				},
				{
					"orderId": "order002",
					"connectionName": "connection8634530631046857655",
					"paymentType": "invoice",
					"billingType": "DOD",
					"currency": "USD",
					"serviceClass": "gold",
					"bandwidth": "20 Mbps",
					"price": 100,
					"addition": 50,
					"startTime": 1589904000,
					"endTime": 1590336000
				}
			],
			"disconnect": null,
			"track": [
				{
					"orderType": "create",
					"orderId": "order001",
					"time": 1590717146,
					"changed": {
						"connectionName": "connection8634530631046857655",
						"paymentType": "invoice",
						"billingType": "DOD",
						"currency": "USD",
						"serviceClass": "gold",
						"bandwidth": "10 Mbps",
						"price": 300,
						"addition": 0,
						"startTime": 1589472000,
						"endTime": 1592064000
					}
				},
				{
					"orderType": "change",
					"orderId": "order002",
					"time": 1590717423,
					"changed": {
						"currency": "USD",
						"bandwidth": "20 Mbps",
						"price": 100,
						"addition": 0,
						"startTime": 1589904000,
						"endTime": 1590336000
					}
				},
				{
					"orderType": "change",
					"orderId": "order003",
					"time": 1590717503,
					"changed": {
						"currency": "USD",
						"bandwidth": "30 Mbps",
						"price": 330,
						"addition": 0,
						"startTime": 1590076800,
						"endTime": 1591372800
					}
				}
			]
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getProductInfoByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		5,
		0
	]
}
```

:::

## DoDSettlement_getProductCountByAddressAndSeller

Get product count by buyer's address and seller's address.

- **Parameters**: 

  - buyer's qlc address
  - seller's qlc address

- **Returns**: 

  - product count

    

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getProductCountByAddressAndSeller",
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
			"itemId": "item3683248281921503753",
			"buyerProductId": "buyerProduct774847696419776906",
			"productId": "product001",
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
			"active": {
				"orderId": "order003",
				"connectionName": "connection8634530631046857655",
				"paymentType": "invoice",
				"billingType": "DOD",
				"currency": "USD",
				"serviceClass": "gold",
				"bandwidth": "30 Mbps",
				"price": 330,
				"addition": 150,
				"startTime": 1590076800,
				"endTime": 1591372800
			},
			"done": [
				{
					"orderId": "order001",
					"connectionName": "connection8634530631046857655",
					"paymentType": "invoice",
					"billingType": "DOD",
					"currency": "USD",
					"serviceClass": "gold",
					"bandwidth": "10 Mbps",
					"price": 300,
					"addition": 300,
					"startTime": 1589472000,
					"endTime": 1592064000
				},
				{
					"orderId": "order002",
					"connectionName": "connection8634530631046857655",
					"paymentType": "invoice",
					"billingType": "DOD",
					"currency": "USD",
					"serviceClass": "gold",
					"bandwidth": "20 Mbps",
					"price": 100,
					"addition": 50,
					"startTime": 1589904000,
					"endTime": 1590336000
				}
			],
			"disconnect": null,
			"track": [
				{
					"orderType": "create",
					"orderId": "order001",
					"time": 1590717146,
					"changed": {
						"connectionName": "connection8634530631046857655",
						"paymentType": "invoice",
						"billingType": "DOD",
						"currency": "USD",
						"serviceClass": "gold",
						"bandwidth": "10 Mbps",
						"price": 300,
						"addition": 0,
						"startTime": 1589472000,
						"endTime": 1592064000
					}
				},
				{
					"orderType": "change",
					"orderId": "order002",
					"time": 1590717423,
					"changed": {
						"currency": "USD",
						"bandwidth": "20 Mbps",
						"price": 100,
						"addition": 0,
						"startTime": 1589904000,
						"endTime": 1590336000
					}
				},
				{
					"orderType": "change",
					"orderId": "order003",
					"time": 1590717503,
					"changed": {
						"currency": "USD",
						"bandwidth": "30 Mbps",
						"price": 330,
						"addition": 0,
						"startTime": 1590076800,
						"endTime": 1591372800
					}
				}
			]
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getProductCountByAddressAndSeller",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

:::

## DoDSettlement_GetProductInfoByAddressAndSeller

Get product info by buyer's address and seller's address.

- **Parameters**: 

  - buyer's qlc address
  - seller's qlc address

- **Returns**: 

  - product info array

    

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_GetProductInfoByAddressAndSeller",
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
	"result": 3
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "DoDSettlement_getOrderCountByAddress",
	"params": [
		"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"qlc_3gwf5kgcsdjkermpquc9y83fscibp3prk6wdd8hfpduoo81ojrfrfp7zoko3"
	]
}
```

:::