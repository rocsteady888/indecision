console.log("app.js is running");
// babel src / app.js--out - file public / scripts / app.js--presets = env, react--watch
const app = {
  title: 'Indecision app',
  subTitle: 'put your life in the hands of a computer',
  options: ['one','two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    { app.subTitle && <p>{app.subTitle}</p> }
    <p>{app.options.length > 0 ? 'Here are your options' : 'You have no options'}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </div>
);

const user = {
  name: 'Ryan',
  age: 32,
  location: 'NC'
};

const getLocation = (location) => location;
const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
  
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);