import { setApiKey, torn } from "./api.js";
import { initUI, render } from "./ui.js";

window.addEventListener("DOMContentLoaded", () => {
    initUI();

    document.getElementById("loginBtn").addEventListener("click", login);
});

async function login() {
    const key = document.getElementById("apiKeyInput").value.trim();
    const errorBox = document.getElementById("loginError");

    if (!key) {
        errorBox.textContent = "Enter an API key.";
        return;
    }

    try {
        setApiKey(key);
        const data = await torn("user/?selections=basic");

        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");

        render(`<h2>Welcome, ${data.name}</h2>`);

    } catch (err) {
        errorBox.textContent = "Invalid API key.";
    }
}

export async function loadPage(page) {
    const module = await import(`./modules/${page}.js`);
    module.default();
}
