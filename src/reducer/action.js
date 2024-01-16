// // actions.js
// import axios from 'axios';

// export const fetchData = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyBPObuwqcjiiU0h3s7F5zaLySOZv4xY6Qo');
//       dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       dispatch({ type: 'FETCH_DATA_ERROR', payload: error.message });
//     }
//   };
// };
