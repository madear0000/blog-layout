import Banner from "../components/Banner/Banner"
import AllPostsBlogPage from "../components/AllPosts/AllPostsBlogPage"
import JoinTeam from "../components/JoinTeam/JoinTeam"
import React from 'react';

export default function Blog() {
    return (
        <>
                <Banner useBanner={false} />
                <AllPostsBlogPage />
                <JoinTeam />
        </>
    )
}