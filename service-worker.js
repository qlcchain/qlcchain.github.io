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
    "revision": "e42815cdd7cef6eb987bd1ee8fcfe0a2"
  },
  {
    "url": "api/index.html",
    "revision": "01708938a4dd9c79f9108534ade42234"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "08636af5d19fbdddf42227f9a3d7436a"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "4cf060ccf771cda9b637ff00df1fb02f"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "e5f1043dc105f564df6e759c0f06f7d2"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "5ad0d23b7d85c28a8f9a4057e922cd7e"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "8b3274854d80f7d37648457a1414327e"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "40c8da4b8c8f0a553277c635a9d6c088"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "94368548611da41ca0369c0514a9067e"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "825d7a122f1b4a62b2ae79f66704d038"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "ed6f95048c1c1fcffe2b1afcd5bc7755"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "929753ced4b717df9298e8250bdb9f11"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "edcc19047199a37e23dfbe35bbedb703"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "9906f267c1cf65c2d6f52b4cea333ed3"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "68ccd46045c49ecef31803c3fca01d6c"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "7be44a25b21f5d76fb99914c43243194"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "9447b7197edd9100a46cc0205ca532cb"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "cca89bb7519050190cef80dc7ce07be0"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "2acfe646e3e3c196f168fcf66a3733d5"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "0e825e96353f555f212e5bc6eb044dee"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "7e92588256714ba2ddd58de4d146e12b"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "d5fb7dc3d8f565bb3db018d6fb1458b3"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "460625597ddd6a8b7fcaefac08a228df"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "a7c0846b80b723de77a9da84605e1276"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "25beb0cd2d0f35f149d439895b32c447"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "8c7febeed8ff1103c5f5a551631b8c86"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "46abb033b113270820bc9c029d6b4a95"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "2f659ea86fe94535806e58690b7fff5d"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "57eaee094102af08668de6fb7e503820"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "e257ce3b1109a4bafcc91fa1d5e01ab6"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "8a32a59dfe0b672bac9f6864474bd545"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "ed927884be1e2cec5b4a344fcadb8331"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "d092c1b05d475b193b126c129f7de0d3"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "1335e49b8091f8a20dddd5cfbc980d85"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "91269be27fdf738e520e5542ef5d39d8"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "fa6ec2b2dcb9654eb8f81983039c3b71"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "d59455abeb20656ca09a0a34e3b5d8e3"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "a01ab7874e7d2d76d14c83edab3f2c6d"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "6fd312fb620bb52f42226640f1bb42e3"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "eb1432cc3d327ddf1208a3396b77f2b1"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "85a854a3313c3e47174581d678082a24"
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
    "url": "assets/js/32.e6bc97e2.js",
    "revision": "a99870ad7e33d6090ddfcf8ef5193af9"
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
    "url": "assets/js/app.137c9264.js",
    "revision": "43347311ae58b5abb58a13e0c43d14a0"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "c76a4d0ced5dd97dc89d21ab6605f64b"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "96ed8829512b3a85779ffe64a228fc21"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "43ce26ab4fbc54050935a3ff9126876b"
  },
  {
    "url": "tutorial/index.html",
    "revision": "f50c8a17c30be9ca02b971074e754b2b"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "e52a45590413294874ad766dad7f79d9"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "39c1f56e90a31d04608df37f822ce449"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "2441e7b7bb848f10ae67cb43140c15e4"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "a4569502b5cd3a333cb69bddddf1490f"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "96c9332b5ac30749a199219681aa3c93"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "5b87b7ef97cac60569761900b651223b"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "3a90c9225f5fa3dbc0304f1335edb5d5"
  },
  {
    "url": "zh/api/index.html",
    "revision": "3522720c5289504b15f636498afbdb74"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "a2ab6a8cac86eedd29de541820627e13"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "205da9481d6a8c3bda88e5595d2baa9b"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "b7765d69416cee90e36c4b80f8ef0257"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "5ff95bba41db2f2e664658ad1d85985d"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "1b6809524482d7c2b6b06e44d19b5cb1"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "d42a4e507525478f73c46316470c11a4"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "6e431ec264ca016fc62f998853be6495"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "9748c13681c440a3d00bb3e2905dc848"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "391dd2e011dca68e4f45e2db1673a4da"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "02ecf1e6b86276189ff4ea4ccd912e8e"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "a1a61bd5f7643bc00ed09715995b05f7"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "0e10ce7691152ce49ecf189f47a25f18"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "fe986ca395514ba65425a7d04d9170a9"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "d4aba98d150fbcbbfe2237f93fd022b1"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "202a1a1257755e6a5a0bc50b42df616b"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "6d9a82cfdbdea334ee72044b37fef222"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "45234b7250f532a1fb8f423525b45790"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "ef99e20b129edd0d4f3ea139c4c52827"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "e0d6f2187a207c56c420a4a0bae7e8e1"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "d2cf4b849e94ccf49935c313b679dc28"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "c0ad40ff4a644ab605be7924856e4ad9"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "3618c95f42947e865552512a84f9ac54"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "5e1590435c8a9daa593735941ecfb33a"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "249e7dcdd6c109cb2dedbe6c38209849"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "2feb0238f87128b728716470f38dbbf3"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "ca7ba565dfcaf9c4564fa436a561895c"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "64c5c6aa27d106ced7f957ba5abb9a6e"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "ee41a219fa8eb5f9cf99e19aa555b953"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "a91918a6f30e1352b06030527ba69a51"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "9d67da4012132ceaeec7e49ba1f6f848"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "c2d66951a84c2820f8e6983619767e43"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "aa6bc51675609b70b50e6d8a87eb31fd"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "2326f74efea397fb9193bd5459b661e1"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "f7ba541b2254c624601ab6bfa0e0c9a5"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "7d86278165473f1b5b103ccc3b33a595"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "3f94315b721366f59982eff86eb0704b"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "e1c53563b0b97a2254ff50977831e35a"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "d6990e3e656a2a0b0a2142cfdc5d497b"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "35f75a420e45f10e1abd3d1aa5b3bdea"
  },
  {
    "url": "zh/index.html",
    "revision": "4337106827e11b7a732b8b16db0ba1b4"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "3d32bf8f7ad8e19ff7ece709593f27bf"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "17593fb708a8ea30f76681ceeea2aefb"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "d273700a2bd363ccc32b7a55e82f301a"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "ddc371835e6226912410694fd2415b0d"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "a056c71a38433754f60eead11f367182"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "5389704d8f1039ba6121548dbfe387f9"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "c19ab29c437d65b349ab938f39637abe"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "363c16aa955594df388df7d439c73669"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "0d26d0d2c46c4da83aa06689d6900d81"
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
