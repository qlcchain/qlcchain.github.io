# Miner 

**支持调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## miner_getRewardSendBlock
根据提取奖励参数返回ContractSend块
- **输入参数**: 
    - `rewardParams`:  提取奖励参数  
- **返回值**: 
  - `block`: 提取奖励区块, 类型是ContractSend

- **举例**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "miner_getRewardSendBlock",
	"params": [
		{
			"coinbase": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
			"beneficial": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd"
		}
	]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "address": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
        "balance": "29755316000000000",
        "data": "7w5n697+CtDhe3XnLutBYSPPptKf6h9WrPm4LuBLLGv7u/Dr3v4K0OF7decu60FhI8+m0p/qH1as+bgu4Essa/u78Os=",
        "extra": "0000000000000000000000000000000000000000000000000000000000000000",
        "link": "0000000000000000000000000000000000000000000000000000000000000003",
        "message": "0000000000000000000000000000000000000000000000000000000000000000",
        "network": "0",
        "oracle": "0",
        "povHeight": 0,
        "previous": "35625af54401f1abad51081cb308270f94af5aa1e117c9721509343930376fdc",
        "representative": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
        "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "storage": "0",
        "timestamp": 1560925155,
        "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
        "type": "ContractSend",
        "vote": "0",
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
			"coinbase": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
			"beneficial": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd"
		}
	]
}


```
:::


## miner_getRewardRecvBlock
根据提取奖励发送区块获取奖励接收区块
- **输入参数**: 
  - `block`: 提取奖励发送区块  
- **返回值**: 
  - `block`: 提取奖励接收区块

- **举例**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "miner_getRewardRecvBlock",
	"params": [
		{
            "address": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
            "balance": "29755316000000000",
            "data": "7w5n697+CtDhe3XnLutBYSPPptKf6h9WrPm4LuBLLGv7u/Dr3v4K0OF7decu60FhI8+m0p/qH1as+bgu4Essa/u78Os=",
            "extra": "0000000000000000000000000000000000000000000000000000000000000000",
            "link": "0000000000000000000000000000000000000000000000000000000000000003",
            "message": "0000000000000000000000000000000000000000000000000000000000000000",
            "network": "0",
            "oracle": "0",
            "povHeight": 0,
            "previous": "35625af54401f1abad51081cb308270f94af5aa1e117c9721509343930376fdc",
            "representative": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
            "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "storage": "0",
            "timestamp": 1560925155,
            "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
            "type": "ContractSend",
            "vote": "0",
            "work": "0000000000000000"
        }
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result":     {
      "type": "ContractSend",
      "token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
      "address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "balance": "59999000000000000",
      "previous": "758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1",
      "link": "de32f02da71ef2fccd06634bfe29d3a7514a1880873478382704e3edeeaff982",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "RtDOi4MEIMBh7Czd6yq1U8Dnt5K8a3VJ+EnOQ0XPAmQQye+lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7msoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlFOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJRTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
      "quota": 0,
      "timestamp": 1552522682,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
      "work": "000000000091a0a2",
      "signature": "7fc37cad58b21f52ba29fc194d45a5ab6bb267fe1a84a45f72e86c1aca40691ad0107290085980d39757a21b7f00dde151f25a670f22eb9f7a611703c8fd3908",
      "tokenName": "QLC",
      "amount": "1000000000000",
      "hash": "257ecd944c1534771570525601b922b9453cebe7f9ccebd7f485e9d1875b5667"
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
            "address": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
            "balance": "29755316000000000",
            "data": "7w5n697+CtDhe3XnLutBYSPPptKf6h9WrPm4LuBLLGv7u/Dr3v4K0OF7decu60FhI8+m0p/qH1as+bgu4Essa/u78Os=",
            "extra": "0000000000000000000000000000000000000000000000000000000000000000",
            "link": "0000000000000000000000000000000000000000000000000000000000000003",
            "message": "0000000000000000000000000000000000000000000000000000000000000000",
            "network": "0",
            "oracle": "0",
            "povHeight": 0,
            "previous": "35625af54401f1abad51081cb308270f94af5aa1e117c9721509343930376fdc",
            "representative": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
            "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "storage": "0",
            "timestamp": 1560925155,
            "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
            "type": "ContractSend",
            "vote": "0",
            "work": "0000000000000000"
        }
	]
}


```
:::
