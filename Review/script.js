const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')
const submitButton = document.querySelector('button')
const resultField = document.getElementById("resultField");
const stars = document.querySelectorAll('.star')

let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => highlightStars(index));
  star.addEventListener("click", () => setRating(index));
  star.addEventListener("mouseleave", resetStars);
});

function highlightStars(index) {
  stars.forEach((star, i) => {
    star.src =
      i <= index
        ? "https://img.icons8.com/ios-filled/50/ffd700/star--v1.png"
        : "https://img.icons8.com/ios/50/star--v1.png";
  });
}

function setRating(index) {
  selectedRating = index + 1;
}

function resetStars() {
  stars.forEach((star, i) => {
    star.src =
      i < selectedRating
        ? "https://img.icons8.com/ios-filled/50/ffd700/star--v1.png"
        : "https://img.icons8.com/ios/50/star--v1.png";
  });
}
submitButton.addEventListener('click', () => {
    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value
    console.log(selectedRating);
    
    if(name == "" || email == "" || message == "" || selectedRating == 0){
        alert('Please fill all the fields')
        return
    }
    

    const card = document.createElement('div')
    const nameResult = document.createElement('h1')
    nameResult.innerHTML = name
    const emailResult = document.createElement("p");
    emailResult.innerHTML = email;
    const messageResult = document.createElement("p");
    messageResult.innerHTML = message;
    const ratings = document.createElement("div");

    for(let i = 0; i < selectedRating; ++i){
      const star = document.createElement('img');
      star.src = "https://img.icons8.com/ios-filled/50/ffd700/star--v1.png";
      star.classList.add("w-6", "h-6")
      ratings.appendChild(star);
    }

    ratings.classList.add("flex", "justify-between", "w-[50%]", "text-center")
    messageResult.classList.add("text-justify");
    emailResult.classList.add("text-gray-600")
    nameResult.classList.add("text-xl", "font-semibold")
    card.appendChild(nameResult)
    card.appendChild(emailResult);
    card.appendChild(messageResult);
    card.appendChild(ratings)
    card.classList.add(
      "w-[100%]",
      "bg-blue-100/10",
      "backdrop-blur-xs",
      "py-4",
      "text-s",
      "px-8",
      "rounded-xl",
      "shadow-lg",
      "space-y-2"
    );
    resultField.appendChild(card)

    nameInput.value = ""
    emailInput.value = ""
    messageInput.value = ""
    stars.forEach((star, i) => {
      star.src = "https://img.icons8.com/ios/50/star--v1.png";
    });
})