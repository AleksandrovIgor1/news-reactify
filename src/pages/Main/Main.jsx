import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import Pagination from '../../components/Pagination/Pagination'
function Main() {
    const [news, setNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = 10
    const pageSize = 10
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews(currentPage, pageSize)
                setNews(response.news)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews(currentPage)
    }, [currentPage])
    return (
    <main className={styles.main}>
        {news.length > 0 ? <NewsBanner item={news[0]}/> : null}
        <Pagination/>
        <NewsList news={news} />
    </main>
    )
}

export default Main