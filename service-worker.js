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
    "revision": "db3c786219e6533338871c6286e05dc9"
  },
  {
    "url": "api/index.html",
    "revision": "6afc8a8761c16c5a9573aef6fe785051"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "0362e77bd71602f16b508837f11f8c3e"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "431f7b7338b190012d79218f90026f9b"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "37faac6fb9fce14c73ff28c38a611e51"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "34f293def4964447271c57e5a55ba66f"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "780595e6ea95f0a915b10a562d40c662"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "7467728be60f7a6cd8a50a402fa3469c"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "77d1ecfd68ae9124825fddba345e5ce0"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "1ebaf7d7681986633317efc09efa0316"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "e0c9c5772e5ef9bf566b27d7848ae819"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "655bab5493321feab7a3291e6545f4dc"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "9b0544a8afda11c86136d6a9b9bbf44c"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "57e4bac5aec44d995196df8098caa74b"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "312b9f0743895db3384394b08747bd9c"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "9e5806e613c2c23e72569b0d830a3d2f"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "e016c10497c861fabf3fa82805e9ac72"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "03c3742bcd8c195de3bbcbbb0a62ea85"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "49af5489100017131c4737d2e8f999d4"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "b906646041932ccee8a6f1444959d5e1"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "5c194534ab864e80d46cab42dbfd1ccd"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "a3c82a2b2bf1e19b8596a68472ea9c7f"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "09f9cbf72f48bc1196d1fdc1699d058f"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "e12377ef42c1c7fe16caf18c612cbefd"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "d70f9488d12947459a39ee7c4ef607fd"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "f95d825bfee2e1272626fda31f596432"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "44815b20f4ebbdfdbcc958686c97f774"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "fabfeb6f5f0f31df7b4fff917258ad22"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "2848dda5338d3fd0e6c7a69bc9e9ddd8"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "fb6606fd6736963bf779dbdc5930fed0"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "07c6811d8a04039fa25df10c8187c4d3"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "852fa69a45d84c68803b45e217164aa6"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "827a3d9113873189c2400a0054ce4bba"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "b81e176dea31b44bb7cc2bff4a7a994a"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "812190492295076f209eb1f094c35759"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "c48eeaf6c3439729fee4b9b8299a34f2"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "e52bd0be49bb4ae9752990976207e606"
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
    "url": "assets/js/10.9c8502f6.js",
    "revision": "d3d15d7535c7c1dc93ce7a576992a0e8"
  },
  {
    "url": "assets/js/11.a35c5ce5.js",
    "revision": "cde2d028f3b659dc0ef4d3a24eb53ad1"
  },
  {
    "url": "assets/js/12.74793dbb.js",
    "revision": "9b83228cf1e9a4add81507fc80263cc5"
  },
  {
    "url": "assets/js/13.22488dab.js",
    "revision": "d8b1c130390087fba886f9f111559284"
  },
  {
    "url": "assets/js/14.f8f87fe8.js",
    "revision": "d65c6c6c1074b317efc6a437c9bb6f1c"
  },
  {
    "url": "assets/js/15.2613f7f2.js",
    "revision": "81c10bc1292f09da1fd739e1d6b3aa5e"
  },
  {
    "url": "assets/js/16.33a81ea4.js",
    "revision": "91941d75889f2005f4c1b29e15400afa"
  },
  {
    "url": "assets/js/17.bee6790f.js",
    "revision": "f1ebe549c2050a5fca962adb16781be1"
  },
  {
    "url": "assets/js/18.b60de3ac.js",
    "revision": "05886f124c746580acb4622e9f1d7c2c"
  },
  {
    "url": "assets/js/19.faa0fb82.js",
    "revision": "d831b3ea53c7a76571788ab606fad0e3"
  },
  {
    "url": "assets/js/20.7bf7ec37.js",
    "revision": "20427c816a82a04ba7f47baac05f58d5"
  },
  {
    "url": "assets/js/21.f595b3d4.js",
    "revision": "1b5f0b162555c58e9757c60cd0f900d4"
  },
  {
    "url": "assets/js/22.307d31d4.js",
    "revision": "a365bf8d0db5c169317d0b9518423786"
  },
  {
    "url": "assets/js/23.510e6955.js",
    "revision": "963c3b48702fd1f308ac2b4cc6a5e511"
  },
  {
    "url": "assets/js/24.2bd593f6.js",
    "revision": "7a3ff9a71b9bde0ebb0d8d6c4eb5a35a"
  },
  {
    "url": "assets/js/25.68b7c519.js",
    "revision": "9af39e0ebbbdead0b5e0620647812a54"
  },
  {
    "url": "assets/js/26.f4940251.js",
    "revision": "714fe639f9f365772fa2ad6319714ece"
  },
  {
    "url": "assets/js/27.3a306f7e.js",
    "revision": "5d467ef24d2873d1f05015729dc2aa2b"
  },
  {
    "url": "assets/js/28.72c14eef.js",
    "revision": "e50be412f29e3a37f99dfbf268266bbc"
  },
  {
    "url": "assets/js/29.dba96b45.js",
    "revision": "21c7c646e9cc996ecf1d50e3088b4552"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "5b74fa33b0c6c00f486a7b54464d482d"
  },
  {
    "url": "assets/js/30.acd38bc5.js",
    "revision": "124746279524e101ab4618ee62f7854a"
  },
  {
    "url": "assets/js/31.52279e2b.js",
    "revision": "10ff2b79669968b3344b215206b6fae7"
  },
  {
    "url": "assets/js/32.62ceb6dd.js",
    "revision": "726f2aa299bea07d4bf375f69c64b770"
  },
  {
    "url": "assets/js/33.90466412.js",
    "revision": "7ee5ef859357bb88a4979156c043649c"
  },
  {
    "url": "assets/js/34.1d65b552.js",
    "revision": "baf3f7a6b0150916d9ec632b2b43a33f"
  },
  {
    "url": "assets/js/35.46231de3.js",
    "revision": "81ce7b98f2516b0f854e91b23496feaf"
  },
  {
    "url": "assets/js/36.c1fb70f7.js",
    "revision": "3aad800e259bfe92d5c1844e00e309a9"
  },
  {
    "url": "assets/js/37.7f28cbeb.js",
    "revision": "20414b971327726932fbb8d5dd1a817e"
  },
  {
    "url": "assets/js/38.d1a5f42c.js",
    "revision": "7dfcb9b435fafb44df463743dce4894e"
  },
  {
    "url": "assets/js/39.e69daefd.js",
    "revision": "3e2d7971443e29dda05545ab8cc819e7"
  },
  {
    "url": "assets/js/4.4ac4e7a7.js",
    "revision": "e8a86572743e99ba91a7b6f8497e22ff"
  },
  {
    "url": "assets/js/40.54474c5a.js",
    "revision": "023e748876155bc7eb14f251d3397230"
  },
  {
    "url": "assets/js/41.7f494e17.js",
    "revision": "af2c448501632bf3177a5ea74309c98a"
  },
  {
    "url": "assets/js/42.6648f50e.js",
    "revision": "cc63470a02ac52db6ba760acda5298af"
  },
  {
    "url": "assets/js/43.a6f8a3c9.js",
    "revision": "275c1355058ac42cc0ba54738dfdbeee"
  },
  {
    "url": "assets/js/44.e5924cc0.js",
    "revision": "da82c4b365ae6437773748d7f5448187"
  },
  {
    "url": "assets/js/45.501d29c6.js",
    "revision": "43bddaff78332d18dbe0123184926b86"
  },
  {
    "url": "assets/js/46.e76be635.js",
    "revision": "aa8af1a4172240bf7fc89694a3f131f8"
  },
  {
    "url": "assets/js/47.ef0ec37c.js",
    "revision": "7f56877e2714b49e0ed4e88ce17d9a00"
  },
  {
    "url": "assets/js/48.0f9c1111.js",
    "revision": "eea2b348b2dd31b44b48083a94bbbb63"
  },
  {
    "url": "assets/js/49.ca54adb9.js",
    "revision": "e89bc4d95a4687fd0b5ce0fa0ebcf310"
  },
  {
    "url": "assets/js/5.12260f95.js",
    "revision": "f03e4cc5a5f293045c938807c898596a"
  },
  {
    "url": "assets/js/50.0b8c2dbd.js",
    "revision": "de82c00278dbf0e2701668b913963872"
  },
  {
    "url": "assets/js/51.1f0f53c5.js",
    "revision": "b388d718676b25fd4c2f21be4a03a0cb"
  },
  {
    "url": "assets/js/52.54c6a338.js",
    "revision": "6fc96b32f4d16ed7cc960fee88fbe29c"
  },
  {
    "url": "assets/js/53.a055d34d.js",
    "revision": "71e63342f029c10539caf964f5e3e0ce"
  },
  {
    "url": "assets/js/54.80a541b9.js",
    "revision": "e7d54ece7faecb014e46a4ce774627fb"
  },
  {
    "url": "assets/js/55.4eb9f203.js",
    "revision": "86a8aa08c54c32939e929e31baa0fea0"
  },
  {
    "url": "assets/js/56.ae37cd70.js",
    "revision": "e18bc1fe03410146bd4a946b3f8ea6e0"
  },
  {
    "url": "assets/js/57.9427f22d.js",
    "revision": "e26c7bcfe08fd174af995ade721dc022"
  },
  {
    "url": "assets/js/58.3455212f.js",
    "revision": "0ed3d99c0b57703f87233d7267b67d1a"
  },
  {
    "url": "assets/js/59.8f77e007.js",
    "revision": "eeb44c33bc566cc49fb37a1f8ecf64ce"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.9b61d081.js",
    "revision": "8af4b22a7b72d83eae2a92ca5c0e4fe1"
  },
  {
    "url": "assets/js/61.a7a6a7a4.js",
    "revision": "291a0515c65ba9438021a400f9d6e5d6"
  },
  {
    "url": "assets/js/62.6fceaee3.js",
    "revision": "c7523f02dde6f149076173abf56c750a"
  },
  {
    "url": "assets/js/63.93ed5500.js",
    "revision": "614569d9ebd834552baf45056c4c2e86"
  },
  {
    "url": "assets/js/64.8a307b6b.js",
    "revision": "4d0e0283b0d7513ef999be332534563a"
  },
  {
    "url": "assets/js/65.c9d61cb5.js",
    "revision": "4e700137ec9ab070aabe2ca815dc700e"
  },
  {
    "url": "assets/js/66.60d43e00.js",
    "revision": "2af499b8914d6e57215dad3cb0f1e675"
  },
  {
    "url": "assets/js/67.81013fd9.js",
    "revision": "03d473f27a59bedbeaede8f61fd75dcc"
  },
  {
    "url": "assets/js/68.99b4360c.js",
    "revision": "15c879c66ffc9fcaf150f1d9d56f1f53"
  },
  {
    "url": "assets/js/69.f57c441f.js",
    "revision": "2f114a546990a6e1da909316083aac1a"
  },
  {
    "url": "assets/js/7.e2f1b9d3.js",
    "revision": "aacf13d6f89de897395aa5d8949616c4"
  },
  {
    "url": "assets/js/70.08bcad4b.js",
    "revision": "32d846ef0c5416409055915c9f9f8c45"
  },
  {
    "url": "assets/js/71.85203d21.js",
    "revision": "e0231798c8db4785610940eb35e9f082"
  },
  {
    "url": "assets/js/72.2e47628b.js",
    "revision": "ddefd61b65c56d5654acdcec48e9489d"
  },
  {
    "url": "assets/js/73.da0dee5c.js",
    "revision": "ceeddc00d52466ca01deaba566b1eb67"
  },
  {
    "url": "assets/js/74.12817c96.js",
    "revision": "999b9bfd4b1c923bfc8e1636f8114f72"
  },
  {
    "url": "assets/js/75.97164bc1.js",
    "revision": "7deccd6969c0b1b8ef11ffa6eee6a289"
  },
  {
    "url": "assets/js/76.07383cb3.js",
    "revision": "569e32c63d37d54486b7f9836b89309b"
  },
  {
    "url": "assets/js/77.db04c4d7.js",
    "revision": "66f61997c96f3e75f7ba010c4e6f2325"
  },
  {
    "url": "assets/js/78.aa07dec5.js",
    "revision": "973d29a45c5ac317942185a7aa7fa18f"
  },
  {
    "url": "assets/js/79.d89a040c.js",
    "revision": "b161c45129f33013b951943f6dfe3da4"
  },
  {
    "url": "assets/js/8.fcd48e20.js",
    "revision": "b4ea4ac0e0b125b3c2be6506bc1258d7"
  },
  {
    "url": "assets/js/80.1c00d516.js",
    "revision": "ebb410892a1cde691ba235aa9a2cf669"
  },
  {
    "url": "assets/js/81.7ccb6837.js",
    "revision": "b3d1c36256fec4aec47274cdc4657838"
  },
  {
    "url": "assets/js/82.9dd7cfc6.js",
    "revision": "44979145c89c822d3002860e74f6f0b5"
  },
  {
    "url": "assets/js/83.9bd3bd36.js",
    "revision": "af0e48c328549db78be7782f19930626"
  },
  {
    "url": "assets/js/84.70d136a9.js",
    "revision": "9e6129c6d7e8a474f47ec92fcfd70659"
  },
  {
    "url": "assets/js/85.9a6b14e4.js",
    "revision": "ba8f7525d2ece578ef15a69751c1f788"
  },
  {
    "url": "assets/js/86.e011595a.js",
    "revision": "fb33d53227fae6880f93b80712525806"
  },
  {
    "url": "assets/js/87.cba48680.js",
    "revision": "59467bfb624619db01b26ee1d10dd68f"
  },
  {
    "url": "assets/js/88.4f584969.js",
    "revision": "36f1f21e342f50beed86b398b9cc0154"
  },
  {
    "url": "assets/js/89.200ea842.js",
    "revision": "387c7f20a233cea32d368e57cdb148db"
  },
  {
    "url": "assets/js/9.3547240e.js",
    "revision": "b20be2fa53a377a7ca73ff1f97d8a4e4"
  },
  {
    "url": "assets/js/90.f6b0c3e7.js",
    "revision": "9dee90dbc1ccd9b4d4e40cc762357df6"
  },
  {
    "url": "assets/js/91.671a72b7.js",
    "revision": "7d5c727154947518df3fa8981c706661"
  },
  {
    "url": "assets/js/92.3d999b5c.js",
    "revision": "83aa7e91c966e66313ccb71ac3b6e1e8"
  },
  {
    "url": "assets/js/93.5e7dc0db.js",
    "revision": "a9e5494935433ce02c350cf264bf2c6d"
  },
  {
    "url": "assets/js/94.6b1fa429.js",
    "revision": "05db17b1425683816884bd871dccce86"
  },
  {
    "url": "assets/js/app.4016ccf2.js",
    "revision": "a3e5934ebfb0412cba02c2792f89d8f0"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "8befd81c2c3c727c877f5eabd1ad08ba"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "b6df966887826a56a67b1f8a370efc5b"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "bec6f4c87105c7aec644e0956a928aa9"
  },
  {
    "url": "tutorial/index.html",
    "revision": "37957c2cd3ad94c6f51c79688bae2495"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "1f5d68bf152fd926c1a4c1558a3f06a4"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "caf3b26e73676a33f0e459e24615e043"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "483e8c21f6695a9fbebbd9a4e43cd4ed"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "edf1d370a0edd7d033eb5273c88520bb"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "cba13d8ce66c3807bd795df432dc02e8"
  },
  {
    "url": "zh/api/index.html",
    "revision": "a70b0f2ba7ff968ffecdf43ec6fdd45f"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "730d5b911b33f067c952db320114aa9e"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "9d7c4480411fff91c00f764ff3124cf1"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "d44a7a3105b0b82c12d17eb24dc7748c"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "51cdbc983b8467dc919bf64deb12bddc"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "fca04a7d6c282be53687d6cce35e45d3"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "7f62c14187ed4df4c9a1dcd0f71562d9"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "0cbb01e9f2bf0527de96d4d5aba3a3f3"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "e9c99ec90ad482c4395a3dc8adf9081f"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "f904b62b615919d3fe7410222c138885"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "95ba89896532c6f9f278751d9ca1e68f"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "045c1e5098e9fe6e74cddcda060193b1"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "5906dbdb1815c0a078d2065fbbec1e07"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "3e439d753a9fa8909781cb73a1685eae"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "3b5cec77472002f220bb0579ef7f06b8"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "b1c6678d3d6f2f9976ea97cba6eeefd9"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "d2fc1efcff9fed6849d680b1ec0dc3e4"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "3d6bcd8833e385f8d8a6c1f351837157"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "942bd80cf27a89ee28e59b1d8592c51d"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "369635f86b804a93ae7c5d4cdaacea16"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "afda63823b397b19ae8e3ed034b89ad5"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "050e915ba9e4fd741ec4f28923f911b0"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "e7b8aac3db2b28c19b5f96828b94e2b5"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "e947ab6b58155f52302b1a94814392d5"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "4b0be04a657bb6b6bfa9fafc4bbe5f36"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "1264391c03fbcadbd9705f08128e2a79"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "f824daa739bb72487362f2a9da43f654"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "e7c93e843359ec645b4fe123e0ecd8b3"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "db3ac0b235aa82302d4ddd95d6332bff"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "1ac79d4be3fd04d60bb1220b5ce79bca"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "49e5be4aa62be1b7cad2728cc517735e"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "ca4cdaca63191559370192aa9ce67b0a"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "35c78e6130fe0cf0fa2870de3d2f4cd3"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "f2f3fdb0611cf107c4647a4261f6e19e"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "99a7e72f092fa28d62ef0d5b93a69580"
  },
  {
    "url": "zh/index.html",
    "revision": "ed1c67b0a94fe4fbc4e30e24176d8626"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "51644fae6e95fd521424c0cc26f13e80"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "31b1828de4d73a33e12b5e5bc3d49d27"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "16019e0017ee4b753a2a352cc835af02"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "2d4a55da9de6f7e6c2a251421d281637"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "ec2038f5087b6868953d787096d2d52f"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "d76d2debd7e8f7d5b01766c0a3c7a646"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "6a87edc06b96d4947f5f5cd9e84db8db"
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
