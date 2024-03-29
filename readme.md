# moeOS.Config

An automatically generated package to configure Arch Linux. Simple and easy to use.

---

<h1 align="center">
  <img src="https://raw.githubusercontent.com/Kimiblock/moeOS.config/master/usr/share/icons/hicolor/scalable/apps/moeos.svg" alt="moeOS" width="128" />
  <br>
  moeOS
  <br>
</h1>

# Pre-reqirements
- Arch Linux with GNOME Wayland only.
- ESP mounted under `/efi`.
- Unified Kernel Image (Generated by mkinitcpio) at `/efi/EFI/BOOT/BOOTx64.efi`.
- (Optional) Your own sbctl keys which can be imported.

# Install / Upgrade

# makepkg

```
git clone https://github.com/Kimiblock/moeOS-Package.git
cd moeOS-Package
makepkg -sif
```

## paru

Add the following lines to /etc/paru.conf:

```
[moeOS-git]
Url = https://github.com/Kimiblock/moeOS-Package.git
[lsb-release-moe]
Url = https://github.com/Kimiblock/moeOS-Package.git
[nvidia-prime-moe]
Url = https://github.com/Kimiblock/moeOS-Package.git
[moe-multimedia-meta]
Url = https://github.com/Kimiblock/moeOS-Package.git
[moe-fonts-meta]
Url = https://github.com/Kimiblock/moeOS-Package.git
[moe-input-config]
Url = https://github.com/Kimiblock/moeOS-Package.git
[moe-desktop-meta]
Url = https://github.com/Kimiblock/moeOS-Package.git
```

Then install the package:

```
paru -Syu --pkgbuilds
paru -S "moeOS-git" "lsb-release-moe" "nvidia-prime-moe" "moe-multimedia-meta" "moe-fonts-meta" "moe-input-config" "moe-desktop-meta"
```

# Ingredients

Contains the following configurations and customizations:

- moeOS Plymouth splash theme.
- Default `sbctl` Secure Boot configuation.
- Example configuraions which can't be generated. (Located in `/usr/share/moeOS-Docs/Reference Configs`)
- Firefox configuration, no annoyance.
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
