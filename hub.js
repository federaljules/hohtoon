let main = document.getElementById('hub_main');
let cat_raha = document.getElementById('cat_raha');
let cat_talous = document.getElementById('cat_talous');
let cat_joht = document.getElementById('cat_joht');
let kaikkibtn = document.getElementById('cat_kaikki');
let cat_menestys = document.getElementById('cat_menestys');

history.replaceState(null, null, ' ');

 function redirect(hash){
    window.location.hash = hash;
    window.location.pathname = "/blogi.html";
    console.log(hash)
 }

 let cat_btns = document.getElementsByClassName('catbtn');
 for (let i = 0; i < cat_btns.length; i++) {
     cat_btns[i].addEventListener('click', function(){
        $('#hub_main').empty();
        var current = document.getElementsByClassName("cat_active");
        current[0].className = current[0].className.replace(" cat_active", "");
        this.className += " cat_active";
     });
     
 }


 

 function teeKortit(hash, img, ots, c_intro, pvmaara, kat){
    
    let kortti  = document.createElement('div');
    let teksti = document.createElement('p');
    let pvm = document.createElement('span');
    let kategoria = document.createElement('p');
    let otsikko  = document.createElement('h1');
    let kuva = document.createElement('img');
    let footer = document.createElement('div')
    let btn = document.createElement('div');
    btn.setAttribute('id', 'btn');
    btn.setAttribute('class', 'lue_btn');
    btn.setAttribute('onclick', 'redirect("'+hash.substring(1)+'")')
    btn.innerHTML = "Lue";
    footer.setAttribute('class', 'cfooter')
    kuva.setAttribute('src', '/img/'+img);
    kuva.setAttribute('class', 'hub_kuva');
    otsikko.innerHTML = ots;
    kortti.setAttribute('id', 'blogi_hub_kortti');
    teksti.innerHTML = c_intro;
    pvm.innerHTML = "Julkaistu "+pvmaara
    kategoria.innerHTML = "Kategoria: "+ " "+ kat +" "
    main.appendChild(kortti);
    kortti.appendChild(kuva);
    kortti.appendChild(pvm);
    kortti.appendChild(otsikko);
    kortti.appendChild(teksti);
    if(kat != " "){
        kortti.appendChild(kategoria)
    }
    kortti.appendChild(footer);
    footer.appendChild(btn)
 }

$.ajax({
    type: "GET",
    url: "backend.json",
    data: "data",
    dataType: "json",
    success: function (res) {
      
        for(let i = 0; i < res.posts.length; i++){
            let hash = res.posts[i].hash;
            let kuva = res.posts[i].kuva;
            let otsikko = res.posts[i].otsikko;
            let c_intro = res.posts[i].card_intro;
            let pvm = res.posts[i].pvm;

            kaikkibtn.addEventListener('click', function(){
                teeKortit(hash, kuva, otsikko, c_intro, pvm, " ");
            })

            for(let j=0;j<res.posts[i].kategoria.length;j++){
                let kat = res.posts[i].kategoria;
                kat[j] = " "+ kat[j] 

                cat_raha.addEventListener('click', function(){
                    
                    if(kat[j].includes("Hyvinvointi")){
                        
                    teeKortit(hash, kuva, otsikko, c_intro, pvm, kat);
                }
                })
                cat_talous.addEventListener('click', function(){
                    if(kat[j].includes("Talous")){
                        teeKortit(hash, kuva, otsikko, c_intro, pvm, kat);
                    }
                 })
                 cat_vier.addEventListener('click', function(){
                    if(kat[j].includes("Vieraileva")){
                        teeKortit(hash, kuva, otsikko, c_intro, pvm, kat);
                    }else{
                        console.log("Nothing here")
                    }
                 })
                 cat_menestys.addEventListener('click', function(){
                    if(kat[j].includes("Menestys")){
                        teeKortit(hash, kuva, otsikko, c_intro, pvm, kat);
                    }else{
                        console.log("Nothing here")
                    }
                 })
            };
           
            
        teeKortit(hash, kuva, otsikko, c_intro, pvm, " ");



        }
    }
  });

  
 