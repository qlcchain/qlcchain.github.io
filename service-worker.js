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
    "revision": "29685c1e31d900363980d8ddef9f6348"
  },
  {
    "url": "api/index.html",
    "revision": "e232f90021541ff45d3271fc016cedf2"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "964d97be7b694868700e28a5d239fdf4"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "cf42616799cef5e220d8967839770ecd"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "794842666c34245618ccd2fa4384fcc9"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "c58fbef65ce699d54aadaef70207f5d4"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "0048326f319f8cddd70444e06522bc11"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "108ca33ba7260d7d295e477bc5f70a72"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "03105cdcf0e392092df2c1fe0b78c2c9"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "3b3748cb0762b8907e08fdc96b4a6619"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "8fa7cd68983a74686965f545c39ea5a5"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "c4e1ff09276c5823fada20298f20e8cb"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "dfe2ceb0a202bb4c7c8aa7fa72e19196"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "170e9557d8183556ac0028b80cd8882b"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "57868acb38a8e344b3b51726ff32d64b"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "847585506dd5cf970f39054c86ed0e93"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "dad21a27ff82293e69e8ec1153774ba6"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "1ef038ea0b671f7bae4019a29e470d2e"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "09ca87b2ace82502b505bc3cbf900349"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "e283c28715064a84e527fe86a78ce03f"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "318f6a0882ce476d57e47cdd0bf3a02a"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "59ed0f731b270d85e033187bf59edab0"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "960e9a32b416e0d2aeaaded58e6c1fcb"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "4fddba37789b58034fc17bf0c183b527"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "b07e68f8fa8dc067a98ffd55c27ffa64"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "2b2350c6843c36f2ff56ebe2609a2fa4"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "96509658ecdb63b0684d24f2621ee97a"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "8ef4bc5f170bf457628c1328bb7b59a3"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "c063846a916cce244b2af95783c915b2"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "d119a52f2e4b6d075bbe1734f7cf8a8e"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "8b19ee1f950acb1b0805d31de40aad36"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "504aefebd75695bfa51f3dbb5275f775"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "f02627199babb8071519da1fb21d781a"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "d60165d8e6497975ba8e788d17956832"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "d0a812acbdee2d2ee7b8385f126057e3"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "f53be33b9d19227e1f4c32dc5efcadf9"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "ffcd7234c0667150d44a533aedfc6b4a"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "854754c950827dd1fdde5f961fab2437"
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
    "url": "assets/js/33.163ebd6d.js",
    "revision": "3b1b44f110ef3d784895a64564cd9ab3"
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
    "url": "assets/js/48.ac99a499.js",
    "revision": "99cfe282242b71314a249522a79c96d3"
  },
  {
    "url": "assets/js/49.dde414d6.js",
    "revision": "8674c88c9fc16779767079c968976088"
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
    "url": "assets/js/51.712a4861.js",
    "revision": "cead328865cb55737a0a812bbdd58481"
  },
  {
    "url": "assets/js/52.a0f65837.js",
    "revision": "a70dece9aa191793d58e4197e49db620"
  },
  {
    "url": "assets/js/53.b431088b.js",
    "revision": "e000e8f63e6134d7e945c84c7903ce87"
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
    "url": "assets/js/56.15afa18f.js",
    "revision": "0fcad4bd8a482d030dede95df564aeac"
  },
  {
    "url": "assets/js/57.c38125b6.js",
    "revision": "e7ff06349981daac07adfb454d647bb8"
  },
  {
    "url": "assets/js/58.71dff9ce.js",
    "revision": "65d9b8ea3c0bb0e441aa0683c14c91cd"
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
    "url": "assets/js/78.14efa00b.js",
    "revision": "89326bee9b2c7fcc6dd2827b74a7057b"
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
    "url": "assets/js/85.6c667351.js",
    "revision": "dfd05a9ee26f8dfe77c33900d15c74a6"
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
    "url": "assets/js/app.ab8d9340.js",
    "revision": "738443ee5699a0dea7b433460e412fb8"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "dfb8cd031fe29eea33e296571df5def6"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "faf6bc82c7b0a7d7f14d3b25291459a9"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "2a382313c9a825ab0d4b73cc0dee3b4b"
  },
  {
    "url": "tutorial/index.html",
    "revision": "ad865c9275418765b0ce252c3f62ed95"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "81e92dd6691a736388eb421578426527"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "f56ba1ea2e33362df5a0f5337a4d897b"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "66ae07b618f449c6df81a1fd2b06f080"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "d957842bc3646e4a47973ee58aea455b"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "e92e857f80bd7b638c13c250e6e16e61"
  },
  {
    "url": "zh/api/index.html",
    "revision": "0855a6fb92494a44c64bd93855f03c4e"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "945a742aaf8d93568b371fab4ac50d44"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "67a02b4b46012f3a483e0878a0ff4bee"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "f3a746c1dbe6a1abacfd2a50109c977e"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "01e3d9f0270c98172c120ad85e196d00"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "6ad315d2db9397df269f7270a792887a"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "0b4c91074b589c18cd335e8caf9330c4"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "5cae2eb16282f4724072d400594dd82a"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "4ea2eb1ceeda7657747e1defbdc0652f"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "bd15ee4f9b8587ebc9da9dd372be5761"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "498afe9ee564ff3429694b3edf138804"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "0db4b639456fbb72a994140e536b6c88"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "1eb7c3a64523d1a6d38e578b33b421a6"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "3f828c569a2c76f1e126eba8f30cef08"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "9df43cde28c0b95b95e10debe62c48f3"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "3b2adcf0fd9408e1f6c6d6b0ee0c774c"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "7f672cc263bf5294f9522fd458544b8e"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "584e957b0f4e5700b01fc19250ce6322"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "f7613bdac466045acba34671084464fb"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "237b2144b325c2bbbf91d63e26cc991b"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "ddf6560b22a02566c59e5a0c8bd59d42"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "9f92cc28ee1ba25a24c52fbe7eae9ac1"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "5f5c32b64863d78a279dd7a995e0c674"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "5aa0a0cb55e3854e6a9ba718b46949a6"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "ca7bc258b5370cd71ae15fcfbe5b9314"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "379b7d21ebdcb4e7dfd9a774aa24c3ac"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "e8e92eb9d75405a1dd2af13d8a6309c9"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "b0d7b8726d142aaf2e3c2968db73ba66"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "3fbbf0315d48e17130a40fa4c441e2d4"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "79ea809e54e959115a3626dbc2599c8a"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "585ec4d57cd2c574d1db351841a47b7a"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "aa2f5fe4fbe0a4bdf32a81755525a644"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "4f6e73216ca85b2a1afbc820cfe7e0b3"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "70b456c3c289c8e1140ea9bb601fc9d2"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "8d4cd8bfef42b8e8d51bb0248863d22e"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "a959a803e3728ab8c2341418806d9d78"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "6a0501983fed9a2dffb2ab83a4ea4dba"
  },
  {
    "url": "zh/index.html",
    "revision": "084d9f8c3412ef281ddd19a3ba0d3677"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "f055c864c4cfbb3f5d609b29846a6784"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "db77acda3260cb6737f48fc12a9602eb"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "09441377463a15061e439644a9c637a7"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "0e3c26bfa322a9e6de7930d50cc1f1f4"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "67e79c6a8007f0c32727c0139087d15e"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "11c98ac1f20a6ab68787fd6996a0667a"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "324faa0b2b3ed7e0e0ab22563cd34ac3"
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
