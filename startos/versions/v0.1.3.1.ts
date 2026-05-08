import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_1_3_1 = VersionInfo.of({
  version: '0.1.3:1',
  releaseNotes: {
    en_US:
      'Nunchuk Desktop interop: descriptors with single-chain wildcards like /0/* are now auto-converted to multipath /<even;odd>/* with a confirmation modal (Sparrow sibling rule). Clearer copy: "no xpub belonging to the descriptor" (now also covers singlesig and Liana miniscript, not only multisig). Encrypt tab help text trimmed to one line.',
    es_ES:
      'Interop Nunchuk Desktop: descriptors con wildcards single-chain tipo /0/* ahora se autoconvierten a multipath /<par;impar>/* con modal de confirmación (regla sibling de Sparrow). Texto más claro: "ninguna xpub que pertenezca al descriptor" (ahora también cubre singlesig y miniscript Liana, no solo multisig). Texto de ayuda en pestaña Cifrar reducido a una línea.',
    de_DE:
      'Nunchuk-Desktop-Interop: Descriptors mit Single-Chain-Wildcards wie /0/* werden jetzt automatisch in Multipath /<gerade;ungerade>/* umgewandelt, mit Bestätigungsdialog (Sparrow-Sibling-Regel). Klarerer Text: "keine xpub, die zum Descriptor gehört" (deckt jetzt auch Singlesig und Liana-Miniscript ab, nicht nur Multisig). Hilfetext im Verschlüsseln-Tab auf eine Zeile gekürzt.',
    pl_PL:
      'Interop Nunchuk Desktop: deskryptory z wildcardami single-chain typu /0/* są teraz automatycznie konwertowane do multipath /<parzyste;nieparzyste>/* z oknem potwierdzenia (reguła sibling z Sparrow). Jaśniejszy tekst: "żaden xpub należący do deskryptora" (obejmuje teraz również singlesig i miniscript Liana, nie tylko multisig). Tekst pomocy w zakładce Szyfruj skrócony do jednej linii.',
    fr_FR:
      "Interop Nunchuk Desktop : les descripteurs avec wildcards single-chain comme /0/* sont maintenant convertis automatiquement en multipath /<pair;impair>/* avec une fenêtre de confirmation (règle sibling de Sparrow). Texte plus clair : « aucun xpub appartenant au descripteur » (couvre maintenant aussi singlesig et miniscript Liana, pas uniquement multisig). Texte d'aide de l'onglet Chiffrer réduit à une ligne.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
