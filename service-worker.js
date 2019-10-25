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
    "revision": "c3374c24a8bc595b1f37df3da352ccd4"
  },
  {
    "url": "api/index.html",
    "revision": "d1c460b4a91d04d18d2b5b07666fac43"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "cf4bfcfa06ce6e66a7cc580126987114"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "716096bfe9581759b15aee41cdc7595c"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "b212e1231f592946c756ed4d9204ecd9"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "525552ef98eb8d37037881359fba92ea"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "d9e8735abcd4a8b7d2126915aae7b2f9"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "1465c35fccae4ec4931e113b0438021f"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "87d392664977bce784c962222f749832"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "99cbf2ed28c38e16bbe7d5a6a64cbf33"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "3d891dd1a5237d00e2ac3db2c3526863"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "f5b1522634e053401662cbf502f0bdc6"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "e78c69bdc609fb1725f65a6b20b3178e"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "4d07284c53151d4dca81871b5928fffd"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "e1ed18389c8a671ac3b78649d5481bf8"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "5d3299c7bc045976a20320b4de258862"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "bb303f0cf1f05fd4c252a67494ce024c"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "ccbd915ee10d4ec62abf6c5897d3bd4c"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "6c2d247027d2f6d8872b96cf89274d9b"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "55493bca8e427f9d305f37154996548c"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "4c810f64e1780fe30207ea2c8c647c96"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "f4610283d43b3666105cdb6be1a8a5c2"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "fcb47d6b13886b76b72bea58827e4004"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "ae157523c6f08e05b0784b4c9100724b"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "c91703bd088a71c184c9338adb7b00a6"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "eb8783dcc62a845ea6da50120498e41f"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "7c5f36f0820f7e57d0439654cc7a1b45"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "748c8b5dd1c55398943327003882bea6"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "36e64f562a7846f40cfe5c3a54f4e18a"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "24f733c5b38973b48e7f5b105ca0ba85"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "2eef383691b718bb112a73b4da71c676"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "cf4ff031e1484576ab13114fff7e1b2f"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "051f7df62870a68b75f76aa50be1c657"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "21377c12f1bac668fa29ee6253ede6c6"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "977785fca211ab3ca29428ffbe2f1d5d"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "9fa6200f1490504533f8ea49ea00b117"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "ec9889e24a9f3e3a54a681733a2eb115"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "b09ad0526c4807b5e93d7aedec0fdd43"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "71d81fe51e2c5ef474266018bcc98d8b"
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
    "url": "assets/js/10.d24478d1.js",
    "revision": "b007f327714aa55f5ce67d78df877447"
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
    "url": "assets/js/11.8c0c240f.js",
    "revision": "cdc5dc474ea88c56ea11db9de960aee3"
  },
  {
    "url": "assets/js/12.8a6d54f6.js",
    "revision": "756a665d24835a5bbc29d0dea29e9717"
  },
  {
    "url": "assets/js/13.106f4933.js",
    "revision": "f4b5d78cc460f82a8fb0ccabe051f001"
  },
  {
    "url": "assets/js/14.d1595dce.js",
    "revision": "02befefd44d75ac36b5f7646794ba6ac"
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
    "url": "assets/js/18.49d1bfd5.js",
    "revision": "612c4d461fa6a84ead14efa8c44a1c4c"
  },
  {
    "url": "assets/js/19.b306feeb.js",
    "revision": "30e8ef2b5b55bb394fd524d054a9ed1f"
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
    "url": "assets/js/38.949cd3e1.js",
    "revision": "8484dabff5d475a9fcc4663789399bef"
  },
  {
    "url": "assets/js/39.59a228bd.js",
    "revision": "51c886eca3563195901828ad6e17368a"
  },
  {
    "url": "assets/js/4.4ac4e7a7.js",
    "revision": "e8a86572743e99ba91a7b6f8497e22ff"
  },
  {
    "url": "assets/js/40.d2c1ea45.js",
    "revision": "5e17140fa6af40b05b84761e687ac75f"
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
    "url": "assets/js/54.0077cd29.js",
    "revision": "5100162046894c7bb68f908eee88e138"
  },
  {
    "url": "assets/js/55.80d929ae.js",
    "revision": "2a512f3a871886c0f31c84a2e408898d"
  },
  {
    "url": "assets/js/56.612a820c.js",
    "revision": "4532c30ddc804f993110da23d6a646a5"
  },
  {
    "url": "assets/js/57.738161ce.js",
    "revision": "6f4007c22d498c561bdc71ffdc9e072e"
  },
  {
    "url": "assets/js/58.a31a7a73.js",
    "revision": "c7a7d7efa15bc88a93e09e08b9a1ac30"
  },
  {
    "url": "assets/js/59.c94372ce.js",
    "revision": "77a0a8d22d240f30a493b53a3375f493"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.338bdd2a.js",
    "revision": "f85ba3b891dcc15ded7135acae7bf8ba"
  },
  {
    "url": "assets/js/61.e1597779.js",
    "revision": "e013a9d4ada8bca8ec4d52f82770e5ee"
  },
  {
    "url": "assets/js/62.41bfab4b.js",
    "revision": "534cdc832e08cb66e487531f86759670"
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
    "url": "assets/js/65.e7c62435.js",
    "revision": "8e3b6d9f6460e7856c19da63fe071374"
  },
  {
    "url": "assets/js/66.efae9b56.js",
    "revision": "901edb8941dcb7f25963497aa7b6656e"
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
    "url": "assets/js/7.2e0e4c41.js",
    "revision": "657a08573d9b862dd887e074f8e07d44"
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
    "url": "assets/js/8.81feb0f4.js",
    "revision": "05a6ea8809972302631adea92b4f058b"
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
    "url": "assets/js/9.ffa39b68.js",
    "revision": "82cdfe8580bf16cc611bae66718c0f37"
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
    "url": "assets/js/98.4d8c608a.js",
    "revision": "2dacf29c4d7b2336146a236f510ab5f9"
  },
  {
    "url": "assets/js/99.f3b8718d.js",
    "revision": "64523c36f57bc4bdb78240bf1d98720e"
  },
  {
    "url": "assets/js/app.512df989.js",
    "revision": "62091d5925adcf33bb1aa848211f0d31"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "be3e98010bdcf306af6404b1bd718fea"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "a9cbf4848f290e47f0cc2554daf08a2a"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "f28186f1b8db24aef8f1c67b95047780"
  },
  {
    "url": "tutorial/index.html",
    "revision": "5a125bb1b91b5eb99d55a046b1b6ecfe"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "e41783ec836db3d75920f4bb9dcbfd3e"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "b04dc4998656f02567a93a783dd27eb6"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "99dbdede83d6b946fda1c956a5fce524"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "c21dafb896ceb43e14b0464a3da99173"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "6c1df3ad8e9eb303177731073f9a35f1"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "c90e11ea9f958fb4eaa7931d5feb4c82"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "1db7946e3161e9d2492964550f18b11b"
  },
  {
    "url": "zh/api/index.html",
    "revision": "746abadb251307f8bed3467f245d7f00"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "91816803fc4ab3cf432bd336bebf26bf"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "f2994394eac40013232b372fb220e0f0"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "9d11fe615d0ccddf7630878885c02eea"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "7fe4f3564d9bfc19cec4afd26d6acc9d"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "e843c0d00d84fe7dccdee68fbfdeb87f"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "b1bd99adaf7332fc4cba38dd577b2821"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "7aa08673f75d98259773125084b357db"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "eb0bb00408c97c5928b4965de5d0169e"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "bdc8aaad5d78f83fbd10d0a4f5bdddb7"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "37611e2868b495515108b04f4c1c0a71"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "c0f22c893a2fb4339775503fdcf6917c"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "c134b89dbe516d6d48193217d02ce801"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "8067eae66deaa7e5a9720994b9ef76be"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "2672b6bb7992017d187511a6c82d80cd"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "02bf6d911ba2408fd421195cdce6d259"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "652d933b6d51f515c0e8fe18e31d3e5a"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "904cb9949a9bb5ec1107d4e4c139b510"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "0eac0f5f4d59432d52ff6cb470ba1c0d"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "7c9caa356b54aee4cfd78e6a3b9931d0"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "49750fce490c082532d008dabe04775c"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "3881d4a9621320a732749bf9182c4724"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "a843d91a3b9580bba696cad40f079f99"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "eb298f1e6d7c9013ba10ddb53ce7056d"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "556faff7fa8840a7bbc406428ff85a24"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "58b72eb0fbfc91d2098afff1d1020544"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "c6f0bfe4d46fc2ca09b13a3f4c35ce96"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "6c66b5c95193d5ff9a3a97749456a5b4"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "848e5f3823c54c6370afb672215dcdc7"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "bfc84b5ad23f6b80cf3172a42fd58efb"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "301a15689bd0246502ef6bcd6669e855"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "f04d05401e1ef3b54cdcdd3f01bfe98e"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "3c4c9f34c65662ef1d5728da9bb71a4d"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "1b90754616afd2e2383cdb0f90a8d430"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "a2250730919404018b07f52f2fc03062"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "e29fddb5eca66d859d386129ca216438"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "2ae5478338dbb1f59351580ab6679913"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "028a30787a04d1324aee6257eaf5c21b"
  },
  {
    "url": "zh/index.html",
    "revision": "1b2595cf18a2da87d7413a2fe3012af9"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "76ab1f6be242d26f1cb9ed8fb89f4b07"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "d07e0348ef08b347d1f941792258912f"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "42c3793ec1ccdf73616714ddc5ece309"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "8f87ff74dcf1de43d95285fcc13b9a82"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "4c9298118c9a80e9cf8de3396312fa4a"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "f09fc1b4ed5694316403911cf5195a37"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "862415545f67d3322a37fa76d540f4f7"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "9745b978a6b4d620a5db9d3775eb8377"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "24b364996ea38db793851117c702fe93"
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
