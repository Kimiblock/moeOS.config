# moeOS.Config

An automatically generated package to configure Arch Linux. Simple and easy to use.

---

![Logo](https://raw.githubusercontent.com/Kimiblock/moeOS.config/master/usr/share/icons/hicolor/scalable/apps/moeos.svg)

# Pre-reqirements
- Arch Linux with GNOME Wayland only.
- ESP mounted under `/efi`.
- Unified Kernel Image (Generated by mkinitcpio) at `/efi/EFI/BOOT/BOOTx64.efi`.
- (Optional) Your own sbctl keys which can be imported.

# Installation

Add the following lines to paru:

```
[moeOS-git]
Url = https://github.com/Kimiblock/moeOS-Package.git
```

Then install the package:

```
paru -S moeOS-git
```

# Ingredients

Contains the following configurations and customizations:

- moeOS Plymouth splash theme.
- Default `sbctl` Secure Boot configuation.
- Example configuraions which can't be generated. (Located in `/usr/share/moeOS-Docs/Reference Configs`)
- LibreWolf configuration, Simply useable.
- OS branding replacement.
- Pacman hooks to replace files automatically.
- A libadwaita-like Kvantum theme for Qt applications.
- Some handy scripts (eg. `v2hevc` `v2avc` `oggaudio`) to transcode video footages and audio files quickly using VA-API.
- Powersave settings.
- Better switchable graphics handling.
- Default MPV / Celluloid config files.
    * Hardware Acceleration
    * GPU Next video output
    * Better scaling
    * Volume normalization
    * Vulkan GPU API

- A default fontconfig file.

- Networkmanager connectivity test pointed to `blog.kimiblock.top`

- Colors:
  
  - Bright: Accent: `#ed65e2`; Background: `#ed65e2`
  
  - Dark: Accent: `#ed65e2`; Background: `#da7de3`

# Switchable Graphics
To run apps on dedicated graphics card, install it natively and prepend `prime-run` command.
