function bissexto (ano) 
{
let resposta
if (4%ano===0) {resposta="O ano é bissexto."}
else if (4%ano!==0) {resposta="O ano não é bissexto."}
return resposta
}

function bissexto2 (ano) 
{
if (4%ano===0) {return true}
else if (4%ano!==0) {return false}
}
