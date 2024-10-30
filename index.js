const io=document.getElementById("io");

const h1=document.getElementById("h1")

const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const b3=document.getElementById("b3");
const b4=document.getElementById("b4");
const b5=document.getElementById("b5");
const b6=document.getElementById("b6");
const b7=document.getElementById("b7");
const b8=document.getElementById("b8");
const b9=document.getElementById("b9");
const b0=document.getElementById("b0");
const bp=document.getElementById("b+");
const bm=document.getElementById("b-");
const bd=document.getElementById("b/");
const bmod=document.getElementById("b%");
const bmul=document.getElementById("b*");
const beq=document.getElementById("b=");
const bc=document.getElementById("bc");

let text2="";
let text1="";
let op="";

bc.onclick=function(){
text2="";
text1="";
op="";
io.textContent="0";
}


b1.onclick=function () {
text2=text2+1;
io.textContent=text2;
}

b2.onclick=function () {
text2=text2+2;
io.textContent=text2;
}

b3.onclick=function () {
text2=text2+3;
io.textContent=text2;
}

b4.onclick=function () {
text2=text2+4;
io.textContent=text2;
}

b5.onclick=function () {
text2=text2+5;
io.textContent=text2;
}

b6.onclick=function () {
text2=text2+6;
io.textContent=text2;
}

b7.onclick=function () {
text2=text2+7;
io.textContent=text2;
}

b8.onclick=function () {
text2=text2+8;
io.textContent=text2;
}

b9.onclick=function () {
text2=text2+9;
io.textContent=text2;
}

b0.onclick=function () {
if(io.textContent!=0)
{
	text2=text2+0;
	io.textContent=text2;
}
}

function eqop(){

switch(op)
{
	case "+": text2=Number(text1)+Number(text2);
		  io.textContent=text2;
		  text2=String(text2);
		  text1="";
		  break;
		  
	case "-": text2=Number(text1)-Number(text2);
		  io.textContent=text2;
		  text2=String(text2);
		  text1="";
		  break;
	case "*": text2=Number(text1)*Number(text2);
		  io.textContent=text2;
		  text2=String(text2);
		  text1="";
		  break;
	case "/": text2=Number(text1)/Number(text2);
		  io.textContent=text2;
		  text2=String(text2);
		  text1="";
		  break;
	case "%": text2=Number(text1)%Number(text2);
		  io.textContent=text2;
		  text2=String(text2);
		  text1="";
		  break;
		
}
op="";


}

beq.onclick=eqop;






bp.onclick=function (){

eqop();
if(op!="+" && op!="-" && op!="/" && op!="*" && op!="%" )
{
	
	text1=io.textContent;
	
}
text2="";
io.textContent="+";
op="+";
}

bm.onclick=function (){

eqop();
if(op!="+" && op!="-" && op!="/" && op!="*" && op!="%" )
{
	
	text1=io.textContent;
	
}
text2="";
io.textContent="-";
op="-";
}

bd.onclick=function (){

eqop();
if(op!="+" && op!="-" && op!="/" && op!="*" && op!="%" )
{
	
	text1=io.textContent;
	
}
text2="";
io.textContent="/";
op="/";
}

bmod.onclick=function (){

eqop();
if(op!="+" && op!="-" && op!="/" && op!="*" && op!="%" )
{
	
	text1=io.textContent;
	
}
text2="";
io.textContent="%";
op="%";
}

bmul.onclick=function (){

eqop();
if(op!="+" && op!="-" && op!="/" && op!="*" && op!="%" )
{
	
	text1=io.textContent;
	
}
text2="";
io.textContent="*";
op="*";
}









