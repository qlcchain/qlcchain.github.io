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
    "revision": "93f9e94d86d1ffd7800422465f100cdb"
  },
  {
    "url": "api/index.html",
    "revision": "5935c1112a936d030a82289376bf6987"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "fd98f1edd0d8a8f749775b52b537ab6b"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "4237d76d51647d5cf615b27480fc2f87"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "062863edef176ae971ecb3f22b35d173"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "5ac974f860f2c38483411793f39f2c02"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "b3a6bc48cc899cfbe5720840c776721b"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "90072533f2f66fc290ac31468e7abb7a"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "83b5f53204f81d8e7fee767b152c6d98"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "07e57675e06c477cc35dfe4c12d2bd63"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "b605a2d33bb3370afd710ff87c229d7b"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "764d42041a6739b447cd575e5a6c5218"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "f9dc5b6272f57c28a94dccda7e578ac6"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "052ad42052963cb2138c8988980462f4"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "ec2d6e14d879f0f0134f1655259b908e"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "3a775d40c6c138f588c90e024121fcff"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "c608193224c3b237380331ade766f27c"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "ff52910810b8ffc6df455f5906fbafd5"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "74971ec2d594635c60dd1040caf299b5"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "daee91640c9989ca734a160f5e55f964"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "23948b724ceaf73e2935603537a92a80"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "57526367d04db25e5eedb720a43b1fcd"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "a55fce61e3099a90d38da422ddf5e4dc"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "a4c47efd023ac83837585375f254afc6"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "38c63801f76f8b254f6f1bca3c12b26e"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "f63f7760a285058113f85ce5a3c476e0"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "76cd871e2329db4ed35a61a35b0036c9"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "5a63c99ca016d296a0d38410ec8e90fe"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "4b72a256946e0a20b45c775ed565f521"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "f914e19acf901bb6d7a8c108d009a7bb"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "6a4eb0a3ec49484ee6d28b03d2e15924"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "74ba977ab4cf36d09bbc1fb32866d77a"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "e2b219eb42ddac846bfcdaaf734353bc"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "7ccbfeda5ede03154edefa3a67709c19"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "2ce27ce31eb873c54e2fcb4ab6d915db"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "92245b9eb314070bf8eb702721f1eb75"
  },
  {
    "url": "assets/css/0.styles.fbcdc890.css",
    "revision": "1bb8115b1821ceffa27d9b0540ca764c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b94b57d9.js",
    "revision": "7aa75c7b2f40c3e5f19cc0bb14a61639"
  },
  {
    "url": "assets/js/11.98acfd2a.js",
    "revision": "496000bbe12e5bb4a09041f5889f9718"
  },
  {
    "url": "assets/js/12.c7aff9df.js",
    "revision": "35240bce3da6097a65aa94634a87df1e"
  },
  {
    "url": "assets/js/13.eaaf423d.js",
    "revision": "bc49e79974eec017035f7ea91d43dd71"
  },
  {
    "url": "assets/js/14.e60aa506.js",
    "revision": "8e8119d85f4b90ee0c34e53ac466c1ed"
  },
  {
    "url": "assets/js/15.4abe9238.js",
    "revision": "b84f3083440262a81d34fc895dbc6658"
  },
  {
    "url": "assets/js/16.9b470f8e.js",
    "revision": "1fbb3bc2114acc53a4619964913c70b1"
  },
  {
    "url": "assets/js/17.e92b7a70.js",
    "revision": "e22158fc25d43b48828cde14daaaa41f"
  },
  {
    "url": "assets/js/18.0790ea4a.js",
    "revision": "6ff3975619cc618c272b6a785aacbd56"
  },
  {
    "url": "assets/js/19.08445a96.js",
    "revision": "33e09cb799ba48603dce77e5ed803762"
  },
  {
    "url": "assets/js/20.94e8ffdb.js",
    "revision": "34a3b912aa2cce285c4226c2d6f75f57"
  },
  {
    "url": "assets/js/21.803540ee.js",
    "revision": "81ed2e5d5c249bfa89ed6d3b2cf40817"
  },
  {
    "url": "assets/js/22.78f5bc02.js",
    "revision": "7c0047e564eae0f4a0ec640826ebb66d"
  },
  {
    "url": "assets/js/23.59020591.js",
    "revision": "adf2e95472b636f461b65ba08f124322"
  },
  {
    "url": "assets/js/24.d8e4e0ed.js",
    "revision": "3976d6ed4725f5ea3e91a1e57deacee1"
  },
  {
    "url": "assets/js/25.5fb6571b.js",
    "revision": "ea74ea015a8d99cd963d6a5f9217fa18"
  },
  {
    "url": "assets/js/26.123f001f.js",
    "revision": "5071a46ea524126ad47812d92a71ac75"
  },
  {
    "url": "assets/js/27.fe96c3c5.js",
    "revision": "c4be51c3c44ca285a26d9d3e0c0cbbc5"
  },
  {
    "url": "assets/js/28.c954eeb1.js",
    "revision": "b8826ff2c77380cf2e83c74d4c558e37"
  },
  {
    "url": "assets/js/29.1a425ac2.js",
    "revision": "7eab0cc20793eaa6b068d71206e4c1fc"
  },
  {
    "url": "assets/js/3.56c11fb3.js",
    "revision": "b3dd74d7e3b22b7e17df5f4697476561"
  },
  {
    "url": "assets/js/30.cce41582.js",
    "revision": "605b32aa20dd41433e1f5ea4e0f40969"
  },
  {
    "url": "assets/js/31.dd692298.js",
    "revision": "4782c66326e14a6b65e24ae088b94f11"
  },
  {
    "url": "assets/js/32.ce6c22eb.js",
    "revision": "53ff59b9d0d1d485d4879f8ca379c622"
  },
  {
    "url": "assets/js/33.6d965eff.js",
    "revision": "138cc855c7f2496acfed7398c6356eb7"
  },
  {
    "url": "assets/js/34.9132c576.js",
    "revision": "8f52bcea9567d636c77449cbb9b9c61d"
  },
  {
    "url": "assets/js/35.2ff5c5ca.js",
    "revision": "876fb87b7deb0062518f3ddc19ba8001"
  },
  {
    "url": "assets/js/36.32a71501.js",
    "revision": "db8aac77036a593712f61f8dba354a2f"
  },
  {
    "url": "assets/js/37.7b2a6fce.js",
    "revision": "32d6e9532da6cb1c144bd28e77a47cdc"
  },
  {
    "url": "assets/js/38.1c4e2be5.js",
    "revision": "f9a845c0c0c56ad339b28dad987e7fb6"
  },
  {
    "url": "assets/js/39.e5e9dc8c.js",
    "revision": "379f04afebbc36ee3f26abcb3f1176bf"
  },
  {
    "url": "assets/js/4.affdda8a.js",
    "revision": "8719de55e1dbfe9086bb91152889cf1d"
  },
  {
    "url": "assets/js/40.274e68de.js",
    "revision": "275e9b5aefbbb40b1312730e685a73e3"
  },
  {
    "url": "assets/js/41.48b61b8b.js",
    "revision": "2b27f270d146732529840366488fae40"
  },
  {
    "url": "assets/js/42.5485e27a.js",
    "revision": "4866d6d98909af4f8b87aa87f8d545db"
  },
  {
    "url": "assets/js/43.c152a884.js",
    "revision": "78b4d85468f8a499da57a7441bcb2c11"
  },
  {
    "url": "assets/js/44.b0df2dd3.js",
    "revision": "81f679b8cb24d8e3c04cb25da1752ba4"
  },
  {
    "url": "assets/js/45.d52816a4.js",
    "revision": "a40dad7c0103bb34fda68d1ed0e94d14"
  },
  {
    "url": "assets/js/46.ea3ba222.js",
    "revision": "4f3111fb334f4f62dd8650f6bed08b5b"
  },
  {
    "url": "assets/js/47.a7433f97.js",
    "revision": "3604f7131d87080cfe8d4ee7e8bc5d30"
  },
  {
    "url": "assets/js/48.723d1710.js",
    "revision": "2681b70b96b232ebdf49767b86c552c0"
  },
  {
    "url": "assets/js/49.9338d5fa.js",
    "revision": "89051a1979b3c127cc9471c55f8fb68b"
  },
  {
    "url": "assets/js/5.90c55488.js",
    "revision": "88f72468fc3c3cfd42ca256d2238a766"
  },
  {
    "url": "assets/js/50.e402f6fa.js",
    "revision": "d73fea16cf89d68b5c202ef46cfd6e4a"
  },
  {
    "url": "assets/js/51.e4da0a89.js",
    "revision": "7d4a3487cf4f46d0ffddde9887debbb6"
  },
  {
    "url": "assets/js/52.73062706.js",
    "revision": "b8e9e21920d9d79cf617a34febe44169"
  },
  {
    "url": "assets/js/53.066a33fa.js",
    "revision": "f13c82e32574f42729bad54c6925ad17"
  },
  {
    "url": "assets/js/54.69d8644f.js",
    "revision": "877a8f85ca1c600f404ec5fea6f24037"
  },
  {
    "url": "assets/js/55.e5f76e83.js",
    "revision": "8c18854ef4153da22a4b90ba35ede1a4"
  },
  {
    "url": "assets/js/56.162cf951.js",
    "revision": "1b897da5c31f50ae6d36a79f37730b8a"
  },
  {
    "url": "assets/js/57.b81c0837.js",
    "revision": "a29e93d7c06da446b8340ab0714741a0"
  },
  {
    "url": "assets/js/58.22908c7f.js",
    "revision": "37740e444ca6470b42be83461a810921"
  },
  {
    "url": "assets/js/59.34008990.js",
    "revision": "9aca25b1130d64040bab1495ffac10ff"
  },
  {
    "url": "assets/js/6.ea422aa1.js",
    "revision": "f943b09b0af7460fbbbbd132f6def90f"
  },
  {
    "url": "assets/js/60.e31fc2c7.js",
    "revision": "26735133ada4c10b6e8f1f1c36c2b7b1"
  },
  {
    "url": "assets/js/61.9a98a0f5.js",
    "revision": "a78914786f262edb3e6b83bf67be0e81"
  },
  {
    "url": "assets/js/62.6fe34e42.js",
    "revision": "d8eb21cdea7fe87a09171c2e02200ffb"
  },
  {
    "url": "assets/js/63.38c30da9.js",
    "revision": "b0a77fd82991ffef2a1beb67929fb246"
  },
  {
    "url": "assets/js/64.9b43a7b2.js",
    "revision": "4673f2de96671cbe30ee131abc07c961"
  },
  {
    "url": "assets/js/65.7cccb185.js",
    "revision": "2e30c28055bda18d03c72cc9d47f63a5"
  },
  {
    "url": "assets/js/66.37994991.js",
    "revision": "a79097a69054cbdda4b2b7935e3d2597"
  },
  {
    "url": "assets/js/67.50f2f0f3.js",
    "revision": "55b934379c45c0f11be1818017ec886f"
  },
  {
    "url": "assets/js/68.5cbcfeaa.js",
    "revision": "ead5b862a17f01500c05bdd706954f0b"
  },
  {
    "url": "assets/js/69.4aa12ece.js",
    "revision": "601506ff6c2a083b84634a23561e0eb3"
  },
  {
    "url": "assets/js/7.52342af5.js",
    "revision": "84ed26220d0973e72e44674c2318ba89"
  },
  {
    "url": "assets/js/70.bd1c9a4f.js",
    "revision": "2e31f82fa18428f6ba5a171026406feb"
  },
  {
    "url": "assets/js/71.a2653770.js",
    "revision": "f0bc452b548a92f883f7b6ee63cd649b"
  },
  {
    "url": "assets/js/72.ed653e95.js",
    "revision": "3b137e699445ea104dd17321813e8f38"
  },
  {
    "url": "assets/js/73.a3ad509e.js",
    "revision": "a8e32c3da18319ac6070270f6f42d1e0"
  },
  {
    "url": "assets/js/74.c9c7c99d.js",
    "revision": "e7fd7b6dbcaeba059c258f0d0b5faabf"
  },
  {
    "url": "assets/js/75.b6c2daf9.js",
    "revision": "7c4b02132404537f916bdd496659425f"
  },
  {
    "url": "assets/js/76.84570157.js",
    "revision": "771cb7e6af017c9d42d0c35011fde961"
  },
  {
    "url": "assets/js/77.54050817.js",
    "revision": "a52b2b72ffae10da8221e16aec18144a"
  },
  {
    "url": "assets/js/78.96e72b89.js",
    "revision": "2e91a87211ac274afcee3a03059862c4"
  },
  {
    "url": "assets/js/79.01a98c76.js",
    "revision": "14247f59bcbf2eb88d77a545955be429"
  },
  {
    "url": "assets/js/8.ec6f405e.js",
    "revision": "e5de9b8078fd5c172a6f9128ea65b5fe"
  },
  {
    "url": "assets/js/80.877d0ecc.js",
    "revision": "16466846229f5a9669787eeae56a0416"
  },
  {
    "url": "assets/js/81.04af9e7f.js",
    "revision": "147006f03b3987f18a48d2c707a1d99f"
  },
  {
    "url": "assets/js/82.9b5f3fa1.js",
    "revision": "d4595a2e41496b7b54a6ae6277725d6e"
  },
  {
    "url": "assets/js/83.eaea8e4a.js",
    "revision": "c5c83c30f255ae1a45ea57e6fd8d5dea"
  },
  {
    "url": "assets/js/84.7ecc8f50.js",
    "revision": "b1c499a64a3707dcaaeb6ce033baeedd"
  },
  {
    "url": "assets/js/85.0e7b4a87.js",
    "revision": "c1e4c829ab709f967722d34582a973af"
  },
  {
    "url": "assets/js/86.f1791c2e.js",
    "revision": "62355b94192b693ab61440edfc70f684"
  },
  {
    "url": "assets/js/87.342b8e46.js",
    "revision": "93fe280b782ec7dd8e44f920e290d8e0"
  },
  {
    "url": "assets/js/88.a3536196.js",
    "revision": "ff6ff569b6e661c81f8d49b04cd36467"
  },
  {
    "url": "assets/js/89.f1cef17c.js",
    "revision": "3eb9a220eb5ca892543b07fa9bb9b90f"
  },
  {
    "url": "assets/js/9.635ef403.js",
    "revision": "64dd8c51426078266aac87d9af68b7ff"
  },
  {
    "url": "assets/js/90.d8cfeb87.js",
    "revision": "8aa59fbfb453c2efd981a93e1a68331d"
  },
  {
    "url": "assets/js/91.b0650ac0.js",
    "revision": "75eb613c6475e125e31f748c7e160919"
  },
  {
    "url": "assets/js/92.b71c4cc0.js",
    "revision": "6bb86ce1d2c4fc6218228cecf817ef3d"
  },
  {
    "url": "assets/js/93.ab575b28.js",
    "revision": "7c69d0efc65f1bd974602c26919323bb"
  },
  {
    "url": "assets/js/app.d96bbf56.js",
    "revision": "6d182467265aaa22f482f6a7220982bf"
  },
  {
    "url": "assets/js/vendors~notification.9cd526a7.js",
    "revision": "d9c1b7a8ffd9f052698da9aba493d2e1"
  },
  {
    "url": "i18n/index.html",
    "revision": "df9ee108d8c0f1b8ec217a774abfdf7e"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "83be12c798ba54b4bd0aa34dff2e2622"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "fd6f52a3c7ad12c25033ca5d36a45e07"
  },
  {
    "url": "tutorial/index.html",
    "revision": "3900af2054bbb3f064bff1685cbf286c"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "31d7aec4bc8be23dcd1b79707097d749"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "ada872e1ab0915925615b96c937d2c13"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "4b6b474ff49f89737b4353cf4072d6bc"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "e0891fde83c6ca5812ca06467ea9a03a"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "0636b093f53df7eb6dced1cded679142"
  },
  {
    "url": "zh/api/index.html",
    "revision": "35814736e6262e436a1a9c168e63f117"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "14a660a7a6b8da7cc28cf94f20d7363d"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "4eab5b218661233c0d5e0f5e9af7648a"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "8566b444090dc7e2c27f35117b0ae888"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "dec571076e3822f816b49dbbf715c4e0"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "9569a69cc3eab70ffc16a58e84e42daa"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "17b1c2a8ca6cf78955da830e81b20a1e"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "ece2ed2b3ab1bb80c23e46c69653c418"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "cfee77d48099307f4a2041edf699d0c6"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "13e1825499d66c8b66384d68aeb84c22"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "cabee07462a072bbedea088bb08dac6f"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "c23bed7b9330407b846352c188d01db3"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "e7190490604d232168179416ab2d97c6"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "80a23dd23e50d1d04ecfeb8f7b74cf63"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "78be5adc30dac1abf123d928b38b62dc"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "abf46d51fbf661a73b50c87bc0130c3a"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "5ccf880a34cd35fe24221053f2d4ca78"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "920b90bc5308e5be007287c92823c328"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "458aa289b876cb9090dd0665b98d507b"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "a3459495a7dda4602eb561c9a5c20125"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "bb063cf244e30115f1f304ffac920fe0"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "9b0aa3cc4701a93516759c190a229f85"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "5c858a45140ba3ed388ed69107c29912"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "20208b7490482dcfa35e9df3119f3b26"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "6455ea92f50915928df839dcb35db550"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "1c5aab7c1a221635dc0913b765401604"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "e55a8bd9d73c256512a32249d084b8c7"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "156d8e960c0bcc9b73e458f2302d1f3e"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "f537b62c7ebacd5c90dbd098c5cda90e"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "6c0e1442f8bcdf4943d487c51aebf239"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "ca6478582ac18608bce8178d233f6a06"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "551640e629155bc276e3f98e49d96611"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "59d9a3f64b70698ab29795d5a3142aba"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "0e594c8115eec7be422103893970c187"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "cc79ebd8d6c1fb9c691476e67fdf4a7f"
  },
  {
    "url": "zh/index.html",
    "revision": "acf21b6659ae78decbbb22a18da37641"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "78b84f2e856e5e7282ca350c6c578dc3"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "e6f4a9c38a0a721d191d903e743ba460"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "4e8496659df09335d045a6a796e53961"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "f6b6cd13d1cfbcbe0aba02de101a922c"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "5ab389f2fd1602b031b2209c343f67b5"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "e09cfe5be138a7d80fbf7b0ece2f85d8"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "4fc574faaca5e2b4d21a1344d1ed185f"
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
