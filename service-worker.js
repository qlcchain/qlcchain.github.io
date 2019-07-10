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
    "revision": "9a06fcefcfe4b7b5b9c63255321c853a"
  },
  {
    "url": "api/index.html",
    "revision": "1f2ace80118e886be7311bacf6480e83"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "412a8e972c518dbc24a4897d0c709c8e"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "a040539ebeb34669320bccc757b92b2f"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "f7d4d13145faffe0371470cee1262a15"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "98b45e60d3921040de28a9bdaae8796f"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "2e212c1a905eb9bceaef0b1fe5046564"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "eec25a688faa64d3c3c8c75011aa5b74"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "d6eab1343e411eb65e0b51672fe20285"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "3cc119d2db135cef4de260ff383eb17e"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "bde8cdc62978848c0bbf108fee169255"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "8e940f3dd3ab0ba84c888cf44add0938"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "f82836b5d3acdd8a08d28d885a652efa"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "c16f19e2f5526bd28038e824a3a9cadd"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "77208ea9b08326c6872ebe2896b80c05"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "ef8538953593c9c523bff31e96596ad9"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "95f638d66903179af21c1295cc01a634"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "7789c38deb38e06e150440769ce1eed4"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "1ab48409811a28c772a51932cd761811"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "54806cb82cc793893b45170e20230f08"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "9679a613fcbb096723533871b8b2ffc8"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "67448029596043d07b3c287978e5a749"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "9f31efe295d509fb8434b8753c03a288"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "9adf74026a94747f00bbc588cfae337b"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "2c18de8234e4f06a8335a7444a585c5f"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "728d78d16350eb4f996550c48dc604fd"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "0f4606d69f290c120bef322ff5bd893d"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "ea8d8e211667661f401b06728ad25fdd"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "825cf72c60bfa733f2d3e36cb7125f2d"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "5225869ee6bb9df71edc16eb54544696"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "823729302810cb321e41ff3209453907"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "68e3fa34783b78fb7e1c159478da01a3"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "e8c33b1e9f5101f4bf3a46ed34146333"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "57ca83da65378daac2ba585b2db93eae"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "a4c01d26c87305565529fe5f33aa189d"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "45eb49e6049af51a5ea1b12bba3e7b5c"
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
    "url": "assets/js/34.ba695ab0.js",
    "revision": "2d18b26f44b06d85d24e431854da672b"
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
    "url": "assets/js/38.4f1d1910.js",
    "revision": "649f87456117202cd4154fc169d9fb28"
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
    "url": "assets/js/51.d4cbe2ea.js",
    "revision": "b7a1e63c89d23b8e28cb59126aefb520"
  },
  {
    "url": "assets/js/52.da8f03fa.js",
    "revision": "e0b3f98bfbd437eaef77ff60d73f22f5"
  },
  {
    "url": "assets/js/53.bde181fb.js",
    "revision": "71f469b4593e44d2b5551b8a9879de52"
  },
  {
    "url": "assets/js/54.c1d80cd6.js",
    "revision": "a6066c390bd9cd44387760b82812b453"
  },
  {
    "url": "assets/js/55.0322d1ef.js",
    "revision": "813609dd99bbdb54a10f9c7d6e2e38cc"
  },
  {
    "url": "assets/js/56.ed3339c1.js",
    "revision": "219f328d2edb96ecc0d3ca9bd1d0de5e"
  },
  {
    "url": "assets/js/57.044292d7.js",
    "revision": "3a9db6d96264bf7235cd04092da7c7a0"
  },
  {
    "url": "assets/js/58.828f1d1a.js",
    "revision": "2c5b99de4dd3efd943e86225e7fe5eb2"
  },
  {
    "url": "assets/js/59.0a76fa9d.js",
    "revision": "55e72ba553711d306e9617bc9d07c707"
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
    "url": "assets/js/61.261af1a7.js",
    "revision": "93e9f1a14f061599f2dde22cfb9d7928"
  },
  {
    "url": "assets/js/62.49258fe4.js",
    "revision": "beabc87e5f48885ad19fbba12da52d49"
  },
  {
    "url": "assets/js/63.11b45931.js",
    "revision": "33c320f44fe429ebe8d0c977cba54451"
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
    "url": "assets/js/75.c2562415.js",
    "revision": "df877cc75ebb59200f552cf042c68df0"
  },
  {
    "url": "assets/js/76.47b8c311.js",
    "revision": "7c459fc0f47dee8dea61f8dc319ec607"
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
    "url": "assets/js/8.061e94be.js",
    "revision": "172ea90f4967359db6df41cd12fcc679"
  },
  {
    "url": "assets/js/80.6653ebfc.js",
    "revision": "cb448910e2765775c9d5d0e157b99b99"
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
    "url": "assets/js/app.ab5812b2.js",
    "revision": "ff4235b57cbed06c1d584cc78ad19dbe"
  },
  {
    "url": "assets/js/vendors~notification.281d1534.js",
    "revision": "f5001273ee61423fb0df7537229bdfad"
  },
  {
    "url": "i18n/index.html",
    "revision": "70fef00fd1acc2e0a0e322178e3b80b2"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "c3ea7671840cb8b28fb2ef2b07fabfd5"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "cddb5fac9d9bc7152bdd11e66137d27f"
  },
  {
    "url": "tutorial/index.html",
    "revision": "6b6d1255db8e64b4fa7eade71efb8473"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "6bda92a17280ae70cb44f67105b2cd04"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "264317fcb3fe984fc74c9471549f4c22"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "ef10132c0e94c748b54e5a571a12c19a"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "21e58875a9954277567284ca6171a7f2"
  },
  {
    "url": "zh/api/index.html",
    "revision": "75439a43b664e7599e02368a170c3ebd"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "792517fdf88c3904f197f971d85eaf91"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "9d42305e4b9807cf060393585cc8a38d"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "9629a88b2c05075ec54423a0c22d5b8d"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "8dd70678f13584cf392f39ae04fcaa6a"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "4cbc8370ca27b2182b9e6c14773b61d9"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "b8ff89d66da9885ef3d80b9af3ca329b"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "dcea3ae3a0730337802b60bb74e7a76b"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "d0e2a24934d24742fdd5a80d9d009055"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "b4ef5fa721a6522459e5913a3fc7675d"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "d64bdcdf3f5cee00c741a8de2d416b36"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "b97c20707d651cc1c0ae95faf1fe50b8"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "610f09e85e801afe6f54807971abf072"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "c6cfdad07953facd574296f309efbdce"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "e2cffcf07f950768d6bdb6a25d4645f7"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "0d29fc9273714485d73097d007c04b56"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "50758af252f36361d3639be78b71ab73"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "6c38d914709dafda2c9947029883a67a"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "23feef3e527a2ec5e4283a9c12566fc7"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "35da2a73b7d08f98639283188734a293"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "398a7cd004c3f8b20d29282e8503d507"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "5d6aebfa27953713ac0e0991e31b71b8"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "4a50f873dea12b52fbfa30a1264aa779"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "5c80b62f55ee6fc7848b8fe21cca837d"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "558c31c098413061a4329f00879c8c38"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "7a6c3eda3664ad95028293c6e7fe7dea"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "50d677f0032016394b60a2f3c3ddd7a1"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "9da606783c8034cacc020939cfdec9dd"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "4bde1531d224ee88fcf5077df1a5cde2"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "4c82755186e55852749c4ffd55e51412"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "a1fe751ee50b84f43707dc9a099251e0"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "50fe9a73ecc562075f268ea876943df8"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "610c584eb85bcabb3c243d6f667035d7"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "52f23554e3ff70eef5eeea0cc685d0b6"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "64e2c590da17200c70f6aeb3b876cbe1"
  },
  {
    "url": "zh/index.html",
    "revision": "da6752da1fb0426be8afde8a91585ffb"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "cba45326575a38e2a3b4d245ab33009e"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "342a2cb0f81acada190a8bf6dd375581"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "a008d1c44a58d2ea507597a10c1a9896"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "69a2f5d5674f2a3f6deba1f3c4a0b9f2"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "4f292d9b8db479b182909b7ac97cf87e"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "5542efb83ebb034e9f2e66260ae76fba"
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
