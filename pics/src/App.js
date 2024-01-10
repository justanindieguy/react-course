import SearchBar from './components/SearchBar';
import searchImages from './api';

function App() {
  const handleSubmit = async (term) => {
    const images = await searchImages(term);
    console.log(images);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
