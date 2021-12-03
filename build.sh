#!/bin/sh

CYANBG="46m"
CYAN="\e[96m"
RED="\e[31m"
GREEN="\e[32m"
END="\e[0m"
BOLDCYAN="\e[1;${CYANBG}"
WORKSPACE="${BOLDCYAN}[Docs]${END}"
BUILDMSG="${WORKSPACE} ${CYAN}Starting to build the project...${END}"
BUILDSUCCESS="${WORKSPACE} ${GREEN}Build success.${END}"
MOVING="${WORKSPACE} ${CYAN}Moving service worker to root from /resources${END}"
INJECTING="${WORKSPACE} ${CYAN}Injecting Service Worker Registry${END}"
INJECTINGSUCCESS="${WORKSPACE} ${GREEN}Injecting success.${END}"
STARTING="${WORKSPACE} ${CYAN}Starting to serve the files.${END}"
ERROR="${WORKSPACE} ${RED}There was error. EXITING${END}"

echo -e "${BUILDMSG}"
(npx retype build && echo -e "${BUILDSUCCESS}") || ( echo -e "${ERROR}" && sleep 3 && exit 1)
exitcode=$?
if [ $exitcode != 0 ]; then exit $exitcode; fi


echo -e "${MOVING}"
mv build/resources/js/service-worker.js build
echo -e "${INJECTING}"
node prebuilder.mjs
echo -e "${INJECTINGSUCCESS}"
echo -e "${STARTING}"
# npx retype run