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
    "revision": "3e2fa96181a1bb9dadfd8d56e726d9e4"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "c5d923bd607f963857d665bf96379af8"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "50eb3c920ed282dd6547df7a823f26e6"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "89b814563b761818730b71b4dfc5bcb7"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "086303288d9600add03cb1fd681557a7"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "aede4f067e9eedda6f6a154460841b4b"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "87fb51c447205059093752e5d0aa98b1"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "738775977bb76e342e7342f63cd22e1b"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "823ab2f364a40810589db7d5235f65c7"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "6895de268df319112004bc34cb1db173"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "8d4a5a95669a6829cd1f1504388ed4bb"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "1f0f9697a6192b5c0baeffb1b3a3b9bd"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "dfcb2d0b95a838c825b0d76f7046fb89"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "29430aa8e7b1f4ef0497ecdca81dd2b6"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "82d6f26f3281f3260019874c75347fd9"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "79ddadbc8e59b67dcd382e725cd46d71"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "c49c50f7395bbcd70895e5206401e8ea"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "35f0164d28c2348bafb683f4aad05fd2"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "4b69be97b2885fb0821bce00ab28f3a0"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "1ec08fe963e867000da15877a5a9860b"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "1c40eff93ba59ef10258e412a970df35"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "6ab538146fec4bad8999ee711dcc6b0b"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "d2381faaefcd56593af4e6b2a10c1016"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "37bcf9ab06f8c5bbf899902b374e4d4e"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "9abdc929af78787120b622259adcb9d4"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "084a9b9a8958d1b4b95b74b9e16fe909"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "433e32a45d9a2b1b3b90577446d0a5fb"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "1b94cf6956aa6061a535fa44f40773d7"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "21ad4ab2bf148d899ede5777053758ab"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "e3c234e70d949b1a7b56d448b803a9bd"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "3016d37f670ba2b0f49ffe465c1cdaae"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "6ea51b7d43d92817f85a891b94f369cf"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "dad29ec462db8e96357c29901e9e01d8"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "c4daa5a5fe5aef0a08df87d83457b21d"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "7e33e505fa362be0406b7e4df09964fb"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "db2e06399340f1b5f20ca649b2df1593"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "38799d40cfa8363fd594361a45472e6b"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "3496ab37bdb298850b0a0e7a306f076a"
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
    "url": "assets/js/43.c1c6959f.js",
    "revision": "7023bbc39bead92f6908ecd191d94592"
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
    "url": "assets/js/91.e12a9e79.js",
    "revision": "0640f8e7bd25ec1cb5a17f391ce3bd86"
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
    "url": "assets/js/app.c0ede7f5.js",
    "revision": "6d52210d55ed9958a281f1f2e105be4d"
  },
  {
    "url": "assets/js/vendors~notification.a95cab3a.js",
    "revision": "a02b70488e523628b4d90cf963755b74"
  },
  {
    "url": "i18n/index.html",
    "revision": "6defb329d36d6bcc62aab5aa3dff3129"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "2ae12f099791bf21d98d021c8672a3be"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "390f06501547a54d7c70c48c21c1e337"
  },
  {
    "url": "tutorial/index.html",
    "revision": "89090ed2734ab135393abd160d16ca5a"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "47e085cf88a804629635cbdee8779403"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "4c883f190bed0d995a52d12ff37e4c93"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "a674897259818188d6a9587c98740cb4"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "3d68f0d9c28d70fc26f161e3d6687fe7"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "29bd448202588f350e0bb6d4f796023f"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "2ad4435a868d31c0f16fee87355c755f"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "34ff2b8834341ff872ac7ba72840a85d"
  },
  {
    "url": "zh/api/index.html",
    "revision": "3f3c6aa5cc1fc673cec7db8876b1429e"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "f2be2079c95eac3163b6856f8cd68a95"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "d0e7f390784fa99bb5d82cca17b36638"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "213cd73d2bbe4c9367c26c40ba2c4c98"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "4ad452e742795cf1161ef0b8b2aa4beb"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "144c748dfa65ab88440c20cabfc26883"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "d1fcae0a2369d372d77d40b0d68a1b5d"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "5c2ae96c867f90dab357129c740a82db"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "5d5ea58674b884c7a0174c0790725d47"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "188a3a609d0d6fe3f6c35d5f12709cb4"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "fb759a378de789b85efd3f95b81ff3a4"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "1e9f7c13dcf1f19bb6e4bee5ebe51201"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "eb679d7405e96c9d8f22205c94a51a9d"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "2fcf1881aab14120885d264243c1676d"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "e9e8b28fadfd6205c9e126561206a192"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "8126f213ba4d85b827964a05ba166672"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "a7dd3bca0accaa6bc7c9e6958f4b675e"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "df15e08ed9b1f3ade31f2935792e85d6"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "093725aec7cff435a396b30af7c915db"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "4b6d684a876bfa0bf00068975a541ea9"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "18e08890bb55147db6f80f36832540fd"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "3b7cc262a55af6c75a6c70ef59842714"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "3cc32caa0179552c483a5541384567c1"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "e28c1252055ca4b2280c77d99f3e9d7d"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "f1c913b148ccd137140292d886912e5d"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "33f8a6f8ee3e8853d5776eb47067fbae"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "d55a7b8752b2ba6aabe6f9e2630a986c"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "a9e8a9fae0a75ff63441cade7bc8b244"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "8fe24b25270551c115b411023c3eaf1e"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "e695e637c66da3ff143dcda3db10ff22"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "c0a4df36099141cad0ecd9366e3eb618"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "ecd950d4ffdbe3d7e2b4f347ecd55024"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "1909e5839b9d07f5584726d4e64a3f55"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "9078d550b4732f98fd6fdef9d9d7eb85"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "e5e267743c1d916004cbab45342d42df"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "d307e47ffdea330a83a4f74eb2f0412f"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "6b9ff81f7bdade83090d70fca7fcbcfe"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "73f877c3a47574b326e7de4878012ae7"
  },
  {
    "url": "zh/index.html",
    "revision": "14846814e0ea9d6e3328ef3315b165cf"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "988ef75a1e4465766865dddeae43d610"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "bcdd26d5ec1de2ab2484e173ecb211be"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "1855c7cb1213a07ce284fd3087f2d7c1"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "5f3754a1de24eb558f477df15ca65ceb"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "402403342dedae33d2d86fc88a6c37e1"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "230c2eb1090db687a8b5f5f167250fd2"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "127d686f5e2b911b2cba2414918762de"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "98c8daf62f5bff79e9e6fea6c73f09a7"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "5583d5ffc8f65367712f80c207a1eac4"
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
