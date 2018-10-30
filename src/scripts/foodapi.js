  fetch("http://localhost:8088/food")
      .then(foods => foods.json())
      .then(parsedFoods => {
        let foodList = document.querySelector(".foodList")
        parsedFoods.forEach((food) => {
  
          fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
            .then(foodData => foodData.json())
            .then(realData => {
  
            foodList.innerHTML += 
            `<div>
              <h1>${realData.product.product_name}</h1>
              <p>Ingredients ${realData.product.ingredients_text}</p>
              <p>Country of Origin: ${realData.product.countries}</p>
              <p>Calories per serving: ${realData.product.nutriments.energy}</p>
              <p>Fat per serving: ${realData.product.nutriments.fat}</p>
              <p>Sugar per serving: ${realData.product.nutriments.sugars}</p>
            </div>`
            })
          })
        })