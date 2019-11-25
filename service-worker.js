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
    "revision": "2134393d71eb029f2d992befae34f97f"
  },
  {
    "url": "api/index.html",
    "revision": "ae8cc90034e47bce2feecfec51d9761e"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "c071b88341adaca22516f9b5add47d90"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "b34e783624aa20bd31c07e75548b49d3"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "2129b88d99e28691f6feeca20ff30900"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "a1fa9ab37271f9f691ffe0b0b79e4f62"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "4a9be7283da5adc87be473c5d36fe555"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "5f108f90da642302cd7461b70045c2a9"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "085e4cfe679db77dd325958bc11dcd3a"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "4adbd2b9e09d216d035d99d5ee70bac6"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "619f1b077715ef3198e07087b4c82b54"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "a4d9b96b7561e5d7936c49b925f4836e"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "6ec52671ddb7f4af5e2a22210eb50dd1"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "6e388a034730b94d948b963d2b3b1a98"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "7b30c02e56f9f1812b13fb0514d50e92"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "c553c60a1f29de51a1c04733cd9b7b4d"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "5b701d57ae7b40770c0733429d88f76b"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "1dc2912c5884253c36c3637e27d83189"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "43315e71df3386aaf26b10bf59067192"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "e24ebddefc39645adbc162ec794a857a"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "5271dcc1dc0b5912cf672cb9f316f694"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "ea2cad9a8be8ffc129f63f0bda118d0c"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "9fda0b7b5a30ea187a617df04c21e516"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "11e9f4764d6f48f377c40117204b9c91"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "0db7ef847e4885b8a26ce0144a09a90a"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "47f14caed5a704794bb2b755874e67f6"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "4b1868e65fd149af231ba977e31f80f1"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "54b878f46d9f44fbc48a80c8408ce36d"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "5d04a6859f44f552479003f90f02295a"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "fd2e428ba1e86dcffb9d3dbe0a0312dd"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "c1a779c8c412ac7ff75fa08aaab9c81e"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "24b325d45c32fe3e85cfcf0dd982940e"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "9a0cba9d33b935ad4fa5d5a156d4cca1"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "8055fa2fbac2d1bac2c18048e6bfea07"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "a67ceba79e23fd2250a86f7699e77030"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "2c424731c5d4b6d9d7e4f0f1a8a7b2e5"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "018f71557cc5280294891a92145d32c2"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "78189845762fc31d1bf1e4656cc62898"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "ef83be8385c613440e367daebbaa5e06"
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
    "url": "assets/js/100.aba1740e.js",
    "revision": "4c28645fd7a30520efbc01260d2d3eea"
  },
  {
    "url": "assets/js/101.d4322c77.js",
    "revision": "19968b44a95ec027d1f002fae08f91e2"
  },
  {
    "url": "assets/js/102.dd2ac4b5.js",
    "revision": "e44825174a451ed000cbb5bd507ab5fd"
  },
  {
    "url": "assets/js/103.8f6a5255.js",
    "revision": "a346f97c06ce0dc43fb94f35dc3a0d42"
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
    "url": "assets/js/30.c41364eb.js",
    "revision": "24a8777bf6f336c5fc265d6be45ed01a"
  },
  {
    "url": "assets/js/31.1b9bfdb4.js",
    "revision": "2f42a681c2c56bc4bbd89ca67cfbd650"
  },
  {
    "url": "assets/js/32.bdc3ff33.js",
    "revision": "9f3de8e4ec0dc790ca516e53173da5a0"
  },
  {
    "url": "assets/js/33.3f812e8b.js",
    "revision": "11f54a0f0ad3954e76a384c8b46c7f37"
  },
  {
    "url": "assets/js/34.74782117.js",
    "revision": "6b8f7ffb7c6570419b1bf106ca78c898"
  },
  {
    "url": "assets/js/35.6f2a10a1.js",
    "revision": "dd7e8ed47f4918cb1b91983d277e18fe"
  },
  {
    "url": "assets/js/36.e8fde0ed.js",
    "revision": "2026cbcc5b21a92434388adbb2696959"
  },
  {
    "url": "assets/js/37.649e7759.js",
    "revision": "92e952a397f759abcb734dd610cac4c6"
  },
  {
    "url": "assets/js/38.dd648cdc.js",
    "revision": "aa3fd5314f04262ce3285fb802b172e8"
  },
  {
    "url": "assets/js/39.104aa2b4.js",
    "revision": "6a2a0e1a7d77f700066201e4550e4eaa"
  },
  {
    "url": "assets/js/4.58ad7b3e.js",
    "revision": "cf3c38c2f0e29f35e80e87f4fe8ce593"
  },
  {
    "url": "assets/js/40.5d4c3ed4.js",
    "revision": "f74c5ab5fc3b561f3d825a531b9981e4"
  },
  {
    "url": "assets/js/41.78e852a9.js",
    "revision": "f98557477d4a75a1faacbc9cff926445"
  },
  {
    "url": "assets/js/42.d951a8bb.js",
    "revision": "3ffada654ca075d8a2b0b10e286ef3f0"
  },
  {
    "url": "assets/js/43.86fc84e8.js",
    "revision": "7b9d2ac9c57e3876ff1b8827655a53fa"
  },
  {
    "url": "assets/js/44.b03c0cd0.js",
    "revision": "9501b91256050fc11f6aa28c373ad2c6"
  },
  {
    "url": "assets/js/45.ee1a6e8f.js",
    "revision": "b177a003c150374611a7b9b266fe9709"
  },
  {
    "url": "assets/js/46.043eb029.js",
    "revision": "0f8263cbe5c292c2139f3b262794d583"
  },
  {
    "url": "assets/js/47.076dd436.js",
    "revision": "91596570d5948efa3496f567279af3e1"
  },
  {
    "url": "assets/js/48.98597ae8.js",
    "revision": "19d1518e368aafa3f3b511e6e5684766"
  },
  {
    "url": "assets/js/49.da5545b4.js",
    "revision": "f13ab389318189db031c4c570f1ee9c0"
  },
  {
    "url": "assets/js/5.2cb55978.js",
    "revision": "a63f5f160b2832d5ecd3ac0481502f99"
  },
  {
    "url": "assets/js/50.add3bffd.js",
    "revision": "6d054587228076be5a0177e6cf7f0c12"
  },
  {
    "url": "assets/js/51.90c8c36a.js",
    "revision": "764c17a531bdb8ac78a3aeda8527fb8b"
  },
  {
    "url": "assets/js/52.84303909.js",
    "revision": "59cccb7a5e2c4b5bf3811fa0e5b82bbe"
  },
  {
    "url": "assets/js/53.b5ce7d5b.js",
    "revision": "83aff7992948ed3b6f1c45efc1c04374"
  },
  {
    "url": "assets/js/54.eed8bc45.js",
    "revision": "614784609c78d490828ac3b120ef5a37"
  },
  {
    "url": "assets/js/55.b86a99d7.js",
    "revision": "0840e82eec39b44de5fabc4d437f4652"
  },
  {
    "url": "assets/js/56.ba5dfa1a.js",
    "revision": "75c3ca4f6cc5a73d14a109a1d95ac4d6"
  },
  {
    "url": "assets/js/57.442911e4.js",
    "revision": "8d3071fd6efb07f63c5999798eba07fb"
  },
  {
    "url": "assets/js/58.0963065d.js",
    "revision": "0da7ca34ceb3c2d5a0544f6507fae011"
  },
  {
    "url": "assets/js/59.c3c2fd1f.js",
    "revision": "32264de5c4141950e1254801c107b8f9"
  },
  {
    "url": "assets/js/6.b0af6c2c.js",
    "revision": "0af7b91ee904b94b95af8837d76b19c3"
  },
  {
    "url": "assets/js/60.734ded0f.js",
    "revision": "4d9767f87ecd9b06811ea4c367788cd0"
  },
  {
    "url": "assets/js/61.f24cd100.js",
    "revision": "dc42cb1e02b6797460b64b7966f2851b"
  },
  {
    "url": "assets/js/62.d25c53c8.js",
    "revision": "a27895cc25336e4ec0c7f78a0709df45"
  },
  {
    "url": "assets/js/63.e055a9eb.js",
    "revision": "f290e816b147882ec1372f7a725f941a"
  },
  {
    "url": "assets/js/64.2f2e462c.js",
    "revision": "24acfa5422b019a427b3f1716d9c85aa"
  },
  {
    "url": "assets/js/65.c9938dee.js",
    "revision": "7be5192f76118152ce076cd2a59ce0cd"
  },
  {
    "url": "assets/js/66.d0592f41.js",
    "revision": "57c2dea391957865c1089cfb9d1e9d1b"
  },
  {
    "url": "assets/js/67.1d1a8837.js",
    "revision": "5c3fd4d2fb2022b7fd0a6d137f399a31"
  },
  {
    "url": "assets/js/68.c4940a73.js",
    "revision": "fd76c2ecbb0be0315bd399c381a406b1"
  },
  {
    "url": "assets/js/69.daec6f90.js",
    "revision": "baba110958ed8e7b0e407f2bc609a606"
  },
  {
    "url": "assets/js/7.0bc917c6.js",
    "revision": "f682f1225d2c7b86a35e8a851b423282"
  },
  {
    "url": "assets/js/70.76993e4d.js",
    "revision": "706b3e1353c4b20f03bdac1dc6961b6e"
  },
  {
    "url": "assets/js/71.f3213245.js",
    "revision": "f7e0e4f73b90a22db569b4e78313a58a"
  },
  {
    "url": "assets/js/72.d83fa90a.js",
    "revision": "ced8d7b95d15848b81505572977cd45a"
  },
  {
    "url": "assets/js/73.8dd7d2bd.js",
    "revision": "434437b3274fbaee2784507022cc707b"
  },
  {
    "url": "assets/js/74.e4082974.js",
    "revision": "d2d2181d3a4e2fd03e0f44303f33af49"
  },
  {
    "url": "assets/js/75.b467d4db.js",
    "revision": "b0bc681552a47b4ca00480f62a32d74e"
  },
  {
    "url": "assets/js/76.e6dccdbe.js",
    "revision": "0b8aeccbd47aba7e8324a7eaef169a1d"
  },
  {
    "url": "assets/js/77.a859100d.js",
    "revision": "149acc03cb8d959b5ab6520c8fe32a7a"
  },
  {
    "url": "assets/js/78.7b37345f.js",
    "revision": "1a448ea7c881c4faaf0a0625acde0ed5"
  },
  {
    "url": "assets/js/79.66b4b404.js",
    "revision": "20ba716fac3fe4d1fa7eb73276cd9d5b"
  },
  {
    "url": "assets/js/8.0a3c6d21.js",
    "revision": "44254180aca31ddec4e5874a5959cf7a"
  },
  {
    "url": "assets/js/80.a53718d7.js",
    "revision": "e022fb84b76bb9892fe4a89c484547a6"
  },
  {
    "url": "assets/js/81.f01b3687.js",
    "revision": "f1580d248a59b9b15e51f9541a4f7ed7"
  },
  {
    "url": "assets/js/82.e2c5b511.js",
    "revision": "3401ebdb3c2b002cfdf541e30ad85fee"
  },
  {
    "url": "assets/js/83.96d4225a.js",
    "revision": "5091a88c58676a01fc9bbbbc0c93faec"
  },
  {
    "url": "assets/js/84.705e5200.js",
    "revision": "9ebf9a921e7ebb3234c02d81a546e0fa"
  },
  {
    "url": "assets/js/85.3f12d5d2.js",
    "revision": "b621c3554e826131de3f3adb8df704f4"
  },
  {
    "url": "assets/js/86.a323b5b6.js",
    "revision": "837e5e6470106526cb65f8589d256594"
  },
  {
    "url": "assets/js/87.83f3a57d.js",
    "revision": "4659ee86ef2bf30dd615aa2c952307ab"
  },
  {
    "url": "assets/js/88.bb7479a4.js",
    "revision": "881b1ddfa4ea76e65043ab3428c4befd"
  },
  {
    "url": "assets/js/89.3a82ed3e.js",
    "revision": "0ac8c253d4cf8069f6ce08718099b0af"
  },
  {
    "url": "assets/js/9.2b0f93dc.js",
    "revision": "2467db0aa7737bbd3b7cd77bd0be1f0c"
  },
  {
    "url": "assets/js/90.0972f80c.js",
    "revision": "2e9c36831cfc4c4df9298342d3ff9f55"
  },
  {
    "url": "assets/js/91.df582dbf.js",
    "revision": "13610b16e0b53da81caec89deb06f572"
  },
  {
    "url": "assets/js/92.72f7f804.js",
    "revision": "d8c56c7ce3bac5ca2f15a032b39886d9"
  },
  {
    "url": "assets/js/93.7ce2c406.js",
    "revision": "12ee75ebebfed10fbc92953295c96d1f"
  },
  {
    "url": "assets/js/94.e79152a3.js",
    "revision": "6d7f209cae2091f1ac67f3abbd266fa1"
  },
  {
    "url": "assets/js/95.ffca2d2b.js",
    "revision": "80619bcc51e79d42d3b75935c0c8838c"
  },
  {
    "url": "assets/js/96.8a611393.js",
    "revision": "f08a84dc5a445b1becb7475c8da9486d"
  },
  {
    "url": "assets/js/97.a881f61c.js",
    "revision": "4cc0ce3d5614bd72d35dc51e5b3225f0"
  },
  {
    "url": "assets/js/98.68f06c75.js",
    "revision": "4e470c123134c42fcb1f792f164832d4"
  },
  {
    "url": "assets/js/99.c2cc84fa.js",
    "revision": "1df79262abc719920b86364559a67f95"
  },
  {
    "url": "assets/js/app.4113523c.js",
    "revision": "f85cd17db3c352f91a2fc57f39668bf6"
  },
  {
    "url": "assets/js/vendors~notification.2dd46936.js",
    "revision": "9859a1d4aece16d5372a4a9b6085477d"
  },
  {
    "url": "i18n/index.html",
    "revision": "aef9ea84ec3a68c3a082e4fe29e850b7"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "71d8961eb99be78f405441674daaea41"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "6ce796f6b3b77794ece2bf6f43a7e8a0"
  },
  {
    "url": "tutorial/index.html",
    "revision": "061ed41a94189068cf906af89624e5ac"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "bbfbb70c3f270fc8708927682e4cf77f"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "a13ec6ccf09136fc90156e4dff4b6f33"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "e424ce6fdc2eaa36cc2e6672ef6273bc"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "ddbcf97def7232434b588469d3188c60"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "ffb997e84ec2e1d5fb4e8c68dcaf5e9c"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "e1c8aab307e5f7b093c9f92884968ab8"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "594e0bd4391ef19b88370d633c28e8dd"
  },
  {
    "url": "zh/api/index.html",
    "revision": "65e6a77d92b6798f0389a25c50c0bfaf"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "3f1cf50cf1183c6b45631f6822303155"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "5eeaaaba870cf064482445b28901cec9"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "bc24ab0e6746ed52acc0432cc4fa589f"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "f1d0216c5c7ef0dd13518f551065c4d4"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "5f3a488535936f9d247d977ad0310ad9"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "36355a4c561a21411e46c86a66f846b5"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "ab4189412dac158063295d933dc446c2"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "0d380ccc94d5a4b20f461b03e3256c44"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "afc22fd5336bd27f1a54e7350ca8e9fa"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "df014b9109e8a657152cc881e923b191"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "efe8ff1de905430e1d3d52cec8b818fc"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "2966f21580a389ac87267f378096893c"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "b26b32bb4bec9b5d3cf9eddbc3154998"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "4413197b7535aaab02cef67d411c2904"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "ad9f765ab82c99dc749dac8bcafef441"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "b07c30734854f75d432e55e8f83816e5"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "210f74ea9610329e132204e51272c9c2"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "cd55ff71e9f324a2bef316ba7d7ad2ae"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "5ebbb68bb6f8c4cd0410fd21e17a20dc"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "78c85a19c67c7c7b1ef8ae82431ad4b1"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "9670572ef0147ab2eca866c355233933"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "1d4722a184793c96f83718af351686a5"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "d42c22339c7a8346f7223267b3a90118"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "0643eb7b1fea2d90f79c3c12d244145b"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "73607f88a3034d2e3add9ec56945c112"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "6417a2fbd85fd177a24ada4b4a699f21"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "5b453564e0e693ec24dbabb0ff118e8b"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "b02f1a3ccf51894afb9f7791493d5794"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "6c45ac4b554d47b13ff47180163ef1ba"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "8623afb978cc6219cfcb0d121efa1db7"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "630058d684fc89af9f2c0dcfd1809936"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "6e0d96dc3287ebcbf086e26f91f16de7"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "5e7362c2a1ab63b5e0c02914e397b5d6"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "89d90547555048d23deb309c7e962d05"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "ece83bb7bea9ac4aac5be6ca991c63f3"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "26329c73d59c105be228a7b2037bbb1e"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "c278b3fc6b01daf4ac5e10ddb1b414c4"
  },
  {
    "url": "zh/index.html",
    "revision": "e91637daaa4876bf86e724920ee6272a"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "fe7050b75af5026e9c0a11c020132d66"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "b4820e813dad493da887772754d86f5e"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "520d93388bb45532f73074e508275901"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "d140c6ec5fcd02c6df885e7e4872e5ff"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "6cf48d9938fb613a8bb8226d8cfaf12a"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "dd4e2df104835229eedd47e5e3e07e8c"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "90f3341358ab8ca766d41731b493cc54"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "f7d271bdf7dd23239a4d8c0d28178175"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "1b8af4d87cac67e31539029278f2085b"
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
