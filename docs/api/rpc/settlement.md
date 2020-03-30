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
    - `request`: boolean, true to confirm, false to reject
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
      "address": "qlc_1sjhgc7ie38ptmabwudzdip8imrs1muzp7no5w8u76ne9j5cbefdc4rte35w",
      "request": true
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
      "address": "qlc_1sjhgc7ie38ptmabwudzdip8imrs1muzp7no5w8u76ne9j5cbefdc4rte35w",
      "request": true
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
        - `addr`: user's qlc adress, should be party A or party B
        - `params`: array of CDR params, all CDR records should belong to the same settlement contract
          - `index`: time sequence, to normalize SMS send time, SMS datetime (UTC Unix) div timespan to 
          - `smsDt`: cdr date time, UTC Unix
          - `sender`: SMS sender
          - `customer`: customer name (optional), eg. `Tencent`
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
    "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
    [
      {
        "index": 1,
        "smsDt": 1583472852,
        "sender": "WeChat",
        "destination": "85257***343",
        "sendingStatus": "Sent",
        "dlrStatus": "Delivered",
        "preStop": "",
        "nextStop": "HKTCSL"
      }
    ]
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
  "params": [
    "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
    [
      {
        "index": 1,
        "smsDt": 1583472852,
        "sender": "WeChat",
        "destination": "85257***343",
        "sendingStatus": "Sent",
        "dlrStatus": "Delivered",
        "preStop": "",
        "nextStop": "HKTCSL"
      }
    ]
  ]
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

## settlement_getPreStopNames

Query all previous stop names by user's qlc address

- **Parameters**: 
    - `address`: user's qlc address
- **Returns**: 
    - `result`: all previous stop names of `address` from contract `ActiveStage1` and `Activated`

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getPreStopNames",
  "params":["qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj"]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        "A2P_PCCWG"
    ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getPreStopNames",
  "params":["qlc_3exbms47d63ywggnhb9iko9twphsnsx563qf6faufp33167o5dqfoawa8gtj"]
}
```
:::

## settlement_getNextStopNames

Query next stop names by user's qlc address

- **Parameters**: 
    - `address`: user's qlc address
- **Returns**: 
    - `result`: all next stop names of `address` from contract `ActiveStage1` and `Activated`

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getNextStopNames",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z"]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        "CSL Hong Kong @ 3397"
    ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getNextStopNames",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z"]
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

## settlement_getContractsByStatus

Query settlement contract by user's qlc address

- **Parameters**: 
    - `address`: user's qlc address
    - `status`: settlement contract status, `ActiveStage1,Activated,DestroyStage1,Destroyed,Rejected`
    - `count`:  max settlement contract records size
    - `offset`: offset of all settlement contract records
- **Returns**: 
    - `result`: all settlement contract, ordered by `startDate`

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "settlement_getContractsByStatus",
  "params": [
    "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
    "Activated",
    10,
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
        }
    ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getContractsByStatus",
  "params":["qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",10,0]
}
```
:::


## settlement_getExpiredContracts

Query settlement contract by user's qlc address, contract status is `Actived` and current date is bigger than contract end time

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
  "method":"settlement_getExpiredContracts",
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
        }
    ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getExpiredContracts",
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
            - `matching`: CDR status for both Party A and Party B, status of both parties are sucessful is a sucess, otherwise is a failure
            - `orphan`: only find Party A or Party B's CDR status
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
            "previous": "a77862e3de249df4c95f17df399a902f23e377ae0d05cf2e4becc83247b9591d",
            "services": [
                {
                    "serviceId": "ab3d2c3d0be06e7f6bab089e198c7816a1ae88fb241ca94d7a8df09ad95abfd0",
                    "mcc": 460,
                    "mnc": 46,
                    "totalAmount": 10000,
                    "unitPrice": 0.0426,
                    "currency": "USD"
                },
                {
                    "serviceId": "b5983e8ac72f04548fa99789b08014904f71e1f5b48c5d47fff8507efd51d85a",
                    "mcc": 460,
                    "mnc": 2,
                    "totalAmount": 300000,
                    "unitPrice": 0.023,
                    "currency": "USD"
                }
            ],
            "signDate": 1582799181,
            "startDate": 1582799263,
            "endDate": 1613356422,
            "preStops": [
                "A2P_PCCWG"
            ],
            "nextStops": [
                "CSL Hong Kong @ 3397"
            ],
            "confirmDate": 1582799183,
            "status": "Activated"
        },
        "records": {
            "WeChat": {
                "partyA": {
                    "orphan": {
                        "total": 32,
                        "success": 27,
                        "fail": 5,
                        "result": 0.84375
                    },
                    "matching": {
                        "total": 177,
                        "success": 177,
                        "fail": 0,
                        "result": 1
                    }
                },
                "partyB": {
                    "orphan": {
                        "total": 89,
                        "success": 67,
                        "fail": 22,
                        "result": 0.7528089887640449
                    },
                    "matching": {
                        "total": 177,
                        "success": 177,
                        "fail": 0,
                        "result": 1
                    }
                }
            }
        },
        "total": {
            "partyA": {
                "orphan": {
                    "total": 32,
                    "success": 27,
                    "fail": 5,
                    "result": 0.84375
                },
                "matching": {
                    "total": 177,
                    "success": 177,
                    "fail": 0,
                    "result": 1
                }
            },
            "partyB": {
                "orphan": {
                    "total": 89,
                    "success": 67,
                    "fail": 22,
                    "result": 0.7528089887640449
                },
                "matching": {
                    "total": 177,
                    "success": 177,
                    "fail": 0,
                    "result": 1
                }
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
    - `firstAddr`: settlement smart contract address
    - `secondAddr`: settlement smart contract address, the PartyB of the 1st settlement contract should be PartyA of the 2nd one
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
		"qlc_176ap4ygjk8yposnxa5o4doptg8k5c7wh4oo6hb7xyorea7y886opm79939s","qlc_3uegr8u9315dnrskkpe4pdqfnh35pfd311o673cz8xuexa4gf3tuj6bzb6au",
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
		"qlc_176ap4ygjk8yposnxa5o4doptg8k5c7wh4oo6hb7xyorea7y886opm79939s","qlc_3uegr8u9315dnrskkpe4pdqfnh35pfd311o673cz8xuexa4gf3tuj6bzb6au",
		0,
		0
	]
}
```
:::

## settlement_generateMultiPartySummaryReport

generate multi-party summary report by settlement contract address start and end time. when `start` or `end` is zero, time conditions are ignored.

eg. The SMS went through from Montnets to PCCWG, then through CSL to end users, Montnets would like the the settlement go through PCCWG and CSL together. ONLY the states of the CDRs from Montnets, PCCWG and CSL are all successful is success, otherwise is failure. will not count in invoice.

- **Parameters**: 
    - `firstAddr`: settlement smart contract address
    - `secondAddr`: settlement smart contract address, the PartyB of the 1st settlement contract should be PartyA of the 2nd one
    - `start`: start time
    - `end`:  end time
- **Returns**: 
    - `result`: summary reports
      - `total`:  partyA and partyB's summary report
        - `partyA`: from party A's view, sending success is a success, otherwise is a failure.
          - `matching`: CDR status for both Party A, Party B and Party C, status of both parties are sucessful is a sucess, otherwise is a failure
          - `orphan`: not all in three parties
        - `partyB`: from party B's view, sending success is a success, otherwise is a failure.
          - `matching`: CDR status for both Party A, Party B and Party C, status of both parties are sucessful is a sucess, otherwise is a failure
          - `orphan`: not all in three parties
        - `partyC`: from party C's view, sending success is a success, otherwise is a failure.
          - `matching`: CDR status for both Party A, Party B and Party C, status of both parties are sucessful is a sucess, otherwise is a failure
          - `orphan`: not all in three parties
      - `records`: grouped by sender, same as total
      - `contracts`: content of the 1st and 2nd settlement contract

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_generateMultiPartySummaryReport",
	"params": [
		"qlc_176ap4ygjk8yposnxa5o4doptg8k5c7wh4oo6hb7xyorea7y886opm79939s","qlc_3uegr8u9315dnrskkpe4pdqfnh35pfd311o673cz8xuexa4gf3tuj6bzb6au",
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
        "contracts": [
            {
                "partyA": {
                    "address": "qlc_3q4wy8an6j8t34nkf9zh6zmhcjtch3cgmejpmfdxq5ffzdkcn3ot51c47auj",
                    "name": "MONTNETS"
                },
                "partyB": {
                    "address": "qlc_3giz1uwgsmq46xzspo9mbutade6foqh5fuja4m9rwfiuyzp4x8zu5hkorq4z",
                    "name": "PCCWG"
                },
                "services": [
                    {
                        "serviceId": "880acc1918ef3b9dc7c747d6eb347aa4a5c0341a5007395019b911bef4da9b63",
                        "mcc": 1,
                        "mnc": 2,
                        "totalAmount": 10,
                        "unitPrice": 0.0426,
                        "currency": "USD"
                    },
                    {
                        "serviceId": "e876197d52080ec96ded79f1020bedd748b2fc30aa9565d03e23d9b6f215d80b",
                        "mcc": 22,
                        "mnc": 1,
                        "totalAmount": 30,
                        "unitPrice": 0.023,
                        "currency": "USD"
                    }
                ],
                "signDate": 1584516392,
                "startDate": 1584516392,
                "endDate": 1616484392,
                "preStops": [
                    "A2P_MONTNETS"
                ],
                "nextStops": [
                    "A2P_PCCWG"
                ],
                "confirmDate": 1584516393,
                "status": "Activated"
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
                "services": [
                    {
                        "serviceId": "95352f6332e0a4010adb7207c8e4809a6a2586d091986f98ac84e4af853d4f94",
                        "mcc": 1,
                        "mnc": 2,
                        "totalAmount": 10,
                        "unitPrice": 0.0426,
                        "currency": "USD"
                    },
                    {
                        "serviceId": "49bcb06822db185c51b6214f2ac4debbc3be4c4f7bf87bc0fe61f5ff47337cac",
                        "mcc": 22,
                        "mnc": 1,
                        "totalAmount": 30,
                        "unitPrice": 0.023,
                        "currency": "USD"
                    }
                ],
                "signDate": 1584516396,
                "startDate": 1584516396,
                "endDate": 1616484396,
                "preStops": [
                    "A2P_PCCWG"
                ],
                "nextStops": [
                    "CSL Hong Kong @ 3397"
                ],
                "confirmDate": 1584516397,
                "status": "Activated"
            }
        ],
        "records": {
            "WeChat": {
                "partyA": {
                    "orphan": {
                        "total": 0,
                        "success": 0,
                        "fail": 0,
                        "result": 0
                    },
                    "matching": {
                        "total": 1,
                        "success": 1,
                        "fail": 0,
                        "result": 1
                    }
                },
                "partyB": {
                    "orphan": {
                        "total": 0,
                        "success": 0,
                        "fail": 0,
                        "result": 0
                    },
                    "matching": {
                        "total": 1,
                        "success": 1,
                        "fail": 0,
                        "result": 1
                    }
                },
                "partyC": {
                    "orphan": {
                        "total": 0,
                        "success": 0,
                        "fail": 0,
                        "result": 0
                    },
                    "matching": {
                        "total": 1,
                        "success": 1,
                        "fail": 0,
                        "result": 1
                    }
                }
            }
        },
        "total": {
            "partyA": {
                "orphan": {
                    "total": 0,
                    "success": 0,
                    "fail": 0,
                    "result": 0
                },
                "matching": {
                    "total": 1,
                    "success": 1,
                    "fail": 0,
                    "result": 1
                }
            },
            "partyB": {
                "orphan": {
                    "total": 0,
                    "success": 0,
                    "fail": 0,
                    "result": 0
                },
                "matching": {
                    "total": 1,
                    "success": 1,
                    "fail": 0,
                    "result": 1
                }
            },
            "partyC": {
                "orphan": {
                    "total": 0,
                    "success": 0,
                    "fail": 0,
                    "result": 0
                },
                "matching": {
                    "total": 1,
                    "success": 1,
                    "fail": 0,
                    "result": 1
                }
            }
        }
    }
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_generateMultiPartySummaryReport",
	"params": [
		"qlc_176ap4ygjk8yposnxa5o4doptg8k5c7wh4oo6hb7xyorea7y886opm79939s","qlc_3uegr8u9315dnrskkpe4pdqfnh35pfd311o673cz8xuexa4gf3tuj6bzb6au",
		0,
		0
	]
}
```
:::

## settlement_getRegisterAssetBlock

Generate register asset contract `ContractSend` block by params, 

- **Parameters**: 
    - `param`: to be signed settlement contract
      - `owner`: asset owner
      - `assets`: array of assets
        - `sla`: support two types SLA: Latency and DeliveredRate, will sort SLAs in order of priority,first to process the higher priority SLA
      - `startDate`: effective start time of assets, UTC Unix
      - `endDate`: effective end time of assets, UTC Unix
      - `status`: assets status, `Activated` and `Deactivated`
- **Returns**: 
    - `block`: `ContractSend` block, without signature, have to sign the block before process it

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "settlement_getRegisterAssetBlock",
  "params": [
    {
      "owner": {
        "address": "qlc_3pekn1xq8boq1ihpj8q96wnktxiu8cfbe5syaety3bywyd45rkyhmj8b93kq",
        "name": "HKT-CSL"
      },
      "assets": [
        {
          "mcc": 42,
          "mnc": 5,
          "totalAmount": 1000,
          "sla": [
            {
              "type": "Latency",
              "priority": 0,
              "value": 30,
              "compensations": [
                {
                  "low": 50,
                  "high": 60,
                  "rate": 10
                },
                {
                  "low": 60,
                  "high": 80,
                  "rate": 20.5
                }
              ]
            },
            {
              "type": "DeliveredRate",
              "priority": 1,
              "value": 0.95,
              "compensations": [
                {
                  "low": 0.8,
                  "high": 0.9,
                  "rate": 5
                },
                {
                  "low": 0.7,
                  "high": 0.8,
                  "rate": 5.5
                }
              ]
            }
          ]
        }
      ],
      "startDate": 1584607341,
      "endDate": 1616143341,
      "status": "Activated"
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
  "method": "settlement_getRegisterAssetBlock",
  "params": [
    {
      "owner": {
        "address": "qlc_3pekn1xq8boq1ihpj8q96wnktxiu8cfbe5syaety3bywyd45rkyhmj8b93kq",
        "name": "HKT-CSL"
      },
      "assets": [
        {
          "mcc": 42,
          "mnc": 5,
          "totalAmount": 1000,
          "sla": [
            {
              "type": "Latency",
              "priority": 0,
              "value": 30,
              "compensations": [
                {
                  "low": 50,
                  "high": 60,
                  "rate": 10
                },
                {
                  "low": 60,
                  "high": 80,
                  "rate": 20.5
                }
              ]
            },
            {
              "type": "DeliveredRate",
              "priority": 1,
              "value": 0.95,
              "compensations": [
                {
                  "low": 0.8,
                  "high": 0.9,
                  "rate": 5
                },
                {
                  "low": 0.7,
                  "high": 0.8,
                  "rate": 5.5
                }
              ]
            }
          ]
        }
      ],
      "startDate": 1584607341,
      "endDate": 1616143341,
      "status": "Activated"
    }
  ]
}
```
:::


## settlement_getAllAssets

list all assets

- **Parameters**: 
    - `count`:  max settlement contract records size
    - `offset`: offset of all settlement contract records
- **Returns**: 
    - `result`: array of assets

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getAllAssets",
  "params":[10,0]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        {
            "owner": {
                "address": "qlc_3q4wy8an6j8t34nkf9zh6zmhcjtch3cgmejpmfdxq5ffzdkcn3ot51c47auj",
                "name": "HKT-CSL"
            },
            "assets": [
                {
                    "mcc": 42,
                    "mnc": 5,
                    "totalAmount": 1000,
                    "sla": [
                        {
                            "type": "Latency",
                            "priority": 0,
                            "value": 30,
                            "compensations": [
                                {
                                    "low": 50,
                                    "high": 60,
                                    "rate": 10
                                },
                                {
                                    "low": 60,
                                    "high": 80,
                                    "rate": 20.5
                                }
                            ]
                        },
                        {
                            "type": "DeliveredRate",
                            "priority": 0,
                            "value": 0.9,
                            "compensations": [
                                {
                                    "low": 0.8,
                                    "high": 0.9,
                                    "rate": 10
                                },
                                {
                                    "low": 0.7,
                                    "high": 0.8,
                                    "rate": 10.5
                                }
                            ]
                        }
                    ],
                    "assetID": "14f6995e96a749a2360f141e78f978cd93fa4a2c1ec23b13282e8e4b17fde956"
                }
            ],
            "signDate": 1584518910,
            "startDate": 1584605310,
            "endDate": 1616141310,
            "status": "Activated",
            "address": "qlc_3c43fi9qpbdof7yx715kr1uq48r43jb6edxndz6wxd1h1u9pbgwmu4ctb34j"
        }
    ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getAllAssets",
  "params":[10,0]
}
```
:::

## settlement_getAssetsByOwner

Query assets by asset's owner

- **Parameters**: 
    - `owner`: owner's QLC address
    - `count`:  max settlement contract records size
    - `offset`: offset of all settlement contract records
- **Returns**: 
    - `result`: array of assets

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getAssetsByOwner",
  "params":["qlc_3q4wy8an6j8t34nkf9zh6zmhcjtch3cgmejpmfdxq5ffzdkcn3ot51c47auj",10,0]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": [
        {
            "owner": {
                "address": "qlc_3q4wy8an6j8t34nkf9zh6zmhcjtch3cgmejpmfdxq5ffzdkcn3ot51c47auj",
                "name": "HKT-CSL"
            },
            "assets": [
                {
                    "mcc": 42,
                    "mnc": 5,
                    "totalAmount": 1000,
                    "sla": [
                        {
                            "type": "Latency",
                            "priority": 0,
                            "value": 30,
                            "compensations": [
                                {
                                    "low": 50,
                                    "high": 60,
                                    "rate": 10
                                },
                                {
                                    "low": 60,
                                    "high": 80,
                                    "rate": 20.5
                                }
                            ]
                        },
                        {
                            "type": "DeliveredRate",
                            "priority": 0,
                            "value": 0.9,
                            "compensations": [
                                {
                                    "low": 0.8,
                                    "high": 0.9,
                                    "rate": 10
                                },
                                {
                                    "low": 0.7,
                                    "high": 0.8,
                                    "rate": 10.5
                                }
                            ]
                        }
                    ],
                    "assetID": "14f6995e96a749a2360f141e78f978cd93fa4a2c1ec23b13282e8e4b17fde956"
                }
            ],
            "signDate": 1584518910,
            "startDate": 1584605310,
            "endDate": 1616141310,
            "status": "Activated",
            "address": "qlc_3c43fi9qpbdof7yx715kr1uq48r43jb6edxndz6wxd1h1u9pbgwmu4ctb34j"
        }
    ]
}
```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"settlement_getAssetsByOwner",
  "params":["qlc_3q4wy8an6j8t34nkf9zh6zmhcjtch3cgmejpmfdxq5ffzdkcn3ot51c47auj",10,0]
}
```
:::


## settlement_getAsset

Get asset by asset's address

- **Parameters**: 
    - `address`: asset's QLC address
- **Returns**: 
    - `result`: asset

- **Example**:

::: demo

```json tab:Request
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_getAsset",
	"params": [
		"qlc_3c43fi9qpbdof7yx715kr1uq48r43jb6edxndz6wxd1h1u9pbgwmu4ctb34j"
	]
}
```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "result": {
        "owner": {
            "address": "qlc_3q4wy8an6j8t34nkf9zh6zmhcjtch3cgmejpmfdxq5ffzdkcn3ot51c47auj",
            "name": "HKT-CSL"
        },
        "assets": [
            {
                "mcc": 42,
                "mnc": 5,
                "totalAmount": 1000,
                "sla": [
                    {
                        "type": "Latency",
                        "priority": 0,
                        "value": 30,
                        "compensations": [
                            {
                                "low": 50,
                                "high": 60,
                                "rate": 10
                            },
                            {
                                "low": 60,
                                "high": 80,
                                "rate": 20.5
                            }
                        ]
                    },
                    {
                        "type": "DeliveredRate",
                        "priority": 0,
                        "value": 0.9,
                        "compensations": [
                            {
                                "low": 0.8,
                                "high": 0.9,
                                "rate": 10
                            },
                            {
                                "low": 0.7,
                                "high": 0.8,
                                "rate": 10.5
                            }
                        ]
                    }
                ],
                "assetID": "14f6995e96a749a2360f141e78f978cd93fa4a2c1ec23b13282e8e4b17fde956"
            }
        ],
        "signDate": 1584518910,
        "startDate": 1584605310,
        "endDate": 1616141310,
        "status": "Activated",
        "address": "qlc_3c43fi9qpbdof7yx715kr1uq48r43jb6edxndz6wxd1h1u9pbgwmu4ctb34j"
    }
}
```

```json test
{
	"jsonrpc": "2.0",
	"id": 3,
	"method": "settlement_getAsset",
	"params": [
		"qlc_3c43fi9qpbdof7yx715kr1uq48r43jb6edxndz6wxd1h1u9pbgwmu4ctb34j"
	]
}
```
:::
