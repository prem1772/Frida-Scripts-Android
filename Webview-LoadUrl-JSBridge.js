if(Java.available){
    Java.perform( function(){

        try{
            var webviewmethod = Java.use("android.webkit.WebView");
            webviewmethod.loadUrl.overload("java.lang.String").implementation = function (loadurl) {
                this.loadUrl(loadurl);
                console.log("\n[+]               ******* New LoadURL Hook  *******              ");
                console.log("\n[+] WebView Load URL: " + loadurl.toString());
                console.log("\n[+] WebView Title:" + this.getTitle());
                console.log('\n[+] Webview Get url : ', this.getUrl());
                console.log('\n[+] Get Original URL :',this.getOriginalUrl());
                console.log('\n[+] Javascript Enable :',this.getSettings().getJavaScriptEnabled());
                console.log('\n[+] AllowUniversalAccessFromFileURLs Enable :',this.getSettings().getAllowUniversalAccessFromFileURLs());
                console.log('\n[+] AllowFileAccessFromFileURLs Enable :',this.getSettings().getAllowFileAccessFromFileURLs());
                console.log('\n[+] AllowFileAccess Enable :',this.getSettings().getAllowFileAccess());
                console.log("\n[+] ********************** End of LoadURL Hook  ********************** ");
                console.log("\n ");
            };

            webviewmethod.addJavascriptInterface.overload('java.lang.Object', 'java.lang.String').implementation = function(webviewobj, name) {
                console.log("\n[+]                ******* Javascript Interface / Webview Bridge if any  *******               ");
                console.log("\n ");
                console.log('\n[+] To expoit WebView JavaScript bridge or native bridge, the below method should be PUBLIC and annotated with @JavascriptInterface , JavaScript should be enabled for Webview, might have to (re)loaded the Javascript to list the object ');
                console.log('\n[+] addJavascriptInterface parameters | string name:',name + ' | Class name : ' + webviewobj);
                this.addJavascriptInterface.overload('java.lang.Object', 'java.lang.String').call(this,webviewobj, name);
                console.log("\n[+] ********************** End of Javascript Interface ********************** ");
                console.log("\n ");
            }

        }
        catch(error){
            console.log(" Try catch error occurred");
            console.log(String(error.stack));
        }
    });
} else{
    console.log("Java is unavailable");
}