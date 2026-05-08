import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_2_0_1 = VersionInfo.of({
  version: '0.2.0:1',
  releaseNotes: {
    en_US:
      'New: a name is now required when encrypting a descriptor. The download filename is "<name>.bed" (no timestamp), and the history list shows the name as the primary identifier with the on-disk filename as a subtitle. Also: the history tab refreshes automatically after a successful encryption (no more Ctrl+Shift+R). Old entries without a name keep working — they fall back to showing the filename. Charset for the name: letters, numbers, spaces, dashes and underscores (max 80 chars).',
    es_ES:
      'Nuevo: ahora es obligatorio poner un nombre al cifrar un descriptor. El archivo descargado se llama "<nombre>.bed" (sin timestamp) y la lista del historial muestra el nombre como identificador primario con el filename en disco como subtítulo. Además: la pestaña Historial se refresca automáticamente tras cifrar (no hace falta Ctrl+Shift+R). Las entradas antiguas sin nombre siguen funcionando — caen al filename como display. Caracteres del nombre: letras, números, espacios, guiones y guiones bajos (máx 80).',
    de_DE:
      'Neu: Beim Verschlüsseln eines Descriptors ist jetzt ein Name erforderlich. Der Download-Dateiname lautet „<Name>.bed" (ohne Zeitstempel) und die Verlaufsliste zeigt den Namen als primäre Kennung mit dem On-Disk-Dateinamen als Untertitel. Außerdem: Der Verlauf-Tab aktualisiert sich nach erfolgreichem Verschlüsseln automatisch (kein Strg+Umschalt+R mehr). Alte Einträge ohne Namen funktionieren weiterhin — sie zeigen den Dateinamen als Fallback. Zeichen für den Namen: Buchstaben, Zahlen, Leerzeichen, Bindestriche und Unterstriche (max. 80).',
    pl_PL:
      'Nowość: podanie nazwy jest teraz wymagane przy szyfrowaniu deskryptora. Plik pobierany nazywa się „<nazwa>.bed" (bez znacznika czasu), a lista historii pokazuje nazwę jako główny identyfikator z nazwą pliku na dysku jako podtytułem. Ponadto: zakładka Historia odświeża się automatycznie po udanym szyfrowaniu (Ctrl+Shift+R już niepotrzebne). Stare wpisy bez nazwy nadal działają — wyświetlają nazwę pliku jako fallback. Dozwolone znaki w nazwie: litery, cyfry, spacje, myślniki i podkreślenia (maks. 80).',
    fr_FR:
      "Nouveau : un nom est désormais obligatoire lors du chiffrement d'un descripteur. Le fichier téléchargé s'appelle « <nom>.bed » (sans horodatage) et la liste de l'historique affiche le nom comme identifiant principal avec le nom de fichier sur disque en sous-titre. De plus : l'onglet Historique se rafraîchit automatiquement après un chiffrement réussi (plus besoin de Ctrl+Maj+R). Les anciennes entrées sans nom continuent de fonctionner — elles retombent sur le nom de fichier. Caractères autorisés dans le nom : lettres, chiffres, espaces, tirets et soulignés (max. 80).",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
