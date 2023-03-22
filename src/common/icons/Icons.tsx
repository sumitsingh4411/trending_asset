import { ICONS_MAP } from "./IconsMap";
interface IconsProps {
  title: string;
  width?: number;
  height?: number;
}

function Icons({ title, width, height }: IconsProps) {
  return (
    <img src={ICONS_MAP[title]} alt={title} width={width} height={height} />
  );
}

export default Icons;
