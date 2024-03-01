//Tarayıcı, Belge Nesne Modeli (DOM) olarak bilinen belgenin bir temsilini oluşturur. Bu belge, Javascript’in bir web sitesinin öğelerine ve stillerine erişmesini ve bunları değiştirmesini sağlar.
//DOM öğelerinin özellikleri ve metotları :
//getElementById : Herhangi bir öğeye erişme yöntemidir
//getElementsByTagName : Sayfanızda belirttiğinizi bir etiket adıyla tüm öğeleri aramanıza olanak tanır.
//node
//createElement :  bir öğe oluşturmak ve onu DOM yapısında herhangi bir yere yerleştirmek için kullanılır.
//appendChild : Bir öğeye yeni bir alt düğüm ekleyebiliriz.
//removeChild : Öğeden bir alt düğümü kaldırır.
//getAttribute : Sayfadaki bir öğenin herhangi bir özniteliğinin değerine erişebilirsiniz.
//setAttribute : Mevcut bir özniteliğe yeni bir değer atamak setAttribute kullanılarak yapılır.
//document.forms : DOM yapısının “form” koleksiyonlarına erişmek için kullanılır.
//inner-HTML : XHTML öğelerinin içindeki içeriğe erişmek ve içerik yazmak için kullanılır.

const header = document.createElement("h1");
header.textContent = "dom ile yapılmış bir başlık";
document.body.appendChild(header);


const para = document.createElement("p");    //<p> (paragraf) öğesi oluşturur. createElement içerisine oluşturmak istediğimiz etiketi tırnak içerisinde veriyoruz. 
para.textContent = "this is created using DOM API";     //textContent : ögenin içeriğini temsil eder.
// document.body.appendChild(para);   //oluşturulan p elementini html belgesine ekler.
para.setAttribute("id", "js-para");         //id değerini değiştirip js-para ismini verdik.
console.log(para.getAttribute("id"));       //id değerini consola yazdır.
para.classList.add("one");      //<p> öğesinin sınıf listesine "one" adında bir sınıf eklenmiş olur.
para.classList.add("second-class");
para.classList.remove("second-class");  //sınıf listesinden "second-class" ı kaldır. 

const span = document.createElement("span");
span.id = "span-id";
span.className = "blue red";
span.textContent = "this is span created using dom.createElement"
span.style.backgroundColor = "yellow"
//innerHTML : bir html öğesinin içeriğini değiştirmek veya almak için kullanılır.
span.innerHTML = "this is span created using <em>dom.createdElement<span>another text</span></em>"   //span öğesinin içerisiğini tırnak içerisindeki metin ile değiştirir
                                        //ayrıca em etiketi ile de vurgu yapılmıştır.
para.appendChild(span);     //daha önce oluşturulan <p> öğesine <span> elementini ekler.

const hobbies = ["coding", "swimming", "jogging"];
const list = document.createElement("ul");          //boş bir lsite <ul> öğesi oluşturur.
for(let hobby of hobbies){
    list.innerHTML += "<li class='blue'>" + hobby + "</li>";
}
document.body.appendChild(list);

document.body.appendChild(para);   //oluşturulan p elementini html belgesine ekler.


//get the elements

console.log(document.getElementById("first-para").textContent)       //id'si first-para olan elementin text'ini consola yazdır
console.log(document.getElementsByClassName("blue").textContent)  // yanlış bir kullanımdır. Çünkü getElementsByClassName metodu HtmlCollection nesnesi döndürür, bu nedene doğrudan textContent kullanılamaz. Bunun yerine döngü kullanılır.
const blueElements = document.getElementsByClassName("blue");
for(let i = 0; i < blueElements.length; i++){
    console.log(blueElements[i].textContent);
}

console.log(document.querySelector("p"));  //ilk <p> öğesini seçer ve konsola yazdırır.
console.log(document.querySelectorAll("p"));  //bütün <p> öğelerini getirir.
console.log(document.querySelector(".one"));        //one classını getirir.

const dynamicContent = document.getElementById("dynamic-test");
console.log(dynamicContent);

const phrases = ["Software Engineer..", "Mentor..", "Human Being.."];
let letterIndex = 0;

function printLetters(phrase){
    for(let index = 0; index < phrase.length; index++){
        console.log(phrase.charAt(index));
    }
    dynamicContent.textContent = phrase;        //dynamic content adlı html öğesine ekler
}

printLetters(phrases[0])        //software engineer cümlesini printletters fonk. gönderir ve cümlenin harflerini sırayla konsola yazdırır.