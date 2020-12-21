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
    "revision": "b024a9a927eb4c73dbea74537266c3d5"
  },
  {
    "url": "api/index.html",
    "revision": "12071319ff1d34e86e01a62be0136088"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "dad969b38384c5943ca021f7637a4dad"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "cd106ae7a0d69122560e4fdae52ffde6"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "f144920acd193cb96ca1c224689633fe"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "e15f7222675c3a97462b30b320c0646a"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "888a5b7302130010c40df65ca8d0bce7"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "518e1dcf4c34d3d8b34bbcbddd68dbf2"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "45a81c7107e13cc8f9c06d36d0afb048"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "edda2b7705bb3116ca2234f7cd4f4c15"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "021d2c8acaebc1e72c8b2df270dc73e3"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "f4a5c29d696037ef095e9b2c8fbfd551"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "582f968009a8916860ee72dfa51c1513"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "864ea2f99e2a6f0dce7905d19a585467"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "3219f2df86fa01ad5c64786ca77c21c4"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "8db6d80c417e11cd0008d4a7da4ca3ac"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "262e349e3b1a5f62b93dce54565a8fe4"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "e7ac6070daf9b65abfb3767e1426d77d"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "dc2d4d22a86258d742616890b985bff1"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "9f487ad3676e79aafba3cbc11eda30d1"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "5d3153abab9eabed791ed6a61d11833d"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "6faaa55ce507d75872c13a170ab95a17"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "5510178a7606a9009a4b0c7b16166a38"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "50dac7932661deb3f9e312aaaa25f04f"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "e80fb6b07eed966555c27776972318cb"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "8ce5f2fbc2703676769784f2222f15a4"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "2b4e4125b053d51fa4267f99881b842d"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "9df93209956efa61758d2767de146d58"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "1e9a33ebb12dad930cd94001a331740e"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "819e56ecae6d863ec0286afbe5ae157b"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "0dacd02c5e9170e64bf7f7e98c68eb18"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "d449560b165c83f24ee35b0832be63b1"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "0d76ad87e7fedc30a61864573ffba351"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "4e9d3027b66e7dc919328b0f56a7739d"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "af04a43fd247a23daba6bc2e1ca3bd0b"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "74b49f14757d7f12494bc41d437fe73c"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "9a28621bdc7ba08971de7519848b26ad"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "d70a2471ce4892a171128ae008a1f3f1"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "2a581695f1f2c6706e4cebdf0fde5f3e"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "459671acfdf479352bcaa370f04a6266"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "7ee4a9e6a38748221634fdf2ce6b9d57"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "32e791168d256587915fd037d4a06bf6"
  },
  {
    "url": "assets/css/0.styles.5ce5f1ce.css",
    "revision": "bdc8744b276cccd68db062a8f0e8c459"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.82f9293b.js",
    "revision": "482f44714fa4be4b2f81ccd0164a58e7"
  },
  {
    "url": "assets/js/100.62056e3e.js",
    "revision": "60864ec92d4f7715a1c5af58f7867c1d"
  },
  {
    "url": "assets/js/101.943ece91.js",
    "revision": "c0488afe95f1308ccb4e90d77726de61"
  },
  {
    "url": "assets/js/102.5b91fc20.js",
    "revision": "ca52c12232b3a5288b400261ba912e72"
  },
  {
    "url": "assets/js/103.cdefd602.js",
    "revision": "6386af092ef9d397f79cac09474e2410"
  },
  {
    "url": "assets/js/104.aa64c196.js",
    "revision": "57266d801a6500a7a4c44f7ffb979df8"
  },
  {
    "url": "assets/js/105.d3a02aab.js",
    "revision": "888ca2b2f363f1a6cd43eb57af785291"
  },
  {
    "url": "assets/js/106.fb34e6ed.js",
    "revision": "2a1f1c174dd026dfa0f7305a3aa0a353"
  },
  {
    "url": "assets/js/107.492bb76f.js",
    "revision": "cad80f1027f8c2e41ecb2a9773070273"
  },
  {
    "url": "assets/js/108.2e981932.js",
    "revision": "b93e82dec92e1e0c1a566f52ffd95bff"
  },
  {
    "url": "assets/js/109.8b310187.js",
    "revision": "1b8f6bd44f9bc53912648325302903ad"
  },
  {
    "url": "assets/js/11.907083fa.js",
    "revision": "5dbf412ec1043bde3fb3547e2b797fb9"
  },
  {
    "url": "assets/js/110.cb0e3921.js",
    "revision": "93c39a1bd462e6db7f95095286ba8435"
  },
  {
    "url": "assets/js/111.57b49cba.js",
    "revision": "485a7cb99d2a5df192b3d25719b7aec1"
  },
  {
    "url": "assets/js/12.7d919208.js",
    "revision": "6e51093d92d082ae4e5cea831dba3658"
  },
  {
    "url": "assets/js/13.19770d6a.js",
    "revision": "2862828c7562fcee86958610266f8378"
  },
  {
    "url": "assets/js/14.dea9d024.js",
    "revision": "8335ea1427036c9e7097c600b7b5ad7d"
  },
  {
    "url": "assets/js/15.16496071.js",
    "revision": "2049df61a50a25dfba26aa767a9d63e4"
  },
  {
    "url": "assets/js/16.0998a0eb.js",
    "revision": "158ec047e90a463d931abd3441eb17fd"
  },
  {
    "url": "assets/js/17.11dfbceb.js",
    "revision": "8a9a2ff72d76cbe14929504dd24f5442"
  },
  {
    "url": "assets/js/18.d070fc32.js",
    "revision": "ad88dbac31096d9e757345f54c4b5a0d"
  },
  {
    "url": "assets/js/19.0080248f.js",
    "revision": "50bf41a43ccb272c2e63a2d566592284"
  },
  {
    "url": "assets/js/20.db18a6c2.js",
    "revision": "473f7e91ffe327712e9cfa172c83c683"
  },
  {
    "url": "assets/js/21.0b009a6b.js",
    "revision": "da597da1f8fe0c1254064ec7db7ebc72"
  },
  {
    "url": "assets/js/22.d0c4bdff.js",
    "revision": "e9c09c0098b790fe631dd833eb98d69c"
  },
  {
    "url": "assets/js/23.8794e74b.js",
    "revision": "40b083b46af1ed9a92f46f5302ea4974"
  },
  {
    "url": "assets/js/24.d1984831.js",
    "revision": "a1d1d054529c09392c653b8be1ef8935"
  },
  {
    "url": "assets/js/25.a6db1835.js",
    "revision": "711b6d42f25c9705953293b97a37850a"
  },
  {
    "url": "assets/js/26.a65a2127.js",
    "revision": "84ef61618999ce87d27a11c49ca414c5"
  },
  {
    "url": "assets/js/27.7a4ac057.js",
    "revision": "3f2f72360229e17b88e2c6dcbe354ba8"
  },
  {
    "url": "assets/js/28.e128d66b.js",
    "revision": "5d1aa0eda63b4cb47fbd7e7231ddd6c3"
  },
  {
    "url": "assets/js/29.25ed9fdb.js",
    "revision": "dd018c925acd4dec6a4c54fc5fd5568c"
  },
  {
    "url": "assets/js/3.781363c1.js",
    "revision": "804910a1ee061ef68e8ba759b627e218"
  },
  {
    "url": "assets/js/30.c8f4c2a5.js",
    "revision": "b6b5340d759d5dcce18a74f5950d8f9a"
  },
  {
    "url": "assets/js/31.5c5158d0.js",
    "revision": "bb59206492adeaedad47d12201c92ee9"
  },
  {
    "url": "assets/js/32.f43fb9b6.js",
    "revision": "c103074d79e173f4f7429fcf6da904d6"
  },
  {
    "url": "assets/js/33.fcd380f9.js",
    "revision": "5a836de67f2b1276d3abf84a01dd1b07"
  },
  {
    "url": "assets/js/34.25b1e48a.js",
    "revision": "db42db1ab1b340cdce4215a56c470301"
  },
  {
    "url": "assets/js/35.0f98dedb.js",
    "revision": "f56d60558f44686d289f0d109235b0b0"
  },
  {
    "url": "assets/js/36.1594ffd2.js",
    "revision": "7564bd5c77b3e439a98b1ba3e7296337"
  },
  {
    "url": "assets/js/37.0e547ab8.js",
    "revision": "f3964feb9b81a05927fc60adaef98256"
  },
  {
    "url": "assets/js/38.a6539b06.js",
    "revision": "e8c79341386e71b98fb004fc04305ff8"
  },
  {
    "url": "assets/js/39.1e32291d.js",
    "revision": "060bdc57b27343ebee75988ec1e9b8d1"
  },
  {
    "url": "assets/js/4.f17da339.js",
    "revision": "aed79002394205227a883139e97fc552"
  },
  {
    "url": "assets/js/40.c935ef5b.js",
    "revision": "bfac4fbd92c2c0b421885fcacfebf68c"
  },
  {
    "url": "assets/js/41.6d58cbcd.js",
    "revision": "e30da5a66ba5cc01fb77e16b8740d8ca"
  },
  {
    "url": "assets/js/42.7aec39a2.js",
    "revision": "4076f4f2e7cc78873fbe2dfb1ee35bbc"
  },
  {
    "url": "assets/js/43.beedabcc.js",
    "revision": "65e2bf9656c51f96e3c65dc98b5d7201"
  },
  {
    "url": "assets/js/44.8e325f29.js",
    "revision": "6175feb5b182a8a359765100f96872dc"
  },
  {
    "url": "assets/js/45.626153da.js",
    "revision": "83836de5e5a2fc02079109e942dde43b"
  },
  {
    "url": "assets/js/46.737f0e00.js",
    "revision": "fefbd2250cbe64362380b89a87291707"
  },
  {
    "url": "assets/js/47.99cf7e4e.js",
    "revision": "a8f2b713bf6852f504335d9d1451c4bd"
  },
  {
    "url": "assets/js/48.380d968e.js",
    "revision": "47f156be845a024919c0b0c1ed5cab2f"
  },
  {
    "url": "assets/js/49.32a4ee40.js",
    "revision": "7f8bf25eb38c1e4726f89e6172c26055"
  },
  {
    "url": "assets/js/5.5a3cb67f.js",
    "revision": "53585c0159bb02ab3846527f73c33e92"
  },
  {
    "url": "assets/js/50.3e6dc704.js",
    "revision": "b38351bdee02624477ff5f68b6df1a83"
  },
  {
    "url": "assets/js/51.c4e14b0d.js",
    "revision": "e84c0dc3078116abd4e8bb52dfdfb0e2"
  },
  {
    "url": "assets/js/52.1d8d8721.js",
    "revision": "8b1cfa5e181d2023e0d9d797bcf9eef5"
  },
  {
    "url": "assets/js/53.8ba13327.js",
    "revision": "78cedc7c80bd3101e6cacc74b296b77e"
  },
  {
    "url": "assets/js/54.4d2570e3.js",
    "revision": "6a6705fd48733efef13f14b788c79ef1"
  },
  {
    "url": "assets/js/55.c6415670.js",
    "revision": "d52e9a6ce970e0592b32ff34e4a5895f"
  },
  {
    "url": "assets/js/56.395df78a.js",
    "revision": "7ef1c3acf52bf6dbdcf7f46298a31171"
  },
  {
    "url": "assets/js/57.138d1986.js",
    "revision": "219e0cd292eb55b89fbb609375f50c06"
  },
  {
    "url": "assets/js/58.efde06a9.js",
    "revision": "d2d3456746dbba786b6f550d7ed1c490"
  },
  {
    "url": "assets/js/59.2deb85f3.js",
    "revision": "44b21f9e7afa25241026325b34e56e35"
  },
  {
    "url": "assets/js/6.a02d2382.js",
    "revision": "900f9a0647be7572b30f065a57bd8d9c"
  },
  {
    "url": "assets/js/60.cad03148.js",
    "revision": "8f8078538023308237e22efa6d3229e5"
  },
  {
    "url": "assets/js/61.d8920d31.js",
    "revision": "b4443a1cef9202cce1d89d45d9ba58b2"
  },
  {
    "url": "assets/js/62.5cce6a5f.js",
    "revision": "e63e8c320a7834949d1434f9604d1286"
  },
  {
    "url": "assets/js/63.c5f4d28a.js",
    "revision": "613c24ba7585f7f07fcbfb19cbe2344d"
  },
  {
    "url": "assets/js/64.c7a4ad7d.js",
    "revision": "8cc401b17941d8215f61d5f46c39964d"
  },
  {
    "url": "assets/js/65.1b173ab3.js",
    "revision": "4c9a35a941794bf717837ddc8ca34373"
  },
  {
    "url": "assets/js/66.eb4bc93b.js",
    "revision": "28fc58854fdb53ad150e6e4f38150d44"
  },
  {
    "url": "assets/js/67.64530de8.js",
    "revision": "f4cce1673cac8471aecf15afa4d2bda8"
  },
  {
    "url": "assets/js/68.eaded009.js",
    "revision": "b11242617f84c2a69d5974db15763061"
  },
  {
    "url": "assets/js/69.510e5f34.js",
    "revision": "d8f0c166ee662c7c04d7c43f48f88979"
  },
  {
    "url": "assets/js/7.5aeccc9c.js",
    "revision": "95f1659e8c7a1d5feb371eb64c458b16"
  },
  {
    "url": "assets/js/70.d4caa1c0.js",
    "revision": "e5598999e81b77a0c35cdde19fb0a476"
  },
  {
    "url": "assets/js/71.5fb34cb5.js",
    "revision": "5d9a9ad176d722590551e59e95ec8b33"
  },
  {
    "url": "assets/js/72.ea223ae8.js",
    "revision": "7da52e5640feeebb980945257aac0ff9"
  },
  {
    "url": "assets/js/73.62c83293.js",
    "revision": "8ee5b9b0d136482062e8b9c99fcf5980"
  },
  {
    "url": "assets/js/74.4c1b02f2.js",
    "revision": "19e400ceaea40bb04b421439744c7c8e"
  },
  {
    "url": "assets/js/75.f5f7a87f.js",
    "revision": "3f5fd56d804abd2f09d476694f07ab0d"
  },
  {
    "url": "assets/js/76.25b62055.js",
    "revision": "00535baf6e719734b41f6458c03c5bf8"
  },
  {
    "url": "assets/js/77.13ff203f.js",
    "revision": "acd0dd899522666571b3c5f0808f6766"
  },
  {
    "url": "assets/js/78.4182fa58.js",
    "revision": "8541b70a3d1b287c36c42deec42258ab"
  },
  {
    "url": "assets/js/79.cd342f3c.js",
    "revision": "e93a5bf7cb8bb2726c6696ce8e981458"
  },
  {
    "url": "assets/js/8.dabbc16a.js",
    "revision": "098badda83ff04aaa8a9f9cb2f82cc31"
  },
  {
    "url": "assets/js/80.95c8ebe9.js",
    "revision": "1faf55151c4e37ad4d945b999381c6f0"
  },
  {
    "url": "assets/js/81.4e4ef4aa.js",
    "revision": "7a285b879b381dbe0681e6c7b1b68a9c"
  },
  {
    "url": "assets/js/82.a040f5d2.js",
    "revision": "989b4d31fb7e2b497c6a4d4716916131"
  },
  {
    "url": "assets/js/83.e70df78d.js",
    "revision": "9836a7ebe11d6ca6112abbc586ade757"
  },
  {
    "url": "assets/js/84.34959ed5.js",
    "revision": "52e7101b7e2a317d6a7998c30fc1fab8"
  },
  {
    "url": "assets/js/85.fc36efab.js",
    "revision": "7a213bd20f13bbea4bbbc027f903b5bc"
  },
  {
    "url": "assets/js/86.1b9b4103.js",
    "revision": "aefcfe4a568a6d4da40a1e9f4eb3bf44"
  },
  {
    "url": "assets/js/87.aa8a99ed.js",
    "revision": "c61dec2d2f487f6f860562fea4e30284"
  },
  {
    "url": "assets/js/88.7093c9be.js",
    "revision": "dba88f47141cf74b7984e6f385ac955f"
  },
  {
    "url": "assets/js/89.da9dcb92.js",
    "revision": "3d0ce620b7351f9b05225628c5f2452a"
  },
  {
    "url": "assets/js/9.4f1ca486.js",
    "revision": "b649d4e33d587497941d317628d1e173"
  },
  {
    "url": "assets/js/90.9efd21f4.js",
    "revision": "ca5c551d8d3ba3e8b9b338c377a410e2"
  },
  {
    "url": "assets/js/91.f32c08e1.js",
    "revision": "a0f54dde5db7db3dadd97767fb264e73"
  },
  {
    "url": "assets/js/92.d947521e.js",
    "revision": "832e232a4ece387c69ec61c37fe9645d"
  },
  {
    "url": "assets/js/93.023cc84f.js",
    "revision": "b476cf260a1c0b40bba661cafce627e1"
  },
  {
    "url": "assets/js/94.5cd1a38a.js",
    "revision": "94e8f33ee373242c4224490e22e4a8d2"
  },
  {
    "url": "assets/js/95.87f2dace.js",
    "revision": "7bf1e57f2dd17800a76c4696db843a30"
  },
  {
    "url": "assets/js/96.31cf1c38.js",
    "revision": "7c900b2de83f5ea94985935ff4a3f0fc"
  },
  {
    "url": "assets/js/97.f115daf8.js",
    "revision": "1655fbeada7526df6f00b3f87a181b6e"
  },
  {
    "url": "assets/js/98.3817ceda.js",
    "revision": "cf19f1b093c1724909b8103007b98fb2"
  },
  {
    "url": "assets/js/99.3fd2367d.js",
    "revision": "1a44e1be65b01fc5be6f04726678c039"
  },
  {
    "url": "assets/js/app.56b67615.js",
    "revision": "5f0e57c7416b8ed472862a281468e65a"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "062ed5ade1f3b02636d452ae98a9b892"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "5e294941fa00f2e35ba66c738cda7dbb"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "e9bc861dbc0ad977dcc390e30a402b99"
  },
  {
    "url": "tutorial/index.html",
    "revision": "c7f87ebda148f08a60e580b56fa4f79e"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "7aa9dc886fef2722eda7e4a4b710e83b"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "08f104a357e127d9e81882e8f29c9611"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "57234375b150e7aa6d7e51748431f715"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "750dbbc5eb51c70759c23605049e3bef"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "7b7eae9d1b408b4485233133644684a8"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "208d6dcb847ca068a06f0538c53ee981"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "f263ebc022ec64afc714b989668ee267"
  },
  {
    "url": "zh/api/index.html",
    "revision": "f024b3002ca81e50a77146615f451901"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "c89f6cd044e128cdf4fef469991daf60"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "2706de3fba376da2ac5a53b9f764c954"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "ca43a20ddf3612700cd3b998fef9b7fb"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "4e5f2edace646c19404dcd15b87aeb55"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "79bd884ce4937aa926d3fddbebde5b6e"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "b7d0d732fa2c8bf649f1cccc9ead4eaa"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "e2e8a802adcc1e04631eefb0ffeb3e57"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "11ced388741e820e6d5dbfd27af31ebf"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "46b437747da62665b4b49328938ab75b"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "82cd29a83b5e35c27a991848eaf19c45"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "835b858f389e5bf9e8ea9937f3a7cc50"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "eab22f01f9c4c3ee4d4ee22d4e560ed8"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "66b0941987da6461bd38a4aee8a4a43c"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "96b9304a190befef37573c301ecb9d25"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "651432e1a8eb40a80c650f4c6fc806a7"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "16ec215ad9472cb6aa915014ee188ced"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "2054163864994ccf977aa7b090098afb"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "f294ef44419019660ded628b2e475997"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "aa8563355032a921d6d2c5311949137c"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "097283b56781538dca871fa0f7b731a6"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "c1e3e4d3a5d793eac10c99e7f74677d3"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "03121147c5a549ff1e651d03835752c0"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "ede09b62652441d9d1ce9a5a8e5d1275"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "15ab5f44ad57003fd1901fd3806a0451"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "274168acb59cc858f930d36aa7f27364"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "b4e0fa389ed92c0753a919ea4b986f5c"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "fb6b7d820336de384006dfaa5378c491"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "8a46520f39b9b150051363978b435882"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "19d66ca69ae2d4174a47a9dceaefc37e"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "d629f144d9b0300fc143394a85a764d0"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "8f52236534eaef8f04e249fae91e833e"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "d4ea55358825b078906c38e832e19680"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "e824752e78b1b4285eac5ac9a7de6ae8"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "9c6ffe2379c96784e76c985c4ffc6297"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "83413dd104e8bd687e9e9a01f7c85077"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "9ed7c8cd8b41a0cb2c789ff41d105ee2"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "980b4f01f3145a12d6d75851101b59e1"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "294314545706a0b8c6182c07d2d6486a"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "6484d46df04892a43a96ba8b3cb02549"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "88f658dc5bd7df02d3d646a51a9462cb"
  },
  {
    "url": "zh/index.html",
    "revision": "20d981cd8efa5760afc149c0265b254e"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "d13ebcc0b4dd3a6d1985c6bf9bfb8a4c"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "80b54242cf88ef6973cd066254c26aa4"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "1eb3e0084b0c497a96df449ab840516d"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "b27d09ef9c08076871d75172832e5b74"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "c52db46e9f0d6712b74bc173f6e828df"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "7fc61d521ccb27b0f804140eaedd354a"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "5ae258fecebb21e5a72d67db99c9035a"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "e5779cf49c9d59918f37300a83ee34c5"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "6370ddb172e8bc318bf8fb7098d5c085"
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
