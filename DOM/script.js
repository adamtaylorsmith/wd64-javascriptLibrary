//console.log('hi');
//console.log(document);
//console.log(document.body);

//document.getElementById('testParagraph').style.color = 'blue';
let testPara = document.getElementById('testParagraph')
testPara.style.color = 'blue';
console.log(testPara);
//console.dir(testPara);

console.log(document.querySelectorAll('p.sampleClass'));
document.querySelectorAll('p.sampleClass')[2].innerText = 'change the text';
document.querySelectorAll('p.sampleClass')[2].id = 'No 3';

let changeAll = document.querySelectorAll('p.sampleClass');
changeAll.forEach(pTag => {
    pTag.innerText = "text has changed using forEach method, innerText";
    //pTag.textContent = "text has changed using forEach method, textContent";
    //pTag.innerHTML = "text has changed using forEach method, innerHTML";
})

let showSpan = document.getElementById('spanTest');
console.log(showSpan.innerText);
console.log(showSpan.textContent);
console.log(showSpan.innerHTML);
/* 
-INNERTEXT simply reference or allows us to change the text of a specified element. Will return only visable text in a 'node'.
-TEXTCONTENT does the same, but will return the full text of a 'node'.
-INNERHTML allows us to set text as well as HTML elements, nested inside the current HTML element we are referencing.
*/

//! 3: ADDEVENTLISTENER - click
let btn = document.getElementById('clickThis');
console.log(btn);

btn.addEventListener('click', event => {
    event.target.style.backgroundColor = 'lightblue';
    event.target.innerText = 'CLICKED'
    console.log(btn)
});
//! CHALLENGE
/* 
    - Create a variable that holds the button element (may need to comment out the above code)
    - Using that variable, make the button toggle between red and blue when clicked.
*/
// let red = true;

btn.addEventListener('click', event => {
    event.target.style.backgroundColor = red ? 'blue' : 'red';
    red = !red;
});

//! 4: ADDEVENTLISTENER - keyup
let input = document.getElementById('nameInput');
input.addEventListener('keyup', e => {
    console.log(e.target.value);
    //console.log(document.getElementsByTagName('p'))
    document.getElementsByTagName('p')[0].innerText = 'Something Changed!';
    if(e.target.value == '') {
        document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed...'
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value}`;
    }
});