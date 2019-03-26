# Introduce

##  Update Instruction

2019-3-25 update :

- add timestamp to `ledger_accountsPending` return

- modify `sms_messageBlocks` return


2019-3-15 update :

- modify block struct

- add offset for `ledger_accounts`, `ledger_blocks`, `ledger_accountHistoryTopn` interface

- add `SMS` and `Mintage` modules

- modify `ledger_blocksCountByType`, `ledger_delegators` return

- modify  `ledger_accountsBalances` interface name to `ledger_accountsBalance` 

  

##  Block  Struct

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
|     quota      |  int   |             quota acquired from mortgaged assets             |
|   timestamp    | int64  |                 timestamp ,now is unix time                  |
|     extra      | string |                   extra data for contract                    |
| representative | string |                    representative address                    |
|      work      | string |                         work for pow                         |
|   signature    | string |                          signature                           |
|   tokenName    | string |                          token name                          |
|     amount     | string |                  amount for the transaction                  |
|      hash      | string |                          block hash                          |