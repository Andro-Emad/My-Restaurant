const menu_card = document.querySelector("#menu .container #menu-card");

let types = document.querySelectorAll(".types p");

let xml = new XMLHttpRequest();
xml.open("GET", "meals.json", true);
xml.send();

xml.onreadystatechange = function () {
  if (this.readyState === this.DONE && this.status === 200) {
    let mainData = JSON.parse(this.response);
    // function print card
    function print_card(j) {
      let myCard = ` <div class="card-box">
      <img src="${mainData[j].mealImg}">
      <div class="card-Text" data-type="${mainData[j].type}">
      <h2>${mainData[j].mealName}</h2>
      <p>${mainData[j].mealDetails}</p>
        <span>${mainData[j].price}</span>
        </div>
        </div>
        </div>`;
      menu_card.innerHTML += myCard;
    }
    // loop print all card
    for (let j = 0; j < mainData.length; j++) {
      print_card(j);
    }
    // onclick work print card type
    for (let i = 0; i < types.length; i++) {
      types[i].addEventListener("click", () => {
        let exist_card = false;
        menu_card.innerHTML = "";
        let mainData = JSON.parse(xml.response);
        for (let j = 0; j < mainData.length; j++) {
          if (types[i].dataset.type == mainData[j].type) {
            exist_card = true;
            print_card(j);
          }
        }
        if (exist_card == false) {
          menu_card.innerHTML = `<p class="existCard">There is Nothing</p>`;
        }
      });
    }
  }
};
