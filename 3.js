

let h1Element=document.createElement('h1');
h1Element.textContent='Wellcome ';
let containerElement=document.getElementById('myContainer')
containerElement.appendChild(h1Element);

//button
let buttonElement=document.createElement('button');
buttonElement.textContent='chainge heading';
containerElement.appendChild(buttonElement);
//onclick event
buttonElement.onclick=function(){
    h1Element.textContent="Welcome to sekhar";
    h1Element.classList.add('heading');

}


//style remove button
let styleRemoveButton=document.createElement('button');
styleRemoveButton.textContent='remove styles';
containerElement.appendChild(styleRemoveButton);
styleRemoveButton.onclick=function(){
    h1Element.classList.remove('heading');
}