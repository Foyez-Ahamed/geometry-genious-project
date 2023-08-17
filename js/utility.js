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