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
    "revision": "4713f5d2b2556bfd0e6ebfdf0d651f63"
  },
  {
    "url": "api/index.html",
    "revision": "3ca51a20a002ab0c1c73626df4fa6982"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "31edf117450f78c1e5d2a295eda46968"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "4d38df66c8a92de9e7ad03e23ebd6fba"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "e2df5d3cfb8d4007835042425a4eab68"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "ea617d2431d0456c2091453199c0b2c3"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "0ff5815883d73880902f50dd1206bd69"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "a7448369741ad973034fddbc2f546948"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "634b486c85daa34fdfaf5352c82851ba"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "0bf36ca1352544cbe0475f17593cce00"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "cfa262b43238ce0a38c44591e3bd5bbf"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "6b7f150828e59bd3fb4d2c333d98f1a1"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "79e581e40f1500b5587b64e225799460"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "bd7881a2a180eaa54ef5988d46ba62c6"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "30a8a8ca49f4fb3394f7c37c9153c972"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "f07252573b3f5569919db7878b907ef4"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "acbbe96982891b57a484716a5bab9bed"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "6ae2a29b2afad26509cf2d74a73d67a2"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "0e1dcc3c331d51eda31827f1c1be9016"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "0a998d2c21392c6919da77487ba71524"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "a2eda28b0975c0112bb1022c0935422e"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "a7b03fdae35a33731e5b2b7c2f222606"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "9745feb9e9f0fdb8c81c0a6fe709a4ec"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "c30ec567ab35f78a503f46391885c2fc"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "0cf7b3562ef6e5b4aa8fa427c25169b8"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "d2b92975af13dbfb751f39a1fb89bd9a"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "320b1ee137023d79f453ebbd6be5b731"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "774ec055b79bd141b77b9b550b5d3320"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "66dfc344196db390a2d7a0ed36a7da2c"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "3538d5bc4cabf03b5410c4fe7dffe3be"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "96b5d6485ab59ea4b8fb450ec1f3a3c7"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "033febe544497c98dd0d9f519a7d7fdb"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "e85fded8280eac901fd3c469385238f8"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "40320c987b004060e511fcec9f928e54"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "780f776465953537b2b1cc95bc3de6ba"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "e4396fa7ffa7af997465ebc66c8e8427"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "53149b5056eda8a4a93423dc8563ffce"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "9e83f1068cf43eefa178dd6c7de61195"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "deff6ca0046451e5a5efca3244de6aae"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "3ee8ce995de40eb90e54ba984ac93dc6"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "dc66a45114b6b36b7e3552432ffcc0d7"
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
    "url": "assets/js/10.3af924ae.js",
    "revision": "e52dc0f4926eda51cf49653df1976d4e"
  },
  {
    "url": "assets/js/100.c9ea2d73.js",
    "revision": "6c134860ec0e3d5a3825b0bf7f237a95"
  },
  {
    "url": "assets/js/101.313c077b.js",
    "revision": "e6040b5ecd9c04b58e5a421071c20739"
  },
  {
    "url": "assets/js/102.6aad994c.js",
    "revision": "b58338e54174862bd6adbff596ec17a8"
  },
  {
    "url": "assets/js/103.d501c385.js",
    "revision": "7a8001034c8f0844152bbd9ee7ee04d9"
  },
  {
    "url": "assets/js/104.3b9786e0.js",
    "revision": "cf018ddf4dafc0cfffded437eea4ef6c"
  },
  {
    "url": "assets/js/105.a9eec5b9.js",
    "revision": "d9bf3ef09dc72d9db111b16910757a36"
  },
  {
    "url": "assets/js/106.065a44cd.js",
    "revision": "657786d62e4a1341f98a26cfb032b402"
  },
  {
    "url": "assets/js/11.e09b6c65.js",
    "revision": "600028eea089dbe73de5c543495e85d7"
  },
  {
    "url": "assets/js/12.0696f2b9.js",
    "revision": "666d875728aff9d3712fdaad84e258d8"
  },
  {
    "url": "assets/js/13.93984399.js",
    "revision": "00bfc9bd1f22f51f53f0ff68c18a641c"
  },
  {
    "url": "assets/js/14.368b3358.js",
    "revision": "1edfad3570e41642015cd5864e542089"
  },
  {
    "url": "assets/js/15.5c96fbb8.js",
    "revision": "aed65b9e2b068bc9f33a577fd39f2ce2"
  },
  {
    "url": "assets/js/16.81f0f2a7.js",
    "revision": "ff604b8b2803112e52b7addf37ea1c77"
  },
  {
    "url": "assets/js/17.3d1deb37.js",
    "revision": "e530835b07937e9f73bf35c472f4d5d5"
  },
  {
    "url": "assets/js/18.9bb47c4e.js",
    "revision": "cda72561a0542dd91c0aaf8a96e6c26f"
  },
  {
    "url": "assets/js/19.3893466b.js",
    "revision": "725f7286b80baa566f380c5679e58fb4"
  },
  {
    "url": "assets/js/20.da1e6e54.js",
    "revision": "0d318fbc4925748ace39db2fe0a540cc"
  },
  {
    "url": "assets/js/21.b99ef8f3.js",
    "revision": "8537caff4fcf4fe57d35875664825570"
  },
  {
    "url": "assets/js/22.2c7462db.js",
    "revision": "a8933d9613c5209003b07b0b6e6c0325"
  },
  {
    "url": "assets/js/23.e270721e.js",
    "revision": "961359ab6517ec5fba1b83fbe836aa39"
  },
  {
    "url": "assets/js/24.697f0e79.js",
    "revision": "82635e1f51f8a0087ce01cee3c87dbe3"
  },
  {
    "url": "assets/js/25.71e09fd9.js",
    "revision": "47e35c19af041d0d2e3428b04978b92d"
  },
  {
    "url": "assets/js/26.b64d7497.js",
    "revision": "41698b45e87a68688e21a4931315c535"
  },
  {
    "url": "assets/js/27.a7d0d907.js",
    "revision": "cb8f96ede4e9c1435aa4905e47fa146a"
  },
  {
    "url": "assets/js/28.f57e1006.js",
    "revision": "bd2e6991bc295fbfb93b6fa59b0031a2"
  },
  {
    "url": "assets/js/29.4491525f.js",
    "revision": "8eb4b49f9b3621c3765384ef97877152"
  },
  {
    "url": "assets/js/3.542cd96a.js",
    "revision": "8709f2c6e46cd56ae3670376fd5e7989"
  },
  {
    "url": "assets/js/30.afb4375d.js",
    "revision": "ab42617d4877dc326868f8870b090c60"
  },
  {
    "url": "assets/js/31.f457a752.js",
    "revision": "07b7d6c660858b6ac0ad5d083757e202"
  },
  {
    "url": "assets/js/32.213b0e66.js",
    "revision": "2daf2978ef1853fee65abe53b0fcf816"
  },
  {
    "url": "assets/js/33.69f1029d.js",
    "revision": "641e496512b5768cd653c2e1e6aecaf5"
  },
  {
    "url": "assets/js/34.cfdb2d0d.js",
    "revision": "7d536e385be5ce068d7ede1046714342"
  },
  {
    "url": "assets/js/35.9e22142d.js",
    "revision": "9df48618fb9ebceed583ff7af920dcc5"
  },
  {
    "url": "assets/js/36.6de5ddb5.js",
    "revision": "b22e6891d76ad1d9276d7dca8a60663b"
  },
  {
    "url": "assets/js/37.72b1552f.js",
    "revision": "795227f2ef42fe1fe1ada3ed451beb30"
  },
  {
    "url": "assets/js/38.d6c8a506.js",
    "revision": "1bce4f145a99cbf12920b55b9c351193"
  },
  {
    "url": "assets/js/39.3c91514a.js",
    "revision": "d01e6d5b394b1068f6654e54c31af96a"
  },
  {
    "url": "assets/js/4.b7907516.js",
    "revision": "d3ef007066faf7da502ded68c3baa486"
  },
  {
    "url": "assets/js/40.f266fe3f.js",
    "revision": "b2ecf5eb5bfdfb94e986b8db32ebfe7d"
  },
  {
    "url": "assets/js/41.8cacaf05.js",
    "revision": "c9c58e0c319a06f8ebde066d7a4c436a"
  },
  {
    "url": "assets/js/42.361294c9.js",
    "revision": "ea23f405ea111b31cddaa171e76c3e0f"
  },
  {
    "url": "assets/js/43.44bae6d7.js",
    "revision": "281bb21e8ccf7bdd69bfbbe40b96713f"
  },
  {
    "url": "assets/js/44.a62d4b45.js",
    "revision": "223861a209a45cf28eaa43c32620f7c3"
  },
  {
    "url": "assets/js/45.8a973fae.js",
    "revision": "1704021536e2ef3032cc029a01f478d7"
  },
  {
    "url": "assets/js/46.c7b46cb8.js",
    "revision": "211d38d6f6c86bf01c0eed21c7eacf82"
  },
  {
    "url": "assets/js/47.9c71b6f5.js",
    "revision": "5d6463d49211ae039db6daa0ce09dc08"
  },
  {
    "url": "assets/js/48.51711cee.js",
    "revision": "aaf8aa3adbe7d0c9cf1bd3471d28a5d1"
  },
  {
    "url": "assets/js/49.24575d89.js",
    "revision": "62e85dc3b0a2286974c5dcb16a87acd3"
  },
  {
    "url": "assets/js/5.1e244e60.js",
    "revision": "86a5e1eb28f5388d33998d08b68e2db2"
  },
  {
    "url": "assets/js/50.cf4ec111.js",
    "revision": "b81c4c3c328a867838300f15f8f42eb9"
  },
  {
    "url": "assets/js/51.9d9de7ef.js",
    "revision": "3065776314a67b9693c90afb466c9fda"
  },
  {
    "url": "assets/js/52.ec775c41.js",
    "revision": "3bcc10aa8084eb5f489fcbd815d11bf1"
  },
  {
    "url": "assets/js/53.a113e8e7.js",
    "revision": "5b67a3207f8c8ef3b44ae584b0ca0f1e"
  },
  {
    "url": "assets/js/54.7bc08de4.js",
    "revision": "05e680586bafdf4afdc0ed32b0f78750"
  },
  {
    "url": "assets/js/55.98a4e88e.js",
    "revision": "2103e5ae6c54279c70991e586ef7cf4a"
  },
  {
    "url": "assets/js/56.17a2a048.js",
    "revision": "2f2ada96968a1ad28da9612ac0f1e04b"
  },
  {
    "url": "assets/js/57.7699f0a0.js",
    "revision": "47d6503f5b2dd8233c868b4b2d328d1a"
  },
  {
    "url": "assets/js/58.ec4f1a7a.js",
    "revision": "dfa6465e6c79c2e1741e703f3f21557e"
  },
  {
    "url": "assets/js/59.5825c9e0.js",
    "revision": "17e2d7df645114cd439d12b1541dacaa"
  },
  {
    "url": "assets/js/6.50113378.js",
    "revision": "9ff8eda5906e2bdb1d980a791c11c820"
  },
  {
    "url": "assets/js/60.782063e8.js",
    "revision": "2b515a0a9dc26767f8595db25822f201"
  },
  {
    "url": "assets/js/61.89dbc46b.js",
    "revision": "c56ee7834b0712eb93874ed7c345b259"
  },
  {
    "url": "assets/js/62.ecfbece7.js",
    "revision": "61af98a54184d6a70fb8293895bcaef4"
  },
  {
    "url": "assets/js/63.d196af05.js",
    "revision": "5d9ad9d20f6d1b29b5c6018918cf0c68"
  },
  {
    "url": "assets/js/64.8435ea76.js",
    "revision": "0c829cdc180035cd510d9e0d6c7f8b67"
  },
  {
    "url": "assets/js/65.5ed748a6.js",
    "revision": "d9e1cb2e661ebe9f13ad9a3d8ed5c6b0"
  },
  {
    "url": "assets/js/66.442b54c1.js",
    "revision": "bd1d9bc16b2371f7f0b9c5bf630ce8b8"
  },
  {
    "url": "assets/js/67.4805523c.js",
    "revision": "5cd4d6c74904ca0ebd314df24bb2fb2f"
  },
  {
    "url": "assets/js/68.6781bf9f.js",
    "revision": "91b03ddbb1de795dcd448ec7b67cec5a"
  },
  {
    "url": "assets/js/69.61058a5e.js",
    "revision": "29a9f931c76007f448d81c47687e8be2"
  },
  {
    "url": "assets/js/7.981d2e0a.js",
    "revision": "1a54b2f67b5f8998668d0ebafb35f228"
  },
  {
    "url": "assets/js/70.f404a598.js",
    "revision": "b407e5183cba94d2839b802e503aa392"
  },
  {
    "url": "assets/js/71.02d094d4.js",
    "revision": "2101965f5ac20309ed30f9c74eb58cc7"
  },
  {
    "url": "assets/js/72.6f4c6134.js",
    "revision": "f8f278849eecbe549b1d421079a56aaf"
  },
  {
    "url": "assets/js/73.d4f0b356.js",
    "revision": "740502e7469450d6b8ccd703653534a6"
  },
  {
    "url": "assets/js/74.604b0c53.js",
    "revision": "7de8ec8dbc80e280f5e50a0c85e3a3b7"
  },
  {
    "url": "assets/js/75.4438fdd5.js",
    "revision": "7e413dc5174031b5812ca2f4ab6f9c28"
  },
  {
    "url": "assets/js/76.9817fc1c.js",
    "revision": "3d0424fc05fab9e5c109fc276b0ce2ca"
  },
  {
    "url": "assets/js/77.0b17c292.js",
    "revision": "203bbef2bd36af6d14e97c5650abcaf4"
  },
  {
    "url": "assets/js/78.a274cf53.js",
    "revision": "1e6512f2b2ab0a2392adbc840918dfb4"
  },
  {
    "url": "assets/js/79.7ab30c91.js",
    "revision": "17f77bd85dba9333c1b7c3928bfcbc89"
  },
  {
    "url": "assets/js/8.2796e102.js",
    "revision": "0d450b806da63e04b5d4e224246b1728"
  },
  {
    "url": "assets/js/80.3f214cf8.js",
    "revision": "4556b84bdc54e43ab21639e675f34d5b"
  },
  {
    "url": "assets/js/81.16c6e1da.js",
    "revision": "df6836056777f3a2719294d06e4c565a"
  },
  {
    "url": "assets/js/82.594b04f5.js",
    "revision": "d36651bc46fe98dac87919f8dc4dfdc4"
  },
  {
    "url": "assets/js/83.10b0bb60.js",
    "revision": "f4c1e37501fc66112ed4c07062a5027a"
  },
  {
    "url": "assets/js/84.e0173998.js",
    "revision": "8044e726d07c5f1f84193593b4eb6fcc"
  },
  {
    "url": "assets/js/85.7b03a898.js",
    "revision": "679af0ac69698302bc5ecfdbf5feb163"
  },
  {
    "url": "assets/js/86.8bc427e1.js",
    "revision": "15eac0fa2c2d23823e581a526f71aa07"
  },
  {
    "url": "assets/js/87.894081fb.js",
    "revision": "1a01ba88a9d5a8805fd075daaf823d34"
  },
  {
    "url": "assets/js/88.404a7e3d.js",
    "revision": "629f0e4b1d21b51c8b5f399631ccc7ab"
  },
  {
    "url": "assets/js/89.2a61803b.js",
    "revision": "57c445c6b3ff67fa03f53441939c79f4"
  },
  {
    "url": "assets/js/9.542b8506.js",
    "revision": "176a996f646e7ca54dea48474436b793"
  },
  {
    "url": "assets/js/90.630b4e45.js",
    "revision": "b0d0f0e4e40f35f72af6d052b0bd04ee"
  },
  {
    "url": "assets/js/91.ed4c35ea.js",
    "revision": "1fb2e01b453121a0ceb93cbd4ec13dc7"
  },
  {
    "url": "assets/js/92.2a2e5283.js",
    "revision": "193844102211ad8c81d65dc7cec0ee56"
  },
  {
    "url": "assets/js/93.51058cf6.js",
    "revision": "1ced1c521ec829f34231a1a2cc73f043"
  },
  {
    "url": "assets/js/94.6b4672c1.js",
    "revision": "98bc16d1070eca17b279d83e53772166"
  },
  {
    "url": "assets/js/95.6e8917fd.js",
    "revision": "8e25812dce5b0c804c79e53a6fea14e4"
  },
  {
    "url": "assets/js/96.fa37b4a3.js",
    "revision": "5b4c95a37375765c1679eb95580bee72"
  },
  {
    "url": "assets/js/97.f917dd8a.js",
    "revision": "f9cf5b0a0c8a3393165ec6d119d49f98"
  },
  {
    "url": "assets/js/98.0b74826f.js",
    "revision": "7d17c681dffe90d9bacb55c909aee203"
  },
  {
    "url": "assets/js/99.baf97bd2.js",
    "revision": "af956c4b26bb5f1f1a170e97f1343ce0"
  },
  {
    "url": "assets/js/app.bffa97f7.js",
    "revision": "8b1ece36294ee136bc74c70c3abd469b"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "bd48a18e252e45f820509eb9cb573d09"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "e9b561263c274ecd4f900a6f22da93fc"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "b25f92804efbbd4cbbfc51bfbe75a6ef"
  },
  {
    "url": "tutorial/index.html",
    "revision": "1261b014be7dee7f0aba3d0a955bf0b8"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "ee3a6c480590c144813fd1166776306d"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "c9118fa24153bec9df05010d6c151a45"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "d0a33fe02b90dca267c36b435fa3d154"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "3fbda6ae565ba6642e6f958e889ca177"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "c85a23c3686af9c94b9e2b5db152cc50"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "27c46e681bb764dfa78e427998dc06cd"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "b173379a07c0c57fc67e09a862b2e6ac"
  },
  {
    "url": "zh/api/index.html",
    "revision": "531c5605816595759a4b12d5502ffa1e"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "9fc75e11640dff0ec8434bb2aedd362c"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "5fd37298caf68f107b5e0fe7a3ac239e"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "81f8dcf58e77c6b8297c8f11b42f406b"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "87eb2a6d89babf1eebc381b7dd3b33d9"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "34fb43dcdbe3bcd00fd36f25a04ba3b3"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "0834b591662f8cb977192e186305aac6"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "6f3e11af20431fcb20b954831659aac6"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "3b9517c11f78c981ff9f11557795e39f"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "cd394236f07ea86ddac31f84c0e207fb"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "15d5aa654b7afede10f1c53fcdad97b8"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "1ed29bdcc5bd67d0472e6e8fa984a6a5"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "152cc5a5bcd75f09e211eb333071def2"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "c5daae5993c91b581192b1e0e805ddf3"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "77ccfc7f458056a05fef22c2d959a408"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "977e7b291225e39f71c12f86c02cb9ae"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "d914ced6ae9cab1116fee6448aae1895"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "355e494a262cc2da1a5e0c6d69185e9b"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "8251514be864492eb72314f629d87575"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "716179055a784ac6bfb0c9af437c22dc"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "13e8528b3415038dbea3ef4f129ce318"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "3a3d688d25d71d7b76be623dc4c240b3"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "ae7e9326142a3d7603a3c737ebd9c39d"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "12fd6039860b3585badc748394343357"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "838337cd48a68295c32994593f0dbe95"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "e3756db41f959e63c4df5f1f69c8f863"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "fc90a6a866ccfa05ca9c98162c4699a9"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "30b26f9cee05ab9d64d5cbe25abf0abd"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "5dcdd49e8f876cc3cbf445b7c55f0b20"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "0d217106b36ab531f9c36bdf4d0fe021"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "a89fd56fd838af9c3ba8109e72a2e739"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "22ce15a27a48860793b012c2fe767295"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "ea3d8ce219d288b40a9568752d0a3e92"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "e95ce3d42820e39ddd0dc6aab8fd3892"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "4f3dc02fdae82d322ff8bc5baef527a4"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "7ce0be26bf1aac1b69c1dd2a86156baa"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "cdf492cf57d788a962edd9fccc869e2d"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "5ef7be3ae0a96ef8ceb745d52d0cbac4"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "8fafa0d3d0a3ea366227687e860369db"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "24941d355d26f738dc84a000fe748909"
  },
  {
    "url": "zh/index.html",
    "revision": "e1afa88566798f393025e2c44f56390c"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "78ac0184625b3b531666f73c9ccfde20"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "42ad2773aecf9221f93a46f3addb06c8"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "8b538e77c28c352b56366d7dab359263"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "db5c4203e2fc8202d9d1368fbc491e22"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "9b04148fb4ace4a7da9f99e55aebc606"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "3c57a65d0b6141677e41556e30cf6194"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "60775bcf5372e15da10bda83d5043332"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "2fe125e0b8f4d1f2e3c30ee918147d8e"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "35871fc56abc1fb30b5d7815a4361b49"
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
