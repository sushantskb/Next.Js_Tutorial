import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
const Movie = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "928c7d5572msh247d9e9568826d2p1f42cbjsndb35fd5c32ff",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  // console.log(data);
  const main_data = data.titles;

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series and Movies</h1>
        {main_data.map((item) => {
          return <MovieCard key={item.id} item = {item}/>;
        })}
      </div>
    </section>
  );
};

export default Movie;
