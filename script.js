// public/script.js

document.addEventListener('DOMContentLoaded', function () {
    const fileList = document.getElementById('fileList');
    
    const stickyNote = document.getElementById('stickyNote');

    // Example data (replace with your dynamic data)
    const files = [
        { name: 'File1.txt', type: 'text' },
        { name: 'Image.jpg', type: 'image' },
        { name: 'Document.pdf', type: 'document' }
    ];

    // Function to handle opening files
    const openFile = (file) => {
        switch (file.type) {
            case 'text':
                alert(`Opening text file: ${file.name}`);
                break;
            case 'image':
                window.open(`/uploads/${file.name}`, '_blank');
                break;
            case 'document':
                window.open(`/uploads/${file.name}`, '_blank');
                break;
            default:
                alert(`Opening file: ${file.name}`);
        }
    };

    // Populate file list
    if (fileList) {
        files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.classList.add('file-item');

            switch (file.type) {
                case 'text':
                    fileItem.classList.add('text-file');
                    break;
                case 'image':
                    fileItem.classList.add('image-file');
                    break;
                case 'document':
                    fileItem.classList.add('document-file');
                    break;
            }

            fileItem.textContent = file.name;

            fileItem.addEventListener('click', () => {
                openFile(file);
            });

            fileList.appendChild(fileItem);
        });
    }

    
    const startButton = document.getElementById('startButton');
    const startMenu = document.getElementById('startMenu');

    // Show/hide Start Menu when clicking the Start button
    if (startButton && startMenu) {
        startButton.addEventListener('click', () => {
            startMenu.style.display = (startMenu.style.display === 'block') ? 'none' : 'block';
        });
    }

    // Handle actions for each Start Menu option
    const calculatorOption = document.getElementById('calculatorOption');
    const notepadOption = document.getElementById('notepadOption');
    const whatsappOption = document.getElementById('whatsappOption');
    const wordOption = document.getElementById('wordOption');
    const powerpointOption = document.getElementById('powerpointOption');
    // Add more options and their functionalities as needed

    // Start button functionality
    

    // Save sticky note to the server
    if (stickyNote) {
        stickyNote.addEventListener('blur', () => {
            const noteText = stickyNote.value;
            // Send noteText to the server using a fetch or XMLHttpRequest
        });
    }

    const desktopIcon1 = document.getElementById('desktopIcon1');
    const desktopIcon2 = document.getElementById('desktopIcon2');

    if (desktopIcon1) {
        desktopIcon1.addEventListener('click', () => {
            const selectedColor = prompt('Choose a background color (e.g., #ffffff):');
            if (selectedColor) {
                document.body.style.backgroundColor = selectedColor;
            }
        });
    }

    if (desktopIcon2) {
        desktopIcon2.addEventListener('click', () => {
            const audio = new Audio('/uploads/audio.mp3'); // Update with the correct path
            audio.play();
        });
    }

    // Additional modification for color picking
    const pickColorButton = document.getElementById('pickColorButton');

    if (pickColorButton) {
        pickColorButton.addEventListener('input', (event) => {
            const selectedColor = event.target.value;
            document.body.style.backgroundColor = selectedColor;
        });
    }
});