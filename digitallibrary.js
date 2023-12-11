var semInput = document.getElementById("semInput");
let outerContainer = document.getElementById("outerContainer");

fetch('digitallibrary.php')
        .then(response => response.json())
        .then(data => {
        console.log(data);
        for (let i of data){
                console.log(semInput.value);
                if(parseInt(i.sem) === 1){
                    appendBook(i);
                    
                }
    }
  })

function semChange(){
    outerContainer.textContent = "";
    fetch('digitallibrary.php')
        .then(response => response.json())
        .then(data => {
        console.log(data);
        for (let i of data){
                console.log(semInput.value);
                if(parseInt(i.sem) === parseInt(semInput.value)){
                    appendBook(i);
                    
                }
    }
  })
}
function appendBook(val){
    let bookCon = document.createElement("div");
    let bookImg = document.createElement("img");
    let bookName = document.createElement("a");

    bookImg.setAttribute("src",val.pic_url);
    bookImg.style.height = "250px";
    bookImg.style.width = "150px";

    bookCon.appendChild(bookImg);
    bookCon.style.height = "350px";
    bookCon.style.width = "150px";

    bookName.textContent = val.book_name;
    bookName.style.margin = "10px";
    bookName.setAttribute("href",val.book_url);
    bookCon.appendChild(bookName);
    bookCon.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    bookCon.style.margin = "20px";

    outerContainer.appendChild(bookCon);
    console.log(val.pic_url);
}