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
    "revision": "46663de39114ae51c5f6e1bd5de759be"
  },
  {
    "url": "api/index.html",
    "revision": "41e75e23d0606e979e4153b1211db6b0"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "f9506799a8bebb8ee7aee4bd490e4479"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "cdea67435b260924a7d9f6687a3bb3ac"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "4b8f425378aaf27d88ad4fe5dea01622"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "ac50c6b48abab2fb6a5c418b881f0dbd"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "7c25cdbe77f2225bd034b9cfc4377f75"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "bb418392942fea08d54a11bf5348709a"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "5ba88550b8f4bc8ab1edaabd49c0b7e2"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "abd8332bf800e4e02dcf1afd5b5ea62f"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "c3ce642bddea42d9abc95f81c7f5aab2"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "c832f655ee54d80905582f0bfc6b41b6"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "87a35fbf57dfeedbd6c17e6f9f5ba2f9"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "320ece13ec0f8a3aeab5a208d0f6026c"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "ba7daa1b2ef028f5ff64b4ff02e65e04"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "2f67070461f7dd447b3deb1f372d97b2"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "234314ef98f3bc7a8c6386753cac0160"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "a3491e0a6a50e848edb114340306b5e8"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "41e4229c3bc32e938f9606c2a3367c28"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "78a5e44d6f48a7549137543cc3771ce4"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "c86350054b02621d4c6463c215ae098c"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "06985cc62347b01ab9f75affa787d833"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "5b86789dc9447ab7fcf4f2ecf85b726d"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "6ccffe06f7f4c42abeaa68f8251c1b45"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "352bf6877a595902cd9e26af0d166cb0"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "bba7755922334d323c69a3554fab6334"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "4568ac4774162d36dfe34582d3d45084"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "b4bc70ed21a3d2453d1c795726dfdf18"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "479952fdff5461a52d83013055fc2954"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "04ed1c5823b5cefb684da7653aeb7331"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "bf611327df034d374d1d56ed56d42386"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "0fcccbc4f467440045690e59daac9e3a"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "89bcd0ca09d8314b798b5a8144741704"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "4c0e385f6eb7ab61b887574a1daaa1d9"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "37785ba6b02dc34a71873c55e6a00771"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "d94221f31c83848cc29b9805de9c55ec"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "9967a62abf977dc8bf336edca29a84a1"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "87c7cdfe1daf35b09c0c54cb1b66facd"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "19d8c71929cab8b4820323fd51e6de74"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "5181b84300d58794010fca80ae6f551a"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "d91b6d44cdd4bc28f1db684a64d15216"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "fa09055356f900130ebfd57e1b668ce3"
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
    "url": "assets/js/86.45c96ff7.js",
    "revision": "5c20e04b63bdced728a6b16a990dd66d"
  },
  {
    "url": "assets/js/87.3986b1f8.js",
    "revision": "b36ddc1361ce2f1136b39b435c9e58f9"
  },
  {
    "url": "assets/js/88.2d386708.js",
    "revision": "9ff1d85451bfdf9849d139f33dbd522e"
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
    "url": "assets/js/app.c57d1cc1.js",
    "revision": "2f01716e5ce1a08b580975a36d6abce2"
  },
  {
    "url": "assets/js/vendors~notification.19830208.js",
    "revision": "b9dc7478161584aa966b84e5a0eb725d"
  },
  {
    "url": "i18n/index.html",
    "revision": "8c49517e398d74d2d07ec6fddb917649"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "fcce13178ee9cb771f78c6ccabbb7f10"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "167907ddd7f2f42856d18582ad294c2f"
  },
  {
    "url": "tutorial/index.html",
    "revision": "6966ed00faccc01b394a54241512b9aa"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "c5801d9792e7f37015e308e8c0cd3482"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "4882e015335544d5a5ba9fd51a903c81"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "81d71af9228aa526648f45e59fa6a0af"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "5ae87d9a21c19741a1715c627b223e1c"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "bf4226d8d7940164bec19b85d37233a1"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "912e08e3076a302a3636698ad29c26da"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "0ecaa82c1aa1459934f0d91be1febab9"
  },
  {
    "url": "zh/api/index.html",
    "revision": "5bac5adc2ad37fea9c8dc684978faa9d"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "55ac2e121799addfd9c0248b9c847253"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "b4ef19d8f652e351dfcc23781bc122cf"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "5a2892787c4dd1ae56678f05f8f8a16f"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "a7e98fa3929792e041e70e57c5bdf276"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "4430f6dce9c28f2cb7178ff309fb7833"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "80a73a778da49886b0a18bdb84c01f4d"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "8a0e08d90f57498501c616e22c9a8c5b"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "6655b889d5e41c6f1476fcb7ef893a7d"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "ba4f4455e24a789fbd8b09b9d470724e"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "bc5b22e735faddcc41ab259e3b199873"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "1cb6d328982533d94b578faeb2a263e0"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "4e880742cf0d1e189c17710ddaeae89c"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "3d97080c17861273ae1c3d7a634e40fc"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "632bb1f9aa5b83c93b08934afd688f88"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "00ba91933eee1926663c4be380da1e23"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "45bf4f6bc9c895d3bde38f7fbf22d2ee"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "4801aedd03709c4864fae7cf4d8f5f00"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "4c63523e5437c6cc5de893ddb229a0be"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "50ff39b91bbc06d270249e07381d9561"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "2c6cdfdb3c425c75ea68b66a41b52d19"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "92b4c7e4c6b53dccd5d9452c2525d514"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "c8705487645e31a42bb9e9793997add1"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "b146007b6e776b7ab12726233e4b1313"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "b64052137565fa469693cc853259726f"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "2a3ccd05dbd13ff640a41cdeeee10267"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "2339836b39f226fff0538ae7d58806d8"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "b01c03215a549b58b105deb2973d1b76"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "0e281e505a0ddf118187a380769bab12"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "53675786555440366f6f6c9d3233c5a1"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "4f6e15edb5ce714234ce34c1d7f7c30f"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "4b4e519dcfcd400b4d35cc6b422026d3"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "06a35ccc8885718c089e666ec49b02ec"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "13a6d97ee24299d9be8e9a3ee7407be2"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "099f76f8948ee59c77a87577609983cc"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "cb5e5bee929765f20a7d9135f9b80460"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "378bfb6faa6560da5d6af994f48e820c"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "7c3fae355af92fd3f77f6ca25e585018"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "771fe33c646a72fe24589a21c4ba2642"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "f55f78bb0ae1c44d6cd5714693a9eaf2"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "67161ead858f46b33bd5a484a5fdb1f8"
  },
  {
    "url": "zh/index.html",
    "revision": "e09b3d89bf4c51656d01bf6f53ea4ce1"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "0a6bca16311f33bb6047c49cf65db5b2"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "c9878421b00a52b36da9c1dacaf6da03"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "78b44fc27523f677170af857cc47f4db"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "b7789677cfbde94a690d0e78ff023058"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "3e98ad78fee85866ddce63fd5098ded5"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "8206396c94bb06219e65c69b3033d483"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "cd95069cad6c7c39444e4afd6d092a7d"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "d231b2e4f1d141254c03a5d638d38f16"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "6832766f6aeee53ae92f1af79720385c"
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
