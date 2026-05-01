<?php
$api_key = 'YOUR_KEY_HERE';

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => 'https://api.freepik.com/v1/ai/text-to-image',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode([
        'prompt' => 'a simple test',
        'num_images' => 1
    ]),
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'x-freepik-api-key: ' . $api_key
    ],
    CURLOPT_HEADER => true
]);

$response = curl_exec($ch);
echo "<pre>";
echo "HTTP Code: " . curl_getinfo($ch, CURLINFO_HTTP_CODE) . "\n\n";
echo "Response:\n" . htmlspecialchars($response);
echo "</pre>";