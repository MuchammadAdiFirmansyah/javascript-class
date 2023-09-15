function hallo(){
    document.getElementById('ganti').innerHTML="hallo javascript";
}
function waktu(){
    document.getElementById('waktu').innerHTML=Date();
}
function namasaya(){
    document.getElementById('namaku').innerHTML=document.getElementById('nama').value;
}
function kali(){
    let a=document.getElementById('bil1').value;
    let b=document.getElementById('bil2').value;
    let hasil=a*b;
    document.getElementById('hasil').innerHTML=hasil;
}
function jumlah(){
    let c=parseInt(document.getElementById('bil1').value);
    let d=parseInt(document.getElementById('bil2').value);
    let hasil=c+d;
    document.getElementById('hasil').innerHTML=hasil;
}
function zodiac(){
    let tanggal=document.getElementById('tanggal').value;
    let bulan=document.getElementById('bulan').value
    let zodiac="kurang tau";
    if (bulan==1){
        if(tanggal>0 && tanggal<20){
        zodiac="leo";
    }
        if(tanggal>19 && tanggal<31){
        zodiac="pices";
    }
} else if (bulan==2){
    if (tanggal>0 && tanggal<20){
        zodiac="Capricorn";
    }
    if (tanggal>19 && tanggal<30){
        zodiac="Pisces";
    }
} else if (bulan==3){
    if (tanggal>0 && tanggal<20){
        zodiac="Gemini";
    }
    if (tanggal>19 && tanggal<30){
        zodiac="Cancer";
    }
} else if (bulan==4){
    if (tanggal>0 && tanggal<20){
        zodiac="Leo";
    }
    if (tanggal>19 && tanggal<31){
        zodiac="Virgo";
    }
} else if (bulan==5){
    if (tanggal>0 && tanggal<20){
        zodiac="Scorpio";
    }
    if (tanggal>19 && tanggal<30){
        zodiac="Libra";
    }
} else if (bulan==6){
    if (tanggal>0 && tanggal<20){
        zodia="Sagitarius";
    }
    if (tanggal>19 && tanggal<31){
        zodiac="Aries";
    }
} else if (bulan==7){
    if (tanggal>0 && tanggal<20){
        zodiac="Aquarius";
    }
    if (tanggal>19 && tanggal<30){
        zodiac="Cancer";
    }
}  else if (bulan==8){
    if (tanggal>0 && tanggal<20){
        zodiac="Scorpio";
    }
    if (tanggal>19 && tanggal<31){
        zodiac="Taurus";
    }
} else if (bulan==9){
    if (tanggal>0 && tanggal<20){
        zodiac="Libra";
    }
    if (tanggal>19 && tanggal<30){
        zodiac="Leo";
    }
} else if (bulan==10){
    if (tanggal>0 && tanggal<20){
        zodiac="Pises";
    }
    if (tanggal>19 && tanggal<30){
        zodiac="Sagitarius";
    }
}  else if (bulan==11){
    if (tanggal>0 && tanggal<20){
        zodiac="Capricorn";
    }
    if (tanggal>19 && tanggal<30){
        zodiac="Gemini";
    }
}  else if (bulan==12){
    if (tanggal>0 && tanggal<20){
        zodiac="Virgo";
    }
    if (tanggal>19 && tanggal<30){
        zodiac="Aries";
    }
}  

document.getElementById('zodiac').innerHTML=zodiac;
}

let btn=document.getElementById('jam')

btn.onclick=function(){
    document.getElementById('waktu').innerHTML=Date();
}

let isi=document.getElementById('ketik')
let tampil= document.getElementById('waktu')
isi.onchange=function(){
    tampil.innerHTML=isi.value;
}

let hari= document.getElementById('hari');
hari.addEventListener("click",coba);

function coba(){
    alert("coba coba");
}

let cariZodiak= document.getElementById('cariZodiak');
cariZodiak.addEventListener("click",zodiac);
