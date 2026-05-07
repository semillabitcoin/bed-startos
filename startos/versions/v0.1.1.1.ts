import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_1_1_1 = VersionInfo.of({
  version: '0.1.1:1',
  releaseNotes: {
    en_US:
      'Fix: server now binds to 0.0.0.0:8080 so the StartOS ingress proxy can reach it (v0.1.0 was unreachable via Tor and LAN).',
    es_ES:
      'Corrección: el servidor ahora se enlaza a 0.0.0.0:8080 para que el proxy de ingreso de StartOS pueda alcanzarlo (v0.1.0 no era accesible por Tor ni LAN).',
    de_DE:
      'Fix: Server bindet jetzt an 0.0.0.0:8080, damit der StartOS-Ingress-Proxy ihn erreichen kann (v0.1.0 war über Tor und LAN nicht erreichbar).',
    pl_PL:
      'Poprawka: serwer wiąże się teraz z 0.0.0.0:8080, aby proxy wejściowe StartOS mogło go osiągnąć (v0.1.0 był nieosiągalny przez Tor i LAN).',
    fr_FR:
      'Correction : le serveur se lie maintenant à 0.0.0.0:8080 pour que le proxy d\'entrée StartOS puisse l\'atteindre (v0.1.0 était inaccessible via Tor et LAN).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
