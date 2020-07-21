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
    "revision": "0d856fa67fa20fa33ddc7bf8d8629c2e"
  },
  {
    "url": "api/index.html",
    "revision": "dc09c1bb19e82a2c903942d72873c489"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "24f1734e467f2752e8c08ed263cd9c52"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "80197556354742741196cf4bec08073e"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "e515e8cf2788ac2df7a004a8daecff30"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "f1baaee3c9d4a1e6d17f220f164b64ef"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "e7f54dd629652b71991238a83078e0c8"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "d2927ac09853385c39a1f8f8f74eb218"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "7d9597f25e32b54a51ae75ce6a3f5dea"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "1676fcc75a0b13d44b8e5dafb5db169b"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "a8df48d052366dafd12baf1f13e65557"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "99dd4452d366dddcf343e9855e5229c2"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "7f19ecf14faba28d4981dafdfdb5d0fd"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "bd1273a36fa70ce4cf9d2a2fc5e7728f"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "f8a9eb865eff9bb10c0fca6d87db7a9e"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "e974704898775302523865a0e33a41ca"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "363eea7baa1788f20e2651baec784369"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "eaf1156974fd38459358cbea1e90fd9e"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "da6e23226f6712dbdb0fc3cdd20512c1"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "ca849df6e2e458a5902ba3ea5accacaf"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "721f145036d384203e73f8b50db0849e"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "9d24a010e36d5e5f782ea64f667e6e2b"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "220fa91bbeb3c468efb2cb0d1abe9771"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "081a9130dac3ae6be051e26dbd0d26eb"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "3b52015dafbcff3c0a754cf26f8d3b73"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "37d2a4c1ccb159f8d6b5f874b94d2916"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "2432da0725cf31316c16a7b00429eaba"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "40bd78485f8b01d8526327721436e3ca"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "6cccd8693d0068faaeb9c7cefaae854b"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "495c9372c8f0146ea2630bfe5580d2db"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "77a3915887b0e623c2d43d93555f85cf"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "2ac8c0d2a8219fd14dc50faffbe648aa"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "89ed3b906491f3dfa46229429680a016"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "6b2b93c439a1c34c7ef65fab14e9bf76"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "1a86ab737038cf88f909502bf14ed4f3"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "4105df55d1be563ae06217ed571ed92d"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "190b0ffeeadd37920007688a5c8088bc"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "47acbcd52349af17c852ce0193067b2f"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "acb2f8dba81bd2a7c16d16b82ea78ceb"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "d6e59c230a7b0940c1d90a2d9cdbf95a"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "2f7bbc897c7585176363809217f3c030"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "ffbac68a368f4c6ff31289485158581c"
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
    "url": "assets/js/100.87bdd6dd.js",
    "revision": "b4f3e09f7af433472dc26def920c5e50"
  },
  {
    "url": "assets/js/101.1e828602.js",
    "revision": "1ff1e5ebd07a0f567f843dd0d7cc8c77"
  },
  {
    "url": "assets/js/102.9b64030c.js",
    "revision": "b692babd4d60d2642b97fab12f8e0a1f"
  },
  {
    "url": "assets/js/103.225804a5.js",
    "revision": "506643c29b9b8b10ae1351bbf97c64f2"
  },
  {
    "url": "assets/js/104.daf9de0a.js",
    "revision": "648907388d8c42210a99d8688b7625c6"
  },
  {
    "url": "assets/js/105.9b1ba009.js",
    "revision": "439db79f86fde9157ee436200d0aab45"
  },
  {
    "url": "assets/js/106.54a6e33d.js",
    "revision": "2060f2814d32f62e6c9fb7583575d368"
  },
  {
    "url": "assets/js/107.88c833e3.js",
    "revision": "4d70b8da7966f0aea600cd41c23e3adc"
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
    "url": "assets/js/46.e28253f0.js",
    "revision": "6628eb09c9bd108bc4a19d2ce52e0242"
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
    "url": "assets/js/8.e02be43b.js",
    "revision": "82397646c3ac7592743781abd76d9070"
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
    "url": "assets/js/9.325631ef.js",
    "revision": "0affac7db040688153566d646c623c30"
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
    "url": "assets/js/97.589d4743.js",
    "revision": "af42a6c06a76e24e0b8604942d860499"
  },
  {
    "url": "assets/js/98.600f58ee.js",
    "revision": "7cd77005007bd1d4817e26469568080d"
  },
  {
    "url": "assets/js/99.90ff682a.js",
    "revision": "4a1abb51483397db5cb92997f2f105c9"
  },
  {
    "url": "assets/js/app.d2861253.js",
    "revision": "a1911d14d6a25115b7fa8c2933b89b66"
  },
  {
    "url": "assets/js/vendors~notification.2565c026.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "i18n/index.html",
    "revision": "a659cef1404ba6f656ba30e1b0f00e5c"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "dfe03c8cf01b5af3880959a9a7f9f074"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "98464099a6c55b77743b3ddd23b630ef"
  },
  {
    "url": "tutorial/index.html",
    "revision": "4b886634669e7846193a3876ec7aaa4b"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "e09abb1474b6f3f0b07a9d5d17306f8b"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "ed40e3cdafb475665c974d788463f491"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "6f6c6fa14f1eb5e324e2fc42bda73a36"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "cd719895d8b91ba80394ddd249bf813a"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "e655ff04bfd3782a37a439b82b4e9c63"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "6ce8b2b6af8e98c447ff596af1bf2fed"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "5d253e9202cf077ae915efa61c58534e"
  },
  {
    "url": "zh/api/index.html",
    "revision": "daea02e9968148968ccf38f792aad948"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "8d62b2b9e725fe752da8719c0c2e1908"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "6637ee30c160529a56e85010b790f2d6"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "c4540cedd55a7d1556d91dfe466f7725"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "8945e62fbd575302373c369113f3b42e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "848e8fe88a9d484b14877c9d1a480e5e"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "2f63650da027c7907d83253ba43501a3"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "e7a553d10a0718c132387df2c6b759d7"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "0ee6b91644b9aa5be491ca2b1eaf3c73"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "c43784c0c94ad9acd56f698bdbeebeb5"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "4eac338b895ddb1da47671f25905e1e4"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "4b03d4d6fcf18d278e87e4f173ff81d7"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "c2cf0b6eced5f738db97d192b5906d2d"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "482961e02d1cc9e1814bcc91a34e1704"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "cc2b34e5bc27d1224cde8f19a5083596"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "76d2d2fdc7ded695107337fb5f24cd4d"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "a22245031ad85b7fc599d70c63e622c5"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "0babf7a8d0566f1e3f7c37d7cc370dda"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "7f51e5fd52e7d233acb7d7332f87d46f"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "97a5f8ed2569f82e1f8c3275933d69f5"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "c1c3c50dfe4fc525facaf69c9abb731d"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "6fa91ffed13535c90cf51b44b289503d"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "7f0729b8306b0c0f2004dee5e1b634e0"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "d1ec149499dbbf9507cc737c31d53409"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "b56b5745407b3fabeb128a2c37ce07ff"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "15283361b1086b2adedca5bf0a792f19"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "428c6b8ef25b6f3252e834666e61c5cc"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "2b44f32f895648fdb1f133877710a9aa"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "5557abaa45ba59b88c65eebce26faa00"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "34fae888a6b90c88460578255a9568cf"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "448aadd7ac8c9460ef13cf270fde2d28"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "cf4aaefde0e84c779cbd6430975c5a33"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "dd5d29d9744fb50a9d08fb21e265493a"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "7e4674b33f2c0756147c7ff6bcb2b8ba"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "d5cb8c21bce54b7470db4bf841fcd9ae"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "97f483b09ae6fd86d4b9a1821aa160c8"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "d6f8c4fe241d28c870a6abaaf3e94854"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "15d17e88203b42feba079f9f5b72dfde"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "9137d3b2ebe91a3edd49e3339fdf7af9"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "06caa630cf197a60622673f5165009d4"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "64ddba480445f7b0830156bd81734fb0"
  },
  {
    "url": "zh/index.html",
    "revision": "597d9db4c19ba30774be44e50fdb54f3"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "d6f233dd4a166234459b7adc3aba3e7b"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "be928bfec6be6bd2a459a7a4071f102b"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "c05cdf5208db1c99086bce9d6bcf0f63"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "b3f8be473a94ee1aaea3257992a3576d"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "71d444da5d3e64cc23064a34d2a4ac74"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "170271c09c6f1337e3f3c6202ecadcdb"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "4a8ac11327a8de0df7f090235f2cddb1"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "19459f92ccb14a1ca18348f5b5592216"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "0620c83ad7963b51254e4f411ee3d3f4"
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
