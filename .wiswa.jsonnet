local utils = import 'utils.libjsonnet';

(import 'defaults.libjsonnet') + {
  local top = self,
  // General settings
  project_type: 'typescript',
  keep_dist: true,

  // Shared
  github_username: 'Tatsh',
  security_policy_supported_versions: { '0.0.x': ':white_check_mark:' },
  authors: [
    {
      'family-names': 'Udvare',
      'given-names': 'Andrew',
      email: 'audvare@gmail.com',
      name: '%s %s' % [self['given-names'], self['family-names']],
    },
  ],
  project_name: '@tatsh/jxa-lib-examples',
  version: '0.0.3',
  description: 'jxa-lib examples.',
  keywords: ['applescript', 'jxa', 'macos', 'typescript'],
  want_main: false,
  copilot: {
    intro: 'jxa-lib-examples is a series of example scripts for JXA (JavaScript for Automation) utilising the jxa-lib library.',
  },
  social+: {
    mastodon+: { id: '109370961877277568' },
  },

  // GitHub
  github+: {
    funding+: {
      ko_fi: 'tatsh2',
      liberapay: 'tatsh2',
      patreon: 'tatsh2',
    },
  },

  // TypeScript only
  package_json+: {
    bin: './dist/index.js',
    devDependencies+: {
      '@types/node': '^24.0.10',
      '@types/ramda': '^0.30.2',
      'jxa-lib': '^0.1.7',
      'jxa-types': '^0.0.6',
      'ts-loader': '^9.5.2',
      'webpack-cli': '^6.0.1',
      'webpack-shebang-plugin': '^1.1.8',
      ramda: '^0.31.3',
      webpack: '^5.99.9',
    },
    files+: ['dist/index.js', 'dist/index.js.map'],
    main: 'dist/index.js',
  },
  eslint+: [{ rules: { '@typescript-eslint/no-unused-expressions': 'off' } }],
  tsconfig+: {
    compilerOptions+: {
      emitDecoratorMetadata: true,
      lib: ['es2018'],
      newLine: 'LF',
      noEmitOnError: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      outDir: './dist/',
      strict: true,
      strictBindCallApply: true,
      strictFunctionTypes: false,
      strictNullChecks: true,
      strictPropertyInitialization: true,
      target: 'es2018',
      types: ['jxa-types', 'node'],
    },
    include: ['src'],
  },
}
