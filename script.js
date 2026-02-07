document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    let old = document.getElementById("result");
    if (old) old.remove();

    const result = document.createElement("div");
    result.id = "result";
    result.style.marginTop = "20px";
    result.style.padding = "15px";
    result.style.border = "1px solid #ccc";
    result.style.borderRadius = "8px";
    result.style.background = "#f9f9f9";

    result.innerHTML = `
      <h3>✅ Confirm Tickets Available</h3>
      <p><b>Train:</b> Pandian Express (12638)</p>
      <p><b>Class:</b> Sleeper</p>
      <p><b>Quota:</b> General</p>
      <p><b>Seats:</b> 5 Confirmed</p>
    `;

    btn.parentElement.appendChild(result);
  });
});
