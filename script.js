const trains = [
  {
    number: "12636",
    name: "Vaigai Express",
    from: "madurai",
    to: "chennai",
    CONFIRMED: 12,
    RAC: 4,
    WL: 0
  },
  {
    number: "12638",
    name: "Pandian Express",
    from: "madurai",
    to: "chennai",
    CONFIRMED: 0,
    RAC: 6,
    WL: 15
  }
];

function searchTickets() {
  const from = document.getElementById("from").value.toLowerCase();
  const to = document.getElementById("to").value.toLowerCase();
  const trainNo = document.getElementById("train").value;
  const status = document.querySelector('input[name="status"]:checked');
  const result = document.getElementById("result");

  result.innerHTML = "";

  if (!from || !to || !trainNo || !status) {
    result.innerHTML = "Please fill all fields";
    return;
  }

  const selectedTrain = trains.find(t =>
    t.number === trainNo &&
    t.from.includes(from) &&
    t.to.includes(to)
  );

  if (!selectedTrain) {
    result.innerHTML = "No train found";
    return;
  }

  const seats = selectedTrain[status.value];

  result.innerHTML = `
    <div class="train">
      <b>${selectedTrain.number} – ${selectedTrain.name}</b><br><br>
      Status : ${status.value}<br>
      Available Seats : ${seats}
    </div>
  `;
}
