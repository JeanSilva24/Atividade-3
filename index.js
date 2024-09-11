window.onload=function (){
    let.saudacao=document.createElement('p')
    let.saudacao=newDate().getHours();
if(horaAtual<12){ saudacao.innerText='Bom dia!' ;}
else if(horaAtual<18){saudacao.innerText='Boa Tarde!';}
else (horaAtual>18) {saudacao.innerText='Boa Noite!'} 
document.querySelector(header).appendChild(saudacao);
}
