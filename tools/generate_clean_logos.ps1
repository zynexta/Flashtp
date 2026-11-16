Add-Type -AssemblyName System.Drawing

$srcPath = "C:/Users/HP/.gemini/antigravity/brain/b670bf27-c51c-4db2-a5c3-3edc3505f11e/.user_uploaded/media_1794396209273_d21bf3f2.jpg"
if (-not (Test-Path $srcPath)) {
    $srcPath = "C:/Users/HP/.gemini/antigravity/brain/b670bf27-c51c-4db2-a5c3-3edc3505f11e/.user_uploaded/media_1794395214441_f0521014.jpg"
}

$bmp = [System.Drawing.Bitmap]::new($srcPath)

# Bounding box
$pad = 6
$cropX = [Math]::Max(0, 38 - $pad)
$cropY = [Math]::Max(0, 45 - $pad)
$cropW = [Math]::Min($bmp.Width - $cropX, (769 - 38 + 1) + ($pad * 2))
$cropH = [Math]::Min($bmp.Height - $cropY, (267 - 45 + 1) + ($pad * 2))

Write-Output "Processing logo: cropX=$cropX, cropY=$cropY, cropW=$cropW, cropH=$cropH"

$outLight = [System.Drawing.Bitmap]::new($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outWhite = [System.Drawing.Bitmap]::new($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$bgR = 247.0
$bgG = 247.0
$bgB = 247.0

for ($oy = 0; $oy -lt $cropH; $oy++) {
    $sy = $cropY + $oy
    for ($ox = 0; $ox -lt $cropW; $ox++) {
        $sx = $cropX + $ox
        $p = $bmp.GetPixel($sx, $sy)
        
        $r = [double]$p.R
        $g = [double]$p.G
        $b = [double]$p.B
        
        if ($sx -lt 290) {
            # --- RED WINGS ICON ---
            $minGB = [Math]::Min($g, $b)
            if ($minGB -gt 240.0 -and [Math]::Abs($r - $g) -lt 15.0) {
                # Background
                $cLight = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
                $cWhite = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
            } else {
                $alpha = ($bgG - $minGB) / ($bgG - 30.0)
                $alpha = [Math]::Min(1.0, [Math]::Max(0.0, $alpha))
                if ($alpha -lt 0.05) {
                    $cLight = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
                    $cWhite = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
                } else {
                    $alphaBoosted = [Math]::Pow($alpha, 0.72)
                    $aInt = [int]([Math]::Round($alphaBoosted * 255.0))
                    
                    # Unmix
                    $outR = [int][Math]::Min(255.0, [Math]::Max(0.0, ($r - (1.0 - $alpha) * $bgR) / [Math]::Max(0.05, $alpha)))
                    $outG = [int][Math]::Min(255.0, [Math]::Max(0.0, ($g - (1.0 - $alpha) * $bgG) / [Math]::Max(0.05, $alpha)))
                    $outB = [int][Math]::Min(255.0, [Math]::Max(0.0, ($b - (1.0 - $alpha) * $bgB) / [Math]::Max(0.05, $alpha)))
                    
                    # Ensure rich corporate red
                    if ($outR -lt 160) { $outR = 196 }
                    if ($outG -gt 50) { $outG = 32 }
                    if ($outB -gt 60) { $outB = 43 }
                    
                    $cLight = [System.Drawing.Color]::FromArgb($aInt, $outR, $outG, $outB)
                    $cWhite = [System.Drawing.Color]::FromArgb($aInt, $outR, $outG, $outB)
                }
            }
        } else {
            # --- TEXT REGION ---
            $lum = 0.299 * $r + 0.587 * $g + 0.114 * $b
            if ($lum -gt 238.0 -and [Math]::Abs($r - $g) -lt 12.0) {
                # Background
                $cLight = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
                $cWhite = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
            } else {
                $alpha = ($bgG - $lum) / ($bgG - 28.0)
                $alpha = [Math]::Min(1.0, [Math]::Max(0.0, $alpha))
                if ($alpha -lt 0.06) {
                    $cLight = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
                    $cWhite = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
                } else {
                    $alphaBoosted = [Math]::Pow($alpha, 0.75)
                    $aInt = [int]([Math]::Round($alphaBoosted * 255.0))
                    
                    # Light version: deep charcoal #111827
                    $cLight = [System.Drawing.Color]::FromArgb($aInt, 17, 24, 39)
                    
                    # Dark version: pure white #FFFFFF
                    $cWhite = [System.Drawing.Color]::FromArgb($aInt, 255, 255, 255)
                }
            }
        }
        
        $outLight.SetPixel($ox, $oy, $cLight)
        $outWhite.SetPixel($ox, $oy, $cWhite)
    }
}

# Save new uniquely named files to avoid any browser cache issues
$outLight.Save("d:/Flashtp/public/images/flash-transport-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$outWhite.Save("d:/Flashtp/public/images/flash-transport-logo-white.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Also update the classic filenames
$outLight.Save("d:/Flashtp/public/images/logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$outLight.Save("d:/Flashtp/public/images/mob-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$outWhite.Save("d:/Flashtp/public/images/ft-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)

$bmp.Dispose()
$outLight.Dispose()
$outWhite.Dispose()

Write-Output "Generated clean transparent logos: flash-transport-logo.png, flash-transport-logo-white.png"

