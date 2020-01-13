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
    "revision": "64e4480d655a9004e7ef7029b379326e"
  },
  {
    "url": "api/index.html",
    "revision": "b508ce18b049e7ae765b3bf76f0a7a0c"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "36278ee1150a508eb6fb97c7d4c4b8f9"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "dd3172dc8aea4544d97c1e3eddd655b3"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "4b7cc7772e342de04e2631002685bc82"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "608524749aecb1f50a1e0fec4ab790db"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "0f3b6717939376441de1052586828827"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "db5debb0b73581b3d318c6c7c800487e"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "f7bf8faba255697cfc333beb8ddf1a8b"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "5a4527b519d1abd45a077a1dd0540a3d"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "fa647dc2876d5c009ea85147cad400c9"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "b660700f6376956939064c48789121a6"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "ba52b141a4f9b18c7f9b3a450c4b8710"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "9d2ffb778651ddaa6224933b2c87e8b4"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "2d05ce2986fbd693ac7c821b010b427e"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "2a7120b10e96629a2df77cb9875ce047"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "b842a3b20e7815951b236df649318462"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "d293b5bf1371b19ab5ae126c1a1c6e55"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "a3a23e2957725ca03e7ef74420210772"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "fc04ac0f269345ab54f20ed0ad03fd05"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "15178bf03441fddcb600c5ac42822daf"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "1205e4ad38f5563228a0ad77ab8c47b4"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "f845448300ad3830e584f8bea96fea2e"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "663ce020efab04e73a1b6a5aa073b1e4"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "2ccfcf8129db8305f45b9febb96967e6"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "3d7be087e7a61b68d445b5ba6a29dd45"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "2087621222f58dab9c9f76fc9d59b0bc"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "fa91a767d0c89311ca3d858b8395e01a"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "829304eede078e9d0d4933a59aed2074"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "4690492087bcdd8abc4aae43e5cfe593"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "1c8bedf3bed51efbd1d053aa692c8d22"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "c5012e0e3dacb08e63b2a13a498f5188"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "8f97e1db2d046bdba7d560759999d0bd"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "f0738b5ef9cba8204014e2752cf14c19"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "e05d2a914db28e5085a5da3d748b947a"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "90a7b64032352d096625a3886ee5f934"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "bdfea1b18638631ca6677fe6e898ac9d"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "b908e3adcbd684d0e1891ecbff3e442d"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "ae631e9f798c0d41805d962f1b74283e"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "35d37a0ca8193e15681af9c35e77905b"
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
    "url": "assets/js/34.286eaf7a.js",
    "revision": "54c03b234c94c22e705767d39d966acd"
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
    "url": "assets/js/83.907ae197.js",
    "revision": "38cc59c066c1e646ff8565c71e7ad658"
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
    "url": "assets/js/app.07185825.js",
    "revision": "222e59a33b892178cb5841c92652d168"
  },
  {
    "url": "assets/js/vendors~notification.5e9dceb0.js",
    "revision": "9859a1d4aece16d5372a4a9b6085477d"
  },
  {
    "url": "i18n/index.html",
    "revision": "f6d6536da1caef78ceb6100237056f86"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "d18e4261f0b73ec588e27e5f983094fe"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "135111c18eb0f0b26b3b6d5fba1158aa"
  },
  {
    "url": "tutorial/index.html",
    "revision": "39d669464f73e1f099d9185282b9fad6"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "65c9535a64ec4620474ef4d8ec22d18c"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "5f622eb6817ecf3cd23c9659b42b618a"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "001668312421e256261ad1d4ebc01707"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "041b07982d9c2ba0926ba5d02e90bdcc"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "cff2e1d5dad89189e8d231b9301d1beb"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "002d3afd76ed7f14fdba91a655de4da3"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "bbf3f8ff1e92c5050ca8174e72d81abc"
  },
  {
    "url": "zh/api/index.html",
    "revision": "920d6d8b03db58b6e31eaa7b58ceab0c"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "cafcb88cb504dcd2d897d1abd6278fb2"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "74cf95dbbdb95e6f7b25711bcf3c4b61"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "a07e15a19397474f16f0efb195ce5097"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "0b36f4de101bcc32c71dd657034215f7"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "589cdee6f48129035100b1080a2af558"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "6beb1a4c97f4d94c2fe778230e8dc545"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "9113f8684324e909ce584ab4bcad9d1b"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "a67c88aad16f4bea53b3a9fb2d5110f0"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "fa804062b1865c710dbf39aefa5b7fd8"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "ea130d2f7e41ce07790465d766b7cd6b"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "ead62670f90f62341b6d9cbbd5aca1c5"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "fff79ff102527d9bc22bc7f5e3639942"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "635af5f1be105defab4d2d857849b0c8"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "dcda3d3cec97db1bfadef6f153b211f7"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "53e63c4d64a549e71c6fae94f9e7235f"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "c23132d6e5f189abab80af05c05897c5"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "0c704e1bbeb3664e9340ea4f411a6666"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "9191dc724288af1fbedfce284245432a"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "ec0a142fab5c0324db42d1279568386a"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "8f18c1f75bd713c8007ce8c86daa2a38"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "4f36031ab9c67f308887b8f8897272e1"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "7ba937f448bbcf02bb3fe19441aded56"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "00f6c0334fca077855cf2ce286662650"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "349246fe921e6d3d822935afbb273a11"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "55cbbd3a70915df6c26ccea9715d1473"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "18485af239e6c45be31cb45459069c66"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "bd5060d0136da14e8ca0ced2839c96aa"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "638ba8661acb83eccbd9680e33a9bdc9"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "78edb2a707270e4a80b9a710d617abc5"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "ba96c2db30299006d69de977a5983b11"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "a4500e7ed529131a557624ce059cb541"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "c1fdbef68045753ee28357cb092d3204"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "e1b0035728cd6944833b2f791072e663"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "a8ddcd66be5a85a6c5a2b8ca07d4fdc3"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "c99a6b7f3b59a028da9ea2a7ff3499fb"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "54fcfeaa55774a2f3420c5dfba20cd8c"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "4ff806cb16426e33c6712983c8b1cf42"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "13ffff6302c8a4384ce53a50e6cb19a4"
  },
  {
    "url": "zh/index.html",
    "revision": "fec8f05e5f3db51f110f4650aff7a063"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "bfee9c954c4d32f5b6309111f27c1a96"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "1714572caa5a10197cac12fd6c1188e7"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "959f3adce6bfd54937b74052eb03edaf"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "b1ad8a3bb9562c779a8c09f0bf58bbbf"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "b94f365916fa523884a416e9288beaba"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "235188dfa8e01d78f18137a850f26f13"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "8ad6b60bdd38e10a35d5bd81bce7a074"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "6c653bd976b5fc854f7a9392ce088df2"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "8d3499a261a45e5113f249537d9d10f2"
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
