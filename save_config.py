#!/usr/bin/env python3
import json
import sys
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse
import os

class ConfigHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/save-config':
            try:
                # Get content length
                content_length = int(self.headers['Content-Length'])
                # Read the POST data
                post_data = self.rfile.read(content_length)
                # Parse JSON data
                config_data = json.loads(post_data.decode('utf-8'))
                
                # Save to html_configs.json
                with open('html_configs.json', 'w', encoding='utf-8') as f:
                    json.dump(config_data, f, indent=2, ensure_ascii=False)
                
                # Send success response
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                response = {'status': 'success', 'message': 'Configuration saved successfully'}
                self.wfile.write(json.dumps(response).encode('utf-8'))
                
            except Exception as e:
                # Send error response
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                response = {'status': 'error', 'message': str(e)}
                self.wfile.write(json.dumps(response).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()
    
    def do_OPTIONS(self):
        # Handle CORS preflight requests
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == '__main__':
    port = 8001
    server = HTTPServer(('localhost', port), ConfigHandler)
    print(f"Config save server running on http://localhost:{port}")
    server.serve_forever()