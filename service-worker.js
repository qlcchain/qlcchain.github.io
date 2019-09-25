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
    "revision": "cf033e110dec00abc88210ae6193117e"
  },
  {
    "url": "api/index.html",
    "revision": "297fb66ad3fa6cf80db1f1b30222d9fb"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "4799914f7d53b971c2c2c94936e606c0"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "d211eeed91032eea3cff1ea827d05040"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "d2a1c61431f1e669bb8b669e0c6e1649"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "74db6caaf2c33f7c80cca0fcd585cddf"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "051d5dab366fd48c4891714a5456468c"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "16b4a436e6d370e76ba7ac1f27249a50"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "ce2ddd1ef06dc0a1da2bfd5737742358"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "32417cbcf96fb2776b105216b2cfaa42"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "0b1dfd09f5974038c93ad29bc1bbb1d5"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "e6c53fba28429ef51023c74c1dba655d"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "770b07e63211b1535fa1575d5772849d"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "f9e2f6c77d917afc625f74f389cc76f9"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "a4c7ee5da7155766ed81bac88b050b5b"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "35ca7413430b5c8e1ed4e04ff310a562"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "270fad9ae09d5cd41c95551ceb8e603f"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "3e16a22bab06e83405341e05369abe4b"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "80c5b5957b6f98bd7d6c9040675191fc"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "6d433e896c6364d46df80b9b8fdd2a8f"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "4976f903f51287a810d11b0594f3508d"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "01717b529c41718c41e4f42318a1bfe0"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "0d768e06db055f16b335d55ccacbb94a"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "a0ffdb0c3e6f0340f13cbe815d60c45f"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "64983977d94e5d5be4a91c2938153ff1"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "9fb7912c1792bba62b26591584af4580"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "8149a03072a1dd47f14d6580a6929e30"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "0948c8ae84a6b86e68482456f01b4770"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "08396128c1291780ab70b6385ae046b1"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "65450f68fd77aeef81ba745506c71a35"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "8461826d26bf76593869045e8354acb7"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "5118aac169649d6c101cd56ca7fcba17"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "b7848c96c1a8840c3f3bed10b7db73ca"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "d1816d1b796d23af6dc978a5c17298d8"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "9ac3d917ed86885c5076d20c4fbe23ac"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "532d7a33b0eb69c789d4e533bc101d36"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "6be5bd88b4ab43470c35bcffb011ccbe"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "eb8491b599d86c7b4639bfbc07030da9"
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
    "url": "assets/js/27.73a581d7.js",
    "revision": "26c0e5c63887998b7f13e8690a4d49db"
  },
  {
    "url": "assets/js/28.ac3ab572.js",
    "revision": "75331ef7332ce7a970db4bf68fea9f26"
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
    "url": "assets/js/51.103bddb2.js",
    "revision": "0a46d5efde207f9bed8b9039ba4f9ad4"
  },
  {
    "url": "assets/js/52.3fefb0f7.js",
    "revision": "c781857f6bb2e20b4e9f48fdfacd8c60"
  },
  {
    "url": "assets/js/53.b4de5835.js",
    "revision": "cdb107baa650d3e2cdec129b3d9f5d28"
  },
  {
    "url": "assets/js/54.2d2cf4a7.js",
    "revision": "1e264eb17b81d02e75aacc507efa7d92"
  },
  {
    "url": "assets/js/55.a930abf5.js",
    "revision": "8df44b56988f47c867d034422d727f23"
  },
  {
    "url": "assets/js/56.1d3c8bcd.js",
    "revision": "73696125f5514ffedf798c6ee2a01221"
  },
  {
    "url": "assets/js/57.67c3ffd9.js",
    "revision": "c02b888b49a896a51af846174a45a0ee"
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
    "url": "assets/js/7.7a2bf16a.js",
    "revision": "913baede336855ecbe6c2924cee23575"
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
    "url": "assets/js/8.22f66874.js",
    "revision": "335f65dababf2600bc6ae2202ffea77b"
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
    "url": "assets/js/87.5ba5ba6b.js",
    "revision": "1f6991c4db652c438cda8178758e1c7f"
  },
  {
    "url": "assets/js/88.4454627f.js",
    "revision": "3213e0168a8d0bb1bbb5d8b6c9b9a0d8"
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
    "url": "assets/js/app.ddfab4ba.js",
    "revision": "0ab0954207a06d4a7ead271d844b1be5"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "692c4e7ea1c81de9aff1d3e421b00ee9"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "284e18fac14b6edfb0ea3846c1c2d173"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "0d3b77b973e6c0e5e01034f88c069355"
  },
  {
    "url": "tutorial/index.html",
    "revision": "42bf894b41dfd62c179b905aef28873d"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "a17f835524439cd3affb5957bf395dbe"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "0f18b07e77d8b68501b665508a79f4ad"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "c4feb5926411480e3ef1d5d2da47124a"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "2702a9afa52caecae3a4c50c6b98a1f8"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "9acfaac74726febce6c76a82d44d2ecf"
  },
  {
    "url": "zh/api/index.html",
    "revision": "b02ba62ac05535a766947b895f04ee3a"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "aea489392ec7d1ef7af6bfef8b394dd4"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "d8b163506ec2d7769194bd230a35ebe0"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "f425020a43f12ab253095d5d30e9eeff"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "3e00a91e9a2d55ff3359d050da906fad"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "aeca93a153448ce1f3f1168da35c2bba"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "e962eb27d732cb0f13337580a5d3ad56"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "3c565e643fa83c83fe014995699e88c1"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "77786fdc589d7a48370572ef96fae675"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "ea59b1b89e8ae488add337b8c07b2642"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "7eccbd087eff14647a57534b8c33c412"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "bd4c97f15a0686621aa92bbb511dd542"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "053ceeb372860c1b3a2d5ab35ec0916e"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "cf3b7111e74a448be01c837e9466f319"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "74c8b2517295973b6b87914cce218f62"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "d1597d03f12209b507299f50fbe1479e"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "3effced7b23e9b6cf826468ebad1021b"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "1bb56847a1bfdf609d2f8499523195e6"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "11ca76df720cd25c434c9f2492a4b727"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "fe6d196b1f402d5571b0b3d6c9106dd0"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "af4446c1699c495518e811da8e512a6c"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "b3e62cec4cff4e0f1826daede1ddb32e"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "1f8c394dee2e7083440b41b82175ef8e"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "c3366621848843fd4d3585e0dc3b004b"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "996b415385110c8f52878c0b51f80543"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "355c27d7ac87430ed93b25745fb1fd2a"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "5e1640b60b7d642afa811abfa75f8a2a"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "09fbdb30f317adebe624f89914a54851"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "cc9f9aca05bd13390907f5adda8453ed"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "65041363dfc3a9b207e41117fd3be3d9"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "abd82d7435f4981c5959051f41e6eadf"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "79156ac5519f98407facdfece0be778b"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "a71ffc996d392ff84c69245a9cf470c8"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "147ad7191a9ca62c08339fd67e1ee5a8"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "173157af011d35e72adc23090f800a3e"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "0aef27e8f817ddcafec84486499ca0e8"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "15aa5b4fe5850c83c506472004589ca1"
  },
  {
    "url": "zh/index.html",
    "revision": "220508f2fa0822f8ea5c9eb9b9b50d71"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "eea3c2f3c9a73090476a4d592bb7ebaf"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "02fa1c6c5568828f00013bb45b32392f"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "d3e5ac39263ad68a5b27eef49a4f3aaa"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "327ed6b9eca2bc31a997b33b70d1b6e8"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "9fcc8069099f9020dd2b6901b966b9f0"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "2b74058b889f1147b36766ef9ca55889"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "940d1c6fc638ca391c8ffe9884d53065"
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
