'use strict'

const spaceDiv = document.getElementsByClassName('space-pic-div')[0];
const titleElement = document.getElementById('title');
const dateElement = document.getElementById('date');
const textElement = document.getElementById('text-box');
const spaceImgElement = document.getElementById('space-img');
const spaceVidElement = document.getElementById('space-video');
const copyrightElement = document.getElementById('copyright');
const hd = true;

const fetchImage = async () => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?hd=${hd}&api_key=m1ic6nHpL7Whqs593Vf1YlWwlCfi5FK6PflXdMdE`);
  const jsonResp = await response.json();
  return jsonResp;
};

const attachMedia = (jsonResp) => {
  let urlType;
  let mediaElement;
  
  if (jsonResp.media_type === 'video') {
    mediaElement = spaceVidElement;
    urlType = 'url';
  } else {
    mediaElement = spaceImgElement;
    urlType = hd ? 'hdurl' : 'url';
  }

  
  mediaElement.src = jsonResp[urlType];
  mediaElement.style.display = 'inline';
};

const attachDescriptors = (jsonResp) => {
  if (jsonResp.copyright) {
    copyrightElement.innerHTML = `Image Credit: ${jsonResp.copyright}`;
  } else {
    copyrightElement.innerHTML = `Image Credit: Public Domain`;
  }
  
  const date = jsonResp.date;
  const explanation = jsonResp.explanation;
  const title = jsonResp.title;

  textElement.innerHTML = explanation;
  titleElement.innerHTML = title;
  dateElement.innerHTML = date;
};

const createTheUniverse = async () => {
  const jsonResp = await fetchImage();
  attachMedia(jsonResp);
  attachDescriptors(jsonResp);
}

createTheUniverse();
