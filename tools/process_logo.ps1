Add-Type -AssemblyName System.Drawing

$srcPath = "C:/Users/HP/.gemini/antigravity/brain/b670bf27-c51c-4db2-a5c3-3edc3505f11e/.user_uploaded/media_1794395214441_f0521014.jpg"
$outLight = "d:/Flashtp/public/images/logo.png"
$outDark = "d:/Flashtp/public/images/ft-logo.png"
$outMob = "d:/Flashtp/public/images/mob-logo.png"

$bmp = [System.Drawing.Bitmap]::new($srcPath)

# Bounding box found:
# minX = 38, maxX = 769 (width = 732)
# minY = 45, maxY = 267 (height = 223)
# Padding: 8px left/right, 8px top/bottom
$pad = 8
$cropX = [Math]::Max(0, 38 - $pad)
$cropY = [Math]::Max(0, 45 - $pad)
$cropW = [Math]::Min($bmp.Width - $cropX, (769 - 38 + 1) + ($pad * 2))
$cropH = [Math]::Min($bmp.Height - $cropY, (267 - 45 + 1) + ($pad * 2))

Write-Output "Cropping to: cropX=$cropX, cropY=$cropY, cropW=$cropW, cropH=$cropH"

# Create output bitmaps (32-bit ARGB with transparent background)
$outBmpLight = [System.Drawing.Bitmap]::new($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outBmpDark = [System.Drawing.Bitmap]::new($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Background reference color (light off-white)
$bgR = 247.0
$bgG = 247.0
$bgB = 247.0

# Process every pixel in cropped region
for ($oy = 0; $oy -lt $cropH; $oy++) {
    $sy = $cropY + $oy
    for ($ox = 0; $ox -lt $cropW; $ox++) {
        $sx = $cropX + $ox
        $p = $bmp.GetPixel($sx, $sy)
        
        $r = [double]$p.R
        $g = [double]$p.G
        $b = [double]$p.B
        
        # Check if in red icon region (sx < 290) or text region (sx >= 290)
        if ($sx -lt 290) {
            # --- RED ICON REGION ---
            # Foreground is red (low G, low B), background is (247, 247, 247)
            $minGB = [Math]::Min($g, $b)
            # Alpha based on suppression of green/blue by red ink
            # Background has minGB ~ 247, pure red has minGB ~ 30
            $alpha = ($bgG - $minGB) / ($bgG - 40.0)
            if ($alpha -lt 0.08) {
                # Completely transparent background
                $cLight = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
                $cDark = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
            } else {
                $alpha = [Math]::Min(1.0, [Math]::Max(0.0, $alpha))
                # S-curve boost to keep icon solid and crisp
                $alphaBoosted = [Math]::Pow($alpha, 0.7)
                $aInt = [int]([Math]::Round($alphaBoosted * 255.0))
                
                # Unmix red color to remove white fringe
                $outR = [int][Math]::Min(255.0, [Math]::Max(0.0, ($r - (1.0 - $alpha) * $bgR) / [Math]::Max(0.1, $alpha)))
                $outG = [int][Math]::Min(255.0, [Math]::Max(0.0, ($g - (1.0 - $alpha) * $bgG) / [Math]::Max(0.1, $alpha)))
                $outB = [int][Math]::Min(255.0, [Math]::Max(0.0, ($b - (1.0 - $alpha) * $bgB) / [Math]::Max(0.1, $alpha)))
                
                $cLight = [System.Drawing.Color]::FromArgb($aInt, $outR, $outG, $outB)
                $cDark = [System.Drawing.Color]::FromArgb($aInt, $outR, $outG, $outB)
            }
        } else {
            # --- TEXT REGION ---
            # Foreground is deep charcoal / black, background is (247, 247, 247)
            $lum = 0.299 * $r + 0.587 * $g + 0.114 * $b
            # In pure background, lum ~ 247. In text, lum ~ 28.
            $alpha = ($bgG - $lum) / ($bgG - 35.0)
            if ($alpha -lt 0.08) {
                # Fully transparent background
                $cLight = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
                $cDark = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
            } else {
                $alpha = [Math]::Min(1.0, [Math]::Max(0.0, $alpha))
                $alphaBoosted = [Math]::Pow($alpha, 0.75)
                $aInt = [int]([Math]::Round($alphaBoosted * 255.0))
                
                # Light version: clean dark charcoal (#111827)
                $cLight = [System.Drawing.Color]::FromArgb($aInt, 17, 24, 39)
                
                # Dark version: crisp white (#FFFFFF)
                $cDark = [System.Drawing.Color]::FromArgb($aInt, 255, 255, 255)
            }
        }
        
        $outBmpLight.SetPixel($ox, $oy, $cLight)
        $outBmpDark.SetPixel($ox, $oy, $cDark)
    }
}

# Save light version (header, mobile)
$outBmpLight.Save($outLight, [System.Drawing.Imaging.ImageFormat]::Png)
$outBmpLight.Save($outMob, [System.Drawing.Imaging.ImageFormat]::Png)

# Save dark version (footer)
$outBmpDark.Save($outDark, [System.Drawing.Imaging.ImageFormat]::Png)

$bmp.Dispose()
$outBmpLight.Dispose()
$outBmpDark.Dispose()

Write-Output "Successfully saved new logos with transparent background!"

