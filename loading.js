var i = 0;
var e = 0;
var text = "/////////////";
function type() {

    if (i < text.length){
        document.getElementById("bar").innerHTML += text.charAt(i);
        i++;
        e++;
        if (e > 28 & text.charAt(i) == " "){
            document.getElementById("bar").innerHTML += "<br>";
            e = 0;
        }
        setTimeout(type, 900);
    }
    else{
        window.location.replace("wrapped.html");
    }
}
document.onload = setTimeout(type, 200);
