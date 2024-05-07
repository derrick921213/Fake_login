document.querySelector("form").onsubmit = function (event) {
  event.preventDefault(); // 阻止表單的默認提交行為
  alert("提交了表單");
};
