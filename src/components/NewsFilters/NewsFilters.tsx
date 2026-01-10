import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import styles from "./styles.module.css";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import type { CategoriesApiResponse, IFilters } from "../../interfaces";
import { useTheme } from "../../context/ThemeContext";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | null | number) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);
  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};
export default NewsFilters;
