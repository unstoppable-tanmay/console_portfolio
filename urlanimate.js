let myEmojis = ["😀",
                "😃",
                "😄",
                "😁",
                "😆",
                "😅",
                "😂",
                "🤣",
                "🙂",
                "🙃",
                "😉",
                "😌",
                "😍",
                "🥰",
                "😘",
                "😗",
                "😙",
                "😚",
                "😋",
                "😛",
                "😝",
                "😜",
                "🤪",
                "🤨",
                "🧐",
                "😎",
                "🥳",
                "😏",
                "😒",
                "😞",
                "😔",
                "😟",
                "😕",
                "🙁",]

const urlAnimate = () => {
    window.location.hash = myEmojis[Math.floor((Date.now() / 100) % myEmojis.length)];
    setTimeout(urlAnimate,50);
};

urlAnimate();