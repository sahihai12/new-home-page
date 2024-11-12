'use client'
import React from 'react'
import SlickSlider from "@/components/SlickSlider";
import { featuredCatImg, offerSlider } from "@/constant/dummydata";
import Image from "next/image";
import Link from "next/link";
import { BiSort } from "react-icons/bi";
import { MdOutlineFilterAlt } from "react-icons/md";

const AllFeatured = () => {
    return (
        <section className="container mx-auto all-featured">
            <div className="px-2 py-4">
                <div className='flex gap-1 items-center mb-5 justify-between'>
                    <h2 className="text-xl font-semibold">All Featured  </h2>
                    <p className='flex gap-1'>
                        <span className='flex items-center'> Sort <BiSort /> </span> 
                        <span className='flex items-center'> Filter <MdOutlineFilterAlt /> </span>
                    </p>
                </div>
                <ul className="scroll-none flex items-center justify-between gap-6 overflow-x-scroll whitespace-nowrap">
                    {featuredCatImg.map((el, index) => (
                        <li key={index} className="text-center">
                            <Image src={el.imagepath} width={150} height={150} alt={el.name} />
                            <p className="text-xs md:text-base mt-1.5">{el.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            
            <SlickSlider>
                {offerSlider.map((el, index) => (
                    <div key={index}>
                        <div
                            key={index}
                            className="slider-box flex items-center relative overflow-hidden rounded-lg m-2 min-h-[250px] p-4"
                            style={{ background: `${el.bgColor}` }}
                        >
                            <div className="content max-w-[250px] flex flex-col items-start justify-center gap-2.5">
                                <p className="title text-lg font-bold tracking-wide">{el.title}</p>
                                <p className="desc">{el.desc}</p>
                                <button className="btn-link text-white border border-white">
                                    <Link href={el.link}>{el.btntext}</Link>
                                </button>
                            </div>
                            <Image
                                src={el.imagepath}
                                width={150}
                                height={250}
                                alt={el.name}
                                className="absolute right-0 top-0 w-full max-w-[243px] ml-auto"
                            />
                        </div>
                    </div>
                ))}
            </SlickSlider>

        </section>
    )
}

export default AllFeatured