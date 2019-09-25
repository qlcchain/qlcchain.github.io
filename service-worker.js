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
    "revision": "377f2cd4199df66d229eec7f0e110fc5"
  },
  {
    "url": "api/index.html",
    "revision": "aa34573c19877e3172456c65f1f00f5d"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "5dc75271ba1e5306c2e2a41c73dbaec4"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "3a86e3363bf873551de06a0c5a338f96"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "188085879a71021e2f5305d3c5237aea"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "b3992553f56e6000aaf23cf3ea0500b8"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "c722277ec877f7fcc013404449de0bd9"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "8cc6eeba38e9f8a3b44b4f49a87b46d6"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "9bbe3ceae5318d3d2857b6d5c411ab37"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "8397be8dbb4e7706ac0f9824100ad6eb"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "d5510eb9ac14bb32ea07d6b2dd5d689f"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "f54520be26ad4283d4ace520e1bcf96a"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "a26c1979a62e12d605323bb38dba6bb3"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "3c14fd110f18a71a185c197962606300"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "9d9eb19a014319a18ed6a14121158ebe"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "a8daeb07ed6eab584ddc9f11c2ca1023"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "5588ecf3484fec6007d49338e24193bb"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "4382569fa86a9cf605d2f5bfdb5bf893"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "9039444c6961916fee5cb592968b98aa"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "00a50c420c3cd1052e7af3c6ebbc3b63"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "ec27653b1b2221786daeefa25c76154f"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "c9d69f37f3425c096c79673ef782ff0b"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "4dc85e12cca2891cf752f04d40c5d7d6"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "5da5f722d0a29ffd2240bd9cd036854e"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "605604f2b262719da001b8cd91bfd789"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "46d193770d994a1d5377028fc9bdc0fe"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "9adc30ea9ad1bf8de696df379acf1d5e"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "ed61a3b9a219a3c885892a0ae507265f"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "6cd55396f270a1bc92d1a5e9877bf359"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "17b0c0f3167957ffb70fec2ebc4ccb43"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "7d23d18dac25d7e0e6019274863d86e8"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "2836f667c0a5a2ba20b9d6d1adcbbfd4"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "da8392e934886b521f77b981482b079a"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "2860c923e280e1ac5873f13b606f55c3"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "4d21f8127cded9f50cace0cfbd9733f5"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "b9f4bef999e352dffee78db4138d9ffd"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "2faa9c9d892c37835bda4ab4541b0fa6"
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
    "url": "assets/js/34.f394031e.js",
    "revision": "6b42a69609e20c5b8a1b9c546ee93c24"
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
    "url": "assets/js/46.2597071a.js",
    "revision": "e74c1651a3d2136d82597247de3a81fc"
  },
  {
    "url": "assets/js/47.b8c79c26.js",
    "revision": "99148da79aa0cc960e89254d728c8eff"
  },
  {
    "url": "assets/js/48.d35d5ab1.js",
    "revision": "ba5740f8989feafecb0a180f8544f48d"
  },
  {
    "url": "assets/js/49.59a9d195.js",
    "revision": "52c36eee2b6b7dce595f79c53fe6057a"
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
    "url": "assets/js/53.7f0dfca6.js",
    "revision": "074e5696d0187d23df45002ddd2bb6ae"
  },
  {
    "url": "assets/js/54.56964037.js",
    "revision": "5ba3c773cc6b0206f47941b17a5c6671"
  },
  {
    "url": "assets/js/55.ca9f244a.js",
    "revision": "d39003a79fef55e33394efc96c08a917"
  },
  {
    "url": "assets/js/56.f791fb83.js",
    "revision": "c15cedf4b1b0f6fcdf10acdb49f0c71f"
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
    "url": "assets/js/66.4534042a.js",
    "revision": "9192d8bf2e167500550bded1e046166e"
  },
  {
    "url": "assets/js/67.5116eeed.js",
    "revision": "5ee800cacb834c44546b9f69c7fb7eb4"
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
    "url": "assets/js/86.c0ae8ed1.js",
    "revision": "2bd000b0e457134a186c5f5fa881579c"
  },
  {
    "url": "assets/js/87.abcb7e2a.js",
    "revision": "ecca7dca4b99bd09c7e473786ca4813e"
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
    "url": "assets/js/app.7e444385.js",
    "revision": "51b8d70b697a81ec2d483b207dc51e3e"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "13b1356531698d66f0ac413c2ba453a9"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "9ae8e233cfb338393e4bf2763065c241"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "e7d99776e1271ac0ff2d87d197213499"
  },
  {
    "url": "tutorial/index.html",
    "revision": "7d9de56312abcdbce773e38b39ebe6ba"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "25761ba8b6bdfc7b5b1cf4cef55e8259"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "0bda0401a47033b7de5bf89756a3576f"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "41139fa2b47e197f2f44164b0aadb72e"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "895e59120f7edd6c3a6008bea3487559"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "5b67da7a173c8e69464d1a1955d96cff"
  },
  {
    "url": "zh/api/index.html",
    "revision": "b4e3cc430668e16e56a94fff688ac3b9"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "1bb611a9aaa92880ad5b1720fb36b16b"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "85ae7ccce66f8d589a167c405ea69e5c"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "a5d81bd51de3479aef681a1013199c23"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "c70d25dc14f257d2d2ce7b87c938b06f"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "681c5a19656f8e20ab1c5cfa576f5d58"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "0e7772ce4bc8db06d98e6ca9cad2c6cd"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "aaf76abdda37096a6c8dac75dc5c7b9f"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "e00c90ff42d1623db656ca36d36e7c3b"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "f936041c8fba7ebd11bed999307f999f"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "d57d8094bd104e32330223a68a8953c4"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "4397f45b4dfdef7add7bd645b88ec132"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "f7841a894e600bf1fd2ecebff2b1c999"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "b6436486404c855aa8f7aebeab61cb62"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "d0dca391324437c804ba4534e5016921"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "363a0820a162b4c5977329bc194b70a6"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "b2e132977d1ef05d766926efab46cd50"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "12e216da8d3d4449d687ca5a3ceec340"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "0f718753848c3a26dc051a6a4a80e664"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "265f28bb8709f69fe621860d0fcd3359"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "e4bc3a4bd8cee5eb8ff60995d57f3562"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "b9a593ce97229523997b4a370daacb78"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "4d69b0ca13e570641a9a34c472be70d7"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "60866264ebc675a1c0a4d9130b0de5bb"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "ccb04d5ff4fa2e771f313ad9f69238ff"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "11e9ab66127de72422610708c749761a"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "e83648eff501c4a592c50a1200b2d05f"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "dea9042dbdc29c1fb55ae0e263d9d502"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "9e927db37f1f56543f68d9a19e1a2d1e"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "16758baa46e7ecbdfbcd7174113fdc45"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "01f22c4b43924df5e26c3a48d178b678"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "18f947dbf0285bbb8bfde8f41efc7afb"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "cd997f0da2f1dd8a64c56d54dd763794"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "82a6c9596a980e89f83c9405ee1417ee"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "f6c575163d5d83025bc5eff1fc6e8599"
  },
  {
    "url": "zh/index.html",
    "revision": "e3fb37218a4a88d43850e6ff1e50e8ca"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "13fd2c312225de3e7395a4e9d555c1a8"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "947b1fee6ee4588050bc08b129061d93"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "78db32b81612e1622028835c8d75559f"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "f5f5db8d3f1f18e19c010b8e6e2133ef"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "a8c4a4eddb09bbe3250d15c2c15de002"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "b8cb13a68ba12ad6cc24b164f58d5bbe"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "65d722b32b6161182f2f795ead715e11"
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
