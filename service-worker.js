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
    "revision": "495b4dbdc835e2878678ee96ff8c4e4e"
  },
  {
    "url": "api/index.html",
    "revision": "c1289e2f219c72f16e004ac681fb794f"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "5b62874cdd7f4219e8dae6c0ad0bfd50"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "e648b830d4065cfd8930b41205380921"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "d3e471feaa852af7f8bbd692279f00fa"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "60428cc05122d1a1eb5fa509ee72b2b6"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "4b6360601b9fd93791d9eaddcaac7491"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "2220f2d7fa58863b63a1e206cd4b8d70"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "6f2fb66021ae26f394b4ac8db4e2ff09"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "512a70358a7e8a167f95b4cee2b9a860"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "5ed316ce32958911dbe69f5b7413b88b"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "510854b8cba445ba7f505fbcf01d254b"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "2057fd6a3395b3098548e6a706f5ce29"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "e3823671cf8a9d08c38fceed591e8640"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "15674723b5d71d93f60272e363e826ec"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "24e2d259524ea960330b6b7c749e5bb9"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "a299f5a94a7f55b8a23f377aeaad256f"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "13e07d4fddeb8d6c4de152e4713d0df1"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "71b5f00acf65a084bfb2db244000c0c0"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "7457b99405c3724c93bb814b169ecf80"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "67938649c4ce53940fea48d4b2609996"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "1d3e3df69f8f8bf37a964f2e303daaf7"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "688bc723749acb5988f625065d38e733"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "2b0455432b44bef7136037bd1b19ec07"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "ce50219a1a985a7bf06bda60ed13e56a"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "2d7105f07f046bbd271036759d344eac"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "9ae8ea4d4e2b065eaeee1de333a49149"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "d268b3b9919a77c3fa406828ed761988"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "22bb21492360c9103aa0730569fbaba7"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "23ccb84bd8261f3b2b5c7bbf74c1c06d"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "6edd0df86ea847e6d4dac9ae0c0176d4"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "4caba3d9fea871f03607e6626f151aae"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "9f75a1aef7e3271dd5686a5d9188022c"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "9151b6825e28a3b2a77cea0104833c65"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "7b4d817848854dff84ebd3bc1f0377f7"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "09fb86056b17607611e260bb805827bd"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "4e19c6a735f6044c03e75bcac229517c"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "55654e7042921799fed7396e62dd13cf"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "8776d9a143f1eaed7d37c89fea4ad7cd"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "3af5a16044ff8a9ffe9af9078a51d309"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "be690d3fb8cfbd5275e810c2565f0f69"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "36382f3a471700482cf06122ce8cd138"
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
    "url": "assets/js/app.be4147ff.js",
    "revision": "44bf0203af504dcbb9ecdd76ac5d8fc1"
  },
  {
    "url": "assets/js/vendors~notification.cc318a83.js",
    "revision": "df473d7e4ec5238ea5f4b5f61b4bec6b"
  },
  {
    "url": "i18n/index.html",
    "revision": "f908aa3c123a4f1be627262831b295fd"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "2d23f3e1dfe050fdd799ee17b1b086fc"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "86e24b2f190eb277a052f887a02496e9"
  },
  {
    "url": "tutorial/index.html",
    "revision": "47f67f890e4b18f97751ce460c8a8e6f"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "bd89db8aae9f30230ec1cc5539323b2a"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "7f3c3c77d31977bb38417b74c886a0af"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "71d70b66726c5ea0aa7c120c639818e9"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "b789b08a245d5bbd3c058bc63637ff11"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "9f43a7bf0149e68118431d8366817693"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "3103be5a657cdd3e2d0391878b67ad07"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "8c7546da7f223ab4913a9bfa9a10c9f6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "33de304ce43250c1118a73040ad6d614"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "cb6e5643223bfd1bbe7ac6cfafba12cd"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "e8465db15a4ec779c557f2ab47af9941"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "20c3303e245fdf5a55869b8ac4ae2196"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "ef9d05cb24f37b163b1d8706b28b6f90"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "36d833655fb12884e4dfda0c1fef8f76"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "fda345907f69725647fe51fc1119217e"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "5bf42aed15fcd5a2db6599b678ed26a5"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "7a84f0f14f3dfabb8a8698af82be8a44"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "7d5b60e9d6873ad6e454dd1c00a1e334"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "2121562cbc346e210f2a8156ac36cb55"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "ccceb9c2fec710d85cef463471ce9851"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "6b7318e90515f8939a4e429fe5893eaf"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "634568fdbe49372caaf375d3b44838d0"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "49bf7900d9d18d4aa6b89b08ee716ac1"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "5330af135aa2360c81fb276414843259"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "ece6dbd8476471bf033936aa4ad4790d"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "383c3c8f3a270ca960559debefff46aa"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "be30bd3823aae1a07d9be2214f4e0299"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "495d38d121e00d7aab045f10b67a0e9c"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "fb2a92ea30102209e375ed69cd56ecdb"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "4dd1750e2a849859e2227e36ded996ba"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "4e7a92d0d8f0155e740c82f9458a3d9c"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "60c911650ff28b760557478ffdc35c42"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "527b12f0aa13854eb70a45fea1fbc07a"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "a74bd2ff09859995f6ee31ea5e2927da"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "152be2f27fb534f604086bb9524ad22b"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "ab1fd48726b9bf114d95905b1f05d095"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "532621d9a006594c59eddc7efc1ae27d"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "acf897a92300c88a21d0460cde066286"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "6e92b1194a61b1bffb6f7a815cdcb8b0"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "970a8387898e9123dffffcd74c8de30f"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "0917b8e418942838e5669800c22e4f83"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "b10e17ce6993813a9da8eb633eb272d7"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "185db799f3fbf17527144f0cd5e3204b"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "ef834529159f1038a80c6a25ae7caf49"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "fe9d231feaa59bbf93fec019a3c377f1"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "8c230dbf4a4e9a2ae54ee20029c83cd8"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "e3c145e82259becd9a3201bd09bce695"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "20ff04ef8913e65c94a575e02e3b724e"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "a36c1f0c31404b95d9e1332c1cbb24cc"
  },
  {
    "url": "zh/index.html",
    "revision": "901fcecebac37d9f7f86ab1f60fd1d6a"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "4758174b989930b50aabe4d312cbadf7"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "028bfa07637ac9c9a04163ab1696028d"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "5ef3175ca874315a424de0e4a4c206c1"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "295737f57820bf13fdb2dceb5528620f"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "78d0f5c4f46a8ffc227262bf0a9e1f2a"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "68da6ac334ea4e524f35fc5172cf5cef"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "8fa542b00bb11995eef2d9a697fd8928"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "44653014064b3514e28b425aae9ec88c"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "889d5c32aa9ccaaafdddfc4c761bb50d"
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
