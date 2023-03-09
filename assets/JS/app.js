
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}
document.getElementById('length').addEventListener('change', charLength);


let upperCase = document.getElementById('uppercase');
let password = "";
let length = document.getElementById('length');
let input= ["Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M"];
let button = document.getElementById('btn').addEventListener('click', e =>{
    for (var input = 0; input < length; input++) {
    password += input.charAt(Math.floor(Math.random() * input.length));
    }
    return password;
})
    
