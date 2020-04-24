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
    "revision": "f51ca784718b79e878d5f9dee0812887"
  },
  {
    "url": "api/index.html",
    "revision": "f55e177bd6f7fbf70aa9c0fb4ae7cf57"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "8219c65a7ecfff805f4dd701c9d8e883"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "7ea33fe7042e2c45973620bbdee3e8d6"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "aaa5858249a59fc538d73d8216f0597e"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "bb5ff1af5d19448ae217e873456b9f95"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "250275711ab36e625f2269aacf5bc3b1"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "47770ec581bea38f881ab6a00346e688"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "7580a555d68ae7325dde513459508b65"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "c4b00beadc8840278a3eaed433d69f50"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "17f6ebe988dea05ea2022647aa2ac590"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "65b192c1dcfb39ad012cb5c214b139d6"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "bf0a92069e61aa1af42d66d33565fa50"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "5a06450519b294aa5cd7003678fa478f"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "e5d32169a5a20136420f477fd2ee8712"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "1b5a21169c346cbcb6961b333d794f00"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "807e322509a996b45eead431f21eb197"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "3861782bb8187e8c4882277ed60d5b7c"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "62705fc3a5babb3b34a83919a83688b3"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "28a612470f10cce91468a0ddc25ce20c"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "3dc4bd59531e2dd0c14941f04c89f4ba"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "d5e804abac42d0cd66015cbbfe0bd020"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "532b69f9a1304307d2329f8636e4108f"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "53e49076e97bb225d2c4d23ed9fef322"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "eb527da38ad0ca6939cfe41b03907a68"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "e49e706ea917ac5fc7084044fa5cb7f8"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "2411aa6513cc92e9923ae80c13b753a2"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "c5d81b7692caae14a9ef26942dae73ba"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "c49c50a954a875895f819bd84a5b4889"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "1f8f1b404d0134e38f8352382a68990b"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "76a1bd6c22f72b22bd8c5627534b6458"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "025529ec4a169213a9821ec196423933"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "5c6cd711b7e4ce05e423564c27576740"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "ae1fc8c2c82ca837d600c64c745cfa21"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "8eca76b2f0675f2e1ce04a8c66422dfa"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "5c9ccc436020878b92bd38800c5b7cf8"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "fd4aed255941caa6ee6984d77987e1bf"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "78140f2fe9ffdc0657c9c652682e930c"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "9c03b44c33b286fc76dc5b47424afe43"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "e0a29827a7cc26621ebf55b3f28443ba"
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
    "url": "assets/js/32.85633821.js",
    "revision": "13f60d3a239976761970a0bd044e8c95"
  },
  {
    "url": "assets/js/33.a1fbbf1d.js",
    "revision": "e61c8dd47213ea40c27e874c0a1fe8ae"
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
    "url": "assets/js/40.885db3d4.js",
    "revision": "050c5823eac4cbba0a860db862a71178"
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
    "url": "assets/js/89.44f045e2.js",
    "revision": "c8e36ca801808bb860a55e7834121540"
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
    "url": "assets/js/app.3f2fac31.js",
    "revision": "f7189356513c2b6b497b5215f555f897"
  },
  {
    "url": "assets/js/vendors~notification.8c91ffd4.js",
    "revision": "d003821becedc54da7b54019e25fee46"
  },
  {
    "url": "i18n/index.html",
    "revision": "acb3acf5870d548f596875bf23189e16"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "6892900c695a53a1dd14d845dff81366"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "c6e9627157c386d805bac84adbc6b0a4"
  },
  {
    "url": "tutorial/index.html",
    "revision": "70eb4e0cacc93ebf58208ad7a978545a"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "e231d47bda06e3da08dc85343ae7d629"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "95de2c323b4682c8df60ebcdf7297e37"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "b4ed8be025ee0a755352afb0e024477c"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "cbdef82bd495ffa804f09a66a4860cc5"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "56a380fa3318aa87d7477a75152e8852"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "bd4f785ae1fdd42361d9db27cefd290a"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "2f11067ef4d4c8f8900e801e8b3505e5"
  },
  {
    "url": "zh/api/index.html",
    "revision": "5d4df11421b606db205c569ac7526737"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "1de40137d049a75470ea02d8598b6b3b"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "d6d982550eed68f2e5cbf2a1132f2aec"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "597051b14f1e84fb93a23c965c387f16"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "a8d0d53fc36a57c0b323c3f5bbf54901"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "9d39ef49dbcbfaab048fd7211f67b775"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "cfa7aa79d11bbf2c230ddfe2919164e5"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "d4fbd494fc2f34ae7c0e235ec63e8308"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "dd133789d9f490b926fe28737c8bbc93"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "e1895a9ab66b289659de14c2c18ed901"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "e40022e0b1a52f1f2a54210271255070"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "bebaec923f14c902c0ed0f9b880f7968"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "05ac06a9e054c35facda37915e22a077"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "9f21fef7c8f6b105d8d8a99110ba4eb0"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "b92f3dcfa4e406f634aece13bb5314ef"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "0111c414c4ba62d817de5d68ed7dd758"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "96abdc9321997bbf8d69f80596116049"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "f52b6e1af300c6151b4853db516956ae"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "25a9e3cf5b902583127bf55b1d805d31"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "51a73b1b49e6dfa60bb303c38e4746ec"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "742605f73fafeaf8fa63c6a47c7ca5f1"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "916ce4c502b641a48fda887651b489c4"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "458af0660a465d3c492df227f6d7e34a"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "d8a66f47a505142430155158796b8360"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "3be01d658a185b5fa45645216e2229f2"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "f21a58b15e6e645fd728c722884ae7b8"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "98df1017bd244194cda9527d9ee34dd1"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "301729ad3364c75a2a02e36a36e20bfc"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "188fcf10fc6175f8c1a9d29d5b7b1087"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "c29ad6c0eb05b6dbe34e65fef1d2d049"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "9945f410755b2987b54658dd5e24512d"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "46266a0fd31144ab826c1cb0284c1e90"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "1a67fde145a6cbf86357a7ba2a944995"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "ac62df9ce6a86996ecbb1a87927f744f"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "442cb35d576afadb2226effc0c0a21f0"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "80d322fbb08cd091772d855faab75d7d"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "6b6b3970281f41da01b1a1d2247fc7d6"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "14682b79fba1f45a4ec8ece353e04413"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "ed8b61e5f776d32b7b574b726c05ee86"
  },
  {
    "url": "zh/index.html",
    "revision": "a8a9018d894f28d36af52e69e54c1654"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "65c821f92245f4d99713b92d4174b653"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "b5656b9dec7912e7b7bfadb756799621"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "74dbf2492fe8bf7da2ff2d844b0b0820"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "6c6e3d677970cb394ff18bd7e08db1bc"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "5b16a1d141c4fad70328a819d92aad52"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "680747354a66372c80c585f9e3116572"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "455b29c5221d86a86520df3ff4271884"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "204567fb880f8a6039d3a060a6d26c55"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "9bf61a8544964670793e2c00cc81324b"
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
