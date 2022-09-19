import Config from "~/model/config";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const config: Config = {
    siteName: "Bruce的概述",
    owner: {
        name: "Bruce Tian",
        email: "bruce@tkong.net",
        description: "我的能力是真的很差。",
    },
    SEO: {
        description:
            "这是 Bruce 的个人主页，向您详细介绍关于 Bruce 的相关信息、学习与生活。",
    },
    CDN: {
        gravatar: "avatar.sourcegcdn.com",
    },
    matomo: {
        url: "https://stat.ahdark.com",
        siteId: "18",
    },
    wordpress: "https://www.ahdark.com/",
    wakatimeToken: process.env.WAKATIME_TOKEN,
    social: [
        {
            name: "Twitter",
            icon: brands("twitter"),
            href: "https://twitter.com/AHdark_0428",
        },
        {
            name: "Telegram Channel",
            icon: brands("telegram"),
            href: "https://t.me/AHdark_Channel",
        },
        {
            name: "QQ Group",
            icon: brands("qq"),
            href: "https://jq.qq.com/?_wv=1027&k=Og7hjC2B",
        },
        {
            name: "GitHub",
            icon: brands("github"),
            href: "https://github.com/Bruce081",
        },
        {
            name: "Email",
            icon: solid("envelope"),
            href: "mailto:bruce@tkong.net",
        },
    ],
};

export default config;
