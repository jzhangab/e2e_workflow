import { useFilter } from '../context/FilterContext';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useFilter();

  return (
    <div className="search-wrap">
      <span className="search-icon">{'\u2315'}</span>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search documents, data, or keywords\u2026"
      />
    </div>
  );
}
