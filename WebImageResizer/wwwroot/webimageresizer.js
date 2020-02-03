// https://stackoverflow.com/a/23451803
var saveByteArray = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (filename, base64) {
        var bin = atob(base64),
            len = bin.length,
            arr = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            arr[i] = bin.charCodeAt(i);
        }
        var blob = new Blob([arr], { type: "octet/stream" });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
            return;
        }
        url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());