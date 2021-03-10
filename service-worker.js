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
    "revision": "67b788b1f1df34c3bf417cde8763d393"
  },
  {
    "url": "api/index.html",
    "revision": "23feb323808db8c99731e44687eecd94"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "9973290c85dd4ca9b49bf676257a5c01"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "675d756883d4489737d718768095e2f1"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "b441f33600368f97ab44a2bc9eb6b5c3"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "f493d86a985363418dce84c8b5045c25"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "3d32c1eaca09644eaa58c373fcdb6fe7"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "ad22b0f9a8badf86ac7d82758828d6ad"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "10f66a944b9a0fd816d39b170c9076ee"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "e3ec98561de10c4f422cdb591acc713f"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "c730fe98dbfa33145226a743b3d56d83"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "c412f4c7e860bd8a5f7fc9758dc2984e"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "337b1b3f7987b31dc8661e9b2277e85c"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "27c56257e3ff5c262058d75121eb1016"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "9651426086b9fbfe98c5cef5469a9a53"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "f8ea2aedb36b2525c42c6e933c949133"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "27957a9ad4cd8e683d38ed1373bc059d"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "438371acb4ded9bd814f1c584afbceb2"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "345d41e9850db24ef335bbee6080efa4"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "6c59f938d2d1946c6ab4692b0b8613ee"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "283e711078440cd098e2778a9d008897"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "584bbeda560ad944e417ed3aae6a2305"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "150dc74620f0d7a402e0ba1a5cebe3de"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "a84f8bdd542e60beebbdd428a3c20ec4"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "8448441e9542a1efc318221f59459b91"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "a9692b86dd4fd634d7be175ad4ad26f1"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "2a27958ef260358428a42a11012897fb"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "1215638f001389b22242dc19f34a2908"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "7bf54d823724f8530f8d55b85fc8a55c"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "7fd21953ec6aefc713f0bb9e79c9364e"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "76e2acaa4a637a6e9666f564bbf2b964"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "31f9f3fe77e5c7f440e93afaf45f9ee9"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "08b09e6caaecd67484c5dbb76cfa965e"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "3b968b6d17ede187faa1fc8d4f52c27c"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "5b11b31cd8aa2566775a5c56b7dbfdd7"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "464dd1d4d40d53c33cd6c3cbd6a542b1"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "febf3d3c50ebbc0342f9b56a0e5a8e81"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "6b0a647641eb19bd988ea33d559b2441"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "a3f31a8b95f763afab597d4b5cdd02ea"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "a250c6a72c0e8345ce812b87a60f658a"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "29394256e686d2a3542db03f53c90169"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "461858751b5a43b5c8eb525a8a4c4404"
  },
  {
    "url": "assets/css/0.styles.d0b74ae9.css",
    "revision": "86e694862352db3de6d33a1f55ff1906"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2590a40a.js",
    "revision": "482f44714fa4be4b2f81ccd0164a58e7"
  },
  {
    "url": "assets/js/100.182f9e43.js",
    "revision": "60864ec92d4f7715a1c5af58f7867c1d"
  },
  {
    "url": "assets/js/101.3fad06f1.js",
    "revision": "c0488afe95f1308ccb4e90d77726de61"
  },
  {
    "url": "assets/js/102.d70375b4.js",
    "revision": "ca52c12232b3a5288b400261ba912e72"
  },
  {
    "url": "assets/js/103.c2ab926d.js",
    "revision": "6386af092ef9d397f79cac09474e2410"
  },
  {
    "url": "assets/js/104.bca9aa45.js",
    "revision": "57266d801a6500a7a4c44f7ffb979df8"
  },
  {
    "url": "assets/js/105.a5e96da7.js",
    "revision": "888ca2b2f363f1a6cd43eb57af785291"
  },
  {
    "url": "assets/js/106.2e1d07a0.js",
    "revision": "2a1f1c174dd026dfa0f7305a3aa0a353"
  },
  {
    "url": "assets/js/107.09a362d4.js",
    "revision": "cad80f1027f8c2e41ecb2a9773070273"
  },
  {
    "url": "assets/js/108.1a8ae07b.js",
    "revision": "b93e82dec92e1e0c1a566f52ffd95bff"
  },
  {
    "url": "assets/js/109.e8503832.js",
    "revision": "1b8f6bd44f9bc53912648325302903ad"
  },
  {
    "url": "assets/js/11.ca1853a1.js",
    "revision": "5dbf412ec1043bde3fb3547e2b797fb9"
  },
  {
    "url": "assets/js/110.d08cad7f.js",
    "revision": "93c39a1bd462e6db7f95095286ba8435"
  },
  {
    "url": "assets/js/111.57b49cba.js",
    "revision": "485a7cb99d2a5df192b3d25719b7aec1"
  },
  {
    "url": "assets/js/12.a0194ac0.js",
    "revision": "6e51093d92d082ae4e5cea831dba3658"
  },
  {
    "url": "assets/js/13.b73c7a60.js",
    "revision": "2862828c7562fcee86958610266f8378"
  },
  {
    "url": "assets/js/14.b4a3c123.js",
    "revision": "8335ea1427036c9e7097c600b7b5ad7d"
  },
  {
    "url": "assets/js/15.706b9d0e.js",
    "revision": "2049df61a50a25dfba26aa767a9d63e4"
  },
  {
    "url": "assets/js/16.6730709d.js",
    "revision": "158ec047e90a463d931abd3441eb17fd"
  },
  {
    "url": "assets/js/17.f07b8ba9.js",
    "revision": "8a9a2ff72d76cbe14929504dd24f5442"
  },
  {
    "url": "assets/js/18.9c8acd11.js",
    "revision": "ad88dbac31096d9e757345f54c4b5a0d"
  },
  {
    "url": "assets/js/19.eccb159c.js",
    "revision": "50bf41a43ccb272c2e63a2d566592284"
  },
  {
    "url": "assets/js/20.9d109788.js",
    "revision": "473f7e91ffe327712e9cfa172c83c683"
  },
  {
    "url": "assets/js/21.291922cf.js",
    "revision": "da597da1f8fe0c1254064ec7db7ebc72"
  },
  {
    "url": "assets/js/22.7e5a31e8.js",
    "revision": "e9c09c0098b790fe631dd833eb98d69c"
  },
  {
    "url": "assets/js/23.2bd5291c.js",
    "revision": "40b083b46af1ed9a92f46f5302ea4974"
  },
  {
    "url": "assets/js/24.5e111a4f.js",
    "revision": "a1d1d054529c09392c653b8be1ef8935"
  },
  {
    "url": "assets/js/25.3d217760.js",
    "revision": "711b6d42f25c9705953293b97a37850a"
  },
  {
    "url": "assets/js/26.5437e527.js",
    "revision": "84ef61618999ce87d27a11c49ca414c5"
  },
  {
    "url": "assets/js/27.96d13a98.js",
    "revision": "3f2f72360229e17b88e2c6dcbe354ba8"
  },
  {
    "url": "assets/js/28.b86173a9.js",
    "revision": "5d1aa0eda63b4cb47fbd7e7231ddd6c3"
  },
  {
    "url": "assets/js/29.498bf16f.js",
    "revision": "dd018c925acd4dec6a4c54fc5fd5568c"
  },
  {
    "url": "assets/js/3.6ed047b1.js",
    "revision": "02cd5e537b22c48b85d3065ea355979b"
  },
  {
    "url": "assets/js/30.4e0da4fd.js",
    "revision": "b6b5340d759d5dcce18a74f5950d8f9a"
  },
  {
    "url": "assets/js/31.a2d2488f.js",
    "revision": "bb59206492adeaedad47d12201c92ee9"
  },
  {
    "url": "assets/js/32.b1c871d0.js",
    "revision": "c103074d79e173f4f7429fcf6da904d6"
  },
  {
    "url": "assets/js/33.b2917b55.js",
    "revision": "5a836de67f2b1276d3abf84a01dd1b07"
  },
  {
    "url": "assets/js/34.9c53cfb2.js",
    "revision": "db42db1ab1b340cdce4215a56c470301"
  },
  {
    "url": "assets/js/35.1c502809.js",
    "revision": "f56d60558f44686d289f0d109235b0b0"
  },
  {
    "url": "assets/js/36.4e341f4b.js",
    "revision": "7564bd5c77b3e439a98b1ba3e7296337"
  },
  {
    "url": "assets/js/37.0370e19f.js",
    "revision": "f3964feb9b81a05927fc60adaef98256"
  },
  {
    "url": "assets/js/38.8ee244fd.js",
    "revision": "e7bc8ee6af6d2ce1846597d717296b42"
  },
  {
    "url": "assets/js/39.16744d07.js",
    "revision": "0de56afdeecdd52c5db9d7644be0c862"
  },
  {
    "url": "assets/js/4.3b4e377f.js",
    "revision": "aed79002394205227a883139e97fc552"
  },
  {
    "url": "assets/js/40.1ae32bce.js",
    "revision": "5f04a1f87de508656320b546907c514e"
  },
  {
    "url": "assets/js/41.900e81db.js",
    "revision": "4ba8c1cbdf35fd6912923c6719e3e01e"
  },
  {
    "url": "assets/js/42.c581e837.js",
    "revision": "2cfb23ac5372dae38366bab112e45e37"
  },
  {
    "url": "assets/js/43.e53917d1.js",
    "revision": "6a156937c244593413cf053016e1f6bf"
  },
  {
    "url": "assets/js/44.9b03e7c3.js",
    "revision": "0a6a99e834245e252c36ff77218563fd"
  },
  {
    "url": "assets/js/45.9ff2842f.js",
    "revision": "f41ac21052fb175dc3dddc64f44570b1"
  },
  {
    "url": "assets/js/46.9d2dab60.js",
    "revision": "23bfffb9388b908c669a9050978227fd"
  },
  {
    "url": "assets/js/47.260ccc4c.js",
    "revision": "a4d0af2ed9ed584b6ea4ec5ea03c7c8f"
  },
  {
    "url": "assets/js/48.03415697.js",
    "revision": "1a6abbce4f6b798beb7f147da036225c"
  },
  {
    "url": "assets/js/49.beab7406.js",
    "revision": "91e564e3c5db97d4e7c807e35332eb89"
  },
  {
    "url": "assets/js/5.5a3cb67f.js",
    "revision": "53585c0159bb02ab3846527f73c33e92"
  },
  {
    "url": "assets/js/50.3279dfdd.js",
    "revision": "6a323ef01ecb857b467462fc233625ca"
  },
  {
    "url": "assets/js/51.774bffee.js",
    "revision": "94426436e29059d13095e46c88e2f36e"
  },
  {
    "url": "assets/js/52.2299fd72.js",
    "revision": "e94efcc367e8a3aab268ab7509344009"
  },
  {
    "url": "assets/js/53.38838207.js",
    "revision": "f441439b6be9b3b3b51d0d353eb673fd"
  },
  {
    "url": "assets/js/54.473c8b01.js",
    "revision": "2d682889b872722969728a4f0b7a4cc9"
  },
  {
    "url": "assets/js/55.ddbdb4be.js",
    "revision": "e1d2953c3a5f46e5f4e8717cb66a02e3"
  },
  {
    "url": "assets/js/56.b2c54179.js",
    "revision": "a22f42724421d2ca4b6c4ebf2e898da3"
  },
  {
    "url": "assets/js/57.1b4894a1.js",
    "revision": "82a155c9d0ed473f5ac9f09fa977c253"
  },
  {
    "url": "assets/js/58.dac49254.js",
    "revision": "054c08690f3b4ee0e7b930d8c4cf9dd9"
  },
  {
    "url": "assets/js/59.fef3ea13.js",
    "revision": "44b21f9e7afa25241026325b34e56e35"
  },
  {
    "url": "assets/js/6.f4f1840b.js",
    "revision": "541c15b67bb570a8c209e3f69b2805b9"
  },
  {
    "url": "assets/js/60.2af2fa80.js",
    "revision": "8f8078538023308237e22efa6d3229e5"
  },
  {
    "url": "assets/js/61.ca23311d.js",
    "revision": "b4443a1cef9202cce1d89d45d9ba58b2"
  },
  {
    "url": "assets/js/62.75bf4461.js",
    "revision": "e63e8c320a7834949d1434f9604d1286"
  },
  {
    "url": "assets/js/63.1753e763.js",
    "revision": "613c24ba7585f7f07fcbfb19cbe2344d"
  },
  {
    "url": "assets/js/64.09739a7d.js",
    "revision": "8cc401b17941d8215f61d5f46c39964d"
  },
  {
    "url": "assets/js/65.5ce2dd20.js",
    "revision": "4c9a35a941794bf717837ddc8ca34373"
  },
  {
    "url": "assets/js/66.6d1997cd.js",
    "revision": "28fc58854fdb53ad150e6e4f38150d44"
  },
  {
    "url": "assets/js/67.aaa1660c.js",
    "revision": "f4cce1673cac8471aecf15afa4d2bda8"
  },
  {
    "url": "assets/js/68.7b3bd6ef.js",
    "revision": "b11242617f84c2a69d5974db15763061"
  },
  {
    "url": "assets/js/69.8cd22c1a.js",
    "revision": "d8f0c166ee662c7c04d7c43f48f88979"
  },
  {
    "url": "assets/js/7.ea4070c2.js",
    "revision": "ceacf916b5e8af54771a2cf496c92cf8"
  },
  {
    "url": "assets/js/70.6640175b.js",
    "revision": "e5598999e81b77a0c35cdde19fb0a476"
  },
  {
    "url": "assets/js/71.a6958062.js",
    "revision": "5d9a9ad176d722590551e59e95ec8b33"
  },
  {
    "url": "assets/js/72.18813373.js",
    "revision": "7da52e5640feeebb980945257aac0ff9"
  },
  {
    "url": "assets/js/73.cc5445ac.js",
    "revision": "8ee5b9b0d136482062e8b9c99fcf5980"
  },
  {
    "url": "assets/js/74.f7b8989b.js",
    "revision": "19e400ceaea40bb04b421439744c7c8e"
  },
  {
    "url": "assets/js/75.694d204f.js",
    "revision": "3f5fd56d804abd2f09d476694f07ab0d"
  },
  {
    "url": "assets/js/76.755b05af.js",
    "revision": "00535baf6e719734b41f6458c03c5bf8"
  },
  {
    "url": "assets/js/77.193dbfeb.js",
    "revision": "acd0dd899522666571b3c5f0808f6766"
  },
  {
    "url": "assets/js/78.2026dcd3.js",
    "revision": "8541b70a3d1b287c36c42deec42258ab"
  },
  {
    "url": "assets/js/79.ed6492dd.js",
    "revision": "e93a5bf7cb8bb2726c6696ce8e981458"
  },
  {
    "url": "assets/js/8.3e4cd833.js",
    "revision": "098badda83ff04aaa8a9f9cb2f82cc31"
  },
  {
    "url": "assets/js/80.2187bc7e.js",
    "revision": "1faf55151c4e37ad4d945b999381c6f0"
  },
  {
    "url": "assets/js/81.0f274c4d.js",
    "revision": "7a285b879b381dbe0681e6c7b1b68a9c"
  },
  {
    "url": "assets/js/82.44a14d5f.js",
    "revision": "989b4d31fb7e2b497c6a4d4716916131"
  },
  {
    "url": "assets/js/83.1f978700.js",
    "revision": "9836a7ebe11d6ca6112abbc586ade757"
  },
  {
    "url": "assets/js/84.7c4ec24f.js",
    "revision": "52e7101b7e2a317d6a7998c30fc1fab8"
  },
  {
    "url": "assets/js/85.be7c72c1.js",
    "revision": "7a213bd20f13bbea4bbbc027f903b5bc"
  },
  {
    "url": "assets/js/86.e61e661e.js",
    "revision": "aefcfe4a568a6d4da40a1e9f4eb3bf44"
  },
  {
    "url": "assets/js/87.017f1256.js",
    "revision": "c61dec2d2f487f6f860562fea4e30284"
  },
  {
    "url": "assets/js/88.b1b8439c.js",
    "revision": "dba88f47141cf74b7984e6f385ac955f"
  },
  {
    "url": "assets/js/89.2d1c61f9.js",
    "revision": "3d0ce620b7351f9b05225628c5f2452a"
  },
  {
    "url": "assets/js/9.0947698c.js",
    "revision": "b649d4e33d587497941d317628d1e173"
  },
  {
    "url": "assets/js/90.41c65bde.js",
    "revision": "ca5c551d8d3ba3e8b9b338c377a410e2"
  },
  {
    "url": "assets/js/91.b21fc9d4.js",
    "revision": "a0f54dde5db7db3dadd97767fb264e73"
  },
  {
    "url": "assets/js/92.022e4ca1.js",
    "revision": "832e232a4ece387c69ec61c37fe9645d"
  },
  {
    "url": "assets/js/93.81575fe3.js",
    "revision": "b476cf260a1c0b40bba661cafce627e1"
  },
  {
    "url": "assets/js/94.15523a70.js",
    "revision": "94e8f33ee373242c4224490e22e4a8d2"
  },
  {
    "url": "assets/js/95.da5c9938.js",
    "revision": "7bf1e57f2dd17800a76c4696db843a30"
  },
  {
    "url": "assets/js/96.baab0240.js",
    "revision": "7c900b2de83f5ea94985935ff4a3f0fc"
  },
  {
    "url": "assets/js/97.194b065f.js",
    "revision": "1655fbeada7526df6f00b3f87a181b6e"
  },
  {
    "url": "assets/js/98.546cf251.js",
    "revision": "cf19f1b093c1724909b8103007b98fb2"
  },
  {
    "url": "assets/js/99.c34d46a4.js",
    "revision": "1a44e1be65b01fc5be6f04726678c039"
  },
  {
    "url": "assets/js/app.3c5b65ce.js",
    "revision": "c34e8807bca56e71eb4ec4e08f03e81a"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "b250e32e294b3c80afb5d3a4373ab3ff"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "3f3b9bd0d94590772c27d222188d474b"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "c7c21eb2aa151a2feb29ed496dc6fe29"
  },
  {
    "url": "tutorial/index.html",
    "revision": "45130aa373584efa87b6bdff12b7d282"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "59bb5f5eed050720c7b57524af665d9d"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "f141791e16a4f93b90890b464f1a62df"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "bb67e84f55a624239861a0cceff89a23"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "a147aa83e11c5cdc2350d288a9b008ce"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "6d6a0d133570a927b564024a9bbec9ba"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "0ae084d15ccb095c1dc40d407dfb60b2"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "b742b3d72af780a725079aed1fc218e2"
  },
  {
    "url": "zh/api/index.html",
    "revision": "3461eb1c4297479630750a40d4a2bfc9"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "4e6ff1ad050ff7529b5286efd357ae20"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "562c8e7b5d9c7b63ac6e055be6105cb2"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "830c18d208d84d0eb623febfb5532112"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "6f321506a3b0d23dd1f79211d9b9b6b5"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "f4a71ebd147af2147f8fc9bb790a87e6"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "dc72c2cfe641b5732023d697d6fabe4d"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "334beddd1b428d6e26fc6e7bbed51eba"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "127a1d99149940e137dd459a33c64729"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "060a9416e0911211605659aa1a35dedd"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "0cae171263948c58c47994f94181277a"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "cc897bf53de9a1e493c873bb6ac799e8"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "04c090283cc722d47f729b684201753b"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "e59535590dd578e7b4d31d8d0af0ccb3"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "8bf94f30c59f4d74821e900ec7769d9f"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "c8b1d3139057b07bef9e92189f1f3481"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "0c84b6ffb19404b38c1a47ad916f783f"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "2af788622a313060748118a242ab6e80"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "7b2144a152b20522e21d5dce1b788d56"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "8676cde38b36246feca9137c3e2448af"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "163de9c594bf10c667906cbcedb038d9"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "ef13845e0307772a993e8e09c2f7e18d"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "724c13f3b867a54d60a8f8dae02dde4f"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "567f82454566f74d35c73065bcff9d48"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "117143095908c4f99bc8dfcde38fdbc7"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "8165eae7bb8aad50c7078b68fc188297"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "670e537f0a792efaf4348c924c7d60ae"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "95e4c594cfe9347569b670bd261195ba"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "e4780bcb5fb676049f6c94ece5901e1f"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "09d760ae14d6ca18736a3d40a7e56a6d"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "17db3f450867d36a5a4d4adf18cd7c05"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "931733a2bedd68b764f20ac2aaa41e5e"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "2fbebce4863c6f2513c9fdaf0ea488da"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "bf635601dc69e9d50afa3715980d1ea8"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "a0c08c2c5459322a93b871d0fccbdf2c"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "23d3de329a7b487c0fa4b7a0faa54195"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "33bc234aa370a7e52b627bf9fe78c19b"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "583868a8c59344ff6cac4956f16a5cdd"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "2b1b21ce758999b30b2ee4e8fd5217dd"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "3acf5504e0d950dbd005e813d4ba0a5c"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "c24bb0ebf4a67d7624fdc189e6b5f042"
  },
  {
    "url": "zh/index.html",
    "revision": "e70936469579175368d5398336ef199b"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "ec37c17c0bea07060836c8ea1b9149e8"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "ff011e8ee22b6b7edc268b3681306dfc"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "1b4d29320c8006480613da5be5de2fe0"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "69f153009f4cb53fd11f10e8fb6fd2de"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "f1634a80fe51392542559bd40853c71f"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "170dc903f3cd04e1fd53c398d912bc90"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "a64e6cdcc2c597cdcf4c6ae8cb3678b6"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "aa55f3f8ac549317cf94303a126178e8"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "2b9bc1d7f1c618dfb9887b07adf713e7"
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
