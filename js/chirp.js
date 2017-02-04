function chirp(n){
    if(n === 1){
        return "chirp ";
    }
    let string = "chirp ";
    return string + chirp(--n);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});