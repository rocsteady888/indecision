
let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
  console.log('added 1 ', count);
}
const subtractOne = () => {
  count--;
  renderCounterApp();
  console.log('subtracted 1 ', count);
}
const reset = () => {
  count = 0;
  renderCounterApp();
  console.log('count reset ', count);
}
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subtractOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
};

renderCounterApp();