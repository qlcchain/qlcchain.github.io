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
    "revision": "d004d29f49724e20646b091c436c5631"
  },
  {
    "url": "api/index.html",
    "revision": "5540b45cd92e1bea741e29f5e5f54178"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "58d942a1815a8c2bb35d11f4c050515b"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "837deb805db914241aee30105daf98ed"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "3fcbf108781cf0445655e8a231b28f8a"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "0a75768c1f56e42aa5291ccd9c1c3bca"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "9b261a5c7e32c4525b13c499673e6452"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "5bb2977cdea0a171329c51730f6ae305"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "3553c670f89810caf8b690c2a1f3e11f"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "186f85d9f5fac953d8b97f003cb8d717"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "9290e07212d3926adc65454625806948"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "1ac95074f1b364b37d904d4225b62b3a"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "d646ed5cf3ace46e3ba974d169c25ed3"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "4aa963ada31e2d2eb14177ee98738d3f"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "29f1749c05d7d0af4ba4d4b9e6de0b60"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "be9c4c167c7c2e900f6f0d9ffe1e74af"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "50c67db2967cd12b8a0273fb02122123"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "b91af18221bf1be424ea11c076ef693c"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "d5d7c0d43cc10233448001456517d322"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "a13b6f02ad2988ea64467eefb898e141"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "08085531552483c40e9d2e59bd2e5835"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "20640524cbc1ca635338698329d0aaac"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "bf0c2504db3f71349b0fea5a8d5c0922"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "cb3d7f72734b5f987dce1b367c43edb8"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "80e1151b56f84811461e6cf6fd74b3b1"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "7b567f71e4273aac451493a513f2eeb5"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "0748074cdee2c35150b66588ef81c70f"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "9d347bd9d39ffc38666ac4e5d485ca07"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "d0287dda4c025f0b5f58e81d51e28124"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "799b6a9ad7ab6a9c7307f54d587ddbac"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "d84e41440eda9a0fb6295d2297506e00"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "a084cd1537ac268ea52b8c48de9cdf52"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "c0ef996caeb95303563f8d1b062d7f7f"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "d0f82da7774fcff55072bb28889aee09"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "40ea5d416db6f16e8205c5d0550dc142"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "fffcf9fa7be3e37d8d78f067eda1736f"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "abaa23b949f94ba05894accb8494d205"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "51129663a89318ac11c738203ee73b51"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "d792e7932cbf113cf60311256259f9c5"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "c440f79543b0dff59e50b38b13ed372f"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "c851f353b8cd517f11ab7b1b82a77b96"
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
    "url": "assets/js/32.10aa4230.js",
    "revision": "9c4b53a8fb69fe16147229a3fba532f5"
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
    "url": "assets/js/app.76809621.js",
    "revision": "1d95fc4bbc832f52dec7dfb8b4fdeb00"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "f7ae00caf070c361398d7226f932b02a"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "95ac8af610e271a2e30fe9b76ec1976a"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "49a1718dde352fde1ba7361c1a7b2c61"
  },
  {
    "url": "tutorial/index.html",
    "revision": "86f6f907bff89fe80672a816f126c661"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "18a1868500349620635c4a336ebd14e0"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "a07484b6916ca96fdffc3a8295a883d8"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "e1d4dfca7f457584b2b44bc50fc0a0a0"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "1840b7ad47ceb6b2901c3edb1ad42764"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "f2616aefac572a99dd411e0c6ac37e12"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "a458c7b173b78b993b2d97cf58c23d4c"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "1d20ac804cccd56e1d1190c4bb2f6bbf"
  },
  {
    "url": "zh/api/index.html",
    "revision": "00f930aec7632341dca01b2b52662daf"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "543c9cd0685f29dc2a0b37411e701b4b"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "e9edc6ecdd5e366f68f0a4185dc46995"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "4f22cfb49715665f2ccd50dd7700782e"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "ac7832e413908628c98aa3a3728507cf"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "379f8f5a09477c09563457aa98b2ead3"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "892af59141ca41863df1a45144939841"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "83297a6fdf0b974bc8a48e8db8e2c0dc"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "d716783cce30fa1018fd249d667c2784"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "c786385647374ee56c2d4d9e3b8154da"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "82911c32186b592505bd2ed1b28318fa"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "075552c91b95003741362b253e0eb6ac"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "7a9a3ad854364425a317bf332d26ed29"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "5326ed85003980d9c2d4216bee2706e7"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "1e0bf3fcfb8d9411f125047b147bbe34"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "3b7834a53502328e800d93b6ee754b53"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "e301c141bc0931a38e4849d2a6ecd5c6"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "28fde82b9a9d79c628d3af5ed74d503b"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "6c6c924d1952c84aec7c7a25a56e862b"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "7809038b7fbb89930d48c4fc66c22f8e"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "30327e235925bd436131dfd4f9857475"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "77b0186eeb7aa0e8c75cd04f61c7023b"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "17920a62229d7f749176607494673ae4"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "9cea768e10a0184e81494885dec4b38f"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "176a1cb03e7def5a6471a5f2c7bbaaac"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "ab17e573737be45f9dffbd403734ea34"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "849b9c21f43f4af5f821fa6e233d7c81"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "2a193b585f147553d5fcab5d2b4d65b6"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "d3d3e42a34b33eaf2abd3b54b8daec5a"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "53501401cc391ebc7e914b9e41e6d9f7"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "653104bb2d64b4dbaf30c90fd250580d"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "f3147da4c7090b7ce7a6af9dde53be76"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "9af69fa6442d165d5f810c8f3ce73b35"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "aaceb7b8b7f8ede3dedd155109eba4ac"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "17ed48f64c2a5869fdab3743025728bb"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "df17c38ae55c97e839dfe4de84d23de8"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "177d33dbc349abf1cc515da69cb73bc8"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "6dea3123a460d2994552a0e928c7417f"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "3d8e3d04892cb1f2e4a994cac65ecfd5"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "155f109d51d38b2b3cbb8513925915db"
  },
  {
    "url": "zh/index.html",
    "revision": "54be3fcc7a8712cd8055826289614f04"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "89d18da68c85f7feff606ebdaa355f21"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "c4b816826d0ac0b957bbc5c994dfa828"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "26e457bd5550f78d7c139f52e9182a90"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "b7a9cb59654d423e6058703d83353c77"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "1c6b5b3024f7313fc015db4e3704b5b9"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "60b896d410795859fa9ccc3d196aed27"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "8c3bdb412be24b235fb06e56dc75d2c8"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "2730096c2bc1049d00a92eb93eb7bc6f"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "b8bfd6e6deff19f04f91dd6ba0ecd973"
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
