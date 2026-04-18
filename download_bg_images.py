#!/usr/bin/env python3
"""
下载 target 网站的所有背景图片
"""

import os
import requests
from urllib.parse import urlparse

# 创建保存目录
save_dir = "public/images/backgrounds"
os.makedirs(save_dir, exist_ok=True)

# 所有背景图片 URL（去重）
background_images = [
    # 卡片背景纹理
    "https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/5ec7781183324bf5a6d9af2a161a50aa.png",
    # 另一个卡片背景
    "https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/ef153785f4ea4f48a7b3ba5a2c141a83.png",
    # 主背景图
    "https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260325/f0283a3b8a0f446191875e27ca654806.jpg",
    # 用户提供的背景图
    "https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/8dc5f6a93e854be28f713a828b97b289.png",
    "https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/e02a283846884423a7e165fe3c99c06f.png",
]

# 文件名映射
filename_map = {
    "5ec7781183324bf5a6d9af2a161a50aa.png": "bg-card-texture.png",
    "ef153785f4ea4f48a7b3ba5a2c141a83.png": "bg-card-dark.png",
    "f0283a3b8a0f446191875e27ca654806.jpg": "bg-main.jpg",
    "8dc5f6a93e854be28f713a828b97b289.png": "bg-pattern-1.png",
    "e02a283846884423a7e165fe3c99c06f.png": "bg-pattern-2.png",
}

def download_image(url, save_path):
    """下载单个图片"""
    try:
        print(f"Downloading: {url}")
        response = requests.get(url, timeout=30, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        response.raise_for_status()
        
        with open(save_path, 'wb') as f:
            f.write(response.content)
        
        print(f"✓ Saved to: {save_path}")
        return True
    except Exception as e:
        print(f"✗ Failed to download {url}: {e}")
        return False

def main():
    success_count = 0
    failed_count = 0
    
    for url in background_images:
        # 获取文件名
        parsed = urlparse(url)
        original_filename = os.path.basename(parsed.path)
        
        # 使用映射后的文件名
        if original_filename in filename_map:
            filename = filename_map[original_filename]
        else:
            filename = original_filename
        
        save_path = os.path.join(save_dir, filename)
        
        # 检查文件是否已存在
        if os.path.exists(save_path):
            print(f"Skipping (already exists): {filename}")
            success_count += 1
            continue
        
        # 下载图片
        if download_image(url, save_path):
            success_count += 1
        else:
            failed_count += 1
    
    print(f"\n{'='*50}")
    print(f"Download complete!")
    print(f"Success: {success_count}")
    print(f"Failed: {failed_count}")
    print(f"Total: {len(background_images)}")

if __name__ == "__main__":
    main()
