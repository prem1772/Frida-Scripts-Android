# Frida-Scripts-Android
The Frida script to hook WebView methods in Android.
Welcome to Firda-Hooks (Android)

The Frida script hooks one of the LoadURL Method Calls in Android.

In the Frida script Webview-LoadUrl-JSBridge.js the below methods are hooked in the android class to conduct security analysis :

Frida -U -f package_name -l BB-Observe-parameters.js.js

WebView loadUrl() : android.webkit.WebView calls to webview URL paaremters and other WebView arttributies to enumarte the WebView.

setJavaScriptEnabled() : To enumarate if Javascript Enable.
getAllowFileAccess() : To enumarate if Javascript Enable.
getAllowUniversalAccessFromFileURLs() : To enumarate if Javascript Enable.
getAllowFileAccessFromFileURLs() : To enumarate if Javascript Enable.
addJavascriptInterfac() : To enumarate the WebView JavaScript bridge name and Class.

In the Frida script WebView-shouldOverrideUrlLoading.js the below methods are hooked from dynmically enumarted class names in the android to view the return value :

shouldOverrideUrlLoading() : Identify the class and the method return value.

In the Frida script WebView-shouldOverrideUrlLoading.js the below methods are hooked in the android class to view the return value :

shouldInterceptRequest() : Identify the class and the method return value.

Some useful Frida commands:

Installing specific versions of Frida :
pip install frida-tools==1.2.2
pip install frida==12.2.27

To list running applications in the device.
Frida-ps -Uai

Loading Custom Frida Scripts (external JavaScripts)
Frida -U -f tiktok -I diableroot.js

kill frida on Android
ps -e | grep frida-server 

kill -9 pid
