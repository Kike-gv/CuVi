import React, { useState, useEffect } from 'react';
import { getAll } from '../services/database';

const useGetAll = (collection) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =  async () => {
    setIsLoading(true);
    const data = await getAll(collection);
    setData(data);
    setIsLoading(false);
  }

  return [data, isLoading, fetchData];
}
 
export default useGetAll;