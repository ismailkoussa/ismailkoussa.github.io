let gr = document.getElementsByTagName("input");
 for(u=0;u<gr.length-2;u++)
 {
   gr[u].addEventListener("click",function(){this.placeholder=" ";});
 }
 let form = document.getElementById("form1");
 form.addEventListener("reset",function(){document.getElementById("email").style.color="gray";});

 form.addEventListener("submit",function(e){e.preventDefault()});
 
  document.addEventListener("input",function(e){
  e.target.style.color="blue";
 });

   let pw = document.getElementById("password");
   let base=/[a-zA-Z0-9]$/;
      let em = document.getElementById("email");
      let regex=/[a-zA-Z0-9]@gmail.com$/;
   let nm = document.getElementById("number");
   let based=/[0-9]{2}-[0-9]{3}-[0-9]{3}/;
      let na = document.getElementById("name");
      let basec=/[A-Za-z]$/;

 form.addEventListener("submit",function(){  
  if(!base.test(pw.value)) {
  document.getElementById("ipa").innerHTML="incorrect password";
 }
  if((!regex.test(em.value)) || (em.value.length<18) || (em.value.length>35)){
  document.getElementById("iem").innerHTML="incorrect email";
 }  
  if (!basec.test(na.value)) {
  document.getElementById("ina").innerHTML="incorrect name"; }
  if (!based.test(nm.value)) {

  document.getElementById("inu").innerHTML="incorrect number"; }
    if (basec.test(na.value) && regex.test(em.value) && based.test(nm.value) && base.test(pw.value) && (em.value.length>17 && em.value.length<36)){
   var v = document.createElement("a");
   v.href = "projetwebp3.html";
   v.target="_blank";
   document.body.appendChild(v);
   v.click();
 }
  });
 form.addEventListener("reset",function(){
 let error = document.getElementsByClassName("error");
 for(i=0;i<error.length;i++){ error[i].innerHTML = " "; }
 }); 