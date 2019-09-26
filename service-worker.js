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
    "revision": "1e13b3629fa26a11782db6c87e2c9a4f"
  },
  {
    "url": "api/index.html",
    "revision": "831f59f1995f1ecb295fad27c204a670"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "b0e676493c6d725af834481de08002cb"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "28e0ac6a0f000dea2ddff79bd6fb819e"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "3877ffbb20d391c8c90f580ff6645816"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "ae6d9482e0d806ff59710fbde15d500d"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "5483e40f3305b74b3924bb373bc00389"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "bda3fd04cc85a07a14132c8fc6e7dfe8"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "3f454c707b729d702ab366754773164d"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "93fce3302f55d90c045183e9642c66ec"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "a3ed7edac5e4a61728acc3236922ffef"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "4b00bdd349cd2af825b0e15b30d64214"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "cb05ab05cc498b4f450761c63047757d"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "0e7e803c38b53ef0999c9f63e1c71c5d"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "c3b9f331e3f0fa65e411c746aafd9912"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "c81bcef9126ac3a45340b3bb68b06896"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "20c20d002080bb49efcaef23ed260d63"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "60694bcf0f5d681181183197d232e668"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "a6d0b18a3846a78e354362bf394881fe"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "f4cd94cbf980787b1077c423881f0804"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "543cdfa9fa376a59c226f04b9b6c6d5f"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "1f5fbc3761b8af403b6f78029b54603a"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "b8374697ffb87cb60b0a782704f4a389"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "23de4a97098852c738dc480480d70098"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "e03f5a93bb25a16ca48d4e99055b75bc"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "3ccdac75bfce1d114685eb94fc5239b5"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "3ba78fd61dda9943c87ce5ef660878cc"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "c031e572b7627b4ecfa915eee281a81c"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "efe811e39b8937bb2eef764e2dea8289"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "56d49067c129af1b8f1e3e9b1d8ca56d"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "edbf0d6ae1b573ac69f1eef756a72192"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "92eb7454786de1b7fe28347da4c5eaea"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "76dee71ddceb621bd5630865d11d7231"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "b50fc28ba53c6e703db93a1e0a3e70fb"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "1cd5c8ad33db97872970cc72f729fc10"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "d2817214ac60718a742b7308b5d27f2d"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "2901b8596ed9b41317866b4648351f52"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "113608d95642f54efb9bc633918073f4"
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
    "url": "assets/js/27.c4e89ad7.js",
    "revision": "07255c444a2a9fda3c5e17ea07d80c79"
  },
  {
    "url": "assets/js/28.78442375.js",
    "revision": "62089c09aa953b9c8917b7a2376f8b85"
  },
  {
    "url": "assets/js/29.02fa4bd1.js",
    "revision": "3c31a47d0eab00e094a61631c2cf3ffd"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "5b74fa33b0c6c00f486a7b54464d482d"
  },
  {
    "url": "assets/js/30.0f5d4ebf.js",
    "revision": "170214bdb7dc8988b564a7d2003eff87"
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
    "url": "assets/js/35.e3223a4d.js",
    "revision": "1323038213924450332fdb91a0bfef4c"
  },
  {
    "url": "assets/js/36.b8f2ccfa.js",
    "revision": "f60d286750c7cdd17aa94c429dd099ac"
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
    "url": "assets/js/40.e095cc0d.js",
    "revision": "bad870bd214a9a48a393601746e20362"
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
    "url": "assets/js/47.79a4c373.js",
    "revision": "ab95e091d428b52cd4126d1a4749e44e"
  },
  {
    "url": "assets/js/48.4a36e2e5.js",
    "revision": "b6e9f9842c37c9a09c7fba1d19ffca5e"
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
    "url": "assets/js/52.8d5a6114.js",
    "revision": "783d828cb4839bfff1af5f135c6021bc"
  },
  {
    "url": "assets/js/53.00ee8111.js",
    "revision": "e54cd8efaef054037051e66351571937"
  },
  {
    "url": "assets/js/54.29fd1a6d.js",
    "revision": "5472fbabed6f3259e925847e40799dbb"
  },
  {
    "url": "assets/js/55.9b8639ce.js",
    "revision": "543af5c91a0e007609395393c5b839dc"
  },
  {
    "url": "assets/js/56.b19fc78d.js",
    "revision": "c89da54bc2dc40c62ebf43991783ec17"
  },
  {
    "url": "assets/js/57.70f3d59b.js",
    "revision": "cdf85dfb461b5412639fa4a6a4329c23"
  },
  {
    "url": "assets/js/58.baa6eba2.js",
    "revision": "6dfe617a93ea5215a50601ddd151b82a"
  },
  {
    "url": "assets/js/59.82a94c6d.js",
    "revision": "6a609c195a42b40f6beccda97eae5443"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.728cd15d.js",
    "revision": "33d0f1f3d4777781a8420b6a18b5d241"
  },
  {
    "url": "assets/js/61.48a58a14.js",
    "revision": "45c7de4ef9feff41b6e9b4b6f9afe9f5"
  },
  {
    "url": "assets/js/62.8927ceaf.js",
    "revision": "669de319182673d78aedc55edfcd821b"
  },
  {
    "url": "assets/js/63.a5e4e803.js",
    "revision": "674081a7c6c9599c7d04a10f422ec9e0"
  },
  {
    "url": "assets/js/64.723394ba.js",
    "revision": "3c6606d524bdc177f75e8bfe395472c4"
  },
  {
    "url": "assets/js/65.c82194d3.js",
    "revision": "1f8a25a946f0fe2586687264d303ba42"
  },
  {
    "url": "assets/js/66.2c78e57d.js",
    "revision": "78fd686ebf1f610e2ea959cc8ccf3661"
  },
  {
    "url": "assets/js/67.b161824b.js",
    "revision": "d79998a0b9175224e092f954c41246d5"
  },
  {
    "url": "assets/js/68.142aa557.js",
    "revision": "825c98738bab16d76935c1297a4534f6"
  },
  {
    "url": "assets/js/69.b209a603.js",
    "revision": "ef0cf34b4909de9cc54235178f49b175"
  },
  {
    "url": "assets/js/7.4a557ac5.js",
    "revision": "dee7f9d68a77d8de657784b73054b355"
  },
  {
    "url": "assets/js/70.2a466843.js",
    "revision": "52d95b0370b8c8d85748eefe29ba2901"
  },
  {
    "url": "assets/js/71.f9054b8a.js",
    "revision": "d4967af487542e1647cf67d012e47bc7"
  },
  {
    "url": "assets/js/72.3344f6bc.js",
    "revision": "30d01cb86be644c6c91bbbb48084f68c"
  },
  {
    "url": "assets/js/73.501d02fa.js",
    "revision": "1431f6ad166ef12a3c58538fadf4f63b"
  },
  {
    "url": "assets/js/74.eb5f3730.js",
    "revision": "1dbbfb4986b9679e213fccafe466bf9b"
  },
  {
    "url": "assets/js/75.379ef33a.js",
    "revision": "82f9ffebcec9bc53b2b11959013c731a"
  },
  {
    "url": "assets/js/76.5bea212f.js",
    "revision": "eb048117400cc31c62fc8914c0a2e0a2"
  },
  {
    "url": "assets/js/77.126e786b.js",
    "revision": "b101bf3d0d8d1e43a028cd9d264f8405"
  },
  {
    "url": "assets/js/78.62efaa3e.js",
    "revision": "fb8673cf3dbbf123b4878d921a545c56"
  },
  {
    "url": "assets/js/79.6d09ef58.js",
    "revision": "ae3ba2e877d40fb5565916ebe70ed034"
  },
  {
    "url": "assets/js/8.c5f7a9cc.js",
    "revision": "7ee9031d031f8172426f0669bb103a28"
  },
  {
    "url": "assets/js/80.75db605f.js",
    "revision": "26b2f4132e986fd0329aab7621773863"
  },
  {
    "url": "assets/js/81.4c57b1fa.js",
    "revision": "cc59e0625ce190a5c00201bb0deb77e8"
  },
  {
    "url": "assets/js/82.f0466d99.js",
    "revision": "20f42da6894ef401da3638a646482d11"
  },
  {
    "url": "assets/js/83.b2a98973.js",
    "revision": "fdfd12b9d86f705cae11a73e39b229c6"
  },
  {
    "url": "assets/js/84.c8029402.js",
    "revision": "e4b4032e9020272f701e1cc19052731d"
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
    "url": "assets/js/87.a53eec48.js",
    "revision": "1bd3bfc4931001a8976bd752cf996ea6"
  },
  {
    "url": "assets/js/88.1cd0232d.js",
    "revision": "5e733b7a55db40e95116bb95ca53da94"
  },
  {
    "url": "assets/js/89.8d3cefaa.js",
    "revision": "3dda5a9623424449b81677eef9884165"
  },
  {
    "url": "assets/js/9.a301cb45.js",
    "revision": "7fc8cb69a031003381ab0ea33bd8e9c5"
  },
  {
    "url": "assets/js/90.a7cb673c.js",
    "revision": "80b87821d2a3644f43a80755f24b6de0"
  },
  {
    "url": "assets/js/91.0adf9aff.js",
    "revision": "c61c337aad1624d8580620d175e4c527"
  },
  {
    "url": "assets/js/92.b3b88c3c.js",
    "revision": "217a0a90042ef26f4e770fbca56a4d1d"
  },
  {
    "url": "assets/js/93.3a422c42.js",
    "revision": "8c88c9027040b40c4ca912c461f4b28c"
  },
  {
    "url": "assets/js/94.65d6c939.js",
    "revision": "b5e6fc2e22d73c8fc9756e77a60ce88b"
  },
  {
    "url": "assets/js/95.221cd000.js",
    "revision": "d7f658f087d2310dbec8d21611ce7fd4"
  },
  {
    "url": "assets/js/96.141bfb7c.js",
    "revision": "4a4e4d93f42e88bb59a23769f9e612b6"
  },
  {
    "url": "assets/js/97.67458609.js",
    "revision": "8e57ed7419565ae5d4200a63a9c4710e"
  },
  {
    "url": "assets/js/98.53a2aa64.js",
    "revision": "2f88a0445b39dfc0cee55cb40f4960cd"
  },
  {
    "url": "assets/js/99.214a9532.js",
    "revision": "e17567aed18930425ffef420d72a3ae1"
  },
  {
    "url": "assets/js/app.581f8547.js",
    "revision": "3e7fde0fa9e825428694e55e27ba7569"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "6dbda060a6d6fd92306bb15f7f445ed2"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "a2900b1b56146b5f324c8942f6fbac42"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "40e30c33eb2e7c28affcef9020109d85"
  },
  {
    "url": "tutorial/index.html",
    "revision": "01c9a00b298df8beb18fb776b26e40cb"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "3dabf6c633e7d8b0a8ef93fbca5e37c0"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "4017f5ec9b7ad8825e611a76fdb1701f"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "00481d3e63cc82b1728e94d4aef5f326"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "c16939f8a6a7487dab56214d2986f0f7"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "26137b69079bc2574bf194f7ca1c2020"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "144664ad25c0c16e6729563f70ce4c1e"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "ddf0ffbb19eb945981b078727540da47"
  },
  {
    "url": "zh/api/index.html",
    "revision": "e124a06ba4b959e412b6a00ba3597a0e"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "c74f28776f55efa3cad7f8f9952f4102"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "63e3c208f77bc4b48d90b7d6a1213e82"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "97b7cfc8da98f5c0dab9366a11ee1e4c"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "d8b11a686daed491df72de09880820e5"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "ebeb719cecfda9c5ddad656c53a7c585"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "a06794b6647025983c0110c098fb3798"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "c111446e8d7b784c3e01c052bbd4916a"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "6e3d951fd2509690d2f31af12586bb24"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "df3160a6a94b4799f52a53ac327db6ff"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "c036b0f94ff3f135c62ad48c5e5fc4bd"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "173a6eb43bc1215b0bfe4b1a4e372793"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "98145eb4d995cb8df434fc35b331d488"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "2cd98ce818cc7b47e3c5f693ddf6856a"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "b2b2ecb5cbd5b0b62722dcccf73b8429"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "391be3148bb20d735c258faf1cf7c3a3"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "d496126e225d7c56b1cbb5184eb39e1e"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "7ec189c43b789a5cc96f9d6004a248b5"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "99e8af72f267bf87da7e0450a0cbd69c"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "f0c5e6c2c4dde1a51875944122864e29"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "278b9ef76ecf8a820eff06bc9d4ed484"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "c26f1d89964d11c3971c2276f7ca8bc5"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "1086e0a0df2a02fcecd29d21a784f562"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "75bba47d5ad8ce9caf686c076b6ce4d8"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "4bac4cf1777f99a23e05025316b0c683"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "44545852d21e641cea0ea960b398fe36"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "7100282ea375d32c8c73ec0cc793e6b7"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "f76bd90d57306d795f002761af3e6e87"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "7e4f76862a30a31bf134f0b2284dfbbe"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "0106164fe31b5618c578f66279362d0a"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "58422690883222aabcccd4674c9bec8a"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "83dea40fcda0ccc7ee8a79e42ad4737d"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "387eb6b367bf4b2ef7f6363b9cb40532"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "f1e8fb16e52734d8fe1d22b5369ed775"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "44b09835a47520123872a84c747eadd5"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "36d74553ac1469d93443261098e4ce46"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "3519972a5f777186fd9f6fe122a33efb"
  },
  {
    "url": "zh/index.html",
    "revision": "2f981c8811b56f0e86919da4df5b87d3"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "945827919cdd020f34845f8229cbb611"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "b2bc131b3ebc7b24b1dafb841d67a80b"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "da192ef62c309e3f8c788a6dd3e3e70e"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "480d3277e0bf55ae1eb0e4dc1da291d5"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "8423bd999ebdf04a7eb15805f32b3953"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "c007729311a09d45fe6b2968b49147cc"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "ce3e50d382751d818ae5ea0ed4a25944"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "b06d554fe6aecbc7567edf182cb8ae60"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "4e859930c5679574ee155dd8fe44a66e"
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
