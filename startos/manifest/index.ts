import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bed',
  title: 'BED',
  license: 'MIT',
  packageRepo: 'https://github.com/semillabitcoin/bed-startos',
  upstreamRepo: 'https://github.com/semillabitcoin/descriptor-cifrado',
  marketingUrl: 'https://github.com/semillabitcoin/bed-startos',
  donationUrl: null,
  docsUrls: ['https://github.com/semillabitcoin/bed-startos#readme'],
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerTag:
          'ghcr.io/semillabitcoin/descriptor-cifrado@sha256:67b72a6fd749f880081ca51b42e16ef6726504a641cd21718a6f0d2b7664b08b',
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
