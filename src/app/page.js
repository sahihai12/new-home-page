import AllFeatured from "@/components/Home/AllFeatured";
import Counter from "@/components/Home/Counter";
import DealDay from "@/components/Home/DealDay";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import offer from '../assets/images/offer.png';
import omg from '../assets/images/omg.png';
import sale from '../assets/images/sale.png';
import sandal from '../assets/images/sandal.png';
import sponsed from '../assets/images/sponsed.png';
import DynamicIcon from "@/components/DynamicIcon";

export default function Home() {
  return (
    <Layout>
      <AllFeatured />
      <section className="deal-of-day pb-10 mt-5">
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-between gap-2.5 p-3 bg-[#3c94e1] rounded-lg text-white">
            <div>
              <h3>Deal of the Day</h3>
              <p className="light"><Counter hours={22} minutes={55} seconds={10} /></p>
            </div>
            <div className="text-right">
              <button className="btn-link text-white border border-white">
                <Link href="/" className="flex items-center gap-2">View All <FaArrowRightLong size={16} /></Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <DealDay />

      <section className="special-offer container mx-auto">
        <div className="p-3 flex gap-3 bg-white rounded items-center">
            <Image src={offer} alt="offer-image" width={150} height={60} className="offer-image"/>
            <div className="content flex flex-col gap-2">
              <h3 className="font-medium text-2xl flex gap-1 items-center">Special Offer <Image src={omg} alt="omg-image" width={20} height={20} className="mr-1"/></h3>
              <p className="font-extralight">We make sure you get the <br /> offer you need at best prices</p>
            </div>
        </div>
      </section>

      <section className="flat-offer container mx-auto">
        <div className="p-3 flex gap-3 md:justify-center m-2">
          <Image src={sandal} alt="sandal-image" width={150} height={60} className="md:w-4/12" />
          <div className="content flex flex-col gap-0 md:w-4/12 items-center md:justify-center md:items-end mt-3 md:mt-0">
            <h3 className="font-lg">Flat and Heels</h3>
            <p className="font-extralight	text-sm mb-1">Stand a chance to get rewarded</p>
            <div className="text-end w-full">
              <button className="btn-link text-white border border-white bg-[#F83758]">
                  <Link href="/" className="flex items-center gap-2">Visit Now <FaArrowRightLong size={16} /></Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="trending-prodcuts pb-10 mt-5">
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-between gap-2.5 p-3 bg-[#FD6E87] rounded-lg text-white">
            <div>
              <h3>Deal of the Day</h3>
              <p className="light"><DynamicIcon name={'FiCalendar'} /> Last Date 29/02/22 </p>
            </div>
            <div className="text-right">
              <button className="btn-link text-white border border-white">
                <Link href="/" className="flex items-center gap-2">View All <FaArrowRightLong size={16} /></Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="sale container mx-auto">
        <div className="flex flex-col m-2 bg-white mb-5 rounded-t-lg overflow-hidden">
            <Image src={sale} alt="sale-image" width={1000} height={400}  className="w-full"/>
            <div className="content flex justify-between gap-1 p-3">
              <div>
                <h3 className="font-lg">New Arrivals</h3>
                <p className="font-extralight	text-sm">Stand a chance to get rewarded</p>
              </div>
              <button className="btn-link text-white border border-white bg-[#F83758]">
                  <Link href="/" className="flex items-center gap-2">View ALl <FaArrowRightLong size={16} /></Link>
              </button>
            </div>
        </div>
      </section>

      <section className="sponsed container mx-auto">
        <div className="flex flex-col p-2">
            <Image src={sponsed} alt="sponsed-image" width={1000} height={400} className="rounded-xl w-full" />
            <div className="content flex justify-between p-3 bg-white">
              <h3 className="font-lg font-bold">Up to 50% Off</h3>
              <Link href="/"><FaChevronRight size={16} /></Link>
            </div>
        </div>
      </section>


    </Layout>
  );
}
