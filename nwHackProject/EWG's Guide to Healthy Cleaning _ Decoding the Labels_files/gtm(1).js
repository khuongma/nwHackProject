
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"98",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"quicksign-email\").value;return a\u0026\u0026a.length?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function b(a,b){var c=RegExp(\"[?\\x26]\"+b+\"\\x3d([^\\x26]*)\").exec(a);return c\u0026\u0026decodeURIComponent(c[1].replace(\/\\+\/g,\" \"))}var a=window.location.search;if(b(a,\"Amount\"))return b(a,\"Amount\");if(b(a,\"thankyouredirect\"))return a=b(a,\"thankyouredirect\"),b(a,\"Amount\");if(b(a,\"amt\"))return b(a,\"amt\")})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/^\\\/search\\\/site\\\/(.*)\/;if(a.test(",["escape",["macro",2],8,16],"))return\"\/search\/site?search\\x3d\"+a.exec(",["escape",["macro",2],8,16],")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return location.href.split(\"\/\")[3].split(\"#\")[0]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=google_tag_manager[\"GTM-PPNMZJ\"].dataLayer.get(\"ecommerce\");console.log(a);var c=[];for(i=0;i\u003Ca.purchase.products.length;i++){var b={name:\"",["escape",["macro",5],7],"\"};b.id=a.purchase.products[i].id;b.price=a.purchase.products[i].price;b.category=a.purchase.products[i].category;b.quantity=a.purchase.products[i].quantity;c.push(b)}return{ecommerce:{purchase:{actionField:{id:a.purchase.actionField.id,affiliation:a.purchase.actionField.affiliation,revenue:a.purchase.actionField.revenue,\ntax:a.purchase.actionField.tax,shipping:a.purchase.actionField.shipping},products:c}}}}catch(d){}})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"ewg.org, amazonaws.com, everyaction.com"
    },{
      "function":"__c",
      "vtp_value":"UA-296149-25"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__smm",
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","pdf","value","PDF"],["map","key","xls","value","Excel"],["map","key","xlsx","value","Excel"],["map","key","doc","value","Word"],["map","key","docx","value","Word"],["map","key","ppt","value","PowerPoint"],["map","key","pptx","value","PowerPoint"],["map","key","txt","value","text"],["map","key","mp3","value","MP3"]]
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__f"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":["macro",10],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-296149-25",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"PATH"
    },{
      "function":"__v",
      "vtp_name":"donForm",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"donAmount",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__d",
      "vtp_elementSelector":"li.DosDonts-item",
      "vtp_selectorType":"CSS"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__ua",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","2","group",["macro",4]],["map","index","3","group",["macro",9]]],
      "vtp_autoLinkDomains":["macro",10],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":2
    },{
      "function":"__cl",
      "tag_id":4
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "tag_id":6
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Mailto Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["template","Person emailed: ",["macro",12]],
      "vtp_eventLabel":["template","Page emailed from:  ",["macro",7]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",11],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"Outbound Links",
      "vtp_eventAction":["template","Click:  ",["macro",12]],
      "vtp_eventLabel":["template","On Page:  ",["macro",7]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",11],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"File download",
      "vtp_eventAction":["template",["macro",17],["macro",12]],
      "vtp_eventLabel":["template","Downloaded from page: ",["macro",7]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "tag_id":11
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":12
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":13
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":14
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":16
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EWG Verified",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Splash",
      "vtp_eventLabel":["macro",18],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template","Share via: ",["macro",21]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["template","Click: ",["macro",14]],
      "vtp_eventLabel":["template","On Page: ",["macro",7]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template","Connect with EWG: ",["macro",21]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["template","Clicked on: ",["macro",14]],
      "vtp_eventLabel":["macro",7],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Explore Home Guides",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["template","Click: ",["macro",14]," | ",["macro",23]],
      "vtp_eventLabel":["template","On Page ",["macro",7]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Scroll Depth Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":["macro",7],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template","Share via: ",["macro",21]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click: AddThis",
      "vtp_eventLabel":["template","On Page: ",["macro",7]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download PDF",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",25],
      "vtp_eventLabel":["macro",26],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"App download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Google app download",
      "vtp_eventLabel":["template","On Page:  ",["macro",7]],
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"App download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"iTunes app download",
      "vtp_eventLabel":["template","On Page:  ",["macro",7]],
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":35
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",27],
      "vtp_eventCategory":["macro",28],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",29],
      "vtp_eventLabel":["macro",30],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",6],
      "vtp_fieldsToSet":["list",["map","fieldName","nonInteraction","value","true"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",22],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":41
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1071783566",
      "vtp_conversionLabel":"Pg0mCKq7vZYBEI69iP8D",
      "vtp_url":["macro",31],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":43
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":true,
      "vtp_acceptIncoming":true,
      "vtp_linkerDomains":"ewg.org,act.ewg.org,signforgood.com,petitions.signforgood.com,surveys.signforgood.com,secure.everyaction.com,everyaction.com",
      "vtp_formDecoration":false,
      "vtp_urlPosition":"query",
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":45
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",32],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1071783566",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"qBu3CLe-hZgBEI69iP8D",
      "vtp_url":["macro",31],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":46
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-PMD7D89",
      "vtp_gaSettings":["macro",22],
      "tag_id":50
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"17156808",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":51
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",32],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"698108002",
      "vtp_conversionLabel":"CTUrCKH3n7QBEOKQ8cwC",
      "vtp_url":["macro",31],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":52
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_goalValue":["macro",32],
      "vtp_eventCategory":"Donation",
      "vtp_tagId":"17156808",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "tag_id":54
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"698108002",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",31],
      "tag_id":55
    },{
      "function":"__cl",
      "tag_id":56
    },{
      "function":"__cl",
      "tag_id":57
    },{
      "function":"__cl",
      "tag_id":58
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_48",
      "tag_id":59
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_49",
      "tag_id":60
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_50",
      "tag_id":61
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_51",
      "tag_id":62
    },{
      "function":"__cl",
      "tag_id":63
    },{
      "function":"__cl",
      "tag_id":64
    },{
      "function":"__cl",
      "tag_id":65
    },{
      "function":"__cl",
      "tag_id":66
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_56",
      "tag_id":67
    },{
      "function":"__cl",
      "tag_id":68
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_61",
      "tag_id":69
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_63",
      "tag_id":70
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_74",
      "tag_id":71
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_76",
      "tag_id":72
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_78",
      "tag_id":73
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"582335_80",
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.setTimeout(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"www.lightboxcdn.com\/vendor\/a3241e66-5c6a-4d48-8161-225ef2c02084\/lightbox_inline.js?mb\\x3d\"+(new Date).getTime();var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)},500)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n @preserve\n jquery.scrolldepth.js | v0.4.1\n Copyright (c) 2014 Rob Flaherty (@robflaherty)\n Licensed under the MIT and GPL licenses.\n*\/\n(function(c,h,m,u){var n={elements:[],minHeight:0,percentage:!0,testing:!1},k=c(h),f=[];c.scrollDepth=function(d){function l(a,b,e){d.testing?c(\"#console\").html(a+\": \"+b):\"undefined\"!==typeof dataLayer?(dataLayer.push({event:\"ScrollDistance\",eventCategory:\"Scroll Depth\",eventAction:a,eventLabel:b,eventValue:1,eventNonInteraction:!0}),2\u003Carguments.length\u0026\u0026dataLayer.push({event:\"ScrollTiming\",eventCategory:\"Scroll Depth\",eventAction:a,eventLabel:b,eventTiming:e})):(\"undefined\"!==typeof ga\u0026\u0026(ga(\"send\",\n\"event\",\"Scroll Depth\",a,b,1,{nonInteraction:1}),2\u003Carguments.length\u0026\u0026ga(\"send\",\"timing\",\"Scroll Depth\",a,e,b)),\"undefined\"!==typeof _gaq\u0026\u0026(_gaq.push([\"_trackEvent\",\"Scroll Depth\",a,b,1,!0]),2\u003Carguments.length\u0026\u0026_gaq.push([\"_trackTiming\",\"Scroll Depth\",a,e,b,100])))}function p(a,b,e){c.each(a,function(a,g){-1===c.inArray(a,f)\u0026\u0026b\u003E=g\u0026\u0026(l(\"Percentage\",a,e),f.push(a))})}function q(a,b,e){c.each(a,function(a,g){-1===c.inArray(g,f)\u0026\u0026c(g).length\u0026\u0026b\u003E=c(g).offset().top\u0026\u0026(l(\"Elements\",g,e),f.push(g))})}function r(a,\nb){var e,c,g,d=null,f=0,k=function(){f=new Date;d=null;g=a.apply(e,c)};return function(){var h=new Date;f||(f=h);var l=b-(h-f);e=this;c=arguments;0\u003E=l?(clearTimeout(d),d=null,f=h,g=a.apply(e,c)):d||(d=setTimeout(k,l));return g}}var t=+new Date;d=c.extend({},n,d);c(m).height()\u003Cd.minHeight||(l(\"Percentage\",\"0%\"),k.on(\"scroll.scrollDepth\",r(function(){var a=c(m).height(),b=h.innerHeight?h.innerHeight:k.height();b=k.scrollTop()+b;a={\"25%\":parseInt(.25*a,10),\"50%\":parseInt(.5*a,10),\"75%\":parseInt(.75*\na,10),\"100%\":a-1};var e=+new Date-t;f.length\u003E=4+d.elements.length?k.off(\"scroll.scrollDepth\"):(d.elements\u0026\u0026q(d.elements,b,e),d.percentage\u0026\u0026p(a,b,e))},500)))}})(jQuery,window,document);jQuery.scrollDepth();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:1161534,hjsv:6};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"https:\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/d1aqhv4sn5kxtx.cloudfront.net\/actiontag\/at.js\" crossorigin=\"anonymous\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"431673573640385\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:\"",["escape",["macro",32],7],"\",currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=431673573640385\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"IS-Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"431673573640385\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=431673573640385\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.js"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"mailto"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"Share-link"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_61($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"ewg.org|amazonws.com|eatwellguide.org"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"http"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"\\.(pdf|docx|doc|mp3|txt|ppt|zip|xls)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"EWGSplashSignUp"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"signUp_splash"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"signupgo"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"emailsubmit"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"submit_signup_form"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"dia-submit"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"signupbtnimg"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"emailsignup_submit"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"submit_form_submit222"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"page=ty"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"EmailSignup-form EmailSignup-col u-form js-validate js-ajax"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_48($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"donate=confirm"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"donate-thankyou"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"thank_you_page_KEY=2723"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"thank_you_page_KEY=2688"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"one_id_optin.sjs"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"EWGSplashLearnMore"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"www.ewg.org\/ewgverified"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"EWGSplashSkinDeep"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"EWGSplashNo"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"DosDonts-share-link"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_49($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"UtilNav-social-link UtilNav-link"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_50($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"Footer-connect-link"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_51($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"Hero-cta Button Button--white"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"EXPLORE HOME GUIDES"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"healthyhomeguide"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"Nav-toggle"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"Explore Home Guides"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"GroupMenu-dropdown-link"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"GuideFilter-select"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"Related-link"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_56($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"Button c-link-green"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"SEE ALL GUIDES"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"ScrollDistance"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"at-share-btn"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_63($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/search\/site"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"FN2018SignUp"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"FN2018SignUp"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":".pdf"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_74($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"^https:\/\/play.google.com\/store\/apps\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_78($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"^https:\/\/itunes.apple.com\/us\/app\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_76($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"secure.ewg.org\/p\/dia"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^$|((^|,)582335_80($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"FormEvent"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"transaction"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(ktPY8uQlZ0S1mPhkcKxOAw2|8p6iUDJZAke0b52UBUPsWQ2)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"secure.ewg.org"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"SignupForm|PetitionForm"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"Contribute"
    }],
  "rules":[
    [["if",0,1],["add",0,1,2,6,10,28,57,61]],
    [["if",2,3,4],["add",3]],
    [["if",3,4,9],["unless",8],["add",4]],
    [["if",6,10],["add",5]],
    [["if",11,12],["add",7,12]],
    [["if",12,13],["add",7,12]],
    [["if",12,14],["add",7,12]],
    [["if",12,15],["add",7,12]],
    [["if",12,16],["add",7,12]],
    [["if",12,17],["add",7,12]],
    [["if",12,18],["add",7,12]],
    [["if",12,19],["add",7,12]],
    [["if",12,20],["add",7,12]],
    [["if",1,21],["add",7,12]],
    [["if",22,23,24],["add",7]],
    [["if",1,25],["add",8]],
    [["if",26],["add",9]],
    [["if",1,27],["add",11,20]],
    [["if",1,28],["add",11,20]],
    [["if",1,25],["unless",29],["add",11]],
    [["if",12,30,31],["add",13]],
    [["if",12,31,32],["add",13]],
    [["if",12,31,33],["add",13]],
    [["if",6,34,35],["add",14]],
    [["if",5,6,7],["add",14],["block",3]],
    [["if",6,36,37],["add",15]],
    [["if",6,38,39],["add",15]],
    [["if",12,40,41,42],["add",16]],
    [["if",12,42,43,44],["add",16]],
    [["if",12,42,45],["add",16]],
    [["if",12,42,46],["add",16]],
    [["if",6,42,47,48],["add",16]],
    [["if",12,42,49,50],["add",16]],
    [["if",51],["add",17]],
    [["if",6,52,53],["add",18]],
    [["if",1,54],["add",19]],
    [["if",55,56],["add",21]],
    [["if",6,57,58],["add",22]],
    [["if",6,59,60],["add",23]],
    [["if",6,61,62],["add",24]],
    [["if",23,63,64],["add",25]],
    [["if",65],["add",26]],
    [["if",66],["add",27,30,33,34,59]],
    [["if",1],["add",29,31,32,35,55,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,53,54]],
    [["if",66,67],["add",33,34,59]],
    [["if",1,68],["add",51]],
    [["if",69],["add",56]],
    [["if",1],["unless",70],["add",58]],
    [["if",65,71,72],["add",60]]]
},
"runtime":[
[],[]
]



};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ha;a:{var ia={Lf:!0},ja={};try{ja.__proto__=ia;ha=ja.Lf;break a}catch(a){}ha=!1}da=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=da,ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,pa=null;var qa=function(){},ra=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},ua=function(a){return"number"==typeof a&&!isNaN(a)},va=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},wa=function(a,b){if(a&&va(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},xa=function(a,b){if(!ua(a)||
!ua(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},za=function(a,b){for(var c=new ya,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Aa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ca=function(a){return Math.round(Number(a))||0},Da=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ea=function(a){var b=[];if(va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Fa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ga=function(){return(new Date).getTime()},ya=function(){this.prefix="gtm.";this.values={}};ya.prototype.set=function(a,b){this.values[this.prefix+a]=b};ya.prototype.get=function(a){return this.values[this.prefix+a]};ya.prototype.contains=function(a){return void 0!==this.get(a)};
var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Na=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Oa=function(a){if(null==a)return String(a);var b=Na.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Pa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Qa=function(a){if(!a||"object"!=Oa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Pa(a,"constructor")&&!Pa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Pa(a,b)},C=function(a,b){var c=b||("array"==Oa(a)?[]:{}),d;for(d in a)if(Pa(a,d)){var e=a[d];"array"==Oa(e)?("array"!=Oa(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Qa(e)?(Qa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};
var Ra=[],Sa={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ta=function(a){return Sa[a]},Ua=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ya=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},cb=function(a){return bb[a]};Ra[7]=function(a){return String(a).replace(Ya,cb)};
Ra[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ya,cb)+"'"}};var lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},nb=function(a){return mb[a]};Ra[16]=function(a){return a};var pb;
var qb=[],rb=[],sb=[],ub=[],vb=[],wb={},xb,yb,zb,Ab=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Bb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=wb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):pb(c,e,b)},Db=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Cb(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=wb[b];return c?c.priorityOverride||0:0},Cb=function(a,b,c){if(va(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Cb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=qb[g];if(!h||b.Zc(h))return;c[g]=!0;try{var k=Db(h,b,c);k.vtp_gtmEventId=b.id;d=Bb(k,b);zb&&(d=zb.mg(d,k))}catch(y){b.Ae&&b.Ae(y,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Cb(a[l],b,c)]=Cb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Cb(a[n],b,c);yb&&(m=m||q===yb.Gb);d.push(q)}return yb&&m?yb.pg(d):d.join("");case "escape":d=Cb(a[1],b,c);if(yb&&va(a[1])&&"macro"===a[1][0]&&yb.Ug(a))return yb.lh(d);d=String(d);for(var u=2;u<a.length;u++)Ra[a[u]]&&(d=Ra[a[u]](d));return d;case "tag":var p=a[1];if(!ub[p])throw Error("Unable to resolve tag reference "+p+".");return d={oe:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Gb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return xb(Db(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Hb=function(){var a=function(b){return{toString:function(){return b}}};return{Bd:a("convert_case_to"),Cd:a("convert_false_to"),Dd:a("convert_null_to"),Ed:a("convert_true_to"),Fd:a("convert_undefined_to"),Nh:a("debug_mode_metadata"),na:a("function"),Cf:a("instance_name"),Df:a("live_only"),Ef:a("malware_disabled"),Ff:a("metadata"),Uh:a("original_vendor_template_id"),Gf:a("once_per_event"),$d:a("once_per_load"),ae:a("setup_tags"),be:a("tag_id"),ce:a("teardown_tags")}}();var Ib=null,Lb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Ib=Jb(a);for(var e=0;e<rb.length;e++){var g=rb[e],h=Kb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<ub.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Kb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ib(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Ib(e[g]);if(2===h)return null;
if(1===h)return!1}return!0},Jb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,F=document,$b=navigator,ac=F.currentScript&&F.currentScript.src,bc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},cc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},dc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;cc(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var g=ma.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&na.test(k)){pa=k;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},ec=function(){if(ac){var a=ac.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},fc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);cc(c,b);void 0!==a&&(c.src=a);return c},gc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},G=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},H=function(a){D.setTimeout(a,0)},ic=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},lc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},mc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var oc=function(a){return nc?F.querySelectorAll(a):null},pc=function(a,b){if(!nc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qc=!1;if(F.querySelectorAll)try{var rc=F.querySelectorAll(":root");rc&&1==rc.length&&rc[0]==F.documentElement&&(qc=!0)}catch(a){}var nc=qc;var I={ma:"_ee",zc:"event_callback",Sa:"event_timeout",w:"gtag.config",O:"allow_ad_personalization_signals",Gc:"restricted_data_processing",U:"cookie_expires",Ra:"cookie_update",Ca:"session_duration",V:"user_properties"};var Ic=/[A-Z]+/,Jc=/\s/,Kc=function(a){if(f(a)&&(a=Fa(a),!Jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},Mc=function(a){for(var b={},c=0;c<a.length;++c){var d=Kc(a[c]);d&&(b[d.id]=d)}Lc(b);var e=[];Aa(b,function(g,h){e.push(h)});return e};
function Lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Nc={},Oc=null,Pc=Math.random();Nc.m="GTM-PPNMZJ";Nc.Kb="121";var Qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Rc="www.googletagmanager.com/gtm.js";var Sc=Rc,Tc=null,Uc=null,Vc=null,Wc="//www.googletagmanager.com/a?id="+Nc.m+"&cv=98",Xc={},Yc={},Zc=function(){var a=Oc.sequence||0;Oc.sequence=a+1;return a};var $c={},P=function(a,b){$c[a]=$c[a]||[];$c[a][b]=!0},ad=function(a){for(var b=[],c=$c[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var bd=function(){return"&tc="+ub.filter(function(a){return a}).length},fd=function(){dd||(dd=D.setTimeout(ed,500))},ed=function(){dd&&(D.clearTimeout(dd),dd=void 0);void 0===gd||hd[gd]&&!id&&!jd||(kd[gd]||ld.Wg()||0>=md--?(P("GTM",1),kd[gd]=!0):(ld.uh(),gc(nd()),hd[gd]=!0,od=jd=id=""))},nd=function(){var a=gd;if(void 0===a)return"";var b=ad("GTM"),c=ad("TAGGING");return[pd,hd[a]?"":"&es=1",qd[a],b?"&u="+b:"",c?"&ut="+c:"",bd(),id,jd,od,"&z=0"].join("")},rd=function(){return[Wc,"&v=3&t=t","&pid="+
xa(),"&rv="+Nc.Kb].join("")},sd="0.005000">Math.random(),pd=rd(),td=function(){pd=rd()},hd={},id="",jd="",od="",gd=void 0,qd={},kd={},dd=void 0,ld=function(a,b){var c=0,d=0;return{Wg:function(){if(c<a)return!1;Ga()-d>=b&&(c=0);return c>=a},uh:function(){Ga()-d>=b&&(c=0);c++;d=Ga()}}}(2,1E3),md=1E3,ud=function(a,b){if(sd&&!kd[a]&&gd!==a){ed();gd=a;id="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";qd[a]="&e="+c+"&eid="+a;fd()}},vd=function(a,b,c){if(sd&&!kd[a]&&b){a!==gd&&
(ed(),gd=a);var d=String(b[Hb.na]||"").replace(/_/g,"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;id=id?id+"."+e:"&tr="+e;fd();2022<=nd().length&&ed()}},wd=function(a,b,c){if(sd&&!kd[a]){a!==gd&&(ed(),gd=a);var d=c+b;jd=jd?jd+"."+d:"&epr="+d;fd();2022<=nd().length&&ed()}};var xd={},yd=new ya,zd={},Ad={},Dd={name:"dataLayer",set:function(a,b){C(Ma(a,b),zd);Bd()},get:function(a){return Cd(a,2)},reset:function(){yd=new ya;zd={};Bd()}},Cd=function(a,b){if(2!=b){var c=yd.get(a);if(sd){var d=Ed(a);c!==d&&P("GTM",5)}return c}return Ed(a)},Ed=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:Gd(d)},Gd=function(a){for(var b=zd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Id=function(a,b){Ad.hasOwnProperty(a)||(yd.set(a,b),C(Ma(a,b),zd),Bd())},Bd=function(a){Aa(Ad,function(b,c){yd.set(b,c);C(Ma(b,void 0),zd);C(Ma(b,c),zd);a&&delete Ad[b]})},Jd=function(a,b,c){xd[a]=xd[a]||{};var d=1!==c?Ed(b):yd.get(b);"array"===Oa(d)||"object"===Oa(d)?xd[a][b]=C(d):xd[a][b]=d},Kd=function(a,b){if(xd[a])return xd[a][b]};var Ld=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===Md()||d||"http:"!=D.location.protocol?a:b)+c},Md=function(){var a=ec(),b;if(1===a)a:{var c=Sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var ae=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),be={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ce={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},de="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var fe=function(a){Yc.pntr=Yc.pntr||["nonGoogleScripts"];Yc.snppx=Yc.snppx||["nonGoogleScripts"];Yc.qpx=Yc.qpx||["nonGooglePixels"];var b=Cd("gtm.whitelist");b&&P("GTM",9);
var c=b&&La(Ea(b),be),d=Cd("gtm.blacklist");d||(d=Cd("tagTypeBlacklist"))&&P("GTM",3);d?P("GTM",8):d=[];ee()&&(d=Ea(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Ea(d),"google")&&P("GTM",2);var e=d&&La(Ea(d),ce),g={};return function(h){var k=h&&h[Hb.na];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];
var l=Yc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>r(c,l[q])){P("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=za(e,l||[]);t&&P("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=za(e,de));return g[k]=v}},ee=function(){return ae.test(D.location&&D.location.hostname)};var ge={mg:function(a,b){b[Hb.Bd]&&"string"===typeof a&&(a=1==b[Hb.Bd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Hb.Dd)&&null===a&&(a=b[Hb.Dd]);b.hasOwnProperty(Hb.Fd)&&void 0===a&&(a=b[Hb.Fd]);b.hasOwnProperty(Hb.Ed)&&!0===a&&(a=b[Hb.Ed]);b.hasOwnProperty(Hb.Cd)&&!1===a&&(a=b[Hb.Cd]);return a}};var he={active:!0,isWhitelisted:function(){return!0}},ie=function(a){var b=Oc.zones;!b&&a&&(b=Oc.zones=a());return b};var je=function(){};var ke=!1,le=0,me=[];function ne(a){if(!ke){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ke=!0;for(var e=0;e<me.length;e++)H(me[e])}me.push=function(){for(var g=0;g<arguments.length;g++)H(arguments[g]);return 0}}}function oe(){if(!ke&&140>le){le++;try{F.documentElement.doScroll("left"),ne()}catch(a){D.setTimeout(oe,50)}}}var pe=function(a){ke?a():me.push(a)};var qe={},re={},se=function(a,b,c,d){if(!re[a]||Qc[b]||"__zone"===b)return-1;var e={};Qa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return re[a].tags.push(e)-1},te=function(a,b,c,d){if(re[a]){var e=re[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ue(a){for(var b=qe[a]||[],c=0;c<b.length;c++)b[c]();qe[a]={push:function(d){d(Nc.m,re[a])}}}
var xe=function(a,b,c){re[a]={tags:[]};ra(b)&&ve(a,b);c&&D.setTimeout(function(){return ue(a)},Number(c));return we(a)},ve=function(a,b){qe[a]=qe[a]||[];qe[a].push(Ia(function(){return H(function(){b(Nc.m,re[a])})}))};function we(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&ue(a)})},Xf:function(){d=!0;b>=c&&ue(a)}}};var ye=function(){function a(d){return!ua(d)||0>d?0:d}if(!Oc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ua(Dd.get("gtm.start"))?Dd.get("gtm.start"):0;Oc._li={cst:a(c-b),cbt:a(Uc-b)}}};var Ce=!1,De=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ee=!1;
var Fe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||P("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}ye();return D[b]},Ge=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=De();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Ie=function(){},He=function(){return D.GoogleAnalyticsObject||"ga"};var Ke=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Le=/:[0-9]+$/,Me=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ne(a.protocol)||Ne(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Le,"").toLowerCase());var g=b,h,k=Ne(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=Oe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Le,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||P("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Me(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ne=function(a){return a?a.replace(":","").toLowerCase():""},Oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Qe=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||P("TAGGING",1),c="/"+c);var d=b.hostname.replace(Le,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function Ve(a,b,c,d){var e=ub[a],g=We(a,b,c,d);if(!g)return null;var h=Cb(e[Hb.ae],c,[]);if(h&&h.length){var k=h[0];g=Ve(k.index,{s:g,o:1===k.oe?b.terminate:g,terminate:b.terminate},c,d)}return g}
function We(a,b,c,d){function e(){if(g[Hb.Ef])k();else{var w=Db(g,c,[]),y=se(c.id,String(g[Hb.na]),Number(g[Hb.be]),w[Hb.Ff]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Ga()-B;vd(c.id,ub[a],"5");te(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Ga()-B;vd(c.id,ub[a],"6");te(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;vd(c.id,g,"1");var z=function(){var A=Ga()-B;vd(c.id,g,"7");te(c.id,y,"exception",A);x||(x=!0,k())};var B=Ga();try{Bb(w,c)}catch(A){z(A)}}}var g=ub[a],h=b.s,k=b.o,l=b.terminate;if(c.Zc(g))return null;var m=Cb(g[Hb.ce],c,[]);if(m&&m.length){var n=m[0],q=Ve(n.index,{s:h,o:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.oe?l:q}if(g[Hb.$d]||g[Hb.Gf]){var u=g[Hb.$d]?vb:c.Dh,p=h,t=k;if(!u[a]){e=Ia(e);var v=Xe(a,u,e);h=v.s;k=v.o}return function(){u[a](p,t)}}return e}
function Xe(a,b,c){var d=[],e=[];b[a]=Ye(d,e,c);return{s:function(){b[a]=Ze;for(var g=0;g<d.length;g++)d[g]()},o:function(){b[a]=$e;for(var g=0;g<e.length;g++)e[g]()}}}function Ye(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ze(a){a()}function $e(a,b){b()};var cf=function(a,b){for(var c=[],d=0;d<ub.length;d++)if(a.ob[d]){var e=ub[d];var g=b.add();try{var h=Ve(d,{s:g,o:g,terminate:g},a,d);h?c.push({Qe:d,Ge:Fb(e),yg:h}):(af(d,a),g())}catch(l){g()}}b.Xf();c.sort(bf);for(var k=0;k<c.length;k++)c[k].yg();return 0<c.length};function bf(a,b){var c,d=b.Ge,e=a.Ge;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Qe,k=b.Qe;g=h>k?1:h<k?-1:0}return g}
function af(a,b){if(!sd)return;var c=function(d){var e=b.Zc(ub[d])?"3":"4",g=Cb(ub[d][Hb.ae],b,[]);g&&g.length&&c(g[0].index);vd(b.id,ub[d],e);var h=Cb(ub[d][Hb.ce],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var df=!1,ef=function(a,b,c,d,e){if("gtm.js"==b){if(df)return!1;df=!0}ud(a,b);var g=xe(a,d,e);Jd(a,"event",1);Jd(a,"ecommerce",1);Jd(a,"gtm");var h={id:a,name:b,Zc:fe(c),ob:[],Dh:[],Ae:function(){P("GTM",6)}};h.ob=Lb(h);var k=cf(h,g);
if(!k)return k;for(var l=0;l<h.ob.length;l++)if(h.ob[l]){var m=ub[l];if(m&&!Qc[String(m[Hb.na])])return!0}return!1};var gf=/^https?:\/\/www\.googletagmanager\.com/;function hf(){var a;return a}function kf(a,b){}
function jf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function lf(){var a=!1;return a};var mf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.Na={};this.globalConfig={};this.s=function(){};this.o=function(){}},nf=function(a){var b=new mf;b.eventModel=a;return b},of=function(a,b){a.targetConfig=b;return a},pf=function(a,b){a.containerConfig=b;return a},qf=function(a,b){a.Na=b;return a},rf=function(a,b){a.globalConfig=b;return a},sf=function(a,b){a.s=b;return a},tf=function(a,b){a.o=b;return a};
mf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.Na[a])return this.Na[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var uf=function(a){function b(e){Aa(e,function(g){c[g]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Aa(c,function(e){d.push(e)});return d};var vf={},wf=["G"];vf.Se="";var xf=vf.Se.split(",");function yf(){var a=Oc;return a.gcq=a.gcq||new zf}
var Af=function(a,b,c){yf().register(a,b,c)},Bf=function(a,b,c,d){yf().push("event",[b,a],c,d)},Cf=function(a,b){yf().push("config",[a],b)},Df={},Ef=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.Na={};this.He=null;this.ue=!1},Ff=function(a,b,c,d,e){this.type=a;this.Re=b;this.L=c||"";this.Ob=d;this.defer=e},zf=function(){this.je={};this.te={};this.fb=[]},Gf=function(a,b){var c=Kc(b);return a.je[c.containerId]=a.je[c.containerId]||new Ef},Hf=function(a,b,c,d){if(d.L){var e=
Gf(a,d.L),g=e.He;if(g){var h=C(c),k=C(e.targetConfig[d.L]),l=C(e.containerConfig),m=C(e.Na),n=C(a.te),q=Cd("gtm.uniqueEventId"),u=Kc(d.L).prefix,p=tf(sf(rf(qf(pf(of(nf(h),k),l),m),n),function(){wd(q,u,"2");}),function(){wd(q,u,"3");});try{wd(q,u,"1");3===g.length?g(b,d.Re,p):4===g.length&&
g(d.L,b,d.Re,p)}catch(t){wd(q,u,"4");}}}};
zf.prototype.register=function(a,b,c){if(3!==Gf(this,a).status){Gf(this,a).He=b;Gf(this,a).status=3;c&&(Gf(this,a).Na=c);var d=Kc(a),e=Df[d.containerId];if(void 0!==e){var g=Oc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Oc[d.containerId]._spx&&(h=h.toLowerCase());var k=Cd("gtm.uniqueEventId"),l=h,m=Ga()-g;if(sd&&!kd[k]){k!==gd&&(ed(),gd=k);var n=l+"."+Math.floor(g-e)+"."+Math.floor(m);od=od?od+","+n:"&cl="+n}delete Df[d.containerId]}this.flush()}};
zf.prototype.push=function(a,b,c,d){var e=Math.floor(Ga()/1E3);if(c){var g=Kc(c),h;if(h=g){var k;if(k=1===Gf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Gf(this,c).status=2,this.push("require",[],g.containerId),Df[g.containerId]=Ga(),!Ld())){var m=encodeURIComponent(g.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";dc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.fb.push(new Ff(a,e,c,b,d));d||this.flush()};
zf.prototype.flush=function(a){for(var b=this;this.fb.length;){var c=this.fb[0];if(c.defer)c.defer=!1,this.fb.push(c);else switch(c.type){case "require":if(3!==Gf(this,c.L).status&&!a)return;break;case "set":Aa(c.Ob[0],function(l,m){C(Ma(l,m),b.te)});break;case "config":var d=c.Ob[0],e=!!d[I.Fb];delete d[I.Fb];var g=Gf(this,c.L),h=Kc(c.L),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.L]={});g.ue&&e||Hf(this,I.w,d,c);g.ue=!0;delete d[I.ma];k?C(d,g.containerConfig):C(d,g.targetConfig[c.L]);
break;case "event":Hf(this,c.Ob[1],c.Ob[0],c)}this.fb.shift()}};var If=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Lf=function(a,b,c,d){var e=Jf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Kf(e,function(g){return g.Tb},b);if(1===e.length)return e[0].id;e=Kf(e,function(g){return g.pb},c);return e[0]?e[0].id:void 0}};
function Mf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=If(b,e).indexOf(c)}
var Pf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=Nf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Of(y,u)&&Mf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Of(q,u)&&Mf(m,a,l)}return k};function Kf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Jf(a,b){for(var c=[],d=If(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Tb:1*k[0]||1,pb:1*k[1]||1}))}}return c}
var Qf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Rf=/(^|\.)doubleclick\.net$/i,Of=function(a,b){return Rf.test(document.location.hostname)||"/"===b&&Qf.test(a)},Nf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Rf.test(e)||Qf.test(e)||a.push("none");return a};var Tf="".split(/,/),Uf=!1;var Vf=null,Wf={},Xf={},Yf;function Zf(a,b){var c={event:a};b&&(c.eventModel=C(b),b[I.zc]&&(c.eventCallback=b[I.zc]),b[I.Sa]&&(c.eventTimeout=b[I.Sa]));return c}
var eg={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Qa(a[2])&&void 0!=a[2])return;c=a[2]}var d=Zf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).fi().Yh(a[1],a[2])},set:function(a){var b;2==a.length&&
Qa(a[1])?b=C(a[1]):3==a.length&&f(a[1])&&(b={},Qa(a[2])||va(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},fg={policy:!0};var gg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},ig=function(a){var b=hg(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var vg=function(a){if(ug(a))return a;this.Ih=a};vg.prototype.Eg=function(){return this.Ih};var ug=function(a){return!a||"object"!==Oa(a)||Qa(a)?!1:"getUntrustedUpdateValue"in a};vg.prototype.getUntrustedUpdateValue=vg.prototype.Eg;var wg=!1,xg=[];function yg(){if(!wg){wg=!0;for(var a=0;a<xg.length;a++)H(xg[a])}}var zg=function(a){wg?H(a):xg.push(a)};var Ag=[],Bg=!1,Cg=function(a){return D["dataLayer"].push(a)},Dg=function(a){var b=Oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Eg(a){var b=a._clear;Aa(a,function(g,h){"_clear"!==g&&(b&&Id(g,void 0),Id(g,h))});Tc||(Tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Zc(),a["gtm.uniqueEventId"]=d,Id("gtm.uniqueEventId",d));Vc=c;var e=Fg(a);Vc=
null;switch(c){case "gtm.init":P("GTM",19),e&&P("GTM",20)}return e}function Fg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Oc.zones;d=e?e.checkState(Nc.m,c):he;return d.active?ef(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Gg(){for(var a=!1;!Bg&&0<Ag.length;){Bg=!0;delete zd.eventModel;Bd();var b=Ag.shift();if(null!=b){var c=ug(b);if(c){var d=b;b=ug(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=Cd(h,1);if(va(k)||Qa(k))k=C(k);Ad[h]=k}}try{if(ra(b))try{b.call(Dd)}catch(v){}else if(va(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Cd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&f(b[0])){var t=eg[b[0]];if(t&&(!c||!fg[b[0]])){b=t(b);break a}}b=void 0}if(!b){Bg=!1;continue}}a=Eg(b)||a}}finally{c&&Bd(!0)}}Bg=!1}
return!a}function Hg(){var a=Gg();try{gg(D["dataLayer"],Nc.m)}catch(b){}return a}
var Jg=function(){var a=bc("dataLayer",[]),b=bc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};pe(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});zg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new vg(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Ag.push.apply(Ag,d);if(300<
this.length)for(P("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Gg()&&h};Ag.push.apply(Ag,a.slice(0));Ig()&&H(Hg)},Ig=function(){var a=!0;return a};var Kg={};Kg.Gb=new String("undefined");
var Lg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Kg.Gb?b:a[d]);return c.join("")}};Lg.prototype.toString=function(){return this.resolve("undefined")};Lg.prototype.valueOf=Lg.prototype.toString;Kg.Jf=Lg;Kg.Lc={};Kg.pg=function(a){return new Lg(a)};var Mg={};Kg.vh=function(a,b){var c=Zc();Mg[c]=[a,b];return c};Kg.ke=function(a){var b=a?0:1;return function(c){var d=Mg[c];if(d&&"function"===typeof d[b])d[b]();Mg[c]=void 0}};Kg.Ug=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Kg.lh=function(a){if(a===Kg.Gb)return a;var b=Zc();Kg.Lc[b]=a;return'google_tag_manager["'+Nc.m+'"].macro('+b+")"};Kg.eh=function(a,b,c){a instanceof Kg.Jf&&(a=a.resolve(Kg.vh(b,c)),b=qa);return{Xc:a,s:b}};var Ng=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Og=function(a){Oc.hasOwnProperty("autoEventsSettings")||(Oc.autoEventsSettings={});var b=Oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Pg=function(a,b,c){Og(a)[b]=c},Qg=function(a,b,c,d){var e=Og(a),g=Ha(e,b,d);e[b]=c(g)},Rg=function(a,b,c){var d=Og(a);return Ha(d,b,c)};var Sg=function(){for(var a=$b.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ga()/1E3)].join(".")},Vg=function(a,b,c,d){var e=Tg(b);return Lf(a,e,Ug(c),d)},Wg=function(a,b,c,d){var e=""+Tg(c),g=Ug(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Tg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ug=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Xg=["1"],Yg={},bh=function(a,b,c,d){var e=Zg(a);Yg[e]||$g(e,b,c)||(ah(e,Sg(),b,c,d),$g(e,b,c))};function ah(a,b,c,d,e){var g=Wg(b,"1",d,c);Pf(a,g,c,d,0==e?void 0:new Date(Ga()+1E3*(void 0==e?7776E3:e)))}function $g(a,b,c){var d=Vg(a,b,c,Xg);d&&(Yg[a]=d);return d}function Zg(a){return(a||"_gcl")+"_au"};var ch=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({td:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].td]||(g[a[h].td]=[]),g[a[h].td].push({timestamp:k[1],Bg:k[2]}))}return g};function dh(){for(var a=eh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function fh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var eh,gh;function hh(a){eh=eh||fh();gh=gh||dh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(eh[l],eh[m],eh[n],eh[q])}return b.join("")}
function ih(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=gh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}eh=eh||fh();gh=gh||dh();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jh;function kh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var oh=function(){var a=lh,b=mh,c=nh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){G(F,"mousedown",d);G(F,"keyup",d);G(F,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},nh=function(){var a=bc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ph=/(.*?)\*(.*?)\*(.*)/,qh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,rh=/^(?:www\.|m\.|amp\.)+/,sh=/([^?#]+)(\?[^#]*)?(#.*)?/,th=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,vh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(hh(String(d))))}var e=b.join("*");return["1",uh(e),e].join("*")},uh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jh)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}jh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^jh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},xh=function(){return function(a){var b=Qe(D.location.href),c=b.search.replace("?",""),d=Me(c,"_gl",!0)||"";a.query=wh(d)||{};var e=Pe(b,"fragment").match(th);a.fragment=wh(e&&e[3]||
"")||{}}},yh=function(){var a=xh(),b=nh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ja(c,d.query),Ja(c,d.fragment));return c},wh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=ph.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===uh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=ih(u[p+1]);return q}}}}catch(t){}};
function zh(a,b,c){function d(m){var n=m,q=th.exec(n),u=n;if(q){var p=q[2],t=q[4];u=q[1];t&&(u=u+p+t)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=sh.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Ah(a,b,c){for(var d={},e={},g=nh().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&kh(k.domains,b)&&(k.fragment?Ja(e,k.callback()):Ja(d,k.callback()))}if(Ka(d)){var l=vh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var t=F.createElement("input");t.setAttribute("type","hidden");t.setAttribute("name","_gl");t.setAttribute("value",
l);a.appendChild(t)}}else if("post"===m){var v=zh(l,a.action);Ke.test(v)&&(a.action=v)}}}else Bh(l,a,!1)}if(!c&&Ka(e)){var w=vh(e);Bh(w,a,!0)}}function Bh(a,b,c){if(b.href){var d=zh(a,b.href,void 0===c?!1:c);Ke.test(d)&&(b.href=d)}}
var lh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Ah(e,e.hostname,!1)}}catch(h){}},mh=function(a){try{if(a.action){var b=Pe(Qe(a.action),"host");Ah(a,b,!0)}}catch(c){}},Ch=function(a,b,c,d){oh();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};nh().decorators.push(e)},Dh=function(){var a=F.location.hostname,b=qh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(rh,""),l=e.replace(rh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Eh=function(a,b){return!1===a?!1:a||b||Dh()};var Fh={};var Gh=/^\w+$/,Hh=/^[\w-]+$/,Ih=/^~?[\w-]+$/,Jh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Kh(a){return a&&"string"==typeof a&&a.match(Gh)?a:"_gcl"}var Mh=function(){var a=Qe(D.location.href),b=Pe(a,"query",!1,void 0,"gclid"),c=Pe(a,"query",!1,void 0,"gclsrc"),d=Pe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Me(e,"gclid",void 0);c=c||Me(e,"gclsrc",void 0)}return Lh(b,c,d)};
function Lh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Hh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Fh.gtm_3pds?0:Fh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Oh=function(a){var b=Mh();Nh(b,a)};
function Nh(a,b,c){function d(q,u){var p=Ph(q,e);p&&Pf(p,u,h,g,l,!0)}b=b||{};var e=Kh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ka?7776E3:b.Ka;c=c||Ga();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.yi?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Rh=function(a,b,c,d,e){for(var g=yh(),h=Kh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Jh[l]){var m=Ph(l,h),n=g[m];if(n){var q=Math.min(Qh(n),Ga()),u;b:{for(var p=q,t=If(m,F.cookie),v=0;v<t.length;++v)if(Qh(t[v])>p){u=!0;break b}u=!1}u||Pf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Nh(Lh(g.gclid,g.gclsrc),w)},Ph=function(a,b){var c=Jh[a];if(void 0!==c)return b+c},Qh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Sh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Th=function(a,b,c,d,e){if(va(b)){var g=Kh(e);Ch(function(){for(var h={},k=0;k<a.length;++k){var l=Ph(a[k],g);if(l){var m=If(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Uh=function(a){return a.filter(function(b){return Ih.test(b)})},Vh=function(a,b){for(var c=Kh(b&&b.prefix),d={},e=0;e<a.length;e++)Jh[a[e]]&&(d[a[e]]=Jh[a[e]]);Aa(d,function(g,h){var k=If(c+h,F.cookie);if(k.length){var l=k[0],m=Qh(l),n={};n[g]=[Sh(l)];Nh(n,b,m)}})};var Wh=/^\d+\.fls\.doubleclick\.net$/;function Xh(a){var b=Qe(D.location.href),c=Pe(b,"host",!1);if(c&&c.match(Wh)){var d=Pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Yh(a,b){if("aw"==a||"dc"==a){var c=Xh("gcl"+a);if(c)return c.split(".")}var d=Kh(b);if("_gcl"==d){var e;e=Mh()[a]||[];if(0<e.length)return e}var g=Ph(a,d),h;if(g){var k=[];if(F.cookie){var l=If(g,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Sh(l[m]);n&&-1===r(k,n)&&k.push(n)}h=Uh(k)}else h=k}else h=k}else h=[];return h}
var Zh=function(){var a=Xh("gac");if(a)return decodeURIComponent(a);var b=ch(),c=[];Aa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Bg);g=Uh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},$h=function(a,b,c,d,e){bh(b,c,d,e);var g=Yg[Zg(b)],h=Mh().dc||[],k=!1;if(g&&0<h.length){var l=Oc.joined_au=Oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+g;$b.sendBeacon&&$b.sendBeacon(u)||gc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=Zg(b),t=Yg[p];t&&ah(p,t,c,d,e)}};var ai;if(3===Nc.Kb.length)ai="g";else{var bi="G";ai=bi}
var ci={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ai,OPT:"o"},di=function(a){var b=Nc.m.split("-"),c=b[0].toUpperCase(),d=ci[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Nc.Kb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Nc.Kb+e};var ii=["input","select","textarea"],ji=["button","hidden","image","reset","submit"],ki=function(a){var b=a.tagName.toLowerCase();return!wa(ii,function(c){return c===b})||"input"===b&&wa(ji,function(c){return c===a.type.toLowerCase()})?!1:!0},li=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):lc(a,["form"],100)},mi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(ki(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var pi=!!D.MutationObserver,qi=void 0,ri=function(a){if(!qi){var b=function(){var c=F.body;if(c)if(pi)(new MutationObserver(function(){for(var e=0;e<qi.length;e++)H(qi[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;G(c,"DOMNodeInserted",function(){d||(d=!0,H(function(){d=!1;for(var e=0;e<qi.length;e++)H(qi[e])}))})}};qi=[];F.body?b():H(b)}qi.push(a)};var Ni=D.clearTimeout,Oi=D.setTimeout,V=function(a,b,c){if(Ld()){b&&H(b)}else return dc(a,b,c)},Pi=function(){return D.location.href},Qi=function(a){return Pe(Qe(a),"fragment")},Ri=function(a){return Oe(Qe(a))},W=function(a,b){return Cd(a,b||2)},Si=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Cg(a)},Ti=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},
Ui=function(a,b,c){return If(a,b,void 0===c?!0:!!c)},Vi=function(a,b){if(Ld()){b&&H(b)}else fc(a,b)},Wi=function(a){return!!Rg(a,"init",!1)},Xi=function(a){Pg(a,"init",!0)},Yi=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Sc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";V(R("https://","http://",c))},Zi=function(a,b){var c=a[b];return c};
var $i=Kg.eh;var aj;var xj=new ya;function yj(a,b){function c(h){var k=Qe(h),l=Pe(k,"protocol"),m=Pe(k,"host",!0),n=Pe(k,"port"),q=Pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function zj(a){return Aj(a)?1:0}
function Aj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&va(c)){for(var d=0;d<c.length;d++)if(zj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=xj.get(p);t||(t=new RegExp(c,u),xj.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return yj(b,
c)}return!1};var Bj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Cj={},Dj=encodeURI,Y=encodeURIComponent,Ej=gc;var Fj=function(a,b){if(!a)return!1;var c=Pe(Qe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Gj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Cj.Vg=function(){var a=!1;return a};var Tk=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||xa();return a.hid};var dl=window,el=document,fl=function(a){var b=dl._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===dl["ga-disable-"+a])return!0;try{var c=dl.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=If("AMP_TOKEN",el.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return el.getElementById("__gaOptOutExtension")?!0:!1};function il(a){return"_"===a.charAt(0)}var jl=function(a){Aa(a,function(c){il(c)&&delete a[c]});var b=a[I.V]||{};Aa(b,function(c){il(c)&&delete b[c]})};var nl=function(a,b,c){Bf(b,c,a)},ol=function(a,b,c){Bf(b,c,a,!0)},ql=function(a,b){};
function pl(a,b){}var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;ye();V(b,function(){var d=X("google_trackConversion");if(ra(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Gj(a.vtp_customParams,
"key","value"));var g={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(g.value=a.vtp_eventValue),a.vtp_eventItems&&(g.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:di()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);d(h)||c()}else c()},c)})}();

Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=oc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=F.getElementById(a.vtp_elementId);b&&(c=d?ic(b,d):jc(b));return Fa(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Kd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=W("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Pe(Qe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ri(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Ng(c,"gtm.click");Si(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Wi("cl")){var c=X("document");G(c,"click",a,!0);Xi("cl")}H(b.vtp_gtmOnSuccess)})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:W("gtm.url",1))||Pi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ri(String(c));var e=Qe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?va(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=Pe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=Pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;C(Gj(n.vtp_fieldsToSet,"fieldName","value"),g);C(Gj(n.vtp_contentGroup,"index","group"),h);C(Gj(n.vtp_dimension,"index","dimension"),k);C(Gj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=C(n);d=C(d,q)}C(Gj(d.vtp_fieldsToSet,"fieldName","value"),g);C(Gj(d.vtp_contentGroup,
"index","group"),h);C(Gj(d.vtp_dimension,"index","dimension"),k);C(Gj(d.vtp_metric,"index","metric"),l);var u=Fe(d.vtp_functionName);if(ra(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+Zc(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&y("set",O+sa,K[sa])},B=function(){
var O=function(lm,Ji,mm){if(!Qa(Ji))return!1;for(var cd=Ha(Object(Ji),mm,[]),Sf=0;cd&&Sf<cd.length;Sf++)y(lm,cd[Sf]);return!!cd&&0<cd.length},K;if(d.vtp_useEcommerceDataLayer){var sa=!1;sa||(K=W("ecommerce",1))}else d.vtp_ecommerceMacroData&&(K=d.vtp_ecommerceMacroData.ecommerce);if(!Qa(K))return;K=Object(K);var Eb=Ha(g,"currencyCode",K.currencyCode);
void 0!==Eb&&y("set","&cu",Eb);O("ec:addImpression",K,"impressions");if(O("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){y("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Za="refund purchase remove checkout checkout_option add click detail".split(" "),$a=0;$a<Ba.length;$a++){var jb=K[Ba[$a]];if(jb){O("ec:addProduct",jb,"products");y("ec:setAction",Ba[$a],jb.actionField);
if(sd)for(var tb=0;tb<Za.length;tb++){var sc=K[Za[tb]];if(sc){sc!==jb&&P("GTM",13);break}}break}}},A=function(O,K,sa){var Eb=0;if(O)for(var Ba in O)if(O.hasOwnProperty(Ba)&&(sa&&v[Ba]||!sa&&void 0===v[Ba])){var Za=w[Ba]?Da(O[Ba]):O[Ba];"anonymizeIp"!=Ba||Za||(Za=void 0);K[Ba]=Za;Eb++}return Eb},E={name:t};A(g,E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",di(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(g,J,!1)&&y("set",J);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=g&&g.hitCallback;ra(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var U={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Ca,d.vtp_eventValue||
e.value)};A(M,U,!1);y("send",U);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var oa=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:oa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ka})}M?y("send","pageview",M):y("send","pageview");d.vtp_autoLinkDomains&&Ge(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var ab=R("https:","http:","//www.google-analytics.com/"+ta,g&&g.forceSSL);V(ab,function(){var O=De();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else H(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;C(Gj(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=C(e);c=C(c,g)||{}}C(Gj(c.vtp_fieldsToSet,"fieldName","value"),d);var h=Fe(c.vtp_functionName);if(ra(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Zc(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(y,x,z){var B=0,A;for(A in y)if(y.hasOwnProperty(A)&&
(z&&m[A]||!z&&void 0===m[A])){var E=n[A]?Da(y[A]):y[A];"anonymizeIp"!==A||E||(E=void 0);x[A]=E;B++}return B},u={name:l};q(d,u,!0);var p={"&gtm":di(!0)};q(d,p,!1);var t=encodeURI(R("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,u);h(k+"set",p);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,V(t,function(){return De().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=X("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else H(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.b="opt";Z.__opt.g=!0;Z.__opt.priorityOverride=0}();


Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){H(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
Dh())){Rh(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ka:void 0};Oh(m);Vh(["aw","dc"],m);$h(g,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var q=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;Th(a,q,u,p,n);}})}();


Z.a.aev=["google"],function(){function a(p,t){var v=Kd(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var B=q.shift();delete n[B]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(Pi());va(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Fj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Pe(Qe(p),"HOST",!0)}function g(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return ic(p,"value");case "button":return jc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)ki(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&ic(w,t)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,jc)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),B=Qe(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Pe(B,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var J=p.vtp_attribute,M=a(t,"element");E=M&&ic(M,J)||v||""}return E;case "MD":var U=p.vtp_mdValue,ea=b(t,"MD",yi);return U&&ea?Bi(ea,
U)||v:ea||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=C(a),c=b;c[Hb.na]=null;c[Hb.Cf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){ye();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:di()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?W(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var q=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},u=function(v){return function(w,y,x,z){var B="DATA_LAYER"==v?W(x):k[y];z(B)&&q(w,B)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=!0;t&&b.push(l);a||(a=!0,V(p,g(),e(p)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=X(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var g={},h=function(k,l){void 0!==c[k]&&(g[l]=c[k])};h("vtp_goalValue","gv");h("vtp_eventCategory","ec");h("vtp_eventAction","ea");h("vtp_eventLabel","el");h("vtp_eventValue","ev");e.push(g);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{V("//bat.bing.com/bat.js",
function(){var k=Bj(X("UET"),{ti:c.vtp_tagId,q:e});D[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){H(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.b="baut";Z.__baut.g=!0;Z.__baut.priorityOverride=0}();
Z.a.fsl=[],function(){function a(){var e=X("document"),g=c(),h=HTMLFormElement.prototype.submit;G(e,"click",function(k){var l=k.target;if(l&&(l=lc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&ic(l,"value")){var m;(m=l.form?l.form.tagName?l.form:F.getElementById(l.form):lc(l,["form"],100))&&g.store(m,l)}},!1);G(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,q=g.get(l),u=!0;if(d(l,function(){if(u){var p;
q&&(p=e.createElement("input"),p.type="hidden",p.name=q.name,p.value=q.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,n,q))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return wa(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=Rg("fsl",h?"nv.mwt":"mwt",0),n;n=h?Rg("fsl","nv.ids",[]):Rg("fsl","ids",[]);if(!n.length)return!0;var q=Ng(e,"gtm.formSubmit",n),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);q["gtm.elementUrl"]=u;l&&(q["gtm.formSubmitElement"]=l);if(k&&m){if(!Si(q,Dg(g),m))return!1}else Si(q,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(q){return Math.max(k,q)};Qg("fsl","mwt",m,0);h||Qg("fsl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Qg("fsl","ids",n,[]);h||Qg("fsl","nv.ids",n,[]);Wi("fsl")||(a(),Xi("fsl"));H(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Gj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){H(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,cc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(u){H(h)}}}var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,g=$i(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Xc,k=g.s;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,kc(h),k,e)()}else Oi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.lcl=[],function(){function a(){var e=X("document"),g=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.Tg||k.timeStamp&&k.timeStamp===g)){g=k.timeStamp;l=lc(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=Rg("lcl",m?"nv.mwt":"mwt",0),q;q=m?Rg("lcl","nv.ids",[]):Rg("lcl","ids",[]);if(q.length){var u=Ng(l,"gtm.linkClick",q);if(b(k,l,e)&&!m&&n&&l.href){var p=String(Zi(l,"rel")||""),t=!!wa(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
t&&P("GTM",36);var v=X((Zi(l,"target")||"_self").substring(1)),w=!0;if(Si(u,Dg(function(){var y;if(y=w&&v){var x;a:if(t&&d){var z;try{z=new MouseEvent(k.type)}catch(B){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.Tg=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=Zi(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else Si(u,function(){},n||2E3);return!0}}};G(e,"click",h,!1);G(e,"auxclick",h,!1)}
function b(e,g,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=Zi(g,"href"),l=k.indexOf("#"),m=Zi(g,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=Ri(k),q=Ri(h.location);return n!==q}return!0}function c(e){var g=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(q){return Math.max(k,
q)};Qg("lcl","mwt",m,0);h||Qg("lcl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Qg("lcl","ids",n,[]);h||Qg("lcl","nv.ids",n,[]);Wi("lcl")||(a(),Xi("lcl"));H(e.vtp_gtmOnSuccess)}var d=!1;Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0;}();


var im={};im.macro=function(a){if(Kg.Lc.hasOwnProperty(a))return Kg.Lc[a]},im.onHtmlSuccess=Kg.ke(!0),im.onHtmlFailure=Kg.ke(!1);im.dataLayer=Dd;im.callback=function(a){Xc.hasOwnProperty(a)&&ra(Xc[a])&&Xc[a]();delete Xc[a]};function jm(){Oc[Nc.m]=im;Ja(Yc,Z.a);yb=yb||Kg;zb=ge}
function km(){Fh.gtm_3pds=!0;Oc=D.google_tag_manager=D.google_tag_manager||{};if(Oc[Nc.m]){var a=Oc.zones;a&&a.unregisterChild(Nc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)qb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)ub.push(e[g]);for(var h=b.predicates||[],k=0;k<
h.length;k++)sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);rb.push(q)}wb=Z;xb=zj;jm();Jg();ke=!1;le=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)ne();else{G(F,"DOMContentLoaded",ne);G(F,"readystatechange",ne);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&oe()}G(D,"load",ne)}wg=!1;"complete"===F.readyState?yg():G(D,"load",
yg);a:{if(!sd)break a;D.setInterval(td,864E5);}
Uc=(new Date).getTime();
}}km();

})()
