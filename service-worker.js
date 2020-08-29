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
    "revision": "9ea4e007778ed609533a86da325c7a08"
  },
  {
    "url": "api/index.html",
    "revision": "ff61889119e6ef46945c8b9c85d5ac19"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "de56fcf9bbe468ffc5684e319c6a5a2c"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "04fae4a2245ec09b6e5cc9353c2295de"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "2a1a84ab04f293c10e10a4680fb6e874"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "68c68fea4404f3177f33d393c36a3cf9"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "2bb5c1c0999ea7e3d29127cf97fa05d5"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "53e91faa196bf4cd56bac6efc9018b2a"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "c3a12b38792e7defe184773dc5008511"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "e8249fb547b2a864b079d232405e6e9f"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "d89d5e0a3774fc594d8c0345e581e5ec"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "557ed9b0a4eead20f6233bd4d93b8a90"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "f8215b8db8735feb8d2c126402fcd007"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "7b62d286e7bbf8e3d522ce89296d14a9"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "e4447804d3eab3afc5c8bcbd590df315"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "e0bbe28dcb35b9d3ef308839b43f7419"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "7ca9e4d3b6b117fb1531713787807a25"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "4b3fb4e68336d2f0ee2754b31f1b72c4"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "54d25e212eeb0fb742318a9d40d393bf"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "03581182d5593dd3e878824225900378"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "b458281eeb8f847aedfa53bc413e6b6e"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "7f0e3304bb839b9fd3846b7341e7964c"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "fb3669a4f862827ae78b9d02e120fe29"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "f22a8217ea1a8f776baa2d3c446b6a45"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "32e204d25fd52c6d83a191e4da2431ea"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "2093fac85094139e466824d6f753bc75"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "e21830ef94c5d59d5c05988edd716c44"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "43a4a34ba641141ea81ac4c340eeb57f"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "d06e185a0248a94236a4e9aea4fe482a"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "bb990f4fd2bb36367d84dd177bb6cacb"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "9f4982580d2dead534c31676a1545cb8"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "a6612906577c09ae589cf2d3b811bf97"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "449321dc7764eefb5fd154e784403f19"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "0ad55e3788430269d206eabf259e41a3"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "1caa471884afa8a6b0e6cfbe8e92a18f"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "f63f01d8519358f485e3a0e2a1cb42c6"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "f247b479fdcf79dec8dd9e9c33296881"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "291c0c852e77dedf9881de97e3d0f620"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "9c7e0cd0641038c283e108b37bddc53f"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "8f22d86a798b85bf4ad5525bed58cba9"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "e674e8f43bec48f0f106a685786ea6ac"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "4ba1dc4183c304baf49603f489c29c71"
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
    "url": "assets/js/87.155a4871.js",
    "revision": "b0b82e34056a0bbf387bd1da88127576"
  },
  {
    "url": "assets/js/88.c1310565.js",
    "revision": "2c87dae36325d08fd9f0bd94efafd0eb"
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
    "url": "assets/js/app.759a7070.js",
    "revision": "efb04078c96e50f611f2e3416a80a61a"
  },
  {
    "url": "assets/js/vendors~notification.cc318a83.js",
    "revision": "df473d7e4ec5238ea5f4b5f61b4bec6b"
  },
  {
    "url": "i18n/index.html",
    "revision": "d5b68a1d14bbe39091844c526c436c9d"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "12298d607a1db7dc7a39af0a1dd85f4f"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "83b8b3b4754c81cd7ecf0ae6ca851279"
  },
  {
    "url": "tutorial/index.html",
    "revision": "2beab8ba145504e9e0caa9a57f7a59af"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "468daee41ed8f590f76c43733dcaaca0"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "2e2531a4ab3bdf38fcfa971068343bfb"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "891ad2ad115bec2818065a89db0600dd"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "332a707eea4cca96e6ac92489e607259"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "822f181001e45a42546e8ca78e562e8d"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "ab4a72e47b42d9eabefe6c2328d6afb1"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "74a0e9a0b904224b4c76a09b8a5b20f1"
  },
  {
    "url": "zh/api/index.html",
    "revision": "1a6316d28f9edd9a934f19276560c249"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "27efba0f141943f2588bf9266ba4744d"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "afcad650484695af600e289b3083b6b3"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "5ddc2a1974840a6132c361b7577ec470"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "53a4459d67992c7fc517173db339660e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "3312f7bf7421d890415d9b764312ff07"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "f3deff9fe420e5793e38321ef131953f"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "5eb91ae9b74487e2527381e1d353252f"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "523fff930f42f74a736ed79c65273913"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "5ffc4d6e84708a9ace7f1e45b7980372"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "b21437ea916789236b22cb8dfc38c98a"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "d020b2830816898b903a165b5f288162"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "9ec88a36ea27be14131422ae3acef802"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "a3c1efb6b2368cd19add24bbbcc59fef"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "bb2eae5ae4091cd2f8d8c05fa60ac095"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "072601fa6cf8e73d29695e6a593f2724"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "ce0fc313d4012c551f8e5bdac004d829"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "59dfdf2e038405de24b62451ed44a55c"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "3ba9b2045af8a34b85f74d914fc0489f"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "0d27728de9228739be38509911409b6f"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "f9cd33ac57c67b184b90aff15d3d1e6c"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "31b2fe3272cd003d863cd7716ee1bf67"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "113e8ddb34fbb40ba12b36557fa4f62c"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "67b50cb5c2ae2610ed944533a29ce74f"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "875cbe1b8ce93c9a74bdcd43c1c57e98"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "4dff78f7030bbf0c6c3fa9299b554295"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "dcfb688f2a270438ffe4aad91189ea10"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "4a17fe8b7469add3a0de4f16d4b393e2"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "f548070ea4deaa75a72e1766a833c27d"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "3478c527af26219608af84343a584a11"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "339fb49e4548c6b6468113af5a67e11d"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "a33b57237aa655a8a6243e3b8e6d49c0"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "93a61abbbf8d383b9f74cbcfb904fd1c"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "424f31f46a62de545c5efdb795928863"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "da5c22aad2bf16b8778390c1488c1ec3"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "2af055a5140e224eb935679b200c96f0"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "47a5586cc284ef9cc8672956b217855d"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "639d61372bd83eb6654dfa7f9d2b5168"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "24450979026587e2a49836adf3889294"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "bcebe1cbb62cb028221dad07137be12d"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "bf0d9bb8099c5c756fee8386a25fd3b9"
  },
  {
    "url": "zh/index.html",
    "revision": "ccbbe62ead34924b32d17c47a703cd87"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "4b97fad950f7e802a9c7cf1770b1ee65"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "ac71884b3e2a702d6d63f5dd803ad16b"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "dccc63523f3e620fe26536ef34fd5d88"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "0cc107f86847dbec27e644b8afe6820c"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "5789e9228ab667c901e701a4e0f7769f"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "e133f250229639cb3a7e04f36c8ab3a3"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "cd768befbaab2bcc3581a8fee630edf3"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "17972dd9bbbab04623bca1de37e9a1a1"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "f4edbeddb737afb93de7e25ad5eedfcb"
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
