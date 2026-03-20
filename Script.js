function markCompleted(button) {
    const status = button.previousElementSibling;

    if (status.innerText === "Pending") {
        status.innerText = "Completed";
        status.classList.remove("pending");
        status.classList.add("completed");
        button.disabled = true;
        updateProgress();
    }
}

function updateProgress() {
    const statuses = document.querySelectorAll(".status");
    let completedCount = 0;

    statuses.forEach(status => {
        if (status.innerText === "Completed") {
            completedCount++;
        }
    });

    const total = statuses.length;
    document.getElementById("progressText").innerText =
        `${completedCount} out of ${total} activities completed`;
}
