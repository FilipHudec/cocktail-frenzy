import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button.tsx";
import Input from "./components/Input.tsx";

function App() {
  const [cocktail, setCocktail] = useState<string>("margarita");
  const [cocktailInfo, setCocktailInfo] = useState<any>(null);

  async function handleCocktailSearch() {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
      );
      const data = await response.json();
      console.log(data);
      setCocktailInfo(data.drinks[0]);
    } catch (error) {
      console.error("Error fetching cocktail data:", error);
    }
  }

  useEffect(() => {
    console.log(cocktail);
  }, [cocktail]);

  return (
    <div className="container">
      <h1 className="main__heading">Cocktail Frenzy🍸🍹</h1>
      <Input value={cocktail} onChange={(e) => setCocktail(e.target.value)} />
      <Button onClick={handleCocktailSearch} />
      {cocktailInfo && (
        <div className="cocktail__container">
          <h2 className="cocktail__name">{cocktailInfo.strDrink}</h2>
          <p className="cocktail__instructions">
            {cocktailInfo.strInstructions}
          </p>
          <div className="cocktail__details">
          <img
            className="cocktail__img"
            src={cocktailInfo.strDrinkThumb}
            alt={cocktailInfo.strDrink}
          />
           <div className="details__container">
           <p className="cocktail__glass">
            Serve in: <b>{cocktailInfo.strGlass}</b>
          </p>
          <p className="cocktail__category">
            Category: <b>{cocktailInfo.strCategory}</b>
          </p>
          <p className="cocktail__alcoholic">
            Alcoholic: <b>{cocktailInfo.strAlcoholic}</b>
          </p>
          <p className="cocktail__ingredients">
            Ingredients:{" "}
            <b>
              {cocktailInfo.strIngredient1}, {cocktailInfo.strIngredient2},{" "}
              {cocktailInfo.strIngredient3}
            </b>
          </p>
          <p className="cocktail__measurements">
            Measurements:{" "}
            <b>
              {cocktailInfo.strMeasure1}, {cocktailInfo.strMeasure2},{" "}
              {cocktailInfo.strMeasure3}
            </b>
          </p>
           </div>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default App;
