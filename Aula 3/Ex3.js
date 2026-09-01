
function callback(){
  console.log("teste");
}

// high order function
function onclick(param){
  let evento = 1;
  if(evento == 1){
    param();
    console.log("chamou o callback");
  }
  console.log("Não chamou o callback")
  
}

//invocando highOrder com a função callback
onclick(callback); //note a ausência dos parênteses em callback