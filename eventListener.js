window.addEventListener('load', () => {
    document.getElementById('button').addEventListener('click', () => {
      setTimeout(() => {
        items.forEach(item => {
          // your code here
          console.log("Hello System.");
        });
      }, 2000);
    });
  });