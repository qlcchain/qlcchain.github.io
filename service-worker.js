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
    "revision": "756340ee2ea70b9703043db4d0f00e1c"
  },
  {
    "url": "api/index.html",
    "revision": "5add22808ce655caaa03400476d04de1"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "a828d69c477bbd661152fedf5c5507c9"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "1db65256441fffc744d848d078a4d589"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "a444e06913e31fca74cf1564c4ce00cc"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "b13b99c8235412b37c979cbdec4fe308"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "535217345022ff577a681d5cf02eaa9b"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "eee75c09429e2d78b45646a6fd8c05c3"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "7dbcfa7ecf61bb7adf0097c58f3fba80"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "7a0f9ea779e7f23f6c97626791cbb0ee"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "c4e3045e73c0b85f98b0ee385caff7f4"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "02f386053a89b726fa2ea8348dc46fde"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "59eb0a88644c7da2e7a24ddd95edd455"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "1e9b3503e7a8747646ae844d0a2a40b2"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "b4d062984d5438305cfcd5755aeda25f"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "760d53168fc7b99784871aefc41973ce"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "7569119a4511d33ecfa02fdc166daad3"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "92b1917639b466314bd11009bb574489"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "1d094a4e97c619fa47d089a7862b0be2"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "d56c500742e6c4d7fe40ed295e731121"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "66b8c4ea3726d664dac0e388fe2e3c89"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "558ef02c37ed7fdb14017707e48855ff"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "82a26cc301d474edf86bdc044f1f10c9"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "f16a79787f66a2a5ff87fd220841f7ac"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "e65bb6c3125defb7b581a1b221549be0"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "1a21bbe703328405051728549ca7c469"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "fe558faada703242422651cb0919c408"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "b7ec69f35c0d5d0511ceaf0edaeb6914"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "acaaa72fd492f9ca3302dc151e3b684d"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "b23dbb4147e69ddb935d0994ce8935a0"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "b8d71bbd2fd80b8fb15d261e31c2529f"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "babc05d6c993dc9d298af75b17a8bc05"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "8162a859b63b460b48bb4336e5292109"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "5c9512410f0414454bb33a71608b129e"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "3c395967c80dd0bb64e423ce9d7f5884"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "af8a86a40d8b0a9a1c5c8005dfa8f740"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "7344b62080224a97dbc8a4ffee645d0e"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "806d3ee5d8f7a1c1a39250c648308bef"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "35b4cad425f0b300582eb2655867d1ff"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "2ba39bd6001b6c6272c00bf387098420"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "7dfa1c5ac37152c62b2244079c1f3536"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "e1aa48e3da4eed8f73c7674c3a2c1698"
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
    "url": "assets/js/app.f518222c.js",
    "revision": "bd93fde592ebd39375932d624680db91"
  },
  {
    "url": "assets/js/vendors~notification.cc318a83.js",
    "revision": "df473d7e4ec5238ea5f4b5f61b4bec6b"
  },
  {
    "url": "i18n/index.html",
    "revision": "766d3f0f02358545a9cf82dc1d96f8ec"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "54df8bc99d12c385d8e32d37a74df935"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "a09526ebfeaeae0739e16ce2dd5eda2e"
  },
  {
    "url": "tutorial/index.html",
    "revision": "851df425bbd582a2040256d0fbd1b0ff"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "254625acc10754a72d2db072125ff3b9"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "caa0a30e08a45387a36d3b2092011cb7"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "d4602b64034f940d0367c21f608b71d4"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "9ba63b967406cf93976d76c5cc7471d1"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "f5dec44333a5d2e988242eb97705b8de"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "ac8f077c7f4d8d71d316e5d0d3176681"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "fe4cc01ffc39d127cf593d8aca230ef6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "dd320c3ee2bf29ec926163565d2f3ebf"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "4737463b1040996d3ad9de5409fb7324"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "974c045d67678f51a0f214f70cf91ada"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "211c86bb94f2cc6ac65998c7d92a47ce"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "63045c256e34082c040f644928bad157"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "b14482f58c4a7896738b4c7778d24833"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "72f8026b1307f8df508e8c9b404bfa6d"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "e38da34a41b6338c28bc747d658a8eb4"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "288a7f3d92c60f95372cbab1000802b5"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "c55a28be635946622e45d668c6a80eb4"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "3cc686c854f3c892aae4a7774be8162e"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "0ac9045a5e2f5891c698a215802820fd"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "62b0169738b4080e153b402e7c298db6"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "458103e2ec258b6f7409667de93c8fae"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "e1ecfc4324dce9a22395c9d8d285124e"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "26960cd68af3825f0890cf8878b66c08"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "5e4c064f46892b8f329b24faa3333103"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "d96a084580559b7388d061f3ca27bde5"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "78d1d599402bcad04d26c340f509b93c"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "fd36f74645ebb8a347577387283e5b88"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "e9ba48b0ed437e39ff41aeef60414d9b"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "5146c85802c0c6c927eaa09b9ebbe76f"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "93e0ef0d5cb2365fbb3e031b89571459"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "9232f398b5e6b10a1e7e2065dda3b80b"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "19c36dd14c3d8bb346f181b231f8ff11"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "3b771106bcc67b6f926790895653e5fb"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "12079a9b8a862b5fffbff53448b3f0a8"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "bd1ebbafd00c1190da1c6a59dfe70dcc"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "4e13af8229a6ece2256c4ad0d4301a6d"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "3a9d3bcf341e26f0a153d3b0dff93657"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "a6e3cdc4caf595ea847151f27b6a0d1b"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "384e00a0df50dc7fea57a0de7ab80bf9"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "2ea2ccca0d7cd93b230b802c4ea652d9"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "f4efe75e0b5c230589beabe0ffbadc23"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "b45bc437ff6034ce6018c9dd273fa92d"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "ee7d787f96d8d5a3ec250274eebf12c5"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "4144cde1c2090e8aaac4ea3aeba010a0"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "884d35a3c656ccaaa38271dbb2484f5e"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "d1eb228b2ba51b556ff7507b5d527e2b"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "8e9b9281b089f26a848ae8253f008c6b"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "d473f6ae70e18dd38fbdd39aea346847"
  },
  {
    "url": "zh/index.html",
    "revision": "e49908a15638747e3112533ceba98071"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "fb71251a0061ba592dc4021ac4eed0c9"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "cd88f7924c982f6be6cdfa465f1a5949"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "dd6a2440409594f2d2c555ff995e4ad5"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "eacfa60f741e0bf892cdd988378cca2a"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "fab6cf47da37cc9a1ea57da5a5dc086f"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "d2f153d2d9f554ce3333a1fb2bf953dd"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "5a83999f2830c18e509e05fdcdde13f8"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "5342c05a92462232e3f305714bf36182"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "9bf2349f92725a77ec2d27ea3d00583a"
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
