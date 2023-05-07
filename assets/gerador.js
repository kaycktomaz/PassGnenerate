    // RECEBENDO VALORES

    let Slide = document.getElementById('range');
    let ValuePassword = document.getElementById('value')
    let Button = document.getElementById('button');
    let PassWord = document.getElementById('password')
    let ContainerPassoword = document.getElementById('container-passwords')

    // Algoritimos

    let CharSet = 'abcdefghijklmnopqrstuvyxwzABCDEFGHIJKLKMNOPQRSTUVYXWZ123456789';
    let NeWPassoword = "";

  ValuePassword.innerHTML = ValuePassword.value;

  Slide.oninput = function(){
    ValuePassword.innerHTML = this.value;
  }

  function generate(){
    let pass = "";
    
    for(let i = 0, n = CharSet.length; i < Slide.value; ++i){
        pass += CharSet.charAt(Math.floor(Math.random() * n));

    }
    ContainerPassoword.classList.remove('hide');
    PassWord.innerHTML = pass;
  }

const Mode = document.getElementById("dark");
Mode.addEventListener("click", () =>{
    
    
})

