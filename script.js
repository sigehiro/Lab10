const changeBtn = document.getElementById("changeTextBtn")
const container = document.getElementById("container")
const newDiv = document.createElement("div")

changeBtn.addEventListener("click",  () => {
    document.getElementById("message").textContent = "Text changed successfully!"
})

function addNewParagraph(){
    const newParagraph = document.createElement("p") 
    newParagraph.textContent = "New paragraph added dynamically!"
    newDiv.appendChild(newParagraph);
    container.appendChild(newParagraph)
}


function changeBackground(){
    let body = document.body;
    let backgroundColor = localStorage.getItem("backgroundColor");

    if (!backgroundColor) {
        body.style.backgroundColor = "#ffffff"; 
        localStorage.setItem("backgroundColor", "#ffffff");
    } else {
        body.style.backgroundColor = backgroundColor; 
    }

    localStorage.setItem("backgroundColor", "#" + Math.floor(Math.random()*16777215).toString(16)); // Save new background color to localStorage
}

document.addEventListener("DOMContentLoaded", () => {
    changeBackground();
    addNewParagraph()
});

// window.addEventListener("beforeunload", () => {
//     // addNewParagraph(); 
// });

