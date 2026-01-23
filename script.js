document.addEventListener("DOMContentLoaded", function () {
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = `
    <div class="card">
      <b>Nellai Express</b><br>
      Train No: 12631<br>
      Class: 3A<br>
      Status: <span class="status-CONFIRMED">CONFIRMED</span><br>
      Seats: 12<br><br>
      <button style="background:#25D366;color:#fff;width:100%;">
        Book Now on WhatsApp
      </button>
    </div>

    <div class="card">
      <b>Vande Bharat</b><br>
      Train No: 20635<br>
      Class: CC<br>
      Status: <span class="status-CONFIRMED">CONFIRMED</span><br>
      Seats: 5<br><br>
      <button style="background:#25D366;color:#fff;width:100%;">
        Book Now on WhatsApp
      </button>
    </div>
  `;
});