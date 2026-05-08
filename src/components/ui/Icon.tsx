import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
  strokeWidth?: number;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = (LucideIcons as any)[name];

  if (!LucideIcon) {
    return <LucideIcons.HelpCircle {...props} />;
  }

  return <LucideIcon {...props} />;
};
