const w = document.getElementById("weight-input");
const h = document.getElementById("height-input");
const weight_unit = document.getElementById("w-unit")
const height_unit = document.getElementById("h-unit");
const btn = document.querySelector("button")
const resultSpan = document.getElementById("result")

btn.addEventListener('click', () => {
    let bmi 
    let weight = w.value
    let height = h.value
    let w_unit = weight_unit.value
    let h_unit = height_unit.value
    
    if(w_unit == 'kg'){
        if(h_unit == 'cm'){
            height = (height / 100)
            bmi = weight / (height * height);
        }
        else{
            height = (height / 39.37)
            bmi = weight / (height * height);
        }
    }else{
        if(h_unit == 'inch'){
            bmi = 703 * (weight / (height * height));
        }else{
            height = (height / 2.54)
            bmi = 703 * (weight / (height * height));
        }
    }
    console.log(bmi);
    resultSpan.innerText = bmi.toFixed(2);
    const bmiVerdict = document.createElement('span');
    if(bmi < 18.5)  bmiVerdict.innerText = "   (Underweight)";
    else if(bmi > 18.5 && bmi < 24.9)   bmiVerdict.innerText = "    (Normal Weight)";
    else if(bmi > 25 && bmi < 29.9)     bmiVerdict.innerText = "    (Overweight)";
    else if(bmi > 30)   bmiVerdict.innerText = "    (Obese)"
    console.log(bmiVerdict);
    
    resultSpan.appendChild(bmiVerdict)
    return
    
})