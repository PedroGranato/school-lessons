function send() {
    const Name = document.getElementById('Name').value;
    const CPF = document.getElementById('CPF').value;
    const Date = document.getElementById('Date').value;
    const CEP = document.getElementById('CEP').value;
    const Tel = document.getElementById('Tel').value;

    localStorage.setItem('Name', Name);
    localStorage.setItem('CPF', CPF);
    localStorage.setItem('Date', Date);
    localStorage.setItem('CEP', CEP);
    localStorage.setItem('Tel', Tel);

document.body.innerHTML = "<div class='result'>" +
"<h1 class='Tittle'> Resultado </h1>" + 
"<h3> Nome:"  + localStorage.getItem('Name') + "</h3>" + 
"<h3> CPF: " + localStorage.getItem('CPF') + "</h3>" + 
"<h3> Data: " + localStorage.getItem('Date') + "</h3>" + 
"<h3> CEP: " + localStorage.getItem('CEP') + "</h3>" + 
"<h3> Telefone: " + localStorage.getItem('Tel') + "</h3>" + 
"</div>";
};