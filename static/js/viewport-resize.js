$(document).ready(function() {
    // Define viewport sizes for each device
    const viewportSizes = {
        'test-1': 1920, // Desktop
        'test-2': 1024, // Notebook
        'test-3': 768,  // Tablet
        'test-4': 480   // Mobile
    };

    // Handle radio button changes
    $('input[name="test"]').on('change', function() {
        const selectedId = $(this).attr('id');
        const newWidth = viewportSizes[selectedId];
        
        if (newWidth) {
            // Set the viewport width using CSS transform
            $('body').css({
                'width': newWidth + 'px',
                'margin': '0 auto',
                'transform': 'scale(' + (window.innerWidth / newWidth) + ')',
                'transform-origin': 'top left'
            });
        }
    });
});
