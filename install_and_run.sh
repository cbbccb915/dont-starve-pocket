#!/data/data/com.termux/files/usr/bin/bash
export HOME=/data/data/com.termux/files/home
export PATH=/data/data/com.termux/files/usr/bin:$PATH
export TMPDIR=/data/data/com.termux/files/usr/tmp

echo "=========================================================="
echo "      ★ 饥荒：永恒之境 (Don't Starve Complete) 启动程序 ★"
echo "=========================================================="

# 1. Copy files to Termux Home
echo "[1/4] 部署游戏文件到 Termux 环境..."
mkdir -p "$HOME/dont_starve_pocket"
cp -rf /sdcard/Download/dont_starve_pocket/* "$HOME/dont_starve_pocket/"
chmod +x "$HOME/dont_starve_pocket/server.py"

# 2. Kill old server if running
echo "[2/4] 清理旧服务..."
pkill -f "dont_starve_pocket/server.py" 2>/dev/null || true
sleep 1

# 3. Launch background HTTP server
echo "[3/4] 启动 Python 游戏专用服务器 (端口 8080)..."
nohup python "$HOME/dont_starve_pocket/server.py" > "$HOME/dont_starve_pocket/server.log" 2>&1 &
sleep 2

# 4. Verify server running
if pgrep -f "dont_starve_pocket/server.py" > /dev/null; then
    echo "✔ 游戏服务器运行正常！"
else
    echo "⚠ 正在尝试启动服务..."
    python "$HOME/dont_starve_pocket/server.py" &
fi

# 5. Create shortcut in Termux
cat << 'EOF' > "$HOME/start_game.sh"
#!/data/data/com.termux/files/usr/bin/bash
export HOME=/data/data/com.termux/files/home
export PATH=/data/data/com.termux/files/usr/bin:$PATH
pkill -f "dont_starve_pocket/server.py" 2>/dev/null
nohup python "$HOME/dont_starve_pocket/server.py" > "$HOME/dont_starve_pocket/server.log" 2>&1 &
echo "================================================="
echo "  [饥荒：永恒之境] 服务器已启动！"
echo "  游戏地址: http://localhost:8080"
echo "  正在自动唤起手机浏览器..."
echo "================================================="
am start -a android.intent.action.VIEW -d "http://localhost:8080" 2>/dev/null || termux-open-url "http://localhost:8080" 2>/dev/null
EOF
chmod +x "$HOME/start_game.sh"

# 6. Add alias to bashrc
if ! grep -q "start_game.sh" "$HOME/.bashrc" 2>/dev/null; then
    echo "alias game='$HOME/start_game.sh'" >> "$HOME/.bashrc"
    echo "alias star='$HOME/start_game.sh'" >> "$HOME/.bashrc"
fi

# 7. Print final banner to Termux
clear
echo "=========================================================="
echo "    ⛺ 饥荒：永夜求生 (Don't Starve Pocket) 已就绪! ⛺"
echo "=========================================================="
echo "  * 状态: 运行中 (ONLINE)"
echo "  * 本地端口: 8080"
echo "  * 访问地址: http://localhost:8080"
echo ""
echo "  【操作提示】"
echo "  - 随时输入命令: ~/start_game.sh 或 game 即可再次启动"
echo "  - 支持离线保存、手机触控虚拟摇杆、手势砍树采矿与合成"
echo "=========================================================="
echo ""
echo "[4/4] 正在打开手机浏览器进入游戏..."

# 8. Open game in phone browser
am start -a android.intent.action.VIEW -d "http://localhost:8080" 2>/dev/null || termux-open-url "http://localhost:8080" 2>/dev/null

echo "完成！愿你活过每一个黑夜！"
