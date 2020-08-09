

var questions = [
    {
        q:'what is ram?',
        anwser:'Random Access Memory',
        options:[
            'Random Access Memory',
            'Random alternative memory',
            'Random accessible mamory']
},
    {
        q:'what is name?',
        anwser:'afnan',
        options:[
            'roman',
            'afnan',
            'nadeem']
},
    {
        q:'what is age?',
        anwser:'afnan',
        options:[
            'roman',
            'afnan',
            'nadeem']
},

]
var qNum =1;
var score =0;
var checkVal=0;
function validate(){
    if (checkVal < questions.length){
    var getActive = document.getElementsByClassName('active')[0];
    if(getActive.innerHTML ===questions[checkVal].anwser){
        score+=10;
    }
    checkVal++;
}
}


function nextQuestion(){
    var getActive = document.getElementsByClassName('active')[0];
    if(getActive!== undefined)
    validate();
    removeActive()
    if (qNum < questions.length){
    var getTitile = document.getElementsByClassName('card-title')[0];
        getTitile.innerHTML = questions[qNum].q;
        
    var getOptions = document.getElementsByClassName('card-text');
    for(var i=0; i<getOptions.length; i++){
        getOptions[i].innerHTML = questions[qNum].options[i];
    }
    // else{
    //     validate();
    // }
    qNum++;
}
    
else{
    var getCard = document.getElementsByClassName('card')[0];
    getCard.style.display = 'none'
    var remBtn = document.getElementsByTagName('button')[0]
    remBtn.setAttribute('class','rembtn')
    var parent = document.getElementsByClassName('center')[0]
    var createResultBtn = document.createElement('button')
    createResultBtn.setAttribute('class','result btn btn-primary')
    var textNode = document.createTextNode('Result')
    createResultBtn.setAttribute('onclick','showResult()')
    createResultBtn.appendChild(textNode);
    parent.appendChild(createResultBtn);
}
}

function showResult(){
    // var getCard = document.getElementsByClassName('card')[0];
    // getCard.style.display = 'none'
    var getResult = document.getElementById('result');
    score = score/questions.length;
    getResult.innerHTML = score*10
}

function defaultQ(){
    var getTitile = document.getElementsByClassName('card-title')[0];
    getTitile.innerHTML = questions[0].q;
    var getOptions = document.getElementsByClassName('card-text');
    for(var i=0; i<getOptions.length; i++){
        getOptions[i].innerHTML = questions[0].options[i];
    }
    // ++qNum;
       
}
function activePut(e){
    removeActive()
    e.classList.add('active')      
}
function removeActive(){
    var getActive = document.getElementsByClassName('active')
    for(var i=0; i<getActive.length; i++){
    getActive[i].classList.remove('active')
}
}