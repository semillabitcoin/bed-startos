# Security Policy

## Where to report

This repo is the **StartOS s9pk wrapper**. The encryption logic, HTTP API and
frontend live upstream.

| Class of issue | Where to report |
|---|---|
| Cryptographic flaws, descriptor handling, xpub validation, key zeroization, anything that could leak a descriptor or weaken the AES-256-GCM construction | [`semillabitcoin/descriptor-cifrado`](https://github.com/semillabitcoin/descriptor-cifrado/security) |
| Issues with the s9pk manifest, container privileges, volume mount, StartOS integration, CI signing, digest-pin tampering | [Open a private security advisory](https://github.com/semillabitcoin/bed-startos/security/advisories/new) on this repo |

## What's in scope here

- The `dockerTag` digest pin in `startos/manifest/index.ts` (any change that
  would let an unintended image ship as a "BED" release).
- Container runtime configuration: `volumes`, `bindPort`, `actions`, health
  check, anything that affects what the container can do or reach.
- The signing flow in `.github/workflows/release.yml` (`DEV_KEY` handling,
  artifact integrity).
- The upgrade graph in `startos/versions/` (a flawed `VersionGraph` could let
  StartOS skip a migration that matters for security).

## What's out of scope here (report upstream)

- Anything reachable through the HTTP API on port 8080.
- The Svelte frontend, the axum server, the encryption library.
- The Dockerfile and the binary it produces.

## Verifying a release

Each `.s9pk` is signed with the project developer key (`DEV_KEY`) inside the
`release.yml` workflow. To verify the upstream image digest pinned in a
downloaded `.s9pk` matches what's published in the `CHANGELOG.md`:

```bash
start-cli s9pk inspect bed_<arch>.s9pk manifest | grep dockerTag
```

The digest in the output should match the one listed under the corresponding
release in [CHANGELOG.md](CHANGELOG.md).

## Disclosure

We aim to acknowledge reports within 72 hours. Please do not open a public
issue for vulnerabilities — use GitHub's private security advisory flow on
the relevant repo.
