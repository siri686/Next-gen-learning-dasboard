import {
  BarChart3,
  BookOpen,
  FileCode2,
  GraduationCap,
  Layers3,
  LucideIcon,
  MonitorPlay,
  Sparkles
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  BookOpen,
  FileCode2,
  GraduationCap,
  Layers3,
  MonitorPlay,
  Sparkles
};

export function getCourseIcon(iconName: string): LucideIcon {
  return iconMap[iconName] ?? BookOpen;
}
