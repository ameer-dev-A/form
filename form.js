let inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"]'
);
   const rad1 = document.querySelector('.rad1');
   const rad2 = document.querySelector('.rad2');
   let txt = document.querySelector('.txt');
   const checkbox = document.querySelector('.ch');
   let er = document.querySelectorAll('.error');
   let btn = document.querySelector('.btn');
   let suc = document.querySelector('.suc');
   const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //  btn.addEventListener('click',()=>{
     inputs.forEach((input,index)=>{
      if(input.value.trim()==="" ){
       er[index].style.display='block';
      }
   else{
       er[index].style.display='none';
    }
   })   
   if(txt.value===""){
     er[4].style.display='block';
   }else{
    er[4].style.display='none';
   }
   if (!rad1.checked && !rad2.checked) {
  er[3].style.display = 'block';
} else {
  er[3].style.display = 'none';
}
  if (!checkbox.checked) {
    er[5].style.display = 'block';
  } else {
    er[5].style.display = 'none';
  }
  if(
  document.querySelector('.first').value.trim() === ""  ||
  document.querySelector('.last').value.trim() === "" ||
  document.querySelector('.mail').value.trim() === "" ||
  txt.value.trim() === "" ||
  !rad1.checked &&
  !rad2.checked &&
  !checkbox.checked
    ){
    suc.style.display = 'none'
  }else{
     suc.style.display = 'block'
     form.style.marginTop ="-40px"
  }
   })