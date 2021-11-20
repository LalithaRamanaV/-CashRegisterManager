const billAmount = document.querySelector("#bill-input");
const cashCollected = document.querySelector("#cash-collected-input");
const checkButton = document.querySelector("#check-btn");
const messageElement = document.querySelector("#display-message");
const noteCountList = document.querySelectorAll(".note-count");

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

function calculateNotes(returnAmount){
  for(var note=0; note < notesAvailable.length; 
  ++note)
  {
     var notes = Math.trunc(returnAmount /     notesAvailable[note]);
      noteCountList[note].innerHTML = notes;
      returnAmount %= notesAvailable[note];
    
  }
}

function displayMessage(messageText) {
    messageElement.innerHTML = messageText;
}
checkButton.addEventListener("click", () => {
    messageElement.innerHTML = '';

    var billValue = Number(billAmount.value);
    var cashValue = Number(cashCollected.value);

  if(billValue <= 0)
    {
        displayMessage("Bill value must be greater than zero");
        document.getElementById("cash-collected").style.display = "none";
        document.getElementById("notes-table").style.display = "none";
        return;
    }

  
    document.getElementById("cash-collected").style.display = "block";

    
    checkButton.innerHTML = "Calculate";
    
    if (cashValue >= billValue)
    {
        const returnAmount = cashValue - billValue;
        document.getElementById("notes-table").style.display = "block";
        document.getElementById("return-change").innerHTML = "₹" + returnAmount;
        calculateNotes(returnAmount);
    }
    else
    {
        document.getElementById("notes-table").style.display = "none";
        displayMessage("Please enter value greater than bill amount!");
    }
});