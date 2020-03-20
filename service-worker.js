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
    "url": "api/index.html",
    "revision": "c9146d6acb5792b7fda8893511136e42"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "f9c9f00b50c437c55133ed28fb1a86bd"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "43a65c5319613bc26ba5fc7c14113968"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "b942f40f764ce131360cf343ade656b0"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "6d4e3323720b183d283bb25d07391fc3"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "cb370ed9fdb531f94d3985c29599538d"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "cb9a815d9b7ac5195f693305850332b9"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "bedf59256d07b8648bc538ca7bc4a377"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "8af463351f5b40bf13455d739c4a9dea"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "d3fe994ad1bc55baf938e626f91887b2"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "4709e32bd3f8edb98be0972e5ce734d4"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "1bcfa3cdb63f269e0aba612f6c2e2d25"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "65809613196794fc534c9d288fe8ecfa"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "d79bbec5e7abc8e9efd4b7ddc6287dcd"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "bdbc46f748a6c064a1427263955ce21d"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "9c0ed373ad0c6d8f1047fb690f108525"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "081920638c159b409b824ad227140366"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "8d86a8f6e5ee9d4210b6b823da0af3db"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "04bd4c92de9e5e4c6d4991654bb38d9b"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "8392486e17131d19ad606ce52dc9e993"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "0eedfeaad9911f7702dd4408fc987d02"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "a7fcad4bcc260ea0158f5754ca44de68"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "59eeec4f87366d339ee36ea425a518a2"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "a405b966d374c2da3fd345f2e31c0cb0"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "1defb544de506329306d842e0950061e"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "f428f44ab1373175564d701813c4d40f"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "b0bd354bf1d4077c5fd4d8050e51d7d6"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "e000e081c1057edb58972e6ca0056112"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "1b509337f3df0665e09e37baed8766ab"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "874c0103c8c81c924b6e10aa27f21f0a"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "afb401b3491ccb663b15b627353928aa"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "0d28b8e4ae1e3c0cc63183c48fc76500"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "c3a628a15963e284d5a8773a375a2d89"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "af9fbac76ed087e42a328b5ec0624568"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "5239cc327fb4cd95f92d851578a07fe1"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "f35b55235eff3f6a8b24a6f75ddae77f"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "d2681ee96bb61af77b413f2c32913711"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "bd85c667d086bf8345ed8ca00515465a"
  },
  {
    "url": "assets/css/0.styles.f327b371.css",
    "revision": "d260d5fde167e43cb4a6c3207fe47bbd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3be2ee92.js",
    "revision": "31edff211d24dbdcd0776ca587147d85"
  },
  {
    "url": "assets/js/100.45219533.js",
    "revision": "488c74e17154c3f19a22ebd2dd1ef320"
  },
  {
    "url": "assets/js/101.29eda03a.js",
    "revision": "6b7b6041093573f1341e65d55a39a03e"
  },
  {
    "url": "assets/js/102.7a75bf74.js",
    "revision": "c19b40cd9490f6882a1f955691e6954b"
  },
  {
    "url": "assets/js/103.ecdc18da.js",
    "revision": "b275093d27f01ec315982bd315aecc14"
  },
  {
    "url": "assets/js/11.47369064.js",
    "revision": "0e0968356262ce73d83164dcdbf00f43"
  },
  {
    "url": "assets/js/12.f571e98e.js",
    "revision": "a51baafffd8c3950bf2b4be5b698f195"
  },
  {
    "url": "assets/js/13.9196d3f9.js",
    "revision": "f2896e3fed675c34f258e1a69f3562c8"
  },
  {
    "url": "assets/js/14.dfd69050.js",
    "revision": "c8ff85af9f13337521f4ed1a1177aa60"
  },
  {
    "url": "assets/js/15.de996f7e.js",
    "revision": "58463c688c4cc9d5bdc6c4b4ae05755f"
  },
  {
    "url": "assets/js/16.60d77086.js",
    "revision": "40c5c32f8c095364015676fcfe85186a"
  },
  {
    "url": "assets/js/17.ea9aa2b6.js",
    "revision": "eb167d1a88023f559ddf1912026a2a3e"
  },
  {
    "url": "assets/js/18.8d6ec844.js",
    "revision": "977ceaaaed865d5fe99a41f37e4af2cc"
  },
  {
    "url": "assets/js/19.53373db2.js",
    "revision": "306b02d124472d72c7afa248e27f3a27"
  },
  {
    "url": "assets/js/20.c2808fad.js",
    "revision": "bb775c5b03c3f0215800502c022ff958"
  },
  {
    "url": "assets/js/21.bf69f251.js",
    "revision": "34d7838cd2e94935271d5eafa181bbe1"
  },
  {
    "url": "assets/js/22.8146c22a.js",
    "revision": "768cceb2d1beafbd1b8d4e7bd6f68960"
  },
  {
    "url": "assets/js/23.267fb017.js",
    "revision": "66fa10ebf848f96e51ef2c5ab1807798"
  },
  {
    "url": "assets/js/24.71e6f9b5.js",
    "revision": "63a1c9b95a1534785c1a4ff6dc48600c"
  },
  {
    "url": "assets/js/25.7d5a760a.js",
    "revision": "7b28657dd1dbb3a522349983a9e6ca0c"
  },
  {
    "url": "assets/js/26.a5feaee8.js",
    "revision": "2d08e5babf6eb653c330ac1b938c609d"
  },
  {
    "url": "assets/js/27.136bfb3f.js",
    "revision": "8db5d68e59876b12cbe54d30904f52ed"
  },
  {
    "url": "assets/js/28.fc19c31f.js",
    "revision": "1bcdb4058f5d2375ffb3cac78f4ae4bf"
  },
  {
    "url": "assets/js/29.3bc60a75.js",
    "revision": "225e3d5596feaafb7d21cbbdc8dce693"
  },
  {
    "url": "assets/js/3.794b7c01.js",
    "revision": "5429eb5448778cc873354719945b2b25"
  },
  {
    "url": "assets/js/30.99c2dc28.js",
    "revision": "c93f472bbd62d4e999c9a7f461ba81b0"
  },
  {
    "url": "assets/js/31.abdb66e4.js",
    "revision": "43fc011d77ac052e85d86a2d91bcd8a3"
  },
  {
    "url": "assets/js/32.4873b141.js",
    "revision": "5bb4a2834bcbff831b9015271285206b"
  },
  {
    "url": "assets/js/33.00b14c62.js",
    "revision": "ec64d535cc0d0b75b6d2182baf6cd6d6"
  },
  {
    "url": "assets/js/34.63fb39e8.js",
    "revision": "ad1dc2d5e0e9350077f7e2c0622f256c"
  },
  {
    "url": "assets/js/35.019c6503.js",
    "revision": "572f6884a22aab8d4ab4dd89d425e1c6"
  },
  {
    "url": "assets/js/36.877ade53.js",
    "revision": "ba844cddf570d1019794ded0b9e7dd7a"
  },
  {
    "url": "assets/js/37.998f3e2d.js",
    "revision": "886359e1da97638eece629e8cf6dc40d"
  },
  {
    "url": "assets/js/38.6ee7c916.js",
    "revision": "9167f691b2e4ac95acf490c6e85766b5"
  },
  {
    "url": "assets/js/39.fac5ea26.js",
    "revision": "32a4150984abb72897e80fda568edcf1"
  },
  {
    "url": "assets/js/4.df202c60.js",
    "revision": "1ea941713863a23ebdb525827b75a83f"
  },
  {
    "url": "assets/js/40.79c6cc6a.js",
    "revision": "a0be13c48a893d14c47819138578d884"
  },
  {
    "url": "assets/js/41.bf7a968c.js",
    "revision": "cb1e8caf55177c4318c41dac2590645c"
  },
  {
    "url": "assets/js/42.ef8c315b.js",
    "revision": "159fc018379d934872ebca360e02358d"
  },
  {
    "url": "assets/js/43.4f7b25ec.js",
    "revision": "05fb0d7b4b76655a5df432bb0cf0e867"
  },
  {
    "url": "assets/js/44.00b99097.js",
    "revision": "a5e16a0c76b25cd789c916501aff250c"
  },
  {
    "url": "assets/js/45.c03dbf9c.js",
    "revision": "511cb7b2f86271950a553bd8052b007f"
  },
  {
    "url": "assets/js/46.b70f1d5e.js",
    "revision": "5f228fef011730650e11d029ef8c18c6"
  },
  {
    "url": "assets/js/47.4990ffad.js",
    "revision": "582415705184b4d4e46ee21c66701364"
  },
  {
    "url": "assets/js/48.85335623.js",
    "revision": "df0825e7b36e04fe3ca4615d7105eca3"
  },
  {
    "url": "assets/js/49.3cd7f991.js",
    "revision": "9808e3078414236586225d2e7e94c0d1"
  },
  {
    "url": "assets/js/5.1ea23d18.js",
    "revision": "909bb089e45ffea697ea077a3378f6df"
  },
  {
    "url": "assets/js/50.a2c8c07f.js",
    "revision": "6d634d749dd9318ba4e129ab1383bd6d"
  },
  {
    "url": "assets/js/51.dc73aeec.js",
    "revision": "51ec0782477cfec3474042cc1ca46ce5"
  },
  {
    "url": "assets/js/52.eb324d4e.js",
    "revision": "8a0bd608abc516d66e70397566ebbdf4"
  },
  {
    "url": "assets/js/53.6cbd61f1.js",
    "revision": "81d8ccceef2e4aecfc49ab3547f0924b"
  },
  {
    "url": "assets/js/54.1fa6a940.js",
    "revision": "fd8f75b33b4c120147924cbe8dc3c0b9"
  },
  {
    "url": "assets/js/55.15ac460d.js",
    "revision": "31cbe654ffd6b1c82efd90004fb10c61"
  },
  {
    "url": "assets/js/56.86d01f28.js",
    "revision": "aebe895ac28a2a042decd8b29572d646"
  },
  {
    "url": "assets/js/57.0c6b379d.js",
    "revision": "2c23d480eb80b8b11e1f9e2275053fd8"
  },
  {
    "url": "assets/js/58.d564d79f.js",
    "revision": "407304a2e049e9a79df31b30a969b7bd"
  },
  {
    "url": "assets/js/59.572893fc.js",
    "revision": "362936c27e972241400f8a638d954cdd"
  },
  {
    "url": "assets/js/6.0c7ae5ad.js",
    "revision": "87f31672dbee4ca9f9fdbe00635c3adb"
  },
  {
    "url": "assets/js/60.051eefaf.js",
    "revision": "46646146eef8d7b4257998beab222d53"
  },
  {
    "url": "assets/js/61.c89066c0.js",
    "revision": "97db03a9e16b4144b57cdbce9f569483"
  },
  {
    "url": "assets/js/62.387656fe.js",
    "revision": "bc3384480a2e0e1d98ac10887446ab05"
  },
  {
    "url": "assets/js/63.9a9c97e8.js",
    "revision": "18dc085cbc1c16a6ff7064de86eb834a"
  },
  {
    "url": "assets/js/64.e72cf569.js",
    "revision": "b96d55730c5d2bc3b0df7051284f194e"
  },
  {
    "url": "assets/js/65.f3320d8a.js",
    "revision": "1894523196dda3ae04377b458bc5b071"
  },
  {
    "url": "assets/js/66.4a434421.js",
    "revision": "f7238b31d653bc725167f9bed0123b4c"
  },
  {
    "url": "assets/js/67.34cad18f.js",
    "revision": "84542ef8ae20e9ad663fcbb996cf91e1"
  },
  {
    "url": "assets/js/68.c97ab8c2.js",
    "revision": "a9268fa3e7f46f2fe4716c4e5c933baa"
  },
  {
    "url": "assets/js/69.9d8c03c5.js",
    "revision": "3a00a6691febc1b9c0101c5403cadc3e"
  },
  {
    "url": "assets/js/7.49ae3cc8.js",
    "revision": "07985bd617892e390321c5b3e4b8580b"
  },
  {
    "url": "assets/js/70.b66050d5.js",
    "revision": "b919e2284ec008bcfb5f71000a19ecee"
  },
  {
    "url": "assets/js/71.ed5ba614.js",
    "revision": "35543237a28cdf007616ae8f567875b8"
  },
  {
    "url": "assets/js/72.c11c9f3b.js",
    "revision": "b39a4418b6ea03adb638aa24b9505b52"
  },
  {
    "url": "assets/js/73.46015e1a.js",
    "revision": "57bb89163658928cd922df95f8a7c051"
  },
  {
    "url": "assets/js/74.f126c162.js",
    "revision": "8baa487d81b28db72d4a7b0bfe094457"
  },
  {
    "url": "assets/js/75.89f1b281.js",
    "revision": "7ce67fe4e9c60761f6307fdc74ca838e"
  },
  {
    "url": "assets/js/76.3d76f1da.js",
    "revision": "6e0f1242749e7a3342d37070d7f07ccf"
  },
  {
    "url": "assets/js/77.2f6e5a8a.js",
    "revision": "50e50bbcce1e622cc989ba5fb48f4486"
  },
  {
    "url": "assets/js/78.dae6b7ec.js",
    "revision": "894083893659e8aaed7ac14dc4e3473b"
  },
  {
    "url": "assets/js/79.a17adef3.js",
    "revision": "55ee466ff5e708272cf0b5d9ea7e5501"
  },
  {
    "url": "assets/js/8.99670123.js",
    "revision": "b1fe8ac98ae0de8a9bb99a54680bab85"
  },
  {
    "url": "assets/js/80.094b9f46.js",
    "revision": "f0c126a02c188b54277aadd96af53b88"
  },
  {
    "url": "assets/js/81.08b2fcb0.js",
    "revision": "a0e94cb04cc704ad193c2805ccc106d9"
  },
  {
    "url": "assets/js/82.01896490.js",
    "revision": "dc1424af244aed9cf0a125681a75d26b"
  },
  {
    "url": "assets/js/83.9918e4c8.js",
    "revision": "ca9dfe9503a29d103a5e7487e1e65a98"
  },
  {
    "url": "assets/js/84.3e51118d.js",
    "revision": "6b9d75dfcc88d6928aca5a3db4e163eb"
  },
  {
    "url": "assets/js/85.abe13949.js",
    "revision": "5011be911ae6420d166997defd257933"
  },
  {
    "url": "assets/js/86.053721a1.js",
    "revision": "6bed5d861822813e55a03a5d0178d08d"
  },
  {
    "url": "assets/js/87.900fd679.js",
    "revision": "6db392cbc67e07906d6a7eb3c118fe82"
  },
  {
    "url": "assets/js/88.0b571e77.js",
    "revision": "532d794360ebde0f45e6974c89fd10d3"
  },
  {
    "url": "assets/js/89.048e26cd.js",
    "revision": "dfcdb60b85d6c76b8f01cd90d7204b7b"
  },
  {
    "url": "assets/js/9.6080544c.js",
    "revision": "19916ee55b6b03838b26c713ff55f75b"
  },
  {
    "url": "assets/js/90.8e1ea7d2.js",
    "revision": "db88d60c4a4246ae54e8069d7eea0c59"
  },
  {
    "url": "assets/js/91.ea3fcdc4.js",
    "revision": "0d5698e27b1cf75d5896aedf194bc822"
  },
  {
    "url": "assets/js/92.4406399b.js",
    "revision": "8a1396395f6b4e7146ac25da11bbe3c5"
  },
  {
    "url": "assets/js/93.cb917d82.js",
    "revision": "878e5030df6d59fd655a2e9fabdbf811"
  },
  {
    "url": "assets/js/94.98c6c090.js",
    "revision": "2ee079c3c8256d4e963f860afb8c2dbe"
  },
  {
    "url": "assets/js/95.459faa55.js",
    "revision": "bf49785f465161deedf3f07a625cf969"
  },
  {
    "url": "assets/js/96.14c08fe6.js",
    "revision": "2efb66b3bd597574ac551e8126fa08e5"
  },
  {
    "url": "assets/js/97.71aa1ac0.js",
    "revision": "2b6d928543bb7ece7f431b8a26c00e4f"
  },
  {
    "url": "assets/js/98.b205e646.js",
    "revision": "144c1ee2f3f056298cb68ddb73085bea"
  },
  {
    "url": "assets/js/99.81c32d92.js",
    "revision": "60dd6a88efadac2ac7827de01dff16d8"
  },
  {
    "url": "assets/js/app.aa00e632.js",
    "revision": "a65e65eeb0c5c04ce1fac0f5882601f9"
  },
  {
    "url": "assets/js/vendors~notification.a95cab3a.js",
    "revision": "a02b70488e523628b4d90cf963755b74"
  },
  {
    "url": "i18n/index.html",
    "revision": "b78a7d36ebec0c67abb00df0b1afe765"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "49729fc63f2b722ad094d2981524f214"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "cbd759b2acaf9ed10336ec5df989d806"
  },
  {
    "url": "tutorial/index.html",
    "revision": "93e976a7d26acd31cf5f39da755054e3"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "22e04da6463d194ecbf2b4dea738149b"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "01835d888a5796304e1e239b8f1db5dd"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "d41b29970f72ddbd34fe64de22249410"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "d8401fbad474969dac4c0b4b28d85bbc"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "0e02dd2bd17f696b81b9132c64998a84"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "cb79293c563a4f45d86fb9627dadb0f3"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "0570110e9491a83f75e23a9e121bb3c5"
  },
  {
    "url": "zh/api/index.html",
    "revision": "965c14f1d291efd39d38afc9851dc656"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "ef0d91154d952bfb186a4bb3252994a8"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "d5a0683305c3d8304185a4c926c1b0e3"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "b6ca9a185bf6a0c330a1fd309a909b36"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "73814216fa2460926eaece1ef9388923"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "f60c0ace867ea471c344ad90084140f6"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "2d96d026ea336c7551dc5e4443d3424f"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "0dfda445c2d23118bea6da4d43344f9a"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "0f2667a801db3a045589d067f72f0c06"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "261124b2aac2550d2bf4152e46490a7f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "2056ca70c6e962f23554af2b782a6fc8"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "29c9440ed0d714c7f05b55c59374681d"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "3953b61a63157dc59f040eb720dbe77a"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "e086b802f015eec24a84fa402a3d24d6"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "fc38a8b00b263eeefb3ae4baed263a21"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "36c65dbf22f49d6add470a6007c2b46d"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "e4d22b90da556a10766b6112899da23c"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "e1190b4e6410fd84e34e6dfc716ca56d"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "9ed5c9c326061d5176d0ed0c836b73bc"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "a125e66d3bbbec608c007526faa286a3"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "9c849470f7244f7ec3945c07a475fccb"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "42340acf00363e13e63590f715ea3f51"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "803138952b6b8c0ddbea3f7d5644e496"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "193c71c9cd1588ca4172f1fae36911fc"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "f5a2094cf5dc347c741e07f6b8da3727"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "cead15cbee6ba4ad7ee6e95f9c5d4382"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "33cb49b08f51a531465b3feaf3270a1d"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "66316ea00cc051c4455db70545b4e176"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "f9aecf42771b7dbe40fb547b30457c86"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "267066fdf819d9ce5a815922a50c8ce1"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "878fa92b8b1dfca1a93080cac7248fa3"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "32228de80557038b92a3cae6d49db48e"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "73b74dfbd042724c609e4aec50b6bf52"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "08fe1a4542873bf2943a9d9c21d8858f"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "88390bd51f1b2ca376a6cf31b81eb6d6"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "3134dbd826a757dd0b4af4b1fa5496d8"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "ebc11b598b99e7b2f8a4fdb1946d759b"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "2431ab6f4a0bd3ad5ef80350b3df101d"
  },
  {
    "url": "zh/index.html",
    "revision": "26e77bb9ac755109618cd41d3be80744"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "f4354514ef1dd60adf90f17a06d0f931"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "4cf0e15fb5d003543087fef0f705f547"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "a905d709bb658b095b01459e917b5146"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "ee735e47ba0836d95f1105863b07700b"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "0e7e25a9afc04aff9bc39ccd2a59c350"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "f028370cfc1c1678c3991753393f608c"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "2b98323d9b228b3b056b2453f7eca3c2"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "8a485198dc6ba0e2fab7e1c8b8aaf35c"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "39a0ecb9ce37c21ab7aa2768251bc99c"
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
