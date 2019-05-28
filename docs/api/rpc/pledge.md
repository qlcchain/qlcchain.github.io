# Pledge

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe |
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |


## pledge_getPledgeData
Return pledge data by pledge parameters

- **Parameters**: 
  - `pledgeParams`:  pledge parameters
    - `beneficial`：beneficial address
    - `pledgeAddress`: pledge address
    - `amount`：amount of pledge
    - `pType`：type of pledge
    - `nEP5TxId`: lock transaction id of nep5
  
- **Returns**: 
  - `string`: data for pledge, encode by base64



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
Return pledge block by pledge parameters

- **Parameters**: 
  - `pledgeParams`:  pledge parameters
    - `beneficial`：beneficial address
    - `pledgeAddress`: pledge address
    - `amount`：amount of pledge
    - `pType`：type of pledge
    - `nEP5TxId`: lock transaction id of nep5
  
- **Returns**: 
  - `block`: contractsend block



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
Return pledge ContractReward block by ContractSendblock

- **Parameters**: 
  - `block`:  ContractSend block
  
- **Returns**: 
  - `block`: ContractReward block



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
Return withdraw data by pledge parameters

- **Parameters**: 
  - `withdrawPledgeParams`: 
    - `beneficial`：beneficial address
    - `amount`：amount of pledge
    - `pType`：type of pledge
    - `nEP5TxId`: lock transaction id of nep5
  
- **Returns**: 
  - `string`: withdraw data ,encode by base64



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
Return withdraw ContractSend block by withdraw params

- **Parameters**: 
  - `withdrawPledgeParams`: 
    - `beneficial`：beneficial address
    - `amount`：amount of pledge
    - `pType`：type of pledge
    - `nEP5TxId`: lock transaction id of nep5
   
- **Returns**: 
  - `block`: ContractSend block



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
Return withdraw ContractReward block by withdraw ContractSend block

- **Parameters**: 
  - `block`:  ContractSend block
  
- **Returns**: 
  - `block`: ContractReward block



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

Return pledge infos by pledge address

- **Parameters**: 
  - `string` : pledge address
  
- **Returns**: 
  - `PledgeInfo` pledges info
  - `TotalAmounts`  total pledge amount


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
Return total reward amount  of a beneficial address

- **Parameters**: 
  - `string` : beneficial address
  
- **Returns**: 
  - `int`:  total reward amount

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
Return pledge infos of a beneficial address

- **Parameters**: 
  - `string` : beneficial address
  
- **Returns**: 
  - `PledgeInfo` pledges info
  - `TotalAmounts`  total pledge amount

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
Return pledge infos by benefitical address and pledge type

- **Parameters**: 
  - `string` : benefitical address
  - `string` : pledge type
  
- **Returns**: 
  - `PledgeInfo` pledges info
  - `TotalAmounts`  total pledge amount

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
Return total pledge amount by beneficial address and pledge type

- **Parameters**: 
  - `string` : benefitical address
  - `string` : pledge type
  
- **Returns**: 
  - `int`  total pledge amount

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
Return pledge data by pledge parameters
- **Parameters**: 
  - `pledgeParams`:  pledge parameters
    - `beneficial`：beneficial account
    - `amount`：amount of pledge
    - `pType`：type of pledge
    - `nep5TxId`: nep5 transaction id
  
- **Returns**: 
  - `pledgeInfo`:  data for pledge

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
Return pledge data by pledge parameters ，if there are multiple identical pledge in the query result, it will be returned in time order
- **Parameters**: 
  - `pledgeParams`:  pledge parameters
    - beneficial：beneficial account
    - amount：amount of pledge
    - pType：type of pledge
  
- **Returns**: 
  - `pledgeInfo`:  data for pledge

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
Return all pledge info
- **Parameters**: 
    - `pledgeParams`:  `null`
- **Returns**: 
  - `[]pledgeInfo`: all pledge data

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
returns total pledge amount on chain
- **Parameters**: 
  - `pledgeParams`:  `null`
- **Returns**: 
  - `uint64`:total pledge amount on chain 

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




