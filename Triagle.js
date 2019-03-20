function drawTriagle(symbol,number){
  if(number<3) {
    for(let i=1; i<=3;i++){
    let triagle=symbol.repeat(i)
    console.log(triagle)
  } 
}
  else {
    for(let i=1; i<=number;i++){
    let triagle=symbol.repeat(i)
    console.log(triagle)}
  }
}
drawTriagle("$",5)