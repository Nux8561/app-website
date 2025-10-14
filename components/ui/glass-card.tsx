'use client';

import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'gradient';
}

export const GlassCard = ({
  className,
  children,
  variant = 'default',
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md',
        'transition-all duration-300',
        variant === 'hover' && 'hover:bg-white/20 hover:border-white/30',
        variant === 'gradient' && 'bg-gradient-to-br from-white/10 to-white/5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
