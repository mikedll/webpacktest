import _ from 'lodash';
import './style.css';
import PrettyPicture from './pretty-area2.jpg';
function component() {
  var rootElement = document.createElement('div');
  
  var element = document.createElement('div');

  // Lodash, now imported by this script.
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  
  var element2 = document.createElement('div');
  var image = new Image();
  image.src = PrettyPicture;  
  element2.appendChild(image);

  rootElement.append(element);
  rootElement.append(element2);
  
  return rootElement;
}

document.body.appendChild(component());
