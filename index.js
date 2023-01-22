var countryCount = document.getElementById("total");
countryCount.innerHTML = `Total Number of Countries: ${countries_data.length}`;

var cname = [];
countries_data.map((ele) => {
  cname.push(ele.name.toLowerCase());
});

var result = document.getElementById("answer");
result.setAttribute("class", "result");
countries_data.map((ele) => {
  result.innerHTML += ` <div class="result1"> ${ele.name}</div>`;
});

function func1() {
  var btnstart = document.getElementById("input");
  btnstart.setAttribute("onkeyup", "func1()");

  var result = document.getElementById("answer");
  result.innerHTML = "";

  var input = document.getElementById("input").value;

  var namearr = [];
  cname.map((ele) => {
    var startwith = ele.startsWith(input.toLowerCase());

    if (startwith) {
      namearr.push(ele);
      result.innerHTML += `<div class="result1"> ${ele}</div>`;
    }
  });
  console.log(namearr);

  var countiescount = document.getElementById("countryCount");
  countiescount.innerHTML = ` Countries Start with "${input}" are "${namearr.length}" `;
  countiescount.style.color = "yellow";
}
function func2() {
  var btnstart = document.getElementById("input");
  btnstart.setAttribute("onkeyup", "func2()");

  var result = document.getElementById("answer");
  result.innerHTML = "";

  var input = document.getElementById("input").value;
  if (input == "") {
    result.innerHTML += ` <div  class="alert"> Please Enter Country name </div> `;
  } else {
    var namearr = [];
    cname.map((ele) => {
      var startwith = ele.includes(input.toLowerCase());
      console.log(startwith);

      if (startwith) {
        namearr.push(ele);
        result.innerHTML += ` <div class="result1"> ${ele}</div>`;
      }
    });
    // console.log(namearr);

    var countiescount = document.getElementById("countryCount");
    countiescount.innerHTML = ` Countries Start with "${input}" are "${namearr.length}" `;
    countiescount.style.color = "yellow";
  }
}
