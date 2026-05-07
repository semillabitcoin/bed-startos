import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  const mounts = sdk.Mounts.of().mountVolume({
    volumeId: 'main',
    subpath: null,
    mountpoint: '/data/encrypted',
    readonly: false,
  })

  const sub = await sdk.SubContainer.of(
    effects,
    { imageId: 'main' },
    mounts,
    'bed-sub',
  )

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: sub,
    exec: {
      command: sdk.useEntrypoint(),
    },
    ready: {
      gracePeriod: 10_000,
      display: i18n('Web Interface'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The web interface is ready'),
          errorMessage: i18n('The web interface is not ready'),
        }),
    },
    requires: [],
  })
})
