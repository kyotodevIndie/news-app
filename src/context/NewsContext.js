import { createContext, useState, useEffect } from 'react'

const NewsContext = createContext();

export default function NewsProvider({ children }) {
    const [latestNews, setLatestNews] = useState({})
    const [categories, setCategories] = useState({})
    const [languages, setLanguages] = useState({})
    const [regions, setRegions] = useState({}) 
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

    function showModal() {
        setIsLoginModalVisible(true);
      };


    useEffect( () => {
        async function getLatestNews() {
            const response = await 
            fetch("https://currents-news.p.rapidapi.com/latest-news", {
                "method": "GET",
                "headers": {
                    "authorization": "iIIR6WM_j49J7Q5T-4bpS5_FbOFaqom-zS0dPqMJhzD08CVz",
                    "x-rapidapi-key": "f5e0ea2d1emsh5db54cb9658ec00p169f1djsn7dff9f1d8427",
                    "x-rapidapi-host": "currents-news.p.rapidapi.com"
                }
            })
            const apiData = await response.json()
            setLatestNews(apiData)
        }
        getLatestNews();
        }, [])

        useEffect( () => {
            async function getCategories() {
                const response = await 
                fetch("https://api.currentsapi.services/v1/available/categories", {
                    "method": "GET"
                })
                const apiData = await response.json()
                const categoriesData = Object.values(apiData)
                setCategories(categoriesData)
            }
            getCategories();
            }, [])
        
        useEffect( () => {
            async function getLanguages() {
                const response = await 
                fetch("https://api.currentsapi.services/v1/available/languages", {
                    "method": "GET"
                })
                const apiData = await response.json()
                setLanguages(apiData)
                
            }
            getLanguages();
            }, [])

            useEffect( () => {
                async function getRegions() {
                    const response = await 
                    fetch("https://api.currentsapi.services/v1/available/regions", {
                        "method": "GET",
                    })
                    const apiData = await response.json()
                    setRegions(apiData)
                }
                getRegions();
                }, [])



    return(
        <NewsContext.Provider 
        value={{ 
             latestNews,
             categories,
             languages,
             regions,
             isLoginModalVisible,
             setIsLoginModalVisible,
             showModal
             }}
        >
            { children }
        </NewsContext.Provider>
    )
}