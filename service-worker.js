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
    "revision": "7a3280105c41cd8b5e062683c161767b"
  },
  {
    "url": "api/index.html",
    "revision": "982a831747f7ef2cca22149829297a52"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "e9ee34ed7fadca90516a5606be5093f4"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "6c5f6ccf5a53057f723c5b858c8ae6fd"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "b58bd069a560b035631764d2dc2b040b"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "6536fbbd4858e9ac06ae5599d0bcbbd6"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "c27343dcb825e5cc21c849557108a472"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "dab8b3b1e2a4a6873e9cf0c2f948135e"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "3a1ea04077d1c16083a01605dbde2214"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "f5163ae5837696f884daf13511161b7f"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "d597f0b90f684df4a9176380aede2309"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "93a1afe91a0f26b8a5d896e6093896ab"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "95cee7e55bd18c6aef8b84e1aa5d4f70"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "eeaf8d01539869d7a70da90e5e633f16"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "3887cc47e3d0fbb037a129864b3d311d"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "27293892c593a402e2ebd0f466b8f367"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "e3774cda78f9a7ea1df509c550de2ca9"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "36785c890343c308a2827410143d861c"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "bffaf236b63a8ba16f993667492d8394"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "2c0ea13b74c86edac1d9ef1ecff3bf37"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "90710188e41733d8ab400d40111d6ce2"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "1cf7cda527dcb2b3a821de9077122658"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "3965ed579d7aa92c518e890e54a32d7e"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "669500ad85570d25ab011c880379265a"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "18ad739e727fd8385de98fca997d2d69"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "8990a76aa1f8d970061f271476ea3172"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "3fbebc8cd73c8b4c125bd6e9bbbedde2"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "466040f88230d0a38809e91d479ac213"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "9c90166442713dd7624eb29ea99c0013"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "2dfffa1300252ade20b34263fbb7adc9"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "43f70c464921b13669f57517d6827c9c"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "d2df6e39561efdaa272c49cc69cd5ef8"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "497dae6ba8fc703c5dc2df799cd6b775"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "14598880209a24f24c4513fdda362c16"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "44d6dc8b98ae7f9cb393da09dccda74d"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "e9f7e0c40e33f58088cbbc497b8289b0"
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
    "url": "assets/js/30.343fd4e8.js",
    "revision": "1480cd5d6a7cba410ae7402a43d021d0"
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
    "url": "assets/js/33.7fd78b67.js",
    "revision": "44bb111f22b5a9e18f2ff95a846f4638"
  },
  {
    "url": "assets/js/34.d896f21f.js",
    "revision": "95372b000cb51f09ddb91ef3fe7b74bd"
  },
  {
    "url": "assets/js/35.f6627e27.js",
    "revision": "b48f965caeffbacad01c82bb8aa92f5d"
  },
  {
    "url": "assets/js/36.f8c103c9.js",
    "revision": "ab78d439f23a5b3e87b50bbcdb1a545f"
  },
  {
    "url": "assets/js/37.113aff10.js",
    "revision": "c6dc5768400b07b6b61c9bfc96a639d9"
  },
  {
    "url": "assets/js/38.4fe3c600.js",
    "revision": "77ff44bfac27860ccbf00c90178e3a64"
  },
  {
    "url": "assets/js/39.c179877c.js",
    "revision": "533549cae86d153f9aaf052ff036e056"
  },
  {
    "url": "assets/js/4.51079b00.js",
    "revision": "92fb81f2c1006934d587c3e5106d2aae"
  },
  {
    "url": "assets/js/40.61e49cf5.js",
    "revision": "6244afe7bdd28fc53f3bd9ee2d6b2dcd"
  },
  {
    "url": "assets/js/41.0c3eaa17.js",
    "revision": "6e643e8fedb8ebc60c99f51dd384121e"
  },
  {
    "url": "assets/js/42.e22cbed9.js",
    "revision": "8a39b58358582a2c6b413b21217427ba"
  },
  {
    "url": "assets/js/43.91841ae4.js",
    "revision": "7ea31507fc5a26ae92bcc08122cd1579"
  },
  {
    "url": "assets/js/44.e537ccdc.js",
    "revision": "3533ff48f3233231099594af44fe795d"
  },
  {
    "url": "assets/js/45.a86fc38e.js",
    "revision": "b84075cdc0db2db0912550b7de77e5ae"
  },
  {
    "url": "assets/js/46.ee3bddf5.js",
    "revision": "6e6de4b4487042f10e33777ac6be7e7d"
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
    "url": "assets/js/56.1986f2ab.js",
    "revision": "c206670f209252bd77f8e22687a61e3c"
  },
  {
    "url": "assets/js/57.044292d7.js",
    "revision": "3a9db6d96264bf7235cd04092da7c7a0"
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
    "url": "assets/js/7.f39d0277.js",
    "revision": "dcdd739a1b2fc4264a4123a0981123bc"
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
    "url": "assets/js/72.164a16a3.js",
    "revision": "27ef36bc43c4062a0e01bdda1da2273f"
  },
  {
    "url": "assets/js/73.96b27cdb.js",
    "revision": "ae7dc467d9339a93915dcd5e9329f302"
  },
  {
    "url": "assets/js/74.a86907fe.js",
    "revision": "b220421e4e2c0fcf164da629a43dd3fb"
  },
  {
    "url": "assets/js/75.040851e8.js",
    "revision": "bf1b6699a42d1f5e96291c8e0e5fe713"
  },
  {
    "url": "assets/js/76.11730d67.js",
    "revision": "236b84bf691658c6ac9cf5bee1d100a0"
  },
  {
    "url": "assets/js/77.7199a153.js",
    "revision": "2087e89ed1f5184dbf4ff6d639ee0b7a"
  },
  {
    "url": "assets/js/78.7fed2e84.js",
    "revision": "8da31927679757b2a0fb08c074a12e36"
  },
  {
    "url": "assets/js/79.e5f40e76.js",
    "revision": "5fa02bfdd6f5d362affe37da4fde3095"
  },
  {
    "url": "assets/js/8.1fb6efee.js",
    "revision": "e119325f2cea6a26096392d3ac3d4940"
  },
  {
    "url": "assets/js/80.a8ad9470.js",
    "revision": "2c25edd9eba8d280a48776bae31ce8e0"
  },
  {
    "url": "assets/js/81.41d32b18.js",
    "revision": "903ef554b10f91f19b623c4e9763aebe"
  },
  {
    "url": "assets/js/82.4671acfb.js",
    "revision": "ce6f0cd08241e1d793c2ab12bb168cb6"
  },
  {
    "url": "assets/js/83.b093d54b.js",
    "revision": "9c1efe95e22d155cdef483cbf3bbd73e"
  },
  {
    "url": "assets/js/84.4560cfff.js",
    "revision": "bafd22f07f45f2315b54c7e48b3d7ae9"
  },
  {
    "url": "assets/js/85.0f507e95.js",
    "revision": "fa9bb19dbc87f4cf582946439960d0c6"
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
    "url": "assets/js/app.ac14efe7.js",
    "revision": "ffe27146a37b45a4ad1bf80034d78a20"
  },
  {
    "url": "assets/js/vendors~notification.281d1534.js",
    "revision": "f5001273ee61423fb0df7537229bdfad"
  },
  {
    "url": "i18n/index.html",
    "revision": "898d411b928d621467971b0fe98ed714"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "283f4cdf9db9402f249bd8735ba080a0"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "b885040ca82360ff5de9e8a6209d9982"
  },
  {
    "url": "tutorial/index.html",
    "revision": "20b5382b69d6eef9c8c1b02eb45cbaa2"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "5d2169f81a1edf3cac4e65fcfc002eee"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "2260f8dcd9a7a61c958bd71e633cad93"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "35b53ea6db440e7ab1781e1ec45a4030"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "fa2df6cdab37edcda320767caddae953"
  },
  {
    "url": "zh/api/index.html",
    "revision": "db2606e9c8899ef7b7456c0336e8c323"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "a5c43299c863a7f220dc738414b18452"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "8a2f1fa69aa20761d2625c19b83c7b97"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "0443627b53f1498f21d95208b4f4bae1"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "eb6307e44aaf85c916ba08435f1eb041"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "046027d848ff27faf03b99e9c55b461c"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "4ae5aa45772161c7ae88e2286682dd5c"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "b7568c01e7f3f62a46776e6fe0ab77a1"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "a0c9ae33ae8d2bd3452576ae50803de7"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "87be3fc0f21225763b8826b76a2fbe95"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "115c08a9e44418430647bc4f5704e504"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "ed83fbd379ab3e7c0d28204e0eba1069"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "d9cfb076a174a9dc3da383ed387b2314"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "4b6691f4b0836b188075298c3bab1682"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "4a2b303484030b957c6061e980376a97"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "d8022a45a1333f0a8a6e2170e3dff6b3"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "dc17cabaab4eddc08db89af064ec5b97"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "a135cbc7d5e54b0aedcdbf54fda7774a"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "23481e28a07913faa8dc3e8c87a038be"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "e73bc28825c9136248b819d9981edc1c"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "c5f33f9836e54e700b8a97a3058261e1"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "58a62a1a323acf2aed484097a44e3eba"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "7b85057a374cd79a55376b32dad7bccb"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "8c46ef4d7a7eae65b69af467cb278af5"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "781ed5f915a3eb21374b7d560d3c0a4b"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "0813c4c366699748e0b5f186ab551435"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "58a89d8f6daafa0013ed6bc44b5493b6"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "716cc0b091ce2b8a48786c2036be2f05"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "bbe0c913555e1ff3868d9a910d90da8e"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "309c83767c7d7ab6c6f3eab3bf6dec9e"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "0e09650955b15ad7c276f9ea4648fc36"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "494e45d195b837fbd4eaf1f560c18e13"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "cf532b49089fa4cd1ddc18cbc686170b"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "661ee9065444eb2a6d155635adb905dc"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "b11aaccb6b0fbacb590db7d59f3419b7"
  },
  {
    "url": "zh/index.html",
    "revision": "6aa69f83bedac6f59e837dc8cbd9127c"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "415e7748b2f0fb0220d573c3f4474082"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "a859d8d08fd92c58041ff17ce1430273"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "5a49e1321be96a6530d4fa85306aa329"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "f56a8001f649f1795962fc5240b2a71e"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "0b3bc31a9646e473d99bfb64da4cd73d"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "7b86eb0457742bf523efaba7f73835e2"
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
