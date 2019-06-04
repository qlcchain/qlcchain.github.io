# Util

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



## util_decrypt
Decrypt the cryptograph string by passphrase 
- **Parameters**: 
  - `string` : cryptograph, encoded by base64
  - `string` : passphrase

  
- **Returns**: 
  - `string` : raw data

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
Encrypt encrypt raw data by passphrase
- **Parameters**: 
    - `string` : raw data, need a hex string
    - `string` : passphrase

  
- **Returns**: 
    - `string`:  cryptograph , encoded by base64

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
Return balance by specific unit for raw value
- **Parameters**: 
  - `string`: raw value
  - `string`: unit, if token is QLC ,need set `qlc`,`Kqlc`,`QLC` or `MQLC`, others should set empty string `""`
  - `string`: `optional`, token name , if not set , default is QLC

  
- **Returns**: 
  - `string`:  balance for the unit

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
Return raw value for the balance by specific unit 
- **Parameters**: 
  - `string` : balance
  - `string` : unit, if token is QLC ,need set `qlc`,`Kqlc`,`QLC` or `MQLC`, others should set empty string `""`
  - `string` : `optional`, token name, if not set , default is QLC

  
- **Returns**: 
  - `string`: raw value

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

