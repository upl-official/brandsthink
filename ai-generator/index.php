<?php include 'config.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Image Generator | Powered by Freepik</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">
                <img src="../media/bt_logo_black.webp" alt="AI Generator">
                <span>AI Image Generator</span>
            </div>
        </div>
    </header>

    <main class="container">
        <section class="hero">
            <div class="hero-content">
                <h1>Transform Your Ideas Into Stunning AI Art</h1>
                <p>Powered by Freepik's advanced AI technology. Generate high-quality images from text prompts in seconds.</p>
            </div>
            <div class="gradient-accent"></div>
        </section>

        <section class="generator-form">
            <form action="generate.php" method="post" id="aiForm">
                <div class="form-group">
                    <label for="prompt">Describe what you want to generate</label>
                    <textarea id="prompt" name="prompt" placeholder="A futuristic city with flying cars, neon lights, cyberpunk style" required></textarea>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="negative_prompt">Avoid in image</label>
                        <input type="text" id="negative_prompt" name="negative_prompt" placeholder="blurry, low quality, text">
                    </div>
                    <div class="form-group">
                        <label for="style">Style</label>
                        <select id="style" name="style">
                            <option value="realistic">Realistic</option>
                            <option value="anime">Anime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="cyberpunk">Cyberpunk</option>
                            <option value="watercolor">Watercolor</option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="num_images">Number of Images (1-<?= MAX_IMAGES ?>)</label>
                        <input type="number" id="num_images" name="num_images" min="1" max="<?= MAX_IMAGES ?>" value="1">
                    </div>
                    <div class="form-group">
                        <label for="size">Image Size</label>
                        <select id="size" name="size">
                            <option value="square_1_1">Square (1:1)</option>
                            <option value="portrait_2_3">Portrait (2:3)</option>
                            <option value="landscape_3_2">Landscape (3:2)</option>
                        </select>
                    </div>
                </div>

                <button type="submit" class="btn-primary btn-generate">
                    <i class="fas fa-magic"></i> Generate Images
                </button>
            </form>
        </section>

        <section class="results-section" id="results">
            <h2>Your Generated Images</h2>
            <div class="results-grid" id="resultsGrid">
                <div class="placeholder">
                    <i class="fas fa-image"></i>
                    <p>Your AI-generated images will appear here</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <h3>AI Generator</h3>
                    <p>Transform your ideas into stunning visuals with our AI-powered image generation tool.</p>
                </div>
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <a href="#">Home</a>
                    <a href="#">API Docs</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact</a>
                </div>
                <div class="footer-col">
                    <h3>Legal</h3>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">License</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 AI Image Generator. Powered by Freepik API.</p>
            </div>
        </div>
    </footer>

    <script src="assets/js/main.js"></script>
</body>
</html>