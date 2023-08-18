function triangleCalculate(){
   const base = getInputValueById('base-input');
   const height = getInputValueById('height-input');

   if(isNaN(base) || isNaN(height)){
      alert('Please insert a number');
      return;
   }

   const area = 0.5 * base * height;

   setInnerTextById('set-area', area);

   addToCalculationEntry('Triangle', area);
};

function rectangleCalculate(){
   const width = getInputValueById('width-input');
   const lenght = getInputValueById('length-input');

   if(isNaN(width) || isNaN(lenght)){
      alert('Please insert a number');
      return;
   }

   const area = width * lenght;

   setInnerTextById('set-area-ractangle', area);

   addToCalculationEntry('Rectangle', area);
};

function parallelogramCalculate(){
    const baseParalla = getInputValueById('parall-base-input');
    const heightParalla = getInputValueById('parall-height-input');

    if(isNaN(baseParalla) || isNaN(heightParalla)){
      alert('Please insert a number');
      return;
   }

    const area = baseParalla * heightParalla;

    setInnerTextById('set-area-paralla',area);

    addToCalculationEntry('Parallelogram', area);
};


function ellipseCalculate(){
   const major = getInputValueById('semi=major-input');
   const minor = getInputValueById('semi-minor-input');

   if(isNaN(major) || isNaN(minor)){
      alert('Please insert a number');
      return;
   }

   const area = Math.PI * major * minor;

   const areaToFixed = area.toFixed(2);

   setInnerTextById('set-area-ellipse', areaToFixed);

   addToCalculationEntry('Ellipse', areaToFixed);
};