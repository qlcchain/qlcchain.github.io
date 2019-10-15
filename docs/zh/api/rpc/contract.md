# Contract

**支持调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD ||

## contract_contractAddressList
获取链上所有合约地址

- **Parameters**: `null`
  
- **Returns**: 
  - `[]address`:  合约地址列表

- **Example**:


::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "contract_contractAddressList"
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    "qlc_3fwi6r1fzjwmiys819pw8jxrcmcottsj4iq56kkgcmzi3b87596jwskwqrr5",
    "qlc_3qjky1ptg9qkzm8iertdzrnx9btjbaea33snh1w4g395xqqczye4kgcfyfs1",
    "qlc_3oinqggowa7f1rsjfmib476ggz6s4fp8578odjzerzztkrifqkqdz5zjztb3",
    "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
    "qlc_111111111111111111111111111111111111111111111111111p6kuesd3f"
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "contract_contractAddressList"
}


```
:::


## contract_getAbiByContractAddress
根据合约地址获取合约abi

- **Parameters**: 
  - `string`: 合约地址
  
- **Returns**: 
  - `string`: 合约abi

- **Example**:


::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "contract_getAbiByContractAddress",
	"params": ["qlc_3qjky1ptg9qkzm8iertdzrnx9btjbaea33snh1w4g395xqqczye4kgcfyfs1"]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "[{\"type\":\"function\",\"name\":\"Mintage\",\"inputs\":[{\"name\":\"tokenId\",\"type\":\"tokenId\"},{\"name\":\"tokenName\",\"type\":\"string\"},{\"name\":\"tokenSymbol\",\"type\":\"string\"},{\"name\":\"totalSupply\",\"type\":\"uint256\"},{\"name\":\"decimals\",\"type\":\"uint8\"},{\"name\":\"beneficial\",\"type\":\"address\"},{\"name\":\"NEP5TxId\",\"type\":\"string\"}]},\n\t\t{\"type\":\"function\",\"name\":\"Withdraw\",\"inputs\":[{\"name\":\"tokenId\",\"type\":\"tokenId\"}]},{\"type\":\"variable\",\"name\":\"token\",\"inputs\":[{\"name\":\"tokenId\",\"type\":\"tokenId\"},{\"name\":\"tokenName\",\"type\":\"string\"},{\"name\":\"tokenSymbol\",\"type\":\"string\"},{\"name\":\"totalSupply\",\"type\":\"uint256\"},{\"name\":\"decimals\",\"type\":\"uint8\"},{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"pledgeAmount\",\"type\":\"uint256\"},{\"name\":\"withdrawTime\",\"type\":\"int64\"},{\"name\":\"pledgeAddress\",\"type\":\"address\"},{\"name\":\"NEP5TxId\",\"type\":\"string\"}]},{\"type\":\"variable\",\"name\":\"genesisToken\",\"inputs\":[{\"name\":\"tokenId\",\"type\":\"tokenId\"},{\"name\":\"tokenName\",\"type\":\"string\"},{\"name\":\"tokenSymbol\",\"type\":\"string\"},{\"name\":\"totalSupply\",\"type\":\"uint256\"},{\"name\":\"decimals\",\"type\":\"uint8\"},{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"pledgeAmount\",\"type\":\"uint256\"},{\"name\":\"withdrawTime\",\"type\":\"int64\"},{\"name\":\"pledgeAddress\",\"type\":\"address\"}]}]"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "contract_getAbiByContractAddress",
	"params": ["qlc_3qjky1ptg9qkzm8iertdzrnx9btjbaea33snh1w4g395xqqczye4kgcfyfs1"]
}


```
:::



## contract_packContractData
根据ABI打包指定的方法

- **Parameters**: 
  - `string`:  ABI数据
  - `string`:  方法名称
  - `[]string`: 方法参数
  
- **Returns**: 
  - `string`:  打包结果

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "contract_packContractData",
	"params": [
		"[{ \"type\" : \"function\", \"name\" : \"balance\", \"constant\" : true }]",
		"balance",
		[]
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "Boc+Zw=="
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "contract_packContractData",
	"params": [
		"[{ \"type\" : \"function\", \"name\" : \"balance\", \"constant\" : true }]",
		"balance",
		[]
	]
}


```
:::

