const messageForm = document.getElementById('messageForm');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const successMessageBox = document.getElementById('success-message');

  const fullNameInputTag = document.getElementById('fname');
  const emailInputTag = document.getElementById('email');
  const messageTextAreaTag = document.getElementById('message');

//   if (fullName == '') {
//     alert('please provide your full name.');
//   }else if (email == ''){
//     alert('please provide your email.');
//   }else if (message == ''){
//     alert('please provide your message.');
//   }else{
//     messageForm.submit();
//   }

let fullName = fullNameInputTag.value;
let email = emailInputTag.value;
let messsage = messageTextAreaTag.value;



if (fullName && email && message){
  //send the following values to the server to save
 // messageForm.submit()
 //fullName
 //email
 //message

 //when the server responds true, alert the user of success
 successMessageBox.innerHTML = `Hello ${fullName}, your response has been recorded.`;
 successMessageBox.style.display = 'block';

 //reset fields
  fullNameInputTag.value = '';
 emailInputTag.value = '';
 messageTextAreaTag.value = '';

}else{
  alert('All fields are required. Please provide them')
}
})