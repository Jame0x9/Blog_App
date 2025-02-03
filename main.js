function showPage(page) {
    document.getElementById("calculatePage").classList.add("hidden");
    document.getElementById("ratePage").classList.add("hidden");
    
    document.getElementById(page + "Page").classList.remove("hidden");
}

function calculateFee() {
    let amount = parseFloat(document.getElementById("amount").value) || 0;
    let fee = 0;
    if (amount >=1000000){
        fee = 'สวัสดี ลูกเจ้าสัว'
    }
    else if (amount >= 100000){
        fee = 'เยอะขนาดนี้ ไปเปิดธนาคารเถอะ';
    }
    else if (amount >= 10000) {
        fee = 70;
    } else if (amount >= 5000 && amount <10000) {
        fee = 45;
    } else if (amount >= 4000 && amount < 5000) {
        fee = 40;
    } else if (amount > 1000 && amount <4000) {
        fee = 30;
    } else if (amount > 300 && amount <= 1000 ) {
        fee = 20;
    } else if (amount >= 200 && amount <= 300) {
        fee = 15;
    } else if (amount > 0 && amount < 200){
        fee = 10;
    }
 
    if (amount > 100000){
    document.getElementById("result").innerText = "ค่าธรรมเนียม: " + fee + " ";
    }else {
    document.getElementById("result").innerText = "ค่าธรรมเนียม: " + fee + " บาท";
    }
}