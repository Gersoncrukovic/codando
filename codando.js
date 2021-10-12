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
