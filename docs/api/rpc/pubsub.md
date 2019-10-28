# Introduction
:::warning
Available from go-qlc v1.3 and above
:::



From version 1.3 gqlc has experimental support for pub/sub using subscriptions as defined in the JSON-RPC 2.0 specification. This allows clients to wait for events instead of polling for them

It works by subscribing to particular events. The node will return a subscription id. For each event that matches the subscription a notification with relevant data is send together with the subscription id

Example:

```
// create subscription
>> {"id": 1, "method": "ledger_subscribe", "params": ["newBlock"]}
<< {"jsonrpc":"2.0","id":1,"result":"0xcd0c3e8af590364c09d0fa6a1210faf5"}

// incoming notifications
<< {"jsonrpc":"2.0","method":"ledger_subscription","params":{"subscription":"0xcd0c3e8af590364c09d0fa6a1210faf5","result":{"type":"State","token":"a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",<...>}}}
<< {"jsonrpc":"2.0","method":"ledger_subscription","params":{"subscription":"0xcd0c3e8af590364c09d0fa6a1210faf5","result":{"type":"State","token":"38b13da6e7425ee4f21194504c9c9ceea0b09f65da3f32bed0c36cbced44ce0b",<...>}}}

// cancel subscription
>> {"id": 1, "method": "ledger_unsubscribe", "params": ["0xcd0c3e8af590364c09d0fa6a1210faf5"]}
<< {"jsonrpc":"2.0","id":1,"result":true}
```

Notice: 

- subscriptions require a full duplex connection. gqlc offers such connections in the form of websockets and ipc 
- subscriptions are coupled to a connection. If the connection is closed all subscriptions that are created over this connection are removed


# Create subscription

Subscriptions are creates with a regular RPC call with ledger_subscribe as method and the subscription name as first parameter. If successful it returns the subscription id.


- **Parameters**: 
  - the first one is subscription name, like "balanceChange"
  - others are optional arguments
  

::: demo
```json tab:Request
{
	"id": 1,
	"method": "ledger_subscribe",
	"params": ["balanceChange","qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"]
}


```
:::

- **Returns**: 
If successful it returns the subscription id immediately。

::: demo
```json tab:Response
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0xe45c66069086940b9f555ebacc95f37e"
}


```
:::


then client keep listening to the connection, once server publish information, client can read from the connection, as:

- `subscription`: subscription id, it is unique to one subscription 
- `result`:  actual subscription info


::: demo
```json tab:Response
{
    "jsonrpc":"2.0",
    "method":"ledger_subscription",
    "params":{
        "subscription":"0xe45c66069086940b9f555ebacc95f37e",
        "result":{
            "account":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
            "balance":"60000000000000000",
            "vote":"0",
            "network":"0",
            "storage":"0",
            "oracle":"0",
            "tokens":[{
                "type":"a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582","header":"5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d","representative":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4","open":"5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d",
                "balance":"60000000000000000",
                "account":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
                "modified":1570804479,
                "blockCount":1
            }]
        }
    }
}


```
:::

# Cancel subscription

There are two ways to cancel subscription 

- if client close the websocket/ipc connection, subscriptions are cancelled immediately 
- a regular RPC call with xxx_unsubscribe as method and the subscription id as first parameter. It returns a bool indicating if the subscription was cancelled successful, detail as follow:

- **Parameters**: 
  - `string`, subscription id
  
::: demo
```json tab:Request
{
    "id": 1, 
    "method": "ledger_unsubscribe", 
    "params": ["0xe45c66069086940b9f555ebacc95f37e"]
}


```
:::

- **Returns**: 
Returns a bool indicating if the subscription was cancelled successful.

::: demo
```json tab:Response
{
    "jsonrpc":"2.0",
    "id":1,
    "result":true
}


```
:::

# Supported subscriptions

## ledger_subscription

### balanceChange

if the balance of a account change, server will publish the newest account info 

- **Parameters**: 
  - `string`, address

- **Returns**: 
  - `accountInfo` newest account info for the address


- **Example**:

::: demo
```json tab:Request
{
	"id": 1,
	"method": "ledger_subscribe",
	"params": [
        "balanceChange",
        "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"
    ]
}


```

```json tab:Response
// get response immediately if connect to server successfully  
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0xe45c66069086940b9f555ebacc95f37e"
}

// then get response once server publish infomation
{
    "jsonrpc":"2.0",
    "method":"ledger_subscription",
    "params":{
        "subscription":"0xe45c66069086940b9f555ebacc95f37e",
        "result":{
            "account":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
            "balance":"60000000000000000",
            "vote":"0",
            "network":"0",
            "storage":"0",
            "oracle":"0",
            "tokens":[{
                "type":"a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582","header":"5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d","representative":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4","open":"5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d",
                "balance":"60000000000000000",
                "account":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
                "modified":1570804479,
                "blockCount":1
            }]
        }
    }
}


```
:::

### newBlock

if there new block stored to the chain, server will publish the new block

- **Parameters**: `null`

- **Returns**: 
  - `block` block info


- **Example**:

::: demo
```json tab:Request
{
    "id":1,
    "method":"ledger_subscribe",
    "params":["newBlock"]
}


```

```json tab:Response
// get response immediately if connect to server successfully  
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0xe45c66069086940b9f555ebacc95f37e"
}

// then get response once server publish infomation
{
    "jsonrpc":"2.0",
    "method":"ledger_subscription",
    "params":{
        "subscription":"0x4e6f513c51c6848f830d44ec1ad09d76",
        "result":{
            "type":"State",
            "token":"a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582","address":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
            "balance":"12180",
            "vote":"0",
            "network":"0",
            "storage":"0",
            "oracle":"0",
            "previous":"8d01d77cea5255cecc3885f0d040e7b641c453f33344738e652b19779bd6f630",
            "link":"51f5d4b6e25d1bbf28f0788d9aec9e2ee1d5d7b5b0082275e2aba033794bc640",
            "message":"0000000000000000000000000000000000000000000000000000000000000000",
            "povHeight":0,
            "timestamp":0,
            "extra":"0000000000000000000000000000000000000000000000000000000000000000",
            "representative":"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4",
            "work":"0000000000000000",
            "signature":"c98ead9ade5a08cc7084bbe2ed77a4b4ba8492eeb855a6c295cffad23ed8030cf142222b2416eed178c8dc2c389a4f85338b56865fefc669038791547ee8af01"
        }
    }
}



```
:::



### newPending 


if there is a pending transaction of a account, server will publish the pending info 

- **Parameters**: 
  - `string`, address

- **Returns**: 
  - `pending` pending info


- **Example**:

::: demo
```json tab:Request
{
	"id": 1,
	"method": "ledger_subscribe",
	"params": [
        "newPending",
        "qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"
    ]
}


```

```json tab:Response
// get response immediately if connect to server successfully  
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0xe45c66069086940b9f555ebacc95f37e"
}

// then get response once server publish infomation
{
    "jsonrpc":"2.0",
    "method":"ledger_subscription",
    "params":{
        "subscription":"0xe45c66069086940b9f555ebacc95f37e",
        "result":{
            "source": "qlc_36z9ojcgu6891jhcae6jd4a3dmxr8urx55516y4e7rqr9bob8kec1ddpemyt",
            "amount": "30000000000",
            "type": "a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
            "tokenName": "QLC",
            "hash": "dbb764589e9e9e5b5ff7fdb1cf1a6f01e4483d7d376de71736eb4869a361110d",
            "timestamp": 1553225891
        }
    }
}


```
:::


## pov_subscription

### newBlock

if there new pov block stored to the chain, server will publish the new pov block

- **Parameters**: `null`

- **Returns**: 
  - `block` pov block header info


- **Example**:

::: demo
```json tab:Request
{
    "id":1,
    "method":"pov_subscribe",
    "params":["newBlock"]
}


```

```json tab:Response
// get response immediately if connect to server successfully  
{
    "jsonrpc":"2.0",
    "id":1,
    "result":"0x14fddac2289853ad8af1e1f98a3628e"
}

// then get response once server publish infomation
{
    "jsonrpc":"2.0",
    "method":"pov_subscription",
    "params":{
        "subscription":"0x14fddac2289853ad8af1e1f98a3628e",
        "result":{
            "basHdr":{
                "version":536871936,
                "previous":"f8d045c01da1b006e8cd75b41f06dc248005d187593dabe5806659cf3256ce0a",
                "merkleRoot":"6553e616dd738e4ca5524bd1cde99440a296a071d4d52119f9492721839b1f43",
                "timestamp":1572241896,
                "bits":504365052,
                "nonce":0,
                "hash":"da4fbd8c589c8d2834cb324c9b087a2d6bdf6d50cbd8a6d810122fd557095237",
                "height":78
            },
            "auxHdr":{
                "auxMerkleBranch":null,
                "auxMerkleIndex":0,
                "parCoinBaseTx":{
                    "version":1,
                    "txIn":[
                        {
                            "previousOutPoint":{
                                "hash":"0000000000000000000000000000000000000000000000000000000000000000",
                                "index":4294967295
                            },
                            "signatureScript":"e37cb65d183ec09af9bcb908fabe6d6dda4fbd8c589c8d2834cb324c9b087a2d6bdf6d50cbd8a6d810122fd5570952370100000000000000",
                            "sequence":4294967295
                        }
                    ],
                    "txOut":[
                        {
                            "value":1,
                            "pkScript":"51"
                        }
                    ],
                    "lockTime":0
                },
                "parCoinBaseMerkle":null,
                "parMerkleIndex":0,
                "parBlockHeader":{
                    "version":2147483647,
                    "previous":"0000000000000000000000000000000000000000000000000000000000000000",
                    "merkleRoot":"a2fb014f50aeaf2e0ae17f08a67759b8ab39f4a18fc5770bbd24bedc8e991521",
                    "timestamp":1572241896,
                    "bits":0,
                    "nonce":1413080
                },
                "parentHash":"072b492dfe3fbf27e216a15e703dd55b28167a3e8ccd77d6a655dc519defc033"
            },
            "cbtx":{
                "version":1,
                "txIns":[
                    {
                        "prevTxHash":"0000000000000000000000000000000000000000000000000000000000000000",
                        "prevTxIdx":4294967295,
                        "extra":"4e000000000000002f514c432043505520417578504f572f",
                        "sequence":4294967295
                    }
                ],
                "txOuts":[
                    {
                        "value":"456621004",
                        "address":"qlc_1gnqid9up5y998uwig44x1yfrppsdo8f9jfszgqin7pr7ixsyyae1y81w9xp"
                    },
                    {
                        "value":"114155251",
                        "address":"qlc_111111111111111111111111111111111111111111111111111ommygmckp"
                    }
                ],
                "stateHash":"b63f07aacd736c292655c42320feb6510ff8bfb70b05c1376c82be3a705ac3c3",
                "txNum":1,
                "hash":"6553e616dd738e4ca5524bd1cde99440a296a071d4d52119f9492721839b1f43"
            }
        }
    }
}

```
:::

