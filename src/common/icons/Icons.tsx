import React from "react";
import { ICONS_MAP } from "./IconsMap";
import { ICONS_LIST } from "../constant";

interface IconsProps {
  title: string;
  width: number;
  height: number;
}

function Icons({ title, width, height }: IconsProps) {
  return <img src={ICONS_MAP[ICONS_LIST.TRENDING]} alt={ICONS_LIST.TRENDING} />;
}

export default Icons;
