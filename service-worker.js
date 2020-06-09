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
    "revision": "c0e4829a3b16ec196409ca1a8e7044a5"
  },
  {
    "url": "api/index.html",
    "revision": "d58cc419974e6a86f5d300416bf8c647"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "27effe93c753ab89cb57ce6079662159"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "0f5f7674c70eb7478587ce46176eec63"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "6b04e4aaca06204965872d6aa8805c39"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "d35cd215fd3146b845a12ec2490cacda"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "935b58a70bfa45afca2685f60ead01f0"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "4eacc0df6adf8e9a72c815a6dbe6102a"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "e330b01594a08d40a8c59ae71f6900c5"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "f0c56ba9a8b00a690fb53df2ef1a063c"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "fd8c25fe609059b22df4629e4339f18e"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "a4bf31a6bf470893c9405ccf8fffdaf8"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "3b370b79731eab276360f59c60643773"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "93525bcf62a18f90451503bac1d7b2ab"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "c03e2ebf16898bc81cbf0b0e1e3c30c7"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "ec29d63abe4685767196eab99967984c"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "1f4cc7f4184de855ffdb2053853091f5"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "726127fb30a6a285b5069412c9435980"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "ecaf9751bc7e40c423ef1e0e81641dae"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "e2f25d490a76495eb87e05e9bb61977c"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "73d4be3b84e32b7e2e4a4571352f1702"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "17f8558ae20fe3b59d4d2519566ab49e"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "7a2d47a52a5437c0a6607d3f2e72b25a"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "1d88be416e0ef38fac85185ea7c4de5e"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "c76b9aab8246fbf823fdeaac95383a39"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "8cdf1d33484ed4da1780807549e9165c"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "b096cc301ecb96e002008366d2dfff4c"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "af769aab372dba27f655c22ca2f9f0a6"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "219cea1e63d8c050e5f44a18e87b57b3"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "b4ccfa05b0a94fbae37172a9680466b3"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "222bccaaeba1575fe553c34c0380ce59"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "3807579278d77be50dab5e7722dc104e"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "3126f1887b3f0970df17621f5b9615ac"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "63ff338f7bbd79e77c1de47e7745e55b"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "4e55700db558c171aa35630b5c6f9beb"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "ba4d8a7180705d47fa0bfb19e663dfea"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "5a8d9a86266c1a063c60717b715f618b"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "45448427c4157cde5d397375c0359ae4"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "f92f1b1e70f3a9cd33b4d481870a1374"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "8fb76f78e90c9e5ab1e1411146ef094e"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "4c4c43405ea96dadcca82c04d3665a0b"
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
    "url": "assets/js/32.440ea328.js",
    "revision": "40e355cce71932389348fbc749f8dfbf"
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
    "url": "assets/js/45.621f4a5d.js",
    "revision": "c14a27e8c05c2735168e437a909912cc"
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
    "url": "assets/js/95.7521d0ff.js",
    "revision": "bcfd8211f52732e9e824fd0813b7c3cf"
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
    "url": "assets/js/app.69dd2bbf.js",
    "revision": "c95c2c14c2ddc7263f7739ecc7d62f24"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "8d4c37c0021eebe5114dbf1d1ed01f9b"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "caf764ecdc0f57f5e644e738c4854184"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "3d5a948881102a40f4520c140fb72905"
  },
  {
    "url": "tutorial/index.html",
    "revision": "95443941f896ba093d04d7950fef7ec3"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "7f8bff75effebdc55c2408044942312d"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "1d9ddb4b757a714c45be77a609a1eb1d"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "c7ef2f08093b7b650a4d470908f1231a"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "3de04df4a7e57904938553bbb6833806"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "c33f7f9a7d0a3dec550a73317518650d"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "0ef54b742be089d26ae7fe9e8b976451"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "9e71c29b1e84a8ab0344d35527ae0c81"
  },
  {
    "url": "zh/api/index.html",
    "revision": "f02fa6f0dac8343212e779662e6233f2"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "3281af602c10517dea4a879a15d903c8"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "a9e43c0e82f99d5924872c890fa12bab"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "2e45539631d39628b88596c5949dec46"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "692147472163b34c4e53286ab2ddaf1f"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "812641fa1749c16c04611b3db34a9a0e"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "2c2a84525f871df24a190216001fe7a0"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "7d5a1b904886307ead0e28aba0c33c64"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "8624eb7b98894ca1ee0b79661375050b"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "f8c2f1dc2144d3117b75083262ce813c"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "27d81efd6b60ceae25f7870518162095"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "3b3f69b1b39f33342f63cc708b05ffb6"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "f17342aaece0661bc74276f7b5eebb28"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "74261e7476f85402b9756898e4d87936"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "e5db005228e44a307de644261096d71c"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "c0a2af32e9f2b958aeb3fbfbd12e794d"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "019b60e651f40f272e9d02d3f6b2d209"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "26459d6fbd7da8408b40feb92d0b3b51"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "f219b79a5e1f3737f3889b118e9e1f57"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "9574652cc4939176b6e3201ac0950d88"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "80c2f311fe3f30f97cbb931d8f7045c7"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "2773e8721e91bcb4074d243eb3fd1b44"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "556b379f52a562599ebc3c9abd2e0f16"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "5829aaf1d22cdb7c2c2f890bdd79eed3"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "fcb086c86b47fc5ed0d46f8235da1cc7"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "90981733912742ae1e1f4a4fef3162a7"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "04806142cd561568a8cc7d68b15af22d"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "7d22ce52656b9f45758a1d70c8ed11b3"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "6b28b8e0fbd75875a8a3a91626b37be5"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "0d1bdccc7fbebdfde226e9f25c667261"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "70b04ea54fbae27c07c7b9c35aedac13"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "372c0c0315185f200ca6bd5cc8464791"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "0bd33bfac93e374362c0311d1b7bf13a"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "51dd7f89ff1fe5690df58591a91502d0"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "d9720232d54e8ce4a502f9352ceb10e4"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "152f27210e7a2d59454a9b140a321700"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "92dbf31eec0df47d7bd727abaf30ad63"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "fce67b0005f3ceaf833ab510ac1bdc0a"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "bee17a90ddc4f670e23f95c5c3cad669"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "6ea91efb203a1fcea7a8bf6a71d9277e"
  },
  {
    "url": "zh/index.html",
    "revision": "1091b4d5a8c01593b815423627130412"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "de8a43b959cd2fb38f458e13c79dc8e7"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "a1a39f07519dd7b610bbd67c6d5ad63f"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "15c429b7663ebd29093750142a0d57cb"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "4dcfe8d30b9f50098897e0deef97b8f5"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "9660c188cabe645f59805c555a6fb3eb"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "f6a88f6d3f092a0ece4cbfc5caafbdf2"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "2e762256028825cf1c6450ee0be5d25c"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "3c1538b7253641fd0a4e1efef2b6534c"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "d0dc5b9c39835f0630d6e6916ff53fba"
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
