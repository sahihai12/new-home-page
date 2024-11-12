'use client'
import { productData } from '@/constant/dummydata'
import React from 'react'
import DynamicIcon from '../DynamicIcon'
import SlickSlider from '../SlickSlider'
import Image from 'next/image'

const DealDay = () => {
    return (
        <section className='container px-2 mx-auto'>
            <SlickSlider option={{ desk: 4, tab: 3, mob: 2, dots: false }}>
                {
                    productData.map((el, index) => (
                        <div key={index}>
                            <div className="product-card rounded-lg overflow-hidden shadow-lg bg-white m-1">
                                <Image src={el.src} width={300} height={300} alt={el.name} className="w-full" />
                                <div className='p-2'>
                                    <p className="title mt-4 text-lg font-semibold">{el.title}</p>
                                    <p className="desc mt-2 text-sm text-gray-600 line-clamp-2">{el.desc}</p>
                                    <p className="price mt-2 mb-2 text-sm font-semibold flex flex-col">
                                        {el.price}
                                        <span className="text-red-500 font-normal">
                                            <strike>{el.price_old}</strike> 40% off
                                        </span>
                                    </p>
                                    <div className="rating flex items-center gap-2">
                                        <p className="flex items-center text-yellow-400">
                                            <DynamicIcon name="FiStar" />
                                            <DynamicIcon name="FiStar" />
                                            <DynamicIcon name="FiStar" />
                                            <DynamicIcon name="FiStar" />
                                            <DynamicIcon name="FiStar" />
                                        </p>
                                        <span className="text-gray-500 text-xs">12389179</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </SlickSlider>
        </section>
    )
}

export default DealDay