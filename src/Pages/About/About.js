import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/banner/1.jpg';
import img2 from '../../assets/banner/2.jpg';
import img3 from '../../assets/banner/3.jpg';
import img4 from '../../assets/banner/4.jpg';
import img5 from '../../assets/banner/5.jpg';
import img6 from '../../assets/banner/6.jpg';
import person from '../../assets/images/doctor.png';
import './About.css';

const About = () => {
    return (
        <div className='p-3'>
            <section className='my-10'>
            {/* <Helmet>
                <title>Home</title>
            </Helmet> */}
                <div>
                    <p className="text-2xl text-center font-bold text-rose-600">About Me</p>
                </div>
                <div className="hero my-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className=' w-full'>
                            <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl person" />
                        </div>
                        <div className='w-full'>
                            <h1 className="my-5 text-5xl font-bold">About My Self </h1>
                            <p className="py-6 text-xl text-gray-500">Assalamu-alaykum I'm Sabbir Hossain CEO & Founder of 𝒮𝒶𝒷𝒷𝒾𝓇..𝕀𝕋 ⏧. I am currently studying for a Diploma in Engineering of Computer Science. My campus name is Habiganj polytechnic Institute. I am a programmer, web developer, app developer & Freelancer. My birth place is located in Rangpur District Badarganj Thana Ramnathpur Union.I love Football & Coding. I like to learn and teach. </p>
                            <Link className='btn btn-secondary' to='/'><button className="text-white text-xl inline-flex justify-center items-center">See More </button></Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full carousel-img relative">
                <img src={img1} alt="" className="w-full rounded-xl" />
            </div> 
            <div id="item2" className="carousel-item w-full carousel-img relative">
                <img src={img2} alt="" className="w-full rounded-xl" />
            </div> 
            <div id="item3" className="carousel-item w-full carousel-img relative">
                <img src={img3} alt="" className="w-full rounded-xl" />
            </div> 
            <div id="item4" className="carousel-item w-full carousel-img relative">
                <img src={img4} alt="" className="w-full rounded-xl" />
            </div>
            <div id="item5" className="carousel-item w-full carousel-img relative">
                <img src={img5} alt="" className="w-full rounded-xl" />
            </div>
            <div id="item6" className="carousel-item w-full carousel-img relative">
                <img src={img6} alt="" className="w-full rounded-xl" />
            </div>
            
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
            </div>
        </div>
    );
};

export default About;