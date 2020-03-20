# Permission Control

**Supported protocols:**

| JSON-RPC 2.0 | Websocket |   IPC    | Publish–subscribe |
| :----------: | :-------: | :------: | :---------------: |
|   &#x2713;   | &#x2713;  | &#x2713; |        TBD        |



## permission_getAdminUpdateSendBlock

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
	"method": "permission_getAdminUpdateSendBlock",
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
	"method": "permission_getAdminUpdateSendBlock",
	"params": [{
	    "admin":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
	    "successor":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
	    "comment":"QLC ADMIN"
	}]
}
```

:::

## permission_getAdminUpdateRewardBlockBySendHash

Get a contractReward block to update to the new admin

- **Parameters**: 
  - `hash` : contractSend block hash

- **Returns**: 
  -  `block`: admin update reward block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getAdminUpdateRewardBlockBySendHash",
	"params": [
	    "25e0bca36030ea9ff51b84570fade274abfe01f3e05e9ef33f7a9cd7f7cd24c0"  
	 ]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"type": "ContractReward",
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
	"method": "permission_getAdminUpdateRewardBlockBySendHash",
	"params": [
	    "25e0bca36030ea9ff51b84570fade274abfe01f3e05e9ef33f7a9cd7f7cd24c0"  
	 ]
}
```

:::

## permission_getAdmin

Get the current admin

- **Parameters**: 
  - Null

- **Returns**: 
  -  `admin`: admin account
  -  `status`: active/in hand over
  -  `comment`: comment message

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getAdmin",
	"params": []
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"admin": "qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
		"status": "active",
		"comment": "123123"
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getAdmin",
	"params": []
}
```

:::

## permission_getNodeAddBlock

Get a contractSend block to add a node

- **Parameters**: 
  - `admin` : current admin qlc account
  - `kind` : node addr kind(0:ip+port/1:p2p peer id)
  - `node`: kind 0 format:(x.x.x.x:x)/kind 1 format(xxxxxxxxxx)
  - `comment` : comment message(max 128 bytes)

- **Returns**: 
  -  `block`: node add block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNodeAddBlock",
	"params": [{
	    "admin":"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
	    "kind":0,
	    "node":"1.1.1.1:1234",
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
		"data": "S/RxFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMMS4xLjEuMToxMjM0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm4xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		"povHeight": 0,
		"timestamp": 1584670253,
		"extra": "a1aeb456683394b6dc647fa68a0a5a2b34820ba436f18b625d0cbb8df1891c0f",
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
	"method": "permission_getNodeAddBlock",
	"params": [{
	    "admin":"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
	    "kind":0,
	    "node":"1.1.1.1:1234",
	    "comment":"n1"
	}]
}
```

:::

## permission_getNodeUpdateBlock

Get a contractSend block to update node

- **Parameters**: 
  - `admin` : current admin qlc account
  - `index` : node index(generated when adding a node)
  - `kind` : node addr kind(0:ip+port/1:p2p peer id)
  - `node`: kind 0 format:(x.x.x.x:x)/kind 1 format(xxxxxxxxxx)
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
	    "index":1,
	    "kind":0,
	    "node":"1.1.1.1:1234",
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
	    "index":1,
	    "kind":0,
	    "node":"1.1.1.1:1234",
	    "comment":"n1"
	}]
}
```

:::

## permission_getNodeRemoveBlock

Get a contractSend block to remove a node

- **Parameters**: 
  - `admin` : current admin qlc account
  - `index` : node index(generated when adding a node)

- **Returns**: 
  -  `block`: node remove block

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNodeRemoveBlock",
	"params": [{
	    "admin":"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
	    "index":1
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
		"data": "3dgdQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB",
		"povHeight": 0,
		"timestamp": 1584670653,
		"extra": "5eea7d0c96ebe12011ccd18ed3d4c854911ad061e54f9ac304bd8b6d76254bc1",
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
	"method": "permission_getNodeRemoveBlock",
	"params": [{
	    "admin":"qlc_1bwjtpipkzc7aj6hmuodncjmfsb4tou9word8bj9jxcm68cheipad54q66xe",
	    "index":1
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
	"method": "permission_getNodesCount",
	"params": []
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
	"method": "permission_getNodesCount",
	"params": []
}
```

:::

## permission_getNodeByIndex

Get node info by index

- **Parameters**: 
  - index of the node

- **Returns**: 
  -  node info

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNodeByIndex",
	"params": [2]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"index": 2,
		"kind": 1,
		"node": "QmVLbouTEb9LGQJ56KvQCyoPXqDeqwYSE6j1YSyfLeHgN3",
		"comment": "t3"
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "permission_getNodeByIndex",
	"params": [2]
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
			"index": 0,
			"kind": 0,
			"node": "1.1.1.1:1234",
			"comment": "t1"
		},
		{
			"index": 2,
			"kind": 1,
			"node": "QmVLbouTEb9LGQJ56KvQCyoPXqDeqwYSE6j1YSyfLeHgN3",
			"comment": "t3"
		},
		{
			"index": 3,
			"kind": 1,
			"node": "QmVLbouTEb9LGQJ56KvQCyoPXqDeqwYSE6j1YSyfLeHgN3",
			"comment": "t4"
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