import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'
function Main() {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true)
                const response = await getNews()
                setNews(response.news)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews()
    }, [])
    return (
    <main className={styles.main}>
        {news.length > 0 ? <NewsBanner item={news[0]}/> : null}
        <NewsList news={news} />
    </main>
    )
}

export default Main