window.addEventListener('DOMContentLoaded', (event) => 
{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() 
    {
       if ( name.value.length == 0) {
          textError.textContent = "No Empty Value needed";
          return;
       }
       try {
          (new PersonInfo()).name = name.value;
          textError.textContent = "";
       } catch (e) {
          textError.textContent = e;
       }
    });
 
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() 
    {
       output.textContent = salary.value;
    });
 
    
    const startDate=document.querySelector('#startDate').value;
    const dateerror=document.querySelector('.date-error').value;
    var d=new Date();
    startDate.addEventListener('input',function()
    {
      if(startDate>d.getDate())
      {
         dateerror.textContent="Invalid Date";
      }
      try{
         (new PersonInfo()).start_date=date.value;
         dateerror.textContent="Invalid Date";
      }
      catch(e)
      {
         dateerror.textContent=e;
      }
    });
 });

 