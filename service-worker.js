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
    "revision": "0250545e6a768ec8a99a11a1411235ab"
  },
  {
    "url": "api/index.html",
    "revision": "c8db777f568cbfe01667b7d5130624e7"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "f1aaecf9338ae778a6f4a270521d57aa"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "9666a64b1f7242e575e1784b85f0e6db"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "fe0b3144d101301512547ca70be6d2fc"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "95fb1e2c76506b1faf1f1526a0761424"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "da87396168d14647b099b12043205b15"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "379b74652a005232dd0f159e9bb54b92"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "73ab3261ef0856341bcbf789707e508c"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "c2f1bc7eb09d6c1c406b15cc6ad60f10"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "18fd8cdc20a8c228af5ad4c3f12a8a79"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "503b0c030e8352eeecb98cbb61204424"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "79fc4ae8735fd34bf227771df3797e9a"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "d41ef2d78e37b7c830c0b966a8d4d71c"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "81ab0b92559dbabcc2b8f7179beddeff"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "153b9263a238e34f9776627039df2d9a"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "eb5e21aa8748ae9725c61995fea4a085"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "08e9516be170d566221117dc7afad477"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "d6d4a93776de9d5e95241ad0acf96a5b"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "162f2da6f021b2c3f7fd3e155375521d"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "9452598dc8442403ee0cb28dcfd7a3c4"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "06b9c5b5c434fa6d4d72cccbfc8a073c"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "17c5dfe8c05a897e8c289eb773d3355f"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "868c6d6c5420b2c9bdadecdc0cb40cd4"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "d779d30d94bf0a4a5e7e733ddb9f37c8"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "3d37d0d31e9be9fab56523bfb16a127b"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "26fff874bc52f58919686f04756803e5"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "4a515c814838dd5091a06f0af1def80f"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "ab4ba8e39a42e004393bfff064bdf18f"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "70d0b3df235e4f41b0ebb75d65cba8cd"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "02018de5cb2404f1fae7cc16ffa9bb53"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "2b2f4a0f995554c91290a2995d3ba092"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "ac16ad781f8bd05bf0b7b58d9abe7369"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "0f4be512f15e2fc9232010d70122d9b9"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "a73b9a6fc905dc0928894f7a83ea69da"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "275870b971fec3017725ae1ebd45d661"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "1decd7717cb7191220d723de1747be6d"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "7519f48dd114701cf53321e2efa84e8e"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "7d705b0a4da9993514ea9216d664a576"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "52539cd7a053cc0d18f229154d85faca"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "ddbf0519511747326054139a8b6b53aa"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "b4756f1d28cd4143a11652a62ace1e5a"
  },
  {
    "url": "assets/css/0.styles.6b088026.css",
    "revision": "57b57f7cc36d87816a0e52a4030f5cf9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e22d3777.js",
    "revision": "e52dc0f4926eda51cf49653df1976d4e"
  },
  {
    "url": "assets/js/100.8540dd47.js",
    "revision": "49db1caca8f29888b0cb8f74e44ef64d"
  },
  {
    "url": "assets/js/101.7333b0ef.js",
    "revision": "4f66ee9413b33d784284ce261f1c3cf0"
  },
  {
    "url": "assets/js/102.e00c457e.js",
    "revision": "241daaafbc5ab5dd1dfe9dca9fcaba83"
  },
  {
    "url": "assets/js/103.0451afb1.js",
    "revision": "a2635b96423dfe874e6a543bb9eb3956"
  },
  {
    "url": "assets/js/104.577f96fc.js",
    "revision": "42ba5277fb5f90eeab894b321b25239d"
  },
  {
    "url": "assets/js/105.9b1ba009.js",
    "revision": "439db79f86fde9157ee436200d0aab45"
  },
  {
    "url": "assets/js/106.e21e0d00.js",
    "revision": "1f54e7bb9f44dfe870822afe1a667310"
  },
  {
    "url": "assets/js/107.78630289.js",
    "revision": "9f95cb77345b84ed6cb3aad9b90609dc"
  },
  {
    "url": "assets/js/108.7b97199b.js",
    "revision": "37686c1106d4a581bf99852d8ec75c16"
  },
  {
    "url": "assets/js/11.e915fd46.js",
    "revision": "600028eea089dbe73de5c543495e85d7"
  },
  {
    "url": "assets/js/12.9937d871.js",
    "revision": "666d875728aff9d3712fdaad84e258d8"
  },
  {
    "url": "assets/js/13.36217dd0.js",
    "revision": "00bfc9bd1f22f51f53f0ff68c18a641c"
  },
  {
    "url": "assets/js/14.76297e54.js",
    "revision": "1edfad3570e41642015cd5864e542089"
  },
  {
    "url": "assets/js/15.5f53ae73.js",
    "revision": "aed65b9e2b068bc9f33a577fd39f2ce2"
  },
  {
    "url": "assets/js/16.65af8178.js",
    "revision": "ff604b8b2803112e52b7addf37ea1c77"
  },
  {
    "url": "assets/js/17.be644046.js",
    "revision": "e530835b07937e9f73bf35c472f4d5d5"
  },
  {
    "url": "assets/js/18.3a0195f9.js",
    "revision": "cda72561a0542dd91c0aaf8a96e6c26f"
  },
  {
    "url": "assets/js/19.72db482f.js",
    "revision": "725f7286b80baa566f380c5679e58fb4"
  },
  {
    "url": "assets/js/20.92845451.js",
    "revision": "0d318fbc4925748ace39db2fe0a540cc"
  },
  {
    "url": "assets/js/21.21d3b988.js",
    "revision": "8537caff4fcf4fe57d35875664825570"
  },
  {
    "url": "assets/js/22.48207ecc.js",
    "revision": "a8933d9613c5209003b07b0b6e6c0325"
  },
  {
    "url": "assets/js/23.efd012bf.js",
    "revision": "961359ab6517ec5fba1b83fbe836aa39"
  },
  {
    "url": "assets/js/24.3425e786.js",
    "revision": "82635e1f51f8a0087ce01cee3c87dbe3"
  },
  {
    "url": "assets/js/25.8e1767f7.js",
    "revision": "47e35c19af041d0d2e3428b04978b92d"
  },
  {
    "url": "assets/js/26.5691363b.js",
    "revision": "41698b45e87a68688e21a4931315c535"
  },
  {
    "url": "assets/js/27.75b9465c.js",
    "revision": "270993687f396c731daaf242b8eb4545"
  },
  {
    "url": "assets/js/28.ff4a15be.js",
    "revision": "1083656d6319ac1cd41ec3702f93703b"
  },
  {
    "url": "assets/js/29.1c5fcb10.js",
    "revision": "edfed1205ac4a771adfe185eec62f859"
  },
  {
    "url": "assets/js/3.c941d5d8.js",
    "revision": "dd09b9cb428d25fe554e3028ad5e5c19"
  },
  {
    "url": "assets/js/30.84e94670.js",
    "revision": "ab42617d4877dc326868f8870b090c60"
  },
  {
    "url": "assets/js/31.f04d9d65.js",
    "revision": "b120783e725f5dd36712fb1415b1b027"
  },
  {
    "url": "assets/js/32.1025ea53.js",
    "revision": "37ff7ed59b0692866eaa8ab6a2fa015a"
  },
  {
    "url": "assets/js/33.22cd5f47.js",
    "revision": "641e496512b5768cd653c2e1e6aecaf5"
  },
  {
    "url": "assets/js/34.d0299c41.js",
    "revision": "2b0a5b7b2de8175ba5e672c6e473696b"
  },
  {
    "url": "assets/js/35.9560c97f.js",
    "revision": "3cc9e0709ee73ddbebe4f0413015f7a1"
  },
  {
    "url": "assets/js/36.eec7b6ea.js",
    "revision": "6dd6f0461c449647daa53800298cafbd"
  },
  {
    "url": "assets/js/37.d8e28aa2.js",
    "revision": "c421a4e384cacc6ed934fa254423110e"
  },
  {
    "url": "assets/js/38.5ba86c25.js",
    "revision": "8d4ceea545e80f699a31adbe20d7bdd2"
  },
  {
    "url": "assets/js/39.87f72af8.js",
    "revision": "7ef82cc3df938938fbb595648f30c305"
  },
  {
    "url": "assets/js/4.24996105.js",
    "revision": "d3ef007066faf7da502ded68c3baa486"
  },
  {
    "url": "assets/js/40.75406341.js",
    "revision": "700a4df0a69a7f62bbbcfd937cfd461f"
  },
  {
    "url": "assets/js/41.bfb553a7.js",
    "revision": "49d47b1908b4cea5cc7e58b6b7718d50"
  },
  {
    "url": "assets/js/42.0c2f0756.js",
    "revision": "6b39ae92b47d5d4773c595f2fd2afd05"
  },
  {
    "url": "assets/js/43.9c64efa6.js",
    "revision": "34a354a90a8a1eeabc07231e2431431c"
  },
  {
    "url": "assets/js/44.dc6b19b4.js",
    "revision": "60532636fd12219bc43bc2511a7b6927"
  },
  {
    "url": "assets/js/45.f9af3c7d.js",
    "revision": "714419aae3b7e466ea31f56c16db94cc"
  },
  {
    "url": "assets/js/46.103fa3e9.js",
    "revision": "155aa4d9a00ca198db4d510bdd8168b8"
  },
  {
    "url": "assets/js/47.4b6d5453.js",
    "revision": "450fd9a5869ca2cbea339ad3dfead42e"
  },
  {
    "url": "assets/js/48.845a1499.js",
    "revision": "0f7b96e6679e289bf779c6d26bf89536"
  },
  {
    "url": "assets/js/49.6b482bdb.js",
    "revision": "443da256551d9a025ee67be5137f3bb1"
  },
  {
    "url": "assets/js/5.0c4766d6.js",
    "revision": "34f67a68926c516a2f99cfa8078f7faa"
  },
  {
    "url": "assets/js/50.62eb1ed7.js",
    "revision": "81dbbe1f870d6d1370e2a7128a33f2d2"
  },
  {
    "url": "assets/js/51.7cc2292f.js",
    "revision": "29574d9d5023bc8a117bce3e98b25f51"
  },
  {
    "url": "assets/js/52.8e9fbf93.js",
    "revision": "7101fa7e8933d31cdf4ef957897b9ef1"
  },
  {
    "url": "assets/js/53.c86964eb.js",
    "revision": "856ee566618723c30ec22a86a0a96078"
  },
  {
    "url": "assets/js/54.563ada0a.js",
    "revision": "10171db768f870c0c207ffdd6fa2b000"
  },
  {
    "url": "assets/js/55.d6a5127b.js",
    "revision": "5d28478add520934e18a030c9878249d"
  },
  {
    "url": "assets/js/56.985fe18e.js",
    "revision": "084166ef6b3f8234a26cd969cbe785ea"
  },
  {
    "url": "assets/js/57.557bc80e.js",
    "revision": "d34595b2f295a3fc86d5ff43ec89eb9c"
  },
  {
    "url": "assets/js/58.a329d9f9.js",
    "revision": "626b881535db9af954eea1e295508b25"
  },
  {
    "url": "assets/js/59.c839dadf.js",
    "revision": "d4d1a99cca51a5ae38ab0881e7df8939"
  },
  {
    "url": "assets/js/6.b070ffe3.js",
    "revision": "9ff8eda5906e2bdb1d980a791c11c820"
  },
  {
    "url": "assets/js/60.d36f364b.js",
    "revision": "68081b8973a548907716c21f09a6d336"
  },
  {
    "url": "assets/js/61.151fb964.js",
    "revision": "3f7732a92cf2021fb6951020998e3397"
  },
  {
    "url": "assets/js/62.d22b842d.js",
    "revision": "5f67c5ac5439e854a6c3899666dc9c6a"
  },
  {
    "url": "assets/js/63.45456795.js",
    "revision": "6446a4adeeda028caf3247b61f801a57"
  },
  {
    "url": "assets/js/64.7e5de2bf.js",
    "revision": "c788ae5fe9aa6d35bb89dbe7c86de06d"
  },
  {
    "url": "assets/js/65.b70a2c4c.js",
    "revision": "dba79126d7fb3b47341296bb4bf41770"
  },
  {
    "url": "assets/js/66.1d81140e.js",
    "revision": "46863915ee64c7325e7f60a5d675f4a1"
  },
  {
    "url": "assets/js/67.03d671a6.js",
    "revision": "ccbab67bdf54ace988504e8b2c3c5ad5"
  },
  {
    "url": "assets/js/68.9ea2caec.js",
    "revision": "302cd91e57aa9c2ad4f538445835824f"
  },
  {
    "url": "assets/js/69.82990441.js",
    "revision": "a7d8ce7d57366f84e068ae6ef241d3cd"
  },
  {
    "url": "assets/js/7.c9cc91b4.js",
    "revision": "1a54b2f67b5f8998668d0ebafb35f228"
  },
  {
    "url": "assets/js/70.7e72a5c6.js",
    "revision": "6ecbbc27c88e621d787ffbb68ae40ea9"
  },
  {
    "url": "assets/js/71.965fc6e7.js",
    "revision": "0bc7bec8172254c6c1811e0062f4478f"
  },
  {
    "url": "assets/js/72.14cc0444.js",
    "revision": "7a648d0351d498ba319c8ac146c0d4b2"
  },
  {
    "url": "assets/js/73.64d33db4.js",
    "revision": "8cbd9ff4c93895ca1a9f3df0ad81b5bd"
  },
  {
    "url": "assets/js/74.c1952c55.js",
    "revision": "fe3ccef603a1f7bdee190ce639a7fb10"
  },
  {
    "url": "assets/js/75.6d1bdc1f.js",
    "revision": "37576fb13081c1fd62ad7cab18505c1c"
  },
  {
    "url": "assets/js/76.87c47545.js",
    "revision": "3ad106468ba9761fb5048bcf0dacd2a3"
  },
  {
    "url": "assets/js/77.160b10ee.js",
    "revision": "e47f0a20709eeb10208eed9d093e047e"
  },
  {
    "url": "assets/js/78.8692a74b.js",
    "revision": "3c5053e86292c979459efd4a04de870e"
  },
  {
    "url": "assets/js/79.dfc09c84.js",
    "revision": "2539136fd01d2d89070535191f2ec593"
  },
  {
    "url": "assets/js/8.4bc581a0.js",
    "revision": "0d450b806da63e04b5d4e224246b1728"
  },
  {
    "url": "assets/js/80.5e4a2336.js",
    "revision": "aa7bfca176252c5e8380c8b347f80590"
  },
  {
    "url": "assets/js/81.49847604.js",
    "revision": "da347a22e61e7528229c2284ee52347c"
  },
  {
    "url": "assets/js/82.a21adcdc.js",
    "revision": "9fe5524d78da394c13a1bdb719030912"
  },
  {
    "url": "assets/js/83.94dc0af4.js",
    "revision": "d43d17426f2318cc978793d41b84c74e"
  },
  {
    "url": "assets/js/84.f82032f5.js",
    "revision": "5fd5f04cb8eb1172cde1eccf9974a063"
  },
  {
    "url": "assets/js/85.2298019b.js",
    "revision": "d3980959d8cc1ec565aff50c3b019ecf"
  },
  {
    "url": "assets/js/86.4752f573.js",
    "revision": "fe48fab434a1758d603a270c504012ee"
  },
  {
    "url": "assets/js/87.e078a341.js",
    "revision": "c62669e4bd9390baf2b78e9f9b421d5b"
  },
  {
    "url": "assets/js/88.7954db62.js",
    "revision": "705e7f52eb05ea0abce6cd9d02c15e44"
  },
  {
    "url": "assets/js/89.4a52db43.js",
    "revision": "d45185b7fbe0815e566b0263a8437555"
  },
  {
    "url": "assets/js/9.2b3d4af9.js",
    "revision": "176a996f646e7ca54dea48474436b793"
  },
  {
    "url": "assets/js/90.963753d7.js",
    "revision": "8a8c65e246a5b0a5b93009a749e44104"
  },
  {
    "url": "assets/js/91.19a27eeb.js",
    "revision": "c80810e82a74cd7cbc4775916e51d413"
  },
  {
    "url": "assets/js/92.0526274c.js",
    "revision": "c62188a2d309ce10d72ae5a03c767406"
  },
  {
    "url": "assets/js/93.0a54d0bb.js",
    "revision": "b8dc19cbf8a4e81a3b0fe0c5d0324e2a"
  },
  {
    "url": "assets/js/94.e40330e7.js",
    "revision": "c605c6e4add03c86ddfe7fab1fdc320e"
  },
  {
    "url": "assets/js/95.b38f9dce.js",
    "revision": "a3d183c6991514e65b7284b8d5fc9c77"
  },
  {
    "url": "assets/js/96.156dc7f8.js",
    "revision": "76963571dede668a5daf9699cbfe9ef8"
  },
  {
    "url": "assets/js/97.0c0d82ac.js",
    "revision": "5a9c0631a279d2ce10e645a38db6d098"
  },
  {
    "url": "assets/js/98.600f58ee.js",
    "revision": "7cd77005007bd1d4817e26469568080d"
  },
  {
    "url": "assets/js/99.4164460d.js",
    "revision": "63e4843fc898374bf9c7c998a61f57a9"
  },
  {
    "url": "assets/js/app.60daca7a.js",
    "revision": "86125d1f5e6a1bcf4fd168c61affabfd"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "743b43a359dc2545a62a0c6b0624f2ae"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "148ba19e3990011209d77522f1426bb8"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "b0667fa53e45d2c52729fb6c44fccc36"
  },
  {
    "url": "tutorial/index.html",
    "revision": "54bd9d0ee776c6b8f3dbeeba09629cce"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "d530e2178cf9873ff9f13029990b0737"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "6939550a898b294f4b40cb809fdf09da"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "a03e8aadf4ceb076c788bbf4a154f35a"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "21d414bd06bc3d48972a1db95c0a897a"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "6d629c9355a046d11cd157206e0ae2f6"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "1b725e5a2481ccf8eba59f48267d2c77"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "21f184082423497e542b92c5d14f5848"
  },
  {
    "url": "zh/api/index.html",
    "revision": "eb01b309b241928dc1e59648bbb3caa2"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "fef35457295390a52bb598323cf6b079"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "f763bfe920a39f375451f182a122d3da"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "8f91c0ddd6fa7b65ee4a56c784ebc6af"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "772375b1892174e3a71b2ccc841785ec"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "b0581db264783c96d5dfec610ebe78a0"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "e90120d66900ee6f910274531fb4afc2"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "a50b242039b10b9a09055e10d73667b1"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "21b6cb03ab9a9224a6a0d0a1b6e61da1"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "d3ada5db0455c576a6f33c9dae884053"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "037933dd46d382ce57593d3e08f740e1"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "424f5703446126421f334e5c5fe3b43c"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "43e8d4e08bf7128bac7d95ae88ac855d"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "91161966e8d28407ebf033a976865190"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "003e8545d8149dfa09b70e3fcdec37a9"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "930ce79b55ce72c976698c568cf16d6a"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "f4044caee3a3cc50d866a16e9fa233ea"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "e437c7e9fae8af4d7cf13421847f3479"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "682dabdb32bb9fea24f68ddda2119aba"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "c0f416236f1e8d6e1b7a07151e651615"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "4dc76cf4f137000f8ac36eed783e3db8"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "11628b3e9d2e010944d21948a495b064"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "56e656fdf343dd6cc2ffceea92a1a36c"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "469e106ea055b55cf1d59b7f2612eead"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "48aa91401d7d7ef2ab837c8e1a45cc52"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "53110194a9f4de8845c7eba325e7e118"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "e08fa91b805d38f363d4fcebe0d696e2"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "d1deceea39a86ae82dbb545a184046c7"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "77e0eb1f1fb3f9c3748e757d32bca2c5"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "93fe9b942982ac89b8684edab8d57ac3"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "f953a5cc79e342450bb5851a6bc0c54b"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "9162bf4a1b267a55358ba0578ea76610"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "b0b0193d1f4d11b24a2fcff1b3d6331e"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "ea361b04c63ef1ed88e495076a6fd501"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "9baf6c68b06dba12088a7fc91fae4885"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "b3d02d55158462f85121c17c2e08b57e"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "8b945b5051e59daa0d33644ffd0edd79"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "2d91e5799c78bf4cb2a012e8520f344e"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "30eaba0fb41e604097220f86f878bbbb"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "27b33d357d6c47ead2d23fbba925e9aa"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "7ab694812deb8360001a85ff871bd16c"
  },
  {
    "url": "zh/index.html",
    "revision": "5071b0887524f20e6983b18ff4aa1753"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "449b86a3286d5e8a277501e7bbc7e277"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "5c2b0836bf65587e64d60cb6a981789c"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "407e5dd0cfc6f4d5e5d2dffb326337fe"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "92323a4f4d86257e337abfae92b34fc3"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "427ca0543ccc08a1b994e159ffc4ae60"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "c966655698bb63a8b69c886db41946ea"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "9b117956f46a7e90b2183f314bbf03fa"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "d4bb6d4ca165177d36f5342494d6539f"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "de9a9b94be2cb3ad9d727021f5aa4019"
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
