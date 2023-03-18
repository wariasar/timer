// Timer set

function setTimer() {
   var smin = parseInt(document.getElementById("smin").value);
   var ssec = parseInt(document.getElementById("ssec").value);
  
   if (smin.toString() == "NaN") {
      smin = 0;
   }

   if (ssec.toString() == "NaN") {
      ssec = 0;
   }

   if (smin > 59) {
      smin = 59;
   }

   if (ssec > 59) {
      ssec = 59;
   }
   
   if (ssec <= 9) {
      ssec = "0" + ssec;
   }

   var ctime = smin + "∶" + ssec;
   sessionStorage.setItem('time', ctime);
   window.location.href = "index.html";
}


function changeValue (which) {
   var value;

   switch (which) {
      case "minplus":
         value = parseInt(document.getElementById('smin').value, 10);
         value = isNaN(value) ? 0 : value;
         if (value < 59) { value++; }
         document.getElementById('smin').value = value;
         break;
      case "secplus":
         value = parseInt(document.getElementById('ssec').value, 10);
         value = isNaN(value) ? 0 : value;
         if (value < 59) { value++; }
         document.getElementById('ssec').value = value;
         break;
      case "minminus":
         value = parseInt(document.getElementById('smin').value, 10);
         value = isNaN(value) ? 0 : value;
         if (value > 0) { value--; }
         document.getElementById('smin').value = value;
         break;
      case "secminus":
         value = parseInt(document.getElementById('ssec').value, 10);
         value = isNaN(value) ? 0 : value;
         if (value > 0) { value--; }
         document.getElementById('ssec').value = value;
         break;
      default:
         break;
   }
}

