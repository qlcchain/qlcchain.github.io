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
    "revision": "0e28095ac1a935d6a3501dc891d0a3d9"
  },
  {
    "url": "api/index.html",
    "revision": "8825fcbd895e98a2e0f2e52e5eae0445"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "4f1d3ca8566c4912ae833202e10be44f"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "25a0b097960d40399bf127f43fbcb99c"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "80e66e12d29708b48ccfba2e77565dbd"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "1ecc886418b72edb7ee705322892dbca"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "31a01752292616612933ee8b88ccf65a"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "28420502a25c7c79c4afae0e903e55f0"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "0c22cc9a814348001ef1f53e076981e4"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "caa98fe4663f2de68bd5398c25088bfc"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "9a581c58214ca6e773b9d20cdedccddb"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "38177211b3324b36961dfa935210be72"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "4c62d162515504a534966b10c37e363d"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "bc53316654e49ba4c942412ae97861cc"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "4ed2cee8053f98e022caa9d1944883a2"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "d04fe490414e42b9ac1e5c8ba063cbbf"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "1db1bb20a4387555a58e3d1a44e6d6dd"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "c73620d77cec7f73772befb50fc2cedf"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "74b72a7a89e6ce2a10d01d2a891606bf"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "7188b91e4ef882d691264ee0938c6c29"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "0bba5e6b3c15d2264ecb238c09139d8d"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "24cdd66c5d568b37382eda64945855e3"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "34c90d11d4d810e9db52a7967ab2bc4e"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "7d4e0e96357d5b5e3109f8315264b7e9"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "6673163de2d7b1a65b45af629a413a4a"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "5daaa6b086509d78ff94d26bdb6396c8"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "79deb2498246681d918864ce175949bd"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "0604044db95d463cabc2299bef42a7f7"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "266dcabb46a4f11702d21f0b555b12b6"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "00aa9d7c5e686fd74c38c06f3075c68b"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "5518385dafeb8ae05a97c8bd63d5ec9e"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "8246bbffc523670ee608466fd3d0d3f2"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "5d5870ac1d80617f2fdca15ea33fc4a1"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "b9e9ae7a014653418c2b30254e828873"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "53ccbb4efe16b1870fed3aeee0d70afd"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "94e78d4bc4b6cc978f59d168b934b48e"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "c827103b98b278821cc218cad4397327"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "4cdd666c222649ff00dc2eddf86c491b"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "095624e923e48a964f70aa3fc4083fd5"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "b7d2af3c78f01eaeac21ddbd07840c2e"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "3eaefe4746b34478cf8f719fa65becf1"
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
    "url": "assets/js/32.87646e2e.js",
    "revision": "f141a20f36098efd0b0dba1c63488a57"
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
    "url": "assets/js/40.dcb99609.js",
    "revision": "5749fe7718b84f6fcfd003b2fe07ecfa"
  },
  {
    "url": "assets/js/41.c0a9a07f.js",
    "revision": "e0bd951712976d727c008177fce7e5dc"
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
    "url": "assets/js/90.0479c922.js",
    "revision": "7696d67a083c594ae276a59e05985971"
  },
  {
    "url": "assets/js/91.0aba5ab0.js",
    "revision": "5ee6697471acc7d5cac2e4a96f186644"
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
    "url": "assets/js/app.f8e90660.js",
    "revision": "4c57dbae5053dd8d5ef38cbfa71541e8"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "69712d7be9de50617a971f8d585ef60b"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "6500e0ba91eb1ec356788a2d077947b1"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "ceb3926cf5c7b2f0c417d839996650bd"
  },
  {
    "url": "tutorial/index.html",
    "revision": "0e49d5c131145ef03d08f0ecda0598f1"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "42602ea21f9510e1ac30668318c70943"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "0e2674539148e852b6e2dedf0c76690b"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "285cce60b1cdb09f4d9559d44021672b"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "4e1a3cb6d7032357cfb4c6e842d0fcdf"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "6097a270a0dca7be20fe6390489cc9f5"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "b962e0e86613b7d79b73cd7cfd6620a4"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "ac0723cff23ced32af1bf0d34cda46f9"
  },
  {
    "url": "zh/api/index.html",
    "revision": "22ded51b2fce56a5ffa1f4505d35f6bf"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "34cb2492bda56a82434f3753e427be86"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "3024c8dfc1d9959047293a709f6ec368"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "2224a33388be2d92028dfb14f6a10432"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "480fba2d902c7300fc063c026a45545e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "83424db982837286ce9f71be53e52fd2"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "673be2d5a76d832bdd50bf1cae515baa"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "c32368055c862fb47ac9d2a843dd68dc"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "98c082d192b543386a37317ebaee861f"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "4f8b71175cd8acd9271fb39e8e2815ab"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "f809c2ec740570dd1047a4162f7352a0"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "932ad1c2a2033ebaa9c08e7fec31bceb"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "de6963e88216a3578ee7e8d4f2c75ab6"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "a950fca57a8fcb1784b3b421ede9aee8"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "f498e2601d1e82d5377b305bf05230f1"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "fd730d9635615e87a91631857d86e716"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "587c28edc7935f65d17ee536696fafb3"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "33f704192e5f2f405b54e9d5b1505fe6"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "93317cda5108d0a55fcbc219eb31f35f"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "3bb9383175c5301e0e617d56a2698186"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "d9faf0644693b1a0fb47f81d20a67405"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "6ff66045406cf0ad5ce39155d1f65271"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "9c2ede71003a533c5729ee7e90974a47"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "b651b862fbf7b31ba4083377a1042863"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "79803ff8494f6a190f4a1809c2b5314b"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "631d26794ab55626c0529b7046fad448"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "e9449e63b6ed3412162d6a29f5568182"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "f2aff5e712c2fd016331af2bbfa99de8"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "c24b384c093bd00732048463ff4d9fae"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "918e7a6b41a89c67ab1a4b37bfe7bbde"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "4e3fd9d16fc20e176024a6027d43479d"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "f88c1e3e95f0e7aa811dc95f0ef09ea6"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "5d5c24d7389bb8b6b5251627e6f2afb1"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "589de387a830427e4b3787686384e49d"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "bc5c889de2d9a468154e41c66761c57b"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "470d24d6e9cd70ffadbbffcdcfa5c5b1"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "4b2b0b6006e4151d840e6ad3e1720d6d"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "c73405dc636cbe0e1b0b02ced3d45d1c"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "7531fd767487ea33930476b73afd4c17"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "640616bc61259216a400adf12a1e310f"
  },
  {
    "url": "zh/index.html",
    "revision": "502d82df39d9031a929c60b2fad4105b"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "50b2ad1d707a8554e73f5dfd65c1762d"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "7a53ff2346e5d6f615cbf8111ea26f56"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "fd32b81ac5edee7e8027f3e104b6f0c8"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "5c751ab894c46d0fe13ff34f14483887"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "d3475f22de4fa8662a0ffc37d200a0b0"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "cbc2246f080d8b329c9cd2d2300a5172"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "6f34cce2626fbe5df7eeac16ad3e61ba"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "0951c659ccc59f5adbd58c203c93a858"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "e372c24adfaece8a6e9dbda06bd6d1b8"
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
