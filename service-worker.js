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
    "revision": "d688a4a2fc8c0750418825c189bfbc3c"
  },
  {
    "url": "api/index.html",
    "revision": "1c69c186c5e6dffd93a6a4518508987d"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "1f8034b4abf5eb6e7e7185a30ba26ffe"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "3d876a6e24f2fd594512c981d7bfd81a"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "f300595dc197add196dd5e1817164c3d"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "eca0c737687b1fd48968b39521b11cc3"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "23aa3d0a7f44ef1feb21961193a3f368"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "a1422b462814cfbadcd9d2039edb779a"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "4e60c12159effb592f83384b14190c8b"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "57679b1d7c1dd0987350fd34629dee31"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "cad481d40e219a3df2151c3804f2176b"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "4598c70d2327bba74d70dbdc7f15a137"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "ec731e52ebb3b791c4a5cdb95ab5ad15"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "90e4e2e8a33d9b3ebce71be90507f283"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "753c3cd985b1451cec72978988b30c2c"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "d9cd117f2e92c2b514a7206e78b22a4d"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "a1ed97388251832624c9f46c74e2d7b6"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "5efeaae38b134a936240e3d4d5decd69"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "cec673f864fb2831dfbb0d89b0eff4bc"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "d332abac04f9a1f8601b67d75c589474"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "55737fea560eef09e9317c2059a458bc"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "1b6e2b50635557d8216f7c9654ca2600"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "399b88acd33b39015ac66f2622e3ddde"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "e63e5bdd029349d522b3a7fea7b84a6d"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "d2568fc8020a73d9052c35b94ddae443"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "fd13e9d70f3acba8db187f6203c127cb"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "50e3663c223518102a67cf765275f477"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "5e233079d47b1ad6f5bb2acd63632843"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "e04a39f2c86e6c667694b15df7494abc"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "121703f3772abdcbc607fdaee4950f1a"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "c76244b6f4258f721a7321f6b60ce245"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "683b4b01b3a7c3ae3247de001b1878b5"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "4ca61880f478844daeac01af82547af5"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "99d88d19359c6bdf732b4c87722e900a"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "7c5f11924d5258c8358f2e3608d9869c"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "44902936216791be81bed44cd18db471"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "130c36e1de460aea6198fa42033ae9e3"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "aae87bba88d555af8ae6a68059bd4f9a"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "b847cb853c3c9c0eb02593979a2b1db9"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "e5a2577566f009120f98b1ba20d1f54a"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "bd21b33e3fa97f8ddb278a9ad332665d"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "d7db50ae17bfd54164eee7e00063f324"
  },
  {
    "url": "assets/css/0.styles.f8fc996d.css",
    "revision": "68b6473f813e567fa1c9514003b3875e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e6cb7e7a.js",
    "revision": "46fd58a03f4a1b678e7f68dfcf705e0b"
  },
  {
    "url": "assets/js/100.6b07ff74.js",
    "revision": "e040bb3b5f344c297876eba60ffed9f5"
  },
  {
    "url": "assets/js/101.8820816a.js",
    "revision": "535b4f038b8461c7cd5178322fbee2a0"
  },
  {
    "url": "assets/js/102.7d62c97c.js",
    "revision": "e5466b7f55f10dc80851b40d90225012"
  },
  {
    "url": "assets/js/103.7dff1f52.js",
    "revision": "da0259ff1ffcfb0a5401d7e90c5ba9b2"
  },
  {
    "url": "assets/js/104.57408c0a.js",
    "revision": "9d693f79e8d2ba0d0d8eb31b2c5ecd8f"
  },
  {
    "url": "assets/js/105.deceef18.js",
    "revision": "da486df094e88e7982bb5025378b6cb2"
  },
  {
    "url": "assets/js/106.0962c654.js",
    "revision": "bad96253707a2a62ddafcab1259b0d55"
  },
  {
    "url": "assets/js/107.3b9e5cca.js",
    "revision": "95043530bf82eff585367cff2fb20442"
  },
  {
    "url": "assets/js/108.984dd048.js",
    "revision": "2eab43a9c3837bf844d1ab85889e7168"
  },
  {
    "url": "assets/js/109.01213771.js",
    "revision": "41138741c5ff89c8aaeeee61f51e8e78"
  },
  {
    "url": "assets/js/11.d346978d.js",
    "revision": "380132fa9b8c4a73656b69fa4acb957e"
  },
  {
    "url": "assets/js/110.ce05948e.js",
    "revision": "d9705e19579c81bdb9986dfece5da9f3"
  },
  {
    "url": "assets/js/111.c09fcb33.js",
    "revision": "94a8b9cb4fc036dee71ec1c2edd51e87"
  },
  {
    "url": "assets/js/12.041955d6.js",
    "revision": "49cd43b2b7c3fc603e588972c605aeeb"
  },
  {
    "url": "assets/js/13.68bc243a.js",
    "revision": "292d14408431e6e40bd4ce493da1f5ff"
  },
  {
    "url": "assets/js/14.c6bb8fbb.js",
    "revision": "77995e09309e0a955046217cb09f8503"
  },
  {
    "url": "assets/js/15.8287d9ca.js",
    "revision": "e0ee7d870566b695bac3a1a9b81971c4"
  },
  {
    "url": "assets/js/16.dc6a9a36.js",
    "revision": "1865a8ece2c23cc784a179be1100438e"
  },
  {
    "url": "assets/js/17.3ebb3d11.js",
    "revision": "d6880536cdec77f648992951029a9f0d"
  },
  {
    "url": "assets/js/18.26498f88.js",
    "revision": "e1061b05f1c64150079ec4ac9e2f2055"
  },
  {
    "url": "assets/js/19.3dd5bd41.js",
    "revision": "9b268201741e9eae70f8962a7f35ceff"
  },
  {
    "url": "assets/js/20.ba8e4047.js",
    "revision": "74be8993657e5e2d920d5bd1c5a6407d"
  },
  {
    "url": "assets/js/21.69d7e890.js",
    "revision": "8ab7aac0e75e04470bb8f4278bfd138b"
  },
  {
    "url": "assets/js/22.4afbc361.js",
    "revision": "cb7bad3d56905b2b42df2f95029a2a53"
  },
  {
    "url": "assets/js/23.9ab92ded.js",
    "revision": "12d628a962346504084f3b577b1482f7"
  },
  {
    "url": "assets/js/24.3fb1f408.js",
    "revision": "ff101c65cb9d151e5f0732fcaec03f4d"
  },
  {
    "url": "assets/js/25.652e7d57.js",
    "revision": "f153a825b3aaa8730e1d3e7874fecc28"
  },
  {
    "url": "assets/js/26.a567bdcf.js",
    "revision": "bdda9f4a1cbb717b10bc7836377bf814"
  },
  {
    "url": "assets/js/27.b6f3b96e.js",
    "revision": "fb99f7f46e77326a617665b22afecb63"
  },
  {
    "url": "assets/js/28.01feba75.js",
    "revision": "acf027c39d830ae0c59fb0a209c8f45c"
  },
  {
    "url": "assets/js/29.fd7a3f27.js",
    "revision": "758f93a837b6ef5bea0cae410e26d05e"
  },
  {
    "url": "assets/js/3.cf25f18c.js",
    "revision": "10fb435d65f6988e9eb4e0e75f129a55"
  },
  {
    "url": "assets/js/30.0410eac9.js",
    "revision": "fc79acab8d3d282d94181066726d6ac3"
  },
  {
    "url": "assets/js/31.261a66e9.js",
    "revision": "e1edb0f08412dae2a69f230d294ca678"
  },
  {
    "url": "assets/js/32.bf9ee176.js",
    "revision": "87d0e8093f16f1e940bcdb4b97b21bcd"
  },
  {
    "url": "assets/js/33.5f2a2bae.js",
    "revision": "82f014aa42b08b65922784a091c17e90"
  },
  {
    "url": "assets/js/34.8af0243e.js",
    "revision": "c9352859bd7ad64d0fe13d94d2277c3a"
  },
  {
    "url": "assets/js/35.cda888ac.js",
    "revision": "afecb380d64677b4c32a6c42816cb953"
  },
  {
    "url": "assets/js/36.b01be799.js",
    "revision": "3fb9704584647e35884ea80644c45b8b"
  },
  {
    "url": "assets/js/37.c2ad40b2.js",
    "revision": "5782cee6df8230c86ecc836f13528c1e"
  },
  {
    "url": "assets/js/38.9f8eb496.js",
    "revision": "3a15e7304295a31bebc066d0cf83c1ac"
  },
  {
    "url": "assets/js/39.f0197213.js",
    "revision": "17ee10f07ac353aa0f94a4a44e2ee04f"
  },
  {
    "url": "assets/js/4.b093b163.js",
    "revision": "593aebd7ac173130f8d960acaf98220e"
  },
  {
    "url": "assets/js/40.7f2933f1.js",
    "revision": "167b8c4d43505e7b9b6967172a13362e"
  },
  {
    "url": "assets/js/41.b65ff74d.js",
    "revision": "cc363a18622ccc9da49c89a5cdddc19d"
  },
  {
    "url": "assets/js/42.253d7be3.js",
    "revision": "a1bec628a195b67f4646d837a512386f"
  },
  {
    "url": "assets/js/43.6a2fb0da.js",
    "revision": "d8c2ad2a6b933a4a1f1df26623a478e1"
  },
  {
    "url": "assets/js/44.c8ad66b3.js",
    "revision": "fe001e12d327272106e878146cb8fb32"
  },
  {
    "url": "assets/js/45.87e0a0a9.js",
    "revision": "e16055206d0e01f700f345b99cef139a"
  },
  {
    "url": "assets/js/46.c4abeded.js",
    "revision": "595bf585a9285fff0932cfaa8323c950"
  },
  {
    "url": "assets/js/47.7656c73c.js",
    "revision": "aae24db76406a5fb59c96d3728790516"
  },
  {
    "url": "assets/js/48.b99530b6.js",
    "revision": "723c1216808f305a83d5ec4f48b4e0d2"
  },
  {
    "url": "assets/js/49.3a63b0d0.js",
    "revision": "262a45792dbdd15799f2591dbf761e8d"
  },
  {
    "url": "assets/js/5.a31aadd3.js",
    "revision": "59e39b17b154d77c320812fa69490504"
  },
  {
    "url": "assets/js/50.a094f955.js",
    "revision": "20c434d7e461487aea9217a30f2738c8"
  },
  {
    "url": "assets/js/51.4c250f0e.js",
    "revision": "271f7fe8cdf05e867a9c4a1a01ef9cb7"
  },
  {
    "url": "assets/js/52.7608df1c.js",
    "revision": "18feee11d193942013332122625438f7"
  },
  {
    "url": "assets/js/53.3815704f.js",
    "revision": "be279016c3c511812258f44c9fcdb230"
  },
  {
    "url": "assets/js/54.97338a50.js",
    "revision": "2ddc11f56ec332999df0545e2b928d62"
  },
  {
    "url": "assets/js/55.7b2e41d9.js",
    "revision": "0b484d80e71196feb89aab43a090ad69"
  },
  {
    "url": "assets/js/56.47c6cf01.js",
    "revision": "d5d9de6a8b8b4988256022373633dd29"
  },
  {
    "url": "assets/js/57.8af73876.js",
    "revision": "cb70e6b8e67019d4bac6c0d9f56965ae"
  },
  {
    "url": "assets/js/58.95e5fbfc.js",
    "revision": "2cdf09fcc8d6e19a8b18f769f9db44b4"
  },
  {
    "url": "assets/js/59.4d45b338.js",
    "revision": "45c48b9608c8ea4a73a235cd2b783c26"
  },
  {
    "url": "assets/js/6.92d08861.js",
    "revision": "3e25d703d78db00fcdf54bf873871295"
  },
  {
    "url": "assets/js/60.fcc8ceef.js",
    "revision": "a35673c1553e8fc7f96e866f651beb6a"
  },
  {
    "url": "assets/js/61.58e6d732.js",
    "revision": "8644a2687f1f3214bf377a14fd646e02"
  },
  {
    "url": "assets/js/62.28de8808.js",
    "revision": "1158938cf5e58abc744b5b4d60043253"
  },
  {
    "url": "assets/js/63.74463dc9.js",
    "revision": "f460695043ef7bd2f8db2b5c8bc9578c"
  },
  {
    "url": "assets/js/64.5ece67c5.js",
    "revision": "71f9aedd1c6f96c099500e99e36ab8c9"
  },
  {
    "url": "assets/js/65.6236a007.js",
    "revision": "ae832e2d1d39267d91ed57232303d7d6"
  },
  {
    "url": "assets/js/66.8a78dbad.js",
    "revision": "c962f6501a48f2c94cc648a4dd71f030"
  },
  {
    "url": "assets/js/67.d98240ce.js",
    "revision": "384704cbf045093260e2c8a699b6c085"
  },
  {
    "url": "assets/js/68.5da2c7ca.js",
    "revision": "a9f6e05386784f6fc713116d44cc1da5"
  },
  {
    "url": "assets/js/69.c53a12d3.js",
    "revision": "6679b2190f989f746b6075a815214915"
  },
  {
    "url": "assets/js/7.57701652.js",
    "revision": "a26786a762dc5cc828ef13c6399c7bbc"
  },
  {
    "url": "assets/js/70.1994c4b3.js",
    "revision": "91e2436611b6e518172471c4e1726f32"
  },
  {
    "url": "assets/js/71.d3b6818d.js",
    "revision": "7c77ba13a2e0f5873da8228b3c8f8371"
  },
  {
    "url": "assets/js/72.643094aa.js",
    "revision": "1c9b43acd9728957eec65bb7868a83f2"
  },
  {
    "url": "assets/js/73.475c397d.js",
    "revision": "1b76701292c0f908e0f07902855357a6"
  },
  {
    "url": "assets/js/74.0edd3ffa.js",
    "revision": "cd7561933dffaf0cbfb596d52611be31"
  },
  {
    "url": "assets/js/75.102fcd19.js",
    "revision": "a65337ea03921fbc8479e092180449c4"
  },
  {
    "url": "assets/js/76.d31274c1.js",
    "revision": "417ecfce200c248bfabf560cf3e125b9"
  },
  {
    "url": "assets/js/77.30f1f098.js",
    "revision": "bf2c91b992678ef421f68e7181e89e5b"
  },
  {
    "url": "assets/js/78.f882a4bc.js",
    "revision": "c20e8cccf7394efa4455991d606fec9b"
  },
  {
    "url": "assets/js/79.601c7a01.js",
    "revision": "e67056c2e63a8bbc47a8c11957bc189f"
  },
  {
    "url": "assets/js/8.8cac8974.js",
    "revision": "4193211b6d202b5901070a521552674d"
  },
  {
    "url": "assets/js/80.870e515b.js",
    "revision": "da01b53cafa86aaafffb90588f5c4a5e"
  },
  {
    "url": "assets/js/81.e37173a4.js",
    "revision": "d4012b4144e7fc97082ec98d77c545a3"
  },
  {
    "url": "assets/js/82.93622bbd.js",
    "revision": "c66bccee0c1307711ef3d82482d90ccf"
  },
  {
    "url": "assets/js/83.5a972c87.js",
    "revision": "6bfc2fd2a5c454db27b2ce9058e41f90"
  },
  {
    "url": "assets/js/84.41421ec3.js",
    "revision": "c41c34fdff2822ea311ffee4e4551f1a"
  },
  {
    "url": "assets/js/85.fd9e629b.js",
    "revision": "55b9ed54c2312e77d2a2f5df3a7c5804"
  },
  {
    "url": "assets/js/86.27012fcf.js",
    "revision": "85dd43c1d46ce5c12fcc1984469f2501"
  },
  {
    "url": "assets/js/87.3986b1f8.js",
    "revision": "b36ddc1361ce2f1136b39b435c9e58f9"
  },
  {
    "url": "assets/js/88.3c35e701.js",
    "revision": "b8b3b51b97df8c16985efaca4d9c855d"
  },
  {
    "url": "assets/js/89.86b37843.js",
    "revision": "63a48a0eff03c596e885e1488cf5b670"
  },
  {
    "url": "assets/js/9.fda140ba.js",
    "revision": "2a97752e7b3947d08628881420bfb30a"
  },
  {
    "url": "assets/js/90.9f2c8840.js",
    "revision": "11184b62becd16e1592d308ec8d42a01"
  },
  {
    "url": "assets/js/91.9229998f.js",
    "revision": "bb8d6372d1142a4287d3b9c92b26afb9"
  },
  {
    "url": "assets/js/92.be86cfdd.js",
    "revision": "14ac378d7b27111fce92ad0105f0a76d"
  },
  {
    "url": "assets/js/93.5d525a05.js",
    "revision": "8ddecafc46540db30db92333298765c4"
  },
  {
    "url": "assets/js/94.a15eb0ef.js",
    "revision": "75d583d734d8372458ace0d957502814"
  },
  {
    "url": "assets/js/95.43dab723.js",
    "revision": "2d4ab59ac498a73e67224b723ec37fd3"
  },
  {
    "url": "assets/js/96.6cfb659d.js",
    "revision": "197ed2f47f7add3207668b76995b8fe5"
  },
  {
    "url": "assets/js/97.f38ba34d.js",
    "revision": "d21d4890cc3335af3390e2c478156609"
  },
  {
    "url": "assets/js/98.0f5eae08.js",
    "revision": "794b49edd30571eb5bcd376cccaae415"
  },
  {
    "url": "assets/js/99.415ba6e6.js",
    "revision": "ec35c1b01da72fd08009e057965e3f6a"
  },
  {
    "url": "assets/js/app.7cfc8e2d.js",
    "revision": "6a4bae35aa2f855b8344ace7c8b18c3c"
  },
  {
    "url": "assets/js/vendors~notification.19830208.js",
    "revision": "b9dc7478161584aa966b84e5a0eb725d"
  },
  {
    "url": "i18n/index.html",
    "revision": "cf5cc8df219d5717980655ce9b407b07"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "a0120165d58a64ee93be9be71d7f90e1"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "d578bee6c1e0ade43b275a5dc05f78f2"
  },
  {
    "url": "tutorial/index.html",
    "revision": "0bc7bc76d40d844c3794be8b51444531"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "b2ed8f32ed8297395351f8c321120a8a"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "b9e4a45010db52e9714405c61b54ab43"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "b98cf2a751f589e5bb6914ae6c146140"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "8f60be03cece430ea92722a410d78abe"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "79d8bfa1d2eca7eab545c78e33d59585"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "180460e75efb9df9f5447314c4b35c58"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "8823596cec9a8b691f2a95f03ef6097e"
  },
  {
    "url": "zh/api/index.html",
    "revision": "861bdbde2c94fc2c2aa6638e63ed9075"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "5062197221950e5153130f0e03044dfe"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "ec60ffa3b80997041a253a6d0bbceac3"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "66e0e3f7bc173e6ac2562af0bd153ed6"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "3f1a2ee6e409075f548d1a3df2b24d3f"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "183b14b63469373280077b6649f3d890"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "75dd132435385f5ee54d92af934b3656"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "df306bd69026f5ace8021a62215c3349"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "33acaee6cc10c3f2555feba1d834fa18"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "f3c93583907d420e5b2ce8b483fd50f5"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "96c9d1b7e3c91ea4ab08015697bcdfa8"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "e2a26ae93adf51de4a80622131df2fc9"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "28f11c0c0c88731a04bbaaf2ed84006f"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "4003d5bd0dd9193bf58fb1a3078cf6c7"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "2315bd6edf05f7aa6bf228884bd2f326"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "eed078cb35eac663d108641eee563d02"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "e38292d03e024424f3a8db3afb490e31"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "1cf65878569c24f789d8eab96bb323e3"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "7a9471b5c6efbe90e0f70650f3f0d364"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "f58f9e734ae0bb783fe704d1e4b2b518"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "5fe3b966918c97d50337fd6b7c20f62a"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "646b908117180f73ce08f5c681eb340b"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "ddf8ddaadfb235a5e4388645d6decdee"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "229ba449ed286dc458c5e97f8bc6177b"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "560e8b448f7c731a7e458b6a30ccf69d"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "875ffd58ee28470ddcf84d1fd0e30393"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "51585911847f2b0efca94b8a2282f970"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "0ca6df5cd5b51ccc9f28ac7c9b8fc70e"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "e8f163682be052446f270d491fca3c04"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "59b4c4a2997938a793c7a5b1095d99ed"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "9c71b52b54aac394f15cb059e02b0add"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "8c435c9c4cfbf248d01fc719114bf8f8"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "b3bb65eae2757af2abbc99005a3e90d7"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "fc152ac7cbebd95057f08d0ac8febf1b"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "a6a167e11af57a9165018d3ea669ad26"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "7eef109f30148624280fb989bf12d363"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "6a84b0dfaa33fcfd5882c74e5ef16587"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "8eec9741c19e8564f1cad2eb3bc98a53"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "82fbaa2e13733ee5f1f0a4842cf955a9"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "e8b7fa3f188cb7e8ed6ea9c3d5eb7cfd"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "261f4524cc02d1ab3ccd8b2d6dc9854c"
  },
  {
    "url": "zh/index.html",
    "revision": "50c3e89a21a528d5506feb0f224bd8b9"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "943935ec06f8a588c03a746faa913e2c"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "90a2c0aa83f345beb518b87fb1e5699c"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "4e91d76b056f6585cb0aaf41bb841d5d"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "af5d7fe914dfa28ae37bb7691847a7b5"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "71a09f7ffd29463e15df481d60c8fc90"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "051a16fd75f2c2342172fb38aa961ab7"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "22a5d26e463fdfea324b3ae87bd00400"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "927a5d1e21c561420914f884607c9b97"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "9e7075d3e137dd349ea3f7c418914fa7"
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
