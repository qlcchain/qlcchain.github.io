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
    "revision": "2d290221b6341854ed3874310a47e3e0"
  },
  {
    "url": "api/index.html",
    "revision": "d35ad7a853719312adb8f1d593d3aec0"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "41483b23930d2877619e037f67a36a00"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "7da282ae7de29eaa66313e844254a4f2"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "40074f69949a29a2ed0809b0c0c6273a"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "326c88094883d2f689fa4faec3469cea"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "671371b2401a8e0e7df2a16cd515e88e"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "efbd67da89ef5f9ecca05350df8ada33"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "1dec469bd7a525e7c41ee9334c372b4f"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "0cf277261b4863ad2d119fff0e38ce28"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "7f764f7b02906a263653658601e90b29"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "e59c32ecd7a80edec24a5b531ffd286a"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "5c9267190195a879db7e894e18970239"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "abaf8fcadacbaf6d4e4f207403a5a033"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "40e2d0fe361843ab855a39e4cc712371"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "e65152d1ae7940278eda3e39b3cf05b6"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "18a3bf085383add625343f0d3d0b3f96"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "42684b91254d0b8320bdb4c729ade092"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "31f83b21e33a77534c39e57cf3b21122"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "982f24fdda976a96bfad81b4b7777a6e"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "4b1cdadf08253eafa2bcc56e607d7d2d"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "e389236d099a545a8c876016a809ebce"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "8106eb1fe08e6a7564299fac34456d3d"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "96791da448381c1b500d8d81853f31ca"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "c1e866cef510ff005c0e6ff50e718bd6"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "86db24e3f118d809d8207b1c19637d36"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "35ffefb03da13c6eb3543139a740a91a"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "2b971949ad67d451a0ba7c3a47826056"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "f57e631f2bdee9b393c1a040246b1fa4"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "b54e8f173679e0f35a5a1256bdc3cf13"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "ffd679e20594cfa074fb6d0dd5ab60e9"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "9dc0c5cec3ffd818c400d6fd11ef6eda"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "b312fa330a584508449f5b34d1c0f496"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "2fb2a4f06531cb47cab92985aca534c5"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "bad6373d424f5625c7522d1a96f8bf6c"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "ff4e844995139656f678325a97ee7584"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "104c6036acd1583a1e258b24bd69516b"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "4cd477ec6c256d8c5f446d437fd5a9b6"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "0f749f22a0664edbd6efadde77824e82"
  },
  {
    "url": "assets/css/0.styles.70927d4b.css",
    "revision": "8b90881c8be9215c430c1373440eafd6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3d8b3776.js",
    "revision": "7b2a7e394a610c89e60c5dbbd5b07ff8"
  },
  {
    "url": "assets/js/100.a86a7950.js",
    "revision": "d155637c6d9271366975288e054483fc"
  },
  {
    "url": "assets/js/101.edbd081e.js",
    "revision": "90411eafe8cbcf6ddfb6db0e1871ffab"
  },
  {
    "url": "assets/js/102.b032db14.js",
    "revision": "f451514bb23bead00223b21bce820b68"
  },
  {
    "url": "assets/js/103.4af9968d.js",
    "revision": "ad9df4c35dd65f614e7d173d82807a52"
  },
  {
    "url": "assets/js/11.089b5e67.js",
    "revision": "e390e503ca43c60aba93e4fd62b31ddf"
  },
  {
    "url": "assets/js/12.14a4dc81.js",
    "revision": "1da0532c4906254c201f39af714f7e95"
  },
  {
    "url": "assets/js/13.86cf214b.js",
    "revision": "df7faa71c3922bfe622400da4c4dd342"
  },
  {
    "url": "assets/js/14.53627404.js",
    "revision": "e695d8cf2bcf10e3df8248b1ee8565d2"
  },
  {
    "url": "assets/js/15.c32eb06a.js",
    "revision": "24cd302cb80b3f616512e9214c4e71ab"
  },
  {
    "url": "assets/js/16.f893de1e.js",
    "revision": "c206d169017791ec36e14705e5009baa"
  },
  {
    "url": "assets/js/17.87005592.js",
    "revision": "330e71dbfd2592f1de62ff9547459d4a"
  },
  {
    "url": "assets/js/18.24326a12.js",
    "revision": "fee20b9556f52711cf6173141684a33f"
  },
  {
    "url": "assets/js/19.ec741eab.js",
    "revision": "1ed4f3462473413596e21a721c2c8bba"
  },
  {
    "url": "assets/js/20.d13e778f.js",
    "revision": "5b0d58a5575b02b2e4f7a537e046cbd9"
  },
  {
    "url": "assets/js/21.e4bc48db.js",
    "revision": "e0bb128bbe3bae987420ed8b39c0c8c3"
  },
  {
    "url": "assets/js/22.3feca550.js",
    "revision": "6334d9df808a19f3d21eaeaa1609e999"
  },
  {
    "url": "assets/js/23.811cc924.js",
    "revision": "3c4e876b82ad24b20b597188a9e2743d"
  },
  {
    "url": "assets/js/24.ad502f27.js",
    "revision": "787470fdb0e1109fe533ebd50de0d1bc"
  },
  {
    "url": "assets/js/25.25ea440c.js",
    "revision": "2e59ca2b6dc7b8b68be3f26ccaa9f816"
  },
  {
    "url": "assets/js/26.bbf52bcd.js",
    "revision": "14966ef15df73fcb997bd98831499e04"
  },
  {
    "url": "assets/js/27.c8f95933.js",
    "revision": "61bb9c1e9ea54f6fec4a0de90deaf6c1"
  },
  {
    "url": "assets/js/28.00cff968.js",
    "revision": "81419a728e51d090c7c4a6b5d089b4b2"
  },
  {
    "url": "assets/js/29.3509f57e.js",
    "revision": "475869c8fb034bae01be24e8a6ad9d9b"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "6943f98f2049f83e3ff7655ce98349f5"
  },
  {
    "url": "assets/js/30.cb4fb469.js",
    "revision": "dcd11097039649e55a8278c5c6cd66f2"
  },
  {
    "url": "assets/js/31.91a1331a.js",
    "revision": "2356493cb1a4234dccb1f6f9d1842ea3"
  },
  {
    "url": "assets/js/32.bf8f1352.js",
    "revision": "1da226357342e90c6c452ae982da6dcd"
  },
  {
    "url": "assets/js/33.349567d4.js",
    "revision": "d9c14d4b90a78506890adcbfd70fddf7"
  },
  {
    "url": "assets/js/34.40bfc3fd.js",
    "revision": "46b0d1b264457a6b8241a263c3540047"
  },
  {
    "url": "assets/js/35.231fa691.js",
    "revision": "e0124a273f809dca1a81b8496faec872"
  },
  {
    "url": "assets/js/36.86b80635.js",
    "revision": "d833e8794221b9dec8d74d00ec2e1587"
  },
  {
    "url": "assets/js/37.011177df.js",
    "revision": "42c1e6693487b955074f9783c42632f7"
  },
  {
    "url": "assets/js/38.a4c4bad4.js",
    "revision": "bcf5b0e3ba5dac47ae652b77d73b832e"
  },
  {
    "url": "assets/js/39.38276d36.js",
    "revision": "2a7aa64ccaf35fd3ee25e075af70e19c"
  },
  {
    "url": "assets/js/4.4ac4e7a7.js",
    "revision": "e8a86572743e99ba91a7b6f8497e22ff"
  },
  {
    "url": "assets/js/40.910ff276.js",
    "revision": "ee5a8b209189c476d79098370fd418c4"
  },
  {
    "url": "assets/js/41.644a9ea6.js",
    "revision": "9a6cd50e32e51d5f4aea7d36b6587079"
  },
  {
    "url": "assets/js/42.8585ceca.js",
    "revision": "5ae2efb0ed2553e8e82a5afae2839edd"
  },
  {
    "url": "assets/js/43.32729120.js",
    "revision": "978481ad4bebf8a99346d109e16b0817"
  },
  {
    "url": "assets/js/44.24d1b93d.js",
    "revision": "7ac6fb6c7f80c883f7f23821f607c778"
  },
  {
    "url": "assets/js/45.a3299a30.js",
    "revision": "3853a6b4a9c48ed961d7f7878bb1e8e9"
  },
  {
    "url": "assets/js/46.290999be.js",
    "revision": "006d2cde28659b4623d9d1a5bb578920"
  },
  {
    "url": "assets/js/47.30033dc7.js",
    "revision": "2c2af1c173ceee67125e015291b1ec7c"
  },
  {
    "url": "assets/js/48.f427b465.js",
    "revision": "0b49180c7bd69ae10827ab5cc7c32323"
  },
  {
    "url": "assets/js/49.22abb052.js",
    "revision": "dab1f66831a61629cb23b8449121d27f"
  },
  {
    "url": "assets/js/5.b8cbd474.js",
    "revision": "2b856e43acde962bbdcd371357bea677"
  },
  {
    "url": "assets/js/50.d9707011.js",
    "revision": "ff24d2dba8a77aca154d5e02244d83ee"
  },
  {
    "url": "assets/js/51.4cd85e94.js",
    "revision": "355d9e1573b71f00a7374c61b8abc902"
  },
  {
    "url": "assets/js/52.4803669e.js",
    "revision": "82139a94b17b19714e8ca96289d10080"
  },
  {
    "url": "assets/js/53.f159104f.js",
    "revision": "6a6ef89dfd424762c3851632cfe8ff93"
  },
  {
    "url": "assets/js/54.f543d752.js",
    "revision": "855ec03cf70629610d3215211f26e119"
  },
  {
    "url": "assets/js/55.4531637d.js",
    "revision": "0225d3fe3433b4b86472b5d179fa8d69"
  },
  {
    "url": "assets/js/56.b670241f.js",
    "revision": "6d4cd65df1ac516da105a39cb2a9bf35"
  },
  {
    "url": "assets/js/57.738161ce.js",
    "revision": "6f4007c22d498c561bdc71ffdc9e072e"
  },
  {
    "url": "assets/js/58.1b0b0703.js",
    "revision": "62213d1f3131682e19e525cc879b993f"
  },
  {
    "url": "assets/js/59.82a0ec99.js",
    "revision": "b9c612a48e1c81880395e184907b9085"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.9614a8a1.js",
    "revision": "14255fb862055a2455ae03b9f27e6e9b"
  },
  {
    "url": "assets/js/61.fbbc0a89.js",
    "revision": "779053aa5fda21de31ccfc42b267af39"
  },
  {
    "url": "assets/js/62.3ae8e754.js",
    "revision": "6535b9befe562c2981063f765ab3dd08"
  },
  {
    "url": "assets/js/63.e66dde5b.js",
    "revision": "d07664ea9c7641bf444a4b27337ce4d0"
  },
  {
    "url": "assets/js/64.522ee240.js",
    "revision": "4218be300cfbd48d165e1a68afc0673d"
  },
  {
    "url": "assets/js/65.a27ea833.js",
    "revision": "6fcca6972043e6d95e966b7bea16c377"
  },
  {
    "url": "assets/js/66.763664a4.js",
    "revision": "912ff8e9659c4ef03c06073dee99e1fd"
  },
  {
    "url": "assets/js/67.fc505ce1.js",
    "revision": "e33a781b831668a8fab2737fb5b18a4f"
  },
  {
    "url": "assets/js/68.aa53fab9.js",
    "revision": "b1ef411034b2f28206ceb6137d6b6895"
  },
  {
    "url": "assets/js/69.77089d32.js",
    "revision": "7603031fe740be57f3d3db317b3ec3fd"
  },
  {
    "url": "assets/js/7.89d29483.js",
    "revision": "10fbed438f70f00082e4b1b75bec9459"
  },
  {
    "url": "assets/js/70.53c360f0.js",
    "revision": "bc59ac8071df89425a802e52411a86dc"
  },
  {
    "url": "assets/js/71.42ee12fe.js",
    "revision": "521470c3260a7bc1fbb768bf78da3d52"
  },
  {
    "url": "assets/js/72.bb3318cd.js",
    "revision": "36105c70db07fc462893dc9e3100a144"
  },
  {
    "url": "assets/js/73.255583e2.js",
    "revision": "32d4ef13c66983e31c4bac51cfd47aec"
  },
  {
    "url": "assets/js/74.6a385025.js",
    "revision": "f13c54e23f84ec3fb7f93c06cd5888bb"
  },
  {
    "url": "assets/js/75.9f46d5c0.js",
    "revision": "a7ac628ea77b9353187ed17cb9ba5bb2"
  },
  {
    "url": "assets/js/76.cb9c4e4d.js",
    "revision": "6917f51ee3b39e52c0cb07d2858d2c6a"
  },
  {
    "url": "assets/js/77.b60fcc2d.js",
    "revision": "268b0b043ca3bef76faa2c9b82c62498"
  },
  {
    "url": "assets/js/78.549e5356.js",
    "revision": "647c30d6e4aa2a26ebafc8caa93653f5"
  },
  {
    "url": "assets/js/79.6a181ae4.js",
    "revision": "31e2572fb791c28546c669b47919cc1c"
  },
  {
    "url": "assets/js/8.17af81f7.js",
    "revision": "ccc9ff8a06b3fd233fbd9e8484c5ce0a"
  },
  {
    "url": "assets/js/80.582071cc.js",
    "revision": "da79a9bc4ed58cc20e459a2ad08f8e84"
  },
  {
    "url": "assets/js/81.fbc90019.js",
    "revision": "450804e26f376c4cf3749db9fe15b7ab"
  },
  {
    "url": "assets/js/82.38b9c688.js",
    "revision": "328a71e8fd8c34f31f9bdc7c5c729cfd"
  },
  {
    "url": "assets/js/83.f43ef9b8.js",
    "revision": "684a40c150f233505d3a2ab6b8b0b61f"
  },
  {
    "url": "assets/js/84.1480c738.js",
    "revision": "ff63eec2e52195e379e78c355800c56d"
  },
  {
    "url": "assets/js/85.9355713f.js",
    "revision": "aaab8527928c7dc75fe0dd73502aeae2"
  },
  {
    "url": "assets/js/86.46b47430.js",
    "revision": "cfb9b1afa5c6e35fd1d7bc5170bcc7ee"
  },
  {
    "url": "assets/js/87.dd1b69c9.js",
    "revision": "3216eb53a26c95e6ca9e0af459ae53ac"
  },
  {
    "url": "assets/js/88.82eb79fb.js",
    "revision": "3643a9b83fa192f2a3b94637161f108c"
  },
  {
    "url": "assets/js/89.3b24fbcb.js",
    "revision": "8c507b78cd8c2795d492a95631f55ec5"
  },
  {
    "url": "assets/js/9.6e731a40.js",
    "revision": "f130f986aca7248fd51ff5c3a5d92bcc"
  },
  {
    "url": "assets/js/90.9d4c71ad.js",
    "revision": "5358599524040e4815a569c7900386a0"
  },
  {
    "url": "assets/js/91.2e65595a.js",
    "revision": "6466f7e5700f360b8733a7d4b4c0bbd8"
  },
  {
    "url": "assets/js/92.212a23a1.js",
    "revision": "891657013b2025fb0d106da10a29b73a"
  },
  {
    "url": "assets/js/93.dc8a05a0.js",
    "revision": "55e33df73237da021a38272323ba5245"
  },
  {
    "url": "assets/js/94.d93ffa28.js",
    "revision": "76393043f576656497794f2847364be2"
  },
  {
    "url": "assets/js/95.b048cce4.js",
    "revision": "1ac69280f4280731772fe01b9cc8ce7b"
  },
  {
    "url": "assets/js/96.e6135b75.js",
    "revision": "b9c5db3ec87db2d821d8be0432bafcea"
  },
  {
    "url": "assets/js/97.c8b19a5c.js",
    "revision": "b64af47ddbe64506621f7cf11fdab45a"
  },
  {
    "url": "assets/js/98.503f9b78.js",
    "revision": "e7ec56360ccb306553fd25fd5395f31a"
  },
  {
    "url": "assets/js/99.defc2d63.js",
    "revision": "0a47d737787bf2bd87fe3335ccdfc61f"
  },
  {
    "url": "assets/js/app.5f1881bc.js",
    "revision": "ebd9fb056ebca3ab7cbf3a1da98f4903"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "102e699fc5373d78982faa54420cdbca"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "6503de431ca741c5a8e417269a414a68"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "496aebcb3d80393dc883cb4598edbf91"
  },
  {
    "url": "tutorial/index.html",
    "revision": "972c13878f11a83eb38fe87cfbd85061"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "ad3e4de3d82f68f161c25626513b4a27"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "e8fb2009dcd36e4f2311d06c9e81b2b3"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "a3106e1302b97615351e31cebba2a1ce"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "9d007ef9cb47564623ea36a7cfabafcb"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "6dc39f1a501b34312459537065fae2b0"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "5f0a7e2e3f30ab9e19b2e917196ba59d"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "2f5a1d3c9c8f6a82c4f56e81201e991e"
  },
  {
    "url": "zh/api/index.html",
    "revision": "4c8ccb392f4954e31953fbe81fd3d59a"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "95444bfb0908822bbf89ece8febba816"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "83f3e4564f62d2f2d41e710d259b70bd"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "ef3132946ea6cacb55a3c7eefc0fbb5e"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "a61d8698e3c621451b1b352a244a0b9e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "83681ae07122569e93012c32f9ae08b0"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "1b36b715dd90e2695f1066f4390406f6"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "3aa4b29e1140fdac46c1c4b8dc4b8fce"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "6b0317b5be1ff94503435f54d272da15"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "3aea0bc2b5814b28c77f77ccb63999bd"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "5d01e25c9fadbd0d21c5196837c20ef9"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "4ddec985c6e20ac4d3efcc21f83c81f6"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "bed06cc9c405cd60c9d22be911b959e2"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "b5e2b68aeb551bca5e55d81feeae5deb"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "89def5d35e2b004fe4bf71c2e78b3c31"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "e890a989f151568eba6a0fc93793f89d"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "0a19e918c0f20c57738b77426fe21769"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "baf44d1c05d96003819ac22da45a10b3"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "9ce9fdbad86755b1d4657cad884c690f"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "0ddf9e705cf33b84b2be5a2a3cf3fff5"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "35acc8c8349a73a998d59182af5e64bf"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "b4e16b9a715de4e4700ba81dfde6a2a1"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "36e556aac6d16ec6d70dc1a496a9404e"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "52621ff440a66deebd8290a3fc54b0f5"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "849dfd2ddc7b276f54335131c7e71eea"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "0422292ff17e7836503668b8cccca37a"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "7b55445da9910eddd01ea8fbdd5df8b7"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "1d81b76fa07812d4a512795c5d04b718"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "b7d7e267bef1fa09b6e263c1856f329c"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "def0b3cf775c4eb13d4df70d47c18264"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "6b2677e9ba3fb5385a7d4f427eb14a9e"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "a1f26bf716ce7557e61fb7821ea9a828"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "d46df84ae02af70e34f6180ecd87250b"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "6369ec6989d671fb3e805f4bffac84c4"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "4dcb65015905e7ae0b9b42d7d79d18ff"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "ebdf447af9cff6626b66758367810614"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "0e0b9864308e25e4fa0f1e7a9c91217d"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "0768c80b9e37a11714bf435eefdbcc3d"
  },
  {
    "url": "zh/index.html",
    "revision": "b990538586cb90604e719d2303aefa08"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "4383b1d3a4d98af8d3d3bfca97dec5b6"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "d9aba7dbe0b38f61906784ea6de3ba96"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "4ddb6859360023881cbf499a9c4751b6"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "4d438d85d70f96d23fe06a93bb7c1fab"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "31d78958c037dfe1dc8b3ce8080061e6"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "ca2c1599d2d5e2fcd49445f29005abba"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "2f8723ca0f9eb7c4f24adc009d5b3408"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "3b759589aa3f78229d1ff327e8ae10ea"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "83127083a8c748f0e3ea4b4d88a9e58a"
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
