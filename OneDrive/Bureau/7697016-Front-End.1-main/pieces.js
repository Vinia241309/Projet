// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {   

const article = pieces[i];
 // Récupération de l'élément du DOM qui accueillera les fiches
 const sectionFiches = document.querySelector(".fiches");
 // Création d’une balise dédiée à une pièce automobile
 const pieceElement = document.createElement("article");

const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} €`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;
const descriptionElement =document.createElement("p");
descriptionElement.innerText = article.description?? "Pas de description pour le moment";
const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite ?"En stock" : "Rupture de stock";

sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(stockElement);
sectionFiches.appendChild(descriptionElement);


{

   

    
    
    // On rattache la balise article à la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    
pieceElement.appendChild(descriptionElement);
pieceElement.appendChild(stockElement);
    }}

  const boutonTrier = document.querySelector(".btn-trier");
  boutonTrier.addEventListener("click",function(){
    const piecesOrdonnees = Array.from (pieces);
    piecesOrdonnees.sort(function(a,b){
      return a.prix-b.prix;
    });
    console.log(piecesOrdonnees);
  })
  const boutonFiltrer = document.querySelector(".btn-filtrer");

  boutonFiltrer.addEventListener("click",function()
  {
    const piecesFiltrees = pieces.filter(function(piece){
        return pieces.prix <=35;
    });
    console.log(piecesFiltrees)
  })
  const boutonDecroissant =document.querySelector(".btn-decroissant");
  boutonDecroissant.addEventListener("click", function(){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a,b){
        return b.prix-a.prix;
    });
    console.log(piecesOrdonnees);
   });

  const boutonNodescription = document.querySelector(".btn-nodesc");

  boutonNodescription.addEventListener("click",function(){
    const piecesFiltrees =pieces.filter(function(piece){
    return piece.description
    });
    console.log(piecesFiltrees)
  });

const noms = pieces.map(piece=>piece.nom);
for(let i=pieces.length-1; i>=0; i--){
    if(pieces[i].prix>35){
        noms.splice(i,1);
    }
}

const abordablesElements = document.createElement("ul");

for (let i=0; i<noms.length; i++){
    const nomElement=document.createElement("li");
    nomElement.innerText=noms[i];
    abordablesElements.appendChild(nomElement)
}
document.querySelector(".abordables")
 .appendChild(abordablesElements)

 const nomsDisponibles = pieces.map(piece=>piece.nom);
 const prixDisponibles = pieces.map(piece=>piece.prix);

 for(let i= pieces.length-1; i>=0; i--){
    if(pieces[i].disponibilite===false){
        nomsDisponibles.splice(i,1);
        prixDisponibles.splice(i,1);
    }
 }
 const disponiblesElement =document.createElement("ul");

 for(let i=0; i<noms.length; i++){
    const nomElement = document.createElement("li");
    nomElement.innerText = `${nomsDisponibles[i]}-${prixDisponibles[i]} € `;
    disponiblesElement.appendChild(nomElement);
 }

 document.querySelector(".disponibles").appendChild(disponiblesElement);
function genererPieces(pieces){
    
}
 const inputPrixMax = document.querySelector("#prix-max")
 inputPrixMax.addEventListener("input",function(){
    const piecesFiltrees = pieces.filter(function(piece){
        return piece.prix<= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML="";
    genererPieces(piecesFiltrees);
 }
 )