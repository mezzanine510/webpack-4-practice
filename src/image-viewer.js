import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
import '../styles/image-viewer.css';

const smallImage = document.createElement('img');
smallImage.src = small;

document.body.appendChild(smallImage);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);