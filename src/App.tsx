import { ReviewsList } from './components/ReviewsList';
import { useEffect } from 'react';
import { getReviewsThunk } from './slices/reviewsSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectReviewsFilters } from './slices/reviewsFiltersSlice';
import { Filters } from './components/Filters';
import { PageSelector } from './components/PageSelector';
import styles from './App.module.css';
import { Header } from './components/Header';
import { ReviewsNumber } from './components/ReviewsNumber';

function App() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectReviewsFilters);

  useEffect(() => {
    dispatch(getReviewsThunk(filters))
  }, [filters])

  return (
    <>
      <Header className={styles.header} />
      <main className={styles.main}>
        <article className={styles.mainHeader}>
          <ReviewsNumber />
          <Filters />
        </article>
        <ReviewsList />
      </main>
      <footer className={styles.footer}>
        <PageSelector />
      </footer>
    </>
  );
}

export default App;
