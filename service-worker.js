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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c27402d8a260922932709cf53da798db"
  },
  {
    "url": "api/index.html",
    "revision": "7f051042f5ea833280e37640be9ead38"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "8ba40170b3b8d5e7323af7133eb4e122"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "6e5d3c94f4394ee711a784f1cb1713bb"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "c366aa5dcc0807b3a003f26bbaa525e3"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "6b164881d798ca3e06ea3cbb77261715"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "49db2fd2015c2dc64e0373f40609908a"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "28946d017d8fbb625b912abaa203872b"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "18af97812b4a6a7c3cb0555a7cc72504"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "6d8438bfa79e5b43bdcbb10fd1840e07"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "591ff6ac45abdcf846924aedc9d478e4"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "7d262c11198ad0fbbd92c4aaca58a8fe"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "3f3751a16294c925f058769f9009fbe8"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "52de9e404599253b5188227c39eb6ebb"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "425fd000abce9a9d12a07415aa935f63"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "d522bc6b16c71b88e7752ca360d4881e"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "8f4f52b29f620c6e314d9038e6376d17"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "6a9dcab7aaf45331d35e2b9d61b25c0b"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "d320a40b55fb51b73375909317ee6dd8"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "49b11b36601553461e6d845376c5a572"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "4f5e74b18cf831a5477c02ffd9648eb3"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "bfa1d874c384845e193ddac76df2b2f2"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "7f1c47262080ba62a2e2d4f4d7787339"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "0c68a10063c8253f94a3499aa949bfae"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "df8a8d6b11e9404a853056c3340c46c1"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "3d115fec24c4355954b40d34c8adc448"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "f902c6c15bca377368d9940ac3929edb"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "919fa0aed393b5c0224e02f191ef4400"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "e0099232462c288468879b672220ea7e"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "0fe9db5b4df0f433263db8c717afc51d"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "b22fb6d88d1fd9e630391f4a9a188e3a"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "62639519bf56efd0ac83016eeacb070a"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "7a30b70f91709a2533d70ef03f78ca60"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "aeedcd969471c48d1eb86dbe99c18c66"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "6bf502b3a1ec673154e2db60383a70b2"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "039bb2bcba267bdab5236bad03abc235"
  },
  {
    "url": "assets/css/0.styles.f525e787.css",
    "revision": "1bb8115b1821ceffa27d9b0540ca764c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aa0dd973.js",
    "revision": "553be44e2a5589a027c7cb1f79af266f"
  },
  {
    "url": "assets/js/11.3cbfd61e.js",
    "revision": "0a5a70f954a166d33e5be4c32d87ef92"
  },
  {
    "url": "assets/js/12.f0b9266f.js",
    "revision": "3e296a94b027d4f21b907080d7c7a0ba"
  },
  {
    "url": "assets/js/13.48ba3261.js",
    "revision": "60916c513081e862aa4581406d7a48c3"
  },
  {
    "url": "assets/js/14.8d0f9e6d.js",
    "revision": "cd512ed79b8020a75e8bc4988b0ae61f"
  },
  {
    "url": "assets/js/15.873c4511.js",
    "revision": "c0e27a0a2546c307b0bf31eaddc5a78a"
  },
  {
    "url": "assets/js/16.1f1fcb0f.js",
    "revision": "805185475ebadaee8222b03999341a4a"
  },
  {
    "url": "assets/js/17.c4014156.js",
    "revision": "181f3faa15005d374f1ba2d5a838903c"
  },
  {
    "url": "assets/js/18.4a8af8bc.js",
    "revision": "87e3a1d6f49e4e3adc56d9c17ec19bfd"
  },
  {
    "url": "assets/js/19.2bcb3abd.js",
    "revision": "6fb0c99a75483ba42920e522128c637e"
  },
  {
    "url": "assets/js/20.fd3ecf1c.js",
    "revision": "10e276ef3fa8ce22f5b712eb8e9330bd"
  },
  {
    "url": "assets/js/21.6d172e15.js",
    "revision": "603c9414ff28188ed81abe31406ff299"
  },
  {
    "url": "assets/js/22.1a37c891.js",
    "revision": "6c9fb36e80092e50705770605a645917"
  },
  {
    "url": "assets/js/23.807cd3f0.js",
    "revision": "45d878621c32c4138edc72723a096afd"
  },
  {
    "url": "assets/js/24.e15fd646.js",
    "revision": "9ef6652f159c58d552d0e481012f873c"
  },
  {
    "url": "assets/js/25.34883799.js",
    "revision": "53143d7a300e8351e9590a35e7458c98"
  },
  {
    "url": "assets/js/26.841b80ab.js",
    "revision": "a6e67cde7735da767139d7881e5df224"
  },
  {
    "url": "assets/js/27.f85d52f5.js",
    "revision": "e95b2d958504a66ec513f21d64bab73a"
  },
  {
    "url": "assets/js/28.1fd083dc.js",
    "revision": "5c94c1f84d261ad12b3530cefb379a72"
  },
  {
    "url": "assets/js/29.47d2184b.js",
    "revision": "b2aa20112bdeb5c8682a91b80ef28ed7"
  },
  {
    "url": "assets/js/3.cd2c46f1.js",
    "revision": "3b08ac8e42a5b82a1ddfbfbfa6f8b59e"
  },
  {
    "url": "assets/js/30.2ac62ff0.js",
    "revision": "b7fab5543baf3429266935a0813fd90b"
  },
  {
    "url": "assets/js/31.5f55dd38.js",
    "revision": "4782c66326e14a6b65e24ae088b94f11"
  },
  {
    "url": "assets/js/32.b880e429.js",
    "revision": "81c7183900b030048a3322d1469dbc20"
  },
  {
    "url": "assets/js/33.d84e33c1.js",
    "revision": "af56c61feee83f9f1d388ba4fccf4648"
  },
  {
    "url": "assets/js/34.0138e10b.js",
    "revision": "536a3707cbddff923c299379003b0f17"
  },
  {
    "url": "assets/js/35.ba08d628.js",
    "revision": "bc40c5c29a42596c4ed27f8a6ab2076e"
  },
  {
    "url": "assets/js/36.914e5f3d.js",
    "revision": "e8cce7d654702c446c95d50e81b471e3"
  },
  {
    "url": "assets/js/37.113aff10.js",
    "revision": "c6dc5768400b07b6b61c9bfc96a639d9"
  },
  {
    "url": "assets/js/38.4f1d1910.js",
    "revision": "649f87456117202cd4154fc169d9fb28"
  },
  {
    "url": "assets/js/39.f9e4fb3d.js",
    "revision": "c2edae76645b968c9538d5c3c783f616"
  },
  {
    "url": "assets/js/4.51079b00.js",
    "revision": "92fb81f2c1006934d587c3e5106d2aae"
  },
  {
    "url": "assets/js/40.08e9b3b5.js",
    "revision": "e946aaa9df85f9fb47d925dcdb8277e3"
  },
  {
    "url": "assets/js/41.07241028.js",
    "revision": "c5146c65e3f42b9c2f4d5a124b6506c4"
  },
  {
    "url": "assets/js/42.486b3d12.js",
    "revision": "f8ded51b93a1aeb1aec4fd4c43c9a696"
  },
  {
    "url": "assets/js/43.cde33fb5.js",
    "revision": "5e83abbc9f9de0fc76be35270365d9e2"
  },
  {
    "url": "assets/js/44.e537ccdc.js",
    "revision": "3533ff48f3233231099594af44fe795d"
  },
  {
    "url": "assets/js/45.1b3711d7.js",
    "revision": "dbec0317a25a525551baff55faef7c1f"
  },
  {
    "url": "assets/js/46.6468543a.js",
    "revision": "8b441dd803083073df851405a25a2c8f"
  },
  {
    "url": "assets/js/47.996f0bd4.js",
    "revision": "ebe630504096f3ee2f0cf3192c2418c0"
  },
  {
    "url": "assets/js/48.392b5713.js",
    "revision": "e3b843c975dcff9a16ad343e474a1c59"
  },
  {
    "url": "assets/js/49.753b42a8.js",
    "revision": "dd513e76178f22b2fd3411e996991136"
  },
  {
    "url": "assets/js/5.16bd38b7.js",
    "revision": "875d2cfa4caa73ccafe1b71e47fd8954"
  },
  {
    "url": "assets/js/50.d95e7c11.js",
    "revision": "937ea0777c22ba131732232c3c69422c"
  },
  {
    "url": "assets/js/51.0ce4f6b4.js",
    "revision": "61f95da8a085a2f8c4381e1140c7aef9"
  },
  {
    "url": "assets/js/52.b74ebb78.js",
    "revision": "83a8ac573ae36fc697d6583d8c3bfe91"
  },
  {
    "url": "assets/js/53.bde181fb.js",
    "revision": "71f469b4593e44d2b5551b8a9879de52"
  },
  {
    "url": "assets/js/54.8952032a.js",
    "revision": "5754e783c81435eb37ab0c7e937211e8"
  },
  {
    "url": "assets/js/55.1423d900.js",
    "revision": "4505f838271641ded6f492418ebb8452"
  },
  {
    "url": "assets/js/56.1986f2ab.js",
    "revision": "c206670f209252bd77f8e22687a61e3c"
  },
  {
    "url": "assets/js/57.9c3c75ad.js",
    "revision": "05f32bf429fdef2d310bf3133e7ea91a"
  },
  {
    "url": "assets/js/58.92aba5e5.js",
    "revision": "4d975fe46821dd940e5a52c1ddd87cb7"
  },
  {
    "url": "assets/js/59.cb218f06.js",
    "revision": "04205819a54833eea256b6266cca00bc"
  },
  {
    "url": "assets/js/6.cb21aba5.js",
    "revision": "88bb6450523bca47d6b0692efe8f36c4"
  },
  {
    "url": "assets/js/60.70a28a47.js",
    "revision": "d20db7b9fb117864bed0627ddb79017b"
  },
  {
    "url": "assets/js/61.0971b8e1.js",
    "revision": "72de8d7ddd6be16f50e2e0d5cd0f7a2c"
  },
  {
    "url": "assets/js/62.b81972da.js",
    "revision": "b93d6f095cd39fc214744dc88eb8fb73"
  },
  {
    "url": "assets/js/63.42e902cd.js",
    "revision": "24b7ef43cb501c754c3330e5cdd17389"
  },
  {
    "url": "assets/js/64.2ac88c95.js",
    "revision": "ff5ace0fe6aff36726e2a1468e30259b"
  },
  {
    "url": "assets/js/65.61b20f57.js",
    "revision": "201111c4c92cb64265e15782611f54a9"
  },
  {
    "url": "assets/js/66.33b598b6.js",
    "revision": "dce71a4848ed0e98b1fd15213b880173"
  },
  {
    "url": "assets/js/67.3e5944c2.js",
    "revision": "24d8c4de28395391f118519791f4c4b7"
  },
  {
    "url": "assets/js/68.70a9dd58.js",
    "revision": "d1e6f3c6bb1279501800d9bd8e045319"
  },
  {
    "url": "assets/js/69.91efb708.js",
    "revision": "8200ea2996943949789606b03b8eb70b"
  },
  {
    "url": "assets/js/7.7f7e0ae3.js",
    "revision": "97400e13536f60d6f387fd79ded90046"
  },
  {
    "url": "assets/js/70.365dbdfa.js",
    "revision": "a7f936d26da4c472adf5ca1cec36539e"
  },
  {
    "url": "assets/js/71.11054915.js",
    "revision": "ea093a6fa129a6f2fb63d6b304a35632"
  },
  {
    "url": "assets/js/72.91d0de25.js",
    "revision": "9657b3ad723acd6e81ff91312c220dc9"
  },
  {
    "url": "assets/js/73.0b5ed016.js",
    "revision": "ca82f595d3d5cbab8a996b663d45088b"
  },
  {
    "url": "assets/js/74.18e5c22e.js",
    "revision": "11b843595ef5a3fc0b7c2b338fa2846c"
  },
  {
    "url": "assets/js/75.c2562415.js",
    "revision": "df877cc75ebb59200f552cf042c68df0"
  },
  {
    "url": "assets/js/76.feb91249.js",
    "revision": "1efa4eecccdf66a9e65291e17080c0fe"
  },
  {
    "url": "assets/js/77.7199a153.js",
    "revision": "2087e89ed1f5184dbf4ff6d639ee0b7a"
  },
  {
    "url": "assets/js/78.5d4434b2.js",
    "revision": "b82f102074a10beeb34632e65b8b398b"
  },
  {
    "url": "assets/js/79.e5f40e76.js",
    "revision": "5fa02bfdd6f5d362affe37da4fde3095"
  },
  {
    "url": "assets/js/8.061e94be.js",
    "revision": "172ea90f4967359db6df41cd12fcc679"
  },
  {
    "url": "assets/js/80.6653ebfc.js",
    "revision": "cb448910e2765775c9d5d0e157b99b99"
  },
  {
    "url": "assets/js/81.4a2df373.js",
    "revision": "753e7701087dab90b047a403c322a371"
  },
  {
    "url": "assets/js/82.2b463201.js",
    "revision": "c58228684d37dc99dea69204079e1487"
  },
  {
    "url": "assets/js/83.84aab8fe.js",
    "revision": "5759a387a644b0d693a60ce5f3b50815"
  },
  {
    "url": "assets/js/84.f5e76788.js",
    "revision": "b629e3f468a82fe7a6fa4e96b9b7c7bf"
  },
  {
    "url": "assets/js/85.70f7e64b.js",
    "revision": "6507de04e195fc0374f09d70acda9830"
  },
  {
    "url": "assets/js/86.4576d39a.js",
    "revision": "72296abf08d0bdad991fd4e274b4cab8"
  },
  {
    "url": "assets/js/87.ee226959.js",
    "revision": "88163309aefe80082dd6a078ef9ef260"
  },
  {
    "url": "assets/js/88.91abe8e3.js",
    "revision": "c14e2e4cf1940feadd93e55cbeb79961"
  },
  {
    "url": "assets/js/89.474446eb.js",
    "revision": "8b7af634ed9d3a2598ef19e6b42d5c66"
  },
  {
    "url": "assets/js/9.4fe6c956.js",
    "revision": "ac16e7a5f8b9f78718a780d8390b708c"
  },
  {
    "url": "assets/js/90.a25c9e85.js",
    "revision": "12ad66279b4e870966a68a61526c4f75"
  },
  {
    "url": "assets/js/91.e225d499.js",
    "revision": "31559d9e93e08d339bb76a1d3cb3faa3"
  },
  {
    "url": "assets/js/app.c5f6f624.js",
    "revision": "85beeb6ed153f134bc0a67bd911be79a"
  },
  {
    "url": "assets/js/vendors~notification.281d1534.js",
    "revision": "f5001273ee61423fb0df7537229bdfad"
  },
  {
    "url": "i18n/index.html",
    "revision": "18596bb9c7dde43f6123808f33a229cb"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "a757d91de117f08c395d628acd039e4b"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "734ce8da95d258b072aa1b9420e85b6c"
  },
  {
    "url": "tutorial/index.html",
    "revision": "dbd1fcdcccac948f5575e8acdfe20679"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "3d7edfbc444a63b50c628a2e1f3164e6"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "9772badc81903749e25910df523f81a6"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "3acf016a694fb3833902c75adaeaec30"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "5c94583e6b4eeb70239e63108a2fcb2a"
  },
  {
    "url": "zh/api/index.html",
    "revision": "4de10d2fd21be9ca145d4a629f1e6fb1"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "0706d38e3aa84cfdf881d061b076bb72"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "9a68c561f3c982aa8c4631d5123df5b8"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "ede1c9fa9c5af896fd4a51bdef47668f"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "581476b93cde6f1718342a82f3b68e9f"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "0b53c8e6607d159ad42feede8691057b"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "3c272867bc443ea9a1d2740259a9b9b4"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "02f123856956642485b4071733fff6ef"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "1b77f952380d3d51eba37d186f3dbd8d"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "21c6aaaff3b4e93cb8eeb3cdeb98d606"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "896d1322ea81736072fa2a648c168ed7"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "12d19c00b812b567734c63b086e864eb"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "ec90f27745ed489784c964473ecc0ae2"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "99534f48c4422e6657d1b425b7d3e580"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "8e0f26e551761870a8056354898b5afe"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "59e184a2f03b259f326a1ab759a97c8e"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "89941b1c41645f7987630f95ffe3a846"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "451b6886e3ed78d60e1c3421fd248cc6"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "62f90a1bead971fd6519fca970ef36c5"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "6ce302391a6d00fc27f69503b9538e44"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "6e89151b9516cb48cd734316b6222fd3"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "0181cd581f31422f69e761c032b8f37d"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "0f33b3208277b5226df8d9baea3b8b25"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "0a61b9603b8a49c8b1ed6453961c5a33"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "76b55322357e10daabc4269c111d3490"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "42aba6156b3c49d1d3dc1d6791a152e1"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "41fbb766e7bd99949470eacff950833b"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "976b5dd53fb4cdcecf96bc7c6aa6f074"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "968d54c66b1b2d911af4c871c9f80298"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "2853a80e7afa6608b77ce968c41468af"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "16b046a10c030ced0ab92bcffa3c3803"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "8900b9345452f2951dbbfc1d0c3741d6"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "b1f1d801f4a93a62b647c22cbc9bbe0e"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "45f1fcea8205c32a7a11f56fad6e541e"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "3b8437e36f32b5a2979673e015b204cc"
  },
  {
    "url": "zh/index.html",
    "revision": "2d6d4af4dcacf3acafffb7e4c88319be"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "efcdb021c4ded57d774c779b9b70fbca"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "2585bfc5484c405f24b0ae1b2985a9f0"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "db382807a8d90f9e1dd3b794e60a65d7"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "44867b4bf2514616da1e550d6518e205"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "27067dd9b0c98217aaa168edf45519b4"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "fc4f3705572cca6fa65a3ed9faf7de75"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
