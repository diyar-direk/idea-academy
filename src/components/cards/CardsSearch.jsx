import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css";
import { icons } from "../../constants/icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const sortStatus = {
  createdAt: "latest",
  "-createdAt": "oldest",
};

const CardsSearch = ({ total, sort, setSort, setFilters }) => {
  const [search, setSearch] = useState();

  const [debouncedValue] = useDebounce(search, 500);

  useEffect(() => {
    setFilters({
      "content[contains]": debouncedValue?.toLowerCase(),
    });
  }, [debouncedValue, setFilters]);

  const { isOpen, toggleOpen, ref } = useClickOutside();

  const handleSortChange = useCallback(
    (e, value) => {
      setSort(value);
      toggleOpen(e);
    },
    [setSort, toggleOpen],
  );

  return (
    <div className="posts-search">
      <h2 data-count={total} className="total-posts">
        results
      </h2>
      <div className="filters-container">
        <label htmlFor="post-search">
          <input
            type="text"
            id="post-search"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon icon={icons.search} />
        </label>

        <article className="sort" ref={ref}>
          <h3 onClick={toggleOpen}>
            {sortStatus[sort]} <FontAwesomeIcon icon={faChevronDown} />
          </h3>
          {isOpen && (
            <div className="sort-options">
              {Object.entries(sortStatus).map(([k, v]) => (
                <h4
                  key={k}
                  onClick={(e) => handleSortChange(e, k)}
                  className={sort === k ? "active" : ""}
                >
                  {v}
                </h4>
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default CardsSearch;
