// start calculator
const productIds = {
    am: 'bronze12',
    bem: 'bronze12',
    an: 'silver12',
    ben: 'silver12',
    ao: 'gold12',
    beo: 'gold12',
    bep: 'no product',
    bfm: 'bronze23',
    cem: 'bronze23',
    bfn: 'silver23',
    cen: 'silver23',
    bfo: 'gold23',
    ceo: 'gold23',
    bfp: 'platinum23',
    cep: 'platinum23',
    cfm: 'bronze34',
    dem: 'bronze34',
    cfn: 'silver34',
    den: 'silver34',
    cfo: 'gold34',
    deo: 'gold34',
    cfp: 'platinum34',
    dep: 'platinum34',
    dfm: 'bronze46',
    dfn: 'silver46',
    dfo: 'gold46',
    dfp: 'platinum46'
};
const radioRow1 = [{ label: 'НЕТ', value: 'e', name: 'row1' }, { label: 'ДА', value: 'f', name: 'row1' }, ];
const radioRow2 = [{ label: 'Бронзовый пакет', value: 'm', name: 'row2' }, { label: 'Серебряный пакет', value: 'n', name: 'row2' }, { label: 'Золотой пакет', value: 'o', name: 'row2' }];
const radioRow3 = [{ label: 'Бронзовый пакет', value: 'm', name: 'row3' }, { label: 'Серебряный пакет', value: 'n', name: 'row3' }, { label: 'Золотой пакет', value: 'o', name: 'row3' }, { label: 'Платиновый пакет', name: 'row3', value: 'p' }, ];
const Packet = {
  title: 'Выберите пакет, который подходит для ваших целей и бюджета.',
  class: 'title-class',
  id: 'packet-title',
};
const Speach = {
  title: 'Попробуйте определить, соответствует ли речь вашего ребёнка его возрасту? Если затрудняетесь, выбирайте "ДА".',
  class: 'title-class',
  id: 'speach-title',
};

const doMagic = () => {
    const result = document.getElementById('result');
    if(result.hasChildNodes) removeChildren('result',true);
    const resultTitle = document.createElement('h1');
    const resultButton = document.createElement('button');
    const resultLink = document.createElement('a');
    resultTitle.setAttribute('class', 'title-class');
    let sum = '';
    sum = calculateResult();
    resultTitle.innerHTML = 'Пожалуйста, кликните на кнопку внизу, чтобы ознакомиться с вашим выбором.';
    resultLink.href = `http://vikaraskina.com/product/${productIds[sum]}/`;
    resultLink.target = '_blank';
    resultButton.setAttribute('class', 'result-button');
    resultButton.innerHTML = 'Посмотреть ваш выбор';
    result.appendChild(resultTitle);
    result.appendChild(resultLink);
    resultLink.appendChild(resultButton);
    console.log('result is: ', productIds[sum]);
};

const getRowCreated = (idParent, idChild, arrayName, title, titleClass, titleId, calculate, remove, fn, id3, id4, array2) => {
  const parentDiv = document.getElementById(idParent);
  const child = document.getElementById(idChild);
  const childTitle = document.getElementById(titleId);
  if (parentDiv.hasChildNodes() && child && idChild === 'radioRow3' && document.getElementById('radioRow1')) {
    child.remove();
    removeChildren('result', true);
  }
  if (parentDiv.hasChildNodes() && childTitle && titleId === 'packet-title') {
    childTitle.remove();
  }
  const childDiv = document.createElement('div');
  childDiv.setAttribute('id', idChild);
  childDiv.setAttribute('class', 'calculator-cont-child');
  const childDivTitle = document.createElement('h3');
  childDivTitle.setAttribute('class', titleClass);
  childDivTitle.setAttribute('id', titleId);
  childDivTitle.innerHTML = title;
  if (parentDiv) {
    parentDiv.appendChild(childDivTitle);
    parentDiv.appendChild(childDiv); 
  }
  arrayName.forEach(radioValue => {
      let labelValue = document.createElement('label')
      labelValue.innerHTML = radioValue.label;
      const inputValue = document.createElement('input');
      inputValue.type = 'radio';
      inputValue.name = radioValue.name;
      inputValue.value = radioValue.value;
      if (fn) {
          inputValue.addEventListener('click', function() {
              let result = calculateResult();
              if (result == 'be') {
                  getRowCreated(id3, id4, radioRow2, Packet.title, Packet.class, Packet.id, true, false);
              } else {
                  getRowCreated(id3, id4, array2, Packet.title, Packet.class, Packet.id, true, false);
              }
          });
      }
      if (calculate) {
        inputValue.onclick = doMagic;
      }
      childDiv.appendChild(labelValue);
      childDiv.appendChild(inputValue);
    });
};

const eraseResult = id => {
  const result = document.getElementById(id);
  if (result != null) {
    result.innerHTML = '';
  }
}

const removeChildren = (id, remove) => {
    const parentDiv = document.getElementById(id);
    if (remove && parentDiv && parentDiv.hasChildNodes()) {
        while (parentDiv.firstChild) {
            parentDiv.removeChild(parentDiv.firstChild);
        }
    }
};

const calculateResult = () => {
    let elem = document.getElementById('container-calc').getElementsByTagName('input');
    let prodId = '';
    for (i = 0; i < elem.length; i++) {
        if ((elem[i].type = 'radio') && (elem[i].checked)) {
            prodId += elem[i].value;
        }
    }
    return prodId;
};

function createRadio(id1, id2, array, fn, id3, id4, array2) {
  removeChildren('result', true);
  removeChildren(id1, true);
  getRowCreated(id1, id2, array, Speach.title, Speach.class, Speach.id, false, true, fn, id3, id4, array2);
};

function createRadio1(id1, id2, arr) {
  removeChildren('result', true);
  removeChildren(id1, true);
  getRowCreated(id1, id2, arr, Packet.title, Packet.class, Packet.id, true, true);
};
// end calculator