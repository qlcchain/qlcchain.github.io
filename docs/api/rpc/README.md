# Introduce

##  Update Instruction

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
|      hash      | string |                          block hash                          |
|     height     | uint64 |                          block height                        |
|    previous    | string |                     previous block hash                      |
|   merkleRoot   | string |               merkle root of all transactions                |
|     nonce      | uint64 |            nonce number used for vote signature              |
| voteSignature  | string |               signature of vote related fields               |
|    target      | string |                      difficulty target                       |
|   timestamp    | int64  |                 timestamp, now is unix time                  |
|     txNum      | uint32 |                       transaction number                     |
|   stateHash    | int64  |                           state hash                         |
|   signature    | string |                   signature of whole block header            |
|  transactions  | array  |                   transaction hash list                      |
