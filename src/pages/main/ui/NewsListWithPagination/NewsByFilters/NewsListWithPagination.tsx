import { TOTAL_PAGES } from '@/shared/constants/constants';

import { Pagination } from '@/features/pagination';
import { NewsList } from '@/widgets/news';
import type { IFilters } from '@/shared/interfaces';
import type { INews } from '@/entities/news';
import { usePaginationNews } from '@/pages/main/utils/hooks/usePaginationNews';

interface Props {
    filters: IFilters;
    news: INews[];
    isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
    const { handleNextPage, handlePageClick, handlePreviousPage } = usePaginationNews(filters)
    return (
        <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}
            currentPage={filters.page_number}
            top
            bottom
        >
            <NewsList
                type="item"
                direction='column'
                isLoading={isLoading}
                news={news} />
        </Pagination>
    )
}
export default NewsListWithPagination