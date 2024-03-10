var arr = [
  {
    dp: "https://images.pexels.com/photos/2693200/pexels-photo-2693200.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.pexels.com/photos/288100/pexels-photo-288100.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.pexels.com/photos/288100/pexels-photo-288100.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:
      "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

var HTML = "";

arr.forEach((e, indx) => {
  HTML += `<span class="story">
    <img id="${indx}" src="${e.dp}">
</span>`;
});

stories = document.querySelector(".stories");
stories.innerHTML = HTML;

storyView = document.querySelector(".storyView");

stories.addEventListener("click", (e) => {
  try {
    storyView.style.display = "block";
    storyView.style.backgroundImage = `url(${arr[e.target.id].story})`;

    setTimeout(function () {
      storyView.style.display = "none";
    }, 2000);
  } catch (err) {
    console.log(err.message);
    storyView.style.display = "none";
  }
});
