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
    "revision": "42adc7b284a10e3564d2435e4343ec7b"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "efddac2b84d299d9a164a8515af9f5aa"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "5a0ffb5b4b6ab2f056de452b0723783a"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "6ef492460ade0e22b84ec4243f349177"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "97e32f68494bec107794e9b7570cf65b"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "d3c71f4cb2621468779b7dbc326ac7cc"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "6d3911cb635033605411fc1612fc7202"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "7d8fa5fb85554b0cbe3feb2686f56a01"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "caa3747da862b66ee7c60aa34e241d14"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "b56c7baf17a0d1b0deef8fa28c73fd2a"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "8b8a40caedfe7d972a63e8e8195236c8"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "1f73213f2384ac13033027edb7b623b8"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "a611f4eb029dbe1f20e8369861f0f61b"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "1762d75caa08cc23422bf8466f591c6e"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "8701938d793319f5913cc626a2ae0a5b"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "91831baed67062c3142032e9bb7aa556"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "7ccb5f323579174c0ce7a41897c74c7b"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "6d1cc8a54aa1185fa6c9c8392f6c6c44"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "3b16eca282d6b5376181fcdffd5a2990"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "f9708a0a668ea5e3e946f7e676ace5c0"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "80feaff0901825f015fa4507f5cc3ce1"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "2df2114d16cb02b72dd298e787d6c7c2"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "5a31b64e12e20ada1745e6e89549b268"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "07351dc32a448e8dac85ac92f53283d7"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "d5e19c240ed3d32134f78fb4ba075107"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "512fa88de41a29d27ac6856be392d526"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "0443649627b6377408c3d80ebf265138"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "32db1866d947ea02352bc082ea6e77ff"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "9d118f23167e13f3977210dfe9076bdf"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "ab9cdac3031a90725de058acbc6d8c2d"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "cdae94d5ed6ff29f8b5f87026b8a45eb"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "3f208fdf51b14c93484765eaa111d127"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "c2232468200592241c3df07a62b7841d"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "2ebf59941e31bc738cdb8f7ca1ea12fd"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "e6222fe76c2b1d62e7be058e23c35c4a"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "6d919d94791b2a913ce0038f1288ff9c"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "6afc587bd419d4358548e9b9775df5ef"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "e2b63506b1a0687c9280ce9bbb387a76"
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
    "url": "assets/js/43.5bee6d38.js",
    "revision": "f2577f8eceeef9b1d733b35df58d30f4"
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
    "url": "assets/js/91.194bc13d.js",
    "revision": "b7addb2360a029ca657eed0924daf4fe"
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
    "url": "assets/js/app.7e444152.js",
    "revision": "e8198adb0c50ff0151ebc17055ba0254"
  },
  {
    "url": "assets/js/vendors~notification.a95cab3a.js",
    "revision": "a02b70488e523628b4d90cf963755b74"
  },
  {
    "url": "i18n/index.html",
    "revision": "02cf8981e81bb0db566751918dc4ae5e"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "8a6c5c0138d8ff3e5f654ec303a54fcd"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "777f920dd9ec1a315291569b61cd9324"
  },
  {
    "url": "tutorial/index.html",
    "revision": "fcc267e501b71b08d332a756b39821e4"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "7700419e9e3c206033451d42b2df3d62"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "216b7cd462a5ea32faa7ec8733c937a5"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "e6e0ceab3f33f54df009ba174c863206"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "7e3c3105515f728f19f2d6980f02c960"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "d24b89f6cc7ff37be08cd3db2af56934"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "473d58a2218d88052c3564438351e3eb"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "7cbc539a4f11a3e5fdf68b46a31b16a0"
  },
  {
    "url": "zh/api/index.html",
    "revision": "4e47fb63af8f8d9f0b30b6513db3e8d7"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "dda2fb771d5ceb395f41d8ae2cecae32"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "d48cb27f8153f8d49d3ebebad840fb6d"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "58137580f68db4cc1a5965b8b80e4b07"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "ce68cc1d3ddf82d9269da5b9d928bad8"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "791bf3d928a34cb407683816243f4a95"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "2e11de790be89d442e96b81f30c016e2"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "269bcf59d6c60cb3153768204bbc9097"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "00d32cf70def8b8854fedf82efd4b531"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "2aa74f50d14c687757d502c91021937e"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "111d540e1294d645b2e8e8725be16ece"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "131287be0c46da02b7d082760231696a"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "a7934199983e198bb0f3c2b9b5812e21"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "a53ae4a2426c7d215e2df6d48b58b1f1"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "637080df4090a277b4e761f2bc6ea205"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "ffa71defbeba9910174e5f7db78cb800"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "eb798651bb0f8c3ffc2d98fd1d718c2a"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "c81541be2dd6d8d49c4057a060d3a14c"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "2b7c9fb76f6f6b3cf004e7c78c08cf5a"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "2fbcc2155ae19af537c60305e31e276f"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "e36b422a8ac00811bcb01964e3867f10"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "3e5dab6c7f0a6357f5ab47dac92041e8"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "5adc75df7f6c39f984e33007653f80d2"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "e4c167d4fc067bc4ccd4a35985fe4dd3"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "a701cea14c600834d50e73f78666e6b5"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "7a4d934a9943df376b9e8ae4bc2acba8"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "89f08d01a168a4a4f3562f29b22801b5"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "3c0e0249e4cd5cc778fa7cb93f38e86d"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "51a2ac5d8370a70ce69f972126612042"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "f24abfc70546b0d4ec469cae89104f26"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "415e0b41167ec3cb683c1f75a53d7bbc"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "55f1fb1d72173b3fe80427402664d60e"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "f6a747606d7771028fa033819fec088f"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "f6279c9951a12bb62027572b3b0867db"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "404f04d68fe4de661f997c63bf0bc806"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "b16575bfb50eeda91d428abefccb931d"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "409e048a49a8063d7d278676795c5638"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "93d2e3f90a66488b7d8c994ac3f7c7db"
  },
  {
    "url": "zh/index.html",
    "revision": "bcc9cb15207f7e2f5bb50fa9d23509d3"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "e8ac9ea3056235ec8a1f6c33abd4382c"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "5bc2a4c73f0f6abbdfc73d5cda624986"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "ef4adb1f3f1b9e1bd21dd223ca634f45"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "1542d900a061372520ca7a636c255e39"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "4df67edcac0c822b1f9e7049ca1d526d"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "fd9fc638c35941a06a62d3cef21fe99a"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "e181b6314172824e1bb662125d7e94cd"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "4f762f065bcf739861b3da826016c41f"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "5bf526cbedb4a3fe6e27a567116f7baa"
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
