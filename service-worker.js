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
    "revision": "49a0b0c940546b00f22ebc55ac543965"
  },
  {
    "url": "api/index.html",
    "revision": "2f9e6b305ac3584ebbd396122d0d9741"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "811e398283342bea5f4e6ca1d16d068f"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "db520e460f14eb61b8a607102e733a6b"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "ebf22961a29980eeb8ec951aa7d2c462"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "15c44f3fa889d9d833fef0994c111bbc"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "51c3227a1852e813d01e7293058ce070"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "a32b1c8e17f10a881db3d514e6327069"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "ee16c548a05385ab9171a46dabddcb81"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "db117bcdab6b31448c14a19f29dc8143"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "c214b0aec6a054ae767c6d2315c07f5b"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "4cd39ba52756857f2afe0ab3ab04d380"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "8aeec4c16d3ae06215c0e8875d944904"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "64c5730760b688980d0b39c7f5c59ee6"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "66e0847eb645643ec8f71eb361c980fb"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "c4a623a67c2ac556d6d69e32ad52bae5"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "a46d3141d02edb49c7fbf4d38bdff68f"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "9f9a1bce37653c0c3b8492156b234f98"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "72dc590f9c89e863f7d402054a3e2eb0"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "4a1cb6a0176d9d886bde49bcd87519a7"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "14b4a72867702c3aef994ad1d2761165"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "48b8e547a46aa6a49d98a224ebcfaa3c"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "5da5ad1d2837404a10a911db151f9257"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "cfa0b1cad61a0849f3c759acb1c1688f"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "fc6b3ef935981fc57cfcb41fe72c039f"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "1ebf7abaed99df27feff64844640ffe5"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "3111a80f270546ef395b4e560cd60d66"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "77e862d9c63901b7c933aff3f5065038"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "7b5cf1f928957a207c4aa88d71fb49c9"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "fa72a053f13c2cb69bca738fdbf42d2a"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "27be6dd613bb85ff602fbf2312e7c60d"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "ad9df10e24f69bd174ef36d6954ebadf"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "104359b396d8e783a17b8b50ad2ad96e"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "2fbe9c528cf62a08c0a982a01b82f2d2"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "2b587b09ac80c2f6a760c063322dd9b4"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "bd37e2732eb928234bc1adcbaf134676"
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
    "url": "assets/js/10.4b788af9.js",
    "revision": "87c64f09aabb232c6b5627bb7ea5c786"
  },
  {
    "url": "assets/js/11.264e52c8.js",
    "revision": "9a8db9daa0691079506602fe2ab3d6ab"
  },
  {
    "url": "assets/js/12.e5bbca40.js",
    "revision": "a942c0822bd14a878409e465c51a152d"
  },
  {
    "url": "assets/js/13.2557f796.js",
    "revision": "eec4f70eaf35088832726e5d5a4fc2a6"
  },
  {
    "url": "assets/js/14.ff0eb48c.js",
    "revision": "81064dcac55e39aed652a3e7cd339a23"
  },
  {
    "url": "assets/js/15.ed63da52.js",
    "revision": "7e022296cc775bb3b6c528b0a1729b0b"
  },
  {
    "url": "assets/js/16.10e5ba5a.js",
    "revision": "154556d27336f46c22c5f96e338c8923"
  },
  {
    "url": "assets/js/17.9de7ffb0.js",
    "revision": "16ddd4ff99df38cc6664ec2ea07d8a70"
  },
  {
    "url": "assets/js/18.72eea132.js",
    "revision": "76428a031ca38e428631c3d6f9b60248"
  },
  {
    "url": "assets/js/19.06b8cf3c.js",
    "revision": "4113c303286907e2fb852e355cb8b156"
  },
  {
    "url": "assets/js/20.ad2aa02e.js",
    "revision": "8847a92e0b61b1bb25eb5a5e2275dc0a"
  },
  {
    "url": "assets/js/21.aed80d95.js",
    "revision": "95fac0321a3093aec369b3a38fb1fc92"
  },
  {
    "url": "assets/js/22.a1ba42d1.js",
    "revision": "324783667619d6a1f909f8f64f2dbc19"
  },
  {
    "url": "assets/js/23.5d8fdd05.js",
    "revision": "afb843684ec7c077fcfbf8fec900cd08"
  },
  {
    "url": "assets/js/24.d8e4e0ed.js",
    "revision": "3976d6ed4725f5ea3e91a1e57deacee1"
  },
  {
    "url": "assets/js/25.e7a1a298.js",
    "revision": "b866de2c334694d5bbe4f89cc9266b18"
  },
  {
    "url": "assets/js/26.6247f9e7.js",
    "revision": "9f9ba9804a804b12a36c0834ef7d8b73"
  },
  {
    "url": "assets/js/27.28d391f5.js",
    "revision": "ee4eff73c76a74534d8cae1325265124"
  },
  {
    "url": "assets/js/28.27a4c776.js",
    "revision": "cc6759809a5d34b6c42c8e39367f8ac5"
  },
  {
    "url": "assets/js/29.5867200d.js",
    "revision": "d8c01e701b238ef1ce26404980fdb418"
  },
  {
    "url": "assets/js/3.56c11fb3.js",
    "revision": "b3dd74d7e3b22b7e17df5f4697476561"
  },
  {
    "url": "assets/js/30.dfdb11be.js",
    "revision": "ef88d5017c681b115ec5674227d34c5c"
  },
  {
    "url": "assets/js/31.d8bb2df4.js",
    "revision": "3369288db1071c800551621ccfea7f8c"
  },
  {
    "url": "assets/js/32.2d3d7ed8.js",
    "revision": "094cf54834a4bcd75eddfc77794fa4f7"
  },
  {
    "url": "assets/js/33.f015bd98.js",
    "revision": "e207081c7516d63fa75c966faf69b0bc"
  },
  {
    "url": "assets/js/34.95ca53ae.js",
    "revision": "286b9bb2b833ffc20d5abd00b951c4e0"
  },
  {
    "url": "assets/js/35.a8b56235.js",
    "revision": "b18d6ec113f2a2c1ed5590ac5425679f"
  },
  {
    "url": "assets/js/36.28711cd3.js",
    "revision": "36405b20b33bd114d6d2c5ea3cb37224"
  },
  {
    "url": "assets/js/37.243db8f1.js",
    "revision": "b249f8c05c0465952d98fc215c1c88ef"
  },
  {
    "url": "assets/js/38.751e48cb.js",
    "revision": "87b599b68ad567f798a0a47ad24c39b3"
  },
  {
    "url": "assets/js/39.ce818ed8.js",
    "revision": "1c16e1a040bde73c095d72c7e6b84210"
  },
  {
    "url": "assets/js/4.affdda8a.js",
    "revision": "8719de55e1dbfe9086bb91152889cf1d"
  },
  {
    "url": "assets/js/40.649c362c.js",
    "revision": "0978dc25ccb20dfbe59d6c81f797fca2"
  },
  {
    "url": "assets/js/41.d2fef4c0.js",
    "revision": "15a35b8b75cb65c43148338290bebfce"
  },
  {
    "url": "assets/js/42.cb02a72b.js",
    "revision": "8920a313333099fb69511c50a76d4276"
  },
  {
    "url": "assets/js/43.42100f56.js",
    "revision": "eed73762ec185b5ec53684fc2fe69938"
  },
  {
    "url": "assets/js/44.91472605.js",
    "revision": "4ee7b6a29c7c15e3dde897b0a837b79a"
  },
  {
    "url": "assets/js/45.c1677370.js",
    "revision": "b37357de1841453b186963f3ae24622b"
  },
  {
    "url": "assets/js/46.5c9e3bab.js",
    "revision": "01e8c630450bf73295b8ce05a4312472"
  },
  {
    "url": "assets/js/47.4df9d021.js",
    "revision": "c5172710c3158788681571dc0b06a30b"
  },
  {
    "url": "assets/js/48.272f626e.js",
    "revision": "30eb683a912824e4e862b858409f6746"
  },
  {
    "url": "assets/js/49.7a48464a.js",
    "revision": "fb90468bf0c879b6988ed073aea94e80"
  },
  {
    "url": "assets/js/5.9dcd5cb1.js",
    "revision": "6a34eb2a8301513a6416a49f6e2168e0"
  },
  {
    "url": "assets/js/50.badef641.js",
    "revision": "d329289c923565250a2efbc5593a4a6c"
  },
  {
    "url": "assets/js/51.57b8dd8a.js",
    "revision": "af7bf488ff01d4ac919a1cf85ccb78cc"
  },
  {
    "url": "assets/js/52.87cfb1a0.js",
    "revision": "9e99e87c4ef2b61e9653214b403c243a"
  },
  {
    "url": "assets/js/53.abdf1927.js",
    "revision": "cd8e9e33662a8f849869987764ede107"
  },
  {
    "url": "assets/js/54.51333aed.js",
    "revision": "082437fb5ecc11ff0917f7792d4e559a"
  },
  {
    "url": "assets/js/55.35845427.js",
    "revision": "394d4ced9b78fbea220e8187585d9662"
  },
  {
    "url": "assets/js/56.30e4ee32.js",
    "revision": "a2eb8104a7726a5db26913f3e3fdd711"
  },
  {
    "url": "assets/js/57.af76e856.js",
    "revision": "741806211c855f53d148dd56ee6b4330"
  },
  {
    "url": "assets/js/58.775ef290.js",
    "revision": "71547ed804332151c6a96e4f743b0eb5"
  },
  {
    "url": "assets/js/59.d35af7d1.js",
    "revision": "bbb6ded0e71363c895b2bb11a3f9e9c6"
  },
  {
    "url": "assets/js/6.ea422aa1.js",
    "revision": "f943b09b0af7460fbbbbd132f6def90f"
  },
  {
    "url": "assets/js/60.22e6832f.js",
    "revision": "2ff2887472f1565545b1a5c5b5ab3c62"
  },
  {
    "url": "assets/js/61.9a98a0f5.js",
    "revision": "a78914786f262edb3e6b83bf67be0e81"
  },
  {
    "url": "assets/js/62.50f9e58a.js",
    "revision": "a4f55d8872366bf44d4c972cd030ea02"
  },
  {
    "url": "assets/js/63.9ca766cf.js",
    "revision": "b5a3f1fcc7f6bf90e10a339d86c187e3"
  },
  {
    "url": "assets/js/64.1694a524.js",
    "revision": "169006c8f80c6e13a51e1a38397607f2"
  },
  {
    "url": "assets/js/65.6c49b8fc.js",
    "revision": "462db5f3865b1c3b7c17acb4488a0b9a"
  },
  {
    "url": "assets/js/66.288a88d5.js",
    "revision": "199f2f604bfb32ad09f1543cd7b20680"
  },
  {
    "url": "assets/js/67.6c3ce976.js",
    "revision": "a37cef53ae675f80105686b54e21bc00"
  },
  {
    "url": "assets/js/68.122f3fbc.js",
    "revision": "d702fe6793a407b9c18ddc347bbff174"
  },
  {
    "url": "assets/js/69.3574b125.js",
    "revision": "efef46ff97c1548f5b89d7c32d9d83e1"
  },
  {
    "url": "assets/js/7.4d119667.js",
    "revision": "6ce8b9c4d1a00adc1fc7bea7db20f5dc"
  },
  {
    "url": "assets/js/70.b4b82bf1.js",
    "revision": "4ab83ddb3929f73e535837b80ef8c9e4"
  },
  {
    "url": "assets/js/71.23e1b3c0.js",
    "revision": "dcd0fc20c192187a275f9eeb2e82ec6f"
  },
  {
    "url": "assets/js/72.3c64d847.js",
    "revision": "d6c5ea4e3b5047622213348c0d62f2c6"
  },
  {
    "url": "assets/js/73.f288d421.js",
    "revision": "673b60af6c46e98f4384b5f2f4848737"
  },
  {
    "url": "assets/js/74.fd776018.js",
    "revision": "f9c599bfaacd8a26934934c7052c14e1"
  },
  {
    "url": "assets/js/75.490447cd.js",
    "revision": "86b9e5fa169fc43581d3b1ea662209b7"
  },
  {
    "url": "assets/js/76.7ec19036.js",
    "revision": "7333f1c39c88cd8f52b08d259f236671"
  },
  {
    "url": "assets/js/77.8f9ff4a6.js",
    "revision": "0f466d261658352b08ef8cfa1e01a539"
  },
  {
    "url": "assets/js/78.cf06cd88.js",
    "revision": "76192e4e348ac76f3018b6647c99ff77"
  },
  {
    "url": "assets/js/79.ebdd493f.js",
    "revision": "3b89e832ac4480ba3931535353baf221"
  },
  {
    "url": "assets/js/8.27274160.js",
    "revision": "408ece9a8857356361ce9b02f29cc404"
  },
  {
    "url": "assets/js/80.a64e2934.js",
    "revision": "c35a93ecb9a595900738944225bb06e0"
  },
  {
    "url": "assets/js/81.631a069b.js",
    "revision": "76d9bf82c29dc6c2bec12d66965c0acf"
  },
  {
    "url": "assets/js/82.445e48a1.js",
    "revision": "e4716dc7eda7edac9df1af804c98187b"
  },
  {
    "url": "assets/js/83.0c56d3e2.js",
    "revision": "21dc5afdc25e2ac8fd122ee9a51bf4a7"
  },
  {
    "url": "assets/js/84.daeff9e8.js",
    "revision": "dac5ee9d933b004d6207e9d5d571bcfe"
  },
  {
    "url": "assets/js/85.2c4ee98c.js",
    "revision": "2152579be147114a8ee1a436fabfe95f"
  },
  {
    "url": "assets/js/86.bccdab69.js",
    "revision": "655e31968cc9e91c672620884be69ff7"
  },
  {
    "url": "assets/js/87.b1c02f9c.js",
    "revision": "79ea3ba6f59fed26dc3f32b73200b805"
  },
  {
    "url": "assets/js/88.5d472ff9.js",
    "revision": "43d8c1db10fbb889d124e143f007cc8c"
  },
  {
    "url": "assets/js/89.f41a419e.js",
    "revision": "993377c7c4d88d53a7c679a58803721c"
  },
  {
    "url": "assets/js/9.6c24fa1e.js",
    "revision": "fa3728de459147951f37c98e2e1cc955"
  },
  {
    "url": "assets/js/90.8f83a15b.js",
    "revision": "6a89a5055bee1b3fb8f3cb36af0c2ff9"
  },
  {
    "url": "assets/js/91.4a940adc.js",
    "revision": "d8f5660c5ad4e765a16a58e02b3b10e2"
  },
  {
    "url": "assets/js/92.527f97f2.js",
    "revision": "1d52f14eb8e96f8e626d2b5c5730f545"
  },
  {
    "url": "assets/js/app.1f33cce2.js",
    "revision": "7ff811fa895da46bbc68948d3a8ec4aa"
  },
  {
    "url": "assets/js/vendors~notification.9cd526a7.js",
    "revision": "d9c1b7a8ffd9f052698da9aba493d2e1"
  },
  {
    "url": "i18n/index.html",
    "revision": "8dbd6bc84ac4cbd5e5ae7ae18ba4abdd"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "e607fd68dbf40b2e363f1920a6cb78df"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "a987e5c03d3a7e59b43e86fa2b83badb"
  },
  {
    "url": "tutorial/index.html",
    "revision": "ccbd2fc107cfc79746e1bd3d9399650e"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "193d6d1818dace07d3fcb3390c048a34"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "101309dbded8bd4e683ca214e0e80781"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "0aa592e0bbcf6db50400057dd46dc255"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "ebf1b884ab4b9d039d62d23c2b288256"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "fe207c66d6b13180b4afcacbf36753e5"
  },
  {
    "url": "zh/api/index.html",
    "revision": "5aa69369215d090c2d6b6470983865f4"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "4d33ff3891c5ad134a6a521938160964"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "902ed1145f54df6124e19454d7e9f4f0"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "260d954466b775e0680bb952ad65bb10"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "b37cf887d2f4e361335a34f9adb1e0eb"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "bca4b0adbcb6e0f00f279e50ed57a3f1"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "a0f2e67df375fdcc71a7b9311029fb7a"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "8ade42068ef75dcbaa11bce64f20614d"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "1f5e77b913dedc627e62b2b5c3bce715"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "5a9e16e612e632a5f9b38fe308053eb3"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "6f728f111530fcac9962454aa1fa1894"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "08ff90c80f9e7c0fc1ac7bc5c25f442c"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "e7c101d6c8d7ce851d421d31b485b505"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "cd95560ea7751c6f1846a2cfae6b0e1c"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "bdeaf2392fc23f7f14d34010939c5611"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "440da4bbe09006bbb30e9c939c180c93"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "9cb2887e26c98598bb9a6da05033397b"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "e46761c288e0e2915130033ede68a682"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "6da8c8d787809deaf32032d64cd96a04"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "019c9201fddbd82a66821a4b6b78278d"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "888f2362cb33ddb918d5b29aa0a9012d"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "ec11cda272da96f95d98a976e7c329f6"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "3d85e1420911ebf08ca07b1a1e8ca2d2"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "5fe0e68eb6781acc763cff4f7677c5e1"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "6a33bb7f5aecbd8eea1e12666a2ac12f"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "c3fe2b252102df39c2af0169c75c9609"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "f60f0f5d584c4482d3534430e4664d6f"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "e6d716adaf3cf774dddbf8ec450578ec"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "e7d18ad5b77b22d3bedad6911852df7a"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "1f40f0658ade634316691690592e6599"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "3b493dc4e869259c931d5cb320ba3251"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "eea9db4aa02c49e6d8a1be20a0a20c81"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "5113bd14d6ede42189182800eefe8c03"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "0ceb0608da63355be662aa2ea04eb341"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "9e4d25e94657dd1c5eabbe29f56753cb"
  },
  {
    "url": "zh/index.html",
    "revision": "a0e4f624aa3d4afbfdc76cb226986d20"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "3eb286a60bce28e8e4f20cf746fc7400"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "df1d1da08c112febb7cdf88f7209710a"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "7a294ab4ed052c054c7a8a4e4f091af2"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "b79ddd9d9f636a91a29847a860ebee3f"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "8bac6493dfffd5a54ac8b634b2ffafa2"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "69cb39e33c92765025c9e74c029dda68"
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
