function loadPage() {
    let url = document.getElementById("urlInput").value;
    if (!url.startsWith("http")) {
        url = "https://" + url; // Add HTTPS if missing
    }
    document.getElementById("browserFrame").src = url;
}

// Register the Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
        .then(() => console.log("Service Worker Registered"));
}
