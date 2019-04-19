(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{275:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pledge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pledge","aria-hidden":"true"}},[t._v("#")]),t._v(" Pledge")]),t._v(" "),a("p",[a("strong",[t._v("Supported protocols:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("JSON-RPC 2.0")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Websocket")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("IPC")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Publish–subscribe")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TBD")])])])]),t._v(" "),a("h2",{attrs:{id:"pledge-searchpledgeinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pledge-searchpledgeinfo","aria-hidden":"true"}},[t._v("#")]),t._v(" pledge_searchPledgeInfo")]),t._v(" "),a("p",[t._v("Return pledge data by pledge parameters ，if there are multiple identical pledge in the query result, it will be returned in time order")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pledgeParams")]),t._v(":  pledge parameters\n"),a("ul",[a("li",[t._v("beneficial：beneficial account")]),t._v(" "),a("li",[t._v("amount：amount of pledge")]),t._v(" "),a("li",[t._v("pType：type of pledge")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(":  data for pledge")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[23,38],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"pledge_searchPledgeInfo\\",\\n\\t\\"params\\": [\\n\\t\\t{\\n\\t\\t\\t\\"beneficial\\": \\"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho\\",\\n\\t\\t\\t\\"amount\\": \\"2000000000000000\\",\\n\\t\\t\\t\\"pType\\": \\"vote\\"\\n\\t\\t}\\n\\t]\\n","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[39,65],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 1,\\n  \\"result\\": [\\n    {\\n      \\"PType\\": \\"vote\\",\\n      \\"Amount\\": 2000000000000000,\\n      \\"WithdrawTime\\": \\"2019-04-28 19:02:34 +0800 CST\\",\\n      \\"Beneficial\\": \\"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho\\",\\n      \\"PledgeAddress\\": \\"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4\\",\\n      \\"NEP5TxId\\": \\"fgkhlfkv903ffe11a256fd8e7bbda9dff5021fbc261f2d93971028fcfhgk67\\"\\n    },\\n    {\\n      \\"PType\\": \\"vote\\",\\n      \\"Amount\\": 2000000000000000,\\n      \\"WithdrawTime\\": \\"2019-04-28 19:02:37 +0800 CST\\",\\n      \\"Beneficial\\": \\"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho\\",\\n      \\"PledgeAddress\\": \\"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4\\",\\n      \\"NEP5TxId\\": \\"e11e0d9a96f5fe11a256fd8e7bbda9dff5021fbc261f2d93971028fcaad5642\\"\\n    }\\n  ]\\n}","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[66,80],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"pledge_searchPledgeInfo\\",\\n\\t\\"params\\": [\\n\\t\\t{\\n\\t\\t\\t\\"beneficial\\": \\"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho\\",\\n\\t\\t\\t\\"amount\\": \\"2000000000000000\\",\\n\\t\\t\\t\\"pType\\": \\"vote\\"\\n\\t\\t}\\n\\t]","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pledge_searchPledgeInfo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"beneficial"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2000000000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vote"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vote"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000000000000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"WithdrawTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-04-28 19:02:34 +0800 CST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Beneficial"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PledgeAddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NEP5TxId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fgkhlfkv903ffe11a256fd8e7bbda9dff5021fbc261f2d93971028fcfhgk67"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vote"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000000000000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"WithdrawTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-04-28 19:02:37 +0800 CST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Beneficial"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PledgeAddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NEP5TxId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e11e0d9a96f5fe11a256fd8e7bbda9dff5021fbc261f2d93971028fcaad5642"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pledge_searchPledgeInfo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"beneficial"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2000000000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vote"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])])])])],2),t._v(" "),a("h2",{attrs:{id:"pledge-searchallpledgeinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pledge-searchallpledgeinfo","aria-hidden":"true"}},[t._v("#")]),t._v(" pledge_searchAllPledgeInfo")]),t._v(" "),a("p",[t._v("Return all pledge info")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pledgeParams")]),t._v(":  no")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(": all pledge data")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[96,105],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"pledge_searchAllPledgeInfo\\",\\n\\t\\"params\\": [\\n\\t]","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[106,138],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 1,\\n  \\"result\\": [\\n    {\\n      \\"PType\\": \\"network\\",\\n      \\"Amount\\": 40000000000000,\\n      \\"WithdrawTime\\": \\"2019-04-28 19:04:06 +0800 CST\\",\\n      \\"Beneficial\\": \\"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho\\",\\n      \\"PledgeAddress\\": \\"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4\\",\\n      \\"NEP5TxId\\": \\"hbvf56djkob7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aecesdcbh\\"\\n    },\\n    {\\n      \\"PType\\": \\"vote\\",\\n      \\"Amount\\": 2000000000000000,\\n      \\"WithdrawTime\\": \\"2019-04-28 19:04:11 +0800 CST\\",\\n      \\"Beneficial\\": \\"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho\\",\\n      \\"PledgeAddress\\": \\"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4\\",\\n      \\"NEP5TxId\\": \\"thjri73363b7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aecesdcbh\\"\\n    },\\n    {\\n      \\"PType\\": \\"vote\\",\\n      \\"Amount\\": 1000000000000000,\\n      \\"WithdrawTime\\": \\"2019-04-28 19:04:47 +0800 CST\\",\\n      \\"Beneficial\\": \\"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho\\",\\n      \\"PledgeAddress\\": \\"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4\\",\\n      \\"NEP5TxId\\": \\"afgee73363b7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aece11527\\"\\n    }\\n  ]","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[139,148],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"pledge_searchAllPledgeInfo\\",\\n\\t\\"params\\": [\\n\\t]","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pledge_searchAllPledgeInfo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40000000000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"WithdrawTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-04-28 19:04:06 +0800 CST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Beneficial"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PledgeAddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NEP5TxId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hbvf56djkob7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aecesdcbh"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vote"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000000000000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"WithdrawTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-04-28 19:04:11 +0800 CST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Beneficial"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PledgeAddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NEP5TxId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thjri73363b7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aecesdcbh"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vote"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000000000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"WithdrawTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-04-28 19:04:47 +0800 CST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Beneficial"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3t18f6ruhp4n3jkqo7fnhzmcdunpwk9niqu5z9sg1otkhthnm6n1hdz5i4ho"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PledgeAddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NEP5TxId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"afgee73363b7a62ed0c40aeb83e18d53f9ad50b57926f7aefc0f298aece11527"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pledge_searchAllPledgeInfo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])])])])],2)],1)},[],!1,null,null,null);s.default=e.exports}}]);