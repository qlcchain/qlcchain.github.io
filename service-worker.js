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
    "revision": "405bdf85166f4e9403eec00c020344cc"
  },
  {
    "url": "api/index.html",
    "revision": "43d67ff9ffb8cb8c7a4925cae60d32c8"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "50d25c5204bfcaf98c9a37a6b743964b"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "e46c6d9b5edbb51d11a0f03459cce361"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "37f8f89fc766c7ce9e3fe5adfe27dbfa"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "59227f0f352d035cc3c407b0b7fd487d"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "6ee40306c073e69e98c8c6b6213ad9eb"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "0dfb07781eeba5f1d2d87012cf062ff6"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "d9e0ddcaa71094fafc2a7f7825b0994a"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "65e111d02ea0eb5ea09397b6c93db291"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "367762beaa5b3ea77c43dc758b69036b"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "cc66b09b288e5200286be135b2880f83"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "da27939e2ae887f1c92606c582f7d786"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "c579e0b38757195620156e9cf82a8107"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "d4ad8f6ca52a928499220d5d0d61209b"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "001d12eaf7741e15d36552a592975aea"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "a9e9142d56343beaaa704847d63cef4c"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "83d3010fe72639209d1ee4a1ad28083d"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "e1b04ac202f9de84491f3208db6e3c32"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "4b55f21cbde76471481ea2ea7c9a42ce"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "f970929bfb31d8ebd26911e69778f015"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "933ef2c39ab8f91de67781abe176324e"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "ce7ab1709f1cccb6150115ce8436b2dc"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "fccd4255542f38fb4354b8e1dd31d064"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "cc892c9a9a7c952ac3ce022b59de24c1"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "32b0990f633b61dab32229e8adf308c4"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "6931b3830278955e84fb356b6222e6f4"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "1c0c96f29322869db5264d0ebc421387"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "b6e026e0557b8bd8501af9ee844b6246"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "dfa28cf31be27efa9ac3ed3642c383dc"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "2421dcb9a060c6f53a33db1068beee86"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "861551f2fb7a13e8632fdae538f76af3"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "6d59f707c00d315f41d6d7d237bcc48d"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "680931712d647f6807cd163a5f609e42"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "b1c7540be08712f91b5558f5070e787a"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "c9b8b2d1a87d27b26fba347726f9f597"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "8cd6b9940780e94bb6a06377687ae593"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "13edccc118c0b19831764025c102b178"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "7a388cad51b92a114c31aa70e7a61690"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "8dabcb516ffb85b7470eb54803d43df0"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "9281d73be540b73092162dc0e5fec7c9"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "d451ecb7bda12b1f8f74980ae016c1ab"
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
    "url": "assets/js/app.da978f37.js",
    "revision": "2afe2351b7ab7a088ba7ada58cbe0986"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "2ce999b1210208756a2d5d6a6b7d2620"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "810e51acc3b219e7f9ff384247b343d5"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "1edd7170f783d266401202492c07e76c"
  },
  {
    "url": "tutorial/index.html",
    "revision": "2dd803010c7f92d3ceda1e55110bb224"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "1442725cf30d967343fd542f22084876"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "219bb7cf9b6000307795220c841b52d7"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "a32d65793ab652932aab947d353b287f"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "3c0b9749a4c4789ee57a866071f62c94"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "8c799d38ca239079ac383250b2c63fe9"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "8cc1037db99089172c1c24d846732358"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "20239fe0bc7b42241ff53fa354fd5bbd"
  },
  {
    "url": "zh/api/index.html",
    "revision": "0e6d2fec5d2736f2b2d59282c3832c07"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "8fbd69b6175f1235a0553127745e4b6f"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "85b720807fbe21e9295444ccd1cdf006"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "eb19014044c81e507c7ec87342abd75b"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "7a2243fa5bac9e4c0e57fe89d556b25b"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "80c91fbc45d6a42618115c81cfc524b6"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "2f07e75d7994811957191b63abad07a5"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "ca1056d477d4dc6fdff7ea3f322b3986"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "cffe71598cdae3eb274c7cd696504996"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "d51495e0cdccc5da8ef91a6d7fcce694"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "9499579e03c506bd31e04d4a4df5279a"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "b4683da1f2d15bb34c0cf0e5bc58c773"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "bea74f47658bb935631a7e71dfb7ac3b"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "e21cd139571767a38bb7ecabd1b739c2"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "f4d262da9995b956600513837c508ebc"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "1e18db6ba51d60b4834f21b4765a0ef2"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "9f782b0ee52532fb66e27e1ce1f7ad6f"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "596000711c333b0e186218e975e6c969"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "49addc672556057dd386c4948108f5fc"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "e7c814f644e5b6236cbd5b118b47966e"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "772fd4d1ae587b738c6f8b53ff8228b5"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "30c9e274b616821e3bc798b9a638c56a"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "cbfd76cef1d6f9cadcb2397dacffdeae"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "67a41e23d2d1ff9a02b2e6fa441ea0e6"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "ff25052410e4718b799dbdd2f407c2a7"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "429023bd66739a89f024d6453e603f1a"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "1aac0dd5f13287c0e2d4dade2b3ef60a"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "7095bae0f4e9f2033033aabff2d14f59"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "98761bf3c43d7e7e9bff9d01fac35397"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "a679330f3f78fd4c720f422ac3f611cf"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "9aac36ef78627c5a26cdbe7e966dd7db"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "0ef5e9d40f1b4ffc7a87c10a26be2643"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "5a05662f50e10f26a7daefd873255e80"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "3302f11e659883526b0b8401da2f6cc1"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "86a8c58078ac16cc9f0dfc8849d7ce49"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "f74a4ce266882c2b4405c060cdb2d864"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "f8654347658a4c44a48dd747c53c6fc8"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "8b52ce7c0f3e58292f5ee4831101ab3d"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "e1d1a9f9b2c349e0e8b26adee481540c"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "c6dd003dcd9369624bb239908871455b"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "ff43a9dd2de34b9347c9db868070f756"
  },
  {
    "url": "zh/index.html",
    "revision": "206de4dd49551a46df418a2765ee16bc"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "abfd43245d3fad2eceb4f313c97f110f"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "2ee21f770d74e2c5b12af5e1e4ab4473"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "0c30cc6e9fd5ab387f82bc992cea07f1"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "df94546212227ef9a88a20cecc69299a"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "586d9afaaa0681db70bb94d2670c5eb3"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "08c175d493e46ba9fdc715e97712a92e"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "2750bcb295c77400e9fe48e42cf84070"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "47affafa505e11d168cb9ba4850fc23c"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "99c252cffd2bbf3db035c2c614017373"
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
