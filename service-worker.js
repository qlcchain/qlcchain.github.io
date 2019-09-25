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
    "revision": "75d5b10a3c9d4362a705d9e7e99fa07a"
  },
  {
    "url": "api/index.html",
    "revision": "4d9110d44c21df50f10547bcde20b5b4"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "0217689af7c9e574cff3f9d6eee88451"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "4f424a51971badf88f4929c58281ab95"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "b3a65cd4a81fd0c3242638addfd56f1b"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "15af4a03de2c8f430be7882ec458e8f0"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "90fa3a0aa57cfa440468f7d21958a1d8"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "9615daada108da9b38cda15d0c89b7f3"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "e907facdb931b13bb67791a59d969134"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "6f233b16f4387293993f9d86995a739a"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "5e2be3dbbccc8f0a1c1e3d120df3c41a"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "b5d3dacff0fd49b72265ea5153c74576"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "1d5bc20479e92de133be30c545d1088e"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "4c5408235cb42c8fc046321130c23e2c"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "325d179feed1d977dbbf23dbec9bad24"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "4ef349a338eb72b4bad06e7f2d789948"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "93d78f12a1269556b3311a4ee2260d34"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "d4aa4697effdff0fee03a4701a202e5b"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "1106a0f5d4f2b3926f9e0fa7d7342efc"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "279b05c46cf25a673274cc083a43462a"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "38a03bdbe554b7454917bde6df946bf9"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "7d9c0efe7bd2c250a9cee946b74421f8"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "fe653ae0f5278afc7c4e56273e606844"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "96bee25e70b0c573ef9ca0890104b588"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "e63662ae1f9682dfd86076bcbbcbeaed"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "486ca6329dc0c1834bc2d375256ca286"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "f6444910a045466d67c32b0207097746"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "c78a97aa3e1c6d2de82e982e32bf3610"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "8331479e8396801f9e04f23d6bc2dda0"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "5e64b296f10e623cb0084603833cb200"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "2452e725a2772c5d04ebfde2df4199f7"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "7059e2c1d189f6dc17ce0aea393da57a"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "ee19905599ef4933f41752ef78073320"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "b2134b46dac0957c79f6ddc583c2762d"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "081779c21b23e740bd60269b57463654"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "46e4e13326bae3518e35fc68a7ce445f"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "4f3525640470e43e6b036095a884f678"
  },
  {
    "url": "assets/css/0.styles.2398a5f5.css",
    "revision": "8b90881c8be9215c430c1373440eafd6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d08c447c.js",
    "revision": "9c8145b7a096d975e3defd223fd5657c"
  },
  {
    "url": "assets/js/11.fe3123ac.js",
    "revision": "7836ba4285cb3a41d0cb01e2f4309a15"
  },
  {
    "url": "assets/js/12.10207cb5.js",
    "revision": "707ee50ce625ac03dc43fc764f00fe7e"
  },
  {
    "url": "assets/js/13.6077e4ab.js",
    "revision": "cd284acee16d0a123c29200777ee36d6"
  },
  {
    "url": "assets/js/14.9d147d04.js",
    "revision": "01129d49ec11bf5da6e1d14a7699c512"
  },
  {
    "url": "assets/js/15.6251dd0d.js",
    "revision": "89e4d505430d176da0ffd526f84d4bd0"
  },
  {
    "url": "assets/js/16.7ceefc9b.js",
    "revision": "e84a13d6556c69a491405d89af2f3734"
  },
  {
    "url": "assets/js/17.3d7a7328.js",
    "revision": "7f867ed9c0307ba0c0d28365b34ff927"
  },
  {
    "url": "assets/js/18.ef923099.js",
    "revision": "c9df09ad27a0b8d10549534440e13775"
  },
  {
    "url": "assets/js/19.023eb405.js",
    "revision": "fdb2e6fedaaf2d9febcc26e21c664125"
  },
  {
    "url": "assets/js/20.f9cc9540.js",
    "revision": "2bfc39ed4c35cbed8b8442c582ed8fdd"
  },
  {
    "url": "assets/js/21.b2a1e551.js",
    "revision": "4fc49cf2cecc01afde0a7e1c3af5a7cd"
  },
  {
    "url": "assets/js/22.fedbed34.js",
    "revision": "ea80bba359dc90936a779e7ee4e2dead"
  },
  {
    "url": "assets/js/23.557f2f6b.js",
    "revision": "fc04185dee92ace47cfa55e0a2b86195"
  },
  {
    "url": "assets/js/24.42b6e138.js",
    "revision": "87a379665c048a9ebf59f95998cee24f"
  },
  {
    "url": "assets/js/25.61ddc038.js",
    "revision": "548857b00e24be2a3695f6f06fd0cfc0"
  },
  {
    "url": "assets/js/26.28c1ddc9.js",
    "revision": "e694f316c2da381b1fec23f2323c736c"
  },
  {
    "url": "assets/js/27.a8a61a18.js",
    "revision": "d348dc053a2ff182cea6bb87814d75e4"
  },
  {
    "url": "assets/js/28.42aaa600.js",
    "revision": "0ce1a4a8446e16f22a2ae88194947894"
  },
  {
    "url": "assets/js/29.4ea43850.js",
    "revision": "3a1b8e54be65b33cbe56e383a539f260"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "5b74fa33b0c6c00f486a7b54464d482d"
  },
  {
    "url": "assets/js/30.5e96cf58.js",
    "revision": "db1982ca2bf0f0b82cc70984542c66f3"
  },
  {
    "url": "assets/js/31.4e0519aa.js",
    "revision": "4ed239980dca11564334c284d6f5d5ce"
  },
  {
    "url": "assets/js/32.723cfb48.js",
    "revision": "9abcd0ae2cf7a746e25397a07ee3df9f"
  },
  {
    "url": "assets/js/33.32879e20.js",
    "revision": "525b646b63ba4fab5c26527b0ba0bf6b"
  },
  {
    "url": "assets/js/34.482ea63b.js",
    "revision": "4de1c76e27d3acaca137d884e4c89ca4"
  },
  {
    "url": "assets/js/35.b512f6a6.js",
    "revision": "ce51d72d5e28748b56408c74cbef96b1"
  },
  {
    "url": "assets/js/36.34a149e7.js",
    "revision": "e90ed241235be2369e653086caba5b38"
  },
  {
    "url": "assets/js/37.6dfdb1fc.js",
    "revision": "63e68d532c3793af91a07216e0846e73"
  },
  {
    "url": "assets/js/38.86d04419.js",
    "revision": "e89f3c309ff0f66f41f36633bc174501"
  },
  {
    "url": "assets/js/39.32cf5498.js",
    "revision": "d1c16e0030140606811e186da74c499f"
  },
  {
    "url": "assets/js/4.4ac4e7a7.js",
    "revision": "e8a86572743e99ba91a7b6f8497e22ff"
  },
  {
    "url": "assets/js/40.47794315.js",
    "revision": "6287ed8d7693ccc9f1465c88a3c8e371"
  },
  {
    "url": "assets/js/41.99c82afd.js",
    "revision": "6663e4964de7e1644edd558ce5cc9a1b"
  },
  {
    "url": "assets/js/42.77ed8b45.js",
    "revision": "d1fadab2c89a109286229304d308d2e4"
  },
  {
    "url": "assets/js/43.a66586b2.js",
    "revision": "78de078220d0a66c024c9a773ed92251"
  },
  {
    "url": "assets/js/44.aff79e95.js",
    "revision": "2a1ef03243586bd58353594e03235cdc"
  },
  {
    "url": "assets/js/45.060975e5.js",
    "revision": "4d6acac7eeda73ddba85f51403c74628"
  },
  {
    "url": "assets/js/46.1f2b1451.js",
    "revision": "9711eac4ca22a94fa8d632b67b322af6"
  },
  {
    "url": "assets/js/47.a184bba3.js",
    "revision": "e1fae246e2877bfe604e8177d625914a"
  },
  {
    "url": "assets/js/48.326abea8.js",
    "revision": "21813aea210a3c47bec0187166ac9af8"
  },
  {
    "url": "assets/js/49.9032442f.js",
    "revision": "6c03236e1381f19d9ac3e94b3d32cc54"
  },
  {
    "url": "assets/js/5.83763220.js",
    "revision": "f4cad0f859831c0a9993f88f70fc5445"
  },
  {
    "url": "assets/js/50.a5a6af47.js",
    "revision": "2ff05c17bb348e0f189e6f78b3b52db5"
  },
  {
    "url": "assets/js/51.aac20287.js",
    "revision": "0e44e14af184a435a26a93639074a062"
  },
  {
    "url": "assets/js/52.9c799025.js",
    "revision": "587818a69bfc184bd7fd5b89061a9df9"
  },
  {
    "url": "assets/js/53.f34277dc.js",
    "revision": "d36d1a725c1242e82f2f2a362acffd22"
  },
  {
    "url": "assets/js/54.69315c0d.js",
    "revision": "d618614edcbb652dc401cafcc3e68e29"
  },
  {
    "url": "assets/js/55.94d9df33.js",
    "revision": "211c30724ca0ff31a33299b0b87a9b47"
  },
  {
    "url": "assets/js/56.3baf002f.js",
    "revision": "329437d6a0aa79f27d97be9b2c72580c"
  },
  {
    "url": "assets/js/57.de3bdaf9.js",
    "revision": "851d5b2c12dd1859345126d520f0cd8e"
  },
  {
    "url": "assets/js/58.ad7c3183.js",
    "revision": "5d424ef0820eac2231e9e39019137ba7"
  },
  {
    "url": "assets/js/59.aa9fcf60.js",
    "revision": "76900f77ffe4afb17e6a4cc374e9f738"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.b8eb31a9.js",
    "revision": "540acb291cfa25a1feb580f95dadbd2f"
  },
  {
    "url": "assets/js/61.5ffeee69.js",
    "revision": "4cbc4f3035908896d27735d64b496be3"
  },
  {
    "url": "assets/js/62.7939a668.js",
    "revision": "14b8eaf787b78337033f369b2c891a66"
  },
  {
    "url": "assets/js/63.67dc054c.js",
    "revision": "d02f8b4e420184791bb825828062e671"
  },
  {
    "url": "assets/js/64.9e2bd4ec.js",
    "revision": "dba1b2cf719c6616673572bc5cf43a7a"
  },
  {
    "url": "assets/js/65.161de2e4.js",
    "revision": "ebef2f55e9eeb9d485c1b7fd225057a3"
  },
  {
    "url": "assets/js/66.1029913f.js",
    "revision": "5a2041c6ee627e7d023b63861eb64856"
  },
  {
    "url": "assets/js/67.f0f19b19.js",
    "revision": "ff1ca8de66a09288f212323ee31bcbd1"
  },
  {
    "url": "assets/js/68.c7a53246.js",
    "revision": "d4e152eabf296ee9157730f3d2df8151"
  },
  {
    "url": "assets/js/69.c6b1e1e3.js",
    "revision": "3ac0a9fa98e69ae4517b7d37bb74aced"
  },
  {
    "url": "assets/js/7.506f63fb.js",
    "revision": "8a466785bb94d5cfcc6a814e91d96070"
  },
  {
    "url": "assets/js/70.3ab35f1a.js",
    "revision": "44f9a3d55f40aec38d0efdfc7ec4f3a9"
  },
  {
    "url": "assets/js/71.a9fa464e.js",
    "revision": "b23efa69f54a91ec12869e3c78c948d4"
  },
  {
    "url": "assets/js/72.9a318d62.js",
    "revision": "ed6a9bf3c360c39ed59f32292d70e81b"
  },
  {
    "url": "assets/js/73.f4ae5204.js",
    "revision": "7335a0613a8ad6dc43baf4b17c51ad6b"
  },
  {
    "url": "assets/js/74.d6095828.js",
    "revision": "202f9b0a18040e4c53254807b0ab0aa1"
  },
  {
    "url": "assets/js/75.5978cdfe.js",
    "revision": "53210a480c6688c1e1a40eb5365e20d6"
  },
  {
    "url": "assets/js/76.5c338c1f.js",
    "revision": "06ae7ce892d7afa2d98d7de85f79f8e1"
  },
  {
    "url": "assets/js/77.4bfcef98.js",
    "revision": "c6540c1062567e18070e382ec687c499"
  },
  {
    "url": "assets/js/78.d6319b24.js",
    "revision": "f0116800099c5ff77e48fbb55bebb984"
  },
  {
    "url": "assets/js/79.f692eb29.js",
    "revision": "00e81aafface844572c8b977f4ac210d"
  },
  {
    "url": "assets/js/8.00f0749e.js",
    "revision": "bc34bc48f6a2f3e8e608bef6d2e4aa39"
  },
  {
    "url": "assets/js/80.2951ed21.js",
    "revision": "f2bbc749f5d4d2d912e8d1ae9fc41452"
  },
  {
    "url": "assets/js/81.fbccac8c.js",
    "revision": "bb258d4721a0efd093b277f9a36c589c"
  },
  {
    "url": "assets/js/82.bacce1bd.js",
    "revision": "d240ad581ee6bb3922b948e940e43015"
  },
  {
    "url": "assets/js/83.a37e1d09.js",
    "revision": "9b8c90a5e5a837eee8041b1e595850f0"
  },
  {
    "url": "assets/js/84.91c069b0.js",
    "revision": "e6efbcf8c97c26ff68e5df68a2f8f507"
  },
  {
    "url": "assets/js/85.f94e2d07.js",
    "revision": "dc66a877682f3b57e482cc8767a278ca"
  },
  {
    "url": "assets/js/86.a099ce13.js",
    "revision": "1f80f9764bb2d7ef0172b5a76bfae0d1"
  },
  {
    "url": "assets/js/87.655acd9c.js",
    "revision": "d92cc168af39342c7859b8ab759e80c3"
  },
  {
    "url": "assets/js/88.53d0444e.js",
    "revision": "b81719ab7cefec4c816eb44ff69058a9"
  },
  {
    "url": "assets/js/89.fa88b49c.js",
    "revision": "5e235058fcb97693872268ca899ee57b"
  },
  {
    "url": "assets/js/9.21044980.js",
    "revision": "038f2daee8cca270a3abdc525c38ac5e"
  },
  {
    "url": "assets/js/90.66d141ca.js",
    "revision": "085a2feae04e822e916a8245ec03d930"
  },
  {
    "url": "assets/js/91.09b118a7.js",
    "revision": "bd7f0d989e87d286e85248175f94b224"
  },
  {
    "url": "assets/js/92.70d6f672.js",
    "revision": "b5eea3b871ab29aa2d271ba5538ab61d"
  },
  {
    "url": "assets/js/93.990f38c9.js",
    "revision": "5c835b6d0917f87722afa3c25b50ef5a"
  },
  {
    "url": "assets/js/94.ef84ace8.js",
    "revision": "80255536b10f8805c88e6aacc38d290d"
  },
  {
    "url": "assets/js/95.8f5dca89.js",
    "revision": "8b34a5c6ecf9f95fb7fe1313c2c2c567"
  },
  {
    "url": "assets/js/app.31b7017b.js",
    "revision": "1b5e91e544c598d2c4344a1cba4fc714"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "14e9892d5eb84fc6ab3c540cfea48ca1"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "5577e247b42385de960ee0065f336e5f"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "77d23458019aeaeb97f9e70410616cf7"
  },
  {
    "url": "tutorial/index.html",
    "revision": "7cd67979706730c28dd672bee8751122"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "18cb8da311dfbccfa97767e9f9e249f1"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "8605a5a11ef2c17c0cbd395825efdd57"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "c3c0be23c08baebd4ab6698a2dfa7963"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "3d3ba2f4befdee6a17b5b0a1eb84e836"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "127ccd566fadca372f6d4436d2167a1f"
  },
  {
    "url": "zh/api/index.html",
    "revision": "07e9a2a076ff56795b26d35508bf0db2"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "224de8daa92da98230a65e64bbc991a8"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "6a37cbab4ed3c1653516ff56b4c30309"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "957bee65a8df88cb6ba459324f334e47"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "428b91ee0e663f5d43c9fc57239aa5fb"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "4e84628da99fc4826eee18014060c6bc"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "2f8fb3df945b4ddd5297af719066cbd9"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "59e3a7c94d8e335ae6515c505f0ddefb"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "43d0adb1131fa17048fc9bf5356a284c"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "b9e73b2c0e5ce4df883bb58db632c27c"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "7e12ea35adce7c9704cfcf897c1fa697"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "f6926af843456a47bc139b35c6baaa2f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "b70885b89dfc26d27d78babbdac5c19f"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "e54ae095f78e28a60625c7884b95eb95"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "1b647e3df1543aef9bf84aa44b645d9c"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "da45ec599128df3774b770d70d144292"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "8c58497d5f5d4f75e12e5606679c80ac"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "dbefd8ee5cb7680addb50ca4d0b2f811"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "f3c8425216e4b62753d91b6eed2a1242"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "b0ce6cf391fa32e1f57b1c736cdd8a85"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "ed5360442724e46bada52314d1727e29"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "4dbe04e9ae9b197ec44c0334ecf2ad5f"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "71d6ab05eaf5825e281bd923216c1ce1"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "bda571c678bc340bc9e56921c333c3fb"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "6dde934aa76872fd46d16bd483b75108"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "750fe0d5622159c95607e400a0540555"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "deda941c3e02ea21e9a1a37bec8b4c1d"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "20cdc39b21e718b8906b681e35076f23"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "a2de76b4d84a52bf0f09753c922f0454"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "b912c0032cc109e5fcf5ce19548ea142"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "8ddeddec7974d01a84ba42ce4f18f162"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "9ea2dfa7ed2f77cb154ca4a61380a3b9"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "cab4647a5bc85b700941d49d124da5ca"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "aad466672c74295a5704c6cef8df1b34"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "483e8eb67100a648296409d7eb167ac1"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "094f0fc7359f95d7ac683290332a39ac"
  },
  {
    "url": "zh/index.html",
    "revision": "4ea967a1aa5d62a087b09b13f3b2263b"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "a959f8646febb7bee1bfb3dfe659628d"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "06d289c5551a44359c9b6c4c8382f435"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "2ba16e0704f1c61e40c498264eaa0249"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "ab40748057292c329f5af0fc18aa983a"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "05194f80baa38ddf596dc9e17fa4e896"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "0cc7b4aef47a9de054116eaa6cbb368b"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "e5e72555abc3c49a6c972ead74bbcaf8"
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
