function getInputValueById(inputId){
    const inputValue = document.getElementById(inputId);
    const getInputValue = inputValue.value;
    const getInputValueNumber = parseFloat(getInputValue);
    inputValue.value = " ";
    return getInputValueNumber;
};

function setInnerTextById(textId, area){
    const getTextId = document.getElementById(textId);
    getTextId.innerText = area;
};

function addToCalculationEntry(areaType, area){
    // console.log(areaType + " " + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}.${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}