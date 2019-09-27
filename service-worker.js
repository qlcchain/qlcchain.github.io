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
    "revision": "87499201aa1fb4c3ddf5fecbcd0604fe"
  },
  {
    "url": "api/index.html",
    "revision": "76ccf6d0407a4d6c3e92fe7f272ec5f0"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "e6d8c4dcedfc832988f7efa784c91d91"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "c7a39fd38877c8c004e0f79b8fe01cce"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "0269e38161ca55c50374105dd6d2963a"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "9fb9742391d620701ba25bb26e8e4f88"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "088eed263854c697c809108c802a00af"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "4c03c13f1149ac196b74493d40c1003b"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "ec1496ff477697929b23bf4f8d66ab89"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "132eb0b04b14e9b8abaecaeefc17c281"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "6f0e6c7cf4991adaa70a161a1894ea14"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "b3dd9046e08420a5278d72270a79f831"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "3bb4d7eb9a3dfc1cde407ac3e4daccc9"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "b362fcc35f4c181574a85149d5138356"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "ed61217d67c5b78c0aba6cb6dd2bac3f"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "916d06468c6cb72f1b0c94a8425b9cc2"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "0321473732096738e616fff11f35cb50"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "4bb508fb95e9d05786527a44f706b418"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "37cf28e868c7687014aa3b092a9713c1"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "03730ce12699dd6fb0efab0ddb63c33d"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "5f4b0bc423413f9aa3d8d7ba119bd468"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "07ab76925ffc32dec644d962da19519c"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "440e7f2d52202202f57a5c2a1e98a709"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "986882e11354aa0e321a520595feaa41"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "383dc6fd0373d53df6b56b40aa85793d"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "aa04881036f33ce95c33ff668b639998"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "d03040749548d6bfbb77f4f06fef1340"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "28253da374bf4a5d0132e66f0a42d5e0"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "733e8fc4ecf2719fda89b2907f37436d"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "0e2ccd646dad8a1368348ae669ab0047"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "35c241d20c3ccbcfec08cbccbec47bda"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "140c1084a51cbe912865404fc14fa470"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "57a6e2433fdaf2699bc6f1546932a82a"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "a88a8f260f937de28d8875d45c9edb05"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "f3ca630e6811eca34a6c1dc8ee342fff"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "136046e2ca9918acb38fa2253d03a58f"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "661649deff83676a8648f945fb1b4c5e"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "edac14e7b8ccd07b38b2e0fc185ef592"
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
    "url": "assets/js/48.38124d90.js",
    "revision": "2378ce4f31adff1fdb38550987f2967f"
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
    "url": "assets/js/52.c11f6068.js",
    "revision": "59d6d5ab0bc250add5fd1fc09daf5a2f"
  },
  {
    "url": "assets/js/53.6cb9c00d.js",
    "revision": "5e9b450c0e1f5082f857675b147faac0"
  },
  {
    "url": "assets/js/54.4107a0c4.js",
    "revision": "18b5bb7b4fc8c8bd88a00e661fc26ad8"
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
    "url": "assets/js/app.5ad9c73f.js",
    "revision": "75e0a44c3d1299041e3a6b2dbad872c9"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "020a9f3362a672756f367e4092da3a87"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "d716f4f381cc2cbb1edd3f352da40a66"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "769f4f3564acadedce6459338c26201f"
  },
  {
    "url": "tutorial/index.html",
    "revision": "c8d60466b9c32b6c31b4c0f1f80dbdb1"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "7eb0da9c1a5283c23fc11c0b02637f40"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "d86c9e15fb510df1b736e632df292906"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "42a04351d568828711d3a26d0f04a3b0"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "e3c671059e8a6299721c3b6a8e870733"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "0b9be5fd78f4d9c4a720c62af28a60be"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "a305fe98fb384c86d3ff459c58ebb385"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "191decdde99ef56dce0eecef4c1ef380"
  },
  {
    "url": "zh/api/index.html",
    "revision": "61bf92dca2e1a60a57f991e3c7a267c3"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "7a7abac76df0df5cebcb087669dae8ee"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "945cf6eafc0ff554f179b8a56683693a"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "144431329d5a1f8243500b4b14caec6d"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "89e3da947228ef8a3b33d3c46fc0c6ad"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "f15595c17208143c8fe3c43ab283ced5"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "d27c80ad65a3a4ebff58605e9b8e6971"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "83cc5151e38f0d37e51ae07e3823e886"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "ccdfa98fa56ff40297f38fbdeb0af886"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "fa7944f3a55f9b9c13e80ab0572c745f"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "26558a4918c116c54a49b6945ca7e02c"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "fee8fecb3a93c37430b47ef28df4000f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "b64e23effec36e4b8f61c0d0d5310acd"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "fad5523b5b42bb4b1044724225c3f880"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "fb235d2564e283fc73ccb87427baf403"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "7d357d479b33483d9c9b840d0362d187"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "f32cf40ba768867ee4e7df0ff164a91a"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "dc279b096222125eef2d209b73b53a5d"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "5b3167054f3102c783154be70a670d07"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "abe8135702a90d6da559e7436e833369"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "f3be478f0f45bb1f6ffb02060acb51ec"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "3df8d2f94b4084a4ffa6394789c40b80"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "65b36cd0daeefad644d75bce64f804e3"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "86907d3980687378069ab234b7aeecbd"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "8e5fe2f27d9568e48cd47e4499d52206"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "e4f9b9c1c7f8df47610fc1c8da142100"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "f34335400197a40dc8d74649f987188b"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "f8aa682cbf27cc75a601d96111e26a8b"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "507741a770d5468dd1f8ba703630707d"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "ef187cfadb156fdbd15169bddab5f16c"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "e9fddd2906942786dd84e216824446ab"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "152ef8dd24d932ed6d2d583b05fa5cf1"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "f4ae603c9f73faec9c864dac8f125cb6"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "38c751f2c5d36ef3a8564d3a35c4c2cf"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "e41ca7a77cf395e441d91dde27a2644a"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "af9a1ccce7e707b319579d13031ca734"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "3013db2f6afac12d8185d67fbb96c75c"
  },
  {
    "url": "zh/index.html",
    "revision": "d41528edb48a80aeb77f02bf1f59ec61"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "196f26db4bab87d81083d505a912c254"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "3dfdfe086970c8c79851d2699fb153ea"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "28783736735a990bb2fd8c15aced5d86"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "519b0cff9dff891190c99c5f2d20eb37"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "248b8420fe187d7bb74bca72d534bf1a"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "dcdeb3ec0701c8ed8e9a01be892156e0"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "53f27b5639441ac18ae40d141532d166"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "28e3345d00782a8d2d0bbecdf9184ed2"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "2a9e03990e96ea75807572073976b064"
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
