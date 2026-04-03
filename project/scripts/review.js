const resultsContainer = document.querySelector("#review-results");

function formatValue(value) {
    return value ? value : "Not provided";
}

function getCheckboxValues(params, key) {
    const values = params.getAll(key);
    return values.length > 0 ? values.join(", ") : "None selected";
}

function displayReviewData() {
    const params = new URLSearchParams(window.location.search);

    const fullname = formatValue(params.get("fullname"));
    const email = formatValue(params.get("email"));
    const country = formatValue(params.get("country"));
    const visitDate = formatValue(params.get("visit-date"));
    const interest = formatValue(params.get("interest"));
    const day = formatValue(params.get("day"));
    const rating = formatValue(params.get("rating"));
    const comments = formatValue(params.get("comments"));
    const features = getCheckboxValues(params, "features");

    if (resultsContainer) {
        resultsContainer.innerHTML = `
            <p><strong>Full Name:</strong> ${fullname}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Preferred Visit Date:</strong> ${visitDate}</p>
            <p><strong>Main Interest:</strong> ${interest}</p>
            <p><strong>Preferred Day:</strong> ${day}</p>
            <p><strong>Interest Level:</strong> ${rating}</p>
            <p><strong>Selected Features:</strong> ${features}</p>
            <p><strong>Comments:</strong> ${comments}</p>
        `;
    }
}

displayReviewData();