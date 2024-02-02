Java.perform( function () {
        var webvieclient = Java.use("android.webkit.WebViewClient");
        webvieclient.shouldInterceptRequest.overload('android.webkit.WebView', 'android.webkit.WebResourceRequest').implementation  = function (webview, webrequest) {
            var shouldInterceptRequest_result =  this.shouldInterceptRequest.overload('android.webkit.WebView', 'android.webkit.WebResourceRequest').call(this, webview, webrequest);    // this.loadUrl.overload("java.lang.String").call(this, a);
            if(shouldInterceptRequest_result == null ){
                console.log("\n[+]  The shouldInterceptRequest value returned is: " + shouldInterceptRequest_result + "\n The  WebView will load the Web resource request.");
            }
            else{
                console.log("\n[+]  The shouldInterceptRequest value returned is: " + shouldInterceptRequest_result + "\n The resource data returned from the TT App .");
            }
            return shouldInterceptRequest_result;
    };
})