function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;

    printContents.style.color = "black"

    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}