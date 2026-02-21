import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-3xl font-bold lg:text-4xl">COMMUNITY MOBILIZATION CAMPAINS</h2>
                    <p className="mt-4">Our team enganged in planting of trees at Zomba and Lilongwe and areas in Malawi</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5 border-b-4 border-grey-800">
                        <CardHeader className="pb-3 bg-green-1000">
                           
                                <img
                                    
                                    src="/yascon 4.png"
                                    className="mx-auto flex flex-center mx-auto"
                                    aria-hidden
                                />
                          

                            <h3 className="mt-6 font-medium font-bold text-green-800">Zomba</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">2025 in November Passionate Youth gathered to embrace the need for climate Justice at Zomba.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 border-b-4 border-green-800">
                        <CardHeader className="pb-3">
                             <img
                                    
                                    src="/yascon1.png"
                                    className="mx-auto flex flex-center mx-auto"
                                    aria-hidden
                            />

                            <h3 className="mt-6 font-medium text-green-800 font-bold ">Lilongwe</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">In central region Yascon Mobilized youth to plant trees</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 border-b-4 border-zinc-800">
                        <CardHeader className="pb-3">
                             <img
                                    
                                    src="/yasconCover.png"
                                    className="mx-auto flex flex-center mx-auto"
                                    aria-hidden
                                />

                            <h3 className="mt-6 font-medium font-bold text-green-800">Mangochi</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">This year Yascon team mobilized youth to plant trees</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
