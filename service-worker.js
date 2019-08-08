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
    "revision": "674891555aacce721eba049b59c4ca86"
  },
  {
    "url": "api/index.html",
    "revision": "3b62122d05dd5f1998e7f9e826b737ff"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "da17663f3e7a0d0e70d78e4a9581a5e4"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "d3096ae8d2170a630d33b2813c17929a"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "bdb9bece50600ae2b68b2a11c6cd9197"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "20ebced7f0b16aa95754121e8588b6f3"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "37edd4d29ffef86f6deeb2d58b11d0cb"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "dd78fd34793813f4d168ca7ce2a8757f"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "79796ec96b9b65e481304da3a63e539a"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "3ab7daa252ccd4ddd8ace8994b676749"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "0cb514406e01e03f7ea1148103dcb822"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "0e04fdbb7a068e33a72199af2be7e777"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "369afaa1a4cc61c32c6917b4f8f30efb"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "0499517450e3ba05225cadf3aa6857dd"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "c4a62bc9eadffd6db6479f746220bb1a"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "fcea078fa088ec76ba51aefa803dbc18"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "117f5426320a931a002a9c0de13bf833"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "805b08e739c6c0e2fc6f77c2a2867b93"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "8a6cfff50432ad48e45acbea46ad88e1"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "31f9ed27d32ab3d4f16617915e5ffe18"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "8658117bacc94577e284fed66eeb040a"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "1c081a3400ea871eacd9a12265c776ab"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "ea73f7f59707dac17625d2a9dd1faa4d"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "4bda80b94df2728efcb9fd7652b98486"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "afa33c0925792a472d6e66ec0c33636c"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "1c6c19afe81212a03d9a2f192a54c7d3"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "f6b0dfbdfe08b9f372e1ff2e15028ca5"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "0215bfd25913105df1d2ed9d8c9be701"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "d7b89869b427eef7ff2ff45f121db358"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "b58836c69df44e90526a99f9fc12babd"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "0537bcdc2cadf73218a0ee9c12872698"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "8116d7ecd3f160ee569d223fa23c6c6e"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "3f11dc571ecdd00cf8247f872f8c5886"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "9198fd9f222a6d5860725a146e31b463"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "6caae9dc49e4fa8ca0c40c67a84e852e"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "1c6ecbaebbc0afadf83739cdcaf6451e"
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
    "url": "assets/js/33.dc058165.js",
    "revision": "3238079de93fa53b08bec8a43b49d39e"
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
    "url": "assets/js/52.794c16fd.js",
    "revision": "07a9a8c02299354e4548b8ce6e1a9cdc"
  },
  {
    "url": "assets/js/53.2a4b1387.js",
    "revision": "ca85ed4f7a481e86b863cb961c776c91"
  },
  {
    "url": "assets/js/54.c926b8c9.js",
    "revision": "1b4a5b42427faa943a20a8c4267a083c"
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
    "url": "assets/js/75.74eb23f4.js",
    "revision": "02bb89d8649b07704aab22644f2676c5"
  },
  {
    "url": "assets/js/76.11833957.js",
    "revision": "29b0a93f515230b759b8bb86e26eb128"
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
    "url": "assets/js/79.370d3d1c.js",
    "revision": "adf12ce3c4a14b79a2cf3a6ab37e6be9"
  },
  {
    "url": "assets/js/8.627943a0.js",
    "revision": "e119325f2cea6a26096392d3ac3d4940"
  },
  {
    "url": "assets/js/80.fbc3d641.js",
    "revision": "27df63d450764b3c7d34248276f568dc"
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
    "url": "assets/js/app.a3c0c61e.js",
    "revision": "1064cb3b976969be0d7c9baa3dd8b0f1"
  },
  {
    "url": "assets/js/vendors~notification.9cd526a7.js",
    "revision": "d9c1b7a8ffd9f052698da9aba493d2e1"
  },
  {
    "url": "i18n/index.html",
    "revision": "f89002fee4c2dbd6a9304c9fb1e644cd"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "754b9e4b73d4cf0b3c3e5d7ba1fbebc1"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "69de0f09dc11ec0a907e78287e9e3a88"
  },
  {
    "url": "tutorial/index.html",
    "revision": "1fb9386d36434919ac55e7acd8ec56bc"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "028f62e1a0a3d4ad1a4b42d6ea2ae2ab"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "0506b4d60b4dab1e16b4938787c37e21"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "6808054c4c11d525923d4b20fe950845"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "e54754ccedb6f849d819721769afac7f"
  },
  {
    "url": "zh/api/index.html",
    "revision": "744f231577b3d642f2a470af742fba4c"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "b9395e72608743b4e14bed65b4946d24"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "a45836c06f22a607fd6b0fea05e82d5b"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "8c5ff248f4732ea5fea65da1cac7e11c"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "f7445466b1e67207f2f323cc898b90dd"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "6ed1f75e4b78e8b26b96dc02ac210c4f"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "39c784f224d6544d1edef7c2c1b42dc1"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "094ce647a6591d2a760587c0bbf22efd"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "2852bc3cc198e9de8c58869ef5e23b2e"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "0b45aa2b1ffaf4d13c2fb94d641978b7"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "2bb41b0fd8322f03bea2b5efd14d57c3"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "f9284e3b055cb4bf3cb65eee24c92904"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "5838a7f49e6ab98868ad86b7cc47f427"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "b6eacaf207a4e785a86a38686beaa254"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "5e38b09738b8dd9f78091726f34a7802"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "c849fd4dda56610beda3faa7a1bb7109"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "7f16add1334eb9c311e447f4d1cd4eeb"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "9550590b585956e76eea7c0b2269d959"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "d91290f822b0942936190c28aab98b35"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "d7785fa023bbac1f66c48e970de47eae"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "fe3346e93b9dea7712c641b6f681573e"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "9820d024cd8252eede5b8315637ef391"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "0c72e63655506473cbf826a39e52f1cb"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "bdf1c69ec376e8716cb8e506b1a2d10d"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "4b24ae7929fdea49414113dadc378778"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "2c81be489e90feac9fe016f358a519bf"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "cf38b192d440f1aba400c0bdbc1d4eb6"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "32112767d14d5e6d8795358d43be9e3a"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "eaab28f3cc3d4a8c731ed98017d0d5f8"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "139547a3bc148112ad823988a4e1b42b"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "a5a27f0c1303a5d808b7fa33fbd182cf"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "24cc775b41e1ca9f2b654077f0315cf8"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "f4b558d0df5880c232181390b3d05406"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "2e3fe22193c1cd91605ccfa6ba4f0402"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "4e6c6c3c317fa71c05c3cd3f3a6e2b6e"
  },
  {
    "url": "zh/index.html",
    "revision": "239afcf775c15a718e483031f505e6dd"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "db8fc983fff7462fe83ab0ea07cc89a4"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "027248feade38b7d4555bb75543cfb63"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "1e9f1305b2abb880b4d6eb8038ff8c99"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "218a5b36171b80acc6ca43cfce526a8a"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "0daefdd61e933371d5504da4adfeb045"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "1b2a603c20927ca8dc4310d2ca141e41"
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
