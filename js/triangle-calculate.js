function triangleCalculate()
{
    const triangleBaseInput= parseFloat((document.getElementById('triangle-base')).value);
    const triangleHeightInput= parseFloat((document.getElementById('triangle-height')).value);
    const area=0.5* triangleBaseInput*triangleHeightInput;

    document.getElementById('triangle-result-display').innerText=area;
}


function rectangularCalculate()
{
    const rectangularWeightInput= parseFloat((document.getElementById('rectangular-weight')).value);
    const rectangularLengthInput= parseFloat((document.getElementById('rectangular-length')).value);
    const area=rectangularWeightInput*rectangularLengthInput;

    document.getElementById('rectangular-result-display').innerText=area;
}


function parallelogramCalculate()
{
    const parallelogramBaseInput= parseFloat((document.getElementById('parallelogram-base')).value);
    const parallelogramHeightInput= parseFloat((document.getElementById('parallelogram-height')).value);
    const area=parallelogramBaseInput*parallelogramHeightInput;

    document.getElementById('parallelogram-result-display').innerText=area;
}




function rhombusCalculate()
{
    const diagonalOneInput= parseFloat((document.getElementById('diagonal-one')).value);
    const diagonalTowInput= parseFloat((document.getElementById('diagonal-tow')).value);
    const area=(diagonalOneInput*diagonalTowInput)/2;

    document.getElementById('rhombus-result-display').innerText=area;
}



function pentagonCalculate()
{
    const sideLengthInput= parseFloat((document.getElementById('pentagon-side-length')).value);
    const area= 0.25 * 6.8819 * (sideLengthInput*sideLengthInput);

    document.getElementById('pentagon-result-display').innerText=area.toFixed(2);
}


function ellipseCalculate()
{
    const semiMajorInput= parseFloat((document.getElementById('semi-major')).value);
    const semiMinorInput= parseFloat((document.getElementById('semi-minor')).value);
    const area= 3.1416 * (semiMajorInput*semiMinorInput);

    document.getElementById('ellipse-result-display').innerText=area.toFixed(2);
}