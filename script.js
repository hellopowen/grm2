const canvas = document.getElementById('music-canvas');
const ctx = canvas.getContext('2d');
const generateBtn = document.getElementById('generate');
const stopBtn = document.getElementById('stop');

let isPlaying = false;
let animationId;

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

function generateMusic() {
    if (isPlaying) return;
    isPlaying = true;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Generate random shapes and colors
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 50 + 10,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
            ctx.fill();
        }

        // Play a random note (this is just a placeholder, you'd need to implement actual sound generation)
        const frequency = 220 + Math.random() * 880;
        console.log(`Playing note at ${frequency.toFixed(2)} Hz`);

        animationId = requestAnimationFrame(animate);
    }

    animate();
}

function stopMusic() {
    isPlaying = false;
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

generateBtn.addEventListener('click', generateMusic);
stopBtn.addEventListener('click', stopMusic);
window.addEventListener('resize', resizeCanvas);

resizeCanvas();
