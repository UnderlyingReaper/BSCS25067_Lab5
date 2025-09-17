document.getElementById("curr-year").innerHTML = new Date().getFullYear();
const contactForm = document.getElementById('contact-form');


contactForm.addEventListener('submit', function(event) {
    const formData = new FormData(contactForm);

    const formEmail = formData.get("email");
    const formIssue = formData.get('issue');

    if(formEmail.length !== 0 && formEmail.includes('@') && formIssue.length !== 0)
        alert("Sent!");
    else
    {
        alert("Error!\nPlease enter the correct email and mention the issue you faced.");
        event.preventDefault();
    }
});


function WelcomeUser() {
    alert("Welcome To Pentagon!");
}

function CheckStock(name) {
    alert(name + " Is Available!");
}

function GetInfo(id) {
    alert(id + " Minimum Requirements\n" +
        "OS: Windows 10\n" +
        "Processor: Intel Core i5-2500K@3.3GHz / AMD FX 6300@3.5GHz\n" +
        "Memory: 8GB Ram\n" +
        "Graphics: Nvidia GeForce GTX 780 (3 GB) / AMD Radeon R9 290 (4GB)\n" +
        "Storage: 100GB"
    );
}