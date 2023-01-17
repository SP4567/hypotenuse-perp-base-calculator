//hypotenuse
document.getElementById("submitbtn").onclick = function(){
let a;
let b;
let c;
a = document.getElementById("a text box").value;
a = Number(a);
b = document.getElementById("b text box").value;
b = Number(b);
c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
document.getElementById("clabel").innerHTML = "Hypotenuse: "+ c;
}
//perpendicular
document.getElementById("submitbtn1").onclick = function(){
    let e;
    let f;
    let g;
    f = document.getElementById("f text box").value;
    f = Number(f);
    g = document.getElementById("g text box").value;
    g = Number(g);
    e = Math.sqrt(Math.pow(g,2)-Math.pow(f,2));
    document.getElementById("elabel").innerHTML = "Perpendicular: "+ e;
}
//base
document.getElementById("submitbtn2").onclick = function(){
    let h;
    let i;
    let j;
    h = document.getElementById("h text box").value;
    h = Number(h);
    i = document.getElementById("i text box").value;
    i = Number(i);
    j = Math.sqrt(Math.pow(i,2)-Math.pow(h,2));
    document.getElementById("jlabel").innerHTML = "Base: "+ j;
}
