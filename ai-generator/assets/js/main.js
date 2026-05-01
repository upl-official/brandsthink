document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('aiForm');
    const resultsGrid = document.getElementById('resultsGrid');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        resultsGrid.innerHTML = `
            <div class="placeholder">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Generating your images...</p>
            </div>
        `;
        
        // Scroll to results
        document.getElementById('results').scrollIntoView({
            behavior: 'smooth'
        });
        
        // Collect form data
        const formData = new FormData(form);
        
        // Send AJAX request
        fetch('generate.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                resultsGrid.innerHTML = data.html;
                
                // Add download functionality
                document.querySelectorAll('.btn-download').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const imageData = this.getAttribute('data-image');
                        const link = document.createElement('a');
                        link.href = `data:image/png;base64,${imageData}`;
                        link.download = `ai-image-${Date.now()}.png`;
                        link.click();
                    });
                });
            } else {
                resultsGrid.innerHTML = `
                    <div class="placeholder">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>Error generating images. Please try again.</p>
                        ${data.error ? `<small>${data.error}</small>` : ''}
                    </div>
                `;
            }
        })
        .catch(error => {
            resultsGrid.innerHTML = `
                <div class="placeholder">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Error generating images. Please try again.</p>
                    <small>${error.message}</small>
                </div>
            `;
        });
    });
});