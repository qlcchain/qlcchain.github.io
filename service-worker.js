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
    "revision": "0108d827ee70188751e5bf1e40456f94"
  },
  {
    "url": "api/index.html",
    "revision": "8b03e79456fa29497585007c713c11b7"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "8a99ec0d433932bfe957a829d34d7d53"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "cf6e779da25e199ffe29fe7443e2141f"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "5aa2b335be7e6c3fb82aae8220eea497"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "771fa197ca54f2b9ab27ad94ff3df550"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "1c4ebf1b80ba715d4d5753eb217ebdb3"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "69a7f4c5b3213e4cdc0a3c3ef543e502"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "e842f4e42c9afdb1a52268bade182302"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "c2f722b7dabc4437ed3ae362310859d6"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "fb0068d8ca9287fb241a1c6af8be7c7e"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "53dedf46dd1e930cbe3e7075768194ca"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "0d55152dc30e807fc5506883d8604d1b"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "9d989082df58ca6428d6a8f41b956c06"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "a6c0a48eeb98dff882ce87dc424314dc"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "9aa4697c5727a3140cb4dacd0db46bd9"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "bd40f16852ffa1ca4da4a52c4b5456dd"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "f91a39a7baf1037f7c2999dd1b799906"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "91ab9f45432bc4e22a41b7a64375ee42"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "49a2127fd78bf6005c32de5dd56197fa"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "03e8b833bc127b7fb6458ff3a313b07a"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "c0f4a71edd01d5ed981c20afb0b20959"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "cfeeb0a004937c4c9af0b7413d16b056"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "71864da3e86fe14e764161eff03c447a"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "c614d344d34775a791a6331b57c2f1f3"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "d66753d29ecf35d9d27ca8cf56056b43"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "446b33ecb020dae3881109ec56e62f94"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "1cb85dc36ecce29f379c31db548dfb19"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "afe79ba62e707a985dd482abdaba0609"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "4d7e2525baf165835a34373aef2999b6"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "61dce6892db5e62d4817711f27314097"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "f42cb48b834fcd54bc7adb3ab12acc7a"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "c47695222b6b140ca0d63c82e09f4302"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "c671e94844309ac6c083d2e114512a8f"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "9c0e93fa7e58cfd51479a9be435aea70"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "7acd5958368c3bb4ce0cc561eb5eb65e"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "6c772bed5da4d71e9754a0fac36925d0"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "2ab0be1a1e22dc1f254dce9414e0126d"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "fae2d2791657ecffb8c1925582b7269e"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "437cc98c7d7e9c2bbdecb11378537821"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "3e462442ad9d06198ffd0b6ea8752f1d"
  },
  {
    "url": "assets/css/0.styles.0f1ece03.css",
    "revision": "ab9df29060a47b4d4fce3456c828f5f1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5b62d918.js",
    "revision": "26903ae9e22faf639e40c070ddd06336"
  },
  {
    "url": "assets/js/100.8a18412f.js",
    "revision": "6a27eb4940e9a8879e8f12293dcdd18b"
  },
  {
    "url": "assets/js/101.ab0fab07.js",
    "revision": "b39286f9145b8d4fa5f57630c1ebf114"
  },
  {
    "url": "assets/js/102.32398594.js",
    "revision": "a566779fa63674b2d5371c88c8717efd"
  },
  {
    "url": "assets/js/103.e6cad2a5.js",
    "revision": "05a093d50a21da2f395520ec82fb3431"
  },
  {
    "url": "assets/js/104.92004606.js",
    "revision": "66e892217c6bd5c0903c770b89990662"
  },
  {
    "url": "assets/js/105.a2f41d9b.js",
    "revision": "0aa9efef370a683f256b3ef6c4380c8c"
  },
  {
    "url": "assets/js/106.b03ee55f.js",
    "revision": "f0412508656bd10819f87fa9fad8a11d"
  },
  {
    "url": "assets/js/107.cdeab0c4.js",
    "revision": "791e746d38a8d02e37a1bff60c3488e6"
  },
  {
    "url": "assets/js/11.162ccd4a.js",
    "revision": "a17d7257cd5071bd1443181adb610ef3"
  },
  {
    "url": "assets/js/12.6621f1e3.js",
    "revision": "96b1a49183396cff899dcc6e547370b9"
  },
  {
    "url": "assets/js/13.e468accf.js",
    "revision": "9fc306b35c0937611155260a4f613afd"
  },
  {
    "url": "assets/js/14.85068bf3.js",
    "revision": "5db341126e3dea7c725204c052290b95"
  },
  {
    "url": "assets/js/15.08df6b16.js",
    "revision": "b67ec2c6592a4126f8d699660a5ae1a0"
  },
  {
    "url": "assets/js/16.7af56f28.js",
    "revision": "8196dbf92fa02045409d2a11e4eaa72a"
  },
  {
    "url": "assets/js/17.a083850d.js",
    "revision": "eb6f9fd64bda9bc4e87b400efaa92db6"
  },
  {
    "url": "assets/js/18.7b2ee525.js",
    "revision": "6bc57f0ecfcbeedfa85f43924772c899"
  },
  {
    "url": "assets/js/19.1680293b.js",
    "revision": "68279109a39a1bb37efa6896777ead9d"
  },
  {
    "url": "assets/js/20.1cbf1b9f.js",
    "revision": "39bc668ebe467e4d3f76edf302031888"
  },
  {
    "url": "assets/js/21.dd812182.js",
    "revision": "1e527b739eec3545fd60850ddda955aa"
  },
  {
    "url": "assets/js/22.0dda0551.js",
    "revision": "46106178831274fb0fcfc27462019b12"
  },
  {
    "url": "assets/js/23.215fc894.js",
    "revision": "61d220141a4e06f5e8256287abe6b2df"
  },
  {
    "url": "assets/js/24.8d240f72.js",
    "revision": "645b103c5363ec4809e69b9ebff99552"
  },
  {
    "url": "assets/js/25.176b6741.js",
    "revision": "c1ccfe4013735b5aba0f04e0348c7927"
  },
  {
    "url": "assets/js/26.08ea7da1.js",
    "revision": "d83d4a2248b983d57973da438dbf51f6"
  },
  {
    "url": "assets/js/27.6c704522.js",
    "revision": "f7d4659a4aafc882667fa35f008772c6"
  },
  {
    "url": "assets/js/28.fae0b1fc.js",
    "revision": "6b5fedde830b54c899a8ecaf43aeb643"
  },
  {
    "url": "assets/js/29.93602908.js",
    "revision": "1ea687a2dd6b9f29f8a6ec302d91acd9"
  },
  {
    "url": "assets/js/3.f64eb08b.js",
    "revision": "9140700df52da06ac3e4048d7b1d52f9"
  },
  {
    "url": "assets/js/30.9c163f4d.js",
    "revision": "780998f0a2910be834266f86c043c334"
  },
  {
    "url": "assets/js/31.10fdd8ed.js",
    "revision": "aac0f234ad56257fc4a12b1d151bec88"
  },
  {
    "url": "assets/js/32.f5d2d4cb.js",
    "revision": "4c542a420b52d11f790fde6361c8d872"
  },
  {
    "url": "assets/js/33.ccb6247b.js",
    "revision": "fc3eea3bafa5ccb4bbbd455760b89180"
  },
  {
    "url": "assets/js/34.e9c4c9cd.js",
    "revision": "ce53b5292b76a331e8997861a3c76a09"
  },
  {
    "url": "assets/js/35.e5a6b229.js",
    "revision": "9f6c5882bdeae17627246e699ed2fada"
  },
  {
    "url": "assets/js/36.831136ec.js",
    "revision": "3fb0e0b1f4364e06ab17ee80ab43cb45"
  },
  {
    "url": "assets/js/37.29ae0251.js",
    "revision": "a0645b27e8601b90f432d4f9ac40cc12"
  },
  {
    "url": "assets/js/38.8b105dfe.js",
    "revision": "30f3f3d71738d7aea9436a28b33d1010"
  },
  {
    "url": "assets/js/39.3a46a03c.js",
    "revision": "ff9d54845edcb75da77ae5d894fd0d18"
  },
  {
    "url": "assets/js/4.0f5a5684.js",
    "revision": "902805f72e975cba435671cb57d2a366"
  },
  {
    "url": "assets/js/40.e141f6d8.js",
    "revision": "1c36f9fd68a93e684aef50bb9b1e4496"
  },
  {
    "url": "assets/js/41.a309bad7.js",
    "revision": "3dd8b2f7b632d00ff239a6bc7a552034"
  },
  {
    "url": "assets/js/42.6d780fd3.js",
    "revision": "2f17c86b9822f8a4b8bba9da7fe31e91"
  },
  {
    "url": "assets/js/43.2604f0e4.js",
    "revision": "e0b2dde9361c5b95eb45dae9c385f343"
  },
  {
    "url": "assets/js/44.3b861b38.js",
    "revision": "ec15d75a8ae704a8da7177b5f29627f7"
  },
  {
    "url": "assets/js/45.3d5bfe6e.js",
    "revision": "5c194ffee7f1836817591737162dc180"
  },
  {
    "url": "assets/js/46.c57d20fe.js",
    "revision": "b94a0160b41a069ee64371e3b4f61992"
  },
  {
    "url": "assets/js/47.88a1680a.js",
    "revision": "05b06656db104750999df9b1b5fbaf25"
  },
  {
    "url": "assets/js/48.36e2ba1e.js",
    "revision": "3504ee6997edb122748cc8f2c7206b4e"
  },
  {
    "url": "assets/js/49.2968c030.js",
    "revision": "61f013ce2b7e8ad2b0319f5ec1d77045"
  },
  {
    "url": "assets/js/5.da3ddb90.js",
    "revision": "4247c54cc2d73b1899c0eb17e74bd897"
  },
  {
    "url": "assets/js/50.abc82f65.js",
    "revision": "95c03ff3eae22424c6a19f79ec8071f4"
  },
  {
    "url": "assets/js/51.4ee94b04.js",
    "revision": "3ae8a2de84ff6a1d2a119460be7dab1e"
  },
  {
    "url": "assets/js/52.4727166a.js",
    "revision": "49bbd8d1e3fd31368d79e7d77ac108f8"
  },
  {
    "url": "assets/js/53.44cbcece.js",
    "revision": "3feb4242d551ae820660641fcf46604d"
  },
  {
    "url": "assets/js/54.4826353d.js",
    "revision": "c3aec3c19422e84fbee15d3929b7725d"
  },
  {
    "url": "assets/js/55.8e551301.js",
    "revision": "792ae574038608af15fc1d6642d259c0"
  },
  {
    "url": "assets/js/56.3df6853b.js",
    "revision": "73a00c8f0861198ab48efbd1fb49959f"
  },
  {
    "url": "assets/js/57.be2c0ff9.js",
    "revision": "20b4246bcd10a6ec997d377bffa7bef7"
  },
  {
    "url": "assets/js/58.922e984c.js",
    "revision": "6880fd7577631bf65472297239f72092"
  },
  {
    "url": "assets/js/59.d80564b8.js",
    "revision": "ddf01fc7002b4b15d7fbfc1ce788beb1"
  },
  {
    "url": "assets/js/6.436ca54e.js",
    "revision": "ee3b31640af9ca8a5b8537def946a6c7"
  },
  {
    "url": "assets/js/60.55cde982.js",
    "revision": "08e8cbcf6cac5037462985b328d18c38"
  },
  {
    "url": "assets/js/61.38c1b797.js",
    "revision": "ccb3c142961adf6ea4e9cfcc00dfa6c5"
  },
  {
    "url": "assets/js/62.f5ee7f24.js",
    "revision": "50ac23c114aa1a5f6155daa82b0b85bb"
  },
  {
    "url": "assets/js/63.28007f4d.js",
    "revision": "027414af727d6607a46dec53eb2ee8f1"
  },
  {
    "url": "assets/js/64.ff749853.js",
    "revision": "db6c64d2e5d6256ccc46807f8b39a699"
  },
  {
    "url": "assets/js/65.f5df4896.js",
    "revision": "34ae50d6f53db110431a0d40777d0917"
  },
  {
    "url": "assets/js/66.92795820.js",
    "revision": "511b823434f4a6d7babfb76963c7910b"
  },
  {
    "url": "assets/js/67.c62634d8.js",
    "revision": "b341ef3d621f8c38c2ead22a78f1cbfc"
  },
  {
    "url": "assets/js/68.240fbfa7.js",
    "revision": "fd9c9ccce00dfb063f7436dc9c328bc3"
  },
  {
    "url": "assets/js/69.a0468c67.js",
    "revision": "ba8955d15a5279ea03b1556a861e440a"
  },
  {
    "url": "assets/js/7.e64faed1.js",
    "revision": "b74b6973761bdbf36650ad47c1ff34fa"
  },
  {
    "url": "assets/js/70.5bca232f.js",
    "revision": "c636abfb6aaa3eac2c40b2987e309767"
  },
  {
    "url": "assets/js/71.22df7cb9.js",
    "revision": "4dcc6f3fbbc68a4cdb88ed0e2f666274"
  },
  {
    "url": "assets/js/72.5ec1a3c8.js",
    "revision": "0ebd1ce184c734c5e11e192aa3763025"
  },
  {
    "url": "assets/js/73.a69b1119.js",
    "revision": "466fc940899194d96d63f961bf03cd25"
  },
  {
    "url": "assets/js/74.b5f2cebe.js",
    "revision": "4ad93af816e9fdaf50e829b0a95a3909"
  },
  {
    "url": "assets/js/75.b2dd0d19.js",
    "revision": "607ce4d4b45941e0c57b5d656c28a38f"
  },
  {
    "url": "assets/js/76.38c60ce2.js",
    "revision": "20df82e373d77f7ba5676202023e630d"
  },
  {
    "url": "assets/js/77.608b89be.js",
    "revision": "169c41b26d8a2adfb47a6ccf06952ab7"
  },
  {
    "url": "assets/js/78.87fd2f2c.js",
    "revision": "54cc6488e12cc5b770e84fcc4ee80160"
  },
  {
    "url": "assets/js/79.ba4dd786.js",
    "revision": "4c43ad2410599d6ae4aef3d02643d413"
  },
  {
    "url": "assets/js/8.ea69e0a3.js",
    "revision": "333adccac60f23ecc458c76ebec281a4"
  },
  {
    "url": "assets/js/80.9f66f50b.js",
    "revision": "b4c4c67ef2a7dad734f73805e5383d9e"
  },
  {
    "url": "assets/js/81.9e8723de.js",
    "revision": "6192aac86a00c2fb1fc1c8732f84b360"
  },
  {
    "url": "assets/js/82.53227867.js",
    "revision": "37e64cc636673896621a998362eb76b7"
  },
  {
    "url": "assets/js/83.757ac84c.js",
    "revision": "8a48a389722892bbbd8975f518dadff2"
  },
  {
    "url": "assets/js/84.11708cc4.js",
    "revision": "080273072b4a6b925404ee627aa7075c"
  },
  {
    "url": "assets/js/85.7869583f.js",
    "revision": "6c83335f3fb160518367f6a120f48db0"
  },
  {
    "url": "assets/js/86.495e0b95.js",
    "revision": "4cb44b48dcfdb0fb63932d7897d70005"
  },
  {
    "url": "assets/js/87.5d46405a.js",
    "revision": "057c90e9704e7f7815c9a4d6a159d05f"
  },
  {
    "url": "assets/js/88.a5db8c51.js",
    "revision": "c7e316e103c5b434b112b0232c84c737"
  },
  {
    "url": "assets/js/89.78c8e851.js",
    "revision": "1c3d991daa25b075b7cabc0c8fbea8a3"
  },
  {
    "url": "assets/js/9.12e3b453.js",
    "revision": "3ae7a51003a699baeb12e51ac6b24526"
  },
  {
    "url": "assets/js/90.1d2ccbf6.js",
    "revision": "42165025a5177becd0fae0c6b1b18898"
  },
  {
    "url": "assets/js/91.622730d9.js",
    "revision": "11a095a2efc03539835b4d9e68f04757"
  },
  {
    "url": "assets/js/92.b291530c.js",
    "revision": "e16d72bb7f0c333041b4fd8bcb20a171"
  },
  {
    "url": "assets/js/93.f4765f57.js",
    "revision": "ed8d84119c75b04b54e499bbd57020a7"
  },
  {
    "url": "assets/js/94.56b6ac89.js",
    "revision": "61dfad5d4e6ed8fba562884fb80b3c45"
  },
  {
    "url": "assets/js/95.a40abcfb.js",
    "revision": "de76d0fdeb714cb92916216350ab9ce2"
  },
  {
    "url": "assets/js/96.e1fb33e0.js",
    "revision": "52f62e7ba29bb87e5bca5fd139ab8bbb"
  },
  {
    "url": "assets/js/97.aeeddde1.js",
    "revision": "a7af4c30841b34c02bd73f2aac1bb9c9"
  },
  {
    "url": "assets/js/98.a8958794.js",
    "revision": "ecefaf00013e5aaff91dbe3958f5d4dc"
  },
  {
    "url": "assets/js/99.853df67a.js",
    "revision": "97ced6ceca805c82d75007ddfcf4faba"
  },
  {
    "url": "assets/js/app.74331b64.js",
    "revision": "91b192d6b59bf1787d8d6116ba62a2bc"
  },
  {
    "url": "assets/js/vendors~notification.74977d0f.js",
    "revision": "3efcf7f1a484d5540ec6ca2e63edde3e"
  },
  {
    "url": "i18n/index.html",
    "revision": "105edce12a3180d6e415649a6a802644"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "7ec0536c8ee146fe3fd019cf87c1819d"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "54e36590e251336b5a075ab9c7abc3d0"
  },
  {
    "url": "tutorial/index.html",
    "revision": "209e53075ec17f120106d01a7dd9cf80"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "d70c64ef2dee335f89b7009c147d87cf"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "eb8b3d5f8ba7c328764d389d29d5c0b1"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "343c860b60bcdc232c27f906fc02da37"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "93d31a6c1847e51d216830de49360f33"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "cb62b0e25708ae47e6e7dc4f88a8ea12"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "8d968aa5f72b210c5dee012547e50081"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "2b65074ee4c73b62c92214836824e0ce"
  },
  {
    "url": "zh/api/index.html",
    "revision": "ea1d740a7473e9ab26f73ae6abcad0db"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "1b20759ca1a228c0c3978d086e2eba6f"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "ad2a2dce9a38a513afe4d50e8235b90c"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "fedb313554e5a05e55e2389cb1ec971f"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "113303b526c32d6abfbfca85d7ac57bc"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "b590dedbc848d13a951a13d8a392ce9f"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "60a0ed3499c1bebeb1e10e628f8d47d4"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "7254aee18f5af416562567f3ea359f50"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "85517cdded67cea6b55cd10dfb677f27"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "7d4f323e74bf94b60025c33943bf2d0e"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "1762c77f813a3f864fc322c91b36ea58"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "029de1b36523597d663b36b421eb3d53"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "e2c6f5958d539bfb1c4724eaab8769bc"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "6bfd5a2dda6af9ffb33e540b0c598b43"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "b95de12a6b9109ec7e321cdfdd65ca96"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "c0b00370ac7cb300b762765492346b46"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "51dd8039ed948ba8d6c6c3982d9e9778"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "7e42636f7a0f1e7c3d11915a63abc26c"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "e6b8d613ed8b47fe22a4b186d813fa37"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "fffadff780cd2c7978a7fb69827cfb74"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "0be1ad7a726cd70dbc93d319456e0d5c"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "2ae40b028d61a026398c57a724b16ffc"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "36122e5b05b9dd8c1a6a74ac9ad282ff"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "82e2cd332634447dfb90376a1c41773c"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "5def65571daf4653c59d5105eb932f7d"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "63f5079f7d1636b80ac18570800acf48"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "d61188d690253c3650beeac3901ddbf8"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "de235f9240a70acb003a097ae3c627ef"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "7cc9c43ef204e98e1ccb0f66c5e89e7f"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "fb02141a5643b81a16e92143358e1b15"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "fc0a50f4e64feeeb4ffaa41e706ea5ea"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "d203b19647c7e058fccb45da01b0226e"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "32e4b963d13cca16313899972bac8247"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "138b15591080ec69bec8d1099eada8d5"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "5a3efe7bf39ccdc7088b113392622234"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "b4e5b5eac563c7eaed33f67d90c45971"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "7c01614b37d7203607f00601ce6e355d"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "5ac544a730bb60309e58cf1d6eb5897d"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "983b2e6e7be53b9bec78756d12bebf20"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "7251e3d677ff9c22a36a9c8a1b6e3d31"
  },
  {
    "url": "zh/index.html",
    "revision": "3ab78546c3f0b16c3918c512c005525c"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "e89b3036099326a3bf1d30809ecc0b48"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "dc9d04e00556528d9e09a8bbac8a85dc"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "9f5423249ff5cbbd1c3542d8018df6fe"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "9e00c280349dd46fdb17147cc5b6332f"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "e25df7aa0ab7a65cd2a1ef0fcebef196"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "38531997ac93f06d6a20e0862fbf54d2"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "07f5eb8cf99a1be9095e13207586e64a"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "73d944c06b52fffc9da7a37cf88e2c96"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "4bb1e7820292505c6e5a353cf1053d9b"
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
