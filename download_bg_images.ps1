# 创建保存目录
$saveDir = "public/images/backgrounds"
New-Item -ItemType Directory -Force -Path $saveDir | Out-Null

# 背景图片 URL 和文件名映射
$images = @(
    @{Url="https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/5ec7781183324bf5a6d9af2a161a50aa.png"; Filename="bg-card-texture.png"},
    @{Url="https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/ef153785f4ea4f48a7b3ba5a2c141a83.png"; Filename="bg-card-dark.png"},
    @{Url="https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260325/f0283a3b8a0f446191875e27ca654806.jpg"; Filename="bg-main.jpg"},
    @{Url="https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/8dc5f6a93e854be28f713a828b97b289.png"; Filename="bg-pattern-1.png"},
    @{Url="https://819896296302317568.static.wqdcdn.com/res/1081120155347587072/20260404/e02a283846884423a7e165fe3c99c06f.png"; Filename="bg-pattern-2.png"}
)

$successCount = 0
$failedCount = 0

foreach ($img in $images) {
    $url = $img.Url
    $filename = $img.Filename
    $savePath = Join-Path $saveDir $filename
    
    # 检查文件是否已存在
    if (Test-Path $savePath) {
        Write-Host "Skipping (already exists): $filename" -ForegroundColor Yellow
        $successCount++
        continue
    }
    
    Write-Host "Downloading: $filename" -ForegroundColor Cyan
    
    try {
        $response = Invoke-WebRequest -Uri $url -OutFile $savePath -UseBasicParsing -ErrorAction Stop
        Write-Host "✓ Saved to: $savePath" -ForegroundColor Green
        $successCount++
    }
    catch {
        Write-Host "✗ Failed to download ${filename}: $_" -ForegroundColor Red
        $failedCount++
    }
}

Write-Host "`n==================================================" -ForegroundColor Cyan
Write-Host "Download complete!" -ForegroundColor Green
Write-Host "Success: $successCount" -ForegroundColor Green
Write-Host "Failed: $failedCount" -ForegroundColor Red
Write-Host "Total: $($images.Count)" -ForegroundColor Cyan
