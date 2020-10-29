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
    "revision": "44f8a59dcc6a882bd0d8db6bb3864749"
  },
  {
    "url": "api/index.html",
    "revision": "1dab70e3fa19091e47ef3bf5764d305c"
  },
  {
    "url": "api/qlcgo/account.html",
    "revision": "dd84938eadaed4d02e2a46c032ee26e7"
  },
  {
    "url": "api/qlcgo/client.html",
    "revision": "6c3729c80b05e4086c93f96241ae92ff"
  },
  {
    "url": "api/qlcgo/contract.html",
    "revision": "cd834d3cc00ebc23d60af43bfb2f1bcd"
  },
  {
    "url": "api/qlcgo/index.html",
    "revision": "7c1a36a679c2c7f1250a0bf4bad48b98"
  },
  {
    "url": "api/qlcgo/ledger.html",
    "revision": "9900a018a46e45219e14bd69b95be8d0"
  },
  {
    "url": "api/qlcgo/mintage.html",
    "revision": "c1f88b9554dce5b902a08dc1b8886662"
  },
  {
    "url": "api/qlcgo/net.html",
    "revision": "2bd6f0b078290049b41065c448352b84"
  },
  {
    "url": "api/qlcgo/util.html",
    "revision": "2b1e732b94ffca014cbbf5af33017840"
  },
  {
    "url": "api/qlcjs/client.html",
    "revision": "71e17a86f1889374a8708ad53b094e6f"
  },
  {
    "url": "api/qlcjs/common.html",
    "revision": "dd6cf8a15cf4e3f44ca24d7c184a4b2c"
  },
  {
    "url": "api/qlcjs/common/index.html",
    "revision": "87b40fcd403c3c5baf93e1568baa8dd0"
  },
  {
    "url": "api/qlcjs/index.html",
    "revision": "70e8d5d36e9de876aa73534ada524b17"
  },
  {
    "url": "api/qlcjs/provider.html",
    "revision": "d11bb0a7472c84d0896f222e2bb46238"
  },
  {
    "url": "api/qlcjs/provider/http.html",
    "revision": "4399b10df14b47d72cd985d998d041ea"
  },
  {
    "url": "api/qlcjs/provider/index.html",
    "revision": "009d7ce7a6d34e6fc69c94b28e71b3b5"
  },
  {
    "url": "api/qlcjs/provider/ipc.html",
    "revision": "1492e9db9c07f85912f7d1da5068cc2a"
  },
  {
    "url": "api/qlcjs/provider/ws.html",
    "revision": "0fb8c52d3ac95bb6557c772ee426440a"
  },
  {
    "url": "api/qlcjs/wallet/account.html",
    "revision": "2fc666c542cba6324a4bb8640482b9ed"
  },
  {
    "url": "api/qlcjs/wallet/wallet.html",
    "revision": "d75a016a2ef2be5a79dba04f2ef76676"
  },
  {
    "url": "api/rpc/account.html",
    "revision": "c211c14b3e9dac35398c369ba0959d3d"
  },
  {
    "url": "api/rpc/contract.html",
    "revision": "0dc9919efd8f548b2ba9e1ae9390e946"
  },
  {
    "url": "api/rpc/destroy.html",
    "revision": "ffe214172d39af925f6f40fa3be4d765"
  },
  {
    "url": "api/rpc/dod_settlement.html",
    "revision": "a82d3631b7e6722604f22694feea92ce"
  },
  {
    "url": "api/rpc/dpki.html",
    "revision": "e2d73817c7d8291ebcf3e3ab1411a16b"
  },
  {
    "url": "api/rpc/index.html",
    "revision": "b1421881e7f063950f332722687d491c"
  },
  {
    "url": "api/rpc/kyc.html",
    "revision": "2ca4dc9ae21e5789e999c52315ac9eff"
  },
  {
    "url": "api/rpc/ledger.html",
    "revision": "cb167c8c43cd45ed51e3a89d2e50be44"
  },
  {
    "url": "api/rpc/miner.html",
    "revision": "14d3b3f922b72bbad90674a4aeccd9a8"
  },
  {
    "url": "api/rpc/mintage.html",
    "revision": "b70c42de414fc2ff0ee8c3434e198ee2"
  },
  {
    "url": "api/rpc/net.html",
    "revision": "a1c1b60c8708d5f8ce49d1380a622af7"
  },
  {
    "url": "api/rpc/permission.html",
    "revision": "17bc952990ba8f0bbad2f0c0c08976b2"
  },
  {
    "url": "api/rpc/pledge.html",
    "revision": "1b95f732ec74282c126dde39d1de4acf"
  },
  {
    "url": "api/rpc/pov.html",
    "revision": "63056f09aec4d9b24704c0ff9086cce9"
  },
  {
    "url": "api/rpc/ptmkey.html",
    "revision": "44fc0b01b802fc259c94322407e0c9b2"
  },
  {
    "url": "api/rpc/pubsub.html",
    "revision": "b7b523033271b827808894ada3e77f21"
  },
  {
    "url": "api/rpc/rep.html",
    "revision": "bfdb0a9d765e1dbc2c0000efbf100da7"
  },
  {
    "url": "api/rpc/rewards.html",
    "revision": "36d039df588a2a3d4a5e778dfcb1f5cf"
  },
  {
    "url": "api/rpc/settlement.html",
    "revision": "e98f1698241c64dad32d5897473cbfc5"
  },
  {
    "url": "api/rpc/util.html",
    "revision": "bb70bf60c67cc0dd9c0f3553b54883f0"
  },
  {
    "url": "api/rpc/wallet.html",
    "revision": "54e7c935287509f10752595038011b9d"
  },
  {
    "url": "assets/css/0.styles.c652e453.css",
    "revision": "bdc8744b276cccd68db062a8f0e8c459"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0d31c969.js",
    "revision": "590483d8cc889b4aaf94dce0b33055bc"
  },
  {
    "url": "assets/js/100.ef5286e7.js",
    "revision": "2b05cdc2f97606e437e09faa209b7bcf"
  },
  {
    "url": "assets/js/101.219da603.js",
    "revision": "61fac9f98ee69c254edbd8f17bc2abce"
  },
  {
    "url": "assets/js/102.2d6ef0c4.js",
    "revision": "410218d17f2656ab691da68a31884c54"
  },
  {
    "url": "assets/js/103.b5cca713.js",
    "revision": "a18b787225d7f55e74eab647fd05a213"
  },
  {
    "url": "assets/js/104.605679aa.js",
    "revision": "5b5e682afb12ba1554820fa40c727843"
  },
  {
    "url": "assets/js/105.b99ffc26.js",
    "revision": "87eb58b2218dcbf48f2bcc8ae05ff28e"
  },
  {
    "url": "assets/js/106.f17c0ee6.js",
    "revision": "2887a0a8d8be787bca812e966e5285e0"
  },
  {
    "url": "assets/js/107.7841b6d2.js",
    "revision": "ed1c3954cce6d28fb7e7ad4c9d9605f8"
  },
  {
    "url": "assets/js/108.1d356c25.js",
    "revision": "79618fb6559ba6847080865a67f7c442"
  },
  {
    "url": "assets/js/109.83171168.js",
    "revision": "be1d8e15eee7ff43b79b5c5604d5654d"
  },
  {
    "url": "assets/js/11.533b94ea.js",
    "revision": "5523ab5239e1663b41b2e4812e7420a0"
  },
  {
    "url": "assets/js/110.ea897f46.js",
    "revision": "3dd8bb0aa858fc91f429895b2dfac9d4"
  },
  {
    "url": "assets/js/111.57b49cba.js",
    "revision": "485a7cb99d2a5df192b3d25719b7aec1"
  },
  {
    "url": "assets/js/12.79910927.js",
    "revision": "6cb3481b2682bf6ba5bcc0945a8ea483"
  },
  {
    "url": "assets/js/13.0b23bbde.js",
    "revision": "5e9cd95fbfe8453ea260720031534f47"
  },
  {
    "url": "assets/js/14.5b392ed2.js",
    "revision": "5302dbf23a9962e0c27a16f74e3e2ebe"
  },
  {
    "url": "assets/js/15.0be13f5a.js",
    "revision": "b5ca171731858fc4d7caeb56d062e5a7"
  },
  {
    "url": "assets/js/16.e97a23c3.js",
    "revision": "49019b72ffb3f54bc35b639a41046c52"
  },
  {
    "url": "assets/js/17.8570a0ce.js",
    "revision": "5730bc42e506843147d9d53ade559819"
  },
  {
    "url": "assets/js/18.2df0f0f5.js",
    "revision": "141ea60bb97060672d7408cac898782b"
  },
  {
    "url": "assets/js/19.a47f9ce6.js",
    "revision": "743a5ed0eb195467bc89e6bdecfce7c8"
  },
  {
    "url": "assets/js/20.8c06c54e.js",
    "revision": "6061d63525847c61e2de7ae77aad3d6f"
  },
  {
    "url": "assets/js/21.6867a903.js",
    "revision": "b99aa0588743380cda3d961e519f5f7f"
  },
  {
    "url": "assets/js/22.efffa11a.js",
    "revision": "3c0d007c9ca162a4d24bccfe7fa91654"
  },
  {
    "url": "assets/js/23.059a75c5.js",
    "revision": "ecd0a0c9c902b0f82d3ab2190a127382"
  },
  {
    "url": "assets/js/24.69a282a3.js",
    "revision": "38e755f004c4bc29a422e6db413240f7"
  },
  {
    "url": "assets/js/25.fcefd490.js",
    "revision": "eeef0a622fa9a07191c3cde7272de77a"
  },
  {
    "url": "assets/js/26.e62248c8.js",
    "revision": "a0b510f1ba9aff9e17ee195c1d08d282"
  },
  {
    "url": "assets/js/27.a22b25ab.js",
    "revision": "60d9c3f6dd94bf50aec4ac3c6571d88c"
  },
  {
    "url": "assets/js/28.0daed95e.js",
    "revision": "8c58dd8a10c397c167ebad92c47fdfd6"
  },
  {
    "url": "assets/js/29.10c4aa6d.js",
    "revision": "e88b091a0a3ec9fa2ca78e47c0d0038c"
  },
  {
    "url": "assets/js/3.781363c1.js",
    "revision": "804910a1ee061ef68e8ba759b627e218"
  },
  {
    "url": "assets/js/30.fce36615.js",
    "revision": "f64c4df8a48c151fd33e3c4f566d2f25"
  },
  {
    "url": "assets/js/31.15765d45.js",
    "revision": "cb8bda8389552eaf76c7b4a30afe51f5"
  },
  {
    "url": "assets/js/32.eae3916e.js",
    "revision": "62a5342bb2c7a5b773a4f6d485e1d129"
  },
  {
    "url": "assets/js/33.77f42f4e.js",
    "revision": "d9672e1f7c39d2e598e520c936176472"
  },
  {
    "url": "assets/js/34.3b523aea.js",
    "revision": "0340a16b30984f5c8e79c4f9d67b4f8e"
  },
  {
    "url": "assets/js/35.d97bc571.js",
    "revision": "1f7d5e7739a53f5ecf84fb786490372c"
  },
  {
    "url": "assets/js/36.6905a70a.js",
    "revision": "eccaa4542ffa1cdcfd40bf5231909821"
  },
  {
    "url": "assets/js/37.6dd70f0f.js",
    "revision": "c46c5868958c901477c7717cef6751e9"
  },
  {
    "url": "assets/js/38.08641739.js",
    "revision": "fcf0e6171e9e5dec4cf6addc17fd83c1"
  },
  {
    "url": "assets/js/39.12c60862.js",
    "revision": "9fcd231f8c6acdd85b31613b25cff2cb"
  },
  {
    "url": "assets/js/4.f17da339.js",
    "revision": "aed79002394205227a883139e97fc552"
  },
  {
    "url": "assets/js/40.cc7722f9.js",
    "revision": "f03b82c6eb0ea87a160c58b0f1095732"
  },
  {
    "url": "assets/js/41.c625bbe1.js",
    "revision": "a059af1c4889fa63ec77e28dbbcd87f2"
  },
  {
    "url": "assets/js/42.f67d4c55.js",
    "revision": "f3288c2c651bd7decd5669ce6b299875"
  },
  {
    "url": "assets/js/43.97e5da55.js",
    "revision": "33a41cd82d7374e7a07044b6818171ec"
  },
  {
    "url": "assets/js/44.689f2f27.js",
    "revision": "458c625f6f9b945dd193da5b5edea9a0"
  },
  {
    "url": "assets/js/45.61d21dc1.js",
    "revision": "4ea2a2707f3f1a9ae1db0affb523823b"
  },
  {
    "url": "assets/js/46.92229f8e.js",
    "revision": "6b46d094ff05498da4dbbeb18a5da030"
  },
  {
    "url": "assets/js/47.7ccc0866.js",
    "revision": "2e0f138667933ea5263ba8208945945d"
  },
  {
    "url": "assets/js/48.29da9c65.js",
    "revision": "106443e9e38884f757c25c6d7ea0de8e"
  },
  {
    "url": "assets/js/49.218c9d41.js",
    "revision": "feec97b7e2fe21d6e034be23dbf8a10d"
  },
  {
    "url": "assets/js/5.6bb57a2b.js",
    "revision": "65494c23af49ff5841d09d64526e677b"
  },
  {
    "url": "assets/js/50.903c15ae.js",
    "revision": "12ee64f109e0f4310e98e583fad2806e"
  },
  {
    "url": "assets/js/51.62ecbdf9.js",
    "revision": "5385fbbe7f133535b71165643105e385"
  },
  {
    "url": "assets/js/52.d1513590.js",
    "revision": "af9fcbe5fdb939abfe85aa6dbd3f275c"
  },
  {
    "url": "assets/js/53.f3ec1b10.js",
    "revision": "a92876e89bf95eb9230ca8bf57bed028"
  },
  {
    "url": "assets/js/54.e0bd8b40.js",
    "revision": "85568b1a2ebe954dd24f6184b430b9f5"
  },
  {
    "url": "assets/js/55.8a5fcaf2.js",
    "revision": "b08453c7106d94c1f1c92d16178abd1d"
  },
  {
    "url": "assets/js/56.6e6ae9a0.js",
    "revision": "8c0b2537630adcac4b87d43dd9b2d1c4"
  },
  {
    "url": "assets/js/57.0145f627.js",
    "revision": "ede7adfe3c9aee8f7ffef70ff73817fa"
  },
  {
    "url": "assets/js/58.08ee3d56.js",
    "revision": "b6f85398d47f2c1c5b91da8a4841520d"
  },
  {
    "url": "assets/js/59.c3af3ecb.js",
    "revision": "1b1b1c26fd52b5e314e056369381fd3e"
  },
  {
    "url": "assets/js/6.a02d2382.js",
    "revision": "900f9a0647be7572b30f065a57bd8d9c"
  },
  {
    "url": "assets/js/60.56a672a6.js",
    "revision": "31898341403b00021a11519d70a8b4eb"
  },
  {
    "url": "assets/js/61.53e4b8f2.js",
    "revision": "7aaf1424cb10396f230e9dc54cba2333"
  },
  {
    "url": "assets/js/62.db6e7236.js",
    "revision": "fc595d563e12d85bfa3fa22912c4ed05"
  },
  {
    "url": "assets/js/63.88affd4c.js",
    "revision": "beebf4cfc9c515593521659f44546b0b"
  },
  {
    "url": "assets/js/64.337e7354.js",
    "revision": "4f824e69eba18c173ad009812d872452"
  },
  {
    "url": "assets/js/65.5b6a83eb.js",
    "revision": "33bc8e253f206ef9c276eee9fb023d5d"
  },
  {
    "url": "assets/js/66.47d2c626.js",
    "revision": "f5ed2334bf4189f1d63f6e1258b8ed44"
  },
  {
    "url": "assets/js/67.0e2edea2.js",
    "revision": "71ea395ec11900638fec1b606d45ca9c"
  },
  {
    "url": "assets/js/68.407a9bce.js",
    "revision": "a684e1444bc9b9c5ad44f22557502ec9"
  },
  {
    "url": "assets/js/69.054de877.js",
    "revision": "b954d3423805245915084e266dbef697"
  },
  {
    "url": "assets/js/7.5aeccc9c.js",
    "revision": "95f1659e8c7a1d5feb371eb64c458b16"
  },
  {
    "url": "assets/js/70.d4caa1c0.js",
    "revision": "e5598999e81b77a0c35cdde19fb0a476"
  },
  {
    "url": "assets/js/71.af5db186.js",
    "revision": "dd9f0cef48707a2430e0145b44be80d7"
  },
  {
    "url": "assets/js/72.300ac5f4.js",
    "revision": "7970fc73de7f8299d3f6bbe831c972b3"
  },
  {
    "url": "assets/js/73.c7a8e1dc.js",
    "revision": "730b65d116f20c511dae99eeb44f11ce"
  },
  {
    "url": "assets/js/74.abc24a72.js",
    "revision": "4e30571e6ef0a6451a23007d8ee0b91e"
  },
  {
    "url": "assets/js/75.c97f7473.js",
    "revision": "5370ca3bd3cff93882536fc66b548690"
  },
  {
    "url": "assets/js/76.e280527e.js",
    "revision": "dd5e5c2acd5f92f88ee5904a11ff66b6"
  },
  {
    "url": "assets/js/77.1bcddca0.js",
    "revision": "fb0b879409d4f647dc0a59792af3bd76"
  },
  {
    "url": "assets/js/78.2c791b64.js",
    "revision": "dafd99cd5852bcd5721c8d7b0706c38a"
  },
  {
    "url": "assets/js/79.1206ad6c.js",
    "revision": "5ef03cfbdb6caf061dfc89511ba0d714"
  },
  {
    "url": "assets/js/8.dabbc16a.js",
    "revision": "098badda83ff04aaa8a9f9cb2f82cc31"
  },
  {
    "url": "assets/js/80.4b0e3275.js",
    "revision": "ad99a0a4ab8023c2a7414cb8d8d32bab"
  },
  {
    "url": "assets/js/81.3e84a663.js",
    "revision": "9cdbd798010de430cf5bb1e883bbb9ca"
  },
  {
    "url": "assets/js/82.0d493e00.js",
    "revision": "ed7896bfef1119322229c355820da441"
  },
  {
    "url": "assets/js/83.69f2a423.js",
    "revision": "cbc6cd9c3f6fed5121540f885b44171f"
  },
  {
    "url": "assets/js/84.748163d4.js",
    "revision": "c75dc1c4bbd2276f9132b2dcecb1f289"
  },
  {
    "url": "assets/js/85.dcaafe1a.js",
    "revision": "076287b893265931b8833ea8f71d94cf"
  },
  {
    "url": "assets/js/86.9fe3724c.js",
    "revision": "6d12c094a36f259640ef5caa40d61913"
  },
  {
    "url": "assets/js/87.29db3790.js",
    "revision": "e3ffb9473ecf4fc5273467c259b4ac6e"
  },
  {
    "url": "assets/js/88.5bcaef7f.js",
    "revision": "e1c269922eb4b7c47398643d8ed7dcde"
  },
  {
    "url": "assets/js/89.e11a0892.js",
    "revision": "369e3567e14d46afdacfa8b394c6508e"
  },
  {
    "url": "assets/js/9.a31a02a0.js",
    "revision": "3f56859f9d04a59fef01cd5fc8da362c"
  },
  {
    "url": "assets/js/90.83606ddc.js",
    "revision": "787bc092745357109ab455d93b2a1abf"
  },
  {
    "url": "assets/js/91.4a9b8689.js",
    "revision": "98f47ee26eca8fa465af036d695151a1"
  },
  {
    "url": "assets/js/92.e5f911b1.js",
    "revision": "0c85f06a1f218cfb87c356f954aea467"
  },
  {
    "url": "assets/js/93.fbf8818f.js",
    "revision": "737aa8e1b49eb3ad4c50c008a88b3332"
  },
  {
    "url": "assets/js/94.8adfd7d5.js",
    "revision": "29850db9ba4e7a918fef1112cea8b9bc"
  },
  {
    "url": "assets/js/95.aba2ae52.js",
    "revision": "f18f8147441c209bed2a3756252e69fc"
  },
  {
    "url": "assets/js/96.f2a05662.js",
    "revision": "653a528c229673ebaf8a4958d1315fad"
  },
  {
    "url": "assets/js/97.3ad53581.js",
    "revision": "1adb91ab69f9c3b9c4b923b8f719d579"
  },
  {
    "url": "assets/js/98.df64e359.js",
    "revision": "e4f710ca10a3924b2aabd6b6cbf871dd"
  },
  {
    "url": "assets/js/99.227857e3.js",
    "revision": "67a8daec87f8850c58f7e255fe189f9b"
  },
  {
    "url": "assets/js/app.766b9420.js",
    "revision": "488f67815095f20cd56cc530bc1fc3c0"
  },
  {
    "url": "assets/js/vendors~notification.e39b0c62.js",
    "revision": "2d27a7fd3a46c7d9894c3b8d361d5c3a"
  },
  {
    "url": "i18n/index.html",
    "revision": "026e9baf023b19f3db532f66e4449eef"
  },
  {
    "url": "icon.png",
    "revision": "9fdfbae70ae1110936316295dd669c6b"
  },
  {
    "url": "index.html",
    "revision": "f8748534a5d15ee068dc79cd922e33d0"
  },
  {
    "url": "tutorial/getstarted/index.html",
    "revision": "ac863c795eddfbdfcf7ee81bf36fff2a"
  },
  {
    "url": "tutorial/index.html",
    "revision": "16f5d7706036d7d89a284d46e319c29f"
  },
  {
    "url": "tutorial/mining/auxpow.html",
    "revision": "deeec795afe95559ce3bb70ddf245b6d"
  },
  {
    "url": "tutorial/mining/pow.html",
    "revision": "b86ec6abece1294f8a5961546c94a6c0"
  },
  {
    "url": "tutorial/node/cli.html",
    "revision": "66f9f8f2710d466db793eae7d8c3ea26"
  },
  {
    "url": "tutorial/node/config.html",
    "revision": "8b0e8a728e59a098d858507f89f6f71c"
  },
  {
    "url": "tutorial/node/install.html",
    "revision": "3138cb090d660b3ccc3564533225a205"
  },
  {
    "url": "tutorial/wallet/install.html",
    "revision": "a41f0ec7aef18d28d0e1317681cf3e13"
  },
  {
    "url": "tutorial/wallet/manage.html",
    "revision": "7c9bbc7c13a9333aaaa3009aca8425d0"
  },
  {
    "url": "zh/api/index.html",
    "revision": "b24341482ba15e12e59a2e1a30653bfe"
  },
  {
    "url": "zh/api/qlcgo/account.html",
    "revision": "b3d6cb5aa6d6001bd3f1d242edbd558e"
  },
  {
    "url": "zh/api/qlcgo/client.html",
    "revision": "c6810089e094c928b87a6e0caa8395dd"
  },
  {
    "url": "zh/api/qlcgo/contract.html",
    "revision": "a4a53e099cd6ea2a3cecd95d8ccaa64f"
  },
  {
    "url": "zh/api/qlcgo/index.html",
    "revision": "8bc60db4a081e7b47ef59b2b9006b1d0"
  },
  {
    "url": "zh/api/qlcgo/ledger.html",
    "revision": "cb96b6f4edf3d41ea24a5e765c5da1a3"
  },
  {
    "url": "zh/api/qlcgo/mintage.html",
    "revision": "dd7f3961a53e01b1a7d2ba1a2b8810ef"
  },
  {
    "url": "zh/api/qlcgo/net.html",
    "revision": "d673441e82f74abeb26f4ff509ae4664"
  },
  {
    "url": "zh/api/qlcgo/util.html",
    "revision": "22c55dd7a9ac96d153e9c45cf98e596f"
  },
  {
    "url": "zh/api/qlcjs/client.html",
    "revision": "fc28658cbbb640197bd99711f57ae1e4"
  },
  {
    "url": "zh/api/qlcjs/common.html",
    "revision": "3509cdfe3f3d5fe786fbab7e9e89456b"
  },
  {
    "url": "zh/api/qlcjs/common/index.html",
    "revision": "8d0e0cdd10b824ae1e947a68a2b7ece7"
  },
  {
    "url": "zh/api/qlcjs/index.html",
    "revision": "15d2035277d6a42488d6b9335776e263"
  },
  {
    "url": "zh/api/qlcjs/provider.html",
    "revision": "0720ff351293182c9e3104ef9c046c3f"
  },
  {
    "url": "zh/api/qlcjs/provider/http.html",
    "revision": "991c345b36989635eeff934c44a496ef"
  },
  {
    "url": "zh/api/qlcjs/provider/index.html",
    "revision": "fcdefff62474a68c52650c0df8521e75"
  },
  {
    "url": "zh/api/qlcjs/provider/ipc.html",
    "revision": "0f5ae4ec7cae2210e6c43dffc824c4df"
  },
  {
    "url": "zh/api/qlcjs/provider/ws.html",
    "revision": "cf6603426abf74472d4fcc22ef0992df"
  },
  {
    "url": "zh/api/qlcjs/wallet/account.html",
    "revision": "5ef6c61b35cdb6b4c3b8db5b382efbdc"
  },
  {
    "url": "zh/api/qlcjs/wallet/wallet.html",
    "revision": "1117f96d440f5ecfde450d2b53120665"
  },
  {
    "url": "zh/api/rpc/account.html",
    "revision": "efe14258e1b73ad02fb72d43446e4502"
  },
  {
    "url": "zh/api/rpc/contract.html",
    "revision": "bd2010239a9099816572fc591db70766"
  },
  {
    "url": "zh/api/rpc/destroy.html",
    "revision": "e26755ed14bfc6c1b6b57155319196dd"
  },
  {
    "url": "zh/api/rpc/dod_settlement.html",
    "revision": "51fa59b7cd9fc74c43a475317a69ef60"
  },
  {
    "url": "zh/api/rpc/dpki.html",
    "revision": "ed657e09955dadbf88ae845c01713e3f"
  },
  {
    "url": "zh/api/rpc/index.html",
    "revision": "ba2a3a2aed6c2ebf5f1caa711efc4c76"
  },
  {
    "url": "zh/api/rpc/kyc.html",
    "revision": "be673e42d004f725e792cfca3252a6b2"
  },
  {
    "url": "zh/api/rpc/ledger.html",
    "revision": "5a23b69858d5b75fd57ab2e124ef69f9"
  },
  {
    "url": "zh/api/rpc/miner.html",
    "revision": "6fdd3cdfa758a47381d562f96291f222"
  },
  {
    "url": "zh/api/rpc/mintage.html",
    "revision": "e94455efcc00e7861b5fb099d2a3aed9"
  },
  {
    "url": "zh/api/rpc/net.html",
    "revision": "c53851fcb0995748ba1c99dfead724bb"
  },
  {
    "url": "zh/api/rpc/permission.html",
    "revision": "dc1993841f0eb76e67c8bf979facc63b"
  },
  {
    "url": "zh/api/rpc/pledge.html",
    "revision": "f72d54ffcf1fef655996c4c5b92879ba"
  },
  {
    "url": "zh/api/rpc/pov.html",
    "revision": "7af2f28ddda7f7c8f4d57cdbadc0b1e7"
  },
  {
    "url": "zh/api/rpc/ptmkey.html",
    "revision": "19b72dd50b9f3fc877dbb991241d7545"
  },
  {
    "url": "zh/api/rpc/pubsub.html",
    "revision": "8a1609c7f95a7d3ca3f7f4dc9f945c1e"
  },
  {
    "url": "zh/api/rpc/rep.html",
    "revision": "d81dd80061e2fac687b75bbaf10db122"
  },
  {
    "url": "zh/api/rpc/rewards.html",
    "revision": "d483b41521104c709186535565d780a2"
  },
  {
    "url": "zh/api/rpc/settlement.html",
    "revision": "d7361a08e077acd6fb774376d2869197"
  },
  {
    "url": "zh/api/rpc/util.html",
    "revision": "39b3d7184ce91aef4683a339229ed145"
  },
  {
    "url": "zh/api/rpc/wallet.html",
    "revision": "1859d36a6f7601c8d5ebf8d832c8a6ac"
  },
  {
    "url": "zh/index.html",
    "revision": "32b2931079386f0bdd5b4a1c08ec0b28"
  },
  {
    "url": "zh/tutorial/getstarted/index.html",
    "revision": "ba717b2353a75b52f1186949c6193dc7"
  },
  {
    "url": "zh/tutorial/index.html",
    "revision": "3e40dd805fafa69309d8840897e39831"
  },
  {
    "url": "zh/tutorial/mining/auxpow.html",
    "revision": "430d731ee0e5760ab5ac57a3397904cc"
  },
  {
    "url": "zh/tutorial/mining/pow.html",
    "revision": "a8a4296499bd1d3986cdc95959cdb5a4"
  },
  {
    "url": "zh/tutorial/node/cli.html",
    "revision": "76217fc620d475c58e4ec0e74584b91f"
  },
  {
    "url": "zh/tutorial/node/config.html",
    "revision": "dc021776ca6e279c105d887853d9f2b7"
  },
  {
    "url": "zh/tutorial/node/install.html",
    "revision": "afe1c7ae0080f5842b44c521bcce9083"
  },
  {
    "url": "zh/tutorial/wallet/install.html",
    "revision": "e33ecc2d15752f3b1f13a7b90573e82c"
  },
  {
    "url": "zh/tutorial/wallet/manage.html",
    "revision": "41ab9741a1646cf531fc0d9c0039584d"
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
