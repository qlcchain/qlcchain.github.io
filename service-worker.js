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
    "revision": "e8a5812d4f49603cbab9456f921f43f5"
  },
  {
    "url": "api/index.html",
    "revision": "4144746c3d884ac725773195be11a9a3"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "782d0b62f08cda9c0c8ca198a4453a17"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "f257821d16bbd631763e8d6e7c49010e"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "c516c88370f0f8c9ede717f8c74d233e"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "130ee6076ab308946947af40c6a13be5"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "677556f4169256a110968b9292ce6a4a"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "c4e32cda674527ceb263c7143dd5da36"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "d78455ff672c5bae2e62fddd57be93d3"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "13fbe573964da32a3621e8281954e38d"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "d7ac364a1969437f17783875d649cc92"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "c471f4a05c739b9741313114f6879080"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "f09fa91dc56b6f5b1135019fe44127b6"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "72d01f598ceb5c424152c25b1e01829e"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "c2d9312e29d40f30f33b2e99209c0c54"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "7d5241a0a0e3b55a75d130ce447a1153"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "ecf080b2da25cc5726f2106da8fd2a1c"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "7afeba1687509e413b01c65268bb353a"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "620ace3787b59a019763d9f356b76907"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "1729201eb83aab1293b335735c71a288"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "4ad6fdd8335627f03ea152b57a1d711d"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "7c8abe39435e955c55b391529345a0a6"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "873cc9bf6fe20ca95085d9bd8e522380"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "b3113689acd400a1bcb0ce439392b603"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "1b3c36feab56f24de077ee1fe91e652e"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "f57aa7af12bf0b84be1f035cfb7bd922"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "f75c482287eaf2d247b79954ca067b78"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "17b8d7d55f272af676b7815782b901b1"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "ca8fc934ef0736c904c0379d5377fabb"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "9c6a73b615c8aa667ee7e1419dede011"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "9d18c623fc778e49e609ae19d555befb"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "961f929ee7495906ee0e32919dd4dd69"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "ba81fcddd0bccdeec710f66d51440d26"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "68c0b99daa9f4e96a7fb401779fbbefc"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "04310eac9d97e2f3aff3e4cfa539c6dc"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "e94d08a2fe7c61a24e6db100a16d3e4e"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "82bd7aaa2f33d44e89d1de943cb47016"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "0fa81376198ea4b23c0cdf08bacc03b2"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "214717cfd1a35390f1bc7fead801eb4b"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "10c871ae890409d44e9caee15e776bc8"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "66f929543d2c7b76160a8fda564a9705"
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
    "url": "assets/js/32.fae109c6.js",
    "revision": "cf0837f0a7045010445345e6c53f1cb5"
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
    "url": "assets/js/97.f28c23ec.js",
    "revision": "473378c850365f3dc1a7260ee76d0548"
  },
  {
    "url": "assets/js/98.52f001de.js",
    "revision": "13d5704e406b464837acdb3bb2dc3ff0"
  },
  {
    "url": "assets/js/99.baf97bd2.js",
    "revision": "af956c4b26bb5f1f1a170e97f1343ce0"
  },
  {
    "url": "assets/js/app.fa0caac3.js",
    "revision": "25aa4c4b7e4fbc4837151c46895dc5a1"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "e637e6b9441e92e6c61eae9d604ca2e2"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "c904888fa81ae03966a1424ce024acfd"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "920ba099ba7cbafd04728130c0b1fa5e"
  },
  {
    "url": "tutorial/index.html",
    "revision": "791a71fe7b1b8f93b44c7da5cd19abd1"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "985bbbce17b380f07fcbca01b57e8561"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "dd02872edd4cfec842e3ebaa64edf744"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "8a6492f3875c825d84b3c7b5ac3a066f"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "5005fd727d61038c18a9a340e64db906"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "d19b9352cd73cd7b3648c3a9f1476c76"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "b4f8ede9dbf657720a481f3bdcc5ff00"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "3813a053963b2e8367441041deea52a1"
  },
  {
    "url": "zh/api/index.html",
    "revision": "132a05842178beb5a64effa9ee3fe232"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "7f32468c18d37520d51b1014452682d8"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "3d293ce6ac4a156c21a78393ad467605"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "4b5b7fa8bcdedae0a6b59b84557619be"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "40e5182a751fdfb2d79982b8817fb784"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "a211e065886ff8e6f24bbbf1ec14111f"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "b3db9b27daff36784c0eb4a373906d5e"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "ce020d311cbd24647fd3d9c61ac3ed5c"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "0358d3577d6c2674a1623282e9a9dfd8"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "bf126954504c4c0414dd8946048dcaad"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "65817cc9d11c6c0c20faa9b22721002a"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "fc920c7fafa08aec24ad4503107aaeec"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "11516e6aaffd4e73affd8e0d84125013"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "f811e76afee7e046b7f9a9ea5b59601b"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "aa9492728ee7f9fd0cd6f6b691515065"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "bd5a533bce3d270c0fad653acc6fd4cd"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "d54d66cded820e96fc053dfc3c997a82"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "d3ea047d21efefc36e76c51619c9ff68"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "1ade1e528c82b36418728b8491370a41"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "8c16c55b0074da4d0b1e8eca07083e2c"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "169eab28fab2c94366653be2e6fdf586"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "a28642ab58a3dc6d9ff4daf31d581355"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "82fea8c535fb9cdc722eb1a3c077c7d8"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "6bae0ea62276cfda7157e8e22d169eb3"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "fa7891c3f63cf2af29d88a4c19d9b10a"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "89a380ca7c8f8b3ef9e05a6d5e7c334d"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "f7337d7de7e35a20674f9de5f4d96b80"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "73b1e0d547aca5c91ead9e321cb0a8b1"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "a035fdb969c8ebdf17839558341feb23"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "e1a891fd140e55991bf97ee1efa1f02f"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "0aed0f46015ba6a5a9e0a525305dfcb9"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "3ce5411d27c652821c68567e7270eaf3"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "af78aa79501c35600b64535376407371"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "2433c638f4c8870b50f1ef8442261ecd"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "f5b09793bfdac322bfd2a5d97e7a1085"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "fcbf993682e4c0e4930b2ea02908cd34"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "7542984870db26b3d6fa620108be91ce"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "66154f6cd8901d150d6186088db450d5"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "240f11dc88874aef85956e7dd6e2d6bc"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "911238457ec552dd38d4c257d6d0581a"
  },
  {
    "url": "zh/index.html",
    "revision": "17850ffa396b0a715741ee5c14be538b"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "59c880d8b2357cb6bad615979d5a75c8"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "715deef010ba2be3bd6dabc93883abeb"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "5b4ac36da5656f82a8913d8475fa56d9"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "ff7c76417b83e626c4dd6f615d1f35bc"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "5578b85446adc0918b6ec9990cb648c3"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "2d8163e5d9ce596e7f21dd41514ad2fd"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "155d49d4efb084406de9aefcb3b26a82"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "52d52763f8e38a016a66a196b173f32d"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "01c415b53cbf220b7b5c5e2abf59a185"
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
