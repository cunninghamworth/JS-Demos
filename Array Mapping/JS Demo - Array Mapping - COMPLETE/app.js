let userData = [
    {
        userFirstName: "John",
        userAge: "30"
    },
    {
        userFirstName: "Jim",
        userAge: "33"
    },
    {
        userFirstName: "Jack",
        userAge: "21"
    },
    {
        userFirstName: "Jane",
        userAge: "32"
    },
    {
        userFirstName: "Jan",
        userAge: "29"
    },
    {
        userFirstName: "Jen",
        userAge: "41"
    },
];

const userInfoDisplay = document.querySelector("#userInfoDisplay");

let userDetails = userData.map(function(dataPoint) {
    return "<div>" + dataPoint.userFirstName + " " + "is " + dataPoint.userAge + " years old." + "</div>";
});

userInfoDisplay.innerHTML = userDetails.join("\n");