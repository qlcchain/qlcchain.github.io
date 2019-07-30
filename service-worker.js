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
    "revision": "04af3cb99001d44d717b5e9ac8ff3840"
  },
  {
    "url": "api/index.html",
    "revision": "1dd41c3b305bf4de90076f9cfb6ba58a"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "e4634e33a5570033dc5dec9f39c77786"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "958fb0808377dd97b146c3213d178cc7"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "7a4d5010c1cba4be92e1715145388ed6"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "2888cac36b7b9244a3f3eb80ea3809f8"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "8b9a5d29450d38d4ac031ad5cd4274aa"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "a31d803fe8b0067ddeae99b2c17b242c"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "9fa634b6e1abe9ce47c060baafe12ed4"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "b9bb7992d35d7e78b1be5c95572b762d"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "21d8f9a311915c8e94f90ae1962a65f1"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "b807822355becc277ee89fd0fd756f99"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "5846363b93101bc1818e1f7607798878"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "e8b859ee4032928a7279d47502413002"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "ec6e903fc0382bcd63ed590930c37fd7"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "b5a9829ed0b3a0ed17d30dbf79675ebc"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "c8f404b65e98c283487157d7a0504d18"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "63bfdde53eb9e8ca4c0527f315fe3d0c"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "1b7b395b9152219966d7fe1f48f737f8"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "9e4a9798c7b290a7b9b1dcf76ada2923"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "c28c83b6eccb3d2c43016c6d6529dd6d"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "4b57c43c0334c4472b65014eed46bffd"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "de55c3972ef14929fef89543555dbc5c"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "40fa73ca7ba39c25a31ec5b6d2d9e476"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "8bc48b2579ba714e25b38392872e9ca2"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "a76c90f55fcbd11ac4c79e8035500a38"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "5e7a0b6cda1fef8ef01c3301522f706c"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "41bad2a1f995d75e4bbdd3c8e1d9c48d"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "31c73a1180bfde6f67052dbdffb95cb4"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "922ce0394d2eb89b8d15c9b1b70038d9"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "7d7c044caabd9465b1289a1e7567beec"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "e6fe71d93362b24fec9e477a729f5812"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "3d7057d80ab49540ae04f335b06c66a9"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "1dc5c17e1b57c0d512ac90e563124f2e"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "5e190dc08183999652aabce738352446"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "707ec236a6bd9a600d1b62f8435adbd8"
  },
  {
    "url": "assets/css/0.styles.fbcdc890.css",
    "revision": "1bb8115b1821ceffa27d9b0540ca764c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c7e782a0.js",
    "revision": "fdff12f8bb55bab875fd928439f6414b"
  },
  {
    "url": "assets/js/11.fe4c01f9.js",
    "revision": "22bd180fa8f23004a5ed2d91b886a6d2"
  },
  {
    "url": "assets/js/12.411a5c33.js",
    "revision": "8e98a3bda387c4cbc7ec866ada5358be"
  },
  {
    "url": "assets/js/13.5fead313.js",
    "revision": "ab9ae1069d616c45290d376d49731c94"
  },
  {
    "url": "assets/js/14.7b22f6a6.js",
    "revision": "1cbf80451e2b2505b2ed425d1d278e96"
  },
  {
    "url": "assets/js/15.2b7f62cb.js",
    "revision": "f3850c6bb5d3762e9d51d5848920edd6"
  },
  {
    "url": "assets/js/16.8f23686d.js",
    "revision": "7af020e2f54776e2779bea8c1597af75"
  },
  {
    "url": "assets/js/17.bd41a3aa.js",
    "revision": "cff95822f25344f12ec8aa34c8277fcc"
  },
  {
    "url": "assets/js/18.d023c226.js",
    "revision": "aa0ab80a7dfda3c68416586b0833e624"
  },
  {
    "url": "assets/js/19.5fe43fa2.js",
    "revision": "d831b3ea53c7a76571788ab606fad0e3"
  },
  {
    "url": "assets/js/20.24aff1f4.js",
    "revision": "20427c816a82a04ba7f47baac05f58d5"
  },
  {
    "url": "assets/js/21.d1123e03.js",
    "revision": "fa4f9a149666e7687083a31514dcfb35"
  },
  {
    "url": "assets/js/22.dcf0ac33.js",
    "revision": "7cd50bfb743aa50944448072f8c82407"
  },
  {
    "url": "assets/js/23.5d8fdd05.js",
    "revision": "afb843684ec7c077fcfbf8fec900cd08"
  },
  {
    "url": "assets/js/24.469ef604.js",
    "revision": "ada148cd77668b3619f429c37607174b"
  },
  {
    "url": "assets/js/25.64329c5d.js",
    "revision": "08b57c8b63751aeffb8349ac37559f60"
  },
  {
    "url": "assets/js/26.558f9b51.js",
    "revision": "2e33dacf4e499b48a02e810ec0605f9f"
  },
  {
    "url": "assets/js/27.29e0f3a6.js",
    "revision": "0aba6bf7d2369a6e948c2290968c76fc"
  },
  {
    "url": "assets/js/28.5f35b684.js",
    "revision": "6c6b4dc530404f41bc2ee768e5ee3a66"
  },
  {
    "url": "assets/js/29.9024c38e.js",
    "revision": "311243b5f4c7e339b4f0ef130e497435"
  },
  {
    "url": "assets/js/3.56c11fb3.js",
    "revision": "b3dd74d7e3b22b7e17df5f4697476561"
  },
  {
    "url": "assets/js/30.0e02a681.js",
    "revision": "6dee7e8b6fefdbe215b258f72bf5ccc1"
  },
  {
    "url": "assets/js/31.57944459.js",
    "revision": "bec541576c6ae889e3831b285ee03234"
  },
  {
    "url": "assets/js/32.0ffc2392.js",
    "revision": "941fa7a56ce3563972fa48d6673853f2"
  },
  {
    "url": "assets/js/33.dc058165.js",
    "revision": "3238079de93fa53b08bec8a43b49d39e"
  },
  {
    "url": "assets/js/34.9132c576.js",
    "revision": "8f52bcea9567d636c77449cbb9b9c61d"
  },
  {
    "url": "assets/js/35.994aed55.js",
    "revision": "a6900ea584ee84d7d4d388cfa5b0cba1"
  },
  {
    "url": "assets/js/36.1f6d3c18.js",
    "revision": "ab78d439f23a5b3e87b50bbcdb1a545f"
  },
  {
    "url": "assets/js/37.7b2a6fce.js",
    "revision": "32d6e9532da6cb1c144bd28e77a47cdc"
  },
  {
    "url": "assets/js/38.6c55d40d.js",
    "revision": "60328d27363bf86edac40f42fa6b3009"
  },
  {
    "url": "assets/js/39.10a8dbbe.js",
    "revision": "cc1e61f94c343619734fd76d0ed13ee2"
  },
  {
    "url": "assets/js/4.affdda8a.js",
    "revision": "8719de55e1dbfe9086bb91152889cf1d"
  },
  {
    "url": "assets/js/40.2ce0ce78.js",
    "revision": "5128a6f1e304ce65e167b59143766cb7"
  },
  {
    "url": "assets/js/41.ab8bbdc7.js",
    "revision": "07c10b5ff94c4a7ff494030231a89ad9"
  },
  {
    "url": "assets/js/42.cb713125.js",
    "revision": "e8377f91374bdf8a1c1784b3a5d68504"
  },
  {
    "url": "assets/js/43.45d53466.js",
    "revision": "acae20b4e865e0ffb5fc65aadc26e9b0"
  },
  {
    "url": "assets/js/44.d17e8747.js",
    "revision": "17841eb4465057191351960bfaa6a5fd"
  },
  {
    "url": "assets/js/45.7de8baf3.js",
    "revision": "123d12189317def41a768815448edd92"
  },
  {
    "url": "assets/js/46.db9fb9f5.js",
    "revision": "c0409326b84d6d9b32d0ea3d1e1e0f88"
  },
  {
    "url": "assets/js/47.02ffbc5f.js",
    "revision": "79e5dd23e3614f17666e3e5016e9dae7"
  },
  {
    "url": "assets/js/48.81d4df7e.js",
    "revision": "485ee16c79eff69cb3f07cebee671523"
  },
  {
    "url": "assets/js/49.5b4ce347.js",
    "revision": "9bfafbf58b165b97eaa3703accb34b02"
  },
  {
    "url": "assets/js/5.90c55488.js",
    "revision": "88f72468fc3c3cfd42ca256d2238a766"
  },
  {
    "url": "assets/js/50.5ff09a5d.js",
    "revision": "daf72e20cc7cbbfc743c98ed4995687e"
  },
  {
    "url": "assets/js/51.af946356.js",
    "revision": "e18bbb8df3b2cffc214740e33008608f"
  },
  {
    "url": "assets/js/52.817e3e1c.js",
    "revision": "2dfabb1efe1575e775e10a4473a2082b"
  },
  {
    "url": "assets/js/53.2a4b1387.js",
    "revision": "ca85ed4f7a481e86b863cb961c776c91"
  },
  {
    "url": "assets/js/54.45442ee2.js",
    "revision": "902b91b74e1fdb08651b0290d50afa66"
  },
  {
    "url": "assets/js/55.5046e8dd.js",
    "revision": "b2bcc36f608c7ada7c2cc0ffd3d4e4dd"
  },
  {
    "url": "assets/js/56.e782b189.js",
    "revision": "3c7ec12919a1a6007e481883a397b129"
  },
  {
    "url": "assets/js/57.d433b441.js",
    "revision": "ce763dcf45458cf1a5aa97e18890be84"
  },
  {
    "url": "assets/js/58.20bee32f.js",
    "revision": "a07a94cd728757d39c2a5762e3f04aba"
  },
  {
    "url": "assets/js/59.cec86c5f.js",
    "revision": "997c7e8e8e30f9bf44740da504613859"
  },
  {
    "url": "assets/js/6.ea422aa1.js",
    "revision": "f943b09b0af7460fbbbbd132f6def90f"
  },
  {
    "url": "assets/js/60.73bd7e45.js",
    "revision": "ed9b8c60f7aa6e631e6075674b165c28"
  },
  {
    "url": "assets/js/61.fc3d3640.js",
    "revision": "ad8a9c298fb2ca4e497901246bba4938"
  },
  {
    "url": "assets/js/62.91b414e4.js",
    "revision": "2713da98a0614707767d48c914d37c3c"
  },
  {
    "url": "assets/js/63.4b12c445.js",
    "revision": "14f8e2e2d05e7d82432e42f5cce39fbd"
  },
  {
    "url": "assets/js/64.fd896db6.js",
    "revision": "925d559d69256e9ccf081b38681ee4ae"
  },
  {
    "url": "assets/js/65.64b5ea9b.js",
    "revision": "791be716cf32f5bfdd2cf57357334810"
  },
  {
    "url": "assets/js/66.4b8adefe.js",
    "revision": "b68a04fa986c6df6c80c42c5ff5ce2a6"
  },
  {
    "url": "assets/js/67.cc5d662a.js",
    "revision": "0096bffd3cf4f38f722f02dcda08c6de"
  },
  {
    "url": "assets/js/68.ad40b7b4.js",
    "revision": "29d7ebedab939b56a7887395ad656467"
  },
  {
    "url": "assets/js/69.0055710a.js",
    "revision": "0c0307e5a12288832af8476a9fcff02c"
  },
  {
    "url": "assets/js/7.edf376e5.js",
    "revision": "8fe5bbc01f449711f1a3affe6d72b8ef"
  },
  {
    "url": "assets/js/70.a1c4e3eb.js",
    "revision": "30acad8029959f873f38d20ac83f25cd"
  },
  {
    "url": "assets/js/71.fcd275a8.js",
    "revision": "ed66910c652fec0ef047a3ccd942281f"
  },
  {
    "url": "assets/js/72.e373a8b3.js",
    "revision": "1047a853de13609515c4bdea9c1588e7"
  },
  {
    "url": "assets/js/73.2b448d8b.js",
    "revision": "d63fcd9f800c69b885ab1681e018c06c"
  },
  {
    "url": "assets/js/74.70c83d7d.js",
    "revision": "118aad55c06720de7ce03abd8c5b9ade"
  },
  {
    "url": "assets/js/75.74eb23f4.js",
    "revision": "02bb89d8649b07704aab22644f2676c5"
  },
  {
    "url": "assets/js/76.39c37402.js",
    "revision": "32b68c501a2f85d01b1bd18165501632"
  },
  {
    "url": "assets/js/77.bdd5cdfb.js",
    "revision": "d2b99d459a6e9917d203e38a00b181ea"
  },
  {
    "url": "assets/js/78.c6497913.js",
    "revision": "a4cf79f9c8a89ca9c5764695090dd311"
  },
  {
    "url": "assets/js/79.370d3d1c.js",
    "revision": "adf12ce3c4a14b79a2cf3a6ab37e6be9"
  },
  {
    "url": "assets/js/8.627943a0.js",
    "revision": "e119325f2cea6a26096392d3ac3d4940"
  },
  {
    "url": "assets/js/80.fbc3d641.js",
    "revision": "27df63d450764b3c7d34248276f568dc"
  },
  {
    "url": "assets/js/81.0796a06a.js",
    "revision": "e13a3d46a0799a0b4b54d3d959e3502d"
  },
  {
    "url": "assets/js/82.3f20f853.js",
    "revision": "ec07f3c4c0e1c26582aa559a4b07fef7"
  },
  {
    "url": "assets/js/83.342f9076.js",
    "revision": "d4216f6abfb8367fa6cf4fff2c27a137"
  },
  {
    "url": "assets/js/84.2b216118.js",
    "revision": "523c5c4a9c6c32c10b758710781dc55e"
  },
  {
    "url": "assets/js/85.4509ac1c.js",
    "revision": "6f91d6e0891a1c6c2a32503b84881596"
  },
  {
    "url": "assets/js/86.95a08777.js",
    "revision": "1cea6dd381266724c06e7a31cea2f215"
  },
  {
    "url": "assets/js/87.a5449510.js",
    "revision": "d5145ad0b16c1a69399cf7540a132c8f"
  },
  {
    "url": "assets/js/88.cb886fb6.js",
    "revision": "e97b1a6a25b4fc87e872104a43d2b232"
  },
  {
    "url": "assets/js/89.0ae8cb93.js",
    "revision": "e8e3e937c5884b7c50668c30fc93e00a"
  },
  {
    "url": "assets/js/9.5dff3661.js",
    "revision": "7d1e2d082f3f822484a209e12bce4715"
  },
  {
    "url": "assets/js/90.210ef718.js",
    "revision": "7b33564f5212e02377da56561fb8aa0f"
  },
  {
    "url": "assets/js/91.72ae30e3.js",
    "revision": "05eb967260703ae5e60be74d115a8c39"
  },
  {
    "url": "assets/js/app.5c3f6aa3.js",
    "revision": "2104b607cb4e942e079c2ee50da1f1e1"
  },
  {
    "url": "assets/js/vendors~notification.9cd526a7.js",
    "revision": "d9c1b7a8ffd9f052698da9aba493d2e1"
  },
  {
    "url": "i18n/index.html",
    "revision": "6769574fa6b10af28d3e38b2273f0787"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "00ec7d3b471f4c88442160ffd164350f"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "326309b69d46faeaf8adcf675145da08"
  },
  {
    "url": "tutorial/index.html",
    "revision": "a3b392cb4ce6aec76cbfd0ed88cc8407"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "d9c2e8c44772009a5f2bc69363338803"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "0e1ed96a28e0f27619a12b0861ada628"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "09223f9de85ce5e400405f3c16632939"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "67607dda83b832c5504abc4c8e42cebe"
  },
  {
    "url": "zh/api/index.html",
    "revision": "fb8b56528fb63b71b97772b52cebf016"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "2161d6dda5a3d806a1db9cd52e3d5d7c"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "3e56e36e5eef24ce8a55e194957dbe96"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "56a18f01e24bdfbdefdba8b55a500e04"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "89855e8b72a1912c17a8fa35bc08b40e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "8f6a8394d9e70dc07a8d2c150c89c1b0"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "f53f4e8630c88f3aa67b497a0f3ba746"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "fd02ca199eafdf9eb0373cecca0570eb"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "e6de1ec4e994a8c76260ca15d11f4d35"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "c3b547ba2b77a976e309f7ead61b2a72"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "906cfbe9defe81b4d1b16c59ffb6b6d1"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "1a079cb790632e8f03bcbfc4d5ad4bfa"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "cc959a895e17b9e4ac4b605f19137aee"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "08b33050756e3b69d91dee8c32469638"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "054dfdc45c927f3ebfd4c2b65b2dc68b"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "abeba27a5e777d3ece35b2c6cb43785b"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "6f430dce8ceb55a9d019dd5650a11f77"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "33f86918a5c94949ed6d80809c6669a6"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "7f316da24a6d8c4d4416df5f426abcde"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "a4416509e6ec60ec017345d5a86b291d"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "1c0de1016c22f9dace7be17abb5c1c78"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "7d1ed6082db944ab924728988edf2f22"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "1da46c9e29cc6b6f23813634eeb680fe"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "12db3c7307bfa65ca2c9ab31e22d861a"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "49467940b79fbfa9aca0d1e4cd51cbe5"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "b0c30a1bc767295835e347846aae72fd"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "c1e7c9d216571363be32e8145a5c787f"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "4c8055fd07f2c225126b16c92ea6efe4"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "dbe520a06c801f97d7742bb345e0963f"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "61d5beb8a56a01b7a649d2618bffb9de"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "8a33d4f872515b73347e37042a6d86ab"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "5fb3068424621e98488ad157fc370c37"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "55b77124aa466eeb2cf37da7450da7bf"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "0e93cb6dd342b3ccab98840f3be0f680"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "fa27159c97a1e9432f2ca73d9dbce683"
  },
  {
    "url": "zh/index.html",
    "revision": "1d91dfe3fb7968baaa9a2822a1a24e29"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "cb5f87af2643919fb09a45b1a959e5a0"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "3412a6c4e9155d37b3183650f9fec2d5"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "b06437e149d897d2de1e2fb3eebd0abc"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "23ac6e8069b27068093a54fc77bef6c2"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "9b198af05252ebb0c65820e37e4404b5"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "aeb4376331ccc03c0071fdae88140879"
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
