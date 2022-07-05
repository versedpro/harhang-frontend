import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Search.module.css';

export default function SearchBar() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query: any) => `/api/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener('click', onClick);
  }, []);

  const onClick = useCallback((event) => {
    // if (searchRef.current && !searchRef.current.contains(event.target)) {
    //   setActive(false);
    //   window.removeEventListener('click', onClick);
    // }
  }, []);

  return (
    <div className={styles.searchBar} ref={searchRef}>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          <img src="/image/search-white.svg" />
        </span>
        <input
          type="text"
          className="py-2 pl-4"
          placeholder="Search"
          autoComplete="off"
          value={query}
          onChange={onChange}
        />
      </div>
      {active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ id, title }) => (
            <li className={styles.result} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
