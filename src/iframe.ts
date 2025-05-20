const initIframe = () => {
    const wrappers = document.getElementsByClassName('maps-untold');
    if (!wrappers) {
        return
    }

    for (const wrapper of wrappers) {
        const channel = wrapper.getAttribute("data-channel");

        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", `https://app.mapsuntold.io/${channel}`);
        iframe.style.width = "100%";
        iframe.style.height = "660px";

        iframe.style.border = "none";
        iframe.style.display = "block";

        wrapper.appendChild(iframe);
    }
}

if (document.readyState != 'loading') {
    initIframe();
} else {
    document.addEventListener('DOMContentLoaded', initIframe);
} 