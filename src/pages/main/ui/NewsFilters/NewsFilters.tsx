
import type { IFilters } from "@/shared/interfaces";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import { useGetCategoriesQuery } from "@/entities/categories/api/categoriesApi";
import { useTheme } from "@/app/providers/ThemeProvider";

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {

  const { isDark } = useTheme();
  const { data } = useGetCategoriesQuery(null);

  const dispatch = useDispatch()

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark} >
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: 'keywords', value: keywords }))
        }
      />
    </div>
  );
};
export default NewsFilters;
