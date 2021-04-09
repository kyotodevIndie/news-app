import React from 'react'

import NewsCard from "../../components/NewsCard/NewsCard";
import Navigation from "../../components/Navigation/Navigation";

export default function Index() {
    return (
        <>
            <Navigation textButton="Log in" />
            <NewsCard />
        </>
    )
}
