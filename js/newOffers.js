const newOffers = document.querySelector("#newOffers .container");

let xmlh = new XMLHttpRequest();
xmlh.open("GET", "newOffers.json", true);
xmlh.send();

xmlh.onreadystatechange = function () {
  if (this.readyState === this.DONE && this.status === 200) {
    let mainData = JSON.parse(this.response);
    let position_img = false;
    for (let j = 0; j < mainData.length; j++) {
      let Card;
      if (position_img == false) {
        Card = ` <div class="newOffers_box">
        <div class="newOffers_boxImg">
        <img src="${mainData[j].mealImg}" alt="">
        </div>
        <div class="newOffers_boxText">
        <h2>${mainData[j].mealName}</h2>
          <p>${mainData[j].mealDetails}</p>
        </div>
      </div>`;
        position_img = true;
      } else if (position_img == true) {
        Card = ` <div class="newOffers_box">
        <div class="newOffers_boxText">
        <h2>${mainData[j].mealName}</h2>
        <p>${mainData[j].mealDetails}</p>
        </div>
        <div class="newOffers_boxImg">
        <img src="${mainData[j].mealImg}" alt="">
        </div>
        </div>`;
        position_img = false;
      }

      newOffers.innerHTML += Card;
    }
  }
};
