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
    "revision": "76431bea32eb036eb2f31f6fdb86b713"
  },
  {
    "url": "api/index.html",
    "revision": "3e7acbdc742708e888282ac199a5a359"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "0f5e42fc360c7618cfede8b8b34bf9fc"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "88da647d7b0ebb96745b0ac1d80d0dd4"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "b8470e98e88e424c454b8a488cec9812"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "a94cb45e71c8d004280d2b1a4757ddc2"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "2c8e9e97113f20118b7b6ba08fae88e9"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "3851222f77d91a9bdff47e1282b805ed"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "a8d3060d80a16946d308f9ddad65cf92"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "25afe8c61b6032d1890e070a007fe53f"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "56eca4c7b555353fef9f5095b3e38e40"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "0f613c79daa9c64eeda431b985f41821"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "05555f7ecd6169e87e90880702bbc866"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "96c6e3fb6d19509b1a0ea527408d450a"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "9418e961d4dbcf0617ebf649a8242347"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "bf0f52b5827a8b333305b7042d7fb983"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "bafed23752a3b947744acea55b3b6b12"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "22b6f2e63cb28a95c1e62b3258fb459f"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "007406ababb389f2c72166f82e985453"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "a786df9150c50c8e545f625ff24bfea7"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "0988c488697c3d2ea8befff6839f06ae"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "2e2a675fbf34a48495053095494545de"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "c7b5a505d8e83eb93aebab6aaa2d6a0e"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "44b62596d3b8dd4952c158d47b662e91"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "77a63cdfa611e8e9162a5f85c01ba39c"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "36d9d355b19c9df92853ee88aa6db565"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "610f88f81cdc01998b5c06f5c7238cc4"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "6d926ae0f37cdd893fa983f80d8db564"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "23d4cb41552cbd63ddca29e72618874e"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "a3f280af7a59635719b99afcaf662e29"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "ee93eaad67238c381ff5aecaf15b7219"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "b999d7ac67308b89e0645e9d9b99abb1"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "14cd8b6853c04f503ee87702a5c38d3e"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "f36cb35247c4765b8407368c02d484a4"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "c56ca076eed522ef70e07678fa1dea74"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "4072aae4b642fe90d529570df85c6e6b"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "76ab92e47fe2df713e3ecc8c39c400ed"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "90d067997255ec3e21996570c84cd653"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "c5fb4376151e34e37977e15eeb4f2ed5"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "d01898c3e8fdab638facfd0c9319ede9"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "7c31c52f68eceea5c0be76197d87eb62"
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
    "url": "assets/js/32.cd1f915d.js",
    "revision": "ee05711b9ca6cbb723ab91da44c8a358"
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
    "url": "assets/js/45.68a956fb.js",
    "revision": "c14a27e8c05c2735168e437a909912cc"
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
    "url": "assets/js/95.8a91221a.js",
    "revision": "bcfd8211f52732e9e824fd0813b7c3cf"
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
    "url": "assets/js/app.cd03b1ef.js",
    "revision": "216e122a4857ce348a24cdae356b89ac"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "dfb1fbea793aa33deb7730d403a896e2"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "7b3ca1aa38372fd59233e0952791bc32"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "653d06c72acea4f4f6cab7fbf474c7ff"
  },
  {
    "url": "tutorial/index.html",
    "revision": "a1c14475cd2be094b43e41d813dee9db"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "c72f1457a47da5b5c18e7bf6f4fa32b5"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "70107b7460af1929732213c879cfb200"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "46647e464dc6323848ecf4683f518939"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "72c26f3b22cf5deff4efe2072efb5b1b"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "3a420f14fdd0af0df901bddc285629d8"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "8d819d611150149812e6995179108508"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "21cdbcfa5cab4ba4265cd729001c62ed"
  },
  {
    "url": "zh/api/index.html",
    "revision": "a136f44c655648cebe78df2031b12319"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "f55e29eb91b9432f9f276ef6af261026"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "77196385f77c648b8c820d1cc2078496"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "d9ce3dcd90c1c52ad74709510253884c"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "960ca1b546c2aeac987682d915701a8e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "881cac4129b54470162be4ca4ddf3003"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "f861c2204e20c5a4d90131a6ac185833"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "2579d5b91eedec69e0911ae851376196"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "d5fdd8a4c495f1cde1f73179b514e1da"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "2f4ecd60ffbf49a56f1eff5590cf7017"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "5f97fad1e9190f71e28cba1b85d6ab6f"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "1d81f5dca11a46aa41a5659b1d02d238"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "98a704790085d230616d5e0ffe9aed38"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "426de14a88f610ee1d82deea35f43abb"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "834787b99c41b35310251d3aeb43f5b4"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "a0f9aaab9c3c0f3697b0827b4ea549ad"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "36a5c7a64945b5ccde5ec8786ab2101b"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "c3d0285af8e572d688ff7ab958eaaf27"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "5928f13213592b0e9d21ae273f029e7c"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "65a52e58009f447feadcad12e5373cb6"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "b393a427f731998fd53d8c4b31b0a80c"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "00f46a4648aa93349c01ab0963f411ba"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "22f632fe887cfc57de2015832e6deb03"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "93a498def2d7140670910eaebbf54a27"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "ac9a28d9a77c866d7cbf2a5939a07895"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "6655e5bdf5d5e2f5f71214c9b7c2aa0e"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "4cbf709d8a323bd7700f5aaaf57f0890"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "d32913987c4db3655d7c31232c39976a"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "ed2efd9be9a5e4f34d47069a23cf97b3"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "dc81fd08ef2eff3574e6c632099fc79a"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "11d31f86e05693737878328b15e4fe5d"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "3dc5d62468383a904137d01c0b6c695e"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "e49385cd014c3f759d57282cfb47aec9"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "a7cc018687e4ac7b591148059631cdd6"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "965a62a29c3a4aad9047de4619ff2cd3"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "acc0dca36268cedb84de01082f117ea4"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "12c6aeb63517b007367680030b50a457"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "ed32e2d64705c22d2d773f698bc6bb2d"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "149b75989653b70cc900478ffbc092a9"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "b04d90ce407b22f4bfa412733c807251"
  },
  {
    "url": "zh/index.html",
    "revision": "430a5077232e1ecc18b96afb538c9b90"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "6dc9e15bed1b2968d0c1553469ed51be"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "8c4ea3c16344f3026509c7d23d21764f"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "c44f09e5e207c755d671698a68307288"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "5ed8898a70d7a863d50e1f726122c073"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "523b374359a9b9ffb7e37314b43f1ac5"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "2edc9c23297f81ad875f4302078ee1b6"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "69b34533593dceba832b5e4e320f9c7b"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "7b0934df336eb4946c2a200e7dac9c6e"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "558f9ab736248b74cd6ea8cbe0e0e482"
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
