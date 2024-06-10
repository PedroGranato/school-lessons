 function Register(str){
    
    if (str.length == 0){
        document.getElementById("CPF").innerHTML = "";
        return;
    } 
    else{
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                document.getElementById("CPF").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "Register.php?q=" + str, true);
        xmlhttp.send();
    };

    if (str.length == 0){
        document.getElementById("Name").innerHTML = "";
        return;
    }
    else{
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                document.getElementById("Name").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "Register.php?q=" + str, true);
        xmlhttp.send();
    };

    if (str.length == 0){
        document.getElementById("RG").innerHTML = "";
        return;
    }
    else{
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                document.getElementById("Rg").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "Register.php?q=" + str, true);
        xmlhttp.send();
    }
   
 }
