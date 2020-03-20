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
    "revision": "38a48a2aee7cb34782b494ca9b9544a9"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "079b5552a22f807f85852bffb34a98ae"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "c80174b5cc8eff84ccd114be113bb744"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "cba4567c5321709ba7a9180ae2f67819"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "7266941b0d8767dbe57db23531acf3d3"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "a2e2e79943cd2f4f160edc3940bd85d4"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "3a95c88d479e034f4f31fe6a8ffa0cd1"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "a39b4e0e26f4148ed1142b64cc90edde"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "a6bf4f2cf00c52d9eb8d52c6786bb85e"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "f13a57118d013729075b0336057326ab"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "f67fe88a1b98c2cb2f52ca1358353665"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "45ab3f6ee0a1fd64159c38d282cb2fd1"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "83c25fe219896c8d741ac5e11a2e1a68"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "61cf7065062087eff6dc547ad8c47d30"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "c5075d56025b552e1316e9c179c9188d"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "4b6886beb33fbc14d08eb0eb83e347e0"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "552c59263c86c07b1d8108fc84a91c6c"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "fad1f233f51d24f53a8cb509e90f626b"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "30ec0ede674ab9985e5209a2d86989cd"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "c1da74c474bcf653ed805225f135daab"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "2d76d4013d59ca85834ff60da9bbbd2f"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "d311fba99558d0ed344bb891fbb1bfd0"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "f95b2c0d109667b963a73d08f00d8758"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "53fb550cb94d20dea73950e8c6143145"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "25a74c125fe51e947b6b9c101eb6596e"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "c5d8d348677cdade663d43209c0199fb"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "f2e491b8303888d31813e8796724f5e1"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "b8519a1d1c28b89ce8ac07355a186e75"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "523187fcfd48e621abf57c9f9b8b891a"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "bce61620e6899283158e1baabc33fd4d"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "e803e6ff4f97c025f82ce1ab04817009"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "eb05d49120c7f630db01fd027167fe88"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "96965276c56bb9f92ababd33e8fde380"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "5500d0f98780f28a3f81a1cdcb8dc497"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "d9c30924b48a23359726e4bfcc8a3989"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "ebcbab1b7899d1332493cff583b71ec7"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "5c3d29bdc7e4c1e2192f8794581cd95c"
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
    "url": "assets/js/32.81ee4d2c.js",
    "revision": "33f8a036d1c723d7f556fb340a555cf5"
  },
  {
    "url": "assets/js/33.5bb8ee5a.js",
    "revision": "e65a0c7e9894f4546e476c4141eef7b0"
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
    "url": "assets/js/app.a7774a41.js",
    "revision": "a92c080ee52ba60ec8c81f01650ef8e6"
  },
  {
    "url": "assets/js/vendors~notification.a95cab3a.js",
    "revision": "a02b70488e523628b4d90cf963755b74"
  },
  {
    "url": "i18n/index.html",
    "revision": "5638b131db7bb63ef816f700c25dc733"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "3cffa008309a0e4975ff3ac2ed606e08"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "36dd933a4a7690de1dbcdae12599aa26"
  },
  {
    "url": "tutorial/index.html",
    "revision": "cdedda6a7f35be7096c83676b3ed0e95"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "be7f62a15fe81af6225c93bb1c5074b2"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "faa58e151eecb3c645bd978ea6eeb304"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "73d02a30ed9056b80e1b69ad8fdb5cb0"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "87431baa22b959807a78c452bc5cab2b"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "37f30a1a8fef37010f53fe32c494fd47"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "ae7ab5a9357d7bfb957a72569ec84fa0"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "3e65f6e8af9b8410bb731a0e0aecf36e"
  },
  {
    "url": "zh/api/index.html",
    "revision": "f01224eed3549f3e8684564e05b936d1"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "b9adad6b16e7a6d3774a273e71428a89"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "c76065c5c38e81a9f33244917af4cf54"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "e56bb1c357cb691c75927b4c1beaeb2b"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "8116db5d44b1b663477adb18a60b0c68"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "fc71cacddcffa17c36845ad4e4795bb2"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "2a6d94bd82e9e738aa87ed12788832d2"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "58f89a60b27155e2028b4df0baf0b7dc"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "d7ecd17d809ff2a13a1e0f582f0bae93"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "731467e7344a2a8fb3d52a8819c5f529"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "2f55f6d6cb24726869092e069c15ad83"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "25423440d313e652c390422ffeb1d876"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "1e8e4e71e3d66f16e63fc79a177cb7da"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "b8fcc1afa75a443a862f4239f2f5c493"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "9d2ccfb092b4d7db6b9695e8b1e6fa9f"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "e9f8def0a33631c1d536e70b8b2ace04"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "479c72eea90a6569a8062b14e9591449"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "cd049c1d962c191a62c6486bbf286aa9"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "5f058741ff71f7da037b341dcd4ea949"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "ee683b2ca405eb946d2ede1659718a7f"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "d6f5b5af5ca9f4ab665af5a666513826"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "38cd40c760941261d8fcc2fa6fa0345b"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "5aae0d4b27c5a7f8d6fc15226da26059"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "9e40e308e9a1ff4c05166204ac8657d9"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "a4f910b32b6a28e0e62f443a787b1db8"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "b6e641fdfc301c0c13548d02166f597e"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "ab8809d9edb25de37f107aa45798e775"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "0ad47af1dd3142c78a128cdd0ffa76b4"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "b191220e95f12761f24e546bc3cfe183"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "e6dee12eb261441aeb9ce5e40aadedec"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "86530c6b0acb5fe77f908a47b1f79eed"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "77670cc221a1c989f62d411f516f3e21"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "a77b11dd4e1c942a1fb7f490344b8c8f"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "816af783e35731dbd2c760141c06c6ff"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "827e5599458241d36a883e39a971e53a"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "0d188fee2d1d4d7f0523a2431f7096d5"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "70767ff6343d6efad128884b0ecc5490"
  },
  {
    "url": "zh/index.html",
    "revision": "b8ddbe6fffa60f6ec84a54047080fd68"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "03390e23104b6f4b6df94d6a209fa333"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "fb5d7bb65bf6abf95e9c40d5c9f2cf11"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "e7a4615298df2ee2f01ed19e7f8bf85d"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "ddd984d39eddaf5d2a3c68b1263bb9da"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "b7727347875464c5531915cb9133af0c"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "37421b21538ba9e77b78323d9b9402cb"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "2f039221e4f8b0af2fcb2b684722d6c8"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "3839eb59f7d3d21e74fae79b9ff401b8"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "6528c131f06322a839a7de3ab1594aab"
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
