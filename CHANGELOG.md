<!-- markdownlint-configure-file {"MD024": { "siblings_only": true } } -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.1/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Switched the test runner from Jest to Vitest. Removed `jest`, `ts-jest`, and `@types/jest`;
  added `vitest` and `@vitest/coverage-v8`. Test files now import from `vitest` (`vi`, `Mock`,
  `MockedFunction`) instead of `@jest/globals`. Class mocks use the `function`-based form so they
  work as constructors under Vitest.
- Upgraded TypeScript to the latest 6.x. Removed the temporary 5.x pin from `.wiswa.jsonnet` and
  the `moduleResolution: 'node'` override in `tsconfig`.
- Generated `Tests` workflow now runs `yarn vitest run --coverage`.

## [0.0.1] - 2025-00-00

First version.

[unreleased]: https://github.com/Tatsh/jxa-lib-examples/compare/v0.0.5...HEAD
[0.0.1]: https://github.com/Tatsh/jxa-lib-examples/releases/tag/v0.0.1
