
require.context("components", true);

function getComponent() {

  return new Promise(resolve => { resolve(); }).then(nothing => {
    var element = document.createElement('div');

    element.innerHTML = "Ref load done.";

    return element;    
  }).catch(error => 'An error occurred while loading the component');

}

getComponent().then(component => {
  document.body.appendChild(component);
});

