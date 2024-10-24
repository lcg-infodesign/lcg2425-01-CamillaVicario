function setup() {
  createCanvas(windowWidth,windowHeight);
  //inserisco noLoop per non far rigernerare il ciclo in loop  
  noLoop();
}

function draw() {
  background("white");
  stroke("black");
  strokeWeight(1.);
  //scrivo tutte le dimensioni basandomi sulle dimensioni dello schermo 
  //di modo da rendere l'opera responsive 
  // dimensione_iniziale è la variabile che definisce la dimensione del quadrato di partenza 
  let dimensione_iniziale= windowHeight*0.02;
  // incremento_dimensione è la variabile che determina di quanto aumentare la dimensione del quadrato iniziale per iterazione 
let incremento_dimensione= windowHeight*0.02;
// numero_quadrati è la variabile che determina il numero totale di quadrati che voglio 
let numero_quadrati= 28; 
  noFill(); 
  
 for (let i=0; i<numero_quadrati; i++) {
  //(i+1) faccio partire l'iterazione dal secondo ciclo così il primo quadrato mantiene sempre 
  //il suo centro al centron dello schermo 
  let dimensione_attuale= dimensione_iniziale + ((i+1)*incremento_dimensione);
   //Mettendo xPos a metà della larghezza della finestra il vertice superiore si trova al centro della finestra 
  //sottraendogli la metà della larghezza del quadrato (quindi dimensione_attuale/2) il quadrato avrà il suo centro nel centro della finestra 
  //successivamente aggiungo random per variare tra (-30, 30) la posizione 
  let xPos= (windowWidth/2) - (dimensione_attuale/2)  + random (-30,30);
  let yPos= (windowHeight/2) - (dimensione_attuale/2)  + random (-30,30);
//questi sono i quadrati dimensione_attuale, quindi quelli che variano di posizione e aumentano di dimensione 
  rect(xPos,yPos,dimensione_attuale,dimensione_attuale); 
  //questo è il quadrato dimensione_ iniziale, che rimane sempre al centro
  rect((windowWidth/2) - (dimensione_iniziale/2),(windowHeight/2) - (dimensione_iniziale/2),dimensione_iniziale,dimensione_iniziale);
 }
 
 }
