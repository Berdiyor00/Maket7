// import axios from 'axios';

// const fetchData = async (bookId) => {
//   const options = {
//     method: 'GET',
//     url: `https://project-gutenberg-api.p.rapidapi.com/books/${bookId}`,
//     headers: {
//       'Content-Type': 'application/json',
//       'X-RapidAPI-Key': '9f573245e8msh98d8b92209920b4p1e9989jsn8c93d213ff4f',
//       'X-RapidAPI-Host': 'project-gutenberg-api.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     return response.data; // You may want to return the data for further use
//   } catch (error) {
//     if (error.response && error.response.status === 429) {
//       // If rate limited, wait for some time (e.g., 5 seconds) and retry
//       await new Promise(resolve => setTimeout(resolve, 5000));
//       return fetchData(bookId);
//     } else {
//       console.error(error);
//       throw error;
//     }
//   }
// };

// export default fetchData;
