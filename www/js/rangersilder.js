function rangeslidervalue_hydration(value) {
    document.getElementById("rangeslidervalue_hydration").innerHTML = value + "%"; 
}
function rangeslider_starter(value) {
    document.getElementById("rangeslidervalue_starter").innerHTML = value + "g"; 
}
function rangeslidervalue_flour(value) {
    document.getElementById("rangeslidervalue_flour").innerHTML = value + "g"; 
}
function rangeslider_salt(value) {
    document.getElementById("rangeslidervalue_salt").innerHTML = value/10 + "%"; 
}

function getWater(flour_g, hydration_pcnt ){
    return (flour_g * hydration_pcnt/100); 
}