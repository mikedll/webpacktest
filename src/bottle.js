
export default function writing() {
  var node = document.selectByCss('div.main-container');

  const message = "Testing."
  node.innerHTML = '<p>' + message + '</p>';
  
}
