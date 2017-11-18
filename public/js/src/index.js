import _ from 'lodash';
import printMe from './print.js';
function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  var btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  btn.id = 'webpackbtn';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
console.log('live?');
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();

    //クリックイベント再登録
    var btn = document.getElementById('webpackbtn');
    btn.onclick = '';
    btn.onclick = printMe;
  })
}