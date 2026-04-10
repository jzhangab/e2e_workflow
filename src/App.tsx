import { FilterProvider } from './context/FilterContext';
import { PreviewProvider } from './context/PreviewContext';
import Hero from './components/Hero';
import Legend from './components/Legend';
import SearchBar from './components/SearchBar';
import FilterControls from './components/FilterControls';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import PreviewPanel from './components/PreviewPanel';

function App() {
  return (
    <FilterProvider>
      <PreviewProvider>
        <Hero />
        <Legend />
        <SearchBar />
        <FilterControls />
        <Stats />
        <div className="main-layout">
          <div className="workflow-column">
            <Timeline />
          </div>
          <div className="preview-column">
            <PreviewPanel />
          </div>
        </div>
      </PreviewProvider>
    </FilterProvider>
  );
}

export default App;
