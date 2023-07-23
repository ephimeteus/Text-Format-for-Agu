function formatThis() {
    let rawData = document.getElementById("textbox").value.trim();
    const data = rawData.split(",");
    const mensaje = `${data[0]} - ${data[1]}
    *Desde* ${data[2]} *a* ${data[3]}
    *Pax* ${data[4]} *x* ${data[5]}
              *Cobrar* ${data[6]}
    Observaciones: ${data[7]}`;
    document.querySelector("#text").value = mensaje; //HTML  
    
}



function copyToClipboard() {
    // Get the text field
    var copyText = document.getElementById("text");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

// 1 - 2
// *Desde* 3 *a* 4
// *Pax* 5 *x* 6
// *Cobrar*7

// Observaciones: 8


