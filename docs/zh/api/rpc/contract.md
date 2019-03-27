# Contract

**支持调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD ||


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

