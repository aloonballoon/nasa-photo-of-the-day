const spaceDiv = document.getElementsByClassName('space-pic-div')[0];
const titleElement = document.getElementById('title');
const dateElement = document.getElementById('date');
const textElement = document.getElementById('text-box');
const spaceImgElement = document.getElementById('space-img');

const fetchImage = async () => {
  const response = await fetch('https://api.nasa.gov/planetary/apod?hd=true&api_key=m1ic6nHpL7Whqs593Vf1YlWwlCfi5FK6PflXdMdE');
  const jsonResp = await response.json();
  const title = jsonResp.title;
  const date = jsonResp.date;
  const explanation = jsonResp.explanation;
  spaceImgElement.src = jsonResp.hdurl;
  textElement.innerHTML = explanation;
  titleElement.innerHTML = title;
  dateElement.innerHTML = date;
};

fetchImage();
