# Destroy

:::warning
go-qlc v1.3 及以上版本才支持
:::

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## destroy_getSendBlackHoleBlock
根据指定参数生成 `ContractSend` 块

- **Parameters**: 
    - `owner`: 待销毁代币的持有账户，须与块中的`Address`保持一致
    - `previous`: 账户的前一个块的 Hash，须与块中的`Previous`保持一致
    - `token`: 待销毁的代币Hash, 目前必须为 `QGAS`
    - `amount`: 待销毁代币的数量
    - `signature`: 签名，用 `owner` 私钥对 (owner,previous,token,amount) 签名，算法与块的签名一致
- **Returns**: 
    - `block`: 生成的 `ContractSend` 块

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
根据 `ContractSend` 块的 Hash 生成 `ContractRewards`

- **Parameters**: 
    - `send`: `ContractSend` 块 Hash
- **Returns**: 
    - `block`: 生成的 `ContractSend` 块

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
查询指定 QLC 账户的销毁记录

- **Parameters**: 
    - `address`: QLC 地址
- **Returns**: 
    - `info`: 销毁代币记录详单

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
查询指定 QLC 账户销毁代币总量 

- **Parameters**: 
    - `address`: QLC 地址
- **Returns**: 
    - `info`: 销毁代币总量 

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