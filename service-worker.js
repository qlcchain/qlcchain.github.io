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
    "revision": "35c948cc1194da8f2043876fdcd74036"
  },
  {
    "url": "api/index.html",
    "revision": "1807ed35159ce54442226a0e6c8956d1"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "1c0a1d48047e11ef12922f7bb4211b70"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "a6ef65198d72c2e6ae0c0ea93ad6cc8c"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "bb289d5ad8a85f4369cea311fd889ed4"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "62d1c4d9f62825da07d1e38b9ce355ae"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "a2f56f9256b954db03e8611068e63cb7"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "7fc382a68c7320a34b6ceee1153473a9"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "a16832a34165661bfd822ddadeefbd1a"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "76a84cc112e5b827b44e5f75431b6976"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "ed0351081eaca141a8d7ec83a2acb22c"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "2a6894baf5ece31341357e38fbab9f5a"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "038dd843598d624c8ff1910d29de1a8e"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "470a263f37e76a0cd5ed4d8caa27c17d"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "665b757a4eb1919995f2c81d054b8f43"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "05699a83eca424979859544f1006b5b2"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "88cc76072778e0448aa024f998c55067"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "baa711da8620c7a56eef543a07f80fdf"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "ed01aeee603dfa4a3f182eac16edd881"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "d7226c4446c4c8c3aeea253e53e1e1e0"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "c86d0156a366032cb3d10427ab3256b3"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "946ebce4d063b50111acf6f125ada2dc"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "474a105db1248ba6c146571404c3462b"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "c0c597270e937dd3b2232be0487cc74a"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "2dc79547dc4e6331b98776b812c7bb4e"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "d9cb94362e0ddc352c239f35b91657c1"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "c16cb12a865e2e75c3d75a8d9f88f362"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "6e0258c58cbe085a67967f511f9aa98b"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "f6f2f86ca9dd7fe3315f8c216a9316df"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "32a486e5c4a661e30a7504bb2b45107c"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "0f9922728be02aaa604ca73b0e8281da"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "689db0b4c2b43315c7de65c8f4b07321"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "80367011f8ca5b3d4bc627c73d035670"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "96754b3556811e40d8edfc36317c0ed3"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "ff58abb9633f599fe3970bdc46c08c8a"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "b8372f3be24c07dc23f2d8bc3c673128"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "4b0cfff5f8e493e8873f17e608915da6"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "1ed650c0cf13a96a05d3fe2492c0bda0"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "a416c878cde19af1d65fcf80abad4369"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "afb286ae6e0cc0bc18be27b4958f593a"
  },
  {
    "url": "assets/css/0.styles.2dab0561.css",
    "revision": "b1e95bf8e0dff371ee15983378a18667"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cb235ebd.js",
    "revision": "43c379725283662535914d5ef4c108ef"
  },
  {
    "url": "assets/js/100.e9137850.js",
    "revision": "28f730615bbc991250e66516a8f486f9"
  },
  {
    "url": "assets/js/101.f20ee24e.js",
    "revision": "4a369f383243ca082b916e4ab9e0aafe"
  },
  {
    "url": "assets/js/102.02dc474a.js",
    "revision": "afa1bbaa534f4914a350df2d2ae1f008"
  },
  {
    "url": "assets/js/103.0f65f88f.js",
    "revision": "956b6fabbd5cbff4c33479c151e9e55c"
  },
  {
    "url": "assets/js/104.eafbab8b.js",
    "revision": "65a2f6ad04c044dedc778c1303d0f6f5"
  },
  {
    "url": "assets/js/105.2d13938f.js",
    "revision": "b8e4b17eed01cd6412cacec0d8b798bc"
  },
  {
    "url": "assets/js/11.580098bd.js",
    "revision": "bfff9206c18c353da33915a5e8cdfa7a"
  },
  {
    "url": "assets/js/12.8a24aaf5.js",
    "revision": "36305299a1f96f0d67d06394e74e170b"
  },
  {
    "url": "assets/js/13.ee7acd22.js",
    "revision": "c2a7734b67cfa95d493780d26ed842f3"
  },
  {
    "url": "assets/js/14.0b3364f0.js",
    "revision": "bbbdaca11ac8f2992a383a6beb7906d9"
  },
  {
    "url": "assets/js/15.dd2b72d6.js",
    "revision": "d433917e9c6c0de45adda4059784c427"
  },
  {
    "url": "assets/js/16.b2a16e39.js",
    "revision": "a14e549c37c4fe4b8655f36a25e44ff4"
  },
  {
    "url": "assets/js/17.8c42b71a.js",
    "revision": "693942ce802c9e348225e18fc2270bdf"
  },
  {
    "url": "assets/js/18.a84aefbd.js",
    "revision": "10927ce30a111699e8f139218f177b3f"
  },
  {
    "url": "assets/js/19.dd961724.js",
    "revision": "a7bc5d4de2ce8b740fc4ccfe0517c96e"
  },
  {
    "url": "assets/js/20.0723b73a.js",
    "revision": "db0ed386072a9acdea59e212910f7400"
  },
  {
    "url": "assets/js/21.0699d555.js",
    "revision": "7e5b3fe8eb364b9c87e273941683368f"
  },
  {
    "url": "assets/js/22.bc89a896.js",
    "revision": "350ae9c7a8ffb2d8f9fe71d867af98ce"
  },
  {
    "url": "assets/js/23.f0fa4785.js",
    "revision": "fa380add3f35b60147b84f122d3ac62a"
  },
  {
    "url": "assets/js/24.3d54c9f2.js",
    "revision": "9fb76c58153101ed3d177af334a50c6e"
  },
  {
    "url": "assets/js/25.2aefe34f.js",
    "revision": "f813d8e70503404e45197acadd493cf0"
  },
  {
    "url": "assets/js/26.abafbf26.js",
    "revision": "dcfaee1f8cf75756a6051fb2e80681e0"
  },
  {
    "url": "assets/js/27.ef07cf00.js",
    "revision": "a7083d84186aeaf930d495ba11ce9132"
  },
  {
    "url": "assets/js/28.1b974f83.js",
    "revision": "60d8a3bf4fcdd4e6a5325801558e29e6"
  },
  {
    "url": "assets/js/29.431b8f8d.js",
    "revision": "732b72f2d57c20babb561895aa01cfea"
  },
  {
    "url": "assets/js/3.ea6440bd.js",
    "revision": "6a5f2e0a4867645baa33542feacf0fab"
  },
  {
    "url": "assets/js/30.181bb355.js",
    "revision": "24a8777bf6f336c5fc265d6be45ed01a"
  },
  {
    "url": "assets/js/31.ef0dbe57.js",
    "revision": "2f42a681c2c56bc4bbd89ca67cfbd650"
  },
  {
    "url": "assets/js/32.6a12b666.js",
    "revision": "9f3de8e4ec0dc790ca516e53173da5a0"
  },
  {
    "url": "assets/js/33.a853d454.js",
    "revision": "11f54a0f0ad3954e76a384c8b46c7f37"
  },
  {
    "url": "assets/js/34.53e1a294.js",
    "revision": "c5ac08ffa543fff7ab8e9f71c589aa28"
  },
  {
    "url": "assets/js/35.14e03eee.js",
    "revision": "b02db1f1d853ccd685e3c40530f4b840"
  },
  {
    "url": "assets/js/36.99665a19.js",
    "revision": "6ec224c34c19fea77304a7ec32550fc9"
  },
  {
    "url": "assets/js/37.46039efe.js",
    "revision": "a1b9de05abe1a77c60919b6e26e9fad2"
  },
  {
    "url": "assets/js/38.0ae9dbea.js",
    "revision": "39bdab2ef3f67c7ebd845d040b07966f"
  },
  {
    "url": "assets/js/39.1ff2a80b.js",
    "revision": "181c84319c522e1c36fb54c5f5fac78d"
  },
  {
    "url": "assets/js/4.6204daa1.js",
    "revision": "cf3c38c2f0e29f35e80e87f4fe8ce593"
  },
  {
    "url": "assets/js/40.92038c78.js",
    "revision": "85c206e14c05fce5d4fd984577d3e80a"
  },
  {
    "url": "assets/js/41.7fefc9bb.js",
    "revision": "d80b569b0fa71f6c43c77cd0130e230d"
  },
  {
    "url": "assets/js/42.6694e2e8.js",
    "revision": "a1f5dc5955a67fe3ee33cf8148a82060"
  },
  {
    "url": "assets/js/43.f6512cd6.js",
    "revision": "47e9cb921c6499872abca1a78c379001"
  },
  {
    "url": "assets/js/44.26741499.js",
    "revision": "141856472e90829fe554bf34096459d0"
  },
  {
    "url": "assets/js/45.a5a03233.js",
    "revision": "dc51e62ca0ffef54a8a77aa0b41642ba"
  },
  {
    "url": "assets/js/46.98b76bfb.js",
    "revision": "21070a61b2542ff1f6c37573918aeb7e"
  },
  {
    "url": "assets/js/47.5b0be3e7.js",
    "revision": "6064dccf3c30e47034c63f662692c6f8"
  },
  {
    "url": "assets/js/48.a2b30436.js",
    "revision": "714596c18ec532f190e0c12c042a7c9e"
  },
  {
    "url": "assets/js/49.08f86e68.js",
    "revision": "8dde119a631715764d632d96b397a071"
  },
  {
    "url": "assets/js/5.58f3a63c.js",
    "revision": "c644e82796f572f3324c091039bbad73"
  },
  {
    "url": "assets/js/50.5476ed64.js",
    "revision": "3141f091e88c6c4c1a79970ae911fbaa"
  },
  {
    "url": "assets/js/51.a90e6bca.js",
    "revision": "bbb66bed851467d7e75b921b8dee6bc5"
  },
  {
    "url": "assets/js/52.29334277.js",
    "revision": "0770a81ab9c4b0f9400c6ff557b584d9"
  },
  {
    "url": "assets/js/53.e9669174.js",
    "revision": "b5ee6488c71f22acc25572f214d4e580"
  },
  {
    "url": "assets/js/54.a0144473.js",
    "revision": "dd36e99fc4b6e424f39ba72229407236"
  },
  {
    "url": "assets/js/55.41c111b7.js",
    "revision": "cdb8ffb4ce6dc5086f12eab52f279108"
  },
  {
    "url": "assets/js/56.193b6bf7.js",
    "revision": "8f5fefb11126e2ef01a4d363768cd254"
  },
  {
    "url": "assets/js/57.19eb9c8b.js",
    "revision": "544d08b55f358c659f6dbdcb2930e9ea"
  },
  {
    "url": "assets/js/58.9c2ccc09.js",
    "revision": "6aad5c7c82113f69e166142422376339"
  },
  {
    "url": "assets/js/59.f54c45a7.js",
    "revision": "bb739f5955b3f5452592d85afbfb9ec2"
  },
  {
    "url": "assets/js/6.9c162a39.js",
    "revision": "0af7b91ee904b94b95af8837d76b19c3"
  },
  {
    "url": "assets/js/60.30ae6cb3.js",
    "revision": "79d921e2e5c91e85d2016ecc50e090f7"
  },
  {
    "url": "assets/js/61.fb9ec8a9.js",
    "revision": "de6bd75f1f0d04de8d3a9a660291220b"
  },
  {
    "url": "assets/js/62.ca0473b0.js",
    "revision": "376b4a1d41b6ec0b3440e25626ee0334"
  },
  {
    "url": "assets/js/63.f60c5505.js",
    "revision": "f09a3f70b88b0758d13d62dbe9f4cf61"
  },
  {
    "url": "assets/js/64.3547bdde.js",
    "revision": "e593853c94182c77050d0afdfafce476"
  },
  {
    "url": "assets/js/65.75e69442.js",
    "revision": "300d55e89b6bc1044e2d7c521143878e"
  },
  {
    "url": "assets/js/66.c0d500b5.js",
    "revision": "225f547d5b2d8df18d2ae6f1d2129415"
  },
  {
    "url": "assets/js/67.b89f6630.js",
    "revision": "49598a664ff895c44853080161940ae4"
  },
  {
    "url": "assets/js/68.0b86e963.js",
    "revision": "32a92df5790f1dbcaefb603e6129a13c"
  },
  {
    "url": "assets/js/69.ddfc241a.js",
    "revision": "a751586330a03c87a5c4844eb2ce96b2"
  },
  {
    "url": "assets/js/7.2f304e87.js",
    "revision": "80a23fcca54d1d3c31d4945f66edc06d"
  },
  {
    "url": "assets/js/70.bcd02fec.js",
    "revision": "f28103cdbafe792e01de103ce1f70de4"
  },
  {
    "url": "assets/js/71.3548d618.js",
    "revision": "5bba01db87489ebc3fdb7c62d9f3a8fd"
  },
  {
    "url": "assets/js/72.94d9df5e.js",
    "revision": "cd45def3de0f0486738a877c777878e6"
  },
  {
    "url": "assets/js/73.27c963fc.js",
    "revision": "a3d8cc6c3eea77c1d37c062bb5bb83be"
  },
  {
    "url": "assets/js/74.2f21594f.js",
    "revision": "8e903e2911d1c5a0106a6aed5c2a1f20"
  },
  {
    "url": "assets/js/75.0135fd41.js",
    "revision": "ee4978443ee4eef7a5b75bbc56e40939"
  },
  {
    "url": "assets/js/76.915f9c6e.js",
    "revision": "ca67f957a03d51cde609cc72e83e74bb"
  },
  {
    "url": "assets/js/77.7ebb49f9.js",
    "revision": "e48c225eb01664ed3f6e3b7c4bd70e9e"
  },
  {
    "url": "assets/js/78.9c05008f.js",
    "revision": "e90afc3a78f801e8fc517af3e50b6c5b"
  },
  {
    "url": "assets/js/79.1812bf2f.js",
    "revision": "1766fef935c574c71cefdfbcb345ab30"
  },
  {
    "url": "assets/js/8.6e572c71.js",
    "revision": "44254180aca31ddec4e5874a5959cf7a"
  },
  {
    "url": "assets/js/80.a63f053a.js",
    "revision": "403981379fb40da1a33c93da7a394382"
  },
  {
    "url": "assets/js/81.bdb03d1f.js",
    "revision": "dd38093a512c0b76a2698a904e3dac5f"
  },
  {
    "url": "assets/js/82.8f4c9e30.js",
    "revision": "f4a466821bb63c65bd1777a8bc33cd1c"
  },
  {
    "url": "assets/js/83.58c9eea4.js",
    "revision": "8b245766d3b7080c61531d91902383f0"
  },
  {
    "url": "assets/js/84.6efcdd19.js",
    "revision": "78ff2ccfd07bf268788d2201e43e3204"
  },
  {
    "url": "assets/js/85.908ee7b2.js",
    "revision": "f19a4490848523bad17f6567fb28d136"
  },
  {
    "url": "assets/js/86.072ae255.js",
    "revision": "83fdb0300fb13158c96381ba503eb498"
  },
  {
    "url": "assets/js/87.8e7fe0c4.js",
    "revision": "d0631d05d7d536e47bc4de2c38a37eea"
  },
  {
    "url": "assets/js/88.a3e19a24.js",
    "revision": "df8edaa90cbe5c1bb84819c41bb8cd58"
  },
  {
    "url": "assets/js/89.228b4699.js",
    "revision": "15c9a60bd496e9ac0a63a93646124ff5"
  },
  {
    "url": "assets/js/9.7c481a67.js",
    "revision": "36651b317855f8e56e5df326d95ab1d0"
  },
  {
    "url": "assets/js/90.b2a88e6f.js",
    "revision": "c30a27eccc13739b95295e2f76c8090b"
  },
  {
    "url": "assets/js/91.351c25a9.js",
    "revision": "5ada7f096906e2d9339c257ebdb6a9bb"
  },
  {
    "url": "assets/js/92.fb256a3d.js",
    "revision": "1fd33edac7fcddf43ee5c3cc8032d228"
  },
  {
    "url": "assets/js/93.93952b28.js",
    "revision": "f2359a90eda174036ca372279e8b85fb"
  },
  {
    "url": "assets/js/94.a56e2bd5.js",
    "revision": "b3429eed4a56d6fba50f4d97f7fc3e43"
  },
  {
    "url": "assets/js/95.fb3e178d.js",
    "revision": "9f792a38c54a6e2d0fdaeef35a439a35"
  },
  {
    "url": "assets/js/96.0ee46cf4.js",
    "revision": "235fd5ada5e153c31de3d1eeb4e890c2"
  },
  {
    "url": "assets/js/97.c58db1ad.js",
    "revision": "f3aeaf904e73d16bc3b86e93d9546693"
  },
  {
    "url": "assets/js/98.cf2c8eda.js",
    "revision": "bb02a4649af34f1f0f0ee2b91b804107"
  },
  {
    "url": "assets/js/99.45549e90.js",
    "revision": "4d30355f70d1ce7a0e0685da9f79d599"
  },
  {
    "url": "assets/js/app.c9b2fbe0.js",
    "revision": "a2fc548f9554f2813458c87ab85522d6"
  },
  {
    "url": "assets/js/vendors~notification.5e9dceb0.js",
    "revision": "9859a1d4aece16d5372a4a9b6085477d"
  },
  {
    "url": "i18n/index.html",
    "revision": "7ade5fba8e0060bb54fa8c78a9759cc0"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "ba35c930e78b2f43f8598530e5d5caa8"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "c86f12df8510515f1332ef7ddf690849"
  },
  {
    "url": "tutorial/index.html",
    "revision": "0776ace0d4489c6825081ff2404bd303"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "63ae8a2f33ea1f0bb7f1ebaa1e752a43"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "59e678f183f7fd47a8b90432e8492415"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "e48b0292eae5fc8de40493e8ef318287"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "224dba0630169c3b537be2c737e3131e"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "d53959eea52848ce3202033b601af20c"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "ff04626a4d74797634a2d507ce9bfede"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "ef7966a2b37f2563747ca11431396ba5"
  },
  {
    "url": "zh/api/index.html",
    "revision": "dac01b9f93e524c372aa8f04d4778aa7"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "5365ac0a8062141fe33ab1c807895726"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "ac9e5c95a02ab4ad524df0973780716a"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "6249b0dc6e64c99fd274ef556d8b4824"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "9e7b3a53d9a9ff1bcba6528dfb84bd4e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "648353fa98c4950504c8aafd31c206fe"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "bf57891def21dbbac22e7d733c8053bd"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "12612c24abda3e7eb9a8fa5d8410e4c5"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "6f9424b0326312905f2529c159f5bc93"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "88317f7e77e3e6e89920648715fc8572"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "2eef0b3b6cebe8f6f57ffdc23f05af3a"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "d060dada3f8a47704a14fe9fdc606f77"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "7ee3f792b8441bc8e9ef88deb7b27379"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "54bdbb89f555916aa135604b6e2ac9de"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "36a32b25c27fe54e6588568db3608b1d"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "44e69feb1637eb580865ed9f367198d0"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "be1d4acb93803222056843db8a86aca7"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "30351c8ce6b5d5d916aba1994d61a784"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "62e70cf0381ae0da1e01747ed748f53d"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "5a6bdfef7ed37ff90c8e5f5fc2c94746"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "6c2febde4fb0077952d52e3f3a690d1b"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "9ab47e980676dfe3ab0429c667bd95a7"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "97301a3e4d43a6a4a31ad1f3bfb66c18"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "53977ec983de703492cca62f3671635a"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "bd72630b3fb507817e3c0be2b2bc4af0"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "b0e4c2441dc56d218267ed8cfe058e12"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "a5b866a5c1a3bc19a8dfb9708fe3a658"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "fc4f1aecb39f341b573595dfbb1da78b"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "ac992447a63d69bd4072719c762a7c38"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "fff37a5432fd7637fb667e7bdd4bd69f"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "9b61199e927494efdf69215aca29b834"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "1a9328b80999f96e1d1de4159fbd5692"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "8ac4772b0686ce25e4135efd2b3d3add"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "3bff2e7a7f922933cbc4fd167dd6409d"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "148450142e418e566073174fe82fec55"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "1c8fa50b1429849e1d0dacdb0cfb8ed1"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "b7d59bb205576ae5cd4f2adbf65a38f4"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "740f3f8fa84f78d4047957bd25617612"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "cc795549a6c83d7edc712e8e912b94c2"
  },
  {
    "url": "zh/index.html",
    "revision": "554662649d1d0bbc05bbb58bd18332a7"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "63673de65712dc79b6dec3b7b979eb76"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "d1406617e1d5f2ba024494aeccc8fbde"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "60953321e2e4b2dbd6a7e85d933bb5c7"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "635ad109279e8a53183ac07b28251127"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "138d4545604f9e0b6aab793a00dc09f7"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "dacaa1e40d6e217a8b99dfbd44ddaa61"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "5e20eb6fcd3b3dae5b2c02451cc6e609"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "8fb0b9bd50608873aa200d9e4fe75c25"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "9a9622836fab5b15aa6365107c6ba82d"
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
