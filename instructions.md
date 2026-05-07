# BED — Bitcoin Encrypted Backup: Instructions

## Quickstart

1. Open the BED interface via the **Tor** or **LAN** URL shown on the StartOS dashboard.
2. In the **Cifrar** tab, paste a Bitcoin multisig descriptor (must use `<0;1>/*` derivation).
3. Paste a cosigner xpub to use as the encryption key.
4. Click **Cifrar** — download the `.bed` binary, copy the armored text, or scan the QR code.
5. Store the `.bed` file in a location **separate** from the xpub used to encrypt it.

To decrypt: switch to the **Descifrar** tab, upload or paste the `.bed`, paste the same xpub, click **Descifrar**.

---

## Golden Rule

> **Never store a `.bed` file and a cosigner xpub of the same multisig in the same location.**
>
> A `.bed` file encrypted with xpub A can be decrypted by anyone who has xpub A.
> The security model requires that each co-location (`.bed` + `xpub_N`) is in a different physical place.
> If an attacker finds both the `.bed` and the matching xpub, they recover your full descriptor.

---

## Threat Model Summary

BED protects descriptor privacy during distribution. A `.bed` file reveals nothing to someone who only has the file — they need the matching cosigner xpub to decrypt it. This allows each cosigner to hold a backup of the full multisig descriptor without exposing the wallet structure to co-location risk.

For the full threat model, including what BED does NOT protect against, see:
[https://github.com/semillabitcoin/descriptor-cifrado#threat-model](https://github.com/semillabitcoin/descriptor-cifrado#threat-model)

---

## Where Files Are Stored

When the **Historial** toggle is enabled (default: OFF), encrypted `.bed` files are saved to `/data/encrypted/` inside the container. This directory is preserved by StartOS across container restarts and updates.

StartOS backups (via the platform's Backup feature) automatically include `/data/encrypted/` — no additional configuration needed.

When the history toggle is OFF (default), `.bed` files are generated in-memory only and returned via download — nothing is persisted on the server.

---

## Updating

Updates preserve files saved in `/data/encrypted/`. To verify:

1. Enable the Historial toggle and save a `.bed` before the update.
2. Install the update via StartOS.
3. After the update, open the **Historial** tab and confirm the `.bed` file is still listed.
4. Decrypt the old `.bed` — it should decrypt successfully.

If a future format-breaking update occurs, a changelog entry will document the affected version range and how to decrypt older files using a previous BED release.

---

## Descriptor Requirements

The descriptor **must** use the `<0;1>/*` derivation path. Without this wildcard, spending from address index 0 would expose the xpub on-chain, breaking the privacy model defined in the BIP draft ([bitcoin/bips#1951](https://github.com/bitcoin/bips/pull/1951)).

## QR Code Size Limit

The armored `.bed` output is suitable for QR encoding for descriptors up to approximately 2,900 bytes (ECC-L). Larger descriptors (5-of-7 multisig or complex Miniscript policies) will generate a BBQR animated sequence instead of a static QR.

---

## Reporting Issues

- **s9pk wrapper** (installation, StartOS integration, CI): [https://github.com/semillabitcoin/bed-startos/issues](https://github.com/semillabitcoin/bed-startos/issues)
- **Underlying tool** (encryption logic, UI, API): [https://github.com/semillabitcoin/descriptor-cifrado/issues](https://github.com/semillabitcoin/descriptor-cifrado/issues)
