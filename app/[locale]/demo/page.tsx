'use client';

import { Prism } from '@/components/ui/prism';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-full max-w-4xl h-[600px]">
        <Prism className="w-full h-full" />
      </div>
    </div>
  );
}

