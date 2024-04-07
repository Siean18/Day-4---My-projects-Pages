function submitHandler(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    const your_mail = "siean180@gmail.com";

    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail?view=cm&fs=1&to=${your_mail}&su=${subject}&body=${message}`
    a.click();
}