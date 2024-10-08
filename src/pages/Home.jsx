import Banner from "../components/Banner/Banner";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import InfoBlog from "../components/InfoBlog/InfoBlog";
import AuthorsOnPage from "../components/AuthorsOnPage/AuthorsOnPage";
import WhyWeStarted from "../components/WhyWeStarted/WhyWeStarted";
import JoinTeam from '../components/JoinTeam/JoinTeam';
import React from 'react';

export default function Home() {
    return (
        <>
                <Banner useBanner={true}/>
                <FeaturedPosts />
                <InfoBlog />
                <WhyWeStarted />
                <AuthorsOnPage />
                <JoinTeam />
        </>
    )
}