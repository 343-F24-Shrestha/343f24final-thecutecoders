window.onload = function () {
    console.log("Loaded!");
}

function addFriendWindow() {
    // Open the popup
    document.getElementById("add_friend_window").style.display = "block";
}

function closeFriendWindow() {
    // Close the popup
    document.getElementById("add_friend_window").style.display = "none";
}


document.getElementById("friendForm").addEventListener("submit", function (event) {
    console.log("Friend form submission triggered");
    event.preventDefault(); // Prevent the default form submission

    const friendInput = document.getElementById("friendInput");
    const friendName = friendInput.value.trim(); // Get friend's name

    if (friendName) {
        console.log("Adding friend:", friendName);
        const newFriend = document.createElement("p");
        newFriend.textContent = friendName;
        newFriend.className = "friend";

        document.getElementById("friendList").appendChild(newFriend);
        friendInput.value = ""; // Clear input field
    } else {
        alert("Please enter a friend's name.");
    }

    closeFriendWindow(); // Close the window after friend is added
});
