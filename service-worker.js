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
    "revision": "65db0f2ea9d6027ed9d087569b778c3d"
  },
  {
    "url": "api/index.html",
    "revision": "f096dc6854897c4cd74aa56162dc2073"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "2767b2de83ec8df24fcd2eebb30dae27"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "67d25a9237d916f40bce7c8834f2864a"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "6d69a55855f523edfb51cb46e9d13ad9"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "3837bdb518844da93ba2fbaaef8f93dc"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "9b560897dcc13b407d169edba52c03e0"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "e4077c54d469b533a648dc700ca6cf91"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "6b935828a74993f41706495e88a1ace8"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "fec63e24eb70e696e8a8b845a3f7c77d"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "f1b3a6a0ede503fe298f38408a3e708a"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "f3f966eea358f1cba96032e210a3317e"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "c02cac1fcae4c26b3622f85fa6f1103c"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "891d43f538e469f6342dc235387abcc4"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "624bd170433863797a6e62552bad1221"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "5bf64030a0bbbf8edf765b4052fa384d"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "f57fc10fe7b78402bc3383ce4a90667d"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "6f67827bd936797c8a41d97507bfb1c2"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "5fda6ed9d07134baed0431714acb9ca3"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "4e49c383d2ae0ba7b790bb119c111b4b"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "73abc24e56a79a03914fc237f96f6bdf"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "546e45b8a707c5b296053fc1898a712b"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "9ab28481c3789b90567a29c0fba597e3"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "1cc9f75d51aacd4774fbae16278ab03a"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "5188c6da0ca732372bcd4543e5f93541"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "f541353ee04fc902dc95dbed196ed146"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "de19b32d0e6449a64cb2b8f06d92cd57"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "4b2af455f889b73c38fcb359b9c2a258"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "9b3de00cc47d06b1e87f26185290ab23"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "53b0f31ed3a19d27513c15ab9a05dde3"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "fe0da44f375c77bc28568403d0202f74"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "c02853960bcb38b7a2fc1adca133afd7"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "45ff8ad293de7ea5f14e17111b411187"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "11c123531dc1a8fd975cfbd5e5e46dca"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "7a0c35d9d383ef4fb73cdf4dede3cb9f"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "74551d52c5d4ea81c29cfb7e67c58f09"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "a5cfd5fd5889a227f25b0a895fdfef80"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "c00545a266703b09158d3c50ac10a93e"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "1ce74d31e000518b1b0b9b8d9ae91cea"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "bcf4e266fe023f6a58193243ec069354"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "7aff47c763a43f044faf97d0b9e525ec"
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
    "url": "assets/js/32.65ee7503.js",
    "revision": "600f4bf5b0b7f1b5f2aff1fee5212549"
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
    "url": "assets/js/83.a25e811c.js",
    "revision": "2f006c229d77fc8be70bc2ce0ed2dd19"
  },
  {
    "url": "assets/js/84.16fad447.js",
    "revision": "629db2795ca2582b6158f072413f8cae"
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
    "url": "assets/js/app.8a65daa4.js",
    "revision": "2a42393bdb81b92e9d9cbb72da6edd9c"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "51de7ea1c7c3c2834968949d50a8d923"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "7d41320bd58a5615aa68678f5030776a"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "d657c826979740554e8eac978716f973"
  },
  {
    "url": "tutorial/index.html",
    "revision": "da114b5c555e042d56c0a5c6e566b310"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "0f5b332cc78c7ea0c11b4df935da4926"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "be0eaec37032d947cbdc73314f8f7cbc"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "7f82909d7b4b83abd210792b06187843"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "d2643831cecb9b4e2ced3d9fd24351a6"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "7bf9d3ec15b3eee6e4cdf24b09633f35"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "7f8d40beef491f1a311247c9c19ef625"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "8071fd63f3da73bf291368ef160d6b18"
  },
  {
    "url": "zh/api/index.html",
    "revision": "dbf64aa7eb43ffdfeb165aafcb9672ad"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "a42e3e9cdca0a7de8dd68f4d7f9a75bf"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "462785d10e1599d6662fb7ee8e8dcded"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "742479694a55370f8a73f3a835b2a7a9"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "462a56e3cd0c1cb158c5443b934020e9"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "91cced9da62b0d8504350b84e3085633"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "d97a68a2fcfb9845429100481f5d1005"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "bafd55aec1606f59a69c28b138ee184a"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "0fb8f44baaba2b6b0a8bae0cf84cfd03"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "bdb513dba8adfce58411d8cc536d75a3"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "a22f8771279c94b6922aad75dc9a9c53"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "e66c1d6e8e178260288e913a6295f95a"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "2e478ceb740c353c5805709b9c8bac43"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "740f423b8bcda60122b68b5cee8f8185"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "89b5fa9ffcdd1b8326cabf4effdd64ba"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "ff27993e14de64fb809913f0f11e2d55"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "e78d8423c61e6ee54c103c231a925ab7"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "fc1d1dc0d2d50bbeeb30b299ff60e7d3"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "143ad1ddecf71ac96e694bde58bf6588"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "c36ccbf0b5e92cc9dd943138bf3ba1b4"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "e0786f217ba502e6c1a4f0752fec25d1"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "fe9838454b070f91487ce1059a42a402"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "afb673c78930a0e96a5c0e3f654fc2e1"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "aaddac0580047d182d31309e615dbf26"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "14c3ccd517df393aab6f2655fbbc613a"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "7a280665aa5e805c0929b08c88aff3cd"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "31ef8531e047c9cae96cc3e4d08c6f53"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "0c067a248be7dedad7b893c346321543"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "828605f1657f7e18a11aedb592999499"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "cac3c722a89adee201fd2e770afbf191"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "6db5c06914a080f766cf3eac9eb7a1a8"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "7b233757b252fad63bf31b6b48c5df37"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "c6f42ca619b8a1ee7b6fb07f3b896292"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "4e9adcc0b1c89218b964c1ef93ae793c"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "1d3d6b0ee27789a93d004e078af26cee"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "62cec8647e9537df67e1312b9e452d07"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "bb713fb71d5a5903d6cb6dfceadd7098"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "c33ad282e3190d3064287e4cbed6ea35"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "814e390f91d51b0112a4eb5c5fabcc1f"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "65f1f29f9d5d261f23ece05c2b0e2623"
  },
  {
    "url": "zh/index.html",
    "revision": "73e998f929fc3d0eac7c0199567c63e2"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "335786ca10f77ebfc1e465b1c41de94d"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "ef2ab4f9056c58e1bd6d1d0c3304b064"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "bc5a61f405cd066fd1c1e2651813e667"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "86f55b257f68c6edacab1174003fcc1d"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "d106fae884599da48e54d5ca6ee6fa39"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "385c593257896695fe8146cdaeb2ed88"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "47dc16c2b1d30310f7624c8ac9d18f80"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "7e24000cd8f41c1262d92f21bb98442d"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "09ddb441c745ccaded0b2a0850fda3cd"
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
