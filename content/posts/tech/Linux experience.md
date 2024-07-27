+++
title = 'Linux and my experience'
date = 2024-05-08T13:40:41+03:00
draft = false
url = "/posts/linux-experience"
tags = ["Linux", "OS"]
categories = ["Tech"]
description = "My experience with Ubuntu and Arch Linux"
summary = """Unless you're playing games with anticheat (e.g PUBG, CS on Faceit, COD: Warzone, etc...) 
there is nothing to lose if you switch to Linux."""
+++

# Getting Started

Since announcement of Windows 11 I decided to seek out for alternatives for my old laptop.
I've tried installing Windows 10 on it, but as time goes by the applications soon become very slow and general experience was not so good.
I'm aware that you can disable or remove Microsoft Store and other useless service. Nonetheless, lags didn't disappeared.

I've started using Linux since October 2022.
My first distribution was [Lubuntu](https://lubuntu.me). As you may guess, it's flavor of Ubuntu --- fork of Debian and the most popular choice among beginners.
This distribution widely used in education departments or servers. The main benefits of Ubuntu and their flavors is great support and software availability.
Lubuntu defaults to LxQt desktop environment and well-suited for old hardware. So I thought it would be perfect for my laptop.

By that time I've finished my *Linux basics* course in university that made me familiar with the terminal, technical details
and almost stopped playing video games with anticheat that doesn't support Linux.

# Installation

By the way, if you search for disk burning utilities, here is the list:
- [Rufus](https://rufus.ie) for Windows only;
- [Ventoy](https://www.ventoy.net) for Windows, Linux, BSD; or
- [Balena Etcher](https://etcher.balena.io) for Linux, Windows, MacOS.
They are great free and open-source software. However, back to my experience.

## Lubuntu

Finally, I had downloaded the ISO and burn the USB stick.
GUI installer was very intuitive. It took about 15 minutes or so to complete this process.
I had zero issues with it.

## Arch Linux

Nowadays, it's not big of a deal to install Arch Linux. It has their installation script that works very good.
However, it's recommended to follow the [ArchWiki](https://wiki.archlinux.org), as some issue may happen in the future and you should deal with them.
These steps requires some basic knowledge about computers.

I had some minor problems with Arch install script in the first installation, where some packages were corrupted or didn't update the signatures.
The installation of basic packages took up to 10 minutes.
The first installation following ArchWiki will take you more time, but it's worth it.

# Package management

Debian based distros have a lot of packages, 
but in certain cases you may need to download a *Snap* version or compile from source.

Managing software possible both from GUI and terminal.
- Debian and debian based distributions (Ubuntu, Linux Mint, Zorin OS, etc...) has *apt* (Advanced packaging tool);
- Fedora and RedHat has *rpm* (Red Hat Package Manager);
- Arch Linux and derivatives has *pacman*;
- *Flatpak* or *Snaps* are sandbox application managers. 
They exists to solve the problem of maintaining package repositories and give the users freedom to change their permission.
Unlike some distro repositories, Snaps and Flatpaks have a lot of proprietary apps. 
Recently, Brodie Robertson made [a video on Snap shipping malware](https://youtu.be/kzB6fHL_2Pg).
So in general, they have bad reputation in Linux community.

Here are GUI based package managers:
- *Synaptic* is popular among Debian based Linux distros. 
In my opition, Synaptic is the best from GUI package managers;
- *Octopi* and *Pamac* for Arch based.
- *Gnome Software Center*.

Check [futher reading](#futher-reading-and-resources) or other sites to find out what package manager you are using.

For istance, building software from source will teach you about building systems and process of compiling with different flags.
Moreover, you can get the latest version without waiting until maintainer of this package will add them to your distribution repositories.
The only disadvantage of building software from source is you manually need to check for updates. 
If you a beginner, i strongly urge you to try it in the Virtual Machine first, because you might break something.

My advice is follow these rules:
1. Download from the official repositories first;
2. Find flatpak or snap version if the package didn't exist in the repos;
3. Clone from the git repository and compile it from source.

In case of Arch Linux, the [AUR helpers](https://wiki.archlinux.org/title/AUR_helpers) like yay, paru or others will manage it for you.
ArchWiki says they didn't support AUR helpers and packages, but in 1.5 years I hadn't experienced any problems.

# Desktop Environments

My first desktop environment was LxQt. It's not fancy like modern DE, but focuses on efficiency and simplicity.
If you have used Windows for a while, it won't take too long to get used to. 
It's nothing more to write. The interface is very intuitive.

KDE and Gnome are the most popular, good-looking DE, but requires more resources. 
I used both, but IMO KDE has better community and more extensible than Gnome.
Default Gnome experience is also very intuitive, but there are a lot of plugins.
In the past, plugins tends to break if you update on the rolling release distributions.
So preceed with cautious.

# Xorg or Wayland

I'll recommend you to try both.
The only issues I had heard of are related to games or broadcasting.
The second is fixed with development of so called desktop portals.
Developer of [Hyprland](https://hyprland.org) did a great job on this.
Big companies like Nvidia, AMD, Redhat and others actively develop software for the adoption of Wayland.

On the other hand, Xorg (X11 or simply X) is dead project and gets only security updates.
It's codebase is hard to maintain, have a lot of unnecessary features, 
but more reliable than Wayland due to it's lifespan.

# Window managers

Window managers are very efficient if you have configured them for yourself.
Most of them follows the Unix philosophy (do one thing and do it well) --- manage windows.
It provides a lot of opportunities for customization, minimal amount of system packages, efficient setup for developers and regular users.
The collection of WM's you can find in [futher reading](#futher-reading-and-resources).

I have been using [bspwm](https://github.com/baskerville/bspwm) since early 2023.
You can download my [dotfiles](https://github.com/LostHopes/dotfiles) and try it out.

# Difference between kernels

There are dozens of custom kernels available to the users.
Among the popular are:
- stable: default kernel for linux distributions
- hardened: some patches for security
- longterm: used mostly for production machines
- realtime: deterministic scheduling (means all processes executed just in time)
- zen: overoptimized kernel with low-latency, mostly used for desktops and gaming

# Conclusion

Despite of WSL and development ecosystem, Windows has more restrictions and [doesn't treat you like a user](https://youtu.be/_fdcrTf0_M4).
Unless you're playing games with anticheat (e.g PUBG, CS on Faceit, COD: Warzone, etc...) there is nothing to lose if you switch to Linux.

The benefits of using Linux for Desktop:
1. Customization
2. Free software (as freedom)
3. Efficiency (in certain games performance even greater than on Windows)
4. No strict rules (you can remove everything, including kernel)
5. Intuitive information about errors, system logs
6. Growing community

# Futher reading and resources

## Packages

1. [Baeldung - Difference Between Building From Source and Installing From a Package File](https://www.baeldung.com/linux/build-source-vs-install-pkg)
2. [Lubuntu manual](https://manual.lubuntu.me)
3. [List of build automation software WIki](https://en.wikipedia.org/wiki/List_of_build_automation_software)
4. [Package managers Wiki](https://en.wikipedia.org/wiki/Package_manager)
5. [Package formats Wiki](https://en.wikipedia.org/wiki/Package_format)

## Desktop

1. [Xorg ArchWiki](https://wiki.archlinux.org/title/xorg)
2. [Wayland ArchWiki](https://wiki.archlinux.org/title/wayland)
3. [DE Wiki](https://en.wikipedia.org/wiki/Desktop_environment)
4. [Desktop portals Hyprland Wiki](https://wiki.hyprland.org/0.20.0beta/Useful-Utilities/Hyprland-desktop-portal/)
5. [Window Managers ArchWiki](https://wiki.archlinux.org/title/window_manager)

## Other

1. [Unix philosophy Wiki](https://en.wikipedia.org/wiki/Unix_philosophy)
2. [Free Software Foundation](https://www.fsf.org/about/)
3. [Reddit community for sharing dotfiles](https://www.reddit.com/r/unixporn/)
4. [Games status on Linux](https://www.protondb.com/explore)
5. [Different kernels and their purposes](https://wiki.archlinux.org/title/Kernel)
6. [Linux kernel programming guide](https://sysprog21.github.io/lkmpg/)

## YouTube channels about Linux and tech

1. [Brodie Robertson](https://www.youtube.com/@BrodieRobertson)
2. [Distrotube](https://www.youtube.com/@DistroTube)
3. [The Linux Experiment](https://www.youtube.com/@TheLinuxEXP)
4. [Michael Tunnell](https://www.youtube.com/@michael_tunnell)
5. [The Linux Cast](https://www.youtube.com/@TheLinuxCast)
6. [Michael Horn](https://www.youtube.com/@MichaelNROH)
7. [Veronica Explains](https://www.youtube.com/@VeronicaExplains)
8. [BugsWriter](https://www.youtube.com/@bugswriter_)
9. [Titus Tech Talk](https://www.youtube.com/@TitusTechTalk)


# Terminology

**Desktop environment** (DE) - user-friendly interfaces and software for interacting with the system.

**Distribution** (distro) - operating system (usually Unix-like) with dedicated set of tools, such as init, shell, package managers, etc.

**Repository** (repo) - platform or server where the source code or pre-built binaries, scripts are stored.

**Dotfiles** - mostly confuguration files for you software, as name suggest, starts with dot.
