import { Color } from "framer-motion";
import { ReactElement } from "react";

export type Game = {
    title: string;
    imgUrl: string;
    backgroundColor: string;
    description: string;
    iframe: ReactElement;
};
