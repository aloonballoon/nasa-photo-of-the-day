const spaceDiv = document.getElementsByClassName('space-pic-div')[0];
const titleElement = document.getElementById('title');
const dateElement = document.getElementById('date');
const textElement = document.getElementById('text-box');
const spaceImgElement = document.getElementById('space-img');

const fetchImage = async () => {
  const response = await fetch('https://api.nasa.gov/planetary/apod?hd=false&api_key=m1ic6nHpL7Whqs593Vf1YlWwlCfi5FK6PflXdMdE');
  const jsonResp = await response.json();
  return jsonResp;
};

const renderImage = (jsonResp) => {
  const date = jsonResp.date;
  const explanation = jsonResp.explanation;
  const title = jsonResp.title;
  spaceImgElement.src = jsonResp.url;
  textElement.innerHTML = explanation;
  titleElement.innerHTML = title;
  dateElement.innerHTML = date;
};

const createTheUniverse = async () => {
  const jsonResp = await fetchImage();
  renderImage(jsonResp);
}

createTheUniverse();
