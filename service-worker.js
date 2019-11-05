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
    "revision": "b02f8d8922d3f46ea2129b2e0673df7d"
  },
  {
    "url": "api/index.html",
    "revision": "43b18cad399b8aa1a1942f1b9fb0a98f"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "a5ae36bcae5aa73b30580d8c993bafbc"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "ffa27d54f32c49734b0d271788992a0b"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "8b09d5c914b23e5a9e800a33e5ec30f6"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "3326ded9bde3a805372d74fba3e3a597"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "f93981234d275749771ad5262830c97d"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "f6824794c5adf2d9b6ad5931ab1c9bfd"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "9850ad32d242f08fc57a4ff7357024f4"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "072b332ce55e2176a3e86c0149f79c2c"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "f308e715f217c6f93a093b224c46f6a9"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "fbee76645365cf10842e3f1ce91433bd"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "385aad6d99eae29e6905867943239f5e"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "4ce64fbd6e270c8affce982ab7e6fc36"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "67506d21a410dc298b3ad3661160a381"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "ddaf8166a2c3da1068b65e69df731b56"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "29403d3b46cae501e079fa9fe371403a"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "80626e28fc0f340e0c43b451095bddf1"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "b0722451fdb13b57c0e4b85d3eaf9ba0"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "e588dbf2e19e4036f0b99d64c2cd5bb3"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "21082fe8be75e91022573a7227ec0aab"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "9d2a25600d68d113ce2792d7848a5bcb"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "934d5f402afcacdde9d42ee556d27704"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "caa83f3931dfd3a6466b3c5b862577db"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "4ba34d5d991a64b25ea9eac755eb8166"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "47041e21393dcd812835e5749d747fce"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "e2b252eeae87924511fd592b58e87266"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "9e28328ad54ab4543dab479fd45c7e6f"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "14713a97e100e4b110e8e54d38c553c3"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "38bf232ca74fb0bfee5bbcf18bd43bac"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "399fa1d5f78efc33a944a07c6e3d0c7c"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "bd1bcc4fbb3b78d89a56b3e7eb8ce70c"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "1467f86fa98597567229fe8a9cfb2604"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "dc7b1de01558693de9d120ac5c1aad88"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "33225b56bf1c3779e7e60a2149617e4a"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "b0b50765a55ac8276d82ef429322a6d6"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "31b234f03a86cd77ffbdf6643322b966"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "2f266689b6d222c85859c4449ad8202c"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "34ae1a147d6df8b9934181e22809b16c"
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
    "url": "assets/js/25.fa24bfa0.js",
    "revision": "40bb382060fb14f4bd9f6b5f18b76fe9"
  },
  {
    "url": "assets/js/26.c1d37dbd.js",
    "revision": "feb36b9515120aba8be946af6a07112d"
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
    "url": "assets/js/39.78970204.js",
    "revision": "e326032b1abfa7177e6baf73a1325408"
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
    "url": "assets/js/41.a38cdaa5.js",
    "revision": "fa1ce0c6ee29c723e902ebe4370fb648"
  },
  {
    "url": "assets/js/42.9d68d6f0.js",
    "revision": "ee2f5c836f2b81d8c3aa62c702f6fc63"
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
    "url": "assets/js/55.5066bd0f.js",
    "revision": "49de255e24a039dc7ba833ceaa97cf8f"
  },
  {
    "url": "assets/js/56.612a820c.js",
    "revision": "4532c30ddc804f993110da23d6a646a5"
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
    "url": "assets/js/7.2e0e4c41.js",
    "revision": "657a08573d9b862dd887e074f8e07d44"
  },
  {
    "url": "assets/js/70.c1153031.js",
    "revision": "272ad10a3595d2a4b501e32f9aedf257"
  },
  {
    "url": "assets/js/71.c38c02b9.js",
    "revision": "e36bb9704181453c3e3b26f63b890bef"
  },
  {
    "url": "assets/js/72.bb3318cd.js",
    "revision": "36105c70db07fc462893dc9e3100a144"
  },
  {
    "url": "assets/js/73.8f06f329.js",
    "revision": "2d401461288edb2b24ca2bdb89f3bd5e"
  },
  {
    "url": "assets/js/74.b949d171.js",
    "revision": "e492c40789daf84b95d48a2111bdb56c"
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
    "url": "assets/js/83.7af16e75.js",
    "revision": "3dfe06459b42b440d6f89b67ea38e9f2"
  },
  {
    "url": "assets/js/84.30a8b155.js",
    "revision": "55a809d9c71dc85e20de28e05bad5ad5"
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
    "url": "assets/js/app.57151e38.js",
    "revision": "83cd3bfd7bc62e9897a5ee26086efdff"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "82df887a707009208fcd4bcd41f3bb10"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "81d90e61afb7877803e782d5b996b9f4"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "7d7f29b31c1c6e516875737ae52fa9c9"
  },
  {
    "url": "tutorial/index.html",
    "revision": "e7444c58d8f2e55836388880495e75ef"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "b7c94307c05642faa0282f64364291a4"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "4cc328f0bba620f4d8e31b81d5e6b1a1"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "210fe670d0c39ce5a7667c6f84e82539"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "bcfbfaf2e5831509e691c9a619e53076"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "f600b4ce9a2fa83f4813679c7b6bb789"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "e095e50cf5c9fa71c51dcd95efffe209"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "f3c5fae57b0fda374e4b179d4fc78cb7"
  },
  {
    "url": "zh/api/index.html",
    "revision": "2626249dc30dc0550f67e6d7a70ec700"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "5935740a442ae0e208bf106c274159d9"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "8b4dc3c91164756b06d0b1328a5a0aa5"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "60f4f797eb12d8b8078890c9c9db55f1"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "24b271e20b51b739e14621549b2ef6bd"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "20767ead7161bb80f0293ba61dc7f54a"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "5d3ab54fcb47b18b00d997f00274ead3"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "7225117d1ea3097a813f80409f46ab83"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "c20e042417e7dd4368bed3be9cdccb39"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "c386347e492427143ddb1703f649de0f"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "dc0bf08ad8aecf6f88d1e0d97952baa4"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "60eb2d14405479a843f185443711b83b"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "04e2774c3c30940e6065119cc3e7e7ef"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "6a531364401766a38ade7f20a84041b3"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "af4b5614a9cfdddcd5d9dac084ba06e1"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "b77a8a937f22c0182f14b91ac0ddf0ac"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "5ddf112b0a192b44ce6fc8eb51257204"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "a7d209764a6e7af78f2eb0a715432efd"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "01c7e9e5ebe710a37bf2b7df20ffd23d"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "1eaff72709819ad70c52062a0ab7a162"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "df2163f03234d0a6b46fe1990d902c81"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "768a6f01cbd5c157180e8b465c2503ec"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "1ba1301e8618ee4912b9738e6952e328"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "027b0185077f5aba58eec1d48c3148fb"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "ad40adcaaba2dcf8c88b80aa565eaa68"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "f64e9d63e7c546d12b96093e99f20b9a"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "e7e99c33a4e340d6767a027f588e091e"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "fc92285aa0b676ff07a33c57fed5bbbe"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "ad667efbeb47bd4b2c0b95e7037b53e2"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "ffb18f26ca622e95a1a3b4fb61dda957"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "edad5aaaf5e6728b89c4518dbcde2f97"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "79f2350647ca9bba0cd24a2d6e204e7f"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "fdecfc9d056119149a6994a9e57565a8"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "7615186aedfe8454e579e36c9ee6c7ba"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "86b71a16012b75b1c9b4d5335cbb4cd2"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "8e5403cfd8572538b59d1b5b22035102"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "297a9e05a48d3936fff7bd0583b933c2"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "3132bb105364954caf702a2783587dfb"
  },
  {
    "url": "zh/index.html",
    "revision": "ced9424126efabc645184cdc5c1e7653"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "99670246a1dd2832a23461adc268ae95"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "767d99d043cedb6b1c2230351dcd8c24"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "5772c6ca2adaacb35df6e90d1c6a6589"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "842878b6b2dd041cfa4bd2725651a16e"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "6a55c0e24e5b40452a90083abe32fa1e"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "6d8d514688115c1c1c42c02f3ef9303f"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "f19701bb3c68238142628d56291e57df"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "35eec83fd381ce555498d0aea0e15577"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "6c238f33dd528d7a74907547150232f3"
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
