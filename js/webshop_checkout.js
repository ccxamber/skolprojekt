    //scriptet blev så stort här att jag valde att bryta ut det till ett eget document istället för att lägga det i webshop.js.
    function checkout(){ //funktionen som körs när användaren trycker på checkout knappen.
        clearMessages() //kör clearMessages().
        var formName = 'checkoutForm' //jag satte checkoutForm till en var då strängen kommer användas flera gånger
        var firstNamebool = requiredCheck(formName, 'firstName') // (1) kör requiredCheck med variablerna formets namn och inputfältet i det formets namn och sätter som en variabel. Döpta till bool då värdet kommer vara true eller false
        var lastNamebool = requiredCheck(formName, 'lastName') 
        var ssnbool = ssnCheck(formName, 'ssn') //kör ssnCheck med samma sorts variabler
        var emailbool = emailCheck(formName, 'email') //kör emailCheck med samma sorts variabler
        var adressbool = requiredCheck(formName, 'adress') 
        var zipcodebool = zipcodeCheck(formName, 'zipcode') //kör zipcodeCheck med samma sorts variabler
        var citybool = requiredCheck(formName, 'city')
        if(firstNamebool && lastNamebool && ssnbool && emailbool && adressbool && zipcodebool && citybool){ //om alla är true...
            window.location.replace('/payment.html') //öppnas en ny sida
        }
        else{ //annars stannar användaren på sidan

        }
    }
    function requiredCheck(formToCheck, fieldName) { //funktion som kollar om formulär rutor är ifylda. Gjord futureproof ifall det skulle behöva användas igen.
        var inputElement = document.forms[formToCheck][fieldName] //hämtar inputelementet men hjälp av formets namn och inputfältets namn och sätter in det till en var.
        var input = inputElement.value //tar ut value, alltså det användaren matat in ur inputelementet och sätter in det till en var.
        if (input.length>0) { //om användarens input är längre, alltså fler tecken än 0, så...
            renderValidationMessage('✔', inputElement.parentElement, 'success') //körs renderValidationMessage() med de satta variablerna. (2) .parrentElement används för att hitta inputelementets parrent, i detta fall <label> detta kommer användas i renderValidationMessage().
            return true //returnar true, se raden jag markerade (1).
        }   
        else {//annars, alltså om användarens input är 0 (eller kortare)...
            renderValidationMessage('fältet får ej lämnas tomt.', inputElement.parentElement, 'error') //samma som i överstående if() men med andra variabler
            return false //returnar false (1)
        }
    }
    function zipcodeCheck(formToCheck, fieldName) { //alla nedanstående funktioner är likadana som den över med den enda skillnaden att if-sattsen har ett annat krav.
        var inputElement = document.forms[formToCheck][fieldName]
        var input = inputElement.value
        if (/^[1-9]\d{4}$/.test(input)) { //om användarens input stämmer överänns med regex (regular expression) reglerna...
            renderValidationMessage('✔', inputElement.parentElement, 'success')
            return true
        }
        else {
            renderValidationMessage('fyll i 5 siffrig svensk postkod.', inputElement.parentElement, 'error')
            return false
        }
    }
    function ssnCheck(formToCheck, fieldName) {
        var inputElement = document.forms[formToCheck][fieldName]
        var input = inputElement.value
        if (/^(\d{6}|\d{8})\-?\d{4}$/.test(input)) { // -||-
            renderValidationMessage('✔', inputElement.parentElement, 'success')
            return true
        }
        else {
            renderValidationMessage('fyll i 10 eller 12 siffrigt personnummer.', inputElement.parentElement, 'error')
            return false
        }
    }
    function emailCheck(formToCheck, fieldName){
        var inputElement = document.forms[formToCheck][fieldName]
        var input = inputElement.value
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input)) { // -||-
            renderValidationMessage('✔', inputElement.parentElement, 'success')
            return true
        }
        else {
            renderValidationMessage('fyll i en giltig emailaddress.', inputElement.parentElement, 'error')
            return false
        }
    }
        function renderValidationMessage(result, target, type) { //funktion för att pressentera valideringen för användaren.
        var paragraphElement = document.createElement('p') //skapar ett paragrafelement <p> och sätter det som en variabel.
        paragraphElement.className = 'validationMessage message-'+type //sätter det skapade paragrafelementets class med hjälp av en sträng och en av variablerna som renderValidationMessage() tar när det körs (type, en sträng).
        paragraphElement.innerText = result //ändrar texten i det skapade paragrafelementet till en av variablerna som renderValidationMessage() tar när det körs (result, en sträng).
        target.appendChild(paragraphElement) //skapar ett nytt child till target (i detta fall alltså label, se (2) ) och sätter det till det nyskapta paragrafelementet med hjälp av appendchild().
    }
    function clearMessages(){ //funktion som används för att ränsa ut tidigare validerings pressentation.
        var messages = document.querySelectorAll('.validationMessage') //hämtar alla element med class="validationMessage" och sätter den i en lista
        for (var i=0; i<messages.length; i++) { //for loop som går över alla element i listan...
            var message = messages[i] //sätter element [i] i listan till en variabel och...
            message.remove() //och tar bort det helt.
        }
    }
