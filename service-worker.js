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
    "revision": "35aeaee114faeed1fadd795bf9e6e005"
  },
  {
    "url": "api/index.html",
    "revision": "47d7cd96ff97a997461170058cb922b7"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "3ba9c70893f2443f1aa4a119bda00b97"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "7b09a54bdcbf0082711b9f703ce3e787"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "8c9eb8839d094e6a230affc486016004"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "761de393f40833a121bc31ab150b6cbb"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "37d6b61dea93b2138e5eb9c81bc71294"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "7b9e4a63ec8c0e529e31540f07cac39a"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "5dbc29dcc6923943be0a870cf923427d"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "d777d574858260530c3f6c68fed44e77"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "2488687a358bb515ee04a8e0e5d40552"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "8a302f7e1bd48ea5baf6ec94350eeb08"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "f2a25f81c503dd43ef977d135d7b4dd3"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "2870c3de0d34aeb4f45a4df8b0286c01"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "52c5d3451c243862257541a121fbd56c"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "93ccd5590ec8cc77719d7f35a2e01698"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "712e6bcbb72bcdf8e6970338b8cc81d9"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "1bac8a9169af5041f943966012b0e0d0"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "db1c101ce8ba3ac41e799e6438a37223"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "4acee09090f9da112a4abe9579a849c2"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "44df9d952497b30c941cd80654b71c64"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "90fcad8f73384f9df2106d1320e1ff3a"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "093e9fb78a167f3a00c95ab3d3f6c178"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "b24b4d2d2945be02198dcd2ebf114dc2"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "33df9c91b4fb959ffd971ccc040a58e6"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "8687c5265f59ac9bccf74bb7e66a1c26"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "cf878c660af50d651bee99362e33ae83"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "a8c16c42eb255bbd5086dc03cae0aa90"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "11633d0e628efa08390d60fdf8bebeb5"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "cbb47f55ee24181fe0e4e912db75d0a9"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "0ce312d5373f4ff744dab7243af254a4"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "858f887bec8259f435a0aad9779ad4c2"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "f70b1fa8551d461ed971f0d736b36716"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "6cc06cdd4dc87618020042f700ccc047"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "ebacdd8f58bd4fb84331e3a597361fec"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "0aefdf1a2a07c612c9f05ca4d5302c6c"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "2610dceedc7eab672baab0f3543d69e9"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "a81d745cd184d1970859c1024e44ac1c"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "487eda05065ac6cbbb748db46bd404ea"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "41d36a8b2ab3f36969442e6db7e15948"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "b9d37c9d0097c1f4dc70e40aed45a704"
  },
  {
    "url": "assets/css/0.styles.04a84e87.css",
    "revision": "ab9df29060a47b4d4fce3456c828f5f1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7b2c0363.js",
    "revision": "26903ae9e22faf639e40c070ddd06336"
  },
  {
    "url": "assets/js/100.08e97691.js",
    "revision": "6a27eb4940e9a8879e8f12293dcdd18b"
  },
  {
    "url": "assets/js/101.6c2571cd.js",
    "revision": "b39286f9145b8d4fa5f57630c1ebf114"
  },
  {
    "url": "assets/js/102.518aeef4.js",
    "revision": "a566779fa63674b2d5371c88c8717efd"
  },
  {
    "url": "assets/js/103.33a46273.js",
    "revision": "05a093d50a21da2f395520ec82fb3431"
  },
  {
    "url": "assets/js/104.be354824.js",
    "revision": "66e892217c6bd5c0903c770b89990662"
  },
  {
    "url": "assets/js/105.54e37682.js",
    "revision": "0aa9efef370a683f256b3ef6c4380c8c"
  },
  {
    "url": "assets/js/106.a99f0e80.js",
    "revision": "f0412508656bd10819f87fa9fad8a11d"
  },
  {
    "url": "assets/js/107.b1dcd000.js",
    "revision": "791e746d38a8d02e37a1bff60c3488e6"
  },
  {
    "url": "assets/js/11.d8ab459a.js",
    "revision": "a17d7257cd5071bd1443181adb610ef3"
  },
  {
    "url": "assets/js/12.accfe102.js",
    "revision": "96b1a49183396cff899dcc6e547370b9"
  },
  {
    "url": "assets/js/13.2563d312.js",
    "revision": "9fc306b35c0937611155260a4f613afd"
  },
  {
    "url": "assets/js/14.c1824dad.js",
    "revision": "5db341126e3dea7c725204c052290b95"
  },
  {
    "url": "assets/js/15.6837bdfb.js",
    "revision": "b67ec2c6592a4126f8d699660a5ae1a0"
  },
  {
    "url": "assets/js/16.b5429362.js",
    "revision": "8196dbf92fa02045409d2a11e4eaa72a"
  },
  {
    "url": "assets/js/17.47bb4fff.js",
    "revision": "eb6f9fd64bda9bc4e87b400efaa92db6"
  },
  {
    "url": "assets/js/18.de664a7a.js",
    "revision": "6bc57f0ecfcbeedfa85f43924772c899"
  },
  {
    "url": "assets/js/19.b791fbda.js",
    "revision": "68279109a39a1bb37efa6896777ead9d"
  },
  {
    "url": "assets/js/20.08243360.js",
    "revision": "39bc668ebe467e4d3f76edf302031888"
  },
  {
    "url": "assets/js/21.62977d8d.js",
    "revision": "1e527b739eec3545fd60850ddda955aa"
  },
  {
    "url": "assets/js/22.e0e80a77.js",
    "revision": "46106178831274fb0fcfc27462019b12"
  },
  {
    "url": "assets/js/23.9ee2b9e4.js",
    "revision": "61d220141a4e06f5e8256287abe6b2df"
  },
  {
    "url": "assets/js/24.81e159b8.js",
    "revision": "645b103c5363ec4809e69b9ebff99552"
  },
  {
    "url": "assets/js/25.1cd2ed4e.js",
    "revision": "c1ccfe4013735b5aba0f04e0348c7927"
  },
  {
    "url": "assets/js/26.5f35d2f7.js",
    "revision": "d83d4a2248b983d57973da438dbf51f6"
  },
  {
    "url": "assets/js/27.d2f8d06e.js",
    "revision": "f7d4659a4aafc882667fa35f008772c6"
  },
  {
    "url": "assets/js/28.1122e86c.js",
    "revision": "6b5fedde830b54c899a8ecaf43aeb643"
  },
  {
    "url": "assets/js/29.55e24d38.js",
    "revision": "1ea687a2dd6b9f29f8a6ec302d91acd9"
  },
  {
    "url": "assets/js/3.56dbabc7.js",
    "revision": "9140700df52da06ac3e4048d7b1d52f9"
  },
  {
    "url": "assets/js/30.872d5c06.js",
    "revision": "780998f0a2910be834266f86c043c334"
  },
  {
    "url": "assets/js/31.2653e511.js",
    "revision": "aac0f234ad56257fc4a12b1d151bec88"
  },
  {
    "url": "assets/js/32.6382456b.js",
    "revision": "4c542a420b52d11f790fde6361c8d872"
  },
  {
    "url": "assets/js/33.140ebb21.js",
    "revision": "fc3eea3bafa5ccb4bbbd455760b89180"
  },
  {
    "url": "assets/js/34.5a6f9cd7.js",
    "revision": "ce53b5292b76a331e8997861a3c76a09"
  },
  {
    "url": "assets/js/35.131cd5cb.js",
    "revision": "9f6c5882bdeae17627246e699ed2fada"
  },
  {
    "url": "assets/js/36.9ec20f9b.js",
    "revision": "3fb0e0b1f4364e06ab17ee80ab43cb45"
  },
  {
    "url": "assets/js/37.22a8dd86.js",
    "revision": "a0645b27e8601b90f432d4f9ac40cc12"
  },
  {
    "url": "assets/js/38.23b46fe8.js",
    "revision": "3124e73b43d1ab4b8eb0fea4d04b373e"
  },
  {
    "url": "assets/js/39.10051459.js",
    "revision": "ff9d54845edcb75da77ae5d894fd0d18"
  },
  {
    "url": "assets/js/4.6051b0f2.js",
    "revision": "902805f72e975cba435671cb57d2a366"
  },
  {
    "url": "assets/js/40.53880dd3.js",
    "revision": "f35117e6e17a38a815d3b88840fd82e6"
  },
  {
    "url": "assets/js/41.41e039e8.js",
    "revision": "3dd8b2f7b632d00ff239a6bc7a552034"
  },
  {
    "url": "assets/js/42.c21e4142.js",
    "revision": "2f17c86b9822f8a4b8bba9da7fe31e91"
  },
  {
    "url": "assets/js/43.3af94789.js",
    "revision": "e0b2dde9361c5b95eb45dae9c385f343"
  },
  {
    "url": "assets/js/44.f1f40c55.js",
    "revision": "c28a30c5a13c8e848c0696985597d94a"
  },
  {
    "url": "assets/js/45.dccc36c3.js",
    "revision": "5c194ffee7f1836817591737162dc180"
  },
  {
    "url": "assets/js/46.0945d36c.js",
    "revision": "b94a0160b41a069ee64371e3b4f61992"
  },
  {
    "url": "assets/js/47.168a9f52.js",
    "revision": "05b06656db104750999df9b1b5fbaf25"
  },
  {
    "url": "assets/js/48.58d4be75.js",
    "revision": "3504ee6997edb122748cc8f2c7206b4e"
  },
  {
    "url": "assets/js/49.c7545dc3.js",
    "revision": "61f013ce2b7e8ad2b0319f5ec1d77045"
  },
  {
    "url": "assets/js/5.c231d0b6.js",
    "revision": "4247c54cc2d73b1899c0eb17e74bd897"
  },
  {
    "url": "assets/js/50.cc3ffe7a.js",
    "revision": "95c03ff3eae22424c6a19f79ec8071f4"
  },
  {
    "url": "assets/js/51.62163d9e.js",
    "revision": "3ae8a2de84ff6a1d2a119460be7dab1e"
  },
  {
    "url": "assets/js/52.dc6c9452.js",
    "revision": "49bbd8d1e3fd31368d79e7d77ac108f8"
  },
  {
    "url": "assets/js/53.1853115a.js",
    "revision": "3feb4242d551ae820660641fcf46604d"
  },
  {
    "url": "assets/js/54.00ec546b.js",
    "revision": "c3aec3c19422e84fbee15d3929b7725d"
  },
  {
    "url": "assets/js/55.ed2325e1.js",
    "revision": "792ae574038608af15fc1d6642d259c0"
  },
  {
    "url": "assets/js/56.9aa2b2c4.js",
    "revision": "73a00c8f0861198ab48efbd1fb49959f"
  },
  {
    "url": "assets/js/57.c16fec7b.js",
    "revision": "20b4246bcd10a6ec997d377bffa7bef7"
  },
  {
    "url": "assets/js/58.1ebee26f.js",
    "revision": "6880fd7577631bf65472297239f72092"
  },
  {
    "url": "assets/js/59.58acfa94.js",
    "revision": "ddf01fc7002b4b15d7fbfc1ce788beb1"
  },
  {
    "url": "assets/js/6.f586982e.js",
    "revision": "ee3b31640af9ca8a5b8537def946a6c7"
  },
  {
    "url": "assets/js/60.adc18e8f.js",
    "revision": "08e8cbcf6cac5037462985b328d18c38"
  },
  {
    "url": "assets/js/61.46b0d333.js",
    "revision": "ccb3c142961adf6ea4e9cfcc00dfa6c5"
  },
  {
    "url": "assets/js/62.2b1210bc.js",
    "revision": "50ac23c114aa1a5f6155daa82b0b85bb"
  },
  {
    "url": "assets/js/63.4c3b49d9.js",
    "revision": "027414af727d6607a46dec53eb2ee8f1"
  },
  {
    "url": "assets/js/64.d8d9ffaf.js",
    "revision": "db6c64d2e5d6256ccc46807f8b39a699"
  },
  {
    "url": "assets/js/65.35f33cfc.js",
    "revision": "34ae50d6f53db110431a0d40777d0917"
  },
  {
    "url": "assets/js/66.46ac62b6.js",
    "revision": "511b823434f4a6d7babfb76963c7910b"
  },
  {
    "url": "assets/js/67.519e2962.js",
    "revision": "b341ef3d621f8c38c2ead22a78f1cbfc"
  },
  {
    "url": "assets/js/68.485afaf6.js",
    "revision": "fd9c9ccce00dfb063f7436dc9c328bc3"
  },
  {
    "url": "assets/js/69.b064c841.js",
    "revision": "ba8955d15a5279ea03b1556a861e440a"
  },
  {
    "url": "assets/js/7.a69fe1db.js",
    "revision": "b74b6973761bdbf36650ad47c1ff34fa"
  },
  {
    "url": "assets/js/70.87ff50f0.js",
    "revision": "c636abfb6aaa3eac2c40b2987e309767"
  },
  {
    "url": "assets/js/71.65d8ddaa.js",
    "revision": "4dcc6f3fbbc68a4cdb88ed0e2f666274"
  },
  {
    "url": "assets/js/72.c1a9e728.js",
    "revision": "0ebd1ce184c734c5e11e192aa3763025"
  },
  {
    "url": "assets/js/73.07210fd4.js",
    "revision": "466fc940899194d96d63f961bf03cd25"
  },
  {
    "url": "assets/js/74.ef20eedb.js",
    "revision": "4ad93af816e9fdaf50e829b0a95a3909"
  },
  {
    "url": "assets/js/75.13f91ef0.js",
    "revision": "607ce4d4b45941e0c57b5d656c28a38f"
  },
  {
    "url": "assets/js/76.226a9ac0.js",
    "revision": "20df82e373d77f7ba5676202023e630d"
  },
  {
    "url": "assets/js/77.2f43a1a1.js",
    "revision": "169c41b26d8a2adfb47a6ccf06952ab7"
  },
  {
    "url": "assets/js/78.f865ca5d.js",
    "revision": "54cc6488e12cc5b770e84fcc4ee80160"
  },
  {
    "url": "assets/js/79.d738a94d.js",
    "revision": "4c43ad2410599d6ae4aef3d02643d413"
  },
  {
    "url": "assets/js/8.d332d18e.js",
    "revision": "333adccac60f23ecc458c76ebec281a4"
  },
  {
    "url": "assets/js/80.259cdd6f.js",
    "revision": "b4c4c67ef2a7dad734f73805e5383d9e"
  },
  {
    "url": "assets/js/81.7c49c0b9.js",
    "revision": "6192aac86a00c2fb1fc1c8732f84b360"
  },
  {
    "url": "assets/js/82.7e024cac.js",
    "revision": "37e64cc636673896621a998362eb76b7"
  },
  {
    "url": "assets/js/83.4156c616.js",
    "revision": "8a48a389722892bbbd8975f518dadff2"
  },
  {
    "url": "assets/js/84.474b96d8.js",
    "revision": "080273072b4a6b925404ee627aa7075c"
  },
  {
    "url": "assets/js/85.112ea0fe.js",
    "revision": "6c83335f3fb160518367f6a120f48db0"
  },
  {
    "url": "assets/js/86.18fc32e4.js",
    "revision": "4cb44b48dcfdb0fb63932d7897d70005"
  },
  {
    "url": "assets/js/87.4be7d104.js",
    "revision": "057c90e9704e7f7815c9a4d6a159d05f"
  },
  {
    "url": "assets/js/88.fb4bd793.js",
    "revision": "242c16590fd5572ea2b6faa53ab0e0ae"
  },
  {
    "url": "assets/js/89.c741197e.js",
    "revision": "1c3d991daa25b075b7cabc0c8fbea8a3"
  },
  {
    "url": "assets/js/9.de58836d.js",
    "revision": "3ae7a51003a699baeb12e51ac6b24526"
  },
  {
    "url": "assets/js/90.3a2fb164.js",
    "revision": "1c690d30562a856a0c3bcf1c150a088b"
  },
  {
    "url": "assets/js/91.c5c60769.js",
    "revision": "11a095a2efc03539835b4d9e68f04757"
  },
  {
    "url": "assets/js/92.8f12bfc0.js",
    "revision": "e16d72bb7f0c333041b4fd8bcb20a171"
  },
  {
    "url": "assets/js/93.2d2f769f.js",
    "revision": "ed8d84119c75b04b54e499bbd57020a7"
  },
  {
    "url": "assets/js/94.5eddb382.js",
    "revision": "f921d492fb48e937cfd846083dc428e8"
  },
  {
    "url": "assets/js/95.79ba8519.js",
    "revision": "de76d0fdeb714cb92916216350ab9ce2"
  },
  {
    "url": "assets/js/96.2ca98a6a.js",
    "revision": "52f62e7ba29bb87e5bca5fd139ab8bbb"
  },
  {
    "url": "assets/js/97.513d0f3b.js",
    "revision": "a7af4c30841b34c02bd73f2aac1bb9c9"
  },
  {
    "url": "assets/js/98.12977073.js",
    "revision": "ecefaf00013e5aaff91dbe3958f5d4dc"
  },
  {
    "url": "assets/js/99.a71093c2.js",
    "revision": "97ced6ceca805c82d75007ddfcf4faba"
  },
  {
    "url": "assets/js/app.7113a783.js",
    "revision": "17435d09e47b37fcf983464bfefc37c5"
  },
  {
    "url": "assets/js/vendors~notification.b08a1b46.js",
    "revision": "ed2c19daa458859202073b195f12e2cf"
  },
  {
    "url": "i18n/index.html",
    "revision": "3391dbb1da8eb3d4840cd38d9d6d4dc5"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "5bf0415c45ef49b287679172c29764d5"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "3e0e2713686dceb873b792544ac08af8"
  },
  {
    "url": "tutorial/index.html",
    "revision": "bc6347bd89d7619cd1053ac8062b384f"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "82acb5787d12490d19d421e60b21c6f0"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "796ac65b021f1beee33629ea6e27d339"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "91e0e49df713c262a38d2fdd38d60eac"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "45d08c9dfd64e0946261453d7844eb6a"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "a1430fea926d82c30c5a4e5d9b7a8622"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "9c0ba826b8e00a467a4672245eef8728"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "82fd90df45e11d0b0c048b8be4e0481e"
  },
  {
    "url": "zh/api/index.html",
    "revision": "3489be8a360b0f454a6c0ea1b2153a7d"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "e53d791389f93cc1a483cbd49bd8bbd8"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "83932f5e2bf84a6b5d724cad92a0262b"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "3f75a32c6c0b37a25eace0583403ad04"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "69ee40dc8abca893a5914ea337be1136"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "4f1eda850adc3cbbdef94b7b3b8c869e"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "8d33723dcfcf42a2ee4839b4874ccd01"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "672a639570634b00ec9c8d427ed10652"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "52e375e9e1fbf763f2263a3d9790d975"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "10047e7be433973e39edbd8a407d12e9"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "6d730d63cdc844c6e94bbf61a5a920ee"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "b02afe5912abc7ec9c246726a0bdd279"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "eddb0c0bead2017fea21159a490328ba"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "2b4785e0a0ed4389f1565a72d19b59df"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "fa952cdaf3fbe355be17e6908a04c4d7"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "391db0dc72a85d311577b92050fcc763"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "a451e24970a58f5797ceec6b2d6cc967"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "5f6938f1a2d8c2e3662682d72c19557c"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "cfdedd007de2c8f3a91c26170101e85a"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "2ba5d63d6c1e83d890b49a9d10e4d7c8"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "8e249bfa4fa8cb0cf6d3c9f0a7d67bb0"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "9062a75b437c43c8891678e8ec0d470c"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "5b21f8bbf5101ee27239d34e3e474fa4"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "9f5b9c07904c1d13ccc1c2b9caf2580c"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "5d4b5e9778fc04c8535aa9f73957b1c8"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "08db891fdd0e522711e4e1fd89936e56"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "e9aa08e13c5d4ab421285d99993206a0"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "945e06655ad42995a2298019c0c39083"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "080e23ab8c198cfefe13baa010d01eae"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "2e9cb04c1aee27be978830542e5d55cd"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "15c4a1c1d0f4ff3457ffccdc0336db71"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "d6147c1e784cce514b9b8c0fdd2ed854"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "c3d50bef70be0ebeba9ee91b36a02e41"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "7bbb635dd54a22f0036ca2cdeb37bee3"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "7ca441c9af49aa8811b8ecbc54b8fd3a"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "c1881cc9a120a987e06e510ec8a0240d"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "116ebbf941cd1bd5bd2005dcf06a191a"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "805bb47899f2ff09cac7c7d21f0b1086"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "4fe099ba717a2f53a36df4b82a84f817"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "a0c46233ccb5f2c5be26bf529a92a1e8"
  },
  {
    "url": "zh/index.html",
    "revision": "dda1e49d814d9add1a3a379813821a9f"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "668d9f9ad9c817ca1a2777547c046b1b"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "16b79439837ff397b2d8be79df603394"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "513026e2c0924da6b6870a06a2f8e3d0"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "0bfdf7672d0843a6b4fb0619e52ab300"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "7c8e36e6a25fa15a52026c5191535859"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "ccdf6401cd3db4640eb0d81e34f27c8a"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "3f8f181f9d3d1de4dbc2c4e1bf2da29d"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "90169dbb85fe758ffd4a2cae2485c544"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "2aa7c68b8c9b9bd3a722bdf2de53e329"
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
