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
    "revision": "f673fb70b1fd4fc8c0eac2d2189075d0"
  },
  {
    "url": "api/index.html",
    "revision": "ae013fa6ae60662217205bb76c2048eb"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "ce562eaf6339b5cd476ab8b2c2c01a84"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "e7043b71ed852ce94ea5e2e9c94d8e7d"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "79542b490453cce55ca9104086a73f88"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "5348aebb347279f3992cc0950101c8a0"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "77f4c384cf2cba5b864494225c55140d"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "469390d18ed1105ab468af7ad6e62862"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "6f3ea9161fefa00df8c061cc895c7c34"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "ef1caec912beee8f734ad0c10725f211"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "b2f3ec06bf1eef07710bf6e8cc56a5da"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "dfbcf3a5be634d259075aefbd5a52acd"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "af8ce0f0a946050e493f480f50b9fe40"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "d98ca026850d70bfaa2eb0ac774feec2"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "f7f2e0863f18f626b5ca8c647f4147fe"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "8956bdb1e1bc2a769ed85efadf0d3dd1"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "97a09c7f248b9ad05d5fba776fa65288"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "0d8cddbeb32eb05e155b1a78be6dc74c"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "e450914d8d7f1ff51e92f948b8b9dc2a"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "fc1ad608c83620dc1ec240a479b45a30"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "a05feabfe864da3d1d0ee536e64c157e"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "bc0947d48a00055228b00521e71b0fa7"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "1ecb61d76399ceb01a382869f39db1e0"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "71492092d3046c6eb1fc1971201aefcc"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "add69860060fd1b0f34f0252de14296b"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "d6aa9ee1128c9c24ecb620a8012004ac"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "e1b59f3e1008e0049eeab24bab8094d9"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "783e90b5d5fc06c03565d51865af2e46"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "6d4ac820b5aebc1f9dd2babcbf31d7cb"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "608173ee93e5cc90e421b59f3c2149f2"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "421cd11ede1cce9f2d6371b42c19f00d"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "40643dd5ae9b56b41fe5447c743c0a59"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "3803644e7e3ed78c4d020e0887473df8"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "998903780e734645e73b1a6c340a11e9"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "2b3f7b68036721e34a47692b40db37b3"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "8f3d743f16a24144ca2a407d6fcdef11"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "fbc695b51d273f721ddd922ca15fdc13"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "b3688cb83d499c2ebafbfb1366a1a1c4"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "19d39cb48ddc695878574455cf3e91c4"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "a1af0741ca3b4fbab6b8db4660a30eaf"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "292762695ee3a05e29305ee8a571dc54"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "4f14396c7f87a8dc98c9b843a4a9cac8"
  },
  {
    "url": "assets/css/0.styles.354a0af6.css",
    "revision": "8a0bca35ce73aeebcebd4a195718a9fd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c63e6c1f.js",
    "revision": "1b8b37516ecb74d1a9e5b61a2e82a854"
  },
  {
    "url": "assets/js/100.4276aa2f.js",
    "revision": "1862d7287757431f4ca2e508b7d3adc3"
  },
  {
    "url": "assets/js/101.c49f51a3.js",
    "revision": "1817b70089c70704389db382a47e268f"
  },
  {
    "url": "assets/js/102.6830d99a.js",
    "revision": "68d845f17187629b84c7d11ff2b9464c"
  },
  {
    "url": "assets/js/103.d385537b.js",
    "revision": "3ad152c4880a165bb59194e4fadd12ee"
  },
  {
    "url": "assets/js/104.670d2d8e.js",
    "revision": "f255ed3f1704a1d4201940bf3544b25a"
  },
  {
    "url": "assets/js/105.93c5c6b2.js",
    "revision": "4df5d9ae8131a3449a2ba26d6224237f"
  },
  {
    "url": "assets/js/106.358a8f34.js",
    "revision": "98e6c59d1554a0546bef532054006b28"
  },
  {
    "url": "assets/js/107.189eb72e.js",
    "revision": "a2a0f600e176de866b1e40d726176c2c"
  },
  {
    "url": "assets/js/108.e0b927c4.js",
    "revision": "68807e9700859edf8bfe6f6d264615e7"
  },
  {
    "url": "assets/js/109.240e1b17.js",
    "revision": "09cd0d1048bf4c671a1aaa82c0e02757"
  },
  {
    "url": "assets/js/11.3fd9234e.js",
    "revision": "6a00ca8471a9634c3d4fbfdcbc684446"
  },
  {
    "url": "assets/js/12.e8e440c2.js",
    "revision": "3dcc5bd9c813b78aabfa69bf7a9f7435"
  },
  {
    "url": "assets/js/13.54edf138.js",
    "revision": "b25fa0c3adda7338c3a992f329203924"
  },
  {
    "url": "assets/js/14.c85fadc7.js",
    "revision": "dd0d494a9b2edf805c5a7f340811fe91"
  },
  {
    "url": "assets/js/15.366ddd09.js",
    "revision": "35a97082a9552bcc8e7dc69b2ffe9982"
  },
  {
    "url": "assets/js/16.c2bdf846.js",
    "revision": "ba4b66100cdb943114381d1420ca9e98"
  },
  {
    "url": "assets/js/17.e3615f80.js",
    "revision": "f5c152407d6f0b57dcf1fe9146672163"
  },
  {
    "url": "assets/js/18.3691e772.js",
    "revision": "7f353aa9513d101319c3bbae37d0fa7f"
  },
  {
    "url": "assets/js/19.ba727126.js",
    "revision": "48968b9124c859528df4d34b0ead3fc8"
  },
  {
    "url": "assets/js/20.2e867724.js",
    "revision": "6f070102090b653d6b0bf4bb0738f5f6"
  },
  {
    "url": "assets/js/21.1efa9b28.js",
    "revision": "9679d403a217493f054116e9d091c28f"
  },
  {
    "url": "assets/js/22.10ba5a74.js",
    "revision": "2b133279608508ccb71fb113f2d1af54"
  },
  {
    "url": "assets/js/23.ed4de696.js",
    "revision": "520fd545746a76dc0211f46bde96846c"
  },
  {
    "url": "assets/js/24.0ed4701d.js",
    "revision": "72673e9b4ba50e56550348d5c5b996f3"
  },
  {
    "url": "assets/js/25.18f078d8.js",
    "revision": "b8134b2774704c9d2867b2efb3a8ef85"
  },
  {
    "url": "assets/js/26.27f6c126.js",
    "revision": "b3a66eec6c4e231caecdbb20f34ba162"
  },
  {
    "url": "assets/js/27.bce21240.js",
    "revision": "d8d69e1a1f420932b8dff64a8989d4fe"
  },
  {
    "url": "assets/js/28.5c08f0a6.js",
    "revision": "5cfec391e273ff3c126075b79fb60c9f"
  },
  {
    "url": "assets/js/29.8932703f.js",
    "revision": "a7cb892725e17d2e66d6266b77fe87dc"
  },
  {
    "url": "assets/js/3.8399634c.js",
    "revision": "0d1fb9a11a3d6fdc15fc4cd743d7ecf5"
  },
  {
    "url": "assets/js/30.98506de3.js",
    "revision": "c2194a0c15608c1aad067db3c0ddbc4f"
  },
  {
    "url": "assets/js/31.72beaffa.js",
    "revision": "99a80e345aeb93e1a3d263d198b49ec8"
  },
  {
    "url": "assets/js/32.977fd984.js",
    "revision": "2dce5b55357a19db894087ad88144979"
  },
  {
    "url": "assets/js/33.5f358d5c.js",
    "revision": "a8d16818b454ba343120faee16b0e75b"
  },
  {
    "url": "assets/js/34.a97ef788.js",
    "revision": "09e4cac6e3c5cfc4de35d5d08bc6dc9b"
  },
  {
    "url": "assets/js/35.07316375.js",
    "revision": "9483ac06ddfe7bad27788e4f7c21372e"
  },
  {
    "url": "assets/js/36.4bed3957.js",
    "revision": "df0fa82bbb3ff4266455c86ec34e4f95"
  },
  {
    "url": "assets/js/37.ab0edfb2.js",
    "revision": "af22167637a4ec1d4924d5ae4833dff6"
  },
  {
    "url": "assets/js/38.d5180321.js",
    "revision": "edd9b6477f495afd5ff2193cab01823f"
  },
  {
    "url": "assets/js/39.8bb79548.js",
    "revision": "60410e47856ac6c3e5589dedd147d414"
  },
  {
    "url": "assets/js/4.c1e78bf0.js",
    "revision": "3530adce716259d97c0055c1735c1c3a"
  },
  {
    "url": "assets/js/40.f7c0c5d9.js",
    "revision": "7243787791bd7eda1fd7e8a88b0d270a"
  },
  {
    "url": "assets/js/41.f6e4823a.js",
    "revision": "7842b7386fe9bfa3915a88dd5a743834"
  },
  {
    "url": "assets/js/42.b588ebc5.js",
    "revision": "31d127b06ad124a587eb4ded27d7f3ac"
  },
  {
    "url": "assets/js/43.22f0cc0e.js",
    "revision": "ad8a8ce96fdaf63cb64981f1cef9fa6f"
  },
  {
    "url": "assets/js/44.c12c59db.js",
    "revision": "10e6b069a38b75da5af20d29df7f8489"
  },
  {
    "url": "assets/js/45.8d5b2b9c.js",
    "revision": "7a5e68fd34b34516641345dbdcd55f24"
  },
  {
    "url": "assets/js/46.a912a88b.js",
    "revision": "7a6a8102448bd7a1e6cfee07247387f4"
  },
  {
    "url": "assets/js/47.ad7f9cea.js",
    "revision": "0010f0a0119a907bf1440768d0e4c188"
  },
  {
    "url": "assets/js/48.a6a5ab18.js",
    "revision": "6bba9baafb5c73e0809612b6e8cec6ee"
  },
  {
    "url": "assets/js/49.07ba64c7.js",
    "revision": "c917f155c9d6a769caadcafc238ef04a"
  },
  {
    "url": "assets/js/5.20f79aab.js",
    "revision": "5eb815cd68f95d2e2d5c758e15aa7aa2"
  },
  {
    "url": "assets/js/50.ecbc1770.js",
    "revision": "78f5e9f1fa5a935ad27689d3722eb374"
  },
  {
    "url": "assets/js/51.27b757ba.js",
    "revision": "1f67b0ba5b6b4879296636ce0ddb36bf"
  },
  {
    "url": "assets/js/52.ceadb1f4.js",
    "revision": "9203c39e67c6c51eb2c8093377a27d06"
  },
  {
    "url": "assets/js/53.e9b7d76e.js",
    "revision": "e0582d6be41387fbf381683cb975d813"
  },
  {
    "url": "assets/js/54.96e18ee9.js",
    "revision": "d87c82199bde7a95649681d944b24203"
  },
  {
    "url": "assets/js/55.fdb312c1.js",
    "revision": "bde976487ab1f32e7da22d98028d819e"
  },
  {
    "url": "assets/js/56.00485f53.js",
    "revision": "498dedbbdffb226286a32ed402101437"
  },
  {
    "url": "assets/js/57.a0ca4aeb.js",
    "revision": "d10fdc1dd6f3a5f22df78bc4898b3032"
  },
  {
    "url": "assets/js/58.89c305b7.js",
    "revision": "5122c30cc9986f8fb93e6ec280a0da26"
  },
  {
    "url": "assets/js/59.cbd2c10f.js",
    "revision": "396866c1a25953fa05e470fac7f429f5"
  },
  {
    "url": "assets/js/6.fbb8392d.js",
    "revision": "47ad7cd1bbcb012576a7fd7b10cba494"
  },
  {
    "url": "assets/js/60.3e311ec5.js",
    "revision": "dbb5cceea08989d8d4163134fd9ac04b"
  },
  {
    "url": "assets/js/61.2be9aa19.js",
    "revision": "5de42d86a994e0a9ae32bd8d70846133"
  },
  {
    "url": "assets/js/62.6781a16f.js",
    "revision": "1bc63d59468aa5511d1b4fe086283cf8"
  },
  {
    "url": "assets/js/63.1285ffb8.js",
    "revision": "e1abf297523bbfb6881679f2324a7c70"
  },
  {
    "url": "assets/js/64.1c323474.js",
    "revision": "c1b2fe9100835bb12a1203d2a64292ad"
  },
  {
    "url": "assets/js/65.e677fc19.js",
    "revision": "4f8f27923fa7bf90fb6b7fb4dd9403e0"
  },
  {
    "url": "assets/js/66.242d98e6.js",
    "revision": "e439c54e996ec443a30ad8543a0adbb1"
  },
  {
    "url": "assets/js/67.fdaf29b3.js",
    "revision": "9d0a300228920893681b01d08f7c5ba0"
  },
  {
    "url": "assets/js/68.dcbc7593.js",
    "revision": "dbbb5c9067dbb05c9163cb46fc146016"
  },
  {
    "url": "assets/js/69.ec89e2bb.js",
    "revision": "87c2f85b5697045f4a06a72ef001a3a5"
  },
  {
    "url": "assets/js/7.1c57d796.js",
    "revision": "55532c52eccba6f914417d0846d562b6"
  },
  {
    "url": "assets/js/70.d6304756.js",
    "revision": "19949ca1e635a892470810e82cf511ed"
  },
  {
    "url": "assets/js/71.ecc38863.js",
    "revision": "592db2bc29fc4989465b06cb10f420a0"
  },
  {
    "url": "assets/js/72.a098900e.js",
    "revision": "37bd58a6f5dfcee1f55e7c60799fc1f0"
  },
  {
    "url": "assets/js/73.a206dbfe.js",
    "revision": "38f88fc5ed8fa34861a0565f94cfef28"
  },
  {
    "url": "assets/js/74.06852780.js",
    "revision": "4b925b3e7acebaeec2574d6e4e2522a8"
  },
  {
    "url": "assets/js/75.3686c3cc.js",
    "revision": "aeb199369c8adc01fb8e483609123350"
  },
  {
    "url": "assets/js/76.6380624e.js",
    "revision": "6ab2decb555c758601b01f743947d8bf"
  },
  {
    "url": "assets/js/77.6e755066.js",
    "revision": "b17a6b63244a424aa7833cce4669777c"
  },
  {
    "url": "assets/js/78.f930114f.js",
    "revision": "ec5094dc637e9f2b59147891c575965b"
  },
  {
    "url": "assets/js/79.85f7e4cf.js",
    "revision": "57a46904c5b1bc2071e201e6d3cc6e1a"
  },
  {
    "url": "assets/js/8.9fc3243c.js",
    "revision": "35b459a91d81afdf1955273f1f41a0e5"
  },
  {
    "url": "assets/js/80.d799e0a7.js",
    "revision": "34174322d1079b1218c83fd4a080cc4f"
  },
  {
    "url": "assets/js/81.97460735.js",
    "revision": "79bd8f0f982e31b3f234190b5d046fdf"
  },
  {
    "url": "assets/js/82.757852d0.js",
    "revision": "ae998e51e06652efaadc2e2d0faa42dd"
  },
  {
    "url": "assets/js/83.ce93d254.js",
    "revision": "a92718dd4b1d500c9f69244e1dc1c0bd"
  },
  {
    "url": "assets/js/84.f43b3f63.js",
    "revision": "25b0bd990a1b6afb1e33d8725939652c"
  },
  {
    "url": "assets/js/85.71f70546.js",
    "revision": "f71868cd34351ca8b88db4dd17d6fce2"
  },
  {
    "url": "assets/js/86.7120d4ed.js",
    "revision": "7bd93dcdb8459601ef4218b7e555f397"
  },
  {
    "url": "assets/js/87.c7ddd392.js",
    "revision": "f2c7487105a255d496f73c49d3ef3869"
  },
  {
    "url": "assets/js/88.604fc94b.js",
    "revision": "05c5cc1ef11dce7846cecfb5e8a777ac"
  },
  {
    "url": "assets/js/89.ac57da77.js",
    "revision": "598bfaf1fab8109f7dd559f48c92bd8f"
  },
  {
    "url": "assets/js/9.3d2077f0.js",
    "revision": "6d4cb29edacff0b51fbfb85412719521"
  },
  {
    "url": "assets/js/90.881c39aa.js",
    "revision": "fbf5689aba195c7e04d609675611d568"
  },
  {
    "url": "assets/js/91.f8e91b76.js",
    "revision": "a9750042c5056a400bab523ae95b72fd"
  },
  {
    "url": "assets/js/92.990e9bba.js",
    "revision": "af240695489a121380406efa3f839c93"
  },
  {
    "url": "assets/js/93.a83cc4b7.js",
    "revision": "b8e119165865beed352329996a21c5cc"
  },
  {
    "url": "assets/js/94.f5564d89.js",
    "revision": "1fd773fcbd0c887c820d719b9035b1ff"
  },
  {
    "url": "assets/js/95.1b765b60.js",
    "revision": "2218ced9862af83b00415dc3f8ae4f66"
  },
  {
    "url": "assets/js/96.116f1860.js",
    "revision": "6a56fe914bb487bf037ec46566555d0d"
  },
  {
    "url": "assets/js/97.f91c9dd4.js",
    "revision": "e050f13a8410bb842d38206460c929ba"
  },
  {
    "url": "assets/js/98.cdeee14a.js",
    "revision": "333435a23c5ab8ec7427d362ad9b6a89"
  },
  {
    "url": "assets/js/99.d7dc01f0.js",
    "revision": "25fa81afeef5b527f0cca27b7507a848"
  },
  {
    "url": "assets/js/app.34e2bd8c.js",
    "revision": "f1e1c8c86ca12d71b5aa4519f89029a2"
  },
  {
    "url": "assets/js/vendors~notification.cc318a83.js",
    "revision": "df473d7e4ec5238ea5f4b5f61b4bec6b"
  },
  {
    "url": "i18n/index.html",
    "revision": "eb36384338b81971c4ceafbef7a127e6"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "f777d54e3e3f8fd69320fbeff6f64fa5"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "28351dff6fd70d823e662fe70fbc5ed6"
  },
  {
    "url": "tutorial/index.html",
    "revision": "839276172888371626dc711828f61435"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "ad8c0c3a7e77e1a96219f08599b9de72"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "a1d88da42234cd4aec6ab9eebe11527f"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "ef1c9685baad70f22c05d11e66de58a3"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "09ae46cea9bb6349f0fa6ff2cb45a0e5"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "ab4d1e6e58860e87d80a73de76576b10"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "fc100fdffae9ff19a9916aac0456979d"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "d0959636ee559eeb753b3aa6def5d497"
  },
  {
    "url": "zh/api/index.html",
    "revision": "7a23fdaa97521837b5f4582f0719c569"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "167ba087105489a9cc369158810cb960"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "d168cd0db2068b7a1bacbbeefcf630ec"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "477fca05ea7cf8ed9a41cdaf35645980"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "0f549ff1cf4bcc6b8b0505aac1e574e8"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "dfe70807d98cc11d10bf37aa23f0004a"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "c92369e7ad446b6a1ed29a8ea6077199"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "7e3c2b3278a576f188b429c0745694e2"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "88d19aef0338d3d7220fe35e82ea0439"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "cc7cbbdae7a2a9ce82e4405356ac0a8e"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "5b7e941fcebe974c6aa9062185ec19de"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "65805164bff9dc379a3d1b198d117bc6"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "452a9cb6656e658a6a15fd07f9d960db"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "361c65c95572ec828225d07c1e0ddb5b"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "819bfc6c54f3b95f8de36cd68a9b9eb8"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "e3a7729d0c7efafd25634b4360ca6bac"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "507a806f02cd4bdc0fd197953356edff"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "b9448ae5cf2e0a3b3b1da568e0168378"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "2bc5df6bd83aff145577913d5939afc9"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "bc041e62b331241e18306b5c8a4322b4"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "01e1bab7426e747fac9529527dd20b04"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "9bd8df3f017a683c0620ed2049386a85"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "ef40746d626b54458e2a3b77273cef26"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "c4e18dd01f67f5b2b6f323c90541c7cf"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "a61f7b0f24ee7fb3d41e705bdf322762"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "87b804b66b79fa7a0dff7353e748b9bd"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "10c1c3568b6e2093420dc8a39a2ee21f"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "58bca807a365fb202828beb62a2aa778"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "1383664597343caded3ed8f17b4b6acc"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "92dce13e9cf7e738c7979c9c28c832dc"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "fd91d097d8f6bad8e326815d9b09c2e7"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "1fa5eb2972297eda36f644791bfc8e5b"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "de25f05b2779ca0eb99e03d9364ed992"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "c9ef41c4c329220c5e49c76d4d6a6fa2"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "cdb4aa793c1ac79423d6832f996ec0a4"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "045a3c896343754c04cfaa501d7ed414"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "9ed6a3cf7020f11ef28f04f8a92c9892"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "9f990a0dc86709ba932adc8b2598c126"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "7c0e60166269c1ce5aed04477092b5df"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "63e776fccbaae1b6eb6db7672f331a05"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "12bba5e2b73005a8acd907fb7154b41f"
  },
  {
    "url": "zh/index.html",
    "revision": "74330dc512bae9739d6da6e20b5b9622"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "34d00bcbebb882d3a55477cab8bcb927"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "bd76a393918e11843082f4014eb4856b"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "336e79277bfd9fadfb09b760d7379c6e"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "07f41aa4f7f71e9c47f0ff300036b791"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "1cfb4f519adc54cc67fccd895633200f"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "97fd41ce2eed2c073551d3540c2556b1"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "9fa0555f3d7adb88f2c5d5fd10790296"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "6b0c59f61962c44abdef9ee53d6606e9"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "483ab6adea38d995b57cd7a34b850203"
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
