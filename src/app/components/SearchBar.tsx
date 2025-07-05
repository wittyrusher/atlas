'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  
  // Debounce search to avoid too many re-renders
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white border hover:bg-yellow-300 border-gray-300 rounded-full px-4 py-2 shadow-sm transition-all duration-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-400 w-full max-w-md"
    >
      <Search className="w-5 h-5 text-gray-500 mr-2 hover:scale-110 transition-transform duration-200" />
      <input
        type="text"
        placeholder="Search destinations, wildlife, or experiences..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none w-full text-sm text-gray-700 bg-transparent transition-all duration-300"
      />
    </form>
  );
};

export default SearchBar;