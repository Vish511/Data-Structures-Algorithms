function shiftLetters(str,n) {
    var out = "";
   for(var i = 0; i < str.length; i++) {
       if(str[i] != " ") {
           var nextChar = str[i].charCodeAt() + 3
            out += String.fromCharCode(nextChar);
       }else {
           out += str[i]
       }
   }
   console.log(out)
}

shiftLetters("sky Is Blue",3)