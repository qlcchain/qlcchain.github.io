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
    "revision": "713acbc462a95296d64e8f18eab41ed9"
  },
  {
    "url": "api/index.html",
    "revision": "9c0972c933592c96a253f949fdaf7eba"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "35c7c161f7cc3602cd3574829d97972b"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "e9fd279a023e7dbf376aded910463681"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "9f5dff3ee3eb9982593e66a0be76215b"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "3af08da98a425b7457e87ed342ecdf2b"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "b7c8cfc0ef0fdbda563fdb9b3f78542d"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "23d5cc7549da2e792cd0c12b4b963ea0"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "ca7e5faf2ce2c66159b69ec1ced0a067"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "7da59bb86fc7967fe7cd881db6607ae5"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "ad3891e5a0ec05528deea23876421921"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "4cf60694996918330a1017cebf5dde54"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "5dfa0bb026029578aa27c7cd59d9687e"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "a69de4f1c3162bfe07bf7a0989d0dcbf"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "ad82afbfb4c6e299c49f3f137b0870ad"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "dce290d58eb32e69d1154c205d88fb1b"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "97475345c36dadff01ecce76e962481b"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "21f431a6a887d70f002df3b2be4461ac"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "b6ab4a58fcfd1c16867c5ac3b405da58"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "d92eb4f79432e0228541d41489c7b9cd"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "561cc72c3c5fb9505da4ff2dfb3dd7ab"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "795f959a0c7db344b5b94aec3a9d75b8"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "ce309841ea7975029b4a909ba32ad00e"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "8232edea31a9e79df7ea621862667557"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "c9ffb9e7ef4cc9ee78aa0ebc3d2c441e"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "80b1536b34f131f88e97ab87228743e5"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "6181f3384ca0f3a7beebe059360ac698"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "5b2a48631c955bc4b28856fec9486c4a"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "41aaf6ea1fad32a1b6aeab77cc6b2af8"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "fe4a683da23f456d670327b8e3e7c6ea"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "5b2a25c9dc8a471f6ac37127b2d5f811"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "d8bfecd6312aef4111163c46155c42d0"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "e566200490c661232db92569b121fa39"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "c257c0f9b34bffe812400b5766656ad4"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "979011a2c24c0ced0dd806fbec93ff48"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "8c2fb3a785755b7e15b6e827da8071d6"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "79aa7a2abe59e917d48ecc7d34ffd562"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "1fc5d9d661a2ed9a7f63989dc0e79563"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "4ea87e08b187a50680e59dba5a010f87"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "891a98deb9fb879baad119e99b961862"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "96daa19439c15cb5af0d2ade2405dc2a"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "1e506b31cd81b7f797cd0d6ac32c2e09"
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
    "url": "assets/js/app.db9cf3c4.js",
    "revision": "3483b0fd4ac813b62af81d53c4cc1e55"
  },
  {
    "url": "assets/js/vendors~notification.19830208.js",
    "revision": "b9dc7478161584aa966b84e5a0eb725d"
  },
  {
    "url": "i18n/index.html",
    "revision": "766a9c7d10f6917b6572b64cee20b288"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "4f894aeda3b75631315ae01ba9278cd7"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "d30ac0ee48f2e9fad12d38092bd2d03f"
  },
  {
    "url": "tutorial/index.html",
    "revision": "e2931c796d97e952a50d557ebb9199c1"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "8b354145a691d29eb2b9dae1dcceebd3"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "1d10c0f623b2769f45db6d2339093bad"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "68f4ab75ab021a8902e021631a56370b"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "8030ae33b3711475d8b2302cf714957c"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "c9d6dfbb159333cb5ee01f4adcc9d836"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "b26c2c8bb084b843a76d7cc7ab50837d"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "376de9d2f3e68be0bcfb1a3fc6a9dab6"
  },
  {
    "url": "zh/api/index.html",
    "revision": "378534f099ca9eeb24f1f20d75031781"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "7a2dfae2bedae30fad68f00989cbe238"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "1860099cdd6cbb405c29499b63650c68"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "b1f745631b60a2ada5fc7316e3913ec0"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "aa7e773b42f40cc07474abc30b212a2e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "ed7c5ddbaf41014783304e468c8906f9"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "2135511c07d66528493f5d26379b711d"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "ae0cc078edab1f5d4869bf2a96a21445"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "50f7635477f33154491f1e1f7b2b2850"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "ab090b9633bb5f9ed4aa2464bbd4806f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "24764f539b93b06366cead333c0d7ef1"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "faa93d687b4fdec87389926a6f5162b7"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "ee90eb81484a3cc27d89fa003226ac49"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "f42b18187d9714db1c463fe43f42c426"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "0bfa0774b829f392757a3ccacfbc5038"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "d73f3877b6342b9853007182d2141a20"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "99f235f55e5bb8a0cd29ae86dae2d276"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "287db16e331b192ff8366698984c267b"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "7f341d5ebea040718d43aaca732095a7"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "3413112fe066d04c9a5845b5db7d1de5"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "dd1efca65a271995a02d8a16e5f74fa4"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "a52021dfb8705f42f07ff0cabbd689d8"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "8ea88cfd4c45d901bd872573da20d162"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "425ab2ff8176f26cbccfc4e6f7edb74b"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "e623e54016c7b922915f2e5b681f70b7"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "8e457f3529fb52e420784485f5f2270d"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "2a32c0754413a7ffd5241c999ba9c9d3"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "dd2fdd237bf408ae51dfdb06105dae56"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "b2417acdf6f684ee7aec98b8a102f9c2"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "db2820673944d3cffe5e85cac7d3ff7f"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "4e2d03a21306d673be8193ba7997148f"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "1756f4a2b6f89a43e10758a391e56310"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "e960889f3c3bcb36ae6334bace426fb2"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "a52bfe9b23d45394265c7f2e553f0c34"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "481659eaf51bbcc38226843f16782d1e"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "1c0426af0df18e72dcf7877a89a4ebb2"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "088adf205760176a925d17b355c07d19"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "a2e9a151afb5c479f8ea06fcd9c205a6"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "b06c898a64eba000e8c7076f7a01f2e1"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "8eb42afa304dcb304edc5f47031ff80c"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "719d901b18927d5dff09b06958c5ad0e"
  },
  {
    "url": "zh/index.html",
    "revision": "b8b8d9dd9976d18294a8b05dbb74a0fa"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "d5d2be2c5379f58b6a18478a794c6f99"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "8090a40ef2133fcc771a151988ff2337"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "9aae32a90cfb53d9df423a2da10f4833"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "a0cc641f0ce523c9ab94a36d2450aaf0"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "072896d8f54ce24dc5e51e13cd92d018"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "7a7ea8753d788bbb476f2606847d4c32"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "490b7414503de36ab34d77ae279d738f"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "d6c1525d926bb9ce253826a8b982b3b2"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "fd90f122a6c7f423cc4644272cc424eb"
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
