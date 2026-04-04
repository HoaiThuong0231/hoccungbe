# Download Vietnamese TTS audio files from Google Translate
$audioDir = "assets\audio"

# Headers to mimic browser request
$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    "Referer" = "https://translate.google.com/"
}

$items = @(
    # Alphabet letters - pronunciation
    @{file="a"; text="A"},
    @{file="aw"; text="Ă"},
    @{file="aa"; text="Â"},
    @{file="b"; text="Bờ"},
    @{file="c"; text="Cờ"},
    @{file="d"; text="Dờ"},
    @{file="dd"; text="Đờ"},
    @{file="e"; text="E"},
    @{file="ee"; text="Ê"},
    @{file="g"; text="Gờ"},
    @{file="h"; text="Hờ"},
    @{file="i"; text="I"},
    @{file="k"; text="Ca"},
    @{file="l"; text="Lờ"},
    @{file="m"; text="Mờ"},
    @{file="n"; text="Nờ"},
    @{file="o"; text="O"},
    @{file="oo"; text="Ô"},
    @{file="ow"; text="Ơ"},
    @{file="p"; text="Pờ"},
    @{file="q"; text="Cu"},
    @{file="r"; text="Rờ"},
    @{file="s"; text="Sờ"},
    @{file="t"; text="Tờ"},
    @{file="u"; text="U"},
    @{file="uw"; text="Ư"},
    @{file="v"; text="Vờ"},
    @{file="x"; text="Xờ"},
    @{file="y"; text="Y"},

    # Full letter sounds (chữ X)
    @{file="chu_a"; text="chữ a"},
    @{file="chu_aw"; text="chữ ă"},
    @{file="chu_aa"; text="chữ â"},
    @{file="chu_b"; text="chữ bê"},
    @{file="chu_c"; text="chữ xê"},
    @{file="chu_d"; text="chữ dê"},
    @{file="chu_dd"; text="chữ đê"},
    @{file="chu_e"; text="chữ e"},
    @{file="chu_ee"; text="chữ ê"},
    @{file="chu_g"; text="chữ giê"},
    @{file="chu_h"; text="chữ hát"},
    @{file="chu_i"; text="chữ i"},
    @{file="chu_k"; text="chữ ca"},
    @{file="chu_l"; text="chữ e lờ"},
    @{file="chu_m"; text="chữ em mờ"},
    @{file="chu_n"; text="chữ en nờ"},
    @{file="chu_o"; text="chữ o"},
    @{file="chu_oo"; text="chữ ô"},
    @{file="chu_ow"; text="chữ ơ"},
    @{file="chu_p"; text="chữ pê"},
    @{file="chu_q"; text="chữ cu"},
    @{file="chu_r"; text="chữ e rờ"},
    @{file="chu_s"; text="chữ ét sì"},
    @{file="chu_t"; text="chữ tê"},
    @{file="chu_u"; text="chữ u"},
    @{file="chu_uw"; text="chữ ư"},
    @{file="chu_v"; text="chữ vê"},
    @{file="chu_x"; text="chữ ích xì"},
    @{file="chu_y"; text="chữ y"},

    # Vocabulary words
    @{file="an"; text="Ăn"},
    @{file="am"; text="Ấm"},
    @{file="bong"; text="Bóng"},
    @{file="ca"; text="Cá"},
    @{file="de"; text="Dê"},
    @{file="den"; text="Đèn"},
    @{file="embe"; text="Em bé"},
    @{file="ech"; text="Ếch"},
    @{file="ga"; text="Gà"},
    @{file="hoa"; text="Hoa"},
    @{file="ich"; text="Ích"},
    @{file="keo"; text="Kẹo"},
    @{file="la"; text="Lá"},
    @{file="meo"; text="Mèo"},
    @{file="nai"; text="Nai"},
    @{file="ong"; text="Ong"},
    @{file="oto"; text="Ô tô"},
    @{file="oi"; text="Ơi"},
    @{file="pin"; text="Pin"},
    @{file="qua"; text="Quả"},
    @{file="rua"; text="Rùa"},
    @{file="sao"; text="Sao"},
    @{file="tho"; text="Thỏ"},
    @{file="ung"; text="Ủng"},
    @{file="uocmo"; text="Ước mơ"},
    @{file="voi"; text="Voi"},
    @{file="xedap"; text="Xe đạp"},
    @{file="yeu"; text="Yêu"},

    # More vocabulary
    @{file="cho"; text="Chó"},
    @{file="chuoi"; text="Chuối"},
    @{file="cam"; text="Cam"},
    @{file="nho"; text="Nho"},
    @{file="dua"; text="Dưa"},
    @{file="xoai"; text="Xoài"},
    @{file="dau"; text="Dâu"},
    @{file="sach"; text="Sách"},
    @{file="but"; text="Bút"},
    @{file="xe"; text="Xe"},
    @{file="mu"; text="Mũ"},
    @{file="giay"; text="Giày"},
    @{file="mua"; text="Mưa"},
    @{file="may"; text="Mây"},
    @{file="nang"; text="Nắng"},
    @{file="bien"; text="Biển"},
    @{file="tao"; text="Táo"},

    # Feedback sounds
    @{file="dung_roi"; text="Đúng rồi!"},
    @{file="sai_roi"; text="Sai rồi!"},
    @{file="gioi_lam"; text="Giỏi lắm!"},
    @{file="tuyet_voi"; text="Tuyệt vời!"}
)

$total = $items.Count
$count = 0

foreach ($item in $items) {
    $count++
    $outFile = Join-Path $audioDir "$($item.file).mp3"
    
    if (Test-Path $outFile) {
        Write-Host "[$count/$total] SKIP (exists): $($item.file).mp3"
        continue
    }

    $encodedText = [System.Uri]::EscapeDataString($item.text)
    $url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=vi&q=$encodedText"
    
    try {
        Invoke-WebRequest -Uri $url -Headers $headers -OutFile $outFile -ErrorAction Stop
        Write-Host "[$count/$total] OK: $($item.file).mp3 ($($item.text))"
    } catch {
        Write-Host "[$count/$total] FAIL: $($item.file).mp3 - $($_.Exception.Message)"
    }
    
    # Small delay to avoid rate limiting
    Start-Sleep -Milliseconds 300
}

Write-Host "`nDone! Downloaded $count audio files."
