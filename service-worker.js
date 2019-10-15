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
    "revision": "fc47c99d093cf40eabb45c7032809dd3"
  },
  {
    "url": "api/index.html",
    "revision": "e3bfef2a167bc99a502b2fbc66674447"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "498e586db0612d2d7c4dc084598a87fa"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "ea6e49fa19ca87a0f08dbc0e14d853b1"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "50462e0054bece7e2aa66267fa31888a"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "0b282ceb8a89669a2680e5a5280b9909"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "87bde3e32dda106fcb2f8741458b5bda"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "f58499d456095c7685ed29637cf3d72f"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "b3255e5afdda6d83ec16b84a83756728"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "4e2e27b7e1e59e8a8949d59b4dec2043"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "9b50f0018bf12cd9ff3e143f5859b83c"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "59ef2879ccae3e1473e32d9fed97b32d"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "73b8cf649ef08c013d9fa8e72497c793"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "4fcf5ff13e71e8bd3c1cae6097ed5a84"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "17b96e8850c3b5e2cca1704cbfcbb587"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "5458aea2d8f7ebdb684c82c08f647f8f"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "0b34f68ce0e5536b45bfb4bc40cf708c"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "a9675ac79c51738859be0f42159e21a2"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "cc3145198215250a3028dd759b3360a1"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "8cd0d159fb13d9741a67293cea2a027a"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "7b3680f30c003b12e4301a0d50ef5507"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "bb6efa9d1f4d21fb5843b705dc9d4d64"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "4b41424074b1e0de74797a97493ffc22"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "5f31663a6bd2153454078a3629671aa0"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "d1680f0025eb9199cfaedc43469cfaa2"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "bd7a596bfe0237836e99bdab1e35724d"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "cc8fa28beeee4d34d215f643d5aadb4c"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "6576e1d556e4405f1a3e7c2ae85a9e07"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "ebdcdb3a8cc58a5a4512b60fbe9f6394"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "24bc1e6d2a85849d04df159067fa8e14"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "fb6e661a4f4297330e2aa5a92317b366"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "b5f18afb175c2a26a406df52e47a0461"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "9d26a3eb32b072846764bdcf3b75b7a0"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "f124b82e75c545f4d7c10d252772584f"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "d31c88801008403ebc88c79ef15ccda3"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "478e73218afcffdc1c358e21a826e1e5"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "891bec115759fad46c60c5c08059c072"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "b8c088a90100c11cdc14922276a5184e"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "9f08a0387283b3f082e688c6b9a2cce0"
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
    "url": "assets/js/10.d64c61de.js",
    "revision": "1b4b0b7156bf5e31d361fbf424145261"
  },
  {
    "url": "assets/js/100.d097ee4c.js",
    "revision": "db4a16eedb01a3a3d0b04fb28c79a469"
  },
  {
    "url": "assets/js/101.cacd79ab.js",
    "revision": "0c38bb2aa39d2f497bda02c99f0fdf19"
  },
  {
    "url": "assets/js/102.8d4e1ae2.js",
    "revision": "07ba5376a7e2cfca6d44531022048078"
  },
  {
    "url": "assets/js/103.4af9968d.js",
    "revision": "ad9df4c35dd65f614e7d173d82807a52"
  },
  {
    "url": "assets/js/11.133af2ad.js",
    "revision": "1567d9585887b18d8cbf2687f4d23499"
  },
  {
    "url": "assets/js/12.bab1a960.js",
    "revision": "2ac59551b1b9c777615144bb23f1610c"
  },
  {
    "url": "assets/js/13.2ca76481.js",
    "revision": "bf3b00ffbbc6262b92564c7e45faeb15"
  },
  {
    "url": "assets/js/14.9b48e1c1.js",
    "revision": "386473981af4431ed31df80f4c1c9c42"
  },
  {
    "url": "assets/js/15.a8925a53.js",
    "revision": "c0e27a0a2546c307b0bf31eaddc5a78a"
  },
  {
    "url": "assets/js/16.d9c16fef.js",
    "revision": "805185475ebadaee8222b03999341a4a"
  },
  {
    "url": "assets/js/17.3e36e07d.js",
    "revision": "0e463739977ca5bd302f704d5ff2472f"
  },
  {
    "url": "assets/js/18.418512ad.js",
    "revision": "2e559b946c16192e2dd3a5d223038746"
  },
  {
    "url": "assets/js/19.82c7732d.js",
    "revision": "e4506e4b28c72271e5fbfc383d64228c"
  },
  {
    "url": "assets/js/20.fb0e0a0e.js",
    "revision": "ac9da3376da9f6921e998984af85b077"
  },
  {
    "url": "assets/js/21.96e81ff9.js",
    "revision": "c0ec0559e3ba5f8673b49560b38a0203"
  },
  {
    "url": "assets/js/22.f5836b4f.js",
    "revision": "2930897cdac2f0f8627c1f0649af590f"
  },
  {
    "url": "assets/js/23.f571ede3.js",
    "revision": "c0410d1bcc4c4854f6ef46bb189db490"
  },
  {
    "url": "assets/js/24.af79215c.js",
    "revision": "01148ab200faa132f07a20e80eb5434e"
  },
  {
    "url": "assets/js/25.1b55802c.js",
    "revision": "89c51b17dc22ecdb20032e0d7db51bf2"
  },
  {
    "url": "assets/js/26.ca16448d.js",
    "revision": "b723d148cda576aefaa16fbe14866013"
  },
  {
    "url": "assets/js/27.f033c8f9.js",
    "revision": "d1a19617785611b0fe2b53dcc7955a2a"
  },
  {
    "url": "assets/js/28.72c14eef.js",
    "revision": "e50be412f29e3a37f99dfbf268266bbc"
  },
  {
    "url": "assets/js/29.f28cae40.js",
    "revision": "4b976389468212a534e519cb80c08d4b"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "5b74fa33b0c6c00f486a7b54464d482d"
  },
  {
    "url": "assets/js/30.0f5d4ebf.js",
    "revision": "170214bdb7dc8988b564a7d2003eff87"
  },
  {
    "url": "assets/js/31.f69e4845.js",
    "revision": "f5feb094176a57887b93b8d63a4304db"
  },
  {
    "url": "assets/js/32.06f63214.js",
    "revision": "3707bde6b1b5640837bf6043bef54c86"
  },
  {
    "url": "assets/js/33.97ae6ad0.js",
    "revision": "9df322beda78d9be729591214b0fe3c2"
  },
  {
    "url": "assets/js/34.3e9b4f64.js",
    "revision": "4804208c477d553500951a595ceae448"
  },
  {
    "url": "assets/js/35.8da2e352.js",
    "revision": "69bfbd670990d31d309616c63f00f296"
  },
  {
    "url": "assets/js/36.5c88575d.js",
    "revision": "4c0bb21eb948320a8932e067f7404660"
  },
  {
    "url": "assets/js/37.dbc79900.js",
    "revision": "1f5c4c2066f2138571d5873dd2a871a1"
  },
  {
    "url": "assets/js/38.f9e59ec6.js",
    "revision": "683aca188d2680b56ebcc7a09236a6a7"
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
    "url": "assets/js/40.2e3c2952.js",
    "revision": "7b943d7944cddf198a5b1727713add3f"
  },
  {
    "url": "assets/js/41.1bc88d60.js",
    "revision": "3bf5fbf8885a3839a18f509d914db4d5"
  },
  {
    "url": "assets/js/42.229b4696.js",
    "revision": "0677124a2c3aa9fe37ba3df7d998b075"
  },
  {
    "url": "assets/js/43.62d0e662.js",
    "revision": "86d81a317f7ef9e6b8c613e4d2dd1125"
  },
  {
    "url": "assets/js/44.ddfbb783.js",
    "revision": "ee70cd3bc9487b5e091e2c4c530d70e3"
  },
  {
    "url": "assets/js/45.91990cb8.js",
    "revision": "627a92a6d3c405de8d089227e62a88dc"
  },
  {
    "url": "assets/js/46.996a123b.js",
    "revision": "18bdfc4b53865e5d02f0f45ee41e7134"
  },
  {
    "url": "assets/js/47.d38602bb.js",
    "revision": "f707c976641eebcec3640d531d88c845"
  },
  {
    "url": "assets/js/48.88a31253.js",
    "revision": "0578a13932e4515f49583e8ea5bef02f"
  },
  {
    "url": "assets/js/49.db24844f.js",
    "revision": "b611624cb1191f3ff8e33d21a3238fdf"
  },
  {
    "url": "assets/js/5.83763220.js",
    "revision": "f4cad0f859831c0a9993f88f70fc5445"
  },
  {
    "url": "assets/js/50.e30c38f3.js",
    "revision": "57e340eb6d533f85e1fcde34acf962c7"
  },
  {
    "url": "assets/js/51.4ce71be7.js",
    "revision": "31b372b016e6aa2dceb4b54169802f72"
  },
  {
    "url": "assets/js/52.f82b0167.js",
    "revision": "66518080e876a2d5add18b82c095b6e5"
  },
  {
    "url": "assets/js/53.b4fac43f.js",
    "revision": "9e087149b144504761b873e5bcbfed2b"
  },
  {
    "url": "assets/js/54.0077cd29.js",
    "revision": "5100162046894c7bb68f908eee88e138"
  },
  {
    "url": "assets/js/55.47b24e28.js",
    "revision": "a531632104ba15e1dd34579d3a170dc9"
  },
  {
    "url": "assets/js/56.c22a1646.js",
    "revision": "97bc0f16f4199f4109c406a6801c9039"
  },
  {
    "url": "assets/js/57.018ff364.js",
    "revision": "93b959bd32ae0cfcf186b69e8153aa77"
  },
  {
    "url": "assets/js/58.1b0b0703.js",
    "revision": "62213d1f3131682e19e525cc879b993f"
  },
  {
    "url": "assets/js/59.bff536cd.js",
    "revision": "6dd31da686e24fccea5d2f24bbdecdc7"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.338bdd2a.js",
    "revision": "f85ba3b891dcc15ded7135acae7bf8ba"
  },
  {
    "url": "assets/js/61.8bf8dec0.js",
    "revision": "5c7b9e17cf7c0678c66244b74d6331cc"
  },
  {
    "url": "assets/js/62.0bfeb561.js",
    "revision": "16ed04cafc47d03c3e3a566882b12a33"
  },
  {
    "url": "assets/js/63.8886618a.js",
    "revision": "477af1072422463dbe14f203096df402"
  },
  {
    "url": "assets/js/64.cfce05a4.js",
    "revision": "1cb8ae84f58d6932757a80b34f4f668e"
  },
  {
    "url": "assets/js/65.ef38448f.js",
    "revision": "4838f4514b85c2929eca91f8605d407f"
  },
  {
    "url": "assets/js/66.d9537b15.js",
    "revision": "66a9e16d6e7346db38a88d041fb8cef2"
  },
  {
    "url": "assets/js/67.4f27296f.js",
    "revision": "c772ea2ff92b6a87d32d0e0667568a47"
  },
  {
    "url": "assets/js/68.dac81138.js",
    "revision": "35101bfc527b270802c02c2bf68ef9e6"
  },
  {
    "url": "assets/js/69.772dc336.js",
    "revision": "ebace2b5241f1197e15226a051a6c012"
  },
  {
    "url": "assets/js/7.9e4ea5ee.js",
    "revision": "ad9ed09e840b391e9ca40e1ca68b1566"
  },
  {
    "url": "assets/js/70.f5aa5c88.js",
    "revision": "6df238ebb46698e0f2fc237189b8187e"
  },
  {
    "url": "assets/js/71.8fd7100e.js",
    "revision": "dfb09ba92e10ec01d47902939d34e789"
  },
  {
    "url": "assets/js/72.e4f46b70.js",
    "revision": "27859a48af9a997b757628efa8c5930a"
  },
  {
    "url": "assets/js/73.ede324eb.js",
    "revision": "e4ebfe4750f17e85f23613fda64efaf7"
  },
  {
    "url": "assets/js/74.b4f0c950.js",
    "revision": "1fcc7c1a53a1e18291b39c522cd35080"
  },
  {
    "url": "assets/js/75.68769eb3.js",
    "revision": "36a8957ea03bbec936f67d49e825e5c1"
  },
  {
    "url": "assets/js/76.5ae7b316.js",
    "revision": "482b75624b28517a2d4a842fb886848d"
  },
  {
    "url": "assets/js/77.c6b81a1a.js",
    "revision": "bc6889add104bc18e043bb69da05498b"
  },
  {
    "url": "assets/js/78.97b5c355.js",
    "revision": "bc72a44c5a5c87e93935922bc5d042bf"
  },
  {
    "url": "assets/js/79.30422868.js",
    "revision": "346ecad69d1ecf47bb3c0d92db51e9ec"
  },
  {
    "url": "assets/js/8.63a3e937.js",
    "revision": "b7c440207e9f4efb8ef7fd69dc968475"
  },
  {
    "url": "assets/js/80.6d9867c3.js",
    "revision": "3568cce9fe6519985029aea5c1fe1f99"
  },
  {
    "url": "assets/js/81.5e522eaf.js",
    "revision": "7d7100b71816d710a2dd5fce9134c0e7"
  },
  {
    "url": "assets/js/82.9301dbc1.js",
    "revision": "24c9e618b57df2f419f896a31ed16191"
  },
  {
    "url": "assets/js/83.f382ba96.js",
    "revision": "eae7c8d3a5a2891e91e15786fedd350d"
  },
  {
    "url": "assets/js/84.eaaa18a0.js",
    "revision": "4c3a7192408a706fb04f44ce33453802"
  },
  {
    "url": "assets/js/85.adf73eee.js",
    "revision": "5824ce3effaa87e79bd03c6de4f1670f"
  },
  {
    "url": "assets/js/86.c61db818.js",
    "revision": "634af4f59060990f88bce46e24046366"
  },
  {
    "url": "assets/js/87.e9608a50.js",
    "revision": "8d7f1033dc525a97978a22f9a5a0a922"
  },
  {
    "url": "assets/js/88.b9903997.js",
    "revision": "daebd6c7c45fcaacd505ccdfc790c477"
  },
  {
    "url": "assets/js/89.8eb7afe6.js",
    "revision": "eea0c83d2f2d46de758148edfa6e53a5"
  },
  {
    "url": "assets/js/9.cf11d5de.js",
    "revision": "951168c67be12db1c6f70d998bf113fd"
  },
  {
    "url": "assets/js/90.b1e473bb.js",
    "revision": "1f7bbf17af82269ed35cc70f5be47cd5"
  },
  {
    "url": "assets/js/91.040493ee.js",
    "revision": "91432098e5d749d1c3a11f33a08a084d"
  },
  {
    "url": "assets/js/92.9834ff0c.js",
    "revision": "887471c71da87cdf7818874b4b2d4a4a"
  },
  {
    "url": "assets/js/93.3eadcec3.js",
    "revision": "51b62552e25b9a38bf582243c99029bf"
  },
  {
    "url": "assets/js/94.3f28a154.js",
    "revision": "7b7c78e3967ddb1fbb3ee3d2bb8ff2eb"
  },
  {
    "url": "assets/js/95.47597d68.js",
    "revision": "a2e1594843f0afc7ac2cfc00d6e68f07"
  },
  {
    "url": "assets/js/96.530fd2f8.js",
    "revision": "e35888a0d8e35b552af4f6ccda5ee669"
  },
  {
    "url": "assets/js/97.f0b67fba.js",
    "revision": "214535c3c902a0bfe3b5c8e37f45c45e"
  },
  {
    "url": "assets/js/98.f2b86b8d.js",
    "revision": "6be2999b950ce8c6e1af5132c2bb80a4"
  },
  {
    "url": "assets/js/99.bbf71920.js",
    "revision": "7c6f7e02b139b8b72e6f7972a7c82dc9"
  },
  {
    "url": "assets/js/app.bcc81a90.js",
    "revision": "981ed28299744447e4f7b7c21d2d0586"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "b3ee3ee791f16768718929bdb480b800"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "c452a712c78436ebd7ee9ac133dcd8e7"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "466dc78a41c2d0896afebb31e568304a"
  },
  {
    "url": "tutorial/index.html",
    "revision": "60bd81b7d2bc50ac6a0cfd999a4cc180"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "f5458d31044094ee2c4306bb318fb615"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "b2e521734c25f07eb9b54e9a128fd936"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "cdb7df50e260f1df202626d8a1492364"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "3f07f59c61da20f1d66d4a3e6051179c"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "de00dc88e0253977ef37ece504f2b9b0"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "5aa1349aef6555c2933211d48470cbbd"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "1062e66968f5de763a11baed1dd58e7b"
  },
  {
    "url": "zh/api/index.html",
    "revision": "510afd1c2ed9fd3da0f23561a130db86"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "d27d75d0a9ad90299ef157ec7b10e2dc"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "75e011ebaf30fc590dd974e89bfaeb77"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "2a4548bf80b6b44538420743a79ef79d"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "379388f8f7d04dceea20248f9dfc21e6"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "a4d2d5b5f8ff9e06dd08cc96eadb80e1"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "2b965066c51ba8dba8cabfa9787f244c"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "d0ab715e328dfe1ba8f76f52c2628d48"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "e6e44778a1729ed9a5b54a97f8cc5232"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "70e08990f85297a2ef2d73ef1ce0485a"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "47aafe4914520c23e435aa932aef69c4"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "97890616dc9f15409f1bee0fb0fc3061"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "614a0e9fa537c9002ca408afd9d66657"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "e9bf2a8f092d9b119d51577fb42d80df"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "4057f5d2c5f87b849a875aeaa2e2cf36"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "aa022fb206434963cf61f92f875bae7c"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "bc2dee605ded7124bf87b8bc036776c5"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "6f6b1e328de8af49b39c8e4bc18e84d7"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "529669024532f8dc1ea60194365da885"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "e039692199795c39df0e2453f1627c55"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "a5c2e7dad66c17dec6dfa0855c169d7c"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "27e19a4184198ecb0fa372cea3633941"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "25128a0ba1f6d491f606b6b2c3d9a986"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "7840ce58cd1f280ec2f07c4ef3096055"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "2d982dc969fd04ea3325c0d90c3c8cab"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "95f7ce6b75db3feed5efeb25942da422"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "2edc5a7a2d8ea5ee53a8615c8b630424"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "f24e3f6ecc86844a514e1e456fb41f69"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "17088ee6fd484c9a1f16d089ae93938a"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "2dcd58d4aebad11a8b476b4d79bdc0ec"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "583d4ab55e6a47524eb2389407a4cc76"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "325921176ae8297423f0f991b1386135"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "4e05d879f7476d24795491e58ed4b776"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "34943ade6edab2303bcf1bcd06b65d86"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "a22c1a137fbf2632316211ecc9ca6afe"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "fd579111c3b3fe639b000e19300726d7"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "79865c4860a0c95ed7647de33ddfd1fb"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "8e968bbb94eb30ac48aa2e1d3759d4aa"
  },
  {
    "url": "zh/index.html",
    "revision": "61dee9c32cbcf44ddff80e88df2c9c79"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "87f7b41a63369f2a90725a7eea7d533b"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "372a2d7b4dfbf8006967ffaff2333f29"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "d523d6d162176e7352fbb4764e9f603e"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "063199e2d7ffebff79f376e015252fde"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "d816b374fb74b97363aa848300946650"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "2f1ce66694ef16c5b43efb08693c397c"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "660a70b8919d7578de58efa0fafc452c"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "988e2dfbc51513718b337ff62bdfd284"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "b4d887223732c758ca6d24ddbeb8b32e"
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
