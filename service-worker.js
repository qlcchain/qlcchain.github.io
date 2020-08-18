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
    "revision": "26a680f2c7534c066bb21d8c1bc7481b"
  },
  {
    "url": "api/index.html",
    "revision": "d96dc4affea1e44a837981a23a50abf4"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "514ddf64c0333b3222f47a72034c011d"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "7192ee7d33ec58de178ad6337e28d1cc"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "f20dc9de4ea60079f7b6de7d23638bfc"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "e9556b14553203b1afaf79d6a64a757f"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "8c8b6ced19d5f5726472b92e8e7a383a"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "5fc2638607e81173fd10500a21d947e6"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "b470c331c061a88a47e3cdb4bfd33676"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "2079c6a1f979ff2129bf8b60845fe865"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "f5eb71614f36e8ab4101f5699caac38b"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "8cd310e0efec8dd981a4df94262f3078"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "cbf5c167cee80d8d0ce300a20d40a72b"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "a1735759c4f6b3b851f58f31cfa81831"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "09c04a32b0b2bc0e0cb9f6012051bbdc"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "024d9c8467ef651d59a45366fbd588c8"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "c3ab194d6d93314dcae73f0a0d54d66b"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "49b430b0ec9191fbf0d54891b4977265"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "3b1412d3efd4ccefed8cf1bcb8233917"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "e14b2d6e5f0e82ce6d6750d0ce32925f"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "7c6a67d42102e8157bc72e69c370a2e2"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "a5cf478a6514c76d5c5bbd7619d990bd"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "99fa584ad72256a234d9316c0e064a57"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "9dc17c4bbf6d0f571bd672852e45297f"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "bf080f00ffc4254da8e49c69100ca816"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "0636e530bcaefd5c9fa81ae8fd1993d9"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "9f4624d139dadec4829861faecbd164c"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "180d2b6d62c71fcd0979c572cc549e4e"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "5e902b75fd08cd980027fd99e1bafdfb"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "67935995e2d17ebbd51bb8a666c64129"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "9e93de6840e2dbd699f499b3b921554b"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "43f00e29be1d18c8f4e572eeb735f824"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "0a2f412e2b6f6426b67c50db2324509e"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "a50a1c6cb55a57892bbe85d549020460"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "a5469d5527427f0fd37d83c9d8302477"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "0a724e344a2600e369482b6c8f397432"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "fbe9e8cac9b5ced04ffae7857d0cf653"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "96a04281abbd92ba8d3e7391d575ea5a"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "74dfdcc7093adcf746b4d94e44e60a9b"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "2c44f85236721ecd1594d70e92bd6649"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "b483b09ef694244d65326dc54cfbbf02"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "5ff36869a3cedce9b1b845f060740b2a"
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
    "url": "assets/js/app.1a1d6f23.js",
    "revision": "e8c6df7980a8d22f67b4f5c0890d2daa"
  },
  {
    "url": "assets/js/vendors~notification.cc318a83.js",
    "revision": "df473d7e4ec5238ea5f4b5f61b4bec6b"
  },
  {
    "url": "i18n/index.html",
    "revision": "3db311b79f463fed6c20410d67306526"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "6e250a84606cb5a719c664e03f97a087"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "27c789daadda7b76fe33d733b594a46a"
  },
  {
    "url": "tutorial/index.html",
    "revision": "62da49ab84b3e48b9cd25d253c66fc8a"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "64b59de163b7f086b6daf3ff51733783"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "1bfe36c867dbb8b74bc99161451f90a6"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "a4ef91ed31116fd70300c4ed5a2d07df"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "9c9e17a1fd8638d83b3d68c37f47af79"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "b6625b8cc74424264e0233f1e6493e38"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "927f0ba078dfb3ab763f99a2fe77dbc8"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "b70c44749f1cc97181548852b1f4504a"
  },
  {
    "url": "zh/api/index.html",
    "revision": "bd3c394ccfea52d64f3ac3e711448063"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "aa1acd7e979ae675dbd966aed99ffebc"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "3fce47d2f754832f8df434e448c231a2"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "40545b7c0eb7a364afcba0f88b7823b9"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "d823daf6ac0ea648862554a9997d6364"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "43f1117d7811c75489b0a59c113d1d14"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "58bda78feca6f1edf7f908d83e79d24f"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "e5e169c7517fccfcc39c390d776965b0"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "b84e2642c164f9d215e91f5e6695ac07"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "4847581c36f6d5c6f3cc42ab1ae921a1"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "fdb3ba84ef34b3aee298e796c7c91b90"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "944003bb10cfbfc07fe85c203e968099"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "fbef88932dd8bd9d9ef7001360fd30f2"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "8c383d278eaecc63286e134c74b8a4b7"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "272b7b21a481c6ce76ad7ef2349faccc"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "e37103cc1d9715ab945b9bf7e2604152"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "9e08aba0e85a5bb625fd21d2ce363cc0"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "0e5b759451c8fdfc711ed6e01c6686f7"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "eb537634b5f89999facce802a0d83cd2"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "5f47efcd4215ba8d5de06ecaf39ec633"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "5a1b49f68f3418b2b5b7b6dc7e29a30b"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "6031ed7ef0ff59a910faeffa49937209"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "70f7880d22f7550d6bd7ef906a73cd37"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "8047ec3004dc4996760985d4dc72a8cd"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "6d23a291fcd1657b612727fb3a2a8148"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "db68a8fad075d78200d48944cbcc8cba"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "638c9cfadb1ac3d12abef8c9c97b0002"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "872c8d3cce44bd78edb0ef95af5314c5"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "e113a25a902d42663de75db82bff0518"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "be3b23ec1c1fff36d79b832d60dcd417"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "d90ebea82827117366dfd1b877f6371a"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "abda4ce398fa77ce33c8da004803da94"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "da62f47e98048324d38cf3bc6427542f"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "629433a2fdd91b7cf00e5e1a65504a79"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "01ad91d665d9a4e23bb7f49a9a84f896"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "7582df4a79dd9fc7ed482b68ed19a06a"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "63d9e2be15e0198e1324dbfb43e7aa7f"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "cdf44cff984a141389fc1e8305966692"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "a4f5069c97f75103b9e6d87dee3475d1"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "b6674ea12259deb7b9054c0445cc2459"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "ab26722d9f9aaaee42af05e0efab9c51"
  },
  {
    "url": "zh/index.html",
    "revision": "b5a4b9b4e51e303b1a5b5e034dd504b6"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "1e9fb4f3d5e1a45c66492eb185fc244e"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "bc0396093aeb65a902d147239746f535"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "f84069a097af94298456b4623debf1e6"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "39dd17003ce086356d493e57307d465a"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "ab556ed1c2cb617e704deb1778e3214d"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "7a4a3026bf5adea1fbe9168c76fdd054"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "7d6059735f7224de25b68aa4663b0ecd"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "abb18aa64efe2aa90bccf33909499dac"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "12def3f8eca90dd7dbfb739a03cbf347"
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
