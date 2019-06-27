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
    "revision": "e45a3e2421bba798a03df30cd07f1ada"
  },
  {
    "url": "api/index.html",
    "revision": "54dfc4257a978e1edde5c3ea068e9ca2"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "bfdf18a8648f533241c71d076128c9b3"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "82de97c4578d6c18276dbcb2326d3025"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "ec2d7cbc8b59f8c4f06701045ccbd334"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "505e5d206e700352b9440fd165e72b61"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "ae2fd6ca8eb67d730c6d875f24e76fcf"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "c98ead268d55860be08049dda3c658b0"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "2352b6c5893470d8508c065753429935"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "4050dc78a84368bbeca4f32b25660099"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "3a129622e56d82092c4b0e63a953e7f1"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "07a3360fbb66ad7ed10e33f535706396"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "c0c0dda75973643e1d518b93750e5a1e"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "b21abfb1a132aef183f8bfe2ede80e17"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "1423ff9a049109d80bf05291391449e6"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "3e976ccc339399f9365842e68440f975"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "aa922667d43482e5215f9e7a26efa557"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "34aa31695f69d6c0e84fe77753563bac"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "f540aedf9998087dc7981a1bc912f54a"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "afbb20c3e3e6bcfbfe8475424bbe61be"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "b3efcba135b5118e9ced86306e6c3fbd"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "9789cd4e399e74974372ab3614f6f6ee"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "09896d15a7a99a673bfcb497008f59ab"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "11c761cd62778ad76d153ccd67504ec2"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "c28e97bbd4b501b0fc832a6930bc60f5"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "60456b0336561100733400af5142652c"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "431c86ab4c0a86fed5f3ca9346afbe10"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "105026664b1f591333d1953e73bd8ec4"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "75bac66e7a13603f61d51bfbc275f23e"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "3a8b4facb1ee6b843bce9e4b19891af5"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "6796574cf89eed1098a35769e3e21060"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "d19b0872d71700bb4aabb0d3cf648cfc"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "f711a84c3a818014ac5f9c98a582aee9"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "65f9cc915e3568c3a47d6fd3e408d45a"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "d1c7f89c0380b0042fae6a407ba8be57"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "5c39baea7941fc2779dac524242ab7e7"
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
    "url": "assets/js/35.ff44d0bf.js",
    "revision": "150f4311be0ef63883672f5b89165571"
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
    "url": "assets/js/48.b8dfcda0.js",
    "revision": "cc380ee375961ba7153e0029285d223c"
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
    "url": "assets/js/65.03237aac.js",
    "revision": "975268b6719ed09a013e188e59542a11"
  },
  {
    "url": "assets/js/66.cf411bad.js",
    "revision": "39ee88694678ea29c472cf0ac3c15f9b"
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
    "url": "assets/js/75.175ae31a.js",
    "revision": "479e560ff33dbb9ba9cfcdea78079ee5"
  },
  {
    "url": "assets/js/76.feb91249.js",
    "revision": "1efa4eecccdf66a9e65291e17080c0fe"
  },
  {
    "url": "assets/js/77.81224d84.js",
    "revision": "a80b8e618465c0a2aa5172767852a8b8"
  },
  {
    "url": "assets/js/78.5d4434b2.js",
    "revision": "b82f102074a10beeb34632e65b8b398b"
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
    "url": "assets/js/80.84fdcf87.js",
    "revision": "170c58d953f4534e348a226ed74ada33"
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
    "url": "assets/js/86.7341af39.js",
    "revision": "63bd78c1a1acc63ed4f5bf2c34073c4b"
  },
  {
    "url": "assets/js/87.5d12a2de.js",
    "revision": "d1630427aa4e8ee1edbb1c76005dd020"
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
    "url": "assets/js/app.1e7b9323.js",
    "revision": "1faa5fd9d14c56c26f61f45cb16c3ee1"
  },
  {
    "url": "assets/js/vendors~notification.281d1534.js",
    "revision": "f5001273ee61423fb0df7537229bdfad"
  },
  {
    "url": "i18n/index.html",
    "revision": "1e85349684f69ded1f386935e2f17498"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "52b253a922e2786db098304f163c1a76"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "c01bb50f9493d736e81a39dca406da73"
  },
  {
    "url": "tutorial/index.html",
    "revision": "b0b80403452c08c1a2d3353e7ee91857"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "30f2c0690573e01831aff5d135e546b7"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "1cf52eb7842bbc348481ccb00646efa6"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "e8fd0e1cec4a645e4e1d459c2bce4c7d"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "78d37edecb7eab165037e36de80bbf23"
  },
  {
    "url": "zh/api/index.html",
    "revision": "d343a92a77c61bab5d114fc2f92a3736"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "e2e75b6c89dc2456d688348513662bfc"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "e2a3bb25911cb3e616003ecbaff68919"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "5f0e989fc61953b8fbbad30cb1d58765"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "1eef0a36ebf8dc9c0bf407ce39f6e30b"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "23aed9fe420fa3bf7a7335b0fef7a84c"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "cf97c0d2368a387c68041ba10ad0c8a2"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "a16529bf2ebe98319c198dee1268b9a7"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "dc6ffc770f96d5f7bdaa5a75f7c22260"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "041c279517a6046b9943355304e09df5"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "530152ec938925c6c59be13a613e8e4b"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "5ee47f6923eb3e33d6c97ba53549b57b"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "53c590eb3f4a52716a7b023289c8402b"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "093882703ae2a37dfbd875c0472c7008"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "27154188ab290bb160edb4b08734ae7b"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "0a6eb27940968ad1c8fe0102072cc341"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "a30834754c63b3b672609f492ba35000"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "f08be4072c23f44e557802ab3fda0e69"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "6c1e697b2b71b2c736068ea6ae0c1f86"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "3ccf5d869f3fee363bee3b4b0728228a"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "44f28a53bdf5306c121fda9c4251ff6a"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "9119bbb024c7bfebe5b77fee1e41ed2f"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "8da1be27b919bc2063dd7d54afb65b3e"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "091bcdb4ef312599c5f2c56c4fb4091f"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "b05b71710946ed94aa83109427385dea"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "66f616b9a07121f270bcbac568301db7"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "9a15f3251a786831ba2ea31eca0291cd"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "7ccdda89a69c1a27cd380ec41b3761ff"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "7b78f25bd81181e0d186a602610fce02"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "54e86615ce3b5041aa314ffa3712214d"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "af59b092530e3a006ca9ab84b3d37da6"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "060662ecf54e2d47299184247331e6b6"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "27d69a4cf55d50d12f8539fa8ea465f6"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "7bea9a2bad69b55cc5fa137299dab0a6"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "40fa5fb5dfe9f72de33c4440a3f64893"
  },
  {
    "url": "zh/index.html",
    "revision": "84ce07705951c697e25b0cf49398c1a6"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "224fd9f4fa912f9729a296d1882706e3"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "59e5d4f397a1ac6c76894d314a2962a6"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "fc347e2af35ddd4a847e5187db354518"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "fb881e607f6ea90cd6f918883629788d"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "dbc279f5965c079231a795ad8b2a9e37"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "3fa0be765813dda4c00b9eadac0c368d"
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
