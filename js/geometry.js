function triangleCalculate(){
   const base = getInputValueById('base-input');
   const height = getInputValueById('height-input');

   const area = 0.5 * base * height;

   setInnerTextById('set-area', area);
};

function rectangleCalculate(){
   const width = getInputValueById('width-input');
   const lenght = getInputValueById('length-input');

   const area = width * lenght;

   setInnerTextById('set-area-ractangle', area);
};

function parallelogramCalculate(){
    const baseParalla = getInputValueById('parall-base-input');
    const heightParalla = getInputValueById('parall-height-input');

    const area = baseParalla * heightParalla;

    setInnerTextById('set-area-paralla',area);
};