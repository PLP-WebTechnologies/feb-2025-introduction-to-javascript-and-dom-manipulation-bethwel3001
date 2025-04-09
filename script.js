document.addEventListener('DOMContentLoaded', function() {
    // Text changer functionality
    const textChanger = document.getElementById('text-changer');
    const dynamicText = document.getElementById('dynamic-text');
    
    textChanger.addEventListener('click', function() {
        dynamicText.textContent = 'Text changed successfully!';
    });

    // Style changer functionality
    const styleChanger = document.getElementById('style-changer');
    const styleBox = document.getElementById('style-box');
    
    styleChanger.addEventListener('click', function() {
        styleBox.style.backgroundColor = getRandomColor();
        styleBox.style.color = getRandomColor();
    });

    // Element adder/remover functionality
    const elementAdder = document.getElementById('element-adder');
    const elementRemover = document.getElementById('element-remover');
    const elementContainer = document.getElementById('element-container');
    let elementCount = 1;
    
    elementAdder.addEventListener('click', function() {
        const newElement = document.createElement('p');
        newElement.textContent = `New element ${++elementCount}`;
        elementContainer.appendChild(newElement);
    });
    
    elementRemover.addEventListener('click', function() {
        if (elementContainer.children.length > 1) {
            elementContainer.removeChild(elementContainer.lastElementChild);
            elementCount--;
        }
    });

    // Helper function for random colors
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
