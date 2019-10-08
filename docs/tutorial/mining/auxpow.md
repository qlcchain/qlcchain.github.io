# AuxPoW

AuxPoW is the way that merged mining can exist; it is the relationship between two blockchains for one to trust the other's work as their own and accept AuxPoW blocks.

How to build AuxPoW proof, please check [Merged mining specification](https://en.bitcoin.it/wiki/Merged_mining_specification)

In here, QLC is auxiliary blockchain, BTC/LTC/Dash are parent blockchain.

## Miner

### Staking
**Miner MUST have enough pledge vote (staking) to generate new blocks.**

### Use gqlc-miner
gqlc-miner is just for develop testing with very poor performance.

(NOT RECOMMANED)

```bash 

# SHA256D
gqlc-miner -nodeurl http://127.0.0.1:29735 -auxpow -algo SHA256D -miner qlc_xxx

# or X11
gqlc-miner -nodeurl http://127.0.0.1:29735 -auxpow -algo X11 -miner qlc_xxx

# or SCRYPT
gqlc-miner -nodeurl http://127.0.0.1:29735 -auxpow -algo SCRYPT -miner qlc_xxx

```

### Use solo stratum pool
gqlc-stratum is a very simple mining pool between node and miner, which support stratum mining protocol.

gqlc-stratum DOES NOT SUPPORT AuxPoW.

### Use stratum mining pool
Please contact mining pool operator which support QLC merged mining.
Following their guides, config your GPU/FPGA/ASIC miners to use stratum mining pool, such as "stratum+tcp://IP:Port".

## Developer

### Get work

Calling pov_getWork rpc to get new work from node, at 15/30/60 seconds interval.

All hashes's byte order is little-endian, and workHash is used for unique identify for work.

```go

func getWork() {
    nodeClient, err := rpc.Dial("http://127.0.0.1:9735")
    getWorkRsp := make(map[string]interface{})
    err := nodeClient.Call(&getWorkRsp, "pov_getWork", minerAddr, flagAlgo)

    /*
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
    */
}

```

### Search nonce for parent blockchain

Now you can do mining for parent blockchain as usual, like BTC/LTC/Dash.

QLC block header and hash is same with BTC/LTC/Dash.

```go
func doParentWork() {
    timestamp := time.Now().Unix()
    minerInfo := "miner's or mining pool's info"
    extra_nonce1 := miner_session_id

    coinbaseExtra := minerInfo + miner_session_id + 0
    coinbaseData := coinbase1 + coinbaseExtra + coinbase2
    coinbaseHash := sha256d(coinbaseHash)
    merkleRoot := merkle root of sha256d(coinbaseHash and merkleBranch)

    nonce := 0
    hashData := version + previous + merkleRoot + timestamp + bits + nonce
    blockHash := sha256d/x11/scrypt(hashData)

    for {
        /*
            packing QLC blockHash to parent block coinbase tx,
            just waiting parent blockchain searching nonce result,
            submitWork when miner find valid nonce for parent blockchain.
        */

        /*
            Check latest block and previous is or not, cancel current searching if changed.
        */
    }
}
```

### Submit work

After find nonce, calling pov_submitWork rpc to node as soon as possible.

```go

func submitWork() {
    nodeClient, err := rpc.Dial("http://127.0.0.1:9735")
    submitReq := make(map[string]interface{})

    coinbaseExtra := minerInfo + extra_nonce1 + extra_nonce2
    auxPow := "parent block header and coinbase tx"

    /*
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
                "nonce":12345678,
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
    */

    err := nodeClient.Call(nil, "pov_submitWork", submitReq)
}

```
