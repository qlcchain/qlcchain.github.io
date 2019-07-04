# Mintage 

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |


## mintage_getMintageData
Return mintage data by mintage parameters 
- **Parameters**: 
  - `mintageParams`:  mintage parameters
  
- **Returns**: 
  - `string`:  data for mintage

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "mintage_getMintageData",
	"params": [
		{
			"selfAddr": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"prevHash": "758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1",
			"tokenName": "QM",
			"tokenSymbol": "QM",
			"totalSupply": "1000000000",
			"decimals": 8,
			"pledgeAmount": 1000000
		}
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "RtDOi36yRn34tcH5dS2ThaV+eOeDzObdqEz883OcFX49k3CRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7msoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlFNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJRTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
}

```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "mintage_getMintageData",
	"params": [
		{
			"selfAddr": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"prevHash": "758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1",
			"tokenName": "QM",
			"tokenSymbol": "QM",
			"totalSupply": "1000000000",
			"decimals": 8,
			"pledgeAmount": 1000000
		}
	]
}


```
:::




## mintage_getMintageBlock
Return contract send block by mintage parameters
- **Parameters**: 
    - `mintageParams`:  mintage parameters  
- **Returns**: 
  - `block`: mintage block, type is ContractSend

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "mintage_getMintageBlock",
	"params": [
		{
			"selfAddr": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"prevHash": "758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1",
			"tokenName": "QN",
			"tokenSymbol": "QN",
			"totalSupply": "1000000000",
			"decimals": 8,
			"pledgeAmount": 1000000000
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
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
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
	"method": "mintage_getMintageBlock",
	"params": [
		{
			"selfAddr": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"prevHash": "758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1",
			"tokenName": "QN",
			"tokenSymbol": "QN",
			"totalSupply": "1000000000",
			"decimals": 8,
			"pledgeAmount": 1000000000
		}
	]
}


```
:::





## mintage_getRewardBlock
Return contract reward block by contract send block
- **Parameters**: 
  - `block`:  contract send block  
  
- **Returns**: 
  - `block`:  contract reward block

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "mintage_getRewardBlock",
	"params": [
		{
			"type": "ContractSend",
			"token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
			"address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"balance": "59999000000000000",
			"previous": "758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1",
			"link": "de32f02da71ef2fccd06634bfe29d3a7514a1880873478382704e3edeeaff982",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"data": "RtDOi36yRn34tcH5dS2ThaV+eOeDzObdqEz883OcFX49k3CRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7msoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlFNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJRTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
			"vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
			"timestamp": 1552522398,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"work": "0000000000000000",
			"signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
		}
	]
}


```

```json tab:Response
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": {
		"type": "ContractReward",
		"token": "830420c061ec2cddeb2ab553c0e7b792bc6b7549f849ce4345cf026410c9efa5",
		"address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
		"balance": "100000000000000000",
		"previous": "0000000000000000000000000000000000000000000000000000000000000000",
		"link": "257ecd944c1534771570525601b922b9453cebe7f9ccebd7f485e9d1875b5667",
		"message": "0000000000000000000000000000000000000000000000000000000000000000",
		"data": "gwQgwGHsLN3rKrVTwOe3krxrdUn4Sc5DRc8CZBDJ76UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuaygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACGgb9SU8ZGcvxUyT07W5og0olly4+AunBGDtP5nLVHvVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6NSlEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXImdugAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUU4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlFOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
	  "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
		"timestamp": 1552522685,
		"extra": "0000000000000000000000000000000000000000000000000000000000000000",
		"representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
		"work": "000000000054b46a",
		"signature": "9e7ac06d995ea8ed42c7feb3c6c990e0994e95296bd8b2dde0379656794f6f55324825a98332976ee4e2c1d957f7561b1ed7de4c003b3452e6406cda8d408007",
		"tokenName": "QN",
		"amount": "100000000000000000",
		"hash": "029c2efaf67d92a29def730e008219b0e59ca6b7974ee1805c342438b961e085"
	}
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "mintage_getRewardBlock",
	"params": [
		{
			"type": "ContractSend",
			"token": "45dd217cd9ff89f7b64ceda4886cc68dde9dfa47a8a422d165e2ce6f9a834fad",
			"address": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"balance": "59999000000000000",
			"previous": "758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1",
			"link": "de32f02da71ef2fccd06634bfe29d3a7514a1880873478382704e3edeeaff982",
			"message": "0000000000000000000000000000000000000000000000000000000000000000",
			"data": "RtDOi36yRn34tcH5dS2ThaV+eOeDzObdqEz883OcFX49k3CRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7msoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlFNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJRTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
			"vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
			"timestamp": 1552522398,
			"extra": "0000000000000000000000000000000000000000000000000000000000000000",
			"representative": "qlc_1t1uynkmrs597z4ns6ymppwt65baksgdjy1dnw483ubzm97oayyo38ertg44",
			"work": "0000000000000000",
			"signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
		}
	]
}


```
:::

