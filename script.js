
 const outputDiv = document.getElementById('output');
    const arr = [1, 2, 3, 4];

  
    function getInitialArray() {
      return new Promise(function(resolve) {
        setTimeout(function() {
          resolve(arr);
        }, 3000);
      });
    }

   
    function filterEvenNumbers(array) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          const evenNumbers = array.filter(function(num) {
            return num % 2 === 0;
          });
        
          outputDiv.textContent = evenNumbers.join(',');
          resolve(evenNumbers);
        }, 1000);
      });
    }

  
    function multiplyByTwo(array) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          const multiplied = array.map(function(num) {
            return num * 2;
          });
         
          outputDiv.textContent = multiplied.join(',');
          resolve(multiplied);
        }, 2000);
      });
    }

   
    getInitialArray()
      .then(filterEvenNumbers)
      .then(multiplyByTwo);