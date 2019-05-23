
const sidebarConfigs = {
  tutorial: [
    {
      collapsable: false,
      children: [
        'getstarted/',
      ]
    },
    {
      collapsable: false,
      children: [
        'node/install',
        'node/config',
      ]
    },
    {
      collapsable: false,
      children: [
        'wallet/install',
        'wallet/manage',
      ]
    },
  ],
  'api/rpc': [
    {
      collapsable: false,
      children: [
        '',
      ]
    },
    // account
    {
      collapsable: false,
      children: [
        'account',
      ]
    },
    // smart-contract
    {
      collapsable: false,
      children: [
        'contract'
      ]
    },
    // ledger
    {
      collapsable: false,
      children: [
        'ledger',
      ]
    },
    // chain contract
    {
      collapsable: false,
      children: [
        'mintage',
      ]
    },
    // chain contract--pledge
    {
      collapsable: false,
      children: [
        'pledge',
      ]
    },
    {
      collapsable: false,
      children: [
        'rewards',
      ]
    },
    // net
    {
      collapsable: false,
      children: [
        'net',
      ]
    },
    // sms
    {
      collapsable: false,
      children: [
        'sms',
      ]
    },
    // util
    {
      collapsable: false,
      children: [
        'util',
      ]
    },
    // wallet
    {
      collapsable: false,
      children: [
        'wallet',
      ]
    },
  ],
  'api/qlcjs': [
    {
      collapsable: false,
      children: [
        '',
      ]
    },
    // client
    {
      collapsable: false,
      children: [
        'client',
      ]
    },
    // provider
    {
      collapsable: false,
      children: [
        'provider',
        'provider/http',
        'provider/ws',
        'provider/ipc'
      ]
    }
  ],
  'api/qlcgo': [
    {
      collapsable: false,
      children: [
        '',
      ]
    },
    // account
    {
      collapsable: false,
      children: [
        'account',
      ]
    },
    // smart-contract
    {
      collapsable: false,
      children: [
        'contract'
      ]
    },
    // ledger
    {
      collapsable: false,
      children: [
        'ledger',
      ]
    },
    // chain contract
    {
      collapsable: false,
      children: [
        'mintage',
      ]
    },
    // net
    {
      collapsable: false,
      children: [
        'net',
      ]
    },
    // sms
    {
      collapsable: false,
      children: [
        'sms',
      ]
    },
    // util
    {
      collapsable: false,
      children: [
        'util',
      ]
    },
    // wallet
    {
      collapsable: false,
      children: [
        'wallet',
      ]
    },
  ]
};

module.exports = {
  title: "QLC Chain Documents",
  description: "QLC Chain is a next generation public blockchain designed for the NaaS.",
  ga: 'UA-132993140-1',
  locales: {
    "/": {
      lang: "en-US",
      title: "QLC Chain Documents",
      description: "QLC Chain is a next generation public blockchain designed for the NaaS."
    },
    "/zh/": {
      lang: "zh-CN",
      title: "QLC Chain 文档",
      description:
        "QLC Chain is a next generation public blockchain designed for the NaaS."
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/icon.png` }],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        'images': '../../assets/images'
      }
    }
  },
  plugins: [
    '@vuepress/google-analytics',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/i18n-ui',
    '@vuepress/plugin-notification',
    [require('./plugins/tab-code-example')]
  ],
  themeConfig: {
    editLinks: true,
    docsDir: 'docs',
    search: true,
    docsRepo: 'qlcchain/docs',
    sidebarDepth: 3,
    repo: 'qlcchain/go-qlc',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/tutorial/': genSidebarConfig('tutorial', 'Start', 'Node', 'Wallet'),
          '/api/rpc/': genSidebarConfig('api/rpc', 'RPC interface', 'Account', 'Contract', 'Ledger', 'Mintage', 'pledge','Rewards','Net', 'SMS', 'Util', 'Wallet'),
          '/api/qlcgo/': genSidebarConfig('api/qlcgo', 'Golang SDK', 'Account', 'Contract', 'Ledger', 'Mintage', 'P2P', 'SMS', 'Util', 'Wallet'),
          '/api/qlcjs/': genSidebarConfig('api/qlcjs', 'Javascript SDK', 'Client', 'Provider'),
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/tutorial/': genSidebarConfig('tutorial', '开始', '节点', '钱包'),
          '/zh/api/rpc/': genSidebarConfig('api/rpc', 'RPC 接口', '账户', '智能合约', '账本', '铸币合约', '抵押合约','空投','P2P', '短信业务', '工具集合', '钱包'),
          '/zh/api/qlcgo/': genSidebarConfig('api/qlcgo', 'Golang SDK', '账户', '合约', '账本', '铸币合约', 'P2P', '短信业务', '工具集合', '钱包'),
          '/zh/api/qlcjs/': genSidebarConfig('api/qlcjs', 'Javascript SDK', 'RPC 客户端', '网络连接层'),
        },
        demo: {
          errorMessage: 'JSON 解析失败，请检查代码格式是否正确。以下是错误信息：',
          successMessage: '运行结果:',
          resetMessage: '重置代码成功'
        }
      }
    },
  }
}

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
          title: titles[index]
      })
  })
}
