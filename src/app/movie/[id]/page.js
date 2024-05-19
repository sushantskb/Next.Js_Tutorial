import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "928c7d5572msh247d9e9568826d2p1f42cbjsndb35fd5c32ff",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}> Netflix / <span> {main_data.type} </span></h2>
      <div className={styles.card_section}>
        <div>
          <Image src={main_data.backgroundImage.url} alt={main_data.title} width={1000} style={{margin: "auto 180px", borderRadius: "50px"}} height={500} />
        </div>
        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
