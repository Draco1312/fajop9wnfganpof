function generateSnowflakes() {
    const numFlakes = 200;
    for (let i = 0; i < numFlakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        snowflake.style.left = Math.random() * 100 + 'vw'; 
        snowflake.style.top = Math.random() * -100 + 'vh'; 
        
        const size = Math.random() * 3 + 2; 
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.animationDelay = Math.random() * 10 + 's';
        

        document.body.appendChild(snowflake);
    }
}

window.onload = generateSnowflakes;

function loadCode(fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(code => {
            document.getElementById('content-title').innerText = fileName.split('.')[0].toUpperCase() + " Viewer";
            document.getElementById('code-display').innerText = code;
        })
        .catch(error => {
            console.error('Error loading the file:', error);
            document.getElementById('content-title').innerText = "Error";
            document.getElementById('code-display').innerText = "There was an error loading the file.";
        });
}

function copyCode() {
    const codeText = document.getElementById('code-display').innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        alert('Code copied to clipboard!');
    });
}

