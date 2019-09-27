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
    "revision": "5ac7f90df6db6da435165a775eaba346"
  },
  {
    "url": "api/index.html",
    "revision": "445a49a9f9e5074d0ac140159f934791"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "d19d11093da330fb8df359a70a3853ff"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "d2c6b7886b9bbc9c7ab81c99d5d2d045"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "2fab302e95671870fe75cb759108f288"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "47ff742c21feb4b8401bfb430471c41c"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "bc4ffd7ce575ded3db3635613006cf5a"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "a7f84b7ca7fe1eadbd6f237ec27a986f"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "936b45e671eb06b97b642f2cc4289b69"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "22093b019ee18d08dfa0cd53de2fd0f1"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "91151afe29d9a5704acb6aea02729541"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "1b7ca4ce8c0eee7541b828421e659d4c"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "614c869e9201b6b01eb00c8b9624b731"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "14d616e4e1d8e33529c27d87b8f6ca12"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "00c0070b05208cabb571e6d30660b9b4"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "53e6fab75368ee4f9bb7275a21a44cc5"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "0dc5cf987d4e78e70205e910c24caffe"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "a4f743fd574dc7aa9967b9f4ef7e51ba"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "c727e40d393b39bfbaaeb4bd521a556e"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "8e0cfe4d10f4742d0b0df8558c08c00b"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "7172de8bb25281532e76ad8d6b14fb25"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "11ad0ed4809cfcb330f1dfe8f6e0ba3e"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "0b0e55e1fb30318220216d0a27e1c457"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "f65ce8afb778dc3727d706289f48826f"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "16b1c1f51d358cfe1ebc376d9c91c15d"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "92e1dbc1a561ee29fb17f5275687f289"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "8b5757c6d688657881c972976928a9df"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "0e3aa88293d1ceda8c4e4797962bdedd"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "f95c2c818b4d104dead3173ee058ddd1"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "bad9074bbe1b827b56df83324394ed68"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "71c629eef7d43ded429df759267b2f9e"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "9173784180990656e0866a356aeb3c37"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "4f87602f689ac65c82fab5e1ee512f7b"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "e7108dcded05659821221242ce44fdbe"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "785aa88aa204ab8703e42ef3588005a8"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "b5d85184c329c7614ddf88c79a432a1c"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "dcd5a3e1ecd34c6eb53ac51c78da28a5"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "bd50ab5de3d6dc52d8618ed2c84d30a3"
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
    "url": "assets/js/100.a48a706e.js",
    "revision": "e13235030d755fd1fd93db66d6c71771"
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
    "url": "assets/js/35.e3223a4d.js",
    "revision": "1323038213924450332fdb91a0bfef4c"
  },
  {
    "url": "assets/js/36.53af0cbd.js",
    "revision": "0d301e5f96d514271bc831d3654de341"
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
    "url": "assets/js/40.69090dc8.js",
    "revision": "228cc13a8cf23d1738e76756e85bdfa1"
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
    "url": "assets/js/43.3c7c657b.js",
    "revision": "f3c6d763c33e5521a90098a5f9ea1178"
  },
  {
    "url": "assets/js/44.60131a12.js",
    "revision": "30522ef9156eb381d94a443b4f4652ac"
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
    "url": "assets/js/48.f8247e1a.js",
    "revision": "bf0ae6784636f5b5b7fca372601d523f"
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
    "url": "assets/js/52.9f09505a.js",
    "revision": "10042de8a80bb4f1e0721ecdf1b43717"
  },
  {
    "url": "assets/js/53.1b1dc25e.js",
    "revision": "3de0826c1c9c5ea69f209c56f46702d0"
  },
  {
    "url": "assets/js/54.66155fcb.js",
    "revision": "0a1228f46056c93e4482d060e2bd5cd1"
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
    "url": "assets/js/60.8ee7c027.js",
    "revision": "d7f8bb86badeb2377c4a7b039e1b9a85"
  },
  {
    "url": "assets/js/61.60b89968.js",
    "revision": "fac1a8651a8e7b41cc6ff71ed996fe7e"
  },
  {
    "url": "assets/js/62.e68f902f.js",
    "revision": "3409def35f7b3e982dc84517b9d3b5fa"
  },
  {
    "url": "assets/js/63.fd7108c1.js",
    "revision": "547a9ddeb77874c2d8661b683af68cbe"
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
    "url": "assets/js/7.dd6af805.js",
    "revision": "70271e1539087aa3be5b113363e24c28"
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
    "url": "assets/js/72.1df3767c.js",
    "revision": "60325d05c500760f892edc712de3c892"
  },
  {
    "url": "assets/js/73.a23c5774.js",
    "revision": "c535db58694789ed34ce6d9936371a5e"
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
    "url": "assets/js/78.5ff563b2.js",
    "revision": "0cdf8f68dd4976f6c0058961d5cc32a1"
  },
  {
    "url": "assets/js/79.709a4895.js",
    "revision": "d2ab401d18f2e72633ae5f4223112fc9"
  },
  {
    "url": "assets/js/8.c5f7a9cc.js",
    "revision": "7ee9031d031f8172426f0669bb103a28"
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
    "url": "assets/js/9.5a7e9979.js",
    "revision": "e0ff0b3d5e3d6808edef8652bbe4bdb3"
  },
  {
    "url": "assets/js/90.a7cb673c.js",
    "revision": "80b87821d2a3644f43a80755f24b6de0"
  },
  {
    "url": "assets/js/91.332e3b0b.js",
    "revision": "81bc9bb055bf0b7c4dec484e2327eb07"
  },
  {
    "url": "assets/js/92.0857973d.js",
    "revision": "6544b216a34ff9838a2c691408a73bff"
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
    "url": "assets/js/96.bc8417c4.js",
    "revision": "fad4372bf257c94fe38511c079246ac7"
  },
  {
    "url": "assets/js/97.729352b8.js",
    "revision": "4bd1358124a0bffd1c09ddbfb780ef06"
  },
  {
    "url": "assets/js/98.53a2aa64.js",
    "revision": "2f88a0445b39dfc0cee55cb40f4960cd"
  },
  {
    "url": "assets/js/99.c8412aa7.js",
    "revision": "ff73c2378fa5ec0082b63ec2fc29078d"
  },
  {
    "url": "assets/js/app.1b3cce0f.js",
    "revision": "5492bffed93a826e7164a7df6d77f692"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "db70b7559b6dbeeba89cad5e1509ea39"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "566ed1f1cb85371064890dcb47da5a70"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "11a7a374d66a84dab9ce4369b338db2c"
  },
  {
    "url": "tutorial/index.html",
    "revision": "18a76bb4988a166ab8ea26e1476bbf9c"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "e62eeb387b62388d55295e7beec52cf0"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "38773e3681996fb3ed70e8191ca72362"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "81dad4ccc9dbf77bed7df395165fde61"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "67d48c80dd56101444c0fcc67eaa54fe"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "160d054f71626d19949650450777a910"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "972df7b515b2eecb4abd7b8b9e219aec"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "855713ebeca684c3d2f48e3b98869211"
  },
  {
    "url": "zh/api/index.html",
    "revision": "da78c074e83fffae10979477b0f3cb8f"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "6804960a2b07557e3199210ef7d26035"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "f17c9545b46e7a2f8abf8f03875f869f"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "6248d24f7640e736d756c1d011ec087b"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "d574a849588aad967e3b1375599eefde"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "7bf285fe0581f438207ed052ecf41897"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "5f4c1a24df6348f6352da908b932ab60"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "4fc409d2081f653cc6ea5660a1576c67"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "bec5da9c823d910e11f029b873fc5d95"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "750f69a6f50287527c915e6b716ec7d9"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "2a0bdcc9a860e3cdc64e9e9af0ba41a7"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "2fb057c00b10dcb08afe3bb2a2a9a938"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "41be6d9d4c8c74881efd2314629aae35"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "41e9b5878bee1c59b8b546a8e7c61930"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "c2e2d9527a17adcd0510d889f602b21d"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "c1c1f75f97b4020e6dbb8ac4e0c1325e"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "2081f34fd497fc68408a677ba38c9ca2"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "103317253356b854ac94b0a73e566561"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "d909b2ffda07ff8c202ec89e71940cc0"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "012a840825d06049297671006e2c989b"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "55ce1d9689bd284c45bfda302fa8fccc"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "48d871b45048e0b300ee9de01675ca0f"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "a5a58e299779ebaa4775aa039a3ac8ef"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "74122849d016fa9891d72d196e85fd18"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "3b203864e4f83365a4c505e30d3fcce3"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "e8eaad391db5e899f169ac750a3908b5"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "775fff494e124c5657c28ebdb03dfa33"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "f20f1f377f1a5a97ffad4a34f9c556ff"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "5f3d3f6130bf85674ed3619fc3f01c36"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "5b161175357f238d423b5b7f92f901c9"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "117ac65b7d72cfcb29a7632c539e8873"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "0f477ddf0d843fdfdb2640cb1f4a09fc"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "57be742c1ee5d5ea03df8583f05825e1"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "2af6897455680961eb41cabaeb511342"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "02b5a3f3e34d47663d7f3fdd39872014"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "271e3ffa0b8735d699c7ff9a4e73e1d2"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "0266699ee6c601bac9fdf91d6ec92a02"
  },
  {
    "url": "zh/index.html",
    "revision": "8f0c0fe9fbf411b4f788dea55fae7b1e"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "6f89bbb9f760032055e2149ae66b1eb0"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "f33799886ff863c1d03ececc6a10e909"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "dfc56613b5318e0613aecea48e67e5dc"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "a9ffe727e596b78742796341d8b943d1"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "ffc9ea96dab48efae924125d24c98fa8"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "366d98834a33b8dd4cf6ebfa2a4ee2e4"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "52c9fb3b9331910ff9908e3d3dd6cced"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "7c3c21e389e7be6d6909e6c18551f664"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "fc7f432862165622571ffb674a56c783"
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
