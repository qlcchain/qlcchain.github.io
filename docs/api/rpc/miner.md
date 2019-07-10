# Miner 

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## miner_getRewardInfo
Return miner reward info by coinbase address
- **Parameters**: 
    - `coinbase`:  miner address  
- **Returns**: 
  - `lastRewardHeight`: last rewarded block total height
  - `lastRewardBlocks`: last rewarded block total count
  - `lastBeneficial`: last rewarded beneficial address
  - `nodeRewardHeight`: max reward block height on node
  - `availRewardHeight`: available reward block height for miner
  - `availRewardBlocks`: available reward block count for miner
  - `needCallReward`: need call reward contract for miner
  - `pledgeVoteAmount`: pledger vote amount for miner
  - `latestBlockHeight`: latest block height on node

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "miner_getRewardInfo",
	"params": [
		"qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b"
	]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "availRewardBlocks": 84,
        "availRewardHeight": 5759,
        "lastBeneficial": "",
        "lastRewardBlocks": 0,
        "lastRewardHeight": 0,
        "latestBlockHeight": 33785,
        "needCallReward": true,
        "nodeRewardHeight": 28799,
        "pledgeVoteAmount": "100000000000000"
    }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "miner_getRewardInfo",
	"params": [
		"qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b"
	]
}


```
:::


## miner_getRewardSendBlock
Return contract send block by reward parameters
- **Parameters**: 
    - `rewardParams`:  miner reward parameters  
- **Returns**: 
  - `block`: reward block, type is ContractSend

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "miner_getRewardSendBlock",
	"params": [
		{
			"coinbase": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
			"beneficial": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
            "rewardBlocks": 84,
            "rewardHeight": 5759
		}
	]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "address": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
        "balance": "0",
        "data": "Vf2rnjwV8sDzmVB3WH2DsmlecoVIxrOmiEuNujExBYfYVL3DPBXywPOZUHdYfYOyaV5yhUjGs6aIS426MTEFh9hUvcMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZ/",
        "extra": "0000000000000000000000000000000000000000000000000000000000000000",
        "link": "0000000000000000000000000000000000000000000000000000000000000003",
        "message": "0000000000000000000000000000000000000000000000000000000000000000",
        "network": "0",
        "oracle": "0",
        "povHeight": 46229,
        "previous": "6ea6291b6dac0291b5bf35047be0bac8c741d60716cadaefc0d00e071f502095",
        "representative": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
        "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "storage": "0",
        "timestamp": 1562660407,
        "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
        "type": "ContractSend",
        "vote": "100000000000000",
        "work": "0000000000000000"
    }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "miner_getRewardSendBlock",
	"params": [
		{
			"coinbase": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
			"beneficial": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
            "rewardHeight": 5759
		}
	]
}


```
:::


## miner_getRewardRecvBlockBySendHash
Return contract reward block by contract send block hash
- **Parameters**: 
  - `sendHash`: contract send block hash
- **Returns**: 
  - `block`: contract reward block

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "miner_getRewardRecvBlock",
	"params": [
		"b592c669e4a223be858209041ec7d84dd59c46c2ce6844464a2e0fd3b5e78035"
	]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "address": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
        "balance": "23972602668",
        "data": "PBXywPOZUHdYfYOyaV5yhUjGs6aIS426MTEFh9hUvcMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU",
        "extra": "089f8efb40fffd9c3143fb728f7e1d4f70d981ad3812ff28d1e212091e65ec13",
        "link": "b592c669e4a223be858209041ec7d84dd59c46c2ce6844464a2e0fd3b5e78035",
        "message": "0000000000000000000000000000000000000000000000000000000000000000",
        "network": "0",
        "oracle": "0",
        "povHeight": 46229,
        "previous": "0000000000000000000000000000000000000000000000000000000000000000",
        "representative": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
        "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "storage": "0",
        "timestamp": 1562660519,
        "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
        "type": "ContractReward",
        "vote": "0",
        "work": "0000000000000000"
    }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "miner_getRewardRecvBlock",
	"params": [
		"3252733cdfacdd3143b846d419aab0902b8f6414b2f29bab367445dd562403d7"
	]
}


```
:::


## miner_getRewardRecvBlock
Return contract reward block by contract send block
- **Parameters**: 
  - `block`: contract send block  
- **Returns**: 
  - `block`: contract reward block

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "miner_getRewardRecvBlock",
	"params": [
		{
            "address": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
            "balance": "0",
            "data": "Vf2rnjwV8sDzmVB3WH2DsmlecoVIxrOmiEuNujExBYfYVL3DPBXywPOZUHdYfYOyaV5yhUjGs6aIS426MTEFh9hUvcMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZ/",
            "extra": "0000000000000000000000000000000000000000000000000000000000000000",
            "link": "0000000000000000000000000000000000000000000000000000000000000003",
            "message": "0000000000000000000000000000000000000000000000000000000000000000",
            "network": "0",
            "oracle": "0",
            "povHeight": 46229,
            "previous": "6ea6291b6dac0291b5bf35047be0bac8c741d60716cadaefc0d00e071f502095",
            "representative": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
            "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "storage": "0",
            "timestamp": 1562660407,
            "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
            "type": "ContractSend",
            "vote": "100000000000000",
            "work": "0000000000000000"
        }
	]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "address": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
        "balance": "23972602668",
        "data": "PBXywPOZUHdYfYOyaV5yhUjGs6aIS426MTEFh9hUvcMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU",
        "extra": "089f8efb40fffd9c3143fb728f7e1d4f70d981ad3812ff28d1e212091e65ec13",
        "link": "b592c669e4a223be858209041ec7d84dd59c46c2ce6844464a2e0fd3b5e78035",
        "message": "0000000000000000000000000000000000000000000000000000000000000000",
        "network": "0",
        "oracle": "0",
        "povHeight": 46229,
        "previous": "0000000000000000000000000000000000000000000000000000000000000000",
        "representative": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
        "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "storage": "0",
        "timestamp": 1562660519,
        "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
        "type": "ContractReward",
        "vote": "0",
        "work": "0000000000000000"
    }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "miner_getRewardRecvBlock",
	"params": [
		{
            "address": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
            "balance": "0",
            "data": "Vf2rnjwV8sDzmVB3WH2DsmlecoVIxrOmiEuNujExBYfYVL3DPBXywPOZUHdYfYOyaV5yhUjGs6aIS426MTEFh9hUvcMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZ/",
            "extra": "0000000000000000000000000000000000000000000000000000000000000000",
            "link": "0000000000000000000000000000000000000000000000000000000000000003",
            "message": "0000000000000000000000000000000000000000000000000000000000000000",
            "network": "0",
            "oracle": "0",
            "povHeight": 46229,
            "previous": "6ea6291b6dac0291b5bf35047be0bac8c741d60716cadaefc0d00e071f502095",
            "representative": "qlc_1h1oyd1h98cigxe9u1xkf7h973cartstf44djpx54ea7ize7bhg5caz6cm7b",
            "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "storage": "0",
            "timestamp": 1562660407,
            "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
            "type": "ContractSend",
            "vote": "100000000000000",
            "work": "0000000000000000"
        }
	]
}


```
:::
