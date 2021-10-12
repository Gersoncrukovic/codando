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
