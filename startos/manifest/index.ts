import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bed',
  title: 'BED',
  license: 'MIT',
  packageRepo: 'https://github.com/semillabitcoin/bed-startos',
  upstreamRepo: 'https://github.com/semillabitcoin/descriptor-cifrado',
  marketingUrl: null,
  donationUrl: null,
  docsUrls: ['https://github.com/semillabitcoin/bed-startos#readme'],
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: {
        // D-01: pin by digest, not by tag. Get digest after Phase 3 tag push:
        //   docker buildx imagetools inspect ghcr.io/semillabitcoin/descriptor-cifrado:v0.1.0
        // Plan 04 will replace this placeholder with the actual digest
        dockerTag:
          'ghcr.io/semillabitcoin/descriptor-cifrado@sha256:PLACEHOLDER_DIGEST_SET_BY_PLAN_04',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
