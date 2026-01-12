import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import styles from './styles.module.css';
import BannersListWithSkeleton from '@/widgets/news/ui/BannersList/BannersList';
const LatestNews = () => {
    const { data, isLoading } = useGetLatestNewsQuery(null)
    return (
        <section className={styles.section}>
            <BannersListWithSkeleton isLoading={isLoading} banners={data && data.news} />
        </section>
    )
}
export default LatestNews