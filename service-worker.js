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
    "revision": "087c08f355ef89218db8270dddb7ef25"
  },
  {
    "url": "api/index.html",
    "revision": "206705cbd419624839e3b41f2f562625"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "588159358afe130090bf7c03e09d2a2c"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "7b909b91ca0eeb7dd6c4e853d9c23efe"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "4c197ec28945c054fb9a1859e7849a1a"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "58e1067109a43d0ea5355902d14af817"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "ee726b683b72158cf2249f484c2be5ba"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "e5c02aa68559f855f26403da262c2915"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "1ffeff1480355bebc5da385c8c18126d"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "aaa15c0448a241f514b9031517d0b048"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "e11578d67f96c03d9bdf9b89f479cd3f"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "427d1afbee0ae935a27768a64aa8da80"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "e459761d97b2d2421cca6869d1edd6fe"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "e94d6f598ce0b21699b4eb694e6cfc4a"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "339dbefb63ea9a1f8e62c5afc1acf3ac"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "19f40cee6be9c1645aa0099286b5b6d2"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "8e80d60cda905a6111c6f96cce4c6439"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "8ecc22b3461155d9faef941dcb7da346"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "ef13f22c489d0b37405bb656a545cec0"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "1b98b05aa8785f9bd41f20414aa9c92f"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "d9fb444edca94f596194d2597db898c7"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "0320caa2b5c00d269d20170cc290accf"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "7c3844a026327b57925c4914812ea35d"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "8975384a96affd74d70f2a0f19d7cb51"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "7a15932d0c8b5e13b8ec5cbc55141685"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "5571fffb3954adfe1bfb44d04a4ee980"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "7c42f4f08b91e80a93725a0b74679211"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "e6db900f117e9a7a95e23526b2023298"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "170be9518c941234cc6ad3ebf28bb45f"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "1fc149f57d099efaa4cd0e2b8c9a2951"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "3e8810e63d4fc91506bd36c316c3b5c4"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "4b2be020e7a8ce4c189e339ad268df6a"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "a94a0d0dd3516f6e377739e87dc40918"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "b80ca9ee6c6f7e02fe02226044a609b0"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "e7b53dd2811e51a950a856375e5f7ebd"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "1e41e519096a7c955d2bfb10dc99862c"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "e12af1c4372e08b62c0cbece46c2c3db"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "cae17c040a0a56e1691277e682a05170"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "899c660b5022709120751e431e0d54a5"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "657e204af337f16ff43e069701b4eed6"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "eb473481ec06ae1eeb9d5230c503dd97"
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
    "url": "assets/js/32.19ab3fae.js",
    "revision": "3c6dc8052c6ee28f465a812e35a7a651"
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
    "url": "assets/js/app.f0f9e64a.js",
    "revision": "01cd8f66461c4a29ab0c32ec9f9a0b08"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "b2f0a385a52c4e10c661cc99971b8f09"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "acd033e1d6ecd3cbd3ba0c880349b936"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "1c0a532b2c43555cbbefea1a26ed139f"
  },
  {
    "url": "tutorial/index.html",
    "revision": "1f1b84990952ab9202696b75a5a4d3f8"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "2d4bee18817afb6f326fe41d283d985b"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "0742e479f1cdce3760169d225d6bdef2"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "a26214df0cd5100eb1381f2a1dce7424"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "1fde3e5ba1b5521250274655fbf8a9e7"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "060a420f7ffbde5f8fc55ea613f2b412"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "51fe8d1bcc85ab374ec003f5ed860ddc"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "acd4d7595727b4dc9db90848361db926"
  },
  {
    "url": "zh/api/index.html",
    "revision": "41a3f80a1f13389e6ed51879cfdc2984"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "21029b69bd8e40ec263ed6fda312c435"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "0ce174c831247a37880ba47b8633cd91"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "2fd9248b45f4451642a059eb71a26e3f"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "8f99db1439b1bfbe00c5cd325bd5280e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "b7466d6f41d624d22ddb178e9c0a0de9"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "90641ca60930f8c6b5348b3b27020086"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "d867b939e6a86498afa6894c0d189911"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "9fb27b0fe17694d7e4ba3a3ffa0232e2"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "0f52684db6573f7f586eb395b63b03d0"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "ecea16f0d0976d7476bd1b11b9697a10"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "6851eb72ceca7b341ea186ec0744bfef"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "f59c416dbb27c0ecf856f9acaf3b9d46"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "cad526060dc5b7dcfc32c20363f6c69b"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "05590ccdc6134e0c61010a06a61a9da2"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "530cac3d8d90a86ddafe6f20f9266012"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "d08079cbfcee31b8763dca2e72793d49"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "7b15d2f321669a6f28c8bff367ab76f8"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "045689c71ddab27eb28786817384765a"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "c8821042289f81e28c3e23eb57831651"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "7aa8061afe111d4a79a4d703b30097ca"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "f70cb5a6f7b21ffc2e4a43203568a4cf"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "fea29eb66f782155bffe18fb5e613ec7"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "1ea55e59506f0a301d5d7b847b75a472"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "3e880ddf7cedab1d1ed2a7fe9d4120a1"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "751cda40abe3af03e53a6766a3a5f7ff"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "10b6ca9c86f6514c183da2c51c142918"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "a1f087dcd0ca7ef548ff802606e6fb76"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "c602471f908b68557b19876275169a3a"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "ce716690484f0f633e36ff806d4ed0d1"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "fa630759bd8abbaa6738c5160aaf27f4"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "c3b6b703e08867d94018350734343ae2"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "0470ebc5303f1eb300fb2c9c4d284c87"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "9958764a7e52815897c2e915774cf53a"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "e3deff75c8b82e094b1f99a17a4afa00"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "f030b8da07aee40c73b5ebddea1631a8"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "31d17f9648f02b81e905436393acf25e"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "46d7bbef6e79ac0e9f7a236068a8d520"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "eb53c50897febacf3629c2833cccf40b"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "09000356756120fd79cf23e4526da585"
  },
  {
    "url": "zh/index.html",
    "revision": "2f2732f4c5ed485c3b881e243ed0cc52"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "60433b2f99117be792366de5d99984b5"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "70959e066fd78c877781cf38c9b08328"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "1079cf23b1bf5e216ee502df238c0e2f"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "14a92a721997f7ef56a7539a56f8ca96"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "9bcaf4bd74f493bf1bd746adaa4247b8"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "3508d79c223583ecaeed611a891fbdf1"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "2546699e5623b4693ddf671b76d909f6"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "5fea05bd33d18671e19229f4a7357ffe"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "24036fb1a14113e001df6ef32607bb6a"
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
