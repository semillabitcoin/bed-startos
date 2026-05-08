import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_1_4_1 = VersionInfo.of({
  version: '0.1.4:1',
  releaseNotes: {
    en_US:
      'Fix: history persistence on device. Previous releases (0.1.0–0.1.3) ran the container as nonroot UID 65532 and could not write to the StartOS-mounted volume at /data/encrypted/, so encrypting with history mode ON showed "Encrypted OK, but not saved to history". The container now runs as UID 0 inside its sandbox; the security boundary is the StartOS sandbox itself (cgroups + netns), not the in-container UID. No backend changes.',
    es_ES:
      'Fix: persistencia del historial en device. Releases anteriores (0.1.0–0.1.3) corrían el container como UID 65532 nonroot y no podían escribir en el volume StartOS montado en /data/encrypted/, así que cifrar con modo historial ON mostraba "Cifrado OK, pero no se guardó en historial". El container ahora corre como UID 0 dentro de su sandbox; la frontera de seguridad es el sandbox de StartOS (cgroups + netns), no el UID interno. Sin cambios en el backend.',
    de_DE:
      'Fix: Historie-Persistenz auf dem Gerät. Frühere Releases (0.1.0–0.1.3) liefen als UID 65532 nonroot und konnten nicht in das StartOS-gemountete Volume unter /data/encrypted/ schreiben, sodass Verschlüsseln mit Verlauf-Modus „Verschlüsselt OK, aber nicht im Verlauf gespeichert" anzeigte. Der Container läuft jetzt als UID 0 in seiner Sandbox; die Sicherheitsgrenze ist die StartOS-Sandbox (cgroups + netns), nicht die UID im Container. Keine Backend-Änderungen.',
    pl_PL:
      'Naprawa: trwałość historii na urządzeniu. Poprzednie wydania (0.1.0–0.1.3) uruchamiały kontener jako UID 65532 nonroot i nie mogły zapisać do woluminu StartOS zamontowanego w /data/encrypted/, więc szyfrowanie z trybem historii ON wyświetlało "Zaszyfrowano OK, ale nie zapisano w historii". Kontener teraz działa jako UID 0 wewnątrz swojej piaskownicy; granicą bezpieczeństwa jest piaskownica StartOS (cgroups + netns), a nie UID wewnątrz kontenera. Brak zmian w backendzie.',
    fr_FR:
      "Correctif : persistance de l'historique sur l'appareil. Les versions précédentes (0.1.0–0.1.3) exécutaient le conteneur en tant qu'UID 65532 nonroot et ne pouvaient pas écrire dans le volume StartOS monté sur /data/encrypted/, donc le chiffrement avec le mode historique activé affichait « Chiffré OK, mais non enregistré dans l'historique ». Le conteneur s'exécute maintenant en tant qu'UID 0 dans son sandbox ; la frontière de sécurité est le sandbox StartOS (cgroups + netns), pas l'UID interne. Aucun changement backend.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
