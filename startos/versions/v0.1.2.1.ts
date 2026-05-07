import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_1_2_1 = VersionInfo.of({
  version: '0.1.2:1',
  releaseNotes: {
    en_US:
      'UX + Liana compatibility: descriptors with alternate multipath branches like <2;3>/* are now accepted (previously rejected); upload descriptor from file in the Encrypt tab; Clear buttons in both tabs reset the form.',
    es_ES:
      'UX + compatibilidad Liana: ahora se aceptan descriptors con ramas multipath alternativas tipo <2;3>/* (antes se rechazaban); subir descriptor desde archivo en la pestaña Cifrar; botones Limpiar en ambas pestañas para reiniciar el formulario.',
    de_DE:
      'UX + Liana-Kompatibilität: Descriptors mit alternativen Multipath-Zweigen wie <2;3>/* werden jetzt akzeptiert (zuvor abgelehnt); Descriptor-Datei-Upload im Encrypt-Tab; Clear-Buttons in beiden Tabs setzen das Formular zurück.',
    pl_PL:
      'UX + kompatybilność z Liana: deskryptory z alternatywnymi gałęziami multipath, takimi jak <2;3>/*, są teraz akceptowane (wcześniej odrzucane); wgrywanie deskryptora z pliku w zakładce Szyfruj; przyciski Wyczyść w obu zakładkach resetują formularz.',
    fr_FR:
      "UX + compatibilité Liana : les descripteurs avec branches multipath alternatives comme <2;3>/* sont maintenant acceptés (auparavant rejetés) ; téléverser le descripteur depuis un fichier dans l'onglet Chiffrer ; boutons Effacer dans les deux onglets pour réinitialiser le formulaire.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
