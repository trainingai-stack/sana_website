import re

with open('target/首页.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 查找 Footer 区域
footer_start = content.find('tag="Footer"')
if footer_start > 0:
    # 获取 Footer 前后 5000 字符
    footer_content = content[footer_start-2000:footer_start+5000]
    
    # 查找宽度相关信息
    widths = re.findall(r'(?:width|max-width)[:\s]+([0-9]+px|[0-9]+%)', footer_content)
    print(f'Found width patterns:')
    for w in set(widths):
        print(f'  - {w}')
    
    # 查找 container 相关
    containers = re.findall(r'(?:max-w-|container|width:)([0-9]+px|[0-9]+)', footer_content)
    print(f'\nFound container patterns:')
    for c in set(containers):
        print(f'  - {c}')
