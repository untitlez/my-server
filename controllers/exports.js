exports.pdf = async (req, res) => {
  try {
    const PDFDocument = require("pdfkit");
    const doc = new PDFDocument({ size: "A4", margin: 50 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=report.pdf");

    doc.fontSize(20).text("รายงานตัวอย่าง", { align: "center" });
    doc.moveDown();
    doc.fontSize(12).text("นี่คือเนื้อหาของรายงาน PDF จาก backend.");

    doc.pipe(res);
    doc.end();
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to generate PDF" });
  }
};
