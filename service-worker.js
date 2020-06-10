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
    "revision": "3728dc948a88aa2304461b41332dbd14"
  },
  {
    "url": "api/index.html",
    "revision": "c6ea3fa3fb7175869bfb451a88fa879e"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "1d95961575ae149e64131dc1fd3a0704"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "cd3895694a2f59a1c0314db63f420c49"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "6855e83bd3ec598f34cf01481305ff8b"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "2029d58fde4b7e8dc814362cdc88d65c"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "a807b239d11c2b97493640c497e365b8"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "86009078196cd2f7bf05a621b94b017e"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "f25097c36cc37f524d50d65815539364"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "a7efa90a6e8dbd4b2fad9fa70ca69b6a"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "fd1ce45820cb80ceb4e9cd9ca447c95a"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "41152d548bd977fd2af8dbb5b18a2dfd"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "7ffe504c90481819cba415562cd21b65"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "bc48ce0d8162bce0bb2d047a397a7758"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "88e0e4dcd6e53ca737beffda849769ce"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "95ea3b2bf438d35c81dfb68805850b25"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "f29afaa86a64ecfda83e34e114e8c832"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "13f230b2591991a2f424921cc32c0950"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "b4c2d7c8ef20d1ab34d43ac04e96f079"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "7f81a6c91d25dfac4e7d3ff51d8dca03"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "f7e664b65191d8896468b9164ea12355"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "57ab6c8b12dea06b34bf42b2aba3e935"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "d96d500bed5d7a0c7e781495119e784d"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "227f6e1ebc8d98c4c9e21cf8bd034cee"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "8740d0228c104cdd88513a04aedf36a2"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "69b83a5f6b7dcfa81071dfd9a7f7027a"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "d6c228d35c52e5410f2d5a0575669598"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "aaf183fe1376334d080d537f634f27ac"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "959d002914dbf4cc8bf492748fc4cf4e"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "deeb7dcc3010a82217ac053295dce2d8"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "7bda26fb3470418039eab6ff16e610cb"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "d6172dde664d723d91afeee0cc18c189"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "4e8715d7cb5e847f1f0c16cccf9cdca3"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "a55c0d168c4e30578e8331be66befe3b"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "b73f3f8d222c06d555c2ba57d6dfc324"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "41b3641eff364f1f3874577a71799e30"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "63fa6c937245fb6b44db3e631d439118"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "50af618bdb197f13dd6bfd2787acef2c"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "d019acf58a495c5aa447f996f2cc14bd"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "3bf04591d9746f468b991f86bee065d1"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "e81c294ad87c66e428429992e27c7c06"
  },
  {
    "url": "assets/css/0.styles.6b088026.css",
    "revision": "57b57f7cc36d87816a0e52a4030f5cf9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.114102c3.js",
    "revision": "e52dc0f4926eda51cf49653df1976d4e"
  },
  {
    "url": "assets/js/100.c7bd6fb9.js",
    "revision": "6c134860ec0e3d5a3825b0bf7f237a95"
  },
  {
    "url": "assets/js/101.ff77bc9b.js",
    "revision": "e6040b5ecd9c04b58e5a421071c20739"
  },
  {
    "url": "assets/js/102.df6a35f5.js",
    "revision": "b58338e54174862bd6adbff596ec17a8"
  },
  {
    "url": "assets/js/103.7516c083.js",
    "revision": "7a8001034c8f0844152bbd9ee7ee04d9"
  },
  {
    "url": "assets/js/104.f081bd22.js",
    "revision": "cf018ddf4dafc0cfffded437eea4ef6c"
  },
  {
    "url": "assets/js/105.11654a25.js",
    "revision": "d9bf3ef09dc72d9db111b16910757a36"
  },
  {
    "url": "assets/js/106.62f2d67f.js",
    "revision": "657786d62e4a1341f98a26cfb032b402"
  },
  {
    "url": "assets/js/11.02bed44b.js",
    "revision": "600028eea089dbe73de5c543495e85d7"
  },
  {
    "url": "assets/js/12.e28bc8a6.js",
    "revision": "666d875728aff9d3712fdaad84e258d8"
  },
  {
    "url": "assets/js/13.c5a12190.js",
    "revision": "00bfc9bd1f22f51f53f0ff68c18a641c"
  },
  {
    "url": "assets/js/14.a6365c50.js",
    "revision": "1edfad3570e41642015cd5864e542089"
  },
  {
    "url": "assets/js/15.0137d725.js",
    "revision": "aed65b9e2b068bc9f33a577fd39f2ce2"
  },
  {
    "url": "assets/js/16.9403588e.js",
    "revision": "ff604b8b2803112e52b7addf37ea1c77"
  },
  {
    "url": "assets/js/17.a77ec752.js",
    "revision": "e530835b07937e9f73bf35c472f4d5d5"
  },
  {
    "url": "assets/js/18.fe7d0885.js",
    "revision": "cda72561a0542dd91c0aaf8a96e6c26f"
  },
  {
    "url": "assets/js/19.74124354.js",
    "revision": "725f7286b80baa566f380c5679e58fb4"
  },
  {
    "url": "assets/js/20.1af8cb38.js",
    "revision": "0d318fbc4925748ace39db2fe0a540cc"
  },
  {
    "url": "assets/js/21.04bad662.js",
    "revision": "8537caff4fcf4fe57d35875664825570"
  },
  {
    "url": "assets/js/22.1aa35ab5.js",
    "revision": "a8933d9613c5209003b07b0b6e6c0325"
  },
  {
    "url": "assets/js/23.7bd9fb02.js",
    "revision": "961359ab6517ec5fba1b83fbe836aa39"
  },
  {
    "url": "assets/js/24.299a67ad.js",
    "revision": "82635e1f51f8a0087ce01cee3c87dbe3"
  },
  {
    "url": "assets/js/25.a6cf16ff.js",
    "revision": "47e35c19af041d0d2e3428b04978b92d"
  },
  {
    "url": "assets/js/26.1ae15b54.js",
    "revision": "41698b45e87a68688e21a4931315c535"
  },
  {
    "url": "assets/js/27.aa0a0fd7.js",
    "revision": "cb8f96ede4e9c1435aa4905e47fa146a"
  },
  {
    "url": "assets/js/28.d26eef93.js",
    "revision": "bd2e6991bc295fbfb93b6fa59b0031a2"
  },
  {
    "url": "assets/js/29.d154a021.js",
    "revision": "8eb4b49f9b3621c3765384ef97877152"
  },
  {
    "url": "assets/js/3.4ad67db0.js",
    "revision": "8709f2c6e46cd56ae3670376fd5e7989"
  },
  {
    "url": "assets/js/30.99c1166d.js",
    "revision": "ab42617d4877dc326868f8870b090c60"
  },
  {
    "url": "assets/js/31.4263a224.js",
    "revision": "07b7d6c660858b6ac0ad5d083757e202"
  },
  {
    "url": "assets/js/32.ec5b2ca8.js",
    "revision": "3f90fd0c6d726696fc838431d58523e4"
  },
  {
    "url": "assets/js/33.d8e5edcc.js",
    "revision": "641e496512b5768cd653c2e1e6aecaf5"
  },
  {
    "url": "assets/js/34.70feec37.js",
    "revision": "7d536e385be5ce068d7ede1046714342"
  },
  {
    "url": "assets/js/35.5cb6aa69.js",
    "revision": "9df48618fb9ebceed583ff7af920dcc5"
  },
  {
    "url": "assets/js/36.aeb84a51.js",
    "revision": "b22e6891d76ad1d9276d7dca8a60663b"
  },
  {
    "url": "assets/js/37.105bb57f.js",
    "revision": "795227f2ef42fe1fe1ada3ed451beb30"
  },
  {
    "url": "assets/js/38.196b3f81.js",
    "revision": "1bce4f145a99cbf12920b55b9c351193"
  },
  {
    "url": "assets/js/39.950a845b.js",
    "revision": "d01e6d5b394b1068f6654e54c31af96a"
  },
  {
    "url": "assets/js/4.f827fa98.js",
    "revision": "d3ef007066faf7da502ded68c3baa486"
  },
  {
    "url": "assets/js/40.12c8082a.js",
    "revision": "b2ecf5eb5bfdfb94e986b8db32ebfe7d"
  },
  {
    "url": "assets/js/41.3ba88f3d.js",
    "revision": "c9c58e0c319a06f8ebde066d7a4c436a"
  },
  {
    "url": "assets/js/42.93638dc2.js",
    "revision": "ea23f405ea111b31cddaa171e76c3e0f"
  },
  {
    "url": "assets/js/43.b94ab96a.js",
    "revision": "281bb21e8ccf7bdd69bfbbe40b96713f"
  },
  {
    "url": "assets/js/44.37e1ee29.js",
    "revision": "223861a209a45cf28eaa43c32620f7c3"
  },
  {
    "url": "assets/js/45.b7b3617d.js",
    "revision": "1704021536e2ef3032cc029a01f478d7"
  },
  {
    "url": "assets/js/46.9169cfb7.js",
    "revision": "211d38d6f6c86bf01c0eed21c7eacf82"
  },
  {
    "url": "assets/js/47.b483ad82.js",
    "revision": "5d6463d49211ae039db6daa0ce09dc08"
  },
  {
    "url": "assets/js/48.52ca5a62.js",
    "revision": "aaf8aa3adbe7d0c9cf1bd3471d28a5d1"
  },
  {
    "url": "assets/js/49.6d36c2fb.js",
    "revision": "62e85dc3b0a2286974c5dcb16a87acd3"
  },
  {
    "url": "assets/js/5.1e244e60.js",
    "revision": "86a5e1eb28f5388d33998d08b68e2db2"
  },
  {
    "url": "assets/js/50.5caad485.js",
    "revision": "b81c4c3c328a867838300f15f8f42eb9"
  },
  {
    "url": "assets/js/51.db8d5a9b.js",
    "revision": "3065776314a67b9693c90afb466c9fda"
  },
  {
    "url": "assets/js/52.ec1d1b84.js",
    "revision": "3bcc10aa8084eb5f489fcbd815d11bf1"
  },
  {
    "url": "assets/js/53.6effb697.js",
    "revision": "5b67a3207f8c8ef3b44ae584b0ca0f1e"
  },
  {
    "url": "assets/js/54.1ff1382b.js",
    "revision": "05e680586bafdf4afdc0ed32b0f78750"
  },
  {
    "url": "assets/js/55.2115da86.js",
    "revision": "2103e5ae6c54279c70991e586ef7cf4a"
  },
  {
    "url": "assets/js/56.11aae91c.js",
    "revision": "2f2ada96968a1ad28da9612ac0f1e04b"
  },
  {
    "url": "assets/js/57.571b8087.js",
    "revision": "47d6503f5b2dd8233c868b4b2d328d1a"
  },
  {
    "url": "assets/js/58.8be9dd89.js",
    "revision": "dfa6465e6c79c2e1741e703f3f21557e"
  },
  {
    "url": "assets/js/59.28db8419.js",
    "revision": "17e2d7df645114cd439d12b1541dacaa"
  },
  {
    "url": "assets/js/6.5f1c00dc.js",
    "revision": "9ff8eda5906e2bdb1d980a791c11c820"
  },
  {
    "url": "assets/js/60.725923dc.js",
    "revision": "2b515a0a9dc26767f8595db25822f201"
  },
  {
    "url": "assets/js/61.64453fc5.js",
    "revision": "c56ee7834b0712eb93874ed7c345b259"
  },
  {
    "url": "assets/js/62.2ae97678.js",
    "revision": "61af98a54184d6a70fb8293895bcaef4"
  },
  {
    "url": "assets/js/63.90bd3f09.js",
    "revision": "5d9ad9d20f6d1b29b5c6018918cf0c68"
  },
  {
    "url": "assets/js/64.95d4f9e7.js",
    "revision": "0c829cdc180035cd510d9e0d6c7f8b67"
  },
  {
    "url": "assets/js/65.fb9edf89.js",
    "revision": "d9e1cb2e661ebe9f13ad9a3d8ed5c6b0"
  },
  {
    "url": "assets/js/66.7b9b572d.js",
    "revision": "bd1d9bc16b2371f7f0b9c5bf630ce8b8"
  },
  {
    "url": "assets/js/67.4eeb6b7e.js",
    "revision": "5cd4d6c74904ca0ebd314df24bb2fb2f"
  },
  {
    "url": "assets/js/68.1e30fdc1.js",
    "revision": "91b03ddbb1de795dcd448ec7b67cec5a"
  },
  {
    "url": "assets/js/69.debd3977.js",
    "revision": "29a9f931c76007f448d81c47687e8be2"
  },
  {
    "url": "assets/js/7.534f86b3.js",
    "revision": "1a54b2f67b5f8998668d0ebafb35f228"
  },
  {
    "url": "assets/js/70.750927e5.js",
    "revision": "b407e5183cba94d2839b802e503aa392"
  },
  {
    "url": "assets/js/71.04833b70.js",
    "revision": "2101965f5ac20309ed30f9c74eb58cc7"
  },
  {
    "url": "assets/js/72.73909ec2.js",
    "revision": "f8f278849eecbe549b1d421079a56aaf"
  },
  {
    "url": "assets/js/73.3c500fc3.js",
    "revision": "740502e7469450d6b8ccd703653534a6"
  },
  {
    "url": "assets/js/74.c3c12023.js",
    "revision": "7de8ec8dbc80e280f5e50a0c85e3a3b7"
  },
  {
    "url": "assets/js/75.68f309f7.js",
    "revision": "7e413dc5174031b5812ca2f4ab6f9c28"
  },
  {
    "url": "assets/js/76.a55d5bf4.js",
    "revision": "3d0424fc05fab9e5c109fc276b0ce2ca"
  },
  {
    "url": "assets/js/77.c5e7b85a.js",
    "revision": "203bbef2bd36af6d14e97c5650abcaf4"
  },
  {
    "url": "assets/js/78.17a7dbc9.js",
    "revision": "1e6512f2b2ab0a2392adbc840918dfb4"
  },
  {
    "url": "assets/js/79.805c218f.js",
    "revision": "17f77bd85dba9333c1b7c3928bfcbc89"
  },
  {
    "url": "assets/js/8.1037269e.js",
    "revision": "0d450b806da63e04b5d4e224246b1728"
  },
  {
    "url": "assets/js/80.4e5805f1.js",
    "revision": "4556b84bdc54e43ab21639e675f34d5b"
  },
  {
    "url": "assets/js/81.7312066d.js",
    "revision": "df6836056777f3a2719294d06e4c565a"
  },
  {
    "url": "assets/js/82.c468493d.js",
    "revision": "d36651bc46fe98dac87919f8dc4dfdc4"
  },
  {
    "url": "assets/js/83.1a206ffc.js",
    "revision": "f4c1e37501fc66112ed4c07062a5027a"
  },
  {
    "url": "assets/js/84.43390b0e.js",
    "revision": "8044e726d07c5f1f84193593b4eb6fcc"
  },
  {
    "url": "assets/js/85.00d03821.js",
    "revision": "679af0ac69698302bc5ecfdbf5feb163"
  },
  {
    "url": "assets/js/86.a458681b.js",
    "revision": "15eac0fa2c2d23823e581a526f71aa07"
  },
  {
    "url": "assets/js/87.d487a4b3.js",
    "revision": "1a01ba88a9d5a8805fd075daaf823d34"
  },
  {
    "url": "assets/js/88.26a4e760.js",
    "revision": "629f0e4b1d21b51c8b5f399631ccc7ab"
  },
  {
    "url": "assets/js/89.f01be8da.js",
    "revision": "57c445c6b3ff67fa03f53441939c79f4"
  },
  {
    "url": "assets/js/9.e95a1043.js",
    "revision": "176a996f646e7ca54dea48474436b793"
  },
  {
    "url": "assets/js/90.2e965f5e.js",
    "revision": "b0d0f0e4e40f35f72af6d052b0bd04ee"
  },
  {
    "url": "assets/js/91.37a2d79d.js",
    "revision": "1fb2e01b453121a0ceb93cbd4ec13dc7"
  },
  {
    "url": "assets/js/92.952a3392.js",
    "revision": "193844102211ad8c81d65dc7cec0ee56"
  },
  {
    "url": "assets/js/93.1119fc82.js",
    "revision": "1ced1c521ec829f34231a1a2cc73f043"
  },
  {
    "url": "assets/js/94.e0330c35.js",
    "revision": "98bc16d1070eca17b279d83e53772166"
  },
  {
    "url": "assets/js/95.e1a6276d.js",
    "revision": "8e25812dce5b0c804c79e53a6fea14e4"
  },
  {
    "url": "assets/js/96.67c56900.js",
    "revision": "5b4c95a37375765c1679eb95580bee72"
  },
  {
    "url": "assets/js/97.dedeaad6.js",
    "revision": "f9cf5b0a0c8a3393165ec6d119d49f98"
  },
  {
    "url": "assets/js/98.0dffdc04.js",
    "revision": "7d17c681dffe90d9bacb55c909aee203"
  },
  {
    "url": "assets/js/99.a92353b9.js",
    "revision": "af956c4b26bb5f1f1a170e97f1343ce0"
  },
  {
    "url": "assets/js/app.7803c288.js",
    "revision": "3bf7e6f26e755cf87604ccb252832379"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "3497993ff66a2ef6f1c180274d033b61"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "2df49330b02d7f584ca708b18b0890bc"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "f932ed0414130a088e4b0fee545a1a7b"
  },
  {
    "url": "tutorial/index.html",
    "revision": "91f66b45456506a979191831f8ef63f8"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "72291bf5a4fbefa02a9151892e21ab68"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "9a3d5e9cf07ac056544b7adec92990b2"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "8ff824cb55e2dfadb41a809e3246634e"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "9e54dcc53b71acdcfa9398e150499acb"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "b086c14790618d33edea75574b3778d4"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "463dd845ea186430a35288fb4b0d3e73"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "b4c991c3662eb6abcde8cd0687b1c2ae"
  },
  {
    "url": "zh/api/index.html",
    "revision": "ac56879dbe81b4f5c4c6c7eb5211f916"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "5c1171d07a2418767f6105d7a0f6cfd7"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "12229950aee12421d6c22491ee5954c0"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "96733c01bb58fed8c8b7e26f8a52d6ce"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "3388e4a3b0eaf00b79fe2f43bf610929"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "2a4fef7d7b2e7c018f1963f87819c9e6"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "d5df0afad625200a6f12e4a66e78d7ee"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "0eaaa5d38c7a129dfd126bfd96794044"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "ef9a99b8825d66d4b7e6d5596d3ba871"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "22bc417cf5f8d1112817e55b80a0af2e"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "870109d5f8e7aeac32dbcaaaf037de78"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "319a419ca5554dbd251ce9217d78ab75"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "b145de897562f507edff2b1901076dfc"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "6b6894ccd96667c23f38efa478f6544a"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "b5efc3b3e5b33c5fed3b140668219049"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "4031872b8c859242b2d51374ef6eb9e8"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "20f5ad492655b38cc635b5eebc92fee5"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "944a1612cdb848714528437e2dd7204a"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "fa0b7c95bf8c01f78a1dbd7802c3641a"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "9d976c5f0ca2a74dca4ace89f1f4f520"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "c07831aa26339c0408459f116d35636b"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "fcd9e2cd020c46d4c9b6c8e631d7b88d"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "192c62d429835b63bef6293a7c70fc35"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "1523d38ffbbe39513667e76592cc25fb"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "49e292cec62c55030886981fbac4d0ee"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "78eef995ed65e519878c9181fade1b1f"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "1aa41b6b0e914540146a7c408545d5df"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "288cc4ce467550cd8e10e16a7dd639a6"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "b770c4ec57d29d7e9745b4b4589ff99f"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "8ce50e45b41373026471a9581d2636dd"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "f39d00f4d617d423255513c21adeb6ff"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "c79b5dfe48b981cda06cee17e2973fd5"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "be9861c67ca16501069f0a7e67b2a164"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "f2f0c51eb8e03b0857ad344bb816878e"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "94964c8f89194eab6fd5ecb5514150dd"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "681bea69e52340366c5096281e5a1c5c"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "9cbe8a7c43b3c5860e34b1cbadf67eac"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "22faa63bbaeefa0b5e1202e4b241fe33"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "9952412202c1f4da2dc5db77b3259def"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "9e528471de9fad9536e6ce9395face7c"
  },
  {
    "url": "zh/index.html",
    "revision": "f8962160fda46c020c363bd4ea1abb67"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "9042e1a9db09978ff4fa252f6f2754a6"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "5cf304669999fa8577ce942ac71056f7"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "49b14dd7ee6ce51e6b51ba30eb146125"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "f99916c50859e162664af5c359c47656"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "b8267117c45244e2585ce923f495b119"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "ffa0125b01d6586ae789645e9720030d"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "6bc55542f6bf2914e0100eb37c4a5a60"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "aa56bbba7468673d49c9e22e1a972985"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "ff3b6281603d5d5f83ceee85683fc7b7"
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
