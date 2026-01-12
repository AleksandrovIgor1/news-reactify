import { useAppSelector } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/categories/api/categoriesApi";
import { NewsFilters } from "@/widgets/news";
import styles from './styles.module.css'
import NewsListWithPagination from "../NewsListWithPagination/NewsByFilters/NewsListWithPagination";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";
const NewsByFilters = () => {

    const { data } = useGetCategoriesQuery(null);

    const filters = useAppSelector(state => state.news.filters);

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords
    })

    const news = useAppSelector(state => state.news.news)

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} categories={data?.categories || []} />
            <NewsListWithPagination isLoading={isLoading} filters={filters} news={news} />
        </section>
    )
}
export default NewsByFilters