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
    "revision": "a2c1e2d4f21794ca065666d427ae61c9"
  },
  {
    "url": "api/index.html",
    "revision": "095fe3326211775ae9c70de841537e89"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "78f1487e18567c1e3e5b55fc4eed3604"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "ade4d58284a03ba0892a99040260fce7"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "48d84bb62117014e7a60dcf6ddb04ade"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "283d81632e3434cf37947fb524cc4b5e"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "ec5619ca26bb8c61f1a8d06a8996f551"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "2781d209f051a5d794c135e15155b3e6"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "099c8f0e8eebdbd0bd9f24cabcc17fc7"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "494af9cfb8a6204ce047dc08b88848f3"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "cc9e848fb632772f9b5be992734ace09"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "357eb6c237d0fda8035aea933f8273c2"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "faabdd029d3500de4e6d26cc13c1353f"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "95649d0d3aea9753859baa24cbf0f9d1"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "5330807609f617a260fda831ffb8c821"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "9f915147b4872528fc852e7e876bb451"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "f693bfaa43d3efe4700aca4ec4b6ba6b"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "4419e1b5be638ccc313e8490a8decf17"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "42ceaf3497de3a2c1e632e0de0712b1f"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "0e862ef04996256bef0b7f0933eac3d5"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "3d77003395c7dc5d7bb6227e938770f8"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "49cd59b0981507c04ee01cc3f20e0c73"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "b13d3f06f932ff49d99dd165e69f9b71"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "1098a922f213de645cad55dd1dbc5137"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "2d075cfb67c0820c4da038bc0d421a09"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "1e668b977a5993c0c2866b4112c7ebbe"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "b1ebdff889d8f3e3e2b60a9dc6676ce6"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "e1c8337c01ccb5d4d39ad5b5c62e68ae"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "ac2571312ea96b720ff44bc6139551cc"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "8d6ca032899b3f6d223d398c56728596"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "a1a933766b400048b65bbeb990b6c2f0"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "36f930c158e6c900e5a7caa6f094e0d8"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "04c4d10c29269a1cc357fbf7796bf0a8"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "797c0714906365c692cf74dd6dfead24"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "19281b0dfd1a0709998cabf05d24cba7"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "6b8b01a31d3b90d8427c9f12392ed2d9"
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
    "url": "assets/js/16.832ec681.js",
    "revision": "4c19b974edf8d8d97e7b57bf4d9546d1"
  },
  {
    "url": "assets/js/17.c107b0fb.js",
    "revision": "b74b5951d6cbf5f039518a21de830e74"
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
    "url": "assets/js/30.e21fd74e.js",
    "revision": "2a969390f8447756b158eecfb48a3785"
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
    "url": "assets/js/33.32879e20.js",
    "revision": "525b646b63ba4fab5c26527b0ba0bf6b"
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
    "url": "assets/js/37.e8542150.js",
    "revision": "2861b046289b61925440ac3a0dba7269"
  },
  {
    "url": "assets/js/38.bfc3a7f0.js",
    "revision": "0875657e3a995b58aaf7d2018d34b7f6"
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
    "url": "assets/js/47.407d15a1.js",
    "revision": "8e69b061f7cc1dd717930f6748cedd51"
  },
  {
    "url": "assets/js/48.caf89ed7.js",
    "revision": "54c54c9828d7b24416a4e25b576092f1"
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
    "url": "assets/js/54.895a3862.js",
    "revision": "45240a51ca174a2731810ff39587ec5f"
  },
  {
    "url": "assets/js/55.285512ee.js",
    "revision": "2ecd75baedd39708faaadf36e1239aa7"
  },
  {
    "url": "assets/js/56.2aec58c7.js",
    "revision": "fc55412819c836983aceb94d9b968b60"
  },
  {
    "url": "assets/js/57.0196dd04.js",
    "revision": "cc1ee3a66f433a63311e128834945ecc"
  },
  {
    "url": "assets/js/58.0093fed5.js",
    "revision": "01e7bf099d85d797611c02653adbd7e7"
  },
  {
    "url": "assets/js/59.a67f376e.js",
    "revision": "b48bd32abf3fe6f5eee977c69107e69b"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.46b67ff0.js",
    "revision": "a1ae238c94dd65d50ab73ef41e4df673"
  },
  {
    "url": "assets/js/61.2487695d.js",
    "revision": "a9b93d94130a55ce7fda72bcefbc0198"
  },
  {
    "url": "assets/js/62.b39df342.js",
    "revision": "52a3cb696b42a848a793fe20358c7218"
  },
  {
    "url": "assets/js/63.749164e1.js",
    "revision": "3a2849bc7c30d11051eb0717249b4d1f"
  },
  {
    "url": "assets/js/64.58de5318.js",
    "revision": "fc072320127e7dc980e6d7034b748045"
  },
  {
    "url": "assets/js/65.b4062365.js",
    "revision": "b0af920eae6944c0ef19c456e606af0e"
  },
  {
    "url": "assets/js/66.5fb3ae88.js",
    "revision": "1772bde88170ecd9b3620780a8e8075c"
  },
  {
    "url": "assets/js/67.3e87b2e8.js",
    "revision": "6b021f47b9b6d917e439e49b5d72abdf"
  },
  {
    "url": "assets/js/68.5e1e8cb3.js",
    "revision": "9471dfa8cdcaf579ee138c9587d70b38"
  },
  {
    "url": "assets/js/69.7fa7b285.js",
    "revision": "539b909f5c9a203151cf94bf56947053"
  },
  {
    "url": "assets/js/7.bd2611f3.js",
    "revision": "b5dfb183fb00865c4aafdaa250aab6d6"
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
    "url": "assets/js/73.7beac72a.js",
    "revision": "fdafd18f78b80a63d9f73ae85f049127"
  },
  {
    "url": "assets/js/74.56267cfd.js",
    "revision": "3070aacb0e03d6053af8d1b7c08ad309"
  },
  {
    "url": "assets/js/75.ee393cfe.js",
    "revision": "4516a81c1616075074894a77b58f4588"
  },
  {
    "url": "assets/js/76.090a6091.js",
    "revision": "70749a8a18a61b16fb0b6e5ff960dab0"
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
    "url": "assets/js/8.a6372b83.js",
    "revision": "262e9e1982020f91493421b14e7d25bd"
  },
  {
    "url": "assets/js/80.1259caa9.js",
    "revision": "3f448caab30ccda04019ab9f57893ea0"
  },
  {
    "url": "assets/js/81.42b4402f.js",
    "revision": "320193c4b986f91b45a578f4a6f0ceea"
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
    "url": "assets/js/app.3a2cbf8a.js",
    "revision": "080236a97666b44cc860657a5791cce3"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "edf057c13135daa16446f10976d94e9a"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "1d756c54792916aa95954dfaad545ceb"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "c70b2680ba8fcb894a8d767d1eff2e7c"
  },
  {
    "url": "tutorial/index.html",
    "revision": "c22f20367d1367c6b0fc56e1dd2136aa"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "31a60963d015072e83fc3769522c7727"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "52713766e42d1df6d8b031210a18dd49"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "48840b75fc8894b2a40cc6705e33ad05"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "6e63d85f374eeed9fd8bd300cdbc0569"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "f2766273e6d6c41d49cc71ec04a5eee7"
  },
  {
    "url": "zh/api/index.html",
    "revision": "8a0797b30950b3080ce513467ac59c99"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "96befb97349210c38483aecd234535bf"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "135bb1bd00ff164e4b71b65e2b5ee7e4"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "dff86888f515a9d52391489aa7290ef1"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "7f91824ea7a0d2c38dce991ea16d4f38"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "00dc51c1a6e8ad76d51ea3a3d0de567a"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "87b4671a31aef8e042278a2dee7aebfc"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "8e6f732cbdab47bd9ba5a982d3855fdb"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "2588d3401ecad1b1af9d8a4f03a4aa8d"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "d60642fcf04f747bc1208fd961b8c014"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "40b0d182e44b12e4ff8f1fd11d96c9b7"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "ecddfcf64b9df69b369293634522ebc3"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "5371318416fb7ab5bde4fc34dec209e0"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "a0741b4ac241b8bd1c4d661c2a4bce49"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "0a9da6de05d475a6e0190933d50d2bea"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "035867a908ff3d1f9584cb27adc2a6a3"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "f0b8eee464edd936bcfe35783105c0ad"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "6a8cdb4b7dbb1b9bd95a4469215b454d"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "e3f1dd7c3def6c9160eb401910036876"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "3bd11bf84b929e3de912d2ba79ca0e80"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "06e43440a02ada8898f3a1bdc4d46c07"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "442628c6c8a87e84472b272cf1086c8c"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "2febe6315448769ede7eb0ef0dc5c782"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "780a1c79618a5622e4aca5c0493bb58b"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "cc6a5d73482c1d818830e9638a20516e"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "97dce118baf9ddf493cfef04795e26d2"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "28bac778a0e9e3298c452ebe0cf5847f"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "11430b79595587747f8e60b683e2eba9"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "bdfbfa294c66229532e625ab2fdcb092"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "943fe38ccef91f02b59783530d26f283"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "d5e80753f466258bb4fa0566b49dbdc4"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "c9e62b86c49da73ded4b704b52472769"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "a361a22c89d86050e3dd22fe3843ce8a"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "82b0b0a8bde2335087e921c2f8c76640"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "9b497dc475a7de3cbe0e2de039424a03"
  },
  {
    "url": "zh/index.html",
    "revision": "2d8b570456d537c6af3e8f1fcddb3cd6"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "5a04804867bbedbaa676b120117ec580"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "2bd1e3c155fdd19a2fab135cb5071ddf"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "db42ec695288a85a9d541ccb0c544e9a"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "3a4a6271edc14e72f68c785d0f2fd36d"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "902c2fefe13ed4795595e4fd99192e5c"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "6a1dd756a068968a29bac517c877ab1e"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "942f8602b20098a5090acbe99ba0c2bc"
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
