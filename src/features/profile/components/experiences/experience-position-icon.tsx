import type { LucideProps } from "lucide-react";
import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  LayoutTemplate,
  LightbulbIcon,
  PenTool,
} from "lucide-react";

import type { ExperiencePositionIcon } from "../../types/experiences";

const iconMap: Record<
  ExperiencePositionIcon,
  React.ComponentType<LucideProps>
> = {
  code: CodeXmlIcon,
  design: PenTool,
  education: GraduationCapIcon,
  business: BriefcaseBusinessIcon,
  idea: LightbulbIcon,
  wordpress: LayoutTemplate,
};

export function ExperienceIcon({
  icon,
  ...props
}: {
  icon: ExperiencePositionIcon | undefined;
} & LucideProps) {
  const IconComponent = icon ? iconMap[icon] : BriefcaseBusinessIcon;
  return <IconComponent {...props} />;
}
