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
    "revision": "1bf38a4a9af6611ec8558c59ae343d8e"
  },
  {
    "url": "api/index.html",
    "revision": "6988b1145ab6197ea6cf0d756f2c757f"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "43a88c7ad73389bfb3a0068b08ac9a53"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "029bac0aedd70225e0a9294a4ffc8380"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "17fdef13533ace37403c26d4d58c28f6"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "0df98c706cca838213e972f04e03329a"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "cd5f948319f0e1446b3cdd9dc14a78c7"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "93333ae8921579104ffa0ddf3f91d6ba"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "46897af9314ccdae802b69c6a088c85e"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "a8bf6f211338c3d805ef405f430dac2c"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "1abc3f4f0f4f48ee24e18afb6b504345"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "38034a111c2d0395be170dadb8c0b806"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "9b23f965ee809a6813d18680303604fa"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "3d36a94545dc2deac2ce23bd5acfc610"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "74aeeb73eb1752a674072a0b0f6c257b"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "fdf65e0c9ad53deb9f8e77f0b2035c1c"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "2588982a081a43de723048a6646bb51c"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "13d514b9170e4ea047e71723cad50c9e"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "aa8ced956bcdfceb1df40d1858279629"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "ac35a7eb6743b38d2878423cbe1c01c3"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "a61a1b110d074f332a1b9d2920f0c99b"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "69b1c33bb69cf3195a9d635b8d87689a"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "c2b2d2a7b701f18a4092850f27705622"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "37eb2510ea95d7a3d53f5f5cdc4c5c21"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "370fc87dbc2627623ec5e422231d8ffa"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "1dc93db134133c7fcba1a392006c0743"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "e65637a54b3270a5c3f856a5055f7f93"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "665a6f0558ee439d9c8bc245872d0734"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "5d270d219f352b4c67cb16e57656390a"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "f3615aef99b79e8a4a4e2712e754e78a"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "ec7735325485003a323df61a6b6b4f63"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "421fc49626d6b1cfad251f4f5e92bc2b"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "8b8862f59474d87e12aaa1e272fe28aa"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "4d496e66fe997f4a6178f4b58542f219"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "97d3cb91df03982c20554a76e72c96f2"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "887b8012c319bfc4027e3c03270a0c6d"
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
    "url": "assets/js/23.d06b2e18.js",
    "revision": "963c3b48702fd1f308ac2b4cc6a5e511"
  },
  {
    "url": "assets/js/24.131494a7.js",
    "revision": "f517d959a56287f3ec5147e3f8009b4c"
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
    "url": "assets/js/30.0a51f530.js",
    "revision": "4b1169e9e83c9ddd421cd673e52d09e7"
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
    "url": "assets/js/33.eed41cce.js",
    "revision": "d2ba43d8201918deaf42a28ff0741fd1"
  },
  {
    "url": "assets/js/34.0138e10b.js",
    "revision": "536a3707cbddff923c299379003b0f17"
  },
  {
    "url": "assets/js/35.2afd0046.js",
    "revision": "a042425ab0f371c9c377be93803f18cb"
  },
  {
    "url": "assets/js/36.914e5f3d.js",
    "revision": "e8cce7d654702c446c95d50e81b471e3"
  },
  {
    "url": "assets/js/37.a87f5a6f.js",
    "revision": "77c3dadf50b4030a7f5604ed914d4a1b"
  },
  {
    "url": "assets/js/38.5945a74e.js",
    "revision": "ed85ac6c7c2eb54a78e19b9374566048"
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
    "url": "assets/js/43.3567b491.js",
    "revision": "d3ba50f86ea337b120e29e87c88191e6"
  },
  {
    "url": "assets/js/44.d0ddaaa7.js",
    "revision": "ab98ea1ed0b3109ba2434255ec76455f"
  },
  {
    "url": "assets/js/45.db1819ba.js",
    "revision": "3c79013ab4437849c575887b2cdb4f09"
  },
  {
    "url": "assets/js/46.b561e095.js",
    "revision": "862de67215c9567caa38006afc8882ef"
  },
  {
    "url": "assets/js/47.38c6ff8f.js",
    "revision": "306fe93c3450f42f01508b377047e1a0"
  },
  {
    "url": "assets/js/48.7a6d324c.js",
    "revision": "68c65604b4b30d3224c110c393ce3c67"
  },
  {
    "url": "assets/js/49.7cb54a65.js",
    "revision": "8edba4d4af42a67b64044869622e8512"
  },
  {
    "url": "assets/js/5.16bd38b7.js",
    "revision": "875d2cfa4caa73ccafe1b71e47fd8954"
  },
  {
    "url": "assets/js/50.fe8d901c.js",
    "revision": "540711019371a8d0d157867a977d8a59"
  },
  {
    "url": "assets/js/51.d4cbe2ea.js",
    "revision": "b7a1e63c89d23b8e28cb59126aefb520"
  },
  {
    "url": "assets/js/52.da7fb19b.js",
    "revision": "c5e16561525b2763eb0c5a4c5f5d5ae7"
  },
  {
    "url": "assets/js/53.cdc9f1fc.js",
    "revision": "84744e0e81c0da941e278c1d1748f384"
  },
  {
    "url": "assets/js/54.24649685.js",
    "revision": "e6c3950204cca1209b4b8a938400bc5f"
  },
  {
    "url": "assets/js/55.ae55eca8.js",
    "revision": "bd76a3bfdb25319c7f2d1263ada5c8b5"
  },
  {
    "url": "assets/js/56.994ab67b.js",
    "revision": "b8bc9c1e1c02d87718c01c992671c5ef"
  },
  {
    "url": "assets/js/57.1362fb49.js",
    "revision": "5e84c42d139a9ca86cd1eff1636ddcc2"
  },
  {
    "url": "assets/js/58.94cd5f09.js",
    "revision": "5cbcebf1ecfe431b36eca0463b1fcaaf"
  },
  {
    "url": "assets/js/59.5f1e46fc.js",
    "revision": "290f167a30c11456dd51dead06e2e749"
  },
  {
    "url": "assets/js/6.cb21aba5.js",
    "revision": "88bb6450523bca47d6b0692efe8f36c4"
  },
  {
    "url": "assets/js/60.1102604c.js",
    "revision": "14bafd6f88de6abe95459c5729060b3a"
  },
  {
    "url": "assets/js/61.e7784309.js",
    "revision": "bc46f93a0515b7b2c9f65584dcc8eac6"
  },
  {
    "url": "assets/js/62.dfce5b64.js",
    "revision": "a6d17a9f64228ed0c289bd32ed51922d"
  },
  {
    "url": "assets/js/63.4f2f288c.js",
    "revision": "5430aba1d0aec26c3f4a1ee3208a44cd"
  },
  {
    "url": "assets/js/64.2ac88c95.js",
    "revision": "ff5ace0fe6aff36726e2a1468e30259b"
  },
  {
    "url": "assets/js/65.1a328b8a.js",
    "revision": "d0f8e9ee010533ce07393d0347227d78"
  },
  {
    "url": "assets/js/66.cf411bad.js",
    "revision": "39ee88694678ea29c472cf0ac3c15f9b"
  },
  {
    "url": "assets/js/67.663789f0.js",
    "revision": "8eaaba5ff609b93eca8a94d5a8bbff2a"
  },
  {
    "url": "assets/js/68.d3fd102b.js",
    "revision": "e384c1429feea830a9924229903bdc64"
  },
  {
    "url": "assets/js/69.03b7a9bb.js",
    "revision": "13ea20bb4b07f4be52d36d4587d518ad"
  },
  {
    "url": "assets/js/7.7f7e0ae3.js",
    "revision": "97400e13536f60d6f387fd79ded90046"
  },
  {
    "url": "assets/js/70.492689df.js",
    "revision": "1649599450765d66838e8269dc52945f"
  },
  {
    "url": "assets/js/71.f283f459.js",
    "revision": "14d7103a35b845be63f6ec5a0353c913"
  },
  {
    "url": "assets/js/72.1b7478db.js",
    "revision": "60366346f88ec0ef07cd4c241a05028f"
  },
  {
    "url": "assets/js/73.d03178f1.js",
    "revision": "7a585b649ab918432a95ba285fc67f84"
  },
  {
    "url": "assets/js/74.a86907fe.js",
    "revision": "b220421e4e2c0fcf164da629a43dd3fb"
  },
  {
    "url": "assets/js/75.175ae31a.js",
    "revision": "479e560ff33dbb9ba9cfcdea78079ee5"
  },
  {
    "url": "assets/js/76.2147530f.js",
    "revision": "e76abf014e3ceadf082e474a0e84cc7a"
  },
  {
    "url": "assets/js/77.158fbfba.js",
    "revision": "86672e9faa5678f56fe70216835824a0"
  },
  {
    "url": "assets/js/78.95c308e6.js",
    "revision": "128a096cd284699112ee09928a896c98"
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
    "url": "assets/js/80.99bf90df.js",
    "revision": "1ea969aa846357283e6709754675d6c3"
  },
  {
    "url": "assets/js/81.1acc57ff.js",
    "revision": "8012259d9e9752375e8fbb2350140fa3"
  },
  {
    "url": "assets/js/82.61c29ab1.js",
    "revision": "de15b24d7f92fe5d85f46abc29ef3b36"
  },
  {
    "url": "assets/js/83.903a3b58.js",
    "revision": "2a77b5c859495584dc17ae8764207e3f"
  },
  {
    "url": "assets/js/84.d4e7c006.js",
    "revision": "8cd84b2e09b40b7054136c2758b5257c"
  },
  {
    "url": "assets/js/85.2bfa02cb.js",
    "revision": "c9ca26e22d54b20ab1e6cbc885909d52"
  },
  {
    "url": "assets/js/86.77a49124.js",
    "revision": "81ffa45da185bb5319f4a30e7e688441"
  },
  {
    "url": "assets/js/87.c732d554.js",
    "revision": "9c38f7e1cdbbe00ec40109a5103481be"
  },
  {
    "url": "assets/js/88.30a59ce3.js",
    "revision": "f2bf536bd5ec6bed7a04b06e39abd270"
  },
  {
    "url": "assets/js/89.3ab9f1ee.js",
    "revision": "0397154b13288078744a8b101981a1b1"
  },
  {
    "url": "assets/js/9.4fe6c956.js",
    "revision": "ac16e7a5f8b9f78718a780d8390b708c"
  },
  {
    "url": "assets/js/90.1fe27620.js",
    "revision": "14af35a246adbdc959bcf56d8cc19751"
  },
  {
    "url": "assets/js/91.e225d499.js",
    "revision": "31559d9e93e08d339bb76a1d3cb3faa3"
  },
  {
    "url": "assets/js/app.5758a520.js",
    "revision": "eb263cba87c03abe433ad1f59125d7d9"
  },
  {
    "url": "assets/js/vendors~notification.281d1534.js",
    "revision": "f5001273ee61423fb0df7537229bdfad"
  },
  {
    "url": "i18n/index.html",
    "revision": "d9805017915c58f6271465a8b3cb2dc0"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "990031d84dfaa6ec62729957e97e9918"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "91a3be69893d502b88939496d070b0d9"
  },
  {
    "url": "tutorial/index.html",
    "revision": "a82aeee1ace9064144fad8d10e567325"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "d68cd41905b8c1b60f9f66a4f98a2fa8"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "7607b0572cdf950d45aedc3f42c51275"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "179ef5860cc46931d7a6e5c65f2cbe6c"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "4f43c15a2c296011c335333e2cf0e249"
  },
  {
    "url": "zh/api/index.html",
    "revision": "6565176ad8fe7f87f89830ac5607a428"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "48732b71976e520c7ff14ce582471ecf"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "e0355cbac1ce6055a2b1319fca66d7fd"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "e88b9d5ae486a28dc8c5c2fbd251eb4f"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "79ce22def746a37d67a940ac3820baad"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "6408efe6330094f64366a5b548b3a057"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "0019a9b7f6c87c8e21149eb82d565646"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "713b42fc6b5078dfe395aedb0f668947"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "d4c4dee6b70a5a6cafa3313f471f2915"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "f8bb8db5869d23ad1cafb890f5e4d466"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "59c718d9cc0642bad2542db3cf3c1f3e"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "32e5c8a59cc6c6351c2b919e24f19f2f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "41f3ddf8e0a3f210449f2e7b8b277dc9"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "de80c9a6734531e678d0ef15a9aefab1"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "b4a31431f8a9afe366014d99b6c9f887"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "b0c84fdd8cd3a91bbc0718c27d37d2db"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "ec5b383a3f6c0dbc5ba9c3c09284b631"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "074df283a805651a77cc7c532b40eeed"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "36eae81548743c35949080e5f91788e2"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "b5ba337c0b28b74aa6fb69fea5d68643"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "e30a0f8a11336a34d0a458810976d25e"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "3776717fe7d92bb591e10c57161fa625"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "489dd4d503d28a827bd3266138153066"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "ea62bf4133a1360ce6a492be5045ee6d"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "807d9d58239a823e42e6c3828b2d2e06"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "f5e355df22de01f9911c1d3cc4db07d3"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "f7472ab34965f641f6708724cd3d6ffb"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "9945dd0ff55f0c88bed4898cd854256d"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "782e63cd812c0f2d2dad6a55749859b1"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "76563ce85bc38a7f83e1fc56c36bba16"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "ae45a51ab74040b1d7e5b6ece04f405d"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "cacf2146fb46d4af39c68ae52c04303d"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "51920d5445d3eee23e8a32f9ae7c3352"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "edc14872dc0067e6b4fa06c4c4d810bb"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "2297313f4b15d1ba3d71563dafad6835"
  },
  {
    "url": "zh/index.html",
    "revision": "975b843fcf32039fd9a7141661307027"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "0e190812d3d791551be8ecf0d65e7b38"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "1e2aca01b8539c9d8e605b78a15badbf"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "a83e068ba4069b4494fd52f5999664de"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "0db954ec20e201b8c1d283eb5a1df3a8"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "27cda2a442c8ac4f908e25ee41116268"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "5a376d9dadc9147b6b2d3379ed885341"
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
