let pdfBtn = document.getElementById("pdfBtn");

pdfBtn.onclick = () => {
  const element = document.getElementById("pdfArea");
  html2pdf()
    .set({
      margin: 1,
      filename: "invoice.pdf",
      image: { type: "png", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "in", // in = inch. can use also 'px', 'mm', 'cm'
        format: "letter", // letter size. can use also 'a4', 'legal', or [width, height]
        orientation: "portrait",
      },
    })
    .from(element)
    .save();
};
