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
    "revision": "bb1f545584608b79b9a81415c668948a"
  },
  {
    "url": "api/index.html",
    "revision": "3ca4fd7630fd08a00a97d2598a1d956f"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "146666b0419658cf1788dd7f8e83902f"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "ca1b0b9f64b031c22932ebc38a29a3fe"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "f297a9bc364d0c468643ae8e66fc94f4"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "be6af95e37104ea732db8ee8aa578118"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "65cd3dc94a3aa17122a5eb42bcd686ee"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "95a9b835e245be72c453b07b05bbf3ed"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "ef056da6cd4dad3c2c504c02a41309f8"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "b080ee87dff56daa24007ab5dab44dc0"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "aa8d0e63244a25a0dff4e7a0259229ce"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "2a86f6c5e6f361f42dca91d56846ca13"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "f2cc3d2e1b858259f7f63c28ec81c785"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "331d7bf55dc9ab4083ffd3c22b1f37d4"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "b1c3c75292372211137046fdb362bfd9"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "dedcea0f60a317d2f0c8215b9a68900c"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "652484a1fa5fe4889e6841a21edb0e16"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "404645563cc9c26cf1d6f97cf8e82121"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "d96905d3224c60533eb4eb2340798ab4"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "0aa304384a37e486bf9e496c34b11af9"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "4e49fe1172ad73ef3ab6011d90cd8179"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "8e1cddd3429b053ea8cc4aea0235c403"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "cf5baa22a21dc03222d009725d39a2ed"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "4320a9fb0197723a62a35443c5a795d9"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "c75cf02f433eb89b5722e1457a366104"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "de0e3b446a85a17c94d66335b5683f93"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "253b785dbb8051cd2efa4ff3d3f59f65"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "aca13f2a83c8fd34e7c99e5cd4ef885a"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "cc71a3340036b7e1fb622fffe2dd74b0"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "15f2e2a48f5703163c84645af55d3312"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "47241ab4049f943bde7cabecbcd35ec8"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "a2dbb3de8da1ff4c0b4a6f418713a8b5"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "bf7b51c62dc01855258187f74aec3af2"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "beadf5267aa6d91cae34fc8c7674ec16"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "d432dacc090c4d6d8413c4a1a8c79417"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "0e34bac79d80527586824ff70cae3b27"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "55f267009335e16616c332d3cdb03349"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "50ce68ee8a010acbbd37c955e03b579b"
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
    "url": "assets/js/10.950ca5f7.js",
    "revision": "261d4527d2245ba82245033b3bb823f0"
  },
  {
    "url": "assets/js/11.06c9c2a2.js",
    "revision": "0b3529805d0ae3767949eb5299ecfbb6"
  },
  {
    "url": "assets/js/12.59643c21.js",
    "revision": "58a181bdba18825941715c8663eb0737"
  },
  {
    "url": "assets/js/13.74a48cee.js",
    "revision": "bcd4ed49d3293f618cca91dad632c398"
  },
  {
    "url": "assets/js/14.19a81824.js",
    "revision": "38810afef66cbb7f86ee12f6296c101b"
  },
  {
    "url": "assets/js/15.91cf7035.js",
    "revision": "fbc5cc09bd31f24788feaa22ef169c22"
  },
  {
    "url": "assets/js/16.ef7b65b3.js",
    "revision": "1900a2c8780dd3277780411090c5b711"
  },
  {
    "url": "assets/js/17.6ca4beae.js",
    "revision": "99d73e158fcfef4b64b6dcbdbb2c20d2"
  },
  {
    "url": "assets/js/18.0b93750a.js",
    "revision": "330fbbd7586ac504427a9a1a8b9aa749"
  },
  {
    "url": "assets/js/19.30a6b6f1.js",
    "revision": "4533cca5ef2602e3983c34a2028ebd80"
  },
  {
    "url": "assets/js/20.5d2efa58.js",
    "revision": "06bd9bd27708b313c84611ba868340da"
  },
  {
    "url": "assets/js/21.1c926e49.js",
    "revision": "ea4f709432cae356112c85ac0198555e"
  },
  {
    "url": "assets/js/22.9aa1e960.js",
    "revision": "6c9fb36e80092e50705770605a645917"
  },
  {
    "url": "assets/js/23.bbc51800.js",
    "revision": "279a879d7d3e326c0011de08a9ed181f"
  },
  {
    "url": "assets/js/24.1823d795.js",
    "revision": "f517d959a56287f3ec5147e3f8009b4c"
  },
  {
    "url": "assets/js/25.6eca92c4.js",
    "revision": "bb15f4d9c728d5188f778584087989e8"
  },
  {
    "url": "assets/js/26.eb75c754.js",
    "revision": "55b027917eff48741a2c582981e53d73"
  },
  {
    "url": "assets/js/27.356f883c.js",
    "revision": "9befea675a0f5a3fcd9f597505aeed43"
  },
  {
    "url": "assets/js/28.4a29e31d.js",
    "revision": "9c55a4097c2cd7a3c8efeee1a000782e"
  },
  {
    "url": "assets/js/29.14d75dcb.js",
    "revision": "898fe326d7e48f869cc43f03e3f64828"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "5b74fa33b0c6c00f486a7b54464d482d"
  },
  {
    "url": "assets/js/30.15448961.js",
    "revision": "db6001a4355533d6ca8b256bca550aca"
  },
  {
    "url": "assets/js/31.083a5ec1.js",
    "revision": "e369746a9016b832140477f1e3639848"
  },
  {
    "url": "assets/js/32.cf6816ff.js",
    "revision": "37653b3f4d7303d83ffbabe942b7c569"
  },
  {
    "url": "assets/js/33.66e86308.js",
    "revision": "5cc1ce434ac3a9e779f024142a0808d2"
  },
  {
    "url": "assets/js/34.3e9b4f64.js",
    "revision": "4804208c477d553500951a595ceae448"
  },
  {
    "url": "assets/js/35.e3223a4d.js",
    "revision": "1323038213924450332fdb91a0bfef4c"
  },
  {
    "url": "assets/js/36.b8f2ccfa.js",
    "revision": "f60d286750c7cdd17aa94c429dd099ac"
  },
  {
    "url": "assets/js/37.0d608c77.js",
    "revision": "b4469b23b51fa87870e466c544ce8d47"
  },
  {
    "url": "assets/js/38.333f3b10.js",
    "revision": "7a50558dd7ef535e6399c459821c7d9e"
  },
  {
    "url": "assets/js/39.87f6dcdf.js",
    "revision": "4f21bc4c1b74bbb4ba2b1252d8e45ee0"
  },
  {
    "url": "assets/js/4.4ac4e7a7.js",
    "revision": "e8a86572743e99ba91a7b6f8497e22ff"
  },
  {
    "url": "assets/js/40.e095cc0d.js",
    "revision": "bad870bd214a9a48a393601746e20362"
  },
  {
    "url": "assets/js/41.e2c86ca8.js",
    "revision": "c379e0d4df6d5c1c87178a7671d8e7b7"
  },
  {
    "url": "assets/js/42.d45a0589.js",
    "revision": "a608e3c2b376fe3f9781436f70f08b1c"
  },
  {
    "url": "assets/js/43.4d88bb72.js",
    "revision": "4af5cbb5a95fb5109615c51a0ca725c6"
  },
  {
    "url": "assets/js/44.fc3d7879.js",
    "revision": "4b448afa4dfbbe9147ef0a0bce913e61"
  },
  {
    "url": "assets/js/45.0dc3d227.js",
    "revision": "ad06e6d7fb9c3474e6d8431f7e2b6e05"
  },
  {
    "url": "assets/js/46.500e7d91.js",
    "revision": "c64cb791d72a471d938bae9d774875ca"
  },
  {
    "url": "assets/js/47.29045a42.js",
    "revision": "6c71ce8da223299a7aff216ca7bd63f7"
  },
  {
    "url": "assets/js/48.f7c2472e.js",
    "revision": "1678e266c07a79150cfd54f31a2a4e10"
  },
  {
    "url": "assets/js/49.47e53b36.js",
    "revision": "228b367eb212fc8386436fb18dafec0f"
  },
  {
    "url": "assets/js/5.83763220.js",
    "revision": "f4cad0f859831c0a9993f88f70fc5445"
  },
  {
    "url": "assets/js/50.54c0cced.js",
    "revision": "61fb82a452a700f43db8e65c027437be"
  },
  {
    "url": "assets/js/51.103bddb2.js",
    "revision": "0a46d5efde207f9bed8b9039ba4f9ad4"
  },
  {
    "url": "assets/js/52.3fefb0f7.js",
    "revision": "c781857f6bb2e20b4e9f48fdfacd8c60"
  },
  {
    "url": "assets/js/53.dded8735.js",
    "revision": "b80e042c3e1245dcfe3f9c22069d656e"
  },
  {
    "url": "assets/js/54.806309f3.js",
    "revision": "c7eaa4c822f92b122a56736652ab2f27"
  },
  {
    "url": "assets/js/55.0df5c871.js",
    "revision": "e510872a3a5e6b9060e1c8135c191738"
  },
  {
    "url": "assets/js/56.b29f13c2.js",
    "revision": "4681ac8d7c00054f1037967400a715bd"
  },
  {
    "url": "assets/js/57.acde8960.js",
    "revision": "e8ab8be2073e7074c5278e6c5294eeb7"
  },
  {
    "url": "assets/js/58.88c6a992.js",
    "revision": "4c89ba8af62147daf1cd95a1a7e88fc1"
  },
  {
    "url": "assets/js/59.d0c40deb.js",
    "revision": "d8cbe3625e7e03abf54e0b8f803bd4df"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.2fa8d565.js",
    "revision": "6fb897291b7abec0aea39875970e7ee0"
  },
  {
    "url": "assets/js/61.c77caa45.js",
    "revision": "0f9e567f5377d2c0adb2c593a9fd05cf"
  },
  {
    "url": "assets/js/62.0ef5eca8.js",
    "revision": "88c5b0bebfe06fffc2e22c7a540e91cb"
  },
  {
    "url": "assets/js/63.ebed2fd7.js",
    "revision": "21fc2db32d31b32ba31e142bbf308840"
  },
  {
    "url": "assets/js/64.851fbeb4.js",
    "revision": "88493fc5723794aa20604ecd8bd3cb64"
  },
  {
    "url": "assets/js/65.a4b51a28.js",
    "revision": "d3b3e0f72e9bf2282765a5801c111eab"
  },
  {
    "url": "assets/js/66.ee7112d3.js",
    "revision": "21ce4e4a9c0a2ed91b64684a173cc863"
  },
  {
    "url": "assets/js/67.6c18b10d.js",
    "revision": "fcc6340ad56c2dcc093bcbe0e4a0f77e"
  },
  {
    "url": "assets/js/68.e9d58889.js",
    "revision": "075b44b981f16a984ffda76d00144718"
  },
  {
    "url": "assets/js/69.85e4ec7d.js",
    "revision": "c1d3a1904317cef40fde12d4ef95bbc9"
  },
  {
    "url": "assets/js/7.e8d85a5d.js",
    "revision": "c995f72c7dc95e4b22293747c4ca18d0"
  },
  {
    "url": "assets/js/70.78585d15.js",
    "revision": "339b0fd436ff68e6b87c5b56ad147924"
  },
  {
    "url": "assets/js/71.0633124a.js",
    "revision": "95a77da5d9db4c81a1e6a89d75272c01"
  },
  {
    "url": "assets/js/72.e467771c.js",
    "revision": "3353a51028bead5160d128b9b94bfb02"
  },
  {
    "url": "assets/js/73.ff114d6d.js",
    "revision": "e7c09bee557589aecac1dc9d7d988957"
  },
  {
    "url": "assets/js/74.928ff316.js",
    "revision": "ca064fbc5b3310fd3b2f0aa690fe0831"
  },
  {
    "url": "assets/js/75.5a296376.js",
    "revision": "638dba07f62882a8e000bf4abf2e8107"
  },
  {
    "url": "assets/js/76.b855da76.js",
    "revision": "78623464964a0ce138f328ef29967582"
  },
  {
    "url": "assets/js/77.011f661e.js",
    "revision": "d3cdc75dd989eebb1aa9ccec0bd4bc95"
  },
  {
    "url": "assets/js/78.7c319eab.js",
    "revision": "acbcced3f985bb3086e9df79a45374c4"
  },
  {
    "url": "assets/js/79.ad618756.js",
    "revision": "e9bb22043585a718c8f1e72bb02ec0dd"
  },
  {
    "url": "assets/js/8.d81bcec0.js",
    "revision": "2fc0bd5f0a79b86f9575307ac00b596c"
  },
  {
    "url": "assets/js/80.34fa7288.js",
    "revision": "248d34c52e04d2e5e8aab0dc5ff7b577"
  },
  {
    "url": "assets/js/81.fb195475.js",
    "revision": "cf46f91ca0bf0f696108ef5e6ef24883"
  },
  {
    "url": "assets/js/82.05382aeb.js",
    "revision": "5a9e13a82b4639a2c0996569c11da7bd"
  },
  {
    "url": "assets/js/83.c57f923c.js",
    "revision": "798469d4238ee38e205cbf7e7fc888ae"
  },
  {
    "url": "assets/js/84.4cd42407.js",
    "revision": "81b94b769be89ceba0bd7c107d4d0445"
  },
  {
    "url": "assets/js/85.9cdaafff.js",
    "revision": "339be8a37135c0d5eea43dd6fd6871d6"
  },
  {
    "url": "assets/js/86.a070f3e2.js",
    "revision": "010912a07b8ff7dab922554f44439723"
  },
  {
    "url": "assets/js/87.9d8a1698.js",
    "revision": "07fd48bb5cf969d84b2f28ea63b7964f"
  },
  {
    "url": "assets/js/88.90b9f2c3.js",
    "revision": "0550ab96429c20a8882d1d4e86b3197f"
  },
  {
    "url": "assets/js/89.1b893ae7.js",
    "revision": "8c690ad83bfaa01fa8ae23ccf2df5bde"
  },
  {
    "url": "assets/js/9.ec999920.js",
    "revision": "fa3e1b84504b62b4a83a7cf7260cd0dc"
  },
  {
    "url": "assets/js/90.d99f2033.js",
    "revision": "5635e255f0241e3da886cb8eea69fada"
  },
  {
    "url": "assets/js/91.e2d9c21a.js",
    "revision": "c26354a289c6043bec27e6a364b8a547"
  },
  {
    "url": "assets/js/92.19059f60.js",
    "revision": "eea37d83c9de3fb6ab8435ba7480cdb9"
  },
  {
    "url": "assets/js/93.54967a98.js",
    "revision": "b43bb7b39b3f860e241cbef5a0c1f273"
  },
  {
    "url": "assets/js/94.742d0820.js",
    "revision": "7c7f6056a8410751a78d6e66f26b486a"
  },
  {
    "url": "assets/js/95.9c7731e1.js",
    "revision": "7e76a08bc04a2bfe53c8c2b3dcb549e7"
  },
  {
    "url": "assets/js/96.8247117e.js",
    "revision": "c77d7e43a8af82fb8768367442a2a4ce"
  },
  {
    "url": "assets/js/97.742aecfe.js",
    "revision": "69b5b190c0aac7147d5dda0a4006699d"
  },
  {
    "url": "assets/js/app.cd664f37.js",
    "revision": "02d68faf9263d207bc6ba19aaa46b86a"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "4172f6616627d7e16624d2cfdb5ded51"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "64bd65131aeaa4d18e4f37127ba14324"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "ea6996dc63fa3c0ef849c795b657178a"
  },
  {
    "url": "tutorial/index.html",
    "revision": "652ea7c02d4adaebf425d88c32be9cb8"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "54c3fdaed30e04fc00b783017389193e"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "0c085fd1bb4b97071ec1cb413b90be00"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "c9ecc77afb11aa78a23877cb1a578ab2"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "d368cf7847ab032d75228737aa029efb"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "112552f1438f1e33303e5199e2bd3a54"
  },
  {
    "url": "zh/api/index.html",
    "revision": "6e0e0aedcb1df51015f223767faa326e"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "2ac20bc63bcfc3b181da93a691478e73"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "d519e821335df2375b933e231f5642d4"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "7ac2bedebb9d5b85b50c4a9b21f29797"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "c16148e021bb047be94a0e751d927cf7"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "c2ee41d2d630c50348988583c22f7614"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "ff8e0a3eb9a5a7f37553b0fa32c2eebc"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "e0fe7de3fe44c6b7a55758843c9d3ee0"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "99046d2ccb927ef8fd61550e0643ac04"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "0909deb2b6fa9d668cec04c126b06325"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "6afdeabbb0bc2be5e95a4842895478b7"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "0757375a3e4087a968b4310e72752148"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "3837f5d96845a2319483810de91283f0"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "643d0ea711ab4431e56a8bdd97f36c7e"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "d001ec55d80add4b0e0a57c5b9da845c"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "c920a926cf9d7bf584f82dace120400b"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "354f1c08ad3c9721c536378bbe44c26f"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "dcdefa9161301fbcedcf446ec6f76519"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "e2eafd7b90bb704abca8953224a96608"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "672f13f95246ef3669ddf2d15cdf4c2d"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "c8ba948b656071ea41dbb2556b500ffd"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "4b8b5a20fb79c63788a45e15f706735c"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "903ae201757bcc418c8d7ba738a6e073"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "956ba3dbbf3a8997165c25c2c3fcb0ae"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "91313ed1801306c3e66e3bac221a6cb3"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "7831f339608eab8d8ec4e2586f1882f3"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "060ff6cd0d4f0f89818ae11a52ef6619"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "240d94beaca77b18862f098f89beea35"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "3a64472d4e5785cde2bfcb781c099b1f"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "7b3e8ab534add3c01e2b8bf949a693ea"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "507b99b30f107540f997ebac406fcabd"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "de6d0a18f325a9925d179a0fdfd7bbd9"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "8f827a1c0e8d679c527c10beca7b6c9e"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "98fdc4e4e600fc261568d88f8c441040"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "e978ffdfe56c1e8d66e7d8ad41cfd4c2"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "1fba8b52e226db8ce17c5f0a7f18a816"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "495f003a8b8b50dc162a5448c0516815"
  },
  {
    "url": "zh/index.html",
    "revision": "e976ddb23b24706226ff5758025d83e5"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "163fb319c3a9fc317b7721fff3d5e6be"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "f80dcebd7414e8c2540043744d1e7bae"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "24768c9594683922b93a21ae5289f1d8"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "0697beb92f8927e608a37b455231ce98"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "a0a6116853d9987634136b9d8836d551"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "be9fd042d98d5e8a3d17565db8ae4e6a"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "21b1eb117c91f73d19774abbcec6da6a"
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
