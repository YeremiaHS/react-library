import "./home.css";
import Navbar from "../../components/navbar-home";
import Carousel from "../../components/slider";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import { getBooks } from "../../services/books";

const Home = () => {
  const [books, setBooks] = useState([]);

  const getData = async () =>{
    try {
      const data = await getBooks();
      console.log(data, "from axios");
      setBooks(data.data);
      return data.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
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
          result.map((p) => {
            return (
              <Card 
                key = {p.id}
                imgUrl = {p.imgUrl}
                title = {p.title}
                content = {p.content}
              />
            )
          })
        ) : (
            <p>No Data!</p>
        )}
      </section>
    </>
  );
};

export default Home;
