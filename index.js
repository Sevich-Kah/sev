function openBtn(){
    document.getElementById("thank").style.display = 'block'
    document.getElementById("box").style.display = 'none'
    var gmail = document.getElementById("gmail")
    var gmail = gmail.value;
    const mailOutput = document.getElementById("mailOutput")

    if (gmail) {
        mailOutput.textContent = gmail
    }
    if (!gmail) {
        let gmail = document.getElementById("gmail");
        gmail.style.border = '2px solid hsl(4, 100%, 75%)';
        gmail.style.backgroundColor = 'hsl(4, 100%, 90%)';
        let invalid  = document.getElementById("invalid").style.display = 'block'
        document.getElementById("thank").style.display = 'none'
        document.getElementById("box").style.display = 'block'
    }
}
let mail = document.getElementById("mail");
mail = mail.innerHTML;
mail.style.border = '2px solid hsl(4, 100%, 75%)';

function closeBtn(){
    document.getElementById("thank").style.display = 'none'
}