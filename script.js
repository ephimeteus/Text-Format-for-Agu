function extractString(rawData) {
    const data = rawData.split(",");
    const mensaje = 
      `${data[0]} - ${data[1]}
      *Desde* ${data[2]} *a* ${data[3]}
      *Pax* ${data[4]} *x* ${data[5]}
      *Cobrar* ${data[6]}
      Observaciones: ${data[7]}`;
    return mensaje;
}

function formatArray() {
    let rawData = document.getElementById("textbox").value.trim();
    document.querySelector("#text").value = extractString(rawData); //HTML  
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


