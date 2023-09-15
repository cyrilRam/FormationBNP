import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";

const blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [author, setAuthor] = useState("");

  const getData = () => {
    axios.get("http://localhost:3004/articles").then((res) => {
      setBlogData(res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 140) {
      setError(true);
    } else {
      axios.post("http://localhost:3004/articles", {
        author: author,
        content: content,
        date: Date.now(),
      });

      setError(false);
      setAuthor("");
      setContent("");
      getData();
    }
  };

  useEffect(() => getData(), [handleSubmit]);

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>BLOG</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <textarea
          // mettre du style en react
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {error && <p>Veuillez sortir un minimum de 140 caracteres</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default blog;
