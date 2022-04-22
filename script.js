Email.send({
    SecureToken: "beaa5a62-d0e0-4407-bbd7-f30b3d99c76e Please",
  
    To : 'fexthecreator@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body : "Name: " + document.getElementById("name").value,
         + "<br> Message: " + document.getElementById("name").value,
}).then(
  message => alert("Message sent succefully")
);
