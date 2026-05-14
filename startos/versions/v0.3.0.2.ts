import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_0_2 = VersionInfo.of({
  version: '0.3.0:2',
  releaseNotes: {
    en_US: 'New app icon. No functional changes.',
    es_ES: 'Nuevo icono de la app. Sin cambios funcionales.',
    de_DE: 'Neues App-Icon. Keine funktionalen Änderungen.',
    pl_PL: 'Nowa ikona aplikacji. Bez zmian funkcjonalnych.',
    fr_FR: "Nouvelle icône de l'app. Aucun changement fonctionnel.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
