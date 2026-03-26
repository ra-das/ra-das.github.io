document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const resizer = document.querySelector('.resizer');

    if (!sidebar || !resizer) {
        return;
    }

    let isResizing = false;

    resizer.addEventListener('mousedown', function() {
        if (window.innerWidth <= 1024) {
            return;
        }

        isResizing = true;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;

        let newWidth = e.clientX - resizer.getBoundingClientRect().width / 2;

        if (newWidth < 260) newWidth = 260;
        if (newWidth > 520) newWidth = 520;
        sidebar.style.width = newWidth + 'px';
    });

    document.addEventListener('mouseup', function() {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = 'default';
            document.body.style.userSelect = 'auto';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 1024) {
            sidebar.style.removeProperty('width');
        }
    });
});
