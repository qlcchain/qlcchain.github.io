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
    "revision": "35182fa513e0820d3f701f45ac40c60f"
  },
  {
    "url": "api/index.html",
    "revision": "4cf70711ecd20b73f38f99ae1f447f14"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "f817683da130880066e2f255bc45bcce"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "cc32b603415559bc535036653ee864dc"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "22eb76062d4a14a043b848f2bd9a98e1"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "d08fefea5cf3c5b3886d22f650dd4a0b"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "0b7d14ff0bd2d5b0598b875bda40f28c"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "164be9d7fda83aa6ef4258a8cd01f93f"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "0a3fbe82a4edc848dc35bf97e3d8d951"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "3676017437d5491249ae5ff6556be247"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "9414c6eb082c6e4c41ea239dfda1d689"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "b3790c2ac5ae09e6f7e93d837ac12882"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "4ada4fba93ce67ddb37da3e451ca8f5b"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "bfef3791f2e70f0a80d83b651d77cad4"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "d79db200e998e3f89842e4f11469d5d9"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "a00f2ec69c6ffce33682b6532657d8f2"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "e1f126a6606414714c8045faa0621345"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "4eedd0f7a8e8259b0db115aaec1b7339"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "19268bc22b6f7523f6179e4d27f41314"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "ccba8fec9462220e85b044194943446f"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "79b9083aa104c43375d71b3f8ade205b"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "27c0bae81317f844c6a3226ba8da4f2a"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "5e2598fc4faf68056924b14092464ae9"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "cd80473b9087bbc8e6a1c5dea16533b0"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "5a954fd8637c56259cadd443125ab777"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "96b7b864144a34e2893b7f1e18530890"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "2fdebfd67997024c39ac19cb703d1f15"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "8afc0db47ed5a1c40b5f9adfd2e05800"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "f9939e3551c91c628dc7ef1e5697dfbb"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "15e7c0be9be84b75ee6775b6780b1f03"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "67bff63b8a1c88461aff5343016ac3b5"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "316fdae8e70da11ec6d466022042bd23"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "7f475fc7c7a1a32ce470caea02682139"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "f34389faf39685427c1d4fab51d3d0e6"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "db9b905d28f60368f1592b4176c39bbf"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "ce4b668c327db71efb4a6679500582fe"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "34b6688d74631b4a0681d0ae72b8342c"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "7b9ac49a1fdfbfe398e437059163a516"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "aaac558465e58e086a6ef79537be55b4"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "a0b315336dea63ec0e4fdfe56e2575b9"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "eea9b386e4cdecd570c44289f9c59708"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "4cef95c91cd53a01b15ed521ac402c2b"
  },
  {
    "url": "assets/css/0.styles.d0b74ae9.css",
    "revision": "86e694862352db3de6d33a1f55ff1906"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2590a40a.js",
    "revision": "482f44714fa4be4b2f81ccd0164a58e7"
  },
  {
    "url": "assets/js/100.182f9e43.js",
    "revision": "60864ec92d4f7715a1c5af58f7867c1d"
  },
  {
    "url": "assets/js/101.3fad06f1.js",
    "revision": "c0488afe95f1308ccb4e90d77726de61"
  },
  {
    "url": "assets/js/102.d70375b4.js",
    "revision": "ca52c12232b3a5288b400261ba912e72"
  },
  {
    "url": "assets/js/103.c2ab926d.js",
    "revision": "6386af092ef9d397f79cac09474e2410"
  },
  {
    "url": "assets/js/104.bca9aa45.js",
    "revision": "57266d801a6500a7a4c44f7ffb979df8"
  },
  {
    "url": "assets/js/105.a5e96da7.js",
    "revision": "888ca2b2f363f1a6cd43eb57af785291"
  },
  {
    "url": "assets/js/106.2e1d07a0.js",
    "revision": "2a1f1c174dd026dfa0f7305a3aa0a353"
  },
  {
    "url": "assets/js/107.09a362d4.js",
    "revision": "cad80f1027f8c2e41ecb2a9773070273"
  },
  {
    "url": "assets/js/108.1a8ae07b.js",
    "revision": "b93e82dec92e1e0c1a566f52ffd95bff"
  },
  {
    "url": "assets/js/109.e8503832.js",
    "revision": "1b8f6bd44f9bc53912648325302903ad"
  },
  {
    "url": "assets/js/11.ca1853a1.js",
    "revision": "5dbf412ec1043bde3fb3547e2b797fb9"
  },
  {
    "url": "assets/js/110.d08cad7f.js",
    "revision": "93c39a1bd462e6db7f95095286ba8435"
  },
  {
    "url": "assets/js/111.57b49cba.js",
    "revision": "485a7cb99d2a5df192b3d25719b7aec1"
  },
  {
    "url": "assets/js/12.a0194ac0.js",
    "revision": "6e51093d92d082ae4e5cea831dba3658"
  },
  {
    "url": "assets/js/13.b73c7a60.js",
    "revision": "2862828c7562fcee86958610266f8378"
  },
  {
    "url": "assets/js/14.b4a3c123.js",
    "revision": "8335ea1427036c9e7097c600b7b5ad7d"
  },
  {
    "url": "assets/js/15.706b9d0e.js",
    "revision": "2049df61a50a25dfba26aa767a9d63e4"
  },
  {
    "url": "assets/js/16.6730709d.js",
    "revision": "158ec047e90a463d931abd3441eb17fd"
  },
  {
    "url": "assets/js/17.f07b8ba9.js",
    "revision": "8a9a2ff72d76cbe14929504dd24f5442"
  },
  {
    "url": "assets/js/18.9c8acd11.js",
    "revision": "ad88dbac31096d9e757345f54c4b5a0d"
  },
  {
    "url": "assets/js/19.eccb159c.js",
    "revision": "50bf41a43ccb272c2e63a2d566592284"
  },
  {
    "url": "assets/js/20.9d109788.js",
    "revision": "473f7e91ffe327712e9cfa172c83c683"
  },
  {
    "url": "assets/js/21.291922cf.js",
    "revision": "da597da1f8fe0c1254064ec7db7ebc72"
  },
  {
    "url": "assets/js/22.7e5a31e8.js",
    "revision": "e9c09c0098b790fe631dd833eb98d69c"
  },
  {
    "url": "assets/js/23.2bd5291c.js",
    "revision": "40b083b46af1ed9a92f46f5302ea4974"
  },
  {
    "url": "assets/js/24.5e111a4f.js",
    "revision": "a1d1d054529c09392c653b8be1ef8935"
  },
  {
    "url": "assets/js/25.3d217760.js",
    "revision": "711b6d42f25c9705953293b97a37850a"
  },
  {
    "url": "assets/js/26.5437e527.js",
    "revision": "84ef61618999ce87d27a11c49ca414c5"
  },
  {
    "url": "assets/js/27.96d13a98.js",
    "revision": "3f2f72360229e17b88e2c6dcbe354ba8"
  },
  {
    "url": "assets/js/28.b86173a9.js",
    "revision": "5d1aa0eda63b4cb47fbd7e7231ddd6c3"
  },
  {
    "url": "assets/js/29.498bf16f.js",
    "revision": "dd018c925acd4dec6a4c54fc5fd5568c"
  },
  {
    "url": "assets/js/3.6ed047b1.js",
    "revision": "02cd5e537b22c48b85d3065ea355979b"
  },
  {
    "url": "assets/js/30.4e0da4fd.js",
    "revision": "b6b5340d759d5dcce18a74f5950d8f9a"
  },
  {
    "url": "assets/js/31.a2d2488f.js",
    "revision": "bb59206492adeaedad47d12201c92ee9"
  },
  {
    "url": "assets/js/32.b1c871d0.js",
    "revision": "c103074d79e173f4f7429fcf6da904d6"
  },
  {
    "url": "assets/js/33.b2917b55.js",
    "revision": "5a836de67f2b1276d3abf84a01dd1b07"
  },
  {
    "url": "assets/js/34.9c53cfb2.js",
    "revision": "db42db1ab1b340cdce4215a56c470301"
  },
  {
    "url": "assets/js/35.1c502809.js",
    "revision": "f56d60558f44686d289f0d109235b0b0"
  },
  {
    "url": "assets/js/36.4e341f4b.js",
    "revision": "7564bd5c77b3e439a98b1ba3e7296337"
  },
  {
    "url": "assets/js/37.0370e19f.js",
    "revision": "f3964feb9b81a05927fc60adaef98256"
  },
  {
    "url": "assets/js/38.ff0abdaf.js",
    "revision": "e8c79341386e71b98fb004fc04305ff8"
  },
  {
    "url": "assets/js/39.c8981ec5.js",
    "revision": "060bdc57b27343ebee75988ec1e9b8d1"
  },
  {
    "url": "assets/js/4.3b4e377f.js",
    "revision": "aed79002394205227a883139e97fc552"
  },
  {
    "url": "assets/js/40.04f1dd9b.js",
    "revision": "bfac4fbd92c2c0b421885fcacfebf68c"
  },
  {
    "url": "assets/js/41.229e1bce.js",
    "revision": "e30da5a66ba5cc01fb77e16b8740d8ca"
  },
  {
    "url": "assets/js/42.2153ced9.js",
    "revision": "4076f4f2e7cc78873fbe2dfb1ee35bbc"
  },
  {
    "url": "assets/js/43.697c9b2b.js",
    "revision": "65e2bf9656c51f96e3c65dc98b5d7201"
  },
  {
    "url": "assets/js/44.39d12746.js",
    "revision": "6175feb5b182a8a359765100f96872dc"
  },
  {
    "url": "assets/js/45.70f76971.js",
    "revision": "83836de5e5a2fc02079109e942dde43b"
  },
  {
    "url": "assets/js/46.d7937b69.js",
    "revision": "fefbd2250cbe64362380b89a87291707"
  },
  {
    "url": "assets/js/47.c33b82d9.js",
    "revision": "a8f2b713bf6852f504335d9d1451c4bd"
  },
  {
    "url": "assets/js/48.4ebe2584.js",
    "revision": "47f156be845a024919c0b0c1ed5cab2f"
  },
  {
    "url": "assets/js/49.23420f6c.js",
    "revision": "7f8bf25eb38c1e4726f89e6172c26055"
  },
  {
    "url": "assets/js/5.5a3cb67f.js",
    "revision": "53585c0159bb02ab3846527f73c33e92"
  },
  {
    "url": "assets/js/50.48fb8d33.js",
    "revision": "b38351bdee02624477ff5f68b6df1a83"
  },
  {
    "url": "assets/js/51.fba80efe.js",
    "revision": "e84c0dc3078116abd4e8bb52dfdfb0e2"
  },
  {
    "url": "assets/js/52.9adf83b4.js",
    "revision": "8b1cfa5e181d2023e0d9d797bcf9eef5"
  },
  {
    "url": "assets/js/53.8ca8f481.js",
    "revision": "78cedc7c80bd3101e6cacc74b296b77e"
  },
  {
    "url": "assets/js/54.47e908d6.js",
    "revision": "6a6705fd48733efef13f14b788c79ef1"
  },
  {
    "url": "assets/js/55.57b8ab3f.js",
    "revision": "d52e9a6ce970e0592b32ff34e4a5895f"
  },
  {
    "url": "assets/js/56.3c37a6b4.js",
    "revision": "7ef1c3acf52bf6dbdcf7f46298a31171"
  },
  {
    "url": "assets/js/57.16512939.js",
    "revision": "219e0cd292eb55b89fbb609375f50c06"
  },
  {
    "url": "assets/js/58.e1dbae75.js",
    "revision": "d2d3456746dbba786b6f550d7ed1c490"
  },
  {
    "url": "assets/js/59.fef3ea13.js",
    "revision": "44b21f9e7afa25241026325b34e56e35"
  },
  {
    "url": "assets/js/6.f4f1840b.js",
    "revision": "541c15b67bb570a8c209e3f69b2805b9"
  },
  {
    "url": "assets/js/60.2af2fa80.js",
    "revision": "8f8078538023308237e22efa6d3229e5"
  },
  {
    "url": "assets/js/61.ca23311d.js",
    "revision": "b4443a1cef9202cce1d89d45d9ba58b2"
  },
  {
    "url": "assets/js/62.75bf4461.js",
    "revision": "e63e8c320a7834949d1434f9604d1286"
  },
  {
    "url": "assets/js/63.1753e763.js",
    "revision": "613c24ba7585f7f07fcbfb19cbe2344d"
  },
  {
    "url": "assets/js/64.09739a7d.js",
    "revision": "8cc401b17941d8215f61d5f46c39964d"
  },
  {
    "url": "assets/js/65.5ce2dd20.js",
    "revision": "4c9a35a941794bf717837ddc8ca34373"
  },
  {
    "url": "assets/js/66.6d1997cd.js",
    "revision": "28fc58854fdb53ad150e6e4f38150d44"
  },
  {
    "url": "assets/js/67.aaa1660c.js",
    "revision": "f4cce1673cac8471aecf15afa4d2bda8"
  },
  {
    "url": "assets/js/68.7b3bd6ef.js",
    "revision": "b11242617f84c2a69d5974db15763061"
  },
  {
    "url": "assets/js/69.8cd22c1a.js",
    "revision": "d8f0c166ee662c7c04d7c43f48f88979"
  },
  {
    "url": "assets/js/7.ea4070c2.js",
    "revision": "ceacf916b5e8af54771a2cf496c92cf8"
  },
  {
    "url": "assets/js/70.6640175b.js",
    "revision": "e5598999e81b77a0c35cdde19fb0a476"
  },
  {
    "url": "assets/js/71.a6958062.js",
    "revision": "5d9a9ad176d722590551e59e95ec8b33"
  },
  {
    "url": "assets/js/72.18813373.js",
    "revision": "7da52e5640feeebb980945257aac0ff9"
  },
  {
    "url": "assets/js/73.cc5445ac.js",
    "revision": "8ee5b9b0d136482062e8b9c99fcf5980"
  },
  {
    "url": "assets/js/74.f7b8989b.js",
    "revision": "19e400ceaea40bb04b421439744c7c8e"
  },
  {
    "url": "assets/js/75.694d204f.js",
    "revision": "3f5fd56d804abd2f09d476694f07ab0d"
  },
  {
    "url": "assets/js/76.755b05af.js",
    "revision": "00535baf6e719734b41f6458c03c5bf8"
  },
  {
    "url": "assets/js/77.193dbfeb.js",
    "revision": "acd0dd899522666571b3c5f0808f6766"
  },
  {
    "url": "assets/js/78.2026dcd3.js",
    "revision": "8541b70a3d1b287c36c42deec42258ab"
  },
  {
    "url": "assets/js/79.ed6492dd.js",
    "revision": "e93a5bf7cb8bb2726c6696ce8e981458"
  },
  {
    "url": "assets/js/8.3e4cd833.js",
    "revision": "098badda83ff04aaa8a9f9cb2f82cc31"
  },
  {
    "url": "assets/js/80.2187bc7e.js",
    "revision": "1faf55151c4e37ad4d945b999381c6f0"
  },
  {
    "url": "assets/js/81.0f274c4d.js",
    "revision": "7a285b879b381dbe0681e6c7b1b68a9c"
  },
  {
    "url": "assets/js/82.44a14d5f.js",
    "revision": "989b4d31fb7e2b497c6a4d4716916131"
  },
  {
    "url": "assets/js/83.1f978700.js",
    "revision": "9836a7ebe11d6ca6112abbc586ade757"
  },
  {
    "url": "assets/js/84.7c4ec24f.js",
    "revision": "52e7101b7e2a317d6a7998c30fc1fab8"
  },
  {
    "url": "assets/js/85.be7c72c1.js",
    "revision": "7a213bd20f13bbea4bbbc027f903b5bc"
  },
  {
    "url": "assets/js/86.e61e661e.js",
    "revision": "aefcfe4a568a6d4da40a1e9f4eb3bf44"
  },
  {
    "url": "assets/js/87.017f1256.js",
    "revision": "c61dec2d2f487f6f860562fea4e30284"
  },
  {
    "url": "assets/js/88.b1b8439c.js",
    "revision": "dba88f47141cf74b7984e6f385ac955f"
  },
  {
    "url": "assets/js/89.2d1c61f9.js",
    "revision": "3d0ce620b7351f9b05225628c5f2452a"
  },
  {
    "url": "assets/js/9.0947698c.js",
    "revision": "b649d4e33d587497941d317628d1e173"
  },
  {
    "url": "assets/js/90.41c65bde.js",
    "revision": "ca5c551d8d3ba3e8b9b338c377a410e2"
  },
  {
    "url": "assets/js/91.b21fc9d4.js",
    "revision": "a0f54dde5db7db3dadd97767fb264e73"
  },
  {
    "url": "assets/js/92.022e4ca1.js",
    "revision": "832e232a4ece387c69ec61c37fe9645d"
  },
  {
    "url": "assets/js/93.81575fe3.js",
    "revision": "b476cf260a1c0b40bba661cafce627e1"
  },
  {
    "url": "assets/js/94.15523a70.js",
    "revision": "94e8f33ee373242c4224490e22e4a8d2"
  },
  {
    "url": "assets/js/95.da5c9938.js",
    "revision": "7bf1e57f2dd17800a76c4696db843a30"
  },
  {
    "url": "assets/js/96.baab0240.js",
    "revision": "7c900b2de83f5ea94985935ff4a3f0fc"
  },
  {
    "url": "assets/js/97.194b065f.js",
    "revision": "1655fbeada7526df6f00b3f87a181b6e"
  },
  {
    "url": "assets/js/98.546cf251.js",
    "revision": "cf19f1b093c1724909b8103007b98fb2"
  },
  {
    "url": "assets/js/99.c34d46a4.js",
    "revision": "1a44e1be65b01fc5be6f04726678c039"
  },
  {
    "url": "assets/js/app.b13f60c0.js",
    "revision": "f08d75d6ebcd5ed1ce69780a47d11891"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "83e7c3af44bf961a5a6cedde1644701a"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "e84c28c44f5fc4e76c022626c9e4fc98"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "5dc64ef2646250d0388cb5c67550eae1"
  },
  {
    "url": "tutorial/index.html",
    "revision": "23393242fa9f57a056e3b36f05c2d785"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "1ba2a5493d8d3b81e48bdbeb4e01d864"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "38bd6f96fffd155e3837223fef1b87ed"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "4a6a1f3193ad8af8114c3570bd2182a8"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "468d2b2f887fec9d293a905613eb4aff"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "4793c84e133778a2b11a4993e681b0e6"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "da8c314fec797c8f18c8f1cd4d8e4a6b"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "be6888cc234a8d3b22245f2f39395147"
  },
  {
    "url": "zh/api/index.html",
    "revision": "3b1bf17dcc1f8ebabab00ee5d93e79bb"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "d23709d18a3317ae95278ab1a1b9c143"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "c5faf4a111268687d36c3e2cceb61f0d"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "de8a0eb14e38bf5ae4951da2fe97b761"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "b7f483c920c3b0f581b966bbee52526e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "d9eed9f63482612f25d33d6e8481f86b"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "bf4de6ea46f1730fcc47f60fc7349369"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "55341246169fc811a280303e909c35dd"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "c81081b83fa2158f7884859f22472958"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "0037fc83efd00336af2b8b79c96fba0a"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "f13a72fbc7ebfde23293e38f457478e3"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "b61767cf5aaaa2fba3abd76ff2e9e6df"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "335964caa18b403a57df49e4046bc08f"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "bc0ec3715446dd437b54db81584e74f8"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "a9cd32cf2d0815d0b8020ae49297be20"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "7737063a3a127bec9995b59f73b30ef9"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "6188bffeba721fe49aa4851d4e9e55bd"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "657bcb816e6cd7176c459ac7e4ed9b45"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "6d0871e3afa74fc71028cf340dade231"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "23716da0a4623c6f0b83b19457e2f7de"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "31980a43360e7608fbef05c95ef8f28b"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "b3e76b3e2901cdcfab9636dcc8d64ac1"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "d64dc99cf4231dc2ba725fec31c6d1b4"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "ada756c7b4a35f3f7970d76839dc0630"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "c30ae32239fcf38dd4650a704172796e"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "d8df567561c9e808060a96531e174d99"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "48d8b7c4e5bf5e1ae074e2418745eefc"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "3b38289f72860f8aa7aaa6cf32f21b4b"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "2e7aea812fcb1715930bd7212ba319f3"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "0ac574f1693523aa953d4b4b09b9656c"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "569e3e6b4dc85531d551d71f2794d01d"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "f15c79a49e149f0b6ad27b3848bac0b1"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "9c9814e66ef3238a1767efddb5082fb0"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "600f80f38dd157188c0603d5b3c82e8d"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "67a1c6f3a73f5d46aade6c13e224f746"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "a9673190897f1064d629ba35a7ef22f4"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "80d47b9e7ce68016079c89474942f0ce"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "9f7d916c4995d622945692cb16a3148c"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "3f0cc1fceb3ecad3890d39691a8df0e3"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "e37ac1a4e0d7daf9e9290c36155a49d2"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "33c723de5ce219d22c099d25017a99df"
  },
  {
    "url": "zh/index.html",
    "revision": "f6b3e941665f452c3c820eca5222dbb5"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "8e3d5ee222f593d25e9beb9292b41fb6"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "949d6958acd622083236440b5da0d9ad"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "b8df3142a47fee389764679ee9b88153"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "ac7a67301a512c031369e1305f4c711f"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "fd437c745d1e66026908e016872f9cbb"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "ee9a7777edf3ba478865ef173332e82a"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "c60673aeb13e519eb2d2a6852bb44a2c"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "e40ab820efe479cdfc788e324bba97e8"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "bedd10e617d9584fbf4907794cd555da"
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
