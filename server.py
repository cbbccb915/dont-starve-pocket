#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Concise logging
        sys.stderr.write(f"[{self.log_date_time_string()}] {args[0]} {args[1]}\n")

def run():
    os.chdir(DIRECTORY)
    # Enable address reuse so restarts don't hit "Address already in use"
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"=====================================================")
            print(f"  [DON'T STARVE POCKET] 饥荒服务已在后台成功启动!")
            print(f"  本地运行地址: http://127.0.0.1:{PORT}")
            print(f"  手机浏览器直接访问: http://localhost:{PORT}")
            print(f"=====================================================")
            sys.stdout.flush()
            httpd.serve_forever()
    except Exception as e:
        print(f"Error starting server: {e}")

if __name__ == "__main__":
    run()
