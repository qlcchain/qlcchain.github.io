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
    "revision": "ee36b629e8dc4c6ba191f3b172513d47"
  },
  {
    "url": "api/index.html",
    "revision": "6eba93789f3b849f3cdf21745140a5fb"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "0ab8daab99f718ef4a2873fb40ac771d"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "221839b61ba868484f217e27e824cc19"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "8f3981252f5a478ce3c7904bdbe92ee4"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "86660bc281a402a4542b3a3b5e02bd28"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "885734d78c0664073aabd6d74d5244aa"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "e8d61330db4635f8a4b6c2642182538b"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "fd8c1b3ab75bcb083e4972f8d558bb34"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "c7e3e824bcad1e8c93df6e11b8768ca1"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "a6a8980c29ee7e21cf25df262e269ab9"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "ab6bd6120cf8493c5e22101011082b4d"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "cad825e578be34d89276ce70986ee433"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "a60073d20d68a3c71bfac7d9d709e6ce"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "cba51e828ef110797dcc17f980044b58"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "e795d1071191151b1b3ac589e8e40cc9"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "3f5a1c9bd80c488c59affb0569d3cb67"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "b6fc4a2edb0fd79d4b065f5b656cf984"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "e19954dbea0f2d04a3217bf5bddbf1e5"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "82c396d3fad3650735755c1b2a994ed7"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "546aac94509e6a61a9f1d3ebab03c0bf"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "2561818037cc3704427b6707cd25066d"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "1b3e62416651e51e42dc33b113c0c89c"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "512c40b13c403558bd43c6eeab882d89"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "ec1a45780597ba6783c0a03521add7d3"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "1cbf4f9f9311b62b7e6b7fb8ebc5adad"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "31331700017132f8a488bfab85dbb500"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "6ce2889c5757870adc874f377560dfcb"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "4303ed032787465d21ec7cfdae35c6be"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "95ca07c4f07c555eebd18b880effb983"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "aad71c1ad18df796d4ab22de813979ef"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "43955e46993d5c3ec3d87f7a3a6f9b57"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "b575aae6f3a5a18bb467ff16816e2127"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "23ebed013ed6da8cb27200d7f00d0e56"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "03056e87290d03d1667732964daf99b0"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "7ceab52832ab818bba4b31ef2e3793a2"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "febb342cc74e3030d73cca4d6b2fc538"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "d5a36efe4cf8151bd69ea5901ec8b09a"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "c3f31044cb697b0079dee2fef351cedf"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "3bf20739c43322ecc326ad68e809a30b"
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
    "url": "assets/js/32.4773f6a0.js",
    "revision": "aeeb25a7f29ac5b90ae704b50e11557b"
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
    "url": "assets/js/36.281234dd.js",
    "revision": "e376ac454e25d6be4b9fe2fe307c22eb"
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
    "url": "assets/js/82.bc5839e6.js",
    "revision": "eb4793d98e53a327245806550a44bee9"
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
    "url": "assets/js/85.47f5e549.js",
    "revision": "bef080c893a4cc4baa57582daf3a78d8"
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
    "url": "assets/js/app.4c477872.js",
    "revision": "d13935cb134172cdcaa378601e584d9a"
  },
  {
    "url": "assets/js/vendors~notification.8c91ffd4.js",
    "revision": "d003821becedc54da7b54019e25fee46"
  },
  {
    "url": "i18n/index.html",
    "revision": "283c2bbd1886d5842eb3c84dc7b94f6a"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "7312d3d5f57fc01f925aa808f49ca648"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "e15d08bdddc6ef7135b2bd3ceabc5c05"
  },
  {
    "url": "tutorial/index.html",
    "revision": "c68e2e8db8086f7787f77c8c65e8a2a1"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "66ae7a4f03d0b8b90c7d64850966d315"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "d8712cea340306321bd7b0dd6166ce93"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "2588f533c50d367c680d5a3db2f9c8d3"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "82b0d164d8a9070aede32d9bd98b7f3b"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "75d1fd5ce49df099da4c9db02bed2f81"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "75bfa870a4c10c465d08b86992361213"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "dc047c39fc33facb910c26ab1bc26bf8"
  },
  {
    "url": "zh/api/index.html",
    "revision": "602c35e1a392fbe7a6323fb5a79f3e96"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "24817a0c9b5da4ce2d052ea474925b42"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "506fbac42a430b49e9d418a7523a0928"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "259ff33c94ddd8ad3ffde635ad2ad7e9"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "270c0fb3bdb9bf1f1108aa6faf03607d"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "09f2dc2cd9bff9f4912e6001e5ff97d4"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "103ed0d2707c545b6dab8fb0f9f478ce"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "2e915dfc39567a767cc21e87aec58ea8"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "2d2504290212d1f4fd30e5b5b15589f5"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "efac26bfa7f4aef160489534d3dad8f4"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "64c1a21784cda45813d4ab93dd3f6946"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "e4f7367db3a5d75d64684ba07f69cc37"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "ccfc340724609c117b0c969ba4932aab"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "5d0d4cd16c001bc51f9042816b870c53"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "5b4a658771f129282b1bc357a63ef5c5"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "ef59e7e03626a82b4b080a0502a732e1"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "a61bf230f9b5927b529fd2224756af61"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "ad840bcdfa0a95f338de71e7424073e7"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "d4f96dbf67dff90f7cdd14112e45ad64"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "0157f923e4a2f09037ab719d5e41ceef"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "5f58b07d180da8529c8d7233ca3e409c"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "dce636a450807898fa3c7161621c0af9"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "f1b2c2ce25438f788dcd521052b350a5"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "d54e0452b9d94540bc04769116ad667e"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "7249f9c720cc4f329fb30861fc804cfc"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "19662b908e6dc8d46af10f47b2ab4533"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "6455438b142e5929c29a3506d0ed9122"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "28468d23e9b4c202e9dabbedc53ddc8a"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "a0a0c467bac0df6fd294cab17d8f4f4c"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "f540e5f112f47362c83aaa06f8d81925"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "ba645222a091859cd9ba1af24a92ccb1"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "b86a977fd7007dbeef7251ef12692901"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "f10152682ca355889a23e226a2869e52"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "67a1b08b1a43e83e7f33e39a94fa862c"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "0d6f3e70839f7a26eb87b9c2dfd23bd2"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "015a80c63d193e1b08f5f6bb051d12d3"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "ae7b9c1ca9be98d233915b58b1616515"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "4ea1a94ae4e6c345c63758b42ba5c8ab"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "9156b5368de5a4e85a2b02b87f197265"
  },
  {
    "url": "zh/index.html",
    "revision": "8f1438359f05389766e60077fe3634af"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "ad8e3b401b82d598c4f1325a2b5b975b"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "9fa3f5b0be37a3d71fa6e7409307bdc2"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "bae80abb049b5870cf8513ae1d250b45"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "c9b680d7a09dea114295be53848e034a"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "59a51c1f701cd707345591505f6c427e"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "6a171d32f89df2a4d1a295ebde130bcd"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "c7702b1f3768652886682b662b1af015"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "b3fd1700dc47ac4e8f6e7b4a16b17747"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "271bc149d1effff8348a89a9bcab0281"
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
