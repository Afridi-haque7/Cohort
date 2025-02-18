function printChai(){
    console.log('Chai aur Code');
    
}

printChai();

if(numOfGuests <= 2){
    pizzaSize = "small";
}else if(numOfGuests > 2 && numOfGuests <= 5){
    pizzaSize = "medium";
}else   pizzaSize = "large";