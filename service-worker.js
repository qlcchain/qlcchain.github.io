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
    "revision": "5ea193029927df34e488ea3b5deeff9b"
  },
  {
    "url": "api/index.html",
    "revision": "49c8d77bec16749eba9549e6f2f1fa71"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "546d1a3caa299f61b318111ffd88f709"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "baf190cc01e4cecc331e81b0beb53f49"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "c524b610f96decf8edcf9c4e2e2e4457"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "35618c931c2288461a6dd7f97ea9310e"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "445949c6f46082fff1a8b5f7bd4aafd1"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "49f12bde8521c229d3e770b2daf5c846"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "3f9686b0cfb24d43a6a08efafea6333d"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "40f601299c0853ecd056b5a61c276827"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "02f8bc23f17b4ffbd1e8686f5a744c11"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "0f60bc5fd1cc0c20e908b0c0fcb92218"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "45d50890bf783206e07392bd29e5854b"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "dcc41e9087fe31b270d0de11d6cbb254"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "c2555024db43cd0a878a177ba94a334b"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "9f9b01471feca9f9e118500b4be1d79d"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "cb401694fd4ca90aee2fa679ecedc8b9"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "7fcf54a9765c3ed699271a682cda3d97"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "d99adbb2bac49efefa050089a666ee62"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "366cb5dc25e166d480ed35112a25a467"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "175335a4bf583c1476414fdd13afbb85"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "61379039dd99af7fc97ac2d3452497fc"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "e357629fe4b27934f0116034e793032c"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "58149f8d44cbacef0ee99ba31f32ea3d"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "12affc4371a1c582ccf5f8bd0bb169b3"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "dbbea7ac29eea17dc31def12c34e7425"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "6ddc85b67ce7063469e96f83d974f7b3"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "97ef0317c96434311a24f38396bce060"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "9305e8dfa2b4fc83a39873b15dbea4d9"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "00fc122298d97ee4d4f5f662d94872b6"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "5ee51b40037bb18c3500c7a09d12973b"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "58ccd63e306bd1b7225366684ab32b92"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "b1301b5e9b665889d92c491c87982d0b"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "14a9a94b5d53206635f7c831c8a3a062"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "5d9a2bcfbefce83e44aab1aa973b606a"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "04c7b4245e9d0c9197606db601e8dffa"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "58053ebfe3158e918f60c3ecd48049b0"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "8468131ebe139586041b4759c5cc9f5a"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "7bbea0b6d04b912124142bf22ab9049a"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "41b92ae56d703931a43f97cec5ad4aca"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "3d36f2ac47ba5fb32d36c32ea7be8484"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "e88a0490117a20a24cb14e91103a2a27"
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
    "url": "assets/js/27.8d75ca21.js",
    "revision": "cb8f96ede4e9c1435aa4905e47fa146a"
  },
  {
    "url": "assets/js/28.016102c2.js",
    "revision": "70efd8ae0815399ca97b22c6345f6ebb"
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
    "url": "assets/js/34.ae291041.js",
    "revision": "a589a3a6b82771d788a24b24881c7b9d"
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
    "url": "assets/js/87.c5bcd5f9.js",
    "revision": "20218acf6ea501245050f0e955ff4baf"
  },
  {
    "url": "assets/js/88.695c8cc2.js",
    "revision": "66dbc7248235153f4b035c87791b5f29"
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
    "url": "assets/js/app.b8e550a5.js",
    "revision": "f1baef1026f97cba1ed89b523eff9940"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "bccefeeac36b0cef33ede464a1e2421f"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "0510ab1c04b34dded09bebcbbc2dafa7"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "1758ca248171c546e5a3fc81be6726bc"
  },
  {
    "url": "tutorial/index.html",
    "revision": "ada7799f61e085f511c2b210fbfcda64"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "db31c5543513b8252edecb78e5dbd374"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "83ca6d7305d0154379ab2269f8390fdd"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "4bccda3787a012a59ee062331bb5e398"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "be40c8a5ebc3070b9b779b14c913fa20"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "2f38b65610247a7be80123566d8c1b7a"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "625272f61618f3563c9e08dce03db278"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "913ff7ba5b5c43c01fcb94e30fb1f415"
  },
  {
    "url": "zh/api/index.html",
    "revision": "89deed2274ab79f0bc83644bfa950d80"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "82055e818f7e9b80c0b31ce741d6ff25"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "cc29c90ab97aaee5b86b8fb3bb786fb6"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "0ba87b736d4476cbe9309ed0c34fbb45"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "aedab87ffbd48c79dad7ab2d913942aa"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "5e63eba91fb01220acaa9fe7ec132880"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "b895c1b56e19ab328a6a3e9b687b2711"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "c3ba501432457f11f29cddf0abc76b6e"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "8d6a786eaaa55d4ed85e62101c6f49ca"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "54c1be5985c4dbf2e5fd6e06c6d854de"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "915cf86dd3ed17867ecb10340cc595eb"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "2e1b7362bbdcd72c80a2f66dc647a82f"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "bb236323411777a4896ddb2b928520d3"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "171d4ba8c8ac59ce55294ceedebb2784"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "492a0fb9351268d45f46d06c3c0a71a0"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "160a1d2e4665bed0690a96f2407af581"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "ba5e31e4d6f90b39ba656901504bfc49"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "7a2423245466ab5288aa78c7d94f4b40"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "cb06a3e7ffebe4bc4fd3e595e6da4cfe"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "48db3b0368c408f8794c9862647aa5c9"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "7b611173dd0b9ac7afbfe235f113ad7b"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "0b91f8f02eb16f922fb36aa7ac0c6b1b"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "635063e397cd27f79929d4a7749179d3"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "d8e2a89cacaf8c3496d2fa88c562e3c0"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "f3320f203164d5877a1adec7cd42c999"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "5b8802f927345da0adc709fd9dd45bd8"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "bb654c6ae468bc11e6113987884a89fe"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "463033807ea32a05d30ae84627d7a0d0"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "5e6bf7a80eb2197507c4dae9270bcad9"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "15c748c77c97f276bff323c3335109ab"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "7ed322f1a68235304449d5cc4afc6b65"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "ab5aeb5b8e325e39ca907e01b8c269ff"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "8ff9423558f9e8618fa170e1fc1bba1a"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "4b5af805345187d1302bccb05c69373d"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "76205b6646b6a16c8e82e095774e42da"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "8ab9237dabd55bbf08dacda1deabce52"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "e4e51f6a6ff0355232ba1f4a898774b3"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "7b8fe9d1ea783f93611b55ec6de73cfa"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "318fe514b76402008013bb18327b08ca"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "10efb63cedcf387e1d62da683c8563f9"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "65847eb433228b6d1e2105f491ff8d6f"
  },
  {
    "url": "zh/index.html",
    "revision": "87cca656f7abe3131f0e47df8df54042"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "e1f950838e1d1a4893c7604e98dd64ca"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "2adfe96ed19076829efddf510f127578"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "810f2421700922d02e332682d3f9628e"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "9b100850d533fd931b58332b078e2c0a"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "eeb44d5ad02c9312cfbe420925adc3a8"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "b1c85794834e460aa9f7c41c85ec2da2"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "0f5f253fe5d702c29482e2aa29535b41"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "a31bcd4d95c00ebda8307b1af6180d6a"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "e7c38b9b619a9aa12158e61360113ce9"
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
