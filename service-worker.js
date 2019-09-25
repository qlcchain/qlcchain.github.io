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
    "revision": "ff2593f52ad0bdcbcf3ad9f60be66e3c"
  },
  {
    "url": "api/index.html",
    "revision": "bbf074bbceec387380414032552dbfaf"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "c4f657e2a22c9ec9541800b3955b2dfd"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "4d20c3ac60ca590c014551112953ada9"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "3b6cf5b4ccf1537d7369d0718a2aac76"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "b9c589a27f8aa11c5a20b6c754a6dfe9"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "a88d6b3ca838ad841f3896f9b94e234e"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "48beccf8115f736f4456718af01464e3"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "05bcc1cc81411823e923e7b8f52c70c2"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "881c3e6145d6179ab32c3a378cd075a0"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "12b4d5bd2f9550bb3298aa0c0dd774ac"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "0ff7d3bfb9324e683567f0c0620389a9"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "0ce6763ef844d0126da874cc3bcf87fd"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "56a3f542c2cc58d6725324d794476109"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "3e8b0545539a2ffe1983a2b0b8ef619e"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "28128be2864f5e7cd207e6401f00150a"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "ccabb44934b8fb26953738ea53125f4c"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "61ca62df7707561b626d2924c2fbe560"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "7d930296bdece8c8460243541c4e3a3d"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "254c6960d95205c93431d62b12c87db0"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "5e7791a10ffaff5174c1e3b41c814d49"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "c38a54a2593fd577f425576598750f90"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "acf21ddc219c623a3e3cd264ba8cce0e"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "3eec1d3d2e29f716639135ee6ff8339a"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "c600d0e838c2ad3950f1b632ee621452"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "0242b98d5f9baf6fb7d63cf1575561b2"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "4a6342a5796722bc45b5c4f471ae1947"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "075821cb8f0fb6c3da722b64cd91b2d7"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "f394bc3b183951e1bcc4d0471ec3ff7a"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "68c68726276eca7c7c515dd0c1776c47"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "2d10ef3cf41f3c1a4077497a5068be9a"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "f29d247b5540497e54773fde056d49c1"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "bf7ff0e20f7ac25f77bdafb6c47c0cf4"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "f4ddc5753d55143d05a9625f566f2d12"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "531944e3f70db5f87a8588f7d93d1839"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "c95d8115ea513ec6b84538f93cd7a3a1"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "478193ff12c7a27a2548b78912638d84"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "0f6808d20c4f6cd4159059d819fa58c5"
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
    "url": "assets/js/31.b2ba30a6.js",
    "revision": "23cf86566e3ae9830eb30d4462bb7490"
  },
  {
    "url": "assets/js/32.2c89f587.js",
    "revision": "24ce839d96ff39523f8ccbe058d78f6e"
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
    "url": "assets/js/51.103bddb2.js",
    "revision": "0a46d5efde207f9bed8b9039ba4f9ad4"
  },
  {
    "url": "assets/js/52.cfb505fb.js",
    "revision": "745e791118ce17e7b1a2d434e08cd42f"
  },
  {
    "url": "assets/js/53.dded8735.js",
    "revision": "b80e042c3e1245dcfe3f9c22069d656e"
  },
  {
    "url": "assets/js/54.ff33db55.js",
    "revision": "63875916c7be789ad0882b3ec6b1db3a"
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
    "url": "assets/js/77.c44258df.js",
    "revision": "cd0a9be735ff5a0e1676cd8932097cd4"
  },
  {
    "url": "assets/js/78.4b7449ed.js",
    "revision": "e870d7aa0baaf9f014c274739100fd9f"
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
    "url": "assets/js/app.60173ffe.js",
    "revision": "889809d14b3e395b93a9983eedf0e56b"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "cdf40a5a022b35034a13db07cf969fcb"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "a98e0d75708bb367b60d0267df333104"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "8e62656f52dd387a7d3a0540d6e02fbc"
  },
  {
    "url": "tutorial/index.html",
    "revision": "e52be022433982d6f2717a857721b2f0"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "3fa5b9fc36482964e64ed8c4afb15541"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "07f0102c36b2e9289d29509bbaab6073"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "bf2e4ecd126c5d1575244ba35b5ae365"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "36e3f381fe3103ca31e5b079a4512ccc"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "e2202145653461b98bef9433743232f3"
  },
  {
    "url": "zh/api/index.html",
    "revision": "9d15028821d3f057850c90b5082c0314"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "660c8c91073085bb61a2043bf8bb29b1"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "b6f1a3d06c22858a38805e3b14e3e4c7"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "7557e06ecd9583e407ad8ca37c79046c"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "d3b54580f9036079f6e740fbc8e4232c"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "20baa4ffd47b77ee0360e9760c88574c"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "0404f2cc3a8004e523b4ad245aee0b1e"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "3db83d50bd673f984cf053a22abb98e3"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "cebeed00821df358741a0711168a8ff5"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "f32f21582b37025468165f156f2e54d3"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "204e321c0a1bca974914475c767d38ff"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "05687b5d0e15f49f5c7227d2bc31d535"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "a28a4322030251acbc2e943a773e4a36"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "f49bc12bfe395089ff9adbced6dc9b5a"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "11668b4e782fd8e277028ca2e387b56c"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "fcbf9f78c0e165549b0df52c4ce2392b"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "84e8f71ccdeb68c1fe6bde659e403f40"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "fbc8c153355281385e1239568738b654"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "a4fc0dbbee1106514e96b1a4380140e9"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "d962bb7b9f01eda8dc7280ccd4a6b524"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "7dd5d81e5a0af83588ff459f8daf6adf"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "b7a8cd769f0a39902f12e9cdaa58d188"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "d2aaa249532432030f5e095b3f24d6ad"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "9f67423e464ef57bd2d403bb5badbff3"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "f26de03f57a57e131bc7ef93132ab527"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "af73ac99348b91fd347635c83bd7eb55"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "284f7a48ec7c2f7e75399c303be258e7"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "42bc8315ae7c7b2b4286e7867d7e8a3c"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "f1ff076c161d5889d6db2422f1e719d5"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "f9d4148db86432c8247fbcfa08157914"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "1719d8d15d4cfacf97b64f671c1e8e3f"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "848c2c585c558702ca242e087f478e69"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "4968d9f021f00d9f9c35047922a164d4"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "4531ef35d4a98dfadc786a52ddf6abae"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "276549c3d05953368986528281e83d58"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "f21e2dbd586e2559ae17e9884f8b82ad"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "934548ec8a8e8b4beff4ea62e62c25a5"
  },
  {
    "url": "zh/index.html",
    "revision": "c483b92ed1ac2211c59cf1247acb1b95"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "b31acd02b20ab1d9e311012d2c088259"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "9877f34495420602366b497986be1757"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "a1275f9837aa1cde527db5cafc4be54f"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "3f82bc799f06b135cda7b27e806c9222"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "815fe4131f28653aacc92b06f84904da"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "95eabb4d99dcc17bd8b4ed950c5a11e2"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "5ae435e294865c89787a6b28d92a38ea"
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
