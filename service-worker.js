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
    "revision": "8578fa69ac58e8af2c9c39ac73506a8e"
  },
  {
    "url": "api/index.html",
    "revision": "690de0faa049383710b58107c5bc8021"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "0d6956f222627ce1a8220dd4185fec6a"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "d2abfa130383bde7593b39cc367d9d34"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "42ce409f836cc73686618294768cd347"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "1eb24f11989656b4caec9827bcbc6d0a"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "e740fe161834f6294922e4c5916bbcbb"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "31a075b6d1bdea496dcfe6536304b674"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "c732835929eaa29809a65e48b638088a"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "51b31b5a0ea0a03e34cbaa98b8e80135"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "444e7dedd734479b508e38c8d1a63b32"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "a153396a606f7ea07b010801b854acb9"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "fbd28bc71563f49e1cb78321d87bbf1f"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "bea15c90111455da16e7386a4fd56a95"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "743eecd6ec4cdb4f95500cdf9999716d"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "dce779e3ee890875d23d7be747862a5a"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "d47da990e0cb0ed74b2636da42f68e7f"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "f4a4dbeb47dbecff8512fe3dd831476b"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "ae4389f7549be7f133cf0b30328f69e4"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "d2275d71e83db0c1cbfc7996a273009f"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "a73ec427586906ff40b436e2c8c90e46"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "28826d938194b0b0b472ad45f5bf2afe"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "723130ce10c03885ad08d64bfd401e0b"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "c826a9aff5036efde3ad85f11d4d6d7a"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "4cc0a01019fd13417961bf73772b5834"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "aa5726266fbe8b72cc17921c3f79a622"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "7dcbb5aee6e3ea76df82ee0b3035995b"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "25562c186d13ea608652c321638d6226"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "508b36dc8c1268bdb28877d9658d4b16"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "e92ad40aec423a302b845e54c73f8641"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "c947762877680a3ef2536cedab2b3cad"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "caf1db48b5b551b62968a02509d08a32"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "61d9853414c6bcb9d4a86a45b602e6fb"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "140bc86a6d25e42f13d6aceb7ff3a84a"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "bcb42068f51060dc6d93316ed4fb7840"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "b52f43ed971d0e7a88b8763df77dd55f"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "b263534ef5e4f2cb568a72a6765e5428"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "4f899ad5f68dc0bec6372e29893bd03b"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "495337dc472f56c224eeb68eab62cd4a"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "f49a75a23669cdbc0cd03d208de87c87"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "99428c9b9e3b18e1be50e1dd5e808fb3"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "872409a0cba84927cd56185f83529a37"
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
    "url": "assets/js/38.ff0abdaf.js",
    "revision": "e8c79341386e71b98fb004fc04305ff8"
  },
  {
    "url": "assets/js/39.c8981ec5.js",
    "revision": "060bdc57b27343ebee75988ec1e9b8d1"
  },
  {
    "url": "assets/js/4.3b4e377f.js",
    "revision": "aed79002394205227a883139e97fc552"
  },
  {
    "url": "assets/js/40.04f1dd9b.js",
    "revision": "bfac4fbd92c2c0b421885fcacfebf68c"
  },
  {
    "url": "assets/js/41.229e1bce.js",
    "revision": "e30da5a66ba5cc01fb77e16b8740d8ca"
  },
  {
    "url": "assets/js/42.2153ced9.js",
    "revision": "4076f4f2e7cc78873fbe2dfb1ee35bbc"
  },
  {
    "url": "assets/js/43.697c9b2b.js",
    "revision": "65e2bf9656c51f96e3c65dc98b5d7201"
  },
  {
    "url": "assets/js/44.39d12746.js",
    "revision": "6175feb5b182a8a359765100f96872dc"
  },
  {
    "url": "assets/js/45.70f76971.js",
    "revision": "83836de5e5a2fc02079109e942dde43b"
  },
  {
    "url": "assets/js/46.d7937b69.js",
    "revision": "fefbd2250cbe64362380b89a87291707"
  },
  {
    "url": "assets/js/47.c33b82d9.js",
    "revision": "a8f2b713bf6852f504335d9d1451c4bd"
  },
  {
    "url": "assets/js/48.4ebe2584.js",
    "revision": "47f156be845a024919c0b0c1ed5cab2f"
  },
  {
    "url": "assets/js/49.23420f6c.js",
    "revision": "7f8bf25eb38c1e4726f89e6172c26055"
  },
  {
    "url": "assets/js/5.5a3cb67f.js",
    "revision": "53585c0159bb02ab3846527f73c33e92"
  },
  {
    "url": "assets/js/50.48fb8d33.js",
    "revision": "b38351bdee02624477ff5f68b6df1a83"
  },
  {
    "url": "assets/js/51.fba80efe.js",
    "revision": "e84c0dc3078116abd4e8bb52dfdfb0e2"
  },
  {
    "url": "assets/js/52.9adf83b4.js",
    "revision": "8b1cfa5e181d2023e0d9d797bcf9eef5"
  },
  {
    "url": "assets/js/53.8ca8f481.js",
    "revision": "78cedc7c80bd3101e6cacc74b296b77e"
  },
  {
    "url": "assets/js/54.47e908d6.js",
    "revision": "6a6705fd48733efef13f14b788c79ef1"
  },
  {
    "url": "assets/js/55.57b8ab3f.js",
    "revision": "d52e9a6ce970e0592b32ff34e4a5895f"
  },
  {
    "url": "assets/js/56.3c37a6b4.js",
    "revision": "7ef1c3acf52bf6dbdcf7f46298a31171"
  },
  {
    "url": "assets/js/57.16512939.js",
    "revision": "219e0cd292eb55b89fbb609375f50c06"
  },
  {
    "url": "assets/js/58.e1dbae75.js",
    "revision": "d2d3456746dbba786b6f550d7ed1c490"
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
    "url": "assets/js/app.cf88db10.js",
    "revision": "12c602d08e5a1f5917dca405801c6b4f"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "c988f554d8403e066a90c9640b310d08"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "9e93652e93660711cddf959097d8ed8b"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "e2a706fe3b40674d4b0a3f6e873b4519"
  },
  {
    "url": "tutorial/index.html",
    "revision": "1e922915bdf4cf39d7e0d9f3fff602b9"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "d56825c8285c94fa8f69b0804f79a33a"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "653d42f744b00861b4f2f5d613814704"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "1a3150961e1bc606fa4beeccda756e9a"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "6e46edc6cb738cc21dd71c2712df3532"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "7ce960696dd638f8254af767487ddd18"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "80cbb3641c2e57b7864f1f98f78d6aeb"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "4adbb11972680505a3b8916ffacac6b9"
  },
  {
    "url": "zh/api/index.html",
    "revision": "3657caca0492c6da4e5f9c31dae1099f"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "7f5654d5c195ecdfcccaf869f1d057a9"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "310a95f2594924ab5ccdda6496f069ee"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "7f7f66e46219126cb3a638c8548b1bbe"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "2028b3fae04b4b751830d41fc3694f10"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "a679e660404ff15c9cfa094942380ad2"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "5e79ee5bf12f60060181b8937efdd416"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "7211ba77e72240c5d15d9e73daa951fa"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "321e46bf651421570d6bd6e3565168f4"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "56538bb5dd1f61cb65d91600a3a1f3c4"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "d181d88ccf95259c1478b456b2f74006"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "1fac8357caf55d49a83b53ecac93e496"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "1298fb5cc941ea3e43425b3dea50113d"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "833b63111cc9dca9e2e32bbeddb9963d"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "c5aee2a06f02904d6e7462a9f44feb74"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "1a16c0faffd1feed0106180fb4c90684"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "e27cc7f73be460c3116e7f7e3f8e6ae0"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "5778acfca21a9fc92f42619231d2a102"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "a3787ba9d1c2ff053350d29a488279c7"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "97c28576910740c1dd756f0d6ee2cf0e"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "1c01b60f76d887de54805570c0d4269d"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "5cb53e752304417411b85f4892499bc7"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "893b4ce4fa670132099d27fcb0d0dfe3"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "d2ad1715e51572e3591da56c3f2268c9"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "706e691de13f3958a3792501eac69232"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "6273f6c4e4fafa8433c14412c165bd20"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "6a845f91edb6fe1949c5a12c4d56cc70"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "389ce573209521dfbe29c644ff04662e"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "156f27b3aaf2b2e2dfc116c4ba8a5238"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "c6a084166d2bf5e4eaa196c1c3bfba88"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "10c20f0e4ee557d2faffe23c05768472"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "7fcb55d10835b6d49e769ef9538ede8f"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "3448cac3acfc625ad160631a4d3ab8b7"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "8d90b9509023d14dd628a9ae081ace3f"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "b4ba9abe6aef0e588391999635d0c1dc"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "5233d62fa492da73123ce2abc35e4da3"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "029fcf03dac9d94765ed704342660258"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "8e60d32afa9d22947c8a5cd905ba2288"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "30831fedba61c9aaf9db7f5d698d3e14"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "efa32e603faf515bb300eebc3eb0aa7f"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "fd91ac07d075ab210b0ce0f9176394d3"
  },
  {
    "url": "zh/index.html",
    "revision": "90dd63344cae2395619bc1bb837f1f7a"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "6ecb8e50d74944c961510828416b65a6"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "391f84fb1b1eda9d544a7c358860b4ad"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "e40891c4538c7c6ada51669f2168eb27"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "4f93aaf54aa0c879f2bdfbee1df914b1"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "f9741a21f35c198630511a7d0b398671"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "437a21dd0c2021f761bf460647713ecd"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "2fc748fc3798a95f52312e58d5953de5"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "8c399d9a6ac716a3627e507184fa7e3e"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "2af160e986ea4713d3da03c271447a8c"
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
