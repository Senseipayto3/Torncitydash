import { loadPage } from "./app.js";

export function initUI() {
    document.querySelectorAll("#sidebar button").forEach(btn => {
        btn.addEventListener("click", () => {
            loadPage(btn.dataset.page);
        });
    });
}

export function render(html) {
    document.getElementById("content").innerHTML = html;
}
