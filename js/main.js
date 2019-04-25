
function calBMI(){
    mass = document.getElementById('mass').value,
    height = document.getElementById('height').value;
    BMI = mass / (height * height);
    console.log('mass la', mass);
    console.log('height la', height);
    console.log('BMI la2', BMI)
    if(BMI < 18.5){
        document.getElementById("bmi").innerHTML = "<h1>Bạn thiếu cân</h1>";

    }else if(BMI <= 25){
        document.getElementById("bmi").innerHTML = "<h1>Bạn có thân hình cân đối</h1>";
    }else{
        document.getElementById("bmi").innerHTML = "<h1>Bạn thừa cân</h1>";

    };
};


