import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SectionTitle1 from "../Components/SectionTitle1";
import TakeAction from "../Components/TakeAction";
import BannerModel from "../Components/BannerModel";
import WhatWeDo from "../Components/WhatWeDo";
import Stories from "../Components/Stories";
import Subscribe from "../Components/Subscribe";
import NewsPreview from "../Components/NewsPreview";
import DoYouKnow from "../Components/DoYouKnow";

function Home() {

    return (
        <div>
            <Header />
            <BannerModel />
            <TakeAction />
            <SectionTitle1 />
            <WhatWeDo />
            <DoYouKnow />
            <Stories />
            <NewsPreview />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default Home;
