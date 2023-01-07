const url =' https://randomuser.me/api/?nat=es ';

window.onload = function(){
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(tomardatos)
    .catch(printError)
}

function handleErrors (res){
  if(!res.ok){
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON (res){
  return res.json();
}

function tomardatos (perfil){
    document.getElementById('foto').style.backgroundImage = "url("+perfil.results[0].picture.large+")";
    document.getElementById('autor-fullname').innerHTML = perfil.results[0].name.first +" "+perfil.results[0].name.last; 
    document.getElementById('autor-age').innerHTML=perfil.results[0].dob.age
    document.getElementById('autor-city').innerHTML = perfil.results[0].location.city+", "+perfil.results[0].location.country;
    document.getElementById('autor-phone').innerHTML = perfil.results[0].phone;
    document.getElementById('autor-email').innerHTML = perfil.results[0].email;
    return 1;
  }

function printError (error){
  console.log(error);
}