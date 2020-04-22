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
    "revision": "3bf1de1c769e3837c2aefd02dc2f0394"
  },
  {
    "url": "api/index.html",
    "revision": "f48adcc185243aa81992efdbaeb2df6d"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "c0d3e34305b13805c7899641fd9c8b69"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "ec3907d0c0bce1c640046fae08820eb7"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "848194cbb623121c715f186ac22f6d47"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "2bdaae3b459dbcada8c1c9d52b303115"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "63cfeae5f0b1f8acae7b2139ef4e9e9d"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "5982cb27d34ececcf7515faaffe64120"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "15073ea8635d37f7bedef8919af5205e"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "dca9ec98eb5055e85f658059881c780c"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "d42ac9550961ea6dfc0bc69acde69ee6"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "1bc8a927cf2cb187491c1b66f37aff29"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "ca1815745687a8423c1cfc610022c3b8"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "6c76e5736a1e391391cce5cd75c8b0eb"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "b2f1326e62e10a5763ac487063aef472"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "f5cdc9a64eb2a3a5077436be7b567327"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "2c9d49922a09f64d4bfe62b8d308c71d"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "d4b9889a91fbc1f2756906201b1624b4"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "75333c9a3a53d6c8deb357c949000df4"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "d6b9638653b95974ca190881863a1fcf"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "80f486514d2142c362ac22b56f400934"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "bf584c1698c2b1fbfa8b519f637ed289"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "06b92c4e60d6f413a6697ec7793abec7"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "fc0f1b3c0375014307ec84cff5540f28"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "325387e96167b2c8ec864c3c9850a931"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "69b6f5a6190b3c2a279605dcdcd51bc6"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "1ab81ab0a9380cedb50895e9ba450eda"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "68491773ea6caddc9e12d2a7ed0e0020"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "afac65fddb9467af6660f68c1591cd8c"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "db4f135ce430132a91f6fba12f45f92a"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "87ce4d32cab1b6204bf6a98ea4eb54cf"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "440dbe0121d98940c5332aa56cbf9b66"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "8d78e3c4867b5d6708f6182d07571719"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "9ceae58dd9ae5cab23694e3cebf8cbbf"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "77d64516e1f3e747ba0754d74dcae9f4"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "5073d3062aa5a9a60e3c5a2e08a1eead"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "e7ce2572d5c5e3e5d57993ad903df365"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "7bba7ca4bfad95598f0b415782cc310c"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "3224f8f839c83cc232dbc98506fbc928"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "ab1b5d3bc742c9d51fa6569312d00c92"
  },
  {
    "url": "assets/css/0.styles.000e6038.css",
    "revision": "d414c745b6826a6fc0ae6f01a8f6e442"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ddc14f68.js",
    "revision": "40daadc6881044edb82ee62ce7cae808"
  },
  {
    "url": "assets/js/100.afd84344.js",
    "revision": "030d25badb4d3538f42c9292accf8ab7"
  },
  {
    "url": "assets/js/101.7bdc68a2.js",
    "revision": "b45a3991fbfa055756e46322a55db0c8"
  },
  {
    "url": "assets/js/102.70e53a1c.js",
    "revision": "c9f0551740aaf035e14f3f5796e48e70"
  },
  {
    "url": "assets/js/103.296ea8bb.js",
    "revision": "1a5561d0e81e051116a163783da1126e"
  },
  {
    "url": "assets/js/104.1b95aef3.js",
    "revision": "4fb3f3956ab5b06b7313c9b1874e284a"
  },
  {
    "url": "assets/js/105.68d4c272.js",
    "revision": "5d21d1c6ecb81f370bee4303a952fc70"
  },
  {
    "url": "assets/js/11.0b557243.js",
    "revision": "2ae2d6adbaa79115a96972df9875559d"
  },
  {
    "url": "assets/js/12.c2137e1f.js",
    "revision": "ab32f7467f0a6ec44d13e7d2a899afeb"
  },
  {
    "url": "assets/js/13.8516b82f.js",
    "revision": "69182e636a41f83c7a8f20148c2cd8fc"
  },
  {
    "url": "assets/js/14.f3656ca8.js",
    "revision": "4901596e774cc3edd61fa53e94b353aa"
  },
  {
    "url": "assets/js/15.75911e03.js",
    "revision": "8388b2cd886081cacb583f8a877633db"
  },
  {
    "url": "assets/js/16.254765c7.js",
    "revision": "87216c74df41c773ef9169908eda1bb7"
  },
  {
    "url": "assets/js/17.bfdefa6d.js",
    "revision": "8b9abea2711fb124cc6f6cdbab6d4e2e"
  },
  {
    "url": "assets/js/18.dc0b18f4.js",
    "revision": "955e32201fece38671d2bafa216b1111"
  },
  {
    "url": "assets/js/19.5464a529.js",
    "revision": "296fac0331a7e3461a3fc62c907c4e65"
  },
  {
    "url": "assets/js/20.c9681edb.js",
    "revision": "227f2652acf12b0de56ee067a36145d5"
  },
  {
    "url": "assets/js/21.39b884a5.js",
    "revision": "e8ef140865d5b766991f7322d3b2155b"
  },
  {
    "url": "assets/js/22.5df820c4.js",
    "revision": "b36e23248e4f40c8abdf7b500887d09c"
  },
  {
    "url": "assets/js/23.5cc680a1.js",
    "revision": "594eeff96be282c98a4d6c1ddc0f0361"
  },
  {
    "url": "assets/js/24.2ef3d24c.js",
    "revision": "c9dcf3093883d29fd02aa286b5cd6649"
  },
  {
    "url": "assets/js/25.c8019771.js",
    "revision": "0d37ca8d6567838079a044f577bd00e2"
  },
  {
    "url": "assets/js/26.1921af77.js",
    "revision": "af1ee7da011d954f26420cadeeac2110"
  },
  {
    "url": "assets/js/27.395fb2e6.js",
    "revision": "c969661377b970a30530186e1aa6be2a"
  },
  {
    "url": "assets/js/28.a76fed94.js",
    "revision": "7143ad3989f06e59fc0aa61b6cd2b32a"
  },
  {
    "url": "assets/js/29.baf9921a.js",
    "revision": "97f7a8ea077329ac529e7fd7175b1203"
  },
  {
    "url": "assets/js/3.c6802487.js",
    "revision": "4583792fce49b24398005bad3eccbae3"
  },
  {
    "url": "assets/js/30.c6af800b.js",
    "revision": "87c29857e69a05d2645b893750aaf865"
  },
  {
    "url": "assets/js/31.3a9949ba.js",
    "revision": "add8c93bc351a19c3355749ef54793f9"
  },
  {
    "url": "assets/js/32.af11dc3a.js",
    "revision": "4c543b3a8cc0d6b635282a24535ee2e9"
  },
  {
    "url": "assets/js/33.56f145ad.js",
    "revision": "ddf21915eb15f5188a4c8d9d496941b0"
  },
  {
    "url": "assets/js/34.d916a949.js",
    "revision": "b6dd91f1de20e915b8db1a7ba637a657"
  },
  {
    "url": "assets/js/35.e50c62f8.js",
    "revision": "a6d7a56dddfed6d3248ed00af18c72ba"
  },
  {
    "url": "assets/js/36.81d154e7.js",
    "revision": "677be9e068fa1fecac658b82cfdbc32a"
  },
  {
    "url": "assets/js/37.76feeab9.js",
    "revision": "6d5fdb337b2b7c8d85b487eb0dcd647b"
  },
  {
    "url": "assets/js/38.e7fc69c2.js",
    "revision": "bd291ecb782009db11b4f645f86eda48"
  },
  {
    "url": "assets/js/39.a526fa22.js",
    "revision": "e3afdfc4cf82d9fb0079a326f2c1f5c0"
  },
  {
    "url": "assets/js/4.73e40531.js",
    "revision": "7b41ee11b5a27e5c65bec769ba924d3f"
  },
  {
    "url": "assets/js/40.da1d4fdf.js",
    "revision": "db47c40654240e93a2ec03f9a0aa339d"
  },
  {
    "url": "assets/js/41.906979ef.js",
    "revision": "05803b32a1d39325e0b55550b6fee651"
  },
  {
    "url": "assets/js/42.15f2fe00.js",
    "revision": "30df053b32c618b3fbf2b598dd09249e"
  },
  {
    "url": "assets/js/43.a42f3346.js",
    "revision": "7d43a447942f3f18ccc7a86d8e168895"
  },
  {
    "url": "assets/js/44.ed51ba5b.js",
    "revision": "478de03579fca7bcb36c6eb25d73bac5"
  },
  {
    "url": "assets/js/45.ae9f6d9c.js",
    "revision": "9518d505afff55d7fefe5b95f9e91f93"
  },
  {
    "url": "assets/js/46.1a1ab240.js",
    "revision": "9f05498a5c3e1ed798d3851b07a2c905"
  },
  {
    "url": "assets/js/47.30d30473.js",
    "revision": "93595652824731b20ddad1333a8a8f22"
  },
  {
    "url": "assets/js/48.cbac4acf.js",
    "revision": "1eafa6dd6fc0cd8c419ca1dfc79f4720"
  },
  {
    "url": "assets/js/49.ab4ebb74.js",
    "revision": "162bda1c17f0ae591797055a3551b681"
  },
  {
    "url": "assets/js/5.14dbe920.js",
    "revision": "f6ffe6dd89af4fc2a6147cbee55c686c"
  },
  {
    "url": "assets/js/50.df4c79f3.js",
    "revision": "2bc32bfaba455c090997fb7a3d1d48c6"
  },
  {
    "url": "assets/js/51.34c77451.js",
    "revision": "6e6e379a991352871dc734e78f6036ff"
  },
  {
    "url": "assets/js/52.67f4b6ea.js",
    "revision": "6bb1ea9e3449a7ba9620a4c4ec178136"
  },
  {
    "url": "assets/js/53.8b20e221.js",
    "revision": "1aac92e9b3a6fecb07987d97faffc50d"
  },
  {
    "url": "assets/js/54.8c63f71d.js",
    "revision": "c8e1561c22df7e92e7314aa34f487ff1"
  },
  {
    "url": "assets/js/55.d6df4a65.js",
    "revision": "c713d4abb984f3ace0afc76c4ed52ee9"
  },
  {
    "url": "assets/js/56.1d85b5a9.js",
    "revision": "30aaf27bf84e68f292caea1717f52f34"
  },
  {
    "url": "assets/js/57.87767f5b.js",
    "revision": "10652d8e9320116c29857d77cad1b6b6"
  },
  {
    "url": "assets/js/58.a247cf22.js",
    "revision": "c574d38d9f4db31891fa3f0743b8415d"
  },
  {
    "url": "assets/js/59.65d22463.js",
    "revision": "57887d2cf25304fab3c270443ddd9290"
  },
  {
    "url": "assets/js/6.1bc05412.js",
    "revision": "07f55acc57410223abd085c15fee5d34"
  },
  {
    "url": "assets/js/60.b74fa696.js",
    "revision": "44230cf6f707db1ad2a0da8696c547a2"
  },
  {
    "url": "assets/js/61.46da76c3.js",
    "revision": "2bac8229a2c00e1cfa6bf20ab48c008f"
  },
  {
    "url": "assets/js/62.54e362ec.js",
    "revision": "e19a818d3c0bbf75297e32c26dd58a7c"
  },
  {
    "url": "assets/js/63.9cf5214e.js",
    "revision": "941160e8dfbe5c991d07a94052a62134"
  },
  {
    "url": "assets/js/64.d31f1211.js",
    "revision": "6175d97b9246b0991c09fef6dc4529dd"
  },
  {
    "url": "assets/js/65.7f1e601e.js",
    "revision": "820279eb5aaa0f2d982a2759cb518e61"
  },
  {
    "url": "assets/js/66.24457dc8.js",
    "revision": "c5bce4354f02c73fcb5e735640e8d555"
  },
  {
    "url": "assets/js/67.c03674b2.js",
    "revision": "3a7a96b87fc727cbfe384f834ff2c711"
  },
  {
    "url": "assets/js/68.d7915c8c.js",
    "revision": "3942f6d0611b67fa25517bffcf54ed4f"
  },
  {
    "url": "assets/js/69.88cbc911.js",
    "revision": "42f433a700cde2def1ee3133def1bff1"
  },
  {
    "url": "assets/js/7.1bfb087e.js",
    "revision": "4ed181007cd6984db353f42fd77e597d"
  },
  {
    "url": "assets/js/70.3c01a734.js",
    "revision": "7b7a1e185e463b72695f41af0c81a33f"
  },
  {
    "url": "assets/js/71.e0a821e5.js",
    "revision": "c6d61cfcb9473c90662c8bf35398b420"
  },
  {
    "url": "assets/js/72.7f37e09e.js",
    "revision": "0d70640e7d254b8e5af4408fe45c0664"
  },
  {
    "url": "assets/js/73.a75fb3bb.js",
    "revision": "42e15fe77554a5cfa3e949618b7022ed"
  },
  {
    "url": "assets/js/74.79a2697c.js",
    "revision": "1548099f1dffbb63901a8223d7c5b3ad"
  },
  {
    "url": "assets/js/75.518e7d24.js",
    "revision": "46e5a5b0cca02eff7cf0f05b46c6d930"
  },
  {
    "url": "assets/js/76.f4d02cbc.js",
    "revision": "51af7df9e59a5b82ece05d769814377a"
  },
  {
    "url": "assets/js/77.d11f8dc8.js",
    "revision": "b468a3406c4ee679416df8d0d5ed8f2e"
  },
  {
    "url": "assets/js/78.90ec7db6.js",
    "revision": "71a8d1a9a672c048b71fce9187a5adb5"
  },
  {
    "url": "assets/js/79.9e4b2a53.js",
    "revision": "fd82949173b0dda5ae5fa57043a365fa"
  },
  {
    "url": "assets/js/8.77868d7a.js",
    "revision": "23a586a2d31c334c6d932e27534a5f02"
  },
  {
    "url": "assets/js/80.335cf4cb.js",
    "revision": "322e27fcd99826571681904155eeb07a"
  },
  {
    "url": "assets/js/81.8402e232.js",
    "revision": "9b8aa990455d2cbd6a4db0acbcba4f20"
  },
  {
    "url": "assets/js/82.3b36c7e6.js",
    "revision": "32d115a8bdf36e227f9a65798beabced"
  },
  {
    "url": "assets/js/83.27826af1.js",
    "revision": "c6cfd2160752b17ae245bc9654e5bee6"
  },
  {
    "url": "assets/js/84.c7c947a0.js",
    "revision": "9c1cc8eca4f135a5fc5c7da942940ff0"
  },
  {
    "url": "assets/js/85.21af373a.js",
    "revision": "b76103f41be7966b20f2314d0d29fb63"
  },
  {
    "url": "assets/js/86.bb8273aa.js",
    "revision": "ec2b0d96536fcfdc5564cdb62e60c8bd"
  },
  {
    "url": "assets/js/87.1bbde6dd.js",
    "revision": "b124109427a2d8ca561c30b5a0663797"
  },
  {
    "url": "assets/js/88.177ac9ec.js",
    "revision": "c83d76598ac662f9c0b37e025e14b9ed"
  },
  {
    "url": "assets/js/89.05500fcb.js",
    "revision": "91318bcb123b27066f8962486051851d"
  },
  {
    "url": "assets/js/9.0ef6c7ab.js",
    "revision": "140879e8c6cdee0d2c2dd21f4841e73c"
  },
  {
    "url": "assets/js/90.6f6e6d06.js",
    "revision": "15385d49f6731a88a97d22d892797ae0"
  },
  {
    "url": "assets/js/91.ce9b6778.js",
    "revision": "1886d0f52aab8be3439cd035ed842c40"
  },
  {
    "url": "assets/js/92.e7ef4b30.js",
    "revision": "3cd76dde42c0f00c2cf200a440e7f0af"
  },
  {
    "url": "assets/js/93.24f08655.js",
    "revision": "18df9cca095ab77ff889983a23749c02"
  },
  {
    "url": "assets/js/94.da4fbd75.js",
    "revision": "24b611393f646859e3b2224216985d0c"
  },
  {
    "url": "assets/js/95.6f52efa3.js",
    "revision": "a2ab3568ce17aaccf782051581f233da"
  },
  {
    "url": "assets/js/96.48958799.js",
    "revision": "da5699ccc324641ea7a89278aa309f76"
  },
  {
    "url": "assets/js/97.e268613d.js",
    "revision": "98e23c6d10041c2c40e466dbe7a12ee4"
  },
  {
    "url": "assets/js/98.9625f31a.js",
    "revision": "9a1ce8af14786cfe12a75704acc337d3"
  },
  {
    "url": "assets/js/99.c68bc00b.js",
    "revision": "392300dfb22d44b99c6706720dce964e"
  },
  {
    "url": "assets/js/app.6e5512c3.js",
    "revision": "8dc73c06a35ee1fcf773c32cfb71e3e7"
  },
  {
    "url": "assets/js/vendors~notification.8c91ffd4.js",
    "revision": "d003821becedc54da7b54019e25fee46"
  },
  {
    "url": "i18n/index.html",
    "revision": "efb28b8d62ca607ddac0c4b3a544f109"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "74ecd992a08cc133a9b0d8e7ffa89919"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "7e1beb97394ca9c977a0e4d01701a795"
  },
  {
    "url": "tutorial/index.html",
    "revision": "f575f704df477c51a3ec7da46011eba1"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "a2eae9a3dd44e93e540a602d474ec872"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "7bafc5f9969d2349884b5289dab6b769"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "9a19b27fcd9c40cc9bf6c8667692cf08"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "bfa5e8b53acf22e7e6667854829a658c"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "9aff4f1afa895039dc1d1d6deb554c55"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "2db861685897474b463865ff55f5f677"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "c4ba08e75a581cf30213ca3b2ec0f308"
  },
  {
    "url": "zh/api/index.html",
    "revision": "fe6dccd5e3b0ef401d32017f4277be11"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "676b8757389e9f317537573390411d4b"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "3a95ef9f6178526bedcbe6e4cd9564ea"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "584d3bdc595a1e3bc35d41d0fd674d70"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "b7f56828fc393738360314cac7c5799c"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "7409e70954de81132988783aa3fcb122"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "d886328283de6a9665a369e2fb36a3f1"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "d9fbc479816eeb6af09a33254c2ded4f"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "8defa5f983137996fa4661be7f2ef50c"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "aa2cacc6fde193ec4fdca7a93e273a29"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "2c8d1eef0a650dc7f4700fea91a23b42"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "b71b70d174d9a4f65a375389dd45c721"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "d1afa8cdc76f29bc3b78a54930a647d4"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "e81e79f9e62ae781b252394eb844aff1"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "fbd4e9ca84d87115d4094e42af680012"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "7ae089d44f0e9f858da85aaa7ea587db"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "62edc7f095ebb502f8a3eb08507b2fd0"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "c82e380b82220350e5ab68095bc79348"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "75445837882a86f9887d982649e4c5bc"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "0690785804e51c041970ea0307df5bb4"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "7e008d87e0a5089221cc252efb80b9b9"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "07b53bc1cc989e70c6e330144486f3ef"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "c8504ef5764dcbf4b195e1028f451e95"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "a2ae36607c3d04aca9c719d66977d3c3"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "f883b5f3c79e467e6945f413662f1b31"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "6e414bda7789e62adfdc13099c1cbb4e"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "47bdb659ffefd006ea8d5aa0dcd944ec"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "31a57e0e4230ce22093c0983f4fdd94f"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "44513596589dfc8e101ea7866a2ab410"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "7e71fecd61ab63cc906c7ac7757f005a"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "aecead361580c04be3f57c320c332232"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "38ec7fef635dde6af25b0545e0736423"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "4543e2b20ab1a0a66ed1986c56be7097"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "2e600fd0fdcbe46fac23311dc4f63d12"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "79d049d40c902a859016c8cef76f5a47"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "b8a8934c64f4b8c9a2584f85b586d84c"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "e4dcdfe7ba518afd240eb1a27b5a988b"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "3c669721c7a535e5ac3fb98a18566b60"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "ea03095d3d8cfdcaa0017e47a99c3bc4"
  },
  {
    "url": "zh/index.html",
    "revision": "8e1a31359c5543d031875e8a034e92c5"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "647928b808266870e2fae6a7e34a3441"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "b80ebc4e4908867b8d8caee1d6941a80"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "3d8f16a6d672990b2fc037212a75a64a"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "5988872ee8f5b556864c688b056e6f03"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "06b41fe6a751771cb0d68221ef07dc4c"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "287a400bef5833799a0afc6d6810a28a"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "3081a0e56002ab301f831494a8c5b728"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "0ecc3df14bc3cdfd77afc7895fba3519"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "d3b20166b0e2f5e7a3847d914dcd3052"
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
