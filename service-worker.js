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
    "revision": "7fdabdbb04616cfc51dacae2d9d86dfe"
  },
  {
    "url": "api/index.html",
    "revision": "068e8602f9e38df968f33d1dc5a6d994"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "efe172514beeedb37da56c3a967b9792"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "4f325b273b1e2a7334261a9a317e6554"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "4ddc17322080e692157249abb46d4a65"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "25672dccf826830faccab02c4f3ace18"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "8f7ffc3715b12d0949e051b4f88a3d00"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "afd2b539275292e0770562a7d9e62e3e"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "97cdee0d3ee9999a86e8906c4ec2bf2f"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "56bc70254c0166676ff1e91a4ad07cb9"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "a01dfd5ec305fa920cd30169b61afb8e"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "011a07fe73e185e70a1eb8bc8efcfb4d"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "2093cec31114f3757de5cf82e6f456db"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "bd963bb4de90a9a5eb0342c1e03dec10"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "11285615a143372abdde0cf71d923569"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "ec6f57fadacb279cc29d10f3b5633384"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "e7a5b6ae09fd34e556d81d0a7ecda0a5"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "95f43265d37157e892e2979ead341d7f"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "1b735d553403568e0940b5de6d087270"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "0f407cfd1eafaf21a55ebc83081aab51"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "b95b77c22f6626e42f8f769fbc1dc3cb"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "53e4a1aaf812ffeb664d0718191596de"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "80cbdbd911e7ebf9bbafdee268f0b047"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "2f286703f7dcbc03f3d7538e5fd63c9c"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "12e4516c9b12e614b4fc64bf34d40954"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "4ab5ab8ffe489fb0a6469bdc401a171c"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "ba41e24551b92420eaa9b74421755bd0"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "a09013fe1ff098903f8f4eaf7713826d"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "eba269b30e93fd8a9195f243f89c3ec3"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "4a9c49e253ccce863609b0b9b7e1b36a"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "a4e66575627821e7a15428b464134771"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "7ff77e80328619951cedfbb1189d9bab"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "5a8991518190c1fcbb12c85dad677cf6"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "19daf75bfe14440dff75eb4b1f98abd9"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "22a7d3743ad986b98c83dfad3dc4e9fa"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "48ef8f389f59b609128af42a7df6d1b4"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "a987f44ab956159b1abe92f246a5d96b"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "0d44502538a4d51ad5ced8fbd0987277"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "b34ef2aa2b562b85c35e82a724f99348"
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
    "url": "assets/js/10.d64c61de.js",
    "revision": "1b4b0b7156bf5e31d361fbf424145261"
  },
  {
    "url": "assets/js/100.4b64ad0f.js",
    "revision": "79ba352fe1ec5d07aba0db4654a06e67"
  },
  {
    "url": "assets/js/101.99b3c155.js",
    "revision": "ef4ddaba04a2c7319871b1ffac8ed88f"
  },
  {
    "url": "assets/js/102.7124af79.js",
    "revision": "e4476f0139006fc7d2be49e2516ffaa3"
  },
  {
    "url": "assets/js/103.4af9968d.js",
    "revision": "ad9df4c35dd65f614e7d173d82807a52"
  },
  {
    "url": "assets/js/11.133af2ad.js",
    "revision": "1567d9585887b18d8cbf2687f4d23499"
  },
  {
    "url": "assets/js/12.bab1a960.js",
    "revision": "2ac59551b1b9c777615144bb23f1610c"
  },
  {
    "url": "assets/js/13.2ca76481.js",
    "revision": "bf3b00ffbbc6262b92564c7e45faeb15"
  },
  {
    "url": "assets/js/14.9b48e1c1.js",
    "revision": "386473981af4431ed31df80f4c1c9c42"
  },
  {
    "url": "assets/js/15.a8925a53.js",
    "revision": "c0e27a0a2546c307b0bf31eaddc5a78a"
  },
  {
    "url": "assets/js/16.d9c16fef.js",
    "revision": "805185475ebadaee8222b03999341a4a"
  },
  {
    "url": "assets/js/17.3e36e07d.js",
    "revision": "0e463739977ca5bd302f704d5ff2472f"
  },
  {
    "url": "assets/js/18.418512ad.js",
    "revision": "2e559b946c16192e2dd3a5d223038746"
  },
  {
    "url": "assets/js/19.82c7732d.js",
    "revision": "e4506e4b28c72271e5fbfc383d64228c"
  },
  {
    "url": "assets/js/20.fb0e0a0e.js",
    "revision": "ac9da3376da9f6921e998984af85b077"
  },
  {
    "url": "assets/js/21.96e81ff9.js",
    "revision": "c0ec0559e3ba5f8673b49560b38a0203"
  },
  {
    "url": "assets/js/22.f5836b4f.js",
    "revision": "2930897cdac2f0f8627c1f0649af590f"
  },
  {
    "url": "assets/js/23.5046765b.js",
    "revision": "3c089169333a58ccc3cb1c9560ce46f0"
  },
  {
    "url": "assets/js/24.b7a9ea3b.js",
    "revision": "288cfdabacac5e66c669929443b2aa8e"
  },
  {
    "url": "assets/js/25.1b55802c.js",
    "revision": "89c51b17dc22ecdb20032e0d7db51bf2"
  },
  {
    "url": "assets/js/26.ca16448d.js",
    "revision": "b723d148cda576aefaa16fbe14866013"
  },
  {
    "url": "assets/js/27.f033c8f9.js",
    "revision": "d1a19617785611b0fe2b53dcc7955a2a"
  },
  {
    "url": "assets/js/28.72c14eef.js",
    "revision": "e50be412f29e3a37f99dfbf268266bbc"
  },
  {
    "url": "assets/js/29.f28cae40.js",
    "revision": "4b976389468212a534e519cb80c08d4b"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "5b74fa33b0c6c00f486a7b54464d482d"
  },
  {
    "url": "assets/js/30.0f5d4ebf.js",
    "revision": "170214bdb7dc8988b564a7d2003eff87"
  },
  {
    "url": "assets/js/31.4a985128.js",
    "revision": "8f987368f9e224893eda9602535e447c"
  },
  {
    "url": "assets/js/32.70c975cf.js",
    "revision": "b480e2222e63677773e4dac9bd9cbe9b"
  },
  {
    "url": "assets/js/33.97ae6ad0.js",
    "revision": "9df322beda78d9be729591214b0fe3c2"
  },
  {
    "url": "assets/js/34.3e9b4f64.js",
    "revision": "4804208c477d553500951a595ceae448"
  },
  {
    "url": "assets/js/35.6cd17b43.js",
    "revision": "6309b2184b9b62d6c0d86b002fb4c2f9"
  },
  {
    "url": "assets/js/36.2a8bbff8.js",
    "revision": "37d2226aefa756b1e17b40bd2e3ad677"
  },
  {
    "url": "assets/js/37.dbc79900.js",
    "revision": "1f5c4c2066f2138571d5873dd2a871a1"
  },
  {
    "url": "assets/js/38.f9e59ec6.js",
    "revision": "683aca188d2680b56ebcc7a09236a6a7"
  },
  {
    "url": "assets/js/39.87f6dcdf.js",
    "revision": "4f21bc4c1b74bbb4ba2b1252d8e45ee0"
  },
  {
    "url": "assets/js/4.4ac4e7a7.js",
    "revision": "e8a86572743e99ba91a7b6f8497e22ff"
  },
  {
    "url": "assets/js/40.7e12d46c.js",
    "revision": "425df5e48f56046135a5ac7069c54268"
  },
  {
    "url": "assets/js/41.5ac28be8.js",
    "revision": "e31b1d309c1d06518bfb24e6628ab1c6"
  },
  {
    "url": "assets/js/42.9664f39d.js",
    "revision": "8f14f5674bb1d1d40fb49def3d60c767"
  },
  {
    "url": "assets/js/43.50073bce.js",
    "revision": "53b108f3b1da7ea9270ff652bc74ba1e"
  },
  {
    "url": "assets/js/44.5b4ac2ce.js",
    "revision": "88daea27acbf49a007d887e72b893b9c"
  },
  {
    "url": "assets/js/45.b67c4705.js",
    "revision": "8c36ddd0a929e5f9d852ebde79e53fa0"
  },
  {
    "url": "assets/js/46.0b18a7aa.js",
    "revision": "36f4f7868e4d14773f1faeab77c0ab6e"
  },
  {
    "url": "assets/js/47.dcec1c3c.js",
    "revision": "e3d5ee8b8723481ffd30e8b51ddbac94"
  },
  {
    "url": "assets/js/48.ac29fa05.js",
    "revision": "527d28511a14b88abde55e7edeb46df0"
  },
  {
    "url": "assets/js/49.53690019.js",
    "revision": "7ec97f2542829d3b7d7d15fe02f5c51b"
  },
  {
    "url": "assets/js/5.83763220.js",
    "revision": "f4cad0f859831c0a9993f88f70fc5445"
  },
  {
    "url": "assets/js/50.3fe713bf.js",
    "revision": "7873c07bc483f873563479ee71d921b0"
  },
  {
    "url": "assets/js/51.1c21df44.js",
    "revision": "96608fd3718a3f9c73c332f91ba8927a"
  },
  {
    "url": "assets/js/52.f2df097f.js",
    "revision": "c8c55a5fed176b37ece82c5871733f6e"
  },
  {
    "url": "assets/js/53.7296b961.js",
    "revision": "bab61636c425f145c4bae854f0277f2e"
  },
  {
    "url": "assets/js/54.cc23308b.js",
    "revision": "fc2528cb4557a3cb1ad8b3b887b1f90b"
  },
  {
    "url": "assets/js/55.34e51642.js",
    "revision": "967e64ddadbce65583dbfe372bf4c116"
  },
  {
    "url": "assets/js/56.af934f95.js",
    "revision": "712e6c132988b2457457e1a981871be8"
  },
  {
    "url": "assets/js/57.e5bc4883.js",
    "revision": "165ae8120db9ab9cfdbe9c14daf72404"
  },
  {
    "url": "assets/js/58.5a5c2239.js",
    "revision": "085191e4874a5687d69a2bc76eca1371"
  },
  {
    "url": "assets/js/59.c94372ce.js",
    "revision": "77a0a8d22d240f30a493b53a3375f493"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.a25786c4.js",
    "revision": "9a847ab6f4cc546af35fbdb7ae587ecc"
  },
  {
    "url": "assets/js/61.f250cbb1.js",
    "revision": "c6798dbf0223e9587bf985f388785356"
  },
  {
    "url": "assets/js/62.c45af460.js",
    "revision": "231621cc80a07e3953d4f196a678e0b1"
  },
  {
    "url": "assets/js/63.6581b9fe.js",
    "revision": "c95f141ee4fffa2d9f5e699b215ecb35"
  },
  {
    "url": "assets/js/64.2b617838.js",
    "revision": "88c0f41e1ee2d403bc34ead8ee4fc1b2"
  },
  {
    "url": "assets/js/65.bdc20743.js",
    "revision": "9ddb1bb67c17726d579e99027a639e0e"
  },
  {
    "url": "assets/js/66.57ad084e.js",
    "revision": "70fe113270aff800263b59f17291e66c"
  },
  {
    "url": "assets/js/67.d0586581.js",
    "revision": "b29fdb05d98f4297a46337c55e520086"
  },
  {
    "url": "assets/js/68.95976b09.js",
    "revision": "444ffc1ea082210014e9d6f132caabe5"
  },
  {
    "url": "assets/js/69.d2f16742.js",
    "revision": "9e4dee716cf683d6867dc585b26e7608"
  },
  {
    "url": "assets/js/7.9e4ea5ee.js",
    "revision": "ad9ed09e840b391e9ca40e1ca68b1566"
  },
  {
    "url": "assets/js/70.f96cde63.js",
    "revision": "d3b5876c6ef6ea28301351203c780914"
  },
  {
    "url": "assets/js/71.afd9e03a.js",
    "revision": "048526f18de9b4e7ffbc14b969934de1"
  },
  {
    "url": "assets/js/72.480e4b1b.js",
    "revision": "b1f0edb6bf18653a7bf38959286f932f"
  },
  {
    "url": "assets/js/73.76407a64.js",
    "revision": "b03d932be720aa288afb0ef8eaf00bd9"
  },
  {
    "url": "assets/js/74.9c2ac3ca.js",
    "revision": "84e9b533d079888d668d9f45f974dd3d"
  },
  {
    "url": "assets/js/75.6c9283cc.js",
    "revision": "c8e35ab7f5d600c2a33af3b15aff1751"
  },
  {
    "url": "assets/js/76.67d0be0e.js",
    "revision": "23dc3dbae6af980aa1e58fef0e05bd64"
  },
  {
    "url": "assets/js/77.82f18fb4.js",
    "revision": "62b83c8b630dbf5aff6eb588942fdfd6"
  },
  {
    "url": "assets/js/78.ea53f664.js",
    "revision": "1cb41949ed1b838c86a3b23f0d9a9ed0"
  },
  {
    "url": "assets/js/79.01883e04.js",
    "revision": "894b95dd8de3b61a09bc23e69f0a527c"
  },
  {
    "url": "assets/js/8.63a3e937.js",
    "revision": "b7c440207e9f4efb8ef7fd69dc968475"
  },
  {
    "url": "assets/js/80.d1e413ff.js",
    "revision": "ac84c1701e2b8fc1ccb25edbfcff58d2"
  },
  {
    "url": "assets/js/81.0e1ea5bc.js",
    "revision": "7178d26c7001d7518db5c2d6b475fb09"
  },
  {
    "url": "assets/js/82.9301dbc1.js",
    "revision": "24c9e618b57df2f419f896a31ed16191"
  },
  {
    "url": "assets/js/83.ff6ffeb5.js",
    "revision": "e635f7dcb39abeaed137b978614f8f2f"
  },
  {
    "url": "assets/js/84.6afa2275.js",
    "revision": "d5cde82ebe20587a382a75c1a1e319d3"
  },
  {
    "url": "assets/js/85.6f5989c2.js",
    "revision": "52441085c8a32c0c1d9121538c304222"
  },
  {
    "url": "assets/js/86.c61db818.js",
    "revision": "634af4f59060990f88bce46e24046366"
  },
  {
    "url": "assets/js/87.e9608a50.js",
    "revision": "8d7f1033dc525a97978a22f9a5a0a922"
  },
  {
    "url": "assets/js/88.9a11ff53.js",
    "revision": "1eed3721ca70c783b7da27c66cde69f2"
  },
  {
    "url": "assets/js/89.fc8b2505.js",
    "revision": "519a80dd49b68c5c9eb59e3ebbd15a5b"
  },
  {
    "url": "assets/js/9.cf11d5de.js",
    "revision": "951168c67be12db1c6f70d998bf113fd"
  },
  {
    "url": "assets/js/90.61e72384.js",
    "revision": "f4b3de836c71f46ccd79b0f23de4de25"
  },
  {
    "url": "assets/js/91.354d5fe8.js",
    "revision": "8d0a093f2eb9dc642edc0af619383e75"
  },
  {
    "url": "assets/js/92.c91a9ad4.js",
    "revision": "7dc59e318ac397cb67a5dc93fd3011c6"
  },
  {
    "url": "assets/js/93.37683cea.js",
    "revision": "599542d5a90fd5a9b1b066c4b5e9bba6"
  },
  {
    "url": "assets/js/94.41335b35.js",
    "revision": "2c4add3e36a8c131971c3f6fc036e95d"
  },
  {
    "url": "assets/js/95.bf193949.js",
    "revision": "5142738d046571bb7591e4695d0fecbb"
  },
  {
    "url": "assets/js/96.c0697214.js",
    "revision": "a11ab0f8cff758a33420c419c19caf39"
  },
  {
    "url": "assets/js/97.97d1d98b.js",
    "revision": "28f12c3517dbaa294f762b01e7bb0473"
  },
  {
    "url": "assets/js/98.93b58e92.js",
    "revision": "e7bdb2277092213042650d15a7faf9dd"
  },
  {
    "url": "assets/js/99.a24c18a2.js",
    "revision": "c3d492db133a066211bb5c0bf2eee29d"
  },
  {
    "url": "assets/js/app.7611f280.js",
    "revision": "23ad566295f0d4f551a89ed60b477fd0"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "b037ff321e380116018df64cfc17664f"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "21eb1211fa32b48a01b50e087cb72f5d"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "97616e15854e3dc2ad6063c68176e845"
  },
  {
    "url": "tutorial/index.html",
    "revision": "ac5481fee5cb48e6714ce3b0b6389fa1"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "4f771ede52dac8656e8a32e1e93f1ffe"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "e80ac3b8cf7ec941efc767d658cd1233"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "399290d321444daad25d85e876a67ed2"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "0450e437df422b40945a44e12b75cd47"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "3b4479583c6943db1ea85248c020acc2"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "23ff0ef3934fce29e4cb98d0b186eda4"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "07f3d68d6de7d8400c105cab832059d9"
  },
  {
    "url": "zh/api/index.html",
    "revision": "1810ffcb3650abb58949debe98474d36"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "eb694470859f8043676eed8ea789617f"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "e4ed6afb758953c3c66221a3999d95d7"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "bb29ca77bfaf1219c3d583228295a5ab"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "128f9194d94d732d9d2cc13e376a166f"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "824cfa102c901e055d813b51fcf818c7"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "23eddf2777a5e232c9f1e1ed5cfcaa5c"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "105ac0355624fdfc8b6821f00aa21968"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "ea8ba0a88648487b655d4869c9ff01a3"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "64e69a9c8c780e83a4d00a50c64fd1a1"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "6e3e047fcb3ba2d1ac89eae875ecfe3f"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "525618122dee923c6b2713c8f413f39f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "e408e226c7ce8d650a29e132f05323fd"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "4ea6679e12716d78ae1ff1d101e48cb0"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "42ef624431ef9a771e0f27a7d573ae7b"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "33bf57d0fdcb16743dc749b5b0fd69e7"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "c6c95275fb593c9d0283770536e1afaa"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "0d565d9084badd0a8728008543ae39bd"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "b97589839609bc6c51efed0ed9fd1360"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "53b92fc46eb556e0331da25b425cc759"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "3ed5fa3300d6a0bd2057c581abd770d4"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "d5ffd99d3888f143a388cb39243ba66e"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "dbf48b91a34809affbe9821629c8e63c"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "6cd3b925cc615725a29aa55667807ac1"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "3318cce9099dc912061225cb4adfa765"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "d9ad2e5beb9b14a3e2712b9afdb82fc1"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "169477375c7516672f7b439586003cad"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "75f4b7db9feec57451a81ebf781e35ea"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "cba2e32b7a15ea73b8ffef2657ececf8"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "18fe38615426ee3feb824356f753feab"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "11b50045c4890b60f725d8357e91d5f7"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "dfb1ad5ac3bac482f2b1a43d706b1192"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "a8e19b69cbf36c5b6afc3f4cfa56d7ca"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "9e51ebe254ed4518b498456863b66755"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "9cd5132e37865dce2b41743e8837c340"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "2e8ed9ccea53ed8c011968f59d025cc7"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "e427e0e4b7e626fb3ca3603d602cef25"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "56ac6f81d46a0593b8dd5748842aae13"
  },
  {
    "url": "zh/index.html",
    "revision": "079ecd6d9c17a7b00604bbd689a837bf"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "47d840f378af139defa3da4c7ca1a09d"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "0fe87eb09f8b20795da3cee7bd911a3f"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "ca3326e682ae8fbdd801808127c595d0"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "2502513ab72934af35bfa31cda0ff7f9"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "f4b17e461a9fcb8730fed8b2174aa4c2"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "b06fb913af9ff0166aeb481044314986"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "e98440abadf835eca9750f6b6bd2ec13"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "c8fdda2aa25e845acb48c9b0d7da0aa2"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "4eeeb5b7eba0ccb4d4343fa6f510dc3c"
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
