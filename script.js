let numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operator"),
    clearBtns = document.querySelectorAll(".clear-btn"),
    decimalBtn = document.querySelector("#decimal"),
    display = document.querySelector("#display"),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = "";



for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function(e){
        numberPress(e.target.textContent);
    });
}

for(let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener("click", function(e){
        operationPress(e.target.textContent);
    });
}

for(let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener("click", function(e){
        clear(e.target.textContent);
    });
}

decimalBtn.addEventListener("click", decimal);



function numberPress(number) {
    if(MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if(display.value === "0") {
            display.value = number;
        } else {
            display.value += number;
        }
    }
}

function operationPress(op) {
    localOperationMemory = display.value;

    if(MemoryNewNumber && MemoryPendingOperation !== "=") {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === "+") {
            MemoryCurrentNumber += +localOperationMemory;
        } else if (MemoryPendingOperation === "-") {
            MemoryCurrentNumber -= +localOperationMemory;
        } else if (MemoryPendingOperation === "*") {
            MemoryCurrentNumber *= +localOperationMemory;
        } else if (MemoryPendingOperation === "/") {
            MemoryCurrentNumber /= +localOperationMemory;
        } else {
            MemoryCurrentNumber = +localOperationMemory;
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    }

}

function decimal() {
    let localDecimalMemory = display.value;

    if(MemoryNewNumber) {
        localDecimalMemory = "0.";
        MemoryNewNumber = false;
    } else {
        if(localDecimalMemory.indexOf(".") === -1) {
            localDecimalMemory += "."
        }
    }
    display.value = localDecimalMemory;
    console.log("Клик по " )
}

function clear(id) {
    if(id === "ce") {
        display.value = "0" // здесь строка? или число?
        MemoryNewNumber = true;
    } else if(id === "c") {
        display.value = "0"
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = "";
    }
}