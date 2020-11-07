Array.from(document.querySelectorAll (".navigation-button")).forEach((item)=>{
    item.onclick=()=>{
        item.parentElement.parentElement.classList.toggle("change")
    
    }
})
var container = document.getElementById('changeText');

var things = ['We write code on the Internet...', 'The web is our passion, and We want to make a difference'];
var t = -1;
var thing = '';
var message = container.innerHTML;
var mode = 'write';
var delay = 1500;

function updateText(txt) {
    container.innerHTML = txt;
}

function tick() {

    if(container.innerHTML.length == 0) {
        t++;
        thing = things[t];
        message = '';
        mode = 'write';
    }

    switch(mode) {
        case 'write' :
            message += thing.slice(0, 1);
            thing = thing.substr(1);

            updateText(message);

            if(thing.length === 0 && t === (things.length - 1)) {
            window.clearTimeout(timeout);
            return;
            }

            if(thing.length == 0){
                mode = 'delete';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 40);
            }

            break;

        case 'delete' :
            message = message.slice(0, -1);
            updateText(message);

            if(message.length == 0)
            {
                mode = 'write';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 100);
            }
            break;
    }

    timeout = window.setTimeout(tick, delay);
}

var timeout = window.setTimeout(tick, delay);


