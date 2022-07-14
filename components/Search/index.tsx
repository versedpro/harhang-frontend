import { useCallback, useRef, useState } from 'react';
import styles from './Search.module.css';
import SearchIcon from '../../public//image/search-white.svg';
import Image from 'next/image';
import { SearchResults } from '../../data';
import HashTag from '../../public/image/hashtag.svg';
import Location from '../../public/image/logos.svg';
import Account from '../../public/image/pp.svg';
import Name from '../../public/image/A.svg';
import Address from '../../public/image/0x.svg';

export default function SearchBar() {
  const searchRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const searchEndpoint = (query: any) => `/api/search?q=${query}`;

  const onChange = useCallback((event: any) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      // fetch(searchEndpoint(query))
      //   .then((res) => res.json())
      //   .then((res) => {
      //     setResults(res.results);
      //   });

      setResults(SearchResults);
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener('click', onClick);
  }, []);

  const onClick = useCallback((event: any) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener('click', onClick);
    }
  }, []);

  return (
    <div className={`${styles.searchBar} ${active && results.length && 'relative top-[64px]'}`} ref={searchRef}>
      <div className="relative">
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          <Image src={SearchIcon} width={26} height={26} layout="fixed" alt="search icon" />
        </span>
        <input
          type="text"
          className="py-2 pl-4"
          placeholder="Search"
          autoComplete="off"
          value={query}
          onFocus={onFocus}
          onChange={onChange}
        />
      </div>
      {active && results.length > 0 && (
        <div className="relative w-full mx-10">
          {results.map((result, index) => (
            <div className="flex flex-row items-center my-2 cursor-pointer gap-2" key={index}>
              {result.type === 'hashtag' ? (
                <Image src={HashTag} width={15} height={15} layout="fixed" alt="hashtag" />
              ) : result.type === 'location' ? (
                <Image src={Location} width={15} height={15} layout="fixed" alt="location" />
              ) : result.type === 'account' ? (
                <Image src={Account} width={15} height={15} layout="fixed" alt="account" />
              ) : result.type === 'name' ? (
                <Image src={Name} width={15} height={15} layout="fixed" alt="name" />
              ) : result.type === 'address' ? (
                <Image src={Address} width={19} height={14} layout="fixed" alt="address" />
              ) : null}
              <p className="text-background text-[16px] leading-[16px] font-bold ">{result.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
