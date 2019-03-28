# SMS

**支持的调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



## sms_phoneBlocks
根据手机号返回对应的区块列表，这些区块的sender或者receiver字段为该手机号
- **Parameters**: 
  - `string`:  手机号
  
- **Returns**: 
  - `[]block`: 区块列表

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "sms_phoneBlocks",
	"params": [
		"18500001111"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "receive": [
      {
        "type": "Send",
        "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
        "address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
        "balance": "59999999999000000",
        "previous": "a217c8d4374377562e891d0f6b50fcdcd02c68ab7fe7d72efd14ea5c4136a214",
        "link": "941693c7292c0ba082ae768948102f38240e1e7dd0e80065267d2ab5b705323d",
        "sender": "MTU4MTExMTAwMDAw",
        "receiver": "MTg1MDAwMDExMTE=",
        "message": "086802b5b3def1802882740cb91bac8929edd80901e5db4c95786389bfcf7ae4",
        "quota": 0,
        "timestamp": 1553153941,
        "extra": "0000000000000000000000000000000000000000000000000000000000000000",
        "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
        "work": "0000000001922652",
        "signature": "8c60aa46dfbe7ee0d027619d45f6b42a72cc63d2c256ae192fbe8b0efbca857f0f87517207f4b8e6eee5e39358dee4ca57d6339e1a19171d0c4db5e81f27a208",
        "tokenName": "QLC",
        "amount": "1000000",
        "hash": "82d629c89eb85767639f5ea0a69e366c1bbda47b0091afad052e14eabfe0d65d"
      }
    ],
    "send": [
      {
        "type": "Send",
        "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
        "address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
        "balance": "59999999988999990",
        "previous": "82d629c89eb85767639f5ea0a69e366c1bbda47b0091afad052e14eabfe0d65d",
        "link": "941693c7292c0ba082ae768948102f38240e1e7dd0e80065267d2ab5b705323d",
        "sender": "MTg1MDAwMDExMTE=",
        "message": "086802b5b3def1802882740cb91bac8929edd80901e5db4c95786389bfcf7ae4",
        "quota": 0,
        "timestamp": 1553154009,
        "extra": "0000000000000000000000000000000000000000000000000000000000000000",
        "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
        "work": "0000000001ebdf70",
        "signature": "1dab0864f48c71294982e85d308b5db5d6074a9b2ecf5fd907de2eee69ad9db71a3b3e5c4c625da8d44d34801e58c4202fcf48c4b836da6c5a0ce84bb2873702",
        "tokenName": "QLC",
        "amount": "10000010",
        "hash": "8542928a4b1703adef14a9b4a7e823b20a6f8337bae7277f45a022e24426b4a0"
      }
    ]
  }
}

```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "sms_phoneBlocks",
	"params": [
		"18500001111"
	]
}


```
:::




## sms_messageBlocks
根据短信hash返回区块列表，这些区块的message字段为短信hash

- **Parameters**: 
  - `string`:  短信哈希
  
- **Returns**: 
  - `[]block`: 区块列表

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "sms_messageBlocks",
	"params": [
		"086802b5b3def1802882740cb91bac8929edd80901e5db4c95786389bfcf7ae4"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "type": "Send",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "balance": "59999999999000000",
      "previous": "a217c8d4374377562e891d0f6b50fcdcd02c68ab7fe7d72efd14ea5c4136a214",
      "link": "941693c7292c0ba082ae768948102f38240e1e7dd0e80065267d2ab5b705323d",
      "sender": "MTU4MTExMTAwMDAw",
      "receiver": "MTg1MDAwMDExMTE=",
      "message": "086802b5b3def1802882740cb91bac8929edd80901e5db4c95786389bfcf7ae4",
      "quota": 0,
      "timestamp": 1553153941,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000001922652",
      "signature": "8c60aa46dfbe7ee0d027619d45f6b42a72cc63d2c256ae192fbe8b0efbca857f0f87517207f4b8e6eee5e39358dee4ca57d6339e1a19171d0c4db5e81f27a208",
      "tokenName": "QLC",
      "amount": "1000000",
      "hash": "82d629c89eb85767639f5ea0a69e366c1bbda47b0091afad052e14eabfe0d65d"
    },
    {
      "type": "Send",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "balance": "59999999988999990",
      "previous": "82d629c89eb85767639f5ea0a69e366c1bbda47b0091afad052e14eabfe0d65d",
      "link": "941693c7292c0ba082ae768948102f38240e1e7dd0e80065267d2ab5b705323d",
      "sender": "MTg1MDAwMDExMTE=",
      "message": "086802b5b3def1802882740cb91bac8929edd80901e5db4c95786389bfcf7ae4",
      "quota": 0,
      "timestamp": 1553154009,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000001ebdf70",
      "signature": "1dab0864f48c71294982e85d308b5db5d6074a9b2ecf5fd907de2eee69ad9db71a3b3e5c4c625da8d44d34801e58c4202fcf48c4b836da6c5a0ce84bb2873702",
      "tokenName": "QLC",
      "amount": "10000010",
      "hash": "8542928a4b1703adef14a9b4a7e823b20a6f8337bae7277f45a022e24426b4a0"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "sms_messageBlocks",
	"params": [
		"086802b5b3def1802882740cb91bac8929edd80901e5db4c95786389bfcf7ae4"
	]
}


```
:::





## sms_messageHash
返回短信消息哈希
- **Parameters**: 
  - `string`:  短信
  
- **Returns**: 
  - `string`:  短信哈希

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "sms_messageHash",
	"params": [
		"qlcqlc"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "bfa9a2661b022debbe0de95c89d08c6682928bb752eec0ed712b0aca2733aab7"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "sms_messageHash",
	"params": [
		"qlcqlc"
	]
}


```
:::






## sms_messageStore
存储短信消息并返回消息hash
- **Parameters**: 
  - `string`:  短信
  
- **Returns**: 
  - `bool`: 短信hash

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "sms_messageStore",
	"params": [
		"qlcqlc"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "bfa9a2661b022debbe0de95c89d08c6682928bb752eec0ed712b0aca2733aab7"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "sms_messageStore",
	"params": [
		"qlcqlc"
	]
}


```
:::



