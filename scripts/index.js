
//comunicacion con el archivo data.json
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data)

    //Etiqueta de Summary
    const headline = document.createElement("h3");
    headline.classList.add("text-lg", "font-bold", "text-dark-gray-blue");
    headline.textContent = "Summary";

    //Id del elemento padre e insertamos headline a mainContainer
    const mainContainer = document.getElementById("main-container");
    mainContainer.appendChild(headline);

    //variable para sacar la media de los puntajes
    let scoreResult = 0;

    //bucle para renderizar 4 veces los elementos de data.json
    for(i = 0;i < data.length; i++){    

      //Etiqueta contenedor para los demas elementos
      const container = document.createElement("div");
      container.classList.add(`${data[i].background}`, "rounded-xl", "flex", "py-5", "px-6", "items-center", "font-bold");

      const img = document.createElement("img");
      img.src = data[i].icon;

      //Etiqueta de titulo de cada resultado
      const title = document.createElement("p");
      title.classList.add(`${data[i].color}`, "ml-4");
      title.textContent = `${data[i].category}`;

      //Etiqueta p contenedora de score y maxScore
      const scoreContainer = document.createElement("p");
      scoreContainer.classList.add("ml-auto", "font-bold");

      //Etiqueta span score
      const score = document.createElement("span");
      score.textContent = `${data[i].score} `;

      //Etiqueta span maxScore
      const maxScore = document.createElement("span");
      maxScore.classList.add("text-light-lavender");
      maxScore.textContent = " / 100";

      //Inserta la etiqueta de score y maxScore a scoreContainer
      scoreContainer.appendChild(score);
      scoreContainer.appendChild(maxScore);

      //Se inserta en orden las etiquetas creadas a container
      container.appendChild(img);
      container.appendChild(title);
      container.appendChild(scoreContainer);
      mainContainer.appendChild(container);

      //suma de los 4 puntajes
      scoreResult += data[i].score;
      console.log(scoreResult)
    } 
    //variable del boton para cambiar su lugar hasta el final de la etiqueta padre
    const btn = document.getElementById("btn");
    mainContainer.appendChild(btn);

    //imprimir la media de los puntajes
    const resultValue = document.getElementById("result-value");
    resultValue.textContent = Math.trunc(scoreResult / `${data.length}`)
})













