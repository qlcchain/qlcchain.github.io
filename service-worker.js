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
    "revision": "bef131d0fbeb1d4e7f53b835ad573a3d"
  },
  {
    "url": "api/index.html",
    "revision": "c96ea96658c648bf684ee755095adff7"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "fab2d5c628365c4db170c90051c636b1"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "28f429c7236c99fdfe1c08b08bef0f1e"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "a45c69a9d573e7908d87f2a8a10a5335"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "7330a4114f85431c964d3e9a0bda5766"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "cb1813f658a3252ef0316954b034ebcf"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "63d8fefe7fb86caadd82232f76159ba3"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "72d7674ef59e8048c92e7f0fd8b70585"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "ad470eda75de2a243ba93dbf3c2a660a"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "3889f1089f3aba761c1c57f8fb3beec5"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "9debdd1d5f485dd120726f5ecb4d3072"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "ef280a75b88ae1bbe3107ba44822ec7c"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "7ab984e325eacc276553c26275663511"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "747828d22295cbedd17aba92fc3880f7"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "d3d544d4ae6dd4b3d80bee10c6413d19"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "6a0cbaf94dcc46aebff6ea2b57d890f7"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "ee7805784eb0a9d6189bc201f5e494a3"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "6ca3ed04156fcdb01b9cfa6170f5b5c8"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "48c63978684be31029053a564cf07d9f"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "47de4b24d7b3ce54b74ad4bacbd52a6c"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "c4f13d90421b633385cb5f034d06940e"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "d23c9b3751abebc05462631b987b1bcb"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "a7ca7b7bf76c9ca1c21ab10aea35b5ac"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "31b19361d32077edd3eb89cd25bbb52d"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "3d28add3e6151f83215ea69f483dd0e3"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "d33c1731d2cd8f43578f45ad1b2c6d76"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "b358531fb325868d47b4f9a0ef9fd6b6"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "a1fde671da741dfcfee109316ac06f83"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "4e0b1c5b1ccda3bc47702bba8b238d00"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "e5beeed4b41f5795310c5112ef98e13b"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "52b5093e9c797485f60feb9987acf5a9"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "e831ada7e1c1ac3a3ac32b0a40fb672d"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "e59bcdadaf1fdf5f92b75b79e9bf2c4e"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "c3b5743e37fee6a6a2cf68d2b15cedbd"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "24ecfb9b0330b41fc76249615a6ac2c7"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "c94b08465f0ae4d1e46691b844054017"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "9fa8efa8d85407974abe125c9c2b9def"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "a8fee957102dbca7a5dabfc100507ddd"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "d540db3c9bd3ae0f6596710820f997ed"
  },
  {
    "url": "assets/css/0.styles.f4dc73f7.css",
    "revision": "4ea5ceb0cb0a8c5a768d7bfe1d4a10a1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.362883d1.js",
    "revision": "43c379725283662535914d5ef4c108ef"
  },
  {
    "url": "assets/js/100.954b4b30.js",
    "revision": "28f730615bbc991250e66516a8f486f9"
  },
  {
    "url": "assets/js/101.f360f1f2.js",
    "revision": "4a369f383243ca082b916e4ab9e0aafe"
  },
  {
    "url": "assets/js/102.ad2b8aeb.js",
    "revision": "afa1bbaa534f4914a350df2d2ae1f008"
  },
  {
    "url": "assets/js/103.093539c9.js",
    "revision": "956b6fabbd5cbff4c33479c151e9e55c"
  },
  {
    "url": "assets/js/104.1ac10a2b.js",
    "revision": "65a2f6ad04c044dedc778c1303d0f6f5"
  },
  {
    "url": "assets/js/105.2d13938f.js",
    "revision": "b8e4b17eed01cd6412cacec0d8b798bc"
  },
  {
    "url": "assets/js/11.47fefd6b.js",
    "revision": "bfff9206c18c353da33915a5e8cdfa7a"
  },
  {
    "url": "assets/js/12.218606bb.js",
    "revision": "36305299a1f96f0d67d06394e74e170b"
  },
  {
    "url": "assets/js/13.478620de.js",
    "revision": "c2a7734b67cfa95d493780d26ed842f3"
  },
  {
    "url": "assets/js/14.6ccd387e.js",
    "revision": "bbbdaca11ac8f2992a383a6beb7906d9"
  },
  {
    "url": "assets/js/15.327f716f.js",
    "revision": "d433917e9c6c0de45adda4059784c427"
  },
  {
    "url": "assets/js/16.475bf3aa.js",
    "revision": "a14e549c37c4fe4b8655f36a25e44ff4"
  },
  {
    "url": "assets/js/17.5c90fa3f.js",
    "revision": "693942ce802c9e348225e18fc2270bdf"
  },
  {
    "url": "assets/js/18.2f64d9b8.js",
    "revision": "10927ce30a111699e8f139218f177b3f"
  },
  {
    "url": "assets/js/19.92978e71.js",
    "revision": "a7bc5d4de2ce8b740fc4ccfe0517c96e"
  },
  {
    "url": "assets/js/20.11b19f27.js",
    "revision": "db0ed386072a9acdea59e212910f7400"
  },
  {
    "url": "assets/js/21.27d82374.js",
    "revision": "7e5b3fe8eb364b9c87e273941683368f"
  },
  {
    "url": "assets/js/22.f13371e0.js",
    "revision": "350ae9c7a8ffb2d8f9fe71d867af98ce"
  },
  {
    "url": "assets/js/23.0630af81.js",
    "revision": "fa380add3f35b60147b84f122d3ac62a"
  },
  {
    "url": "assets/js/24.ac3faa96.js",
    "revision": "9fb76c58153101ed3d177af334a50c6e"
  },
  {
    "url": "assets/js/25.f27efe47.js",
    "revision": "f813d8e70503404e45197acadd493cf0"
  },
  {
    "url": "assets/js/26.25615e1d.js",
    "revision": "dcfaee1f8cf75756a6051fb2e80681e0"
  },
  {
    "url": "assets/js/27.9648c68d.js",
    "revision": "a7083d84186aeaf930d495ba11ce9132"
  },
  {
    "url": "assets/js/28.dd09729c.js",
    "revision": "60d8a3bf4fcdd4e6a5325801558e29e6"
  },
  {
    "url": "assets/js/29.f63b5c64.js",
    "revision": "732b72f2d57c20babb561895aa01cfea"
  },
  {
    "url": "assets/js/3.b8cf7b8e.js",
    "revision": "960d22e6217c2b79ee89835dcd4cc0c4"
  },
  {
    "url": "assets/js/30.efeef765.js",
    "revision": "24a8777bf6f336c5fc265d6be45ed01a"
  },
  {
    "url": "assets/js/31.3c5ce03e.js",
    "revision": "2f42a681c2c56bc4bbd89ca67cfbd650"
  },
  {
    "url": "assets/js/32.eef1f199.js",
    "revision": "9f3de8e4ec0dc790ca516e53173da5a0"
  },
  {
    "url": "assets/js/33.ee80fad7.js",
    "revision": "11f54a0f0ad3954e76a384c8b46c7f37"
  },
  {
    "url": "assets/js/34.031e31de.js",
    "revision": "0369df23d5ef94ce4f4439aac1f95dae"
  },
  {
    "url": "assets/js/35.856652df.js",
    "revision": "b02db1f1d853ccd685e3c40530f4b840"
  },
  {
    "url": "assets/js/36.6ad4b13c.js",
    "revision": "6ec224c34c19fea77304a7ec32550fc9"
  },
  {
    "url": "assets/js/37.9afa1095.js",
    "revision": "a1b9de05abe1a77c60919b6e26e9fad2"
  },
  {
    "url": "assets/js/38.6195b25d.js",
    "revision": "39bdab2ef3f67c7ebd845d040b07966f"
  },
  {
    "url": "assets/js/39.c0edd204.js",
    "revision": "181c84319c522e1c36fb54c5f5fac78d"
  },
  {
    "url": "assets/js/4.3cad51d0.js",
    "revision": "cf3c38c2f0e29f35e80e87f4fe8ce593"
  },
  {
    "url": "assets/js/40.dd028314.js",
    "revision": "85c206e14c05fce5d4fd984577d3e80a"
  },
  {
    "url": "assets/js/41.a02fa56a.js",
    "revision": "d80b569b0fa71f6c43c77cd0130e230d"
  },
  {
    "url": "assets/js/42.ad24967d.js",
    "revision": "a1f5dc5955a67fe3ee33cf8148a82060"
  },
  {
    "url": "assets/js/43.4e1c1ce5.js",
    "revision": "47e9cb921c6499872abca1a78c379001"
  },
  {
    "url": "assets/js/44.6357e371.js",
    "revision": "141856472e90829fe554bf34096459d0"
  },
  {
    "url": "assets/js/45.63c1d42b.js",
    "revision": "dc51e62ca0ffef54a8a77aa0b41642ba"
  },
  {
    "url": "assets/js/46.b9c65e74.js",
    "revision": "21070a61b2542ff1f6c37573918aeb7e"
  },
  {
    "url": "assets/js/47.0b3af425.js",
    "revision": "6064dccf3c30e47034c63f662692c6f8"
  },
  {
    "url": "assets/js/48.bdb28586.js",
    "revision": "9fc600e523a712e8c50d0079f7ff8f06"
  },
  {
    "url": "assets/js/49.07b63757.js",
    "revision": "8dde119a631715764d632d96b397a071"
  },
  {
    "url": "assets/js/5.de1bb03c.js",
    "revision": "29f4c2d950301cfcac581b7909b1a35b"
  },
  {
    "url": "assets/js/50.3b8d4e83.js",
    "revision": "3141f091e88c6c4c1a79970ae911fbaa"
  },
  {
    "url": "assets/js/51.34f06018.js",
    "revision": "bbb66bed851467d7e75b921b8dee6bc5"
  },
  {
    "url": "assets/js/52.ac237e0a.js",
    "revision": "0770a81ab9c4b0f9400c6ff557b584d9"
  },
  {
    "url": "assets/js/53.0401b3fc.js",
    "revision": "b5ee6488c71f22acc25572f214d4e580"
  },
  {
    "url": "assets/js/54.764afd5f.js",
    "revision": "dd36e99fc4b6e424f39ba72229407236"
  },
  {
    "url": "assets/js/55.663ed924.js",
    "revision": "cdb8ffb4ce6dc5086f12eab52f279108"
  },
  {
    "url": "assets/js/56.7c600452.js",
    "revision": "8f5fefb11126e2ef01a4d363768cd254"
  },
  {
    "url": "assets/js/57.8c0f9f03.js",
    "revision": "544d08b55f358c659f6dbdcb2930e9ea"
  },
  {
    "url": "assets/js/58.d8c79231.js",
    "revision": "67801965bd626c3805a032bf9a23843f"
  },
  {
    "url": "assets/js/59.7cf08d26.js",
    "revision": "bb739f5955b3f5452592d85afbfb9ec2"
  },
  {
    "url": "assets/js/6.f94c2d86.js",
    "revision": "275f07db1eee21fe329a858094532778"
  },
  {
    "url": "assets/js/60.0666dad6.js",
    "revision": "79d921e2e5c91e85d2016ecc50e090f7"
  },
  {
    "url": "assets/js/61.73247a8e.js",
    "revision": "de6bd75f1f0d04de8d3a9a660291220b"
  },
  {
    "url": "assets/js/62.d05b237d.js",
    "revision": "376b4a1d41b6ec0b3440e25626ee0334"
  },
  {
    "url": "assets/js/63.a23a4531.js",
    "revision": "f09a3f70b88b0758d13d62dbe9f4cf61"
  },
  {
    "url": "assets/js/64.0260a933.js",
    "revision": "e593853c94182c77050d0afdfafce476"
  },
  {
    "url": "assets/js/65.0c93ea39.js",
    "revision": "300d55e89b6bc1044e2d7c521143878e"
  },
  {
    "url": "assets/js/66.f554170a.js",
    "revision": "225f547d5b2d8df18d2ae6f1d2129415"
  },
  {
    "url": "assets/js/67.7aa91fff.js",
    "revision": "49598a664ff895c44853080161940ae4"
  },
  {
    "url": "assets/js/68.ef44f41a.js",
    "revision": "32a92df5790f1dbcaefb603e6129a13c"
  },
  {
    "url": "assets/js/69.6f4fe77c.js",
    "revision": "a751586330a03c87a5c4844eb2ce96b2"
  },
  {
    "url": "assets/js/7.43133aa1.js",
    "revision": "80a23fcca54d1d3c31d4945f66edc06d"
  },
  {
    "url": "assets/js/70.4cace676.js",
    "revision": "f28103cdbafe792e01de103ce1f70de4"
  },
  {
    "url": "assets/js/71.3cd3b9f4.js",
    "revision": "5bba01db87489ebc3fdb7c62d9f3a8fd"
  },
  {
    "url": "assets/js/72.ee4acd78.js",
    "revision": "cd45def3de0f0486738a877c777878e6"
  },
  {
    "url": "assets/js/73.a77ee3b1.js",
    "revision": "a3d8cc6c3eea77c1d37c062bb5bb83be"
  },
  {
    "url": "assets/js/74.f8fb06f8.js",
    "revision": "8e903e2911d1c5a0106a6aed5c2a1f20"
  },
  {
    "url": "assets/js/75.13cd278e.js",
    "revision": "ee4978443ee4eef7a5b75bbc56e40939"
  },
  {
    "url": "assets/js/76.afcb06aa.js",
    "revision": "ca67f957a03d51cde609cc72e83e74bb"
  },
  {
    "url": "assets/js/77.45443f0a.js",
    "revision": "e48c225eb01664ed3f6e3b7c4bd70e9e"
  },
  {
    "url": "assets/js/78.c7560ef2.js",
    "revision": "e90afc3a78f801e8fc517af3e50b6c5b"
  },
  {
    "url": "assets/js/79.c95f1c3a.js",
    "revision": "1766fef935c574c71cefdfbcb345ab30"
  },
  {
    "url": "assets/js/8.59b84d25.js",
    "revision": "44254180aca31ddec4e5874a5959cf7a"
  },
  {
    "url": "assets/js/80.2aa832fe.js",
    "revision": "403981379fb40da1a33c93da7a394382"
  },
  {
    "url": "assets/js/81.f85da31d.js",
    "revision": "dd38093a512c0b76a2698a904e3dac5f"
  },
  {
    "url": "assets/js/82.fea807ad.js",
    "revision": "f4a466821bb63c65bd1777a8bc33cd1c"
  },
  {
    "url": "assets/js/83.29b6fff9.js",
    "revision": "09a4c0ca41e9ae0010422f0d2eb2eefb"
  },
  {
    "url": "assets/js/84.3da03101.js",
    "revision": "78ff2ccfd07bf268788d2201e43e3204"
  },
  {
    "url": "assets/js/85.23fda609.js",
    "revision": "f19a4490848523bad17f6567fb28d136"
  },
  {
    "url": "assets/js/86.eaee4028.js",
    "revision": "83fdb0300fb13158c96381ba503eb498"
  },
  {
    "url": "assets/js/87.9b2bcc58.js",
    "revision": "d0631d05d7d536e47bc4de2c38a37eea"
  },
  {
    "url": "assets/js/88.697b2f49.js",
    "revision": "df8edaa90cbe5c1bb84819c41bb8cd58"
  },
  {
    "url": "assets/js/89.cf93cbb5.js",
    "revision": "15c9a60bd496e9ac0a63a93646124ff5"
  },
  {
    "url": "assets/js/9.19f03be4.js",
    "revision": "bf96d4cc13fe5e6e9dd38c93f927cfda"
  },
  {
    "url": "assets/js/90.9ac532ec.js",
    "revision": "c30a27eccc13739b95295e2f76c8090b"
  },
  {
    "url": "assets/js/91.cdc546ee.js",
    "revision": "5ada7f096906e2d9339c257ebdb6a9bb"
  },
  {
    "url": "assets/js/92.e07cb9ca.js",
    "revision": "1fd33edac7fcddf43ee5c3cc8032d228"
  },
  {
    "url": "assets/js/93.82d7ce10.js",
    "revision": "f2359a90eda174036ca372279e8b85fb"
  },
  {
    "url": "assets/js/94.59823431.js",
    "revision": "b3429eed4a56d6fba50f4d97f7fc3e43"
  },
  {
    "url": "assets/js/95.a45c6c68.js",
    "revision": "9f792a38c54a6e2d0fdaeef35a439a35"
  },
  {
    "url": "assets/js/96.a73bdfe5.js",
    "revision": "235fd5ada5e153c31de3d1eeb4e890c2"
  },
  {
    "url": "assets/js/97.397db259.js",
    "revision": "f3aeaf904e73d16bc3b86e93d9546693"
  },
  {
    "url": "assets/js/98.19250caa.js",
    "revision": "bb02a4649af34f1f0f0ee2b91b804107"
  },
  {
    "url": "assets/js/99.c788fc2c.js",
    "revision": "4d30355f70d1ce7a0e0685da9f79d599"
  },
  {
    "url": "assets/js/app.c479edf5.js",
    "revision": "61eb8c27cfff21f6ba26e4f65e46b8d0"
  },
  {
    "url": "assets/js/vendors~notification.5e9dceb0.js",
    "revision": "9859a1d4aece16d5372a4a9b6085477d"
  },
  {
    "url": "i18n/index.html",
    "revision": "df99e44351e94adfffa50e7f4c91fe5a"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "9f918206e31fff96b5015ce8e62c269d"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "e1bdc5aae60bf1b75e21766e1a892620"
  },
  {
    "url": "tutorial/index.html",
    "revision": "85ceb703252ebaec65bad7ca78e4845d"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "81c2bbf0e24f95ee8f91c6988644867c"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "9a70b4bf3ca0fd92d2ad243b0b01dbb9"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "6517fa26cb089e5eb960612a36f3235a"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "bf92b0a9f559771ae1532ba8dfed449b"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "caf389bd46eb41f89949f9808f36936e"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "e338b80fbe9cf2d4e79d528ba9d095e7"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "171de48ed33908e73323c994b17e3932"
  },
  {
    "url": "zh/api/index.html",
    "revision": "6cda10e671a35e487f4d0cc6da6a69af"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "a7c2b22d7f2ae60ca0f39446dd38d44e"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "f93f7fdd5357cf11216c985b2d0f6384"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "7519f80ce1d301c047eeadd8a85d5c0c"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "aba952f3c16caf2cd8f81b79aa7c689d"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "48e4f354bfa4281e938bfd7b300c8853"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "5a849e79f982be202aa71cf554cbe3b4"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "8be9450d7aaa11e28f2167291c50672f"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "debf7b4bc99f4fbc66b735028a219701"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "761a1a0c8fdb9cdd4216d5ff1a840441"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "16d443fadef9ffd8ec9a8423b75c2f53"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "d9bdc1dde71491ef95b8304e97ebe4c9"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "f7a7782ea6a7073ec38e681f31cc892c"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "8b78fd0688c893ff3070549765901999"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "e7909ac55304c34f80165fc71f88068e"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "354d2101dc1676ecb3b1a87a147ee00b"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "4b7aa0be364e37cedc11e91b061c3082"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "867140f178b9584a27e5b280a5649cf4"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "fe58cc2ab63ac38221048b8e948c0b1c"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "49217d4efe9c8e659023583cb2575811"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "71d9637cfbfa5c8963d5414a6b6eee33"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "e31e30cd90af737b4756f2f8cea6201e"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "4d98a5bb687525624230cf66cf9f338a"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "ddd31300042be581f6d4e394a4022769"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "916f59fa6ad1e1ac27725295be0ea940"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "46b11fd8402acb009b89802ae13af840"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "5783a572f17560e9fbbdd9c6fd1772ae"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "eb92d1b63306de869625f2acb42edb52"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "d582346ba8c946319da39df72434e4cc"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "50a6a67793060b03fbd0bc8aac5bfb44"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "5f47ac53b0f7207fdd21e301f6619612"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "df7a51eab45fedbe2032ee718ae8f284"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "5c0b128a15023a3144599b9bcc50cc82"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "be2d899e34f439988bc62284f22813bb"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "7688ada88376b43001e8e08861d9cfe2"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "da609aef802207a78dc8319679c8311d"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "c4b640d6ce3d86261a27bda8ab19a8bd"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "6c5564e3a8b91158e177fbfa97d68030"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "53fbe871788662c7712e561920456b05"
  },
  {
    "url": "zh/index.html",
    "revision": "361be1bbf792e239bf1e3f82d38f13e4"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "c68d39879ffef7741a9d503beeaf9d52"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "f402d864cd19aaa0b1bdcf78f0b18f36"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "d3aa38932f8a1514f97120c13bc5c9ca"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "921aeed58f45822950988d9f3f9eafd9"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "2160ae63d4f6ea52be0b408296ed0ae0"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "f575113c46271597f55c9580441c0261"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "0dfff527ddca0bb5c0157615134c0431"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "8444bf555e54613d38fa53c313e41962"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "5f3a443c7bc4161e9ae2871710b15a84"
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
