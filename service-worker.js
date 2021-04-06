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
    "revision": "540c36eafa2915e9a5987888649a96b3"
  },
  {
    "url": "api/index.html",
    "revision": "599f138784d9d09a6eee280054ec2f42"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "a3a0c5999c86892eb6841c0df034d1b3"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "d4b6b01b184a697c9352284868f2a4cb"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "d4bcebac3308059ea34a70422a2a18d5"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "b8849a2eb4ca0443a18f03db6c106350"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "2de187f7102793a950a0670ab1cf69a7"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "2acc934cedb4b026d95aac4399a95f61"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "ea75b7af9b2447102254a3bf1cd7275b"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "0e9c76405600310111675bd89d901a94"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "10bdc937faaddd9adb5031448781951b"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "f58276c2e229e0a7c3dff2f5c813e165"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "6b54b79f81d593565eb10e22e71ccd0a"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "969e18b1bf2adca3cfe8d6f5df267615"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "139480e388eb29e2f9fa71df6f7a667e"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "4ba9059161b7f9c43c305085a88bcff4"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "4de564ad4af9406659b7c24d42f877b3"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "80a9ea9d93b4d8727f1895f16594cffa"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "f36f06af509435abf7103b0678a92245"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "da964405eda5825cffe9dd254b9f7582"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "d51feeff00d3c9e0a0f07cd62070a365"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "0596a3a809438926cb57a5687c5e54d6"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "f5f7bdc40de55f081a7bb3ee86728ee4"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "b9c60c383e647ab376748d3d37c96653"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "3fb6b23a88140103b4b7c474847b043b"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "486e0519d36b07ae6bd5c2a59484775d"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "128bff16d394b42dafc4e496d64b4843"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "39b0e7ab9d3789c7e469d83efc852e52"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "861c6a1e862f55d8ab78bcf7e7d40686"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "00f4139820e681022536156dba504d3b"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "a2f7924d29d6afe85223b85fac37d64d"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "9c65405ed0d09a1a0297c145ee41e662"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "d317607c4d492eae038e91f1e7d6866f"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "2ffc468de335954d5a3f8cdb6ad7b31a"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "2fcd7bde458ccc1992795595248e6c39"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "948ef6ec18553a9ace5701eb4250c135"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "339b111ae4a4b025ff2452c001dec0ca"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "8823d2b3a8f46ae360ad98178c49bfce"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "06676ddc9ff1c2e6295936df4925e153"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "c95426ccc71fc9ca7ce083ed114172f3"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "70f367dfa10317bf529af321eccbde3a"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "2d0bbedf81c2892972a49aab58e48f47"
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
    "url": "assets/js/app.0b41330f.js",
    "revision": "8c3b8ff09869ee02e4d2fc0e4c68a288"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "bacd42ba21c02e23861c801ac0010f60"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "297f3c9ebfb9598b4179efbc3584a021"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "598171fc1f3bc8c9e6a53b01f43600e8"
  },
  {
    "url": "tutorial/index.html",
    "revision": "572c97c60f532bdb63f7a9e94338c80e"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "fef5c70f55ce578efe378db0c0ee6fed"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "a4733bf0323f486da37653c6b68c58a3"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "c978acf67d8c2f7391d5b24da2293f75"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "458e88706ef34de4fa68a19ab4e337cb"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "f79da5d5a130ffccd7d86a73c32c84dc"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "dd45f7934b7bbb9c27d1287c0c5d7ce7"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "ef92bde92617393683cabf2720e71c2f"
  },
  {
    "url": "zh/api/index.html",
    "revision": "e13fe30efaf2058b47d1b801a9a69d8e"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "f4a02858b40c72aec8b32ad91b78042e"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "963b99bb51f840c54dba2c74e0f248e9"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "0ad24fd9050d7a33698291147e4184a6"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "cafe243f27e3cee1fc298ce480890aa2"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "5a39f03353f0e83f560fd3cd829514ec"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "139029e642bf6508005f5ffabfd191ec"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "f1f8f04c6dede70f18d7967b004d2fbe"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "514f8e1e08af493a81af5c5e41ef77d1"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "f6d4ba3e8f4f9091268ab3509c6bd138"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "9b15f66148d3a2ce7fe1c8afc3f31974"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "606b04a77d69d5aa196774a0d19175c0"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "6bcf623f548511b4ca2de66a3bdc7c22"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "327ea50bafa40c7a669c89d380312b2d"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "0cf0a676ea682f0474113780fcb76f2f"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "49c912fe15bee0a2e846848ee108f316"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "738f32134d23a6ed0a416642ef531ba7"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "5f971d01525f8f15e062aeae1966067e"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "52453ab24f3a3790a49df40dbaebfdad"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "d52b479cbae63b8391d5821c0bb84ab0"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "5859298985589535f3e136315d248173"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "be6737f863185d524854bc8644e6913e"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "4badf651716e56be489e60d6e7fda47e"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "2fcf2d1b070dbed11d5dcd06d3e528b1"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "06b5247c678d1f1a82e0fbd5b6b6d364"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "50661fa2409ad07348328508431b5019"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "ad4ec697d13695eb134dbe51766987d3"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "1bb48b21a425151fafbe436451c10947"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "0457d4201a3652bace1461f6d90d21c6"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "418e5ab8682cce3cb8eb02498f55ee92"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "ebfd3794640e163999bdc6f84c816c98"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "e5300e300a5e410922e5612182f00b76"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "56f05dc64fe9a4acd297601f73b74597"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "d67dd462385801ca22251130c2e6f791"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "9b75c0207d02f66216b020f2de02735c"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "0d46e712598407595b1ba8e4ec945f72"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "8cabfa3a482d2b7a9f0e4c40d76d4315"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "213f9b31e1639bb33d7601f903eef059"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "6b870cad2278191c0c7bba43ecb921a4"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "c6408039940db4b597cc902c99358cc2"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "55603f8bee8f6af6b1fba264a6720539"
  },
  {
    "url": "zh/index.html",
    "revision": "5dbe46ac51ab0961f59ed3ca0f585426"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "b976d5d22a6d2415533ad7bafc8e24cb"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "90fd3d122f1eb5d36d1c947a82297d77"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "d8bdc1957a445edbf6897c4bdae8ebc9"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "0ea7fc3e42c0335ba42fbbba15b175c3"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "436c730760d455db9e3f85c92bcfa804"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "81c9a6e3e24746a982fb23331970a0d6"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "588fa37e1a4cf3e7823afd7f5847d13f"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "daff5257d3de0b36c9bf5dbe46fa213e"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "74b5a6cfa3e6de94a0377af6c666df09"
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
