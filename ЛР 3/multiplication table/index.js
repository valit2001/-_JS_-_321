for (let j = 1; j <= 9; j++){  
  document.write(`
  <div 
    style='float: left; width: 100px; background-color: red; border:10px solid gray; color: white; display: flex;
    justify-content: center;
  '>`);

  for (let i = 1; i <=9; i++) {  
    document.write(i + "*" + j + "=" +(i*j) + "<br>"); 
  }

  document.write ("</div>"); 
} 