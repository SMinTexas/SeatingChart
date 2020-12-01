

function determineSeating(arr) {
    let chairCount = arr[0];
    let chairArray = [];
    let occArray = arr.slice(1)
    let tempArray = [];
    let arrayPair = [];
    let rowCount = chairCount / 2;
    let colCount = 2;
    let rowArray = [];
    let colArray = [];
    let x;
    let y;
    let z;
    let element;
    let minCol1;
    let minCol2;
    let maxCol1;
    let maxCol2;

    //build the chair array
    for (var i = 0; i < chairCount; i++) {
        chairArray.push(i+1);
    }

    //determine minimum and maximum seat numbers per column
    minCol1 = Math.min(...chairArray);
    minCol2 = minCol1 + 1;
    maxCol2 = Math.max(...chairArray);
    maxCol1 = maxCol2 - 1;

    //build the array of row pairs
    for (var i = 0; i < chairCount - 1; i+=2) {
        x = chairArray[i];
        y = chairArray[i+1];
        rowArray.push('('+ x + ', ' + y + ')');
    }

    //build an array of row pairs that include an occupied seat
    for (var i = 0; i < occArray.length; i++) {
        if (occArray[i] % 2 == 0) {
            z = occArray[i] - 1;
            element = '(' + z + ', ' + occArray[i] + ')';
            arrayPair.push(element);
        }
        if (occArray[i] % 2 != 0) {
            z = occArray[i] + 1;
            element = '(' + occArray[i] + ', ' + z + ')';
            arrayPair.push(element);
        }
    }

    //remove occupied pairs from the row array
    for (var i = 0; i < arrayPair.length; i++) {
        for (var j = 0; j < rowCount; j++) {

            if (rowArray[j] == arrayPair[i]) {
                rowArray.splice(rowArray.indexOf(arrayPair[i]),1);
            }
        }
    }

    //build the array of columns
    for (var i = 0; i < chairCount - 2; i++) {
        colArray.push('(' + chairArray[i] + ', ' + chairArray[i+2] + ')');
    }

    //build an array of pairs that include an occupied seat
    arrayPair = [];
    for (var i = 0; i < occArray.length; i++) {
        if (occArray.length == 1) {
            if (occArray[i] % 2 == 0) {
                z = occArray[i] - 2;
                element = '(' + z + ', ' + occArray[i] + ')';
                arrayPair.push(element);
                z = occArray[i] + 2;
                element = '(' + occArray[i] + ', ' + z + ')';
                arrayPair.push(element);
            }
        } else {
            if (occArray[i] == minCol1 || occArray[i] == minCol2) {
                z = occArray[i] + 2;
                element = '(' + occArray[i] + ', ' + z + ')';
                arrayPair.push(element);
            }
            if (occArray[i] == maxCol1 || occArray[i] == maxCol2) {
                z = occArray[i] - 2;
                element = '(' + z + ', ' + occArray[i] + ')';
                arrayPair.push(element);
            }
            if (occArray[i] % 2 == 0 && occArray[i] != minCol2) {
                z = occArray[i] - 2;
                element = '(' + z + ', ' + occArray[i] + ')';
                arrayPair.push(element);
                z = occArray[i] + 2;
                element = '(' + occArray[i] + ', ' + z + ')';
                arrayPair.push(element);
            }
            if (occArray[i] % 2 != 0 && occArray[i] != minCol1) {
                z = occArray[i] + 2;
                element = '(' + occArray[i] + ', ' + z + ')';
                arrayPair.push(element);
                z = occArray[i] - 2;
                element = '(' + z + ', ' + occArray[i] + ')';
                arrayPair.push(element);
            }
        }

    }

    //remove occupied pairs from the column array
    for (var i = 0; i < arrayPair.length; i++) {
        for (var j = 0; j < colArray.length; j++) {

            if (colArray[j] == arrayPair[i]) {
                colArray.splice(colArray.indexOf(arrayPair[i]),1);
            }
        }
    }

    tempArray.push(rowArray);
    tempArray.push(colArray);
    tempArray.sort();

    return tempArray;
}





seatingArray = [6,4];
console.log(determineSeating(seatingArray));
seatingArray = [8,1,8];
console.log(determineSeating(seatingArray));
seatingArray = [24,1,6,8,15,19];
console.log(determineSeating(seatingArray));
seatingArray = [24,1,2,23,24];
console.log(determineSeating(seatingArray));
seatingArray = [10,3,5,8];
console.log(determineSeating(seatingArray));





