function openPage(url) {
  // If the site blocks iframe, open in new tab
  if (url.includes("passion2047.org")) {
    window.open(url, "_blank");
  } else {
    document.getElementById("pageFrame").src = url;
  }
}
