// Write your code here!
const main = document.getElementById("main");
main.remove();


const newElement = document.createElement("h1");
newElement.id = "victory";
newElement.innerText = "Max is the champion";
document.body.append(newElement);



