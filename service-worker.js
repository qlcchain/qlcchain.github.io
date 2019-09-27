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
    "revision": "37069d49518054fa5b9a1aa34b2a7052"
  },
  {
    "url": "api/index.html",
    "revision": "316930cb0e6ffe023dd3edd16a12dc67"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "fb349346556cf225854ae24310c7a3ea"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "49e55b5a36aec6b569e631640459a94d"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "500cfe9a3ce5763251be1927bad51c12"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "f7c815009b592653198948e8a98f9d0d"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "414d9ac8ea72ef13caa779a4ac6ebd40"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "1e039cca893d9b7d899b1718a848ee60"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "b33294af1c5c9a5f9910e602404d283c"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "71ed4b1b06f44d13c69792a4afb5b4e9"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "ae0a2aa209af4f0cc9109539475a7d05"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "b5ca5501f8db6951f2fd6f5fe258f683"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "b8cb04d9e4cea9a48328fd89a2287773"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "713692e35bf1b6935e4acdd8955b2e9b"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "7e405e444a608a3745fa957c8461d5d5"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "5fb1875ae376e473b7083b34cf9658c5"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "93f464372c0ad00a5caea4ec1f99e536"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "42e4fd3cff445cdbf1e8c34ba5ce832d"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "939d77d24b3e68b39a61be4f732666ae"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "eaf7c902a98cb719a88e75e2152f199e"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "cb912bb3949b148edfe30e0e823f5e37"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "017cb6cafa05d3f738b2b46856c9a022"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "2eccfff759be7e7204441bcbbf884525"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "8bee48c780dfd81e37c659e18060c1ea"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "e10db159566d858e97d92754a2030454"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "e8a3b976c611b4e9250ef9a061612cfd"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "6ae9b8ed9b868ce78962e2c09600e0e8"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "8b797217f899a8f595810be3f07f1ee7"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "076f936b239b4fdfadfe18dc623e33e8"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "462f3e246a9087a28db564ed1ff1d3a4"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "bb20865f7790bfcc3c0e7309bd838903"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "72d858300a9cb1551f356256c78e1b75"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "ce860fd470c93af34166ddcfe568adcf"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "e1d27adebc2badc55a2776cc14427567"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "31bd8f77f2c4415b121ac0462c9e761a"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "04ee67ccf6c67439e44925dfe5f6d5fb"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "402abe3cc069f02865dd173a25dd45aa"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "afbf9108bab964e1af288eb40fb6dd2b"
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
    "url": "assets/js/10.c74a859c.js",
    "revision": "9b61c9cde1c6d932d0a442efbbe38bad"
  },
  {
    "url": "assets/js/100.da111d45.js",
    "revision": "929e7c7b939db3eba7d078d63b87836d"
  },
  {
    "url": "assets/js/101.943f4474.js",
    "revision": "b049c7df57b2787160465bf0bc1ee820"
  },
  {
    "url": "assets/js/11.ca12315c.js",
    "revision": "8fcc61a2dc5a74150be65db308ba5e5a"
  },
  {
    "url": "assets/js/12.edc0482b.js",
    "revision": "bb4a439bd0468326ff916fd1e7fb05c1"
  },
  {
    "url": "assets/js/13.220ceef9.js",
    "revision": "75ce84c2fd81ec77e1b37828094606d9"
  },
  {
    "url": "assets/js/14.9a0199d6.js",
    "revision": "422555c77b498e23364e77ffb045fb0e"
  },
  {
    "url": "assets/js/15.aaa1fd83.js",
    "revision": "f650d2596cbd15bf0045fdf61c4f9b26"
  },
  {
    "url": "assets/js/16.dd35344f.js",
    "revision": "8a1956f14340333f5283baf23b4f8e5a"
  },
  {
    "url": "assets/js/17.0d3d9862.js",
    "revision": "047d1cd1c69bf32edb5f04222104d6bb"
  },
  {
    "url": "assets/js/18.1a06463e.js",
    "revision": "87e3a1d6f49e4e3adc56d9c17ec19bfd"
  },
  {
    "url": "assets/js/19.0cf1268f.js",
    "revision": "5685bc736980e8b8da38e62b9f284a4f"
  },
  {
    "url": "assets/js/20.cf35a497.js",
    "revision": "86ace8be0a422c1788cbca7ad7b8c23b"
  },
  {
    "url": "assets/js/21.5e6a7018.js",
    "revision": "05f63942c0d0806306c43e8d3a063c1a"
  },
  {
    "url": "assets/js/22.9571b45c.js",
    "revision": "6ffca8f86e35b611e98aa6e457528115"
  },
  {
    "url": "assets/js/23.975cad22.js",
    "revision": "9fc592793ccf3f97a2c241b686149405"
  },
  {
    "url": "assets/js/24.4a6b31b8.js",
    "revision": "475fcfce04f13a71a30f38f9d0c5d3f9"
  },
  {
    "url": "assets/js/25.caa79c80.js",
    "revision": "1c1d406daf814629e228f3fe304ae6a6"
  },
  {
    "url": "assets/js/26.1f8d4e23.js",
    "revision": "b2a63236770f42e25c47b8b8ce9b3d4a"
  },
  {
    "url": "assets/js/27.3a306f7e.js",
    "revision": "5d467ef24d2873d1f05015729dc2aa2b"
  },
  {
    "url": "assets/js/28.ccc9c3f3.js",
    "revision": "9a93cea8d9907a6584af3d1e234f377c"
  },
  {
    "url": "assets/js/29.3509f57e.js",
    "revision": "475869c8fb034bae01be24e8a6ad9d9b"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "5b74fa33b0c6c00f486a7b54464d482d"
  },
  {
    "url": "assets/js/30.4fbe18b0.js",
    "revision": "f7028f0731a1c19b19c049cdb9e5daac"
  },
  {
    "url": "assets/js/31.b6111f40.js",
    "revision": "3369288db1071c800551621ccfea7f8c"
  },
  {
    "url": "assets/js/32.4bd778a2.js",
    "revision": "c1bbec814bafb18ac53b6497ee94f23b"
  },
  {
    "url": "assets/js/33.ba285162.js",
    "revision": "a21d19647472f001560f57a9cf678db6"
  },
  {
    "url": "assets/js/34.3e9b4f64.js",
    "revision": "4804208c477d553500951a595ceae448"
  },
  {
    "url": "assets/js/35.abc0f5cd.js",
    "revision": "abd9f660d830209f2b23cf466bb4fc81"
  },
  {
    "url": "assets/js/36.2a8bbff8.js",
    "revision": "37d2226aefa756b1e17b40bd2e3ad677"
  },
  {
    "url": "assets/js/37.774b4144.js",
    "revision": "71539492aa9cb5049d219ccfc4921e85"
  },
  {
    "url": "assets/js/38.19f0c8fa.js",
    "revision": "27a19b4489f0c9377fdf0a219bcfd9eb"
  },
  {
    "url": "assets/js/39.87f6dcdf.js",
    "revision": "4f21bc4c1b74bbb4ba2b1252d8e45ee0"
  },
  {
    "url": "assets/js/4.4ac4e7a7.js",
    "revision": "e8a86572743e99ba91a7b6f8497e22ff"
  },
  {
    "url": "assets/js/40.af6fd5be.js",
    "revision": "2e95199689b55d9f0ffb01d287649687"
  },
  {
    "url": "assets/js/41.6fe23268.js",
    "revision": "cd9e57eaf04b91c1f00bb2beabec64a3"
  },
  {
    "url": "assets/js/42.f29712f5.js",
    "revision": "eb5e208e0b6c775da1e4067ac16ec997"
  },
  {
    "url": "assets/js/43.cce2ddc5.js",
    "revision": "59a9f21f5a36e7a68e1079befb5bbba1"
  },
  {
    "url": "assets/js/44.861a8590.js",
    "revision": "ff4d5d1f16039427e51937fcf5af2dd4"
  },
  {
    "url": "assets/js/45.d8821a26.js",
    "revision": "59e0a0ed4afd71187715046504c31587"
  },
  {
    "url": "assets/js/46.219f578e.js",
    "revision": "2398483b690697f4dcc7520269fd0ac2"
  },
  {
    "url": "assets/js/47.14b47339.js",
    "revision": "c3e1584e07005f49608a67c2b5259d16"
  },
  {
    "url": "assets/js/48.ad98746a.js",
    "revision": "b8791e2d52168d8163ac60a223898a46"
  },
  {
    "url": "assets/js/49.bc9b778d.js",
    "revision": "6807167c322bebe6868a563dfbc1c3d7"
  },
  {
    "url": "assets/js/5.83763220.js",
    "revision": "f4cad0f859831c0a9993f88f70fc5445"
  },
  {
    "url": "assets/js/50.4dda0525.js",
    "revision": "10f433cb2464c203803da2462d5445a8"
  },
  {
    "url": "assets/js/51.3a279111.js",
    "revision": "af8ba6cb72a20d6235c745f858ab64df"
  },
  {
    "url": "assets/js/52.23b92c53.js",
    "revision": "e239eb6e78586d0fa6ff0c112ee0f950"
  },
  {
    "url": "assets/js/53.85cb75ac.js",
    "revision": "8de8eaa87fb2b06f298c6f0ced06756a"
  },
  {
    "url": "assets/js/54.9f1d9fda.js",
    "revision": "2e15247571b8bf4c5ecef2b0d1e6c3a1"
  },
  {
    "url": "assets/js/55.4ec52b9c.js",
    "revision": "5b640c61cd79d27cac179172006be844"
  },
  {
    "url": "assets/js/56.c282d9e6.js",
    "revision": "853bce5b2c692a8770fba27ef277fc31"
  },
  {
    "url": "assets/js/57.70f3d59b.js",
    "revision": "cdf85dfb461b5412639fa4a6a4329c23"
  },
  {
    "url": "assets/js/58.4b213c45.js",
    "revision": "ba77fd30c814ba5ebac07eb054bbd6a8"
  },
  {
    "url": "assets/js/59.e2fab4a6.js",
    "revision": "27d75e769a4eecaa131e20e9e76e0413"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.87524089.js",
    "revision": "d0aaa6aa86fdb240472d9509960d5b7c"
  },
  {
    "url": "assets/js/61.48a58a14.js",
    "revision": "45c7de4ef9feff41b6e9b4b6f9afe9f5"
  },
  {
    "url": "assets/js/62.56b30dc3.js",
    "revision": "bfcec91eb32746d4417b4e802bf7b375"
  },
  {
    "url": "assets/js/63.a5e4e803.js",
    "revision": "674081a7c6c9599c7d04a10f422ec9e0"
  },
  {
    "url": "assets/js/64.4c11d120.js",
    "revision": "d42def0b2746809278e437bf2100790c"
  },
  {
    "url": "assets/js/65.3c08f73b.js",
    "revision": "88ecd32f7b17ffbed6205fc09ba347e2"
  },
  {
    "url": "assets/js/66.9433193e.js",
    "revision": "a9fd9cf3317e70a7d314e869acbfaa50"
  },
  {
    "url": "assets/js/67.f4066ad6.js",
    "revision": "6edbd385e659d1b68559638a7ff29499"
  },
  {
    "url": "assets/js/68.2b2b2bb0.js",
    "revision": "0f1a79dd81bbefa7da7fbbd5552a6272"
  },
  {
    "url": "assets/js/69.1f7be0a5.js",
    "revision": "6f99786eca7f7dda30c28ae07155520f"
  },
  {
    "url": "assets/js/7.abef3e66.js",
    "revision": "9d2f6854c3be8c9bdddd921e4b975af9"
  },
  {
    "url": "assets/js/70.c72430b5.js",
    "revision": "b8ae7bc619ea7840b15886479325dc2f"
  },
  {
    "url": "assets/js/71.45cfa989.js",
    "revision": "b06279dd6fc3ab7ae54c1a1a085956fc"
  },
  {
    "url": "assets/js/72.1264989b.js",
    "revision": "591d0dccb8bd99224c40680437be8a0a"
  },
  {
    "url": "assets/js/73.501d02fa.js",
    "revision": "1431f6ad166ef12a3c58538fadf4f63b"
  },
  {
    "url": "assets/js/74.f76485f0.js",
    "revision": "efa2a6731d398172768ebc3f6c700af2"
  },
  {
    "url": "assets/js/75.85b104ef.js",
    "revision": "05a3f49457c39ee94ab29867fc491385"
  },
  {
    "url": "assets/js/76.e963337e.js",
    "revision": "e6c5bf608825f0199953acb03ce6bbef"
  },
  {
    "url": "assets/js/77.a71e8b5b.js",
    "revision": "b62b5e36989a095126ccef1e578f6d11"
  },
  {
    "url": "assets/js/78.d56ce31a.js",
    "revision": "1a7a237a0ebed0f4e669026298cf6d65"
  },
  {
    "url": "assets/js/79.709a4895.js",
    "revision": "d2ab401d18f2e72633ae5f4223112fc9"
  },
  {
    "url": "assets/js/8.77ef523d.js",
    "revision": "f91af8d06d66abdea453fa2e7d24367f"
  },
  {
    "url": "assets/js/80.77740f78.js",
    "revision": "3a8d0e7538458c63264be1d3da65aa4a"
  },
  {
    "url": "assets/js/81.4c57b1fa.js",
    "revision": "cc59e0625ce190a5c00201bb0deb77e8"
  },
  {
    "url": "assets/js/82.41fba5f4.js",
    "revision": "57947089911611f13148ad90e0e44a3f"
  },
  {
    "url": "assets/js/83.c7c49b45.js",
    "revision": "5dfa76158f7045fe1514bfd479926d91"
  },
  {
    "url": "assets/js/84.bca833bd.js",
    "revision": "b486b75046737c06de5bf91cd1f077b6"
  },
  {
    "url": "assets/js/85.697cadcf.js",
    "revision": "78375833a06332c731ceab6c7295265a"
  },
  {
    "url": "assets/js/86.2973e9b9.js",
    "revision": "846cb3c5838b87aee1c7dd29d7b119b3"
  },
  {
    "url": "assets/js/87.84a72384.js",
    "revision": "46b0ecc6cdbe464f91fa5c4c4474f82e"
  },
  {
    "url": "assets/js/88.007476ca.js",
    "revision": "72f0777c089b9ebccedc075d991b0c2a"
  },
  {
    "url": "assets/js/89.e444022a.js",
    "revision": "851abe6e22aefda1b95e4806bf36f1c2"
  },
  {
    "url": "assets/js/9.a301cb45.js",
    "revision": "7fc8cb69a031003381ab0ea33bd8e9c5"
  },
  {
    "url": "assets/js/90.e703c91d.js",
    "revision": "f6a38e7997a6f8a3a250929ab2a981e3"
  },
  {
    "url": "assets/js/91.bc63425f.js",
    "revision": "39b801141836bda40d8c7c5afcde5f17"
  },
  {
    "url": "assets/js/92.0857973d.js",
    "revision": "6544b216a34ff9838a2c691408a73bff"
  },
  {
    "url": "assets/js/93.26bf6dc8.js",
    "revision": "30c8274ef27f4b336996ece19367798b"
  },
  {
    "url": "assets/js/94.29b7a7ec.js",
    "revision": "c67bb2675b56053807789341d04d1b50"
  },
  {
    "url": "assets/js/95.7b8acccd.js",
    "revision": "b807e425124949e94d9f8bee3def7533"
  },
  {
    "url": "assets/js/96.3fa2f57e.js",
    "revision": "391616830951470b730542db3643e900"
  },
  {
    "url": "assets/js/97.729352b8.js",
    "revision": "4bd1358124a0bffd1c09ddbfb780ef06"
  },
  {
    "url": "assets/js/98.a0b702a7.js",
    "revision": "c2b29eba0475977ccdd88158da76a7f0"
  },
  {
    "url": "assets/js/99.baefd625.js",
    "revision": "47331f9a4baf90707ca987ae2a4f272c"
  },
  {
    "url": "assets/js/app.a8a45e36.js",
    "revision": "6e0c09427c733f5dcc009a052e3a7c83"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "0cd783e3600f418f72a38e501e5dc091"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "25d67927205b2a49d7a98e9f89863159"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "0b579c4b6464b645ec16d4a90eb00ca8"
  },
  {
    "url": "tutorial/index.html",
    "revision": "e0a0c4ab7854e2276605ce88e0a1d3bf"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "1950e61818592a3a64e8ff15f0e4c7d7"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "e24f28835744bf90731434ad02b1a45b"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "3ba71aafc8bdd5d20e656ead4a621077"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "3332ef7c3eb55edda3df021da28e7d1c"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "e04197e5e3df421dc6b18ca3210f26f8"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "08735a30aa3a9a245077fd66562ef4c2"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "480f3497be440e37ead0d7552db1c995"
  },
  {
    "url": "zh/api/index.html",
    "revision": "16698d16a81fa258ec472d1887dddecd"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "68a4a7fc9f5924b7aec24250faac194a"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "4fc733dab5821d38b215ebdb3b951ef8"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "36a96f00c072097352669adaa517c0b3"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "053d6a3c4221baccdc39606613389823"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "dfc87f9a219532f7fdd60dd0beec428c"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "a7cf35477969b9a195ea8692cc16c5ac"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "0b5fcb46a970615c03c59cc7fe5a8374"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "e88aa5e5a4130090b2ccea28029f33c7"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "16bcd90f5abae75e9d331487387feaab"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "c65a6c40b8e0053215bc99c3c0fca903"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "d16d871460b8640cca504148a3eefb9f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "2468838ae581365b1065f5c500f2728c"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "fe301a15cf63c62efbd73131100c4ee8"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "3103b624bb1ea14dd2ac987c8cedc784"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "99db81ba22e0fb9925a66c8c9679e00d"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "b9bf0ebbe51f633c49928999178a4d2a"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "357cfb986eb7e9060dcb83e0dba72d7d"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "619380e435adc8a598875bb62b43ad16"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "523b06c180461491aa317b2cccd4721c"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "b06c1a45c1173330f903109352d4c98e"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "ead6c4edab79c690d0cc2bf56e69242a"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "c968e208c688840d26c37332a000ec8f"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "e3d0c5ae8b834149a0415b7bafbfb4af"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "495388da8ede8483a92fb14349f656fa"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "1b7abc24eb7ef9c8e5452a8f692da9d3"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "53c4b242689636d1ede945f6f5661017"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "21337c88fba7fce7c92f3d0372ea16c1"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "c4f042951cf5859ec4e13ead51a4041f"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "ed0a93c40c62bd958387e82063b46af5"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "bef826e76b8463bae24fa83dfecd2712"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "0a99aa4110fdaaa71dd8cbf5f0ecf760"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "c1aa47bd73f4b396f649054ac6259223"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "7280d3ce1025c279fe4e65c726e46f5b"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "66952dd3aac581b0f0d8195458db83cd"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "2b3f4066db8b33a3a2c38a06be9851bd"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "72d9cca0a4e3b6b047f0c68f990f72f1"
  },
  {
    "url": "zh/index.html",
    "revision": "1b87891f11c827563b8984b13cf6cc69"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "b5fb4074ba19bfa1210b27404b3e3650"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "1f4df97cbd78d67ac307ad1fe4a44722"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "c4d53b40ec30f3644ddab71c713f65ca"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "31663eb900d7e77ffb47e42863bf8455"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "94a4359a5b6b1ac89443914577e17ea5"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "51bde3ee406fb1442c501d5c6714f593"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "93290d77f286f15b5ce0296b2b23b51e"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "be0409f33189bf84a4af669d0b7936fe"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "fbd36f0efbf201ce1debbf979cce9af4"
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
