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
    "revision": "8feea88cf0ddb693e775ee1f62493b6b"
  },
  {
    "url": "api/index.html",
    "revision": "0dd6375ff16fe1677c44689aa68bb6db"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "d18d2cc3b2f6e83eed1ff15d5f88d6cf"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "21911c6dc3d882285d8ae5ee518b27f6"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "9dea284137e148bc2fe0872dcfdf5aa4"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "d4a0255e541628bb60d93daafcbb8995"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "717e314163b47309abcb1069a99a0492"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "1e8a8ef1d9e9fb05c3909a699c7f6b01"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "9cfc49b0e13a4099dfcf8215c7e6b749"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "3ca2c3b579771b0e2443832cf0af079a"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "f7d2a6901c56417cb089501e93655a52"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "aaa18874f56d9d70df9ec2366db2bb37"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "fea64c3101f65b2e1c2051eeb7364786"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "772db645f785d1566d10b27e17e52172"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "cd6227e73d366912212bcd25d4e2015a"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "730ce4a3b1eb0285a60237d162c9f0c5"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "7c8bfd071ae6ec357dd4a1f6c74232d2"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "c13bb52563e9692f165a702270e6ee1b"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "0310363e8075a62e1acf7696c13fe1eb"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "960fea26e2d097c858ea388cd34602a4"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "a6fe9943b69795f3af237bf926a6fa08"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "738ef93dc3b9e0a39c232896cc0a526a"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "63ba8df5f17ce7d30fb7228bdc8b483d"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "65d910f7de356f4093abfa41ee7ccda3"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "90b47ad115254b14b201d854774dd286"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "7e7c141ea3e71cf1e9030fcf95f367b8"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "ae75e57ef0d2cefc066f9df571a67dd1"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "174fb86f85824028bba6fe9b2d2c26b7"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "b80fdcd1f9441167f332a978cd13f46c"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "8cc2af596021831661ede50a2588d255"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "aba32c6c35e0755fa40de208b6057921"
  },
  {
    "url": "api/rpc/Oracle.html",
    "revision": "72bc53d8fa3c227b6e4bfb27ad742e9c"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "01857983c3ee4435cf8743238d746549"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "2cd518facc933542ff3997a474f5b9d1"
  },
  {
    "url": "api/rpc/Publisher.html",
    "revision": "464ec63bdf479fc8c753fd5015cf92ba"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "cf1ebeff42776892f751ba936b900d93"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "3d15ee2ff28817d1f602bd489154745e"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "c5eb1c16fcd56fae65a01a48a7fe5d2e"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "16ab0a811404d69a8529520bc155197e"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "5ffe805644473d6ce153ec283f6064dd"
  },
  {
    "url": "api/rpc/Verifier.html",
    "revision": "ecb69f9a975182933b2e0225cd6f7e5f"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "5411e3a8a1c56fd9c3c639cf38ce1bed"
  },
  {
    "url": "assets/css/0.styles.fda3ed03.css",
    "revision": "b1e95bf8e0dff371ee15983378a18667"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8f73b796.js",
    "revision": "43c379725283662535914d5ef4c108ef"
  },
  {
    "url": "assets/js/100.4ba53a8d.js",
    "revision": "6afd2413afff9926a1a9938a1fff97e9"
  },
  {
    "url": "assets/js/101.90313ebf.js",
    "revision": "bb491239d6088fdcca689f6a2ff58537"
  },
  {
    "url": "assets/js/102.d606587c.js",
    "revision": "ef63ac9a83a9216ccb24c5f4d5190fde"
  },
  {
    "url": "assets/js/103.88d30556.js",
    "revision": "8d7e223915485c2554cc432eb13a2b5c"
  },
  {
    "url": "assets/js/104.0498d0ea.js",
    "revision": "990bbfcbbc5585c9f0de6433e437ed75"
  },
  {
    "url": "assets/js/105.c5cd1477.js",
    "revision": "a6c34fb37681638ecb8c71228bbeb183"
  },
  {
    "url": "assets/js/106.9dfd9448.js",
    "revision": "fd10a4bdfa2f19b41b85eee73b80a0cc"
  },
  {
    "url": "assets/js/107.73c39bc1.js",
    "revision": "25ba1730dbf0f14f8d489ed029d11565"
  },
  {
    "url": "assets/js/108.24b7dd66.js",
    "revision": "06dc61b13f305cdba6c348a572c2cac6"
  },
  {
    "url": "assets/js/109.2e48dba3.js",
    "revision": "00ffa160b315dc125fbf28b0a145466b"
  },
  {
    "url": "assets/js/11.69a4c30c.js",
    "revision": "bfff9206c18c353da33915a5e8cdfa7a"
  },
  {
    "url": "assets/js/12.3c8b3d70.js",
    "revision": "36305299a1f96f0d67d06394e74e170b"
  },
  {
    "url": "assets/js/13.0b4e7778.js",
    "revision": "c2a7734b67cfa95d493780d26ed842f3"
  },
  {
    "url": "assets/js/14.0c9ecd56.js",
    "revision": "bbbdaca11ac8f2992a383a6beb7906d9"
  },
  {
    "url": "assets/js/15.61b0c464.js",
    "revision": "d433917e9c6c0de45adda4059784c427"
  },
  {
    "url": "assets/js/16.a582dca1.js",
    "revision": "a14e549c37c4fe4b8655f36a25e44ff4"
  },
  {
    "url": "assets/js/17.8ec1e869.js",
    "revision": "693942ce802c9e348225e18fc2270bdf"
  },
  {
    "url": "assets/js/18.b2ec2efd.js",
    "revision": "10927ce30a111699e8f139218f177b3f"
  },
  {
    "url": "assets/js/19.f24458bf.js",
    "revision": "a7bc5d4de2ce8b740fc4ccfe0517c96e"
  },
  {
    "url": "assets/js/20.de384407.js",
    "revision": "db0ed386072a9acdea59e212910f7400"
  },
  {
    "url": "assets/js/21.c3394fff.js",
    "revision": "7e5b3fe8eb364b9c87e273941683368f"
  },
  {
    "url": "assets/js/22.03ee9bf8.js",
    "revision": "350ae9c7a8ffb2d8f9fe71d867af98ce"
  },
  {
    "url": "assets/js/23.5fc850a8.js",
    "revision": "fa380add3f35b60147b84f122d3ac62a"
  },
  {
    "url": "assets/js/24.01bc233b.js",
    "revision": "9fb76c58153101ed3d177af334a50c6e"
  },
  {
    "url": "assets/js/25.cec601a1.js",
    "revision": "f813d8e70503404e45197acadd493cf0"
  },
  {
    "url": "assets/js/26.2a7a880f.js",
    "revision": "dcfaee1f8cf75756a6051fb2e80681e0"
  },
  {
    "url": "assets/js/27.cae31483.js",
    "revision": "a7083d84186aeaf930d495ba11ce9132"
  },
  {
    "url": "assets/js/28.23d8ed19.js",
    "revision": "60d8a3bf4fcdd4e6a5325801558e29e6"
  },
  {
    "url": "assets/js/29.43ed127f.js",
    "revision": "732b72f2d57c20babb561895aa01cfea"
  },
  {
    "url": "assets/js/3.d96d9df6.js",
    "revision": "6a5f2e0a4867645baa33542feacf0fab"
  },
  {
    "url": "assets/js/30.5a76d123.js",
    "revision": "3173598c1ae0402f83449916b657971e"
  },
  {
    "url": "assets/js/31.9d2d3b4b.js",
    "revision": "4c4c2153d6de9698be304be38a4765d1"
  },
  {
    "url": "assets/js/32.3a81a452.js",
    "revision": "8643e8c229f87f0a88f5e9fa1eeda4e4"
  },
  {
    "url": "assets/js/33.79a26c62.js",
    "revision": "c6ad44e66ba8677bb541f9d4a5c25721"
  },
  {
    "url": "assets/js/34.fc4e0714.js",
    "revision": "b84a1d3aa02be8ace6f7ba68305c4321"
  },
  {
    "url": "assets/js/35.ba858190.js",
    "revision": "aba74e002545a51c61889a013df9400d"
  },
  {
    "url": "assets/js/36.6c2ac805.js",
    "revision": "15e2fdbcffa0500171debb1eb0764b1b"
  },
  {
    "url": "assets/js/37.8d2dcbb0.js",
    "revision": "4db122aacf6a9658a62d2c2a507f83d3"
  },
  {
    "url": "assets/js/38.2fdc9ec7.js",
    "revision": "37a075fca6d2416f2c3e4e1843b05135"
  },
  {
    "url": "assets/js/39.040f905a.js",
    "revision": "493aae79f1b25029d09bc3b556516dbe"
  },
  {
    "url": "assets/js/4.58ad7b3e.js",
    "revision": "cf3c38c2f0e29f35e80e87f4fe8ce593"
  },
  {
    "url": "assets/js/40.fc5349af.js",
    "revision": "b60807d3f4003a492511d0abad4b7d64"
  },
  {
    "url": "assets/js/41.19c85892.js",
    "revision": "e70025dd4b3e1eff06284ba621f34132"
  },
  {
    "url": "assets/js/42.ea41987a.js",
    "revision": "f699889a56f436cf8b58df657a47c665"
  },
  {
    "url": "assets/js/43.7f6de336.js",
    "revision": "dcb96be14997adedbbed750989275a0c"
  },
  {
    "url": "assets/js/44.3eaa9a76.js",
    "revision": "db1c33877b6c6e8fa86c2efa0e950f52"
  },
  {
    "url": "assets/js/45.6908d82d.js",
    "revision": "10befb452a20626d38f8858d45d5d08b"
  },
  {
    "url": "assets/js/46.1819214a.js",
    "revision": "6137c09600b4299f6ea02bbc87f3aca2"
  },
  {
    "url": "assets/js/47.138480fa.js",
    "revision": "2454941e51950d8bed3ef9bbb46a515f"
  },
  {
    "url": "assets/js/48.cf53af6d.js",
    "revision": "0c32a4c7f576b636e16616adbd28bf17"
  },
  {
    "url": "assets/js/49.e849c403.js",
    "revision": "caeef40767a97ffd173f98889aa3eca6"
  },
  {
    "url": "assets/js/5.654915da.js",
    "revision": "532249665e3c3b354d9dd201f6557b65"
  },
  {
    "url": "assets/js/50.c3228c93.js",
    "revision": "7d6a2184bdcf5b1fa5f6ee15fd9e6ede"
  },
  {
    "url": "assets/js/51.71f1fe73.js",
    "revision": "b90cbc1d38cf0b69a7c75a76e08b9e86"
  },
  {
    "url": "assets/js/52.8d5b3def.js",
    "revision": "ddac044a6be48d150bdd532363115bf9"
  },
  {
    "url": "assets/js/53.03405fa6.js",
    "revision": "fa17e92ef17a5b0ad0697d49dbaae6e1"
  },
  {
    "url": "assets/js/54.f6bf59b5.js",
    "revision": "b820623a6db43f6ab4f08ade86213f42"
  },
  {
    "url": "assets/js/55.0cc48626.js",
    "revision": "e8d22b89e6f90c25d049965d467e5aad"
  },
  {
    "url": "assets/js/56.5e7f1af3.js",
    "revision": "46f0077d5b800fdfc8170f781759d649"
  },
  {
    "url": "assets/js/57.1bf8d246.js",
    "revision": "a769bf3766db07c3130c6e5830defb21"
  },
  {
    "url": "assets/js/58.51a06e18.js",
    "revision": "7655d7d5433b2f8d1b6865773f7aca85"
  },
  {
    "url": "assets/js/59.54f414d5.js",
    "revision": "84620d5626800c11f80b22fdf5277237"
  },
  {
    "url": "assets/js/6.b0af6c2c.js",
    "revision": "0af7b91ee904b94b95af8837d76b19c3"
  },
  {
    "url": "assets/js/60.cf268165.js",
    "revision": "e36fcb6d18902d4f38ff57c0ddbd998b"
  },
  {
    "url": "assets/js/61.e4ea8887.js",
    "revision": "ac52df5852c9ac4593452b9a666d3445"
  },
  {
    "url": "assets/js/62.4d526f7a.js",
    "revision": "78c72e53922d269f7f77faf2bd6e28fb"
  },
  {
    "url": "assets/js/63.80e756cf.js",
    "revision": "0954e9e503d68fc069e1741d7869dc09"
  },
  {
    "url": "assets/js/64.a68aa7ca.js",
    "revision": "54a56ee1b3593839d88f733cbd3e50b6"
  },
  {
    "url": "assets/js/65.53495376.js",
    "revision": "c3a8cfa71548f01c0b2574127163ebe9"
  },
  {
    "url": "assets/js/66.7b328307.js",
    "revision": "7536f0d791ca6d2d9cd22601ebc3fa1d"
  },
  {
    "url": "assets/js/67.40d3c2e2.js",
    "revision": "3dc7a9f8ab1bb2f6fc8f1c047cff0b43"
  },
  {
    "url": "assets/js/68.2e52b7ce.js",
    "revision": "84224075b2db7f4bb27e1a0417e02d35"
  },
  {
    "url": "assets/js/69.40fb8f3f.js",
    "revision": "b7496e782e9d6e3f503f29d39afa4cfe"
  },
  {
    "url": "assets/js/7.d0d5b22b.js",
    "revision": "e18d2cff0a6847d4fc434190327c30dc"
  },
  {
    "url": "assets/js/70.18845251.js",
    "revision": "3ae7225d8f006d9e2eb2fc1ce1929c44"
  },
  {
    "url": "assets/js/71.1970e488.js",
    "revision": "db8b07dcfe24d0ef0615a572a5e408b5"
  },
  {
    "url": "assets/js/72.b9d76885.js",
    "revision": "b090a11cec317e810d8f8b9e6b51edc9"
  },
  {
    "url": "assets/js/73.22fd97f3.js",
    "revision": "3cb770b821dec3dd1540412bd010427f"
  },
  {
    "url": "assets/js/74.f2243f94.js",
    "revision": "27bbea41f3c7b42315c2616934b909e7"
  },
  {
    "url": "assets/js/75.f092ced4.js",
    "revision": "ee56f2483200d62083f9982d25b67f91"
  },
  {
    "url": "assets/js/76.ae32474c.js",
    "revision": "07364a77d3e71a00ad1be314ad85b12b"
  },
  {
    "url": "assets/js/77.0e1555d7.js",
    "revision": "b4e000949d07858ada19e718622ab907"
  },
  {
    "url": "assets/js/78.5f4795ad.js",
    "revision": "dfd46e95ec0d38a4028780e95fcbf134"
  },
  {
    "url": "assets/js/79.c37816e8.js",
    "revision": "bce4beca2f439b59ef58b6bf7f58dcdd"
  },
  {
    "url": "assets/js/8.f5b4a09a.js",
    "revision": "925382c10a0150c63e6af3358ee56a4d"
  },
  {
    "url": "assets/js/80.9f207aa6.js",
    "revision": "e232e85cf6d9c71fc2e041d248001e11"
  },
  {
    "url": "assets/js/81.6184d212.js",
    "revision": "d39584d34527fb01d98602c50c69eeeb"
  },
  {
    "url": "assets/js/82.ce61b255.js",
    "revision": "276cbb6faf0cfec684b60e997c69d343"
  },
  {
    "url": "assets/js/83.cd62493d.js",
    "revision": "75b73881b880ff279cc2e4660f558bf4"
  },
  {
    "url": "assets/js/84.c074513b.js",
    "revision": "808eb901bb925b30117515c1221eb53b"
  },
  {
    "url": "assets/js/85.074f0c1e.js",
    "revision": "b07dc259351816c0637515dba814fbb5"
  },
  {
    "url": "assets/js/86.546fb812.js",
    "revision": "bf44423a8c5cc97c396c5163a6d31bb6"
  },
  {
    "url": "assets/js/87.f8d516bc.js",
    "revision": "d9addd408b1abb9d7fae39040ba2a605"
  },
  {
    "url": "assets/js/88.7126eb19.js",
    "revision": "498d86a3457799c0de715ea627bcf93f"
  },
  {
    "url": "assets/js/89.2f73bd7a.js",
    "revision": "83513b7785a0c445b62a6ab1dce56851"
  },
  {
    "url": "assets/js/9.07d7df3c.js",
    "revision": "3196ee544251fbb45637f0b09888d685"
  },
  {
    "url": "assets/js/90.9a13b528.js",
    "revision": "121e7dcc43879441b034289f3d4299ae"
  },
  {
    "url": "assets/js/91.5fe250dd.js",
    "revision": "c05537f2ccbfe42499126e3f28e2bb67"
  },
  {
    "url": "assets/js/92.06092ae7.js",
    "revision": "c3ec0172db7aa63ad8a9500de38d7589"
  },
  {
    "url": "assets/js/93.5db5ab21.js",
    "revision": "83e55cfb8cd7c3b699f63e481442c827"
  },
  {
    "url": "assets/js/94.7012e6b6.js",
    "revision": "982c457ad95fc549dee7368d34f5d2e1"
  },
  {
    "url": "assets/js/95.38c68ce6.js",
    "revision": "a355115c38e7c9c55ed9a1026037698e"
  },
  {
    "url": "assets/js/96.d6dedf17.js",
    "revision": "3556102798071a6fceabbadae9d0c320"
  },
  {
    "url": "assets/js/97.23bb5562.js",
    "revision": "322a408c8b6d8d6fb8f3c5b431592e98"
  },
  {
    "url": "assets/js/98.2f97df21.js",
    "revision": "7b4d10a230ec76c38ab517fe94432f80"
  },
  {
    "url": "assets/js/99.13381ae6.js",
    "revision": "427972d0af2b8d7bc0deee10bd331b38"
  },
  {
    "url": "assets/js/app.a38f1d55.js",
    "revision": "7b89f1d19602d387be529249ec28cfb7"
  },
  {
    "url": "assets/js/vendors~notification.2dd46936.js",
    "revision": "9859a1d4aece16d5372a4a9b6085477d"
  },
  {
    "url": "i18n/index.html",
    "revision": "3618be7c815b8ac1ab11b4c7f5972d0c"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "a4f3650dc175af54dc891db8cd0456c3"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "b66d7525eacc0bee32b47cecea600373"
  },
  {
    "url": "tutorial/index.html",
    "revision": "f0675ec8e3cf9197210878b402a1426b"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "d2f23e8f860711677667561e29d52678"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "1114a1ebe2d46c6b4dd65a24f8e897f7"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "85d0d2e97b0ff2519847988d0dda6531"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "df7a6a5b552b0b516f5a74f6c2730377"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "e78599408b14237fa39c0fdfc305395e"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "1080debfd99f73788d648b495b448870"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "99c964dc34e46c5bd175a9ec4fc61a4a"
  },
  {
    "url": "zh/api/index.html",
    "revision": "33ebf3d5982c833539db0caa4654a30d"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "70acbfd905804b7c24ddd2b1e85d6b08"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "23e2245099b5502d516ce538a4e217ad"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "412241d09ad8da1bcfd0cbcf79238d07"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "ae7377fdb875578c7e78194f471f50b0"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "b3704546613dbb9cb286c6c94af2ad55"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "04edffb0117b69e1ce09b3aa3e199352"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "7121ceee7f91e912a0a6831ea82154b2"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "d99ca2d524a7c3cfac823fbc5a7183a1"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "ff1281b2f2c81c4f9f5769a4319de3ca"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "6fc65545f9bf03282dd6bd877c4defdb"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "e4152906f0b641982784129c0c883587"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "eb00bcd25e8691513b68b6231203e3ed"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "79693246bbf8f4c3735583182b971e27"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "08177511fb3886b55ee2ded93ee8307e"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "bce80334e85678efd9f29196ad24cca8"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "c4ad68b34ab3ac1bab9f211b26f0d862"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "537ddec83bb589bfd3ed8257e1fd295c"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "63ea1f3c008a469319cfb9aabb7d1b2a"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "06147a1a4ce88f9f529722cdd4aba10e"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "cf6a96514f98021a6e48e220095326b6"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "4185668c9da5dbb60a8e5ec6c8b3cdb6"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "a51b529ee541ef7625997c77199ef377"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "66a7e31ac0a1e7859061e8a5c311dc1c"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "0cb58251a93db13953fca5f18fc39112"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "e54a56a453f19ebf0156d5073180d0b0"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "eae05a7f09a7a89df965c2f1e09f4fb6"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "d9749f22074da8f9e033345055a85727"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "5bdd58635b6ae8fbaf040e9e77cebd12"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "5ecc6080cad943a0106a60200d5fd471"
  },
  {
    "url": "zh/api/rpc/Oracle.html",
    "revision": "901991000df36242d23626280788adbe"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "4b87e5d807dc4799da331c988fe969f0"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "6987f64c79fd2fbea9f794d8b719bb0f"
  },
  {
    "url": "zh/api/rpc/Publisher.html",
    "revision": "39544a78e4e832c5a4df7438e05bc79b"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "2844c780cc4e3f7d005c0b6822f85222"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "55be838c61ae8f733a5cbfd2c0cee23b"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "4f98e899d9e186022f0a85f3800d9162"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "971de2055259a2d4ab399350392b7587"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "029130126fa505a4a7fad067df990b19"
  },
  {
    "url": "zh/api/rpc/Verifier.html",
    "revision": "4d3b7e99013037a113a7d638c63b648d"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "377ff1f9f48e1b1c414fd52e8b523e37"
  },
  {
    "url": "zh/index.html",
    "revision": "5b970afc98731f154b8589e4fc190399"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "382d52387a4b2e70e473b5cc735224a3"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "1d3c8cc3a41fe1438de10c2a6f7558ac"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "b9bcc1b5aaecfe0b135f773b2f53c3d8"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "15583a7f953fe8e508e75aa53a5b0ea6"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "68d0865c6af7200aeae43572a601a276"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "81e73bf50cd7689269408984073f6012"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "9d0224a0dab194843acb2fa1eec20b38"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "155ee064c79b4f265c39f60d4a5951ab"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "45293c9984df6e1d9a91d51ea86f563f"
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
