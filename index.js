const productIds = {am: '77412', bem: '77412', an: '77431', ben: '77431', ao: '77441', beo: '77441', bep: 'no product', bfm: '77428',
cem: '77428', bfn: '77432', cen: '77432', bfo: '77442', ceo: '77442', bfp: '77445', cep: '77445', cfm: '77429', dem: '77429', cfn: '77433', den: '77433', cfo: '77443', deo: '77443', cfp: '77446', dep: '77446', dfm: '77430', dfn: '77440', dfo: '77444', dfp: '77447'};
const radioRow1 = [{label:'Речь не развита по возрасту', value:'e', name: 'row1'}, {label:'Речь развита по возрасту', value:'f', name:'row1'},];
const radioRow2 = [{label: 'Бронзовый пакет', value:'m', name: 'row2'}, {label: 'Серебряный пакет', value:'n', name: 'row2'}, {label: 'Золотой пакет', value:'o', name: 'row2'}];
const radioRow3 = [{label: 'Бронзовый пакет', value:'m', name: 'row3'}, {label: 'Серебряный пакет', value:'n', name: 'row3'}, {label: 'Золотой пакет', value:'o', name: 'row3'},{label: 'Платиновый пакет', name: 'row3', value: 'p'},];

function doMagic() {
  const result = document.getElementById('result');
  const resultTitle = document.createElement('h1');
  const resultValue = document.createElement('span');
  let elem = document.getElementsByTagName('input');
  let sum = '';
  for(i=0; i<elem.length; i++) {
    if(elem[i].type='radio') {
      if(elem[i].checked) {
        sum += elem[i].value;
        resultTitle.innerHTML='Вам нужно до хрена прикупить!';
        resultValue.innerHTML=`[products columns=3 ids="${productIds[sum]}"]`;
      }
    }
  }
  result.appendChild(resultTitle);
  result.appendChild(resultValue);
}

const getRowCreated = (idParent, idChild, arrayName, calculate, remove, fn, id3, id4, array2) => {
  eraseResult('result');
  const childDiv = document.createElement('div');
  childDiv.setAttribute('id', idChild);
  const parentDiv = document.getElementById(idParent);
  removeChildren(idParent, remove);
  if(parentDiv) {
    parentDiv.appendChild(childDiv);
  }
  arrayName.forEach(radioValue => {
    let labelValue = document.createElement('label')
    labelValue.innerHTML = radioValue.label;
    const inputValue = document.createElement('input');
    inputValue.type = 'radio';
    inputValue.name = radioValue.name;
    inputValue.value = radioValue.value;
    if(fn) {
      inputValue.addEventListener('click', function() {
        calculateResult();
        getRowCreated(id3, id4, array2, true, false);
      });
    }
    if(calculate) inputValue.onclick = doMagic;
    childDiv.appendChild(labelValue);
    childDiv.appendChild(inputValue);
  });
};

const eraseResult = id => {
  const result = document.getElementById(id);
  result.innerHTML='';  
}

const removeChildren = (id, remove) => {
  const parentDiv = document.getElementById(id);
  if (remove && parentDiv && parentDiv.hasChildNodes()) {
    while (parentDiv.firstChild) {
      parentDiv.removeChild(parentDiv.firstChild);
      console.log('removed');
    }
  }
};

const calculateResult = () => {
  let elem = document.getElementsByTagName('input');
  let sum = '';
  for(i=0; i<elem.length; i++) {
    if(elem[i].type='radio') {
      if(elem[i].checked) {
        sum += elem[i].value;
      }
    }
  }
  console.log('sum before return', sum);
  return sum;
}

function createRadio(id1, id2, array, fn, id3, id4, array2) {
  console.log('executed0');
  getRowCreated(id1, id2, array, false, true, fn, id3, id4, array2);
};

function createRadio1(id1, id2, arr) {  
  console.log('executed1');
  getRowCreated(id1, id2, arr, true, true);
};

function createRadio2(id1, id2, array, fn, id3, id4, array2, id5, array3) {
  console.log('executed2');
  eraseResult('result');
  let result = calculateResult();
  if (result === 'b') {
    calculateResult();
    if(result === 'bf'){
    getRowCreated(id1, id2, array, false, true, fn, id3, id4, array2);
    } else {
      getRowCreated(id1, id2, array, false, true, fn, id3, id5, array3);
    }
  }
};