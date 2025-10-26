#!/bin/bash

# 部署脚本 - 智能体设计模式网站
# 使用方法: ./deploy.sh [server_user@server_ip]

set -e

echo "🚀 开始部署智能体设计模式网站到 rhzk.ruhang365.cn"

# 检查是否提供了服务器地址
if [ -z "$1" ]; then
    echo "❌ 错误: 请提供服务器地址"
    echo "用法: ./deploy.sh user@your-server-ip"
    exit 1
fi

SERVER=$1
REMOTE_PATH="/var/www/rhzk.ruhang365.cn"

echo "📦 步骤 1: 构建项目..."
npm run build

echo "📦 步骤 2: 打包构建文件..."
tar -czf dist.tar.gz dist/

echo "📤 步骤 3: 上传文件到服务器..."
scp dist.tar.gz "$SERVER:/tmp/"
scp nginx.conf "$SERVER:/tmp/rhzk.nginx.conf"

echo "🔧 步骤 4: 在服务器上配置..."
ssh "$SERVER" << 'ENDSSH'
    set -e
    
    # 创建目录
    sudo mkdir -p /var/www/rhzk.ruhang365.cn
    
    # 解压文件
    cd /tmp
    tar -xzf dist.tar.gz
    
    # 移动文件
    sudo rm -rf /var/www/rhzk.ruhang365.cn/*
    sudo mv dist/* /var/www/rhzk.ruhang365.cn/
    
    # 设置权限
    sudo chown -R www-data:www-data /var/www/rhzk.ruhang365.cn
    sudo chmod -R 755 /var/www/rhzk.ruhang365.cn
    
    # 配置 Nginx
    sudo cp /tmp/rhzk.nginx.conf /etc/nginx/sites-available/rhzk.ruhang365.cn
    sudo ln -sf /etc/nginx/sites-available/rhzk.ruhang365.cn /etc/nginx/sites-enabled/
    
    # 测试并重载 Nginx
    sudo nginx -t
    sudo systemctl reload nginx
    
    # 清理
    rm -f /tmp/dist.tar.gz /tmp/rhzk.nginx.conf
    rm -rf /tmp/dist
    
    echo "✅ 服务器配置完成"
ENDSSH

echo "🧹 步骤 5: 清理本地临时文件..."
rm -f dist.tar.gz

echo ""
echo "✅ 部署完成！"
echo "🌐 网站地址: http://rhzk.ruhang365.cn"
echo ""
echo "💡 后续步骤:"
echo "1. 确保 DNS 已配置 A 记录指向服务器 IP"
echo "2. 如需 HTTPS，运行: sudo certbot --nginx -d rhzk.ruhang365.cn"
echo ""
