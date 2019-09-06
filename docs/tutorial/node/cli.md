# Cli

## Server

### walletimport

- feature：import a wallet
- parameters:
  - --seed     seed for a wallet
  - --password    password for seed (default is empty string)
  - --config   optional,path for config
- example：

```bash
$ gqlc walletimport --seed 1234567890123456789012345678901234567890123456789012345678901234  --password 123456
```

### run

- feature：start server
- parameters：
  - --seed    
- example：

```bash
$ gqlc run --seed 363CA1A23BA71D078D03A2A52CE390D5CC5AD29CF15453E0A44C6554DA1471C5 
```



## Client

### account

- create account randomly

- parameters：
  - --count     `optional`  account count
  - --seed    `optional`  account seed

- exiample

```bash
$ gqlcc account
```



### balance

- feature：returns balance for accounts
- parameters：
  - --address    address for accounts
- example：

```bash
$ gqlcc balance --address qlc_3p1mnf5w3opm6sf4f9m7faeamks6cdeemx7p63tp4c9z456emzhhb1n9srco,qlc_3nihnp4a5zf5iq9pz54twp1dmksxnouc4i5k4y6f8gbnkc41p1b5ewm3inpw
```



### batchsend

- feature：send transactions from one account to batch  accounts
- parameters：
  - --from     send account private key
  - --to      receive accounts
  - --amount   send amount
  - --token   `optional` token name for send action (default is  QLC)
- example：

```bash
$ gqlcc batchsend --from 07543e863bca1e5de656b220c39435b4f6ffe2728bdcb98a22cc959a195b497da88cfd7324c9c88dccd31e9a56ca36aecacd65953ac7b8d4b42e8b7023b30db0 --to qlc_3pu4ggyg36nienoa9s9x95a615m1natqcqe7bcrn3t3ckq1srnnkh8q5xst5,qlc_3c6ezoskbkgajq8f89ntcu75fdpcsokscgp9q5cdadndg1ju85fief7rrt11 --amount 100 --token QLC
```



### blockcount

- feature：returns the total number of blocks in the database
- example：

```bash
$ gqlcc blockcount
```



### mine

- feature: mine token
- parameters:
  - --account 
  - --preHash
  - --tokenName
  - --tokenSymbol
  - --decimals
  - --totalSupply
- example:

```bash
 mine --account a231d87b2cfed6872be509a0e5b95ff068c4dd5e439538444424aa139f9612b0681bf5253c64672fc54c93d3b5b9a20d28965cb8f80ba70460ed3f99cb547234 --preHash 758f79b656340c329cb5b11302865c5ff0b0c99fd8a268d6b8760170e33e8cd1 --tokenName QN --tokenSymbol QN --decimals 8 --totalSupply 1000000000
```

### withdrawMine

- feature: withdraw the token of mintage pledge
- parameters:
  - --account 
  - --tokenid
- example:

```bash
 withdrawMine --account a231d87b2cfed6872be509a0e5b95ff068c4dd5e439538444424aa139f9612b0681bf5253c64672fc54c93d3b5b9a20d28965cb8f80ba70460ed3f99cb547234 --tokenId 1dd129a664b31c02b68ded67e6ba1574a04d49c6428be5b659d63d3859ba507d
```

### pledge

- feature: pledge token
- parameters:
  - --beneficialAccount
  - --pledgeAccount
  - --amount
  - --pType
- example:

```bash
 pledge --account a231d87b2cfed6872be509a0e5b95ff068c4dd5e439538444424aa139f9612b0681bf5253c64672fc54c93d3b5b9a20d28965cb8f80ba70460ed3f99cb547234 --pledgeAccount a231d87b2cfed6872be509a0e5b95ff068c4dd5e439538444424aa139f9612b0681bf5253c64672fc54c93d3b5b9a20d28965cb8f80ba70460ed3f99cb547234 --amount 10000000000000000 --pType vote
```

### withdrawPledge

- feature: withdraw pledge token
- parameters:
  - --beneficialAccount
  - --pledgeAccount
  - --amount
  - --pType
- example:

```bash
 withdrawPledge --account a231d87b2cfed6872be509a0e5b95ff068c4dd5e439538444424aa139f9612b0681bf5253c64672fc54c93d3b5b9a20d28965cb8f80ba70460ed3f99cb547234 --pledgeAccount a231d87b2cfed6872be509a0e5b95ff068c4dd5e439538444424aa139f9612b0681bf5253c64672fc54c93d3b5b9a20d28965cb8f80ba70460ed3f99cb547234 --amount 10000000000000000 --pType vote
```

### send

- feature：send transaction

- parameters：

  - --from     send account private key
  - --to     receive account
  - --token      `optional` token name for send action (default is  QLC)
  - --amount     send amount 


- example：


```bash
$ gqlcc send --from 07543e863bca1e5de656b220c39435b4f6ffe2728bdcb98a22cc959a195b497da88cfd7324c9c88dccd31e9a56ca36aecacd65953ac7b8d4b42e8b7023b30db0 --to qlc_3ajyep41dot83n8ctkis6w6797gn79tsh8iq3bqnrbpj44mqhj95n75cio4h --token QLC --amount 10
```



### tokens

- feature: returns token list of chain
- example:

```bash
$ gqlcc tokens
```



### performance

- feature：get performance time

- example：

```bash
$ gqlcc  performance
```



### version

- feature：returns the version info
- example：


```bash
$ gqlcc version
```



### walletcreate

- feature：create a wallet 
- parameters：
  - --password   password for wallet
- example：


```bash
$ gqlcc changepassword --password 123456
```



### wallet changepassword

- feature：change wallet password
- parameters:
  - --account     address for account
  - --password      password for account
  - --newpassword  new password for account
- example：


```bash
$ gqlcc changepassword --account qlc_3dmpk64gnxq5nnmnwwbns6mismtjs86epunh6ihremz5mjrik5we3wyrjhtj --password 123456 --newpassword 654321 
```



### walletlist

- feature：address list in the wallet
- example：


```bash
$ gqlcc walletlist
```



### walletremove

- feature：remove wallet
- parameters:
  - --account  wallet address
- example：


```bash
$ gqlcc walletremove --account qlc_13oyjfn6g7z18hsfhwc95ojf75htuc4hmar5qhaqkpd39b7zkn4hkuhst3wu
```