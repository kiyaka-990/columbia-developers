export const dynamic = 'force-dynamic';
import { Suspense } from 'react';
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import About from "~/sections/Home-1/About";
import Process from "~/sections/Home-1/Process";
import Benefit from "~/sections/Home-5/Benefit";
import Blog from "~/sections/Home-5/Blog";
import CTA from "~/sections/Home-5/CTA";
import Client from "~/sections/Home-5/Client";
import Contact from "~/sections/Home-5/Contact";
import Hero from "~/sections/Home-5/Hero";
import Portfolio from "~/sections/Home-5/Portfolio";
import Testimonial from "~/sections/Home-5/Testimonial";
import WhyChoose from "~/sections/Home-5/WhyChoose";
import CounterTwo from "~/sections/Common/CounterTwo";
import Scroll from "~/sections/Common/Scroll";
import FooterFive from "~/sections/Common/Footer/FooterFive";


export default function HomeFive() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderOne />
            <Hero />
            <About />
            <WhyChoose />
            <Benefit />
            <Process />
            <Contact />
            <Portfolio />
            <CounterTwo />
            <Client />
            <Testimonial />
            <Blog />
            <CTA />
            <FooterFive />
            <Scroll />
        </div>
    );
}
