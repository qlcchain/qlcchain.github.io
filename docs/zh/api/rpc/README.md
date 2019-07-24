# 简介

##  更新纪录

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

##  PoV Block结构

|     field      |  type  |                           description                        |
| :------------: | :----: | :----------------------------------------------------------: |
|      hash      | string |                          区块哈希                             |
|     height     | uint64 |                          区块高度                             |
|    previous    | string |                        前一个区块哈希                          |
|   merkleRoot   | string |                   所有被打包交易的默克尔根哈希                    |
|     nonce      | uint64 |                           随机数                              |
| voteSignature  | string |                          投票签名                             |
|    target      | string |                          难度目标                             |
|    coinbase    | string |                          矿工地址                             |
|   timestamp    | int64  |                       时间戳(UNIX时间)                        |
|     txNum      | uint32 |                          交易数量                             |
|   stateHash    | string |                          状态哈希                             |
|   signature    | string |                          区块头签名                            |
|  transactions  | array  |                           交易列表                             |
