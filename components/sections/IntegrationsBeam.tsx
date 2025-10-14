"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Database, Workflow, Mail, Calendar, FileText, Sparkles } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function IntegrationsBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-background py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nahtlose{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Integrationen
            </span>
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Verbinden Sie IntroGroup mit Ihren bestehenden Tools und steigern Sie Ihre
            Produktivität
          </p>
        </div>

        <div
          className="relative mx-auto flex h-[500px] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
          ref={containerRef}
        >
          <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div1Ref}>
                <Database className="h-6 w-6 text-primary" />
              </Circle>
              <Circle ref={div5Ref}>
                <FileText className="h-6 w-6 text-primary" />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div2Ref}>
                <Workflow className="h-6 w-6 text-primary" />
              </Circle>
              <Circle ref={div4Ref} className="size-16">
                <Sparkles className="h-8 w-8 text-primary" />
              </Circle>
              <Circle ref={div6Ref}>
                <Mail className="h-6 w-6 text-primary" />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div3Ref}>
                <Calendar className="h-6 w-6 text-primary" />
              </Circle>
              <Circle ref={div7Ref}>
                <Database className="h-6 w-6 text-primary" />
              </Circle>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div4Ref}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
            reverse
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          <IntegrationCard title="HubSpot" icon={<Database className="h-5 w-5" />} />
          <IntegrationCard title="Salesforce" icon={<Workflow className="h-5 w-5" />} />
          <IntegrationCard title="Outlook" icon={<Mail className="h-5 w-5" />} />
          <IntegrationCard title="Google Calendar" icon={<Calendar className="h-5 w-5" />} />
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center">
      <div className="rounded-lg bg-primary/10 p-2 text-primary">{icon}</div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}

