import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDb = {
  Breakfast: [
    {
      name:
        "Upma: It is one of the most common South Indian breakfast recipes, which is now popular all over India. rava upma is a quick preparation using common ingredients available in the Indian kitchen, and so it can be made without much ado.",
      rating: "4.5/5"
    },
    {
      name:
        "Idli-sambar: Idli sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as Soft idli are served with sambar, a vegetable lentil stew.",
      rating: "5/5"
    },
    {
      name:
        "Vada-Pav: Vada pav, is a vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper.",
      rating: "3.5/5"
    }
  ],

  Lunch: [
    {
      name:
        "Kadhai Paneer with Roti-Kulcha: A quintessential paneer specialty that can be always found on a restaurant menu and dinner parties! A sumptuous paneer dish that tops a vegetarian's list, this paneer recipe can be made dry, semi dry or in a gravy version. ",
      rating: "5/5"
    },
    {
      name:
        "Veg-Pulav: Veg Pulav is a spicy rice dish prepared by cooking rice with various vegetables and spices. In this recipe, assortment of spices, veggies and rice are first sautéed in oil and ghee and then cooked in pressure cooker as you would cook plain rice.",
      rating: "4.5/5"
    },
    {
      name:
        "Pav-Bhaji: Pav bhaji is a fast food dish from India consisting of a thick vegetable curry served with a soft bread roll. Its origins are in the state of Maharashtra.",
      rating: "5/5"
    }
  ],
  Dinner: [
    {
      name:
        "Dal-Khichidi: Light and tasty mix toor-dal & rice khichidi mixed with tomatoes, green peas and other veggies. ",
      rating: "4.5/5"
    },
    {
      name:
        "Ghawane: Ghavane with Dahi is very delicious. It is basically a rice pancake somewhat like neer dosa. But it tastes totally different from neer dosa.",
      rating: "4/5"
    },
    {
      name:
        "Mix Fruit Salad: This Dish is very healthy and easy to digest, You can take fruits which are available in market such as apples, banana, pineapple, kivi etc.",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Dinner");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🍕 Food Recommendation App </h1>
      <p style={{ fontSize: "medium", fontWeight: "bold" }}>
        {" "}
        Checkout my favorite foods 🥗{" "}
      </p>

      <div>
        {Object.keys(foodDb).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#A7F3D0",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid green",
              margin: "1rem 0.3rem",
              fontWeight: "Bold"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDb[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid #D1D5DB",
                width: "80%",
                margin: "1.2rem",
                borderRadius: "1.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller", paddingTop: "20px" }}>
                {" "}
                {food.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
