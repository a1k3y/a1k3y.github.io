document.addEventListener('DOMContentLoaded', function() {
    // Handle key validation and key generation
    const validKeys = {
        key1: 'q)ze1)XoSjAI1^G_',
        key2: 'c19Fc8%e2IU_*88'
    };

    const keyInput1 = document.getElementById('keyInput1');
    const keyInput2 = document.getElementById('keyInput2');
    const validateButton = document.getElementById('validateButton');
    const resultText = document.getElementById('resultText');

    function generateRandomKey() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        let result = '';
        for (let i = 0; i < 16; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    validateButton.addEventListener('click', function() {
        const key1 = keyInput1.value;
        const key2 = keyInput2.value;

        if (key1 === validKeys.key1 && key2 === validKeys.key2) {
            const newKey = generateRandomKey();
            resultText.textContent = `Generated Key: ${newKey}`;
        } else {
            resultText.textContent = 'Invalid keys. Please try again.';
        }
    });

    // Handle 3D tilt effect on mouse move
    const container = document.querySelector('.container');

    container.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;

        // Invert the axes to match typical mouse movement
        const rotateX = ((yPercent - 50) * -0.5) + 'deg'; // Tilt effect
        const rotateY = ((xPercent - 50) * 0.5) + 'deg'; // Tilt effect

        container.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'scale(1)'; // Reset transform when mouse leaves
    });
});
