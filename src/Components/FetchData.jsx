// UseFetch.jsx
import React, { useEffect, useState } from 'react';
import fetchData from './UseFetch';

const UseFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data.map((book) => (
        <div key={book._id}>
          <img src={book.cover} alt="Book Cover" />
          <h2>{book.title}</h2>
          <p>{book.plot}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default UseFetch;
