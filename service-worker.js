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
    "revision": "f6ed8958fd085a9449c821b0a5efbebf"
  },
  {
    "url": "api/index.html",
    "revision": "533d62f3d531405989630863947084f2"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "ca20794aa93226e619feeef79db82a7a"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "7f376a874a10454b89170ddfe0c11aa7"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "ab42bde717e21eb89edb5e538d72c0dc"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "ba8c5f872216b1870e224d704dc04fc2"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "43d3106330184ed8769671383371ae53"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "6409d00819670d153892fa2dc26449ea"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "d7d9a8f9f80f40f96a172f33236637bd"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "edb0093bb9f2937a0748a1e70877f4bf"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "779bde61f68a562fe08a3203bcb71491"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "b02b253e44db34dd31aa35d2800a8aaa"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "967bce1391e788c1cdd937d11a756e4c"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "fac57c802cfdc8ec4a694d455a4a3996"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "99dc33573c4b67df8dfe51a96af10521"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "06b99324890b239d84c3f5b3e537ec5a"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "f4cb8bc8eb8d32bcccaf21eaf5b1af92"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "abf279571b8833794d4e469d4a0c42e0"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "a686a2bdf26c56504836d9355215f021"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "72c5d3ac8dd98024306d7202251cb788"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "4a9f85d4994f3f0115bd9c17b1249dff"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "a05c7fd228aa139adf2dc8e92ab348e4"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "ced40dac7d1b0f18eb63210da962ed6d"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "59452167537cb91f4212b76d5331d98f"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "2004df6e58ce54c0202ef90ad0dc5a3e"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "87fe4e8b3904dd84ff5fcc594abfcaef"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "ebcbf5f1842c22b186d8ac11ad2b171b"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "db1de7cfa84006039ab175e6e3947cb3"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "b6c44e8254916d09ce7df006a7fa99be"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "f1202e9454235674d0a5a622b48a9d67"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "9b02ea5981f2090949c46896a67fba95"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "a66f0cad467c0c6c89cfddfad2ffe890"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "4183740c9d4f13f51b94c4ddd1b4ca66"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "0b7d30287441f3f5e89216380cb46928"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "42d9a4213d95e26d0429318b5db61a6a"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "0ddae9c8489d3e9eb05b9850548cbaee"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "89f74b607cd08c79281bad2602e5cacb"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "3a87780fd79c6847a98f92470212432d"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "661bb4583cb2a3095ae755f3e732d8e7"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "fc98a86f1935e65e59d7974e37182011"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "71b045ff6d4cfa97bae5da8d9defcf2e"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "6db67a86c8084e9d585bb330ebe5fd08"
  },
  {
    "url": "assets/css/0.styles.621aa944.css",
    "revision": "5adef08c7c70aadb35ce31c70b190399"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66eb2fbb.js",
    "revision": "482f44714fa4be4b2f81ccd0164a58e7"
  },
  {
    "url": "assets/js/100.c8af97e4.js",
    "revision": "60864ec92d4f7715a1c5af58f7867c1d"
  },
  {
    "url": "assets/js/101.5b5d9eeb.js",
    "revision": "c0488afe95f1308ccb4e90d77726de61"
  },
  {
    "url": "assets/js/102.9cac3593.js",
    "revision": "ca52c12232b3a5288b400261ba912e72"
  },
  {
    "url": "assets/js/103.399587c0.js",
    "revision": "6386af092ef9d397f79cac09474e2410"
  },
  {
    "url": "assets/js/104.b2d1fdd8.js",
    "revision": "57266d801a6500a7a4c44f7ffb979df8"
  },
  {
    "url": "assets/js/105.0dd9d985.js",
    "revision": "888ca2b2f363f1a6cd43eb57af785291"
  },
  {
    "url": "assets/js/106.7175dda0.js",
    "revision": "2a1f1c174dd026dfa0f7305a3aa0a353"
  },
  {
    "url": "assets/js/107.8dacfed8.js",
    "revision": "cad80f1027f8c2e41ecb2a9773070273"
  },
  {
    "url": "assets/js/108.f6a31238.js",
    "revision": "b93e82dec92e1e0c1a566f52ffd95bff"
  },
  {
    "url": "assets/js/109.a5d17ee9.js",
    "revision": "1b8f6bd44f9bc53912648325302903ad"
  },
  {
    "url": "assets/js/11.0efb8130.js",
    "revision": "5dbf412ec1043bde3fb3547e2b797fb9"
  },
  {
    "url": "assets/js/110.4af07c92.js",
    "revision": "93c39a1bd462e6db7f95095286ba8435"
  },
  {
    "url": "assets/js/111.57b49cba.js",
    "revision": "485a7cb99d2a5df192b3d25719b7aec1"
  },
  {
    "url": "assets/js/12.96f1c15d.js",
    "revision": "6e51093d92d082ae4e5cea831dba3658"
  },
  {
    "url": "assets/js/13.9f0873ac.js",
    "revision": "2862828c7562fcee86958610266f8378"
  },
  {
    "url": "assets/js/14.4b9cd998.js",
    "revision": "8335ea1427036c9e7097c600b7b5ad7d"
  },
  {
    "url": "assets/js/15.35170c44.js",
    "revision": "2049df61a50a25dfba26aa767a9d63e4"
  },
  {
    "url": "assets/js/16.17083f9a.js",
    "revision": "158ec047e90a463d931abd3441eb17fd"
  },
  {
    "url": "assets/js/17.82650f1a.js",
    "revision": "8a9a2ff72d76cbe14929504dd24f5442"
  },
  {
    "url": "assets/js/18.89918bda.js",
    "revision": "ad88dbac31096d9e757345f54c4b5a0d"
  },
  {
    "url": "assets/js/19.b0a39658.js",
    "revision": "50bf41a43ccb272c2e63a2d566592284"
  },
  {
    "url": "assets/js/20.1dead0f1.js",
    "revision": "473f7e91ffe327712e9cfa172c83c683"
  },
  {
    "url": "assets/js/21.c8d2807d.js",
    "revision": "da597da1f8fe0c1254064ec7db7ebc72"
  },
  {
    "url": "assets/js/22.8ab93838.js",
    "revision": "e9c09c0098b790fe631dd833eb98d69c"
  },
  {
    "url": "assets/js/23.f0d963f9.js",
    "revision": "40b083b46af1ed9a92f46f5302ea4974"
  },
  {
    "url": "assets/js/24.b0395611.js",
    "revision": "a1d1d054529c09392c653b8be1ef8935"
  },
  {
    "url": "assets/js/25.38e998db.js",
    "revision": "711b6d42f25c9705953293b97a37850a"
  },
  {
    "url": "assets/js/26.f52ecd89.js",
    "revision": "84ef61618999ce87d27a11c49ca414c5"
  },
  {
    "url": "assets/js/27.f501fafa.js",
    "revision": "3f2f72360229e17b88e2c6dcbe354ba8"
  },
  {
    "url": "assets/js/28.eb82a2b4.js",
    "revision": "5d1aa0eda63b4cb47fbd7e7231ddd6c3"
  },
  {
    "url": "assets/js/29.32ae47c7.js",
    "revision": "dd018c925acd4dec6a4c54fc5fd5568c"
  },
  {
    "url": "assets/js/3.2050b00c.js",
    "revision": "804910a1ee061ef68e8ba759b627e218"
  },
  {
    "url": "assets/js/30.6c1d8665.js",
    "revision": "b6b5340d759d5dcce18a74f5950d8f9a"
  },
  {
    "url": "assets/js/31.209291de.js",
    "revision": "bb59206492adeaedad47d12201c92ee9"
  },
  {
    "url": "assets/js/32.e00322e3.js",
    "revision": "c103074d79e173f4f7429fcf6da904d6"
  },
  {
    "url": "assets/js/33.3c9ce96b.js",
    "revision": "5a836de67f2b1276d3abf84a01dd1b07"
  },
  {
    "url": "assets/js/34.be14fabc.js",
    "revision": "db42db1ab1b340cdce4215a56c470301"
  },
  {
    "url": "assets/js/35.a12933ee.js",
    "revision": "f56d60558f44686d289f0d109235b0b0"
  },
  {
    "url": "assets/js/36.c2b4a846.js",
    "revision": "7564bd5c77b3e439a98b1ba3e7296337"
  },
  {
    "url": "assets/js/37.2c40f793.js",
    "revision": "f3964feb9b81a05927fc60adaef98256"
  },
  {
    "url": "assets/js/38.cac6c2fb.js",
    "revision": "e8c79341386e71b98fb004fc04305ff8"
  },
  {
    "url": "assets/js/39.2cc63df5.js",
    "revision": "060bdc57b27343ebee75988ec1e9b8d1"
  },
  {
    "url": "assets/js/4.debb698a.js",
    "revision": "aed79002394205227a883139e97fc552"
  },
  {
    "url": "assets/js/40.98e75061.js",
    "revision": "bfac4fbd92c2c0b421885fcacfebf68c"
  },
  {
    "url": "assets/js/41.0e030b7a.js",
    "revision": "e30da5a66ba5cc01fb77e16b8740d8ca"
  },
  {
    "url": "assets/js/42.59fd8b12.js",
    "revision": "4076f4f2e7cc78873fbe2dfb1ee35bbc"
  },
  {
    "url": "assets/js/43.ef6616c7.js",
    "revision": "65e2bf9656c51f96e3c65dc98b5d7201"
  },
  {
    "url": "assets/js/44.51826f06.js",
    "revision": "6175feb5b182a8a359765100f96872dc"
  },
  {
    "url": "assets/js/45.fea455ed.js",
    "revision": "83836de5e5a2fc02079109e942dde43b"
  },
  {
    "url": "assets/js/46.b0608be8.js",
    "revision": "fefbd2250cbe64362380b89a87291707"
  },
  {
    "url": "assets/js/47.a22cb1e5.js",
    "revision": "a8f2b713bf6852f504335d9d1451c4bd"
  },
  {
    "url": "assets/js/48.5e3155a7.js",
    "revision": "47f156be845a024919c0b0c1ed5cab2f"
  },
  {
    "url": "assets/js/49.c7371907.js",
    "revision": "7f8bf25eb38c1e4726f89e6172c26055"
  },
  {
    "url": "assets/js/5.5a3cb67f.js",
    "revision": "53585c0159bb02ab3846527f73c33e92"
  },
  {
    "url": "assets/js/50.b5b854cd.js",
    "revision": "b38351bdee02624477ff5f68b6df1a83"
  },
  {
    "url": "assets/js/51.9572503e.js",
    "revision": "e84c0dc3078116abd4e8bb52dfdfb0e2"
  },
  {
    "url": "assets/js/52.cb40919a.js",
    "revision": "8b1cfa5e181d2023e0d9d797bcf9eef5"
  },
  {
    "url": "assets/js/53.d2d76684.js",
    "revision": "78cedc7c80bd3101e6cacc74b296b77e"
  },
  {
    "url": "assets/js/54.2d6c0411.js",
    "revision": "6a6705fd48733efef13f14b788c79ef1"
  },
  {
    "url": "assets/js/55.993ede5f.js",
    "revision": "d52e9a6ce970e0592b32ff34e4a5895f"
  },
  {
    "url": "assets/js/56.dcf9783b.js",
    "revision": "7ef1c3acf52bf6dbdcf7f46298a31171"
  },
  {
    "url": "assets/js/57.05860ef8.js",
    "revision": "219e0cd292eb55b89fbb609375f50c06"
  },
  {
    "url": "assets/js/58.8d08cc49.js",
    "revision": "d2d3456746dbba786b6f550d7ed1c490"
  },
  {
    "url": "assets/js/59.7e31f966.js",
    "revision": "44b21f9e7afa25241026325b34e56e35"
  },
  {
    "url": "assets/js/6.cea7d17b.js",
    "revision": "900f9a0647be7572b30f065a57bd8d9c"
  },
  {
    "url": "assets/js/60.d37c66c1.js",
    "revision": "8f8078538023308237e22efa6d3229e5"
  },
  {
    "url": "assets/js/61.7532b546.js",
    "revision": "b4443a1cef9202cce1d89d45d9ba58b2"
  },
  {
    "url": "assets/js/62.fcddbadc.js",
    "revision": "e63e8c320a7834949d1434f9604d1286"
  },
  {
    "url": "assets/js/63.24e433ad.js",
    "revision": "613c24ba7585f7f07fcbfb19cbe2344d"
  },
  {
    "url": "assets/js/64.15c03fca.js",
    "revision": "8cc401b17941d8215f61d5f46c39964d"
  },
  {
    "url": "assets/js/65.eb37a4f2.js",
    "revision": "4c9a35a941794bf717837ddc8ca34373"
  },
  {
    "url": "assets/js/66.d470b7d4.js",
    "revision": "28fc58854fdb53ad150e6e4f38150d44"
  },
  {
    "url": "assets/js/67.66bfa59c.js",
    "revision": "f4cce1673cac8471aecf15afa4d2bda8"
  },
  {
    "url": "assets/js/68.31d9d5b0.js",
    "revision": "b11242617f84c2a69d5974db15763061"
  },
  {
    "url": "assets/js/69.f7a75253.js",
    "revision": "d8f0c166ee662c7c04d7c43f48f88979"
  },
  {
    "url": "assets/js/7.649e7767.js",
    "revision": "95f1659e8c7a1d5feb371eb64c458b16"
  },
  {
    "url": "assets/js/70.766d13a2.js",
    "revision": "e5598999e81b77a0c35cdde19fb0a476"
  },
  {
    "url": "assets/js/71.2cd302cf.js",
    "revision": "5d9a9ad176d722590551e59e95ec8b33"
  },
  {
    "url": "assets/js/72.6ed7a72b.js",
    "revision": "7da52e5640feeebb980945257aac0ff9"
  },
  {
    "url": "assets/js/73.23111482.js",
    "revision": "8ee5b9b0d136482062e8b9c99fcf5980"
  },
  {
    "url": "assets/js/74.b6cdd8cb.js",
    "revision": "19e400ceaea40bb04b421439744c7c8e"
  },
  {
    "url": "assets/js/75.c784938d.js",
    "revision": "3f5fd56d804abd2f09d476694f07ab0d"
  },
  {
    "url": "assets/js/76.b0cd775e.js",
    "revision": "00535baf6e719734b41f6458c03c5bf8"
  },
  {
    "url": "assets/js/77.2a529116.js",
    "revision": "acd0dd899522666571b3c5f0808f6766"
  },
  {
    "url": "assets/js/78.33a061a6.js",
    "revision": "8541b70a3d1b287c36c42deec42258ab"
  },
  {
    "url": "assets/js/79.929cf07a.js",
    "revision": "e93a5bf7cb8bb2726c6696ce8e981458"
  },
  {
    "url": "assets/js/8.507e03f8.js",
    "revision": "098badda83ff04aaa8a9f9cb2f82cc31"
  },
  {
    "url": "assets/js/80.6dc6aa7b.js",
    "revision": "1faf55151c4e37ad4d945b999381c6f0"
  },
  {
    "url": "assets/js/81.cfe477ed.js",
    "revision": "7a285b879b381dbe0681e6c7b1b68a9c"
  },
  {
    "url": "assets/js/82.eb97a4da.js",
    "revision": "989b4d31fb7e2b497c6a4d4716916131"
  },
  {
    "url": "assets/js/83.fb8c5797.js",
    "revision": "9836a7ebe11d6ca6112abbc586ade757"
  },
  {
    "url": "assets/js/84.579c58fc.js",
    "revision": "52e7101b7e2a317d6a7998c30fc1fab8"
  },
  {
    "url": "assets/js/85.d97c4c21.js",
    "revision": "7a213bd20f13bbea4bbbc027f903b5bc"
  },
  {
    "url": "assets/js/86.0e0fd575.js",
    "revision": "aefcfe4a568a6d4da40a1e9f4eb3bf44"
  },
  {
    "url": "assets/js/87.9e982507.js",
    "revision": "c61dec2d2f487f6f860562fea4e30284"
  },
  {
    "url": "assets/js/88.e0bbd884.js",
    "revision": "dba88f47141cf74b7984e6f385ac955f"
  },
  {
    "url": "assets/js/89.66926608.js",
    "revision": "3d0ce620b7351f9b05225628c5f2452a"
  },
  {
    "url": "assets/js/9.de55d367.js",
    "revision": "b649d4e33d587497941d317628d1e173"
  },
  {
    "url": "assets/js/90.962ae13a.js",
    "revision": "ca5c551d8d3ba3e8b9b338c377a410e2"
  },
  {
    "url": "assets/js/91.dc4def9e.js",
    "revision": "a0f54dde5db7db3dadd97767fb264e73"
  },
  {
    "url": "assets/js/92.e1913031.js",
    "revision": "832e232a4ece387c69ec61c37fe9645d"
  },
  {
    "url": "assets/js/93.877c64f4.js",
    "revision": "b476cf260a1c0b40bba661cafce627e1"
  },
  {
    "url": "assets/js/94.05fdfb16.js",
    "revision": "94e8f33ee373242c4224490e22e4a8d2"
  },
  {
    "url": "assets/js/95.d50025c4.js",
    "revision": "7bf1e57f2dd17800a76c4696db843a30"
  },
  {
    "url": "assets/js/96.ca44b18a.js",
    "revision": "7c900b2de83f5ea94985935ff4a3f0fc"
  },
  {
    "url": "assets/js/97.86491077.js",
    "revision": "1655fbeada7526df6f00b3f87a181b6e"
  },
  {
    "url": "assets/js/98.81b845c4.js",
    "revision": "cf19f1b093c1724909b8103007b98fb2"
  },
  {
    "url": "assets/js/99.8e1cbfc4.js",
    "revision": "1a44e1be65b01fc5be6f04726678c039"
  },
  {
    "url": "assets/js/app.6619e304.js",
    "revision": "87caaf10c779e7b3a8a57c3b102ba04b"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "23cde0f57103d0578d0e996c88c7fc6d"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "9b33e4e90f39a81d80c4aac50543e829"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "14a9f98197c03fe2f848872659d7efb6"
  },
  {
    "url": "tutorial/index.html",
    "revision": "e6ced7f64b29b2d82c94a726ee2c9efd"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "489ecc41502bb68266104adbe9649f9d"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "d2a3bb1014ba282bc2e04c822221fd6c"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "2bdf234ed7b0cab5c4587ae2e5db27d5"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "b9cc0b61874928a93eeacf625518aaea"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "96717ae7f093092cb9af6093567e5774"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "77c96974891a2f83e72e80ae49476108"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "2d8f117ba1122a8e1258ec86f43be04e"
  },
  {
    "url": "zh/api/index.html",
    "revision": "eeedf0cea5d1c206ac2e41a93359c48b"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "2d31e41a0e7516b39ad1693a5e1d4d17"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "7c81b0b208007407a586f8138ef92218"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "ea24ec7edcfbce4962d6184978edbfb7"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "00ecd421fe593a801283db840012e1d7"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "5ffba172e9eb4f58352d12c2dce26dae"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "a3b8e8ffbab932a23e853ed98802eaf1"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "c742ad3f92fb7f0a2b09f007c37c19ed"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "86ed42aa0264247510fd49951fbe444e"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "113912db5446be354080653f41e49d7e"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "c720366deaee5426475bae2f5790c033"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "b98f5ce533f25bfc4a971c1e2fed0a83"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "86d0e79008baa22448733a5eb87b7584"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "dc2d540a32c89833b33c10d90938ceb1"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "1c3d91297fdffb5563a3452f2973d07f"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "9a3bca2602eabbd4e1d6295b1c29fc83"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "98712ea4c0f146f4abf2ab389c2cce29"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "3b75d30c7a6da7f1804bb8953a680e17"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "a52a385652ac3fe941557999cf776fc2"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "b955e3d86be94abe607f802a3a7f6d3d"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "9f9e9aaf48354af5224248ecc5a177a7"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "325dd11b128e55b9d31537706b952f35"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "a7eecfa05e96bd9f140affeb3881044a"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "9999ec1625881a2c041ed143885b1252"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "377e8959c0af5109a1fec349a978ea6a"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "af7d20754ac2a7e4815cc27705008234"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "aa05a8b52a8b03d390a577087e4d386e"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "bc856c51ca87632111591d56e10594cc"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "636c48e3e853be857d84897074f2672b"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "05fbf7bd871e3a1dcbda4dcda722a32d"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "eed289693c89b6bbeb04c33eaf40f386"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "49141d42ad9ef896adcdd70e6ef30014"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "d5025f7c4baaba90de63b11dd4c06477"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "d3029a911c401783f87fc9a8ed9dec30"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "64074f2d937013afe59ffd47ba5b8f71"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "5015252ae5e0aaea4f566028afb2c207"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "6e96dad46f6f9200616518576e899177"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "78fe149e5128a0b80ed7a1f68c8fccd1"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "ee00467d1d72aaa91513629deebe4457"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "6d5d5f51f6f17c8dffda858dc04c179f"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "59f258ac6a506bc5fbca1e218e3bfba6"
  },
  {
    "url": "zh/index.html",
    "revision": "990e7cabcf2280221af772baf0437d69"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "886c47aa62e935fd70cec8f23c2136c0"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "25f42f814f08f2c099c8a9f451073e19"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "b2bc74d0d40ae20030d90d5e475af5a9"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "50d51a124ebea51a3ba5c1d8d05bab24"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "1b4e3897ab749115a9f024186c95dd18"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "8d03e2b923c637d791b49a09bb874859"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "a95b678d63e1fae7168b8f875520556b"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "92d645f353514a87b1ebbbeafbe8e85a"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "3c923332cd3af33df55373249ab805a9"
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
