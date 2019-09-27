# PoW

Proof-of-work mining, more commonly referred to as PoW mining, is the activity of committing your computer’s hardware and resources to process network transactions and build the blocks that make up the blockchain in the QLC network. 

Each time a block is created by a miner, which is then accepted by the majority of nodes, the miner receives a block reward (newly created QGAS).

Each new block reward is then split up as follows:
| Party               |  Reward |
| :-----------------: | :-----: |
| PoW Miner           | 80%     |
| DPOS Representative | 20%     |

## Miner

### 4.1 Staking
**Miner MUST have enough pledge vote (staking) to generate new blocks.**

### 4.2 Use gqlc-miner
gqlc-miner is just for develop testing with very poor performance.

(NOT RECOMMANED)

```bash 

# SHA256D
gqlc-miner -nodeurl http://127.0.0.1:29735 -algo SHA256D -miner qlc_xxx

# or X11
gqlc-miner -nodeurl http://127.0.0.1:29735 -algo X11 -miner qlc_xxx

# or SCRYPT
gqlc-miner -nodeurl http://127.0.0.1:29735 -algo SCRYPT -miner qlc_xxx

```

### 4.3 Use solo stratum pool
gqlc-stratum is a very simple mining pool between node and miner, which support stratum mining protocol.

```bash

# SHA256D
gqlc-stratum -nodeurl http://127.0.0.1:29735 -algo SHA256D -miner qlc_xxx

# or X11
gqlc-stratum -nodeurl http://127.0.0.1:29735 -algo X11 -miner qlc_xxx

# or SCRYPT
gqlc-stratum -nodeurl http://127.0.0.1:29735 -algo SCRYPT -miner qlc_xxx

```

#### 4.3.1 Use CPU miner
crypto cpuminer (linux + windows)
https://github.com/tpruvot/cpuminer-multi

(NOT RECOMMANED)

```bash

cpuminer -a sha256d -o stratum+tcp://127.0.0.1:3333 -O test.1:test

# add -m 65536 if scrypt is used
cpuminer -a scrypt -m 65536 -o stratum+tcp://127.0.0.1:3333 -O test.1:test

```

#### 4.3.2 Use GPU miner
OPENCL:
https://github.com/luke-jr/bfgminer

support sha256d/scrypt, without x11.

```bash

# SHA256D
bfgminer -o stratum+tcp://127.0.0.1:3333 -O test.1:test -S opencl:auto

# SCRPYT
bfgminer --scrypt -o stratum+tcp://127.0.0.1:3333 -O test.1:test -S opencl:auto 

```

CUDA:
https://github.com/KlausT/ccminer

Pls follow ccminer's guide, support sha256d/x11/scrypt.

#### 4.3.3 Use ASIC miner
Pls check your miner's guides, and config the miner to use gqlc stratum pool, such as "stratum+tcp://192.168.1.100:3333".

### 4.4 Use stratum mining pool
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

### Search nonce for QLC blockchain

Now you can search valid nonce meet the difficulty requirement.

QLC block header and hash is same with BTC/LTC/Dash.

```go
func doWork() {
    timestamp := time.Now().Unix()
    minerInfo := "miner's or mining pool's info"
    extra_nonce1 := miner_session_id

    for extra_nonce2:=0; extra_nonce2 <= uint64_max; extra_nonce2++ {
        coinbaseExtra := minerInfo + extra_nonce1 + extra_nonce2
        coinbaseData := coinbase1 + coinbaseExtra + coinbase2
        coinbaseHash := sha256d(coinbaseHash)
        merkleRoot := merkle root of sha256d(coinbaseHash and merkleBranch)

        for nonce = 0; nonce <= uint32_max; nonce++ {
            hashData := version + previous + merkleRoot + timestamp + bits + nonce
            blockHash := sha256d/x11/scrypt(hashData)
            if blockHash <= nbits {
                submitWork()
                return
            }

            /*
                Check latest block and previous is or not, cancel current searching if changed.
            */
        }
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
                "auxPow":null
            }
        ]
    }
    */

    err := nodeClient.Call(nil, "pov_submitWork", submitReq)
}

```
