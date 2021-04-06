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
    "revision": "c9151f52545a09fe8d7bc05b5df25639"
  },
  {
    "url": "api/index.html",
    "revision": "9546964509ffca86e0d9f4ab2a5def0d"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "d1e298300bc0f4809c5a349873a2a76b"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "7f40c1cc5d456b7269621f11e8aebe33"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "ce19621c59b9df98f9da04fcc6919192"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "bfa1b829c76790b2b3cb1e4a8f2d8e45"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "06128d5b57fabec700f5bdabe988e66b"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "4ff22f6dc0de6a2992adfaad8ab4d3e5"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "395ea450b6a42440a9294eefaf16c97f"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "1ba4ca5a3fe006ad942c45d45cbc96da"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "7753a222d9b964a7c27b159979661972"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "6bd84b3a96c7bd93b211ba93e48933e0"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "9caad22efd3c21d8f190ba434b45c1c7"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "1d7644e145d6de41f94ea661b5176129"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "db25ed0813d3190f97e540b77a5d3922"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "33c3cfa48b629447fa43f097611f7e73"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "6d2be78125312ca260e996785ae6cda3"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "71866328a5417c836a74231ad63525c9"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "fad29a82a88a16d450f491d285e54e3d"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "afadd8b7903d4a1e7eef1b09dc6f13ba"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "9c534f83d80757ac3ca78803118d132e"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "83a4905622125755b5044585f7b1dbb5"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "82b00c33cfbe90e41a6848c90799c676"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "e725e8b5538a5df4d893aa1c0bb80fd6"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "cf93544282ef73aa7556118408ffd1ea"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "44529ee49af2353942ca00cdbf352abd"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "2e336f6a78c18ca8fac34189db441336"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "2c451b8fba296e02d7b7d7187c225a56"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "47297787f7d1e297a4a25b38f7b37a13"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "12c1abad67805a358d6390f7bdc49e0e"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "fd90420f8c63617dd4b9d5fd9f4aa55a"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "372819e7bd48b1c256b7e4870ffb19b5"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "8e4bc1bf9f2642fb46080347a26e9113"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "c753212693da11f6d574d37c1ea8fb7f"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "96d307c239f4367e643c52ce784f9641"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "caf95285909553f8ffb515664a3138aa"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "934b965618c7731642559a99f87eb8d8"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "80208370f3341340bebea2a9e2994538"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "e03fc32f7ab247e787c0d811e4225690"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "271414f712aff194ec72fd353e400be7"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "be00ee55147719755aefe23c25edf91e"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "9e1cadcb960613ec43ef163ace0a9de0"
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
    "url": "assets/js/app.e3094e73.js",
    "revision": "3b7d6d49a007364212ed1c37da99b01a"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "e6eab8e661ed48345b0ad5bb87f40087"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "e1d798437a75a62937a110ff1f7e807f"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "8478c8ed93ffad65698e1415862a81ba"
  },
  {
    "url": "tutorial/index.html",
    "revision": "f4ce91aad432e8d1f545a1146235929d"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "b328841f228d50d269cbcfd412658930"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "4fda9aa7a00ce43fed269aa4f772be90"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "ba1f55f759c28d02305439a180fcbb4c"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "218d3324838fefdcb1f35aae1a4245ac"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "9b143d2107614c1c54411a77c7688a1f"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "c5ea822d5300d153d4f6d4f7f2d37bc6"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "79e00747a78b30e4605dc90a6aeca996"
  },
  {
    "url": "zh/api/index.html",
    "revision": "9029ac35fb2187df6550a9d8253078d4"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "07c5d42edd5ac82fcb8044e08d25ed90"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "88fb536f43182e80aea19cb5cc1fdd60"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "27f81af855143997cd2bae2fd79fd6f3"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "6d8b9700ac05e3674ecb6abf9bcc3cb9"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "b821cb5fc6d3785c068bb5d7e1a4faa7"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "65f71e9e1f080832e09aca9df95ea9e7"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "6ff2f770aacaa99426a548ce4fbecc46"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "a3e626755cc662018954f76c81cd6695"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "86464604eddc2c06d6afbf33c295b594"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "4253d73d04ed4fe3d6dccc06b039ecfc"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "34f8e199cdcbcdde432bc2fc9e986eda"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "f91b3404143cba7b75ccb9cf4113e84d"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "77e2f25e8721bc5fbf50f477614c18ff"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "ddc10e5b1cf7ecbb646c7c2e61c1bfcb"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "2b5f7630db36de679fc889b71117e3b4"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "892055f7da8203003540b095a1d6f4db"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "ffbf805273ae85e760731ec811cdfc22"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "0582633ce8e1e0743808537ccabdfb54"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "3b60cdaae81d4dc1378a856d8c75359f"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "4676967995b8a05fcefad1b4b0658b08"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "c63bba7f4439eb8891f684346c6b7cb2"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "f3905afd922a03e7d7422573d2f184e4"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "488992b6f078b36482db6581d37e8c84"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "d4eb5e566200096d2cb7b591fcbf2be1"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "9b6352476047e12daf1bf9ec78258f82"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "d0fccde464836bb62edd415fdc72f6d0"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "5f5fdae2d480a7fb31433e1d5f15bc02"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "7cf4a342cafc607a4baff4009b87ffe0"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "1090b3ae1c8b3475a3775151f4f175d5"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "6533af097a420a7a224fed71c1ce06c7"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "826be3bb7f7adf2b8df08675db33ac5f"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "5fb8615c1773b4078345c02336e78464"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "a9bed70d37d15b488539c2d920306c7d"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "e47f489278baa6f52fc836d4b65a3f6d"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "99e8a9a539b97f4bfa5fec4d9eb9a513"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "f6dbebda48c87fdfed992e577e781cd7"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "486eec5ebe42fab4afbe85ecca37786f"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "d3790194e68959e0b86c0b83aee37973"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "fa11c30907cdb0b71f2b4afa290ef099"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "4f1d629dc1d637bbc924ae50c27cf3d1"
  },
  {
    "url": "zh/index.html",
    "revision": "44ff8527a342065e8e76510657d40021"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "1bce58533792f952beedb4290ab6f041"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "56d6c162910296715ce05c7644e2f9ae"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "d9d443d4a0b3d055f33cd566c18c59e9"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "54abe970ae7c2d4cb8ad6eac0e089618"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "e6adf98925d3f7faabf8a4cce82f32b3"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "3abae05b6a0cfeb51fab5e6baf81c981"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "782a6c8fdf9e3b5771f6aa46049efbf3"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "aa2dba23cce637da3b409e9f4102786d"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "bab1aaa4bcdc120d65ac5051e269ac3e"
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
