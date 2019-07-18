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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d32b77e9d1cdfe27651c1d88ee78e392"
  },
  {
    "url": "api/index.html",
    "revision": "95767e00e9393128936021b0c71ab937"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "254126efdeec3dc55b65f7e4711029eb"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "92869cd84b03e4a44a3d8fce791e3bbb"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "be28492b633e8eb44687e2c8d7a8d437"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "878440ee9033f00cc1b11d45e8c645f0"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "367ef2b2fbebaae05f55ab746f28ea24"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "374747b37d9c6dd3772d3b1061999af7"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "5f84dc0610955e1a8a05ba871416f551"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "01f95137e417166e07e97bcb1280ad76"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "ffba3796ef5b4403e632b7567da3b470"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "8e55587c4aaeccacc4e5fba4abac7d3b"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "5dc1c5e88acc863606923a51222ed142"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "aa35e67b83691a26425e3e591251c2b4"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "a25a50ff9fa09824c178fab9fba2c656"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "0aaaf6207142c2f727c899cf227d49f9"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "b9f32e01e03d32ec11eda9c08e17d794"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "2b0224ba0c0affcda47607db20f0f240"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "083b0134645e7c7d44e63605049b1aa3"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "ec3e2cb18c2f72b917414a148c33e169"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "db107453775a3c722c78fe905aef8d4d"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "00d82a44c7a2dc7913ce221aba534f53"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "d37eeb19875289490dcaccf30ca6c7bc"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "e79c2d94229cba584f0dced819f9d34d"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "664a9e8429e655d360e8b12e8471f915"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "36d22cb6b586fcb92dff56ce27593cfb"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "ed0ad0b87a8fd91ad1655eeb59fc414a"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "b9a0a21432e423683f94f63a4f0e02fc"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "be3b34af83ff16186352cc70d8e13854"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "1b5217df162ffa5709c16b70ce04c551"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "615c7e07a6fc2e034efac976b088c70f"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "9a7226145d9ab54c594eb2db8f41e3f3"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "1d638c5e7d4ef5763c16fbe1cdf817df"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "32f589c1a34f2f6c1c5b4a4170f6f0ed"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "7b28f256af05c125410179b25101df99"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "4eab072ae7896c95e0c9c326a2432066"
  },
  {
    "url": "assets/css/0.styles.f525e787.css",
    "revision": "1bb8115b1821ceffa27d9b0540ca764c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aa0dd973.js",
    "revision": "553be44e2a5589a027c7cb1f79af266f"
  },
  {
    "url": "assets/js/11.3cbfd61e.js",
    "revision": "0a5a70f954a166d33e5be4c32d87ef92"
  },
  {
    "url": "assets/js/12.f0b9266f.js",
    "revision": "3e296a94b027d4f21b907080d7c7a0ba"
  },
  {
    "url": "assets/js/13.48ba3261.js",
    "revision": "60916c513081e862aa4581406d7a48c3"
  },
  {
    "url": "assets/js/14.8d0f9e6d.js",
    "revision": "cd512ed79b8020a75e8bc4988b0ae61f"
  },
  {
    "url": "assets/js/15.873c4511.js",
    "revision": "c0e27a0a2546c307b0bf31eaddc5a78a"
  },
  {
    "url": "assets/js/16.1f1fcb0f.js",
    "revision": "805185475ebadaee8222b03999341a4a"
  },
  {
    "url": "assets/js/17.c4014156.js",
    "revision": "181f3faa15005d374f1ba2d5a838903c"
  },
  {
    "url": "assets/js/18.4a8af8bc.js",
    "revision": "87e3a1d6f49e4e3adc56d9c17ec19bfd"
  },
  {
    "url": "assets/js/19.2bcb3abd.js",
    "revision": "6fb0c99a75483ba42920e522128c637e"
  },
  {
    "url": "assets/js/20.fd3ecf1c.js",
    "revision": "10e276ef3fa8ce22f5b712eb8e9330bd"
  },
  {
    "url": "assets/js/21.6d172e15.js",
    "revision": "603c9414ff28188ed81abe31406ff299"
  },
  {
    "url": "assets/js/22.1a37c891.js",
    "revision": "6c9fb36e80092e50705770605a645917"
  },
  {
    "url": "assets/js/23.807cd3f0.js",
    "revision": "45d878621c32c4138edc72723a096afd"
  },
  {
    "url": "assets/js/24.e15fd646.js",
    "revision": "9ef6652f159c58d552d0e481012f873c"
  },
  {
    "url": "assets/js/25.34883799.js",
    "revision": "53143d7a300e8351e9590a35e7458c98"
  },
  {
    "url": "assets/js/26.841b80ab.js",
    "revision": "a6e67cde7735da767139d7881e5df224"
  },
  {
    "url": "assets/js/27.f85d52f5.js",
    "revision": "e95b2d958504a66ec513f21d64bab73a"
  },
  {
    "url": "assets/js/28.1fd083dc.js",
    "revision": "5c94c1f84d261ad12b3530cefb379a72"
  },
  {
    "url": "assets/js/29.47d2184b.js",
    "revision": "b2aa20112bdeb5c8682a91b80ef28ed7"
  },
  {
    "url": "assets/js/3.cd2c46f1.js",
    "revision": "3b08ac8e42a5b82a1ddfbfbfa6f8b59e"
  },
  {
    "url": "assets/js/30.2ac62ff0.js",
    "revision": "b7fab5543baf3429266935a0813fd90b"
  },
  {
    "url": "assets/js/31.5f55dd38.js",
    "revision": "4782c66326e14a6b65e24ae088b94f11"
  },
  {
    "url": "assets/js/32.b880e429.js",
    "revision": "81c7183900b030048a3322d1469dbc20"
  },
  {
    "url": "assets/js/33.d84e33c1.js",
    "revision": "af56c61feee83f9f1d388ba4fccf4648"
  },
  {
    "url": "assets/js/34.52db7130.js",
    "revision": "bcd2a6619185667e44d4376cc919aebb"
  },
  {
    "url": "assets/js/35.00db1ece.js",
    "revision": "113b341051e3cb3c46a723918d331693"
  },
  {
    "url": "assets/js/36.f8c103c9.js",
    "revision": "ab78d439f23a5b3e87b50bbcdb1a545f"
  },
  {
    "url": "assets/js/37.113aff10.js",
    "revision": "c6dc5768400b07b6b61c9bfc96a639d9"
  },
  {
    "url": "assets/js/38.4f1d1910.js",
    "revision": "649f87456117202cd4154fc169d9fb28"
  },
  {
    "url": "assets/js/39.c179877c.js",
    "revision": "533549cae86d153f9aaf052ff036e056"
  },
  {
    "url": "assets/js/4.51079b00.js",
    "revision": "92fb81f2c1006934d587c3e5106d2aae"
  },
  {
    "url": "assets/js/40.61e49cf5.js",
    "revision": "6244afe7bdd28fc53f3bd9ee2d6b2dcd"
  },
  {
    "url": "assets/js/41.0c3eaa17.js",
    "revision": "6e643e8fedb8ebc60c99f51dd384121e"
  },
  {
    "url": "assets/js/42.e22cbed9.js",
    "revision": "8a39b58358582a2c6b413b21217427ba"
  },
  {
    "url": "assets/js/43.91841ae4.js",
    "revision": "7ea31507fc5a26ae92bcc08122cd1579"
  },
  {
    "url": "assets/js/44.d0ddaaa7.js",
    "revision": "ab98ea1ed0b3109ba2434255ec76455f"
  },
  {
    "url": "assets/js/45.db1819ba.js",
    "revision": "3c79013ab4437849c575887b2cdb4f09"
  },
  {
    "url": "assets/js/46.ee3bddf5.js",
    "revision": "6e6de4b4487042f10e33777ac6be7e7d"
  },
  {
    "url": "assets/js/47.38c6ff8f.js",
    "revision": "306fe93c3450f42f01508b377047e1a0"
  },
  {
    "url": "assets/js/48.7a6d324c.js",
    "revision": "68c65604b4b30d3224c110c393ce3c67"
  },
  {
    "url": "assets/js/49.7cb54a65.js",
    "revision": "8edba4d4af42a67b64044869622e8512"
  },
  {
    "url": "assets/js/5.16bd38b7.js",
    "revision": "875d2cfa4caa73ccafe1b71e47fd8954"
  },
  {
    "url": "assets/js/50.fe8d901c.js",
    "revision": "540711019371a8d0d157867a977d8a59"
  },
  {
    "url": "assets/js/51.d4cbe2ea.js",
    "revision": "b7a1e63c89d23b8e28cb59126aefb520"
  },
  {
    "url": "assets/js/52.da8f03fa.js",
    "revision": "e0b3f98bfbd437eaef77ff60d73f22f5"
  },
  {
    "url": "assets/js/53.33702f6a.js",
    "revision": "364c7058ea9594efbfc18c17f081d02e"
  },
  {
    "url": "assets/js/54.484caa84.js",
    "revision": "f5d888ccf64b9e8da4d58651ac70eb9c"
  },
  {
    "url": "assets/js/55.0322d1ef.js",
    "revision": "813609dd99bbdb54a10f9c7d6e2e38cc"
  },
  {
    "url": "assets/js/56.ed3339c1.js",
    "revision": "219f328d2edb96ecc0d3ca9bd1d0de5e"
  },
  {
    "url": "assets/js/57.044292d7.js",
    "revision": "3a9db6d96264bf7235cd04092da7c7a0"
  },
  {
    "url": "assets/js/58.828f1d1a.js",
    "revision": "2c5b99de4dd3efd943e86225e7fe5eb2"
  },
  {
    "url": "assets/js/59.0a76fa9d.js",
    "revision": "55e72ba553711d306e9617bc9d07c707"
  },
  {
    "url": "assets/js/6.cb21aba5.js",
    "revision": "88bb6450523bca47d6b0692efe8f36c4"
  },
  {
    "url": "assets/js/60.ec05effa.js",
    "revision": "e54f781dcd5652f2b7523b2abc59923a"
  },
  {
    "url": "assets/js/61.496d785d.js",
    "revision": "cb981e5ac74b9323152eb890229510e1"
  },
  {
    "url": "assets/js/62.49258fe4.js",
    "revision": "beabc87e5f48885ad19fbba12da52d49"
  },
  {
    "url": "assets/js/63.11b45931.js",
    "revision": "33c320f44fe429ebe8d0c977cba54451"
  },
  {
    "url": "assets/js/64.cf761242.js",
    "revision": "925d559d69256e9ccf081b38681ee4ae"
  },
  {
    "url": "assets/js/65.1a328b8a.js",
    "revision": "d0f8e9ee010533ce07393d0347227d78"
  },
  {
    "url": "assets/js/66.807fb076.js",
    "revision": "d063202c6777eb9c25350bfa519ddc01"
  },
  {
    "url": "assets/js/67.aac47e2e.js",
    "revision": "c08782330757c6229767326a3b11baee"
  },
  {
    "url": "assets/js/68.70548001.js",
    "revision": "4aadc9424010884a87e37972fe2a3c93"
  },
  {
    "url": "assets/js/69.4ee66287.js",
    "revision": "97a8ec82cdf9b0bd3b1b3f1b5a01cab2"
  },
  {
    "url": "assets/js/7.f39d0277.js",
    "revision": "dcdd739a1b2fc4264a4123a0981123bc"
  },
  {
    "url": "assets/js/70.e01c5c94.js",
    "revision": "b40edc8731e0943c4c6760db09f2f6b6"
  },
  {
    "url": "assets/js/71.9a12f82d.js",
    "revision": "e276f38893c304c795b830830a6eccf7"
  },
  {
    "url": "assets/js/72.5417eb75.js",
    "revision": "495cb718c5cc69faef99734f3a872356"
  },
  {
    "url": "assets/js/73.96b27cdb.js",
    "revision": "ae7dc467d9339a93915dcd5e9329f302"
  },
  {
    "url": "assets/js/74.6ff53d26.js",
    "revision": "aaa22192a581a58260ae210e4fb69434"
  },
  {
    "url": "assets/js/75.c2562415.js",
    "revision": "df877cc75ebb59200f552cf042c68df0"
  },
  {
    "url": "assets/js/76.11730d67.js",
    "revision": "236b84bf691658c6ac9cf5bee1d100a0"
  },
  {
    "url": "assets/js/77.7199a153.js",
    "revision": "2087e89ed1f5184dbf4ff6d639ee0b7a"
  },
  {
    "url": "assets/js/78.f295f4bf.js",
    "revision": "1eb41b29b8e812c3fd9392a71b5b9439"
  },
  {
    "url": "assets/js/79.e5f40e76.js",
    "revision": "5fa02bfdd6f5d362affe37da4fde3095"
  },
  {
    "url": "assets/js/8.1fb6efee.js",
    "revision": "e119325f2cea6a26096392d3ac3d4940"
  },
  {
    "url": "assets/js/80.6653ebfc.js",
    "revision": "cb448910e2765775c9d5d0e157b99b99"
  },
  {
    "url": "assets/js/81.2ecdb3fe.js",
    "revision": "3b8d8ef639c2e3635e49773bbce60c24"
  },
  {
    "url": "assets/js/82.f511de72.js",
    "revision": "d9267faa8b62869cdfceec8e05a2abe6"
  },
  {
    "url": "assets/js/83.79704b49.js",
    "revision": "2117870f2321b3d3d9399284495d32d3"
  },
  {
    "url": "assets/js/84.c993c243.js",
    "revision": "41f9b000b3e6b626580957f5dfcdd236"
  },
  {
    "url": "assets/js/85.292ed416.js",
    "revision": "65ce0e698dd40e0c148faa30d385f51b"
  },
  {
    "url": "assets/js/86.1305443e.js",
    "revision": "7c186893339891bc94abb3465776e1a9"
  },
  {
    "url": "assets/js/87.25b38d24.js",
    "revision": "25f963ca9600b8826262b95a9166b1aa"
  },
  {
    "url": "assets/js/88.26bc8f06.js",
    "revision": "468643823d6bc1c5f31e5ae5fcbfaf98"
  },
  {
    "url": "assets/js/89.5e6a2a76.js",
    "revision": "8258138309147325b654c2886c1ac3a4"
  },
  {
    "url": "assets/js/9.4fe6c956.js",
    "revision": "ac16e7a5f8b9f78718a780d8390b708c"
  },
  {
    "url": "assets/js/90.c714fa53.js",
    "revision": "3d50e2bff34d650f16d37c3cc7f752bd"
  },
  {
    "url": "assets/js/91.e225d499.js",
    "revision": "31559d9e93e08d339bb76a1d3cb3faa3"
  },
  {
    "url": "assets/js/app.1a8c61c6.js",
    "revision": "71150f1a2e8f0b33a7bcb9cbf8ab7ad5"
  },
  {
    "url": "assets/js/vendors~notification.281d1534.js",
    "revision": "f5001273ee61423fb0df7537229bdfad"
  },
  {
    "url": "i18n/index.html",
    "revision": "b5bbb0c70522146f1a833e2ba7eda6e1"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "7e71bf7abc79bb190ebe264f19e38e9b"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "ea296a74f534d27a4dd10985179734ca"
  },
  {
    "url": "tutorial/index.html",
    "revision": "656e45b702b153bcd93f3de81600c99e"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "aaceede938c10e60caeab0d21e5f8559"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "991551c0e9c3cfd6263f89f554bb02a0"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "20762f0c727bb44ae4f44669cbcd8ca8"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "4c102c9732d2ed12e3efb1a41d34a494"
  },
  {
    "url": "zh/api/index.html",
    "revision": "853a530eed40518262c102f4241ed563"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "10d6fb196233f481dfd8bd4b396a8deb"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "3f47543ee591d0057010d44e5bfb8dfc"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "df5c502248a6bd07172089fa30b6610d"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "d26bb7f98fa07690daf7358c14dd76aa"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "c79d849193d7a382991b1bb85b6950ea"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "31ba83c2231e5ffdaac5f147ae3e933f"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "1a4e76aeaef4cdc9d65829fd0e61fb2c"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "1673af394b727cae5152450441190a54"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "17461209fd74e48016dfb3c5d6a0619e"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "39d5d36e65787b43a0d26816691f8f97"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "a1f81dd0f3bf6aa8e5cb0f61d7e06c4c"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "fdca9f584e39b187e46dd2a33c47c7eb"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "1bcb07f461097ff5e25e1377d288b081"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "2f9c2064195b9d2ca2b7652793fc27aa"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "383e40e55870c2ff81481e6b5b208b7a"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "d81971e4a613e51b023d9c7d016d5685"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "9261234d433b09dbd5fb88a6aead58bf"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "93ed162a5cba158d0af6f2804f11dd25"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "655e12f89987e89124ab0892878d1a63"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "65586f32ae69cea1b2180ff4628df4ca"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "aa88f99af3c7bb4fecc33ba597fa113a"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "d160ea02b2e81816d6290c200c9021c1"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "aa8ee737b861fa59da3def1520d50562"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "51092358d46e4d1d7c046b785acb95a2"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "03991c5dd7b51d8c10afd34268c5d411"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "504d9c81c46907703dda24ba5235db76"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "f45ccd8e2952086f0f5b5fb7f935ff80"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "9df1796c35b8a80abd13b6ef265d8959"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "54f040af99cc0ca2e063180bc004f140"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "e6fbb94a4fa375b362ecb0a3c72fdcf5"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "5c17e6bc0f9e54e4e5d09f5f0b0549d3"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "be23e7397f79e3ae1339431248dc87b6"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "d8227c7f686fc8eb9d4e53c710b0b8e5"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "ee88897436bb309504e893c271697147"
  },
  {
    "url": "zh/index.html",
    "revision": "0089281cb2b74ad6fdd05e62dc3cbc5d"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "8054370b135fac7a850cb9c8f5a9d512"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "651951a010b0ff2eca7db3f2f90e1bf6"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "700a7c30f1548b14b0db3ad7379d4a17"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "64d2875315b04def3af80ec6bb296d9a"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "48052b9ed45667a2cb989a4460fa1541"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "df4777deb641bd25c72b1520748ebdbc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
