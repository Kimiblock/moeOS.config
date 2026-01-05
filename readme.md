# moeOS.Config

moeOS is an elegant Operating System based on Arch Linux. It fits on tablets, laptops and desktops.

Things just work, with a touch of security. No need to fiddle with printers and hybrid graphics.

---

<h1 align="center">
  <img src="https://raw.githubusercontent.com/Kimiblock/moeOS.config/master/usr/share/icons/hicolor/scalable/apps/moeos.svg" alt="The moeOS Project" width="128" />
  <br>
  moeOS
  <br>
</h1>

# Pre-reqirements

- A swap partition is **REQUIRED**
- Vanilla Zen kernel.
- EFI System Partition auto-mounted by systemd.
- (Optional) Your own sbctl keys which can be imported.
- The `moeDiscreteOnly=1` environment variable can be used to override GPU detection:
	- 1:	Force use of discrete GPU
	- Side note: while switching from discrete mode to hybrid mode, run `sudo touch /dev/dri/renderD100 && sudo modprobe xe` to trick the building script
- Defaults to NVIDIA driver stack, nouveau can be used by setting `moeNouveau` environment.

# Install / Upgrade from a new system

1. Please follow the official Arch Linux installation guide using the BTRFS file system with subvolumes `@` and `@home`, until _Initramfs_, excluding `Fstab`.
	- Note that unencrypted setups are not tested
2. Please add the archlinuxcn repository. Add the following lines in the chroot system /etc/pacman.conf:

```
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

	- Optionally, configure the mirror:
		- run `pacman -Syu archlinuxcn-mirrorlist-git`
		- edit `/etc/pacman.d/archlinuxcn-mirrorlist`, uncomment wanted mirrors
		- edit `/etc/pacman.conf` replace the _Server_ line with `Include = /etc/pacman.d/archlinuxcn-mirrorlist`
3. Install package `fish` `nano` `git` `paru` `devtools` `linux-headers`
4. Create your user: `useradd -m -G wheel <User>` `passwd <User>`
5. Uncomment or add `%wheel ALL=(ALL:ALL) ALL` in /etc/sudoers
6. Install this project: (Note that you should choose xdg-desktop-portal-gnome)
```
sudo -u <User>
paru -S xone-dongle-firmware
git clone https://github.com/Kimiblock/moeOS-Package.git
cd moeOS-Package
paru -Ui
exit
install /usr/share/moeOS-Docs/Reference\ Configs/cmdline /etc/kernel/cmdline
install /usr/share/moeOS-Docs/Reference\ Configs/fstab /etc/fstab
install /usr/share/moeOS-Docs/Reference\ Configs/mkinitcpio.d/linux-zen.preset /etc/mkinitcpio.d/linux-zen.preset
systemctl enable gdm
cd /
rm moeOS-Package
```
8. Edit /etc/kernel/cmdline, modify `rd.luks.name` UUID
9. Format and mount /efi
10. Mofify /etc/fstab
11. Run `mkdir -p /efi/EFI/Boot -p && mkinitcpio -P`

## Manual

```
git clone https://github.com/Kimiblock/moeOS-Package.git
cd moeOS-Package
paru -Ui
```

## Update with your system

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
paru -Syu
paru -S "moeOS-git" "lsb-release-moe" "nvidia-prime-moe" "moe-multimedia-meta" "moe-fonts-meta" "moe-input-config" "moe-desktop-meta"
```

# Ingredients

Contains the following configurations and customizations:

- moeOS Plymouth splash theme.
- Defaults to GNOME, KDE flavor is actively improving.
- Default `sbctl` Secure Boot configuation.
- Printing that just works with IPP Everywhere and AirPrint printers. Wired and wireless printers are supported. Older printer drivers are included, if there is any open source driver for it.
- Example configuraions which can't be generated. (Located in `/usr/share/moeOS-Docs/Reference Configs`)
- Firefox and Zen configuration, no annoyance.
- OS branding replacement.
- Pacman hooks to replace files automatically.
- A libadwaita-like Kvantum theme for Qt applications.
- Some handy scripts (eg. `v2hevc` `v2avc` `oggaudio`) to transcode video footages and audio files quickly using VA-API.
- Powersave settings.
- Better switchable graphics handling.
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

## Portable Applications

Applications using the [Portable Sandboxing framework](https://github.com/Kraftland/portable) already supports discrete GPU utilisation.

## Native Applications

Prepend the launch command with `prime-run`

For Steam, launch options can be set to:

```
prime-run %command%
```

For Prism Launcher, navigate to _File_ -> _Settings..._ -> _Custom Commands_

Set _Wrapper command_ to `prime-run mcLaunch`

## Flatpak Applications (Experimental)
[Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal) is needed.

Open Flatseal, select the Application you want to run on discrete GPU.

Under Environment, add those variables (one for each line):

```
__GLX_VENDOR_LIBRARY_NAME=nvidia
VK_LOADER_DRIVERS_SELECT=nvidia_icd.json
```

for nouveau, use these instead:

```
VK_LOADER_DRIVERS_SELECT=nouveau_icd.x86_64.json
DRI_PRIME=1
```

If you're having problems, add the following two:

```
__NV_PRIME_RENDER_OFFLOAD=1
__VK_LAYER_NV_optimus=NVIDIA_only
```

# Upstream Problems

## Location Services

Location Services may appear inaccurate. We are currently using BeaconDB, which relies someone in your region uploads Wi-Fi data to locate.

## GTK / GNOME

- When using HiDPI scaling, older applications and some browsers may appear blurry.
- libadwaita applications are sluggish [GTK #6438](https://gitlab.gnome.org/GNOME/gtk/-/issues/6438).
- When fractional scaling is enabled, screenshots of a window may appear slightly blurry.
- With many intel GPUs, the brightness may not be controllable if HDR is off. Switching to xe solves this issue.

## Qt

- Qt applications may not have any _kinetic_ when scrolling with a trackpad, or behave strange.

## Chromium

- Trackpad scrolling speed is too fast.
- Hardware accelerated video decoding / encoding may not work.
- Waking up discrete GPU.
- Input method may not work.

## Flatpak

- Applications may not use system font [Flatpak #1563](https://github.com/flatpak/flatpak/issues/1563).
