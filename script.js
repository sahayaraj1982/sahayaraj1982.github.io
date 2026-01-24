function applyFilter() {
  const showConfirm = document.getElementById("confirmToggle").checked;
  const showRAC = document.getElementById("racToggle").checked;
  const showWL = document.getElementById("wlToggle").checked;

  const rows = document.querySelectorAll(".train-row");

  rows.forEach(row => {
    const status = row.getAttribute("data-status");

    if (
      (status === "CONFIRMED" && showConfirm) ||
      (status === "RAC" && showRAC) ||
      (status === "WL" && showWL)
    ) {
      row.style.display = "block";
    } else {
      row.style.display = "none";
    }
  });
}
