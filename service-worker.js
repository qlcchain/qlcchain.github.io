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
    "revision": "5df84aba7badafa484145698f310fd12"
  },
  {
    "url": "api/index.html",
    "revision": "cf7d8122c5e9933e75d4ec28f53917fd"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "f67e3d447f9be0482bf612191b866df5"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "85afc963bd3f2f24a31e713b4bd69fa8"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "e1d2622ab79ec96d16d525968a632acc"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "accfd9a67a2c98bda06e8d8471c2e413"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "29d9699734f0deb7dc2193a68e505e09"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "9f81d7207ef450a922ddabba7ee44e95"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "3116efbaca3b9c6515a779400893b9d7"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "67327a0ee661e536af5f51762880c131"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "3c4e35f283586ff302b1c5fea967d7a7"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "1cf9f9072db2e8454caac329ea6ea7f1"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "dfbf2595348522e6d227e85ee65ff7f8"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "3959149aa3407c6b7bf7497da6adc5ec"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "0bbe82728d4c4122f2bd1b9023bb407a"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "6c6f1698fcd48ed8f7b8fd1c49e5db7d"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "1b4a3454a108c01efd5444e0d6fe7b8e"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "be368fa6971a4a5e2104c497dbc861fe"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "f502365e8824c3c8f9529821990f287a"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "8aff69605ff7c4abf325e9080a6fa9fd"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "fb97f2296bf3e726a41adbeae982de65"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "64905a565a4f33ea60ff352703cbde06"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "4e3dce58a752fea471babd561880d52f"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "a3dfb65cefaa8c2d251509d50e021e7a"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "3b4ab42eade3a322613990ae22fec8a5"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "7cd54bab2afd9ca7e62e24c299cae0ec"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "4ebd4d5a5a4f31ac063d5cc4003c403b"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "f58296d6182dfdf81bea15f080f052e2"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "f7ce981322774eafcb9cd946226e625f"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "4d51313280af2848f2e2381b8c20c5a7"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "60836f7a3f068033bae91bca6c28aca0"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "4dd857429d00ed8db8b8abc7be2291c6"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "fdbd80e1bbecf37a577fe15b613191e5"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "b15fb1e1a5dac0258085e906ad79cdb4"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "5a178cddb5d4bedc6fbf3a7000003fd3"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "4e937a3ba86883e436fb0dfe49ffbfcd"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "414a8e8df7ea458ce1f99c0a9badf7b5"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "5f95e3fc9c816d92741d516acb4cb41b"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "a7bed02542fd4a56bbec099dde578e23"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "753f3ea8cb2bada702a20f840aea5af5"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "a29f3046136f8d8ed72cda29c80d0d30"
  },
  {
    "url": "assets/css/0.styles.d2d5f00a.css",
    "revision": "ab9df29060a47b4d4fce3456c828f5f1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5bc97b54.js",
    "revision": "26903ae9e22faf639e40c070ddd06336"
  },
  {
    "url": "assets/js/100.a29c1556.js",
    "revision": "6a27eb4940e9a8879e8f12293dcdd18b"
  },
  {
    "url": "assets/js/101.a80de664.js",
    "revision": "b39286f9145b8d4fa5f57630c1ebf114"
  },
  {
    "url": "assets/js/102.0b2ed2f0.js",
    "revision": "a566779fa63674b2d5371c88c8717efd"
  },
  {
    "url": "assets/js/103.518ffa8b.js",
    "revision": "05a093d50a21da2f395520ec82fb3431"
  },
  {
    "url": "assets/js/104.3fca1b13.js",
    "revision": "66e892217c6bd5c0903c770b89990662"
  },
  {
    "url": "assets/js/105.26815758.js",
    "revision": "0aa9efef370a683f256b3ef6c4380c8c"
  },
  {
    "url": "assets/js/106.07162f58.js",
    "revision": "f0412508656bd10819f87fa9fad8a11d"
  },
  {
    "url": "assets/js/107.33b3d8ce.js",
    "revision": "791e746d38a8d02e37a1bff60c3488e6"
  },
  {
    "url": "assets/js/11.c6b2f437.js",
    "revision": "a17d7257cd5071bd1443181adb610ef3"
  },
  {
    "url": "assets/js/12.84d6075c.js",
    "revision": "96b1a49183396cff899dcc6e547370b9"
  },
  {
    "url": "assets/js/13.cc498fed.js",
    "revision": "9fc306b35c0937611155260a4f613afd"
  },
  {
    "url": "assets/js/14.f84414e0.js",
    "revision": "5db341126e3dea7c725204c052290b95"
  },
  {
    "url": "assets/js/15.db45e682.js",
    "revision": "b67ec2c6592a4126f8d699660a5ae1a0"
  },
  {
    "url": "assets/js/16.6e605e6b.js",
    "revision": "8196dbf92fa02045409d2a11e4eaa72a"
  },
  {
    "url": "assets/js/17.65277af0.js",
    "revision": "eb6f9fd64bda9bc4e87b400efaa92db6"
  },
  {
    "url": "assets/js/18.99d2c63f.js",
    "revision": "6bc57f0ecfcbeedfa85f43924772c899"
  },
  {
    "url": "assets/js/19.82633078.js",
    "revision": "68279109a39a1bb37efa6896777ead9d"
  },
  {
    "url": "assets/js/20.71742398.js",
    "revision": "39bc668ebe467e4d3f76edf302031888"
  },
  {
    "url": "assets/js/21.a8fc1a29.js",
    "revision": "1e527b739eec3545fd60850ddda955aa"
  },
  {
    "url": "assets/js/22.a1611983.js",
    "revision": "46106178831274fb0fcfc27462019b12"
  },
  {
    "url": "assets/js/23.a2b8a173.js",
    "revision": "61d220141a4e06f5e8256287abe6b2df"
  },
  {
    "url": "assets/js/24.2cf76815.js",
    "revision": "645b103c5363ec4809e69b9ebff99552"
  },
  {
    "url": "assets/js/25.a101ee9e.js",
    "revision": "c1ccfe4013735b5aba0f04e0348c7927"
  },
  {
    "url": "assets/js/26.b47d979f.js",
    "revision": "d83d4a2248b983d57973da438dbf51f6"
  },
  {
    "url": "assets/js/27.f90ecbc2.js",
    "revision": "f7d4659a4aafc882667fa35f008772c6"
  },
  {
    "url": "assets/js/28.25ce7631.js",
    "revision": "6b5fedde830b54c899a8ecaf43aeb643"
  },
  {
    "url": "assets/js/29.a9e14a2a.js",
    "revision": "1ea687a2dd6b9f29f8a6ec302d91acd9"
  },
  {
    "url": "assets/js/3.85d5ce1f.js",
    "revision": "9140700df52da06ac3e4048d7b1d52f9"
  },
  {
    "url": "assets/js/30.88d8bcdc.js",
    "revision": "780998f0a2910be834266f86c043c334"
  },
  {
    "url": "assets/js/31.f4af4f74.js",
    "revision": "aac0f234ad56257fc4a12b1d151bec88"
  },
  {
    "url": "assets/js/32.40b9ab28.js",
    "revision": "4c542a420b52d11f790fde6361c8d872"
  },
  {
    "url": "assets/js/33.6cdc0774.js",
    "revision": "fc3eea3bafa5ccb4bbbd455760b89180"
  },
  {
    "url": "assets/js/34.ca1e4f9f.js",
    "revision": "e0382fed3c7c1459d1cc92fd8cc45e0e"
  },
  {
    "url": "assets/js/35.6b168bef.js",
    "revision": "b536e3226082064bcd29bc28cadb4c3c"
  },
  {
    "url": "assets/js/36.f02dff21.js",
    "revision": "3fb0e0b1f4364e06ab17ee80ab43cb45"
  },
  {
    "url": "assets/js/37.6b2b810e.js",
    "revision": "a0645b27e8601b90f432d4f9ac40cc12"
  },
  {
    "url": "assets/js/38.0d2b70fa.js",
    "revision": "30f3f3d71738d7aea9436a28b33d1010"
  },
  {
    "url": "assets/js/39.e763b315.js",
    "revision": "ff9d54845edcb75da77ae5d894fd0d18"
  },
  {
    "url": "assets/js/4.2a9e4920.js",
    "revision": "902805f72e975cba435671cb57d2a366"
  },
  {
    "url": "assets/js/40.90869509.js",
    "revision": "1c36f9fd68a93e684aef50bb9b1e4496"
  },
  {
    "url": "assets/js/41.02c0eebd.js",
    "revision": "3dd8b2f7b632d00ff239a6bc7a552034"
  },
  {
    "url": "assets/js/42.717e7a7a.js",
    "revision": "2f17c86b9822f8a4b8bba9da7fe31e91"
  },
  {
    "url": "assets/js/43.654610ec.js",
    "revision": "e0b2dde9361c5b95eb45dae9c385f343"
  },
  {
    "url": "assets/js/44.c16b0718.js",
    "revision": "eb526ef6a9eba4ab549fdedb47d2bf12"
  },
  {
    "url": "assets/js/45.0f369275.js",
    "revision": "5c194ffee7f1836817591737162dc180"
  },
  {
    "url": "assets/js/46.d3aac969.js",
    "revision": "b94a0160b41a069ee64371e3b4f61992"
  },
  {
    "url": "assets/js/47.97af3b24.js",
    "revision": "05b06656db104750999df9b1b5fbaf25"
  },
  {
    "url": "assets/js/48.bd1310f8.js",
    "revision": "3504ee6997edb122748cc8f2c7206b4e"
  },
  {
    "url": "assets/js/49.1863842c.js",
    "revision": "61f013ce2b7e8ad2b0319f5ec1d77045"
  },
  {
    "url": "assets/js/5.35c41e7e.js",
    "revision": "4247c54cc2d73b1899c0eb17e74bd897"
  },
  {
    "url": "assets/js/50.8e3465e4.js",
    "revision": "95c03ff3eae22424c6a19f79ec8071f4"
  },
  {
    "url": "assets/js/51.4c05eab1.js",
    "revision": "3ae8a2de84ff6a1d2a119460be7dab1e"
  },
  {
    "url": "assets/js/52.c0a151a0.js",
    "revision": "49bbd8d1e3fd31368d79e7d77ac108f8"
  },
  {
    "url": "assets/js/53.ae995e15.js",
    "revision": "3feb4242d551ae820660641fcf46604d"
  },
  {
    "url": "assets/js/54.1c77bb3c.js",
    "revision": "c3aec3c19422e84fbee15d3929b7725d"
  },
  {
    "url": "assets/js/55.58f93045.js",
    "revision": "792ae574038608af15fc1d6642d259c0"
  },
  {
    "url": "assets/js/56.517090a3.js",
    "revision": "73a00c8f0861198ab48efbd1fb49959f"
  },
  {
    "url": "assets/js/57.03a794b9.js",
    "revision": "20b4246bcd10a6ec997d377bffa7bef7"
  },
  {
    "url": "assets/js/58.24d78c8a.js",
    "revision": "6880fd7577631bf65472297239f72092"
  },
  {
    "url": "assets/js/59.a13db3a5.js",
    "revision": "ddf01fc7002b4b15d7fbfc1ce788beb1"
  },
  {
    "url": "assets/js/6.8880268a.js",
    "revision": "ee3b31640af9ca8a5b8537def946a6c7"
  },
  {
    "url": "assets/js/60.21de111f.js",
    "revision": "08e8cbcf6cac5037462985b328d18c38"
  },
  {
    "url": "assets/js/61.2cb674a0.js",
    "revision": "ccb3c142961adf6ea4e9cfcc00dfa6c5"
  },
  {
    "url": "assets/js/62.7a7ea7ba.js",
    "revision": "50ac23c114aa1a5f6155daa82b0b85bb"
  },
  {
    "url": "assets/js/63.c954b2c9.js",
    "revision": "027414af727d6607a46dec53eb2ee8f1"
  },
  {
    "url": "assets/js/64.c0bfeeee.js",
    "revision": "db6c64d2e5d6256ccc46807f8b39a699"
  },
  {
    "url": "assets/js/65.2a73ca4c.js",
    "revision": "34ae50d6f53db110431a0d40777d0917"
  },
  {
    "url": "assets/js/66.c91fe4a5.js",
    "revision": "511b823434f4a6d7babfb76963c7910b"
  },
  {
    "url": "assets/js/67.7246b829.js",
    "revision": "b341ef3d621f8c38c2ead22a78f1cbfc"
  },
  {
    "url": "assets/js/68.b8be2836.js",
    "revision": "fd9c9ccce00dfb063f7436dc9c328bc3"
  },
  {
    "url": "assets/js/69.6d5f2138.js",
    "revision": "ba8955d15a5279ea03b1556a861e440a"
  },
  {
    "url": "assets/js/7.f640ec1a.js",
    "revision": "b74b6973761bdbf36650ad47c1ff34fa"
  },
  {
    "url": "assets/js/70.3ef01629.js",
    "revision": "c636abfb6aaa3eac2c40b2987e309767"
  },
  {
    "url": "assets/js/71.1e0cccf8.js",
    "revision": "4dcc6f3fbbc68a4cdb88ed0e2f666274"
  },
  {
    "url": "assets/js/72.2d1a0ec5.js",
    "revision": "0ebd1ce184c734c5e11e192aa3763025"
  },
  {
    "url": "assets/js/73.1f09eed0.js",
    "revision": "466fc940899194d96d63f961bf03cd25"
  },
  {
    "url": "assets/js/74.c2d751bb.js",
    "revision": "4ad93af816e9fdaf50e829b0a95a3909"
  },
  {
    "url": "assets/js/75.b5f8ca3c.js",
    "revision": "607ce4d4b45941e0c57b5d656c28a38f"
  },
  {
    "url": "assets/js/76.d1ddc47b.js",
    "revision": "20df82e373d77f7ba5676202023e630d"
  },
  {
    "url": "assets/js/77.d1a987c0.js",
    "revision": "169c41b26d8a2adfb47a6ccf06952ab7"
  },
  {
    "url": "assets/js/78.7a98de40.js",
    "revision": "54cc6488e12cc5b770e84fcc4ee80160"
  },
  {
    "url": "assets/js/79.121e233a.js",
    "revision": "4c43ad2410599d6ae4aef3d02643d413"
  },
  {
    "url": "assets/js/8.70a87556.js",
    "revision": "333adccac60f23ecc458c76ebec281a4"
  },
  {
    "url": "assets/js/80.b4ee8df5.js",
    "revision": "b4c4c67ef2a7dad734f73805e5383d9e"
  },
  {
    "url": "assets/js/81.bc37c149.js",
    "revision": "6192aac86a00c2fb1fc1c8732f84b360"
  },
  {
    "url": "assets/js/82.13641c70.js",
    "revision": "37e64cc636673896621a998362eb76b7"
  },
  {
    "url": "assets/js/83.8cd14efa.js",
    "revision": "8a48a389722892bbbd8975f518dadff2"
  },
  {
    "url": "assets/js/84.3fca36bf.js",
    "revision": "080273072b4a6b925404ee627aa7075c"
  },
  {
    "url": "assets/js/85.b89605de.js",
    "revision": "6c83335f3fb160518367f6a120f48db0"
  },
  {
    "url": "assets/js/86.399426b0.js",
    "revision": "4cb44b48dcfdb0fb63932d7897d70005"
  },
  {
    "url": "assets/js/87.6385dd83.js",
    "revision": "057c90e9704e7f7815c9a4d6a159d05f"
  },
  {
    "url": "assets/js/88.00c139d8.js",
    "revision": "c7e316e103c5b434b112b0232c84c737"
  },
  {
    "url": "assets/js/89.7dd69dc7.js",
    "revision": "1c3d991daa25b075b7cabc0c8fbea8a3"
  },
  {
    "url": "assets/js/9.11bc626f.js",
    "revision": "3ae7a51003a699baeb12e51ac6b24526"
  },
  {
    "url": "assets/js/90.fd5747fd.js",
    "revision": "42165025a5177becd0fae0c6b1b18898"
  },
  {
    "url": "assets/js/91.77b08339.js",
    "revision": "11a095a2efc03539835b4d9e68f04757"
  },
  {
    "url": "assets/js/92.959c9be1.js",
    "revision": "e16d72bb7f0c333041b4fd8bcb20a171"
  },
  {
    "url": "assets/js/93.20268257.js",
    "revision": "ed8d84119c75b04b54e499bbd57020a7"
  },
  {
    "url": "assets/js/94.0900592f.js",
    "revision": "08568b39801f0475e647213f39bda6d9"
  },
  {
    "url": "assets/js/95.9a2e97ab.js",
    "revision": "de76d0fdeb714cb92916216350ab9ce2"
  },
  {
    "url": "assets/js/96.7f7a8545.js",
    "revision": "52f62e7ba29bb87e5bca5fd139ab8bbb"
  },
  {
    "url": "assets/js/97.fcb5f9c6.js",
    "revision": "a7af4c30841b34c02bd73f2aac1bb9c9"
  },
  {
    "url": "assets/js/98.4100907a.js",
    "revision": "ecefaf00013e5aaff91dbe3958f5d4dc"
  },
  {
    "url": "assets/js/99.ae8de453.js",
    "revision": "97ced6ceca805c82d75007ddfcf4faba"
  },
  {
    "url": "assets/js/app.20a0356b.js",
    "revision": "b50f26d102c1e2271e9952b9326ca156"
  },
  {
    "url": "assets/js/vendors~notification.095f8160.js",
    "revision": "3e07b26ff67cb88275545867602206b0"
  },
  {
    "url": "i18n/index.html",
    "revision": "dca0f37c19c7c4b8adef70721c8805d9"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "b09c50186e40155fc561683a6a6392cb"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "c63a96431ef590bd3902be4fcec0098d"
  },
  {
    "url": "tutorial/index.html",
    "revision": "dfd8bdb555df5023f8236233600b32fe"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "5f73ff060a69701259bd2b12bd4b16de"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "104f5252d038af400629013cb48842fd"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "c1229ecabff17d7b70823dc519a4406a"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "31a8060fb25d468f73066d22eaced709"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "da3b8395787281a15558bd47ef5cd96e"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "84d4dc89468d416fde16a7410fa4158a"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "e9ddb8b85eb586f8fc4d04202d88da5c"
  },
  {
    "url": "zh/api/index.html",
    "revision": "2972e26814de0d3a667977abf7d545b2"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "bbd53cd2d74d75d8b089e581356b7cda"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "b470aa3375baedf36723c6c71279a2ee"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "1345fc616f8dda4da8fe8e529ed4486d"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "3561658653af17307354df6b3c9ace13"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "6be8db3dd51fd0b51a54fe9a0bc8e257"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "294eb429e87a6c0e6871bee1ee57444c"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "fa0e3490555075602a47e980045704ea"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "c89daa10de24bd2f98443558356b32fc"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "327d9f4bc61273ecc8cd248f5424852d"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "1d48edfcbd229cbabcf1234e44d0a84e"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "05ac31dba4f22f91df99a672a925ce23"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "62aa09a9950d0180deac27d49e644744"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "0e2cadc83301983bc7af05013ad493cf"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "fee3d26b4ac8f6edb6cb35bb838f6ec6"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "3794bad1f4e06e2d79db0951d283f02e"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "74f5d9bb3b8dce954c2c1cd054f33e9d"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "1bbbd4d6407291ca10ac804b1c0c28ee"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "7e87058e9fcda94fabba02ce4c5916fb"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "05bfd608be869ed25372ef488c9fac07"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "2cc3353ac6291bf88ccb11721282094c"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "451a88c4a63255ca1ff7f1bcf1bf4e3d"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "9c855109fea2361480c1a9614791d7fb"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "3ae9de58e9de96791d3b601d1ffe9c2c"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "c634e0a010bc22030f6726561a07e714"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "1cc54e40eb2cf4c92b9f2a69670e9f89"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "50897b1eb9789884b085888a112780da"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "74812fd99d5e5dcf6b020eede599dc4e"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "cdfb74f7c463834110ccb13798685837"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "f1df4733b59369fa621b9f1fd2be4c34"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "11bc120a868ea060eaadebc10e60dd00"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "67253dc2d2c352f6cfafa9299c30dba0"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "6efb64c259f5f9938e2ed52e2ac86376"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "d8a84c494a3a6bb226c00aac59b6ba8c"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "b1b1daa14787310a95784aa433e0f7cc"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "5002bbc313dbc9dd60b14f767d814eee"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "5bd9455ae1d08b08ff3d0115b8a368a5"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "84190404653d4cc6d583bb6ae716b462"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "898f7738e9030ded4c639a1a7fe6009f"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "7e156780920da7bec07b356832a06184"
  },
  {
    "url": "zh/index.html",
    "revision": "7fcbb84f96b613247d9a38732cf77dc7"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "538fdac4e600c52cd551dfaa3ec91b85"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "a54e99b7e3e22660378c47eae819fd2f"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "d36f691220f77825e297515ef1bb7faf"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "9c4dfd44d80267bb698570d886f21391"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "f443d4db2e8fda1a30eced100ddb455f"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "aa9fea15f80b48441c3bd54bb4671e9f"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "06ecbd4e0c4c9898f4bc9a20e7a8edde"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "0c7c968cab93b28f8b3fbdf40f80bd76"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "abca1691498e8a5bdcc129d55d38c36c"
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
