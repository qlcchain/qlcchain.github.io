# Permission Control

**Supported protocols:**

| JSON-RPC 2.0 | Websocket |   IPC    | Publish–subscribe |
| :----------: | :-------: | :------: | :---------------: |
|   &#x2713;   | &#x2713;  | &#x2713; |        TBD        |



## permission_getAdminHandoverBlock

Get a contractSend block to update admin

- **Parameters**: 
  - `admin` : current admin qlc account
  - `successor` : successor account of current admin
  - `comment` : comment message(max 128 bytes)

- **Returns**: 
  -  `block`: admin update send block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getAdminHandoverBlock",
	"params": [{
	    "admin":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
	    "successor":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
	    "comment":"QLC ADMIN"
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
		"address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
		"balance": "60000000000000000",
		"vote": "0",
		"network": "0",
		"storage": "0",
		"oracle": "0",
		"previous": "5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d",
		"link": "000000000000000000000000000000000000000000000000000000000000001a",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "N6HBj7+GyD+0v7n0m5uPpZPIz0EoyeIXIMSHVltS/GZAqejzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVFMQyBBRE1JTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		"povHeight": 0,
		"timestamp": 1584600499,
		"extra": "d89931e2b93961b0ef52bae3f7e4898210319c0e4e018f549d179e1b0a5465f9",
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
	"method": "permission_getAdminHandoverBlock",
	"params": [{
	    "admin":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
	    "successor":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
	    "comment":"QLC ADMIN"
	}]
}
```

:::

## permission_getAdmin

Get the current admin

- **Parameters**: 
  - Null

- **Returns**: 
  -  `admin`: admin account
  -  `comment`: comment message
  
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getAdmin"
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"admin": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"comment": "123123"
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getAdmin"
}
```

:::

## permission_getNodeUpdateBlock

Get a contractSend block to update node

- **Parameters**: 
  - `admin` : current admin qlc account
  - `nodeId` : node id
  - `nodeUrl`: node url, format(1.1.1.1:10000), optional. If set, it will check the peer's ip and port.
  - `comment` : comment message(max 128 bytes)
  
- **Returns**: 
  -  `block`: node update block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNodeUpdateBlock",
	"params": [{
	    "admin":"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
	    "nodeId":"n1",
	    "nodeUrl":"1.1.1.1:1234",
	    "comment":"n1"
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
		"oracle": "0",
		"previous": "a7d4f3612c6c36fa1a4403727e56deaeaa3b235c0a5b6727bca7419fcfe662ee",
		"link": "000000000000000000000000000000000000000000000000000000000000001a",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "t8SHTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwxLjEuMS4xOjEyMzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
		"povHeight": 0,
		"timestamp": 1584670370,
		"extra": "fb028b4fa38d08856613a829e2802817a1c5a58dcf876afb021c1d1a2ac72dfb",
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
	"method": "permission_getNodeUpdateBlock",
	"params": [{
	    "admin":"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
	    "nodeId":"n1",
	    "nodeUrl":"1.1.1.1:1234",
	    "comment":"n1"
	}]
}
```

:::

## permission_getNodesCount

Get all the valid nodes count

- **Parameters**: 
  - Null

- **Returns**: 
  -  Count of nodes

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNodesCount"
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": 4
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNodesCount"
}
```

:::

## permission_getNode

Get node info by node id

- **Parameters**: 
  - node id

- **Returns**: 
  -  node info

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNode",
	"params": ["node id"]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"nodeId": "n1",
		"nodeUrl": "",
		"comment": "n1Test"
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNode",
	"params": ["node id"]
}
```

:::

## permission_getNodes

Get a contractSend block to update node

- **Parameters**: 
  - `count` : node count to return
  - `offset`: offset of the node

- **Returns**: 
  -  Nodes info

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNodes",
	"params": [10, 0]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": [
		{
			"nodeId": "n5",
			"nodeUrl": "",
			"comment": "n5Test"
		},
		{
			"nodeId": "n4",
			"nodeUrl": "",
			"comment": "n4Test"
		},
		{
			"nodeId": "n2",
			"nodeUrl": "",
			"comment": "n2Test"
		},
		{
			"nodeId": "n3",
			"nodeUrl": "",
			"comment": "n3Test"
		},
		{
			"nodeId": "n1",
			"nodeUrl": "",
			"comment": "n1Test"
		}
	]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNodes",
	"params": [10, 0]
}
```

:::