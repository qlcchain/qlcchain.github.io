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
    "revision": "c90ec12702ade2fa2a3a73fd88c258aa"
  },
  {
    "url": "api/index.html",
    "revision": "32764f349d88f51fd370d6ecf5b5402d"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "716a3cd2057b1fdd919c9ccb65b212a0"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "0e332ba985b2297c51cd592363f143a7"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "58f7554eeffc206862f34168cfa7979b"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "e8f16dab198f13b4a9d31693accfbe85"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "7b15e300ba39bb46a7c176c045c10c7f"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "9b739c595a6631a5a301d5f16931240d"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "dd7f7a88db9575b2764cbb2c344f5d35"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "3b3cb754146ddb746ad6681e3b82a69b"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "35bad0fe7ec42d5d74d152bbbe75b4cc"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "bd79a262e3dcf41be197b96c3bd2247c"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "56ee17d61acfb11c05793f818ad09e75"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "dcc9093c27cc5e3a550c90dad76db11e"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "7332c0bb70c65a02906f4dfea4cbb704"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "30977256740d70955ecca277428a218c"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "820ef6de4aa9361b64abfc5dc429192b"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "9e7ebd01a550c3607e4f768f985638d0"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "103102581d1643e1b6c758a0e2edf45f"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "cc00c8baff6c019b551100fbe250c67a"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "81cdc09763b2a525dd71f2c53f5ebca9"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "f71647962ce56ef5bca2b0c4cf2e1143"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "53eaab47d1f79adf2657c721a0e163bc"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "53bac36bc52a97e14278cb57167599e7"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "d68114f28ff4e7fbdd892b979254898a"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "3539d80d3e24576e8fa4d24e6265e9b3"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "946d6208bc535449ffc715df46f60d90"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "c2696402d4c7859115aa6d9b28905842"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "7e48ae66143417506f6a6ef895c123f8"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "96c19b5eba0ab46a37e8777357c2065a"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "c9c3815d833e1465993ccce5d6e39a3d"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "126b1742ade458809c14ec21e0e51082"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "db93abd6bde82d1e3c7f997f530f0409"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "fd7d65d0d60c774c05f106a5fd7928d2"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "5cb0ac66970d20c8261617e29ca3e7b5"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "95248d24322e9d379a64e8bf2191ea8c"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "a5414df56c8c8bb602f5c4c90a69f0d4"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "11cbc65dbb34b33e96735a433663856e"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "4e810312ba18a38b0d9721f829e17a96"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "b2a8f594349e174574f4284edc2eb0ce"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "bebd0678be9ebf82c8055084265756ee"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "ca0ddb2c112feb140e543ffc86d4fa8f"
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
    "url": "assets/js/app.5f377a6c.js",
    "revision": "8c9bb34b66c89b42332c0964a9b540cf"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "9797d2dc2f9da61fd7c9852a42531167"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "7aec686cf6cd7db4229a623256b410c2"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "c3ed0b00d2b595734d7fc5ca17b3df9e"
  },
  {
    "url": "tutorial/index.html",
    "revision": "05cee24c0e4789163cc5b9b97d8c3cbb"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "08f2114fef0158831ac887da557d4af1"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "f22cc9a1bc52dbbb1835e4c10ad09eff"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "cf59d6105d37c20ec6de1c80406ec430"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "0304dc9c0bbf37b3bd3ac2eba5fb8172"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "8c1141a41012d1a461047477b60b42bd"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "4c01631dc4a37fe571f12682a49ce97d"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "f1e6949a6605e946aa50aa34b2092804"
  },
  {
    "url": "zh/api/index.html",
    "revision": "60842bfb40717d61d483405abffc9905"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "c3c7fa2d6ca7bb2ea3b91a955c0735ab"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "75182712739868675978d6728da7fa46"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "da2d4ed982d1e012d99bbc7cf0d83698"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "37be71061d3359fc5ecdcefe873ebad9"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "9669aed2432734080640001dac27f2fc"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "bdcba86d555f78c3a1533278aa6b38fc"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "56b83c994dacb943dce31f84cbc54f4a"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "94ae6295b4e5fbc1fe16284e5a7902a8"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "98b3e70b02e2dc5f065070c251dc088f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "06b74b64b7bc600064c5ed95f2c20062"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "ab13a350511f73f05c8cc03e11a2518d"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "068a562149dd6541b873f7450c8333ec"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "79edd03369db826aa1cdd41795710933"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "f602f22f9235ccdf83d113cb21bd8aee"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "2355fbde8a537a7c4c0cbceb5206534e"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "c34d0e7847cdfae3a644af33fd152189"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "d3c6352789484c36d96265b09043df9e"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "fc77ee26b1daa659ae46261b287886cb"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "cc95837e9cb02c8a4ffa4291f6b780a3"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "0a2fea256fd0265d0c5b460f979c66d2"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "03a6510653df2da42aa67d2b343ed220"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "c8288a91715cc142ed5abd285f132543"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "fff46398cb73a4d34720cb471d0b4579"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "1036050a1925120d2ec5fbb893b5029a"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "b7f36853525590418c15731406d4c965"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "030ec2e7ae6fa70cbaad184c6857b55c"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "2cfe7a4b3fdfae2e94f680568278fc22"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "49aaa41bd49fdc0c1109f496af141d81"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "6d575925d92613f36c103e62e6e3aa51"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "af6ccd69e269caeac1a2f022514367e7"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "6c29526e48dc9b2d2685dccde30b2db8"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "40860f8cce2d731ce7af910d37fbb1f0"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "69369b53a0f450cb28791e39dfcd5cfd"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "d5bd4d1b5ebf012bd509613f9e5dec76"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "b7b333ecfd4e7feba675b5509c6b2efb"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "bb255ceda79edbedd91f27d19f4dbdf8"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "207dee4e86282a8cfb75f92e2443ab2b"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "635b503ed2ca7262a726504b28200eac"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "d87c6c957c28729d1e4836a7076c2b5f"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "0138fc9d68e0645ba8d12a4d87f22431"
  },
  {
    "url": "zh/index.html",
    "revision": "198e0b1844512f5d1a1634e9e182a0c7"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "9ec0cef8760a26378a1d2dd4dc7eeb16"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "d4fd244d69f1fd037c5a553a9db5eb00"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "9262b3f3d10683d1fcd947d9a462d3ea"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "90b95d68c6d6f33da010ac4e19dd4e5a"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "1ccbaa22193d744d87117ca3ae3e35d9"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "66182e148558bd7aa1818a4a8fa877a1"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "d9bc51e29d9e3b51941266e7a3a5eb3e"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "6da35c583f965ec020a367b003723ead"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "51ef5d0f37d2745ff6ca3c3a6387f1cb"
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
