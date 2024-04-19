function getWater_ml(id_string, id_flour, id_hydration, id_starter){
    
    flour_g = document.getElementById(id_flour).value;
    hydration = document.getElementById(id_hydration).value;
    starter_g = document.getElementById(id_starter).value;
    bakers_pcntg = (1 + (1 * hydration/100) + (starter_g/flour_g));
    water = ((flour_g * hydration/100) - ((starter_g/2)*(1-hydration/100)));
    document.getElementById(id_string).innerHTML = "Water = " + water.toFixed() + "g"; 
}

function getSalt_g(id_string, id_flour, id_salt){
    flour_g = document.getElementById(id_flour).value;
    salt_pcnt = document.getElementById(id_salt).value/1000;
    salt_g = flour_g*salt_pcnt; 
    document.getElementById(id_string).innerHTML = "Salt = " + salt_g.toFixed() + "g";
}

