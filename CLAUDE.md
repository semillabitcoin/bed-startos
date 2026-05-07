## How the upstream image is referenced

- Docker image source: `ghcr.io/semillabitcoin/descriptor-cifrado`
- Pin strategy: `@sha256:<digest>` (D-01) — get digest from `docker buildx imagetools inspect ghcr.io/semillabitcoin/descriptor-cifrado:v0.1.0`
- Image key in manifest: `main` (not `hello-world`)

> This is the StartOS 0.4.0 s9pk wrapper for BED — Bitcoin Encrypted Backup.
> Upstreams: https://github.com/semillabitcoin/descriptor-cifrado

## Packaging notes

- SDK: `@start9labs/start-sdk` >= 1.4.1
- Build: `make clean x86 arm` — produces per-arch s9pk files
- Plumbing files (DO NOT EDIT): `startos/index.ts`, `startos/sdk.ts`, `startos/init/index.ts`, `s9pk.mk`, `tsconfig.json`
- Port binding: `127.0.0.1:8080` (loopback only; StartOS handles external routing)
- Volume `main` mounts to `/data/encrypted/` inside the container
