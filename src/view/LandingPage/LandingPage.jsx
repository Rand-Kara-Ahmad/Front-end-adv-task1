import NavBar from "../../components/NavBar/NavBar";
import logo from './../../assets/images/logo/logo1.png'
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";
import socialYoutube from "./../../assets/images/social/youtube.png"
import socialFacebook from "./../../assets/images/social/facebook.png"
import socialLinkedin from "./../../assets/images/social/linkedin.png"
import socialTwitter from "./../../assets/images/social/twitter.png"
import socialSkype from "./../../assets/images/social/skype.png"
import socialPinterest from "./../../assets/images/social/pinterest.png"

const LandingPage = () => {
    return (
        <div>
            <NavBar logo={logo} BrandName='TagTech'/>
            <Hero
                firstTitle="The modern landing page for"
                secTitle="Our Company"
                desc="The easiest way to build your Landing page in seconds"
                button="Downlaod your free version"/>
            <Services
                title="Our Services"
                desc="At our company, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
Branding, Digital Marketing, Web/App Development, Ui/Ux
Content creation, Graphic design, Social media and More.... "
            />
            <GetStarted
                p="Lorem ipsum dolor sit amet, consectetur adipisicing elit.  "
                span="Start your free trail"
                button="Get Started"
            />
            <Footer
                logo={logo}
                BrandName=' TagTech'
                items={['Home', 'About', 'Docs', 'GitHub']}
                socialIcon={[socialFacebook, socialYoutube, socialTwitter, socialLinkedin,socialPinterest,socialSkype]}
            />
        </div>
    );
}

export default LandingPage;