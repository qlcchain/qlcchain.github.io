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
    "revision": "1ed2c8a5349788375fc40098b0a9c53a"
  },
  {
    "url": "api/index.html",
    "revision": "5a8f2c1316aef2927b352b85f31bbe33"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "8c84c4a9c315e2abf32cc62bcfb9eb30"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "fe6010feac639122d10fee7bfe3fa495"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "9897461e6514cb05143ef4cb00257072"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "8ec50e55561bc0677617e856c8ced256"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "2d3371b6b2a3d3bea8c18e9971309efc"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "8c26a33ffbefa6c594d2f911bdf58b91"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "57e8c7e3d34d7cb5ade662730181dc2c"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "beb8579db0191d22cc6582ea12cb921c"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "a9cd423de3ad1f1dfe7f46663f2b5fc9"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "f9c4cff05b09ded97e34a5ceabf9be20"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "a235ddbbacc355fbca1a3d03c1addc30"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "fe54c5ba3cde0d7fc62894ea4cd7dbf9"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "41684c3b432ded31b1fe5e6430ec57ad"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "a11d7513b1359c18a78267f84a283c67"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "20842f4ace6261c739586930beee419e"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "c8dd7354c5c696bdb90dd0f85eb5c54d"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "4cb8eaba95ab5029a17254895bfd2c9d"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "9e1c7102e3572e4d800b59f2b972baf4"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "016126b2296e8294d538aff8c694f003"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "c7272555e0f6aa581a03048762afcc48"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "54fa7b38bd11469a2dbe0b2ace94169d"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "8253f331aa67bc477f2c1b9ad9f0902a"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "a7be42ba3c588455362f1542ba081046"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "ec092cacc904000e9d689568728ae8ae"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "2175498454aad08cf9ff4b4d2ecf1ff0"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "b3e9e0e5fe4eaaf39b8648e2dcc565f5"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "6b75484e2e9cd9ca392ea56b2f74735d"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "a1d103653d59fc8a1a1424cd9dc83059"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "2a1f82b15ccf9ddc48f17b68bd4fdf3a"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "591bd290a32eced35fb059ccbf21360e"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "e7bd1b43df5ab04bb550dfc56cf79b54"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "9567e95fe7b34ca70357bbefb303654a"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "3a897179e9e0333b171cfdca9527dc96"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "391c00d6bb5bbca8bd59fd9c3aecea2b"
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
    "url": "assets/js/10.c7e782a0.js",
    "revision": "fdff12f8bb55bab875fd928439f6414b"
  },
  {
    "url": "assets/js/11.fe4c01f9.js",
    "revision": "22bd180fa8f23004a5ed2d91b886a6d2"
  },
  {
    "url": "assets/js/12.411a5c33.js",
    "revision": "8e98a3bda387c4cbc7ec866ada5358be"
  },
  {
    "url": "assets/js/13.3f0045f6.js",
    "revision": "20959ee10bd821ad0f76e6e52dd32e7e"
  },
  {
    "url": "assets/js/14.7b22f6a6.js",
    "revision": "1cbf80451e2b2505b2ed425d1d278e96"
  },
  {
    "url": "assets/js/15.2b7f62cb.js",
    "revision": "f3850c6bb5d3762e9d51d5848920edd6"
  },
  {
    "url": "assets/js/16.8f23686d.js",
    "revision": "7af020e2f54776e2779bea8c1597af75"
  },
  {
    "url": "assets/js/17.5371645e.js",
    "revision": "ce2992dab1add7b39954d0156c5697b5"
  },
  {
    "url": "assets/js/18.b64fff74.js",
    "revision": "294aeedef1635191779d15871fb2702e"
  },
  {
    "url": "assets/js/19.035f1ebb.js",
    "revision": "b8e1920a8f54a9483782e2ea60f17f0e"
  },
  {
    "url": "assets/js/20.cc706f01.js",
    "revision": "fd2743273965504676c414a419d21a26"
  },
  {
    "url": "assets/js/21.d1123e03.js",
    "revision": "fa4f9a149666e7687083a31514dcfb35"
  },
  {
    "url": "assets/js/22.dcf0ac33.js",
    "revision": "7cd50bfb743aa50944448072f8c82407"
  },
  {
    "url": "assets/js/23.5d8fdd05.js",
    "revision": "afb843684ec7c077fcfbf8fec900cd08"
  },
  {
    "url": "assets/js/24.469ef604.js",
    "revision": "ada148cd77668b3619f429c37607174b"
  },
  {
    "url": "assets/js/25.64329c5d.js",
    "revision": "08b57c8b63751aeffb8349ac37559f60"
  },
  {
    "url": "assets/js/26.558f9b51.js",
    "revision": "2e33dacf4e499b48a02e810ec0605f9f"
  },
  {
    "url": "assets/js/27.29e0f3a6.js",
    "revision": "0aba6bf7d2369a6e948c2290968c76fc"
  },
  {
    "url": "assets/js/28.5f35b684.js",
    "revision": "6c6b4dc530404f41bc2ee768e5ee3a66"
  },
  {
    "url": "assets/js/29.9024c38e.js",
    "revision": "311243b5f4c7e339b4f0ef130e497435"
  },
  {
    "url": "assets/js/3.56c11fb3.js",
    "revision": "b3dd74d7e3b22b7e17df5f4697476561"
  },
  {
    "url": "assets/js/30.0e02a681.js",
    "revision": "6dee7e8b6fefdbe215b258f72bf5ccc1"
  },
  {
    "url": "assets/js/31.57944459.js",
    "revision": "bec541576c6ae889e3831b285ee03234"
  },
  {
    "url": "assets/js/32.0ffc2392.js",
    "revision": "941fa7a56ce3563972fa48d6673853f2"
  },
  {
    "url": "assets/js/33.6d965eff.js",
    "revision": "138cc855c7f2496acfed7398c6356eb7"
  },
  {
    "url": "assets/js/34.fd9cd24e.js",
    "revision": "f357eea5d9f1fc491a5acfc840b6bb14"
  },
  {
    "url": "assets/js/35.1b68fcd8.js",
    "revision": "24cc1818985d19717efe4afb2c502cf2"
  },
  {
    "url": "assets/js/36.1f6d3c18.js",
    "revision": "ab78d439f23a5b3e87b50bbcdb1a545f"
  },
  {
    "url": "assets/js/37.7b2a6fce.js",
    "revision": "32d6e9532da6cb1c144bd28e77a47cdc"
  },
  {
    "url": "assets/js/38.6c55d40d.js",
    "revision": "60328d27363bf86edac40f42fa6b3009"
  },
  {
    "url": "assets/js/39.10a8dbbe.js",
    "revision": "cc1e61f94c343619734fd76d0ed13ee2"
  },
  {
    "url": "assets/js/4.affdda8a.js",
    "revision": "8719de55e1dbfe9086bb91152889cf1d"
  },
  {
    "url": "assets/js/40.2ce0ce78.js",
    "revision": "5128a6f1e304ce65e167b59143766cb7"
  },
  {
    "url": "assets/js/41.ab8bbdc7.js",
    "revision": "07c10b5ff94c4a7ff494030231a89ad9"
  },
  {
    "url": "assets/js/42.cb713125.js",
    "revision": "e8377f91374bdf8a1c1784b3a5d68504"
  },
  {
    "url": "assets/js/43.60ceb6a5.js",
    "revision": "59531d74509758a21cdfc874838e338a"
  },
  {
    "url": "assets/js/44.7c5705f4.js",
    "revision": "cdf88a9260041d92380636a6abf774a7"
  },
  {
    "url": "assets/js/45.7de8baf3.js",
    "revision": "123d12189317def41a768815448edd92"
  },
  {
    "url": "assets/js/46.db9fb9f5.js",
    "revision": "c0409326b84d6d9b32d0ea3d1e1e0f88"
  },
  {
    "url": "assets/js/47.02ffbc5f.js",
    "revision": "79e5dd23e3614f17666e3e5016e9dae7"
  },
  {
    "url": "assets/js/48.81d4df7e.js",
    "revision": "485ee16c79eff69cb3f07cebee671523"
  },
  {
    "url": "assets/js/49.5b4ce347.js",
    "revision": "9bfafbf58b165b97eaa3703accb34b02"
  },
  {
    "url": "assets/js/5.90c55488.js",
    "revision": "88f72468fc3c3cfd42ca256d2238a766"
  },
  {
    "url": "assets/js/50.5ff09a5d.js",
    "revision": "daf72e20cc7cbbfc743c98ed4995687e"
  },
  {
    "url": "assets/js/51.775a93a9.js",
    "revision": "39e480a40b305b9ca14d79eba532d7a1"
  },
  {
    "url": "assets/js/52.8616fd53.js",
    "revision": "6870bf542717fe7fa737ce8ff8a0db4f"
  },
  {
    "url": "assets/js/53.708598d5.js",
    "revision": "3e44bca7efd05cdf5287cf2a57499ac6"
  },
  {
    "url": "assets/js/54.31b49c22.js",
    "revision": "5229aa1e88947475550e5e49dbe4fe22"
  },
  {
    "url": "assets/js/55.419c0b2b.js",
    "revision": "e48f21575d07a049c5123159a144d567"
  },
  {
    "url": "assets/js/56.e782b189.js",
    "revision": "3c7ec12919a1a6007e481883a397b129"
  },
  {
    "url": "assets/js/57.78ce462a.js",
    "revision": "fa3d6c9a762f329b2c47fc0d7b4f696e"
  },
  {
    "url": "assets/js/58.df16ec95.js",
    "revision": "13d28a2079ba4f9302d16de4ccc56ec5"
  },
  {
    "url": "assets/js/59.d73b6ac3.js",
    "revision": "6ade0b531f94237296385508abb2a5ce"
  },
  {
    "url": "assets/js/6.ea422aa1.js",
    "revision": "f943b09b0af7460fbbbbd132f6def90f"
  },
  {
    "url": "assets/js/60.664b0603.js",
    "revision": "686e2af8de05d018e4fd582a37bcc81a"
  },
  {
    "url": "assets/js/61.a3c3e99d.js",
    "revision": "8ef3e7846823a2e80a013f13605a22de"
  },
  {
    "url": "assets/js/62.36c588ea.js",
    "revision": "f0edbbb9a241bdd96a9d64d0d6717870"
  },
  {
    "url": "assets/js/63.7669b2dc.js",
    "revision": "5b143ae85842211cf513b7c422992c06"
  },
  {
    "url": "assets/js/64.4b20b4bb.js",
    "revision": "4163283237aa4772c305df31da64af4c"
  },
  {
    "url": "assets/js/65.f52041c9.js",
    "revision": "d1eb7b17d4826a5f0b823b306e187337"
  },
  {
    "url": "assets/js/66.94244050.js",
    "revision": "ab6026200da56f16ecdb97a42f5306fc"
  },
  {
    "url": "assets/js/67.878e1027.js",
    "revision": "6b113487808cd05cc15ce398354c0434"
  },
  {
    "url": "assets/js/68.224a9014.js",
    "revision": "02d1eebee40af504f78c45bfed89efa8"
  },
  {
    "url": "assets/js/69.ac84e941.js",
    "revision": "272e06b4c9110aa4dac13a2fcfedb44c"
  },
  {
    "url": "assets/js/7.edf376e5.js",
    "revision": "8fe5bbc01f449711f1a3affe6d72b8ef"
  },
  {
    "url": "assets/js/70.b849cbbd.js",
    "revision": "d353d6c77325b15b027ac90ebf0f8454"
  },
  {
    "url": "assets/js/71.48a2a705.js",
    "revision": "e01a7ac0c409f19a9e89a46efb542a2e"
  },
  {
    "url": "assets/js/72.449b80bb.js",
    "revision": "f6df0bff94facf58ca58766ca5f5e85e"
  },
  {
    "url": "assets/js/73.dc1a1746.js",
    "revision": "1784af651fba54633e216ce9a3bf53c8"
  },
  {
    "url": "assets/js/74.799aae6c.js",
    "revision": "fdd33cce9ecc5e8dcea46d46ce893d20"
  },
  {
    "url": "assets/js/75.a3b49693.js",
    "revision": "7e88f37698a44373381574b0c05ef67d"
  },
  {
    "url": "assets/js/76.39c37402.js",
    "revision": "32b68c501a2f85d01b1bd18165501632"
  },
  {
    "url": "assets/js/77.bdd5cdfb.js",
    "revision": "d2b99d459a6e9917d203e38a00b181ea"
  },
  {
    "url": "assets/js/78.d6353df1.js",
    "revision": "ebfb8146ff366f688fc316b81f220a33"
  },
  {
    "url": "assets/js/79.f2818120.js",
    "revision": "0200a74b8f193c36bdf855a941f004a3"
  },
  {
    "url": "assets/js/8.627943a0.js",
    "revision": "e119325f2cea6a26096392d3ac3d4940"
  },
  {
    "url": "assets/js/80.4821365c.js",
    "revision": "1f99ba0a12cd88645ec9c1113ac8c7a8"
  },
  {
    "url": "assets/js/81.d07527e8.js",
    "revision": "8a675b30622a65b8b2a54b876aa54b97"
  },
  {
    "url": "assets/js/82.51d74874.js",
    "revision": "1545662de015e751f355bb983d076c20"
  },
  {
    "url": "assets/js/83.703e525d.js",
    "revision": "5296d9e63ef1511af46487be8338cc62"
  },
  {
    "url": "assets/js/84.0f6917f1.js",
    "revision": "bca336d1f926fd9119b7e1af3de3abcd"
  },
  {
    "url": "assets/js/85.5fb91d3d.js",
    "revision": "e66ef1936ad1f133c409fd474f3ef0e8"
  },
  {
    "url": "assets/js/86.13b9f45d.js",
    "revision": "ef7069cbc3f8a7ccae15c748e196071d"
  },
  {
    "url": "assets/js/87.fe7f2e1b.js",
    "revision": "452f53a66e315357cdabbfc145b4c7c9"
  },
  {
    "url": "assets/js/88.703d99c7.js",
    "revision": "76681e3c7fe5a3362e351ffae3f62b62"
  },
  {
    "url": "assets/js/89.1b38785c.js",
    "revision": "130c20c9fab86d6f6ac9a435e539be4f"
  },
  {
    "url": "assets/js/9.5dff3661.js",
    "revision": "7d1e2d082f3f822484a209e12bce4715"
  },
  {
    "url": "assets/js/90.185af45d.js",
    "revision": "b8dab2d342531b9ba7c0394a96f041b1"
  },
  {
    "url": "assets/js/91.72ae30e3.js",
    "revision": "05eb967260703ae5e60be74d115a8c39"
  },
  {
    "url": "assets/js/app.4ddbcccb.js",
    "revision": "e65fd0e90334621113b70abdfddc3ba7"
  },
  {
    "url": "assets/js/vendors~notification.9cd526a7.js",
    "revision": "d9c1b7a8ffd9f052698da9aba493d2e1"
  },
  {
    "url": "i18n/index.html",
    "revision": "c75e1fdb83684758a72ec4911b9a0568"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "96497dab59856cafe3da8f123e2791aa"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "c4ecf7b61ce35b9578e84e6986ba02d1"
  },
  {
    "url": "tutorial/index.html",
    "revision": "f4bfce201d26339618dba4ef94940436"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "6e3d4b624ef24c6e55aea0887b188e5f"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "3a28189aaaad8349a5c6811c419c6cb6"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "2b4ba824c510734b28d539cd559adaca"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "d3025f90e07b4cbe118d63b2e7dc8720"
  },
  {
    "url": "zh/api/index.html",
    "revision": "580ce9bcb033f584bb0cec8ec4d48f5b"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "6df39363e32e48365386209f8813df38"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "4bd8108eec1125277214cfbca96f71a7"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "5f7f28ab3270da4126cfa5d2d6532c75"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "84eb3649e1b6820549376b090e896fc5"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "9c2a42d7fe23befb8c42cb2df60e10d1"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "a16093475f8faea538624a3f94b79ba7"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "dd52871b795c6db7c97bbd2d0c617302"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "1e5730c7f282f799a4b0c10250f2b684"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "869218581f168cf09a0c253f023b91c1"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "5666d8648da74ed60a9884398d78db29"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "432dc91e4418ebea32a2c148a8b816f2"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "f1e82d0c942203340a1ed57fb4fff2fe"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "a416e67b6b5df1b45fcdc8f402af87b6"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "224eb50fe0db0f27de86c6ec6ca16b02"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "135aa513b871ab5216086d0a51e922a6"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "5d506a432f3ecff4cb143be23dad073a"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "1b86d9cc2f982df5223d90683b57a902"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "5a445534cbb5ab03b88b13b9ec639e5b"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "3930dacf366488b9d6929398632ae96e"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "f55eab931da771ceb83c7f120eef58de"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "97f8ad0f30c8cde8fadeb40cab40e594"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "de4d12015ab9d636d26c5b3c05e91cf8"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "e5e3b1e7027343b257bdfe41170ae52d"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "86b374fbf8d861e5025c215c6d862cfc"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "cbec21d08fe6e03efe1c0d9178daea6d"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "48b6714f7a0f554a80af0b0d7a684465"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "bdb4fa0a49aa7415445e1969a0a69665"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "4bb1b857edc44d2ef24b656b957ed44f"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "2b13d6887fce7170da30b8bc79e9fcca"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "1a28bf1ef83da93d3df4a79cf74a5659"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "a985d0331687862f0378d63949152e3e"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "302468f6375461f5137693601dc81032"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "9d2db7b77aada118a0dbb6f833d11f8e"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "87ba36e4bef314456f8b65dff05f6ca1"
  },
  {
    "url": "zh/index.html",
    "revision": "29174e78210db88d007ca174ffcd3c1f"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "2525dfedee97478aa703b22e430e24f8"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "fb967a2675f37913a03cd55508796bf1"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "c8b945fd4b8236eacb07b726b7e36d6e"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "dd55823ed86da2726e0969efd871b3c1"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "a9e6f5d72dfea1d40810e58ef6f9e9d9"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "4eddbfbad8ed2203b5d2795e4ba45e22"
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
