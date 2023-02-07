function printPDF() {
    var printContents = document.getElementById("printable").innerHTML;
    var originalContents = document.body.innerHTML;
  
    document.body.innerHTML = '<head><style>@media print {body {background: transparent !important;} .no-print {display: none !important;}}</style></head><body>' + printContents + '</body>';
  
    window.print();
  
    document.body.innerHTML = originalContents;
  }
  