!#/bin/sh
zip -vr src-ui.zip src/ -x "*.DS_Store"
scp src-ui.zip tick@125.17.108.33:/home/tick
