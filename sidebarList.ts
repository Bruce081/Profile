import ListItem from "~/model/listItem";
import HomeIcon from "@mui/icons-material/HomeRounded";
import WorkIcon from "@mui/icons-material/WorkRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";

const list: ListItem<
    OverridableComponent<SvgIconTypeMap> & { muiName: string }
>[] = [
    {
        name: "主页",
        href: "/",
        icon: HomeIcon,
    },
    {
        name: "工作",
        href: "/work",
        icon: WorkIcon,
    },
    {
        name: "文章",
        href: "/posts",
        icon: ArticleRoundedIcon,
    },
    {
        name: "Code Time",
        href: "/code_time",
        icon: CodeRoundedIcon,
    },
];

export default list;
