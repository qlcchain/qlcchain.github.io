# 简介

##  更新纪录

2019-9-25 update:

- 增加代表提取奖励合约

2019-9-24 update :

- 修改 PoV 块结构

- 修改 `PoV` 模块 

2019-6-20 更新 :

- 增加 `PoV` and `Miner` 模块 

- 增加 PoV 块结构

- 账户块结构增加PoV高度和确认字段


2019-3-25 更新 :

-  `ledger_accountsPending` 返回值增加时间戳

- 修改 `sms_messageBlocks` 返回值


2019-3-15 更新 :

- 修改block结构

- `ledger_accounts`, `ledger_blocks`, `ledger_accountHistoryTopn` 接口增加偏移量

- 增加 `SMS` 和 `Mintage` 模块

- 修改 `ledger_blocksCountByType`, `ledger_delegators` 接口返回值

- 将 `ledger_accountsBalances` 名称修改为 `ledger_accountsBalance` 

  

##  Account Block结构

|     字段      |  类型  |                           描述                           |
| :------------: | :----: | :----------------------------------------------------------: |
|      type      | string |                            区块类型                        |
|     token      | string |                交易的token hash                |
|    address     | string |                 产生区块的账户地址                 |
|    balance     | string |                   产生区块账户的余额                    |
|    previous    | string |                     前一个区块hash                      |
|      link      | string |  如果是发送区块，则为接收账户地址，如果是接收接收区块，则为发送区块的hash |
|     sender     | string |          短信发送者，使用base64编码，可空    |
|    receiver    | string |     短信接收者，使用base64编码，可空         |
|    message     | string |             短信hash                        |
|      data      | string |       合约产生的虚拟机指令，可空       |
|     quota      |  int   |             quota acquired from mortgaged assets             |
|   timestamp    | int64  |            时间戳                  |
|     extra      | string |            合约产生的额外数据                     |
| representative | string |               代表账户的地址                       |
|      work      | string |                工作量证明                     |
|   signature    | string |                  签名数据                                   |
|   tokenName    | string |                          token名称                          |
|     amount     | string |              交易数目                    |
|      hash      | string |                    区块hash                 |
|   povHeight    | uint64 |                  PoV块引用高度                  |
|povConfirmHeight| uint64 |                   PoV块确认高度                 |
|povConfirmCount | uint64 |                   PoV块确认次数                        |

##  PoV Block Struct
|     field      |  type  |                           description                        |
| :------------: | :----: | :----------------------------------------------------------: |
| basHdr         | object | block basic header                                           |
| auxHdr         | object | block aux pow header                                         |
| cbtx           | object | block coinbase tx                                            |
| normBits       | uint32 | normalized target bits                                       |
| algoName       | string | pow algorithm name                                           |
| algoEfficiency | uint32 | pow algorithm efficiency                                     |

### PoV Basic Header
|     field      |  type  |                           description                        |
| :------------: | :----: | :----------------------------------------------------------: |
| hash           | string | block hash                                                   |
| height         | uint64 | block height                                                 |
| version        | uint32 | version                                                      |
| previous       | string | previous block hash                                          |
| merkleRoot     | string | merkle root of all transactions                              |
| timestamp      | uint32 | timestamp, now is unix time                                  |
| bits           | uint32 | target bits                                                  |
| nonce          | uint64 | nonce number                                                 |

### PoV AuxPow Header
|     field      |  type  |                           description                        |
| :------------: | :----: | :----------------------------------------------------------: |
| auxMerkleBranch| array  | auxiliary chain merkle branch hashes                         |
| auxMerkleIndex | uint32 | auxiliary chain merkle index/mask                            |
| parCoinBaseTx  | object | parent chain coinbase transaction                            |
|parCoinBaseMerkle| array | parent chain coinbase merkle branch hashes                   |
| parMerkleIndex | uint32 | parent chain merkle index/mask                               |
| parBlockHeader | object | parent chain block header                                    |
| parentHash     | string | parent chain block hash                                      |

### PoV CoinBase Transaction
|     field      |  type  |                           description                        |
| :------------: | :----: | :----------------------------------------------------------: |
| version        | uint32 | transaction version                                          |
| txIns          | array  | transaction input list                                       |
| txOuts         | array  | transaction output list                                      |
| stateHash      | string | state hash of transactions in pov block body                 |
| txNum          | uint32 | number of transactions in pov block body                     |
| hash           | object | transaction hash                                             |

### PoV CoinBase Input
|     field      |  type  |                           description                        |
| :------------: | :----: | :----------------------------------------------------------: |
| prevTxHash     | string | transaction version                                          |
| prevTxIdx      | uint32 | transaction input list                                       |
| extra          | string | coinbase extra data (hex bytes)                              |
| sequence       | uint32 | sequence number                                              |

### PoV CoinBase Output
|     field      |  type  |                           description                        |
| :------------: | :----: | :----------------------------------------------------------: |
| value          | string | coinbase reward value                                        |
| address        | string | coinbase reward address                                      |
