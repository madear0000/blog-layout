import AboutUsSections from "../components/AboutUsSections/AboutUsSections";
import '../style/pages.scss';
import Footer from '../components/Footer/Footer';

export default function AboutUs() {
    return (
        <>
            <div className='aboutUs'>
                <AboutUsSections />
            </div>
            <Footer />
        </>
    )
}