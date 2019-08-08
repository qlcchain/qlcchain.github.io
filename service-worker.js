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
    "revision": "c53a4f8e6eaceef6570d16766f8b6851"
  },
  {
    "url": "api/index.html",
    "revision": "1bb7efbf8e693539b325c3c8e26cafac"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "0aed9199a4ad232dd0beb28d2370dcf7"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "bcac045b5e42695e5b7e961adef366f7"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "0371c901d3a187810a964e3a6cbe1abf"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "5a5a4fb0cdee7fe26b76c291e26f209b"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "2119b2d4f9c925f1b4f6c257600f2dee"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "90ad8b5b6a4414c179f17d8e88f9f397"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "f958d4961118017d2979af1d9d7b9bb1"
  },
  {
    "url": "api/qlcgo/sms.html",
    "revision": "62cc42eaf6a5ffd44feb79584286c881"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "4f08c809e68a06094bf27ea9e5dfa0ee"
  },
  {
    "url": "api/qlcgo/wallet.html",
    "revision": "154b5b6672cc3fb601aaa7b856f8dfe8"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "df8ff4fb7820a81e563793a7fb1bd5a1"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "50e05ca13a348032662b035f13d5825e"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "71073ca3e0c8b980bed9ae40c114ba78"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "f122d6cfc8d3e65b23bf1a2062253dee"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "30593289141b0adb38de3fe0d7059fc5"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "87cb284fa6de3a7c88b33df88b471d9c"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "a8afcba70d1726c156de616b3d1a549f"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "d2ed7487a39acf252660ca0564426577"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "fcc73aeeda2f78b8b7d932d490d58215"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "6e39c039d65aaefa425e43d1dcf0c91e"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "db56a11843904f1f951100e18d3871eb"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "e7ac3fac628a7d596b198f858abf8110"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "8ef8a4254f5d180bb18ae78004939071"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "38553835e144593f5e97c8743252b804"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "c684d53c081d8b360be37436f2dcaf7a"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "9e42ac222ef38fa729f986497b62ecb5"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "aa4aee245d6d494c97eb9b0cffa3e244"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "3dc70f35eb39faacc327e5f117d0f63c"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "4fc33f5f7c38a2a11c9543ad73810ab1"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "4eaeb3d552dbccaa5a2128399f9a31b1"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "5994b7fc669c4a5b7eecacd5d3335b33"
  },
  {
    "url": "api/rpc/sms.html",
    "revision": "d16eeca66e25a383e314cf7fa791042e"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "80c61ac1e2c0227489fb188a636cc670"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "7b026ca83b92b557fc0f91342fe78a16"
  },
  {
    "url": "assets/css/0.styles.fbcdc890.css",
    "revision": "1bb8115b1821ceffa27d9b0540ca764c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4b788af9.js",
    "revision": "87c64f09aabb232c6b5627bb7ea5c786"
  },
  {
    "url": "assets/js/11.264e52c8.js",
    "revision": "9a8db9daa0691079506602fe2ab3d6ab"
  },
  {
    "url": "assets/js/12.e5bbca40.js",
    "revision": "a942c0822bd14a878409e465c51a152d"
  },
  {
    "url": "assets/js/13.2557f796.js",
    "revision": "eec4f70eaf35088832726e5d5a4fc2a6"
  },
  {
    "url": "assets/js/14.ff0eb48c.js",
    "revision": "81064dcac55e39aed652a3e7cd339a23"
  },
  {
    "url": "assets/js/15.ed63da52.js",
    "revision": "7e022296cc775bb3b6c528b0a1729b0b"
  },
  {
    "url": "assets/js/16.10e5ba5a.js",
    "revision": "154556d27336f46c22c5f96e338c8923"
  },
  {
    "url": "assets/js/17.9de7ffb0.js",
    "revision": "16ddd4ff99df38cc6664ec2ea07d8a70"
  },
  {
    "url": "assets/js/18.72eea132.js",
    "revision": "76428a031ca38e428631c3d6f9b60248"
  },
  {
    "url": "assets/js/19.06b8cf3c.js",
    "revision": "4113c303286907e2fb852e355cb8b156"
  },
  {
    "url": "assets/js/20.ad2aa02e.js",
    "revision": "8847a92e0b61b1bb25eb5a5e2275dc0a"
  },
  {
    "url": "assets/js/21.aed80d95.js",
    "revision": "95fac0321a3093aec369b3a38fb1fc92"
  },
  {
    "url": "assets/js/22.a1ba42d1.js",
    "revision": "324783667619d6a1f909f8f64f2dbc19"
  },
  {
    "url": "assets/js/23.5d8fdd05.js",
    "revision": "afb843684ec7c077fcfbf8fec900cd08"
  },
  {
    "url": "assets/js/24.d8e4e0ed.js",
    "revision": "3976d6ed4725f5ea3e91a1e57deacee1"
  },
  {
    "url": "assets/js/25.e7a1a298.js",
    "revision": "b866de2c334694d5bbe4f89cc9266b18"
  },
  {
    "url": "assets/js/26.6247f9e7.js",
    "revision": "9f9ba9804a804b12a36c0834ef7d8b73"
  },
  {
    "url": "assets/js/27.28d391f5.js",
    "revision": "ee4eff73c76a74534d8cae1325265124"
  },
  {
    "url": "assets/js/28.27a4c776.js",
    "revision": "cc6759809a5d34b6c42c8e39367f8ac5"
  },
  {
    "url": "assets/js/29.5867200d.js",
    "revision": "d8c01e701b238ef1ce26404980fdb418"
  },
  {
    "url": "assets/js/3.56c11fb3.js",
    "revision": "b3dd74d7e3b22b7e17df5f4697476561"
  },
  {
    "url": "assets/js/30.dfdb11be.js",
    "revision": "ef88d5017c681b115ec5674227d34c5c"
  },
  {
    "url": "assets/js/31.d8bb2df4.js",
    "revision": "3369288db1071c800551621ccfea7f8c"
  },
  {
    "url": "assets/js/32.2d3d7ed8.js",
    "revision": "094cf54834a4bcd75eddfc77794fa4f7"
  },
  {
    "url": "assets/js/33.f015bd98.js",
    "revision": "e207081c7516d63fa75c966faf69b0bc"
  },
  {
    "url": "assets/js/34.95ca53ae.js",
    "revision": "286b9bb2b833ffc20d5abd00b951c4e0"
  },
  {
    "url": "assets/js/35.a8b56235.js",
    "revision": "b18d6ec113f2a2c1ed5590ac5425679f"
  },
  {
    "url": "assets/js/36.28711cd3.js",
    "revision": "36405b20b33bd114d6d2c5ea3cb37224"
  },
  {
    "url": "assets/js/37.243db8f1.js",
    "revision": "b249f8c05c0465952d98fc215c1c88ef"
  },
  {
    "url": "assets/js/38.751e48cb.js",
    "revision": "87b599b68ad567f798a0a47ad24c39b3"
  },
  {
    "url": "assets/js/39.ce818ed8.js",
    "revision": "1c16e1a040bde73c095d72c7e6b84210"
  },
  {
    "url": "assets/js/4.affdda8a.js",
    "revision": "8719de55e1dbfe9086bb91152889cf1d"
  },
  {
    "url": "assets/js/40.649c362c.js",
    "revision": "0978dc25ccb20dfbe59d6c81f797fca2"
  },
  {
    "url": "assets/js/41.d2fef4c0.js",
    "revision": "15a35b8b75cb65c43148338290bebfce"
  },
  {
    "url": "assets/js/42.cb02a72b.js",
    "revision": "8920a313333099fb69511c50a76d4276"
  },
  {
    "url": "assets/js/43.42100f56.js",
    "revision": "eed73762ec185b5ec53684fc2fe69938"
  },
  {
    "url": "assets/js/44.91472605.js",
    "revision": "4ee7b6a29c7c15e3dde897b0a837b79a"
  },
  {
    "url": "assets/js/45.964e62e9.js",
    "revision": "b0640177fc8dc35a9037a6a4a46cde2a"
  },
  {
    "url": "assets/js/46.5c9e3bab.js",
    "revision": "01e8c630450bf73295b8ce05a4312472"
  },
  {
    "url": "assets/js/47.4df9d021.js",
    "revision": "c5172710c3158788681571dc0b06a30b"
  },
  {
    "url": "assets/js/48.272f626e.js",
    "revision": "30eb683a912824e4e862b858409f6746"
  },
  {
    "url": "assets/js/49.7a48464a.js",
    "revision": "fb90468bf0c879b6988ed073aea94e80"
  },
  {
    "url": "assets/js/5.9dcd5cb1.js",
    "revision": "6a34eb2a8301513a6416a49f6e2168e0"
  },
  {
    "url": "assets/js/50.badef641.js",
    "revision": "d329289c923565250a2efbc5593a4a6c"
  },
  {
    "url": "assets/js/51.d639f4d1.js",
    "revision": "44b26d9b83f05fc7e0c7adec6a93020a"
  },
  {
    "url": "assets/js/52.d3d75d6f.js",
    "revision": "08d9ad832a060ebcb7e819a9591dee8f"
  },
  {
    "url": "assets/js/53.04af7f02.js",
    "revision": "d33275ae58fddb220b9d165e89355f86"
  },
  {
    "url": "assets/js/54.9453995e.js",
    "revision": "4132dd28bd2d4fd1eaeede2e0542a145"
  },
  {
    "url": "assets/js/55.811e7306.js",
    "revision": "1c6da876bf8faccc4f44b07f490855f7"
  },
  {
    "url": "assets/js/56.c543cb98.js",
    "revision": "136048890914b31df1a536387bccb5cc"
  },
  {
    "url": "assets/js/57.af76e856.js",
    "revision": "741806211c855f53d148dd56ee6b4330"
  },
  {
    "url": "assets/js/58.775ef290.js",
    "revision": "71547ed804332151c6a96e4f743b0eb5"
  },
  {
    "url": "assets/js/59.d35af7d1.js",
    "revision": "bbb6ded0e71363c895b2bb11a3f9e9c6"
  },
  {
    "url": "assets/js/6.ea422aa1.js",
    "revision": "f943b09b0af7460fbbbbd132f6def90f"
  },
  {
    "url": "assets/js/60.22e6832f.js",
    "revision": "2ff2887472f1565545b1a5c5b5ab3c62"
  },
  {
    "url": "assets/js/61.9a98a0f5.js",
    "revision": "a78914786f262edb3e6b83bf67be0e81"
  },
  {
    "url": "assets/js/62.50f9e58a.js",
    "revision": "a4f55d8872366bf44d4c972cd030ea02"
  },
  {
    "url": "assets/js/63.9ca766cf.js",
    "revision": "b5a3f1fcc7f6bf90e10a339d86c187e3"
  },
  {
    "url": "assets/js/64.1694a524.js",
    "revision": "169006c8f80c6e13a51e1a38397607f2"
  },
  {
    "url": "assets/js/65.7cccb185.js",
    "revision": "2e30c28055bda18d03c72cc9d47f63a5"
  },
  {
    "url": "assets/js/66.a813e429.js",
    "revision": "d1f387fafb114d53d057fc0aef2d29d3"
  },
  {
    "url": "assets/js/67.6c3ce976.js",
    "revision": "a37cef53ae675f80105686b54e21bc00"
  },
  {
    "url": "assets/js/68.122f3fbc.js",
    "revision": "d702fe6793a407b9c18ddc347bbff174"
  },
  {
    "url": "assets/js/69.3574b125.js",
    "revision": "efef46ff97c1548f5b89d7c32d9d83e1"
  },
  {
    "url": "assets/js/7.d764e895.js",
    "revision": "25e496793467d5606f8f13b1e3a0745b"
  },
  {
    "url": "assets/js/70.b4b82bf1.js",
    "revision": "4ab83ddb3929f73e535837b80ef8c9e4"
  },
  {
    "url": "assets/js/71.23e1b3c0.js",
    "revision": "dcd0fc20c192187a275f9eeb2e82ec6f"
  },
  {
    "url": "assets/js/72.3c64d847.js",
    "revision": "d6c5ea4e3b5047622213348c0d62f2c6"
  },
  {
    "url": "assets/js/73.f288d421.js",
    "revision": "673b60af6c46e98f4384b5f2f4848737"
  },
  {
    "url": "assets/js/74.fd776018.js",
    "revision": "f9c599bfaacd8a26934934c7052c14e1"
  },
  {
    "url": "assets/js/75.490447cd.js",
    "revision": "86b9e5fa169fc43581d3b1ea662209b7"
  },
  {
    "url": "assets/js/76.7ec19036.js",
    "revision": "7333f1c39c88cd8f52b08d259f236671"
  },
  {
    "url": "assets/js/77.54e5ae91.js",
    "revision": "325015995604088615b4a988d27d5815"
  },
  {
    "url": "assets/js/78.f7a006e1.js",
    "revision": "fe7c063c4b91cab7487b3e739d007d31"
  },
  {
    "url": "assets/js/79.ebdd493f.js",
    "revision": "3b89e832ac4480ba3931535353baf221"
  },
  {
    "url": "assets/js/8.434ec9cc.js",
    "revision": "c91076a9490fd2d4320771071dce83cc"
  },
  {
    "url": "assets/js/80.a64e2934.js",
    "revision": "c35a93ecb9a595900738944225bb06e0"
  },
  {
    "url": "assets/js/81.631a069b.js",
    "revision": "76d9bf82c29dc6c2bec12d66965c0acf"
  },
  {
    "url": "assets/js/82.445e48a1.js",
    "revision": "e4716dc7eda7edac9df1af804c98187b"
  },
  {
    "url": "assets/js/83.0c56d3e2.js",
    "revision": "21dc5afdc25e2ac8fd122ee9a51bf4a7"
  },
  {
    "url": "assets/js/84.daeff9e8.js",
    "revision": "dac5ee9d933b004d6207e9d5d571bcfe"
  },
  {
    "url": "assets/js/85.2c4ee98c.js",
    "revision": "2152579be147114a8ee1a436fabfe95f"
  },
  {
    "url": "assets/js/86.bccdab69.js",
    "revision": "655e31968cc9e91c672620884be69ff7"
  },
  {
    "url": "assets/js/87.c49d3892.js",
    "revision": "305d8caac2ec271dc9ef79efcc12ba8f"
  },
  {
    "url": "assets/js/88.9dd82208.js",
    "revision": "aba35b8777a45f29599f81f4b22d5349"
  },
  {
    "url": "assets/js/89.f41a419e.js",
    "revision": "993377c7c4d88d53a7c679a58803721c"
  },
  {
    "url": "assets/js/9.6c24fa1e.js",
    "revision": "fa3728de459147951f37c98e2e1cc955"
  },
  {
    "url": "assets/js/90.8f83a15b.js",
    "revision": "6a89a5055bee1b3fb8f3cb36af0c2ff9"
  },
  {
    "url": "assets/js/91.4a940adc.js",
    "revision": "d8f5660c5ad4e765a16a58e02b3b10e2"
  },
  {
    "url": "assets/js/92.527f97f2.js",
    "revision": "1d52f14eb8e96f8e626d2b5c5730f545"
  },
  {
    "url": "assets/js/app.d607ed01.js",
    "revision": "116d222b4fd36ff89ed19c157c6902d9"
  },
  {
    "url": "assets/js/vendors~notification.9cd526a7.js",
    "revision": "d9c1b7a8ffd9f052698da9aba493d2e1"
  },
  {
    "url": "i18n/index.html",
    "revision": "1a80ac06a719cc2929e840b098b88485"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "a289f9a1c5900ba26079bdd38619349d"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "4fabe8fda8cf4739d3b6f9f9c193adda"
  },
  {
    "url": "tutorial/index.html",
    "revision": "aee6ed6adc2829fc2af80279bb63b98c"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "a05d568ce8bb46ea017ba2d75fea2928"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "7878bda42e1da7ffa6a4099676d5a571"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "30ff00f3e97af9a5ea4c743a00cf7c7c"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "f2bd58cf6a3bb818c8febab3296ab0d8"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "7827150ac7be09ee1dae28b64bb4c77d"
  },
  {
    "url": "zh/api/index.html",
    "revision": "3017904e8fd3572ec6009eeb0e74a768"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "d33475e3f8c10a4a25df77cdfe1de4fa"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "092e5631d307899df29e964a8995a215"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "6805c6ca70ec93d31b7012b763542512"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "261eb3c207c6aeaee25eedaf8a616895"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "f24a083675aa984697b985fa4a62128d"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "de67647e8ac076469d3748e7270b86aa"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "85634d1708d5dc698038edd19ac3849b"
  },
  {
    "url": "zh/api/qlcgo/sms.html",
    "revision": "865b6e068f40b44bbafc2379aec98110"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "6a8216e131872f96f9ba278bdd2fc6a9"
  },
  {
    "url": "zh/api/qlcgo/wallet.html",
    "revision": "fa6f38cbbc38941215bbe0e252572a69"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "64a2225780db313cb208c933c77f9d22"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "57ba047832ce7f00fd9d4622baff2f77"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "e420cbfb28ac7940b21391111987ec16"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "d1dc0d0bae3911f686c6fe47f410a08b"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "03eac2a2ec5b0fdb1b4670de9e3abb9a"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "4d1b970fd3ea3f61f40e2acf4c9821c8"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "b127a20029bc20d8e145c6ebca5ba530"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "d3052125212a89aadcc6c16f61acd86f"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "f9e894fcdb991b5c722ba87b979484ec"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "031d12d2dd6787dc713b2074f66cb6ee"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "311828a51cf1a9fa53f8731cf55b14dd"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "6ee914944c2050658a243857f36f910c"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "489cdd1f3921f3484eed6fd044463519"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "9db07294e4f947adc9d7e34409d3e749"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "737f87a15df1ef03ca718132c1cdeb7b"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "acdb76c811b284a720a13724438888ad"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "c9d1bdfa0f8ab9a5056ddaa76928a409"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "063113210804ed6c152613142c00a90d"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "bc7022fb49b904084d6362cb2f94be76"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "8c209afdae6ff2a129d09259eb8e1618"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "253e2d978af7538b98fd1f84a47ec902"
  },
  {
    "url": "zh/api/rpc/sms.html",
    "revision": "f2fe67273e174ee0696790b4f31e191b"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "0e6c9ca71bf229c8df5f4f3e99c7eaad"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "ceaff3c4573a740b56e25b077a4298ee"
  },
  {
    "url": "zh/index.html",
    "revision": "0102f5e95d02c0899204e3f8ceaa3fed"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "8802dc60a58be1bdcc6b6456e4cc9d87"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "4fdf848c24e4f99e7c5ba4e9fd18f91b"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "f8fad20e5982d60ab0c5319306199c31"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "fbf44dec32ca71ca4c14cd5ecc5e0c0d"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "76eb51a7265ccb6ab3fc7a8439741c52"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "5b044c998e80e79b8335d90864807c72"
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
