# Settlement

:::warning
Available from go-qlc v1.4 and above
:::

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |


## settlement_getSettlementRewardsBlock
Generate settlement contract `ContractRewards` block by `ContractSend` block hash. 

- **Parameters**: 
    - `send`: `ContractSend` block hash
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block before process it

- **Example**:

::: demo

```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "settlement_getSettlementRewardsBlock",
    "params": ["9a8a816d8ea407030c95295ef05c47c125961804fc748a6060c03327a848dffe"]
}

```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
        "type": "ContractReward",
        "token": "ea842234e4dc5b17c33b35f99b5b86111a3af0bd8e4a8822602b866711de6d81",
        "address": "qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47",
        "balance": "40000000000",
        "vote": "0",
        "network": "0",
        "storage": "0",
        "oracle": "0",
        "previous": "9a8a816d8ea407030c95295ef05c47c125961804fc748a6060c03327a848dffe",
        "link": "988dc95e2d19c38eef75b7dd4769fe8a7135559d6055aaa635d665756e86eb31",
        "message": "0000000000000000000000000000000000000000000000000000000000000000",
        "povHeight": 0,
        "timestamp": 1569377583,
        "extra": "0000000000000000000000000000000000000000000000000000000000000000",
        "representative": "qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47",
        "work": "0000000000000000",
        "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    }
}
```

```json test
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "settlement_getSettlementRewardsBlock",
    "params": ["9a8a816d8ea407030c95295ef05c47c125961804fc748a6060c03327a848dffe"]
}

```
:::

## settlement_getCreateContractBlock
Generate create settlement contract `ContractSend` block by params

- **Parameters**: 
    - `partyA`: PartyA account info (qlc address and name)
    - `partyB`: PartyB account info (qlc address and name)
    - `services`: settlement service
    - `startDate`: settlement contract start date
    - `endDate`: settlement contract end date
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block with PartyA's qlc account before process it

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getCreateContractBlock",
  "params": [
    {
      "partyA": {
        "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp",
        "name": "PCCWG"
      },
      "partyB": {
        "address": "qlc_1sjhgc7ie38ptmabwudzdip8imrs1muzp7no5w8u76ne9j5cbefdc4rte35w",
        "name": "HKTCSL"
      },
      "services": [
        {
          "serviceId": "8fa1cc17e8f0e28449a7a87c4fef760608d3ccce183e6c8ab3a2c337ef319f61",
          "mcc": 1,
          "mnc": 2,
          "totalAmount": 10,
          "UnitPrice": 0.0426,
          "currency": "USD"
        },
        {
          "serviceId": "0baea7b9bb2eab64c59bbe51c4334644eb751c9381aa35f7d6844ca5d9eb77de",
          "mcc": 22,
          "mnc": 1,
          "totalAmount": 30,
          "UnitPrice": 0.023,
          "currency": "USD"
        }
      ],
      "startDate": 1581997072,
      "endDate": 1613965072
    }
  ]
}

```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "type": "ContractSend",
    "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
    "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp",
    "balance": "99999888400000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "274617027140a045c74d9c4152afce573e67c7d6a547f14c4b71b7c3c2e27275",
    "link": "0000000000000000000000000000000000000000000000000000000000000019",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "data": "01fFX4eicGGCoWHHIGOiVAXncth4kC8aX9ZdMm09ca9ogjTYL/g6E7Xaq02K2KFupVBDQ1dHonBigqFhxyBjZi9yiwYE1tTQnm1/XCxoTxkE9/sWlR8NspKMPEaksauhbqZIS1RDU0yjcHJlxyBlJ0YXAnFAoEXHTZxBUq/OVz5nx9alR/FMS3G3w8LicnWhc5KGomlk2UA4ZmExY2MxN2U4ZjBlMjg0NDlhN2E4N2M0ZmVmNzYwNjA4ZDNjY2NlMTgzZTZjOGFiM2EyYzMzN2VmMzE5ZjYxo21jYwGjbW5jAqF0CqF1yz+lz6rNnoPkoWOjVVNEhqJpZNlAMGJhZWE3YjliYjJlYWI2NGM1OWJiZTUxYzQzMzQ2NDRlYjc1MWM5MzgxYWEzNWY3ZDY4NDRjYTVkOWViNzdkZaNtY2MWo21uYwGhdB6hdcs/l41P3ztkWqFjo1VTRKJ0MdJeR2eQonQz0l5LXBCidDTSYDMnEA==",
    "povHeight": 0,
    "timestamp": 1582169872,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000000000",
    "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  }
}
```

```json test
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getCreateContractBlock",
  "params": [
    {
      "partyA": {
        "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp",
        "name": "PCCWG"
      },
      "partyB": {
        "address": "qlc_1sjhgc7ie38ptmabwudzdip8imrs1muzp7no5w8u76ne9j5cbefdc4rte35w",
        "name": "HKTCSL"
      },
      "services": [
        {
          "serviceId": "8fa1cc17e8f0e28449a7a87c4fef760608d3ccce183e6c8ab3a2c337ef319f61",
          "mcc": 1,
          "mnc": 2,
          "totalAmount": 10,
          "UnitPrice": 0.0426,
          "currency": "USD"
        },
        {
          "serviceId": "0baea7b9bb2eab64c59bbe51c4334644eb751c9381aa35f7d6844ca5d9eb77de",
          "mcc": 22,
          "mnc": 1,
          "totalAmount": 30,
          "UnitPrice": 0.023,
          "currency": "USD"
        }
      ],
      "startDate": 1581997072,
      "endDate": 1613965072
    }
  ]
}
```
:::

## settlement_getSignContractBlock
Generate sign settlement contract `ContractSend` block by params, 

- **Parameters**: 
    - `contractAddress`: to be signed settlement contract
    - `address`: PartyB's QLC address
- **Returns**: 
    - `info`: destroyed token details

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getSignContractBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "address": "qlc_1sjhgc7ie38ptmabwudzdip8imrs1muzp7no5w8u76ne9j5cbefdc4rte35w"
    }
  ]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getSignContractBlock",
  "result": [
    {
      "type": "ContractSend",
      "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
      "address": "qlc_1sjhgc7ie38ptmabwudzdip8imrs1muzp7no5w8u76ne9j5cbefdc4rte35w",
      "balance": "100000000000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "0eeb42c92a30133a643fc3578dbecebc0a1182c05e6516ae526b4cd8502c47f0",
      "link": "0000000000000000000000000000000000000000000000000000000000000019",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "jkYR8YKhYccgY8/wcaQGTXAvHw77YyOVjfGB1mlRNchzRL+7sS0Fw4AtomNk0l5N/xE=",
      "povHeight": 0,
      "timestamp": 1582169873,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000000000000",
      "signature": "c32bb940769fc4f7f681ffb5f50f79590329ccde90ac4f3011659e12a99625898ef4c6da93e6d15ad5d21a30771051fd85dd4e9cbc8700fcde638daa69942f0f"
    }
  ]
}

```

```json test
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getSignContractBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "address": "qlc_1sjhgc7ie38ptmabwudzdip8imrs1muzp7no5w8u76ne9j5cbefdc4rte35w"
    }
  ]
}
```
:::




## settlement_getTerminateContractBlock

Generate terminate settlement contract call `ContractSend` block

- **Parameters**: 
    - `contractAddress`: settlement contract address 
    - `address`: QLC address
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block before process it

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getTerminateContractBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "address": "qlc_1sjhgc7ie38ptmabwudzdip8imrs1muzp7no5w8u76ne9j5cbefdc4rte35w"
    }
  ]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getTerminateContractBlock",
  "result": [
    {
      "type": "ContractSend",
      "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
      "address": "qlc_1sjhgc7ie38ptmabwudzdip8imrs1muzp7no5w8u76ne9j5cbefdc4rte35w",
      "balance": "100000000000000",
      "vote": "0",
      "network": "0",
      "storage": "0",
      "oracle": "0",
      "previous": "0eeb42c92a30133a643fc3578dbecebc0a1182c05e6516ae526b4cd8502c47f0",
      "link": "0000000000000000000000000000000000000000000000000000000000000019",
      "message": "0000000000000000000000000000000000000000000000000000000000000000",
      "data": "jkYR8YKhYccgY8/wcaQGTXAvHw77YyOVjfGB1mlRNchzRL+7sS0Fw4AtomNk0l5N/xE=",
      "povHeight": 0,
      "timestamp": 1582169873,
      "extra": "0000000000000000000000000000000000000000000000000000000000000000",
      "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
      "work": "0000000000000000",
      "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    }
  ]
}

```

```json test
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getTerminateContractBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "address": "qlc_1sjhgc7ie38ptmabwudzdip8imrs1muzp7no5w8u76ne9j5cbefdc4rte35w"
    }
  ]
}
```
:::


## settlement_getAddPreStopBlock

Generate add previous stop `ContractSend` block for Party B

- **Parameters**: 
    - `contractAddress`: settlement contract address
    - `stopName`: stop name to be added to settlement contract
    - `address`: PartyB's QLC address in `contractAddress`
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block before process it

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getAddPreStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "destroy_getDestroyInfoDetail",
  "result": {
    "type": "ContractSend",
    "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
    "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp",
    "balance": "99999888400000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "f80bfa9e5cd0283d19889415cc0b27b8eb0771cc8ec0e4295f07df8269a6c59c",
    "link": "0000000000000000000000000000000000000000000000000000000000000019",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "data": "4DyiSoKiY2HEIM/wcaQGTXAvHw77YyOVjfGB1mlRNchzRL+7sS0Fw4AtoW60Q1NMIEhvbmcgS29uZyBAIDMzOTc=",
    "povHeight": 0,
    "timestamp": 1582169874,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000000000",
    "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  }
}
```

```json test
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getAddPreStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```
:::


## settlement_getRemovePreStopBlock

Generate remove previous stop `ContractSend` block for Party B 

- **Parameters**: 
    - `contractAddress`: settlement contract address
    - `stopName`: stop name to be added to settlement contract
    - `address`: PartyB's QLC address in `contractAddress`
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block before process it

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getRemovePreStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "destroy_getDestroyInfoDetail",
  "result": {
    "type": "ContractSend",
    "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
    "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp",
    "balance": "99999888400000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "f80bfa9e5cd0283d19889415cc0b27b8eb0771cc8ec0e4295f07df8269a6c59c",
    "link": "0000000000000000000000000000000000000000000000000000000000000019",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "data": "4DyiSoKiY2HEIM/wcaQGTXAvHw77YyOVjfGB1mlRNchzRL+7sS0Fw4AtoW60Q1NMIEhvbmcgS29uZyBAIDMzOTc=",
    "povHeight": 0,
    "timestamp": 1582169874,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000000000",
    "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  }
}
```

```json test
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getRemovePreStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```
:::

## settlement_getUpdatePreStopBlock

Generate update previous stop `ContractSend` block for Party B

- **Parameters**: 
    - `contractAddress`: settlement contract address
    - `stopName`: stop name to be added to settlement contract
    - `address`: PartyB's QLC address in `contractAddress`
    - `newName`: new stop name
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block before process it

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getUpdatePreStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "newName": "CSL Hong Kong",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "destroy_getDestroyInfoDetail",
  "result": {
    "type": "ContractSend",
    "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
    "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp",
    "balance": "99999888400000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "f80bfa9e5cd0283d19889415cc0b27b8eb0771cc8ec0e4295f07df8269a6c59c",
    "link": "0000000000000000000000000000000000000000000000000000000000000019",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "data": "4DyiSoKiY2HEIM/wcaQGTXAvHw77YyOVjfGB1mlRNchzRL+7sS0Fw4AtoW60Q1NMIEhvbmcgS29uZyBAIDMzOTc=",
    "povHeight": 0,
    "timestamp": 1582169874,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000000000",
    "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  }
}
```

```json test
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getUpdatePreStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "newName": "CSL Hong Kong",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}

```
:::

## settlement_getAddNextStopBlock

Generate update next stop `ContractSend` block for Party A

- **Parameters**: 
    - `contractAddress`: settlement contract address
    - `stopName`: stop name to be added to settlement contract
    - `address`: PartyA's QLC address in `contractAddress`
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block before process it

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getAddNextStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "destroy_getDestroyInfoDetail",
  "result": {
    "type": "ContractSend",
    "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
    "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp",
    "balance": "99999888400000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "f80bfa9e5cd0283d19889415cc0b27b8eb0771cc8ec0e4295f07df8269a6c59c",
    "link": "0000000000000000000000000000000000000000000000000000000000000019",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "data": "4DyiSoKiY2HEIM/wcaQGTXAvHw77YyOVjfGB1mlRNchzRL+7sS0Fw4AtoW60Q1NMIEhvbmcgS29uZyBAIDMzOTc=",
    "povHeight": 0,
    "timestamp": 1582169874,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000000000",
    "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  }
}
```

```json test
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getAddNextStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```
:::

## settlement_getRemoveNextStopBlock

Generate remove next stop `ContractSend` block for Party A

- **Parameters**: 
    - `contractAddress`: settlement contract address
    - `stopName`: stop name to be added to settlement contract
    - `address`: PartyA's QLC address in `contractAddress`
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block before process it

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getRemoveNextStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "destroy_getDestroyInfoDetail",
  "result": {
    "type": "ContractSend",
    "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
    "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp",
    "balance": "99999888400000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "f80bfa9e5cd0283d19889415cc0b27b8eb0771cc8ec0e4295f07df8269a6c59c",
    "link": "0000000000000000000000000000000000000000000000000000000000000019",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "data": "4DyiSoKiY2HEIM/wcaQGTXAvHw77YyOVjfGB1mlRNchzRL+7sS0Fw4AtoW60Q1NMIEhvbmcgS29uZyBAIDMzOTc=",
    "povHeight": 0,
    "timestamp": 1582169874,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000000000",
    "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  }
}
```

```json test
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getRemoveNextStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```
:::


## settlement_getUpdateNextStopBlock

Generate update next stop `ContractSend` block for Party A

- **Parameters**: 
    - `contractAddress`: settlement contract address
    - `stopName`: stop name to be added to settlement contract
    - `address`: PartyA's QLC address in `contractAddress`
    - `newName`: new stop name 
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block before process it

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getUpdateNextStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "newName": "CSL Hong Kong",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "destroy_getDestroyInfoDetail",
  "result": {
    "type": "ContractSend",
    "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
    "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp",
    "balance": "99999888400000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "f80bfa9e5cd0283d19889415cc0b27b8eb0771cc8ec0e4295f07df8269a6c59c",
    "link": "0000000000000000000000000000000000000000000000000000000000000019",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "data": "4DyiSoKiY2HEIM/wcaQGTXAvHw77YyOVjfGB1mlRNchzRL+7sS0Fw4AtoW60Q1NMIEhvbmcgS29uZyBAIDMzOTc=",
    "povHeight": 0,
    "timestamp": 1582169874,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000000000",
    "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  }
}
```

```json test
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getUpdateNextStopBlock",
  "params": [
    {
      "contractAddress": "qlc_3mzig8k1emdi7whixyu56gcruwe3tsno4fgagf4dzgxj7n4w913fhh8qx8hc",
      "stopName": "CSL Hong Kong @ 3397",
      "newName": "CSL Hong Kong",
      "address": "qlc_3akn1qmq7p5rk1qjnqypdns8thdjoxna6f8r7zw5n6xouconu4prorwa34qp"
    }
  ]
}
```
:::

## settlement_getProcessCDRBlock

Generate process CDR `ContractSend` block 

- **Parameters**: 
    - `params`: CDR params
        - `index`: time sequence
        - `smsDt`: cdr date time, UTC Unix
        - `sender`: SMS sender
        - `destination`: SMS destination, eg. `85263***704`
        - `sendingStatus`: SMS sending status
        - `dlrStatus`: SMS delivery report status
        - `preStop`: partyB's previous stop as settlement contract filled
        - `nextStop`: partyA's next stop as settlement contract filled
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block before process it

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getProcessCDRBlock",
  "params": [
    {
      "index": 39457828,
      "smsDt": 1578313122,
      "sender": "WeChat",
      "destination": "85263***704",
      "sendingStatus": 0,
      "dlrStatus": 0,
      "preStop": "",
      "nextStop": "CSL Hong Kong @ 3397"
    }
  ]
}

```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getProcessCDRBlock",
  "result": {
    "type": "ContractSend",
    "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
    "address": "qlc_1thhqf8beyfipsn6i1uz5agzd4d1iyfmfnmaye7uxj7xqjiqeiba7zkotacb",
    "balance": "99999888400000",
    "vote": "0",
    "network": "0",
    "storage": "0",
    "oracle": "0",
    "previous": "045993320b744126b436d0b367ea4a4e807f89ca205547c50d4b763e725fbe4b",
    "link": "0000000000000000000000000000000000000000000000000000000000000019",
    "message": "0000000000000000000000000000000000000000000000000000000000000000",
    "data": "WPwlP4mhYcQgdbJE1DH5QHcErZ1FqrmYXcBv9JPeZ1UR3hzKE61sAbqhac4CWhQkomR00l4TJaKidHimV2VDaGF0oWSrODUyNjMqKio3MDShcwCiZHMAonBzoKJuc7RDU0wgSG9uZyBLb25nIEAgMzM5Nw==",
    "povHeight": 0,
    "timestamp": 1582169898,
    "extra": "0000000000000000000000000000000000000000000000000000000000000000",
    "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
    "work": "0000000000000000",
    "signature": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  }
}
```

```json test
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "settlement_getProcessCDRBlock",
    "params": ["qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47"]
}

```
:::

## settlement_getAllContracts

List all settlement contract

- **Parameters**: 
    - `count`:  max settlement contract records size
    - `offset`: offset of all settlement contract records
- **Returns**: 
    - `result`: all settlement contract, ordered by `startDate`

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getAllContracts",
  "params":[10,0]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        {
            "partyA": {
                "address": "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
                "name": "PCCWG"
            },
            "partyB": {
                "address": "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj",
                "name": "HKTCSL"
            },
            "previous": "8424d1750aaec508bd566dc7b0c72c29cfc4652c655459aedaacfa46bdcf4b21",
            "services": [
                {
                    "serviceId": "cd3b525d208b1de1873dcda2db5ae4e26cbea79a3516582dfaffd4d3ba6377e0",
                    "mcc": 1,
                    "mnc": 91,
                    "totalAmount": 10,
                    "unitPrice": 0.0426,
                    "currency": "USD"
                },
                {
                    "serviceId": "a4ae980b031d5971cde3418beb4427723e726c04b01df8abb8171318dc6ba9fc",
                    "mcc": 22,
                    "mnc": 1,
                    "totalAmount": 30,
                    "unitPrice": 0.023,
                    "currency": "USD"
                }
            ],
            "signDate": 1581129222,
            "startDate": 1581388422,
            "endDate": 1613356422,
            "preStops": [
                "A2P_PCCWG"
            ],
            "nextStops": [
                "CSL Hong Kong @ 3397"
            ],
            "confirmDate": 1582172522,
            "status": "Activated",
            "address": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo"
        }
    ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getAllContracts",
  "params":[10,0]
}
```
:::

## settlement_getContractsByAddress

Query settlement contract by user's qlc address

- **Parameters**: 
    - `address`: user's qlc address
    - `count`:  max settlement contract records size
    - `offset`: offset of all settlement contract records
- **Returns**: 
    - `result`: all settlement contract, ordered by `startDate`

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getContractsByAddress",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",10,0]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        {
            "partyA": {
                "address": "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
                "name": "PCCWG"
            },
            "partyB": {
                "address": "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj",
                "name": "HKTCSL"
            },
            "previous": "f7aabc57205170c1dbae3358d97296a6166b3ddd241560f596500ee75dcf388e",
            "services": [
                {
                    "serviceId": "63a8359bf038520087b645acff9564152a64facb6d0499f09d579e59c16a68ca",
                    "mcc": 1,
                    "mnc": 37,
                    "totalAmount": 10,
                    "unitPrice": 0.0426,
                    "currency": "USD"
                },
                {
                    "serviceId": "996231cdd00e347bf6a8642b529eecdeff6e2a33895cf7774d3fec260f12a1ec",
                    "mcc": 22,
                    "mnc": 1,
                    "totalAmount": 30,
                    "unitPrice": 0.023,
                    "currency": "USD"
                }
            ],
            "signDate": 1581129222,
            "startDate": 1581388422,
            "endData": 1613356422,
            "preStops": [
                "PCCWG"
            ],
            "nextStops": [
                "HKTCSL"
            ],
            "confirmDate": 1581565762,
            "status": "Actived",
            "address": "qlc_19d8xgcnt4eoaeipz7suzpcnpst91uq79sc87ef6p7iumahq9eis7k8y3dcd"
        },
        {
            "partyA": {
                "address": "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
                "name": "PCCWG"
            },
            "partyB": {
                "address": "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj",
                "name": "HKTCSL"
            },
            "previous": "d6800c6e1b9a29e5d53db18b46b3cd12232b7e3379e8606b1ee3d1106cb7efc7",
            "services": [
                {
                    "serviceId": "552720f3da0a47fba61d602c2bcdfe31011eb4354a86ce10df98ea51584bd707",
                    "mcc": 1,
                    "mnc": 59,
                    "totalAmount": 10,
                    "unitPrice": 0.0426,
                    "currency": "USD"
                },
                {
                    "serviceId": "5bae657b5226847ea495a8ab3e138395b1b8e05e3e80866ec09bba3b2555aed5",
                    "mcc": 22,
                    "mnc": 1,
                    "totalAmount": 30,
                    "unitPrice": 0.023,
                    "currency": "USD"
                }
            ],
            "signDate": 1581129222,
            "startDate": 1581388422,
            "endData": 1613356422,
            "preStops": null,
            "nextStops": null,
            "confirmDate": 0,
            "status": "ActiveStage1",
            "address": "qlc_1iq3q5hqg868kzto5kqyauaungf4hrpnt8aa74hkk7r7u411k7fr6xc7zyxm"
        }
    ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getContractsByAddress",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",10,0]
}
```
:::


## settlement_getContractsAsPartyA

Query all settlement contracts as Party A info by address

- **Parameters**: 
    - `address`: user's qlc address
    - `count`:  max settlement contract records size
    - `offset`: offset of all settlement contract records
- **Returns**: 
    - `result`: all settlement contract, ordered by `startDate`

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getContractsAsPartyA",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",10,0]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        {
            "partyA": {
                "address": "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
                "name": "PCCWG"
            },
            "partyB": {
                "address": "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj",
                "name": "HKTCSL"
            },
            "previous": "f7aabc57205170c1dbae3358d97296a6166b3ddd241560f596500ee75dcf388e",
            "services": [
                {
                    "serviceId": "63a8359bf038520087b645acff9564152a64facb6d0499f09d579e59c16a68ca",
                    "mcc": 1,
                    "mnc": 37,
                    "totalAmount": 10,
                    "unitPrice": 0.0426,
                    "currency": "USD"
                },
                {
                    "serviceId": "996231cdd00e347bf6a8642b529eecdeff6e2a33895cf7774d3fec260f12a1ec",
                    "mcc": 22,
                    "mnc": 1,
                    "totalAmount": 30,
                    "unitPrice": 0.023,
                    "currency": "USD"
                }
            ],
            "signDate": 1581129222,
            "startDate": 1581388422,
            "endData": 1613356422,
            "preStops": [
                "PCCWG"
            ],
            "nextStops": [
                "HKTCSL"
            ],
            "confirmDate": 1581565762,
            "status": "Actived",
            "address": "qlc_19d8xgcnt4eoaeipz7suzpcnpst91uq79sc87ef6p7iumahq9eis7k8y3dcd"
        },
        {
            "partyA": {
                "address": "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
                "name": "PCCWG"
            },
            "partyB": {
                "address": "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj",
                "name": "HKTCSL"
            },
            "previous": "d6800c6e1b9a29e5d53db18b46b3cd12232b7e3379e8606b1ee3d1106cb7efc7",
            "services": [
                {
                    "serviceId": "552720f3da0a47fba61d602c2bcdfe31011eb4354a86ce10df98ea51584bd707",
                    "mcc": 1,
                    "mnc": 59,
                    "totalAmount": 10,
                    "unitPrice": 0.0426,
                    "currency": "USD"
                },
                {
                    "serviceId": "5bae657b5226847ea495a8ab3e138395b1b8e05e3e80866ec09bba3b2555aed5",
                    "mcc": 22,
                    "mnc": 1,
                    "totalAmount": 30,
                    "unitPrice": 0.023,
                    "currency": "USD"
                }
            ],
            "signDate": 1581129222,
            "startDate": 1581388422,
            "endData": 1613356422,
            "preStops": null,
            "nextStops": null,
            "confirmDate": 0,
            "status": "ActiveStage1",
            "address": "qlc_1iq3q5hqg868kzto5kqyauaungf4hrpnt8aa74hkk7r7u411k7fr6xc7zyxm"
        }
    ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getContractsAsPartyA",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",10,0]
}
```
:::


## settlement_getContractsAsPartyB

Query all settlement contracts as Party B info by address

- **Parameters**: 
    - `address`: user's qlc address
    - `count`:  max settlement contract records size
    - `offset`: offset of all settlement contract records
- **Returns**: 
    - `result`: all settlement contract, ordered by `startDate`

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getContractsAsPartyB",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",10,0]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        {
            "partyA": {
                "address": "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
                "name": "PCCWG"
            },
            "partyB": {
                "address": "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj",
                "name": "HKTCSL"
            },
            "previous": "f7aabc57205170c1dbae3358d97296a6166b3ddd241560f596500ee75dcf388e",
            "services": [
                {
                    "serviceId": "63a8359bf038520087b645acff9564152a64facb6d0499f09d579e59c16a68ca",
                    "mcc": 1,
                    "mnc": 37,
                    "totalAmount": 10,
                    "unitPrice": 0.0426,
                    "currency": "USD"
                },
                {
                    "serviceId": "996231cdd00e347bf6a8642b529eecdeff6e2a33895cf7774d3fec260f12a1ec",
                    "mcc": 22,
                    "mnc": 1,
                    "totalAmount": 30,
                    "unitPrice": 0.023,
                    "currency": "USD"
                }
            ],
            "signDate": 1581129222,
            "startDate": 1581388422,
            "endData": 1613356422,
            "preStops": [
                "PCCWG"
            ],
            "nextStops": [
                "HKTCSL"
            ],
            "confirmDate": 1581565762,
            "status": "Actived",
            "address": "qlc_19d8xgcnt4eoaeipz7suzpcnpst91uq79sc87ef6p7iumahq9eis7k8y3dcd"
        },
        {
            "partyA": {
                "address": "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
                "name": "PCCWG"
            },
            "partyB": {
                "address": "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj",
                "name": "HKTCSL"
            },
            "previous": "d6800c6e1b9a29e5d53db18b46b3cd12232b7e3379e8606b1ee3d1106cb7efc7",
            "services": [
                {
                    "serviceId": "552720f3da0a47fba61d602c2bcdfe31011eb4354a86ce10df98ea51584bd707",
                    "mcc": 1,
                    "mnc": 59,
                    "totalAmount": 10,
                    "unitPrice": 0.0426,
                    "currency": "USD"
                },
                {
                    "serviceId": "5bae657b5226847ea495a8ab3e138395b1b8e05e3e80866ec09bba3b2555aed5",
                    "mcc": 22,
                    "mnc": 1,
                    "totalAmount": 30,
                    "unitPrice": 0.023,
                    "currency": "USD"
                }
            ],
            "signDate": 1581129222,
            "startDate": 1581388422,
            "endData": 1613356422,
            "preStops": null,
            "nextStops": null,
            "confirmDate": 0,
            "status": "ActiveStage1",
            "address": "qlc_1iq3q5hqg868kzto5kqyauaungf4hrpnt8aa74hkk7r7u411k7fr6xc7zyxm"
        }
    ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getContractsAsPartyB",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",10,0]
}
```
:::

## settlement_getAllCDRStatus

List all CDR settlement status by settlement contract address

- **Parameters**: 
    - `address`: settlement contract address
    - `count`:  max settlement contract records size
    - `offset`: offset of all settlement contract records
- **Returns**: 
    - `result`: CDR settlement status

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getAllCDRStatus",
  "params":["qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",300,0]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": [
    {
      "params": {
        "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj": [
          {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "index": 39457620,
            "smsDt": 1578304828,
            "sender": "WeChat",
            "destination": "85257***584",
            "sendingStatus": "Sent",
            "dlrStatus": "Delivered",
            "preStop": "A2P_PCCWG",
            "nextStop": ""
          }
        ],
        "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z": [
          {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "index": 39457620,
            "smsDt": 1578304826,
            "sender": "WeChat",
            "destination": "85257***584",
            "sendingStatus": "Sent",
            "dlrStatus": "Delivered",
            "preStop": "",
            "nextStop": "CSL Hong Kong @ 3397"
          }
        ]
      },
      "status": "success"
    },
    {
      "params": {
        "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj": [
          {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "index": 39457620,
            "smsDt": 1578304831,
            "sender": "WeChat",
            "destination": "85257***235",
            "sendingStatus": "Sent",
            "dlrStatus": "Delivered",
            "preStop": "A2P_PCCWG",
            "nextStop": ""
          }
        ],
        "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z": [
          {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "index": 39457620,
            "smsDt": 1578304830,
            "sender": "WeChat",
            "destination": "85257***235",
            "sendingStatus": "Sent",
            "dlrStatus": "Delivered",
            "preStop": "",
            "nextStop": "CSL Hong Kong @ 3397"
          }
        ]
      },
      "status": "success"
    }
  ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getAllCDRStatus",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",10,0]
}
```
:::

## settlement_getCDRStatusByDate

Query CDR settlement status by settlement contract address, SMS send datetime. when start or end is zero, will be ignored.

- **Parameters**: 
    - `address`: settlement contract address
    - `start`: query conditon
    - `end`： query conditon
    - `count`:  max settlement contract records size
    - `offset`: offset of all settlement contract records
- **Returns**: 
    - `info`: total destroyed token amount

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getCDRStatusByDate",
  "params":["qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo", 1581997072, 1613965072, 300,0]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": [
    {
      "params": {
        "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj": [
          {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "index": 39457620,
            "smsDt": 1578304828,
            "sender": "WeChat",
            "destination": "85257***584",
            "sendingStatus": "Sent",
            "dlrStatus": "Delivered",
            "preStop": "A2P_PCCWG",
            "nextStop": ""
          }
        ],
        "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z": [
          {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "index": 39457620,
            "smsDt": 1578304826,
            "sender": "WeChat",
            "destination": "85257***584",
            "sendingStatus": "Sent",
            "dlrStatus": "Delivered",
            "preStop": "",
            "nextStop": "CSL Hong Kong @ 3397"
          }
        ]
      },
      "status": "success"
    },
    {
      "params": {
        "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj": [
          {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "index": 39457620,
            "smsDt": 1578304831,
            "sender": "WeChat",
            "destination": "85257***235",
            "sendingStatus": "Sent",
            "dlrStatus": "Delivered",
            "preStop": "A2P_PCCWG",
            "nextStop": ""
          }
        ],
        "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z": [
          {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "index": 39457620,
            "smsDt": 1578304830,
            "sender": "WeChat",
            "destination": "85257***235",
            "sendingStatus": "Sent",
            "dlrStatus": "Delivered",
            "preStop": "",
            "nextStop": "CSL Hong Kong @ 3397"
          }
        ]
      },
      "status": "success"
    }
  ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getCDRStatusByDate",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",10,0]
}
```
:::

## settlement_getCDRStatus

Get CDR settlement status of specified hash and specified settlement contract

- **Parameters**: 
    - `address`: settlement contract address
    - `hash`: CDR param hash, hash(smsDt, sender, destination)
- **Returns**: 
    - `result`: CDR settlement status

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getCDRStatus",
  "params":["qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo", "0baea7b9bb2eab64c59bbe51c4334644eb751c9381aa35f7d6844ca5d9eb77de"]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "params": {
      "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj": [
        {
          "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
          "index": 39457620,
          "smsDt": 1578304828,
          "sender": "WeChat",
          "destination": "85257***584",
          "sendingStatus": "Sent",
          "dlrStatus": "Delivered",
          "preStop": "A2P_PCCWG",
          "nextStop": ""
        }
      ],
      "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z": [
        {
          "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
          "index": 39457620,
          "smsDt": 1578304826,
          "sender": "WeChat",
          "destination": "85257***584",
          "sendingStatus": "Sent",
          "dlrStatus": "Delivered",
          "preStop": "",
          "nextStop": "CSL Hong Kong @ 3397"
        }
      ]
    },
    "status": "success"
  }
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getCDRStatus",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",10,0]
}
```
:::


## settlement_getSummaryReport

Generate settlement summary report of the specified settlement contract. when `start` or `end` is zero, time conditions are ignored

- **Parameters**: 
    - `address`: settlement contract address
    - `start`:
    - `end`： 
- **Returns**: 
    - `result`: summary report
        - `contract`: settlement contract details
        - `total`:  partyA and partyB's summary report
          - `partyA`: from party A's view, sending success is a success, otherwise is a failure.
          - `partyB`: from party B's view, sending success is a success, otherwise is a failure.
          - `matching`: CDR status for both Party A and Party B, status of both parties are sucessful is a sucess, otherwise is a failure
          - `orphan`: only find Party A or Party B's CDR status
        - `records`: grouped by sender, same as total


- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_getSummaryReport",
	"params": [
		"qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
		0,
		0
	]
}
```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "contract": {
      "partyA": {
        "address": "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
        "name": "PCCWG"
      },
      "partyB": {
        "address": "qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj",
        "name": "HKTCSL"
      },
      "previous": "8424d1750aaec508bd566dc7b0c72c29cfc4652c655459aedaacfa46bdcf4b21",
      "services": [
        {
          "serviceId": "cd3b525d208b1de1873dcda2db5ae4e26cbea79a3516582dfaffd4d3ba6377e0",
          "mcc": 1,
          "mnc": 91,
          "totalAmount": 10,
          "unitPrice": 0.0426,
          "currency": "USD"
        },
        {
          "serviceId": "a4ae980b031d5971cde3418beb4427723e726c04b01df8abb8171318dc6ba9fc",
          "mcc": 22,
          "mnc": 1,
          "totalAmount": 30,
          "unitPrice": 0.023,
          "currency": "USD"
        }
      ],
      "signDate": 1581129222,
      "startDate": 1581388422,
      "endDate": 1613356422,
      "preStops": [
        "A2P_PCCWG"
      ],
      "nextStops": [
        "CSL Hong Kong @ 3397"
      ],
      "confirmDate": 1582172522,
      "status": "Activated"
    },
    "records": {
      "Slack": {
        "partyA": {
          "total": 20,
          "success": 10,
          "fail": 10,
          "result": 0.5
        },
        "partyB": {
          "total": 20,
          "success": 7,
          "fail": 13,
          "result": 0.35
        },
        "orphan": {
          "total": 5,
          "success": 3,
          "fail": 2,
          "result": 0.6
        },
        "matching": {
          "total": 0,
          "success": 0,
          "fail": 0,
          "result": 0
        }
      },
      "WeChat": {
        "partyA": {
          "total": 20,
          "success": 7,
          "fail": 13,
          "result": 0.35
        },
        "partyB": {
          "total": 20,
          "success": 10,
          "fail": 10,
          "result": 0.5
        },
        "orphan": {
          "total": 0,
          "success": 0,
          "fail": 0,
          "result": 0
        },
        "matching": {
          "total": 5,
          "success": 3,
          "fail": 2,
          "result": 0.6
        }
      }
    },
    "total": {
      "partyA": {
        "total": 40,
        "success": 17,
        "fail": 23,
        "result": 0.425
      },
      "partyB": {
        "total": 40,
        "success": 17,
        "fail": 23,
        "result": 0.425
      },
      "orphan": {
        "total": 5,
        "success": 3,
        "fail": 2,
        "result": 0.6
      },
      "matching": {
        "total": 5,
        "success": 3,
        "fail": 2,
        "result": 0.6
      }
    }
  }
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_getSummaryReport",
	"params": [
		"qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
		0,
		0
	]
}
```
:::

## settlement_generateInvoices

generate user's invoice by start and end time. when `start` or `end` is zero, time conditions are ignored

- **Parameters**: 
    - `address`: user's qlc address
    - `start`: start time
    - `end`:  end time
- **Returns**: 
    - `result`: invoice

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_generateInvoices",
	"params": [
		"qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
		0,
		0
	]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "startDate": 1581388422,
            "endDate": 1613356422,
            "customer": "WeChat",
            "customerSr": "",
            "country": "",
            "operator": "HKTCSL",
            "serviceId": "cd3b525d208b1de1873dcda2db5ae4e26cbea79a3516582dfaffd4d3ba6377e0",
            "mcc": 1,
            "mnc": 91,
            "currency": "USD",
            "unitPrice": 0.0426,
            "sumOfBillableSMSCustomer": 124,
            "sumOfTOTPrice": 5.2824
        }
    ]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_generateInvoices",
	"params": [
		"qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
		0,
		0
	]
}
```
:::


## settlement_generateInvoicesByContract

generate invoice by settlement contract address start and end time. when `start` or `end` is zero, time conditions are ignored

- **Parameters**: 
    - `address`: settlement smart contract address
    - `start`: start time
    - `end`:  end time
- **Returns**: 
    - `result`: invoice

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_generateInvoicesByContract",
	"params": [
		"qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
		0,
		0
	]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "startDate": 1581388422,
            "endDate": 1613356422,
            "customer": "WeChat",
            "customerSr": "",
            "country": "",
            "operator": "HKTCSL",
            "serviceId": "cd3b525d208b1de1873dcda2db5ae4e26cbea79a3516582dfaffd4d3ba6377e0",
            "mcc": 1,
            "mnc": 91,
            "currency": "USD",
            "unitPrice": 0.0426,
            "sumOfBillableSMSCustomer": 124,
            "sumOfTOTPrice": 5.2824
        }
    ]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_generateInvoicesByContract",
	"params": [
		"qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
		0,
		0
	]
}
```
:::

## settlement_generateMultiPartyInvoice

generate multi-party invoice by settlement contract address start and end time. when `start` or `end` is zero, time conditions are ignored.

eg. The SMS went through from Montnets to PCCWG, then through CSL to end users, Montnets would like the the settlement go through PCCWG and CSL together. ONLY the states of the CDRs from Montnets, PCCWG and CSL are all successful is success, otherwise is failure. will not count in invoice.

- **Parameters**: 
    - `address`: settlement smart contract address
    - `start`: start time
    - `end`:  end time
- **Returns**: 
    - `result`: invoice

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_generateMultiPartyInvoice",
	"params": [
		"qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
		0,
		0
	]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        {
            "contractAddress": "qlc_3qs4p1n85x8opeseccjhppnpqgztqee1zh9pikhpizb7xsixto5fmd1dw3eo",
            "startDate": 1581388422,
            "endDate": 1613356422,
            "customer": "WeChat",
            "customerSr": "",
            "country": "",
            "operator": "HKTCSL",
            "serviceId": "cd3b525d208b1de1873dcda2db5ae4e26cbea79a3516582dfaffd4d3ba6377e0",
            "mcc": 1,
            "mnc": 91,
            "currency": "USD",
            "unitPrice": 0.0426,
            "sumOfBillableSMSCustomer": 124,
            "sumOfTOTPrice": 5.2824
        }
    ]
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_generateMultiPartyInvoice",
	"params": [
		"qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
		0,
		0
	]
}
```
:::
