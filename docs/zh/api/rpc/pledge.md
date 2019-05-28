# Pledge

**支持调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe |
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |



## pledge_getPledgeData

根据抵押参数返回抵押的合约数据

- **Parameters**: 
  - `pledgeParams`:  抵押参数
    - `beneficial`：受益人地址
    - `pledgeAddress`: 抵押地址
    - `amount`：抵押数量
    - `pType`：抵押类型
    - `nEP5TxId`: nep5的抵押交易id
  
- **Returns**: 
  - `string`: 抵押的合约数据



- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeData",
	"params": [
		{
			"beneficial": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"pledgeAddress":"qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"amount": "1100000000",
			"pType": "vote",
			"nEP5TxId":"30c292be09680ea79b6c0c3fb509591e190ed40f8c8932fac88b4a3ea648446b"
		}
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "uuDnSGwLLN1TPuOiFmjxmeER9shhQEDmDnCnOrbI2gNvKnrXbAss3VM+46IWaPGZ4RH2yGFAQOYOcKc6tsjaA28qetcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAzMGMyOTJiZTA5NjgwZWE3OWI2YzBjM2ZiNTA5NTkxZTE5MGVkNDBmOGM4OTMyZmFjODhiNGEzZWE2NDg0NDZi"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeData",
	"params": [
		{
			"beneficial": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"pledgeAddress":"qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"amount": "1100000000",
			"pType": "vote",
			"nEP5TxId":"30c292be09680ea79b6c0c3fb509591e190ed40f8c8932fac88b4a3ea648446b"
		}
	]
}


```

:::





## pledge_getPledgeBlock
根据抵押参数返回抵押的ContractSend区块

- **Parameters**: 
  - `pledgeParams`:  抵押参数
    - `beneficial`：受益人地址
    - `pledgeAddress`: 抵押地址
    - `amount`：抵押数量
    - `pType`：抵押类型
    - `nEP5TxId`: nep5的抵押交易id
  
- **Returns**: 
  - `block`: ContractSend区块



- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeBlock",
	"params": [
		{
			"beneficial": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"pledgeAddress":"qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"amount": "1100000000",
			"pType": "vote",
			"nEP5TxId":"30c292be09680ea79b6c0c3fb509591e190ed40f8c8932fac88b4a3ea648446b"
		}
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": [
    {
      "type": "ContractSend",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
      "balance": "19979771680000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "6a8460b892377e044178ef6f97e9b6c085016234f8e387424fc85ef412c65021",
      "link": "b7902600dfc79387b2601edc347b854d55d6b31142e324a4e54ff00a4c519c91",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "uuDnSGwLLN1TPuOiFmjxmeER9shhQEDmDnCnOrbI2gNvKnrXv4bIP7S/ufSbm4+lk8jPQSjJ4hcgxIdWW1L8ZkCp6PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA4NDYwMTRmN2Q2MzA5OTQ5YzZjZWEwN2M0ZGNmY2QzZmE1ZDUxYmI2ZmIxZjNhMDY3MmRkY2M3ZWQ5MjIyMmQy",
      "povHeight": 0,
      "timestamp": 1558676751,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000001148773",
      "signature": "e37826bcb6edea522ec3e9c351d02856f251c18675ad43213140e8608502ab819878cf9087a5e872f1256baed3c097771e53a7bce8d65348b498496ace0f2d03"
    }
  ]
}

```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeBlock",
	"params": [
		{
			"beneficial": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"pledgeAddress":"qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"amount": "1100000000",
			"pType": "vote",
			"nEP5TxId":"30c292be09680ea79b6c0c3fb509591e190ed40f8c8932fac88b4a3ea648446b"
		}
	]
}


```

:::


## pledge_getPledgeRewardBlock
根据抵押的ContractSend区块返回ContractReward区块

- **Parameters**: 
  - `block`:  ContractSend区块
  
- **Returns**: 
  - `block`: ContractReward区块



- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeRewardBlock",
	"params": [
		{
      "type": "ContractSend",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
      "balance": "19979771680000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "6a8460b892377e044178ef6f97e9b6c085016234f8e387424fc85ef412c65021",
      "link": "b7902600dfc79387b2601edc347b854d55d6b31142e324a4e54ff00a4c519c91",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "uuDnSGwLLN1TPuOiFmjxmeER9shhQEDmDnCnOrbI2gNvKnrXv4bIP7S/ufSbm4+lk8jPQSjJ4hcgxIdWW1L8ZkCp6PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA4NDYwMTRmN2Q2MzA5OTQ5YzZjZWEwN2M0ZGNmY2QzZmE1ZDUxYmI2ZmIxZjNhMDY3MmRkY2M3ZWQ5MjIyMmQy",
      "povHeight": 0,
      "timestamp": 1558676751,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000001148773",
      "signature": "e37826bcb6edea522ec3e9c351d02856f251c18675ad43213140e8608502ab819878cf9087a5e872f1256baed3c097771e53a7bce8d65348b498496ace0f2d03"
    }
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": [
    {
      "type": "ContractReward",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
      "balance": "19979771680000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "6a8460b892377e044178ef6f97e9b6c085016234f8e387424fc85ef412c65021",
      "link": "b7902600dfc79387b2601edc347b854d55d6b31142e324a4e54ff00a4c519c91",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "uuDnSGwLLN1TPuOiFmjxmeER9shhQEDmDnCnOrbI2gNvKnrXv4bIP7S/ufSbm4+lk8jPQSjJ4hcgxIdWW1L8ZkCp6PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA4NDYwMTRmN2Q2MzA5OTQ5YzZjZWEwN2M0ZGNmY2QzZmE1ZDUxYmI2ZmIxZjNhMDY3MmRkY2M3ZWQ5MjIyMmQy",
      "povHeight": 0,
      "timestamp": 1558676751,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000001148773",
      "signature": "e37826bcb6edea522ec3e9c351d02856f251c18675ad43213140e8608502ab819878cf9087a5e872f1256baed3c097771e53a7bce8d65348b498496ace0f2d03"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeRewardBlock",
	"params": [
		{
      "type": "ContractSend",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
      "balance": "19979771680000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "6a8460b892377e044178ef6f97e9b6c085016234f8e387424fc85ef412c65021",
      "link": "b7902600dfc79387b2601edc347b854d55d6b31142e324a4e54ff00a4c519c91",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "uuDnSGwLLN1TPuOiFmjxmeER9shhQEDmDnCnOrbI2gNvKnrXv4bIP7S/ufSbm4+lk8jPQSjJ4hcgxIdWW1L8ZkCp6PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA4NDYwMTRmN2Q2MzA5OTQ5YzZjZWEwN2M0ZGNmY2QzZmE1ZDUxYmI2ZmIxZjNhMDY3MmRkY2M3ZWQ5MjIyMmQy",
      "povHeight": 0,
      "timestamp": 1558676751,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000001148773",
      "signature": "e37826bcb6edea522ec3e9c351d02856f251c18675ad43213140e8608502ab819878cf9087a5e872f1256baed3c097771e53a7bce8d65348b498496ace0f2d03"
    }
	]
}


```

:::




## pledge_getWithdrawPledgeData
根据赎回参数返回合约数据

- **Parameters**: 
  - `withdrawPledgeParams`: 
    - `beneficial`：受益人
    - `amount`：抵押数量
    - `pType`：抵押类型
    - `nEP5TxId`: nep5抵押的交易id
  
- **Returns**: 
  - `string`: 赎回的合约数据



- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getWithdrawPledgeData",
	"params": [
		{
			"beneficial": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"amount": "1100000000",
			"pType": "vote",
			"nEP5TxId":"30c292be09680ea79b6c0c3fb509591e190ed40f8c8932fac88b4a3ea648446b"
		}
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "I9Wy12wLLN1TPuOiFmjxmeER9shhQEDmDnCnOrbI2gNvKnrXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGQqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAzMGMyOTJiZTA5NjgwZWE3OWI2YzBjM2ZiNTA5NTkxZTE5MGVkNDBmOGM4OTMyZmFjODhiNGEzZWE2NDg0NDZi"
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getWithdrawPledgeData",
	"params": [
		{
			"beneficial": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"amount": "1100000000",
			"pType": "vote",
			"nEP5TxId":"30c292be09680ea79b6c0c3fb509591e190ed40f8c8932fac88b4a3ea648446b"
		}
	]
}


```

:::






## pledge_getWithdrawPledgeBlock

根据参数返回赎回的ContractSend区块

- **Parameters**: 
  - `withdrawPledgeParams`: 
    - `beneficial`：受益人
    - `amount`：抵押数量
    - `pType`：抵押类型
    - `nEP5TxId`: nep5抵押的交易id
  
- **Returns**: 
  - `block`: ContractSend区块



- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getWithdrawPledgeBlock",
	"params": [
		{
			"beneficial": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"amount": "1100000000",
			"pType": "vote",
			"nEP5TxId":"30c292be09680ea79b6c0c3fb509591e190ed40f8c8932fac88b4a3ea648446b"
		}
	]
}



```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "type": "ContractSend",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
      "balance": "19979771680000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "6a8460b892377e044178ef6f97e9b6c085016234f8e387424fc85ef412c65021",
      "link": "b7902600dfc79387b2601edc347b854d55d6b31142e324a4e54ff00a4c519c91",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "uuDnSGwLLN1TPuOiFmjxmeER9shhQEDmDnCnOrbI2gNvKnrXv4bIP7S/ufSbm4+lk8jPQSjJ4hcgxIdWW1L8ZkCp6PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA4NDYwMTRmN2Q2MzA5OTQ5YzZjZWEwN2M0ZGNmY2QzZmE1ZDUxYmI2ZmIxZjNhMDY3MmRkY2M3ZWQ5MjIyMmQy",
      "povHeight": 0,
      "timestamp": 1558676751,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000001148773",
      "signature": "e37826bcb6edea522ec3e9c351d02856f251c18675ad43213140e8608502ab819878cf9087a5e872f1256baed3c097771e53a7bce8d65348b498496ace0f2d03"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getWithdrawPledgeBlock",
	"params": [
		{
			"beneficial": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
			"amount": "1100000000",
			"pType": "vote",
			"nEP5TxId":"30c292be09680ea79b6c0c3fb509591e190ed40f8c8932fac88b4a3ea648446b"
		}
	]
}



```

:::





## pledge_getWithdrawRewardBlock

根据赎回合约的ContractSend区块返回ContractReward区块

- **Parameters**: 
  - `block`:  ContractSend区块
  
- **Returns**: 
  - `block`: ContractReward区块



- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getWithdrawRewardBlock",
	"params": [
		{
      "type": "ContractSend",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "balance": "19979771680000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "6a8460b892377e044178ef6f97e9b6c085016234f8e387424fc85ef412c65021",
      "link": "b7902600dfc79387b2601edc347b854d55d6b31142e324a4e54ff00a4c519c91",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "uuDnSGwLLN1TPuOiFmjxmeER9shhQEDmDnCnOrbI2gNvKnrXv4bIP7S/ufSbm4+lk8jPQSjJ4hcgxIdWW1L8ZkCp6PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA4NDYwMTRmN2Q2MzA5OTQ5YzZjZWEwN2M0ZGNmY2QzZmE1ZDUxYmI2ZmIxZjNhMDY3MmRkY2M3ZWQ5MjIyMmQy",
      "povHeight": 0,
      "timestamp": 1558676751,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000001148773",
      "signature": "e37826bcb6edea522ec3e9c351d02856f251c18675ad43213140e8608502ab819878cf9087a5e872f1256baed3c097771e53a7bce8d65348b498496ace0f2d03",
    }
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 18,
  "result": [
    {
      "type": "ContractReward",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_1u1d7mgo8hq5nad8jwesw6azfk53a31ge5minwxdfk8t1fqknypqgk8mi3z7",
      "balance": "19979771680000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "6a8460b892377e044178ef6f97e9b6c085016234f8e387424fc85ef412c65021",
      "link": "b7902600dfc79387b2601edc347b854d55d6b31142e324a4e54ff00a4c519c91",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "uuDnSGwLLN1TPuOiFmjxmeER9shhQEDmDnCnOrbI2gNvKnrXv4bIP7S/ufSbm4+lk8jPQSjJ4hcgxIdWW1L8ZkCp6PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA4NDYwMTRmN2Q2MzA5OTQ5YzZjZWEwN2M0ZGNmY2QzZmE1ZDUxYmI2ZmIxZjNhMDY3MmRkY2M3ZWQ5MjIyMmQy",
      "povHeight": 0,
      "timestamp": 1558676751,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000001148773",
      "signature": "e37826bcb6edea522ec3e9c351d02856f251c18675ad43213140e8608502ab819878cf9087a5e872f1256baed3c097771e53a7bce8d65348b498496ace0f2d03"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getWithdrawRewardBlock",
	"params": [
		{
      "type": "ContractSend",
      "token": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
      "address": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "balance": "19979771680000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "6a8460b892377e044178ef6f97e9b6c085016234f8e387424fc85ef412c65021",
      "link": "b7902600dfc79387b2601edc347b854d55d6b31142e324a4e54ff00a4c519c91",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "uuDnSGwLLN1TPuOiFmjxmeER9shhQEDmDnCnOrbI2gNvKnrXv4bIP7S/ufSbm4+lk8jPQSjJ4hcgxIdWW1L8ZkCp6PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA4NDYwMTRmN2Q2MzA5OTQ5YzZjZWEwN2M0ZGNmY2QzZmE1ZDUxYmI2ZmIxZjNhMDY3MmRkY2M3ZWQ5MjIyMmQy",
      "povHeight": 0,
      "timestamp": 1558676751,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000001148773",
      "signature": "e37826bcb6edea522ec3e9c351d02856f251c18675ad43213140e8608502ab819878cf9087a5e872f1256baed3c097771e53a7bce8d65348b498496ace0f2d03",
    }
	]
}


```

:::








## pledge_GetPledgeInfosByPledgeAddress

根据抵押账户地址返回抵押信息

- **Parameters**: 
  - `string` : 抵押账户地址
  
- **Returns**: 
  - `PledgeInfo` 抵押信息
  - `TotalAmounts` 抵押总量


- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeInfosByPledgeAddress",
	"params": [
	"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "PledgeInfo": [
      {
        "PType": "Vote",
        "Amount": 10000000000000,
        "WithdrawTime": "2019-05-27T12:34:22Z",
        "Beneficial": "qlc_18mbwzt7kjks1ydzk53hw6xropyz3mb4dgwq75tyzy4pcuc4mso1635mfdfz",
        "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
        "NEP5TxId": "8ecc71a3eec8a38def07858f7c1734a51346a8375deaa1f8e36295a2d23dc00e"
      },
      {
        "PType": "Vote",
        "Amount": 1000000000000,
        "WithdrawTime": "2019-05-27T13:14:05Z",
        "Beneficial": "qlc_3agkmeufj9z7ntkm8nf7o8e9w3b3tuqyyud5uc5iywajrgxz9re4w7m3pgdx",
        "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
        "NEP5TxId": "008b7121fce9ff13817c09518841f07835730d05446b842211d086cf97f4284a"
      }
    ],
    "TotalAmounts": 20000000000000
  }
}

```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeInfosByPledgeAddress",
	"params": [
	"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"
	]
}


```
:::




## pledge_getPledgeBeneficialTotalAmount

根据受益人地址返回抵押总量

- **Parameters**: 
  - `string` : 受益人地址
  
- **Returns**: 
  - `int`:  抵押总量

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeBeneficialTotalAmount",
	"params": [
	"qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 1000100000000000
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeBeneficialTotalAmount",
	"params": [
	"qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p"
	]
}


```
:::



## pledge_getBeneficialPledgeInfosByAddress

根据受益人地址返回抵押详情

- **Parameters**: 
  - `string` : 受益人地址
  
- **Returns**: 
  - `PledgeInfo` 抵押详情
  - `TotalAmounts`  抵押总量

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getBeneficialPledgeInfosByAddress",
	"params": [
	"qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "PledgeInfo": [
      {
        "PType": "Vote",
        "Amount": 10000000000000,
        "WithdrawTime": "2019-05-27T11:05:27Z",
        "Beneficial": "qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
        "PledgeAddress": "qlc_1mnw9gbzdaxz7sz18pyjcffiqaocxnunfdtu1u3fc4wjkib97rp1wcdw6ato",
        "NEP5TxId": "7f3603fab53c3917e272090892937e15c954bc470ca4a5dcdfe5b58962f2b809"
      },
      {
        "PType": "Vote",
        "Amount": 1000000000,
        "WithdrawTime": "2019-05-27T13:07:30Z",
        "Beneficial": "qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
        "PledgeAddress": "qlc_1mnw9gbzdaxz7sz18pyjcffiqaocxnunfdtu1u3fc4wjkib97rp1wcdw6ato",
        "NEP5TxId": "15dbe9e00ed116d4870a9f8c0dd768ba84a2b658619ba9aaf180d6c8b63b6ab6"
      }
    ],
    "TotalAmounts": 10001000000000
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getBeneficialPledgeInfosByAddress",
	"params": [
	"qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p"
	]
}


```
:::





## pledge_getBeneficialPledgeInfos

根据受益人地址和类型返回抵押详情

- **Parameters**: 
  - `string` : 受益人地址
  - `string` : 抵押类型
  
- **Returns**: 
  - `PledgeInfo` 抵押详情
  - `TotalAmounts` 抵押总量

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getBeneficialPledgeInfos",
	"params": [
		"qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
		"vote"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "PledgeInfo": [
      {
        "PType": "Vote",
        "Amount": 1000000000,
        "WithdrawTime": "2019-05-27T13:07:30Z",
        "Beneficial": "qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
        "PledgeAddress": "qlc_1mnw9gbzdaxz7sz18pyjcffiqaocxnunfdtu1u3fc4wjkib97rp1wcdw6ato",
        "NEP5TxId": "15dbe9e00ed116d4870a9f8c0dd768ba84a2b658619ba9aaf180d6c8b63b6ab6"
      },
      {
        "PType": "Vote",
        "Amount": 10000000000000,
        "WithdrawTime": "2019-05-27T11:05:27Z",
        "Beneficial": "qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
        "PledgeAddress": "qlc_1mnw9gbzdaxz7sz18pyjcffiqaocxnunfdtu1u3fc4wjkib97rp1wcdw6ato",
        "NEP5TxId": "7f3603fab53c3917e272090892937e15c954bc470ca4a5dcdfe5b58962f2b809"
      }
    ],
    "TotalAmounts": 10001000000000
  }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getBeneficialPledgeInfos",
	"params": [
		"qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
		"vote"
	]
}


```
:::



## pledge_getPledgeBeneficialAmount
根据受益人地址和抵押类型返回抵押详情和抵押总量

- **Parameters**: 
  - `string` : 受益人地址
  - `string` : 抵押类型
  
- **Returns**: 
  - `int` 抵押总量

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeBeneficialAmount",
	"params": [
		"qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
		"vote"
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 10001000000000
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeBeneficialAmount",
	"params": [
		"qlc_3pj83yuemoegkn6ejskd8bustgunmfqpbhu3pnpa6jsdjf9isybzffwq7s4p",
		"vote"
	]
}


```
:::




## pledge_getPledgeInfoWithNEP5TxId

根据抵押参数（包括nep5交易id）查询抵押信息

- **Parameters**: 
  - `pledgeParams`:  
    - `beneficial`：受益人地址
    - `amount`：抵押数量
    - `pType`： 抵押类型
    - `nep5TxId`: nep5交易id
  
- **Returns**: 
  - `pledgeInfo`:  抵押信息

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeInfoWithNEP5TxId",
	"params": [
		{
			"beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
			"amount": "2000000000000000",
			"pType": "vote",
      "nep5TxId":"fgkhlfkv903ffe11a256fd8e7bbda9dff5021fbc261f2d93971028fcfhgk67"
		}
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 
    {
      "PType": "vote",
      "Amount": 2000000000000000,
      "WithdrawTime": "2019-04-28 19:02:34 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "fgkhlfkv903ffe11a256fd8e7bbda9dff5021fbc261f2d93971028fcfhgk67"
    }
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeInfo",
	"params": [
		{
			"beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
			"amount": "2000000000000000",
			"pType": "vote",
      "nep5TxId":"d1d1779b8126882297b4e3a83b29353192b263560678c19bd5adae82bd271d20"
		}
	]
}


```

:::





## pledge_getPledgeInfo
根据抵押参数返回抵押合约的数据 ，如果有多笔相同的抵押，则按时间先手顺序返回
- **Parameters**: 
  - `pledgeParams`:  抵押参数
    - beneficial：受益人账户
    - amount：抵押金额
    - pType：抵押类型
  
- **Returns**: 
  - `pledgeInfo`:  抵押数据

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeInfo",
	"params": [
		{
			"beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
			"amount": "2000000000000000",
			"pType": "vote"
		}
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "PType": "vote",
      "Amount": 2000000000000000,
      "WithdrawTime": "2019-04-28 19:02:34 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "fgkhlfkv903ffe11a256fd8e7bbda9dff5021fbc261f2d93971028fcfhgk67"
    },
    {
      "PType": "vote",
      "Amount": 2000000000000000,
      "WithdrawTime": "2019-04-28 19:02:37 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "e11e0d9a96f5fe11a256fd8e7bbda9dff5021fbc261f2d93971028fcaad5642"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getPledgeInfo",
	"params": [
		{
			"beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
			"amount": "2000000000000000",
			"pType": "vote"
		}
	]
}


```

:::




## pledge_getAllPledgeInfo
返回所有的抵押合约数据
- **Parameters**: 
    - `pledgeParams`:  无
- **Returns**: 
  - `[]pledgeInfo`: 所有的抵押合约数据

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getAllPledgeInfo",
	"params": [
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "PType": "network",
      "Amount": 40000000000000,
      "WithdrawTime": "2019-04-28 19:04:06 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "hbvf56djkob7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aecesdcbh"
    },
    {
      "PType": "vote",
      "Amount": 2000000000000000,
      "WithdrawTime": "2019-04-28 19:04:11 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "thjri73363b7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aecesdcbh"
    },
    {
      "PType": "vote",
      "Amount": 1000000000000000,
      "WithdrawTime": "2019-04-28 19:04:47 +0800 CST",
      "Beneficial": "qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho",
      "PledgeAddress": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "NEP5TxId": "afgee73363b7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aece11527"
    }
  ]
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getAllPledgeInfo",
	"params": [
	]
}


```

:::



## pledge_getTotalPledgeAmount
返回所有的抵押合约数据
- **Parameters**: 
    - `pledgeParams`:  无
- **Returns**: 
  - `uint64`: 链上抵押总量

- **Example**:

::: demo
```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getTotalPledgeAmount",
	"params": [
	]
}


```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 14000000000
}


```

```json test
{
	"jsonrpc": "2.0",
	"id": 1,
	"method": "pledge_getTotalPledgeAmount",
	"params": [
	]
}


```

:::




