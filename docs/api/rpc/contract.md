# Contract

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD ||


## contract_packContractData
Pack the given method name to conform the ABI
- **Parameters**: 
  - `string`:  abi string
  - `string`:  method name
  - `[]string`: arguments for the method
  
- **Returns**: 
  - `string`:  packed result

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

