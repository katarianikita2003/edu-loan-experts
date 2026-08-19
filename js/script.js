document.addEventListener("DOMContentLoaded", () => {
    console.log("Edu Loan Experts website loaded successfully.");

    // =========================
    // EMI CALCULATOR
    // =========================

    const loanAmountInput = document.getElementById("loanAmount");
    const interestRateInput = document.getElementById("interestRate");
    const loanTenureInput = document.getElementById("loanTenure");
    const calculateButton = document.getElementById("calculateEmi");

    const emiResult = document.getElementById("emiResult");
    const monthlyEmi = document.getElementById("monthlyEmi");
    const totalInterest = document.getElementById("totalInterest");
    const totalPayment = document.getElementById("totalPayment");

    calculateButton.addEventListener("click", () => {
        const principal = Number(loanAmountInput.value);
        const annualInterestRate = Number(interestRateInput.value);
        const years = Number(loanTenureInput.value);

        if (principal <= 0 || annualInterestRate < 0 || years <= 0) {
            alert("Please enter valid loan details.");
            return;
        }

        const monthlyInterestRate = annualInterestRate / 12 / 100;
        const numberOfPayments = years * 12;

        let emi;

        if (monthlyInterestRate === 0) {
            emi = principal / numberOfPayments;
        } else {
            emi =
                (principal *
                    monthlyInterestRate *
                    Math.pow(
                        1 + monthlyInterestRate,
                        numberOfPayments
                    )) /
                (Math.pow(
                    1 + monthlyInterestRate,
                    numberOfPayments
                ) - 1);
        }

        const totalAmount = emi * numberOfPayments;
        const interest = totalAmount - principal;

        monthlyEmi.textContent = emi.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        });

        totalInterest.textContent = interest.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        });

        totalPayment.textContent = totalAmount.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        });

        emiResult.hidden = false;
    });


    // =========================
    // STUDENT ENQUIRY FORM
    // =========================

    const enquiryForm = document.getElementById("enquiryForm");

    enquiryForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value.trim();

        const mobileNumber =
            document.getElementById("mobileNumber").value.trim();

        const courseName =
            document.getElementById("courseName").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const whatsappMessage =
            `Hello Edu Loan Experts,

` +
            `I would like to enquire about an education loan.

` +
            `Student Name: ${studentName}
` +
            `Mobile Number: ${mobileNumber}
` +
            `Course: ${courseName}
` +
            `Message: ${message || "Not provided"}

` +
            `Please contact me regarding my education loan requirement.`;

        const whatsappUrl =
            `https://wa.me/917056661395?text=${encodeURIComponent(
                whatsappMessage
            )}`;

        window.open(whatsappUrl, "_blank");
    });
});