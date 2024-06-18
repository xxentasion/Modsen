const repeatFunction = (action, interval = 1000, times = 10) => {
  let counter = 0;
  const intervalId = setInterval(() => {
    action();
    counter++;
    if (counter === times) clearInterval(intervalId);
  }, interval);
};

const doSomething = () => {
  console.log(`i do something... `);
};

repeatFunction(doSomething);
