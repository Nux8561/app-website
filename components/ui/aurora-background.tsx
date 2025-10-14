'use client';

import { cn } from '@/lib/utils';

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AuroraBackground = ({
  className,
  children,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main
      className={cn(
        'relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg',
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          //   I'm sorry but I am not going to write inline styles for an entire gradient background
          className="absolute -inset-[10px] opacity-50"
          style={{
            background: `
              radial-gradient(800px circle at 100px 100px, rgba(120, 119, 198, 0.3), transparent 40%),
              radial-gradient(600px circle at 40% 40%, rgba(120, 119, 198, 0.3), transparent 40%),
              radial-gradient(400px circle at 60% 60%, rgba(120, 119, 198, 0.3), transparent 40%),
              radial-gradient(800px circle at 100% 100%, rgba(120, 119, 198, 0.3), transparent 40%)
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl" />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
};