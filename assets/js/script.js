class menu{
    constructor(name){
        this.id = increment++;
        this.name = name;
    }
}
let increment = 1;
let home = new menu("Home");
let about = new menu("About");
let services = new menu("Services");
let contact = new menu("Contact");
let arrmenu = [home, about, services, contact];
function showMenu(){
    let listauto = document.getElementById("listitem");
    arrmenu.forEach(function(item, index){
        arrmenu.innerHTML += `
        <ul class="listauto" id="listauto">
                            <li class="listitem">
                                <a class="listlink" id="listitem" href="index.html">${item.name} <span class="listonly">(current)</span></a>
                            </li>
                            <li class="listitem">
                                <a class="listlink" id="listitem" href="about.html">${item.name}</a>
                            </li>
                            <li class="listitem">
                                <a class="listlink" id="listitem" href="services.html">${item.name}</a>
                            </li>
                            <li class="listitem">
                                <a class="listlink" id="listitem" href="contact.html">${item.name}</a>
                            </li>
                        </ul>
                             `
    })
}
function ready(){
    showMenu();
}

ready();