const n="focs/arch-linux/01-installation.md",o="posts",s="focs/arch-linux/01-installation",e=`
## 前言

### 为什么要装 Linux 系统？

最直接的原因是我对 Windows 积怨已久，特别是写这篇文章之前的一两个月。随着 Windows 系统的一次次更新，这个系统越来越臃肿，各种不致命但十分恼人的 bug 层出不穷。同时，Windows 系统无时无刻不在给自己制造垃圾，即便我日常的使用中已经谨慎再谨慎，后台的图形化占用还是居高不下。

的确，Windows 作为一个大众化的操作系统，他在降低人们的上手门槛以及简化日常使用这方面做得很好。但是一旦涉及到编程、性能这方面，Windows 就突然变得不太友好了（对比一下在 Windows、MacOS、Linux上配置编程环境的难度就足以见得了）。

同时，Windows 也不允许我干脆的去除系统中那些我完全用不到的功能。

因此，完全开源、可以定制的 Linux 系统早早的就进入了我的视野，于是，在 Windows 又一次在我的工作中途崩溃报错重启之后，我狠下心清了 1TB 的磁盘空间出来决定装一个 Linux / Windows 双系统 ~~（别问我为什么还要留着 Windows ，我还有游戏要玩🤓）~~

### 为什么选择 Arch Linux ？

~~主要是我喜欢折腾，~~ 原因也很简单，因为我搜 Linux 发行版的时候第一个跳到我脸上的是 Arch ，所以就跟着配置下来了。后面我才去详细了解了各种发行版之间的区别，不过鉴于我的 Arch 已经配置的大差不差了，我也就没有去尝试其他的发行版。

配置好之后，确实感受到了 Arch Linux 的一大特色：极致的减法。如果说其他的发行版是给用户足够的自由，允许用户自己在原本的系统上任意的进行加加减减；那么 Arch Linux 就是一开始就只提供最基础的东西，其余的东西完全交由用户来添加。这么做的好处是，一旦成功的从头到尾的配置过 Arch Linux 后，我们可以对 Linux 系统的架构、特性等有一个系统性的认识。

### 一些说明

考虑到不同机型可能会出现各种各样的情况，以及时效性方面的问题，这篇文章所有的操作都只能保证对我现在使用的硬件和软件有效（具体的软硬件信息我会附在下面，如果读者也想要配置 Arch Linux 系统的话，请一定要花时间去 [ Arch Linux 的官网](https://archlinux.org) 以及 [ArchWiki](https://wiki.archlinux.org/title/Main_page) 研究研究（毕竟折腾也是 Linux 的一大乐趣嘛）。

下面就是我配置好的 Arch Linux 的一些软硬件信息：

\`\`\`\`\`bash
❯ fastfetch
                  -\`                     neo0413@neo-arch
                 .o+\`                    ----------------
                \`ooo/                    OS: Arch Linux x86_64
               \`+oooo:                   Host: OMEN by HP Gaming Laptop 16-wf1xxx
              \`+oooooo:                  Kernel: Linux 7.0.12-zen1-1-zen
              -+oooooo+:                 Uptime: 48 mins
            \`/:-:++oooo+:                Packages: 20 (flatpak), 1211 (pacman)
           \`/++++/+++++++:               Shell: zsh 5.9.1
          \`/++++++++++++++:              Display (Q27G4SL_WS): 2560x1440 in 27", 320 Hz [External, HDR] *
         \`/+++ooooooooooooo/\`            Display (BOE0B7D): 2560x1440 @ 1.5x in 16", 240 Hz [Built-in]
        ./ooosssso++osssssso+\`           DE: KDE Plasma 6.7.1
       .oossssso-\`\`\`\`/ossssss+\`          WM: KWin (Wayland)
      -osssssso.      :ssssssso.         WM Theme: Breeze 微风
     :osssssss/        osssso+++.        Theme: Breeze (Dark) [Qt], Breeze-Dark [GTK2], Breeze [GTK3]
    /ossssssss/        +ssssooo/-        Icons: breeze-dark [Qt], breeze-dark [GTK2/3/4]
  \`/ossssso+/:-        -:/+osssso+-      Font: Noto Sans (10pt) [Qt], Noto Sans (10pt) [GTK2/3/4]
 \`+sso+:-\`                 \`.-/+oso:     Cursor: breeze (24px)
\`++:.                           \`-/+/    Terminal: kitty 0.47.1
.\`                                 \`/    Terminal Font: JetBrainsMonoNF-Regular (12pt)
                                         CPU: Intel(R) Core(TM) i9-14900HX (16+16) @ 5.80 GHz
                                         GPU: NVIDIA GeForce RTX 4060 Max-Q / Mobile [Discrete]
                                         Memory: 6.38 GiB / 31.04 GiB (21%)
                                         Swap: 2.90 GiB / 31.04 GiB (9%)
                                         Disk (/): 173.46 GiB / 231.42 GiB (75%) - btrfs
                                         Local IP (eno1): 10.172.120.164/19
                                         Battery (WK06083XL): 100% [AC Connected]
                                         Locale: en_US.UTF-8



\`\`\`\`\`

## 安装 Arch Linux
`,i={title:"Arch Linux 的安装",author:"NeoWangKing",date:new Date(1782033634e3),lastMod:new Date(1782033647e3),tags:["Linux","Arch"],category:["程设计科","Arch Linux"],summary:"本文主要介绍了 Arch Linux 系统的基本安装和基础配置流程",comments:!1,draft:!0,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/focs/arch-linux/01-installation.md",rawData:void 0};export{t as _internal,e as body,o as collection,i as data,n as id,s as slug};
