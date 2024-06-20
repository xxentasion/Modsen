function executeAsyncOperations(...operations) {
    const results = [];
  
    function executeOperation(operation) {
      if (!operation) return Promise.resolve(results);
  
      return operation().then((result) => {
        results.push(result);
        return executeOperation(operations[results.length]);
      });
    }
  
    return executeOperation(operations[0]);
  }
  
  const asyncOperation_1 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("Async 1");
        resolve({ operation: 1, result: 1083 });
      }, 1000);
    });
  
  const asyncOperation_2 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("Async 2");
        resolve({ operation: 2, result: 738 });
      }, 1500);
    });
  
  const asyncOperation_3 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("Async 3");
        resolve({ operation: 3, result: 23363 });
      }, 2000);
    });
  
  executeAsyncOperations(asyncOperation_1, asyncOperation_2, asyncOperation_3)
    .then((results) => console.log(results))
    .catch((error) => console.error("Error:", error));