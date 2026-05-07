import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_1_0_1 = VersionInfo.of({
  version: '0.1.0:1',
  releaseNotes: {
    en_US: 'Initial release of BED — Bitcoin Encrypted Backup for StartOS.',
    es_ES: 'Primera versión de BED — Bitcoin Encrypted Backup para StartOS.',
    de_DE: 'Erste Version von BED — Bitcoin Encrypted Backup für StartOS.',
    pl_PL: 'Pierwsze wydanie BED — Bitcoin Encrypted Backup dla StartOS.',
    fr_FR: 'Première version de BED — Bitcoin Encrypted Backup pour StartOS.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
