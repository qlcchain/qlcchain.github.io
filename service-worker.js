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
    "revision": "4ef719e7073dcf15eecc57c30e1e66c7"
  },
  {
    "url": "api/index.html",
    "revision": "97a44efb03e97ba7bcadb35a083718ad"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "2286baa7a3d4a0a723d4160f6323bdb8"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "32a04c296a198017f90eb9f667da6e08"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "ac7efc1fc96196bcb8612bc03f71596e"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "17ebb16d69b0727fb83c3176797315ae"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "241a8aa3e4c22028fb08f748b84b1746"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "bac37987a3384412792024dd799ca22a"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "3ce95b2a3ed712598ad2fc57ca323add"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "e106725ac104a2b2de9342de3f221b05"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "62465dd62c28e23c99109c00f20b09a9"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "f6a0a6552d71f17d8f602c8a08e37f4a"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "754a162a81052f6783ff3f7f5cf1cd85"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "288cce80a3c6954cc89871569764f279"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "ea885101eba09e4d6de301b625108204"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "5ad2b844e8ed806004352a7d247e7fd3"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "444e387958683abb9a2d1fcded443fd3"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "de8fc79ebeca10ad8f870a467bb13ef0"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "6810accab93f5e448bd0952b8e069148"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "c41ee702d742e6c11d7b07d1c3a03f05"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "ea70c7c8106c88757c8bb37825e10331"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "b59531f3ba4c8fb89a781dc7b7cd27dd"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "61c3862c38725df1bebc42b5356335a9"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "d4ae5f5027affaf42687bbfbefd152ae"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "8d175ec3338bb555ef71978d0ebf3d95"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "9a03cb71971f4c366e8d323ebf8188d1"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "6173a23b1da8216ce1d16a80f3445a1f"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "3317463db7abf92a666683a41afc3ad2"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "28c6daa2c821e2698f418d49acf8f448"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "4d722fabb975e79077eb32b7f5979f0b"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "8a522428512c0629b2ff0afca771493e"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "13bfa075406988ff837707528c38c540"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "85ee2c8dba8b38a86bf62bd3e7fb4832"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "5dc39e4af8c2d7acdc1ba4302a52da7a"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "861ad15e0bbe66492468fea0e564a1fe"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "fd44acb04ff122752f27640bdea49299"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "9f3e6a2d911296234d69c6287bad6f9d"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "248e3edb7fc04d1fc98c818604116b4f"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "5633044175bba42669e767753aa65dce"
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
    "url": "assets/js/21.4922fede.js",
    "revision": "519104c1178c6d86efa6a9f6d9d9d042"
  },
  {
    "url": "assets/js/22.2ac8b9f2.js",
    "revision": "dc340cd867ee4d01b6327f8c41f4fff8"
  },
  {
    "url": "assets/js/23.811cc924.js",
    "revision": "3c4e876b82ad24b20b597188a9e2743d"
  },
  {
    "url": "assets/js/24.d920a548.js",
    "revision": "12b45620dc0df7bd50108477de1c0998"
  },
  {
    "url": "assets/js/25.a53f8c9e.js",
    "revision": "a0eb9daa204a5da0c11bbbc0b37cb168"
  },
  {
    "url": "assets/js/26.c1d37dbd.js",
    "revision": "feb36b9515120aba8be946af6a07112d"
  },
  {
    "url": "assets/js/27.03b50623.js",
    "revision": "428c2de9389d9fa222f7cb9ef1b1ce9f"
  },
  {
    "url": "assets/js/28.9e8bba92.js",
    "revision": "e6cbc2cd5ba0ec0cf4e8b3dd6b3c2540"
  },
  {
    "url": "assets/js/29.896b2647.js",
    "revision": "d869932386918fcaa12db153da564d1c"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "6943f98f2049f83e3ff7655ce98349f5"
  },
  {
    "url": "assets/js/30.7ac08333.js",
    "revision": "d95bb905b2b075814703f19b7728605d"
  },
  {
    "url": "assets/js/31.da1bd2fa.js",
    "revision": "0fccd0bc6da55bd4011246187128173a"
  },
  {
    "url": "assets/js/32.8cf38299.js",
    "revision": "f5123f20ad18eb9f3e149c59a376c481"
  },
  {
    "url": "assets/js/33.5ae35677.js",
    "revision": "757c5fc37662d345ab14f7009ada96c5"
  },
  {
    "url": "assets/js/34.eba1b5a5.js",
    "revision": "a588d6ce5ebb1c050a88e0292735189c"
  },
  {
    "url": "assets/js/35.1a16b08b.js",
    "revision": "a66a275752cc87192b44eeedea7226ca"
  },
  {
    "url": "assets/js/36.48666825.js",
    "revision": "2cc69e4706ae9e71cb4b7ea01ac83bac"
  },
  {
    "url": "assets/js/37.4dc1157b.js",
    "revision": "61257de3ad83a7507f1be3a965a96f2f"
  },
  {
    "url": "assets/js/38.273e0743.js",
    "revision": "4a5e8fe5860794bea195938e8a275845"
  },
  {
    "url": "assets/js/39.046eae2f.js",
    "revision": "426e73005bb1b072c2ab2e44103d4d40"
  },
  {
    "url": "assets/js/4.4ac4e7a7.js",
    "revision": "e8a86572743e99ba91a7b6f8497e22ff"
  },
  {
    "url": "assets/js/40.035e170d.js",
    "revision": "f8c0ac049614d4301dcf37e37cf9995e"
  },
  {
    "url": "assets/js/41.86fa11c1.js",
    "revision": "fc3c4f6d52f5eec4170ef0507900364a"
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
    "url": "assets/js/54.ab3f59a8.js",
    "revision": "cb7759f37d24d362ed920e4c1a7f4cf4"
  },
  {
    "url": "assets/js/55.80d929ae.js",
    "revision": "2a512f3a871886c0f31c84a2e408898d"
  },
  {
    "url": "assets/js/56.b670241f.js",
    "revision": "6d4cd65df1ac516da105a39cb2a9bf35"
  },
  {
    "url": "assets/js/57.dea5c273.js",
    "revision": "e2b7072aed20e44555682764cefacfaf"
  },
  {
    "url": "assets/js/58.d619887b.js",
    "revision": "a0bc9a6422277fdbfadf7d7900b440f4"
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
    "url": "assets/js/83.7af16e75.js",
    "revision": "3dfe06459b42b440d6f89b67ea38e9f2"
  },
  {
    "url": "assets/js/84.30a8b155.js",
    "revision": "55a809d9c71dc85e20de28e05bad5ad5"
  },
  {
    "url": "assets/js/85.f50a65c4.js",
    "revision": "fdacceb7f6bd94ca3c5f8993c3ee99d5"
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
    "url": "assets/js/88.e2807973.js",
    "revision": "db55636d12787d188a974a3bbc73d239"
  },
  {
    "url": "assets/js/89.3c6ddd8b.js",
    "revision": "5cf88535832e9e1716d15a82d1394ce2"
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
    "url": "assets/js/app.549a684e.js",
    "revision": "add2c98838756071d48a55e24cf2402b"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "863c6b027535632100e895c759354d6a"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "69eebf815d5b84a943fd6f3fe1e104eb"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "a9dab1f7b0b39afd6ec93cce3a824791"
  },
  {
    "url": "tutorial/index.html",
    "revision": "f63eaaf6a2325435c1b2323175adb400"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "c8d59e1a1dacbc646a1dd43c52c88f6f"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "b7ca8cf10aed1e8055b6718fff6991d9"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "44c6400a423371aebfea0013353e414a"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "9c4dfe0fc6f2f6e0bc7817ebbd3daaa4"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "f757322ae8a67f8dd167c4c6e8773b7d"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "80bf188ac8a8ba954c504d142f927317"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "2075fc2da8964f27226fb100822fff70"
  },
  {
    "url": "zh/api/index.html",
    "revision": "cb082421beaca9cd91534d6c9b8a7b30"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "764b8dc4f4234df01177065be79126db"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "fd6d46ca3a38bd953b97e9313b90a495"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "4d0a6a4c6b1fc7b72bd3c5745b2c61a0"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "a23002b53a1cde00ce3a2b8d312a76f4"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "c1d4b404ab12f15a82ead17565eb943a"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "e916e527d8515cdc402ed17ed9e0dd48"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "43e9a55dbbd94994a0d37f2ea74e819e"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "720ed7535c2965e4051660cbe3109073"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "5195db37123c427bda1c870f1bb7210e"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "687d86a27f03a33b419075c9304a6f9e"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "2ed63e62a8ca0efbbb8e3c82027a123b"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "427b10e3f6726e12361741f64c162bb8"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "d8dc47fd630f5fa71832af56268a450d"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "3c8803fa95ba266aec8183dc10d6dfa1"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "0e752ba3543101ec31426fcf4b07c503"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "2d74d285e4527b37fa7f3aad5ca39936"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "1f1b3a8ae21b952a6b9d18fd3c372c7c"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "a9781ba1b93168debe5a417a0624aa40"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "0246529e127f8ad514d2a25b37e6a774"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "fb3519e5b4e6ea4ff8ca0264b8d15c45"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "6e07a4c5fd36ef3f4c8243c00912a3ea"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "58a64f4b7213778ae92026ed9b9d6479"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "58d37bfc016373e3235f3ffe79c81212"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "4d4b5015fb1302255673f71ac412f3a9"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "fb47a76d959a1ab1097d1867c429ce10"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "c5b80235423603289a12db679465516e"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "6b0954736064662f31b9be4f5bcf8ec8"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "d2f37d711f2c326848cd878d710cec58"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "2056017c08be5926d26ba13098d4b222"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "ee131544b47a488694dbff5a9ecbf957"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "3dfd29f02657a1734008fe9b974d72c0"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "e145c6a13852ef307dcec0bbf3c3e11f"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "abfc57e1859032e7361a7c74721f8738"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "47cfb89d057d2e6e1db915107e4ce55d"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "64d69425d96beca0c93374bc332facf4"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "8d8093034c82782f4e1c70ebdcf42040"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "5081acdcca044f0709de92a2a3dcf655"
  },
  {
    "url": "zh/index.html",
    "revision": "bf14f18aca21d75fc06055f90fbab955"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "5e398521ba4200e946a105beee7edc95"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "e311cdb175dc811fdc1472fb42a45340"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "47887eab7343819a1fb24999bbe0a707"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "6ced5826426f0f75d60ef389451262b5"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "98b915b2022a8da0f753eab5f76823dc"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "2d02be968eb2f2e035966076590f3408"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "478a6f44da017a023fb2fe662864cec7"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "d5aa510cd38cdfc3a30be174a4071a21"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "29e4047cd7b650ddee7478d241d20526"
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
