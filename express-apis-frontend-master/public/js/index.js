document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("http://localhost:8080/tasks");
    const { tasks } = await res.json();
    console.log(tasks);
})
