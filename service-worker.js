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
    "revision": "0780b025f80dc33590644f166927fc7a"
  },
  {
    "url": "api/index.html",
    "revision": "29f27f90459f3d1f080c7d1f1e4b8fd3"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "e4494473e1173f02cfa8d39ff45208d0"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "f25308b55a70b7daf44f801e7b485367"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "246ffd1ed094bf7584aa4b235d730ebe"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "3ec46bd0e7389efd6f8abe7e197eb6d5"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "1676b4cd35eda7033251d1aba74e1028"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "ad9c0b7e46c821863fae5680b7476d11"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "1cde54b88301d99cfe846ab777edc343"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "29f0034d0790687a06cda714ee5a3adf"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "2e36a53ba2e68e8579b81330fe9ec3fc"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "ba2cfd01c77d69408ba07c8f481ff4a6"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "2180649afe9d397b487ff9ad14a40862"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "934926f9f639f839a0f15e3e8c876662"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "a7e0f92c53faae2b821792a76f11e7ae"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "6150a6f2d2650c8312eec81c4d649fef"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "8847b79616dc59dce24775975ed7affc"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "0e7ae5391b66b0a00af2a35229f729e1"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "b76e744559d1a524a9cf832f6a9b3185"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "a8309d7258bc96ae3f19c0176a0c1857"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "6df3e890ba27abd777cabc6eea7b0934"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "25c0fe789fe1451fc7207a50e60882df"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "1d37236ea1d512dd425b6193a3d400e3"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "0edc6f9661477ec8842814ff279d5e5f"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "4f5ceefe7088ba9ea19f73412488ccc3"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "f0882407dbc939ee211bec5e5dd9a175"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "d5b134228f2c66a912f0c2e69797ad44"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "48094ffc0f127fa97dc5feb726703c77"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "14c219c48e0403b8b779b49e8141e1b3"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "94aa1169b818e964b5bdb8147d809e7d"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "6a8a86e42393131271bc62859671f7a0"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "b9fe22b5b107c07e0bf2db961f3dea33"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "bcd26856fd09262e7033b7ead32b6305"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "c44fd01dda260888f1cd439dbcf05b87"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "3982228ce7cb4638a74392899e8e8e34"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "2f0169d8ed2241eee672949687ef2831"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "8373e850c91e1647ecfa4b4d471c25f8"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "fc7bef6ddeafa883157ece2b6613b576"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "1aaf6dd82fe93e94c786d1c3d292a8a6"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "36e218a256f1fb6d16eda917f7368e5e"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "a39eaba71f310e6081f591bbf6983f95"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "7542b8dc5de063e119d51405f46d9109"
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
    "url": "assets/js/app.262cdaf8.js",
    "revision": "178a6920f597dc8633dfe00bc494f1ce"
  },
  {
    "url": "assets/js/vendors~notification.cc318a83.js",
    "revision": "df473d7e4ec5238ea5f4b5f61b4bec6b"
  },
  {
    "url": "i18n/index.html",
    "revision": "0ab8cd2effdfd906751589b8bc3936cc"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "421fd1b5c3d60e52ce64bb198d0507fa"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "eb3feeda180864572db760735141e697"
  },
  {
    "url": "tutorial/index.html",
    "revision": "c71d7f73a722f7de20893482a622e87b"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "436651f36a1bf179d8a15913211914d2"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "494e818d06b7a99a3256eb0d8a646d54"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "a2b510ed40bb381802c817c0590c770e"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "22783a491d88fb24ec9eb531a694cc5e"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "f6fe9454c2975789c745413eebf5ecfe"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "0d87baee82edd0308fc3af6176b277ae"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "6bbee9eafb8f916c1081eed35ab3afdb"
  },
  {
    "url": "zh/api/index.html",
    "revision": "430605de68862496e4773a38d2d6c903"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "44013f9ff8527b51875d21d83951d811"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "841c87b7f543d49ca9696a46d4783115"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "f851d0ebe774bab2deb9998b175410ef"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "6179486ffe23961a09fb5acb332e0faa"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "7be703836e0d2706def33e59b001cce6"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "207eba8913105563145ab9490758336e"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "bfacae944842f21648d6898dc53362d3"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "73358cb7ce429874a9457c20df384493"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "c882ab75ec7a93f7fe474b1a6e1ffaae"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "89f5932f25efc220acf950764f2f214b"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "e2c972ad7e11762b059ae157830a14e8"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "d90e228432348a6d187c881916fa4fb5"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "fd52f4c46c9f3a05c3e906e9170ac234"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "ac2a3e5cd3d8aa69edcd7ae5c5b6ec36"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "474ee6fdcd6166e7d0a0a62d2447c2dc"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "ddbb20e369c25a217578e6188643f018"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "dab9a79b28b54f9730ed2effedef8731"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "e7c7629c3b8dec71cc22eed7da1d912b"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "5691274000c49cfbd6974d406662cf9c"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "118d8d5e7491a66c25e9061ddc987e4e"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "a41714742427b9f310261c69be305a61"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "e49f864adfbbfab037700dd5d039c4df"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "bd9038418dec06454e952da36775d6b5"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "a87846f7335c84954e4328ce6f6bb47e"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "ea8ecd1e197652605a9222b490c794ee"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "b915ccb812d62a63c0d676501e2bd779"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "8eeef8a1b791e5e775ceaba4e9eb1b24"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "b09fafcd30b5e34d4322a14245b325aa"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "730723497fdcb661dbca696cd437c3a6"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "e49aa5d260b96209674232a1ce5e974b"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "18ce7f7d54e1eb05f3fd81970013cb85"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "9c37757c0371ba030f2a637c89506b85"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "735516cf40232e43f5c9203c915e98d8"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "238ffd6ecd8fbc91a9b3ad9a87b0bd39"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "955457ad7a89d25101cefde6d5453b0d"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "f2790c85d3af84586f86a57d72114d30"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "f1c6d3d0fa57a15cef2177f53dcb51a6"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "9b4924259a43a56d9deda25b418b5f44"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "b770120a91b70bca6548440fdb1e5214"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "63cd37701936288c7ae189f565f12db4"
  },
  {
    "url": "zh/index.html",
    "revision": "d53a48a29749ff563b97bbf65df4f717"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "3bee06d71687ee495f10cb7cdbae6de3"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "3c8c95263ed8fcfec4a45e7957a42f13"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "a82312294c80433734a6e52b359c1d34"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "9a0f35edce7fdff2e1fac2d95a4a2afc"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "a211b327e391c73de0386fc6867c713a"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "8ca9066c6366033e102c999e0ed73160"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "e6f0e5b1c870fd76fd8448cc27f0c75e"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "9abed37d7300937a91ccacaf1d9b9359"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "86f3947e6a4d5897e99a0cfcba0cf0f6"
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
