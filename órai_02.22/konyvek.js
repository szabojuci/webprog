var konyvek = [
    {
        cim:"Az emberség árnyékos oldala",
        szerzo:"József Attila",
        kiado:"Magvető Könyvkiadó",
        kiadasiev:1933,
    },
    {
        cim:"Harry Potter és a bölcsek köve",
        szerzo:"J.K. Rowling",
        kiado:"Bloomsbury",
        kiadasiev:1997,
    },
    {
        cim:"A katedrális",
        szerzo:"Jussi Adler-Olsen",
        kiado:"Kossuth Kiadó",
        kiadasiev:2012,
    },
    {
        cim:"Az idő rövid története",
        szerzo:"Stephen Hawking",
        kiado:"Kossuth Kiadó",
        kiadasiev:1988,
    },
    {
        cim:"Az idő megfejtése",
        szerzo:"Brian Greene",
        kiado:"Gabo Kiadó",
        kiadasiev:2004,
    },
    {
        cim:"Vuk",
        szerzo:"Fekete István",
        kiado:"Móra Kiadó",
        kiadasiev:1965,
    }

]
function Kereses(){
var tablazat = `<ol class="list-group">`
var kereses = document.getElementById('i1').value;
    for (konyv of konyvek) {
        if (konyv.cim.includes(kereses) || konyv.szerzo.includes(kereses))
        tablazat += `<li class="list-group-item">
                    ${konyv.cim}
                    (${konyv.szerzo},
                    ${konyv.kiado},
                    ${konyv.kiadasiev})
                </li>`;
    }
    tablazat += `</ol>`;
    document.getElementById("eredmeny").innerHTML = tablazat;
}

function Lista(){
    var lista = document.getElementById('konyvek').value;
    var tablazat = `<ul>`
        for (konyv of konyvek) {
            tablazat += `<li>
                        ${konyv.cim}
                        (${konyv.szerzo},
                        ${konyv.kiado},
                        ${konyv.kiadasiev})
                        </li>`;
        }
        tablazat += `</ul>`;
        document.getElementById("konyvek").innerHTML = tablazat;

}
function Evek(){
    var tablazat = `<ol class="list-group">`
    var beirtev = document.getElementById('i2').value;
        for (konyv of konyvek) {
            if (konyv.kiadasiev<beirtev)
                tablazat += `<li class="list-group-item">
                                ${konyv.cim}
                                (${konyv.szerzo},
                                ${konyv.kiado},
                                ${konyv.kiadasiev})
                            </li>`;
    }
    tablazat += `</ol>`;
    document.getElementById("eredmeny").innerHTML = tablazat;
}

function Szamol(){
    var keresettcim = document.getElementById('i3').value;
    var db = 0;
    for(konyv of konyvek){
        if(konyv.cim.includes(keresettcim))
        db++;
    }
   document.getElementById("eredmeny").innerHTML = keresettcim+ ": " + db;
}

function Vanolyankonyv(){
    var evszam = document.getElementById('i4').value;
    var tartalmaz = "Nem";
    for(konyv of konyvek){
        if(konyv.kiadasiev==evszam)
        tartalmaz = "Igen";
    }
    document.getElementById("eredmeny").innerHTML = evszam+": "+tartalmaz;
}

function Legkorabbi(){
    /*var legkorabbi = document.getElementById('i2').value;
    for(konyv of konyvek){
        if(konyv.kiadasiev > legkorabbi)
        legkorabbi=konyv.kiadasiev;
    }
    document.getElementById("eredmeny").innerHTML = legkorabbi + konyv.kiadasiev;*/


    var min = document.getElementById('i2').value;
    var darabszam = 0;
    for (i = 0; i < konyvek.kiadasiev; i++) {
        if (min==konyvek.kiadasiev){ 
         
        darabszam = i;
        }
    }
    document.getElementById('eredmeny').innerHTML = darabszam;
}