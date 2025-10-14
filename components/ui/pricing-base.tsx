import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function PricingBase() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Preise, die mit Ihnen wachsen</h1>
                    <p>IntroGroup Sales Intelligence bietet flexible Tarife für Teams jeder Größe. Wählen Sie den Plan, der am besten zu Ihren Vertriebsanforderungen passt.</p>
                </div>

                <div className="mt-8 grid gap-6 [--color-card:var(--color-muted)] *:border-none *:shadow-none md:mt-20 md:grid-cols-4 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="bg-muted flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Free</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">0€ / Monat</span>
                            <CardDescription className="text-sm">Für den Einstieg</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['10 Deep Researches pro Monat', 'Basis Life Coach', 'E-Mail Support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="/de/auth">Kostenlos starten</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="bg-muted relative">
                        <span className="bg-gradient-to-br absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Beliebt</span>

                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Pro</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">49€ / Monat</span>
                                <CardDescription className="text-sm">Für Power-User</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {['100 Deep Researches pro Monat', 'Erweiterter Life Coach', 'Google Calendar Sync', 'Ultra Research Modus', 'E-Mail und Chat Support', 'Erweiterte Analytics', 'Mobile App Zugang', '1 Custom Report pro Monat', 'Monatliche Updates', 'Standard Sicherheitsfeatures'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="/de/auth">Jetzt upgraden</Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    <Card className="bg-muted flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Business</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">99€ / Monat</span>
                            <CardDescription className="text-sm">Für Vertriebsteams</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['250 Deep Researches pro Monat', 'Alles aus Pro Plan', 'Marketplace & Provider', 'Advanced Analytics', 'Vertex AI Coach', 'Team-Management', 'API-Zugang', 'Priority Support', 'Custom SLAs', 'Erweiterte Sicherheit'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="/de/auth">Jetzt upgraden</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="bg-muted flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Enterprise</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">Individuell</span>
                            <CardDescription className="text-sm">Für große Teams</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Unlimited Researches', 'Alles aus Business Plan', 'HubSpot Integration', 'Multiteam-Management', 'Dedicated Support', 'Custom SLAs', 'On-Premise Deployment', 'White-Label Lösung', 'SSO Integration', '24/7 Support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="/de/contact">Kontakt aufnehmen</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
