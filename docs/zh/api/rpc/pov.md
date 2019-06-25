
# PoV

**支持调用方式:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## pov_getFittestHeader
返回最合适的区块头，如果节点处于同步中，会返回错误。在发送交易之前调用该接口。

- **Parameters**:
  -  `gap`: 相对最新区块的间隔，默认是0
  
- **Returns**: 
  -  `header`: 区块头结构

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getFittestHeader",
  "params":[
      0
    ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "coinbase": "qlc_3fkqoenh9k33ca6tqcwyhxxjedhz564kh37rutkqh17uzjbeyzwqa7ucx4mp",
        "hash": "7ce8ce0ea257e4cb23007bd136aa7958097d2d677f2f69027d3b27e9a05d2de6",
        "height": 1956,
        "merkleRoot": "0000000000000000000000000000000000000000000000000000000000000000",
        "nonce": 2319911,
        "previous": "fa015d81a210ccc9d87f834c1915b419e402d6461de698da5214613da7be2f64",
        "signature": "39d858ec0a96b5345d1ff5455c43549e87346ff87345a3fa4a32ff5891f19484a5aa6e694789299d6eb77b0c1499595f92e9445ed6a7647eeebb477d7c10cf04",
        "stateHash": "143b9602525e654f090b716300f736cf291398359f2ace08abe64c0102db2c16",
        "target": "88370140955faf327a8eda56c244ee63674a0e7c87c75e78007500d827736bd286bf58fe722e84e6718dc8eff0fc176ece28708c756a0a7e655f9ee3c4000000",
        "timestamp": 1560925637,
        "txNum": 0,
        "voteSignature": "c80e6f7c85f1303728ceb1f087e7e551e0bce151675be8c4f744faa3d92643c364375e77b326c2b156ee88450516c8696180f6fb6f9f84530947149948000000"
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLatestHeader",
  "params":[
      0
  ]
}


```
:::


## pov_getLatestHeader
返回最长主链的最新区块头

- **Parameters**: `null`
  
- **Returns**: 
  -  `header`: 区块头结构

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLatestHeader",
  "params":[]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "coinbase": "qlc_3fkqoenh9k33ca6tqcwyhxxjedhz564kh37rutkqh17uzjbeyzwqa7ucx4mp",
        "hash": "7ce8ce0ea257e4cb23007bd136aa7958097d2d677f2f69027d3b27e9a05d2de6",
        "height": 1956,
        "merkleRoot": "0000000000000000000000000000000000000000000000000000000000000000",
        "nonce": 2319911,
        "previous": "fa015d81a210ccc9d87f834c1915b419e402d6461de698da5214613da7be2f64",
        "signature": "39d858ec0a96b5345d1ff5455c43549e87346ff87345a3fa4a32ff5891f19484a5aa6e694789299d6eb77b0c1499595f92e9445ed6a7647eeebb477d7c10cf04",
        "stateHash": "143b9602525e654f090b716300f736cf291398359f2ace08abe64c0102db2c16",
        "target": "88370140955faf327a8eda56c244ee63674a0e7c87c75e78007500d827736bd286bf58fe722e84e6718dc8eff0fc176ece28708c756a0a7e655f9ee3c4000000",
        "timestamp": 1560925637,
        "txNum": 0,
        "voteSignature": "c80e6f7c85f1303728ceb1f087e7e551e0bce151675be8c4f744faa3d92643c364375e77b326c2b156ee88450516c8696180f6fb6f9f84530947149948000000"
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLatestHeader",
  "params":[]
}


```
:::

## pov_getHeaderByHeight
通过区块高度查询区块头

- **Parameters**:
  - `height`: 区块高度
  
- **Returns**:
  - `header`: 区块头结构

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHeaderByHeight",
  "params":[
      1956
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "coinbase": "qlc_3fkqoenh9k33ca6tqcwyhxxjedhz564kh37rutkqh17uzjbeyzwqa7ucx4mp",
        "hash": "7ce8ce0ea257e4cb23007bd136aa7958097d2d677f2f69027d3b27e9a05d2de6",
        "height": 1956,
        "merkleRoot": "0000000000000000000000000000000000000000000000000000000000000000",
        "nonce": 2319911,
        "previous": "fa015d81a210ccc9d87f834c1915b419e402d6461de698da5214613da7be2f64",
        "signature": "39d858ec0a96b5345d1ff5455c43549e87346ff87345a3fa4a32ff5891f19484a5aa6e694789299d6eb77b0c1499595f92e9445ed6a7647eeebb477d7c10cf04",
        "stateHash": "143b9602525e654f090b716300f736cf291398359f2ace08abe64c0102db2c16",
        "target": "88370140955faf327a8eda56c244ee63674a0e7c87c75e78007500d827736bd286bf58fe722e84e6718dc8eff0fc176ece28708c756a0a7e655f9ee3c4000000",
        "timestamp": 1560925637,
        "txNum": 0,
        "voteSignature": "c80e6f7c85f1303728ceb1f087e7e551e0bce151675be8c4f744faa3d92643c364375e77b326c2b156ee88450516c8696180f6fb6f9f84530947149948000000"
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHeaderByHeight",
  "params":[
      1956
  ]
}


```
:::

## pov_getHeaderByHash
通过区块哈希查询区块头

- **Parameters**:
  - `hash`: 区块哈希
  
- **Returns**:
  - `header`: 区块头结构

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHeaderByHash",
  "params":[
      "7ce8ce0ea257e4cb23007bd136aa7958097d2d677f2f69027d3b27e9a05d2de6"
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "coinbase": "qlc_3fkqoenh9k33ca6tqcwyhxxjedhz564kh37rutkqh17uzjbeyzwqa7ucx4mp",
        "hash": "7ce8ce0ea257e4cb23007bd136aa7958097d2d677f2f69027d3b27e9a05d2de6",
        "height": 1956,
        "merkleRoot": "0000000000000000000000000000000000000000000000000000000000000000",
        "nonce": 2319911,
        "previous": "fa015d81a210ccc9d87f834c1915b419e402d6461de698da5214613da7be2f64",
        "signature": "39d858ec0a96b5345d1ff5455c43549e87346ff87345a3fa4a32ff5891f19484a5aa6e694789299d6eb77b0c1499595f92e9445ed6a7647eeebb477d7c10cf04",
        "stateHash": "143b9602525e654f090b716300f736cf291398359f2ace08abe64c0102db2c16",
        "target": "88370140955faf327a8eda56c244ee63674a0e7c87c75e78007500d827736bd286bf58fe722e84e6718dc8eff0fc176ece28708c756a0a7e655f9ee3c4000000",
        "timestamp": 1560925637,
        "txNum": 0,
        "voteSignature": "c80e6f7c85f1303728ceb1f087e7e551e0bce151675be8c4f744faa3d92643c364375e77b326c2b156ee88450516c8696180f6fb6f9f84530947149948000000"
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHeaderByHash",
  "params":[
      "7ce8ce0ea257e4cb23007bd136aa7958097d2d677f2f69027d3b27e9a05d2de6"
  ]
}


```
:::


## pov_batchGetHeadersByHeight
根据区块高度批量查询区块头列表

- **Parameters**:
  - `height`: 区块高度
  - `count`: 区块个数
  - `direction`: true - 升序（前向）, false - 降序（后向）

- **Returns**:
  - `count`: 区块个数
  - `headers`: 区块头结构列表

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_batchGetHeadersByHeight",
  "params":[
      1,
      3,
      true
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "count": 3,
        "headers": [
            {
                "coinbase": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
                "hash": "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0",
                "height": 1,
                "merkleRoot": "cf8f3365a861c1b715ac6d431cd8463049100b900143112599032a00605209c8",
                "nonce": 1064317,
                "previous": "e25685cec8eba35fa42fbe62f607858d40f1dd4fc76db1679c8c8d9a10ab5a41",
                "signature": "cab61a7e298f66664ab355277991284a78d2b3f730c0b86e9c9a960359c16bcdddd9b0017f077d3aa0ad607bcd139772a70b36988845c9083592c6dd2b75a100",
                "stateHash": "a91fc0e6e48edd5f0447b246d759e59d3537de0b3873c748ee8677649ae722c8",
                "target": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f000000",
                "timestamp": 1560858521,
                "txNum": 4,
                "voteSignature": "746a773b31decf1f7b16afeb460a4232bdeb4b96184869de405e583547e9bf7a5448b315348536c104bddf7126cf1dabd989014eccad19b97aa479f80a000000"
            },
            {
                "coinbase": "qlc_3fkqoenh9k33ca6tqcwyhxxjedhz564kh37rutkqh17uzjbeyzwqa7ucx4mp",
                "hash": "4096e3087eb1023764555547ca2ee4396362370557ca4465051baeda2aabbb35",
                "height": 2,
                "merkleRoot": "ac43d7f44116068cf085b4a1c45de37c3d641c6f538206ff4616bc2d81f3f5e3",
                "nonce": 254176,
                "previous": "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0",
                "signature": "aa347a7e58e69caf5a44a1e0be4cca4cf95d4b85b91a36b289afb141d394c8790203379a9935a2e166e9afca52f5e54290fa46cad2350eed3c1e4ba45ea0f706",
                "stateHash": "3fdbbbada69d75e22019361d15de1be87db9b8129c29d7b06e29032352c2e32d",
                "target": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f000000",
                "timestamp": 1560858733,
                "txNum": 3,
                "voteSignature": "6041ac87fee73b6a12015984aa5729fab9c66103f37f854705e38eda8f717db7f835e8cb148ad90e8b6b4803c841fdda3e314ba929a8f0dd5ed57c1f2c000000"
            },
            {
                "coinbase": "qlc_1gnqid9up5y998uwig44x1yfrppsdo8f9jfszgqin7pr7ixsyyae1y81w9xp",
                "hash": "b420cc80a7115b008d8154212fe234f1c4ea3550f814062a55e0257ce0982a74",
                "height": 3,
                "merkleRoot": "1b02679a683dc3b19b20120c6db699797b8ec696b3d2b4300917db4e103d8344",
                "nonce": 349051,
                "previous": "4096e3087eb1023764555547ca2ee4396362370557ca4465051baeda2aabbb35",
                "signature": "c51290cb9f7b2408ac1e8941534b5552f1cf7aa1be3377f2e2a8b67a75c79eaf1afee6901739ba2d520b9e102c4a8a5dd7ef63da2c4a6828239388c991eb1206",
                "stateHash": "c63397f5c43bc886fb970f738cc122eea66eec8ddb4475855f4e24f982c58494",
                "target": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f000000",
                "timestamp": 1560859794,
                "txNum": 3,
                "voteSignature": "bc704fcc2b635a6860ffbaa0a45ae6dd5201c1640eec361f83b01a0d25af4b1fb8b50e69710549b52dbd15ee1a227bb32e0ce77cc4364dc9e30d8a4b50000000"
            }
        ]
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_batchGetHeadersByHeight",
  "params":[
      1,
      3,
      true
  ]
}


```
:::


## pov_getLatestBlock
返回最长主链的最新区块结构（包含区块头部和区块体）

- **Parameters**:
  - `txOffset`: 从offset开始返回一批交易，默认为0
  - `txLimit`: 返回交易的最大限制，默认为100
  
- **Returns**: 
  -  `block`: 区块结构

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLatestBlock",
  "params":[]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "coinbase": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
        "hash": "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0",
        "height": 1,
        "merkleRoot": "cf8f3365a861c1b715ac6d431cd8463049100b900143112599032a00605209c8",
        "nonce": 1064317,
        "previous": "e25685cec8eba35fa42fbe62f607858d40f1dd4fc76db1679c8c8d9a10ab5a41",
        "signature": "cab61a7e298f66664ab355277991284a78d2b3f730c0b86e9c9a960359c16bcdddd9b0017f077d3aa0ad607bcd139772a70b36988845c9083592c6dd2b75a100",
        "stateHash": "a91fc0e6e48edd5f0447b246d759e59d3537de0b3873c748ee8677649ae722c8",
        "target": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f000000",
        "timestamp": 1560858521,
        "transactions": [
            {
                "hash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945"
            },
            {
                "hash": "424b367da2e0ff991d3086f599ce26547b80ae948b209f1cb7d63e19231ab213"
            },
            {
                "hash": "5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d"
            },
            {
                "hash": "8b54787c668dddd4f22ad64a8b0d241810871b9a52a989eb97670f345ad5dc90"
            }
        ],
        "txNum": 4,
        "voteSignature": "746a773b31decf1f7b16afeb460a4232bdeb4b96184869de405e583547e9bf7a5448b315348536c104bddf7126cf1dabd989014eccad19b97aa479f80a000000"
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLatestBlock",
  "params":[]
}


```
:::

## pov_getBlockByHeight
根据区块高度查询区块结构（包含区块头部和区块体）

- **Parameters**:
  - `height`: 区块高度
  - `txOffset`: 从offset开始返回一批交易，默认为0
  - `txLimit`: 返回交易的最大限制，默认为100
  
- **Returns**:
  - `block`: 区块结构

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHeaderByHeight",
  "params":[
      1
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "coinbase": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
        "hash": "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0",
        "height": 1,
        "merkleRoot": "cf8f3365a861c1b715ac6d431cd8463049100b900143112599032a00605209c8",
        "nonce": 1064317,
        "previous": "e25685cec8eba35fa42fbe62f607858d40f1dd4fc76db1679c8c8d9a10ab5a41",
        "signature": "cab61a7e298f66664ab355277991284a78d2b3f730c0b86e9c9a960359c16bcdddd9b0017f077d3aa0ad607bcd139772a70b36988845c9083592c6dd2b75a100",
        "stateHash": "a91fc0e6e48edd5f0447b246d759e59d3537de0b3873c748ee8677649ae722c8",
        "target": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f000000",
        "timestamp": 1560858521,
        "transactions": [
            {
                "hash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945"
            },
            {
                "hash": "424b367da2e0ff991d3086f599ce26547b80ae948b209f1cb7d63e19231ab213"
            },
            {
                "hash": "5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d"
            },
            {
                "hash": "8b54787c668dddd4f22ad64a8b0d241810871b9a52a989eb97670f345ad5dc90"
            }
        ],
        "txNum": 4,
        "voteSignature": "746a773b31decf1f7b16afeb460a4232bdeb4b96184869de405e583547e9bf7a5448b315348536c104bddf7126cf1dabd989014eccad19b97aa479f80a000000"
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getBlockByHeight",
  "params":[
      1
  ]
}


```
:::


## pov_getBlockByHash
根据哈希查询区块结构（包含区块头部和区块体）

- **Parameters**:
  - `hash`: 区块哈希
  - `txOffset`: 从offset开始返回一批交易，默认为0
  - `txLimit`: 返回交易的最大限制，默认为100
  
- **Returns**:
  - `block`: 区块结构

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getBlockByHash",
  "params":[
      "7ce8ce0ea257e4cb23007bd136aa7958097d2d677f2f69027d3b27e9a05d2de6"
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "coinbase": "qlc_3qqy3dag4yuowwqgpid36h9tfnnzxahofd9sq1qg1ksefhxuqw9dou93wwsd",
        "hash": "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0",
        "height": 1,
        "merkleRoot": "cf8f3365a861c1b715ac6d431cd8463049100b900143112599032a00605209c8",
        "nonce": 1064317,
        "previous": "e25685cec8eba35fa42fbe62f607858d40f1dd4fc76db1679c8c8d9a10ab5a41",
        "signature": "cab61a7e298f66664ab355277991284a78d2b3f730c0b86e9c9a960359c16bcdddd9b0017f077d3aa0ad607bcd139772a70b36988845c9083592c6dd2b75a100",
        "stateHash": "a91fc0e6e48edd5f0447b246d759e59d3537de0b3873c748ee8677649ae722c8",
        "target": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f000000",
        "timestamp": 1560858521,
        "transactions": [
            {
                "hash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945"
            },
            {
                "hash": "424b367da2e0ff991d3086f599ce26547b80ae948b209f1cb7d63e19231ab213"
            },
            {
                "hash": "5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d"
            },
            {
                "hash": "8b54787c668dddd4f22ad64a8b0d241810871b9a52a989eb97670f345ad5dc90"
            }
        ],
        "txNum": 4,
        "voteSignature": "746a773b31decf1f7b16afeb460a4232bdeb4b96184869de405e583547e9bf7a5448b315348536c104bddf7126cf1dabd989014eccad19b97aa479f80a000000"
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getBlockByHash",
  "params":[
      "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0"
  ]
}


```
:::


## pov_getTransaction
通过交易哈希查询交易信息

- **Parameters**:
  - `txHash`: 交易哈希
  
- **Returns**:
  - `transaction`: 交易结构

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getTransaction",
  "params":[
      "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945"
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "transaction": {
            "address": "qlc_3qjky1ptg9qkzm8iertdzrnx9btjbaea33snh1w4g395xqqczye4kgcfyfs1",
            "balance": "0",
            "data": "6TrdxIkGbXR6PHT/HeyOpqcBG94BDdQErsRUiA8j1Yy/koDkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjhvJvwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjoE+UabYq+oXii83bVMt+YPMpxtOTPW90teGTuMM+LpQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEUUdBUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFFHQVMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "extra": "0000000000000000000000000000000000000000000000000000000000000000",
            "link": "e813e51a6d8abea178a2f376d532df983cca71b4e4cf5bdd2d7864ee30cf8ba5",
            "message": "0000000000000000000000000000000000000000000000000000000000000000",
            "network": "0",
            "oracle": "0",
            "povHeight": 0,
            "previous": "0000000000000000000000000000000000000000000000000000000000000000",
            "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
            "signature": "441b26cf4318cea394fe07a5e30cde18f967406a9c26158417bcd29abd5a4c79d05746f838bc42f0a7d681cf4a3b4e6b29992fcd7fa7cafe72a4e00e133d310f",
            "storage": "0",
            "timestamp": 1553990401,
            "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
            "type": "ContractSend",
            "vote": "0",
            "work": "000000000048f5b9"
        },
        "txHash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945",
        "txLookup": {
            "blockHash": "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0",
            "blockHeight": 1,
            "txIndex": 0
        }
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getTransaction",
  "params":[
      "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945"
  ]
}


```
:::


## pov_getTransactionByBlockHashAndIndex
通过区块哈希和交易索引查询交易信息

- **Parameters**:
  - `blockHash`: 区块哈希
  - `txIndex`: 交易索引
  
- **Returns**:
  - `transaction`: 交易结构

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getTransactionByBlockHashAndIndex",
  "params":[
      "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0",
      0
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "transaction": {
            "address": "qlc_3qjky1ptg9qkzm8iertdzrnx9btjbaea33snh1w4g395xqqczye4kgcfyfs1",
            "balance": "0",
            "data": "6TrdxIkGbXR6PHT/HeyOpqcBG94BDdQErsRUiA8j1Yy/koDkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjhvJvwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjoE+UabYq+oXii83bVMt+YPMpxtOTPW90teGTuMM+LpQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEUUdBUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFFHQVMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "extra": "0000000000000000000000000000000000000000000000000000000000000000",
            "link": "e813e51a6d8abea178a2f376d532df983cca71b4e4cf5bdd2d7864ee30cf8ba5",
            "message": "0000000000000000000000000000000000000000000000000000000000000000",
            "network": "0",
            "oracle": "0",
            "povHeight": 0,
            "previous": "0000000000000000000000000000000000000000000000000000000000000000",
            "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
            "signature": "441b26cf4318cea394fe07a5e30cde18f967406a9c26158417bcd29abd5a4c79d05746f838bc42f0a7d681cf4a3b4e6b29992fcd7fa7cafe72a4e00e133d310f",
            "storage": "0",
            "timestamp": 1553990401,
            "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
            "type": "ContractSend",
            "vote": "0",
            "work": "000000000048f5b9"
        },
        "txHash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945",
        "txLookup": {
            "blockHash": "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0",
            "blockHeight": 1,
            "txIndex": 0
        }
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getTransactionByBlockHashAndIndex",
  "params":[
      "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0",
      0
  ]
}


```
:::


## pov_getTransactionByBlockHeightAndIndex
通过区块高度和交易索引查询交易信息

- **Parameters**:
  - `blockHeight`: 区块高度
  - `txIndex`: 交易索引
  
- **Returns**:
  - `transaction`: 交易结构

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getTransactionByBlockHeightAndIndex",
  "params":[
      1,
      0
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "transaction": {
            "address": "qlc_3qjky1ptg9qkzm8iertdzrnx9btjbaea33snh1w4g395xqqczye4kgcfyfs1",
            "balance": "0",
            "data": "6TrdxIkGbXR6PHT/HeyOpqcBG94BDdQErsRUiA8j1Yy/koDkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjhvJvwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjoE+UabYq+oXii83bVMt+YPMpxtOTPW90teGTuMM+LpQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEUUdBUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFFHQVMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "extra": "0000000000000000000000000000000000000000000000000000000000000000",
            "link": "e813e51a6d8abea178a2f376d532df983cca71b4e4cf5bdd2d7864ee30cf8ba5",
            "message": "0000000000000000000000000000000000000000000000000000000000000000",
            "network": "0",
            "oracle": "0",
            "povHeight": 0,
            "previous": "0000000000000000000000000000000000000000000000000000000000000000",
            "representative": "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
            "signature": "441b26cf4318cea394fe07a5e30cde18f967406a9c26158417bcd29abd5a4c79d05746f838bc42f0a7d681cf4a3b4e6b29992fcd7fa7cafe72a4e00e133d310f",
            "storage": "0",
            "timestamp": 1553990401,
            "token": "89066d747a3c74ff1dec8ea6a7011bde010dd404aec454880f23d58cbf9280e4",
            "type": "ContractSend",
            "vote": "0",
            "work": "000000000048f5b9"
        },
        "txHash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945",
        "txLookup": {
            "blockHash": "44ee8dd2e0b380a9da2e3b49822adf0530d6bf3c87746c34062f1c18c01c52b0",
            "blockHeight": 1,
            "txIndex": 0
        }
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getTransactionByBlockHeightAndIndex",
  "params":[
      1,
      0
  ]
}


```
:::

