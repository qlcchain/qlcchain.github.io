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
    "revision": "e40ba69fd1dfdd5fd09bed66a20d4dfa"
  },
  {
    "url": "api/index.html",
    "revision": "7b78923739bbac0131af91997c82f08c"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "a579e0065b4080b43aea6a4b4aa124f4"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "56846ecb3d234f3dcd1d795e360a3725"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "6ef83c2572b47fd45c4bc64628f8f7b9"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "7027713a7658a31f928d5bfa4f1eecfe"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "4fa55d8581b8f826e3fdd559be4a0744"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "b73fe041efc49657ad7ea799dfd2f621"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "e32cc555365641ebec1b9f158ae2ed60"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "329e48b4ec5f330d310e6e95482fedc1"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "969a7da591ae6728c794d01da6d57481"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "e4c3e42e0e8dac23ea07f344ced29770"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "d1998d01a47b500f1e452e08d561e000"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "441988cc3c8977d4d857860f634c1331"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "da3a138cc901ece75170319f3eff0d1b"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "b15008b285bf61a1ebeec8a5484f3e24"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "5ef28d04beb32890a340463712eb9377"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "067f8ac22835459197b059cffa430c5c"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "cd33fa25f1c9bdcf672c38714b0a5df2"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "359087c4c1f9cb3d811ffec1cd98b2ea"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "a8559c8a49f874a2038fe0995db247dc"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "eeda16d4bc35bbbe1b353cd807c4c204"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "f9787c9b0a80e19e48a80cc7b417fa14"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "94347c96d6a559519fb9a78afde3d24f"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "8451bb0cd0a3ca802f5015d9c6d42886"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "69cbbbc39a735488b06c87b569902cc4"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "8162924009d6db861344e652042cd684"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "12b1cc55e0c5fda998c264bedbfbcde3"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "1460dc2ce18b91b606344702db84ffc8"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "7285d630332967183610cda471b632a4"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "96d12906635d71aa2827c236c8923a11"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "3b67bead27a2b64accb948fc22aa8949"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "cf3c0c8ce8567112994c8e76e31673e2"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "404f0a399370b2410b9f90823b5834ce"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "2fff94284a881bae99007855a4ca2b60"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "284903cc8f744c2f874e32dc2277b74d"
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
    "url": "assets/js/33.d84e33c1.js",
    "revision": "af56c61feee83f9f1d388ba4fccf4648"
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
    "url": "assets/js/44.d0ddaaa7.js",
    "revision": "ab98ea1ed0b3109ba2434255ec76455f"
  },
  {
    "url": "assets/js/45.db1819ba.js",
    "revision": "3c79013ab4437849c575887b2cdb4f09"
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
    "url": "assets/js/51.39795dcc.js",
    "revision": "b697cb84430c809e9eee82daa1ba4c2d"
  },
  {
    "url": "assets/js/52.da8f03fa.js",
    "revision": "e0b3f98bfbd437eaef77ff60d73f22f5"
  },
  {
    "url": "assets/js/53.ed2004d7.js",
    "revision": "266c686e2eb3cda0964f90e63cbdef8c"
  },
  {
    "url": "assets/js/54.7e27b313.js",
    "revision": "5f26a9e6e51723b93c89f53486f1c7d0"
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
    "url": "assets/js/64.f937325f.js",
    "revision": "2f5a5569633b4d62a49b6461fe809df2"
  },
  {
    "url": "assets/js/65.1d1a826b.js",
    "revision": "3e43068b94df9c621d527ab1bcb38c77"
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
    "url": "assets/js/72.6f09569d.js",
    "revision": "a9132efff3f2bce5100f0932e90938be"
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
    "url": "assets/js/75.c2562415.js",
    "revision": "df877cc75ebb59200f552cf042c68df0"
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
    "url": "assets/js/79.56159c36.js",
    "revision": "8572c36fb866138596c33f6d3cc1ab22"
  },
  {
    "url": "assets/js/8.061e94be.js",
    "revision": "172ea90f4967359db6df41cd12fcc679"
  },
  {
    "url": "assets/js/80.a9d09c20.js",
    "revision": "672d3b9c6ca3633c72e9f5fff5181c42"
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
    "url": "assets/js/app.a0c151a6.js",
    "revision": "b0b21e912cbd619cbbf9ebce452aa647"
  },
  {
    "url": "assets/js/vendors~notification.281d1534.js",
    "revision": "f5001273ee61423fb0df7537229bdfad"
  },
  {
    "url": "i18n/index.html",
    "revision": "2aa81ca6dafec13545bf6740908e1d40"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "1f0142b5aeb704c7f8e68676c367732b"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "bc4f97b27a8128fd7b93a4d40a33e92a"
  },
  {
    "url": "tutorial/index.html",
    "revision": "8e4e72c983c54130d749dcf80eb56c71"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "39177373c51f574f7ca9e1faf5698c49"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "d119186ca03817bbf2209e78692fd082"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "bf8793fd2cfa9ed0b919a5475a518710"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "8f54cb8ccb58d22b93f47932300966e1"
  },
  {
    "url": "zh/api/index.html",
    "revision": "1ef5921d0ad84cf51dc2ba697a3fca0c"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "fc953a36ba0c5b017e747b4f4f39bf90"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "d02f942af259887e8cc5196669ee1299"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "5fcbc2281764dc3e114015aef24c8145"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "6c11d4396c696700baf80ee38e2bac36"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "7e0aa3947f76a613b908656d30c1d9c7"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "64aaa3768606e2bea3eccf5080b660b6"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "0a6c4165be7c34968b66f6fbfde69bb8"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "dd69a68cce923743eb3aae85c1f93267"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "8a85bfe179194146b3e29562a50018c8"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "9a0ae8e5a34f3191844c8a406af7bbac"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "4ed06db018e0f3c09febb6fb3b297942"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "b442b755feed07890b0ce65bbe3037a8"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "d8c7578468beced84daab3b2976a1bdf"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "c210dbabd62a58a952849122e60418a2"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "cbaa0f53751c7d39841bd548d2bb2aa9"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "6166d95ed70d88d140b1547f3d4690ac"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "eda1a55bf88a62eecd77e726ebf8bfbe"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "667f0ec3d9fbf5edc0445e8b3621be4c"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "d360bd9af4dd870fd1930cd440485d39"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "fbe2fcac13310549126901dbfedf66b8"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "e11ab8a6441616b4000bfc2c300c4baf"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "a898f29375a0c7297bf1fea82996ba6a"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "014b8ea29f2a82ba751d13957a4b13d0"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "28541ec6a4c18a0efbb3e0a31b22e7df"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "0fc5fa688c9a2f873d1d0ada6dd71ad8"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "7d5dffac3bb7b389ff9c6733f6ed73f5"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "aadabe15016d99a920ab76f356f27ba9"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "ee32de04e281fa1e2765caa28dd1f4ac"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "32c8774e40ac43e5a3d4cfec8cb61409"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "15f4b948f18679dd839bc7ebb65a02c9"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "ecbdc5d700936998a3b46ef4e8fad04d"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "f2a7d09e3b8be03b59593e3beaca346d"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "49a335f06b61b24233c894138239e69e"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "2cf5fce92f3194141884624d6008f250"
  },
  {
    "url": "zh/index.html",
    "revision": "1695436563c31c53cd26cff86ab125b6"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "55be3a43c69630b9296ad0cccd4ba24f"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "595077919dc3d39d3ee30c8889432082"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "cf52db97a3c4393e8c2c14472326927f"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "be05d4c789d0db5116d5a679539eacfb"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "e4aa24cdfbf3824384f621366884c916"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "9fcaf1b7a1024f9dc3b101dd6340febe"
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
