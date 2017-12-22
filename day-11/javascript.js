var btnElement = document.getElementById('btn');
btnElement.onclick =function () {
    var firstNameValue = document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var fullName = (firstNameValue+lastNameValue);
    document.getElementById('fullName').value= fullName;



}