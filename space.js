const spaceDiv = document.getElementsByClassName('space-pic-div')[0];
let spaceImg;
let textBox;

for (let i = 0; i < spaceDiv.children.length; i++) {
  const tag = spaceDiv.children[i];
  if (tag.tagName === "IMG") spaceImg = tag;
  if (tag.tagName === "P") textBox = tag;
}

const fetchImage = async () => {
  const response = await fetch('https://api.nasa.gov/planetary/apod?hd=true&api_key=m1ic6nHpL7Whqs593Vf1YlWwlCfi5FK6PflXdMdE');
  const jsonResp = await response.json();
  const explanation = jsonResp.explanation;
  spaceImg.src = jsonResp.hdurl;
  textBox.innerHTML = explanation;
};

fetchImage();
