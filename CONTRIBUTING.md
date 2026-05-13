# Contributing

This repo is the **StartOS s9pk wrapper** for BED. The encryption logic, HTTP
API and frontend live upstream in
[`semillabitcoin/descriptor-cifrado`](https://github.com/semillabitcoin/descriptor-cifrado).

> **Where to file what:**
> - Bug in encrypt/decrypt, UI, API, container behaviour → upstream repo.
> - Bug in install/update, StartOS integration, manifest, CI → here.

## Build environment

Requirements:

- Node.js 20+ and pnpm 9+ (`npm install -g pnpm`)
- `start-cli` 0.4.0-beta.5+ (see [Start9 packaging docs](https://docs.start9.com/packaging/))
- A developer key at `~/.startos/developer.key.pem` (created with `start-cli init-key`)
- Docker (the build pulls the upstream multi-arch image from GHCR)

## Build locally

```bash
pnpm install --frozen-lockfile
make clean x86 arm   # produces bed_x86_64.s9pk and bed_aarch64.s9pk
```

If the upstream GHCR image is private, authenticate first:

```bash
echo "$GHCR_PAT" | docker login ghcr.io -u <username> --password-stdin
```

## Workflow

1. Branch from `main` (`git checkout -b chore/<short-description>`).
2. Make your changes. Run `pnpm run check` (typecheck) before pushing.
3. Open a pull request against `main`.

## Release process (maintainers)

The wrapper is versioned independently from the upstream BED image; each
release pins a specific upstream digest and adds a `VersionInfo` entry.

1. Wait for the upstream `descriptor-cifrado` release to finish its
   `docker.yml` workflow on the matching tag (e.g. `v0.2.0`).
2. Capture the multi-arch manifest list digest:
   ```bash
   docker buildx imagetools inspect ghcr.io/semillabitcoin/descriptor-cifrado:<version>
   ```
   Use the **top-level** `Digest` line (`Manifests:` are per-platform).
3. In `startos/manifest/index.ts`, update `images.main.source.dockerTag`
   to `ghcr.io/semillabitcoin/descriptor-cifrado@sha256:<digest>`.
4. Add `startos/versions/v<version>.1.ts` with a `VersionInfo` containing
   release notes in `en_US`, `es_ES`, `de_DE`, `pl_PL`, `fr_FR` (match the
   languages used by existing version files).
5. Update `startos/versions/index.ts`:
   - Add the new `import` and set `current` to the new VersionInfo.
   - Append the previous `current` to `other` (preserves the upgrade graph).
6. Add an entry to `CHANGELOG.md` with the date, digest, summary and
   GitHub release link.
7. `pnpm run check` to typecheck, then commit:
   ```bash
   git commit -m "feat(<version>): pin GHCR digest and add v<version>.1 VersionInfo"
   git tag v<version>
   git push origin main v<version>
   ```
8. The `release.yml` workflow builds both arches, signs them with `DEV_KEY`,
   and publishes them as a GitHub Release.

## Style

- TypeScript: `pnpm run prettier` formats the `startos/` directory in place.
- Commits: short imperative subject, optional body explaining the *why*.

## Reporting security issues

See [SECURITY.md](SECURITY.md).
