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
    "revision": "41989c4f1d1ffbffe23676337dbc761b"
  },
  {
    "url": "api/index.html",
    "revision": "223382782d039ee037e33e974cfbfa09"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "200f53a8d3eb26b57002bc3138c28ab7"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "ba6ad190cddaa9f36fdf6b87a50355da"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "20d5b90917db72dfc4fca3a3fa2ccb2f"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "3dfa965ee9d0136329c047511da6eac9"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "82bdd0bd49a9799fd8d9381cc51ec748"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "dad453ea3bf20992e50881d0459f5df1"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "01547f0fd8d16634c6f544a2304cc6ee"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "08d39a856b965778947907ef3ab3b7c2"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "1b958f513c39e4b523dedc127766cbc6"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "67282e289af66d98b9722d89ba30ced0"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "03f64c8d8c4443b18217a3eec7308865"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "717d2cbf87c3983ebfeb9e3830ee03bd"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "a377eb556e5aa54d208dd5239dcc6f7c"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "9cb97a136b6bd1c7f8af29e8b4ff118d"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "732c4fbb75f77fc7587fa9fe4c2be506"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "19997d703ec3b3022d014ac7cb930488"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "113cf27ec260f31987d999ce8532b62d"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "f4130dd6de61e91fab18c1746764133f"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "ad1e2c3a77a48f9548f6a9236a1eedbd"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "4295057afe0753560c9a0d94b2a29dcf"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "6e2df4f08433648594541d5769aa93e2"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "a1ced890357025fb256a37010ee63928"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "5f151c19b778371020e4a3541f2dd4f6"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "def4496c23e9963bf32259f0daa15bb4"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "84281f8ef2f3054943d6179abe983b8b"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "3fa52f38936fabe0a1f64aeac28f9ad3"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "d3195704a032693f1b914e48f52051ce"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "7be55e79cbf246570b2c56332ed66f9a"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "540d50ce851ff95483d1d687cfda8f2a"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "d0989e3686568a603bfc9509b4476079"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "0700644f0f3c8ed7eabde3252790dd2f"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "4ef578646e104185854e94af6d63a254"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "fbe3496dc4013c57c6059eb5c3565830"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "cd3b2d11ce2e2dc760075a8c7587e5fb"
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
    "url": "assets/js/32.f821157a.js",
    "revision": "820911c77dbc504ded3f823b6c9b333d"
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
    "url": "assets/js/36.b301457e.js",
    "revision": "c3f3d7279149d53ca9ba081a64727317"
  },
  {
    "url": "assets/js/37.e8542150.js",
    "revision": "2861b046289b61925440ac3a0dba7269"
  },
  {
    "url": "assets/js/38.86d04419.js",
    "revision": "e89f3c309ff0f66f41f36633bc174501"
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
    "url": "assets/js/45.8f43c075.js",
    "revision": "9023fd299e885dc750e1b2a5bbd1eb48"
  },
  {
    "url": "assets/js/46.723a7a81.js",
    "revision": "69e12c575002de5d57f036b06789dbff"
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
    "url": "assets/js/52.09e83ab0.js",
    "revision": "c2455ab0e1b7a086efc6fb0e91f62bf0"
  },
  {
    "url": "assets/js/53.05e8e705.js",
    "revision": "b33cc9306a1912321d6e7f4dc247b6c8"
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
    "url": "assets/js/65.a05e966a.js",
    "revision": "ff5af76b1d2a0199aa539fd66e34965c"
  },
  {
    "url": "assets/js/66.d7e75ec9.js",
    "revision": "8eb8159581f8f85ff22ba90a97ba5f51"
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
    "url": "assets/js/74.e977fe4a.js",
    "revision": "7029ec501a8f3759526705ec8f84636e"
  },
  {
    "url": "assets/js/75.e90e906d.js",
    "revision": "e2463e66167778ac362a79076046ec6a"
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
    "url": "assets/js/81.c8e5f629.js",
    "revision": "9d5eca0815d16861fab6b87eaa8b2bff"
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
    "url": "assets/js/84.64d48acf.js",
    "revision": "dab8c93351c67f636e82ca565f0e88bf"
  },
  {
    "url": "assets/js/85.a01bb8ef.js",
    "revision": "013ed03d18f2f11847fcd566099195a9"
  },
  {
    "url": "assets/js/86.1051449e.js",
    "revision": "b57eb0fcdde03c90121e7b6a4cf5ba84"
  },
  {
    "url": "assets/js/87.8b23c96a.js",
    "revision": "89cca536cc2a347119be00e5296a797c"
  },
  {
    "url": "assets/js/88.5b77deac.js",
    "revision": "72ef61ef6e45aa81a8ed1c155f600904"
  },
  {
    "url": "assets/js/89.11d061cb.js",
    "revision": "131be390ed35cf3c2b2fe765abcedbb6"
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
    "url": "assets/js/app.9da82239.js",
    "revision": "1d0bfdec58c6c7d9b72ec899b2ecb335"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "d1a489eb5eaf6cd76e54e7522b5fe3b3"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "23955199be711e80fa7f0caeaf00d233"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "bd1d4e3c1f56003e23ff169c8a8970e5"
  },
  {
    "url": "tutorial/index.html",
    "revision": "ea8d581c8a7e5869bf0fda56d601d540"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "88b1e7e2ad41e28f596b180b2fd68acb"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "b16e388fea5fd20057e157033da28f60"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "068e4ad164e488e7ee461ec9b6f656c3"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "892eb38da867c5df8e1a3153010ea8f2"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "dc2aec87dce9cbd5cc950dd660709a86"
  },
  {
    "url": "zh/api/index.html",
    "revision": "9ac05609182ce15459bf505f8ba3dcc6"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "677de6f18e39fede13cfb6b36dda5d6b"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "f077b2f1297a31233f7c4cbc5857eac7"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "83bbdab8a987fc6c74968c199e0bfbbf"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "e0284d05555aae18f14a3ada08cac285"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "bc11d8b0026e9841b6c8f28d94c59b65"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "3268f58d9d4611a10f056691d27d33a3"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "8bc44541bd7518cd8d33851d4763d111"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "be0bc905fab0524f97729d1ab76ec3d2"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "418ff4f588f874641fa2403fc084d1b5"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "adf97c980301f26a4613f55c2a327a3b"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "49b42ea716e7eb73e653c9513bde572f"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "69deeb91ecabbb4246f13f945a1b0632"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "db5d1a731962e26ba27c8ba34654c55e"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "620ef157c552f924d6ef4b7c57bf29e7"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "423f85dcadcc5cbc7bd0da5ba7124daf"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "800b685a51eccc2cbab5d5c2f1a0f996"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "a12f5d660a5179c5a4924d3285eea836"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "aac78cfb99ddabb4e0ec9725a7defd71"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "8c10658d95d1921b5c1d846cc9088433"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "f5431c1f71f324099fba1173ddba676c"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "bcaeee8218966430409977b2019e5546"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "9a2ff898a1e08a524647e34058e7e4b3"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "c7235c6caacd962827ea0d6344b2ed8b"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "9123666764cdc44f2858cecc1cd6f01c"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "f42ec8484d1e2676e72cf5f3cdda0004"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "98c6276bf489a71e76c406e483aa932f"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "8bd994347b80d6cdd6becdf9667eadcc"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "f64bc699d3c9a3b0ed3cc63d0bab2f09"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "8019d176138eb63be3a3f2a18ddc301d"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "a5d674bf2c8b715c6e8948f8d0c4f957"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "c2fd6d2a8490ba87f61e9108ddf226cb"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "3717b5ec64b1b7659862694bb60971dc"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "f9697d964d42bcf3f6849b27ebb5fdab"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "c9672021543b7d0fee332b4eb5e5b13a"
  },
  {
    "url": "zh/index.html",
    "revision": "c916637b0f3bdfe93b26b71f18ba1dfa"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "f41cbdf1e7bb92b7fde962bef6d0ec3d"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "549603c017c073f41577ba6482416ee9"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "0dde16e7062922cd8bfb1d984a9889ce"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "97bf25e764872791d3a83c3b103969a1"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "e4086400478a2efd351fa3f735e373d3"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "aa91bb3ddb31d5d5ea40daefb10c40d2"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "c8417620d3fac9c7a5fec0fccb904ab6"
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
