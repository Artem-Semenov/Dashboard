const assets = [
  {
    coin: "Bitcoin",
    shortName: "BTC",
    amount: 1,
    price: 24000,
    priceChange: 11,
    profit: 15,
    id: "btc-slider-element",
    active: true,
    img: "/Dashboard/Img/btc icon.png",
    index: 1,
    data: [26000, 25000, 24600, 22918, 23385, 25670, 27620],
  },
  {
    coin: "Ethereum",
    shortName: "ETC",
    amount: 3,
    price: 4000,
    priceChange: 15,
    profit: 80,
    id: "ethereum-slider-element",
    active: false,
    img: "/Dashboard/Img/ethereum icon.png",
    index: 2,
    data: [2287, 2392, 1999, 2300, 2000, 2222, 2120],
  },
 {
    coin: "Ripple",
    shortName: "XRP",
    amount: 278,
    price: 7.9,
    priceChange: 30,
    profit: -27,
    id: "xrp-slider-element",
    active: false,
    img: "/Dashboard/Img/xrp-icon.png",
    index: 3,
    data: [5, 5.5, 4.9, 3.7, 6, 5.9, 5.5],
  },
   /* 
    {
    coin: "Cronos",
    shortName: 'CRO',
    amount: 333,
    price: 8.2,
    priceChange: 12,
    profit: -47,
    id: "cro-slider-element",
    active: false,
    img: "/Dashboard/Img/xrp-icon.png",
    index: 4,
    data: [5, 3, 2, 1.5, 2, 2.2, 3],
    
  },
  {
    coin: "XLM",
    shortName: 'XLM',
    amount: 333,
    price: 8.2,
    priceChange: 12,
    profit: -47,
    id: "xlm-slider-element",
    active: false,
    img: "/Dashboard/Img/xrp-icon.png",
    index: 5,
  },
  {
    coin: "MATIC",
    shortName: "MAT",
    amount: 278,
    price: 7.9,
    priceChange: 30,
    profit: -27,
    id: "mat-slider-element",
    active: false,
    img: "/Dashboard/Img/xrp-icon.png",
    index: 6,
    data: [5, 5.5, 4.9, 3.7, 6, 5.9, 5.5],
  },
    {
    coin: "TETRA",
    shortName: 'TTR',
    amount: 333,
    price: 8.2,
    priceChange: 12,
    profit: -47,
    id: "ttr-slider-element",
    active: false,
    img: "/Dashboard/Img/xrp-icon.png",
    index: 7,
    data: [5, 3, 2, 1.5, 2, 2.2, 3],
    
  },
  {
    coin: "XLS",
    shortName: 'XLS',
    amount: 333,
    price: 8.2,
    priceChange: 12,
    profit: -47,
    id: "xls-slider-element",
    active: false,
    img: "/Dashboard/Img/xrp-icon.png",
    index: 8,
  },  */ 
];

const cards = [
  { name: "OnePay", type: "CREDIT", number: 5136, index: 1, id: "1452OnePay" },
  { name: "Slack", type: "DEBIT", number: 7842, index: 2, id: "8365Slack" },
  { name: "TimGri", type: "CREDIT", number: 9317, index: 3, id: "3853TimGri" },
  { name: "Onto", type: "DEBIT", number: 7092, index: 4, id: "37542Onto" },
  { name: "Onto", type: "DEBIT", number: 7092, index: 5, id: "9801OnePay" },
  { name: "Onto", type: "DEBIT", number: 7092, index: 6, id: "30365OnePay" },
];


class Dashboard {

_render () {


    this.sliderLine = document.getElementById("slider-line");
    this.sliderDots = document.getElementById("slider-dots-wrapper");
    this.limitsDisplayLine = document.getElementById("limits-display-slider");
    this.limitsTextLine = document.getElementById("limits-text-slider");
    this.bottomSliderLine = document.getElementById("bottom-slider-line");
    this.thumb = document.getElementById("slider-targeter");
    
    this.canvasWrapper = document.getElementById("middle-bottom-wrapper");
    
    this.testRange = document.getElementById("testRange");
    this.newDataset = '';


  

  
  this._changeData(myChart)


  let htmlForMainSlider = "";
  let htmlForDisplayPecentageChange = "";
  let htmlForDisplayPriceChange = "";
  let htmlForSliderDots = "";
  let htmlForBottomSlider = "";
  let sliderLineMove = 23;
  let limitsSliderMove = 9;
  let elindex;
  let activeDotId;
  assets.forEach((el) => {
    htmlForMainSlider += `<div
    class="slider-element"
    id=${el.id}
    data-id=${el.id}>
    <div class="slider-element-top" data-id=${el.id}>
      <div
        class="slider-element-img-wrapper"
        data-id=${el.id}
      >
        <img
          src='${el.img}'
          alt=""
          data-id="btc-slider-element"
        />
      </div>
      <div
        class="slider-element-top-text-wrapper"
        data-id=${el.id}
      >
        <p data-id=${el.id}>${el.coin}</p>
      </div>
    </div>
    <div class="slider-element-bottom" data-id=${el.id}>
      <p data-id=${el.id}>${el.amount}</p>
      <span data-id=${el.id}>(${el.profit}%)</span>
    </div>
  </div>`;
  
    htmlForDisplayPecentageChange += `<div class="limits-display-slider-element">
  <div>
   <img src="/Dashboard/Img/limits-bottom-display.png" />
  </div>
    <div>
    <p>+${el.priceChange}%</p>
    </div>
  </div>`;
  
    htmlForDisplayPriceChange += `<div>
  <p>${el.shortName} price</p>
  <span>$${el.price}</span>
  </div>`;
  
    htmlForSliderDots += `<button
  class="slider-dot"
  id="dot-${el.index}"
  data-id="${el.id}"
  >
  </button>`;
  
    if(el.active) {
    this.newDataset = el.data;
    dashboard._changeData(myChart);
  
    activeDotId = `dot-${el.index}`;
      elindex = el.index - 1;
  
  }  
  }); 
  
  cards.forEach((el) => {
    htmlForBottomSlider += `
  <div class="bottom-slider-element" data-id = ${el.id}>
  <div class="bottom-slider-element-inner-wrapper" data-id = ${el.id}>
  <div class="bottom-slider-top-text" data-id = ${el.id}>
    <p data-id = ${el.id}>${el.name}</p>
    <span>${el.type}</span>
  </div>
  <div class="bottom-slider-bottom-wrapper" data-id = ${el.id}>
    <div class="bottom-slider-bottom-left" data-id = ${el.id}>
      <span data-id = ${el.id}>****</span>
      <p>${el.number}</p>
    </div>
    <div class="bottom-slider-bottom-right-img" data-id = ${el.id}>
      <img src="/Dashboard/Img/Visa icon.png" alt="" data-id = ${el.id}>
    </div>
  </div>
  </div>
  </div>
  `;
  });
  
  this.limitsTextLine.innerHTML = htmlForDisplayPriceChange;
  this.sliderLine.innerHTML = htmlForMainSlider;
  this.limitsDisplayLine.innerHTML = htmlForDisplayPecentageChange;
  this.sliderDots.innerHTML = htmlForSliderDots;
  this.bottomSliderLine.innerHTML = htmlForBottomSlider;
  document.getElementById(activeDotId).classList.add("slider_dot_active");
  this.sliderLine.style.top = `${sliderLineMove - 210 * elindex}px`;
  this.limitsDisplayLine.style.top = `${limitsSliderMove - 55 * elindex}px`;
  this.limitsTextLine.style.top = `${-77 * elindex}px`;



  }
 
Init() {
  this.thumbWrapper = document.getElementById("slider-targeter-wrapper");
  this.thumbWrapper.innerHTML = `<input type = 'range' class ="testRange" id ="testRange" style = 'width: ${this.thumbWrapper.offsetWidth}px' min = '0' max = '${cards.length - 1}' value = '0'/>`;
  this.burgerButton = document.getElementById("burger-button")
  this.burgerMenu = document.getElementById("burger-menu")
  this.myChart = new Chart(document.getElementById("myChart"), {
    type: "line",
    data: {
      labels: ["5 Nov", "10 Nov", "15 Nov", "20 Nov", "25 Nov", "30 Nov"],
      datasets: [
        {
          backgroundColor: "#636CED",
          borderColor: "#636CED",
          data: [1,2,3,4,5],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

this._render()

this._addEventListeners()



};

_sliderActiveCoin(shortName) {
  assets.forEach((el) => {
    if (el.shortName === shortName) {
      el.active = true;
    } else {
      el.active = false;
    }
  });
}



_changeData(chart) {
  this.myChart.data.datasets.forEach((dataset) => {
      dataset.data = this.newDataset
  });
  this.myChart.update();
}

_addEventListeners () {
  this.sliderLine.addEventListener("click", function (event) {
    assets.forEach((el) => {
      if (event.target.dataset.id === el.id && !el.active) {
        dashboard._sliderActiveCoin(el.shortName.toString());
        dashboard._render()
      }
    });
   
  });
  
  this.sliderDots.addEventListener("click", function (e) {
    assets.forEach((el) => {
      if (e.target.dataset.id === el.id && !el.active) {
        dashboard._sliderActiveCoin(el.shortName.toString());
        dashboard._render();
      }
    });
  
    
  });
  
  
  this.testRange.addEventListener('input', function(event) {
  console.log(testRange.value);
    dashboard.bottomSliderLine.style.left = -200 * (testRange.value) +'px'
  })
  
  
  this.bottomSliderLine.addEventListener("click", function (event) {
   // event.preventDefault()
    let elindex = dashboard.bottomSliderLine.offsetWidth / 280;
    cards.forEach((el) => {
      if (event.target.dataset.id === el.id) {
        dashboard.bottomSliderLine.style.left = (el.index - 1) * -200 + "px";
        testRange.value = el.index - 1
      }
    });
  });
  
  this.burgerButton.addEventListener('click', function(e) {
  if (dashboard.burgerMenu.classList.length === 1) {;
  dashboard.burgerMenu.classList.add("burger-menu-active")
  } else {dashboard.burgerMenu.classList.remove("burger-menu-active")

}
  })
}

} 

const dashboard = new Dashboard



dashboard.Init()











/* const sliderLine = document.getElementById("slider-line");
const sliderDots = document.getElementById("slider-dots-wrapper");
const limitsDisplayLine = document.getElementById("limits-display-slider");
const limitsTextLine = document.getElementById("limits-text-slider");
const bottomSliderLine = document.getElementById("bottom-slider-line");
const thumb = document.getElementById("slider-targeter");
const thumbWrapper = document.getElementById("slider-targeter-wrapper");
const canvasWrapper = document.getElementById("middle-bottom-wrapper");
thumbWrapper.innerHTML = `<input type = 'range' class ="testRange" id ="testRange" style = 'width: ${thumbWrapper.offsetWidth}px' min = '0' max = '${assets.length + 1}' value = '0'/>`


const myChart = new Chart(document.getElementById("myChart"), {
  type: "line",
  data: {
    labels: ["5 Nov", "10 Nov", "15 Nov", "20 Nov", "25 Nov", "30 Nov"],
    datasets: [
      {
        backgroundColor: "#636CED",
        borderColor: "#636CED",
        data: [1,2,3,4,5],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

let newDataset;

function _changeData(chart) {
  chart.data.datasets.forEach((dataset) => {
      dataset.data = newDataset
  });
  chart.update();
}


function _sliderActiveCoin(shortName) {
  assets.forEach((el) => {
    if (el.shortName === shortName) {
      el.active = true;
    } else {
      el.active = false;
    }
  });
}


function _render() {
  let htmlForMainSlider = "";
  let htmlForDisplayPecentageChange = "";
  let htmlForDisplayPriceChange = "";
  let htmlForSliderDots = "";
  let htmlForBottomSlider = "";
  let sliderLineMove = 30;
  let limitsSliderMove = 20;
  let elindex;
  let activeDotId;
  assets.forEach((el) => {
    htmlForMainSlider += `<div
    class="slider-element"
    id=${el.id}
    data-id=${el.id}>
    <div class="slider-element-top" data-id=${el.id}>
      <div
        class="slider-element-img-wrapper"
        data-id=${el.id}
      >
        <img
          src='${el.img}'
          alt=""
          data-id="btc-slider-element"
        />
      </div>
      <div
        class="slider-element-top-text-wrapper"
        data-id=${el.id}
      >
        <p data-id=${el.id}>${el.coin}</p>
      </div>
    </div>
    <div class="slider-element-bottom" data-id=${el.id}>
      <p data-id=${el.id}>${el.amount}</p>
      <span data-id=${el.id}>(${el.profit}%)</span>
    </div>
  </div>`;

    htmlForDisplayPecentageChange += `<div class="limits-display-slider-element">
  <div>
   <img src="/Dashboard/Img/limits-bottom-display.png" />
  </div>
    <div>
    <p>+${el.priceChange}%</p>
    </div>
</div>`;

    htmlForDisplayPriceChange += `<div>
  <p>${el.shortName} price</p>
  <span>${el.price}$</span>
</div>`;

    htmlForSliderDots += `<button
class="slider-dot"
id="dot-${el.index}"
data-id="${el.id}"
>
</button>`;

    if(el.active) {
    newDataset = el.data;
    _changeData(myChart);

    activeDotId = `dot-${el.index}`;
      elindex = el.index - 1;

  }  
  }); 

  cards.forEach((el) => {
    htmlForBottomSlider += `
<div class="bottom-slider-element" data-id = ${el.id}>
<div class="bottom-slider-element-inner-wrapper" data-id = ${el.id}>
  <div class="bottom-slider-top-text" data-id = ${el.id}>
    <p data-id = ${el.id}>${el.name}</p>
    <span>${el.type}</span>
  </div>
  <div class="bottom-slider-bottom-wrapper" data-id = ${el.id}>
    <div class="bottom-slider-bottom-left" data-id = ${el.id}>
      <span data-id = ${el.id}>****</span>
      <p>${el.number}</p>
    </div>
    <div class="bottom-slider-bottom-right-img" data-id = ${el.id}>
      <img src="/Dashboard/Img/Visa icon.png" alt="" data-id = ${el.id}>
    </div>
  </div>
</div>
</div>
`;
  });

  limitsTextLine.innerHTML = htmlForDisplayPriceChange;
  sliderLine.innerHTML = htmlForMainSlider;
  limitsDisplayLine.innerHTML = htmlForDisplayPecentageChange;
  sliderDots.innerHTML = htmlForSliderDots;
  bottomSliderLine.innerHTML = htmlForBottomSlider;
  document.getElementById(activeDotId).classList.add("slider_dot_active");
  sliderLine.style.top = `${sliderLineMove - 210 * elindex}px`;
  limitsDisplayLine.style.top = `${limitsSliderMove - 58 * elindex}px`;
  limitsTextLine.style.top = `${-70 * elindex}px`;


}

function _addEventListeners () {
  sliderLine.addEventListener("click", function (event) {
    assets.forEach((el) => {
      if (event.target.dataset.id === el.id) {
        _sliderActiveCoin(el.shortName.toString());
      }
    });
    _render();
  });
  
  sliderDots.addEventListener("click", function (e) {
    assets.forEach((el) => {
      if (e.target.dataset.id === el.id) {
        _sliderActiveCoin(el.shortName.toString());
      }
    });
  
    _render();
  });
  
  
  testRange.addEventListener('input', function(event) {
  
    bottomSliderLine.style.left = -200 * (this.value) +'px'
  })
  
  
  bottomSliderLine.addEventListener("click", function (event) {
    let elindex = bottomSliderLine.offsetWidth / 280;
    cards.forEach((el) => {
      if (event.target.dataset.id === el.id) {
        bottomSliderLine.style.left = (el.index - 1) * -200 + "px";
        testRange.value = el.index - 1
      }
    });
  });
  
  
}



_render();


_addEventListeners()
 */


/* thumb.addEventListener("mousedown", function (event) {
  let elindex = (bottomSliderLine.offsetWidth - 200) / 230;

  event.preventDefault();
  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    let newLeft =
      event.clientX - shiftX - thumbWrapper.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = thumbWrapper.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + "px";
    bottomSliderLine.style.left = -newLeft * elindex + "px";
  }

  function onMouseUp() {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }
});

bottomSliderLine.addEventListener("click", function (event) {
  let elindex = bottomSliderLine.offsetWidth / 280;
  cards.forEach((el) => {
    if (event.target.dataset.id === el.id) {
      bottomSliderLine.style.left = (el.index - 1) * -205 + "px";
      thumb.style.left = (210 * (el.index - 1)) / elindex + "px";
    }
  });
});

thumbWrapper.addEventListener("click", function (event) {
  console.log(event.clientX - thumbWrapper.getBoundingClientRect().left);

  let elementIndex = (bottomSliderLine.offsetWidth - 200) / 230;

  let newLeft = event.clientX - thumbWrapper.getBoundingClientRect().left;
  if (newLeft > 280) {
    newLeft = 280;
  }

  thumb.style.left = newLeft + "px";
  bottomSliderLine.style.left = -newLeft * elementIndex + "px";
});

 */
