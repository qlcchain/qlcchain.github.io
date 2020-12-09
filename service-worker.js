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
    "revision": "7fca31f95b68dfe2ab4ead9bb67435c6"
  },
  {
    "url": "api/index.html",
    "revision": "bc117b8cb4575e4756da099dbefd0570"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "ae03bdf09d774d6ca5ba74b7a1c23305"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "9b327839c0118101c4d748d9ad91ff0b"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "39f1e290674db16ac6daca7e9dd5d50a"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "613e4dcce4b2585c41e7beb0822c3ba6"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "b467b32456eb1f539afdb727c098baa6"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "8c7e345400c5992f06cfdcef786c313f"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "9d105e7b54d16ca20b96aa96d0e767f5"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "d71ad1aab1d3d0c91952cda76ed44c88"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "5e0f547185c4ba8853272af903255467"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "49e40a90a4aff44481164dc0563bccc6"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "78290e679aa4e134279db1299360eff2"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "b129b0a6b6bddfded232ec9a82b111c2"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "c34e6e05575931a2d5f9ce79ba4d1634"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "69bdca8001eac9e6747f79633334874e"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "2ea5cb00a8bb36d208e16ee2ad5ee51d"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "1e77c6d19adb8d1120ff8e84949374c5"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "14f2ff43d041a7c8c7e69106a188cdd1"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "1aab94e1523c1de78a4e0a61d58317bc"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "689efaf259ac5243a23a8b72ba696867"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "2ce6ea0896e23933de57fe4f3fa996bd"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "b1af6847bb52d23b61d5c9a671e4582c"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "3ed6e6cd818c8807cfe059a875f74ed6"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "b0e36183541ff221c10635f9823ec1a5"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "46cc96867f2acd6c41648bfe3e2814c0"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "33e38002a94e19b9567a844250e0f27d"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "e89f70df0181d66f10cee2130fe03a40"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "c1e9c6360882b8f8187353ef2d36591f"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "c43359b6e131e02b884d2f4ad133a943"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "2c5a801b04f68512827f6cc4a2ec05bf"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "d806909fb891d94a2cffee9b4c14b9dc"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "73d09efe0b903018b85451d6fdfda468"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "4762f5d03716a44015579aff0f03f297"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "fd380c187df93856ee567a8d5355867e"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "21d74a48a6e35e5a3b43e21084b74f44"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "85fe35568a2800b256565861c116de2a"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "5bc052ad34d39792ec291ce17ac47700"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "5fbca5be12b58846759c068b63a35ceb"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "b6bb2daf95183372d50f09f05db8f8ff"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "a9931a27a81276ad0d633e2d57dd1fe2"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "437e48cd9dea3b17566413069170bfb1"
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
    "url": "assets/js/app.2f1b293f.js",
    "revision": "955b820f187923b9ec2ad326c2e5c36e"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "eb38cb2da8605963a111be0cb0b4d39c"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "aface4e4a9c874003b9015c28a4cc3a8"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "7a0bd5cfde433f35fe2587dba18b4d79"
  },
  {
    "url": "tutorial/index.html",
    "revision": "9c9dab3d2383a459418b854e3e388adb"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "3f87950f1941509c6455f48f6c029350"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "c6b8b1ddcdfc7b6cf59a0b6e40fbff33"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "e943e24b255cf2a66860e9da978407d4"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "50093325157c6a9a8aaef0d5dc0e1bb8"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "ced9a130975ad405e4f7395027b0315c"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "db260ba5116b87124e035f30ea765005"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "545de652eef10e2781d7d208784bec98"
  },
  {
    "url": "zh/api/index.html",
    "revision": "7f4d5bbd3faa077eca3400a4c7bd7375"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "3bb307778e99dba7d96165b0dbe6edac"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "37d334b495e68321a231e57d71e89263"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "14408cbb5c790a3e8a36854fdcf48f6e"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "2f78788700be163eaab9ddb7d321bac7"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "1e203599cbccf041dce3977d245a4af3"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "000cfc1b9949d9a75935fa0f3cd7084e"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "d14f2f3f792dc4a996d47a883c9f7f79"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "e136f5bf7c367c8622150678cae14a08"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "dd94a9b05ec6fb1cee84bcad65458cb5"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "d141347fd1ece481a33bbf48b394cba7"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "c324836a812caa1e1b59579b53d28038"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "7356522bdfccc977aeecb740bf1bca1d"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "95978f38cd25a3e972a78a800a21e47b"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "b517a0ea57f6dddf5533a54911c48a41"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "013969b751bfd1f3b1c38bb38a996e14"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "1927f36d212f018cdb364193cdf897de"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "bbf7b160637a5a30172a74620882d5d4"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "aa2eccb707818d4e242c0411dabab226"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "d3354f16c1f3e52a855fb0b1358a44d8"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "c72790782a13a29b963fb9bd0ee2fb27"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "733c068cae5aaebc0b3f8fe05f8bedfa"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "1a15e8d3a8a837bab83d04da080dc55d"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "78264ea7420804eaab344d7b8bef370c"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "b962b952eb6c8af90c51699a19f20c85"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "90bc9a12cb4ba22eeeff1dd4effb281f"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "1a4dc4a72ab36c88146774735f177d0e"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "652daadf17961767e8891f1c31844d07"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "a93f2d28ef88dea174ef44859285f24a"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "b5fddf3a3ed58486e8a619a094d28df5"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "ddd3a88c421803eae7fcd94bdeaf0d4f"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "d5b14da32d8f4b519c2943dde53da8d7"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "e41d3681651c7adea2c52e1eed7421f1"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "e39b7a68a7c72ba949602f4bcf307309"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "af5b8cca881210684e66c74c873751b5"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "140d53ce6473f9997ecd7601844fd960"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "192363984bd7d1f37375e5e9d3de0cb3"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "37c672f1665e93fdcb31c644a473faef"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "d24ea2dfded3728a37abb5b4da438423"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "8f5325c191dfc113756ed98384d44fc0"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "64a6bd1a82e99e198f10d144ac596218"
  },
  {
    "url": "zh/index.html",
    "revision": "bd172186493a2682dc8e7382080bd632"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "a58c6299cdc42558b585af9a7e9adca7"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "8378705456b637886deedf2c2c82b851"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "227aee2d0468005de41d8da44ec40d00"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "bacdfd9bc9bceda866402c61a3d7c764"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "3f7d8e797728c8eb88d15835db929fc9"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "15e6c6f2fb90a6273b86930a81e0b985"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "a09e633d8d2ef1af1170f2c814ee604b"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "169ae250c0cde1f3e35796b6fd5c397a"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "79c371ba9ada70d0f7d95e0f1e35dc14"
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
