import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BlogBanner from "../Components/BlogBanner";
import Subscribe from "../Components/Subscribe";
import NewsModule from "../Components/NewsModule";

function News() {

    return (
        <div>
            <Header />
            <BlogBanner />                
            <NewsModule />                
            <Subscribe />
            <Footer />
        </div>
    );
}

export default News;
