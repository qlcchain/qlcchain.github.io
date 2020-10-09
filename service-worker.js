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
    "revision": "283412e8e83ad1cbaf755a66929fcb8d"
  },
  {
    "url": "api/index.html",
    "revision": "c2c379be02339d75d239c4fcc5f1beca"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "4fb8fd0bae7a0a22db4da9e6f60f231d"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "030f1279eb0f5c7b62985b9aa147d550"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "e41617277887d53b1a040a3a29454272"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "30b5b6a530c921c3e750919bd642c074"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "b45f538149e0a3c344d4d2b97105393d"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "eb9ecf237cd0d9c3975499cae19fb568"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "b6c492ae324763404f2b58e4418770ad"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "1103490becc65e2f8cbee8aebf28a757"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "07aa9f5278150dbd29e46eaeaf93c6a6"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "a7c8344609039e8dff355bc0d521950b"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "b3d60d9fb82bd9a57052d9512e978259"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "7efd5fe7c1b666a7baa7cea722972176"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "806e5a82bdc68fd8fb2172e644f52783"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "8deaa00b2f3c29aa4ae8ea532c49e109"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "1ad13b835379156fb87865f9670b087f"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "fcb082428c41d51835d293fac9feb9b3"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "01615296239b84a178d0aa2ef4afda3d"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "1cceceab01d7d192bcfbe00ffbf09695"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "5a2d4cf3ce19dd8f73339c8ba0f9a8f6"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "d7747b6b3fd53812717b6a004702cbf9"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "21829862f1378f0dc9cf2280eb52e21f"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "45f69054fb9111232ca5357adc5f7cf3"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "0cd81fc84d95b2fa808faa32707b7d65"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "c57dcbb7beb132347291a5fea153adca"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "6d7daaa2368e38cda7a7c160dde33dea"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "8428752f2b87e54e0961e9f4fe924e86"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "32363533189fd0fd98e619db2e2f53e9"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "bd5f9b8808ab4f9ccc0ac635c3f28a2e"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "2ced58de7efede75901597518e10fae4"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "9e00f63c240a98a42b03d5aace1df175"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "dd7bf8a1be4c4d0fcad5e2fe92532ce2"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "4b47b7c257eaa1dc2f068c0c64846f3b"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "36647e4db31bb78d646f2db7f6db7fa6"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "2504168ae6c14d562de05cafd36f9e22"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "4fdf838579c5bf8491a3ad42256674f3"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "02e4df189446d755f3495c8b9ec113d2"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "0c2b8e4948d12304064fc84f22f6977a"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "3fa8192d87b6a514261ec1973052317b"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "3b7a40a4eaf7ab98e63c3d2e89bc74d2"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "578c2d406afa29b95659b8385a81ce79"
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
    "url": "assets/js/app.a699a7a8.js",
    "revision": "540d0e7ba0191bcc02be134b796b52f8"
  },
  {
    "url": "assets/js/vendors~notification.19830208.js",
    "revision": "b9dc7478161584aa966b84e5a0eb725d"
  },
  {
    "url": "i18n/index.html",
    "revision": "e6ce6cdadfeba2026df56491b76e343b"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "6cc17022aeec924af3b5fa72bab72111"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "1980abfe0fd929222f0ad3332816c707"
  },
  {
    "url": "tutorial/index.html",
    "revision": "1d9011f5686bb74ced004021e57e97e8"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "21ac31f604c8e687de1e9319d711d396"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "546dc24a4638264bbc5ea2895d8b71ca"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "97d0ed89184a7d5e4bfaff6b7664b8b5"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "9559874165093977288a47b8b6d9d28c"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "8171dc74458283f63d4afb615e242c32"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "b8fc64d40aec95590ace5f0e87d0ed7c"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "1e09a267bf92c4400f864fdaef5b9965"
  },
  {
    "url": "zh/api/index.html",
    "revision": "e533c93f946b35ef52b4720df7ea7bc0"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "e3a6961f15fe75bb6d7c7948618b155d"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "72dd670b9fbf26a7117a754155f13a47"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "d0a150d1aaad9555b5acb81ee1e36c10"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "1c5b69a9626a1cf00a448895816d0fc3"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "3fecafa1734874a4254e584f1b4ffa28"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "3ea4a6ed7a51b16744a5b78bb9acf1fe"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "79c00cec3007d6342194e83401094ea4"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "c0712271bf98c02467cac832e9a1d97d"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "cb031c15fb7e3a1aead316fd72975201"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "6c05c506865dcd3762af53308140aa12"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "6aa0d34c94e67339e003e4541c7837c7"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "77393145e3879e0e44f3d6bbd9151f30"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "47cd8d96ff7bb317d9a6dadb948fdbc1"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "6a284c9f33f69ab09d359677cb06ed32"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "c661f360473ce7e1e268e41cbe9b0045"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "6df6d37024c25fd30d08409550264c34"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "ab23f34c2b92c0a025da7d1183c68a61"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "3cc73801d447625aafcf5c68cd953ef3"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "d3d88a3182092f373cf825bdd927038f"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "cd599e0a7f82b924540132ab1653a7f9"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "2fadfef8030cc4f35e0dd76eadde041c"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "28a4dd847247fc267d7ee96bb523e9f6"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "ace779a0b1d2c1039a7ad4e224217105"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "adad106d870786b314f79805101b6574"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "83353dade3315c469a91bf852c6c2083"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "b3f6566ab0e8a86a1eec89ff806fa4fb"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "53cb9b999a89d4709227ae1e3ecc11e4"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "802be0bc719448176de74b0581b0eb1e"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "aad076f065f053701f7ed998e30909f9"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "3902f62530c7a7bcdfe543e64d4775e5"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "d1583c6cc6543ef6c17c023bb177abcf"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "7cf02dc0f9d1617bb89eae21daa6354c"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "1bbbd18960756175df2451ca240833c9"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "c6e1fcb9241bdcf5c08b02d02695df72"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "9f6893e01820cac793bbb40b8ea3f080"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "cd776329eabc4d3368c533b144db8897"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "60acd11e5339d0aa9b8d07a66b06d032"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "247778edce67d07b25cd0b1988696942"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "b55c3db3664830fa259841fe2601b298"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "e378801f04a16e14dbdbffcabae43675"
  },
  {
    "url": "zh/index.html",
    "revision": "3b2bdc7595b28dd211d3ecc7bc5da663"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "efa76db2826e92b2a4af98da8c30ca16"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "c2e85961a026dbb4189b7ffcebbbadf7"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "6657f0d0fbed9e7da02ab0558ddc310e"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "0384e4c2fdcc955f21674cde3c534e0d"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "9ca7c72121a4ab2440b4c76effb2e194"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "db0eaa046242b4efbb2494317201387e"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "0d9035039752ed41e92490a33799f27b"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "904c03e65dfbcaae9ef2939e8784212d"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "bc5f56e8dac6c1723b7b2c39a29bb317"
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
