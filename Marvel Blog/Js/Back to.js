function BackTo() {
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'z') {
            window.history.back();
        }
    });
}

function ForwardTo() {
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'y') {
            window.history.forward();
        }
    });
}

