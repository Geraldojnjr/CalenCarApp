async function injectPartial(targetId, filePath) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(filePath, { cache: "no-cache" });
    if (!response.ok) return;
    target.innerHTML = await response.text();
  } catch (_error) {
    // Ignore include errors to keep page content available.
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await injectPartial("site-header", "header.html");
  await injectPartial("site-footer", "footer.html");
});
