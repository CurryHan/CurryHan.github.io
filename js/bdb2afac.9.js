webpackJsonp([9],{843:function(r,n){r.exports='\x3c!--\r\ntitle: \u521d\u59cb\u5316 \r\nsort: 2\r\n--\x3e\r\n**\u76ee\u5f55\u7ed3\u6784**\r\n\r\n`NFramework.Modules`\u89e3\u51b3\u65b9\u6848\u7531`Modules.MVcBootstrapShell`\u4e3b\u7f51\u7ad9\u548c\u5404\u6a21\u5757\u6240\u6784\u6210\u3002\u7f51\u7ad9\u8fd0\u884c\u53bb`/Modules.MVcBootstrapShell/Modules`\u6587\u4ef6\u5939\u4e0b\u53bb\u52a0\u8f7d\u5404\u6a21\u5757,\r\n\u4ece\u800c\u5f62\u6210\u6a21\u5757\u5316\u5f00\u53d1\u3002\r\n```\r\nNFramework.Modules(\u89e3\u51b3\u65b9\u6848)\r\n\u251c\u2500\u2500 Modules.MVcBootstrapShell(\u4e3b\u7f51\u7ad9,\u5fc5\u987b\u5305\u542b)\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 Modules(\u6a21\u5757\u6587\u4ef6\u5939,\u5b58\u653e\u6309\u9700\u52a0\u8f7d\u7684\u6a21\u5757,\u8be5\u6587\u4ef6\u5939\u5305\u542b\u7684\u6587\u4ef6\u7531\u540c\u6b65\u5de5\u5177\u81ea\u52a8\u751f\u6210)\r\n\u2502   \u251c\u2500\u2500 Content(\u7f51\u7ad9\u6574\u4f53js,image,css\u6587\u4ef6)\r\n\u2502   \u251c\u2500\u2500 logs(\u7f51\u7ad9\u65e5\u5fd7,\u5728Debug\u6587\u4ef6\u4e2d \u4f60\u53ef\u4ee5\u770b\u5230\u7f51\u7ad9\u52a0\u8f7d\u4e86\u591a\u5c11\u6a21\u5757\u7b49\u65e5\u5fd7)\r\n\u2502   \u2514\u2500\u2500 \u5176\u4ed6(\u5305\u62ecViews,Controllers\u4e0d\u4e00\u4e00\u4ecb\u7ecd)\r\n\u2502\r\n\u251c\u2500\u2500 RBAC.Bootstrap(\u6309\u9700\u52a0\u8f7d\u7684\u6a21\u5757,\u8fd9\u91cc\u4ee5RBAC\u4e3a\u4f8b,\u4e00\u822c\u6a21\u5757\u5206Bootstrap\u548ccore\u4e24\u90e8\u5206,\u4e0d\u4e00\u5b9a,\u89c6\u60c5\u51b5\u800c\u5b9a)\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 Module.cs(\u5fc5\u987b\u5305\u542b)\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 ServiceResolver.cs(\u6b63\u5e38\u4f1a\u6709,\u4f9d\u8d56\u6ce8\u5165)\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 NavigationProvider.cs(\u8be5\u9879\u76ee\u7684\u83dc\u5355,\u5982\u679c\u6709\u83dc\u5355\u663e\u793a\u5fc5\u987b\u8981\u6709)\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 settings.config(\u9879\u76ee\u914d\u7f6e\u6587\u4ef6,\u4e0d\u4e00\u5b9a\u4f1a\u6709,\u5982\u679c\u6709,\u9700\u8981\u540c\u6b65)\r\n\u2502\xa0\xa0 \u2514\u2500\u2500 \u5176\u4ed6(\u5305\u62ecViews,Controllers\u4e0d\u4e00\u4e00\u4ecb\u7ecd)\r\n\u2502\xa0\r\n\u2514\u2500\u2500 RBAC.Core(\u670d\u52a1\u7aef)\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 Module.cs(\u5fc5\u987b\u5305\u542b)\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 ServiceResolver.cs(\u6b63\u5e38\u4f1a\u6709,\u4f9d\u8d56\u6ce8\u5165)\r\n\u2502\xa0\xa0 \u251c\u2500\u2500 Migrators(\u6570\u636e\u5e93\u8fc1\u79fb)\r\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Init.cs(\u81ea\u52a8\u751f\u6210\u8868\u6587\u4ef6,\u540e\u7eed\u4f1a\u6709\u4fee\u6539\u3001\u5220\u9664\u8868\u5b57\u6bb5\u529f\u80fd)\r\n\u2502\xa0\xa0 \u2514\u2500\u2500 \u5176\u4ed6(\u5305\u62ecEntites,Service,IService\u4e0d\u4e00\u4e00\u4ecb\u7ecd)\r\n\r\n```\r\n\u26a0\ufe0fTips\r\n> 1.`Module.cs`\u6587\u4ef6\u5fc5\u4e0d\u53ef\u5c11,\u7f3a\u5c11\u8be5\u6587\u4ef6,\u6a21\u5757\u4e0d\u4f1a\u52a0\u8f7d\r\n\r\n**\u5b9e\u65f6\u540c\u6b65**\r\n\r\n\u5728\u5f00\u53d1\u5177\u4f53\u6a21\u5757\u65f6,\u4fee\u6539\u4e86Views,\u60f3\u53bb\u770b\u4e0b\u9875\u9762\u6548\u679c,\u6216\u8005\u8c03\u8bd5\u4e00\u6bb5\u4ee3\u7801,\u8fd9\u4e9b\u6539\u52a8\u90fd\u5fc5\u987b\u5b9e\u65f6\u540c\u6b65\u5230`/Modules.MVcBootstrapShell/Modules`\u7684\u5bf9\u5e94\u6a21\u5757\u4e0b\u3002\r\nNFramework.Modules\u8fd0\u884c\u65f6\u4e5f\u662f\u53bb\u627e\u5404\u6a21\u5757\u4e0b\u7684dll\u6216\u8005views\u6587\u4ef6\u3002\r\n\r\n\u8fd9\u91cc\u6211\u4eec\u501f\u52a9`GoodSync`\u540c\u6b65\u5de5\u5177\u3002\r\n\r\n\u4e0b\u56fe\u5217\u51fa\u9700\u8981\u540c\u6b65\u7684\u6587\u4ef6\r\n![sync](./assets/sync.png)\r\n\r\n\u26a0\ufe0fTips\r\n\r\n> 1.\u5728degbug\u73af\u5883\u4e0b \u6211\u4eec\u53ef\u5728\u67d0\u4e2a\u6a21\u5757\u4e0b\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a`unload.dev`\u7684\u7a7a\u6587\u4ef6,\u5f00\u53d1\u8c03\u8bd5\u7684\u65f6\u5019\u5219\u4e0d\u4f1a\u53bb\u52a0\u8f7d\u8be5\u6a21\u5757\u3002\r\n\u4f8b:rbac\u6a21\u5757,\u653e\u7f6e\u5728`/Modules.MVcBootstrapShell/Modules/RBAC`\u76ee\u5f55\u4e0b\u3002\r\n\r\n> 2.`/Modules.MVcBootstrapShell/Modules/`\u4e0b\u6a21\u5757\u7684\u6587\u4ef6\u5939\u540d\u79f0\u4e0e\u4e0e\u8def\u7531`module`\u53c2\u6570\u4e00\u81f4\u3002\r\n```c#\r\npublic static void RegisterRoutes(RouteCollection routes)\r\n        {\r\n            routes.MapRoute(\r\n            name: "rbac",\r\n            url: "rbac/{controller}/{action}/{id}",\r\n            defaults: new { controller = "Account", action = "Index", id = UrlParameter.Optional, module = "rbac" }\r\n            //\u8fd9\u91cc\u586b\u5199rbac \u5bf9\u5e94/Modules.MVcBootstrapShell/Modules/rbac \u6587\u4ef6\u5939\u540d\u79f0\r\n            );\r\n        }\r\n```\r\n\r\n'}});