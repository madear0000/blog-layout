import Banner from "../components/Banner/Banner"
import AllPostsBlogPage from "../components/AllPosts/AllPostsBlogPage"
import JoinTeam from "../components/JoinTeam/JoinTeam"
import Footer from "../components/Footer/Footer"
import '../style/pages.scss'

export default function Blog() {
    return (
        <>
            <div className='blog'>
                <Banner useBanner={false} />
                <AllPostsBlogPage />
                <JoinTeam />
            </div>
            <Footer />
        </>
    )
}