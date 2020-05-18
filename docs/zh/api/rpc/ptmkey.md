# Ptm Pubkey Control

**Supported protocols:**

| JSON-RPC 2.0 | Websocket |   IPC    | Publish–subscribe |
| :----------: | :-------: | :------: | :---------------: |
|   &#x2713;   | &#x2713;  | &#x2713; |        TBD        |



## ptmkey_getPtmKeyByAccount

Get a ptm pubkey by account

- **Parameters**: 
  - `account` : target account
  
- **Returns**: 
  -  account: target account
-  btype: business type
  -  pubkey: ptm pubkey
  
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "ptmkey_getPtmKeyByAccount",
	"params": [{
	    "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j"
	}]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": [{
		"account": "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j",
		"btype": "default",
		"pubkey": "/vkgO5TfnsvKZGDc2KT1yxD5fxGNre65SPPuh3hyg0M="
	}]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "ptmkey_getPtmKeyByAccount",
	"params": [{
	    "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j"
	}]
}
```

:::

## ptmkey_getPtmKeyByAccountAndBtype

Get a ptm pubkey by account and btype

- **Parameters**: 
  - `account` : target account
  - btype: business type
- btype: business type
- **Returns**: 
  -  account: target account
  -  btype: business type
  -  pubkey: ptm pubkey

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ptmkey_getPtmKeyByAccountAndBtype",
	"params": [
	  "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j",
	  "default"
	]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": [{
		"account": "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j",
		"btype": "default",
		"pubkey": "/vkgO5TfnsvKZGDc2KT1yxD5fxGNre65SPPuh3hyg0M="
	}]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ptmkey_getPtmKeyByAccountAndBtype",
	"params": [
	  "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j",
	  "default"
	]
}
```

:::

## ptmkey_getPtmKeyUpdateBlock

Get a contractSend block to update ptm pubkey

- **Parameters**: 
  - account: target account
  - btype: business type
  - pubkey: ptm pubkey
  
- **Returns**: 
  -  `block`: node update ptm pubkey block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ptmkey_getPtmKeyUpdateBlock",
	"params": [{
		"account": "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j",
		"btype": "default",
		"pubkey": "/vkgO5TfnsvKZGDc2KT1yxD5fxGNre65SPPuh3hyg0M="
	}]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": {
		"type": "ContractSend",
		"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
		"address": "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "85837d052d1728e4a5bb0e53a3202482f4a2166e9a0bc325dda789db3e3d3d1f",
		"link": "000000000000000000000000000000000000000000000000000000000000001c",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "sGuweQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALC92a2dPNVRmbnN2S1pHRGMyS1QxeXhENWZ4R05yZTY1U1BQdWgzaHlnME09AAAAAAAAAAAAAAAAAAAAAAAAAAA=",
		"povHeight": 0,
		"timestamp": 1587540986,
		"extra": "dd5e2983e86e104cfe248bb50ea091d28f174c308a685f6b98de65755881227f",
		"representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
		"work": "0000000000000000",
		"signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ptmkey_getPtmKeyUpdateBlock",
	"params": [{
		"account": "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j",
		"btype": "default",
		"pubkey": "/vkgO5TfnsvKZGDc2KT1yxD5fxGNre65SPPuh3hyg0M="
	}]
}
```

:::

## ptmkey_getPtmKeyDeleteBlock

- Get a contractSend block to delete ptm pubkey

  - **Parameters**: 
    - account: target account
    - btype: business type

  - **Returns**: 
    -  `block`: node delete ptm pubkey block

  - **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ptmkey_getPtmKeyDeleteBlock",
	"params": [{
		"account": "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j",
		"btype": "default"
	}]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": {
		"type": "ContractSend",
		"token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
		"address": "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j",
		"balance": "10000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "85837d052d1728e4a5bb0e53a3202482f4a2166e9a0bc325dda789db3e3d3d1f",
		"link": "000000000000000000000000000000000000000000000000000000000000001c",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "QDdETgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		"povHeight": 0,
		"timestamp": 1587541129,
		"extra": "5e99d41ef0aa11ec65f6c4a1928716cace7d6239fb35db13a39d7bc72f1060a3",
		"representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
		"work": "0000000000000000",
		"signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "ptmkey_getPtmKeyDeleteBlock",
	"params": [{
		"account": "qlc_1s77torrs38rkm4eh7z5rxei3sqsdfjq9am93cjuf15h9y3cjyq8tf6u8d7j",
		"btype": "default"
	}]
}
```

:::

