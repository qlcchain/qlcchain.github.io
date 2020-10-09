(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{482:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pow"}},[t._v("#")]),t._v(" PoW")]),t._v(" "),a("p",[t._v("Proof-of-work mining, more commonly referred to as PoW mining, is the activity of committing your computer’s hardware and resources to process network transactions and build the blocks that make up the blockchain in the QLC network.")]),t._v(" "),a("p",[t._v("Each time a block is created by a miner, which is then accepted by the majority of nodes, the miner receives a block reward (newly created QGAS).")]),t._v(" "),a("p",[t._v("Each new block reward is then split up as follows:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Party")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Reward")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("PoW Miner")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("60%")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DPOS Representative")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("40%")])])])]),t._v(" "),a("h2",{attrs:{id:"miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miner"}},[t._v("#")]),t._v(" Miner")]),t._v(" "),a("h3",{attrs:{id:"staking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[t._v("#")]),t._v(" Staking")]),t._v(" "),a("p",[a("strong",[t._v("Miner MUST have enough pledge vote (staking) to generate new blocks.")])]),t._v(" "),a("h3",{attrs:{id:"use-gqlc-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-gqlc-miner"}},[t._v("#")]),t._v(" Use gqlc-miner")]),t._v(" "),a("p",[t._v("(NOT RECOMMANED)")]),t._v(" "),a("p",[t._v("gqlc-miner is just for develop testing with very poor performance.")]),t._v(" "),a("p",[t._v("https://github.com/qlcchain/qlc-miner/releases")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mainnet default port is 9735")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# testnet default port is 19735")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SHA256D")]),t._v("\ngqlc-miner -nodeurl http://127.0.0.1:9735 -algo SHA256D -miner qlc_xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or X11")]),t._v("\ngqlc-miner -nodeurl http://127.0.0.1:9735 -algo X11 -miner qlc_xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or SCRYPT")]),t._v("\ngqlc-miner -nodeurl http://127.0.0.1:9735 -algo SCRYPT -miner qlc_xxx\n\n")])])]),a("h3",{attrs:{id:"use-solo-stratum-pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-solo-stratum-pool"}},[t._v("#")]),t._v(" Use solo stratum pool")]),t._v(" "),a("p",[t._v("gqlc-pool is a very simple mining pool between node and miner, which support stratum mining protocol.")]),t._v(" "),a("p",[t._v("https://github.com/qlcchain/qlc-pool/releases")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mainnet default port is 9735")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# testnet default port is 19735")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SHA256D")]),t._v("\ngqlc-pool -nodeurl http://127.0.0.1:9735 -algo SHA256D -miner qlc_xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or X11")]),t._v("\ngqlc-pool -nodeurl http://127.0.0.1:9735 -algo X11 -miner qlc_xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or SCRYPT")]),t._v("\ngqlc-pool -nodeurl http://127.0.0.1:9735 -algo SCRYPT -miner qlc_xxx\n\n")])])]),a("h4",{attrs:{id:"use-cpu-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cpu-miner"}},[t._v("#")]),t._v(" Use CPU miner")]),t._v(" "),a("p",[t._v("crypto cpuminer (linux + windows)\nhttps://github.com/tpruvot/cpuminer-multi")]),t._v(" "),a("p",[t._v("(NOT RECOMMANED)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\ncpuminer -a sha256d -o stratum+tcp://127.0.0.1:3333 -O test.1:test\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add -m 65536 if scrypt is used")]),t._v("\ncpuminer -a scrypt -m "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v(" -o stratum+tcp://127.0.0.1:3333 -O test.1:test\n\n")])])]),a("h4",{attrs:{id:"use-gpu-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-gpu-miner"}},[t._v("#")]),t._v(" Use GPU miner")]),t._v(" "),a("p",[t._v("OPENCL:\nhttps://github.com/luke-jr/bfgminer")]),t._v(" "),a("p",[t._v("support sha256d/scrypt, without x11.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SHA256D")]),t._v("\nbfgminer -o stratum+tcp://127.0.0.1:3333"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#skipcbcheck -O test.1:test -S opencl:auto --no-gbt --no-getwork")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SCRPYT")]),t._v("\nbfgminer --scrypt -o stratum+tcp://127.0.0.1:3333"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#skipcbcheck -O test.1:test -S opencl:auto --no-gbt --no-getwork")]),t._v("\n\n")])])]),a("p",[t._v("CUDA:\nhttps://github.com/KlausT/ccminer")]),t._v(" "),a("p",[t._v("Pls follow ccminer's guide, support sha256d/x11/scrypt.")]),t._v(" "),a("h4",{attrs:{id:"use-asic-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-asic-miner"}},[t._v("#")]),t._v(" Use ASIC miner")]),t._v(" "),a("p",[t._v('Pls check your miner\'s guides, and config the miner to use gqlc stratum pool, such as "stratum+tcp://192.168.1.100:3333".')]),t._v(" "),a("h3",{attrs:{id:"use-stratum-mining-pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-stratum-mining-pool"}},[t._v("#")]),t._v(" Use stratum mining pool")]),t._v(" "),a("p",[t._v('Please contact mining pool operator which support QLC merged mining.\nFollowing their guides, config your GPU/FPGA/ASIC miners to use stratum mining pool, such as "stratum+tcp://IP:Port".')]),t._v(" "),a("h2",{attrs:{id:"developer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer"}},[t._v("#")]),t._v(" Developer")]),t._v(" "),a("h3",{attrs:{id:"get-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-work"}},[t._v("#")]),t._v(" Get work")]),t._v(" "),a("p",[t._v("Calling pov_getWork rpc to get new work from node, at 15/30/60 seconds interval.")]),t._v(" "),a("p",[t._v("All hashes's byte order is little-endian, and workHash is used for unique identify for work.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nodeClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" rpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:9735"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    getWorkRsp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" nodeClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("getWorkRsp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pov_getWork"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minerAddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flagAlgo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n    {\n        "id": "1",\n        "jsonrpc": "2.0",\n        "result": {\n            "workHash":"295b1dd34a9cd75360cb00a9020d770feda2868c7dc8faa2960bb9162c58f20d",\n            "version":536871936,\n            "previous":"b2a1493d5ddc305168227581b6f9506580a25509b4b68edd9c6e0c95228c2151",\n            "bits":504270679,\n            "height":1141,\n            "minTime":1569295439,\n            "merkleBranch":[],\n            "coinbaseData1":"01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff",\n            "coinbaseData2":"ffffffff02c9add62cbd8ed444fe5166c7c2dd6b7ebd16e284b31700d246960e5c1488ec231b377bcc000000000000000000000000000000000000000000000000000000000000001506cddef361a43727342802093613777518a8781edbfdbb4dcc4f113442667a7ccec7f7b901000000"\n        }\n    }\n    */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"search-nonce-for-qlc-blockchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-nonce-for-qlc-blockchain"}},[t._v("#")]),t._v(" Search nonce for QLC blockchain")]),t._v(" "),a("p",[t._v("Now you can search valid nonce meet the difficulty requirement.")]),t._v(" "),a("p",[t._v("QLC block header and hash is same with BTC/LTC/Dash.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doWork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    minerInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"miner's or mining pool's info\"")]),t._v("\n    extra_nonce1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" miner_session_id\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" extra_nonce2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" extra_nonce2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" uint64_max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" extra_nonce2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        coinbaseExtra "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" minerInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" extra_nonce1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" extra_nonce2\n        coinbaseData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" coinbase1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" coinbaseExtra "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" coinbase2\n        coinbaseHash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha256d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coinbaseHash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        merkleRoot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" merkle root of "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha256d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coinbaseHash and merkleBranch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" nonce "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" nonce "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" uint32_max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" nonce"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            hashData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" previous "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" merkleRoot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" bits "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" nonce\n            blockHash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" sha256d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x11"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" blockHash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" nbits "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("submitWork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n                Check latest block and previous is or not, cancel current searching if changed.\n            */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"submit-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submit-work"}},[t._v("#")]),t._v(" Submit work")]),t._v(" "),a("p",[t._v("After find nonce, calling pov_submitWork rpc to node as soon as possible.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("submitWork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nodeClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" rpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:9735"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    submitReq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    coinbaseExtra "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" minerInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" extra_nonce1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" extra_nonce2\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n    {\n        "jsonrpc":"2.0",\n        "id":3,\n        "method":"pov_submitWork",\n        "params":[\n            {\n                "workHash":"295b1dd34a9cd75360cb00a9020d770feda2868c7dc8faa2960bb9162c58f20d",\n                "blockHash":"7d9b503254d94b34b81e4fa9fbf578d30c3dcb7e5248aee0674a55567a687d07",\n                "merkleRoot":"9e542106174cd1c9d7db714d981d4d2b16a554f543dad25ceca87bb1db695050",\n                "timestamp":1569295729,\n                "nonce":12345678,\n                "coinbaseExtra":"75040000000000002f514c432043505520417578504f572f",\n                "coinbaseHash":"9e542106174cd1c9d7db714d981d4d2b16a554f543dad25ceca87bb1db695050",\n                "auxPow":null\n            }\n        ]\n    }\n    */')]),t._v("\n\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" nodeClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pov_submitWork"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" submitReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);