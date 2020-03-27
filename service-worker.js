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
    "url": "api/index.html",
    "revision": "3951e93addd1ef20de042b12baedf3b3"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "0f3348f900a9fb055b2a3b7cece5fd48"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "fc4ba3f9d80275a797cabfe1876b7418"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "f0f54694a3a42dee2ee299dbb887d5ef"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "ae79cc51f83535b63f31fc6f7cd58d7a"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "424d5da5470373c96a11c68a3b14f418"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "dfce78d14d4dad4afe287da815045092"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "4d043d09e5594c44270346f25125b622"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "8ccdd03535b80979458fee782abb70f4"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "1b6be00b57438c78a879b164d7fe9fce"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "d79836a427ce37693807b79b0c232616"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "12c0d0816791abcdbefc7f45b799a9f5"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "37588faf26c63547fd03d6cd686ef78c"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "86f921b75eb16085c523d7936d9b97d2"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "11faeab6a8c55c2a96100c313168d528"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "817a05e730c2695a96770d48a393e766"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "f485e6c4ba9eb68c0d154dee39f6ba8c"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "48f2d22e9fab06f0b4affd8ef251f0de"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "0cf043e7fae615d507df20139593b0fe"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "d8aa6db6aa1b98bd297e63f0ebea667b"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "3c6db7f2340eeeff62cce1cb5b965513"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "9ace3477e1df34529115e4a88066e9ac"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "d1ab803da81d8c0ddaf0295b1e2899db"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "f91a799ab95c3cafd2d3d4e26578f451"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "0edb4df1fa58d7109cab6d36e52eaaee"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "2239ed447198edd0987ce8756ab77bcf"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "cf5dd52382ac93066db64df8ed2c9358"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "02093fd3c09f8887b09b22ff71186c18"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "6a1d97d7b05d684f983d0b1b2354f96e"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "74ed97df00a0390658a3fb6cfddddca0"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "36d92c641d309bd432508f14d62b51c5"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "fcb62bb9a9281d164a371cf022bc3158"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "8dfb7e31cf91d0e19d5f266931582468"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "e823adf8a0d0302e23a0ccc2d5f3e674"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "e7b924252e0928fa4b70f614c4d54b25"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "c8fae2fc240f1c10bb695e814cd75564"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "8566b856ac45ed4bd3c4494e30669e7c"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "b36d5b8ed018eb8e41c0aabf90ff0eba"
  },
  {
    "url": "assets/css/0.styles.f327b371.css",
    "revision": "d260d5fde167e43cb4a6c3207fe47bbd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3be2ee92.js",
    "revision": "31edff211d24dbdcd0776ca587147d85"
  },
  {
    "url": "assets/js/100.c6a90f8a.js",
    "revision": "9fc4518f73489d7cd8401059f463d155"
  },
  {
    "url": "assets/js/101.88fdfe18.js",
    "revision": "374143fa04bcfa12ce06c8b5a04f04cc"
  },
  {
    "url": "assets/js/102.a7a81df3.js",
    "revision": "f4a524f759f48e2b4c1b257e7e4c4fbc"
  },
  {
    "url": "assets/js/103.ecdc18da.js",
    "revision": "b275093d27f01ec315982bd315aecc14"
  },
  {
    "url": "assets/js/11.47369064.js",
    "revision": "0e0968356262ce73d83164dcdbf00f43"
  },
  {
    "url": "assets/js/12.f571e98e.js",
    "revision": "a51baafffd8c3950bf2b4be5b698f195"
  },
  {
    "url": "assets/js/13.9196d3f9.js",
    "revision": "f2896e3fed675c34f258e1a69f3562c8"
  },
  {
    "url": "assets/js/14.dfd69050.js",
    "revision": "c8ff85af9f13337521f4ed1a1177aa60"
  },
  {
    "url": "assets/js/15.de996f7e.js",
    "revision": "58463c688c4cc9d5bdc6c4b4ae05755f"
  },
  {
    "url": "assets/js/16.60d77086.js",
    "revision": "40c5c32f8c095364015676fcfe85186a"
  },
  {
    "url": "assets/js/17.ea9aa2b6.js",
    "revision": "eb167d1a88023f559ddf1912026a2a3e"
  },
  {
    "url": "assets/js/18.8d6ec844.js",
    "revision": "977ceaaaed865d5fe99a41f37e4af2cc"
  },
  {
    "url": "assets/js/19.53373db2.js",
    "revision": "306b02d124472d72c7afa248e27f3a27"
  },
  {
    "url": "assets/js/20.c2808fad.js",
    "revision": "bb775c5b03c3f0215800502c022ff958"
  },
  {
    "url": "assets/js/21.bf69f251.js",
    "revision": "34d7838cd2e94935271d5eafa181bbe1"
  },
  {
    "url": "assets/js/22.8146c22a.js",
    "revision": "768cceb2d1beafbd1b8d4e7bd6f68960"
  },
  {
    "url": "assets/js/23.267fb017.js",
    "revision": "66fa10ebf848f96e51ef2c5ab1807798"
  },
  {
    "url": "assets/js/24.71e6f9b5.js",
    "revision": "63a1c9b95a1534785c1a4ff6dc48600c"
  },
  {
    "url": "assets/js/25.7d5a760a.js",
    "revision": "7b28657dd1dbb3a522349983a9e6ca0c"
  },
  {
    "url": "assets/js/26.a5feaee8.js",
    "revision": "2d08e5babf6eb653c330ac1b938c609d"
  },
  {
    "url": "assets/js/27.136bfb3f.js",
    "revision": "8db5d68e59876b12cbe54d30904f52ed"
  },
  {
    "url": "assets/js/28.fc19c31f.js",
    "revision": "1bcdb4058f5d2375ffb3cac78f4ae4bf"
  },
  {
    "url": "assets/js/29.3bc60a75.js",
    "revision": "225e3d5596feaafb7d21cbbdc8dce693"
  },
  {
    "url": "assets/js/3.794b7c01.js",
    "revision": "5429eb5448778cc873354719945b2b25"
  },
  {
    "url": "assets/js/30.99c2dc28.js",
    "revision": "c93f472bbd62d4e999c9a7f461ba81b0"
  },
  {
    "url": "assets/js/31.abdb66e4.js",
    "revision": "43fc011d77ac052e85d86a2d91bcd8a3"
  },
  {
    "url": "assets/js/32.4873b141.js",
    "revision": "5bb4a2834bcbff831b9015271285206b"
  },
  {
    "url": "assets/js/33.00b14c62.js",
    "revision": "ec64d535cc0d0b75b6d2182baf6cd6d6"
  },
  {
    "url": "assets/js/34.0a65b573.js",
    "revision": "12e99802e6cce6783fd3578a7a8b475c"
  },
  {
    "url": "assets/js/35.aff7dbd0.js",
    "revision": "83a75523aaa2c3859a2eeaf4b2830102"
  },
  {
    "url": "assets/js/36.877ade53.js",
    "revision": "ba844cddf570d1019794ded0b9e7dd7a"
  },
  {
    "url": "assets/js/37.479bbafa.js",
    "revision": "73384bcac7f87961e52c53fc2bbb3440"
  },
  {
    "url": "assets/js/38.6ee7c916.js",
    "revision": "9167f691b2e4ac95acf490c6e85766b5"
  },
  {
    "url": "assets/js/39.fac5ea26.js",
    "revision": "32a4150984abb72897e80fda568edcf1"
  },
  {
    "url": "assets/js/4.df202c60.js",
    "revision": "1ea941713863a23ebdb525827b75a83f"
  },
  {
    "url": "assets/js/40.92e82f4b.js",
    "revision": "33162e337bcceb57a82ff15e992b25ef"
  },
  {
    "url": "assets/js/41.841aa58b.js",
    "revision": "f31f97a0934a8e0d87e58bd664d300c8"
  },
  {
    "url": "assets/js/42.5799e4a2.js",
    "revision": "0a594a859ef86d3b377bb0c061cd57d3"
  },
  {
    "url": "assets/js/43.4f7b25ec.js",
    "revision": "05fb0d7b4b76655a5df432bb0cf0e867"
  },
  {
    "url": "assets/js/44.61403dad.js",
    "revision": "a1f9fee796f0f48d8dc824bff0fd5d67"
  },
  {
    "url": "assets/js/45.ce33f440.js",
    "revision": "5f7a07e457f98b3a2655db6d642d4cbc"
  },
  {
    "url": "assets/js/46.d7d2044e.js",
    "revision": "ca440a924f2273130306b428f54d79f3"
  },
  {
    "url": "assets/js/47.d3c5d8a9.js",
    "revision": "a464de48e6411263bf2a184f8b0239a0"
  },
  {
    "url": "assets/js/48.0441fbe1.js",
    "revision": "8bf1b9a572bd913074573c2661470d2f"
  },
  {
    "url": "assets/js/49.0ad56582.js",
    "revision": "2994789584afc10e36ce6373f7438cf9"
  },
  {
    "url": "assets/js/5.1ea23d18.js",
    "revision": "909bb089e45ffea697ea077a3378f6df"
  },
  {
    "url": "assets/js/50.c401bb02.js",
    "revision": "0024dcd2779bba4e59e6e93f22429bd2"
  },
  {
    "url": "assets/js/51.fffbe63c.js",
    "revision": "527ef3908b32b3853f97f28cb6f34ab7"
  },
  {
    "url": "assets/js/52.a71d850a.js",
    "revision": "75d7607a179f0656263c4b40b506c148"
  },
  {
    "url": "assets/js/53.89dd0e99.js",
    "revision": "51f0d0110a8b5fa0aad0bd9cc9b8d486"
  },
  {
    "url": "assets/js/54.db6ea475.js",
    "revision": "24ed6dba715be76eae40c6c6e59a710b"
  },
  {
    "url": "assets/js/55.63c18cdf.js",
    "revision": "00c0c29925dcf1d171b2c1f2c4be7fcc"
  },
  {
    "url": "assets/js/56.f5e0fd86.js",
    "revision": "3c3f65a3160ae052f8074d4b677a9255"
  },
  {
    "url": "assets/js/57.f03b0bea.js",
    "revision": "eaf2150a8c5167cd6e3e2995abd95bad"
  },
  {
    "url": "assets/js/58.58c8ee29.js",
    "revision": "b0abb6877ca8f51fe041108f372ffaaf"
  },
  {
    "url": "assets/js/59.2c8e71e9.js",
    "revision": "99623dd5ac41175636cb60cc442ee4c9"
  },
  {
    "url": "assets/js/6.0c7ae5ad.js",
    "revision": "87f31672dbee4ca9f9fdbe00635c3adb"
  },
  {
    "url": "assets/js/60.2bf3e2ef.js",
    "revision": "659347eca44d327af7a05e36ed16a494"
  },
  {
    "url": "assets/js/61.d8f1d466.js",
    "revision": "a85837c19963d19333eb07d1884def7f"
  },
  {
    "url": "assets/js/62.5792fad0.js",
    "revision": "c2c441d5b8be35f4ef06bef704546842"
  },
  {
    "url": "assets/js/63.761e411c.js",
    "revision": "2c55ebc383c1c0924b5ba5b35d096c8f"
  },
  {
    "url": "assets/js/64.1dcb162e.js",
    "revision": "e5175950d1967475b50262593b7a037d"
  },
  {
    "url": "assets/js/65.ffbd585d.js",
    "revision": "9a838f9b39e2d16d15dd5b0435286eac"
  },
  {
    "url": "assets/js/66.f9969f73.js",
    "revision": "c6ca5c35621993910b81dcf9e83d80b1"
  },
  {
    "url": "assets/js/67.1cc7d6b4.js",
    "revision": "5e8b4a66fe1a84768b69c4374037e904"
  },
  {
    "url": "assets/js/68.5efe79fe.js",
    "revision": "5f999ddda330e24ead92ae64ceef67f6"
  },
  {
    "url": "assets/js/69.7e3224fa.js",
    "revision": "c6ef6f06c903876c2bf6350c6bd34c1a"
  },
  {
    "url": "assets/js/7.49ae3cc8.js",
    "revision": "07985bd617892e390321c5b3e4b8580b"
  },
  {
    "url": "assets/js/70.a54efdb2.js",
    "revision": "87c48a70c941bd10e6bc209b4d935ee1"
  },
  {
    "url": "assets/js/71.d0287c67.js",
    "revision": "0a8007d437d9d549e9d5d76ac6f41f36"
  },
  {
    "url": "assets/js/72.57617a21.js",
    "revision": "89511de999c01f19a92c7340bb709d2c"
  },
  {
    "url": "assets/js/73.ff93d2c0.js",
    "revision": "599616cbad787aacdd7f1797194f0025"
  },
  {
    "url": "assets/js/74.5323379a.js",
    "revision": "e178ec147a8944147ebd91958f030145"
  },
  {
    "url": "assets/js/75.45d50b82.js",
    "revision": "2cdcc666f54504cb83c0c6cdbeb88cc4"
  },
  {
    "url": "assets/js/76.7d633547.js",
    "revision": "80a937a666cb1479296ed04496ed9ec8"
  },
  {
    "url": "assets/js/77.d9020837.js",
    "revision": "c40eb03a8788440f1eb8ee8786dd9632"
  },
  {
    "url": "assets/js/78.ea3db96c.js",
    "revision": "d6981e6dbc7376a58be7bf68ed864da6"
  },
  {
    "url": "assets/js/79.cd629fa4.js",
    "revision": "7ed9c428934641bfa19717ea6d14e7d0"
  },
  {
    "url": "assets/js/8.99670123.js",
    "revision": "b1fe8ac98ae0de8a9bb99a54680bab85"
  },
  {
    "url": "assets/js/80.094b9f46.js",
    "revision": "f0c126a02c188b54277aadd96af53b88"
  },
  {
    "url": "assets/js/81.08b2fcb0.js",
    "revision": "a0e94cb04cc704ad193c2805ccc106d9"
  },
  {
    "url": "assets/js/82.e7ff79b1.js",
    "revision": "3e0935e0f8533f559172574c1b25543c"
  },
  {
    "url": "assets/js/83.5dc17ea7.js",
    "revision": "3e3fb32f281d99c339744d237894a249"
  },
  {
    "url": "assets/js/84.32c2bcbe.js",
    "revision": "bf9558b3937245f5e720a2b0933a5d77"
  },
  {
    "url": "assets/js/85.7836a58d.js",
    "revision": "c3e081187ef4645b19b5b7b0fb4b5ba7"
  },
  {
    "url": "assets/js/86.053721a1.js",
    "revision": "6bed5d861822813e55a03a5d0178d08d"
  },
  {
    "url": "assets/js/87.900fd679.js",
    "revision": "6db392cbc67e07906d6a7eb3c118fe82"
  },
  {
    "url": "assets/js/88.328c3ed6.js",
    "revision": "cde31dbfe89af473fd6b8f507d1a6a38"
  },
  {
    "url": "assets/js/89.048e26cd.js",
    "revision": "dfcdb60b85d6c76b8f01cd90d7204b7b"
  },
  {
    "url": "assets/js/9.6080544c.js",
    "revision": "19916ee55b6b03838b26c713ff55f75b"
  },
  {
    "url": "assets/js/90.7200f0b4.js",
    "revision": "d9545e470cc81061d3db85bdab92141b"
  },
  {
    "url": "assets/js/91.ea3fcdc4.js",
    "revision": "0d5698e27b1cf75d5896aedf194bc822"
  },
  {
    "url": "assets/js/92.bcfed25e.js",
    "revision": "d6d7286405b006203744f504f6bc3892"
  },
  {
    "url": "assets/js/93.7021f58f.js",
    "revision": "78938cd77018d994d21ed315ea2d53fd"
  },
  {
    "url": "assets/js/94.7b95059e.js",
    "revision": "30f58240a49b14b10824c892be237f47"
  },
  {
    "url": "assets/js/95.868ac908.js",
    "revision": "890313826316d64a19917db01aa66ea6"
  },
  {
    "url": "assets/js/96.d688e39b.js",
    "revision": "e480a48e6d4fc7d185c67494c6f10fee"
  },
  {
    "url": "assets/js/97.621e9722.js",
    "revision": "ad17b3c47d9ecc737a9a318a200b151c"
  },
  {
    "url": "assets/js/98.21b79697.js",
    "revision": "41c0480c91c3d75d93f839fb3fb318b8"
  },
  {
    "url": "assets/js/99.5b4f8795.js",
    "revision": "5ab024699559a7d62b472f34dfddf870"
  },
  {
    "url": "assets/js/app.13142206.js",
    "revision": "4b30ce32e2a4d29e5c6d71b36a87c1b0"
  },
  {
    "url": "assets/js/vendors~notification.a95cab3a.js",
    "revision": "a02b70488e523628b4d90cf963755b74"
  },
  {
    "url": "i18n/index.html",
    "revision": "5605811ff3892c93b9437c7d0006d6a2"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "73da4bdcce71ce6c3de039b7d7e0687b"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "8c33e6d317a8a47d5c6ca40d4f2f086a"
  },
  {
    "url": "tutorial/index.html",
    "revision": "0e80e7070b4fe587c3ab185275f1fee4"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "890220c4a990f04c0d210a1fb7f3c78d"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "5f3dc43d77b41b22940a98f7450764f5"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "f2cbfb5dcb56f6e8446bad5878f49698"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "c47297deb0e3ebdeae418a46b7f199ec"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "f864da9365633bb0bee38b1c92d36d5f"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "03c8587eb2c9951a09a0a810222b8e16"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "664cd5ec242fbe89872b1f017127c550"
  },
  {
    "url": "zh/api/index.html",
    "revision": "851575df9a668f1e4e3cf8a77a5d24ea"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "c1f8bb8a648912791a21a826a5c0ee1b"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "0c64f32f5518234f7b738e572d25808f"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "ec36e1303d73fec5c4398b40d7f968fa"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "fb4b50e8c9b558302289446361335a6e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "9e279bd721665647b54723ca3a34c5c9"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "6e2ea75c089bd50271b460f52f6f546c"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "59f3cbce5d776b7967f8eabebb124313"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "e29673adbb60e20fe332709beac8abfa"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "04298d1187c0f016350f2990d5a2d54f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "35e7858438d213132db5be1707c63203"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "42712e8f45bc3c26336f1fa554e2344e"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "89c9937bac1945be555f926f6817b40c"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "bca6a8be76ced98787b33208e8fe17b6"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "1eb07b6a906098156ea967d0ad85a11a"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "be7e42067729cf7d83dad3bf73631686"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "08f244523cdeb6ccd9b2742253c907a8"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "6b3139aeb94ffb4e1f3ff583559e1fef"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "b5c9b367ade5f435ac054997f41aa47a"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "c2e5fa4a9375047e61bee856b87098ef"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "fbb2dbd439881dcd8f78832028b71054"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "5581b148395be554ff5a60f97cedef47"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "3deb04f6797f4c79600c82119c14d479"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "3fab6db1b346d4b7bde568f1fc8943df"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "d16f4b0ca8c60ab855580be760b3fde8"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "7db15089edf395b847fdd79239a45bcd"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "ceb15e736af62f96822a0ab154503533"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "680bcc6c70de46cfb1c207ab66eb68f7"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "a4ebc8457468a663425beb1873cb6e7e"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "0d9d76f31a17f802d02880082adde242"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "2bda6877c96d53aae38d53aaba946a36"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "2c2de37fc7ac9b0c664d9bf3c014a93a"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "04a705dc9f5e0f5599102b8da93e37f9"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "c094aff9261f6b44943660587784c390"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "0b77745dc5e93096fff2461118fa6f90"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "21f815cba3366c1210b621ce0f195508"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "94cc39d8ba657cd5cc21ed422ed80b7c"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "87a32f12f63661704d0987d93e208960"
  },
  {
    "url": "zh/index.html",
    "revision": "553421888f492c36e7a5a5d07798fcce"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "bde92f5d874d332a5059507a847407a8"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "5446119e461937fd9c54d24b5289255d"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "a0851290816e6adb8c18c288d0883c95"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "0eb4a21e53c0e37f211f31d5480a2073"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "cf46cadbd7fda0158d18acad87556e44"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "b94bfc793cbbf0c4e595e1c46d04f8c4"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "fee4b81910c03475e260a71a97d5ea73"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "65651ba7aa936d388d6fa06650f4fcc0"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "00e119282a13f9c815d57eb464154efb"
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
