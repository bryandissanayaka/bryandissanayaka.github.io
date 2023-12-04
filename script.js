function highlightCode() {
    const codeInput = document.getElementById('codeInput');
    const highlightedCode = document.getElementById('highlightedCode');

    const code = codeInput.value;
    const highlightedHTML = Prism.highlight(code, Prism.languages.javascript, 'javascript');

    highlightedCode.innerHTML = highlightedHTML;
}

function saveAsImage() {
    const highlightedCode = document.getElementById('highlightedCode');

    html2canvas(highlightedCode)
        .then(function (canvas) {
            const imageDataURL = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = imageDataURL;
            link.download = 'highlighted_code.png';

            link.click();
        })
        .catch(function (error) {
            console.error('Error converting to image:', error);
        });
}
