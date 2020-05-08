function toggleDropdown(elementId) {          //Funktion som används vid navigationen och "size guide"
    var element = document.getElementById(elementId)
    if (element && element.style.display === 'none') { // om elementet och elementets style.display är 'none'..
        element.style.display = 'block' //..ändra det till 'block'
        return
    }
    element.style.display = 'none' // gör motsatsen om "if" inte stämmer 
}

function hideAll() { // funktion som ändrar atributet "display" hos all objekt i en lista. 
    var parent = document.getElementById("showBig");
    var items = parent.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) { // for loop som.. 
        var element = items[i]
        element.style.display = 'none' // ändrar display till 'none' 
    }
}
function showPicked(element) { // funktion som läsar av vilkent av vilket av objekten i listan "thumbnail" som användaren klickar på och sedan öppnar motsvarande bild i listan "showBig" //
    hideAll()
    var parent = element.parentElement // hämtar förälderelementet (i det här fallet listan "<ul = "thumbnails">") och.. //
    var items = parent.getElementsByTagName("li"); // ..hämtar alla list items in i en nodelist //
    var pickedIndex = null
    for (var i = 0; i < items.length; ++i) { // for loop som kollar vilket av dessa som matchar det användaren klickade på.. //
        var item = items[i]
        if (item === element) {
            pickedIndex = i // och sätter dess list index till en var //
            break
        }
    }
    if (pickedIndex || pickedIndex === 0) { // om pickedIndex finns eller är 0 så... //
        var targetList = document.getElementById("showBig"); // ..hämtas listan listan "showBig".. //
        var targetElement = targetList.children.item(pickedIndex) // och det item som har rätt index hämtas //
        if (targetElement) {
            targetElement.style.display = 'block' // ändrar detta items display atribute till block //
        }
    }
}
function selectSize(element){ //funktion liknande showPicked() men för att göra den valda "storleken" i fet stil.
    deselectAll()
    element.classList.add('size-active')
}
function deselectAll(){
    var parent = document.getElementById('sizes')
    var items = parent.children;
    for (var i = 0; i < items.length; ++i) { // for loop som.. 
        var element = items[i]
        element.classList.remove('size-active')
        //element.style.fontWeight = 'normal' // ändrar fontWeight till 'normal'
    } 
}
function addToCart(){
    var button = document.getElementById('addToCartButton')
    button.innerText='ADDED'
    button.disabled=true
}