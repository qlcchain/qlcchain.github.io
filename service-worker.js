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
    "revision": "16ea1c9f3b2ae047136784a6b5577c73"
  },
  {
    "url": "api/index.html",
    "revision": "3318ffed146da267ef8fade9e791b100"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "83475eef32920a8c08ab9fea8f6f9b87"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "c53e1b3fdf329ba5fd7ecb3d315c2784"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "2fb51180859c441c19917f2024738676"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "7d20b59047c99574a886e2b8f0cb1d44"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "f0e9521661adbc7a9ff04f199a2b12ba"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "4fcb7a05a4bb42ca1d9319ebf54f3cb0"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "36a20d0d7942c319877125c9b8ed6fa8"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "8d51b9d27689ecb98bb4ecb8e91ea47b"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "27af7d5d5200084ee13867fe642daec0"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "0519bfaeb3882aecaaada3e8832fd13a"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "021f304ac5ba5097286b14f3441dad77"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "880bee1ae52c259915fde687c0f6d2ab"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "cd32b90c18da645c801f4232b1fac13c"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "5b906fbe9d7a15d262f422591af39ef9"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "e05697aae5f4ac2bffb7e624c2f2030f"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "164aec9336091160975a8db3effe1dbf"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "c1350e9d63e2ae98c6be0b80b36aad2b"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "a83851a4736401e15d671cdcde36d96b"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "a4802dd668ca0c5c750d937f7ff196f1"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "8f0cf7b24077c95a789a8312374a5236"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "2958e4a60aadfbbc8e3dfbc6f7504f77"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "13f6142d770ab24e5a1e03e74f0b967a"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "f3ee8a1ec45957a26786535fe391c2ee"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "3038e6af5df236a0b6b59d566ef66c6d"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "2fd74f584f4283ce631c41dcaf87cf76"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "ffe4b7bd9973a2212d607c125c6970b9"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "fd1ad0d3444fa82fc22df38e2c837513"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "9a1870edddda1c43f934fa18c72e6b14"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "9308897b669a0b28f880284f9254dcb7"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "2505b4eba8cbf472af0d9934f60f6b7e"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "e21d2e9aa79f58aa639557ad46466762"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "3dd805ded087d7da60571fd9fe853521"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "c7189005e6fdad66163f44a692f00ba4"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "24139a6c40bdaa866584ddd45a861131"
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
    "url": "assets/js/10.e845bcfe.js",
    "revision": "85c7a789e03d88e10718e862e7340c08"
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
    "url": "assets/js/18.4a8af8bc.js",
    "revision": "87e3a1d6f49e4e3adc56d9c17ec19bfd"
  },
  {
    "url": "assets/js/19.2bcb3abd.js",
    "revision": "6fb0c99a75483ba42920e522128c637e"
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
    "url": "assets/js/28.1fd083dc.js",
    "revision": "5c94c1f84d261ad12b3530cefb379a72"
  },
  {
    "url": "assets/js/29.47d2184b.js",
    "revision": "b2aa20112bdeb5c8682a91b80ef28ed7"
  },
  {
    "url": "assets/js/3.cd2c46f1.js",
    "revision": "3b08ac8e42a5b82a1ddfbfbfa6f8b59e"
  },
  {
    "url": "assets/js/30.0a51f530.js",
    "revision": "4b1169e9e83c9ddd421cd673e52d09e7"
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
    "url": "assets/js/34.0138e10b.js",
    "revision": "536a3707cbddff923c299379003b0f17"
  },
  {
    "url": "assets/js/35.ff44d0bf.js",
    "revision": "150f4311be0ef63883672f5b89165571"
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
    "url": "assets/js/52.da7fb19b.js",
    "revision": "c5e16561525b2763eb0c5a4c5f5d5ae7"
  },
  {
    "url": "assets/js/53.63ff3fcd.js",
    "revision": "356a7ce9cb4c941ed9db9995fa17a409"
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
    "url": "assets/js/57.9c3c75ad.js",
    "revision": "05f32bf429fdef2d310bf3133e7ea91a"
  },
  {
    "url": "assets/js/58.92aba5e5.js",
    "revision": "4d975fe46821dd940e5a52c1ddd87cb7"
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
    "url": "assets/js/61.261af1a7.js",
    "revision": "93e9f1a14f061599f2dde22cfb9d7928"
  },
  {
    "url": "assets/js/62.dfce5b64.js",
    "revision": "a6d17a9f64228ed0c289bd32ed51922d"
  },
  {
    "url": "assets/js/63.42e902cd.js",
    "revision": "24b7ef43cb501c754c3330e5cdd17389"
  },
  {
    "url": "assets/js/64.2ac88c95.js",
    "revision": "ff5ace0fe6aff36726e2a1468e30259b"
  },
  {
    "url": "assets/js/65.61b20f57.js",
    "revision": "201111c4c92cb64265e15782611f54a9"
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
    "url": "assets/js/7.f39d0277.js",
    "revision": "dcdd739a1b2fc4264a4123a0981123bc"
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
    "url": "assets/js/76.feb91249.js",
    "revision": "1efa4eecccdf66a9e65291e17080c0fe"
  },
  {
    "url": "assets/js/77.81224d84.js",
    "revision": "a80b8e618465c0a2aa5172767852a8b8"
  },
  {
    "url": "assets/js/78.5d4434b2.js",
    "revision": "b82f102074a10beeb34632e65b8b398b"
  },
  {
    "url": "assets/js/79.56159c36.js",
    "revision": "8572c36fb866138596c33f6d3cc1ab22"
  },
  {
    "url": "assets/js/8.d01fce1a.js",
    "revision": "c43d018a922b80ce1bbc6c3f9f53865e"
  },
  {
    "url": "assets/js/80.84fdcf87.js",
    "revision": "170c58d953f4534e348a226ed74ada33"
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
    "url": "assets/js/9.8800e7b6.js",
    "revision": "c9c30ed1382c6c3426081e93997f33f9"
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
    "url": "assets/js/app.5207ac9c.js",
    "revision": "0f0bcdfba279ffbe805b4cb843dff1cd"
  },
  {
    "url": "assets/js/vendors~notification.281d1534.js",
    "revision": "f5001273ee61423fb0df7537229bdfad"
  },
  {
    "url": "i18n/index.html",
    "revision": "78d98d777adfa3054f3267d8ec2f64b9"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "e6aa7359d434e29e05d7cda613417c1c"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "c3b214c329612d0d1448271092aaf380"
  },
  {
    "url": "tutorial/index.html",
    "revision": "1e996666e827376b77d16af9630c42d6"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "56893cfad978310a05b814e8b5d81b4c"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "f75ed5b7a0ccbc43a100627804876a39"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "b60a24226b95c18e3d329de8cac1a470"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "ec58754176bb548f3d9b46567c2af944"
  },
  {
    "url": "zh/api/index.html",
    "revision": "1fab30a91a005e91bdcde1bcfd5dd71a"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "bfc24d0476ae28d84c2ba8799da4a838"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "6a9a479018f6f6af2d45b41d3a2d79c2"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "4c5fac847fef8fe3f0a8e322cb122a3e"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "719ace152fda56f9bec20aae0c414d3e"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "831443c4ac9b3e3112e2028c210c33ce"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "e484f5af91aef36d8722c328f7753c95"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "51db73182696e4782582a595e41b5c2e"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "af166d874c8c8acee7edaadb500ba7c7"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "ccec6973d891ea60a8b56e6f7709be2c"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "467b82f045d0fea9f23ec75d58ee45e2"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "46c981d7a780e7036bf3bcef5e4a32a8"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "b4d2bd0738a8fb0f25707f33912ab934"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "986fff084cb3f177f13c9ccac9c6a507"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "5597f61515f50fb705c2bef55aef880b"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "5739dfd6b29f01dbbfdd1dc10bd174d9"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "6ba1dbae78ca38a5874103ff48ae7d92"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "c06c3c3b24339d8c2d9aa2f0c7feaa5e"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "a5ea0051cfab72600d82348328098a35"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "ed7ddd620ed1540860ec1bd659a2512d"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "88513876e9582b32570516f6c006b9da"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "76a1cf741e2744fa5cfe7b67a480f2db"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "9c770d113384d030dc4ab78fb4ddc3ba"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "c4ffb319e067f20e0524021f275f134d"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "3ec4b1d0e426000220cbd3f6c7c75a1d"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "c71a7eca47894c6b1e9ae3d0cb90f89a"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "32cdef8ca2aeb5d6e932056aa7b636e2"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "095ae6b31d2f6728ad0621cbbb0d997e"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "1c5ad95f7829aaa6d835fcb8fba5f8bc"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "2d9de26834f1029fbced646898ba0e12"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "9f1293c0fd6ab9de4b5e31ba81482b31"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "850f3237b93b113071b625cd83cb5b06"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "c638455f10ab8b308f9dafeaf62db532"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "070be35acab5479db00419713b96fae4"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "f1976bbbc5f7f671e38bb77da3a2f3e3"
  },
  {
    "url": "zh/index.html",
    "revision": "a6a49cf9e4e9257b90175d63b24b3baa"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "d8c93c8e0d7312d9507f934e40f66dce"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "7ae6ac6879baf5b9fe08571ab8952f4a"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "8334e01fb03e827ba5142bab760ce1a6"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "f1bb6b779e060a393ad03878a209fb5b"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "0bceb8ce17284321de78f97f1b052a5d"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "846b588622c2fbedaeeafc2834688bfe"
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
