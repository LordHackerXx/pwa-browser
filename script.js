function loadPage() {
    let url = document.getElementById("urlInput").value;

    // Ensure correct URL format
    if (!url.startsWith("http")) {
        url = "https://" + url;
    }

    // Load the website inside the webview (acts like a real browser)
    document.getElementById("browserView").src = url;
}
