<!-- markdownlint-configure-file {"MD024": { "siblings_only": true } } -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.6] - 2026-05-06

### Changed

- Switched the test runner from Jest to Vitest. Removed `jest`, `ts-jest`, and `@types/jest`;
  added `vitest` and `@vitest/coverage-v8`. Test files now import from `vitest` (`vi`, `Mock`,
  `MockedFunction`) instead of `@jest/globals`. Class mocks use the `function`-based form so they
  work as constructors under Vitest.
- Upgraded TypeScript to the latest 6.x. Removed the temporary 5.x pin from `.wiswa.jsonnet` and
  the `moduleResolution: 'node'` override in `tsconfig`.
- Generated `Tests` workflow now runs `yarn vitest run --coverage`.
- Bumped runtime-relevant dependencies: `jxa-lib` (0.1.7 → 0.1.9) and `jxa-types` (0.0.6 → 0.0.8).
- Upgraded development tooling to current majors: ESLint and `@eslint/js` (9.x → 10.x),
  `typescript-eslint` (8.36 → 8.59), `cspell` (9.x → 10.x), `webpack-cli` (6.x → 7.x), and
  `markdownlint-cli2` (0.18 → 0.22). Refreshed `prettier`, `webpack`, `typedoc`, `@types/node`,
  `ramda`, and `globals` to current minors.
- Upgraded Yarn from 4.12.0 to 4.14.1.
- Refreshed regenerator (Wiswa) configuration: switched `.wiswa.jsonnet` to the
  `uses_user_defaults` form and moved managed dependency pins to
  `utils.latestNpmPackageVersionCaret`. Refreshed workflows, `.claude/` agents and rules, and
  supporting config to match the current Wiswa template.

### Fixed

- `tsconfig`: pinned `module: 'commonjs'` and `moduleResolution: 'node'` together so the project
  compiles cleanly under TypeScript 6.x, where the previous mismatch between `bundler` resolution
  and the `commonjs` emit raised an error.
- `tsconfig`: removed the deprecated `baseUrl` option to clear TypeScript's deprecation warning.
- `.cz.json`: corrected the manpage `version_files` entry from `man/@tatsh/jxa-lib-examples.1` to
  `man/jxa-lib-examples.1` so `cz bump` actually updates the manpage.
- `man/jxa-lib-examples.1`: refreshed the `.TH` line so the manpage's version and date track the
  released version, and updated the copyright year.

## [0.0.5] - 2025-07-09

### Added

- Manpage at `man/jxa-lib-examples.1`.

## [0.0.4] - 2025-07-09

### Changed

- Renamed the published package from `jxa-lib-examples` to `@tatsh/jxa-lib-examples`.
- Refreshed regenerator (Wiswa) configuration.

### Fixed

- Spelling issues.

## [0.0.3] - 2025-07-09

### Changed

- Bumped `jxa-lib` to a newer version.
- Refreshed regenerator (Wiswa) configuration.

### Fixed

- Dependency declarations.

## [0.0.2] - 2025-07-08

### Added

- Initial test suite.

### Changed

- The refresh-tags example now uses `ItunesHelper` from `jxa-lib`.
- Sorted imports across source files.
- Updated dependencies.

## [0.0.1] - 2025-07-06

First version.

[unreleased]: https://github.com/Tatsh/jxa-lib-examples/compare/v0.0.6...HEAD
[0.0.6]: https://github.com/Tatsh/jxa-lib-examples/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/Tatsh/jxa-lib-examples/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/Tatsh/jxa-lib-examples/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/Tatsh/jxa-lib-examples/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/Tatsh/jxa-lib-examples/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/Tatsh/jxa-lib-examples/releases/tag/v0.0.1
