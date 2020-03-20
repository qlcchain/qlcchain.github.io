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
    "revision": "eb8b49f084adab94ba42580c02aaf7d6"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "d9ba814fcbf69ffbbcbf82b1b4fb4671"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "ff6fbfeba3f3de2c99184975db90b7f9"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "8ff0b05b93b9fc9ea41b7abcb38ece17"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "02bd0fb7f92a18948788f9b5071067f8"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "b8c339377f68d24e9ef1b1f5d972eab2"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "a03b555c194a5341bde74dcfff9c1454"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "7e6b94c101e00de8652e3621dfcfd8ef"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "4fe2277e433d089d8c1bfa80050aa902"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "0aa6069dc3f790ee0f804dee2df2ff7e"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "f355f0d1be2ae570c8fea8b59805d1ce"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "8107bff0bf2507a871cea1e98a438d93"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "3175373b2084389e87363e8c03acb94f"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "883d40c42ee67979f5c9844fb9d094ee"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "2e6037deb48a4f562f7b11ba7cf4c701"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "ed917d13c034506497118a0698f27782"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "dff56a0394e228f4493a8f496b4bd0bd"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "a347ee5b101ad8a1796ae0c718c76d09"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "1c36437978c852e8bd2121f991ca71a2"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "af02bf9126a3549cc16c311936e55c14"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "0303af182d80b928643f66c812840be7"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "149f091caae017ef924cf8b3f63aa5de"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "2e4ad49a9e7e6bff4346bd272ff8a364"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "2c786b79f3e531364ea3379a2a889dd1"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "3e5f757e0c0ad464cbf69699e59ed0b8"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "680c1a7fbe307c27336f62253ca7895b"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "b54a6bc126dbceae88917e9bef0cc839"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "b1419dc6a4a0efd7d63f7367364fc816"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "e238340a168c261bf5d88c9bea5681de"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "3499ec849c4683b7ea7449e675e3336c"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "8d5a58a6c041fd6cf57063fbe01d4676"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "4bc64f7d89ca690b6674d3849e447f1a"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "daf09d8646e04cf9a1a9c04e3f85ba9d"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "8b51e655189fb75ac7fd394fb0dedf4c"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "8ce962a33b49e71c851c1fe8c2c0cb33"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "3b9cd835889d1de633de11427a471ac6"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "fea90db770d4232410f4f28d02141695"
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
    "url": "assets/js/100.8c6846f6.js",
    "revision": "6d285034d088c84591edb140f2c0dd53"
  },
  {
    "url": "assets/js/101.48f98fdb.js",
    "revision": "f2082ad846a68f2ae69bda57d20cf650"
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
    "url": "assets/js/32.e571f48f.js",
    "revision": "837c5ce66a495d20b227b7a3040ee109"
  },
  {
    "url": "assets/js/33.0c98053f.js",
    "revision": "5d6fa417cb7143b32f5e8081248e4e05"
  },
  {
    "url": "assets/js/34.0a65b573.js",
    "revision": "12e99802e6cce6783fd3578a7a8b475c"
  },
  {
    "url": "assets/js/35.60d9e011.js",
    "revision": "fd0710985d525f28d17e27d344ff6e24"
  },
  {
    "url": "assets/js/36.877ade53.js",
    "revision": "ba844cddf570d1019794ded0b9e7dd7a"
  },
  {
    "url": "assets/js/37.f813e920.js",
    "revision": "4ff2ebf4311773bc88d912ba9504430c"
  },
  {
    "url": "assets/js/38.b4a055cf.js",
    "revision": "8f737fce028990c0ff83b0a48440e881"
  },
  {
    "url": "assets/js/39.64595bbb.js",
    "revision": "43586d6213f4553ba034bf29b3943dab"
  },
  {
    "url": "assets/js/4.df202c60.js",
    "revision": "1ea941713863a23ebdb525827b75a83f"
  },
  {
    "url": "assets/js/40.1431c612.js",
    "revision": "97b592b49702ed6e86d9f91615438a89"
  },
  {
    "url": "assets/js/41.8b2769f5.js",
    "revision": "7800a66ebee6e63c6fec9003bcd31912"
  },
  {
    "url": "assets/js/42.065d8541.js",
    "revision": "dc66640966fb9ca45235adc2b86ca5dc"
  },
  {
    "url": "assets/js/43.3cb30376.js",
    "revision": "900fd0620ddf356d37f3142bac36c39a"
  },
  {
    "url": "assets/js/44.61c06217.js",
    "revision": "59d8447728f507247d548b4d7ed61b73"
  },
  {
    "url": "assets/js/45.4c288a9f.js",
    "revision": "f2f073bd91657c621af71a7725ab73c7"
  },
  {
    "url": "assets/js/46.604dcd6c.js",
    "revision": "f4d49fa082073243ce8811588aa86b8f"
  },
  {
    "url": "assets/js/47.3f976ed4.js",
    "revision": "58c80a666ca2db02c599d7d91a7fe46d"
  },
  {
    "url": "assets/js/48.4dd96b79.js",
    "revision": "5e921d0b2ae14a3d220034e047cc0a1f"
  },
  {
    "url": "assets/js/49.a013da01.js",
    "revision": "41ce0fe104e593059749831185d1743d"
  },
  {
    "url": "assets/js/5.1ea23d18.js",
    "revision": "909bb089e45ffea697ea077a3378f6df"
  },
  {
    "url": "assets/js/50.45596dff.js",
    "revision": "35d12c90c9f7ad8fb45f5bbcd93720a4"
  },
  {
    "url": "assets/js/51.1cc1c29f.js",
    "revision": "19b56885db03a1b222974aa3737f3217"
  },
  {
    "url": "assets/js/52.78f6ee10.js",
    "revision": "0842609c3f6e03d2044e589ce04a05e6"
  },
  {
    "url": "assets/js/53.04d0ac66.js",
    "revision": "7e4b63a88b8bee29802304f111ec2933"
  },
  {
    "url": "assets/js/54.48e1aeaa.js",
    "revision": "6a924d5a354400eaef0a5d573b7cdba9"
  },
  {
    "url": "assets/js/55.37df61e5.js",
    "revision": "9cbd5221f97506b536b6e953962f1de3"
  },
  {
    "url": "assets/js/56.c6e752fc.js",
    "revision": "d592d24af3ba655e024b048c52cbbac5"
  },
  {
    "url": "assets/js/57.c2c80ea9.js",
    "revision": "8541794d17d04ffe6153d2735e95c1a1"
  },
  {
    "url": "assets/js/58.60dbb481.js",
    "revision": "f1a776b37a40920dc47a168ee9c5f7b8"
  },
  {
    "url": "assets/js/59.1824847b.js",
    "revision": "cb548f8e08e830f43ac52700b6bdf8f1"
  },
  {
    "url": "assets/js/6.0c7ae5ad.js",
    "revision": "87f31672dbee4ca9f9fdbe00635c3adb"
  },
  {
    "url": "assets/js/60.53214f90.js",
    "revision": "d0377d920883b17892aa94fd7e718e69"
  },
  {
    "url": "assets/js/61.51a5a33e.js",
    "revision": "341f834692fa7a125eca2e6d4c53008a"
  },
  {
    "url": "assets/js/62.81ab2b64.js",
    "revision": "c36d6a6912e5b123f951bfed84e773ff"
  },
  {
    "url": "assets/js/63.74efa83c.js",
    "revision": "28595e62c08e9bb49bf1bc3d2f77a1cd"
  },
  {
    "url": "assets/js/64.8fc9fba2.js",
    "revision": "7c02656e0e1eb55d3c15e0ac7184608a"
  },
  {
    "url": "assets/js/65.7c1a7336.js",
    "revision": "29b64d138d8e04dbaa944445bb98dcec"
  },
  {
    "url": "assets/js/66.e3fc84b8.js",
    "revision": "fbdc621239e3e79600cadfc51a7cb198"
  },
  {
    "url": "assets/js/67.297de8d8.js",
    "revision": "3bb353bc8e90c37e2baf14da158c885e"
  },
  {
    "url": "assets/js/68.8d984867.js",
    "revision": "4c72fbf008303d932d96d638cb4aeb7f"
  },
  {
    "url": "assets/js/69.18b7eeb5.js",
    "revision": "a745c1fdff2be8622d0acecba1c3c543"
  },
  {
    "url": "assets/js/7.49ae3cc8.js",
    "revision": "07985bd617892e390321c5b3e4b8580b"
  },
  {
    "url": "assets/js/70.ffd5f7ff.js",
    "revision": "3f66c94eeaef6e5150aaf196dba28ee8"
  },
  {
    "url": "assets/js/71.c82430ad.js",
    "revision": "ffd441de1e7ce07951fc09cb5fa3a401"
  },
  {
    "url": "assets/js/72.b01bd31a.js",
    "revision": "531f0220a92878b7a010a647b62587b6"
  },
  {
    "url": "assets/js/73.52a00804.js",
    "revision": "e35696704f2a86d3c5cd64535be61686"
  },
  {
    "url": "assets/js/74.aa1fa0c0.js",
    "revision": "ed5ec37f1bc8056542669882b745f964"
  },
  {
    "url": "assets/js/75.b70580c3.js",
    "revision": "c0effe28b337e5f381bbd84dc9baa659"
  },
  {
    "url": "assets/js/76.bb12114b.js",
    "revision": "20640c6d7d5259bb39b14165a3893424"
  },
  {
    "url": "assets/js/77.d2f6d793.js",
    "revision": "4251ebbfa63cb2dfc89e82cd16de5691"
  },
  {
    "url": "assets/js/78.633baa38.js",
    "revision": "7589573f68a2a4002fc31c38c9695af4"
  },
  {
    "url": "assets/js/79.69a02c1e.js",
    "revision": "936a6ff6bc613b28fefef598e02eabb9"
  },
  {
    "url": "assets/js/8.dbdc53f7.js",
    "revision": "6219be3f938de77ba8900a1836cc78e0"
  },
  {
    "url": "assets/js/80.6ee434e3.js",
    "revision": "ebadeeb3bc538946f340e00f560f140e"
  },
  {
    "url": "assets/js/81.9c3c8cf8.js",
    "revision": "f35e35e89b3b054199f282ee60bfec7c"
  },
  {
    "url": "assets/js/82.3a4bbdc1.js",
    "revision": "e7039c1cdf873b3023720e73783f5ad0"
  },
  {
    "url": "assets/js/83.83359f87.js",
    "revision": "95131da8d732299244fb0d78caae59d4"
  },
  {
    "url": "assets/js/84.1e4740e9.js",
    "revision": "b150bde229a83e55177520239045c2ae"
  },
  {
    "url": "assets/js/85.090d510a.js",
    "revision": "86dd3b8f88da5cb74408288dfa8cdd8a"
  },
  {
    "url": "assets/js/86.e3f5859e.js",
    "revision": "4daaee7c2a648b6108b59899b6140d10"
  },
  {
    "url": "assets/js/87.8da7cb05.js",
    "revision": "7f9d204ee04156fd30a3d3abb5705714"
  },
  {
    "url": "assets/js/88.80d08d90.js",
    "revision": "490d4703adc1d44bede8c8cdc41cb93b"
  },
  {
    "url": "assets/js/89.81006a7c.js",
    "revision": "75af5f5f5dee59e23071f310a79f4999"
  },
  {
    "url": "assets/js/9.6080544c.js",
    "revision": "19916ee55b6b03838b26c713ff55f75b"
  },
  {
    "url": "assets/js/90.643df1dc.js",
    "revision": "a995740ff394d8e631c28542136bad65"
  },
  {
    "url": "assets/js/91.48b393a0.js",
    "revision": "3975e4a05b4f6ad22190ce39ca0c1aaa"
  },
  {
    "url": "assets/js/92.cd9d6291.js",
    "revision": "eabaf03a1bce79ccdec9eb93619c0534"
  },
  {
    "url": "assets/js/93.e3ab65e1.js",
    "revision": "0d6e9710b7fbf71b2f3d57b44d983505"
  },
  {
    "url": "assets/js/94.778ad430.js",
    "revision": "8021ee7851a2599a6c601ec1e05dde56"
  },
  {
    "url": "assets/js/95.2a2165e2.js",
    "revision": "3788c3e10ba5123956a4e28741bfe0dd"
  },
  {
    "url": "assets/js/96.2c2f14f2.js",
    "revision": "b98fc4a1b1a21efc175adb5812c27cf8"
  },
  {
    "url": "assets/js/97.ebdc4e6e.js",
    "revision": "70654b7e4a2c93d40b566f8e2741cac3"
  },
  {
    "url": "assets/js/98.45a68b44.js",
    "revision": "567953c99ca6f2f7bb6eb68edcd78b26"
  },
  {
    "url": "assets/js/99.b316989a.js",
    "revision": "7dade6ed0ee2437dbcb085596a2e1fe1"
  },
  {
    "url": "assets/js/app.5db7900a.js",
    "revision": "7195e626fc164747771c4600a3aaaf5b"
  },
  {
    "url": "assets/js/vendors~notification.a95cab3a.js",
    "revision": "a02b70488e523628b4d90cf963755b74"
  },
  {
    "url": "i18n/index.html",
    "revision": "55f44ec9080411db637e70cafcedcc5c"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "7029405ef0b20864fa07616d986ca9eb"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "bf3cdfeee2616cda3aa196ec4fc3813b"
  },
  {
    "url": "tutorial/index.html",
    "revision": "3cb72e186071fbbea436ab08a3f302d2"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "c2c09575964ec539aae6d9b17d9c48f2"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "d010702bf796cb6ea7d92f4ca29a3174"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "4b97ffced78d48ca67a2fb206070be9a"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "1855ea056dbd8d5dfd6489bfdfc7eae7"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "00f4a0d014e6077f958fba4cfe9b0304"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "1800f0935f1ba63a1c8a5c9e47e2e890"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "324d4200934f69a976b74e5cb08cc16b"
  },
  {
    "url": "zh/api/index.html",
    "revision": "b713ae04adc4dbb516ac9d0f9a0a6c97"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "c501446e2c4251b9e8c1806da753a4a4"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "3a972653d45fd560e8029ee05ea24dbd"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "5231e6e7c68e8e8b059a32060751c9b4"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "bec1f0d63e88cc9d1d0ca576d895f5a6"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "be2db3ddb062f9af0cc6b58df6c661e8"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "c9c982b954a49154d42f75f9da706951"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "53261772e10310b0251d1d32983f3270"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "335010cd4dfca1974feb13e44e8609bf"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "9339ff80701c2c0d1215f391b27574f9"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "f59470469bcf42190085f34a1547a178"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "7d134dbba4d742979275040bb7da584c"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "0e54ad7f98a4c8d6944d58e96c38a735"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "7321310f122a6a4df386a23a4c44c46e"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "32676511b6bfec2cec0406e70ff3d605"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "2105abe79d589fcca7e4aaff2dff41d6"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "6db90bfacbac122d6e1f6b1d429cee93"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "3b7a2321318255cb53f3c51640171c6d"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "753f52af505a40866b7194c9f5d6a1b1"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "962529901f569a80ee2e8956355b3b3c"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "23cab2882bbfc0498fb99c4d6f8df30a"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "d6d1613a14cf58fd64ecf82071dba147"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "cd57e09b5439577f8dfbe2d3726ec51c"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "a58b2991038ef1ff6a93785aa4987b9b"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "f99882fc42f6abf6cd5990cfd812d274"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "259e3b9e20e6617c02b585059fe783e7"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "9be0ae3fcf3ceeb70c8a4d930dfa471b"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "5ca0412a5a0b33f97e5021f339a631c3"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "664a9124fc2bc79d4d3d233750c76890"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "7520e4068c6bb4a400cac465fd455d42"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "925e4b555c37f84907ed6774609edd1a"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "a3c05ab7f6bf7c2f4b3e01de33efaf01"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "5f439f3a4dbcb5373e5e3eb3febb8022"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "5720db9df0e0ce195807f0b3e6784556"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "394951eb3a1a0f3470434f642c79ce34"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "65129f4a0eab564522205c174e6355d5"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "256f2d81e3436722398f0f62107893e2"
  },
  {
    "url": "zh/index.html",
    "revision": "a96f1cb0f02cd84c0637bcf3a22cfc63"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "23779a31f5779baa2510f8e817d8d1c4"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "3f290988a28b6ae2314a90573a5f1ca5"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "0e89c0498e5b3463273d44653e9b2356"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "0002d0222088e2f7dc796cf5400eebe0"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "615a7b8a88d87e5bea919e133717cada"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "1730c112e42009fffd650a058d13d3f1"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "9daa452b6a7dc889c4d37d018ee8198d"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "ac910254b10ade87ad814f47a8a7ee58"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "3361b5243be28a37cd67ee136b51aa93"
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
