# jxa-lib-examples

<!-- WISWA-GENERATED-README:START -->

[![GitHub tag (with filter)](https://img.shields.io/github/v/tag/Tatsh/jxa-lib-examples)](https://github.com/Tatsh/jxa-lib-examples/tags)
[![License](https://img.shields.io/github/license/Tatsh/jxa-lib-examples)](https://github.com/Tatsh/jxa-lib-examples/blob/master/LICENSE.txt)
[![GitHub commits since latest release (by SemVer including pre-releases)](https://img.shields.io/github/commits-since/Tatsh/jxa-lib-examples/v0.0.6/master)](https://github.com/Tatsh/jxa-lib-examples/compare/v0.0.6...master)
[![CodeQL](https://github.com/Tatsh/jxa-lib-examples/actions/workflows/codeql.yml/badge.svg)](https://github.com/Tatsh/jxa-lib-examples/actions/workflows/codeql.yml)
[![QA](https://github.com/Tatsh/jxa-lib-examples/actions/workflows/qa.yml/badge.svg)](https://github.com/Tatsh/jxa-lib-examples/actions/workflows/qa.yml)
[![Tests](https://github.com/Tatsh/jxa-lib-examples/actions/workflows/tests.yml/badge.svg)](https://github.com/Tatsh/jxa-lib-examples/actions/workflows/tests.yml)
[![Coverage Status](https://coveralls.io/repos/github/Tatsh/jxa-lib-examples/badge.svg?branch=master)](https://coveralls.io/github/Tatsh/jxa-lib-examples?branch=master)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-blue?logo=dependabot)](https://github.com/dependabot)
[![pages-build-deployment](https://github.com/Tatsh/jxa-lib-examples/actions/workflows/pages/pages-build-deployment/badge.svg)](https://tatsh.github.io/jxa-lib-examples/)
[![Stargazers](https://img.shields.io/github/stars/Tatsh/jxa-lib-examples?logo=github&style=flat)](https://github.com/Tatsh/jxa-lib-examples/stargazers)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)
[![Prettier](https://img.shields.io/badge/Prettier-black?logo=prettier)](https://prettier.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-black?logo=typescript)](https://www.typescriptlang.org/)
[![Yarn](https://img.shields.io/badge/Yarn-4c335c?logo=yarn)](https://yarnpkg.com/)
[![eslint](https://img.shields.io/badge/eslint-black?logo=eslint)](https://www.npmjs.com/package/eslint)
[![vitest](https://img.shields.io/badge/vitest-black?logo=vitest)](https://www.npmjs.com/package/vitest)

[![@Tatsh](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fpublic.api.bsky.app%2Fxrpc%2Fapp.bsky.actor.getProfile%2F%3Factor=did%3Aplc%3Auq42idtvuccnmtl57nsucz72&query=%24.followersCount&label=Follow+%40Tatsh&logo=bluesky&style=social)](https://bsky.app/profile/Tatsh.bsky.social)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Tatsh-black?logo=buymeacoffee)](https://buymeacoffee.com/Tatsh)
[![Libera.Chat](https://img.shields.io/badge/Libera.Chat-Tatsh-black?logo=liberadotchat)](irc://irc.libera.chat/Tatsh)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109370961877277568?domain=hostux.social&style=social)](https://hostux.social/@Tatsh)
[![Patreon](https://img.shields.io/badge/Patreon-Tatsh2-F96854?logo=patreon)](https://www.patreon.com/Tatsh2)

<!-- WISWA-GENERATED-README:STOP -->

A small collection of [JavaScript for Automation][jxa] (JXA) example scripts that demonstrate the
[`jxa-lib`][jxa-lib] helper library on macOS. The bundled binary presents a Finder chooser, then
runs the selected example through `osascript`.

## Examples

Each entry below corresponds to a module under `src/`:

- **Clear Badge of FaceTime.app** — remove the unread-call badge from the Dock icon.
- **Fetch google.com with NSURLSession** — issue an HTTP request through `NSURLSession` using the
  `fetch`-like API in `jxa-lib`, synchronised with a `DispatchSemaphore`.
- **Get icon of Chrome Apps.localized** — read the icon of Chrome's localised "Apps" directory.
- **Refresh selected tags in Music.app** — refresh metadata for the currently selected tracks.
- **Refresh all tags in Music.app** — clear orphaned tracks, then refresh metadata for every file
  track.
- **Reset the FaceTime block list** — clear the FaceTime block list (the Preferences window must
  already be open).

## Requirements

macOS 10.10 Yosemite or newer. The examples drive AppleScript-scriptable applications and call into
Cocoa through the Objective-C bridge.

## Installation

Download the prebuilt bundle from `master`:

```sh
curl -fLO https://raw.githubusercontent.com/Tatsh/jxa-lib-examples/refs/heads/master/dist/index.js
```

The file already carries a JXA shebang (`#!/usr/bin/env osascript -l JavaScript`), so making it
executable is enough to run it on its own:

```sh
chmod +x index.js
```

## Usage

Either invoke it directly, having marked it executable:

```sh
./index.js
```

Or hand it to `osascript` explicitly, with no `chmod` required:

```sh
osascript -l JavaScript index.js
```

A Finder chooser appears with the list of examples. Open the relevant application first (for
instance, FaceTime for the block-list example) and then click **OK**.

See [CONTRIBUTING.md](CONTRIBUTING.md) for build and development instructions.

[jxa]: https://github.com/JXA-Cookbook/JXA-Cookbook
[jxa-lib]: https://github.com/Tatsh/jxa-lib
