 var obj1 = {                                                                                                                                                                   16:53:45
  telemetry: {
    enabled: false
  },
  target: 'server',
  head: {
    title: 'defu-nuxt',
    htmlAttrs: {
      lang: 'zh-cn'
    },
    meta: [
      [Object],
      [Object],
      [Object],
      [Object]
    ],
    link: [
      [Object],
      [Object]
    ],
    style: [],
    script: []
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'static/iconfont/iconfont.css'
  ],
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/hello-fetch'
  ],
  components: true,
  buildModules: [
    '~/modules/ngrok'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {},
  build: {
    transpile: [
      /^element-ui/
    ],
    publicPath: '/_nuxt/',
    quiet: false,
    analyze: false,
    profile: false,
    extractCSS: false,
    cssSourceMap: true,
    ssr: true,
    parallel: false,
    cache: false,
    standalone: false,
    serverURLPolyfill: 'url',
    filenames: {
      app: [Function: app],
      chunk: [Function: chunk],
      css: [Function: css],
      img: [Function: img],
      font: [Function: font],
      video: [Function: video]
    },
    loaders: {
      file: [Object],
      fontUrl: [Object],
      imgUrl: [Object],
      pugPlain: {},
      vue: [Object],
      css: [Object],
      cssModules: [Object],
      less: [Object],
      sass: [Object],
      scss: [Object],
      stylus: [Object],
      vueStyle: [Object]
    },
    styleResources: {},
    plugins: [],
    terser: {},
    hardSource: false,
    aggressiveCodeRemoval: false,
    optimizeCSS: false,
    optimization: {
      runtimeChunk: 'single',
      minimize: false,
      minimizer: undefined,
      splitChunks: [Object]
    },
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    },
    corejs: 'auto',
    babel: {
      configFile: false,
      babelrc: false,
      cacheDirectory: true
    },
    postcss: {
      preset: [Object]
    },
    html: {
      minify: [Object]
    },
    template: undefined,
    templates: [],
    watch: [],
    devMiddleware: {
      stats: 'none'
    },
    hotMiddleware: {},
    stats: {
      excludeAssets: [Array]
    },
    friendlyErrors: true,
    additionalExtensions: [],
    warningIgnoreFilters: [],
    followSymlinks: false,
    loadingScreen: {},
    indicator: {
      position: 'bottom-right',
      backgroundColor: '#2E495E',
      color: '#00C48D'
    },
    _publicPath: '/_nuxt/'
  },
  _nuxtConfigFile: 'E:\\myProject\\my-nuxt\\nuxt.config.js',
  _nuxtConfigFiles: [
    'E:\\myProject\\my-nuxt\\nuxt.config.js'
  ],
  rootDir: 'E:\\myProject\\my-nuxt',
  _env: [Object: null prototype] {
    ALLUSERSPROFILE: 'C:\\ProgramData',
    ANDROID_HOME: 'D:\\Android\\SDK;D:\\Android\\SDK\\platform-tools;',
    APPDATA: 'C:\\Users\\gs\\AppData\\Roaming',
    CATALINA_HOME: 'D:\\TMCMS\\TMCMS\\apache-tomcat-7.0.67-windows-x64\\apache-tomcat-7.0.67\\bin\\',
    ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
    ChocolateyLastPathUpdate: '132512596304465864',
    ChocolateyToolsLocation: 'C:\\tools',
    CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\crashpad_6776_MNSPXMSZKNJZIIEA',
    CLASSPATH: ';D:\\java\\jdk1.8.0_121\\bin;D:\\java\\jdk1.8.0_121\\lib\\dt.jar;D:\\java\\jdk1.8.0_121\\lib\\tools.jar',
    COLORTERM: 'truecolor',
    CommonProgramFiles: 'C:\\Program Files\\Common Files',
    'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
    CommonProgramW6432: 'C:\\Program Files\\Common Files',
    COMPUTERNAME: 'C15JXKJ088',
    ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
    CURL_HOME: 'E:\\software\\curl-7.50.3',
    DEVMGR_SHOW_DETAILS: '1',
    DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
    FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
    FPS_BROWSER_USER_PROFILE_STRING: 'Default',
    FP_NO_HOST_CHECK: 'NO',
    GIT_ASKPASS: 'd:\\Program Files\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh',
    HOMEDRIVE: 'C:',
    HOMEPATH: '\\Users\\gs',
    INIT_CWD: 'E:\\myProject\\my-nuxt',
    'IntelliJ IDEA': 'D:\\JetBrains\\IntelliJ IDEA 2019.3.4\\bin;',
    JAVA_HOME: 'D:\\java\\jdk1.8.0_121',
    LANG: 'en_US.UTF-8',
    LOCALAPPDATA: 'C:\\Users\\gs\\AppData\\Local',
    LOGONSERVER: '\\\\C15JXKJ088',
    MAVEN_HOME: 'E:\\apache-maven-3.5.3',
    MYSQL_HOME: 'D:\\mysql',
    NODE: 'D:\\Program Files\\nodejs\\node.exe',
    NODE_ENV: 'development',
    NODE_PATH: 'E:\\nodejs\\node_global\\node_modules',
    npm_config_argv: '{"remain":[],"cooked":["run","dev"],"original":["dev"]}',
    npm_config_bin_links: 'true',
    npm_config_ignore_optional: '',
    npm_config_ignore_scripts: '',
    npm_config_init_license: 'MIT',
    npm_config_init_version: '1.0.0',
    npm_config_proxy: '',
    npm_config_registry: 'http://registry.npm.taobao.org/',
    npm_config_save_prefix: '^',
    npm_config_strict_ssl: 'true',
    npm_config_user_agent: 'yarn/1.22.10 npm/? node/v14.15.1 win32 x64',
    npm_config_version_commit_hooks: 'true',
    npm_config_version_git_message: 'v%s',
    npm_config_version_git_sign: '',
    npm_config_version_git_tag: 'true',
    npm_config_version_tag_prefix: 'v',
    npm_execpath: 'C:\\Users\\gs\\AppData\\Roaming\\npm\\node_modules\\yarn\\bin\\yarn.js',
    npm_lifecycle_event: 'dev',
    npm_lifecycle_script: 'nuxt',
    npm_node_execpath: 'D:\\Program Files\\nodejs\\node.exe',
    npm_package_dependencies_core_js: '^3.15.1',
    npm_package_dependencies_element_ui: '^2.15.2',
    npm_package_dependencies_js_md5: '^0.7.3',
    npm_package_dependencies_lodash: '^4.17.21',
    npm_package_dependencies_nuxt: '^2.15.7',
    npm_package_dependencies_qs: '^6.10.1',
    npm_package_dependencies__nuxtjs_axios: '^5.13.6',
    npm_package_description: '## Build Setup',
    npm_package_devDependencies_ngrok: '^4.2.2',
    npm_package_name: 'my-nuxt',
    npm_package_private: 'true',
    npm_package_readmeFilename: 'README.md',
    npm_package_scripts_build: 'nuxt build',
    npm_package_scripts_dev: 'nuxt',
    npm_package_scripts_generate: 'nuxt generate',
    npm_package_scripts_start: 'nuxt start',
    npm_package_version: '1.0.0',
    NUMBER_OF_PROCESSORS: '4',
    OneDrive: 'C:\\Users\\gs\\OneDrive',
    ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
    OS: 'Windows_NT',
    Path: 'C:\\Users\\gs\\AppData\\Local\\Temp\\yarn--1634806425104-0.6636761677064875;E:\\myProject\\my-nuxt\\node_modules\\.bin;C:\\Users\\gs\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Users\\gs\\AppData\\Local\\Yarn\\bin;D:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;D:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;D:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Python39\\Scripts\\;C:\\Python39\\;C:\\ProgramData\\Oracle\\Java\\javapath;D:\\Program Files (x86)\\Python37-32\\Scripts\\;D:\\java\\jdk1.8.0_121\\bin;D:\\Android\\SDK;D:\\Android\\SDK\\platform-tools;;D:\\Program Files\\nodejs;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;D:\\Redis-x64-3.0.504;E:\\Git\\cmd;E:\\apache-maven-3.5.3\\bin;D:\\Program Files (x86)\\Python37-32;D:\\Program Files\\OpenSSL-Win64\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;D:\\Program Files\\OpenVPN\\bin;E:\\nodejs\\node_global;;D:\\Program Files\\Microsoft VS Code\\bin;D:\\Program Files\\TortoiseGit\\bin;D:\\Sencha\\Cmd;E:\\nodejs\\node_global;C:\\Program Files (x86)\\Nmap;D:\\Program Files\\Microsoft VS Code\\bin;D:\\Sencha\\Cmd\\6.2.2.36;D:\\java\\jdk1.8.0_121\\bin;D:\\Program Files\\nodejs;D:\\Program Files\\JetBrains\\PyCharm Community Edition 2019.2.2\\bin;;D:\\Program Files (x86)\\nodejs;D:\\JetBrains\\IntelliJ IDEA 2019.3.4\\bin;;C:\\Users\\gs\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\gs\\AppData\\Roaming\\npm;D:\\Program Files\\Fiddler',
    PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL',
    PROCESSOR_ARCHITECTURE: 'AMD64',
    PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 60 Stepping 3, GenuineIntel',
    PROCESSOR_LEVEL: '6',
    PROCESSOR_REVISION: '3c03',
    ProgramData: 'C:\\ProgramData',
    ProgramFiles: 'C:\\Program Files',
    'ProgramFiles(x86)': 'C:\\Program Files (x86)',
    ProgramW6432: 'C:\\Program Files',
    PROMPT: '$P$G',
    PSModulePath: 'D:\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules\\',
    PUBLIC: 'C:\\Users\\Public',
    'PyCharm Community Edition': 'D:\\Program Files\\JetBrains\\PyCharm Community Edition 2019.2.2\\bin;',
    SESSIONNAME: 'Console',
    SystemDrive: 'C:',
    SystemRoot: 'C:\\WINDOWS',
    TEMP: 'C:\\Users\\gs\\AppData\\Local\\Temp',
    TERM_PROGRAM: 'vscode',
    TERM_PROGRAM_VERSION: '1.61.2',
    TMP: 'C:\\Users\\gs\\AppData\\Local\\Temp',
    USERDOMAIN: 'C15JXKJ088',
    USERDOMAIN_ROAMINGPROFILE: 'C15JXKJ088',
    USERNAME: 'gs',
    USERPROFILE: 'C:\\Users\\gs',
    VSCODE_GIT_ASKPASS_MAIN: 'd:\\Program Files\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js',
    VSCODE_GIT_ASKPASS_NODE: 'D:\\Program Files\\Microsoft VS Code\\Code.exe',
    VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-1c1743eb8f-sock',
    windir: 'C:\\WINDOWS',
    windows_tracing_flags: '3',
    windows_tracing_logfile: 'C:\\BVTBin\\Tests\\installpackage\\csilogfile.log',
    YARN_WRAP_OUTPUT: 'false'
  },
  _envConfig: {
    dotenv: 'E:\\myProject\\my-nuxt\\.env',
    env: {
      ALLUSERSPROFILE: 'C:\\ProgramData',
      ANDROID_HOME: 'D:\\Android\\SDK;D:\\Android\\SDK\\platform-tools;',
      APPDATA: 'C:\\Users\\gs\\AppData\\Roaming',
      CATALINA_HOME: 'D:\\TMCMS\\TMCMS\\apache-tomcat-7.0.67-windows-x64\\apache-tomcat-7.0.67\\bin\\',
      ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
      ChocolateyLastPathUpdate: '132512596304465864',
      ChocolateyToolsLocation: 'C:\\tools',
      CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\crashpad_6776_MNSPXMSZKNJZIIEA',
      CLASSPATH: ';D:\\java\\jdk1.8.0_121\\bin;D:\\java\\jdk1.8.0_121\\lib\\dt.jar;D:\\java\\jdk1.8.0_121\\lib\\tools.jar',
      COLORTERM: 'truecolor',
      CommonProgramFiles: 'C:\\Program Files\\Common Files',
      'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
      CommonProgramW6432: 'C:\\Program Files\\Common Files',
      COMPUTERNAME: 'C15JXKJ088',
      ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
      CURL_HOME: 'E:\\software\\curl-7.50.3',
      DEVMGR_SHOW_DETAILS: '1',
      DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
      FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
      FPS_BROWSER_USER_PROFILE_STRING: 'Default',
      FP_NO_HOST_CHECK: 'NO',
      GIT_ASKPASS: 'd:\\Program Files\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh',
      HOMEDRIVE: 'C:',
      HOMEPATH: '\\Users\\gs',
      INIT_CWD: 'E:\\myProject\\my-nuxt',
      'IntelliJ IDEA': 'D:\\JetBrains\\IntelliJ IDEA 2019.3.4\\bin;',
      JAVA_HOME: 'D:\\java\\jdk1.8.0_121',
      LANG: 'en_US.UTF-8',
      LOCALAPPDATA: 'C:\\Users\\gs\\AppData\\Local',
      LOGONSERVER: '\\\\C15JXKJ088',
      MAVEN_HOME: 'E:\\apache-maven-3.5.3',
      MYSQL_HOME: 'D:\\mysql',
      NODE: 'D:\\Program Files\\nodejs\\node.exe',
      NODE_ENV: 'development',
      NODE_PATH: 'E:\\nodejs\\node_global\\node_modules',
      npm_config_argv: '{"remain":[],"cooked":["run","dev"],"original":["dev"]}',
      npm_config_bin_links: 'true',
      npm_config_ignore_optional: '',
      npm_config_ignore_scripts: '',
      npm_config_init_license: 'MIT',
      npm_config_init_version: '1.0.0',
      npm_config_proxy: '',
      npm_config_registry: 'http://registry.npm.taobao.org/',
      npm_config_save_prefix: '^',
      npm_config_strict_ssl: 'true',
      npm_config_user_agent: 'yarn/1.22.10 npm/? node/v14.15.1 win32 x64',
      npm_config_version_commit_hooks: 'true',
      npm_config_version_git_message: 'v%s',
      npm_config_version_git_sign: '',
      npm_config_version_git_tag: 'true',
      npm_config_version_tag_prefix: 'v',
      npm_execpath: 'C:\\Users\\gs\\AppData\\Roaming\\npm\\node_modules\\yarn\\bin\\yarn.js',
      npm_lifecycle_event: 'dev',
      npm_lifecycle_script: 'nuxt',
      npm_node_execpath: 'D:\\Program Files\\nodejs\\node.exe',
      npm_package_dependencies_core_js: '^3.15.1',
      npm_package_dependencies_element_ui: '^2.15.2',
      npm_package_dependencies_js_md5: '^0.7.3',
      npm_package_dependencies_lodash: '^4.17.21',
      npm_package_dependencies_nuxt: '^2.15.7',
      npm_package_dependencies_qs: '^6.10.1',
      npm_package_dependencies__nuxtjs_axios: '^5.13.6',
      npm_package_description: '## Build Setup',
      npm_package_devDependencies_ngrok: '^4.2.2',
      npm_package_name: 'my-nuxt',
      npm_package_private: 'true',
      npm_package_readmeFilename: 'README.md',
      npm_package_scripts_build: 'nuxt build',
      npm_package_scripts_dev: 'nuxt',
      npm_package_scripts_generate: 'nuxt generate',
      npm_package_scripts_start: 'nuxt start',
      npm_package_version: '1.0.0',
      NUMBER_OF_PROCESSORS: '4',
      OneDrive: 'C:\\Users\\gs\\OneDrive',
      ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
      OS: 'Windows_NT',
      Path: 'C:\\Users\\gs\\AppData\\Local\\Temp\\yarn--1634806425104-0.6636761677064875;E:\\myProject\\my-nuxt\\node_modules\\.bin;C:\\Users\\gs\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Users\\gs\\AppData\\Local\\Yarn\\bin;D:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;D:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;D:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Python39\\Scripts\\;C:\\Python39\\;C:\\ProgramData\\Oracle\\Java\\javapath;D:\\Program Files (x86)\\Python37-32\\Scripts\\;D:\\java\\jdk1.8.0_121\\bin;D:\\Android\\SDK;D:\\Android\\SDK\\platform-tools;;D:\\Program Files\\nodejs;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;D:\\Redis-x64-3.0.504;E:\\Git\\cmd;E:\\apache-maven-3.5.3\\bin;D:\\Program Files (x86)\\Python37-32;D:\\Program Files\\OpenSSL-Win64\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;D:\\Program Files\\OpenVPN\\bin;E:\\nodejs\\node_global;;D:\\Program Files\\Microsoft VS Code\\bin;D:\\Program Files\\TortoiseGit\\bin;D:\\Sencha\\Cmd;E:\\nodejs\\node_global;C:\\Program Files (x86)\\Nmap;D:\\Program Files\\Microsoft VS Code\\bin;D:\\Sencha\\Cmd\\6.2.2.36;D:\\java\\jdk1.8.0_121\\bin;D:\\Program Files\\nodejs;D:\\Program Files\\JetBrains\\PyCharm Community Edition 2019.2.2\\bin;;D:\\Program Files (x86)\\nodejs;D:\\JetBrains\\IntelliJ IDEA 2019.3.4\\bin;;C:\\Users\\gs\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\gs\\AppData\\Roaming\\npm;D:\\Program Files\\Fiddler',
      PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL',
      PROCESSOR_ARCHITECTURE: 'AMD64',
      PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 60 Stepping 3, GenuineIntel',
      PROCESSOR_LEVEL: '6',
      PROCESSOR_REVISION: '3c03',
      ProgramData: 'C:\\ProgramData',
      ProgramFiles: 'C:\\Program Files',
      'ProgramFiles(x86)': 'C:\\Program Files (x86)',
      ProgramW6432: 'C:\\Program Files',
      PROMPT: '$P$G',
      PSModulePath: 'D:\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules\\',
      PUBLIC: 'C:\\Users\\Public',
      'PyCharm Community Edition': 'D:\\Program Files\\JetBrains\\PyCharm Community Edition 2019.2.2\\bin;',
      SESSIONNAME: 'Console',
      SystemDrive: 'C:',
      SystemRoot: 'C:\\WINDOWS',
      TEMP: 'C:\\Users\\gs\\AppData\\Local\\Temp',
      TERM_PROGRAM: 'vscode',
      TERM_PROGRAM_VERSION: '1.61.2',
      TMP: 'C:\\Users\\gs\\AppData\\Local\\Temp',
      USERDOMAIN: 'C15JXKJ088',
      USERDOMAIN_ROAMINGPROFILE: 'C15JXKJ088',
      USERNAME: 'gs',
      USERPROFILE: 'C:\\Users\\gs',
      VSCODE_GIT_ASKPASS_MAIN: 'd:\\Program Files\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js',
      VSCODE_GIT_ASKPASS_NODE: 'D:\\Program Files\\Microsoft VS Code\\Code.exe',
      VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-1c1743eb8f-sock',
      VUE_ENV: 'server',
      windir: 'C:\\WINDOWS',
      windows_tracing_flags: '3',
      windows_tracing_logfile: 'C:\\BVTBin\\Tests\\installpackage\\csilogfile.log',
      YARN_WRAP_OUTPUT: 'false',
      _applied: 'true'
    },
    expand: true
  },
  server: {
    https: false,
    port: 3000,
    host: 'localhost',
    socket: undefined,
    timing: false
  },
  dev: true,
  _build: true,
  _cli: true,
  __normalized__: true,
  globalName: 'nuxt',
  vue: {
    config: {
      silent: false,
      performance: true
    }
  },
  vueMeta: null,
  fetch: {
    server: true,
    client: true
  },
  extendPlugins: null,
  layouts: {},
  ErrorPage: null,
  loading: {
    color: 'black',
    failedColor: 'red',
    height: '2px',
    throttle: 200,
    duration: 5000,
    continuous: false,
    rtl: false,
    css: true
  },
  loadingIndicator: {
    name: 'default',
    color: 'black',
    color2: '#F5F5F5',
    background: 'white',
    dev: true,
    loading: 'Loading...'
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    appear: false,
    appearClass: 'appear',
    appearActiveClass: 'appear-active',
    appearToClass: 'appear-to'
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  features: {
    store: true,
    layouts: true,
    meta: true,
    middleware: true,
    transitions: true,
    deprecations: true,
    validate: true,
    asyncData: true,
    fetch: true,
    clientOnline: true,
    clientPrefetch: true,
    componentAliases: true,
    componentClientOnly: true
  },
  test: false,
  debug: true,
  env: {},
  createRequire: [Function (anonymous)],
  ssr: true,
  mode: 'universal',
  modern: undefined,
  _modules: [
    [
      '@nuxt/loading-screen',
      {}
    ],
    '@nuxt/components',
    '@nuxt/telemetry'
  ],
  globals: {
    id: [Function: id],
    nuxt: [Function: nuxt],
    context: [Function: context],
    pluginPrefix: [Function: pluginPrefix],
    readyCallback: [Function: readyCallback],
    loadedCallback: [Function: loadedCallback]
  },
  serverMiddleware: [],
  srcDir: 'E:\\myProject\\my-nuxt',
  buildDir: 'E:\\myProject\\my-nuxt\\.nuxt',
  modulesDir: [
    'E:\\myProject\\my-nuxt\\node_modules\\nuxt\\bin\\node_modules',
    'E:\\myProject\\my-nuxt\\node_modules\\nuxt\\node_modules',
    'E:\\myProject\\my-nuxt\\node_modules',
    'E:\\myProject\\node_modules',
    'E:\\node_modules'
  ],
  dir: {
    assets: 'assets',
    app: 'app',
    layouts: 'layouts',
    middleware: 'middleware',
    pages: 'pages',
    static: 'static',
    store: 'store'
  },
  extensions: [
    'js',
    'mjs'
  ],
  styleExtensions: [
    'css',
    'pcss',
    'postcss',
    'styl',
    'stylus',
    'scss',
    'sass',
    'less'
  ],
  alias: {
    '~~': 'E:\\myProject\\my-nuxt',
    '@@': 'E:\\myProject\\my-nuxt',
    '~': 'E:\\myProject\\my-nuxt',
    '@': 'E:\\myProject\\my-nuxt',
    assets: 'E:\\myProject\\my-nuxt\\assets',
    static: 'E:\\myProject\\my-nuxt\\static'
  },
  ignoreOptions: undefined,
  ignorePrefix: '-',
  ignore: [
    '**/*.test.*',
    '**/*.spec.*',
    '**/-*.*'
  ],
  watch: [
    'E:\\myProject\\my-nuxt\\nuxt.config.js'
  ],
  watchers: {
    rewatchOnRawEvents: undefined,
    webpack: {
      aggregateTimeout: 1000
    },
    chokidar: {
      ignoreInitial: true
    }
  },
  editor: undefined,
  hooks: null,
  privateRuntimeConfig: {},
  publicRuntimeConfig: {
    _app: {
      basePath: '/',
      assetsPath: '/_nuxt/',
      cdnURL: null
    }
  },
  messages: {
    loading: 'Loading...',
    error_404: 'This page could not be found',
    server_error: 'Server error',
    nuxtjs: 'Nuxt',
    back_to_home: 'Back to the home page',
    server_error_details: 'An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details.',
    client_error: 'Error',
    client_error_details: 'An error occurred while rendering the page. Check developer tools console for details.'
  },
  modes: {
    universal: {
      build: [Object],
      render: [Object]
    },
    spa: {
      build: [Object],
      render: [Object]
    }
  },
  render: {
    bundleRenderer: {
      shouldPrefetch: [Function: shouldPrefetch],
      shouldPreload: [Function: shouldPreload],
      runInNewContext: true
    },
    crossorigin: undefined,
    resourceHints: true,
    ssr: true,
    ssrLog: true,
    http2: {
      push: false,
      shouldPush: null,
      pushAssets: null
    },
    static: {
      prefix: true
    },
    compressor: {
      threshold: 0
    },
    etag: {
      weak: false
    },
    csp: false,
    dist: {
      index: false,
      maxAge: '1y'
    },
    fallback: {
      dist: {},
      static: [Object]
    }
  },
  router: {
    mode: 'history',
    base: '/',
    routes: [],
    routeNameSplitter: '-',
    middleware: [],
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    linkPrefetchedClass: false,
    extendRoutes: null,
    scrollBehavior: null,
    parseQuery: false,
    stringifyQuery: false,
    fallback: false,
    prefetchLinks: true,
    prefetchPayloads: true,
    trailingSlash: undefined
  },
  cli: {
    badgeMessages: [],
    bannerColor: 'green'
  },
  generate: {
    dir: 'E:\\myProject\\my-nuxt\\dist',
    routes: [],
    exclude: [],
    concurrency: 500,
    interval: 0,
    subFolders: true,
    fallback: '200.html',
    crawler: true,
    manifest: true,
    cache: {
      ignore: [],
      globbyOptions: [Object]
    },
    staticAssets: {
      base: '/_nuxt/static',
      versionBase: '/_nuxt/static/1634806426',
      dir: 'static',
      version: '1634806426'
    }
  },
  appTemplatePath: 'E:\\myProject\\my-nuxt\\.nuxt\\views\\app.template.html',
  store: true,
  app: {
    basePath: '/',
    assetsPath: '/_nuxt/',
    cdnURL: null
  }
}
