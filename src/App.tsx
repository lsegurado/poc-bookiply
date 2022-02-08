import './App.css';
import { ReviewsList } from './components/ReviewsList';
import { useEffect } from 'react';
import { getReviewsThunk } from './slices/reviewsSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectReviewsFilters } from './slices/reviewsFiltersSlice';

function App() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectReviewsFilters);

  useEffect(() => {
    dispatch(getReviewsThunk(filters))
  }, [filters])

  return (
    <>
      <header className="App-header">
        ID: 091021
        <h1>La Casa de las Flores</h1>
      </header>
      <main>
        <ReviewsList />
      </main>
    </>
  );
}

export default App;
