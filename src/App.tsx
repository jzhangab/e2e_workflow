import { FilterProvider } from './context/FilterContext';
import Hero from './components/Hero';
import Legend from './components/Legend';
import SearchBar from './components/SearchBar';
import FilterControls from './components/FilterControls';
import Stats from './components/Stats';
import Timeline from './components/Timeline';

function App() {
  return (
    <FilterProvider>
      <Hero />
      <Legend />
      <SearchBar />
      <FilterControls />
      <Stats />
      <Timeline />
    </FilterProvider>
  );
}

export default App;
