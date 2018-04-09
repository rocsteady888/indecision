'use strict';

console.log("app.js is running");
// babel src/app.js --out-file public/scripts/app.js --presets=env,react --watch
var app = {
  title: 'Indecision app',
  subTitle: 'put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

var resetArr = function resetArr() {
  app.options = [];
  renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
  var randNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randNum];
  alert(randNum);
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subTitle && React.createElement(
      'p',
      null,
      app.subTitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'You have no options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: resetArr },
      'Reset Array'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();
