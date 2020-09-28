
var num = 0;
function takeANumber( katzDeli){
num++;
  katzDeli.push(num)
  return (`Welcome you are ticket number ${num} in line.`);
  
}

function nowServing(katzDeli){
if(katzDeli.length===0){
    
    return("There is nobody waiting to be served!");
  } else {
  return ( `Currently serving ${katzDeli.shift()}.`);
  }
  }
 

function currentLine(x){
  var i = 0;
  var line = [];
  while (i< x.length){
    line.push(` `+[i+1]+`. ` + x[i]);
    i++;
  }
  if (x.length === 0) {
    return "The line is currently empty.";
  } else
  return("The line is currently:" + line);
}

  
