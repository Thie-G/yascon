import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative max-w-2xl text-xl font-bold lg:text-3xl">YASCON ADMINISTRATION.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <img
                                    
                                    src="/yascon1.png"
                                    className="mx-auto flex flex-center mx-auto"
                                    aria-hidden
                                />
                                <img
                                    src="/yascon 4.png"
                                    className="mx-auto flex flex-center mx-auto"
                                    aria-hidden
                                />
                          
                          

                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            The Yascon National Coordinator <span className="text-accent-foreground font-bold"></span> — Mwai Mtalimanja
                        </p>
                        <p className="text-muted-foreground">Together With a team of passionate Social workers and Enviromental Conservation driven Youth</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4 border-green-800">
                                <p>Team work is what make Us Strive.</p>
                                <p>One heart, One Malawi and One Africa.</p>
                                <p>Together, we can color Malawi Green.</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">Team Nyason</cite>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
