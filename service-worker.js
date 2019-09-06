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
    "revision": "6944212fb140bdfbea50969856644bf0"
  },
  {
    "url": "api/index.html",
    "revision": "4c5f0fe5b29de01b26aba524c3f9a618"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "0372ce3fdbb9d910ffd340668c0b9561"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "384a54e07d513ba0b66f280242db0ad7"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "5e6d96e222b0be855fd9917d2d3506e0"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "f9bc2fb90f66a7fc08cea6d5997f48ce"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "0937c742573fe82004cf16dd3c9bbdeb"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "c7df5569fb44c23a609cc1d93524153a"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "584ad19caa5263b560a57c588035c081"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "f860f7055be853c0cdf29beca9395241"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "28e202b5b7262cb8e305225038e76bb4"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "8fe3666d50f9803483b2ca52d4f9bca5"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "44ad20b3b88271b12229b25493f5d9f7"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "4a16d6b962e9b41e3b539035eede294e"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "439afdc225c971fb5e37e5c80fa209c1"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "be3bda065b69ac3d1886e4f3628682c1"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "9460bfc1ae4721cf772c3b843f00033a"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "8f2a41118c7288fe7e6399cd41065933"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "c137f6fb9189ca1b41fadea14f798b3a"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "c0737f6117fa393b8ffc2a645b33e7a6"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "c5da2e5bea9d99e07f46b63e37e50c71"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "70f2a7aa8979b594bc6a894e0e61b6a7"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "a05fb873ecd94005d63baa7bccfdc398"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "cc56114e7ab8b043983f948f1d1a9100"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "47ddd86ed44e7355770eeb3d7277812a"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "452b81101d177d2a67aaf240f569e1e9"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "65330d240dcc9d6024b7f0908d6630d4"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "3243c30949fcf96b37443232297928d2"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "a16158805197da5b95efe82f686bda4a"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "e072e4dabe68da0d5f2289c89c479ff4"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "e17fa750d91730834e8877f6e3cbd11f"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "b7537a34c88a22eca7ada71dce31ecb1"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "7b84a422bf855358fd55df2fc892c778"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "04482beb6fb2f32ec55ae3ab633a32ac"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "adab30b9a9fb5721346b2c3a48efda66"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "8cd0285a689ecd163f7c71221c41c793"
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
    "url": "assets/js/10.acf4f073.js",
    "revision": "c5ca03f772796edd588ac814c243db88"
  },
  {
    "url": "assets/js/11.42e0ff43.js",
    "revision": "e9ea85d9279ac67af9dbf6868f7c4578"
  },
  {
    "url": "assets/js/12.7394c865.js",
    "revision": "f9aa9b5f0b7b20039e2aa9a51f127d21"
  },
  {
    "url": "assets/js/13.0c595d4a.js",
    "revision": "c654ba4bbba94435b942becbdfd2cc6b"
  },
  {
    "url": "assets/js/14.e567919a.js",
    "revision": "26ad08754aa219c76a42333fd0a43527"
  },
  {
    "url": "assets/js/15.304627ff.js",
    "revision": "cdebe07c0d7207d21b4d272336b0e413"
  },
  {
    "url": "assets/js/16.5d89526d.js",
    "revision": "04b35f81b783c7d14ae43fbd7dbe6c38"
  },
  {
    "url": "assets/js/17.fbe6572e.js",
    "revision": "a0958b0711fe54f0736be819c57bedaa"
  },
  {
    "url": "assets/js/18.36f61dd1.js",
    "revision": "275e8264158817bcff7669cc6affdf27"
  },
  {
    "url": "assets/js/19.ba4bf9be.js",
    "revision": "c75e90e6b88516e4e014e94141969d45"
  },
  {
    "url": "assets/js/20.150bfd4d.js",
    "revision": "867ab1fb00e68d4f008012f3c9325edd"
  },
  {
    "url": "assets/js/21.9ac0e2f2.js",
    "revision": "66447b23a8126cad5afcbb03db4ff247"
  },
  {
    "url": "assets/js/22.d59d889e.js",
    "revision": "958a99bf4a57d756dc0ea387fc329bfd"
  },
  {
    "url": "assets/js/23.2afeaf86.js",
    "revision": "e7bba89f8cd9dd3fe9e1c28426efa336"
  },
  {
    "url": "assets/js/24.2bd593f6.js",
    "revision": "7a3ff9a71b9bde0ebb0d8d6c4eb5a35a"
  },
  {
    "url": "assets/js/25.c0f7e8c4.js",
    "revision": "0b4899a423ac8ef423fe2e18c1a5f406"
  },
  {
    "url": "assets/js/26.566e660c.js",
    "revision": "c144ae553061a3f14dcdc246f9f7c8a6"
  },
  {
    "url": "assets/js/27.158c5ad4.js",
    "revision": "0f61834056149c5664400c80b8d8c09b"
  },
  {
    "url": "assets/js/28.159d5a85.js",
    "revision": "cc6759809a5d34b6c42c8e39367f8ac5"
  },
  {
    "url": "assets/js/29.834fd9c2.js",
    "revision": "7376066bae5844b17a5f72624e5276cf"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "5b74fa33b0c6c00f486a7b54464d482d"
  },
  {
    "url": "assets/js/30.6709706b.js",
    "revision": "f827d87d064d37c6bd42cc856b6b81d4"
  },
  {
    "url": "assets/js/31.998ffb76.js",
    "revision": "ae2655e2a59e7de4225aca44c33c5604"
  },
  {
    "url": "assets/js/32.e23b8ada.js",
    "revision": "2f1fdea822986dca55431e9253a83a72"
  },
  {
    "url": "assets/js/33.3339eed9.js",
    "revision": "57f5b7658b4cff80d998175858f48290"
  },
  {
    "url": "assets/js/34.b9e65bc5.js",
    "revision": "f634206cd60329272180b8db86570623"
  },
  {
    "url": "assets/js/35.2ede91ea.js",
    "revision": "b48f965caeffbacad01c82bb8aa92f5d"
  },
  {
    "url": "assets/js/36.44cd11b7.js",
    "revision": "3b34ed8dcff934a1f9949bc20f660b67"
  },
  {
    "url": "assets/js/37.e63539e9.js",
    "revision": "da1b7e347c268ca36fa7121b33679080"
  },
  {
    "url": "assets/js/38.76ddba11.js",
    "revision": "cdc7a1cbf48d14ffdaa79b177bf562b6"
  },
  {
    "url": "assets/js/39.e4c72571.js",
    "revision": "c5523de7243af4404ed3900b49c613bd"
  },
  {
    "url": "assets/js/4.4ac4e7a7.js",
    "revision": "e8a86572743e99ba91a7b6f8497e22ff"
  },
  {
    "url": "assets/js/40.cc7c96bf.js",
    "revision": "85c28d20643022ccca4d459efea24f06"
  },
  {
    "url": "assets/js/41.4db3ff21.js",
    "revision": "40fc3512219f16231c284f29aa3bfb61"
  },
  {
    "url": "assets/js/42.c546937b.js",
    "revision": "d7d8e2c5902d44144cee1ab4358e33d7"
  },
  {
    "url": "assets/js/43.804da345.js",
    "revision": "69f51b7348f685e1275763456d44b51d"
  },
  {
    "url": "assets/js/44.bfdc23f8.js",
    "revision": "3abe139a61f962dd8d014c92d851a2af"
  },
  {
    "url": "assets/js/45.c6bf6015.js",
    "revision": "06980529d2dd6f50821493aa3a881d81"
  },
  {
    "url": "assets/js/46.efc47050.js",
    "revision": "c07ad34598d057fb21b98e57aff2a1d0"
  },
  {
    "url": "assets/js/47.945b71f9.js",
    "revision": "1decd80ea20586c54c31d5b68a000ee7"
  },
  {
    "url": "assets/js/48.a0ef0cff.js",
    "revision": "30eb683a912824e4e862b858409f6746"
  },
  {
    "url": "assets/js/49.83b19aec.js",
    "revision": "7a755cc2a90dc2706d68adcd7b7b1db9"
  },
  {
    "url": "assets/js/5.83763220.js",
    "revision": "f4cad0f859831c0a9993f88f70fc5445"
  },
  {
    "url": "assets/js/50.384d2523.js",
    "revision": "b9885e17079e3680f7933c430019dc0f"
  },
  {
    "url": "assets/js/51.4e2737d0.js",
    "revision": "5860c48212d8849edbbcc2504fca1a31"
  },
  {
    "url": "assets/js/52.7cabf0af.js",
    "revision": "9270f9d963f754564059a8ad8b0c1cb5"
  },
  {
    "url": "assets/js/53.db7dc971.js",
    "revision": "fd62a588e52cdf2504a6eb2289cf0df1"
  },
  {
    "url": "assets/js/54.f31717ca.js",
    "revision": "6450eea3b2f6812d04f9a8431e0e639f"
  },
  {
    "url": "assets/js/55.27e290d4.js",
    "revision": "751546a242d909796e0de129a305ab9c"
  },
  {
    "url": "assets/js/56.4980cf37.js",
    "revision": "0dedbe27cae3994382d01f6f02260437"
  },
  {
    "url": "assets/js/57.f9c00127.js",
    "revision": "8b2e704cf061b158f21aa03f18b3e2dd"
  },
  {
    "url": "assets/js/58.06553de3.js",
    "revision": "0eef59a94ea6002bdf90db984db1549e"
  },
  {
    "url": "assets/js/59.3729d2a3.js",
    "revision": "b3edad04d1eea7e2d1279ee1f5c9e83f"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.99c436b0.js",
    "revision": "f106aa92c5a5abf119cedf16907de27d"
  },
  {
    "url": "assets/js/61.7192c6dc.js",
    "revision": "5aeda3b06cfb2d9f5d5e874e69ac2604"
  },
  {
    "url": "assets/js/62.02a6f0a8.js",
    "revision": "a7d4b070d36720592fe9c63ea94f429b"
  },
  {
    "url": "assets/js/63.ac8995bf.js",
    "revision": "f84d888ea6e493899e1389672de0198c"
  },
  {
    "url": "assets/js/64.58de5318.js",
    "revision": "fc072320127e7dc980e6d7034b748045"
  },
  {
    "url": "assets/js/65.a05e966a.js",
    "revision": "ff5af76b1d2a0199aa539fd66e34965c"
  },
  {
    "url": "assets/js/66.d7e75ec9.js",
    "revision": "8eb8159581f8f85ff22ba90a97ba5f51"
  },
  {
    "url": "assets/js/67.c4a05333.js",
    "revision": "037a8258888ab689f56ae8e01e01f03f"
  },
  {
    "url": "assets/js/68.ba46ff8f.js",
    "revision": "8e4f12662a7297eb1afdf602d830db36"
  },
  {
    "url": "assets/js/69.7fa7b285.js",
    "revision": "539b909f5c9a203151cf94bf56947053"
  },
  {
    "url": "assets/js/7.515316d6.js",
    "revision": "1277718ed3b0c0c3d5a20952f73269d4"
  },
  {
    "url": "assets/js/70.75eea4e6.js",
    "revision": "eca8a2408171eadc1435bdf8a2040720"
  },
  {
    "url": "assets/js/71.f70ea164.js",
    "revision": "84fc4ca0b839558b9b5a402d06e5dfa7"
  },
  {
    "url": "assets/js/72.cfd02d7c.js",
    "revision": "d5a0fb0322b537e80c70f3238fe4642e"
  },
  {
    "url": "assets/js/73.188c7ae7.js",
    "revision": "79d17633eb01b4f25b88d7ba062a91b5"
  },
  {
    "url": "assets/js/74.e977fe4a.js",
    "revision": "7029ec501a8f3759526705ec8f84636e"
  },
  {
    "url": "assets/js/75.e90e906d.js",
    "revision": "e2463e66167778ac362a79076046ec6a"
  },
  {
    "url": "assets/js/76.add01f93.js",
    "revision": "a8104b2737d5624172cea903163e86d9"
  },
  {
    "url": "assets/js/77.7d338981.js",
    "revision": "979244aba48e9c39d984d633aab12c68"
  },
  {
    "url": "assets/js/78.8fc368cb.js",
    "revision": "c51fd47d89c34a1a3c86588f2c2e383f"
  },
  {
    "url": "assets/js/79.f97c2480.js",
    "revision": "f261df4bde97524611a66be1bf5c094c"
  },
  {
    "url": "assets/js/8.be38f38e.js",
    "revision": "ddf3de8ef0ee3605da5481aa006e9855"
  },
  {
    "url": "assets/js/80.d2c80ec5.js",
    "revision": "b9e20c9e8f7e8b8bd5c3b8ed58cd0b9c"
  },
  {
    "url": "assets/js/81.fff45da3.js",
    "revision": "e4474c40592069568df8cc8f163c60ca"
  },
  {
    "url": "assets/js/82.8440ae15.js",
    "revision": "9dd3f30581cedb71e68205cfc6bfd05e"
  },
  {
    "url": "assets/js/83.3bf71a96.js",
    "revision": "93f8033161ada2032eac125cca0e36ef"
  },
  {
    "url": "assets/js/84.91ebe5c8.js",
    "revision": "8dd8f0e0652257aaed3e09b38d171875"
  },
  {
    "url": "assets/js/85.65478a87.js",
    "revision": "818162085469c3368edafced0dafbc1e"
  },
  {
    "url": "assets/js/86.2f673b9e.js",
    "revision": "2f38fbf2479131011105ddc4e26ae0b0"
  },
  {
    "url": "assets/js/87.4d181714.js",
    "revision": "35887cd73d47fac988254a6fb0dd8881"
  },
  {
    "url": "assets/js/88.bda8bdfb.js",
    "revision": "b745ec3ee645c3602086d87b19c4acbc"
  },
  {
    "url": "assets/js/89.01a1024b.js",
    "revision": "b84c28e3af6d8d7d09776301580c2e51"
  },
  {
    "url": "assets/js/9.7785538f.js",
    "revision": "236db2920b0ed52e5512690a6f18a25c"
  },
  {
    "url": "assets/js/90.a5791ccd.js",
    "revision": "59e6ca4ec3ca7e8d4a792774898961ad"
  },
  {
    "url": "assets/js/91.420f8042.js",
    "revision": "5121f643993d15af048bc6467563bcd4"
  },
  {
    "url": "assets/js/92.83c0b0bf.js",
    "revision": "7e30f0a26b8c39e6f4e335da14353927"
  },
  {
    "url": "assets/js/93.21d69df0.js",
    "revision": "7c69d0efc65f1bd974602c26919323bb"
  },
  {
    "url": "assets/js/app.90614517.js",
    "revision": "5cf633f7343478e7413d01a6afa99afc"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "2a9c53e0dfacc100e04ee862881caf8f"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "da73d66e002a43314b75becbdd462b3a"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "29507084b41b7aa60cf39c53f5bc0907"
  },
  {
    "url": "tutorial/index.html",
    "revision": "2420e31eb0701fb1a0eccac70c881b6b"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "d2dab4a61da3255d75903e7da5b555ec"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "061027edba0f63b1e3dbe86b33c47024"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "59fa3185326c59e696832661b0483fa9"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "571ffcb97bdccfd54dad5dbd0f1ceeaf"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "9630734d1dd6078383703bc258a78c6b"
  },
  {
    "url": "zh/api/index.html",
    "revision": "f71ec873efb7feb1cee1b5a9ef4e7c64"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "0b2082b5b6d35f72a07ff7837180da84"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "10f27572b569dd0a1c2a4e537649ba43"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "17b699a9c9265ba8bfa2c7eb12e996bf"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "b9c8596755ce5e6044d7fcbf1cb80520"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "0b133b2a11b413b53e57f4900d71159a"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "b65097e4c554789ead96f46ae70d3586"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "19c011b03589bba0e5281d46bec8769a"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "b692507710510fa01fc178c3e60e2146"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "324da4cbed7ac8951c9f2cb3439a67d4"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "a9a6e79a1e7c6f7348b6cb0be38181df"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "31f0ecb697d3cd3cc6623637f92460a8"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "614b50468ca39bc0eb2dae7898e75e38"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "e349972c2ac3cdfebaebba7c07863342"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "3f2f62b00114b9f42a7d6678541a8fba"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "6728ccacbc94829a2bf79791e1929881"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "7514b405b4a45272f2d4bff1529b9079"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "f22c918e560c415f96cc1a31eb26d384"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "6e69c1688b4e836b70be04a64377aa73"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "c9e33180dafd0ff1808e630950b278e4"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "ca70b923e55aecd3b8db20978d1b0c9c"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "8cc434e18b358cdbbaf5c448b9b04642"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "562b8959e4717396d8124ef3164bfde2"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "48c4542278b42ba7d2c324e765aa2fe3"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "653933af432df593fc2654f216968507"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "60bc6d6690d67a9e96570a7a6af8b660"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "c37ba0ad7e98aae30d75da54482e8f37"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "7dcf921f08e80da2158d22d6132b4c4d"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "a7e225394611babb2d7e248d0098e3eb"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "1d0dbf8fc15365dd2c496948fe64c03c"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "b9071550a7c0de98c77bd2177e7ef5c4"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "7b4733fb4fde7027b134310943d9f590"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "a87ded1eb388c128627207ad6e579559"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "badb36aacfb9bd437ea62739c6b91ba0"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "c07d84ae61d86a47a6e6338eabcc4191"
  },
  {
    "url": "zh/index.html",
    "revision": "f7a807cd23e4678cba58ad5c4d80bd2e"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "a8ebd8e3968fe14a86b48c117177444b"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "bd151a80c8b5dba67c01ee7910948b2e"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "62338d1f206007ae235948ac822e8714"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "434f518d354a0f03d0032d912017454b"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "3125782912212c9d7209bbe0006cf7c3"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "e1f6e631fcb13e362fa1158ee540212b"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "7a3cf135ced3b4b50cbe9e5e605ae049"
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
