import './Footer.css';
import logo from '../images/KDC_logo.png';
import facebook from '../images/Facebook.png';
import instagram from '../images/Instagram.png';
import linkedin from '../images/Linkedin.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Footer() {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const [refOne, inViewOne] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refTwo, inViewTwo] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refThree, inViewThree] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className='footer'>
            <footer>
                <motion.div
                    ref={refOne}
                    initial="hidden"
                    animate={inViewOne ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    className='col-one'
                >
                    <img src={logo} alt='logo'/>
                    <p>KDgitialCurry is a Leading Mobile and Web App 
                    Development Company in Mumbai with over 10+ Years of Experience. 
                    We create human-centric, scalable solutions delivering full-stack services 
                    across various domains.</p>

                    <div className='socio-icon'>
                        <img src={facebook} alt='facebook'/>
                        <img src={instagram} alt='instagram' />
                        <img src={linkedin} alt='linkedin'/>
                    </div>
                </motion.div>

                <motion.div
                    ref={refTwo}
                    initial="hidden"
                    animate={inViewTwo ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    className='col-two'
                >
                    <p>Services</p>
                    <ul>
                        <li>Mobile App Development</li>
                        <li>Web & CMS Development</li>
                        <li>ECommerce Development</li>
                        <li>Search Engine Optimization</li>
                        <li>Hire Dedicated Resource</li>
                        <li>UI / UX Design</li>
                        <li>Custom Software Development</li>
                    </ul>
                </motion.div>

                <motion.div
                    ref={refThree}
                    initial="hidden"
                    animate={inViewThree ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    className='col-three'
                >
                    <p>Explore Careers</p>
                    <ul>
                        <li>Sr. PHP Developer</li>
                        <li>Sr. MERN Developer</li>
                        <li>IOS Developer</li>
                        <li>UI / UX Designer</li>
                        <li>Flutter Developer</li>
                        <li>Project Manager</li>
                        <li>Android Developer</li>
                    </ul>
                </motion.div>
            </footer>
            <p className='copyright'>Copyright @ 2024 KDIGITALCURRY. All Rights Reserved</p>
        </div>
    );
}

export default Footer;