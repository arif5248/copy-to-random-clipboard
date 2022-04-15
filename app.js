//select html 
const input = document.querySelector('#input');
const btn = document.querySelector('button');

//random cupon code

let randomArray=[];
let deshChecked=0;
let x,y=4;
for (x=0; x<y; x++){
  let random= Math.ceil(Math.random()*10000);
  randomArray[x]=random;
  if(randomArray[x]>1000){
    function fValue(val){
      form.display.value +=val;
      if(deshChecked<3){
        form.display.value +='-'
      }
      deshChecked++
    }
    fValue(randomArray[x]);
  }else{
    x--;
  }
  
}

//Function

btn.onclick= function(){
  input.select();
  document.execCommand('copy');

  alert('Successfully Copied');
}
// //test
//   //
//   let p =Math.random()
//   console.log(p);
  
//   let q= p*10000;
//   console.log(q);
  
//   let r = Math.ceil(q);
//   console.log(r);
//   console.log(typeof r);

//   let s =Math.random()
//   console.log(s);
  
//   let t= s*10000;
//   console.log(t);
  
//   let u = Math.ceil(t);
//   console.log(u);
//   console.log(typeof u);
//   if(r>u){
//     console.log('true');
//   }else{
//     console.log('false');
//   }
//     //
