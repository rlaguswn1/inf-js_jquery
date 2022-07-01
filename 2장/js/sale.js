function showPrice() {
    var oPrice = document.querySelector("#originalPrice").value;
    var rate = document.querySelector("#rate").value;

    if(oPrice>0 && rate>0){
        savedPrice = oPrice*(rate/100);
        result = oPrice-savedPrice;
    } else {
        result="음수를 입력하셨습니다";
    }

    document.getElementById("showResult").innerHTML =
    "상품의 원래 가격은 " + oPrice + "원이고, <br>"+
    "할인율은 " + rate + "%입니다. <br>"+
    "아낀 금액은 "+ savedPrice +"원이고, <br>"+
    "최종 금액은 "+ result+"원입니다."
}