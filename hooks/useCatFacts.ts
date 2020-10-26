import { useState, useEffect } from 'react';
import axios from 'axios';

interface Fact {
  text: string;
  _id: string;
}

interface CatFactsResult {
  facts: Array<Fact>;
  loading: boolean;
  error: string;
  loadMore: () => void;
}

export const useCatFacts = (): CatFactsResult => {
  const [facts, setFacts] = useState<Array<Fact>>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get('https://cat-fact.herokuapp.com/facts/random', {
      params: {
        animal_type: 'cat',
        amount: 3,
      }
    })
    .then((response) => setFacts(prevFacts => [...prevFacts, ...response.data]))
    .catch((e) => setError(e.message))
    .finally(() => setLoading(false));
  }, [page]);

  return {
    facts,
    loading,
    error,
    loadMore: () => setPage(page => page + 1),
  }
}