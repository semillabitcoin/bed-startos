import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_0_1 = VersionInfo.of({
  version: '0.3.0:1',
  releaseNotes: {
    en_US:
      'New: BED now also encrypts and decrypts wallet exports from Liana (JSON) and Sparrow Wallet (JSONL with labels), in addition to plain descriptors. Round-trip is byte-identical, so labels and metadata are preserved. The "select file" dialog in the Encrypt tab now accepts .txt, .descriptor, .json and .jsonl. Also: when an encrypted descriptor is too large for a QR code, the page no longer breaks — the binary and armored downloads stay available, only the QR panel degrades cleanly. Small UX polish: removed the "Mi multisig 3 de 5" example from the Name field and simplified the form label "Descriptor multisig" → "Descriptor".',
    es_ES:
      'Nuevo: BED ahora también cifra y descifra exports de wallets de Liana (JSON) y Sparrow Wallet (JSONL con labels), además de los descriptors planos. El round-trip es byte a byte idéntico, así que se preservan labels y metadata. El diálogo "seleccionar archivo" del tab Cifrar ahora acepta .txt, .descriptor, .json y .jsonl. Además: cuando un descriptor cifrado es demasiado grande para un QR, la página ya no se rompe — el binario y armored siguen disponibles, solo el panel del QR degrada limpio. Pulido UX: se quitó el ejemplo "Mi multisig 3 de 5" del campo Nombre y se simplificó el label "Descriptor multisig" → "Descriptor".',
    de_DE:
      'Neu: BED verschlüsselt und entschlüsselt jetzt auch Wallet-Exports von Liana (JSON) und Sparrow Wallet (JSONL mit Labels), zusätzlich zu einfachen Descriptors. Der Round-Trip ist byte-identisch, sodass Labels und Metadaten erhalten bleiben. Der „Datei auswählen"-Dialog im Verschlüsseln-Tab akzeptiert jetzt .txt, .descriptor, .json und .jsonl. Außerdem: Wenn ein verschlüsselter Descriptor zu groß für einen QR-Code ist, bricht die Seite nicht mehr ab — Binär- und Armored-Downloads bleiben verfügbar, nur das QR-Panel wird sauber degradiert. Kleine UX-Verbesserung: Das Beispiel „Mi multisig 3 de 5" wurde aus dem Namensfeld entfernt und das Label „Descriptor multisig" → „Descriptor" vereinfacht.',
    pl_PL:
      'Nowość: BED szyfruje i odszyfrowuje teraz również eksporty portfeli z Liana (JSON) i Sparrow Wallet (JSONL z etykietami), oprócz zwykłych deskryptorów. Round-trip jest identyczny bajt po bajcie, więc etykiety i metadane są zachowywane. Okno dialogowe „wybierz plik" w zakładce Szyfruj akceptuje teraz .txt, .descriptor, .json i .jsonl. Ponadto: gdy zaszyfrowany deskryptor jest zbyt duży dla kodu QR, strona już się nie zawiesza — pliki binary i armored pozostają dostępne, tylko panel QR degraduje się czysto. Drobne ulepszenia UX: usunięto przykład „Mi multisig 3 de 5" z pola Nazwa i uproszczono etykietę „Descriptor multisig" → „Descriptor".',
    fr_FR:
      "Nouveau : BED chiffre et déchiffre maintenant aussi les exports de portefeuilles de Liana (JSON) et Sparrow Wallet (JSONL avec labels), en plus des descripteurs simples. Le round-trip est identique octet pour octet, donc les labels et métadonnées sont préservés. La boîte de dialogue « sélectionner un fichier » de l'onglet Chiffrer accepte maintenant .txt, .descriptor, .json et .jsonl. De plus : lorsqu'un descripteur chiffré est trop volumineux pour un code QR, la page ne se casse plus — les téléchargements binary et armored restent disponibles, seul le panneau QR dégrade proprement. Petits ajustements UX : suppression de l'exemple « Mi multisig 3 de 5 » du champ Nom et simplification du label « Descriptor multisig » → « Descriptor ».",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
