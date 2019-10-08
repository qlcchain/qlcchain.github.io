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
    "revision": "d8cd6b757f47d76ae4c4444de542eafb"
  },
  {
    "url": "api/index.html",
    "revision": "4ceb6ac3b2965f8798bde36fc9ab2ccd"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "2d316f19c977a5d8202a2355b6f67f9d"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "20a027271043dd27e561b836d22bc37d"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "eb2e39e6384a4d5a95a3d86fa7a6d48b"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "4d6ef7753ca7a4277ecbb878728805da"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "a9db26684da93fb44566a802fda52d48"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "9fa153ea882742716c029fa62f3e139c"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "ae07cd2204e58b55151e16dadc67123c"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "8ebd75761b62b7fc3fae723596aef351"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "ac04d21ea92e19b7df29a72f791b01c5"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "5bf97952e4dee7733a09580780065b0c"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "9c65a711b9a577a40a0e8620e0300983"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "5eeb417446dfc7626ee9ec2f81d705db"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "26eaef0e672e9843c7158c03c25e5f6a"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "5ec57171b36aef9c4499781120bc6680"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "7f59ce8d04565ae90f0b3df8237ea11e"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "f10fab77735c638f65a40b2f930a24ba"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "f27ada5618a5e2bcb7dcb3163cc3bc4b"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "42dc2a5395e868391130d51c538023ec"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "fb54ab8c46e93c92efae16d34d19227a"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "fc280411f8322cdc483223c4b5b6ff2d"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "219b44f91c31e9acd3eae95ea1faf303"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "3eca730c32b384faacddee0563e26f62"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "835770536cd2b60963d8c645d87f8729"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "3ad9787aeeb78f907badb57ce91c336a"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "f69acacb1c9c724930d173331ebb243d"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "32a69a4cf8b6d2c9925f862d80c52a4e"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "fb04d46af650337ab3c58687ca682741"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "fcc575f88140f4592cdd9e6f8f03c135"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "982a727957e7c699d13a5260da09c902"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "aa198742421db1ebdf6aad426f7061f0"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "8e17a186f51dc84640ae2a33e196f361"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "3fefa4ab681e3eba89a55cb540c156b0"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "54c4fcddd31142ba74dbead8f07b8ff3"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "5fe224f5da0d16e97d054378dbb47236"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "2632479802e5738e7e46443de488b8d5"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "e52c62d4436acf02d382108f17e8bb8c"
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
    "url": "assets/js/10.c74a859c.js",
    "revision": "9b61c9cde1c6d932d0a442efbbe38bad"
  },
  {
    "url": "assets/js/100.a48a706e.js",
    "revision": "e13235030d755fd1fd93db66d6c71771"
  },
  {
    "url": "assets/js/101.943f4474.js",
    "revision": "b049c7df57b2787160465bf0bc1ee820"
  },
  {
    "url": "assets/js/11.ca12315c.js",
    "revision": "8fcc61a2dc5a74150be65db308ba5e5a"
  },
  {
    "url": "assets/js/12.edc0482b.js",
    "revision": "bb4a439bd0468326ff916fd1e7fb05c1"
  },
  {
    "url": "assets/js/13.220ceef9.js",
    "revision": "75ce84c2fd81ec77e1b37828094606d9"
  },
  {
    "url": "assets/js/14.9a0199d6.js",
    "revision": "422555c77b498e23364e77ffb045fb0e"
  },
  {
    "url": "assets/js/15.aaa1fd83.js",
    "revision": "f650d2596cbd15bf0045fdf61c4f9b26"
  },
  {
    "url": "assets/js/16.dd35344f.js",
    "revision": "8a1956f14340333f5283baf23b4f8e5a"
  },
  {
    "url": "assets/js/17.0d3d9862.js",
    "revision": "047d1cd1c69bf32edb5f04222104d6bb"
  },
  {
    "url": "assets/js/18.1a06463e.js",
    "revision": "87e3a1d6f49e4e3adc56d9c17ec19bfd"
  },
  {
    "url": "assets/js/19.0cf1268f.js",
    "revision": "5685bc736980e8b8da38e62b9f284a4f"
  },
  {
    "url": "assets/js/20.cf35a497.js",
    "revision": "86ace8be0a422c1788cbca7ad7b8c23b"
  },
  {
    "url": "assets/js/21.5e6a7018.js",
    "revision": "05f63942c0d0806306c43e8d3a063c1a"
  },
  {
    "url": "assets/js/22.9571b45c.js",
    "revision": "6ffca8f86e35b611e98aa6e457528115"
  },
  {
    "url": "assets/js/23.975cad22.js",
    "revision": "9fc592793ccf3f97a2c241b686149405"
  },
  {
    "url": "assets/js/24.4a6b31b8.js",
    "revision": "475fcfce04f13a71a30f38f9d0c5d3f9"
  },
  {
    "url": "assets/js/25.caa79c80.js",
    "revision": "1c1d406daf814629e228f3fe304ae6a6"
  },
  {
    "url": "assets/js/26.1f8d4e23.js",
    "revision": "b2a63236770f42e25c47b8b8ce9b3d4a"
  },
  {
    "url": "assets/js/27.3a306f7e.js",
    "revision": "5d467ef24d2873d1f05015729dc2aa2b"
  },
  {
    "url": "assets/js/28.ccc9c3f3.js",
    "revision": "9a93cea8d9907a6584af3d1e234f377c"
  },
  {
    "url": "assets/js/29.3509f57e.js",
    "revision": "475869c8fb034bae01be24e8a6ad9d9b"
  },
  {
    "url": "assets/js/3.6ed3ce3e.js",
    "revision": "5b74fa33b0c6c00f486a7b54464d482d"
  },
  {
    "url": "assets/js/30.4fbe18b0.js",
    "revision": "f7028f0731a1c19b19c049cdb9e5daac"
  },
  {
    "url": "assets/js/31.399aed5a.js",
    "revision": "9726fb6664f651d4ae621d72697ed956"
  },
  {
    "url": "assets/js/32.89e53ff8.js",
    "revision": "1393484d647b197862651446ef8d975f"
  },
  {
    "url": "assets/js/33.ba285162.js",
    "revision": "a21d19647472f001560f57a9cf678db6"
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
    "url": "assets/js/37.774b4144.js",
    "revision": "71539492aa9cb5049d219ccfc4921e85"
  },
  {
    "url": "assets/js/38.19f0c8fa.js",
    "revision": "27a19b4489f0c9377fdf0a219bcfd9eb"
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
    "url": "assets/js/41.6fe23268.js",
    "revision": "cd9e57eaf04b91c1f00bb2beabec64a3"
  },
  {
    "url": "assets/js/42.f29712f5.js",
    "revision": "eb5e208e0b6c775da1e4067ac16ec997"
  },
  {
    "url": "assets/js/43.cce2ddc5.js",
    "revision": "59a9f21f5a36e7a68e1079befb5bbba1"
  },
  {
    "url": "assets/js/44.861a8590.js",
    "revision": "ff4d5d1f16039427e51937fcf5af2dd4"
  },
  {
    "url": "assets/js/45.d8821a26.js",
    "revision": "59e0a0ed4afd71187715046504c31587"
  },
  {
    "url": "assets/js/46.219f578e.js",
    "revision": "2398483b690697f4dcc7520269fd0ac2"
  },
  {
    "url": "assets/js/47.247e3a2b.js",
    "revision": "d1cd13414f13370dfd8ab9904229c136"
  },
  {
    "url": "assets/js/48.c44c774a.js",
    "revision": "bfaf283c05ffc08e91a3cadf371126c2"
  },
  {
    "url": "assets/js/49.bc9b778d.js",
    "revision": "6807167c322bebe6868a563dfbc1c3d7"
  },
  {
    "url": "assets/js/5.83763220.js",
    "revision": "f4cad0f859831c0a9993f88f70fc5445"
  },
  {
    "url": "assets/js/50.4dda0525.js",
    "revision": "10f433cb2464c203803da2462d5445a8"
  },
  {
    "url": "assets/js/51.3a279111.js",
    "revision": "af8ba6cb72a20d6235c745f858ab64df"
  },
  {
    "url": "assets/js/52.774c467f.js",
    "revision": "efc0c7f77410b7c0bed3f4f025a30925"
  },
  {
    "url": "assets/js/53.c4b9ec03.js",
    "revision": "cda9faa4da95bac45f2879454efbef33"
  },
  {
    "url": "assets/js/54.3d781a75.js",
    "revision": "08eedb4c1f1c51301286e5600e58e486"
  },
  {
    "url": "assets/js/55.4ec52b9c.js",
    "revision": "5b640c61cd79d27cac179172006be844"
  },
  {
    "url": "assets/js/56.63397c22.js",
    "revision": "c7b45dd82c644102a5633156d31fb58a"
  },
  {
    "url": "assets/js/57.559f9694.js",
    "revision": "712952f1c2601f9b3a0dc06717c3a1f6"
  },
  {
    "url": "assets/js/58.4b213c45.js",
    "revision": "ba77fd30c814ba5ebac07eb054bbd6a8"
  },
  {
    "url": "assets/js/59.82a94c6d.js",
    "revision": "6a609c195a42b40f6beccda97eae5443"
  },
  {
    "url": "assets/js/6.f299df1b.js",
    "revision": "e77117f8b3159d2f19310f81232c8b87"
  },
  {
    "url": "assets/js/60.8ee7c027.js",
    "revision": "d7f8bb86badeb2377c4a7b039e1b9a85"
  },
  {
    "url": "assets/js/61.60b89968.js",
    "revision": "fac1a8651a8e7b41cc6ff71ed996fe7e"
  },
  {
    "url": "assets/js/62.e68f902f.js",
    "revision": "3409def35f7b3e982dc84517b9d3b5fa"
  },
  {
    "url": "assets/js/63.fd7108c1.js",
    "revision": "547a9ddeb77874c2d8661b683af68cbe"
  },
  {
    "url": "assets/js/64.723394ba.js",
    "revision": "3c6606d524bdc177f75e8bfe395472c4"
  },
  {
    "url": "assets/js/65.c82194d3.js",
    "revision": "1f8a25a946f0fe2586687264d303ba42"
  },
  {
    "url": "assets/js/66.2c78e57d.js",
    "revision": "78fd686ebf1f610e2ea959cc8ccf3661"
  },
  {
    "url": "assets/js/67.b161824b.js",
    "revision": "d79998a0b9175224e092f954c41246d5"
  },
  {
    "url": "assets/js/68.142aa557.js",
    "revision": "825c98738bab16d76935c1297a4534f6"
  },
  {
    "url": "assets/js/69.5366f521.js",
    "revision": "9ba7801a32bc0e95be4e82402453ac75"
  },
  {
    "url": "assets/js/7.abef3e66.js",
    "revision": "9d2f6854c3be8c9bdddd921e4b975af9"
  },
  {
    "url": "assets/js/70.c72430b5.js",
    "revision": "b8ae7bc619ea7840b15886479325dc2f"
  },
  {
    "url": "assets/js/71.f9054b8a.js",
    "revision": "d4967af487542e1647cf67d012e47bc7"
  },
  {
    "url": "assets/js/72.1df3767c.js",
    "revision": "60325d05c500760f892edc712de3c892"
  },
  {
    "url": "assets/js/73.a23c5774.js",
    "revision": "c535db58694789ed34ce6d9936371a5e"
  },
  {
    "url": "assets/js/74.eb5f3730.js",
    "revision": "1dbbfb4986b9679e213fccafe466bf9b"
  },
  {
    "url": "assets/js/75.3d928b6d.js",
    "revision": "cb88adf84f871e915f60d16dd5136fa9"
  },
  {
    "url": "assets/js/76.e963337e.js",
    "revision": "e6c5bf608825f0199953acb03ce6bbef"
  },
  {
    "url": "assets/js/77.126e786b.js",
    "revision": "b101bf3d0d8d1e43a028cd9d264f8405"
  },
  {
    "url": "assets/js/78.62efaa3e.js",
    "revision": "fb8673cf3dbbf123b4878d921a545c56"
  },
  {
    "url": "assets/js/79.6d09ef58.js",
    "revision": "ae3ba2e877d40fb5565916ebe70ed034"
  },
  {
    "url": "assets/js/8.77ef523d.js",
    "revision": "f91af8d06d66abdea453fa2e7d24367f"
  },
  {
    "url": "assets/js/80.75db605f.js",
    "revision": "26b2f4132e986fd0329aab7621773863"
  },
  {
    "url": "assets/js/81.4c57b1fa.js",
    "revision": "cc59e0625ce190a5c00201bb0deb77e8"
  },
  {
    "url": "assets/js/82.f0466d99.js",
    "revision": "20f42da6894ef401da3638a646482d11"
  },
  {
    "url": "assets/js/83.b2a98973.js",
    "revision": "fdfd12b9d86f705cae11a73e39b229c6"
  },
  {
    "url": "assets/js/84.c8029402.js",
    "revision": "e4b4032e9020272f701e1cc19052731d"
  },
  {
    "url": "assets/js/85.697cadcf.js",
    "revision": "78375833a06332c731ceab6c7295265a"
  },
  {
    "url": "assets/js/86.2973e9b9.js",
    "revision": "846cb3c5838b87aee1c7dd29d7b119b3"
  },
  {
    "url": "assets/js/87.a53eec48.js",
    "revision": "1bd3bfc4931001a8976bd752cf996ea6"
  },
  {
    "url": "assets/js/88.1cd0232d.js",
    "revision": "5e733b7a55db40e95116bb95ca53da94"
  },
  {
    "url": "assets/js/89.8d3cefaa.js",
    "revision": "3dda5a9623424449b81677eef9884165"
  },
  {
    "url": "assets/js/9.a301cb45.js",
    "revision": "7fc8cb69a031003381ab0ea33bd8e9c5"
  },
  {
    "url": "assets/js/90.a7cb673c.js",
    "revision": "80b87821d2a3644f43a80755f24b6de0"
  },
  {
    "url": "assets/js/91.0adf9aff.js",
    "revision": "c61c337aad1624d8580620d175e4c527"
  },
  {
    "url": "assets/js/92.b3b88c3c.js",
    "revision": "217a0a90042ef26f4e770fbca56a4d1d"
  },
  {
    "url": "assets/js/93.3a422c42.js",
    "revision": "8c88c9027040b40c4ca912c461f4b28c"
  },
  {
    "url": "assets/js/94.65d6c939.js",
    "revision": "b5e6fc2e22d73c8fc9756e77a60ce88b"
  },
  {
    "url": "assets/js/95.221cd000.js",
    "revision": "d7f658f087d2310dbec8d21611ce7fd4"
  },
  {
    "url": "assets/js/96.141bfb7c.js",
    "revision": "4a4e4d93f42e88bb59a23769f9e612b6"
  },
  {
    "url": "assets/js/97.67458609.js",
    "revision": "8e57ed7419565ae5d4200a63a9c4710e"
  },
  {
    "url": "assets/js/98.53a2aa64.js",
    "revision": "2f88a0445b39dfc0cee55cb40f4960cd"
  },
  {
    "url": "assets/js/99.c8412aa7.js",
    "revision": "ff73c2378fa5ec0082b63ec2fc29078d"
  },
  {
    "url": "assets/js/app.a7d9c1d4.js",
    "revision": "d2a2c14b84bb8429ca0a44697f355487"
  },
  {
    "url": "assets/js/vendors~notification.fec45785.js",
    "revision": "1ad7827ea8db67bbb83318e454da97dd"
  },
  {
    "url": "i18n/index.html",
    "revision": "ce9c2abe874bc6bb5c03ac5327ca54ee"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "c67a5c16c9e04a14a762a62ccdbceac2"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "159edfc44d7f8b5a5866a21d8bfaf761"
  },
  {
    "url": "tutorial/index.html",
    "revision": "9309913cc624a54b941659ae1f3699e0"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "0fdbf04d86488f9f56aeb498cfba3412"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "a9d80b53da272bf7195b69183858581b"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "79631031839d6ed1e35cd44d224ebd45"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "cac378d0615a1ab823776a2731b2d687"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "f9041361dc73454a15ffe21a33ade545"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "c0b1e70430f9b670b4b6a3da9874c4bb"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "94ce0cb0f034102e58276d454aa8131a"
  },
  {
    "url": "zh/api/index.html",
    "revision": "79d17cdf57a7ca900f305e0ffc257e7b"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "e441cf467e012d6afd8f75485c38c194"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "a0daacffc0d87c4fd525f74d5cc305cb"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "7aac655775d2fd3b41bbccdf40381900"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "b971b13a2242b9316b849da4a5b20426"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "9bc383dd591a065d1a14f8b33ab0c6f4"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "b48cbb2510e32bcf2521cbded4fd109a"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "e6cdcb29018d8615a04c3d786ed053cf"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "2edfb42027042e7f40cc1152f54a8de0"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "aaa527e0fab33fb6250659a39c8503fd"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "1cc223d7a84b7b9f2efb8de19547f319"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "b9af276c3cd5bd4633d27cfc84ec95c9"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "ff7eb952cf620e80bd63afc0329c79aa"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "8ae663b807b0aeaae97d076ec713a428"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "19732c072bfe6482e5117e66a3adff4d"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "752bb359fb03dfeeb6688c605e71b9a0"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "1cfd434a53cc73ad03af483a0f56ca55"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "7d6d525329861d82d8bbaf5d9b540e5e"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "bacb3d6792d668f1f07414a2736d3275"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "76ee33929fcbf49bf226429e94174bab"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "31c276314d0341d2e6ae99772c0ca8a4"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "29f55b49fbdb71dfcdcb1aa10b335a79"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "feeadd637fc21be21c1a79f15d8da62a"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "df4a0ce9774f3c890b10f41f30cb5be7"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "b61ba6b42e52f8eb328bc8cbfc21a67c"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "0dc684ba8ae217fddaf40430a49ff810"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "71000dd4b3d07fcc7afc6ccfd5d77d12"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "dab42c856576a33bb2a6e8d1d130ffd1"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "ba1da671f8f9b4ce3d58a20ae3c6b7f2"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "8250fc3872725b7e06048ee8680a9e30"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "37865664f3cfad63b7f9d0822116b1df"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "89ccfd9306dc85e4fd3d761ecf99d5d2"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "21338788c5ba1335a45ad861e0556dc7"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "d7ea229945a419dfe87ab92b876c2bc2"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "536c0fbb0e8b210bccd98229aec1a5ac"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "87349bbca60ece7516f27a128593d744"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "c509e3f3fe486d5fec78e48536caa683"
  },
  {
    "url": "zh/index.html",
    "revision": "2a8c05844d04568c9b9332add2446b49"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "96f0ec07d25468308c26697f3cb3115d"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "117aef36b6ac61eda5b73a10ada0a820"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "5f327525f254f044efbc2e3e67518e95"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "8f61d2afd7410ccfea16183e10f8b60e"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "8b49c7050ffd7dd4ec938352a061717d"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "2e56f5a614fa6637971f40f04f911133"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "a53e75e406f9859a8eb3ae33e8fd5151"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "652274ab68ca3c05a9ccdf7da85fa33b"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "1bf0f779c33a068d3c51822a60b5a9ee"
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
