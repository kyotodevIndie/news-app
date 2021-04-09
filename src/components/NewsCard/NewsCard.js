import React from 'react'

import './NewsCard.css'

import { useGetLatestNews } from '../../context/NewsContext'


import { Column, Section } from 'rbx'

export default function NewsCard() {

    const { latestNews } = useGetLatestNews();


    return (
        <>
        <Section>
            <Column.Group>
                <Column size={3} offset={1}>
                    <div className="post">
                        {/* <a className="post-img" href="#"><img src={latestNews.news[0].image} alt="" /></a> */}
                        <div className="post-body">
                            <div className="post-meta">
                                {/* <a className="post-category cat-1" href="#">{latestNews.news[0].category[0]}</a> */}
                                <span className="post-date">March 27, 2018</span>
                            </div>
                            <h2 className="post-title"><a href="#">{console.log(latestNews)} </a></h2>
                            {/* <p>{latestNews.news[0].author}</p> */}
                        </div>
                    </div>
                </Column>
            </Column.Group>
        </Section>
        </>
    )
}
