const btn = document.getElementById("THEME_CHANGER");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    btn.innerText = "Dark Mode";
}

btn.onclick = () => {
    body.classList.toggle("light");
    const theme = body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("theme", theme);
    btn.innerText = theme === "light" ? "Dark Mode" : "Light Mode";
};
