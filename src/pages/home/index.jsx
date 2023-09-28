import "./home.css";
import Navbar from "../../components/navbar-home";
import Carousel from "../../components/slider";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import { getBookService } from "../../services/books";

const Home = () => {
  const [books, setBooks] = useState([]);
  // const [searchBooks, setSearchBooks] = useState("");

  const getBook = async () =>{
    try {
      const data = await getBookService();

      setBooks(data.data.data);

      return data.data.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getBook();
}, []);
  
  return (
    <>
      <Navbar />

      <Carousel />

      <div class="text1">
        <p class="text-list">List Book</p>
      </div>

      <section className="books">
        {books ? (
          books.map((p) => {
            return (
              <Card 
                key = {p.id}
                imgUrl = {p.imgUrl}
                title = {p.title}
                content = {p.content}
                id = {p.id}
              />
            );
          })
        ) : (
            <p>No Data!</p>
        )}
      </section>
    </>
  );
};

export default Home;
