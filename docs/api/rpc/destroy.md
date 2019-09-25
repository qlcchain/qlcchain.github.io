# Destroy

:::warning
Available from go-qlc v1.3 and above
:::

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## destroy_getSendBlackHoleBlock
Generate desctroy `ContractSend` block by params

- **Parameters**: 
    - `owner`: account address
    - `previous`: account previous block hash
    - `token`: to be destoryed token, should be `QGAS`
    - `amount`: to be destoryed token amount
    - `signature`: sign(owner,previous,token,amount) by `owner` private key
- **Returns**: 
    - `block`: `ContractSend` block

- **Example**:

::: demo

```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "destroy_getSendBlackHoleBlock",
    "params": [{
        	"owner": "qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47",
        	"previous": "9a8a816d8ea407030c95295ef05c47c125961804fc748a6060c03327a848dffe",
        	"token": "ea842234e4dc5b17c33b35f99b5b86111a3af0bd8e4a8822602b866711de6d81",
        	"amount": 100,
        	"signature": "9ad8dcc505d0a413bcc0a967c961b61e3beddd0fc285b8aa71198a6acad6263d6c175b0533df5a41a810645e93a80815d7f33bbdd2c673945e6ea07a1b0fba00"
        }]
}

```

```json tab:Response
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
        	"type": "ContractSend",
        	"token": "ea842234e4dc5b17c33b35f99b5b86111a3af0bd8e4a8822602b866711de6d81",
        	"address": "qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47",
        	"balance": "39999999900",
        	"vote": "0",
        	"network": "0",
        	"storage": "0",
        	"oracle": "0",
        	"previous": "9a8a816d8ea407030c95295ef05c47c125961804fc748a6060c03327a848dffe",
        	"link": "0000000000000000000000000000000000000000000000000000000000000016",
        	"message": "0000000000000000000000000000000000000000000000000000000000000000",
        	"data": "KEDVjCnrMYk9vebxipecU3iFF1Ay7shOiOzguMNBqrn0giPtmoqBbY6kBwMMlSle8FxHwSWWGAT8dIpgYMAzJ6hI3/7qhCI05NxbF8M7NfmbW4YRGjrwvY5KiCJgK4ZnEd5tgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkmtjcxQXQpBO8wKlnyWG2Hjvt3Q/ChbiqcRmKasrWJj1sF1sFM99aQagQZF6TqAgV1/M7vdLGc5RebqB6Gw+6AA==",
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
    "method": "destroy_getSendBlackHoleBlock",
    "params": [{
        	"owner": "qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47",
        	"previous": "9a8a816d8ea407030c95295ef05c47c125961804fc748a6060c03327a848dffe",
        	"token": "ea842234e4dc5b17c33b35f99b5b86111a3af0bd8e4a8822602b866711de6d81",
        	"amount": 100,
        	"signature": "9ad8dcc505d0a413bcc0a967c961b61e3beddd0fc285b8aa71198a6acad6263d6c175b0533df5a41a810645e93a80815d7f33bbdd2c673945e6ea07a1b0fba00"
        }]
}

```
:::

## destroy_getRewardBlackHoleBlock
Generate destroy `ContractRewards` block by `ContractSend` block hash

- **Parameters**: 
    - `send`: `ContractSend` block hash
- **Returns**: 
    - `block`: `ContractSend` block

- **Example**:

::: demo

```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "destroy_getReceiveBlackHoleBlock",
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
    "method": "destroy_getReceiveBlackHoleBlock",
    "params": ["9a8a816d8ea407030c95295ef05c47c125961804fc748a6060c03327a848dffe"]
}

```
:::


## destroy_getDestroyInfoDetail
Query destroy details by QLC address

- **Parameters**: 
    - `address`: QLC address
- **Returns**: 
    - `info`: destroyed token details

- **Example**:

::: demo

```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "destroy_getDestroyInfoDetail",
    "params": ["qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47"]
}

```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "destroy_getDestroyInfoDetail",
    "result": [
        {
            "owner": "qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47",
            "previous": "9a8a816d8ea407030c95295ef05c47c125961804fc748a6060c03327a848dffe",
            "token": "ea842234e4dc5b17c33b35f99b5b86111a3af0bd8e4a8822602b866711de6d81",
            "amount": 100,
            "timestamp": 1569377583
        }
    ]
}

```

```json test
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "destroy_getDestroyInfoDetail",
    "params": ["qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47"]
}

```
:::

## destroy_getTotalDestroyInfo
Query total destroy details by address

- **Parameters**: 
    - `address`: QLC address
- **Returns**: 
    - `info`: total destroyed token amount

- **Example**:

::: demo

```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "destroy_getTotalDestroyInfo",
    "params": ["qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47"]
}

```

```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "destroy_getDestroyInfoDetail",
    "result": 100
}
```

```json test
{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "destroy_getTotalDestroyInfo",
    "params": ["qlc_1chd886muhh8y87bh94mh44jgn3kxu66x49ew4we8ifcq9ta6azftarn4a47"]
}

```
:::