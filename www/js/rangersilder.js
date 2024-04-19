function rangeslider(slide_value, id_string) {
    if (id_string == "value_hydration" || id_string == "value_salt"){
        appendix_string = "%"
        if (id_string == "value_salt"){
            slide_value = slide_value/10
        }
    }
    else {
        appendix_string = "g"
    }
    document.getElementById(id_string).innerHTML = slide_value + appendix_string; 
}
