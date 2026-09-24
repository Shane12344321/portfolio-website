#!/bin/sh
# Assembles src/ into two outputs:
#   artifact.html: fragment for the Artifact publisher (no doctype/html/head/body)
#   index.html: standalone page for any static host
cd "$(dirname "$0")"
frag() {
  cat src/head.html
  echo '<style>'; cat src/room.css src/office.css src/screen.css src/hq.css; echo '</style>'
  cat src/body.html
  echo '<script>'; cat src/content.js src/core.js src/music.js src/wm.js src/art.js src/office.js src/views.js; echo '</script>'
  echo '<script type="module">'; cat src/hq-core.js src/hq-fx.js src/hq-models.js src/hq-main.js; echo '</script>'
}
frag > artifact.html
{
  echo '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  sed -n '1,/<\/style>/p' artifact.html
  echo '</head><body>'
  sed '1,/<\/style>/d' artifact.html
  echo '</body></html>'
} > index.html
