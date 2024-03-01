// //iki şekilde de click fonksiyonu tanımlanabilir:
// function handleClick(){         
//     alert('butona tıklandı');
// }

// document.getElementById("clickme").onclick = handleClick;   //bir öğeye sadece bir olay ekleyebiliriz.
// /////////////////////////////////////////////////////////////
// document.getElementById("clickme").addEventListener("click", function handleClick(){
//     alert('butona tıklandı');       //bir öğeye birden fazla olay dinleyicisi eklenebilir. mevcut olanları etkilemez ve üzerine yazar
// })

document.addEventListener("DOMContentLoaded", function(){

    function handleClick(){
        //event object
        //fare imlec belgedeki herhangi bir öğenin üzerine geldiğinde tetiklenen bir mouse over olay dinleyicisi ekler
        document.addEventListener("mouseover", function(event){
            console.log(event);
        })
    }
    
    
    function handleMouseOver(event){
        console.log(event);
    }
    
document.getElementById("start").addEventListener("click",handleClick)

document.getElementById("stop").addEventListener("click",handleClick)

//mouseover : ilgili etiketin üzerine sadece imleç ile gelindiğinde çalışır. tagın içinde itemlar varsa onların da üzerinde gezinildiğinde tetiklenir.
//mouseout : ilgili etiketin üstünden dışarı çıkıldığında tetiklenir.
//mouseenter : ilgili etiketin üzerine sadece imleç ile gelindiğinde çalışır. Tagın içinde itemlar varsa onların üzerinde gezinilse bile tetilenmez.

document.removeEventListener("mouseover", handleMouseOver)

//keypress : klavyeden bir tuşa basıldığında tetiklenip çalışır. Basılan tuşun değerini event.key veya event.keyCode ie alabiliriz.
//keydown : keypress özelliklerinin yanında farklı tuş kombinasyonlarını (ctrl, shift, vb.) algılamak için event.ctrlKey, event.shiftKey gibi öz. kullanılır.
//keyup : Tuştan elimizi kaldırdığımızda tetiklenir.
document.addEventListener("keypress", function(e){
    console.log("keypress");
    if(e.key === 2){
        e.preventDefault();
    }
})


document.addEventListener("keydown", function(e){     //username alanına bir şey yazdıkça veya sildikçe her harfi konsola basıyor.
    console.log(e.key);
    if(e.key === 2){
    e.preventDefault();
   }
})

document.addEventListener("keyup", function(e){
    console.log(e.key);
    if(e.key === 2){
        e.preventDefault();
    }
})

// //F5 ile sayfa yenielemeyi engeller.
// document.addEventListener("keydown", function(e){
//     if(e.keyCode ==116){
//         alert("sayfayı yenileyemezsiniz");
//     }
//     e.preventDefault();
// });

document.getElementById("username").addEventListener("focus", function(e){
    console.log(e.key);
    console.log("focus event happend");
})

document.querySelector(".parent").addEventListener("click", function(){
    console.log("parent clicked");
})
document.querySelector(".child").addEventListener("click", function(){
    console.log("child clicked");
})
document.getElementById("subchild").addEventListener("click", function(e){
    console.log("subchild click");
    e.stopPropagation();        //bir etkinliğin özelliğini durdurmak için kullanılır
})


//preventDefault : tarayıcıda o an yapılan işlemi durdurmaya yarar.
//stopPropagation : tetiklenen olay zincirlerini keser.
    
})

