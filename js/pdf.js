// Usa la impresión del navegador ("Guardar como PDF"): el PDF queda con texto real
// (seleccionable y legible por los filtros ATS de reclutamiento), no como una imagen.
// El diseño de impresión está en @media print de css/styles.css (A4, 2 páginas).
document.getElementById('descargarPDF').addEventListener('click', () => {
    window.print();
});
