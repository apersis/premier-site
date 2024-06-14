var dejaclic=false;

// fonctions liées au clic des images 
function ClicImg1() {
  if (dejaclic==false) { alert ('Bonne réponse');}
  else { alert('Déjà répondu');}
  dejaclic=true;
   
}
function ClicImg2() {
    if (dejaclic==false) { alert ('Mauvaise réponse');}
  else { alert('Déjà répondu');}
  dejaclic=true;
}

// fonction liée à la zone de saisie
function Annee(form1) {
  // recupère la valeur saisie par l'utilisateur
 rep=document.form1.question.value;  
  alert (" voilà ta réponse :" + rep) ;
  // pour empecher de repondre à nouveau 
  Bout2R.style.visibility="hidden";
}
//functon liée à la liste déroulante 
function LaListe(form3) {
// form3.liste contient l'élément choisit
// Index==0 pour la premiere réponse de la liste
// Index==1 pour la deuxième ...
  if (form3.liste.selectedIndex==2) {
    alert ('Bonne réponse');
  }
  else {
    alert ('la réponse est fausse');
  }
  Bout4R.style.visibility="hidden"
}
// fonction liée aux boutons radio
function QuiARaison(form1)  {
  // form1.reponse contient les cases cochées
  // si la premiere case est cochée reponse[1].checked
  if (form1.reponse[1].checked)
    { alert ("Bonne réponse") ; } 
  else 
   { alert ("Mauvaise réponse") ; }
   Bout3R.style.visibility="hidden";
}


// fonction liée au checking box (boutons à cocher)
function DeuxRep(form4) {
  // form4.Reponse1.checked est vraie si elle est cochée et faux sinon
  //form4.Reponse2.checked est vraie si elle est cochée et faux sinon ...
  if ((form4.Reponse1.checked==true)&&(form4.Reponse2.checked==true)) {
    alert ('Bien joué')
  }
  Bout5R.style.visibility="hidden"
}
// bilan du QCM

function Bilan() {

// si le score est de 5 
alert ("Score 5/5 : félicitations Jeune Padawan")
}