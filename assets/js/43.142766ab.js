(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{265:function(e,a,t){"use strict";t.r(a);var r=t(2),s=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[e._v("#")]),e._v(" Install")]),e._v(" "),t("h2",{attrs:{id:"prepare-executable-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-executable-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Prepare  executable file")]),e._v(" "),t("p",[e._v("There are three ways to get  executable file：")]),e._v(" "),t("ul",[t("li",[e._v("Compile go-qlc  source code")]),e._v(" "),t("li",[e._v("Download from go-qlc release page")]),e._v(" "),t("li",[e._v("Download the docker image from docker hub")])]),e._v(" "),t("h3",{attrs:{id:"compile-go-qlc-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-go-qlc-source-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Compile go-qlc  source code")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",[e._v("Go 1.11.1 or above version is required. See Go installation guild: "),t("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("go installation"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"get-go-qlc-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-go-qlc-source-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Get go-qlc source code")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Use "),t("code",[e._v("go get")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("go get https://github.com/qlcchain/go-qlc.git\n")])])]),t("p",[e._v("source code is downloaded at：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$GOPATH/src/github.com/qlcchain/go-qlc/\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Use "),t("code",[e._v("git clone")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git clone https://github.com/qlcchain/go-qlc.git\n")])])]),t("p",[e._v("source code is downloaded at current directory")])])]),e._v(" "),t("h4",{attrs:{id:"compile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile","aria-hidden":"true"}},[e._v("#")]),e._v(" Compile")]),e._v(" "),t("div",{staticClass:"language-shellthen you can get the executable file for all platforms，like this： extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("make clean all\n")])])]),t("p",[e._v("then you can get the executable file for all platforms，like this：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gqlc-darwin-amd64-v1.0.1-9406ee2\t\t\t    // go-qlc mainnet server for mac OS\ngqlc-linux-amd64-v1.0.1-9406ee2                  // go-qlc mainnet server for linux OS\ngqlc-windows-386-v1.0.1-9406ee2.exe              // go-qlc mainnet server for Windows 386 OS\ngqlc-windows-amd64-v1.0.1-9406ee2.exe            // go-qlc mainnet server for Windows amd64\n")])])]),t("p",[e._v("Select the files you need based on your own operating system.")]),e._v(" "),t("h3",{attrs:{id:"download-from-go-qlc-release-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-from-go-qlc-release-page","aria-hidden":"true"}},[e._v("#")]),e._v(" Download from  go-qlc release page")]),e._v(" "),t("p",[e._v("Link is：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://github.com/qlcchain/go-qlc/releases\n")])])]),t("h3",{attrs:{id:"download-the-docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-the-docker-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Download the docker image")]),e._v(" "),t("p",[e._v("You can access "),t("a",{attrs:{href:"https://hub.docker.com/r/qlcchain/go-qlc/tags",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-qlc dockerhub"),t("OutboundLink")],1),e._v(" to find  latest release version and download it.")]),e._v(" "),t("p",[e._v("for example，now our latest release version is v1.0.1，use command")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker pull qlcchain/go-qlc:v1.0.1\n")])])]),t("h2",{attrs:{id:"start-go-qlc-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-go-qlc-node","aria-hidden":"true"}},[e._v("#")]),e._v(" Start go-qlc node")]),e._v(" "),t("h3",{attrs:{id:"start-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-node","aria-hidden":"true"}},[e._v("#")]),e._v(" Start node")]),e._v(" "),t("h4",{attrs:{id:"start-a-normal-node-without-an-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-a-normal-node-without-an-account","aria-hidden":"true"}},[e._v("#")]),e._v(" start a normal node without an account")]),e._v(" "),t("p",[e._v("example：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gqlc-windows-amd64-v1.0.1-9406ee2.exe\n")])])]),t("h4",{attrs:{id:"start-an-account-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-an-account-node","aria-hidden":"true"}},[e._v("#")]),e._v(" start an account node")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("by seed")]),e._v(" "),t("p",[e._v("example：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gqlc-windows-amd64-v1.0.1-9406ee2.exe \\\n--seed ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50\n")])])])]),e._v(" "),t("li",[t("p",[e._v("by privateKey")]),e._v(" "),t("p",[e._v("example：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gqlc-windows-amd64-v1.0.1-9406ee2.exe \\\n--privateKey 9ca95e184d99769a3e324bbcf57906d04a9c221db72c5af491fc8e7c958f1c6526691fd4b19f28cf279f188769c672cdde577c8360498083da653e02b53f5a8a\n")])])])]),e._v(" "),t("li",[t("p",[e._v("by account")]),e._v(" "),t("p",[e._v("if you want start a node by account ，you need first import account into wallet")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Import account into wallet")]),e._v(" "),t("p",[e._v("example：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gqlc-windows-amd64-v1.0.1-9406ee2.exe walletimport \\\n--seed ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50 \\\n--password 123456\n")])])]),t("p",[e._v("if you cat")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import seed[ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50] \\\npassword[123456] => qlc_1h14ymitgs6x5895b57wdi7gedop7jmnihxwryhgnr8ry1ecmpg9io6kkbha \\\nsuccess\n")])])]),t("p",[e._v("prove that the import was successful")])]),e._v(" "),t("li",[t("p",[e._v("start a node")]),e._v(" "),t("p",[e._v("example：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gqlc-windows-amd64-v1.0.1-9406ee2.exe \\\n--account qlc_1h14ymitgs6x5895b57wdi7gedop7jmnihxwryhgnr8ry1ecmpg9io6kkbha \\\n--password 123456\n")])])])])])])]),e._v(" "),t("h3",{attrs:{id:"start-node-by-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-node-by-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Start  node by Docker")]),e._v(" "),t("p",[e._v("If you want to start a node by docker, you need to refer to "),t("code",[e._v("Prepare executable file")]),e._v(" and download the docker image from docker hub .")]),e._v(" "),t("p",[e._v("You can choose to start a normal node without an account or start an account node.")]),e._v(" "),t("h4",{attrs:{id:"start-a-normal-node-without-an-account-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-a-normal-node-without-an-account-2","aria-hidden":"true"}},[e._v("#")]),e._v(" start a normal node without an account")]),e._v(" "),t("p",[e._v("example：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker container run -d --name go-qlc \\\n--restart always \\\n-p 19734:19734 \\\n-p 19735:19735 \\\n-p 19736:19736 \\\n-v /root/.gqlcchain:/root/.gqlcchain \\\nqlcchain/go-qlc:v1.0.1\n\n")])])]),t("blockquote",[t("p",[t("code",[e._v("--restart always")]),e._v(" for more docker docs, please refer to the docker "),t("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"start-an-account-node-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-an-account-node-2","aria-hidden":"true"}},[e._v("#")]),e._v(" start an account node")]),e._v(" "),t("p",[e._v("You only need to assign a value to the environment variable "),t("code",[e._v("seed")]),e._v(" to start an account node")]),e._v(" "),t("p",[e._v("example：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('docker container run -d --name go-qlc \\\n--restart always \\\n-e seed="ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50" \\\n-p 19734:19734 \\\n-p 19735:19735 \\\n-p 19736:19736 \\\n-v /root/.gqlcchain:/root/.gqlcchain \\\nqlcchain/go-qlc:v1.0.1\n\n')])])])])},[],!1,null,null,null);a.default=s.exports}}]);