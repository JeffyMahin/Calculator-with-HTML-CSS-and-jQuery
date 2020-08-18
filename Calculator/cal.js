var resultField=$("#result");
var flag = 0;
function insertNumber(num) {
    if( flag === 1 )resultField.val("");
    flag = 0;
    var existingNumber= resultField.val();
    resultField.val(existingNumber+num);
}

function clearResult() {
    resultField.val("");
}

function evalResult() {
    var result= eval(resultField.val()) ;
    resultField.val(result);
    flag = 1;

}

function deleteNumber() {
    var presentValue= resultField.val();
    if (presentValue!=''){
        resultField.val(presentValue.slice(0,-1));
    }
}

function piValue() {
    resultField.val(Math.PI.toFixed(3));
    // Math.PI;
}
function eulerValue() {
    resultField.val(Math.E.toFixed(3));
    // Math.PI;
}

function powNumber(num1, num2) {

    resultField.val(Math.pow(num1, num2));
}