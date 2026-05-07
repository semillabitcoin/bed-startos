import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const mainHost = sdk.MultiHost.of(effects, 'main')
  const origin = await mainHost.bindPort(uiPort, { protocol: 'http' })

  const ui = sdk.createInterface(effects, {
    name: i18n('Web UI'),
    id: 'ui',
    description: i18n('Encrypt and decrypt Bitcoin descriptor backups'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  return [await origin.export([ui])]
})
