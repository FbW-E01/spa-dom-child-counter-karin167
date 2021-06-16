//A
const wrapper = document.querySelector("#wrapper");
console.log(wrapper);
console.log(wrapper.children);
//1
for (let i = 0; i < wrapper.children.length; i++) {
  console.log(i);
}
//1
// console.log(wrapper.childElementCount);
console.log("###########");
//B
let mostClasses = 0;
let elmentWithMostClasses = 0;
for (let i = 0; i < wrapper.children.length; i++) {
  //   console.log(wrapper.children[i].classList.length);
  if (mostClasses < wrapper.children[i].classList.length) {
    mostClasses = wrapper.children[i].classList.length;
    elmentWithMostClasses = wrapper.children[i];
  }
}
console.log(mostClasses);
console.log(elmentWithMostClasses);
