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
    "revision": "0e919ade70aaa5977da12e5118d47f1c"
  },
  {
    "url": "api/index.html",
    "revision": "ca89fda82d97439d5c417e759ec7cc48"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "a55db3d6f894a048bcf7825c1e63e0f2"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "7d836670007b6ecab4afbb759db6fc0e"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "3cba68dd05a0a075df6581c9d8b18a55"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "ec61c60f91f991a6687b103ad4308b1e"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "3f78a918879e5b3df2d325ca701587f9"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "b4d266af92872ae156d263ae6fd275ae"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "6adb6a2bd38a588d9b81df087e274864"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "b6092374e0bfb16ddb559f98ae9b6be2"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "41e33a98fed0f21c083540c03cd68607"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "1d5d4367b42b935744542df495a90cb1"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "9af460fe368b22d0f705703e123a6e7a"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "cfe726eea6e3a39d37f4e0908f5ab089"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "9f21b2d6ec0e93b448a40841571ceb02"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "b962d77eef381dbc8b6f112c8c9016f3"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "1d468c4656ed2ec64ee8e2784e926ad5"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "561ed38b2ee74122602e10e4de16a67a"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "2500b9e4f576677c393ef968670adc36"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "875728bc57243ebb5e5e7547e535fb01"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "1b4480e78f36ab8644239d4df3e18de4"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "bc28a707c5bb0831433312df247eef45"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "16911359ba3b4f910283292fd6eb007d"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "1d4db70acd57ad35d0f6efa92be7d5a6"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "265b824034101eccf47c9d95bb46aa7b"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "6d79a06c4851eb117f50dfd37da5e333"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "fadf696a508515e30aa94de5525aff53"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "f4fd0fa63c26623a45980b8aba565cb6"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "fe81fc84983879dca13df9b143bfa483"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "62fd37298516d0a475fddfaceb263bfe"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "8e95299f43c43da90b869b88f868fba6"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "5a416d09b8d4c992ecc9cb1a690b2613"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "71d438764f1febcac3a0ba2db4345de3"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "8a4c9cd0b9aea7c6bec079e01c4d8313"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "b902e05b5ef25a8497e49badc544676f"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "34c684a0cf6a017f3727e0f8169ce67a"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "b2fd972d15874febf211fa387c44b15d"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "e9ba400519aaf5d3c450c313c2e28fab"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "1a120c7d4f30d18b750df1c0e1229026"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "a0886cdb9f0dabe7866ba805ed759bef"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "0c487bc210bf1f9415ea5cee84ebdcce"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "eae808988c2bb2495eff321d4ced977e"
  },
  {
    "url": "assets/css/0.styles.50948b8b.css",
    "revision": "b112e86c612e578f011118d3b355e7ab"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7cc6dcc4.js",
    "revision": "1b8b37516ecb74d1a9e5b61a2e82a854"
  },
  {
    "url": "assets/js/100.8699dc5d.js",
    "revision": "1862d7287757431f4ca2e508b7d3adc3"
  },
  {
    "url": "assets/js/101.be1f96da.js",
    "revision": "1817b70089c70704389db382a47e268f"
  },
  {
    "url": "assets/js/102.24713f09.js",
    "revision": "68d845f17187629b84c7d11ff2b9464c"
  },
  {
    "url": "assets/js/103.817340e6.js",
    "revision": "3ad152c4880a165bb59194e4fadd12ee"
  },
  {
    "url": "assets/js/104.cd2918e1.js",
    "revision": "f255ed3f1704a1d4201940bf3544b25a"
  },
  {
    "url": "assets/js/105.30c0025a.js",
    "revision": "4df5d9ae8131a3449a2ba26d6224237f"
  },
  {
    "url": "assets/js/106.e62a5101.js",
    "revision": "98e6c59d1554a0546bef532054006b28"
  },
  {
    "url": "assets/js/107.b281b2ab.js",
    "revision": "a2a0f600e176de866b1e40d726176c2c"
  },
  {
    "url": "assets/js/108.c55836e8.js",
    "revision": "68807e9700859edf8bfe6f6d264615e7"
  },
  {
    "url": "assets/js/109.240e1b17.js",
    "revision": "09cd0d1048bf4c671a1aaa82c0e02757"
  },
  {
    "url": "assets/js/11.f44a9f7a.js",
    "revision": "6a00ca8471a9634c3d4fbfdcbc684446"
  },
  {
    "url": "assets/js/12.13b74f0a.js",
    "revision": "3dcc5bd9c813b78aabfa69bf7a9f7435"
  },
  {
    "url": "assets/js/13.315ba4ca.js",
    "revision": "b25fa0c3adda7338c3a992f329203924"
  },
  {
    "url": "assets/js/14.5f0ba8e7.js",
    "revision": "dd0d494a9b2edf805c5a7f340811fe91"
  },
  {
    "url": "assets/js/15.5eff1a1e.js",
    "revision": "35a97082a9552bcc8e7dc69b2ffe9982"
  },
  {
    "url": "assets/js/16.e70eea32.js",
    "revision": "ba4b66100cdb943114381d1420ca9e98"
  },
  {
    "url": "assets/js/17.32d40dcc.js",
    "revision": "f5c152407d6f0b57dcf1fe9146672163"
  },
  {
    "url": "assets/js/18.e7d90507.js",
    "revision": "7f353aa9513d101319c3bbae37d0fa7f"
  },
  {
    "url": "assets/js/19.1cb5bb80.js",
    "revision": "48968b9124c859528df4d34b0ead3fc8"
  },
  {
    "url": "assets/js/20.6c651dee.js",
    "revision": "6f070102090b653d6b0bf4bb0738f5f6"
  },
  {
    "url": "assets/js/21.9a7f4f11.js",
    "revision": "9679d403a217493f054116e9d091c28f"
  },
  {
    "url": "assets/js/22.a198cd08.js",
    "revision": "2b133279608508ccb71fb113f2d1af54"
  },
  {
    "url": "assets/js/23.736d4d6a.js",
    "revision": "520fd545746a76dc0211f46bde96846c"
  },
  {
    "url": "assets/js/24.d60726ae.js",
    "revision": "72673e9b4ba50e56550348d5c5b996f3"
  },
  {
    "url": "assets/js/25.9c0b720f.js",
    "revision": "b8134b2774704c9d2867b2efb3a8ef85"
  },
  {
    "url": "assets/js/26.65471b35.js",
    "revision": "b3a66eec6c4e231caecdbb20f34ba162"
  },
  {
    "url": "assets/js/27.65abfc81.js",
    "revision": "d8d69e1a1f420932b8dff64a8989d4fe"
  },
  {
    "url": "assets/js/28.c14cc6bf.js",
    "revision": "5cfec391e273ff3c126075b79fb60c9f"
  },
  {
    "url": "assets/js/29.e12f901d.js",
    "revision": "a7cb892725e17d2e66d6266b77fe87dc"
  },
  {
    "url": "assets/js/3.6a57ea50.js",
    "revision": "e2b46dc981f122d57a46efda8d5b0b05"
  },
  {
    "url": "assets/js/30.b2d2c3cc.js",
    "revision": "c2194a0c15608c1aad067db3c0ddbc4f"
  },
  {
    "url": "assets/js/31.84ebc302.js",
    "revision": "99a80e345aeb93e1a3d263d198b49ec8"
  },
  {
    "url": "assets/js/32.411ca463.js",
    "revision": "2dce5b55357a19db894087ad88144979"
  },
  {
    "url": "assets/js/33.83c80cc4.js",
    "revision": "a8d16818b454ba343120faee16b0e75b"
  },
  {
    "url": "assets/js/34.660e8062.js",
    "revision": "09e4cac6e3c5cfc4de35d5d08bc6dc9b"
  },
  {
    "url": "assets/js/35.bf6ce445.js",
    "revision": "9483ac06ddfe7bad27788e4f7c21372e"
  },
  {
    "url": "assets/js/36.df6a0782.js",
    "revision": "df0fa82bbb3ff4266455c86ec34e4f95"
  },
  {
    "url": "assets/js/37.3a2efe79.js",
    "revision": "af22167637a4ec1d4924d5ae4833dff6"
  },
  {
    "url": "assets/js/38.68f68100.js",
    "revision": "edd9b6477f495afd5ff2193cab01823f"
  },
  {
    "url": "assets/js/39.5a219fe9.js",
    "revision": "60410e47856ac6c3e5589dedd147d414"
  },
  {
    "url": "assets/js/4.5587365a.js",
    "revision": "3530adce716259d97c0055c1735c1c3a"
  },
  {
    "url": "assets/js/40.74bbfa4e.js",
    "revision": "7243787791bd7eda1fd7e8a88b0d270a"
  },
  {
    "url": "assets/js/41.6391c36e.js",
    "revision": "7842b7386fe9bfa3915a88dd5a743834"
  },
  {
    "url": "assets/js/42.80134147.js",
    "revision": "31d127b06ad124a587eb4ded27d7f3ac"
  },
  {
    "url": "assets/js/43.af0a5889.js",
    "revision": "ad8a8ce96fdaf63cb64981f1cef9fa6f"
  },
  {
    "url": "assets/js/44.f2a1f759.js",
    "revision": "10e6b069a38b75da5af20d29df7f8489"
  },
  {
    "url": "assets/js/45.bef17b0c.js",
    "revision": "7a5e68fd34b34516641345dbdcd55f24"
  },
  {
    "url": "assets/js/46.7cdb1183.js",
    "revision": "7a6a8102448bd7a1e6cfee07247387f4"
  },
  {
    "url": "assets/js/47.250852bb.js",
    "revision": "0010f0a0119a907bf1440768d0e4c188"
  },
  {
    "url": "assets/js/48.1625d6bf.js",
    "revision": "6bba9baafb5c73e0809612b6e8cec6ee"
  },
  {
    "url": "assets/js/49.500382fa.js",
    "revision": "c917f155c9d6a769caadcafc238ef04a"
  },
  {
    "url": "assets/js/5.20f79aab.js",
    "revision": "5eb815cd68f95d2e2d5c758e15aa7aa2"
  },
  {
    "url": "assets/js/50.f454285e.js",
    "revision": "78f5e9f1fa5a935ad27689d3722eb374"
  },
  {
    "url": "assets/js/51.2c714fc2.js",
    "revision": "1f67b0ba5b6b4879296636ce0ddb36bf"
  },
  {
    "url": "assets/js/52.3b5bf121.js",
    "revision": "9203c39e67c6c51eb2c8093377a27d06"
  },
  {
    "url": "assets/js/53.ea361db9.js",
    "revision": "e0582d6be41387fbf381683cb975d813"
  },
  {
    "url": "assets/js/54.a9f2caa7.js",
    "revision": "d87c82199bde7a95649681d944b24203"
  },
  {
    "url": "assets/js/55.53d3387d.js",
    "revision": "bde976487ab1f32e7da22d98028d819e"
  },
  {
    "url": "assets/js/56.59e9ebc2.js",
    "revision": "498dedbbdffb226286a32ed402101437"
  },
  {
    "url": "assets/js/57.dbaf018d.js",
    "revision": "d10fdc1dd6f3a5f22df78bc4898b3032"
  },
  {
    "url": "assets/js/58.3f08156e.js",
    "revision": "5122c30cc9986f8fb93e6ec280a0da26"
  },
  {
    "url": "assets/js/59.09ea677b.js",
    "revision": "396866c1a25953fa05e470fac7f429f5"
  },
  {
    "url": "assets/js/6.f3a68e05.js",
    "revision": "47ad7cd1bbcb012576a7fd7b10cba494"
  },
  {
    "url": "assets/js/60.eebd81e4.js",
    "revision": "dbb5cceea08989d8d4163134fd9ac04b"
  },
  {
    "url": "assets/js/61.a7dd00d7.js",
    "revision": "5de42d86a994e0a9ae32bd8d70846133"
  },
  {
    "url": "assets/js/62.7a49bb25.js",
    "revision": "1bc63d59468aa5511d1b4fe086283cf8"
  },
  {
    "url": "assets/js/63.7501a632.js",
    "revision": "e1abf297523bbfb6881679f2324a7c70"
  },
  {
    "url": "assets/js/64.03649046.js",
    "revision": "c1b2fe9100835bb12a1203d2a64292ad"
  },
  {
    "url": "assets/js/65.5e8baa92.js",
    "revision": "4f8f27923fa7bf90fb6b7fb4dd9403e0"
  },
  {
    "url": "assets/js/66.2226740c.js",
    "revision": "e439c54e996ec443a30ad8543a0adbb1"
  },
  {
    "url": "assets/js/67.2da6b2f5.js",
    "revision": "9d0a300228920893681b01d08f7c5ba0"
  },
  {
    "url": "assets/js/68.8c7616ad.js",
    "revision": "dbbb5c9067dbb05c9163cb46fc146016"
  },
  {
    "url": "assets/js/69.826ba453.js",
    "revision": "87c2f85b5697045f4a06a72ef001a3a5"
  },
  {
    "url": "assets/js/7.e7ab2055.js",
    "revision": "55532c52eccba6f914417d0846d562b6"
  },
  {
    "url": "assets/js/70.c402c20e.js",
    "revision": "19949ca1e635a892470810e82cf511ed"
  },
  {
    "url": "assets/js/71.16e16a4b.js",
    "revision": "592db2bc29fc4989465b06cb10f420a0"
  },
  {
    "url": "assets/js/72.5e5debc2.js",
    "revision": "37bd58a6f5dfcee1f55e7c60799fc1f0"
  },
  {
    "url": "assets/js/73.1163a8bd.js",
    "revision": "38f88fc5ed8fa34861a0565f94cfef28"
  },
  {
    "url": "assets/js/74.4753240a.js",
    "revision": "4b925b3e7acebaeec2574d6e4e2522a8"
  },
  {
    "url": "assets/js/75.b7bf30ce.js",
    "revision": "aeb199369c8adc01fb8e483609123350"
  },
  {
    "url": "assets/js/76.c11dbbdc.js",
    "revision": "6ab2decb555c758601b01f743947d8bf"
  },
  {
    "url": "assets/js/77.d406f463.js",
    "revision": "b17a6b63244a424aa7833cce4669777c"
  },
  {
    "url": "assets/js/78.738d1f7f.js",
    "revision": "ec5094dc637e9f2b59147891c575965b"
  },
  {
    "url": "assets/js/79.86de26fe.js",
    "revision": "57a46904c5b1bc2071e201e6d3cc6e1a"
  },
  {
    "url": "assets/js/8.6a66e19c.js",
    "revision": "35b459a91d81afdf1955273f1f41a0e5"
  },
  {
    "url": "assets/js/80.e0eb56fa.js",
    "revision": "34174322d1079b1218c83fd4a080cc4f"
  },
  {
    "url": "assets/js/81.843a8265.js",
    "revision": "79bd8f0f982e31b3f234190b5d046fdf"
  },
  {
    "url": "assets/js/82.957bfb9e.js",
    "revision": "ae998e51e06652efaadc2e2d0faa42dd"
  },
  {
    "url": "assets/js/83.7f810694.js",
    "revision": "a92718dd4b1d500c9f69244e1dc1c0bd"
  },
  {
    "url": "assets/js/84.f485d729.js",
    "revision": "25b0bd990a1b6afb1e33d8725939652c"
  },
  {
    "url": "assets/js/85.b143e689.js",
    "revision": "f71868cd34351ca8b88db4dd17d6fce2"
  },
  {
    "url": "assets/js/86.b1cf8539.js",
    "revision": "7bd93dcdb8459601ef4218b7e555f397"
  },
  {
    "url": "assets/js/87.9306953b.js",
    "revision": "f2c7487105a255d496f73c49d3ef3869"
  },
  {
    "url": "assets/js/88.7d4fa7b7.js",
    "revision": "05c5cc1ef11dce7846cecfb5e8a777ac"
  },
  {
    "url": "assets/js/89.0a65f6b6.js",
    "revision": "598bfaf1fab8109f7dd559f48c92bd8f"
  },
  {
    "url": "assets/js/9.69730f54.js",
    "revision": "6d4cb29edacff0b51fbfb85412719521"
  },
  {
    "url": "assets/js/90.f0e4b84e.js",
    "revision": "fbf5689aba195c7e04d609675611d568"
  },
  {
    "url": "assets/js/91.ceec8f63.js",
    "revision": "a9750042c5056a400bab523ae95b72fd"
  },
  {
    "url": "assets/js/92.4378104d.js",
    "revision": "af240695489a121380406efa3f839c93"
  },
  {
    "url": "assets/js/93.9d9f9a14.js",
    "revision": "b8e119165865beed352329996a21c5cc"
  },
  {
    "url": "assets/js/94.e10799d6.js",
    "revision": "1fd773fcbd0c887c820d719b9035b1ff"
  },
  {
    "url": "assets/js/95.b97dfdd0.js",
    "revision": "2218ced9862af83b00415dc3f8ae4f66"
  },
  {
    "url": "assets/js/96.20a8e88d.js",
    "revision": "6a56fe914bb487bf037ec46566555d0d"
  },
  {
    "url": "assets/js/97.3a1b6bd3.js",
    "revision": "e050f13a8410bb842d38206460c929ba"
  },
  {
    "url": "assets/js/98.065dacf7.js",
    "revision": "333435a23c5ab8ec7427d362ad9b6a89"
  },
  {
    "url": "assets/js/99.18fd9cc1.js",
    "revision": "25fa81afeef5b527f0cca27b7507a848"
  },
  {
    "url": "assets/js/app.07dffd90.js",
    "revision": "ec671d8dc502c928aca55b3a47050e89"
  },
  {
    "url": "assets/js/vendors~notification.cc318a83.js",
    "revision": "df473d7e4ec5238ea5f4b5f61b4bec6b"
  },
  {
    "url": "i18n/index.html",
    "revision": "75433c6778d17f735778b88243c71861"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "3abdac78a1daa315295173ef8f45e372"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "8ec0b14e2a6d54e6063582d1fcfff1f8"
  },
  {
    "url": "tutorial/index.html",
    "revision": "8249d84144baa1654d6c31f13fae0322"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "874e753d3ac6938783727e95a3d33daf"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "600af93d2e87edea1c517634640a95fd"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "080644a252040f4711b9e7c840e3619e"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "eeef900aba567ca97c20bf09954238be"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "228d8bf18730664fdcbf23ed4198e789"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "82031150ee7d2f473375ae017470232b"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "80ed293c58ebe956c68232ad9c2fbba3"
  },
  {
    "url": "zh/api/index.html",
    "revision": "8bf250e7868171c8d8c08664f300d281"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "5532f5b3011beeebcc6440f9ac9c4221"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "6c102a965fa89105a6f2a452345c3cc4"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "8ed1ae01ba2f1232f17a62b1925285c7"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "52099dd9edae785bb816046ddc41eba5"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "86d945ab2de2820dcd7ae734eb662cfb"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "7f5f5a2979dcab3f8847ce93625b8784"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "a4f7878508e1958a2404118d00c3ab68"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "8c6b699574d2d8f0828880cc355db153"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "6c7b7ed7f190dbac0f763754b8cbebb9"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "a2744d81c392fd0c82f06a117661cd3e"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "fcb1d1b19ca8e7ae24e07abba10e95a4"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "a51130a2b4548f7d077edbb7dbcd4fce"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "b26da1807a68889d08302255e23e5cac"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "820db15d356bf86feed04bff4d5c187e"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "b1e964d4cd2028e460e287cff55aa3d0"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "1282354ed709b0cc9f71929b7d6843f9"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "26f97c6547b4c823f7d7029824d8d499"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "75a2582fee6bf03c129975c31ea3ff7c"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "47cff2d1178a68ead921db21addc405c"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "a9a197bea7ab7e98b3b2077244da46cf"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "93a8850064981bec2efb5e35f91a254b"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "af604d5d6ec1b8e9baed08f585b06473"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "3799388b3cab6c43a12488b6ca528dfe"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "f08a20969d623f68ca8e29a249aca280"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "5432bd6dc7583ed17a1c273d95387c98"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "2f1ffdd2ecfe95d2531a89c4b0b027a7"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "37521296f9aefa86eb6e8bc844840f6e"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "42dc17bd3b898b3fcffa9ec5ba167e54"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "5d60f8d89b3b2396c472c12482dee50b"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "53bb09c112622d3e3d687e194540be85"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "4c83d50a3bacf1fcdc435708aaf77b59"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "5604738949f149485b0de5038e7955f4"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "6dc4b11638fa8bbec65b8bd2d780d0c2"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "a6f7c154d8af3bd56dc3a9481cd52210"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "673d06662135e2f78089b1caa982366b"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "64262b82cbc96903f8e5392ceae3eaf1"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "e61a19c0f78474eb23b7e0f2d223216a"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "d5b6883feaa5ceaf06831711be4b7edc"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "f02519a485046e36b73851b70d007be9"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "1f61273779b831906b7b12061b058cb3"
  },
  {
    "url": "zh/index.html",
    "revision": "e0433ec24f907f8461e91d0254c212c9"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "4c8a5507f988ddf02016366cd543e3a1"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "59b008ac5b34d68025788dfa868eb936"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "ae98a432dbb3ae77ff3dca92e0d3680d"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "9df1d86beef03231c1f6a2803319a3d2"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "9f6f2d0b1ccaa805d04736f433b3b737"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "97f7fb8277a9d5c3d43e6d43a8a1eeca"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "0821697406175f46d51004ee597a7990"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "242c71d56fc0df8bbeb30fd94f19c778"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "1ae89cc2cc74484ca365ff51965cdb28"
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
