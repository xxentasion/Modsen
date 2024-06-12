/*Создайте блок кода внутри функции и объявите переменную с именем x с использованием var, let и const. 
Попытайтесь обратиться к этой переменной как внутри, так и вне блока. 
Какие переменные видны снаружи блока, а какие нет?*/

function check() {
    {
      var xVar = "var";
      let xLet = "let";
      const xConst = "const";
  
      // Переменные, которые видны в блоке:
      console.log(xVar);
      console.log(xLet);
      console.log(xConst);
    }
  
    // Переменные, которые видны вне блока:
    console.log(xVar);
  
    // Переменные, которые не видны вне блока:
    console.log(xLet);
    console.log(xConst);
  }
  
  check();
