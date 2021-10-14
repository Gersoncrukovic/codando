//contador
var cont = 0;
    var interval = setInterval(()=>{
        
         headerzin = document.querySelector('#post-57 > div > div > div > div > section > div > div > div > div > div > div.elementor-element.elementor-element-4542b098.elementor-button-align-center.elementor-tablet-button-align-stretch.elementor-mobile-button-align-stretch.elementor-widget.elementor-widget-form > div > form > div.elementor-message.elementor-message-success');
        console.log(cont)
        cont = cont += 1

        if(headerzin || cont >= 10){
            clearInterval(interval)
            console.log('Eu estou vivo!');
        }

    },1000)

    //form simples com submit
    document.addEventListener('submit', function(){
    console.log('form foi');
});


//validação de campos
var name = document.querySelector("#name").value
if(name.length>0){
console.log('foi');
}

//whatsapp pelo Getelementbyclass
document.getElementsByClassName('joinchat__button')[0].addEventListener('click', function(){
console.log('whatsfoi');

});

//whats querySelector
document.querySelector('body > div.joinchat.joinchat--right.joinchat--show > div > div.joinchat__button__open').addEventListener('click', function(){
console.log('outrojeitowhats');
});

<!-- click no botão whatsapp OU wa.me -->
<script>
window.addEventListener('DOMContentLoaded', function() {
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++){
links[i].addEventListener('click', function(e){
if(e && this.href.match('whatsapp.com') ||e && this.href.match('wa.me')){
console.log('Whats OU Wa.me')
}
});
};
});
</script>

//prompt site bonecos.com
document.querySelector("#windowFooter > div > input").addEventListener('click', function(){
var caixa = document.getElementById('messageBoxWindow').innerText
var texto = 'Sua mensagem foi registrada!\nObrigado por falar conosco!'
if(caixa.includes(texto)){
console.log(texto);
}

})


//dois botões iguais de mesma classe 
<script>
  var btnEnviar =  document.querySelectorAll('.btnacao')[0];
  var btnAtendimento = document.querySelectorAll('.btnacao')[1];
  btnEnviar.addEventListener('click', function(){
    dataLayer.push({'event':'btnEnviar'})
  });
  btnAtendimento.addEventListener('click', function(){
    dataLayer.push({'event':'btnAtendimento'})
  });
</script>
