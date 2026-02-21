import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
      
                    <div className="pb-24 md:pb-32 lg:pb-56 lg:pt-35">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                        

                        <div className="relative w-full flex mt-35 md:mt-20 lg:mt-15 xl:mt-3 flex-col h-64 md:h-80 lg:100 xl:h-128"> 
                            {/* Next.js Image component with fill property */}
                            <Image
                                src="/yasconCover.png" // Replace with your image path
                                alt="Coverpage image"
                                fill // makes image absolute and fills parent
                                className="object-cover rounded-lg shadow-wd opacity-100 " // object-cover ensures image covers the area nicely
                            />
                            
                            {/* Text container positioned absolutely within the parent */}
                            <div className="absolute flex flex-col inset-0  max-w-2xl text-balance text-5xl font-medium text-xl md:text-6xl lg:mt-16 xl:text-6xl">
                                <p className="text-white py-3 shadow-wd font-bold bg-grey-60  bg-opacity-50 p-4 rounded">
                               YOUTH ASSOCIATION FOR CONSERVATION OF NATURE AND ENVIRONMENT
                                </p>

                            </div>

                        </div>
    

                            <div className="mx-auto max-w-lg text-center lg:ml-0  lg:w-1/2 lg:text-left">

                                <div className="mt-12 flex flex-col items-center">
                                   <div className="bg-neutral-primary-soft block max-w-sm m-2 p-6 border hover:transition-smooth border-green-800 border-1 rounded-base shadow-wd shadow-xs">
                                    <a href="#">
                                        <img className="rounded-base" src="yascon 4.png" alt="yascon" />
                                    </a>
                                    <a href="#">
                                        <h5 className="mt-6 mb-2 text-2xl  text-green-800 font-semibold tracking-tight text-heading">Our Vision</h5>
                                    </a>
                                    <p className="mb-6 text-body">To create a Green Heart Of Africa joined with passionate youth towards natural conservation.</p>
                                   </div>
                               

                                <div className="bg-neutral-primary-soft bg-grey-300 block max-w-sm p-6 border hover:transition-smooth border-green-800 border-1  border-default rounded-base shadow-xs">
                                    <a href="#">
                                        <img className="rounded-base" src="yascon1.png" alt="yascon" />
                                    </a>
                                    <a href="#">
                                        <h5 className="mt-6 mb-2 text-2xl text-green-800 font-semibold tracking-tight text-heading">Our Mission</h5>
                                    </a>
                                    <p className="mb-6 text-body">Making Youth be at the fore front in Environmental Conservation in all parts of Malawi.</p>
                                   
                                </div>
                                
                               <div className="bg-neutral-primary-soft block max-w-sm m-2 p-6 border hover:transition-smooth border-green-800 border-1 rounded-base shadow-wd shadow-xs">
                                    <a href="#">
                                        <img className="rounded-base" src="yascon 4.png" alt="yascon" />
                                    </a>
                                    <a href="#">
                                        <h5 className="mt-6 mb-2 text-2xl  text-green-800 font-semibold tracking-tight text-heading">Core Values.</h5>
                                    </a>
                                    <p className="mb-6 text-body">Teamwork, Sterwardship and Excellent Communication Skills.</p>
                                   
                                </div>
                          
                         </div>
                        </div> 
                        
                        </div>
                    </div>
                    
                </section>
                
                
            </main>
        </>
    )
}
