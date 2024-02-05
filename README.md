# Frida-Scripts-Android
The Frida script to hook WebView methods in Android. Welcome to Frida-Hooks (Android)

The Frida script hooks one of the LoadURL Method Calls in Android.

In the Frida script Webview-LoadUrl-JSBridge.js the below methods are hooked in the android WebView class :

Frida -U -f package_name -l BB-Observe-parameters.js

WebView loadUrl() : android.webkit.WebView calls to WebView URL parameters and other WebView attributes to enumerate the WebView.
setJavaScriptEnabled() : To enumerate if JavaScript Enable. getAllowFileAccess() : To enumarate if JavaScript Enable. 
getAllowUniversalAccessFromFileURLs() : To enumarate if JavaScript Enable. 
getAllowFileAccessFromFileURLs() : To enumarate if JavaScript Enable. 
addJavascriptInterfac() : To enumerate the WebView JavaScript bridge name and Class.

In the Frida script WebView-shouldOverrideUrlLoading.js the below methods are hooked from dynamically enumerated class names in the android to view the return value:
shouldOverrideUrlLoading() : Identify the class and the method return value.

In the Frida script WebView-shouldOverrideUrlLoading.js the below methods are hooked in the android class to view the return value:
shouldInterceptRequest() : Identify the class and the method return value.

Some useful Frida commands:
Installing specific versions of Frida: 
pip install Frida-tools==1.2.2 
pip install Frida==12.2.27

To list running applications in the device. 
Frida-ps -Uai

Loading Custom Frida Scripts (external JavaScripts):
Frida -U -f Test -I Webview-LoadUrl-JSBridge.js

kill Frida on Android ps -e | grep Frida-server
kill -9 pid
