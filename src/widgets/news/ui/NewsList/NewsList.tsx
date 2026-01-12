import { NewsCard, type INews } from '@/entities/news';
import withSkeleton from '@/shared/hocs/withSkeleton';
import styles from './styles.module.css';
import type { ReactNode } from 'react';

interface Props {
    news?: INews[];
    type?: 'banner' | 'item';
    direction?: 'row' | 'column'
    viewNewsSlot?: (news: INews) => ReactNode
}


const NewsList = ({ news, type = "item", viewNewsSlot }: Props) => {
    return (
        <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
            {news?.map(item => {
                return <NewsCard viewNewsSlot={viewNewsSlot} type={type} key={item.id} item={item} />
            })}
        </ul>
    )
}
const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10)
export default NewsListWithSkeleton