import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { TOTAL_PAGES } from '@/shared/constants/constants';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import NewsFilters from '../NewsFilters/NewsFilters';
import styles from './styles.module.css';
import { setFilters } from '@/entities/news/model/newsSlice';
import { NewsList } from '@/widgets/news/ui';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { Pagination } from '@/features/pagination';


const NewsByFilters = () => {

    const dispatch = useAppDispatch()
    const filters = useAppSelector(state => state.news.filters)
    const debouncedKeywords = useDebounce(filters.keywords, 1500)

    const { data, isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords
    })


    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            dispatch(setFilters({ key: 'page_number', value: filters.page_number + 1 }))
        }
    }

    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            dispatch(setFilters({ key: 'page_number', value: filters.page_number - 1 }))
        }
    }

    const handlePageClick = (pageNumber: number) => {
        dispatch(setFilters({ key: 'page_number', value: pageNumber }))
    }

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} />
            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
                top
                bottom
            >
                <NewsList isLoading={isLoading} news={data?.news} />
            </Pagination>
        </section>
    )
}
export default NewsByFilters