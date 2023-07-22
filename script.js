function calculateCost(){
    const adults = parseInt(document.getElementById("adults").value);
    const children = parseInt(document.getElementById("children").value);

    const adultCost = 8000;
    const childCost = 2000;

    const totalCost = adults * adultCost + children * childCost;

    const budgetMessage = "Estimated Budget for selected options is ";

    const resultElement = document.getElementById("result");
    resultElement.textContent = budgetMessage+totalCost+" INR";
}