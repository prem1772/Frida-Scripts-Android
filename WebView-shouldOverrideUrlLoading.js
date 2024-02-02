Java.perform(() => {

    // SEARCH FOR GSON METHOD
    // Use regex to locate methods matching the following pattern
    var groups = Java.enumerateMethods('*!shouldOverrideUrlLoading(android.webkit.WebView, android.webkit.WebResourceRequest): boolean/s')
    console.log(JSON.stringify(groups, null, 2));

    let ig = 0;
    var className_Arry = [];
    while (ig < groups.length) {

        let i = 0;

        while (i < groups[ig]['classes'].length) {

            className_Arry.push(groups[ig]['classes'][i].name);

            i++;

        }
        ig++;
    }
    console.log(JSON.stringify(className_Arry));
    console.log("\n");
    className_Arry.forEach((sOUL) => {
        var webvieclient = Java.use(sOUL); 
        webvieclient.shouldOverrideUrlLoading.overload('android.webkit.WebView', 'android.webkit.WebResourceRequest').implementation = function(webview, webrequest) {

    var shouldOverrideUrlLoading_result = this.shouldOverrideUrlLoading.overload('android.webkit.WebView', 'android.webkit.WebResourceRequest').call(this, webview, webrequest); // this.loadUrl.overload("java.lang.String").call(this, a);
    if (shouldOverrideUrlLoading_result) {
        console.log("\n[+] Class identified : "+ webvieclient +" method: shouldOverrideUrlLoading value returned is: " + shouldOverrideUrlLoading_result + "\n The  WebView is aborted and WebViewClient Chrome browser etc will load the Web resource request.");
    } else {
        console.log("\n[+] Class identified : "+ webvieclient +" method: shouldOverrideUrlLoading value returned is: " + shouldOverrideUrlLoading_result + "\n The WebView will continue to loading the URL as usual");
    }
    return shouldOverrideUrlLoading_result;
}
    })
    
    });