document.addEventListener('DOMContentLoaded', () => {
   


    // --- Main Page Navigation Logic ---
    const mainNavLinks = document.querySelectorAll('.main-nav-link');
    const mainViews = document.querySelectorAll('.main-view');

    mainNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetViewId = link.getAttribute('data-view');

            mainNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            mainViews.forEach(view => {
                view.classList.toggle('hidden', view.id !== targetViewId);
            });

            // Render charts only when the dashboard view is activated.
            // This prevents rendering errors when the canvas is hidden.

            if (targetViewId === 'dashboard-view') {

                // A small delay can help ensure the canvas is ready
                setTimeout(() => {
                    renderExamChart();
                    renderLibraryChart();
                }, 0);

            }
        });
    });

    // --- Exam Stats Logic ---
    const dashTabs = document.querySelectorAll('.dash-nav-tab');
    const dashContents = document.querySelectorAll('.analysis-content');

    dashTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            dashTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            dashContents.forEach(content => {
                content.classList.toggle('hidden', content.id !== target);
            });
        });
    });

});