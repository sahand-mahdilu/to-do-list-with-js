// const input = document.querySelector(".input");

// const icon = document.querySelector(".delete");

// const ulElem = document.querySelector(".list-group");

// const form = document.querySelector(".add ");

// function addList(value) {
//   let todo = document.createElement("li");
//   todo.className =
//     "list-group-item d-flex justify-content-between align-items-center";

//   let newSpan = document.createElement("span");

//   newSpan.innerHTML = value;

//   let trash = document.createElement("i");
//   trash.className = "icon fa fa-trash-o delete";

//   trash.addEventListener("click", function () {
//     todo.remove();
//   });

//   todo.append(newSpan, trash);
//   console.log(todo);

//   ulElem.append(todo);
// }
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

// input.addEventListener("keydown", function (e) {
//     let value = e.target.value.trim();

//     if (e.keyCode === 13) {
//         if (value) {
//         input.value=''
//       addList(value);
//     }
//   }
// });

let input = document.querySelector(".input");

let ul = document.querySelector("ul");

let form = document.querySelector("form");

form = addEventListener("submit", function (e) {
  e.preventDefault();
});
// ...

input.addEventListener("keydown", function (e) {
  let value = e.target.value;
  if (e.code == "Enter") {
    if (value) {
      addList(value);
      input.value = "";
    }
  }
});

function addList(value) {
  let li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  let span = document.createElement("span");

  span.innerHTML = value;

  let i = document.createElement("i");
  i.className = "icon fa fa-trash-o delete";

  li.append(span, i);
  console.log(li);
  ul.append(li);

  i.addEventListener("click", function () {
    li.remove();
  });
}
