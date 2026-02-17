local utils = import 'utils.libjsonnet';

{
  project_type: 'typescript',
  keep_dist: true,
  want_man: true,
  // Shared
  github_project_name: 'jxa-lib-examples',
  repository_name: self.github_project_name,
  project_name: '@tatsh/jxa-lib-examples',
  version: '0.0.5',
  description: 'jxa-lib examples.',
  keywords: ['applescript', 'jxa', 'macos', 'typescript'],
  want_main: false,
  copilot+: {
    intro: 'jxa-lib-examples is a series of example scripts for JXA (JavaScript for Automation) utilising the jxa-lib library.',
  },
  // TypeScript only
  package_json+: {
    bin: './dist/index.js',
    devDependencies+: {
      '@types/ramda': utils.latestNpmPackageVersionCaret('@types/ramda'),
      'globals': utils.latestNpmPackageVersionCaret('globals'),
      'jxa-lib': utils.latestNpmPackageVersionCaret('jxa-lib'),
      'jxa-types': utils.latestNpmPackageVersionCaret('jxa-types'),
      'ts-loader': utils.latestNpmPackageVersionCaret('ts-loader'),
      'webpack-cli': utils.latestNpmPackageVersionCaret('webpack-cli'),
      'webpack-shebang-plugin': utils.latestNpmPackageVersionCaret('webpack-shebang-plugin'),
      ramda: utils.latestNpmPackageVersionCaret('ramda'),
      webpack: utils.latestNpmPackageVersionCaret('webpack'),
    },
    files+: ['dist/index.js', 'dist/index.js.map'],
    main: 'dist/index.js',
    publishConfig: {
      registry: 'https://npm.pkg.github.com',
    },
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
