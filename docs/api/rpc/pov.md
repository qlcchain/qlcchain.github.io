
# PoV

**Supported protocols:**

| JSON-RPC 2.0 | Websocket | IPC | Publish–subscribe | 
|:------------:|:-----------:|:-----:|:-----:|
| &#x2713; | &#x2713; |  &#x2713;|TBD |

## pov_getFittestHeader
Return fittest block header of PoV main chain, used by send TXs

- **Parameters**:
  -  `gap`: gap before latest block header, default is 0
  
- **Returns**: 
  -  `header`: block header struct

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
        "algoEfficiency": 513,
        "algoName": "X11",
        "auxHdr": {
            "auxMerkleBranch": null,
            "auxMerkleIndex": 0,
            "parBlockHeader": {
                "bits": 0,
                "merkleRoot": "ef57beac069ac836188d5f05fa4239e1ed542802acee3dc2eaf04f8061044c10",
                "nonce": 1121457,
                "previous": "0000000000000000000000000000000000000000000000000000000000000000",
                "timestamp": 1569293765,
                "version": 2147483647
            },
            "parCoinBaseMerkle": null,
            "parCoinBaseTx": {
                "lockTime": 0,
                "txIn": [
                    {
                        "previousOutPoint": {
                            "hash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "index": 4294967295
                        },
                        "sequence": 4294967295,
                        "signatureScript": "fabe6d6deee80b8c7c71b856a4d4601097a9960b0e10589b5133f980ecdbf3599aa56f480100000000000000"
                    }
                ],
                "txOut": [
                    {
                        "pkScript": "51",
                        "value": 1
                    }
                ],
                "version": 1
            },
            "parMerkleIndex": 0,
            "parentHash": "ce6525b39dfcea582594abfc6348e9d5192169cb6948c643f5ab71e53d43cf2d"
        },
        "basHdr": {
            "bits": 504020350,
            "hash": "eee80b8c7c71b856a4d4601097a9960b0e10589b5133f980ecdbf3599aa56f48",
            "height": 1113,
            "merkleRoot": "e07a621ec6e678d789cccf092d6e23ae0a9ff5788b5c814e011c9f83e1858f7f",
            "nonce": 0,
            "previous": "0ed1d9ef3a52ee4fcc54a0c0c3c8ce8d16b3a6de4047fe03154be50ffed344de",
            "timestamp": 1569293765,
            "version": 536871936
        },
        "cbtx": {
            "hash": "e07a621ec6e678d789cccf092d6e23ae0a9ff5788b5c814e011c9f83e1858f7f",
            "stateHash": "db32fb5e2f4a5e123aea266bdc5a51dee997dfa27c7bcb2b54d7347c1d323407",
            "txIns": [
                {
                    "extra": "59040000000000002f514c432043505520417578504f572f",
                    "prevTxHash": "0000000000000000000000000000000000000000000000000000000000000000",
                    "prevTxIdx": 4294967295,
                    "sequence": 4294967295
                }
            ],
            "txNum": 1,
            "txOuts": [
                {
                    "address": "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
                    "value": "456621004"
                },
                {
                    "address": "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
                    "value": "114155251"
                }
            ],
            "version": 1
        },
        "normBits": 486890512
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getFittestHeader",
  "params":[
      0
  ]
}


```
:::


## pov_getLatestHeader
Return latest block header of PoV main chain

- **Parameters**: `null`
  
- **Returns**: 
  -  `header`: block header struct

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
        "algoEfficiency": 513,
        "algoName": "X11",
        "auxHdr": {
            "auxMerkleBranch": null,
            "auxMerkleIndex": 0,
            "parBlockHeader": {
                "bits": 0,
                "merkleRoot": "ef57beac069ac836188d5f05fa4239e1ed542802acee3dc2eaf04f8061044c10",
                "nonce": 1121457,
                "previous": "0000000000000000000000000000000000000000000000000000000000000000",
                "timestamp": 1569293765,
                "version": 2147483647
            },
            "parCoinBaseMerkle": null,
            "parCoinBaseTx": {
                "lockTime": 0,
                "txIn": [
                    {
                        "previousOutPoint": {
                            "hash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "index": 4294967295
                        },
                        "sequence": 4294967295,
                        "signatureScript": "fabe6d6deee80b8c7c71b856a4d4601097a9960b0e10589b5133f980ecdbf3599aa56f480100000000000000"
                    }
                ],
                "txOut": [
                    {
                        "pkScript": "51",
                        "value": 1
                    }
                ],
                "version": 1
            },
            "parMerkleIndex": 0,
            "parentHash": "ce6525b39dfcea582594abfc6348e9d5192169cb6948c643f5ab71e53d43cf2d"
        },
        "basHdr": {
            "bits": 504020350,
            "hash": "eee80b8c7c71b856a4d4601097a9960b0e10589b5133f980ecdbf3599aa56f48",
            "height": 1113,
            "merkleRoot": "e07a621ec6e678d789cccf092d6e23ae0a9ff5788b5c814e011c9f83e1858f7f",
            "nonce": 0,
            "previous": "0ed1d9ef3a52ee4fcc54a0c0c3c8ce8d16b3a6de4047fe03154be50ffed344de",
            "timestamp": 1569293765,
            "version": 536871936
        },
        "cbtx": {
            "hash": "e07a621ec6e678d789cccf092d6e23ae0a9ff5788b5c814e011c9f83e1858f7f",
            "stateHash": "db32fb5e2f4a5e123aea266bdc5a51dee997dfa27c7bcb2b54d7347c1d323407",
            "txIns": [
                {
                    "extra": "59040000000000002f514c432043505520417578504f572f",
                    "prevTxHash": "0000000000000000000000000000000000000000000000000000000000000000",
                    "prevTxIdx": 4294967295,
                    "sequence": 4294967295
                }
            ],
            "txNum": 1,
            "txOuts": [
                {
                    "address": "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
                    "value": "456621004"
                },
                {
                    "address": "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
                    "value": "114155251"
                }
            ],
            "version": 1
        },
        "normBits": 486890512
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
Return block header by heigth

- **Parameters**:
  - `height`: block heigth
  
- **Returns**:
  - `header`: block header struct

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHeaderByHeight",
  "params":[
      1113
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "algoEfficiency": 513,
        "algoName": "X11",
        "auxHdr": {
            "auxMerkleBranch": null,
            "auxMerkleIndex": 0,
            "parBlockHeader": {
                "bits": 0,
                "merkleRoot": "ef57beac069ac836188d5f05fa4239e1ed542802acee3dc2eaf04f8061044c10",
                "nonce": 1121457,
                "previous": "0000000000000000000000000000000000000000000000000000000000000000",
                "timestamp": 1569293765,
                "version": 2147483647
            },
            "parCoinBaseMerkle": null,
            "parCoinBaseTx": {
                "lockTime": 0,
                "txIn": [
                    {
                        "previousOutPoint": {
                            "hash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "index": 4294967295
                        },
                        "sequence": 4294967295,
                        "signatureScript": "fabe6d6deee80b8c7c71b856a4d4601097a9960b0e10589b5133f980ecdbf3599aa56f480100000000000000"
                    }
                ],
                "txOut": [
                    {
                        "pkScript": "51",
                        "value": 1
                    }
                ],
                "version": 1
            },
            "parMerkleIndex": 0,
            "parentHash": "ce6525b39dfcea582594abfc6348e9d5192169cb6948c643f5ab71e53d43cf2d"
        },
        "basHdr": {
            "bits": 504020350,
            "hash": "eee80b8c7c71b856a4d4601097a9960b0e10589b5133f980ecdbf3599aa56f48",
            "height": 1113,
            "merkleRoot": "e07a621ec6e678d789cccf092d6e23ae0a9ff5788b5c814e011c9f83e1858f7f",
            "nonce": 0,
            "previous": "0ed1d9ef3a52ee4fcc54a0c0c3c8ce8d16b3a6de4047fe03154be50ffed344de",
            "timestamp": 1569293765,
            "version": 536871936
        },
        "cbtx": {
            "hash": "e07a621ec6e678d789cccf092d6e23ae0a9ff5788b5c814e011c9f83e1858f7f",
            "stateHash": "db32fb5e2f4a5e123aea266bdc5a51dee997dfa27c7bcb2b54d7347c1d323407",
            "txIns": [
                {
                    "extra": "59040000000000002f514c432043505520417578504f572f",
                    "prevTxHash": "0000000000000000000000000000000000000000000000000000000000000000",
                    "prevTxIdx": 4294967295,
                    "sequence": 4294967295
                }
            ],
            "txNum": 1,
            "txOuts": [
                {
                    "address": "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
                    "value": "456621004"
                },
                {
                    "address": "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
                    "value": "114155251"
                }
            ],
            "version": 1
        },
        "normBits": 486890512
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHeaderByHeight",
  "params":[
      1113
  ]
}


```
:::

## pov_getHeaderByHash
Return block header by hash

- **Parameters**:
  - `hash`: block hash
  
- **Returns**:
  - `header`: block header struct

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHeaderByHash",
  "params":[
      "eee80b8c7c71b856a4d4601097a9960b0e10589b5133f980ecdbf3599aa56f48"
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "algoEfficiency": 513,
        "algoName": "X11",
        "auxHdr": {
            "auxMerkleBranch": null,
            "auxMerkleIndex": 0,
            "parBlockHeader": {
                "bits": 0,
                "merkleRoot": "ef57beac069ac836188d5f05fa4239e1ed542802acee3dc2eaf04f8061044c10",
                "nonce": 1121457,
                "previous": "0000000000000000000000000000000000000000000000000000000000000000",
                "timestamp": 1569293765,
                "version": 2147483647
            },
            "parCoinBaseMerkle": null,
            "parCoinBaseTx": {
                "lockTime": 0,
                "txIn": [
                    {
                        "previousOutPoint": {
                            "hash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "index": 4294967295
                        },
                        "sequence": 4294967295,
                        "signatureScript": "fabe6d6deee80b8c7c71b856a4d4601097a9960b0e10589b5133f980ecdbf3599aa56f480100000000000000"
                    }
                ],
                "txOut": [
                    {
                        "pkScript": "51",
                        "value": 1
                    }
                ],
                "version": 1
            },
            "parMerkleIndex": 0,
            "parentHash": "ce6525b39dfcea582594abfc6348e9d5192169cb6948c643f5ab71e53d43cf2d"
        },
        "basHdr": {
            "bits": 504020350,
            "hash": "eee80b8c7c71b856a4d4601097a9960b0e10589b5133f980ecdbf3599aa56f48",
            "height": 1113,
            "merkleRoot": "e07a621ec6e678d789cccf092d6e23ae0a9ff5788b5c814e011c9f83e1858f7f",
            "nonce": 0,
            "previous": "0ed1d9ef3a52ee4fcc54a0c0c3c8ce8d16b3a6de4047fe03154be50ffed344de",
            "timestamp": 1569293765,
            "version": 536871936
        },
        "cbtx": {
            "hash": "e07a621ec6e678d789cccf092d6e23ae0a9ff5788b5c814e011c9f83e1858f7f",
            "stateHash": "db32fb5e2f4a5e123aea266bdc5a51dee997dfa27c7bcb2b54d7347c1d323407",
            "txIns": [
                {
                    "extra": "59040000000000002f514c432043505520417578504f572f",
                    "prevTxHash": "0000000000000000000000000000000000000000000000000000000000000000",
                    "prevTxIdx": 4294967295,
                    "sequence": 4294967295
                }
            ],
            "txNum": 1,
            "txOuts": [
                {
                    "address": "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
                    "value": "456621004"
                },
                {
                    "address": "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
                    "value": "114155251"
                }
            ],
            "version": 1
        },
        "normBits": 486890512
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHeaderByHash",
  "params":[
      "eee80b8c7c71b856a4d4601097a9960b0e10589b5133f980ecdbf3599aa56f48"
  ]
}


```
:::


## pov_batchGetHeadersByHeight
Return lots of block headers by height

- **Parameters**:
  - `height`: block height
  - `count`: block count
  - `direction`: true - ascend(forward), false - descend(backward)

- **Returns**:
  - `count`: block count
  - `headers`: block header list

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
                "algoEfficiency": 513,
                "algoName": "X11",
                "auxHdr": {
                    "auxMerkleBranch": null,
                    "auxMerkleIndex": 0,
                    "parBlockHeader": {
                        "bits": 0,
                        "merkleRoot": "8d7de26740218b87932f6c9e2b80f3540dc3d08e649dc1298a08bf950ba6638b",
                        "nonce": 2793,
                        "previous": "0000000000000000000000000000000000000000000000000000000000000000",
                        "timestamp": 1569225086,
                        "version": 2147483647
                    },
                    "parCoinBaseMerkle": null,
                    "parCoinBaseTx": {
                        "lockTime": 0,
                        "txIn": [
                            {
                                "previousOutPoint": {
                                    "hash": "0000000000000000000000000000000000000000000000000000000000000000",
                                    "index": 4294967295
                                },
                                "sequence": 4294967295,
                                "signatureScript": "fabe6d6df03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f0100000000000000"
                            }
                        ],
                        "txOut": [
                            {
                                "pkScript": "51",
                                "value": 1
                            }
                        ],
                        "version": 1
                    },
                    "parMerkleIndex": 0,
                    "parentHash": "3aaf05ef01918183f02c96fb4ea7105e6b5c8466ef5b35c3e26d188c5251ef7b"
                },
                "basHdr": {
                    "bits": 522194911,
                    "hash": "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
                    "height": 1,
                    "merkleRoot": "f89b866902702efc89c0e368a0a8248323dd02486cb38f15d1988a8b03c2fe86",
                    "nonce": 0,
                    "previous": "ceefd0a85f48ded0304781438e1c6cda700798a19659d94caad22f206e0a0000",
                    "timestamp": 1569225086,
                    "version": 536871936
                },
                "cbtx": {
                    "hash": "a8f464e23be86b1dbb2f7e35916843a59e3b232f57229923783ae2387269dace",
                    "stateHash": "ab62d9acce180943e1cab1bd0ee1e0fcbf5d064a2955c9cfc49f863dab892a75",
                    "txIns": [
                        {
                            "extra": "01000000000000002f514c432043505520417578504f572f",
                            "prevTxHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "prevTxIdx": 4294967295,
                            "sequence": 4294967295
                        }
                    ],
                    "txNum": 5,
                    "txOuts": [
                        {
                            "address": "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
                            "value": "456621004"
                        },
                        {
                            "address": "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
                            "value": "114155251"
                        }
                    ],
                    "version": 1
                },
                "normBits": 504365039
            },
            {
                "algoEfficiency": 513,
                "algoName": "X11",
                "auxHdr": {
                    "auxMerkleBranch": null,
                    "auxMerkleIndex": 0,
                    "parBlockHeader": {
                        "bits": 0,
                        "merkleRoot": "a534370b8b33b0931ca6577bc58261bda31588ec2500577fe1fd633fc10f9665",
                        "nonce": 4376,
                        "previous": "0000000000000000000000000000000000000000000000000000000000000000",
                        "timestamp": 1569225086,
                        "version": 2147483647
                    },
                    "parCoinBaseMerkle": null,
                    "parCoinBaseTx": {
                        "lockTime": 0,
                        "txIn": [
                            {
                                "previousOutPoint": {
                                    "hash": "0000000000000000000000000000000000000000000000000000000000000000",
                                    "index": 4294967295
                                },
                                "sequence": 4294967295,
                                "signatureScript": "fabe6d6da6fcbaf2754f09ce2a3df29bc120b5e29901b705ff8016353114ae7d0fc2feed0100000000000000"
                            }
                        ],
                        "txOut": [
                            {
                                "pkScript": "51",
                                "value": 1
                            }
                        ],
                        "version": 1
                    },
                    "parMerkleIndex": 0,
                    "parentHash": "3dff588c0f3e5146a89a791329a172e3c5df30b5ee8dc9b338ec9fa75e72f097"
                },
                "basHdr": {
                    "bits": 522194910,
                    "hash": "a6fcbaf2754f09ce2a3df29bc120b5e29901b705ff8016353114ae7d0fc2feed",
                    "height": 2,
                    "merkleRoot": "33209fd97c66a428a492c75a9652be46210d6deb50b7d76f3917674f1d6b56ff",
                    "nonce": 0,
                    "previous": "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
                    "timestamp": 1569225086,
                    "version": 536871936
                },
                "cbtx": {
                    "hash": "33209fd97c66a428a492c75a9652be46210d6deb50b7d76f3917674f1d6b56ff",
                    "stateHash": "ab62d9acce180943e1cab1bd0ee1e0fcbf5d064a2955c9cfc49f863dab892a75",
                    "txIns": [
                        {
                            "extra": "02000000000000002f514c432043505520417578504f572f",
                            "prevTxHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "prevTxIdx": 4294967295,
                            "sequence": 4294967295
                        }
                    ],
                    "txNum": 1,
                    "txOuts": [
                        {
                            "address": "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
                            "value": "456621004"
                        },
                        {
                            "address": "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
                            "value": "114155251"
                        }
                    ],
                    "version": 1
                },
                "normBits": 504365039
            },
            {
                "algoEfficiency": 513,
                "algoName": "X11",
                "auxHdr": {
                    "auxMerkleBranch": null,
                    "auxMerkleIndex": 0,
                    "parBlockHeader": {
                        "bits": 0,
                        "merkleRoot": "1666bf7c8afd9b70dae544486b6d1a146720b0719dfd420b5922ec9ae3c91c74",
                        "nonce": 44,
                        "previous": "0000000000000000000000000000000000000000000000000000000000000000",
                        "timestamp": 1569225086,
                        "version": 2147483647
                    },
                    "parCoinBaseMerkle": null,
                    "parCoinBaseTx": {
                        "lockTime": 0,
                        "txIn": [
                            {
                                "previousOutPoint": {
                                    "hash": "0000000000000000000000000000000000000000000000000000000000000000",
                                    "index": 4294967295
                                },
                                "sequence": 4294967295,
                                "signatureScript": "fabe6d6dcc8a190172d6f55fb207fd68a676cc082e1f8d7067f41e39a4788014c7e1d1600100000000000000"
                            }
                        ],
                        "txOut": [
                            {
                                "pkScript": "51",
                                "value": 1
                            }
                        ],
                        "version": 1
                    },
                    "parMerkleIndex": 0,
                    "parentHash": "6b576fd1584a2517061150934e36007f1bd91bea74921a7713233d416bd928e0"
                },
                "basHdr": {
                    "bits": 522194909,
                    "hash": "cc8a190172d6f55fb207fd68a676cc082e1f8d7067f41e39a4788014c7e1d160",
                    "height": 3,
                    "merkleRoot": "f54013f1bdd83ac190339d6fbc28beb4c935ea3919eb9a1ce7b640e20d9774e3",
                    "nonce": 0,
                    "previous": "a6fcbaf2754f09ce2a3df29bc120b5e29901b705ff8016353114ae7d0fc2feed",
                    "timestamp": 1569225086,
                    "version": 536871936
                },
                "cbtx": {
                    "hash": "f54013f1bdd83ac190339d6fbc28beb4c935ea3919eb9a1ce7b640e20d9774e3",
                    "stateHash": "ab62d9acce180943e1cab1bd0ee1e0fcbf5d064a2955c9cfc49f863dab892a75",
                    "txIns": [
                        {
                            "extra": "03000000000000002f514c432043505520417578504f572f",
                            "prevTxHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "prevTxIdx": 4294967295,
                            "sequence": 4294967295
                        }
                    ],
                    "txNum": 1,
                    "txOuts": [
                        {
                            "address": "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
                            "value": "456621004"
                        },
                        {
                            "address": "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
                            "value": "114155251"
                        }
                    ],
                    "version": 1
                },
                "normBits": 504365038
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
Return latest full block of PoV main chain

- **Parameters**:
  - `txOffset`: return transcations from offset in block, default is 0
  - `txLimit`: return transcations not excced limit, default is 100
  
- **Returns**: 
  -  `block`: block struct

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLatestBlock",
  "params":[
      0,
      10
    ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "algoEfficiency": 513,
        "algoName": "X11",
        "body": {
            "txs": [
                {
                    "hash": "a8f464e23be86b1dbb2f7e35916843a59e3b232f57229923783ae2387269dace"
                },
                {
                    "hash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945"
                },
                {
                    "hash": "5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d"
                },
                {
                    "hash": "424b367da2e0ff991d3086f599ce26547b80ae948b209f1cb7d63e19231ab213"
                },
                {
                    "hash": "8b54787c668dddd4f22ad64a8b0d241810871b9a52a989eb97670f345ad5dc90"
                }
            ]
        },
        "header": {
            "auxHdr": {
                "auxMerkleBranch": null,
                "auxMerkleIndex": 0,
                "parBlockHeader": {
                    "bits": 0,
                    "merkleRoot": "8d7de26740218b87932f6c9e2b80f3540dc3d08e649dc1298a08bf950ba6638b",
                    "nonce": 2793,
                    "previous": "0000000000000000000000000000000000000000000000000000000000000000",
                    "timestamp": 1569225086,
                    "version": 2147483647
                },
                "parCoinBaseMerkle": null,
                "parCoinBaseTx": {
                    "lockTime": 0,
                    "txIn": [
                        {
                            "previousOutPoint": {
                                "hash": "0000000000000000000000000000000000000000000000000000000000000000",
                                "index": 4294967295
                            },
                            "sequence": 4294967295,
                            "signatureScript": "fabe6d6df03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f0100000000000000"
                        }
                    ],
                    "txOut": [
                        {
                            "pkScript": "51",
                            "value": 1
                        }
                    ],
                    "version": 1
                },
                "parMerkleIndex": 0,
                "parentHash": "3aaf05ef01918183f02c96fb4ea7105e6b5c8466ef5b35c3e26d188c5251ef7b"
            },
            "basHdr": {
                "bits": 522194911,
                "hash": "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
                "height": 1,
                "merkleRoot": "f89b866902702efc89c0e368a0a8248323dd02486cb38f15d1988a8b03c2fe86",
                "nonce": 0,
                "previous": "ceefd0a85f48ded0304781438e1c6cda700798a19659d94caad22f206e0a0000",
                "timestamp": 1569225086,
                "version": 536871936
            },
            "cbtx": {
                "hash": "a8f464e23be86b1dbb2f7e35916843a59e3b232f57229923783ae2387269dace",
                "stateHash": "ab62d9acce180943e1cab1bd0ee1e0fcbf5d064a2955c9cfc49f863dab892a75",
                "txIns": [
                    {
                        "extra": "01000000000000002f514c432043505520417578504f572f",
                        "prevTxHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "prevTxIdx": 4294967295,
                        "sequence": 4294967295
                    }
                ],
                "txNum": 5,
                "txOuts": [
                    {
                        "address": "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
                        "value": "456621004"
                    },
                    {
                        "address": "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
                        "value": "114155251"
                    }
                ],
                "version": 1
            }
        },
        "normBits": 504365039
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLatestBlock",
  "params":[
      0,
      10
  ]
}


```
:::

## pov_getBlockByHeight
Return full block by heigth

- **Parameters**:
  - `height`: block heigth
  - `txOffset`: return transcations from offset in block, default is 0
  - `txLimit`: return transcations not excced limit, default is 100
  
- **Returns**:
  - `block`: block struct

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getBlockByHeight",
  "params":[
      1,
      1,
      10
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "algoEfficiency": 513,
        "algoName": "X11",
        "body": {
            "txs": [
                {
                    "hash": "a8f464e23be86b1dbb2f7e35916843a59e3b232f57229923783ae2387269dace"
                },
                {
                    "hash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945"
                },
                {
                    "hash": "5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d"
                },
                {
                    "hash": "424b367da2e0ff991d3086f599ce26547b80ae948b209f1cb7d63e19231ab213"
                },
                {
                    "hash": "8b54787c668dddd4f22ad64a8b0d241810871b9a52a989eb97670f345ad5dc90"
                }
            ]
        },
        "header": {
            "auxHdr": {
                "auxMerkleBranch": null,
                "auxMerkleIndex": 0,
                "parBlockHeader": {
                    "bits": 0,
                    "merkleRoot": "8d7de26740218b87932f6c9e2b80f3540dc3d08e649dc1298a08bf950ba6638b",
                    "nonce": 2793,
                    "previous": "0000000000000000000000000000000000000000000000000000000000000000",
                    "timestamp": 1569225086,
                    "version": 2147483647
                },
                "parCoinBaseMerkle": null,
                "parCoinBaseTx": {
                    "lockTime": 0,
                    "txIn": [
                        {
                            "previousOutPoint": {
                                "hash": "0000000000000000000000000000000000000000000000000000000000000000",
                                "index": 4294967295
                            },
                            "sequence": 4294967295,
                            "signatureScript": "fabe6d6df03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f0100000000000000"
                        }
                    ],
                    "txOut": [
                        {
                            "pkScript": "51",
                            "value": 1
                        }
                    ],
                    "version": 1
                },
                "parMerkleIndex": 0,
                "parentHash": "3aaf05ef01918183f02c96fb4ea7105e6b5c8466ef5b35c3e26d188c5251ef7b"
            },
            "basHdr": {
                "bits": 522194911,
                "hash": "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
                "height": 1,
                "merkleRoot": "f89b866902702efc89c0e368a0a8248323dd02486cb38f15d1988a8b03c2fe86",
                "nonce": 0,
                "previous": "ceefd0a85f48ded0304781438e1c6cda700798a19659d94caad22f206e0a0000",
                "timestamp": 1569225086,
                "version": 536871936
            },
            "cbtx": {
                "hash": "a8f464e23be86b1dbb2f7e35916843a59e3b232f57229923783ae2387269dace",
                "stateHash": "ab62d9acce180943e1cab1bd0ee1e0fcbf5d064a2955c9cfc49f863dab892a75",
                "txIns": [
                    {
                        "extra": "01000000000000002f514c432043505520417578504f572f",
                        "prevTxHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "prevTxIdx": 4294967295,
                        "sequence": 4294967295
                    }
                ],
                "txNum": 5,
                "txOuts": [
                    {
                        "address": "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
                        "value": "456621004"
                    },
                    {
                        "address": "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
                        "value": "114155251"
                    }
                ],
                "version": 1
            }
        },
        "normBits": 504365039
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getBlockByHeight",
  "params":[
      1,
      0,
      10
  ]
}


```
:::


## pov_getBlockByHash
Return full block by hash

- **Parameters**:
  - `hash`: block hash
  - `txOffset`: return transcations from offset in block, default is 0
  - `txLimit`: return transcations not excced limit, default is 100
  
- **Returns**:
  - `block`: block struct

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getBlockByHash",
  "params":[
      "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
      0,
      10
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "algoEfficiency": 513,
        "algoName": "X11",
        "body": {
            "txs": [
                {
                    "hash": "a8f464e23be86b1dbb2f7e35916843a59e3b232f57229923783ae2387269dace"
                },
                {
                    "hash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945"
                },
                {
                    "hash": "5594c690c3618a170a77d2696688f908efec4da2b94363fcb96749516307031d"
                },
                {
                    "hash": "424b367da2e0ff991d3086f599ce26547b80ae948b209f1cb7d63e19231ab213"
                },
                {
                    "hash": "8b54787c668dddd4f22ad64a8b0d241810871b9a52a989eb97670f345ad5dc90"
                }
            ]
        },
        "header": {
            "auxHdr": {
                "auxMerkleBranch": null,
                "auxMerkleIndex": 0,
                "parBlockHeader": {
                    "bits": 0,
                    "merkleRoot": "8d7de26740218b87932f6c9e2b80f3540dc3d08e649dc1298a08bf950ba6638b",
                    "nonce": 2793,
                    "previous": "0000000000000000000000000000000000000000000000000000000000000000",
                    "timestamp": 1569225086,
                    "version": 2147483647
                },
                "parCoinBaseMerkle": null,
                "parCoinBaseTx": {
                    "lockTime": 0,
                    "txIn": [
                        {
                            "previousOutPoint": {
                                "hash": "0000000000000000000000000000000000000000000000000000000000000000",
                                "index": 4294967295
                            },
                            "sequence": 4294967295,
                            "signatureScript": "fabe6d6df03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f0100000000000000"
                        }
                    ],
                    "txOut": [
                        {
                            "pkScript": "51",
                            "value": 1
                        }
                    ],
                    "version": 1
                },
                "parMerkleIndex": 0,
                "parentHash": "3aaf05ef01918183f02c96fb4ea7105e6b5c8466ef5b35c3e26d188c5251ef7b"
            },
            "basHdr": {
                "bits": 522194911,
                "hash": "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
                "height": 1,
                "merkleRoot": "f89b866902702efc89c0e368a0a8248323dd02486cb38f15d1988a8b03c2fe86",
                "nonce": 0,
                "previous": "ceefd0a85f48ded0304781438e1c6cda700798a19659d94caad22f206e0a0000",
                "timestamp": 1569225086,
                "version": 536871936
            },
            "cbtx": {
                "hash": "a8f464e23be86b1dbb2f7e35916843a59e3b232f57229923783ae2387269dace",
                "stateHash": "ab62d9acce180943e1cab1bd0ee1e0fcbf5d064a2955c9cfc49f863dab892a75",
                "txIns": [
                    {
                        "extra": "01000000000000002f514c432043505520417578504f572f",
                        "prevTxHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "prevTxIdx": 4294967295,
                        "sequence": 4294967295
                    }
                ],
                "txNum": 5,
                "txOuts": [
                    {
                        "address": "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
                        "value": "456621004"
                    },
                    {
                        "address": "qlc_111111111111111111111111111111111111111111111111111ommygmckp",
                        "value": "114155251"
                    }
                ],
                "version": 1
            }
        },
        "normBits": 504365039
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getBlockByHash",
  "params":[
      "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
      0,
      10
  ]
}


```
:::


## pov_getTransaction
Return transaction by tx hash

- **Parameters**:
  - `txHash`: transaction hash
  
- **Returns**:
  - `transaction`: transaction struct

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
        "txHash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945",
        "txLookup": {
            "blockHash": "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
            "blockHeight": 1,
            "txIndex": 1
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
Return transaction by block hash and tx index

- **Parameters**:
  - `blockHash`: block hash
  - `txIndex`: tx index
  
- **Returns**:
  - `transaction`: transaction struct

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getTransactionByBlockHashAndIndex",
  "params":[
      "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
      1
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "txHash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945",
        "txLookup": {
            "blockHash": "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
            "blockHeight": 1,
            "txIndex": 1
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
      "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
      1
  ]
}


```
:::


## pov_getTransactionByBlockHeightAndIndex
Return transaction by block height and tx index

- **Parameters**:
  - `blockHeight`: block height
  - `txIndex`: tx index
  
- **Returns**:
  - `transaction`: transaction struct

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getTransactionByBlockHeightAndIndex",
  "params":[
      1,
      1
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "txHash": "f798089896ffdf45ccce2e039666014b8c666ea0f47f0df4ee7e73b49dac0945",
        "txLookup": {
            "blockHash": "f03f08424180fe5a88c02ed8a58679254e71a43c7dbf5058d5664ee66b2e718f",
            "blockHeight": 1,
            "txIndex": 1
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


## pov_getLatestAccountState
Return latest account state

- **Parameters**:
  - `address`: account address
  
- **Returns**:
  - `accountState`: account state
  - `repState`: representative state

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLatestAccountState",
  "params":[
      "qlc_18yjtai4cwecsn3aasxx7gky6sprxdpkkcyjm9jxhynw5eq4p4ntm16shxmp"
  ]
}


```

```json tab:Response
{
    "jsonrpc":"2.0",
    "id":3,
    "result":{
        "accountState":{
            "balance":"20000000000000000",
            "vote":"100000000000000",
            "network":"0",
            "storage":"0",
            "oracle":"0",
            "tokenStates":[
                {
                    "type":"a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
                    "hash":"6ed03413f010575d9c87de96313bb564c14737e7a77627da6294464947d80c87",
                    "representative":"qlc_18yjtai4cwecsn3aasxx7gky6sprxdpkkcyjm9jxhynw5eq4p4ntm16shxmp",
                    "balance":"20000000000000000"
                }
            ]
        },
        "repState":{
            "balance":"20000000000000000",
            "vote":"100000000000000",
            "network":"0",
            "storage":"0",
            "oracle":"0",
            "total":"20100000000000000",
            "status":1,
            "height":1234
        }
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLatestAccountState",
  "params":[
      "qlc_18yjtai4cwecsn3aasxx7gky6sprxdpkkcyjm9jxhynw5eq4p4ntm16shxmp"
  ]
}


```
:::


## pov_getAccountStateByBlockHeight
Return account state by block height

- **Parameters**:
  - `address`: account address
  - `height`: block height
  
- **Returns**:
  - `accountState`: account state
  - `repState`: representative state

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLatestAccountState",
  "params":[
      "qlc_18yjtai4cwecsn3aasxx7gky6sprxdpkkcyjm9jxhynw5eq4p4ntm16shxmp",
      1320
  ]
}


```

```json tab:Response
{
    "jsonrpc":"2.0",
    "id":3,
    "result":{
        "accountState":{
            "balance":"20000000000000000",
            "vote":"100000000000000",
            "network":"0",
            "storage":"0",
            "oracle":"0",
            "tokenStates":[
                {
                    "type":"a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
                    "hash":"6ed03413f010575d9c87de96313bb564c14737e7a77627da6294464947d80c87",
                    "representative":"qlc_18yjtai4cwecsn3aasxx7gky6sprxdpkkcyjm9jxhynw5eq4p4ntm16shxmp",
                    "balance":"20000000000000000"
                }
            ]
        },
        "repState":{
            "balance":"20000000000000000",
            "vote":"100000000000000",
            "network":"0",
            "storage":"0",
            "oracle":"0",
            "total":"20100000000000000",
            "status":1,
            "height":1234
        }
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getAccountStateByBlockHeight",
  "params":[
      "qlc_18yjtai4cwecsn3aasxx7gky6sprxdpkkcyjm9jxhynw5eq4p4ntm16shxmp",
      1320
  ]
}


```
:::


## pov_getAccountStateByBlockHash
Return account state by block hash

- **Parameters**:
  - `address`: account address
  - `hash`: block hash
  
- **Returns**:
  - `accountState`: account state
  - `repState`: representative state

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getAccountStateByBlockHash",
  "params":[
      "qlc_18yjtai4cwecsn3aasxx7gky6sprxdpkkcyjm9jxhynw5eq4p4ntm16shxmp",
      "4eaad546467098976f3e46f5a1439376b83c6b5b1424776560ceb4283177c639"
  ]
}


```

```json tab:Response
{
    "jsonrpc":"2.0",
    "id":3,
    "result":{
        "accountState":{
            "balance":"20000000000000000",
            "vote":"100000000000000",
            "network":"0",
            "storage":"0",
            "oracle":"0",
            "tokenStates":[
                {
                    "type":"a7e8fa30c063e96a489a47bc43909505bd86735da4a109dca28be936118a8582",
                    "hash":"6ed03413f010575d9c87de96313bb564c14737e7a77627da6294464947d80c87",
                    "representative":"qlc_18yjtai4cwecsn3aasxx7gky6sprxdpkkcyjm9jxhynw5eq4p4ntm16shxmp",
                    "balance":"20000000000000000"
                }
            ]
        },
        "repState":{
            "balance":"20000000000000000",
            "vote":"100000000000000",
            "network":"0",
            "storage":"0",
            "oracle":"0",
            "total":"20100000000000000",
            "status":1,
            "height":1234
        }
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getAccountStateByBlockHash",
  "params":[
      "qlc_18yjtai4cwecsn3aasxx7gky6sprxdpkkcyjm9jxhynw5eq4p4ntm16shxmp",
      "4eaad546467098976f3e46f5a1439376b83c6b5b1424776560ceb4283177c639"
  ]
}


```
:::


## pov_getHashInfo
Return the estimated network hashes per second based on the last n blocks

- **Parameters**:
  - `height`: block height, default is 0 for latest block
  - `count`: block count, defautl is 120
  
- **Returns**:
  - `chainHashPS`: hashes per second of total chain
  - `sha256dHashPS`: hashes per second of sha256d chain
  - `x11HashPS`: hashes per second of x11 chain
  - `scryptHashPS`: hashes per second of scrypt chain

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHashInfo",
  "params":[
      0,
      0
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "chainHashPS": 515524,
        "scryptHashPS": 0,
        "sha256dHashPS": 499708,
        "x11HashPS": 15815
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getHashInfo",
  "params":[
      0,
      0
  ]
}


```
:::


## pov_getMiningInfo
Return mining info

- **Parameters**: `null`
  
- **Returns**:
  - `hashInfo`: hash info for latest 120 blocks
  - `pooledTx`: pending tx count
  - `syncState`: sync state

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getMiningInfo",
  "params":[]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "algoEfficiency": 513,
        "algoName": "",
        "blockNum": 1124,
        "cpuMining": false,
        "currentBlockSize": 920,
        "currentBlockTx": 1,
        "difficultyRatio": 513.00146771,
        "hashInfo": {
            "chainHashPS": 525078,
            "scryptHashPS": 0,
            "sha256dHashPS": 509024,
            "x11HashPS": 16053
        },
        "minerAddr": "",
        "pooledTx": 0,
        "syncState": 2
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getMiningInfo",
  "params":[]
}


```
:::


## pov_getMinerStats
Return miner statistics

- **Parameters**:
  - `addresses`: addresses of miners
  
- **Returns**:
  - `minerStats`: statistics of all miners

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getMinerStats",
  "params":[[]]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "latestBlockHeight": 1131,
        "minerCount": 4,
        "minerStats": {
            "qlc_176f1aj1361y5i4yu8ccyp8xphjcbxmmu4ryh4jecnsncse1eiud7uncz8bj": {
                "firstBlockHeight": 0,
                "firstBlockTime": "2019-08-21T08:00:00+08:00",
                "isOnline": false,
                "lastBlockHeight": 0,
                "lastBlockTime": "2019-08-21T08:00:00+08:00",
                "mainBlockNum": 1,
                "mainRewardAmount": "456621004"
            },
            "qlc_18yjtai4cwecsn3aasxx7gky6sprxdpkkcyjm9jxhynw5eq4p4ntm16shxmp": {
                "firstBlockHeight": 20,
                "firstBlockTime": "2019-09-23T15:52:19+08:00",
                "isOnline": true,
                "lastBlockHeight": 1125,
                "lastBlockTime": "2019-09-24T11:14:18+08:00",
                "mainBlockNum": 78,
                "mainRewardAmount": "35616438312"
            },
            "qlc_1qiox3611cuyg7ap597zuwfssehezio3on5nhbtx5xchsm6xgbz49frwacio": {
                "firstBlockHeight": 123,
                "firstBlockTime": "2019-09-23T16:17:41+08:00",
                "isOnline": false,
                "lastBlockHeight": 135,
                "lastBlockTime": "2019-09-23T16:22:06+08:00",
                "mainBlockNum": 9,
                "mainRewardAmount": "4109589036"
            },
            "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz": {
                "firstBlockHeight": 1,
                "firstBlockTime": "2019-09-23T15:51:26+08:00",
                "isOnline": true,
                "lastBlockHeight": 1131,
                "lastBlockTime": "2019-09-24T11:20:27+08:00",
                "mainBlockNum": 1044,
                "mainRewardAmount": "476712328176"
            }
        },
        "onlineCount": 2,
        "totalBlockNum": 1132
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getMinerStats",
  "params":[[]]
}


```
:::


## pov_getWork
Return miner work of next block template

- **Parameters**:
  - `miner`: address of miner
  - `algo`: algorithm name of pow, such as SHA256D/X11/SCRYPT
  
- **Returns**:
  - `workHash`: hash of work, used for sumbitWork to identify block template
  - `previous`: hash of previous block, hash's byte order is little-endian
  - `merkleBranch`: merkle branch of txs, hash's byte order is little-endian
  - `version`: block version
  - `height`: block height
  - `bits`: block target bits
  - `minTime`: block timestamp min time
  - `coinbaseData1`: data of coinbase1, format is hex string of bytes
  - `coinbaseData2`: data of coinbase2, format is hex string of bytes

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getWork",
  "params":[
      "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
      "X11"
  ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "workHash":"295b1dd34a9cd75360cb00a9020d770feda2868c7dc8faa2960bb9162c58f20d",
        "version":536871936,
        "previous":"b2a1493d5ddc305168227581b6f9506580a25509b4b68edd9c6e0c95228c2151",
        "bits":504270679,
        "height":1141,
        "minTime":1569295439,
        "merkleBranch":[],
        "coinbaseData1":"01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff",
        "coinbaseData2":"ffffffff02c9add62cbd8ed444fe5166c7c2dd6b7ebd16e284b31700d246960e5c1488ec231b377bcc000000000000000000000000000000000000000000000000000000000000001506cddef361a43727342802093613777518a8781edbfdbb4dcc4f113442667a7ccec7f7b901000000"
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getWork",
  "params":[
      "qlc_3kfftrpdu5pnamz74sp9rdgppzox4ujaberq15b6f7igdicaju35qz35s3uz",
      "X11"
  ]
}


```
:::


## pov_submitWork
Submit miner work of next generated block

- **Parameters**:
  - `work`: submit work
  
- **Returns**: `null`

- **Example**:

::: demo

```json tab:Request
{
    "jsonrpc":"2.0",
    "id":3,
    "method":"pov_submitWork",
    "params":[
        {
            "workHash":"295b1dd34a9cd75360cb00a9020d770feda2868c7dc8faa2960bb9162c58f20d",
            "blockHash":"7d9b503254d94b34b81e4fa9fbf578d30c3dcb7e5248aee0674a55567a687d07",
            "merkleRoot":"9e542106174cd1c9d7db714d981d4d2b16a554f543dad25ceca87bb1db695050",
            "timestamp":1569295729,
            "nonce":0,
            "coinbaseExtra":"75040000000000002f514c432043505520417578504f572f",
            "coinbaseHash":"9e542106174cd1c9d7db714d981d4d2b16a554f543dad25ceca87bb1db695050",
            "auxPow":{
                "auxMerkleBranch":[

                ],
                "auxMerkleIndex":0,
                "parCoinBaseTx":{
                    "version":1,
                    "txIn":[
                        {
                            "previousOutPoint":{
                                "hash":"0000000000000000000000000000000000000000000000000000000000000000",
                                "index":4294967295
                            },
                            "signatureScript":"fabe6d6d7d9b503254d94b34b81e4fa9fbf578d30c3dcb7e5248aee0674a55567a687d070100000000000000",
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
                "parCoinBaseMerkle":[

                ],
                "parMerkleIndex":0,
                "parBlockHeader":{
                    "version":2147483647,
                    "previous":"0000000000000000000000000000000000000000000000000000000000000000",
                    "merkleRoot":"c319b561c69abe632581d66ad56fd4da50129efda047f284fe93f6f983d2dbf5",
                    "timestamp":1569295729,
                    "bits":0,
                    "nonce":140464
                },
                "parentHash":"4ecf98d84e21262a56df40707268f180d4dd1e9b58604e4ddd561b52036ce95b"
            }
        }
    ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": null
}


```

```json test
{
    "jsonrpc":"2.0",
    "id":3,
    "method":"pov_submitWork",
    "params":[
        {
            "workHash":"295b1dd34a9cd75360cb00a9020d770feda2868c7dc8faa2960bb9162c58f20d",
            "blockHash":"7d9b503254d94b34b81e4fa9fbf578d30c3dcb7e5248aee0674a55567a687d07",
            "merkleRoot":"9e542106174cd1c9d7db714d981d4d2b16a554f543dad25ceca87bb1db695050",
            "timestamp":1569295729,
            "nonce":0,
            "coinbaseExtra":"75040000000000002f514c432043505520417578504f572f",
            "coinbaseHash":"9e542106174cd1c9d7db714d981d4d2b16a554f543dad25ceca87bb1db695050",
            "auxPow":{
                "auxMerkleBranch":[

                ],
                "auxMerkleIndex":0,
                "parCoinBaseTx":{
                    "version":1,
                    "txIn":[
                        {
                            "previousOutPoint":{
                                "hash":"0000000000000000000000000000000000000000000000000000000000000000",
                                "index":4294967295
                            },
                            "signatureScript":"fabe6d6d7d9b503254d94b34b81e4fa9fbf578d30c3dcb7e5248aee0674a55567a687d070100000000000000",
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
                "parCoinBaseMerkle":[

                ],
                "parMerkleIndex":0,
                "parBlockHeader":{
                    "version":2147483647,
                    "previous":"0000000000000000000000000000000000000000000000000000000000000000",
                    "merkleRoot":"c319b561c69abe632581d66ad56fd4da50129efda047f284fe93f6f983d2dbf5",
                    "timestamp":1569295729,
                    "bits":0,
                    "nonce":140464
                },
                "parentHash":"4ecf98d84e21262a56df40707268f180d4dd1e9b58604e4ddd561b52036ce95b"
            }
        }
    ]
}


```
:::


## pov_getLastNHourInfo
Return block statistics of last n hours.
Statistics cycle must be between 4 and 24 hours and multiper of 2 hours

- **Parameters**:
  - `endHeight`: pov block height, 0 is latest block height.
  - `timeSpan`: range should be in range [2 ~ 24] hour or [2*3600, 24*3600] seconds, 0 is 24 hour.
  
- **Returns**:
  - `HourItemList`: statistics of n hours

- **Example**:

::: demo

```json tab:Request
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLastNHourInfo",
  "params":[
      0,
      0
    ]
}


```

```json tab:Response
{
    "id": "1",
    "jsonrpc": "2.0",
    "result": {
        "AllBlockNum": 1311,
        "AllTxNum": 1526,
        "AuxBlockNum": 122,
        "AvgBlockPerHour": 54,
        "AvgTxPerBlock": 1,
        "AvgTxPerHour": 63,
        "HourItemList": [
            {
                "AllBlockNum": 58,
                "AllMinerReward": "26484018232",
                "AllRepReward": "6621004558",
                "AllTxNum": 60,
                "AuxBlockNum": 12,
                "AvgTxPerBlock": 1,
                "Hour": 0,
                "MaxTxPerBlock": 3,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 38,
                "Sha256dBlockNum": 7,
                "X11BlockNum": 13
            },
            {
                "AllBlockNum": 51,
                "AllMinerReward": "23287671204",
                "AllRepReward": "5821917801",
                "AllTxNum": 51,
                "AuxBlockNum": 4,
                "AvgTxPerBlock": 1,
                "Hour": 1,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 29,
                "Sha256dBlockNum": 3,
                "X11BlockNum": 19
            },
            {
                "AllBlockNum": 57,
                "AllMinerReward": "26027397228",
                "AllRepReward": "6506849307",
                "AllTxNum": 57,
                "AuxBlockNum": 11,
                "AvgTxPerBlock": 1,
                "Hour": 2,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 29,
                "Sha256dBlockNum": 8,
                "X11BlockNum": 20
            },
            {
                "AllBlockNum": 56,
                "AllMinerReward": "25570776224",
                "AllRepReward": "6392694056",
                "AllTxNum": 58,
                "AuxBlockNum": 3,
                "AvgTxPerBlock": 1,
                "Hour": 3,
                "MaxTxPerBlock": 3,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 29,
                "Sha256dBlockNum": 12,
                "X11BlockNum": 15
            },
            {
                "AllBlockNum": 62,
                "AllMinerReward": "28310502248",
                "AllRepReward": "7077625562",
                "AllTxNum": 62,
                "AuxBlockNum": 12,
                "AvgTxPerBlock": 1,
                "Hour": 4,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 37,
                "Sha256dBlockNum": 12,
                "X11BlockNum": 13
            },
            {
                "AllBlockNum": 48,
                "AllMinerReward": "21917808192",
                "AllRepReward": "5479452048",
                "AllTxNum": 50,
                "AuxBlockNum": 3,
                "AvgTxPerBlock": 1,
                "Hour": 5,
                "MaxTxPerBlock": 3,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 24,
                "Sha256dBlockNum": 11,
                "X11BlockNum": 13
            },
            {
                "AllBlockNum": 58,
                "AllMinerReward": "26484018232",
                "AllRepReward": "6621004558",
                "AllTxNum": 58,
                "AuxBlockNum": 7,
                "AvgTxPerBlock": 1,
                "Hour": 6,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 34,
                "Sha256dBlockNum": 7,
                "X11BlockNum": 17
            },
            {
                "AllBlockNum": 53,
                "AllMinerReward": "24200913212",
                "AllRepReward": "6050228303",
                "AllTxNum": 55,
                "AuxBlockNum": 4,
                "AvgTxPerBlock": 1,
                "Hour": 7,
                "MaxTxPerBlock": 3,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 31,
                "Sha256dBlockNum": 10,
                "X11BlockNum": 12
            },
            {
                "AllBlockNum": 62,
                "AllMinerReward": "28310502248",
                "AllRepReward": "7077625562",
                "AllTxNum": 62,
                "AuxBlockNum": 6,
                "AvgTxPerBlock": 1,
                "Hour": 8,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 38,
                "Sha256dBlockNum": 14,
                "X11BlockNum": 10
            },
            {
                "AllBlockNum": 57,
                "AllMinerReward": "26027397228",
                "AllRepReward": "6506849307",
                "AllTxNum": 59,
                "AuxBlockNum": 2,
                "AvgTxPerBlock": 1,
                "Hour": 9,
                "MaxTxPerBlock": 3,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 27,
                "Sha256dBlockNum": 14,
                "X11BlockNum": 16
            },
            {
                "AllBlockNum": 49,
                "AllMinerReward": "22374429196",
                "AllRepReward": "5593607299",
                "AllTxNum": 49,
                "AuxBlockNum": 3,
                "AvgTxPerBlock": 1,
                "Hour": 10,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 29,
                "Sha256dBlockNum": 7,
                "X11BlockNum": 13
            },
            {
                "AllBlockNum": 47,
                "AllMinerReward": "21461187188",
                "AllRepReward": "5365296797",
                "AllTxNum": 49,
                "AuxBlockNum": 4,
                "AvgTxPerBlock": 1,
                "Hour": 11,
                "MaxTxPerBlock": 3,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 31,
                "Sha256dBlockNum": 10,
                "X11BlockNum": 6
            },
            {
                "AllBlockNum": 53,
                "AllMinerReward": "24200913212",
                "AllRepReward": "6050228303",
                "AllTxNum": 53,
                "AuxBlockNum": 3,
                "AvgTxPerBlock": 1,
                "Hour": 12,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 27,
                "Sha256dBlockNum": 7,
                "X11BlockNum": 19
            },
            {
                "AllBlockNum": 59,
                "AllMinerReward": "26940639236",
                "AllRepReward": "6735159809",
                "AllTxNum": 66,
                "AuxBlockNum": 2,
                "AvgTxPerBlock": 1,
                "Hour": 13,
                "MaxTxPerBlock": 8,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 29,
                "Sha256dBlockNum": 13,
                "X11BlockNum": 17
            },
            {
                "AllBlockNum": 49,
                "AllMinerReward": "22374429196",
                "AllRepReward": "5593607299",
                "AllTxNum": 236,
                "AuxBlockNum": 7,
                "AvgTxPerBlock": 4,
                "Hour": 14,
                "MaxTxPerBlock": 31,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 28,
                "Sha256dBlockNum": 7,
                "X11BlockNum": 14
            },
            {
                "AllBlockNum": 58,
                "AllMinerReward": "26484018232",
                "AllRepReward": "6621004558",
                "AllTxNum": 59,
                "AuxBlockNum": 5,
                "AvgTxPerBlock": 1,
                "Hour": 15,
                "MaxTxPerBlock": 2,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 32,
                "Sha256dBlockNum": 10,
                "X11BlockNum": 16
            },
            {
                "AllBlockNum": 56,
                "AllMinerReward": "25570776224",
                "AllRepReward": "6392694056",
                "AllTxNum": 58,
                "AuxBlockNum": 3,
                "AvgTxPerBlock": 1,
                "Hour": 16,
                "MaxTxPerBlock": 3,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 33,
                "Sha256dBlockNum": 12,
                "X11BlockNum": 11
            },
            {
                "AllBlockNum": 36,
                "AllMinerReward": "16438356144",
                "AllRepReward": "4109589036",
                "AllTxNum": 36,
                "AuxBlockNum": 6,
                "AvgTxPerBlock": 1,
                "Hour": 17,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 30,
                "Sha256dBlockNum": 2,
                "X11BlockNum": 4
            },
            {
                "AllBlockNum": 58,
                "AllMinerReward": "26484018232",
                "AllRepReward": "6621004558",
                "AllTxNum": 60,
                "AuxBlockNum": 3,
                "AvgTxPerBlock": 1,
                "Hour": 18,
                "MaxTxPerBlock": 3,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 40,
                "Sha256dBlockNum": 15,
                "X11BlockNum": 3
            },
            {
                "AllBlockNum": 53,
                "AllMinerReward": "24200913212",
                "AllRepReward": "6050228303",
                "AllTxNum": 53,
                "AuxBlockNum": 3,
                "AvgTxPerBlock": 1,
                "Hour": 19,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 38,
                "Sha256dBlockNum": 9,
                "X11BlockNum": 6
            },
            {
                "AllBlockNum": 58,
                "AllMinerReward": "26484018232",
                "AllRepReward": "6621004558",
                "AllTxNum": 60,
                "AuxBlockNum": 4,
                "AvgTxPerBlock": 1,
                "Hour": 20,
                "MaxTxPerBlock": 3,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 38,
                "Sha256dBlockNum": 16,
                "X11BlockNum": 4
            },
            {
                "AllBlockNum": 67,
                "AllMinerReward": "30593607268",
                "AllRepReward": "7648401817",
                "AllTxNum": 67,
                "AuxBlockNum": 4,
                "AvgTxPerBlock": 1,
                "Hour": 21,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 62,
                "Sha256dBlockNum": 0,
                "X11BlockNum": 5
            },
            {
                "AllBlockNum": 49,
                "AllMinerReward": "22374429196",
                "AllRepReward": "5593607299",
                "AllTxNum": 51,
                "AuxBlockNum": 2,
                "AvgTxPerBlock": 1,
                "Hour": 22,
                "MaxTxPerBlock": 3,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 46,
                "Sha256dBlockNum": 0,
                "X11BlockNum": 3
            },
            {
                "AllBlockNum": 57,
                "AllMinerReward": "26027397228",
                "AllRepReward": "6506849307",
                "AllTxNum": 57,
                "AuxBlockNum": 9,
                "AvgTxPerBlock": 1,
                "Hour": 23,
                "MaxTxPerBlock": 1,
                "MinTxPerBlock": 1,
                "ScryptBlockNum": 51,
                "Sha256dBlockNum": 0,
                "X11BlockNum": 6
            }
        ],
        "MaxBlockPerHour": 67,
        "MaxTxPerBlock": 31,
        "MaxTxPerHour": 236,
        "MinBlockPerHour": 36,
        "MinTxPerBlock": 1,
        "MinTxPerHour": 36,
        "ScryptBlockNum": 830,
        "Sha256dBlockNum": 206,
        "X11BlockNum": 275
    }
}


```

```json test
{
  "jsonrpc": "2.0",
  "id":3,
  "method":"pov_getLastNHourInfo",
  "params":[
      0,
      0
    ]
}


```
:::