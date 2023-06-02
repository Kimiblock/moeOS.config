# moeOS.Config
Arch Linux Gnome Wayland only, use at your own risk.

# Installation
```
cd ~
git clone https://github.com/Kimiblock/moeOS-Package.git
cd moeOS-Package
makepkg -si
```

# Ingredients

Contains the following configurations and customizations:

- moeOS Plymouth boot splash theme.

- Default `sbupdate` Secure Boot configurations, an `mkinitcpio` preset, cmdline example, `sleep.conf`, `Packagekit.conf`.

- `lsb-release` and `os-release` replacement.

- A hook to replace files automatically.

- a moeOS icon and splash image

- Apple PingFang fonts.

- A kvantum theme looks like libadwaita applications with blur and transparent enabled.

- Some handy scripts eg. `v2hevc` `v2avc` `oggaudio` to transcode video footages and audio files quickly using VA-API.

- Some powersave settings.

- A default tlp configuration file.

- A default mpv config file w/ modern interface and hardware acceleration.

- A default fontconfig file. Preferred fonts are Inter fonts, Noto fonts.

- Networkmanager connectivity test pointed to `blog.kimiblock.top`