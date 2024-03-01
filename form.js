document.addEventListener("DOMContentLoaded" ,function(){       //Dom içeriği tamamen yüklendiğinde, içinde bulunan fonksiyon çalıştırır.
    document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault();
        console.log(event.target);  //olayın hedefini konsola yazdırır.
        console.log(event.target.username); //event.target üzerinden username öğesine erişir ve bu değeri konsola yazdırır.
    })
})

