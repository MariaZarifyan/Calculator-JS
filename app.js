

function display(symbol){
    let displayedSymbols = document.form.textview.value;
    if (displayedSymbols.length <= 16){
        document.form.textview.value = document.form.textview.value + symbol
    } else {
        document.form.textview.value = displayedSymbols
    }
}

function cleanScreen(){
    document.form.textview.value = ""
}

function back(){
    let displayedSymbols = document.form.textview.value;
    document.form.textview.value = displayedSymbols.substring(0, displayedSymbols.length-1);
}

function numOfDecimals(floatNum){
    let decimals = floatNum.toString().substring(floatNum.toString().lastIndexOf(".")+1, floatNum.toString().length+1)
    return decimals.length
}

function result(){
    let displayedSymbols = document.form.textview.value;
    if (displayedSymbols){

        let result = eval(displayedSymbols);
        if (Number(result) === result && result % 1 !== 0){
            if (numOfDecimals(result)>8){
                document.form.textview.value = result.toFixed(4);
            } else {
                document.form.textview.value = result;
            }
        } else {
            document.form.textview.value = result;
        }   
    }
}

