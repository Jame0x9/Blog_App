function showPage(page) {
    document.getElementById("calculatePage").classList.add("hidden");
    document.getElementById("ratePage").classList.add("hidden");
    
    document.getElementById(page + "Page").classList.remove("hidden");
}

function calculateFee() {
    let amount = parseFloat(document.getElementById("amount").value) || 0;
    let fee = 0;

    if (amount > 5000) {
        fee = 70;
    } else if (amount > 4000 && amount <=5000) {
        fee = 45;
    } else if (amount > 3000 && amount <= 4000) {
        fee = 40;
    } else if (amount > 1000 && amount <=3000) {
        fee = 30;
    } else if (amount > 500 && amount <= 1000 ) {
        fee = 20;
    } else if (amount > 0 && amount <= 100){
        fee = 10;
    }
 

    document.getElementById("result").innerText = "ค่าธรรมเนียม: " + fee + " บาท";
}
