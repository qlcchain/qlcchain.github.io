# Representation

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe |
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |


## rep_getAvailRewardInfo
Return representation available reward info by account address. Client should call representation reward contract when `needCallReward` in returns is `true`.
- **Parameters**: 
    - `account`:  representation address  
- **Returns**: 
  - `lastEndHeight`: last reward block end height
  - `latestBlockHeight`: latest block height on node
  - `nodeRewardHeight`: max reward block height on node
  - `availStartHeight`: available reward block start height for representation
  - `availEndHeight`: available reward block end height for representation
  - `availRewardBlocks`: available reward block count for representation
  - `needCallReward`: need call reward contract for representation
  
- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rep_getAvailRewardInfo",
	"params": [
		"qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy"
	]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "availEndHeight": 239,
        "availRewardBlocks": 42,
        "availStartHeight": 120,
        "lastEndHeight": 0,
        "latestBlockHeight": 1599,
        "needCallReward": true,
        "nodeRewardHeight": 1439
    }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rep_getAvailRewardInfo",
	"params": [
		"qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy"
	]
}


```
:::


## rep_getRewardSendBlock
Return contract send block by reward parameters
- **Parameters**: 
    - `rewardParams`:  representation reward parameters  
- **Returns**: 
  - `block`: reward block, type is ContractSend

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rep_getRewardSendBlock",
	"params": [
		{
			"account": "qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
			"beneficial": "qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
            "startHeight": 120,
            "endHeight": 239,
            "rewardBlocks": 42
		}
	]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "address": "qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
        "balance": "19800000000000000",
        "data": "aXMKz2f7ZF1T06vDAb5bPaQE1xbGl0s4KTlerUU+agqbIXNAZ/tkXVPTq8MBvls9pATXFsaXSzgpOV6tRT5qCpshc0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACo=",
        "extra": "0000000000000000000000000000000000000000000000000000000000000000",
        "link": "0000000000000000000000000000000000000000000000000000000000000015",
        "message": "0000000000000000000000000000000000000000000000000000000000000000",
        "network": "0",
        "oracle": "0",
        "povHeight": 1596,
        "previous": "e6363d535378796fdcdf635b58b9b2a54a579364fd8e5a814b0a5c9969854884",
        "representative": "qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
        "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "storage": "0",
        "timestamp": 1563434320,
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
	"method": "rep_getRewardSendBlock",
	"params": [
		{
			"account": "qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
			"beneficial": "qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
            "startHeight": 120,
            "endHeight": 239,
            "rewardBlocks": 42
		}
	]
}


```
:::


## rep_getRewardRecvBlockBySendHash
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
	"method": "rep_getRewardRecvBlockBySendHash",
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
	"method": "rep_getRewardRecvBlockBySendHash",
	"params": [
		"3252733cdfacdd3143b846d419aab0902b8f6414b2f29bab367445dd562403d7"
	]
}


```
:::


## rep_getRewardRecvBlock
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
	"method": "rep_getRewardRecvBlock",
	"params": [
		{
            "address":"qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
            "balance":"19800000000000000",
            "data":"aXMKz2f7ZF1T06vDAb5bPaQE1xbGl0s4KTlerUU+agqbIXNAZ/tkXVPTq8MBvls9pATXFsaXSzgpOV6tRT5qCpshc0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACo=",
            "extra":"0000000000000000000000000000000000000000000000000000000000000000",
            "link":"0000000000000000000000000000000000000000000000000000000000000015",
            "message":"0000000000000000000000000000000000000000000000000000000000000000",
            "network":"0",
            "oracle":"0",
            "povHeight":1596,
            "previous":"e6363d535378796fdcdf635b58b9b2a54a579364fd8e5a814b0a5c9969854884",
            "representative":"qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
            "signature":"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "storage":"0",
            "timestamp":1563434320,
            "token":"a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
            "type":"ContractSend",
            "vote":"100000000000000",
            "work":"0000000000000000"
        }
	]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "address": "qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
        "balance": "11986301334",
        "extra": "24dbf281b17fbf43bdebb14472503fdd17d169ff40d40d33c6176d39ff81f8c6",
        "link": "072435e4d8ea1df4609abce5ff7b7c06050df5b588c7fa07c3d773ee31958b3a",
        "message": "0000000000000000000000000000000000000000000000000000000000000000",
        "network": "0",
        "oracle": "0",
        "povHeight": 1596,
        "previous": "0000000000000000000000000000000000000000000000000000000000000000",
        "representative": "qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
        "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "storage": "0",
        "timestamp": 1563435597,
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
	"method": "rep_getRewardRecvBlock",
	"params": [
		{
            "address":"qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
            "balance":"19800000000000000",
            "data":"aXMKz2f7ZF1T06vDAb5bPaQE1xbGl0s4KTlerUU+agqbIXNAZ/tkXVPTq8MBvls9pATXFsaXSzgpOV6tRT5qCpshc0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACo=",
            "extra":"0000000000000000000000000000000000000000000000000000000000000000",
            "link":"0000000000000000000000000000000000000000000000000000000000000015",
            "message":"0000000000000000000000000000000000000000000000000000000000000000",
            "network":"0",
            "oracle":"0",
            "povHeight":1596,
            "previous":"e6363d535378796fdcdf635b58b9b2a54a579364fd8e5a814b0a5c9969854884",
            "representative":"qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy",
            "signature":"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "storage":"0",
            "timestamp":1563434320,
            "token":"a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
            "type":"ContractSend",
            "vote":"100000000000000",
            "work":"0000000000000000"
        }
	]
}


```
:::

## rep_getRewardHistory

Return representative's contract reward history

- **Parameters**: 
  - `account`: representative's address  
- **Returns**: 
  - `LastEndHeight`: last reward block end height
  - `RewardBlocks`: how many blocks have been claimed
  - `RewardAmount`: how much gas has been claimed
  - `LastRewardTime`: last reward time
- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rep_getRewardHistory",
	"params": ["qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy"]
}
```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 3,
	"result": {
		"lastEndHeight": 59,
		"rewardBlocks": 40,
		"rewardAmount": "4566210040",
		"lastRewardTime": 1571910958
	}
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "rep_getRewardHistory",
	"params": ["qlc_1szuejgo9nxdre1uwpsxni4fg7p8kx7micbsdtpnchmc3cfk4wt1i37uncmy"]
}
```

:::

