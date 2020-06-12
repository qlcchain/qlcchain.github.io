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
    "revision": "5961bbd803d095693c96639342c90cf3"
  },
  {
    "url": "api/index.html",
    "revision": "db35360755cea33b6b875be74b23ab1f"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "7cfcefac1378fadc08fa5ad5138e4945"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "257f2085f007ef8c63b34fb05c1d9b53"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "0901c0db5ca388f8341af666551f3d43"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "cd369be5eb98ca6979c981b0403d6362"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "44053690db556e6ccd2e83218418ca81"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "41dbe4691ac411421f4e54e71f440898"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "498978fe6201c37137eac986b2367680"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "b1266089f5bfe1f2f7bfaf8d6aa4a721"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "c2b9788704dbcf84ebe8e2e9eff37e43"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "7c31611fe5d8555d1c01665659084e8c"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "aa238576ef33f490298e2d0a73a3a90d"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "8b368a0a6deea7f5d82f43388180828a"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "ccc49b9c807f2f32f21343fd0be0823b"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "bb12884ca8ab963d7db13c32b976ece8"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "11d82da621c97d4262cfd98165fd32fa"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "5bb0612a1938f46d888b875c23098261"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "2b99191fa86b39dbd9b42ea95bfc1970"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "d4449ccc499d86d36b189d0a0d20a699"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "cf4980dde41c29d219d49ff2fd31f7ac"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "a9e2afb1b16517822e84bf01d99055d8"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "89e9a3e945f920d08a4f70b00f9231d1"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "1647875f3090f85d9b468177628b962c"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "05cd854bd99a281bb4546ec2c08504aa"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "195d66f0a733005c87431209f52afd60"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "bf82d33ea8a30cf35e619a798c9e4fdf"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "2949f4d78c36842be6aa11fca39b4338"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "84ab31cefe59857d130e44a41e53026a"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "71aeb3653441297cf1b4c48184a6e959"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "a7654044b817665e69c6dee85ad38691"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "6fee24b3a2446fd27b934fb50a14cebd"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "1d8aa55e6b5369bef50d2afa6079e04e"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "76314afa572b783b8d09749e425644bf"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "789b2afe836fb5319e16ed724e703656"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "76a4f958c5dad3c46707bdd7d83ef3dc"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "74b3544177130d06d94eb14511ac9c2b"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "1147c8ce101c12c9e161a0fd5ab7dd2a"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "7717c29b933aed68cfe19ee8f8366d1f"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "454064d51f14470092a4def27fb2091d"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "53f5f69c03cdba4b0a80d3aef8ab609e"
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
    "url": "assets/js/32.b8f54437.js",
    "revision": "37ff7ed59b0692866eaa8ab6a2fa015a"
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
    "url": "assets/js/app.afff4af8.js",
    "revision": "654d0b92f151ed1f1be0fe985e9a1f60"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "c107b43935912c2ff28b66db04f59114"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "977d3fd16fae55039e0aac55227af33e"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "41809f8b45280fd43fa392d34e809f90"
  },
  {
    "url": "tutorial/index.html",
    "revision": "664842501860ddb82df50dccc9dffabc"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "2321b29d17cfa051fc90130825072f37"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "796dcc603ede406e7971fdc5f1a313a3"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "0e66893f5f31419f90fa26f8af6bae7d"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "4439f9c6ea79548125ba19c706e1c26c"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "d6913b011ffed0e7f593c1f6f4672964"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "b087b6dc66b2079bf6ce81593ceb52df"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "5e18f9d23961f3dd1511fc06ce888b06"
  },
  {
    "url": "zh/api/index.html",
    "revision": "059651a6efd82fbca8014ce5089f6e39"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "59ca5bcb06be6daaa979b4542e161fac"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "42a70f69c32bae074c98ccc7d1c6feaa"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "47235e6e7143aaaee58929a8a6f00287"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "b23a62223c203befaf19bbb3ef97968d"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "e3d2d16d1656f35a4db2b401536628eb"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "a2550345bfa0e252f61c7d632b97943f"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "b330bd92562115644204b3f08d9c161f"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "70cc8753361123d6b959888baed394a2"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "1b8c31184f0f626b0f22106dd45c5877"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "f2904bf0262ad1e756fac78bfcf534b5"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "7a776928b804ae4b0f6edf07b48f14c4"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "aa6cc618af8fcf6a86c8c8d0c80d8c32"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "be1c4cd1d124790588e5d9700bc48cbe"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "1420fc98123e60f4b83bf02ff6d44744"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "9ca9b9e23571667f2d287cc599d0d531"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "1664cfcaa51e880927a85b048211f14c"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "1aeb9c8509566c0f0d8bed3872beb90f"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "92c758781b877b56a423549b7a2ada3a"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "742e2591eb301d1e6b5f2a8d8d485e23"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "31cded6017c1ecd7598ec8dcd61e7f19"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "417bcaead0bb3b9dd013e43f73477c75"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "a2d996582cd96b9fed67bab7be39c1ac"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "595c9a3e2ec3b27cf9c5016e1c4a7b3f"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "44a02699b4c2a738daf1880881619fe5"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "c68b6b79735b808e0fd1e6545c876efe"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "1fad51c225c045cde12f40841c73c0b4"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "0810ed77c796a55afb714bf6e86de4a8"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "f30b8940464a9585b94d6afd4d8fc7d8"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "82cc2c283229b3ea4380bea321ad7126"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "0deaaf049ca2fc55f53a25fc08125c5c"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "d085b0110c37e15da736e3309b9f444e"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "867daa86332ab623d475c013473e0594"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "2ddfd5c5a21d41515c14708798fdf279"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "c58dfbc9e0d4a8c4120de0cf5fd36cea"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "382936970c924eb1257ced041460f360"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "2defae0674eace002c759b81138dbac1"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "18ad71078b2447b2e0a05830f587d594"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "9b9a92e478d6aad3a5262a64d6e376bf"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "748e34dcf51f64695ed4d617975e2ac7"
  },
  {
    "url": "zh/index.html",
    "revision": "4d4fc91d266d4bc13dd8fcee7e95bdfa"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "bcd92914019089a678f579b8ca25f440"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "5caf1b3a1f09fe163d268f6a017875f1"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "5db321d9ce653f3a79ed02ee80e792e5"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "2fd2613957dcbf98ab6b1f76313ef634"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "7669a6f835639c38313f599dc8c58fb1"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "55836bca284d1d2eadcf9daedef2a026"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "8ccb8535df777a86debf74b567f971a9"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "3d2fde7e2e3ef97599e2c7ecaaf3599f"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "a4c24ce6c03d3f571f25d50aa4a21146"
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
