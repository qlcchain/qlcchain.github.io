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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4d77b7e8be3be277288225298e930396"
  },
  {
    "url": "api/index.html",
    "revision": "7dc2263f0a43f3582ddf4a34bc324b5f"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "659ac862c81559ec99d99b19944795a8"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "c0ddc9024d99372b48dc94e2c0c8b6c6"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "38542e392c1dabe1dcea466db18255b7"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "13caf96cfff9841c5eb95c15cbfabc78"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "a296eb78237c0367050ee9c1d234ee18"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "7c52e019141f977de338692f18426cab"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "4533d7bf63f491a5af219c7c7bf7cd12"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "aaab1224811d2971fd6dcb73d7bc14a3"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "f5066810b70ceedb8b8937b956b54112"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "fefb94c992dd145013e03ff0b23f5249"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "bcac716c26a6a2be30b0f4ebfbc7ecd2"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "9299c10eddd3a65ff2e07af8ca446f2d"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "13c71bc0d724f84250bfb3fff9faf884"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "28be16255637fb6fde2bd8b7f77ef299"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "c94f8b751538a1959e9650677c89fb5e"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "0874bcef6a1c139fc056677bbe21b19c"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "02794cb59fae05d023c4b0192bc02815"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "d9e72a2bd85d1c87e0e3d53c0765490e"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "a5b394c629cd509960b8a0f3a0bb64a3"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "a2f658ec30caa63e101e2e48f65a8cb0"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "2e433fdb988ac96990c34f5b15e1e75f"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "8e6a27e8dfe2c8bd7d0b6cb4b1cd5753"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "88ffb665fbd3eecf79675821555fb223"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "cb78cd966db6fe20c5c06d97b961e61a"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "7b11ab1590013436e92a60282692ee5e"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "89c3335aa12f452de88770acb3e12bc6"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "d7e400a57787e9ac22c63280f5ba70bb"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "fbe1ded213a20595d1c6345cd6020d80"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "0daaf1e27206ef382c87c1cafefecc1a"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "993b9d346e4067a389228a931fdf1beb"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "0a28cf2b17a234869c240d088c0c02d4"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "b1bc30023288bbd887d91305dfeca900"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "06a7b08e8f3521a5e88b6b8c928ba41c"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "e0ce081109bb95b5ce9b3932acff5754"
  },
  {
    "url": "assets/css/0.styles.f525e787.css",
    "revision": "1bb8115b1821ceffa27d9b0540ca764c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aa0dd973.js",
    "revision": "553be44e2a5589a027c7cb1f79af266f"
  },
  {
    "url": "assets/js/11.3cbfd61e.js",
    "revision": "0a5a70f954a166d33e5be4c32d87ef92"
  },
  {
    "url": "assets/js/12.f0b9266f.js",
    "revision": "3e296a94b027d4f21b907080d7c7a0ba"
  },
  {
    "url": "assets/js/13.48ba3261.js",
    "revision": "60916c513081e862aa4581406d7a48c3"
  },
  {
    "url": "assets/js/14.8d0f9e6d.js",
    "revision": "cd512ed79b8020a75e8bc4988b0ae61f"
  },
  {
    "url": "assets/js/15.873c4511.js",
    "revision": "c0e27a0a2546c307b0bf31eaddc5a78a"
  },
  {
    "url": "assets/js/16.1f1fcb0f.js",
    "revision": "805185475ebadaee8222b03999341a4a"
  },
  {
    "url": "assets/js/17.c4014156.js",
    "revision": "181f3faa15005d374f1ba2d5a838903c"
  },
  {
    "url": "assets/js/18.46ec290e.js",
    "revision": "5493b25747f4f24609f1636d80f1e94d"
  },
  {
    "url": "assets/js/19.fba0ee46.js",
    "revision": "50c8e478a4fabbd97a1a856254acfde8"
  },
  {
    "url": "assets/js/20.fd3ecf1c.js",
    "revision": "10e276ef3fa8ce22f5b712eb8e9330bd"
  },
  {
    "url": "assets/js/21.6d172e15.js",
    "revision": "603c9414ff28188ed81abe31406ff299"
  },
  {
    "url": "assets/js/22.1a37c891.js",
    "revision": "6c9fb36e80092e50705770605a645917"
  },
  {
    "url": "assets/js/23.807cd3f0.js",
    "revision": "45d878621c32c4138edc72723a096afd"
  },
  {
    "url": "assets/js/24.e15fd646.js",
    "revision": "9ef6652f159c58d552d0e481012f873c"
  },
  {
    "url": "assets/js/25.34883799.js",
    "revision": "53143d7a300e8351e9590a35e7458c98"
  },
  {
    "url": "assets/js/26.841b80ab.js",
    "revision": "a6e67cde7735da767139d7881e5df224"
  },
  {
    "url": "assets/js/27.f85d52f5.js",
    "revision": "e95b2d958504a66ec513f21d64bab73a"
  },
  {
    "url": "assets/js/28.4ad8ccd0.js",
    "revision": "2d55ea220b96f1a024a9ab38c667ed41"
  },
  {
    "url": "assets/js/29.41ae712f.js",
    "revision": "1db519815c3712aa47790d2e5b57227a"
  },
  {
    "url": "assets/js/3.cd2c46f1.js",
    "revision": "3b08ac8e42a5b82a1ddfbfbfa6f8b59e"
  },
  {
    "url": "assets/js/30.2ac62ff0.js",
    "revision": "b7fab5543baf3429266935a0813fd90b"
  },
  {
    "url": "assets/js/31.5f55dd38.js",
    "revision": "4782c66326e14a6b65e24ae088b94f11"
  },
  {
    "url": "assets/js/32.b880e429.js",
    "revision": "81c7183900b030048a3322d1469dbc20"
  },
  {
    "url": "assets/js/33.d84e33c1.js",
    "revision": "af56c61feee83f9f1d388ba4fccf4648"
  },
  {
    "url": "assets/js/34.c84bfc88.js",
    "revision": "6e9b0d51f5af1ac05b45b78c5d4f6544"
  },
  {
    "url": "assets/js/35.ba08d628.js",
    "revision": "bc40c5c29a42596c4ed27f8a6ab2076e"
  },
  {
    "url": "assets/js/36.914e5f3d.js",
    "revision": "e8cce7d654702c446c95d50e81b471e3"
  },
  {
    "url": "assets/js/37.113aff10.js",
    "revision": "c6dc5768400b07b6b61c9bfc96a639d9"
  },
  {
    "url": "assets/js/38.4f1d1910.js",
    "revision": "649f87456117202cd4154fc169d9fb28"
  },
  {
    "url": "assets/js/39.f9e4fb3d.js",
    "revision": "c2edae76645b968c9538d5c3c783f616"
  },
  {
    "url": "assets/js/4.51079b00.js",
    "revision": "92fb81f2c1006934d587c3e5106d2aae"
  },
  {
    "url": "assets/js/40.08e9b3b5.js",
    "revision": "e946aaa9df85f9fb47d925dcdb8277e3"
  },
  {
    "url": "assets/js/41.07241028.js",
    "revision": "c5146c65e3f42b9c2f4d5a124b6506c4"
  },
  {
    "url": "assets/js/42.486b3d12.js",
    "revision": "f8ded51b93a1aeb1aec4fd4c43c9a696"
  },
  {
    "url": "assets/js/43.cde33fb5.js",
    "revision": "5e83abbc9f9de0fc76be35270365d9e2"
  },
  {
    "url": "assets/js/44.e537ccdc.js",
    "revision": "3533ff48f3233231099594af44fe795d"
  },
  {
    "url": "assets/js/45.1b3711d7.js",
    "revision": "dbec0317a25a525551baff55faef7c1f"
  },
  {
    "url": "assets/js/46.6468543a.js",
    "revision": "8b441dd803083073df851405a25a2c8f"
  },
  {
    "url": "assets/js/47.996f0bd4.js",
    "revision": "ebe630504096f3ee2f0cf3192c2418c0"
  },
  {
    "url": "assets/js/48.392b5713.js",
    "revision": "e3b843c975dcff9a16ad343e474a1c59"
  },
  {
    "url": "assets/js/49.753b42a8.js",
    "revision": "dd513e76178f22b2fd3411e996991136"
  },
  {
    "url": "assets/js/5.16bd38b7.js",
    "revision": "875d2cfa4caa73ccafe1b71e47fd8954"
  },
  {
    "url": "assets/js/50.d95e7c11.js",
    "revision": "937ea0777c22ba131732232c3c69422c"
  },
  {
    "url": "assets/js/51.e21c50bb.js",
    "revision": "6adf49c8d6b840252fc0fb519a3dd62a"
  },
  {
    "url": "assets/js/52.e784c4fa.js",
    "revision": "07445f805b258ee1405df1bb20442121"
  },
  {
    "url": "assets/js/53.bde181fb.js",
    "revision": "71f469b4593e44d2b5551b8a9879de52"
  },
  {
    "url": "assets/js/54.24649685.js",
    "revision": "e6c3950204cca1209b4b8a938400bc5f"
  },
  {
    "url": "assets/js/55.1423d900.js",
    "revision": "4505f838271641ded6f492418ebb8452"
  },
  {
    "url": "assets/js/56.1986f2ab.js",
    "revision": "c206670f209252bd77f8e22687a61e3c"
  },
  {
    "url": "assets/js/57.a087e16d.js",
    "revision": "aa85a63f9964e6e299c01228189bd6e3"
  },
  {
    "url": "assets/js/58.94cd5f09.js",
    "revision": "5cbcebf1ecfe431b36eca0463b1fcaaf"
  },
  {
    "url": "assets/js/59.cb218f06.js",
    "revision": "04205819a54833eea256b6266cca00bc"
  },
  {
    "url": "assets/js/6.cb21aba5.js",
    "revision": "88bb6450523bca47d6b0692efe8f36c4"
  },
  {
    "url": "assets/js/60.70a28a47.js",
    "revision": "d20db7b9fb117864bed0627ddb79017b"
  },
  {
    "url": "assets/js/61.0971b8e1.js",
    "revision": "72de8d7ddd6be16f50e2e0d5cd0f7a2c"
  },
  {
    "url": "assets/js/62.b81972da.js",
    "revision": "b93d6f095cd39fc214744dc88eb8fb73"
  },
  {
    "url": "assets/js/63.42e902cd.js",
    "revision": "24b7ef43cb501c754c3330e5cdd17389"
  },
  {
    "url": "assets/js/64.0a5768ce.js",
    "revision": "3bbf8ec4befaa543b95ce6ca5042be61"
  },
  {
    "url": "assets/js/65.1d1a826b.js",
    "revision": "3e43068b94df9c621d527ab1bcb38c77"
  },
  {
    "url": "assets/js/66.33b598b6.js",
    "revision": "dce71a4848ed0e98b1fd15213b880173"
  },
  {
    "url": "assets/js/67.3e5944c2.js",
    "revision": "24d8c4de28395391f118519791f4c4b7"
  },
  {
    "url": "assets/js/68.70a9dd58.js",
    "revision": "d1e6f3c6bb1279501800d9bd8e045319"
  },
  {
    "url": "assets/js/69.91efb708.js",
    "revision": "8200ea2996943949789606b03b8eb70b"
  },
  {
    "url": "assets/js/7.7f7e0ae3.js",
    "revision": "97400e13536f60d6f387fd79ded90046"
  },
  {
    "url": "assets/js/70.365dbdfa.js",
    "revision": "a7f936d26da4c472adf5ca1cec36539e"
  },
  {
    "url": "assets/js/71.11054915.js",
    "revision": "ea093a6fa129a6f2fb63d6b304a35632"
  },
  {
    "url": "assets/js/72.91d0de25.js",
    "revision": "9657b3ad723acd6e81ff91312c220dc9"
  },
  {
    "url": "assets/js/73.0b5ed016.js",
    "revision": "ca82f595d3d5cbab8a996b663d45088b"
  },
  {
    "url": "assets/js/74.18e5c22e.js",
    "revision": "11b843595ef5a3fc0b7c2b338fa2846c"
  },
  {
    "url": "assets/js/75.c2562415.js",
    "revision": "df877cc75ebb59200f552cf042c68df0"
  },
  {
    "url": "assets/js/76.10924b8d.js",
    "revision": "884a8dc096ea897e57e2fc774b5e304e"
  },
  {
    "url": "assets/js/77.7199a153.js",
    "revision": "2087e89ed1f5184dbf4ff6d639ee0b7a"
  },
  {
    "url": "assets/js/78.5d4434b2.js",
    "revision": "b82f102074a10beeb34632e65b8b398b"
  },
  {
    "url": "assets/js/79.e5f40e76.js",
    "revision": "5fa02bfdd6f5d362affe37da4fde3095"
  },
  {
    "url": "assets/js/8.061e94be.js",
    "revision": "172ea90f4967359db6df41cd12fcc679"
  },
  {
    "url": "assets/js/80.6653ebfc.js",
    "revision": "cb448910e2765775c9d5d0e157b99b99"
  },
  {
    "url": "assets/js/81.4a2df373.js",
    "revision": "753e7701087dab90b047a403c322a371"
  },
  {
    "url": "assets/js/82.2b463201.js",
    "revision": "c58228684d37dc99dea69204079e1487"
  },
  {
    "url": "assets/js/83.84aab8fe.js",
    "revision": "5759a387a644b0d693a60ce5f3b50815"
  },
  {
    "url": "assets/js/84.f5e76788.js",
    "revision": "b629e3f468a82fe7a6fa4e96b9b7c7bf"
  },
  {
    "url": "assets/js/85.70f7e64b.js",
    "revision": "6507de04e195fc0374f09d70acda9830"
  },
  {
    "url": "assets/js/86.4576d39a.js",
    "revision": "72296abf08d0bdad991fd4e274b4cab8"
  },
  {
    "url": "assets/js/87.ee226959.js",
    "revision": "88163309aefe80082dd6a078ef9ef260"
  },
  {
    "url": "assets/js/88.91abe8e3.js",
    "revision": "c14e2e4cf1940feadd93e55cbeb79961"
  },
  {
    "url": "assets/js/89.474446eb.js",
    "revision": "8b7af634ed9d3a2598ef19e6b42d5c66"
  },
  {
    "url": "assets/js/9.4fe6c956.js",
    "revision": "ac16e7a5f8b9f78718a780d8390b708c"
  },
  {
    "url": "assets/js/90.a25c9e85.js",
    "revision": "12ad66279b4e870966a68a61526c4f75"
  },
  {
    "url": "assets/js/91.e225d499.js",
    "revision": "31559d9e93e08d339bb76a1d3cb3faa3"
  },
  {
    "url": "assets/js/app.5e5f3de6.js",
    "revision": "d08860ccd4cabcf1e3948ed822a5e549"
  },
  {
    "url": "assets/js/vendors~notification.281d1534.js",
    "revision": "f5001273ee61423fb0df7537229bdfad"
  },
  {
    "url": "i18n/index.html",
    "revision": "8cf468f163394cc3389d22599e2dd776"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "1cce7d6486857f836b502f1c554b0dbc"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "d02b6f0ebc2afa8307a2f43863f7188b"
  },
  {
    "url": "tutorial/index.html",
    "revision": "08ef269d7977a8ef14913704ecde7ef1"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "895c65f8f667600a176d786a471cf5ad"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "caf25e006fb3ab49f2fee0631fabdaaa"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "00a0f92e1fd27a1f0780450c8b5c6fef"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "e0f1d216e827918c42a07b0e79904091"
  },
  {
    "url": "zh/api/index.html",
    "revision": "38ae20d3dff2a3b7daa9f91e5db38785"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "de6bb6e3879294f295169e1e056d12ba"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "69b52e2f3a27f24b6995db9d2666cc46"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "59b411fb6f44aa3a231b028b84ef8729"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "014edcc92decfde56b3d65a92819ea14"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "dad00be0ba7acb3ab0a3c511d7a1798e"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "e44a6d0fb0576cf76c6afb15fbfc8772"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "911392903abb009473fe870c64d2366b"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "8b68842b3e1a23512ca7e88f4429ad51"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "364fa2cc18d3d120282e9749eea6a314"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "e6a8a080834747abfd53e7bf1436bf71"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "3cc3867ad3fdc7d3be91d7b624e5b21b"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "8b73de5cd33d23f259c97f8fe6fdc203"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "93a0f97524d007ab842c34633cea085f"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "84766ea0492a59ad8ad141944de79110"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "80de918ee1cf3534e455bd49b3a5db57"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "326d0b4695163dd60dc151b85d63c44d"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "843d86b5b5441d58fa8fd94e499f1c29"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "d8f541666bc1edfb6c03b7e1f5b7eeec"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "5cc26f9cd8581901f8772c7b3e95910b"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "9c8b45e9529afda8c65827c4b504bcd6"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "28fbdebc3a850aa9f40aa3eebe8172a5"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "23fb4c216fd12781e69d51462627d68b"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "cf9af4a7d5568010d49d45d63ab9e777"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "e1541e212f7d09a7cea444aaf6538fdf"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "0591dee837f0c4a4288935dffa765e16"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "44b58ee0c0aab90b0315faf57425be72"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "ef33f1623ea17eb2e70805999968a6fe"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "312aef6a090aeb3bedc06804924c319d"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "0d34b34b8ec78c6d92ee8edfb678363c"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "ca642c4de5aa33348a1861d004a6661f"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "0d3a7073c8f2f8f4f186b1ae52207abb"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "a69b3071112d83f653f51514d4896acc"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "77e5b43eb25be9c4f6ea10f81bd627b2"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "86f8a386735ec358bc424a9139cf9756"
  },
  {
    "url": "zh/index.html",
    "revision": "c02f504ee0a4103fdeebfec165ea6313"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "f7c6523f58a54fdfe1f3e175ee964e4e"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "6e4f4e7cee0221249a6ff1621199f922"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "b37f5c42995eb4a2f28ae6584d4094c6"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "94dd37e6449b0bc44914ccbc6a403f0f"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "aea2f662faccc236e12c284d3449db12"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "e9f3c24a4f4d3e91dab968b79fb58568"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
