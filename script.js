let pdfBtn = document.getElementById("pdfBtn");
pdfBtn.onclick = () => {
  const element = document.getElementById("pdfArea");
  html2pdf()
    .set({
      margin: 1,
      filename: "invoice.pdf",
      image: { type: "png", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    })
    .from(element)
    .save();
};
