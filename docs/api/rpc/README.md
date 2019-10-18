# Introduce

##  Update Instruction

2019-10-18 update :

- modify `PoV` block fields and rpcs

2019-9-25 update :

- add representation reward contract

2019-9-24 update :

- modify PoV Block Struct

- modify `PoV` modules 

2019-6-20 update :

- add `PoV` and `Miner` modules 

- add PoV Block Struct

- add PoV confirm fields to Account Block Struct


2019-3-25 update :

- add timestamp to `ledger_accountsPending` return

- modify `sms_messageBlocks` return


2019-3-15 update :

- modify block struct

- add offset for `ledger_accounts`, `ledger_blocks`, `ledger_accountHistoryTopn` interface

- add `SMS` and `Mintage` modules

- modify `ledger_blocksCountByType`, `ledger_delegators` return

- modify  `ledger_accountsBalances` interface name to `ledger_accountsBalance` 

  

##  Account Block Struct

|     field      |  type  |                           describe                           |
| :------------: | :----: | :----------------------------------------------------------: |
|      type      | string |                          block type                          |
|     token      | string |                token hash for the transaction                |
|    address     | string |                 address of generating block                  |
|    balance     | string |                   balance for the account                    |
|    previous    | string |                     previous block hash                      |
|      link      | string | if a send transaction, link is receiver address hash, if a receive transaction, link is sender block hash |
|     sender     | string |          sms sender, encoded by base64  `omitempty`          |
|    receiver    | string |         sms receiver, encoded by base64  `omitempty`         |
|    message     | string |                       sms message hash                       |
|      data      | string |       vm instructions created by contract `omitempty`        |
|      vote      | string |             benefit weight for vote                          |
|      network   | string |             benefit weight for network                       |
|      storage    | string |             benefit weight for storage                      |
|      oracle    | string |             benefit weight for oracle                        |
|   timestamp    | int64  |                 timestamp ,now is unix time                  |
|     extra      | string |                   extra data for contract                    |
| representative | string |                    representative address                    |
|      work      | string |                         work for pow                         |
|   signature    | string |                          signature                           |
|   tokenName    | string |                          token name                          |
|     amount     | string |                  amount for the transaction                  |
|      hash      | string |                          block hash                          |
|   povHeight    | uint64 |                  PoV reference block height                  |
|povConfirmHeight| uint64 |                   PoV confirm block height                 |
|povConfirmCount | uint64 |                   PoV confirm count                        |

##  PoV Block Struct
|     field      |  type  |                           description                        |
| :------------: | :----: | :----------------------------------------------------------: |
| basHdr         | object | block basic header                                           |
| auxHdr         | object | block aux pow header                                         |
| cbtx           | object | block coinbase tx                                            |
| normBits       | uint32 | normalized target bits                                       |
| algoName       | string | pow algorithm name                                           |
| algoEfficiency | uint32 | pow algorithm efficiency                                     |
| algoDifficulty | float64| pow algorithm difficulty                                     |
| normDifficulty | uint32 | pow normalized difficulty                                    |

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
