
require.context("components", true);

function getComponent() {

  return import(/* webpackChunkName: "whacky" */ './components/another-lib.js').then(whacky => {
    var element = document.createElement('div');

    element.innerHTML = whacky.default();

    return element;    
  }).catch(error => 'An error occurred while loading the component');

}

getComponent().then(component => {
  document.body.appendChild(component);
});

