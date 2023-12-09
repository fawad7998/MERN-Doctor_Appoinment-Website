import React from 'react'
import heroImg01 from "../assets/images/hero-img01.png"
import heroImg02 from "../assets/images/hero-img02.png"
import heroImg03 from "../assets/images/hero-img03.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import featureImg from "../assets/images/feature-img.png"
import videoIcon from "../assets/images/video-icon.png"
import avatarIcon from "../assets/images/avatar-icon.png"
import faqImg from "../assets/images/faq-img.png"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import About from '../components/About/About'
import ServiceList from '../components/Service/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'
import Footer from '../components/Footer/Footer'
function Home() {
    return (
        <>

            {/* {hero section} */}
            <section className='hero__section pt-[60px] 2xl:h-[800px]'>
                <div className='container'>
                    <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                        {/* {hero content} */}
                        <div>
                            <div className='lg:w-[570px]'>
                                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                                    We help patient live a healthy, longer life.
                                </h1>
                                <p className='text__para'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum expedita non modi! Eveniet amet dignissimos vero illum nisi quos! Adipisci perferendis velit ipsam, asperiores nemo repudiandae fugiat omnis itaque neque, laboriosam id accusamus explicabo.
                                </p>
                                <button className='btn'>Request an Appoinment</button>

                            </div>
                            {/* hero counter */}
                            <div className='text-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:item-center gap-5'>
                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]'>
                                        30+
                                    </h2>
                                    <span className='w-[120px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'> Years of Experience</p>
                                </div>
                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]'>
                                        15+
                                    </h2>
                                    <span className='w-[120px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'> Clinic Location</p>
                                </div>
                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]'>
                                        100%
                                    </h2>
                                    <span className='w-[120px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'>Patient Satisfaction</p>
                                </div>
                            </div>
                        </div>
                        {/* hero counter */}
                        <div className=' flex gap-[30px] justify-end'>
                            <div>
                                <img src={heroImg01} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <img src={heroImg02} alt="" className='w-full mb-[30px]' />
                                <img src={heroImg03} alt="" className='w-full mb-[30px]' />


                            </div>
                        </div>


                    </div>
                </div>

            </section>
            {/* hero section end */}
            <section>
                <div className='container'>
                    <div className='lg:w-[470px] mx-auto'>
                        <h2 className='heading text-center'>
                            Providing the best medical services
                        </h2>
                        <p className='text__para text-center'>
                            World-class care for everyone. Our health System offers unmatched,
                            expert health care.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                        <div className='py-[30px] px-5'>
                            <div className='flex items-center justify-center'>
                                <img src={icon01} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center '>
                                    Find a Doctor
                                </h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                    World-class care for everyone. Our health System offers
                                    unmatched, expert health care. Form the lab to the clinic.
                                </p>
                                <Link to="/doctors" className='w-[44px] h-[44px] items-center rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex item-center justify-center group hover:bg-primaryColor hover:border-none'>
                                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                </Link>
                            </div>

                        </div>
                        <div className='py-[30px] px-5'>
                            <div className='flex items-center justify-center'>
                                <img src={icon02} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center '>
                                    Find a Location
                                </h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                    World-class care for everyone. Our health System offers
                                    unmatched, expert health care. Form the lab to the clinic.
                                </p>
                                <Link to="/doctors" className='w-[44px] h-[44px] items-center rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex item-center justify-center group hover:bg-primaryColor hover:border-none'>
                                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                </Link>
                            </div>

                        </div>
                        <div className='py-[30px] px-5'>
                            <div className='flex items-center justify-center'>
                                <img src={icon03} alt="" />
                            </div>
                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center '>
                                    Book Appoinment
                                </h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                    World-class care for everyone. Our health System offers
                                    unmatched, expert health care. Form the lab to the clinic.
                                </p>
                                <Link to="/doctors" className='w-[44px] h-[44px] items-center rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex item-center justify-center group hover:bg-primaryColor hover:border-none'>
                                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>




            {/* About Section Start */}
            <About />
            {/* About Section End  */}



            {/* services section  start*/}
            <section className='container'>
                <div className='xl:w-[470px] mx-auto'>
                    <h2 className='heading text-center'> Our medical services</h2>
                    <p className='text__para text-center'>
                        World-class care for everyone. Our health System offers unmatched,
                        expert health care.
                    </p>
                </div>
                <ServiceList />
            </section>
            {/* service section end */}




            {/* Feature section */}
            <section>
                <div className='container'>
                    <div className='flex item-center justify-between flex-col lg:flex-row'>
                        <div className='xl:w-[670px]'>
                            <h2 className='heading'>
                                Get virtual treatment <br /> anytime
                            </h2>
                            <ul className='pl-4'>
                                <li className='text__para'>
                                    1. Schedule the appoinment directly.

                                </li>
                                <li className='text__para'>
                                    2. Search for your physician here, and contact their office.

                                </li>

                            </ul>
                            <Link to='/'>
                                <button className='btn'>
                                    Learn More
                                </button>
                            </Link>
                        </div>
                        {/* feature img */}
                        <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                            <img src={featureImg} className='w-3/4' alt="" />
                            <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex item-center gap-[6px] lg:gap-3'>

                                        <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                                            Tue, 24
                                        </p>
                                        <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]'>
                                            10:00
                                        </p>
                                    </div>
                                    <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                                        <img src={videoIcon} alt="" />
                                    </span>
                                </div>
                                <div className='w-[95px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full' >
                                    Consultation
                                </div>
                                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                                    <img src={avatarIcon} alt="" />
                                    <h4 className='text-[10px] leading-3 lg-[16px] lg:leading-[22px] font-[700] text-headingColor'>
                                        Wayne Collins
                                    </h4>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
            {/* Feature Section End */}

            {/* our Great doctors */}
            <section className='container'>
                <div className='xl:w-[470px] mx-auto'>
                    <h2 className='heading text-center '>
                        Our medical services
                    </h2>
                    <p className='text__para text-center'>
                        World-class care for everyone. Our health System offers unmatched,
                        expert health care.
                    </p>
                </div>
                <DoctorList />

            </section>
            {/* our Great doctors End */}

            {/* faq Section */}
            <section className='container'>
                <div className='flex justify-between gap-[50px] lg:gap-0'>
                    <div className='w-1/2 hidden md:block'>
                        <img src={faqImg} alt="" />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h2 className='heading '>
                            Most questions by our beloved patients
                        </h2>
                        <FaqList />
                    </div>

                </div>

            </section>
            {/* faq Section End */}




            {/* testimonial */}
            <section className='container'>
                <div className='xl:w-[470px] mx-auto'>
                    <h2 className='heading text-center '>
                        What our patient say
                    </h2>
                    <p className='text__para text-center'>
                        World-class care for everyone. Our health System offers unmatched,
                        expert health care.
                    </p>
                </div>
                <Testimonial />

            </section>

            {/* testimonial end */}
        </>
    )
}

export default Home
