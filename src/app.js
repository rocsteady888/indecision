console.log("app.js is running");
// babel src/app.js --out-file public/scripts/app.js --presets=env,react --watch
const app = {
  title: 'Indecision app',
  subTitle: 'put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const resetArr = () => {
  app.options = [];
  renderTemplate();
};

const onMakeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  alert(randNum);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'You have no options'}</p>
      <p>{app.options.length}</p>
      <button onClick={resetArr}>Reset Array</button>
      <button disabled={ app.options.length === 0 }onClick={onMakeDecision}>What should I do?</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();