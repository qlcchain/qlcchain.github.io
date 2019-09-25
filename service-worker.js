/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2e18c3272110e1282e3a8f177abec5a4"
  },
  {
    "url": "api/index.html",
    "revision": "e32069275cf6781e7e21e7844b8387a4"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "6b1355ab7ae1b3f4f224be1be3481ac0"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "867cb41657f56a549f27ea65a6adbdeb"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "909ee11a4092cc9c86cbbe95cf6fc831"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "f262ce11c69957da0d68d5fa6a767ba7"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "8feb5bafe1374ab83a8c9fe6fa7cd6b9"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "03f8b38327cb207ec5ef34b33deceaae"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "3077578f8596a9b6dd46c3b71d1132fd"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "29fc70a1fbf712032b19d07d404f0044"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "d32705d1e06d27525c481c9343b6799e"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "b5b9b35a26e672419aee27299f5cc50f"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "d83b6293c7db21d56ea1778044b1949a"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "f89955428c834a93680b3e7579f59a43"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "d21563df4d4604fefaee1c5b47351abc"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "36497ba268ed2084f745d0fb2c71114e"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "7187b5ea721cd8d0d0760df790c9093c"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "44e9472e8f9799202d7fdcc6c6bc5546"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "70078b94e4ba91e823a81e5b24c68e4b"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "4d473ddd5f12d6b631654f7ce5ebc1de"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "3822639451a9e0b9d8842fe121537088"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "c650144eb680cd9b33e6d9e23d29d48d"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "10bdc6da017aad05c0efb84aaf42e0a7"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "6a96b887c64abe4ccb430f00f8561aa8"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "31732fd52f2cf51ccd3ea923166c42a2"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "f141ee31f614df58d571e16919633c70"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "aec1bce07a0b50e4a93a2ed8a3f87e88"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "2ee304292944ece8a052fdd471737d35"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "71e550f7c32d6bc55afacc850397e361"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "96a5dd6561caf15cdc227b404a30d05d"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "30a4a6a20507a627e80b3966939658ab"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "55c312df34846ee5b2a1d10525d9c221"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "34fdf2b03d447d8e34157c0e7cd4afe5"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "c19622691413dce8fbce0d980cca84c5"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "18dbbe65de864925f38be61bf5e78eb4"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "75341854148a5b02f68d287a24f3b6c0"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "7d299dad453c119be19f230e8674d92a"
  },
  {
    "url": "assets/css/0.styles.2398a5f5.css",
    "revision": "8b90881c8be9215c430c1373440eafd6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d08c447c.js",
    "revision": "9c8145b7a096d975e3defd223fd5657c"
  },
  {
    "url": "assets/js/11.fe3123ac.js",
    "revision": "7836ba4285cb3a41d0cb01e2f4309a15"
  },
  {
    "url": "assets/js/12.10207cb5.js",
    "revision": "707ee50ce625ac03dc43fc764f00fe7e"
  },
  {
    "url": "assets/js/13.6077e4ab.js",
    "revision": "cd284acee16d0a123c29200777ee36d6"
  },
  {
    "url": "assets/js/14.9d147d04.js",
    "revision": "01129d49ec11bf5da6e1d14a7699c512"
  },
  {
    "url": "assets/js/15.6251dd0d.js",
    "revision": "89e4d505430d176da0ffd526f84d4bd0"
  },
  {
    "url": "assets/js/16.7ceefc9b.js",
    "revision": "e84a13d6556c69a491405d89af2f3734"
  },
  {
    "url": "assets/js/17.3d7a7328.js",
    "revision": "7f867ed9c0307ba0c0d28365b34ff927"
  },
  {
    "url": "assets/js/18.ef923099.js",
    "revision": "c9df09ad27a0b8d10549534440e13775"
  },
  {
    "url": "assets/js/19.023eb405.js",
    "revision": "fdb2e6fedaaf2d9febcc26e21c664125"
  },
  {
    "url": "assets/js/20.f9cc9540.js",
    "revision": "2bfc39ed4c35cbed8b8442c582ed8fdd"
  },
  {
    "url": "assets/js/21.b2a1e551.js",
    "revision": "4fc49cf2cecc01afde0a7e1c3af5a7cd"
  },
  {
    "url": "assets/js/22.fedbed34.js",
    "revision": "ea80bba359dc90936a779e7ee4e2dead"
  },
  {
    "url": "assets/js/23.557f2f6b.js",
    "revision": "fc04185dee92ace47cfa55e0a2b86195"
  },
  {
    "url": "assets/js/24.42b6e138.js",
    "revision": "87a379665c048a9ebf59f95998cee24f"
  },
  {
    "url": "assets/js/25.61ddc038.js",
    "revision": "548857b00e24be2a3695f6f06fd0cfc0"
  },
  {
    "url": "assets/js/26.28c1ddc9.js",
    "revision": "e694f316c2da381b1fec23f2323c736c"
  },
  {
    "url": "assets/js/27.9ba38483.js",
    "revision": "027d0b28487b2856fc2b04a9d6cf42f1"
  },
  {
    "url": "assets/js/28.25623ab8.js",
    "revision": "64cd2227bc13e1fcbc12288f3c07324f"
  },
  {
    "url": "assets/js/29.4ea43850.js",
    "revision": "3a1b8e54be65b33cbe56e383a539f260"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "5b74fa33b0c6c00f486a7b54464d482d"
  },
  {
    "url": "assets/js/30.3c4a6d7b.js",
    "revision": "30690cb04ce2199ecd9ef61cdd6954f0"
  },
  {
    "url": "assets/js/31.4e0519aa.js",
    "revision": "4ed239980dca11564334c284d6f5d5ce"
  },
  {
    "url": "assets/js/32.723cfb48.js",
    "revision": "9abcd0ae2cf7a746e25397a07ee3df9f"
  },
  {
    "url": "assets/js/33.32879e20.js",
    "revision": "525b646b63ba4fab5c26527b0ba0bf6b"
  },
  {
    "url": "assets/js/34.482ea63b.js",
    "revision": "4de1c76e27d3acaca137d884e4c89ca4"
  },
  {
    "url": "assets/js/35.b512f6a6.js",
    "revision": "ce51d72d5e28748b56408c74cbef96b1"
  },
  {
    "url": "assets/js/36.34a149e7.js",
    "revision": "e90ed241235be2369e653086caba5b38"
  },
  {
    "url": "assets/js/37.6dfdb1fc.js",
    "revision": "63e68d532c3793af91a07216e0846e73"
  },
  {
    "url": "assets/js/38.86d04419.js",
    "revision": "e89f3c309ff0f66f41f36633bc174501"
  },
  {
    "url": "assets/js/39.32cf5498.js",
    "revision": "d1c16e0030140606811e186da74c499f"
  },
  {
    "url": "assets/js/4.4ac4e7a7.js",
    "revision": "e8a86572743e99ba91a7b6f8497e22ff"
  },
  {
    "url": "assets/js/40.47794315.js",
    "revision": "6287ed8d7693ccc9f1465c88a3c8e371"
  },
  {
    "url": "assets/js/41.99c82afd.js",
    "revision": "6663e4964de7e1644edd558ce5cc9a1b"
  },
  {
    "url": "assets/js/42.77ed8b45.js",
    "revision": "d1fadab2c89a109286229304d308d2e4"
  },
  {
    "url": "assets/js/43.a66586b2.js",
    "revision": "78de078220d0a66c024c9a773ed92251"
  },
  {
    "url": "assets/js/44.aff79e95.js",
    "revision": "2a1ef03243586bd58353594e03235cdc"
  },
  {
    "url": "assets/js/45.060975e5.js",
    "revision": "4d6acac7eeda73ddba85f51403c74628"
  },
  {
    "url": "assets/js/46.1f2b1451.js",
    "revision": "9711eac4ca22a94fa8d632b67b322af6"
  },
  {
    "url": "assets/js/47.a184bba3.js",
    "revision": "e1fae246e2877bfe604e8177d625914a"
  },
  {
    "url": "assets/js/48.ff7497a0.js",
    "revision": "30d09047cb69a2d2bde4c615a76d2ed3"
  },
  {
    "url": "assets/js/49.f0e7f5ce.js",
    "revision": "42b2c5a6e38b1ee0e99ad66ff3d035cb"
  },
  {
    "url": "assets/js/5.83763220.js",
    "revision": "f4cad0f859831c0a9993f88f70fc5445"
  },
  {
    "url": "assets/js/50.fee3b731.js",
    "revision": "d117750d0e6daac96a89a2205093a220"
  },
  {
    "url": "assets/js/51.aac20287.js",
    "revision": "0e44e14af184a435a26a93639074a062"
  },
  {
    "url": "assets/js/52.1aa85d10.js",
    "revision": "903c374fb3279e6d5479fb0d85c2c4c7"
  },
  {
    "url": "assets/js/53.abe167af.js",
    "revision": "6bb86d7af620593106df18ed6620b83e"
  },
  {
    "url": "assets/js/54.2a6a9b94.js",
    "revision": "a640a2c0c03ac320d1bf1430b085e409"
  },
  {
    "url": "assets/js/55.94d9df33.js",
    "revision": "211c30724ca0ff31a33299b0b87a9b47"
  },
  {
    "url": "assets/js/56.3baf002f.js",
    "revision": "329437d6a0aa79f27d97be9b2c72580c"
  },
  {
    "url": "assets/js/57.de3bdaf9.js",
    "revision": "851d5b2c12dd1859345126d520f0cd8e"
  },
  {
    "url": "assets/js/58.ad7c3183.js",
    "revision": "5d424ef0820eac2231e9e39019137ba7"
  },
  {
    "url": "assets/js/59.aa9fcf60.js",
    "revision": "76900f77ffe4afb17e6a4cc374e9f738"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.b8eb31a9.js",
    "revision": "540acb291cfa25a1feb580f95dadbd2f"
  },
  {
    "url": "assets/js/61.5ffeee69.js",
    "revision": "4cbc4f3035908896d27735d64b496be3"
  },
  {
    "url": "assets/js/62.7939a668.js",
    "revision": "14b8eaf787b78337033f369b2c891a66"
  },
  {
    "url": "assets/js/63.67dc054c.js",
    "revision": "d02f8b4e420184791bb825828062e671"
  },
  {
    "url": "assets/js/64.9e2bd4ec.js",
    "revision": "dba1b2cf719c6616673572bc5cf43a7a"
  },
  {
    "url": "assets/js/65.161de2e4.js",
    "revision": "ebef2f55e9eeb9d485c1b7fd225057a3"
  },
  {
    "url": "assets/js/66.1029913f.js",
    "revision": "5a2041c6ee627e7d023b63861eb64856"
  },
  {
    "url": "assets/js/67.f0f19b19.js",
    "revision": "ff1ca8de66a09288f212323ee31bcbd1"
  },
  {
    "url": "assets/js/68.c7a53246.js",
    "revision": "d4e152eabf296ee9157730f3d2df8151"
  },
  {
    "url": "assets/js/69.c6b1e1e3.js",
    "revision": "3ac0a9fa98e69ae4517b7d37bb74aced"
  },
  {
    "url": "assets/js/7.506f63fb.js",
    "revision": "8a466785bb94d5cfcc6a814e91d96070"
  },
  {
    "url": "assets/js/70.3ab35f1a.js",
    "revision": "44f9a3d55f40aec38d0efdfc7ec4f3a9"
  },
  {
    "url": "assets/js/71.a9fa464e.js",
    "revision": "b23efa69f54a91ec12869e3c78c948d4"
  },
  {
    "url": "assets/js/72.9a318d62.js",
    "revision": "ed6a9bf3c360c39ed59f32292d70e81b"
  },
  {
    "url": "assets/js/73.f4ae5204.js",
    "revision": "7335a0613a8ad6dc43baf4b17c51ad6b"
  },
  {
    "url": "assets/js/74.0909af96.js",
    "revision": "c99b32e98905adee70424d3509665f2f"
  },
  {
    "url": "assets/js/75.5978cdfe.js",
    "revision": "53210a480c6688c1e1a40eb5365e20d6"
  },
  {
    "url": "assets/js/76.5c338c1f.js",
    "revision": "06ae7ce892d7afa2d98d7de85f79f8e1"
  },
  {
    "url": "assets/js/77.4bfcef98.js",
    "revision": "c6540c1062567e18070e382ec687c499"
  },
  {
    "url": "assets/js/78.dc234afe.js",
    "revision": "6c8114aad8ee835ad97ab9ba188ed062"
  },
  {
    "url": "assets/js/79.f692eb29.js",
    "revision": "00e81aafface844572c8b977f4ac210d"
  },
  {
    "url": "assets/js/8.00f0749e.js",
    "revision": "bc34bc48f6a2f3e8e608bef6d2e4aa39"
  },
  {
    "url": "assets/js/80.2951ed21.js",
    "revision": "f2bbc749f5d4d2d912e8d1ae9fc41452"
  },
  {
    "url": "assets/js/81.fbccac8c.js",
    "revision": "bb258d4721a0efd093b277f9a36c589c"
  },
  {
    "url": "assets/js/82.bacce1bd.js",
    "revision": "d240ad581ee6bb3922b948e940e43015"
  },
  {
    "url": "assets/js/83.a37e1d09.js",
    "revision": "9b8c90a5e5a837eee8041b1e595850f0"
  },
  {
    "url": "assets/js/84.91c069b0.js",
    "revision": "e6efbcf8c97c26ff68e5df68a2f8f507"
  },
  {
    "url": "assets/js/85.f94e2d07.js",
    "revision": "dc66a877682f3b57e482cc8767a278ca"
  },
  {
    "url": "assets/js/86.a099ce13.js",
    "revision": "1f80f9764bb2d7ef0172b5a76bfae0d1"
  },
  {
    "url": "assets/js/87.655acd9c.js",
    "revision": "d92cc168af39342c7859b8ab759e80c3"
  },
  {
    "url": "assets/js/88.53d0444e.js",
    "revision": "b81719ab7cefec4c816eb44ff69058a9"
  },
  {
    "url": "assets/js/89.fa88b49c.js",
    "revision": "5e235058fcb97693872268ca899ee57b"
  },
  {
    "url": "assets/js/9.21044980.js",
    "revision": "038f2daee8cca270a3abdc525c38ac5e"
  },
  {
    "url": "assets/js/90.66d141ca.js",
    "revision": "085a2feae04e822e916a8245ec03d930"
  },
  {
    "url": "assets/js/91.09b118a7.js",
    "revision": "bd7f0d989e87d286e85248175f94b224"
  },
  {
    "url": "assets/js/92.70d6f672.js",
    "revision": "b5eea3b871ab29aa2d271ba5538ab61d"
  },
  {
    "url": "assets/js/93.73ca66aa.js",
    "revision": "40a908e1aed9359c774be650befe2767"
  },
  {
    "url": "assets/js/94.5482c407.js",
    "revision": "4b3124a6aae441691ee50319e476f950"
  },
  {
    "url": "assets/js/95.8f5dca89.js",
    "revision": "8b34a5c6ecf9f95fb7fe1313c2c2c567"
  },
  {
    "url": "assets/js/app.8a3e1a13.js",
    "revision": "7809967c772cbd1a1c9d6082ad423376"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "fd6e2ea1a1c9c0404c0dac9a23a086e5"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "dbc35bf5095e0845091d0a066ca31cbc"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "a893b40d087ca266200b9743dd2f370a"
  },
  {
    "url": "tutorial/index.html",
    "revision": "1afe15c12e05df6fda7a106284149846"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "bdadb5ad6c7cff817f71e41f3701c2c1"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "856676a1248b86e81cdf758565a1c58e"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "a0b274b0a23024cb8274fec636f4f91b"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "ffe9a7485532e69d368cd28c20cf38b4"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "39cd89bf7d4644fc36a3b5a8eee821f2"
  },
  {
    "url": "zh/api/index.html",
    "revision": "7e5d9ddd41f82aca38ab1523c93c6433"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "f75332bccff4042d9a080732fd4fef18"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "7a0cf3d1b0002a391489145ea3637aab"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "8552d0c1defefe5e64d4da46c6f12856"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "d85f3ad1d4e5d428b44d6b679f9218ad"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "1b066b5dcbcda2b9c7147e41a23c5b34"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "56efc0325c468e0c3b7babbe0bb65b67"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "73de1ed08bc8b0f9422b40efc2a89694"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "413844349233aadf42fefa19cf3f6aff"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "3bbdfa9e15852e1646fa8c468261027b"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "d717ca6dd164413f6945a341131a1355"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "c6da4ef1f8d5af47453f1eaee9bbdfd9"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "d72412d4a43be7ad9d5912506799f2dc"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "c4b882e4632b434afa0111d51eddde7e"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "654d575045fa2aef7c58ccce8070229b"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "12db62ed01db2c95e388f560bf3b42b0"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "aae2ee33e3d22826cc827401724b011c"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "7afe19b5c2bdddcac1f68a697e794c2f"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "7850b320a9a90d74f7e5f404503b0886"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "972425d947e3d40ef35880132c41b8fd"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "d351c14bb83b188a431a03850726d4de"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "804462f15db83e8861fe18dbf65a4f06"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "e6b09c8336463508be71e2418ae99f30"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "d11578c4c7a556d4ad4d33d77626362d"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "1b5c69a181d9913fce0a88a4c0c50f8c"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "89e19cc8769e86ac392fd17164f1e793"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "e6fbddc2f4dfcbb3e880c73ba69dfd90"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "99d07581f54dcf5557d9cb694f666bdc"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "ec335b1a8d1505ab5e5480697600b226"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "cd98e9ade22da24eaeca0527ce23865e"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "1470b2bba5bbb6b80d3e7f5cf64e40a3"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "943d79694fca56e85c9130f7d400f94f"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "2444b446372ba38a511ec7eb0531eab7"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "7f286071b166da954162e07be7c530d8"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "e021309f7d5ad0e32d85484ffcf75f6a"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "616fcfb99cab9903f7c9776ebfe14629"
  },
  {
    "url": "zh/index.html",
    "revision": "1f69fc1cb7b32161e7a75817d0f99592"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "2bdf94be336c096d1c068fe0694cc4b6"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "314a4f6ab0cb2f2481e04ebf0aca29f0"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "9f707e1a1029fdeed40616991e338700"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "63a3bc493e7fd094cc728f66076840cc"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "e7ea26281ee9dace95522a3bf0c11772"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "2eeaa884baa6b2cdbe40c9114bce13ed"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "df6ec65ee989dde50b3fcce2e4d8ad12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
