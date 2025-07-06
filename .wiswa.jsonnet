local utils = import 'utils.libjsonnet';

(import 'defaults.libjsonnet') + {
  local top = self,
  // General settings
  project_type: 'typescript',

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
  project_name: 'jxa-lib-examples',
  version: '0.0.0',
  description: 'jxa-lib examples.',
  keywords: ['applescript', 'jxa', 'macos', 'typescript'],
  want_main: false,
  copilot: {
    intro: 'jxa-lib-examples is a series of example scripts for JXA (JavaScript for Automation) utilitsing the jxa-lib library.',
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
    dependencies+: { 'jxa-lib': '^0.1.0', ramda: '^0.31.3' },
    devDependencies+: {
      '@types/ramda': '^0.30.2',
      'jxa-types': '^0.0.1',
      'ts-loader': '^9.5.2',
      webpack: '^5.99.9',
    },
    main: 'dist/index.js',
  },
  eslint+: [{ rules: { '@typescript-eslint/no-unused-expressions': 'off' } }],
  tsconfig+: {
    compilerOptions+: {
      declaration: true,
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
    },
    include: ['src'],
  },
}
