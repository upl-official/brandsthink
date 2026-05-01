<?php
require 'config.php';

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); // Remove in production

// Enable detailed error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
    // Validate request
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Only POST requests allowed', 405);
    }

    // Prepare request data
    $requestData = [
        'prompt' => $_POST['prompt'] ?? 'a cute cat', // Default prompt for testing
        'negative_prompt' => $_POST['negative_prompt'] ?? '',
        'guidance_scale' => 1.5,
        'num_images' => 1, // Force 1 image for testing
        'image' => [
            'size' => 'square_1_1' // Fixed size for testing
        ],
        'styling' => [
            'style' => 'realistic' // Fixed style for testing
        ],
        'filter_nsfw' => true
    ];

    // Initialize cURL
    $ch = curl_init();
    
    curl_setopt_array($ch, [
        CURLOPT_URL => FREEPIK_API_ENDPOINT,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($requestData),
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Accept: application/json',
            'x-freepik-api-key: ' . FREEPIK_API_KEY
        ],
        CURLOPT_HEADER => true,
        CURLOPT_VERBOSE => true // Enable verbose output
    ]);

    // Execute request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    if (curl_errno($ch)) {
        throw new Exception('CURL Error: ' . curl_error($ch), 500);
    }

    // Split headers and body
    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $headers = substr($response, 0, $header_size);
    $body = substr($response, $header_size);
    
    curl_close($ch);

    // Log full response for debugging
    error_log("API Response Headers:\n$headers");
    error_log("API Response Body:\n$body");

    // Handle non-200 responses
    if ($httpCode !== 200) {
        $errorData = json_decode($body, true) ?: ['message' => 'Unknown API error'];
        throw new Exception(
            "API Error: " . ($errorData['message'] ?? 'No error message'),
            $httpCode
        );
    }

    // Process successful response
    $result = json_decode($body, true);
    
    echo json_encode([
        'success' => true,
        'data' => $result['data'],
        'meta' => $result['meta']
    ]);

} catch (Exception $e) {
    http_response_code($e->getCode() ?: 500);
    echo json_encode([
        'error' => $e->getMessage(),
        'code' => $e->getCode(),
        'details' => $e->getTraceAsString()
    ]);
    exit;
}