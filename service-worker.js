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
    "revision": "24363300d8a3105584bc5bf5e245bd0a"
  },
  {
    "url": "api/index.html",
    "revision": "71bac26b423231d97ac9a69daf245825"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "bace9c20dc34f5fa800d8c14d1b67444"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "f5d21b93bb9b699b632ba5ab946ffd1b"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "d97cf78c41978c1ef3b426224ff65473"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "fdcac1bfb02f315236d9cec86fc2e6fb"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "8182a4f8e61e5dd621aa1082e77ac2a9"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "81080b3eb24a9ccabe744a1821deb4dd"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "9ea278328cb52ca3c43f021503a6519a"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "ce34b20887dec8d0621dd2263e6e48c4"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "ec19237d25240b2847bd5c1a02524e5a"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "af43781e3b2c26e2dc48f7473055419b"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "9a6db9a7ec07139be80d3cfd66a9fc5d"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "5718795768ae81c87072aff30063b480"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "1d4bdb355e6568e39c25ee5e9bd50831"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "685772a6cfebe51098ba49ea50247dae"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "14bb3476cf74f568cf641d72b1ec6528"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "f88be315c1be65c297a2b0650164b773"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "394970222aea344fc8e123394de937b4"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "68e90c97c3c38831da9fb4a24b6305d9"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "dc0582c01a726b9c38c8b86c45c23ea1"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "2850eeecdbe681b96b49f22b064d3f51"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "5be43fa68e50a5507a76babb59168bcf"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "e318cac0d85197467df45e2682981857"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "85f052df72e6698555666970f6555d14"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "fcb7f8cfd2b8944ff5551cfb163b4c26"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "1ce77138c08e530464cbba822af0ea8f"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "b42388e0c2b88f19d952f40e8a159d1f"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "d719dc93769b18838956086ce51ee829"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "3ec8f435395a110c00bb6bc0cdbf096e"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "3761fa628ef55fd41cc380f32a5c6cd7"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "c09d2ceb9e42d760b444cde56732b7c8"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "ec46b4cddbada5bbff3c3501f19b6758"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "106776468fd197bb2bc94488b3e27045"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "db9a96fd15035d987a70c70cbb3ad532"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "afd58939e9f20e721ff362d36684b6d0"
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
    "url": "assets/js/17.5371645e.js",
    "revision": "ce2992dab1add7b39954d0156c5697b5"
  },
  {
    "url": "assets/js/18.b64fff74.js",
    "revision": "294aeedef1635191779d15871fb2702e"
  },
  {
    "url": "assets/js/19.035f1ebb.js",
    "revision": "b8e1920a8f54a9483782e2ea60f17f0e"
  },
  {
    "url": "assets/js/20.cc706f01.js",
    "revision": "fd2743273965504676c414a419d21a26"
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
    "url": "assets/js/51.775a93a9.js",
    "revision": "39e480a40b305b9ca14d79eba532d7a1"
  },
  {
    "url": "assets/js/52.8616fd53.js",
    "revision": "6870bf542717fe7fa737ce8ff8a0db4f"
  },
  {
    "url": "assets/js/53.708598d5.js",
    "revision": "3e44bca7efd05cdf5287cf2a57499ac6"
  },
  {
    "url": "assets/js/54.230ef530.js",
    "revision": "fba320fb65d9ea9b37da88a1fbfa1537"
  },
  {
    "url": "assets/js/55.9324bf90.js",
    "revision": "b8db2a427c2dc50cb4054b95d551b5b7"
  },
  {
    "url": "assets/js/56.17487c17.js",
    "revision": "e091059921e56b18bcc8f91c450ea523"
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
    "url": "assets/js/app.a46a58a2.js",
    "revision": "a4d62480905a847ae481605759a9de3f"
  },
  {
    "url": "assets/js/vendors~notification.9cd526a7.js",
    "revision": "d9c1b7a8ffd9f052698da9aba493d2e1"
  },
  {
    "url": "i18n/index.html",
    "revision": "3c3413aeb6be7b589b546b3a22228a4a"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "c4e8660a6020e7d7fa15b28bd42a5c72"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "1db7b7df8bb8b9d45f9ac74aed7e4de6"
  },
  {
    "url": "tutorial/index.html",
    "revision": "580859e9a31182474b0f6dc847d125a9"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "84f636f8898b0c69656c2e620d62e9b9"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "fc9d5ccc1fd1cb9e213f254e811983a2"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "c8ed3aa26d0e8b596a68e7f2e0c3767c"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "914d875e5a2a2f1628769d2d03168608"
  },
  {
    "url": "zh/api/index.html",
    "revision": "ba78fb1113a7d160cb8a564063f4dbb0"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "43ac8643f5497ed22061d9cbaeb8f8a2"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "b02442bfa4a09f5c362721f4094d04d2"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "dab3e0982f47fcf13bfa4b1c5d10ac95"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "e9e7241a08767254994fe7c7520bdfbb"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "79f7cf7b303a424cf0cdcaad87dfeac9"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "2ca8411fa2f21d4ba041d6260760db5f"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "8007f7c02e945c1bd79cabe3053f70fc"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "4dfbff6967343a3c2447d271de63d618"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "c118920b8a1e7326cb299e1f0575b3f7"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "25afefab9b1bc21b6525f5eb3943dcfc"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "c1bd8df3424a835014420a4e9196779f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "5ca24ce1ce7dcda9bee7d5986bc3e637"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "f942e6315e6007c127d197776a74a1a7"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "d14354908778a41a0c51b679ae24c610"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "79d0e9ecde87a1e53fe885726bdbf870"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "d384f40a0cefc6e9ded1086b2cde1f07"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "33a178a5ae3319fca60f330585feb5c2"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "e03dbd8752431af0c0e64378f4f99ff8"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "eaf93ff041626a999d26fbd53d74f9ac"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "233ad0ad8ac0f3fa7dade51600bbecd4"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "935ae20bab653d5ccf2b272650541588"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "ba88313a5500dfa46a016c0331a72603"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "d07a8f16514e31b1c8aa826016243d8c"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "fcb8b0d9d3de1c0e655d56349eeab9b5"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "06f14e607c8b4a204df5e1bafb26d656"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "30ec223920d8ddd930be013edee57fb7"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "b66766b6e041c0958fbf34bb4589f3b6"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "1b47c1e6eb2e420bdce048c29118a15d"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "19e74d10c893ef85fab5eb2a989223fa"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "9a6aff0b1866ad011a2ab65247ecea74"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "a2b246600d3b8dc04f6a819d40a30b28"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "da5ddcde577442f5b61fb2365da07e5c"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "4288810d57d7413d66bd644e18d68961"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "37e5d0ae157e836b8192bcb07e5d3d8b"
  },
  {
    "url": "zh/index.html",
    "revision": "dbf07eb650b41e2079bc7711dbd8b3dd"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "5eb89593ddb6e550807e107f7d5c4dc0"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "d51f6a1dc4704ba3e088dc69ce19d616"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "962fd789476759f7917d3e7d5f45d24c"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "0ef39c94eb9ca53f0fe1da4323ae42b9"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "294ec74fc19b66c2ceec2f98fea7cb99"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "601eca25899f0be3b3738201aa070534"
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
