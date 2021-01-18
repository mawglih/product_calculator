function doMagic() {
  const result = document.getElementById('result');
  const resultTitle = document.createElement('h1');
  const resultValue = document.createElement('h2');
  let elem = document.getElementsByTagName('input');
  let sum = '';
  for(i=0; i<elem.length; i++) {
    if(elem[i].type='radio') {
      if(elem[i].checked) {
        sum += elem[i].value;
        result.innerHTML='';    
        resultTitle.innerHTML='Вам нужно до хрена прикупить!';
        resultValue.innerHTML=sum;
      }
    }
  }
  result.appendChild(resultTitle);
  result.appendChild(resultValue);
}
const radioRow1 = [{label:'Речь развита по возрасту', value:'e', name: 'row1'}, {label:'Речь развита по возрасту', value:'f', name:'row1'},];
const radioRow2 = [{label: 'Бронзовый пакет', value:'m', name: 'row2'}, {label: 'Серебряный пакет', value:'n', name: 'row2'}, {label: 'Золотой пакет', value:'o', name: 'row2'}];
const radioRow3 = [{label: 'Бронзовый пакет', value:'m', name: 'row3'}, {label: 'Серебряный пакет', value:'n', name: 'row3'}, {label: 'Золотой пакет', value:'o', name: 'row3'},{label: 'Платиновый пакет', name: 'row3', value: 'p'},];

function createRadio(id1, id2, array, fn, id3, id4, array2) {
  const result = document.getElementById('result');
  result.innerHTML='';  
  const displayDiv = document.getElementById(id1);
  if(displayDiv !=null) {
    displayDiv.innerHTML = '';
  } 
  const radioDiv = document.createElement('div');
  radioDiv.setAttribute('id', id2)
  if(displayDiv !=null) {
    displayDiv.appendChild(radioDiv);
  }
  array.forEach(radioValue => {
    let labelValue = document.createElement('label')
    labelValue.innerHTML = radioValue.label;
    const inputValue = document.createElement('input');
    inputValue.type = 'radio';
    inputValue.name = radioValue.name;
    inputValue.value = radioValue.value;
    inputValue.addEventListener('click', function() {
      createRadio2(id3, id4, array2, fn)
    });
    radioDiv.appendChild(labelValue);
    radioDiv.appendChild(inputValue);
  });
}
function createRadio2(id1, id2, arr) {
  const displayDiv = document.getElementById(id1);
  const result = document.getElementById('result');
  const radioRow = document.getElementById('radioRow3');
  if (radioRow && radioRow.hasChildNodes()) {
    while (radioRow.firstChild) {
      radioRow.removeChild(radioRow.firstChild);
    }
  }
  result.innerHTML='';  
  const radioDiv = document.createElement('div');
  radioDiv.setAttribute('id', id2)
  if(displayDiv !=null) {
    displayDiv.appendChild(radioDiv);
  }
  arr.forEach(radioValue => {
    let labelValue = document.createElement('label')
    labelValue.innerHTML = radioValue.label;
    const inputValue = document.createElement('input');
    inputValue.type = 'radio';
    inputValue.name = radioValue.name;
    inputValue.value = radioValue.value;
    inputValue.onclick = doMagic;
    radioDiv.appendChild(labelValue);
    radioDiv.appendChild(inputValue);
  });
}

function createRadio1(id1, id2, arr) {
  const result = document.getElementById('result');
  const radioRow = document.getElementById('radioRow');
  if (radioRow.hasChildNodes()) {
    while (radioRow.firstChild) {
      radioRow.removeChild(radioRow.firstChild);
    }
  }
  result.innerHTML='';   
  const displayDiv = document.getElementById(id1);
  const radioDiv = document.createElement('div');
  radioDiv.setAttribute('id', id2)
  if(displayDiv !=null) {
    displayDiv.appendChild(radioDiv);
  }
  arr.forEach(radioValue => {
    let labelValue = document.createElement('label')
    labelValue.innerHTML = radioValue.label;
    const inputValue = document.createElement('input');
    inputValue.type = 'radio';
    inputValue.name = radioValue.name;
    inputValue.value = radioValue.value;
    inputValue.onclick = doMagic;
    radioDiv.appendChild(labelValue);
    radioDiv.appendChild(inputValue);
  });
}