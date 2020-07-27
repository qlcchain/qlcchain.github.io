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
    "revision": "b7f43432e9f681f6103a7077b8e3bcf1"
  },
  {
    "url": "api/index.html",
    "revision": "522a84014502ca38da96b8c343b42194"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "8a64d16245cbf6614f26e2bf5b31556e"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "eef0f24b81b74456be96d93ffcda7a34"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "3877853c2a18dc4a4cc2bacddcd83234"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "1fba335b619d7867bfb54a0da0b32f99"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "8ef27e18298ba261c8cc0ed151847f58"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "5b84baf82e41e774e04e7757b8bc28bc"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "caa195f9f8204a7431900d1da764373f"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "539aec7063d78de83e121e81045453e9"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "37d005992c9b6b2072f1d6f6268824a1"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "e4f2a8494773a319f831a25b716dc150"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "7d71025e68d4b6375fff55c8f13c4077"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "68bbbe8714ed30de7e1c3e479a087354"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "9c701e09267cfa7bf4035083fc858154"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "09f1d444ea937ff435ee8603a0749b57"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "207fc26100f8fe09cace5c7de83feeaf"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "0b4a9e776cb93944a28b1b2bddb94b47"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "4b5c3e27c8a7af212371340828ac0d9f"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "6294c4ead2b62e57f446ed3f2b300ec4"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "929f8bd8873e269e7667f7fb45f56ab0"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "7866363fcd1bbb74414c517870b71f44"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "522b8233e0b1fae22cf4f3560c3c32d1"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "4d1abedbd719b4a5bb4bd327f11972d2"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "a95dc95524edce1e3737c3b354df2264"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "b4b33921edc161ba9445e2565f11cc98"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "e21f73d76732f451bbda2e6807eccf7c"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "7328f32c118bba2b627404aee7cc7d5f"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "512492c6e8610caa9d3c9f79660b0ba8"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "505afa76a3c77cd2585890688243cecd"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "3aad0ade1a30c3aaf9740d771717f263"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "4a4f233af9f3e25087cffa75ee9498a6"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "5971b4803000eca0dd1a66c620d25609"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "bcb6972352022e83c553f073e89fce28"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "d61d37b48edc29b76c6dcbec8767c50c"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "2142067c37be70897a9fa140f7089064"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "6ae32348c063e7e4357f96a071780932"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "c3f868878c11061c118fcb790f25626a"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "de9c8b4e4a0c7c8027c3aa19644a1169"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "4022f10ef5d8fe3b9cefe7a17e9df4bb"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "49074bfa0e6bbd203bf1eb40ae9429d5"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "f1c9e1c35d4d5365391ae33906651a83"
  },
  {
    "url": "assets/css/0.styles.21e4c367.css",
    "revision": "7988df28d002b1fa585327eff979988d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.786634a1.js",
    "revision": "1b8b37516ecb74d1a9e5b61a2e82a854"
  },
  {
    "url": "assets/js/100.6eb17da8.js",
    "revision": "1862d7287757431f4ca2e508b7d3adc3"
  },
  {
    "url": "assets/js/101.008b4cce.js",
    "revision": "1817b70089c70704389db382a47e268f"
  },
  {
    "url": "assets/js/102.8b18cf5c.js",
    "revision": "68d845f17187629b84c7d11ff2b9464c"
  },
  {
    "url": "assets/js/103.4cce8cc2.js",
    "revision": "3ad152c4880a165bb59194e4fadd12ee"
  },
  {
    "url": "assets/js/104.4eee0675.js",
    "revision": "f255ed3f1704a1d4201940bf3544b25a"
  },
  {
    "url": "assets/js/105.0bb5b296.js",
    "revision": "4df5d9ae8131a3449a2ba26d6224237f"
  },
  {
    "url": "assets/js/106.47fb47a3.js",
    "revision": "98e6c59d1554a0546bef532054006b28"
  },
  {
    "url": "assets/js/107.564483f8.js",
    "revision": "a2a0f600e176de866b1e40d726176c2c"
  },
  {
    "url": "assets/js/108.d603627a.js",
    "revision": "68807e9700859edf8bfe6f6d264615e7"
  },
  {
    "url": "assets/js/109.240e1b17.js",
    "revision": "09cd0d1048bf4c671a1aaa82c0e02757"
  },
  {
    "url": "assets/js/11.d0e3fba8.js",
    "revision": "6a00ca8471a9634c3d4fbfdcbc684446"
  },
  {
    "url": "assets/js/12.962c17d4.js",
    "revision": "3dcc5bd9c813b78aabfa69bf7a9f7435"
  },
  {
    "url": "assets/js/13.da0ad318.js",
    "revision": "b25fa0c3adda7338c3a992f329203924"
  },
  {
    "url": "assets/js/14.9388f983.js",
    "revision": "dd0d494a9b2edf805c5a7f340811fe91"
  },
  {
    "url": "assets/js/15.24a06563.js",
    "revision": "35a97082a9552bcc8e7dc69b2ffe9982"
  },
  {
    "url": "assets/js/16.042d1f69.js",
    "revision": "ba4b66100cdb943114381d1420ca9e98"
  },
  {
    "url": "assets/js/17.c6118628.js",
    "revision": "f5c152407d6f0b57dcf1fe9146672163"
  },
  {
    "url": "assets/js/18.9db6eba9.js",
    "revision": "7f353aa9513d101319c3bbae37d0fa7f"
  },
  {
    "url": "assets/js/19.b2f6c02a.js",
    "revision": "48968b9124c859528df4d34b0ead3fc8"
  },
  {
    "url": "assets/js/20.897e4570.js",
    "revision": "6f070102090b653d6b0bf4bb0738f5f6"
  },
  {
    "url": "assets/js/21.70424325.js",
    "revision": "9679d403a217493f054116e9d091c28f"
  },
  {
    "url": "assets/js/22.b1b1906c.js",
    "revision": "2b133279608508ccb71fb113f2d1af54"
  },
  {
    "url": "assets/js/23.2c90b335.js",
    "revision": "520fd545746a76dc0211f46bde96846c"
  },
  {
    "url": "assets/js/24.31bb9ce3.js",
    "revision": "72673e9b4ba50e56550348d5c5b996f3"
  },
  {
    "url": "assets/js/25.5f833bd0.js",
    "revision": "b8134b2774704c9d2867b2efb3a8ef85"
  },
  {
    "url": "assets/js/26.c2ab046f.js",
    "revision": "b3a66eec6c4e231caecdbb20f34ba162"
  },
  {
    "url": "assets/js/27.1acc818d.js",
    "revision": "d8d69e1a1f420932b8dff64a8989d4fe"
  },
  {
    "url": "assets/js/28.b1754033.js",
    "revision": "5cfec391e273ff3c126075b79fb60c9f"
  },
  {
    "url": "assets/js/29.19d6ae48.js",
    "revision": "a7cb892725e17d2e66d6266b77fe87dc"
  },
  {
    "url": "assets/js/3.8f93836d.js",
    "revision": "1f2f2e8ee0e71be4f58215d39a17fb7e"
  },
  {
    "url": "assets/js/30.67a26b7a.js",
    "revision": "c2194a0c15608c1aad067db3c0ddbc4f"
  },
  {
    "url": "assets/js/31.8f71b6b3.js",
    "revision": "99a80e345aeb93e1a3d263d198b49ec8"
  },
  {
    "url": "assets/js/32.12be6661.js",
    "revision": "2dce5b55357a19db894087ad88144979"
  },
  {
    "url": "assets/js/33.ef54da6d.js",
    "revision": "a8d16818b454ba343120faee16b0e75b"
  },
  {
    "url": "assets/js/34.c2a96804.js",
    "revision": "09e4cac6e3c5cfc4de35d5d08bc6dc9b"
  },
  {
    "url": "assets/js/35.fc4b94e3.js",
    "revision": "9483ac06ddfe7bad27788e4f7c21372e"
  },
  {
    "url": "assets/js/36.dea0e176.js",
    "revision": "df0fa82bbb3ff4266455c86ec34e4f95"
  },
  {
    "url": "assets/js/37.103fcebd.js",
    "revision": "af22167637a4ec1d4924d5ae4833dff6"
  },
  {
    "url": "assets/js/38.dd828922.js",
    "revision": "edd9b6477f495afd5ff2193cab01823f"
  },
  {
    "url": "assets/js/39.c7b08e36.js",
    "revision": "60410e47856ac6c3e5589dedd147d414"
  },
  {
    "url": "assets/js/4.d501114c.js",
    "revision": "3530adce716259d97c0055c1735c1c3a"
  },
  {
    "url": "assets/js/40.ff695259.js",
    "revision": "7243787791bd7eda1fd7e8a88b0d270a"
  },
  {
    "url": "assets/js/41.2e17c59f.js",
    "revision": "7842b7386fe9bfa3915a88dd5a743834"
  },
  {
    "url": "assets/js/42.31bf47d4.js",
    "revision": "31d127b06ad124a587eb4ded27d7f3ac"
  },
  {
    "url": "assets/js/43.c8792b86.js",
    "revision": "ad8a8ce96fdaf63cb64981f1cef9fa6f"
  },
  {
    "url": "assets/js/44.c5f6bdaf.js",
    "revision": "10e6b069a38b75da5af20d29df7f8489"
  },
  {
    "url": "assets/js/45.4bc5b4cd.js",
    "revision": "7a5e68fd34b34516641345dbdcd55f24"
  },
  {
    "url": "assets/js/46.5a18ab81.js",
    "revision": "7a6a8102448bd7a1e6cfee07247387f4"
  },
  {
    "url": "assets/js/47.d5fd2cc2.js",
    "revision": "0010f0a0119a907bf1440768d0e4c188"
  },
  {
    "url": "assets/js/48.e302c40d.js",
    "revision": "6bba9baafb5c73e0809612b6e8cec6ee"
  },
  {
    "url": "assets/js/49.068a4d94.js",
    "revision": "c917f155c9d6a769caadcafc238ef04a"
  },
  {
    "url": "assets/js/5.20f79aab.js",
    "revision": "5eb815cd68f95d2e2d5c758e15aa7aa2"
  },
  {
    "url": "assets/js/50.fc9766ec.js",
    "revision": "78f5e9f1fa5a935ad27689d3722eb374"
  },
  {
    "url": "assets/js/51.5747b6ea.js",
    "revision": "1f67b0ba5b6b4879296636ce0ddb36bf"
  },
  {
    "url": "assets/js/52.2e1ad5e1.js",
    "revision": "9203c39e67c6c51eb2c8093377a27d06"
  },
  {
    "url": "assets/js/53.a839b6cd.js",
    "revision": "e0582d6be41387fbf381683cb975d813"
  },
  {
    "url": "assets/js/54.2ce7f2c5.js",
    "revision": "d87c82199bde7a95649681d944b24203"
  },
  {
    "url": "assets/js/55.cbbe58dd.js",
    "revision": "bde976487ab1f32e7da22d98028d819e"
  },
  {
    "url": "assets/js/56.6286a72d.js",
    "revision": "498dedbbdffb226286a32ed402101437"
  },
  {
    "url": "assets/js/57.b44c19eb.js",
    "revision": "d10fdc1dd6f3a5f22df78bc4898b3032"
  },
  {
    "url": "assets/js/58.0bccc365.js",
    "revision": "5122c30cc9986f8fb93e6ec280a0da26"
  },
  {
    "url": "assets/js/59.9bee8a98.js",
    "revision": "396866c1a25953fa05e470fac7f429f5"
  },
  {
    "url": "assets/js/6.6040ae58.js",
    "revision": "47ad7cd1bbcb012576a7fd7b10cba494"
  },
  {
    "url": "assets/js/60.9291d716.js",
    "revision": "dbb5cceea08989d8d4163134fd9ac04b"
  },
  {
    "url": "assets/js/61.09effea7.js",
    "revision": "5de42d86a994e0a9ae32bd8d70846133"
  },
  {
    "url": "assets/js/62.708bc8a6.js",
    "revision": "1bc63d59468aa5511d1b4fe086283cf8"
  },
  {
    "url": "assets/js/63.95fd8d39.js",
    "revision": "e1abf297523bbfb6881679f2324a7c70"
  },
  {
    "url": "assets/js/64.22ad5b79.js",
    "revision": "c1b2fe9100835bb12a1203d2a64292ad"
  },
  {
    "url": "assets/js/65.822aee5d.js",
    "revision": "4f8f27923fa7bf90fb6b7fb4dd9403e0"
  },
  {
    "url": "assets/js/66.541e3cca.js",
    "revision": "e439c54e996ec443a30ad8543a0adbb1"
  },
  {
    "url": "assets/js/67.33c2a749.js",
    "revision": "9d0a300228920893681b01d08f7c5ba0"
  },
  {
    "url": "assets/js/68.a1a09ea7.js",
    "revision": "dbbb5c9067dbb05c9163cb46fc146016"
  },
  {
    "url": "assets/js/69.08177a8a.js",
    "revision": "87c2f85b5697045f4a06a72ef001a3a5"
  },
  {
    "url": "assets/js/7.b4f0d3da.js",
    "revision": "55532c52eccba6f914417d0846d562b6"
  },
  {
    "url": "assets/js/70.3505bb06.js",
    "revision": "19949ca1e635a892470810e82cf511ed"
  },
  {
    "url": "assets/js/71.581ffd4d.js",
    "revision": "592db2bc29fc4989465b06cb10f420a0"
  },
  {
    "url": "assets/js/72.3aa11e96.js",
    "revision": "37bd58a6f5dfcee1f55e7c60799fc1f0"
  },
  {
    "url": "assets/js/73.70415fcc.js",
    "revision": "38f88fc5ed8fa34861a0565f94cfef28"
  },
  {
    "url": "assets/js/74.240b746e.js",
    "revision": "4b925b3e7acebaeec2574d6e4e2522a8"
  },
  {
    "url": "assets/js/75.1fb93d1f.js",
    "revision": "aeb199369c8adc01fb8e483609123350"
  },
  {
    "url": "assets/js/76.e93cdda6.js",
    "revision": "6ab2decb555c758601b01f743947d8bf"
  },
  {
    "url": "assets/js/77.1699850a.js",
    "revision": "b17a6b63244a424aa7833cce4669777c"
  },
  {
    "url": "assets/js/78.9329ef60.js",
    "revision": "ec5094dc637e9f2b59147891c575965b"
  },
  {
    "url": "assets/js/79.2a886c62.js",
    "revision": "57a46904c5b1bc2071e201e6d3cc6e1a"
  },
  {
    "url": "assets/js/8.2a02ab54.js",
    "revision": "35b459a91d81afdf1955273f1f41a0e5"
  },
  {
    "url": "assets/js/80.6a09a783.js",
    "revision": "34174322d1079b1218c83fd4a080cc4f"
  },
  {
    "url": "assets/js/81.f3b14329.js",
    "revision": "79bd8f0f982e31b3f234190b5d046fdf"
  },
  {
    "url": "assets/js/82.16b0c242.js",
    "revision": "ae998e51e06652efaadc2e2d0faa42dd"
  },
  {
    "url": "assets/js/83.034215fa.js",
    "revision": "a92718dd4b1d500c9f69244e1dc1c0bd"
  },
  {
    "url": "assets/js/84.8fca766a.js",
    "revision": "25b0bd990a1b6afb1e33d8725939652c"
  },
  {
    "url": "assets/js/85.b3eff8db.js",
    "revision": "f71868cd34351ca8b88db4dd17d6fce2"
  },
  {
    "url": "assets/js/86.f6b499df.js",
    "revision": "7bd93dcdb8459601ef4218b7e555f397"
  },
  {
    "url": "assets/js/87.26206670.js",
    "revision": "f2c7487105a255d496f73c49d3ef3869"
  },
  {
    "url": "assets/js/88.994c0abb.js",
    "revision": "05c5cc1ef11dce7846cecfb5e8a777ac"
  },
  {
    "url": "assets/js/89.8ae5da5d.js",
    "revision": "598bfaf1fab8109f7dd559f48c92bd8f"
  },
  {
    "url": "assets/js/9.32436d3f.js",
    "revision": "6d4cb29edacff0b51fbfb85412719521"
  },
  {
    "url": "assets/js/90.b882e7ce.js",
    "revision": "fbf5689aba195c7e04d609675611d568"
  },
  {
    "url": "assets/js/91.f2668615.js",
    "revision": "a9750042c5056a400bab523ae95b72fd"
  },
  {
    "url": "assets/js/92.338cd9fe.js",
    "revision": "af240695489a121380406efa3f839c93"
  },
  {
    "url": "assets/js/93.6f671401.js",
    "revision": "b8e119165865beed352329996a21c5cc"
  },
  {
    "url": "assets/js/94.8e167199.js",
    "revision": "1fd773fcbd0c887c820d719b9035b1ff"
  },
  {
    "url": "assets/js/95.9a39688f.js",
    "revision": "2218ced9862af83b00415dc3f8ae4f66"
  },
  {
    "url": "assets/js/96.39af1ea5.js",
    "revision": "6a56fe914bb487bf037ec46566555d0d"
  },
  {
    "url": "assets/js/97.a5c5d924.js",
    "revision": "e050f13a8410bb842d38206460c929ba"
  },
  {
    "url": "assets/js/98.41c879bc.js",
    "revision": "333435a23c5ab8ec7427d362ad9b6a89"
  },
  {
    "url": "assets/js/99.00214636.js",
    "revision": "25fa81afeef5b527f0cca27b7507a848"
  },
  {
    "url": "assets/js/app.d3540d0d.js",
    "revision": "951916c79d9241ac91910e9e366c6730"
  },
  {
    "url": "assets/js/vendors~notification.cc318a83.js",
    "revision": "df473d7e4ec5238ea5f4b5f61b4bec6b"
  },
  {
    "url": "i18n/index.html",
    "revision": "ccb1d9857b9c8860a7ce2be3542402b9"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "59e1cf11df1cfd72142c9ce3cfa9a795"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "b3d16084c939167e75ead8d1b1204ca0"
  },
  {
    "url": "tutorial/index.html",
    "revision": "986d7ea9fcac393963f10af613e4302b"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "ceddd8f5826c7811938ca0da86f9b701"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "5037fa37db4a63f8bb477e631030892e"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "b72775a5265ce678f14fab8719f4ab70"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "114e4c69ecaeaaefab862a69979963d6"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "04ca1763db9e1b0097e6dcaadc7ed575"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "d78711eff5b7c31ddee743b86f999ffb"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "1112cf92561931587d16930c710c6844"
  },
  {
    "url": "zh/api/index.html",
    "revision": "996ff23622dffef8ab23561161c7ba48"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "270580a30e0ecc56e000632f405c80d8"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "a61626e2b8eb15eb5aa104431d3b775b"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "5e5f8e78a3e701909f82d5e9f8328290"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "a059a90759d688b025d2b095b1717c6c"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "e57aeca5a584266ae2341c6aea715fcc"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "6416dc348064ef0c307f133a2ad2c017"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "4bea77b4f6c113404661121574955d27"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "44e62327aea8f947c74ce9064e9e266f"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "cef4bd85c033e70edf320f739ee97ec8"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "3fe03f4305c2a8cb71ebd2ac027bc2ce"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "78ae0a2a8e00ed87b6e9e054a3f1cf16"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "0514f786d4891c2ff750216746ab34d4"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "8cfbddfb69838c3c03bcf74b5fd40b80"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "0994fbc821cb62453fc5f18f31f74a6a"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "2e99f4e102f5845e5d98b6d6d4b8925c"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "7e57a53df852f446ddbddf556c652fc9"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "d38bf599ab99a21fb90bdb0f1700f20b"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "ce9e5bac2d405de80a9a9538537963f2"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "b0ca48a565be14a1848fbd38721c6c10"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "c6f0be022c39edc972c9267334824ac0"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "065260cc2b72a3461285498f17fea27a"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "797bce5d96e68cb47dfd1e251f42ac27"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "48b16b189cfd41bb396f8ff07d3ec03f"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "c79b1dea8c91095b657c41d17d063f7f"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "bb5d946d2f964c4c54da8a98664028ce"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "b93c0f8a419d0ee05058a35e2ac6dca9"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "9200a81e5bc344bb53c4cd2dbe6b0fde"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "942132516e77b238b0b85af67ac4fc58"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "4cf0c713f714b623dc79ad2e885708e1"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "82faf4b00f10ba6f8ef2d2a547620a12"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "2b7efabe464df6b70b4f248fff90a327"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "acb9e92196faedef3aa45fb206ea9db0"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "aaff05beff9abf0613881c0c13021e95"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "4f5ba3ef6f6a9fa4940432c7dcea1ecd"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "6afd961be0174ce4a8fb869033a4e9d3"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "38b2642f1174f21bfcbcee5fc6cb92ae"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "6b5636cf4a50eba7cb432b0feb7e796d"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "a987a0c8af8fc0cf90a092e1dd26298d"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "341a33ebd98e07e0b3dad3df5a44fcf9"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "c31b2353cb3b17ab94cfdd0ca1fd7f1c"
  },
  {
    "url": "zh/index.html",
    "revision": "d46653fddf3d7bdfec2e3f8ecb558bb7"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "e9d43cf437728de2372fcc91efd35499"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "2445abd5f90be2bb24586667e27df36f"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "d4a205aaf14c69ed506f9ea9fd73e15c"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "27198402facc4e96cee6611eddc0e8c2"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "b5e271fadfdde725c655d6efb83be5a6"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "fec58c62787e2a6153daa16ae57b8f38"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "e2473cbce8a28ebc4b46ac4f2ae5d451"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "7133de0c98cdbe9ee45e36ac4251ec01"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "27a233cc8f0899cf5cb6213a99b80dde"
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
