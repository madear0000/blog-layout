import Banner from "../components/Banner/Banner";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";

export default function Home() {
    return (
        <>
            <Banner useBanner={true}/>
            <FeaturedPosts />
        </>
    )
}