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
    "revision": "cce32d2f18313cf646e26da21aa5ead3"
  },
  {
    "url": "api/index.html",
    "revision": "d28c1053f163f22ebaebc1d0bb2ae753"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "e1a951701bf2aa86108d87161d39fe98"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "f03806781333badc1cb187b0817977d5"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "04b96a2dca6d0f5f8913f66545a62f71"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "e694f601b7b672b7557f301d184f6d3c"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "ca2199da39d75833d7383deae8bfd13a"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "7ece38d6eae968382285d55f99f3055d"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "4f0ae65289be19be89ca1ecc4ad92a81"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "a91c6be481f59fdd6d47c448eabf2fdf"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "395b56dce355ef0888ddfeb318529856"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "affc4021e24131ee4aac91492ff863ce"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "ec646ce3b97fae605153fc1b12219183"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "a435769f2d122cb2872acfd8bcf19a34"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "53ac2d505c8e3620e16342233bd7a6c7"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "68b80f7c7f755849d6a9be8e42ccbf97"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "bd19d86985871770a914759ee57d8b95"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "bcdad61af844b1d89560fa79c5fb6faf"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "0d2a2daf0524f6b12492cca28ed369b6"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "9c2944e0cb29096f6ad72dfb55093593"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "574ae33591b23fbb16b1fa9e889f4690"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "72e4129f7f58b5615a050d965252c5a5"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "29e9706b8e4e1a809820e3d9840a8d82"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "9524d9c5e3b9cb9345c5dcc2fd7d151a"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "bfb3a8dfd6b7a9fee8d29e5fe0f08f9c"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "a27d6298d31c2afa9c837189735eaf18"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "493acd555591d4e9f5b8a720927d14b9"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "c73e894af581a25a66d599feb16a6b2f"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "169cfe829f73e0f6e65c0ff198e2db39"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "838deeace9e15065cd98f3a0f8341e63"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "ff713f5b9784d833f09d32e908055309"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "6419639880ca5e575c42a77734b3e8f3"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "4204e735b5214fe8fc6f608e18a634ab"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "2e5ff057c88bde8153ae3d804d66314c"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "bf5ba6701ea358dfeffb7295c1a44588"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "699c6de728ec3263ddbd43716b3f09c3"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "32849dcba9b56638088df000f3a61dcd"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "b4b903072b7cc6bfc9180a5f3b0821a9"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "751e221d5e8fb383549894ebd730f723"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "a8671158f9f5541bc3b977d68b863a46"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "216fcb1fb1b58ddecc66d603a14fc277"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "6896185b85b5e3df5f7c3b33bf24d4bf"
  },
  {
    "url": "assets/css/0.styles.c3b1da07.css",
    "revision": "555a9c9eb9659c87010e02dd6eb4b233"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66eb2fbb.js",
    "revision": "482f44714fa4be4b2f81ccd0164a58e7"
  },
  {
    "url": "assets/js/100.c3e32210.js",
    "revision": "650aca040f1921db0a5346d61e8034a6"
  },
  {
    "url": "assets/js/101.7294c9e9.js",
    "revision": "bea6a914bb375ec58b1d3b510c5df2cb"
  },
  {
    "url": "assets/js/102.52707852.js",
    "revision": "81d5d096faa9ab6313eb0604bf68c890"
  },
  {
    "url": "assets/js/103.17181d52.js",
    "revision": "4b76696e9bc4b9dab44af5f17417d158"
  },
  {
    "url": "assets/js/104.22f29ac1.js",
    "revision": "eba90eeac77c86091220ddd1cede2de1"
  },
  {
    "url": "assets/js/105.370dcf5f.js",
    "revision": "8b9283968de96d9df1933e386c4979f0"
  },
  {
    "url": "assets/js/106.b307c2e5.js",
    "revision": "5be06b4a3ea07251f03d567eee15e9fc"
  },
  {
    "url": "assets/js/107.8dacfed8.js",
    "revision": "cad80f1027f8c2e41ecb2a9773070273"
  },
  {
    "url": "assets/js/108.f6a31238.js",
    "revision": "b93e82dec92e1e0c1a566f52ffd95bff"
  },
  {
    "url": "assets/js/109.a5d17ee9.js",
    "revision": "1b8f6bd44f9bc53912648325302903ad"
  },
  {
    "url": "assets/js/11.0efb8130.js",
    "revision": "5dbf412ec1043bde3fb3547e2b797fb9"
  },
  {
    "url": "assets/js/110.4af07c92.js",
    "revision": "93c39a1bd462e6db7f95095286ba8435"
  },
  {
    "url": "assets/js/111.57b49cba.js",
    "revision": "485a7cb99d2a5df192b3d25719b7aec1"
  },
  {
    "url": "assets/js/12.96f1c15d.js",
    "revision": "6e51093d92d082ae4e5cea831dba3658"
  },
  {
    "url": "assets/js/13.9f0873ac.js",
    "revision": "2862828c7562fcee86958610266f8378"
  },
  {
    "url": "assets/js/14.4b9cd998.js",
    "revision": "8335ea1427036c9e7097c600b7b5ad7d"
  },
  {
    "url": "assets/js/15.35170c44.js",
    "revision": "2049df61a50a25dfba26aa767a9d63e4"
  },
  {
    "url": "assets/js/16.17083f9a.js",
    "revision": "158ec047e90a463d931abd3441eb17fd"
  },
  {
    "url": "assets/js/17.82650f1a.js",
    "revision": "8a9a2ff72d76cbe14929504dd24f5442"
  },
  {
    "url": "assets/js/18.89918bda.js",
    "revision": "ad88dbac31096d9e757345f54c4b5a0d"
  },
  {
    "url": "assets/js/19.b0a39658.js",
    "revision": "50bf41a43ccb272c2e63a2d566592284"
  },
  {
    "url": "assets/js/20.1dead0f1.js",
    "revision": "473f7e91ffe327712e9cfa172c83c683"
  },
  {
    "url": "assets/js/21.c8d2807d.js",
    "revision": "da597da1f8fe0c1254064ec7db7ebc72"
  },
  {
    "url": "assets/js/22.8ab93838.js",
    "revision": "e9c09c0098b790fe631dd833eb98d69c"
  },
  {
    "url": "assets/js/23.f0d963f9.js",
    "revision": "40b083b46af1ed9a92f46f5302ea4974"
  },
  {
    "url": "assets/js/24.b0395611.js",
    "revision": "a1d1d054529c09392c653b8be1ef8935"
  },
  {
    "url": "assets/js/25.38e998db.js",
    "revision": "711b6d42f25c9705953293b97a37850a"
  },
  {
    "url": "assets/js/26.f52ecd89.js",
    "revision": "84ef61618999ce87d27a11c49ca414c5"
  },
  {
    "url": "assets/js/27.f501fafa.js",
    "revision": "3f2f72360229e17b88e2c6dcbe354ba8"
  },
  {
    "url": "assets/js/28.eb82a2b4.js",
    "revision": "5d1aa0eda63b4cb47fbd7e7231ddd6c3"
  },
  {
    "url": "assets/js/29.32ae47c7.js",
    "revision": "dd018c925acd4dec6a4c54fc5fd5568c"
  },
  {
    "url": "assets/js/3.2050b00c.js",
    "revision": "804910a1ee061ef68e8ba759b627e218"
  },
  {
    "url": "assets/js/30.6c1d8665.js",
    "revision": "b6b5340d759d5dcce18a74f5950d8f9a"
  },
  {
    "url": "assets/js/31.209291de.js",
    "revision": "bb59206492adeaedad47d12201c92ee9"
  },
  {
    "url": "assets/js/32.e00322e3.js",
    "revision": "c103074d79e173f4f7429fcf6da904d6"
  },
  {
    "url": "assets/js/33.3c9ce96b.js",
    "revision": "5a836de67f2b1276d3abf84a01dd1b07"
  },
  {
    "url": "assets/js/34.be14fabc.js",
    "revision": "db42db1ab1b340cdce4215a56c470301"
  },
  {
    "url": "assets/js/35.a12933ee.js",
    "revision": "f56d60558f44686d289f0d109235b0b0"
  },
  {
    "url": "assets/js/36.c2b4a846.js",
    "revision": "7564bd5c77b3e439a98b1ba3e7296337"
  },
  {
    "url": "assets/js/37.2c40f793.js",
    "revision": "f3964feb9b81a05927fc60adaef98256"
  },
  {
    "url": "assets/js/38.cac6c2fb.js",
    "revision": "e8c79341386e71b98fb004fc04305ff8"
  },
  {
    "url": "assets/js/39.2cc63df5.js",
    "revision": "060bdc57b27343ebee75988ec1e9b8d1"
  },
  {
    "url": "assets/js/4.debb698a.js",
    "revision": "aed79002394205227a883139e97fc552"
  },
  {
    "url": "assets/js/40.98e75061.js",
    "revision": "bfac4fbd92c2c0b421885fcacfebf68c"
  },
  {
    "url": "assets/js/41.0e030b7a.js",
    "revision": "e30da5a66ba5cc01fb77e16b8740d8ca"
  },
  {
    "url": "assets/js/42.59fd8b12.js",
    "revision": "4076f4f2e7cc78873fbe2dfb1ee35bbc"
  },
  {
    "url": "assets/js/43.ef6616c7.js",
    "revision": "65e2bf9656c51f96e3c65dc98b5d7201"
  },
  {
    "url": "assets/js/44.51826f06.js",
    "revision": "6175feb5b182a8a359765100f96872dc"
  },
  {
    "url": "assets/js/45.fea455ed.js",
    "revision": "83836de5e5a2fc02079109e942dde43b"
  },
  {
    "url": "assets/js/46.b0608be8.js",
    "revision": "fefbd2250cbe64362380b89a87291707"
  },
  {
    "url": "assets/js/47.a22cb1e5.js",
    "revision": "a8f2b713bf6852f504335d9d1451c4bd"
  },
  {
    "url": "assets/js/48.5e3155a7.js",
    "revision": "47f156be845a024919c0b0c1ed5cab2f"
  },
  {
    "url": "assets/js/49.c7371907.js",
    "revision": "7f8bf25eb38c1e4726f89e6172c26055"
  },
  {
    "url": "assets/js/5.5a3cb67f.js",
    "revision": "53585c0159bb02ab3846527f73c33e92"
  },
  {
    "url": "assets/js/50.b5b854cd.js",
    "revision": "b38351bdee02624477ff5f68b6df1a83"
  },
  {
    "url": "assets/js/51.9572503e.js",
    "revision": "e84c0dc3078116abd4e8bb52dfdfb0e2"
  },
  {
    "url": "assets/js/52.cb40919a.js",
    "revision": "8b1cfa5e181d2023e0d9d797bcf9eef5"
  },
  {
    "url": "assets/js/53.d2d76684.js",
    "revision": "78cedc7c80bd3101e6cacc74b296b77e"
  },
  {
    "url": "assets/js/54.2d6c0411.js",
    "revision": "6a6705fd48733efef13f14b788c79ef1"
  },
  {
    "url": "assets/js/55.993ede5f.js",
    "revision": "d52e9a6ce970e0592b32ff34e4a5895f"
  },
  {
    "url": "assets/js/56.dcf9783b.js",
    "revision": "7ef1c3acf52bf6dbdcf7f46298a31171"
  },
  {
    "url": "assets/js/57.05860ef8.js",
    "revision": "219e0cd292eb55b89fbb609375f50c06"
  },
  {
    "url": "assets/js/58.8d08cc49.js",
    "revision": "d2d3456746dbba786b6f550d7ed1c490"
  },
  {
    "url": "assets/js/59.7e31f966.js",
    "revision": "44b21f9e7afa25241026325b34e56e35"
  },
  {
    "url": "assets/js/6.450c1134.js",
    "revision": "417e429d927796f4a28082fa32a1f311"
  },
  {
    "url": "assets/js/60.d37c66c1.js",
    "revision": "8f8078538023308237e22efa6d3229e5"
  },
  {
    "url": "assets/js/61.7532b546.js",
    "revision": "b4443a1cef9202cce1d89d45d9ba58b2"
  },
  {
    "url": "assets/js/62.fcddbadc.js",
    "revision": "e63e8c320a7834949d1434f9604d1286"
  },
  {
    "url": "assets/js/63.24e433ad.js",
    "revision": "613c24ba7585f7f07fcbfb19cbe2344d"
  },
  {
    "url": "assets/js/64.15c03fca.js",
    "revision": "8cc401b17941d8215f61d5f46c39964d"
  },
  {
    "url": "assets/js/65.eb37a4f2.js",
    "revision": "4c9a35a941794bf717837ddc8ca34373"
  },
  {
    "url": "assets/js/66.d470b7d4.js",
    "revision": "28fc58854fdb53ad150e6e4f38150d44"
  },
  {
    "url": "assets/js/67.66bfa59c.js",
    "revision": "f4cce1673cac8471aecf15afa4d2bda8"
  },
  {
    "url": "assets/js/68.31d9d5b0.js",
    "revision": "b11242617f84c2a69d5974db15763061"
  },
  {
    "url": "assets/js/69.f7a75253.js",
    "revision": "d8f0c166ee662c7c04d7c43f48f88979"
  },
  {
    "url": "assets/js/7.9ee81785.js",
    "revision": "b3c7be723b97fc206092524346c359bf"
  },
  {
    "url": "assets/js/70.766d13a2.js",
    "revision": "e5598999e81b77a0c35cdde19fb0a476"
  },
  {
    "url": "assets/js/71.2cd302cf.js",
    "revision": "5d9a9ad176d722590551e59e95ec8b33"
  },
  {
    "url": "assets/js/72.6ed7a72b.js",
    "revision": "7da52e5640feeebb980945257aac0ff9"
  },
  {
    "url": "assets/js/73.23111482.js",
    "revision": "8ee5b9b0d136482062e8b9c99fcf5980"
  },
  {
    "url": "assets/js/74.b6cdd8cb.js",
    "revision": "19e400ceaea40bb04b421439744c7c8e"
  },
  {
    "url": "assets/js/75.c784938d.js",
    "revision": "3f5fd56d804abd2f09d476694f07ab0d"
  },
  {
    "url": "assets/js/76.b0cd775e.js",
    "revision": "00535baf6e719734b41f6458c03c5bf8"
  },
  {
    "url": "assets/js/77.2a529116.js",
    "revision": "acd0dd899522666571b3c5f0808f6766"
  },
  {
    "url": "assets/js/78.33a061a6.js",
    "revision": "8541b70a3d1b287c36c42deec42258ab"
  },
  {
    "url": "assets/js/79.929cf07a.js",
    "revision": "e93a5bf7cb8bb2726c6696ce8e981458"
  },
  {
    "url": "assets/js/8.507e03f8.js",
    "revision": "098badda83ff04aaa8a9f9cb2f82cc31"
  },
  {
    "url": "assets/js/80.6dc6aa7b.js",
    "revision": "1faf55151c4e37ad4d945b999381c6f0"
  },
  {
    "url": "assets/js/81.cfe477ed.js",
    "revision": "7a285b879b381dbe0681e6c7b1b68a9c"
  },
  {
    "url": "assets/js/82.eb97a4da.js",
    "revision": "989b4d31fb7e2b497c6a4d4716916131"
  },
  {
    "url": "assets/js/83.fb8c5797.js",
    "revision": "9836a7ebe11d6ca6112abbc586ade757"
  },
  {
    "url": "assets/js/84.579c58fc.js",
    "revision": "52e7101b7e2a317d6a7998c30fc1fab8"
  },
  {
    "url": "assets/js/85.d97c4c21.js",
    "revision": "7a213bd20f13bbea4bbbc027f903b5bc"
  },
  {
    "url": "assets/js/86.0e0fd575.js",
    "revision": "aefcfe4a568a6d4da40a1e9f4eb3bf44"
  },
  {
    "url": "assets/js/87.9e982507.js",
    "revision": "c61dec2d2f487f6f860562fea4e30284"
  },
  {
    "url": "assets/js/88.e0bbd884.js",
    "revision": "dba88f47141cf74b7984e6f385ac955f"
  },
  {
    "url": "assets/js/89.66926608.js",
    "revision": "3d0ce620b7351f9b05225628c5f2452a"
  },
  {
    "url": "assets/js/9.de55d367.js",
    "revision": "b649d4e33d587497941d317628d1e173"
  },
  {
    "url": "assets/js/90.962ae13a.js",
    "revision": "ca5c551d8d3ba3e8b9b338c377a410e2"
  },
  {
    "url": "assets/js/91.dc4def9e.js",
    "revision": "a0f54dde5db7db3dadd97767fb264e73"
  },
  {
    "url": "assets/js/92.e1913031.js",
    "revision": "832e232a4ece387c69ec61c37fe9645d"
  },
  {
    "url": "assets/js/93.877c64f4.js",
    "revision": "b476cf260a1c0b40bba661cafce627e1"
  },
  {
    "url": "assets/js/94.05fdfb16.js",
    "revision": "94e8f33ee373242c4224490e22e4a8d2"
  },
  {
    "url": "assets/js/95.d50025c4.js",
    "revision": "7bf1e57f2dd17800a76c4696db843a30"
  },
  {
    "url": "assets/js/96.ca44b18a.js",
    "revision": "7c900b2de83f5ea94985935ff4a3f0fc"
  },
  {
    "url": "assets/js/97.35239448.js",
    "revision": "22157e5246c7ec97ffe90e88d8b1ae18"
  },
  {
    "url": "assets/js/98.ff2f81b5.js",
    "revision": "e276de721bafb35c78e8c2fd379ade9a"
  },
  {
    "url": "assets/js/99.5dc460ca.js",
    "revision": "3f6b03258766b55ddb87ef3b357a08dc"
  },
  {
    "url": "assets/js/app.6e59810f.js",
    "revision": "02f1c5de09bb46c8015adf78bc9dfcce"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "33c9ee1fdf93f43028fe3b8b098cf7aa"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "8754c8481511457dafb930ddefe42dc4"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "c90515e975436710865d5150b7ed03b7"
  },
  {
    "url": "tutorial/index.html",
    "revision": "cebd3b32d7a2f53765cf2324218eda4c"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "21d6a69f07f8f9db31c9f6103ae69df0"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "042620d43195e3ff36ab8a990e2fb64f"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "ff4b05e620ab9d288e7a04b1fa669b94"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "85421e140e7f07df9f0bd280da0ee80d"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "939415d2412c158a8df0b6cd8c5270f3"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "b8a4bf64b9cb7b15f91e7212b30280a4"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "22782f2fe5499bb73ba8ac77eaab9671"
  },
  {
    "url": "zh/api/index.html",
    "revision": "e12d9186ed424a8d32468dd57343c694"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "b6bc11f54976b2cbccc64ea18f318de5"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "ae2bceaa7252e695e7b336b607fe0e76"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "15f0b558e4a3f46564beb3088576e02b"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "03a38e36fee28f52f9540d69b391f1de"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "2b6ba8cec4e4ca81e4694987aca47b12"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "627fa00d9bda53be3f381e119f589138"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "c1f9175aba0466c90114ce162122cff0"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "045544911d7f6fd14d4cd38ff971dda8"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "12b117cb0d1773f13731b1f04633eee9"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "388e7939e9ce21d9cb1afff35af1fb9f"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "526ad116ff942514f8b5296abfdf26f6"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "5909e5d5e22f72b5f80139b16701944b"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "6b77a2175f08c6ecbd5df51ad6a14a7a"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "22f990d374ff5108dff3d885e66ec419"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "425e4b5a9979a9fb564d9d0abdd094ed"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "61663d3ab5fd96996c15745b98a2c956"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "7ad4ee80838f4c678609a63c6d9b3253"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "f9991887c1c2cf1c291276a1a978200d"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "eb36bde5789b0ba94aca3bdc40cdf84d"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "6a47bc1b50c61b5992cc989367ee0541"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "34af8db6477957869a3917bd693956b4"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "a8a58d495820e74da9538cb72203450c"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "5d2644304ac3d7edf400a0dd4cfdd10f"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "a71761263a5671bb7d92ca60b1e75b4c"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "2078c014daee91e468c406f443efbf6d"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "2beb3dcdb4abb2f768b4da876a62545b"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "154fed0925e734c4f1b2f1dcd3e2eb52"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "8a54f98334f6cccdb3810d748cc42aab"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "07b4148fbbf044f8af7d74196e2583d0"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "c7b83d32ecca7c2412d12d71145c59c5"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "e120e0e02573408eaedfc697b95f7c4b"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "5b740702d4cac057ca05a616233452d9"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "fe94ca5c5fa7e11cf779a5bd5e270b9e"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "69f937c0b942fe668b1655faa5c9f2ee"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "1a6fcbb4b8d6116804cd821c1606c158"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "9b785524bf9f397f6b06e9e28ebd7833"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "adef458f2860e5a57c0bb654c46da703"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "22f7606cec1f4ad56cf2ba4762f181d2"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "543766be392c16eb3e0e7714eac70ad0"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "5f6d1a5db644c1aa64b405d6b88ccef9"
  },
  {
    "url": "zh/index.html",
    "revision": "f11fa29097e158844889b02f2215f17c"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "e7b5f4c459f48a4f814da4b45d48c2aa"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "8d729cdb45a014d4bc10697834d396ba"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "f0ae9d6234dbf4742dbd897eba5b577f"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "218447a05601b7b8fa635fb8c8050eac"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "086c492c12aee39f51cf676aaa035f97"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "7377a2957714703e05dd282881a0fe1f"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "ee213ab8b8058b57f1ec2490e6fbbc36"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "a396c54d13beb9f709a2f0a05650d80c"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "8900968effa8d56c395f8a508750625b"
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
