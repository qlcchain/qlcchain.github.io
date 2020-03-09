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
    "revision": "e88d13e2c63db42fec992011d5fbd263"
  },
  {
    "url": "api/index.html",
    "revision": "259e7f42be0d79febad49d2956cce8fb"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "abc6772ead0f2cb99fda520f91904007"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "afcfbece17223b8e0ab2f8815d02df7b"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "237cae122a3bc43cf2cf04ce0ca13784"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "7ac607649cb7bd742b9277b5fa640e90"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "3211d515607a811e777b2451e2de37ea"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "0f5ea7fe880cb28d680ee0da141af55d"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "9a624419d38f33986fff7227bcd74341"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "f08b2223bda737b50b776f50bd4f674b"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "aa93172f2f2968f4dfa809114deabb1c"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "1b04ccd9cf2bc1432fa5dbe5e8ce113d"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "47770b493e172e9832661a7a77b757fa"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "831e0ee8657db50729b88e76bc9043f7"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "0d726f084a7ebf084f7a0d59328dddbb"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "1662c6e15b741220101a86251e8a977a"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "30c275e6bfb11facb0cf25da2f98d132"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "a0712e5d4a766cf67defafa103d1c208"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "2a3f8fb9016fc36dca130093dbf72133"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "4482f361f282623200849efa266f4899"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "3eead9b6221f762db603d8104f26329e"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "fc87339371b82aadda706803ddc4f566"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "877a4614dd0ef5df20c51f3c8de623d6"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "793a2276fdf9e2e29904b7aa71108de2"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "242318ecb00f4f8676f9cb5925cad7e1"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "89bc263056b8dea2e453ce14c136b3eb"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "6a0149f60e375742665fcf72c2e91db7"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "cc4893f7398a85f8054c9ab39e187f94"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "aedc0bd0eb1c7dd8a9d6ec95dc36e717"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "a3e31510ce4648e24fa3b8654779cb19"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "e9b89a846e3eb4e100177882c71b1a51"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "bf0186b22cb0a5d895bb5e53ca32a5be"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "fd34cc8ae91704f688c2388a4d5db209"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "f06a57c51f0b47b77e3a2d8a95f2ecce"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "a3af8773558cde1e56697f0fc0402e36"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "d585a6cd2903ebadc30a9ba596f3b1d2"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "f7d0e7eb3319afaea12819d6a043c8de"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "4d5c78b8a19d06fc6021125aa8a0505d"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "691c9590c2082afbba270493ca6b9608"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "a4b0bfb3791f4225938f83c3919bbea2"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "59972a73a1fef0dfab2d78efa1c3d8d2"
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
    "url": "assets/js/34.8b6e5351.js",
    "revision": "ce53b5292b76a331e8997861a3c76a09"
  },
  {
    "url": "assets/js/35.bb178c0c.js",
    "revision": "9f6c5882bdeae17627246e699ed2fada"
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
    "url": "assets/js/38.b62de77c.js",
    "revision": "3124e73b43d1ab4b8eb0fea4d04b373e"
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
    "url": "assets/js/44.349cc550.js",
    "revision": "cd69a9811e3eab2acb1bf985004b91a7"
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
    "url": "assets/js/84.6160fc60.js",
    "revision": "a522dfad0eb0eedc35454b74aee78cb1"
  },
  {
    "url": "assets/js/85.d4985a61.js",
    "revision": "1a617a238f527d1b9ddaebb25be07166"
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
    "url": "assets/js/88.2b6a3603.js",
    "revision": "242c16590fd5572ea2b6faa53ab0e0ae"
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
    "url": "assets/js/94.0c6a1974.js",
    "revision": "e60953bef0f84331761b7acb6dc18795"
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
    "url": "assets/js/app.649ecaa7.js",
    "revision": "e157e560cfbba8b8f9d33eec44aa4e77"
  },
  {
    "url": "assets/js/vendors~notification.095f8160.js",
    "revision": "3e07b26ff67cb88275545867602206b0"
  },
  {
    "url": "i18n/index.html",
    "revision": "4f563fba333021e36a1e5cde50cd0dde"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "7ac826dd8ae9be617102c39e454ebd61"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "67ecde3b3edb9c205dbc0528b88be594"
  },
  {
    "url": "tutorial/index.html",
    "revision": "eca8c792dbd76b4d2b4a2240a74a84d1"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "a0fb80a48b0510249d6b23143f8a50c3"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "c27e92b2bd44542d2f776c371aeef32e"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "d5e3ed31b6ef56b54961385f5cfcb08a"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "c2cdd10d5808e8aa202c47a355a97392"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "e9ec0fe7e561f8ff7b38869ae184b1d5"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "47e7144f96fa97224250d0eb3eed802b"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "34fcc9f02eb06a436e04e4f3fbac3fd0"
  },
  {
    "url": "zh/api/index.html",
    "revision": "67dd7427ea0d6a3204c33a02ef1c17f6"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "691707cb910441c606ddccff34203c7d"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "ea6916225612b3d2ddb68e7b6b7fbb0e"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "0878e2776edb2aaa823748ac6f3196a4"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "6e267a477b2ba5a0903fbcf8bed33dbd"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "e5fce6df333ee0fd8022f4e391bb43ce"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "a9f4f9e9925cd20382c1bbb2643a3dde"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "3d1fd54aaf3f380a6bedde3e462df7eb"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "a4d47c4daa95a3551eb8da62a4f364d0"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "bb3d347d6b3dba91d670345eabd03047"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "d9e7b7e01a931b5e641558200bc88a8d"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "d3a17fea40271adc6b247df916d5ae67"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "df0f0a12163425327694b6dcdd4aeb37"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "5af72d6d6c985f5df88794997ed586f8"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "804136108d8d6471dd1467b2cec04ccf"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "289aa9b62e115a9e8bd78f1ab98306fb"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "9d22c17bf5531bf4fad9c57407e649af"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "301104eba0649bfa72556ade767dbfb4"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "6d1df49cf94dd3680ee69fb0cd64a676"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "890ff9a33bce616bcf501df6e87975b6"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "42c72569669ff4b0fbfa25afcabbfd6b"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "8727eabdb2e6b1ba371dcd2532e66612"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "efbb3ba55aa697daa0ed08a5e59337e3"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "4dc2ff5214edb349af38e3fd4413edb0"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "6f0296054bae9dfe521423933e2ff4aa"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "25d393ee3ec98f4e159ffeeb7daa5351"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "deb07c397e3ce5998b02088143c027bf"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "43ab85135129fe1dc42d3fef89ca2389"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "3c0de91f14352c242d917e75734724bf"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "304ff1f5b438e1f89f8e47f77d64129c"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "6ec4c58074305834fcf14aa8f280c47f"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "467888fd54e1506b95063ec6985dbfce"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "b9f4d510cbe9cf591ae593bae0a3addf"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "842dd42d2f2f5b862fd58a7cee82b50e"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "77e3d86aaca80408005c1787fb2cbf81"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "305278906a86aa9f11a8545b76ef2c04"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "1ad597ba39b68fe110de4e512d57dc8d"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "3014c7c681b2aa1975d0b5e6128c90c2"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "e4987da907e9fe957823e1dd985cec69"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "2896fddc36e78e8e94881ce21d3d2ae2"
  },
  {
    "url": "zh/index.html",
    "revision": "8decc2dd7587a8c39cbe835aa3b5e532"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "81074a78d670e03db8b9e883ce5ee138"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "1bd9c61354c54944c044d5df493e733c"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "79a67ae95977d509ca7fca2702749659"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "ebfa2f7aed00a335061ce380e273f360"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "d5fb02165ac32dcf50a83e6365278064"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "7e3b92e12b7b82074c9b3d3dffeea379"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "c5ce250e888735e81050fe0e994dff65"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "081cdd213c4f7caa576d96bf1e7b213e"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "69b82e49ce837fa71c35fcbc9f9495b5"
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
