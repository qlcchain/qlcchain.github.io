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
    "revision": "d1aa93e7b3867e6ce7037666ce93ecc0"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "70fd8577b4c08f2eda4581801ec18950"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "777af31773314c3a8f03dbf0f901cc44"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "6ed110d4a42688edd61df97a18bb0bec"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "2c79655c4201cddfca90a9233b731f3b"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "a77e4c2a5ba4353e44f2dcc2ffdd8fd8"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "6acbce969d16bbd937585d1b030e8131"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "7bb3c4e203cf6eb4e4ea41dd5128a28a"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "32286476eab79c6e08e95a18c9950cc0"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "149bdbc6740cf28742ce366427c73bd0"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "3c2333902e65cbcdaa9c268f7a7b1cc1"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "0c8158ee98059a1d4ff232dd737f1527"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "11c53248add4403628f425119e851c84"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "262c51307722f2041a31507d108335b5"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "400cb3893fa6ff96630d81b656cdb329"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "53fca3050dbe6d3fb18838b2304d10c0"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "83b046fa0832a8087d5d92e220fbf5ec"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "813c95d6e2ff5aeacd1464a6663af195"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "61ff89936a77b9f866680ce432cb9f23"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "2736855bc4a8c9da76ed41b737ed12df"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "591abde0ab04bccbf3bfd02c80991c25"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "46694ca1d962494446b4e5b8fb25a694"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "20e3b366db13266419cddee7083b1859"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "7b0cfe52e50af0337b63de552eac4f85"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "551b2335e080caebb5771ddd13e2ecb7"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "210de4675c5a5b999070dc5c5e488778"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "6a5ba78916b1fcea3cd23b791c0d83d3"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "29abba12364909769f8930b0996822cb"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "c39cc15664735419554d6721e92bd177"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "996e8dd506fe51a481d74ba6a66fbabb"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "9f06c824b200be04666b6bb026d6d489"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "356551a4246549c3b30aa0eb2a924165"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "5946fce43b2ad0da8d6fe3096dc9e463"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "35eb4e674c3d6a3c2c2251f8840de915"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "4f64854e0d708090b50606c2158861c7"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "054bcb7e8e5855b6cb451d543288a631"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "c9abcdbf8987d57f2e4b3c3a05a8a6d3"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "3d25f7f6cceff63d762c575ec13d0af7"
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
    "url": "assets/js/43.c37c2375.js",
    "revision": "4300b1017a03785eeeb9a0a5ac8f2616"
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
    "url": "assets/js/91.29fee181.js",
    "revision": "c9e44a69bfee0068da2ab43b12af36ae"
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
    "url": "assets/js/app.05741701.js",
    "revision": "5bfded9965d570d8f2218fe9adfa5ae8"
  },
  {
    "url": "assets/js/vendors~notification.a95cab3a.js",
    "revision": "a02b70488e523628b4d90cf963755b74"
  },
  {
    "url": "i18n/index.html",
    "revision": "a071cf75b78b054154284e399f566540"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "73cb3a6b8eac3245e657fc0ae6ca9320"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "2c54454c2bf304d90882590134bf1ad5"
  },
  {
    "url": "tutorial/index.html",
    "revision": "c35f7d679ad099baf128db6a2db925d6"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "9b69df360ae61a15b88959ede610e3e7"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "fa66d6605ab93ef8ad90a4230c877656"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "15151a65cd5c765f6ebe8c68e18bcff7"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "47ba811666114de356ffe72abf426845"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "8d514c0c3cb2415c512bfd051ebaf0c5"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "7bbbe8ceca1dc3ec5d9b4940c236ba59"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "05516c2ce26294d4509c661ee97f89a8"
  },
  {
    "url": "zh/api/index.html",
    "revision": "caa37cc0b90da2fae4db6fcd5c219e1e"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "417967f43d3eb685d332ab991eabe43b"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "8f51b72516199165576ccec2ae5f0d56"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "885dc668f60fe5b8bd92cae878a99fb6"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "9f8e5c413004fb1bc65aa6412172d53a"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "968bf1503b7a92602bf6693082564ede"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "03800a77b820fe5ee16aee69f1d61024"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "5795b98034cef5d659269739a2b85ddd"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "0e5bad2f7076a40b26174df870928e84"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "7fb1029864e35ddcdb5fa7f6d465aecf"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "fac57fc697ba2da09ad18e5e6c7d6241"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "00916a3d905e13e0600cd21862693862"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "c8af0d88238c7ee01617e5c5e3c09afd"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "cb06deb02ba5252a33fe9bb8e4c46a48"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "b8ed5d34da430191b97aefe882a06a48"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "9350c8ff59d8ce91d58c88f2923918ae"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "631fd01d1ab383c1de2a2174b353ada8"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "832556318cb6dca8fc52ffd4aaf731f4"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "7e019a768dc9b4de241e6d317fdb02e6"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "27ff1eab319fd1898bbc2108b380b931"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "bd1324edc5496800ff920ec959a51d05"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "568ca412365fb105c942c1d4eaf5779e"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "380636655ebfe2b50451247d1bee92eb"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "9147b98a25ac618de193f5ecc3a70ada"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "31c77e34ec48a1bbecfd9e8381c67bb1"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "9fe72dfa242338ff819e2e8ab34907ab"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "ff8d52147275a5ae70cfbe89cce8798f"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "0c607782d75071c88a50e20f29b0a660"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "010f85ab1d88ce6e7bdf0736183cb114"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "9e152200ef940febdbd5152e17542307"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "e0c2f4a088005133a09b097e878fb7d9"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "dae058e025f4ce0fde72feb1dccb8e2d"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "3a3d05e7c7672634cadbdfd25435626b"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "2bb91440c02fc4d76a8117762dd6ea81"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "62260b8b47c63e1ec99c2f9460b14393"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "74b1557282178597cd9bbfaed17debbb"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "8f37eb98b82cb43d4c17b98ebfbd9601"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "81944a6f404e52345d0700c317f6779d"
  },
  {
    "url": "zh/index.html",
    "revision": "ec069f79c68b08a3e55a161071312685"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "0e25882f3f64eda9538d3d1cc671656a"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "44f389614a78e2994d87c92166c6aa6d"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "98adae9799883ae96e5338f67dc2588c"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "842bd95e61a0d2aed109caacab575b77"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "8200ef004d5bf40126fba7de9291bc28"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "ed42b56ec382e891f9049f0def911c21"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "2ba75bf017a328f231482df1ff41c2e3"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "e8a49f930200092045c5429532cfb39e"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "5261d25e3e8c5a0fa5c218ae0f3e3ce9"
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
