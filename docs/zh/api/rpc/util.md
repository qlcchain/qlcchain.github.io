# Util

**支持的调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



## util_decrypt
通过密码解密密文
- **Parameters**: 
  - `string` : 密文, 通过base64编码
  - `string` : 密码

  
- **Returns**: 
  - `string` : 原文

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "util_decrypt",
	"params": [
		"eyJjcnlwdG8iOnsiY2lwaGVydGV4dCI6ImI3OTkwNmRlOGE0NzYzOTZjZmE2OTM4ZjFmZjMxMTdjMjVlZWVhNDMzNTJiNmM1MTA2MDA2ZGJiODFkN2FhNGY5NWIxMjEzYmE3ZDIzM2MyNTU0NGIyYzg1MDYwNGRjMyIsIm5vbmNlIjoiYzNkMzk1NDdhZGFhMWZlZWZmODBmMWI4Iiwic2NyeXB0cGFyYW1zIjp7Im4iOjI2MjE0NCwiciI6OCwicCI6MSwia2V5bGVuIjozMiwic2FsdCI6ImE0NGJiMmU0MTMxMDYyNTc1NWEyOWVkYzg3NGFmMzFkNTk1M2QzNzQyODMwNDk2YTUyZjdkMjY2ZWYxMzMzMTAifX0sInRpbWVzdGFtcCI6MTU1MzU4ODc5N30=",
		"98qUb5Ud"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "a7bcc2785e93226699618087528c4fbc8990fc247f12743e2a9caea8590756a0"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "util_decrypt",
	"params": [
		"eyJjcnlwdG8iOnsiY2lwaGVydGV4dCI6ImI3OTkwNmRlOGE0NzYzOTZjZmE2OTM4ZjFmZjMxMTdjMjVlZWVhNDMzNTJiNmM1MTA2MDA2ZGJiODFkN2FhNGY5NWIxMjEzYmE3ZDIzM2MyNTU0NGIyYzg1MDYwNGRjMyIsIm5vbmNlIjoiYzNkMzk1NDdhZGFhMWZlZWZmODBmMWI4Iiwic2NyeXB0cGFyYW1zIjp7Im4iOjI2MjE0NCwiciI6OCwicCI6MSwia2V5bGVuIjozMiwic2FsdCI6ImE0NGJiMmU0MTMxMDYyNTc1NWEyOWVkYzg3NGFmMzFkNTk1M2QzNzQyODMwNDk2YTUyZjdkMjY2ZWYxMzMzMTAifX0sInRpbWVzdGFtcCI6MTU1MzU4ODc5N30=",
		"98qUb5Ud"
	]
}


```
:::



## util_encrypt
通过密码加密原文
- **Parameters**: 
    - `string` : 原文，16进制字符串
    - `string` : 密码

  
- **Returns**: 
    - `string`:  密文，通过base64加密

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":2,
  "method":"util_encrypt",
  "params":  ["a7bcc2785e93226699618087528c4fbc8990fc247f12743e2a9caea8590756a0","98qUb5Ud"]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": "eyJjcnlwdG8iOnsiY2lwaGVydGV4dCI6ImI3OTkwNmRlOGE0NzYzOTZjZmE2OTM4ZjFmZjMxMTdjMjVlZWVhNDMzNTJiNmM1MTA2MDA2ZGJiODFkN2FhNGY5NWIxMjEzYmE3ZDIzM2MyNTU0NGIyYzg1MDYwNGRjMyIsIm5vbmNlIjoiYzNkMzk1NDdhZGFhMWZlZWZmODBmMWI4Iiwic2NyeXB0cGFyYW1zIjp7Im4iOjI2MjE0NCwiciI6OCwicCI6MSwia2V5bGVuIjozMiwic2FsdCI6ImE0NGJiMmU0MTMxMDYyNTc1NWEyOWVkYzg3NGFmMzFkNTk1M2QzNzQyODMwNDk2YTUyZjdkMjY2ZWYxMzMzMTAifX0sInRpbWVzdGFtcCI6MTU1MzU4ODc5N30="
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":2,
  "method":"util_encrypt",
  "params":  ["a7bcc2785e93226699618087528c4fbc8990fc247f12743e2a9caea8590756a0","98qUb5Ud"]
}


```
:::




## util_rawToBalance

返回最小单位余额对应的指定单位的余额

- **Parameters**: 
  - `string`: 最小单位的余额
  - `string`: 单位
  - `string`: token名称，可空，如果不设置，默认为QLC

  
- **Returns**: 
  - `string`:  指定单位的余额

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"util_rawToBalance",
  "params":  ["200000000","QLC"]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "2"
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"util_rawToBalance",
  "params":  ["200000000","QLC"]
}


```
:::


## util_balanceToRaw
返回指定单位余额对应的最小单位的余额
- **Parameters**: 
  - `string` : 指定单位的余额
  - `string` : 单位
  - `string` : token名称，可空，如果不设置，默认为QLC

  
- **Returns**: 
  - `string`: 最小单位的余额

- **Example**:

::: demo
```json tab:Request
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"util_balanceToRaw",
  "params":  ["2","QLC"]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "200000000"
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":1,
  "method":"util_balanceToRaw",
  "params":  ["2","QLC"]
}


```
:::

