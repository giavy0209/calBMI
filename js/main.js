var howYourBody = document.getElementById("bmi"),
    yourBMI = document.getElementById('yourbmi');

function calBMI(){
    mass = document.getElementById('mass').value,
    height = document.getElementById('height').value;
    BMI = mass / (height * height);
    console.log('mass la', mass);
    console.log('height la', height);
    console.log('BMI la2', BMI);
    if(BMI < 18.5){
        howYourBody.innerHTML = "Bạn thiếu cân";
        yourBMI.innerHTML = "BMI = "+ BMI;
    }else if(BMI <= 25){
        howYourBody.innerHTML = "Bạn có thân hình cân đối";
        yourBMI.innerHTML = "BMI = "+ BMI;
    }else{
        howYourBody.innerHTML = "Bạn thừa cân";
        yourBMI.innerHTML = "BMI = "+ BMI;
    };
};
var yourNumber = document.getElementById('your-number');
function checkNumber(){
    number = document.getElementById('check-number').value;
    console.log('nuber is ', number);
    calNumber = number % 3;
    console.log("number cal", calNumber);
    if ( calNumber == 0){
        yourNumber.innerHTML = "số của bạn chia hết cho 3"
    }else {
        yourNumber.innerHTML = "số của bạn không chia hết cho 3"
    }
}
var checkYear = document.getElementById('leap-year');
function checkLeapYear(){
    userYear = document.getElementById('check-leap-year').value;
    console.log('years = '  ,userYear);
    if(userYear % 100 == 0){
        if(userYear % 400 ==0){
            checkYear.innerHTML = "năm " + userYear + " là năm nhuận"; 
        }else{
            checkYear.innerHTML = "năm " + userYear + " không phải là năm nhuận"; 
        }
    }else if(userYear % 4 == 0){
        checkYear.innerHTML = "năm " + userYear + " là năm nhuận"; 
    }else{
        checkYear.innerHTML = "năm " + userYear + " không phải là năm nhuận"; 
    }
}
