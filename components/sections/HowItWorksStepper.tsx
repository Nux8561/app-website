'use client'

import { Button } from '@/components/ui/button'
import type { StepItem } from '@/components/ui/stepper'
import { Step, Stepper, useStepper } from '@/components/ui/stepper'
import { Sparkles, Brain, Rocket } from 'lucide-react'

const steps = [
   {
      label: 'Daten sammeln',
      description: 'Unsere KI aggregiert und bereitet relevante Daten auf.',
      icon: Sparkles,
   },
   {
      label: 'KI-Analyse',
      description: 'Modernste Algorithmen identifizieren Muster und Potenziale.',
      icon: Brain,
   },
   {
      label: 'Insights nutzen',
      description: 'Erhalten Sie umsetzbare Empfehlungen für Ihren Vertrieb.',
      icon: Rocket,
   },
] satisfies StepItem[]

export function HowItWorksStepper() {
   return (
      <section className="py-12 md:py-24 lg:py-32">
         <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
               <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                     So funktioniert IntroGroup Sales Intelligence
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                     In drei einfachen Schritten zu mehr Vertriebserfolg.
                  </p>
               </div>
            </div>
            <div className="flex w-full flex-col gap-4">
               <Stepper initialStep={0} steps={steps} orientation="vertical">
                  {steps.map((stepProps, _index) => {
                     return (
                        <Step key={stepProps.label} {...stepProps}>
                           <div className="bg-secondary text-primary my-2 flex h-40 items-center justify-center rounded-md border">
                              <h1 className="text-xl">
                                 {stepProps.label}
                              </h1>
                           </div>
                        </Step>
                     )
                  })}
                  <Footer />
               </Stepper>
            </div>
         </div>
      </section>
   )
}

function Footer() {
   const {
      nextStep,
      prevStep,
      resetSteps,
      hasCompletedAllSteps,
      isLastStep,
      isOptionalStep,
      isDisabledStep,
   } = useStepper()
   return (
      <div className="flex w-full justify-end gap-2 mt-4">
         {hasCompletedAllSteps
            ? (
               <Button size="sm" onClick={resetSteps}>
                  Zurücksetzen
               </Button>
               )
            : (
               <>
                  <Button
                     disabled={isDisabledStep}
                     onClick={prevStep}
                     size="sm"
                     variant="secondary"
                  >
                     Zurück
                  </Button>
                  <Button size="sm" onClick={nextStep}>
                     {isLastStep
                        ? 'Abschließen'
                        : isOptionalStep
                           ? 'Überspringen'
                           : 'Weiter'}
                  </Button>
               </>
               )}
      </div>
   )
}
