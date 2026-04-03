const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");
    });
}

const highlights = [
    "Historic theater design",
    "Beautiful painted ceiling",
    "Elegant balconies",
    "Café on the former stage"
];

const highlightList = document.querySelector("#highlight-list");

if (highlightList) {
    const highlightItems = highlights.map(
        (highlight) => `<li>${highlight}</li>`
    ).join("");

    highlightList.innerHTML = `${highlightItems}`;
}

const weeklyHours = {
    Sunday: "12:00 PM - 9:00 PM",
    Monday: "9:00 AM - 9:00 PM",
    Tuesday: "9:00 AM - 9:00 PM",
    Wednesday: "9:00 AM - 9:00 PM",
    Thursday: "9:00 AM - 9:00 PM",
    Friday: "9:00 AM - 9:00 PM",
    Saturday: "9:00 AM - 9:00 PM"
};

function displayTodayHours() {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const hoursMessage = document.querySelector("#hours-message");
    const visitHoursMessage = document.querySelector("#visit-hours-message");

    if (weeklyHours[today]) {
        const message = `Today is ${today}. Ateneo Grand Splendid is open from ${weeklyHours[today]}.`;

        if (hoursMessage) {
            hoursMessage.textContent = message;
        }

        if (visitHoursMessage) {
            visitHoursMessage.textContent = message;
        }
    } else {
        const closedMessage = `Hours are currently unavailable.`;

        if (hoursMessage) {
            hoursMessage.textContent = closedMessage;
        }

        if (visitHoursMessage) {
            visitHoursMessage.textContent = closedMessage;
        }
    }
}

displayTodayHours();

const favoriteButtons = document.querySelectorAll(".favorite-btn");
const favoriteMessage = document.querySelector("#favorite-message");

function showSavedFavorite() {
    const savedFavorite = localStorage.getItem("favoriteFeature");

    if (savedFavorite && favoriteMessage) {
        favoriteMessage.textContent = `Your saved favorite feature is ${savedFavorite}.`;
    }
}

favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFeature = button.dataset.feature;

        localStorage.setItem("favoriteFeature", selectedFeature);

        if (favoriteMessage) {
            favoriteMessage.textContent = `You selected ${selectedFeature} as your favorite feature.`;
        }
    });
});

showSavedFavorite();