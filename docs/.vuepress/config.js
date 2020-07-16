const sidebarConfigs = {
  tutorial: [
    {
      collapsable: false,
      children: ["getstarted/"],
    },
    {
      collapsable: false,
      children: ["node/install", "node/config", "node/cli"],
    },
    {
      collapsable: false,
      children: ["wallet/install", "wallet/manage"],
    },
    {
      collapsable: false,
      children: ["mining/pow", "mining/auxpow"],
    },
  ],
  "api/rpc": [
    {
      collapsable: false,
      children: [""],
    },
    // account
    {
      collapsable: false,
      children: ["account"],
    },
    // smart-contract
    {
      collapsable: false,
      children: ["contract"],
    },
    // ledger
    {
      collapsable: false,
      children: ["ledger"],
    },
    // chain contract
    {
      collapsable: false,
      children: ["mintage"],
    },
    // chain contract--pledge
    {
      collapsable: false,
      children: ["pledge"],
    },
    {
      collapsable: false,
      children: ["rewards"],
    },
    // chain contract--destroy
    {
      collapsable: false,
      children: ["destroy"],
    },
    // net
    {
      collapsable: false,
      children: ["net"],
    },
    // util
    {
      collapsable: false,
      children: ["util"],
    },
    // PoV
    {
      collapsable: false,
      children: ["pov"],
    },
    // miner
    {
      collapsable: false,
      children: ["miner"],
    },
    // representation
    {
      collapsable: false,
      children: ["rep"],
    },
    // pubsub
    {
      collapsable: false,
      children: ["pubsub"],
    },
    // dpki
    {
      collapsable: false,
      children: ["dpki"],
    },
    // settlement
    {
      collapsable: false,
      children: ["settlement"],
    },
    // permission
    {
      collapsable: false,
      children: ["permission"],
    },
    // ptmkey
    {
      collapsable: false,
      children: ["ptmkey"],
    },
    // dod_settlement
    {
      collapsable: false,
      children: ["dod_settlement"],
    },
    // KYC
    {
      collapsable: false,
      children: ["kyc"],
    }
  ],
  "api/qlcjs": [
    {
      collapsable: false,
      children: [""],
    },
    // client
    {
      collapsable: false,
      children: ["client"],
    },
    // provider
    {
      collapsable: false,
      children: ["provider", "provider/http", "provider/ws", "provider/ipc"],
    },
  ],
  "api/qlcgo": [
    {
      collapsable: false,
      children: [""],
    },
    // account
    {
      collapsable: false,
      children: ["account"],
    },
    // smart-contract
    {
      collapsable: false,
      children: ["contract"],
    },
    // ledger
    {
      collapsable: false,
      children: ["ledger"],
    },
    // chain contract
    {
      collapsable: false,
      children: ["mintage"],
    },
    // net
    {
      collapsable: false,
      children: ["net"],
    },
    // util
    {
      collapsable: false,
      children: ["util"],
    },
  ],
};

module.exports = {
  title: "QLC Chain Documents",
  description: "QLC Chain is a next generation public blockchain designed for the NaaS.",
  locales: {
    "/": {
      lang: "en-US",
      title: "QLC Chain Documents",
      description: "QLC Chain is a next generation public blockchain designed for the NaaS.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "QLC Chain 文档",
      description: "QLC Chain is a next generation public blockchain designed for the NaaS.",
    },
  },
  head: [["link", { rel: "icon", href: `/icon.png` }]],
  configureWebpack: {
    resolve: {
      alias: {
        images: "../../assets/images",
      },
    },
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-132993140-1",
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    "@vuepress/medium-zoom",
    "@vuepress/back-to-top",
    "@vuepress/i18n-ui",
    "@vuepress/plugin-notification",
    [
      "redirect",
      {
        locales: true,
        storage: true,
      },
    ],
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description || $page.title,
        author: (_, $site) => "Vite Labs",
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => "summary_large_image",
        type: $page =>
          ["articles", "posts", "blog"].some(folder => $page.regularPath.startsWith("/" + folder))
            ? "article"
            : "website",
        url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
        image: ($page, $site) => $page.frontmatter.image && ($site.themeConfig.domain || "") + $page.frontmatter.image,
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
    "pangu",
    "tabs",
    [require("./plugins/tab-code-example")],
  ],
  themeConfig: {
    editLinks: true,
    docsDir: "docs",
    search: true,
    docsRepo: "qlcchain/docs",
    sidebarDepth: 3,
    repo: "qlcchain/go-qlc",
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: require("./nav/en"),
        sidebar: {
          "/tutorial/": genSidebarConfig("tutorial", "Start", "Node", "Wallet", "Mining"),
          "/api/rpc/": genSidebarConfig(
            "api/rpc",
            "RPC interface",
            "Account",
            "Contract",
            "Ledger",
            "Mintage",
            "pledge",
            "Rewards",
            "Destroy",
            "Net",
            "Util",
            "PoV",
            "Miner",
            "Representation",
            "Pub–Sub",
            "DPKI",
            "Settlement",
            "Permission",
            "Ptmkey",
            "DoDSettlement",
            "KYC"
          ),
          "/api/qlcgo/": genSidebarConfig(
            "api/qlcgo",
            "Golang SDK",
            "Account",
            "Contract",
            "Ledger",
            "Mintage",
            "P2P",
            "Util"
          ),
          "/api/qlcjs/": genSidebarConfig("api/qlcjs", "Javascript SDK", "Client", "Provider"),
        },
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: require("./nav/zh"),
        sidebar: {
          "/zh/tutorial/": genSidebarConfig("tutorial", "开始", "节点", "钱包", "挖矿"),
          "/zh/api/rpc/": genSidebarConfig(
            "api/rpc",
            "RPC 接口",
            "账户",
            "智能合约",
            "账本",
            "铸币合约",
            "抵押合约",
            "空投",
            "销毁合约",
            "网络",
            "工具集合",
            "PoV",
            "矿工",
            "代表",
            "订阅-通知",
            "DKPI",
            "结算",
            "接入控制",
            "DoD结算",
            "KYC"
          ),
          "/zh/api/qlcgo/": genSidebarConfig(
            "api/qlcgo",
            "Golang SDK",
            "账户",
            "合约",
            "账本",
            "铸币合约",
            "P2P",
            "工具集合"
          ),
          "/zh/api/qlcjs/": genSidebarConfig("api/qlcjs", "Javascript SDK", "RPC 客户端", "网络连接层"),
        },
        demo: {
          errorMessage: "JSON 解析失败，请检查代码格式是否正确。以下是错误信息：",
          successMessage: "运行结果:",
          resetMessage: "重置代码成功",
        },
      },
    },
  },
};

// function genSidebarConfig(nav, ...titles) {
//   v = sidebarConfigs[nav]
//   if (Array.isArray(v)) {
//     return v.map((item, index) => {
//       return Object.assign({}, item, {
//         title: titles[index]
//       })
//     })
//   }
// }

function genSidebarConfig(nav, ...titles) {
  return sidebarConfigs[nav].map((item, index) => {
    return Object.assign({}, item, {
      title: titles[index],
    });
  });
}
