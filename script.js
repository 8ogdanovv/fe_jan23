window.onload = () => {
  const study_titles = document.getElementsByClassName("study__title");
  study_titles[0].addEventListener("mouseover", univer);
  study_titles[1].addEventListener("mouseover", college);
  function univer(e) {
    console.log(e);
    let x = e.clientX;
    let y = e.clientY;
    console.log(x, y);
    let div = document.createElement("div");
    div.innerHTML = `
    <a href="http://en.chnu.edu.ua/"><video width="290" autoplay="" loop="" muted >
    <source src="http://en.chnu.edu.ua/wp-content/themes/chnu-university/video/Yuriy Fedkovych Chernivtsi National University EN.mp4" type="video/mp4">
</video></a>`;
    div.style.setProperty('display', 'absolute', '!important');
    div.style.setProperty('top', `${y}px`);
    div.style.setProperty('left', `${x}px`);
    e.target.appendChild(div);
    setTimeout(() => {
      e.taget.removeChild(div);
    }, 1500);
  }
  function college(e) {
    console.log(e);
    let x = e.clientX;
    let y = e.clientY;
    console.log(x, y);
    // http://kpik.org.ua/wp-content/uploads/2019/09/about.jpg
  }
};
