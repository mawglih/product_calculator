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
const radioRow1 = [{ label: 'Речь не развита по возрасту', value: 'e', name: 'row1' }, { label: 'Речь развита по возрасту', value: 'f', name: 'row1' }, ];
const radioRow2 = [{ label: 'Бронзовый пакет', value: 'm', name: 'row2' }, { label: 'Серебряный пакет', value: 'n', name: 'row2' }, { label: 'Золотой пакет', value: 'o', name: 'row2' }];
const radioRow3 = [{ label: 'Бронзовый пакет', value: 'm', name: 'row3' }, { label: 'Серебряный пакет', value: 'n', name: 'row3' }, { label: 'Золотой пакет', value: 'o', name: 'row3' }, { label: 'Платиновый пакет', name: 'row3', value: 'p' }, ];

const doMagic = () => {
    const result = document.getElementById('result');
    const resultTitle = document.createElement('h1');
    const resultButton = document.createElement('button');
    const resultLink = document.createElement('a');
    let sum = '';
    console.log('sum cleared2', sum);
    sum = calculateResult();
    console.log('sum after calc', sum);
    console.log('product', productIds[sum])
    resultTitle.innerHTML = 'Вам нужно до хрена прикупить!';
    resultLink.href = `http://vikaraskina.com/product/${productIds[sum]}/`;
    resultLink.target = '_blank';
    resultButton.setAttribute('class', 'result-button');
    resultButton.innerHTML = 'Посмотреть ваш выбор';
    result.appendChild(resultTitle);
    result.appendChild(resultLink);
    resultLink.appendChild(resultButton);
};

const getRowCreated = (idParent, idChild, arrayName, calculate, remove, fn, id3, id4, array2) => {
    eraseResult('result');
    removeChildren(id3, true);
    const childDiv = document.createElement('div');
    childDiv.setAttribute('id', idChild);
    childDiv.setAttribute('class', 'calculator-cont-child');
    const parentDiv = document.getElementById(idParent);
    removeChildren(idParent, remove);
    if (parentDiv) {
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
                eraseResult('result');
                let result = calculateResult();
                if (result == 'be') {
                    getRowCreated(id3, id4, radioRow2, true, false);
                } else {
                    getRowCreated(id3, id4, array2, true, false);
                }
            });
        }
        if (calculate) inputValue.onclick = doMagic;
        childDiv.appendChild(labelValue);
        childDiv.appendChild(inputValue);
    });
};

const eraseResult = id => {
    const result = document.getElementById(id);
    result.innerHTML = '';
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
    let elem = document.getElementById('container-calc').getElementsByTagName('input');
    let prodId = '';
    for (i = 0; i < elem.length; i++) {
        if ((elem[i].type = 'radio') && (elem[i].checked)) {
            prodId += elem[i].value;
            console.log('prodId:', prodId);
        }
    }
    console.log('sum before return', prodId);
    return prodId;
};

function createRadio(id1, id2, array, fn, id3, id4, array2) {
    console.log('executed0');
    getRowCreated(id1, id2, array, false, true, fn, id3, id4, array2);
};

function createRadio1(id1, id2, arr) {
    console.log('executed1');
    getRowCreated(id1, id2, arr, true, true);
};
// end calculator