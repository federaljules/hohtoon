 let blogi_yla = document.getElementById('sis_yla');
 let teksti = document.getElementById('teksti');
 let otsikko = document.getElementById('otsikko');
 let alaotsikko = document.getElementById('alaotsikko');
 let footer = document.getElementById('footer');
 let pvm = document.getElementById('pvm');
 let blogi_kuva = document.createElement('img');
 let cardholder = document.getElementById('cardholder');
 let carouselCard = document.getElementById('getCarousel');


 let item3 = document.getElementById('item3');
 blogi_kuva.setAttribute('class', "blogi_kuva");

$.ajax({
  type: "GET",
  url: "backend.json",
  data: "data",
  dataType: "json",
  success: function (res) {
  
    for(let i=0; i < res.posts.length; i++){
     
    if(window.location.hash == res.posts[i].hash){
    otsikko.innerHTML = res.posts[i].otsikko;
    alaotsikko.innerHTML = res.posts[i].alaotsikko;
    pvm.innerHTML = res.posts[i].pvm;
    teksti.innerHTML = res.posts[i].teksti;
    footer.innerHTML = res.posts[i].footer;
    blogi_kuva.setAttribute('src', '/img/'+res.posts[i].kuva);
    blogi_yla.appendChild(blogi_kuva)
    }
  }
  }
});

$.ajax({
  type: "GET",
  url: "backend.json",
  data: "data",
  dataType: "json",
  success: function (res) {
  
    for(let i=0; i <3; i++){
      let c_hash = res.posts[i].hash;
      let c_kuva = res.posts[i].kuva;
      let c_otsikko = res.posts[i].otsikko;
      let c_intro = res.posts[i].card_intro;
      let c_pvm = res.posts[i].pvm;
      
      teeKortit(c_hash, c_kuva, c_otsikko, c_intro, c_pvm);
      teeKortitKaruselli(c_hash, c_kuva, c_otsikko, c_intro, c_pvm);

    

    }
  }
  });
  function redirect(hash){
    window.location.hash = hash;
    window.location.pathname = "/blogi.html";
 }

 function teeKortit(hash, img, ots, c_intro, pvmaara){
    
  let kortti  = document.createElement('div');
  let teksti = document.createElement('p');
  let pvm = document.createElement('span');
  let otsikko  = document.createElement('h1');
  let footer = document.createElement('div')
  let kuva = document.createElement('img');
  let btn = document.createElement('div');
  btn.setAttribute('id', 'btn');
  btn.setAttribute('class', 'lue_btn');
  btn.setAttribute('onclick', 'redirect("'+hash.substring(1)+'")')
  btn.innerHTML = "Lue";
  footer.setAttribute('class', 'cfooter')
  kuva.setAttribute('src', '/img/'+ img);
  kuva.setAttribute('class', 'hub_kuva');
  otsikko.innerHTML = ots;
  kortti.setAttribute('id', 'koti_kortti');
  teksti.innerHTML = c_intro;
  pvm.innerHTML = "Julkaistu "+ pvmaara
  cardholder.appendChild(kortti);
  kortti.appendChild(kuva);
  kortti.appendChild(otsikko);
  kortti.appendChild(teksti);
  kortti.appendChild(pvm);
  kortti.appendChild(footer);
  footer.appendChild(btn)

 
} //teeKortit(c_hash, c_kuva, c_otsikko, c_intro, c_pvm);
let active = 0;
function teeKortitKaruselli(hash, img, ots, c_intro, pvmaara){
  
  let caroItem  = document.createElement('div');
  let teksti = document.createElement('p');
  let pvm = document.createElement('span');
  let footer = document.createElement('div')
  let otsikko  = document.createElement('h1');
  let kuva = document.createElement('img');
  let btn = document.createElement('div');

  if(active == 0){
    caroItem.setAttribute('class', 'carousel-item active')
    active = 1
  }else{
    caroItem.setAttribute('class', 'carousel-item')

  }
  
  btn.setAttribute('id', 'btn');
  btn.setAttribute('class', 'lue_btn');
  btn.setAttribute('onclick', 'redirect("'+hash.substring(1)+'")')
  btn.innerHTML = "Lue";
  footer.setAttribute('class', 'cfooter')
  kuva.setAttribute('src', '/img/'+ img);
  kuva.setAttribute('class', 'hub_kuva');
  otsikko.innerHTML = ots;
  teksti.innerHTML = c_intro;
  pvm.innerHTML = "Julkaistu "+ pvmaara

  carouselCard.appendChild(caroItem);
  caroItem.appendChild(kuva);
  caroItem.appendChild(otsikko);
  caroItem.appendChild(teksti);
  caroItem.appendChild(pvm);
  caroItem.appendChild(btn);
  

 
}