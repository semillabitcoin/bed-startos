export const short = {
  en_US: 'Encrypt Bitcoin descriptor backups for redundant multisig storage',
  es_ES:
    'Cifra backups de descriptors Bitcoin para almacenamiento multisig redundante',
  de_DE:
    'Bitcoin-Descriptor-Backups für redundante Multisig-Speicherung verschlüsseln',
  pl_PL:
    'Szyfruj kopie zapasowe deskryptorów Bitcoin dla redundantnego przechowywania multisig',
  fr_FR:
    'Chiffrez les sauvegardes de descripteurs Bitcoin pour un stockage multisig redondant',
}

export const long = {
  en_US:
    'BED (Bitcoin Encrypted Backup) encrypts a multisig descriptor using AES-256-GCM with any cosigner xpub as the key, producing a .bed binary that only the holder of that xpub can decrypt. Compatible with the BIP draft bitcoin/bips#1951 and Liana wallet interop (crate v0.0.2). Each cosigner stores one .bed backup in a different physical location from the xpub used to encrypt it. WARNING: NEVER store a .bed and a cosigner xpub in the same location — if an attacker finds both, they recover your full descriptor.',
  es_ES:
    'BED (Bitcoin Encrypted Backup) cifra un descriptor multisig usando AES-256-GCM con cualquier xpub cosigner como clave, produciendo un .bed binario que solo el titular de esa xpub puede descifrar. Compatible con el draft BIP bitcoin/bips#1951 e interop con Liana wallet (crate v0.0.2). Cada cosigner guarda un backup .bed en un lugar físico distinto de la xpub usada para cifrarlo. ADVERTENCIA: NUNCA guardes un .bed y una xpub cosigner en el mismo lugar — si un atacante encuentra ambas, puede recuperar tu descriptor completo.',
  de_DE:
    'BED (Bitcoin Encrypted Backup) verschlüsselt einen Multisig-Descriptor mit AES-256-GCM unter Verwendung eines beliebigen Cosigner-xpubs als Schlüssel. Kompatibel mit BIP-Entwurf bitcoin/bips#1951 und Liana Wallet (Crate v0.0.2). WARNUNG: Speichern Sie NIEMALS eine .bed-Datei und einen Cosigner-xpub am selben Ort.',
  pl_PL:
    'BED (Bitcoin Encrypted Backup) szyfruje deskryptor multisig za pomocą AES-256-GCM z xpubem cosignera jako kluczem. Kompatybilny z projektem BIP bitcoin/bips#1951 i portfelem Liana (crate v0.0.2). OSTRZEŻENIE: NIGDY nie przechowuj pliku .bed i xpuba cosignera w tym samym miejscu.',
  fr_FR:
    "BED (Bitcoin Encrypted Backup) chiffre un descripteur multisig avec AES-256-GCM en utilisant n'importe quel xpub cosignataire comme clé. Compatible avec le BIP draft bitcoin/bips#1951 et Liana wallet (crate v0.0.2). AVERTISSEMENT : Ne stockez JAMAIS un fichier .bed et un xpub cosignataire au même endroit.",
}
