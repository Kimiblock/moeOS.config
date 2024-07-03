# moeOS.Config

A simple way to provide a _preset_ for Arch Linux. Offers better switchable graphics and printing configuration with a focus on security.

---

<h1 align="center">
  <img src="https://raw.githubusercontent.com/Kimiblock/moeOS.config/master/usr/share/icons/hicolor/scalable/apps/moeos.svg" alt="The moeOS Project" width="128" />
  <br>
  moeOS
  <br>
</h1>

# Pre-reqirements

- x86-64-v3 CPU.
- Arch Linux's vanilla kernel with GNOME Wayland only, Plasma flavor can be built with `moePreferDE=KDE` (it is buggy).
- EFI System Partition auto-mounted by systemd under `/efi`.
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
paru -Sy --pkgbuilds
paru -Syu "moeOS-git" "lsb-release-moe" "nvidia-prime-moe" "moe-multimedia-meta" "moe-fonts-meta" "moe-input-config" "moe-desktop-meta"
```

If you are using Plasma, run `systemctl preset moeOS-setup.service --user` upon first login and log out.

# Ingredients

Contains the following configurations and customizations:

- moeOS Plymouth splash theme.
- Default `sbctl` Secure Boot configuation.
- Printing that just works with IPP Everywhere and AirPrint printers. Wired and wireless printers are supported. Older printer drivers are included, if there is any open source driver for it.
- Example configuraions which can't be generated. (Located in `/usr/share/moeOS-Docs/Reference Configs`)
- Firefox configuration, no annoyance.
- OS branding replacement.
- Pacman hooks to replace files automatically.
- A libadwaita-like Kvantum theme for Qt applications.
- Some handy scripts (eg. `v2hevc` `v2avc` `oggaudio`) to transcode video footages and audio files quickly using VA-API.
- Powersave settings.
- Better switchable graphics handling.
- Hacks to revert recent shitty changes of GTK.
- Default MPV / Celluloid config files.
    * Hardware Acceleration
    * Better scaling
    * Volume normalization
    * Vulkan GPU API
    * dmabuf-wayland speedy video output

- Default font configuration.

- Colors:
  
  - Bright: Accent: `#ed65e2`; Background: `#ed65e2`
  
  - Dark: Accent: `#ed65e2`; Background: `#da7de3`

# Switchable Graphics

## Native Applications

Prepend the launch command with `prime-run`

For Steam, launch options can be set to:

```
prime-run %command%
```

For Prism Launcher, navigate to _File_ -> _Settings..._ -> _Custom Commands_

Set _Wrapper command_ to `prime-run`

## Flatpak Applications (Experimental)
[Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal) is needed.

Open Flatseal, select the Application you want to run on discrete GPU.

Under Environment, add those variables (one for each line):

```
__NV_PRIME_RENDER_OFFLOAD=1
__VK_LAYER_NV_optimus=NVIDIA_only
__GLX_VENDOR_LIBRARY_NAME=nvidia
VK_DRIVER_FILES=
```

# Upstream Problems

## Video Playback

HDR or too high definition (8K) video playback results in sluggish system. Use pre-installed MPV video player for those videos.

## Location Services

Location Services may not be available in some countries and may provide wrong coordinates. Google Services are used for locating since MLS has been sunset.

## GTK / GNOME

- When using HiDPI scaling, older applications and some browsers may appear blurry.
- GTK applications may be blurry on systems with multiple screens.
- libadwaita applications are sluggish [GTK #6438](https://gitlab.gnome.org/GNOME/gtk/-/issues/6438).
- When fractional scaling is enabled, screenshots of a window may appear slightly blurry.

## Qt

- Qt applications do not have any _kinetic_ when scrolling with a trackpad.

## Firefox

- Performance may not be good.
- Rounded bottom corner may disappear when viewing websites with `backdrop-filter`.
- Resizing window is slow.
- Does not follow the system font weight settings [Bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=1895270).

## Chromium

- Input Method may not work at all.
- Trackpad scrolling speed is too fast.
- Hardware accelerated video decoding / encoding may not work.
- Waking up discrete GPU.
- Blurry due to XWayland usage.

## Flatpak

- Applications may not use system font [Flatpak #1563](https://github.com/flatpak/flatpak/issues/1563).
