import { BrowserRouter, Route,Routes,} from "react-router-dom"
import Header from "./Components/Header"
import Shop from "./Pages/Shop"
import Blog from "./Pages/Blog"
import DetailsPage from './Pages/BooksDetail';
import Login from "./Pages/Login";
import Result from "./Components/Result"
import Profel from "./Pages/Profel";


function App() {
 

  return (
   <>
        <BrowserRouter>
        
              <Routes>
                    <Route path="/"element={<Header/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/details/:id"element={<DetailsPage/>} />
                    <Route path="/login"element={<Login/>}/>
                    <Route path="/result" element={<Result/>}/>
                    <Route path="/profel" element={<Profel/>}/>
              </Routes>
        
        </BrowserRouter>
        
   </>
  )
}

export default App
