import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SectionTitle1 from "../Components/SectionTitle1";
import ValuesGrid from "../Components/ValuesGird";
import Banner2 from "../Components/Banner2";
import Team from "../Components/Team";
import HeadersOnLight from "../Components/HeadersOnLight";
import Subscribe from "../Components/Subscribe";
import Investment from "../Components/Investment";
import LookBack from "../Components/LookBack";

function AboutUS() {

    return (
        <div>
            <Header />
            <Banner2 />
            <SectionTitle1 />
            <ValuesGrid />
            <HeadersOnLight />
            <Team />
            <Investment />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default AboutUS;
