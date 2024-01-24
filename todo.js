const email = document.querySelector(".email");
const password = document.querySelector(".password");
const add = document.querySelector(".add");
const list = document.querySelector(".list");
const img = document.querySelector(".img");
const h1 = document.querySelector("h1");
add.addEventListener("click", () => {
  if (email.value !== "" && password.value !== "") {
    list.innerHTML += `<div class="lempard">
    <img class="bilal" src=${img.value}   />
    <li>email: ${
      email.value
    } ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</li>
    <li class="mg">password: ${password.value}</li>
    <button>DELETE</button>
    </div>`;
    // email.value = "";
    // password.value = "";
  } else {
    alert(`Пожалуйста ,Заполните поле , Это обязательно`);
  }
});
// function tadk(inds, snd, pnd) {
//   setInterval(() => {
//     return (inds.innerHTML = snd);
//   }, pnd);
// }
// tadk(h1, "leonel", 3000);
