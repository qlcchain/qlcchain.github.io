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
    "revision": "c7e24eca47b722a6ba51183536838767"
  },
  {
    "url": "api/index.html",
    "revision": "57f6bbb9981286feef1833d61e07fe5d"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "c84e04337cc679559b303aba93eeadea"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "2db6d782605d69a1cfd6abebce9017cf"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "3622f59bd4856f690f67362793362ad9"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "ca214054e143677ef535159f8c71b393"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "e7537eec5a9e2bb0998cd215fff7a420"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "8d7ae1b160e4843c42a9d1549f8ac566"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "c5ad246f6fdbf9b0f05cc6a9503b7a6d"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "a781b595257bef2db83bdfb166ceb70a"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "0b6782358e82f73c88e4abfacbf913ef"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "c4e938caead9a36ac2a219ff17da8cd2"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "4877f2713c11fd358939414f2d0a79d6"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "d0a04256a64ced22c94f1f007c0b05b0"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "85fbdca0f57e4b207871d9686c1c4039"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "bff2e55d7b8494f8bc74304cd5921f75"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "e1292503e3475237b07e91903866396a"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "26f6d2c74a5371387ce8e55afca2dc97"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "c7e58198da32f60597304d01bf334040"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "8f1c472e43f41d3c4a18b0e4a296fed0"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "32fb3f20ff3df33b45cbe14e58efc758"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "f6563c555ac0e6fda06007c94b9944f2"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "b38c464f95ca6f63df450a0a8c699194"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "6e44257850e459d4ec7a8f6a12a87884"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "f55b9e6b859689e294a5102dd7a1b36b"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "f4046b2a8373362d299162564f7cc16b"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "2af3419fe89012c1837d60f1fdd01663"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "dce703b4eec591496088dc9b60f74811"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "1e5a158491941f1f8b21f63c70b3e151"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "1a22eeb755dbb6bde1d084d75e8d3b7c"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "e371f7cdf2efdd8ddb93e5b51ec51579"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "5bd3de56ed95c8ff06249aa02842732d"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "e1f29be7003420615caab57c8fe1e4ea"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "1e8f9d77b580d373e3cd8bd5429a0217"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "22cd7b51a15087ae1da4a9c761e36c9f"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "843e0cb85fdd53b996b6a3521a0f7495"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "67a46513fc6caa4e50692c35e767eceb"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "63f6a538ac6c1f8c59a971b2886458f4"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "6661c3ace54dae1a181830fd6062b551"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "c7fb61d719df96c71b7e4af5de2fe02c"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "0a30ffe802a5f3e80fa05ceaf08103cb"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "00a6616dd80678096f5ca1787994f54f"
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
    "url": "assets/js/app.134ef7a3.js",
    "revision": "d279632aa2a8e3c6c2808c516076cc56"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "3340a636066a67ccf91d1cb8b8241e40"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "97eaf81e6fa329aa3aa02bee45518e4c"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "1e3127b7e53b92b5ef4d0a0a2e6e76be"
  },
  {
    "url": "tutorial/index.html",
    "revision": "be2e2b25dcc7843c8ffd2c4d7c3c8c87"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "0a2c028ca02418a84bcf1b0089883ff2"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "76875fe91e46c4dc2c2977c4600420b6"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "919d5cc3da913076999b0db37759fb8d"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "e87c47167535e8f87da74c60d78f6758"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "8174ccf4bf5ed068364c0ef0817ee868"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "f0f6c9d1ef44083c8747f9038d32e64b"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "5698528899c00f114a402f2db91e1b6b"
  },
  {
    "url": "zh/api/index.html",
    "revision": "f0d4be0fea7fa1eb42ee609747c3986e"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "292081b56f9071850e6a1e0ece121b3b"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "40a2f45bcff80ad4710e6ced444987ac"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "5d8a2a512ce8f6f6420402ff8e3a3a9b"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "a0f376075d71907c84a598c88ef9a810"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "7fa2f6e183a335b9535f3d32d5c27062"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "65cef86c27ccd918400f787ffc15db84"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "f06be372105d99238c26c67d77dd7e6e"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "1d1cc1e870f30e7e5e70c415a58cbcf3"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "52d2209920370962e94af94216813278"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "752d289c5ddcf6c951a3a48c4a49464e"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "af5319ce69a4134d51918ad3ce3a844b"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "0aebfa05d2d5c0a92f81f0be417d37d6"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "f607936d5391589f82004fb3b8453c39"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "6cbdee9a2ed1095ad35a0140f25fb416"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "5c745eacce4ab73cffb7f033c20ee5e9"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "f6ec5389b8c35a7a54cc0b96ebc92b87"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "9f4cfcb779c15af5bd776fb4adc1ecc1"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "de67163be9eeaf917d3ab01091d530ee"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "db3f2bde34b251551bee1808cf41a6ea"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "79d1fd0eaa569b4107dd8235444afc3c"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "f50b9877c93758ebe4b3e462ea1219e1"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "161b46388f2ae242853397ecf6238efb"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "76c6b8e9324bc4b4fc200e4494f09ad8"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "9da3d0ce810774f513a1ddda08df53e3"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "a88bf88e626c129068f3e82aabf60c8b"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "eca51107a878b7f1975535aa361caae1"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "5b61235c71b47ee090420919ee11561c"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "3271c215827c24a169743b9ddbe9d638"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "cb2b50a9ffab5bfbe17886331dbea054"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "6efe7ffccaa5a31fcb8a01fbbb2210aa"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "a976e67d7f658fd71c32591606eda7fd"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "b2cdfe09895bc42f45294412dd274e57"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "7bf14ec420240ad8460162a532020340"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "862402f2de9c6494310369d0ebbf6fc9"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "776217e9220455df600acc33eb56ce35"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "00046448bd6a82bafefae62b303d855c"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "a2c3f675d2ecac2c708c3554eb4f8074"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "d7895f0abb4c500ed077776d05eb1860"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "f09d52d1e036561dde098ffabd4643f6"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "a62edd326eac86f372bb3ab1adf3642d"
  },
  {
    "url": "zh/index.html",
    "revision": "0c2ad4b867ab3e4b274d472523d9e702"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "dd68307536f160725fba67e9cf4cf228"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "e66cdf830de62ad1e850c3cbb6d224e0"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "f28c666a1e992e4cf868aabf043da6c0"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "8d6c01d2ddb3605728692e1da2b8627c"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "fec7cf8fdf7180413c7f1220175bad2d"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "c8345c1069683d808f9d8421e0afb22a"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "718024de4308b03933342b3e84c49a14"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "3f5629b966f46d6d3308e163ce353048"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "8cb1ef12797465d6f50be818ca7c9f8c"
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
