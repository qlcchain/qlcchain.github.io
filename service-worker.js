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
    "revision": "9b308fab78eb50b60e4c4798d6cb80d6"
  },
  {
    "url": "api/index.html",
    "revision": "5752492a6d66638484ccd48e372794dc"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "15ccd76d9c07dd2285f0b211849241f0"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "a178493899d6fb7a69e6d5b5105858c7"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "962ed7b7123fdb7831f1ed946fc879df"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "6fbc6098b89fdf942cb44d299a9d0002"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "f76b3e45fb30876d3537d26d30a8b6dc"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "a9f2028906988ca7521186b940660c69"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "656c2af0b22d4f86f53e785918c3ff0a"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "7bab75d948d86e5ab9d1ea2dc1f83577"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "8e02bba129b7797a7a2e371cf008b18f"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "fedf763a436d98a48705ddf139e9644c"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "14434e204ed9cedd45f685a4caf6dbf1"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "7b1ed948c2ab9bf608af32bf21ee06f0"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "a365f40baf48cf1a2b1fd6fba668c2e1"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "53ab351f326b210732247b83002b1487"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "df259fea9998f5cab5f85b69ccc92a1c"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "8284ac21aeb45d427762b1649b5abbe9"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "9e4725103265cb2b28621d08e34a22d9"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "26f03c60133427297fa2b5abf758fc50"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "1be5ba93a542fa4b344d8e823a1e5a08"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "6d010b31c54ea1d44874bcc244c63065"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "5307ac64d41554743b66541e1126802e"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "0e7e7079df67f2142baaf14eb1533538"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "dcb27176c501d7b95625ee379e9ff543"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "ec203411c4615b8a99dc16df8d93d2e0"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "1ab8ddb38b3c148c915fb97dc3a8e7cc"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "c512c2fcd4a9ffb3a84ac29bba353e4b"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "75524e5074f23837562bc5acfeb7f852"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "132a01cefe1bdca6e7f97e64131352fd"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "b5d938409252f75be253345971632668"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "b02f798d526195f57ff49722386a6ab9"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "8dba1b05fd14fe2b4e12272a4138076e"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "5b8672e5562b2e0c5f6cbfbaa8201213"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "64e395b6d8fb0f7606020f41ba74c457"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "469cfe2afc2b2f72b3cf0bca3d3b2e11"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "d9e280d5acc3e52f3a435d3888682497"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "3db2b009c1edd9ff17b1231d32851fb1"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "fa42c4f3e2d0ce3343b78f213d488d57"
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
    "url": "assets/js/23.f571ede3.js",
    "revision": "c0410d1bcc4c4854f6ef46bb189db490"
  },
  {
    "url": "assets/js/24.af79215c.js",
    "revision": "01148ab200faa132f07a20e80eb5434e"
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
    "url": "assets/js/31.f69e4845.js",
    "revision": "f5feb094176a57887b93b8d63a4304db"
  },
  {
    "url": "assets/js/32.06f63214.js",
    "revision": "3707bde6b1b5640837bf6043bef54c86"
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
    "url": "assets/js/35.e3223a4d.js",
    "revision": "1323038213924450332fdb91a0bfef4c"
  },
  {
    "url": "assets/js/36.b8f2ccfa.js",
    "revision": "f60d286750c7cdd17aa94c429dd099ac"
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
    "url": "assets/js/40.4234ddb5.js",
    "revision": "e206c9d5d94fed1465abfe8d059cf40c"
  },
  {
    "url": "assets/js/41.53c2c170.js",
    "revision": "81683af8e14566f7641df06aa4e6ab04"
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
    "url": "assets/js/51.00f52a84.js",
    "revision": "55c8c1f6a4b23d37d75df48b6e0d1d56"
  },
  {
    "url": "assets/js/52.eab23d5e.js",
    "revision": "907b9aa4b4a5032093c78c9395317972"
  },
  {
    "url": "assets/js/53.0ce23db8.js",
    "revision": "5aa188792be728ba6dec601408f944c8"
  },
  {
    "url": "assets/js/54.e63b34a0.js",
    "revision": "25a2237a4ff0ca2a5d5889181273809a"
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
    "url": "assets/js/57.14af7ca5.js",
    "revision": "5c10e7b176c7a5bfce379beb0f4546cc"
  },
  {
    "url": "assets/js/58.5172f4fe.js",
    "revision": "3ffab474a8a6b970d66c4c1a422d0959"
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
    "url": "assets/js/63.5020d135.js",
    "revision": "bd7362370d9c100a1f7efc6d69acf4dc"
  },
  {
    "url": "assets/js/64.b7ae754d.js",
    "revision": "528dbb6f699297595a30fb01eefb2d30"
  },
  {
    "url": "assets/js/65.56cdf75d.js",
    "revision": "7f2f2caef025ec08fe247c9b09101872"
  },
  {
    "url": "assets/js/66.b7dfbbe4.js",
    "revision": "9b38d8faaa91cc67b54c3e45b85d5464"
  },
  {
    "url": "assets/js/67.d9c63967.js",
    "revision": "2f8a821ed79b75b65fe11e36b985a6ce"
  },
  {
    "url": "assets/js/68.1ef97e18.js",
    "revision": "4f8d1c96e6623dd5bb500f46fa0a375d"
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
    "url": "assets/js/88.dcdbdfa1.js",
    "revision": "d7b6551a4ffa18f3a375ef89bcb5a54a"
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
    "url": "assets/js/90.224bb62e.js",
    "revision": "3c1ded94f920b6f2337f3436fa0146ae"
  },
  {
    "url": "assets/js/91.40dc12bf.js",
    "revision": "b7d3c81a099af51aa98a8f0810ca6192"
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
    "url": "assets/js/app.4a238108.js",
    "revision": "a0984b70d301e8bda4289fd2a8d28aa9"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "8c18227bf177ede12288049eab2195eb"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "31a573bb2b68715be393ea05f9b7b5dc"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "5e0b7cf82ae213f944c4fcee7b420dc0"
  },
  {
    "url": "tutorial/index.html",
    "revision": "7eed53842979c6e1c1680ed3baa77f4f"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "cf2bb0bf6c0051ba88fbaba54195a8d8"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "2f437595e4702fad15f778a2fc23accc"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "e152981ea2a0da064e38a91b3578d737"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "777dc9f0d06d48522bbd6673e17a2c51"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "933e06e81659d65c99e14f9d06a6f0d5"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "e46e01e7655b9468c356e40e0a6afa05"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "4459cd47d19a207f06d026f66207c61f"
  },
  {
    "url": "zh/api/index.html",
    "revision": "15695bcc0299bdee783242f699ea93f3"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "979c9099f718e3983aea0901bc45450f"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "f98db2338f9f17b1cfe3f1a1a59fd7c6"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "cf90bc6a43b6f269680a074041c02ee3"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "1e85f8b18ae89fcea86e4c4667a9fd06"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "be5e285bf5f73a9357bdf39d4211ba87"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "f797a9fb2c1e41c78e08c3eda111fdb7"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "c600a12d123d9f4301f017be3af36cb4"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "b0b55c21bf4be9e9a931acc1b7661fe1"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "e015e6508f24b0d7150a22ecfabb0999"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "abbbc3645dbe36768500c98318f3eb14"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "ac6caf8d13faa8587e5d9ffd0689bbc9"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "1540a6dd84a3c46523c7880a814db96a"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "9999fefd9e09202de2baccfbff4a9e2a"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "b36d1ede47bb00a8bb4f3e9acadd28ca"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "67bef4aae631a74186e93120f685f57f"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "f88e5d967bafcb00bb742e3df182ac94"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "a02a83e1f4c58c0fdd21434d42118ea1"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "6b878011f30377c532a6f909e1549629"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "b91181665b594d7f76a22fa12312b079"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "40b81289562aedad48fb376ab44339f9"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "b345f009bc18ba5b605038b8f6b7212e"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "4167026f4b6078d719f6dfd1edbe549a"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "2e4670b74de80bf7e2a14bfae1736440"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "f185bac2843e44613a5d01c7d20aebb5"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "cc3f4cdd80efb5c456752493584c3da9"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "48d24230967c5d0e74a40527ef05d8fc"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "ebefc8171da2676ac791ea797381bd85"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "ad7f2b8b7dcfaa5aa17be4486e713fa0"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "2a953f0b0786625c366362c369a1e1b0"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "36c2da3876824917474888c5b4cd7981"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "006266e6a69cf1691755dcb3659d70db"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "6b9138fdae80fb1505a9939d62570e95"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "462795c30e494103bcbe536c82102cbc"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "78067f5ff35e75aa264d73c0811ce725"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "1b08c11b4b9f856a374e86a3c5bddbf7"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "d65a328e3b90dc0a53fbebc9813f9c05"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "e26e5641ffb98674c4dcb4be13159923"
  },
  {
    "url": "zh/index.html",
    "revision": "6be8a192ccb8d219eb272729b6695457"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "f5b19269f46d59c20ba932ee963dd36c"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "c5296f4322ce5aaeafa04d6da2ad437c"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "d474970d96bd2e197a3cd101718e07bd"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "22cc3b8c2ec1233a88b4faea0b888f75"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "81bc23ebce203c8b72f5bd96928b266e"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "fef9f4e70d909c93a600007e73c9caac"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "35d51caa2c86c6ae0bafa134f042ba04"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "0f8fb3a33ac85f8cfa970da8314c9c7c"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "e1bbe1bd8eff104603854b0df702df09"
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
