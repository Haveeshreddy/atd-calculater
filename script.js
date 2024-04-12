document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.getElementById("inputFields");
    const resultDiv = document.getElementById("result");
    const calculateBtn = document.getElementById("calculateBtn");
    const backBtn = document.getElementById("backBtn");

    // Function to calculate savings
    function calculateSavings() {
        // Get input values
        var avgConsumption = parseFloat(document.getElementById("avgConsumption").value);
        var currentPrice = parseFloat(document.getElementById("currentPrice").value);
        var atdPrice = parseFloat(document.getElementById("atdPrice").value);
        var gstRate = parseFloat(document.getElementById("gstRate").value);
        var companyName = document.getElementById("companyNameInput").value; // Fetch company name value
        var personName = document.getElementById("personNameInput").value; // Fetch person name value

        // Calculate GST amount for ATD Blue
        var atdGstAmount = atdPrice * gstRate / 100;

        // Calculate total amount for ATD Blue
        var totalAmount = atdPrice + atdGstAmount;

        // Calculate monthly savings
        var monthlySavings = (currentPrice - totalAmount) * avgConsumption;

        // Calculate GST input
        var gstInput = atdGstAmount * avgConsumption;

        // Calculate total monthly savings including tax
        var totalMonthlySavings = monthlySavings + gstInput;

        // Calculate tax amount for monthly savings
        var monthlyTax = gstInput;

        // Calculate yearly savings
        var yearlySavings = monthlySavings * 12;

        // Calculate total yearly savings including tax
        var totalYearlySavings = totalMonthlySavings * 12;

        // Calculate tax amount for yearly savings
        var yearlyTax = monthlyTax * 12;

        // Update result section with calculated values and explanations
        document.getElementById("monthlySavings").textContent = `₹ ${monthlySavings.toFixed(2)}`;
        document.getElementById("yearlySavings").textContent = `₹ ${yearlySavings.toFixed(2)}`;
        document.getElementById("totalMonthlySavings").textContent = `₹ ${totalMonthlySavings.toFixed(2)} (including tax: ₹ ${monthlyTax.toFixed(2)})`;
        document.getElementById("totalYearlySavings").textContent = `₹ ${totalYearlySavings.toFixed(2)} (including tax: ₹ ${yearlyTax.toFixed(2)})`;

        // Update placeholders for company name and person name in the result section
        document.getElementById("companyName").textContent = companyName;
        document.getElementById("personName").textContent = personName;

        // Hide input fields and show result section
        inputFields.style.display = "none";
        resultDiv.style.display = "block";

        // Hide the "Calculate Savings" button
        calculateBtn.style.display = "none";
    }

    // Call the calculateSavings function when the "Calculate Savings" button is clicked
    calculateBtn.addEventListener("click", calculateSavings);

    backBtn.addEventListener("click", function() {
        // Show input fields, hide result section, and show the "Calculate Savings" button
        inputFields.style.display = "block";
        resultDiv.style.display = "none";
        calculateBtn.style.display = "block";
    });
});
