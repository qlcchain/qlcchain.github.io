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
    "revision": "344428e6b8ec476e4e38c5f247a432a5"
  },
  {
    "url": "api/index.html",
    "revision": "b3a4c3c5235951fa26a9119fe1737c2a"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "42749530c17a98c0767dd570252e8544"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "0731dcd124d20be7e19281c0d640ba80"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "4ed6836e4838cb780944a38f83213878"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "babdc6c34c20887446df23185c8e74d8"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "625a5cbbbb2b3892fff41cd7bdc0bdb8"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "97b1a390fd1131d5219a26eb1ec89605"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "3a1effe783809ac36fd39377df3e8ddd"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "dba46fbaa3edc166f933af964b2c48c9"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "cdbbef8b467a42ed6d2bc8ac74f8db62"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "04ce9c4a3a68855239eaaccf55a09de6"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "e060801eb1ab881c9cd717d2c22a0f4e"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "5edcccca81d7903c7e78c74fac4eb864"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "b42f94e62e35355c693939bea2af58be"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "8ed35bc9fdd1965b2e8259da456da467"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "c0cba08b0bde58dc5928af6114bb1f44"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "a119fd0f9a84cfc28bfed1f7db8ec264"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "e1e46db722cfbd5423018f86fe8436e2"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "02265bc15c12b6410d75b77fca716e69"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "38c38a37f92355fb0cc41ad2858b1760"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "cef814744cbfae667c0b7f8efeadd6df"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "19211f6eeb060ad121d46a9b2a4c92ba"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "ccab12da1e1f293e5735bb43d7dea082"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "5bc06f257467ef36f77a66a870019c40"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "69cf89267e3fdc2103363c3f3fa2bec5"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "aa2cd18b09566afa54e6ccff5162e744"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "109ba8e0cdb3b5a428076180886dcc7e"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "0af916682bba8758a5f4b2076745925c"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "cbc9dceb44218c5e2ed780c2ca80c7b9"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "81a155cd0352b311e75b59c8a1afa9a6"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "6d47d04fed3c59a59e304d4cfb8b3a0f"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "b52830a213397de79f1601b672f46ac0"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "5afbc999f85f8dd77457369170917052"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "11a570f844b9dc307c737671b212cc97"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "5d628d9d496a46ace99f705579e07a61"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "4ecab5cd666d805b63139aea2774f3c2"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "3467c88d34256ea04d7671b91363dd3e"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "330eea751c70c17d564457072fa5b0f7"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "cc2ad9885543eaa317ad60d43041e916"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "297e7f902e604ba86ce5f968302844df"
  },
  {
    "url": "assets/css/0.styles.0f1ece03.css",
    "revision": "ab9df29060a47b4d4fce3456c828f5f1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5b62d918.js",
    "revision": "26903ae9e22faf639e40c070ddd06336"
  },
  {
    "url": "assets/js/100.8a18412f.js",
    "revision": "6a27eb4940e9a8879e8f12293dcdd18b"
  },
  {
    "url": "assets/js/101.ab0fab07.js",
    "revision": "b39286f9145b8d4fa5f57630c1ebf114"
  },
  {
    "url": "assets/js/102.32398594.js",
    "revision": "a566779fa63674b2d5371c88c8717efd"
  },
  {
    "url": "assets/js/103.e6cad2a5.js",
    "revision": "05a093d50a21da2f395520ec82fb3431"
  },
  {
    "url": "assets/js/104.92004606.js",
    "revision": "66e892217c6bd5c0903c770b89990662"
  },
  {
    "url": "assets/js/105.a2f41d9b.js",
    "revision": "0aa9efef370a683f256b3ef6c4380c8c"
  },
  {
    "url": "assets/js/106.b03ee55f.js",
    "revision": "f0412508656bd10819f87fa9fad8a11d"
  },
  {
    "url": "assets/js/107.cdeab0c4.js",
    "revision": "791e746d38a8d02e37a1bff60c3488e6"
  },
  {
    "url": "assets/js/11.162ccd4a.js",
    "revision": "a17d7257cd5071bd1443181adb610ef3"
  },
  {
    "url": "assets/js/12.6621f1e3.js",
    "revision": "96b1a49183396cff899dcc6e547370b9"
  },
  {
    "url": "assets/js/13.e468accf.js",
    "revision": "9fc306b35c0937611155260a4f613afd"
  },
  {
    "url": "assets/js/14.85068bf3.js",
    "revision": "5db341126e3dea7c725204c052290b95"
  },
  {
    "url": "assets/js/15.08df6b16.js",
    "revision": "b67ec2c6592a4126f8d699660a5ae1a0"
  },
  {
    "url": "assets/js/16.7af56f28.js",
    "revision": "8196dbf92fa02045409d2a11e4eaa72a"
  },
  {
    "url": "assets/js/17.a083850d.js",
    "revision": "eb6f9fd64bda9bc4e87b400efaa92db6"
  },
  {
    "url": "assets/js/18.7b2ee525.js",
    "revision": "6bc57f0ecfcbeedfa85f43924772c899"
  },
  {
    "url": "assets/js/19.1680293b.js",
    "revision": "68279109a39a1bb37efa6896777ead9d"
  },
  {
    "url": "assets/js/20.1cbf1b9f.js",
    "revision": "39bc668ebe467e4d3f76edf302031888"
  },
  {
    "url": "assets/js/21.dd812182.js",
    "revision": "1e527b739eec3545fd60850ddda955aa"
  },
  {
    "url": "assets/js/22.0dda0551.js",
    "revision": "46106178831274fb0fcfc27462019b12"
  },
  {
    "url": "assets/js/23.215fc894.js",
    "revision": "61d220141a4e06f5e8256287abe6b2df"
  },
  {
    "url": "assets/js/24.8d240f72.js",
    "revision": "645b103c5363ec4809e69b9ebff99552"
  },
  {
    "url": "assets/js/25.176b6741.js",
    "revision": "c1ccfe4013735b5aba0f04e0348c7927"
  },
  {
    "url": "assets/js/26.08ea7da1.js",
    "revision": "d83d4a2248b983d57973da438dbf51f6"
  },
  {
    "url": "assets/js/27.6c704522.js",
    "revision": "f7d4659a4aafc882667fa35f008772c6"
  },
  {
    "url": "assets/js/28.fae0b1fc.js",
    "revision": "6b5fedde830b54c899a8ecaf43aeb643"
  },
  {
    "url": "assets/js/29.93602908.js",
    "revision": "1ea687a2dd6b9f29f8a6ec302d91acd9"
  },
  {
    "url": "assets/js/3.f64eb08b.js",
    "revision": "9140700df52da06ac3e4048d7b1d52f9"
  },
  {
    "url": "assets/js/30.9c163f4d.js",
    "revision": "780998f0a2910be834266f86c043c334"
  },
  {
    "url": "assets/js/31.10fdd8ed.js",
    "revision": "aac0f234ad56257fc4a12b1d151bec88"
  },
  {
    "url": "assets/js/32.f5d2d4cb.js",
    "revision": "4c542a420b52d11f790fde6361c8d872"
  },
  {
    "url": "assets/js/33.ccb6247b.js",
    "revision": "fc3eea3bafa5ccb4bbbd455760b89180"
  },
  {
    "url": "assets/js/34.e9c4c9cd.js",
    "revision": "ce53b5292b76a331e8997861a3c76a09"
  },
  {
    "url": "assets/js/35.e5a6b229.js",
    "revision": "9f6c5882bdeae17627246e699ed2fada"
  },
  {
    "url": "assets/js/36.831136ec.js",
    "revision": "3fb0e0b1f4364e06ab17ee80ab43cb45"
  },
  {
    "url": "assets/js/37.29ae0251.js",
    "revision": "a0645b27e8601b90f432d4f9ac40cc12"
  },
  {
    "url": "assets/js/38.8b105dfe.js",
    "revision": "30f3f3d71738d7aea9436a28b33d1010"
  },
  {
    "url": "assets/js/39.3a46a03c.js",
    "revision": "ff9d54845edcb75da77ae5d894fd0d18"
  },
  {
    "url": "assets/js/4.0f5a5684.js",
    "revision": "902805f72e975cba435671cb57d2a366"
  },
  {
    "url": "assets/js/40.e141f6d8.js",
    "revision": "1c36f9fd68a93e684aef50bb9b1e4496"
  },
  {
    "url": "assets/js/41.a309bad7.js",
    "revision": "3dd8b2f7b632d00ff239a6bc7a552034"
  },
  {
    "url": "assets/js/42.6d780fd3.js",
    "revision": "2f17c86b9822f8a4b8bba9da7fe31e91"
  },
  {
    "url": "assets/js/43.2604f0e4.js",
    "revision": "e0b2dde9361c5b95eb45dae9c385f343"
  },
  {
    "url": "assets/js/44.3b861b38.js",
    "revision": "ec15d75a8ae704a8da7177b5f29627f7"
  },
  {
    "url": "assets/js/45.3d5bfe6e.js",
    "revision": "5c194ffee7f1836817591737162dc180"
  },
  {
    "url": "assets/js/46.c57d20fe.js",
    "revision": "b94a0160b41a069ee64371e3b4f61992"
  },
  {
    "url": "assets/js/47.88a1680a.js",
    "revision": "05b06656db104750999df9b1b5fbaf25"
  },
  {
    "url": "assets/js/48.36e2ba1e.js",
    "revision": "3504ee6997edb122748cc8f2c7206b4e"
  },
  {
    "url": "assets/js/49.2968c030.js",
    "revision": "61f013ce2b7e8ad2b0319f5ec1d77045"
  },
  {
    "url": "assets/js/5.da3ddb90.js",
    "revision": "4247c54cc2d73b1899c0eb17e74bd897"
  },
  {
    "url": "assets/js/50.abc82f65.js",
    "revision": "95c03ff3eae22424c6a19f79ec8071f4"
  },
  {
    "url": "assets/js/51.4ee94b04.js",
    "revision": "3ae8a2de84ff6a1d2a119460be7dab1e"
  },
  {
    "url": "assets/js/52.4727166a.js",
    "revision": "49bbd8d1e3fd31368d79e7d77ac108f8"
  },
  {
    "url": "assets/js/53.44cbcece.js",
    "revision": "3feb4242d551ae820660641fcf46604d"
  },
  {
    "url": "assets/js/54.4826353d.js",
    "revision": "c3aec3c19422e84fbee15d3929b7725d"
  },
  {
    "url": "assets/js/55.8e551301.js",
    "revision": "792ae574038608af15fc1d6642d259c0"
  },
  {
    "url": "assets/js/56.3df6853b.js",
    "revision": "73a00c8f0861198ab48efbd1fb49959f"
  },
  {
    "url": "assets/js/57.be2c0ff9.js",
    "revision": "20b4246bcd10a6ec997d377bffa7bef7"
  },
  {
    "url": "assets/js/58.922e984c.js",
    "revision": "6880fd7577631bf65472297239f72092"
  },
  {
    "url": "assets/js/59.d80564b8.js",
    "revision": "ddf01fc7002b4b15d7fbfc1ce788beb1"
  },
  {
    "url": "assets/js/6.436ca54e.js",
    "revision": "ee3b31640af9ca8a5b8537def946a6c7"
  },
  {
    "url": "assets/js/60.55cde982.js",
    "revision": "08e8cbcf6cac5037462985b328d18c38"
  },
  {
    "url": "assets/js/61.38c1b797.js",
    "revision": "ccb3c142961adf6ea4e9cfcc00dfa6c5"
  },
  {
    "url": "assets/js/62.f5ee7f24.js",
    "revision": "50ac23c114aa1a5f6155daa82b0b85bb"
  },
  {
    "url": "assets/js/63.28007f4d.js",
    "revision": "027414af727d6607a46dec53eb2ee8f1"
  },
  {
    "url": "assets/js/64.ff749853.js",
    "revision": "db6c64d2e5d6256ccc46807f8b39a699"
  },
  {
    "url": "assets/js/65.f5df4896.js",
    "revision": "34ae50d6f53db110431a0d40777d0917"
  },
  {
    "url": "assets/js/66.92795820.js",
    "revision": "511b823434f4a6d7babfb76963c7910b"
  },
  {
    "url": "assets/js/67.c62634d8.js",
    "revision": "b341ef3d621f8c38c2ead22a78f1cbfc"
  },
  {
    "url": "assets/js/68.240fbfa7.js",
    "revision": "fd9c9ccce00dfb063f7436dc9c328bc3"
  },
  {
    "url": "assets/js/69.a0468c67.js",
    "revision": "ba8955d15a5279ea03b1556a861e440a"
  },
  {
    "url": "assets/js/7.e64faed1.js",
    "revision": "b74b6973761bdbf36650ad47c1ff34fa"
  },
  {
    "url": "assets/js/70.5bca232f.js",
    "revision": "c636abfb6aaa3eac2c40b2987e309767"
  },
  {
    "url": "assets/js/71.22df7cb9.js",
    "revision": "4dcc6f3fbbc68a4cdb88ed0e2f666274"
  },
  {
    "url": "assets/js/72.5ec1a3c8.js",
    "revision": "0ebd1ce184c734c5e11e192aa3763025"
  },
  {
    "url": "assets/js/73.a69b1119.js",
    "revision": "466fc940899194d96d63f961bf03cd25"
  },
  {
    "url": "assets/js/74.b5f2cebe.js",
    "revision": "4ad93af816e9fdaf50e829b0a95a3909"
  },
  {
    "url": "assets/js/75.b2dd0d19.js",
    "revision": "607ce4d4b45941e0c57b5d656c28a38f"
  },
  {
    "url": "assets/js/76.38c60ce2.js",
    "revision": "20df82e373d77f7ba5676202023e630d"
  },
  {
    "url": "assets/js/77.608b89be.js",
    "revision": "169c41b26d8a2adfb47a6ccf06952ab7"
  },
  {
    "url": "assets/js/78.87fd2f2c.js",
    "revision": "54cc6488e12cc5b770e84fcc4ee80160"
  },
  {
    "url": "assets/js/79.ba4dd786.js",
    "revision": "4c43ad2410599d6ae4aef3d02643d413"
  },
  {
    "url": "assets/js/8.ea69e0a3.js",
    "revision": "333adccac60f23ecc458c76ebec281a4"
  },
  {
    "url": "assets/js/80.9f66f50b.js",
    "revision": "b4c4c67ef2a7dad734f73805e5383d9e"
  },
  {
    "url": "assets/js/81.9e8723de.js",
    "revision": "6192aac86a00c2fb1fc1c8732f84b360"
  },
  {
    "url": "assets/js/82.53227867.js",
    "revision": "37e64cc636673896621a998362eb76b7"
  },
  {
    "url": "assets/js/83.757ac84c.js",
    "revision": "8a48a389722892bbbd8975f518dadff2"
  },
  {
    "url": "assets/js/84.11708cc4.js",
    "revision": "080273072b4a6b925404ee627aa7075c"
  },
  {
    "url": "assets/js/85.7869583f.js",
    "revision": "6c83335f3fb160518367f6a120f48db0"
  },
  {
    "url": "assets/js/86.495e0b95.js",
    "revision": "4cb44b48dcfdb0fb63932d7897d70005"
  },
  {
    "url": "assets/js/87.5d46405a.js",
    "revision": "057c90e9704e7f7815c9a4d6a159d05f"
  },
  {
    "url": "assets/js/88.a5db8c51.js",
    "revision": "c7e316e103c5b434b112b0232c84c737"
  },
  {
    "url": "assets/js/89.78c8e851.js",
    "revision": "1c3d991daa25b075b7cabc0c8fbea8a3"
  },
  {
    "url": "assets/js/9.12e3b453.js",
    "revision": "3ae7a51003a699baeb12e51ac6b24526"
  },
  {
    "url": "assets/js/90.1d2ccbf6.js",
    "revision": "42165025a5177becd0fae0c6b1b18898"
  },
  {
    "url": "assets/js/91.622730d9.js",
    "revision": "11a095a2efc03539835b4d9e68f04757"
  },
  {
    "url": "assets/js/92.b291530c.js",
    "revision": "e16d72bb7f0c333041b4fd8bcb20a171"
  },
  {
    "url": "assets/js/93.f4765f57.js",
    "revision": "ed8d84119c75b04b54e499bbd57020a7"
  },
  {
    "url": "assets/js/94.364d3ebf.js",
    "revision": "13ec330194c83c6c923cf97db59fee39"
  },
  {
    "url": "assets/js/95.a40abcfb.js",
    "revision": "de76d0fdeb714cb92916216350ab9ce2"
  },
  {
    "url": "assets/js/96.e1fb33e0.js",
    "revision": "52f62e7ba29bb87e5bca5fd139ab8bbb"
  },
  {
    "url": "assets/js/97.aeeddde1.js",
    "revision": "a7af4c30841b34c02bd73f2aac1bb9c9"
  },
  {
    "url": "assets/js/98.a8958794.js",
    "revision": "ecefaf00013e5aaff91dbe3958f5d4dc"
  },
  {
    "url": "assets/js/99.853df67a.js",
    "revision": "97ced6ceca805c82d75007ddfcf4faba"
  },
  {
    "url": "assets/js/app.cef4a228.js",
    "revision": "0608c4f17d591cd89df33ce019658ed8"
  },
  {
    "url": "assets/js/vendors~notification.74977d0f.js",
    "revision": "3efcf7f1a484d5540ec6ca2e63edde3e"
  },
  {
    "url": "i18n/index.html",
    "revision": "8e3b52334315fbed553262547e9ea46b"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "d08d2b119c2745a5e0d07a6c6e3622dd"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "9f0802e055184daef3795a7087b76393"
  },
  {
    "url": "tutorial/index.html",
    "revision": "2f4606e297826a01982252f3e4045b7b"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "5f0e796a17d19eba367c9629b0e87942"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "6a8f5bdd243dd64199b54b2638ca70d2"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "883450e353ec563031758f669f70a326"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "5f632bd3dbacb9d433a9ea95f6a41097"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "86a1d2eeb595641645eb1150fda6d5a0"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "21f73e2aea86d901b71cc177365a625b"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "01a35082dcbde42a1cf51b00040b3dd0"
  },
  {
    "url": "zh/api/index.html",
    "revision": "f8308d85b0bb6764b294ef3806491baa"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "54e095249a7f4012913057a3847328c8"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "3d7132d923ff8a7620e2191f65041335"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "481bbce083af67f7e07b2a6f7e34986c"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "60483fce336f2c1fa79ccb6327ada918"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "ad5a3dfafea11e0cdc8fcdc02346dd49"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "eae8a94141345fa1a19d60282f8b46a2"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "ac391f03c1edf000a3eb388a3ab08a18"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "bddc6112a80faab950bb3cfdd9247d2d"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "9ae13118f6b90086e8be459e492cfeb5"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "e9706ff96d157cce18d8370bf04734d4"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "a8fafb6b5dae18ce0540ef57f47a6001"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "49a9f979c7c45f438c9967c07d0a0092"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "2ac650bc9f082626812619017af35262"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "ce69ac66ff4fc004235f9d63e7c0c96d"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "3726b39ca289fefe3878ec32efb8d0b4"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "add985cfccd8b8ce08be81d0179853f0"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "3a9bf5649a7aa4a494ce0d3a1b00cd4c"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "e899c10270d66bbeda9967fc585e720b"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "666eb93216ef93e6786348d2f83b054f"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "678cb57ef50277f6fd7a48837362a691"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "8fd88eda172fe780ec4a0ca72e8f49b8"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "6e5460abfe9c543c602e730a494e6420"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "d1af1d58de1a4e7642b10b44f4113871"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "cbada54b3d0463aee8045ed5ece1f843"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "2bb4168ca2cd489c2094a532e2f28e1a"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "e1bf46fbd24576f982e1d8013aeb97da"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "5f83e41ece6cc025a1e11dc94d88ae41"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "350e01843a5ae94e3098fac6d55086a4"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "3bf9722f442a6b615135bff4bf037f17"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "703dac7cf6733eb11fd3be9ef67e18c9"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "af446e060afd1236851cceafd2179667"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "7739a25397e0fca97a3f11f2e1fc51df"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "9b913ffc8c6a33370b70b8b2d88d6515"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "6deb6c5c731949742b60c3ef1871cd5b"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "cf9aef1080bd582d7a6ec744069df9ce"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "a78bcfd6d90fd6616783017d336ed5d9"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "5577651a7aa0e7d211f83a34d2473a74"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "d7b7451b9beae0df11f91266841be7da"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "4ec79289c7cd64637214611441afc9ef"
  },
  {
    "url": "zh/index.html",
    "revision": "b0a69424e433b9c04eb84a328f19ab42"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "e3117da596e3866b0b7aa80a79afa4fa"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "495e49763d7e2445127453aeaa78e720"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "d0563f0d3ad76b1f34c03e989f5735e6"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "9ced74d9335bdc524765d9bc133e9b0e"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "b322d43e7204d3732d308e2b7beb28df"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "ae2c39e5a69a01df74ce01e5430a9ca8"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "27d6ff7d4a4ec9e4ce83fe3684be9191"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "3c2556dc5af4e9ed9f660720139b2a4b"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "6adbe73af276edff2debdae99bfe896d"
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
