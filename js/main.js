document.addEventListener('DOMContentLoaded', function() {
    // Select the sidebar and the resizer handle elements
    const sidebar = document.querySelector('.sidebar');
    const resizer = document.querySelector('.resizer');

    // Variable to track if the user is currently dragging the resizer
    let isResizing = false;

    // Event listener for when the user presses the mouse button down on the resizer
    resizer.addEventListener('mousedown', function(e) {
        isResizing = true; // Start resizing mode
        document.body.style.cursor = 'col-resize'; // Change the cursor to a resize icon globally

        // Prevent text selection while dragging to avoid accidental highlighting
        document.body.style.userSelect = 'none';
    });

    // Event listener for mouse movement anywhere on the document
    document.addEventListener('mousemove', function(e) {
        // If we are not currently resizing, do nothing
        if (!isResizing) return;

        // Calculate the new width based on the mouse's X (horizontal) position
        let newWidth = e.clientX;

        // Enforce minimum width constraint (250px)
        if (newWidth < 250) newWidth = 250;

        // Enforce maximum width constraint (600px)
        if (newWidth > 600) newWidth = 600;

        // Apply the new width to the sidebar element
        sidebar.style.width = newWidth + 'px';
    });

    // Event listener for when the user releases the mouse button
    document.addEventListener('mouseup', function(e) {
        // If we were resizing, stop the process
        if (isResizing) {
            isResizing = false; // Stop resizing mode
            document.body.style.cursor = 'default'; // Reset cursor to default arrow
            document.body.style.userSelect = 'auto'; // Re-enable text selection
        }
    });
});