if(!self.define){let e,s={};const c=(c,t)=>(c=new URL(c+".js",t).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const r=e=>c(e,a),f={module:{uri:a},exports:n,require:r};s[a]=Promise.all(t.map((e=>f[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-44c90a21"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/cTU9ZYcc0gfLNt-zLUsyi/_buildManifest.js",revision:"1cf1d29ca8db214b693a18628288ef54"},{url:"/_next/static/cTU9ZYcc0gfLNt-zLUsyi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/14-3d9b652792d41010.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/173-55cddfe6e455128b.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/250-b7a8891f7c42c0e1.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/378-077523d182f67fdc.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/496-1c639dd8306025df.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/55.38955a2727515c10.js",revision:"38955a2727515c10"},{url:"/_next/static/chunks/604-46391f6c929fbe56.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/712-fcf38c8326b24de2.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/749-bbc978a85222a442.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/8012d7e2.d7e862714811bd18.js",revision:"d7e862714811bd18"},{url:"/_next/static/chunks/847-b8391f1063218e2c.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/9081a741-b043cb48c73319f7.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/98916abf-f8d6236c47c67e93.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/(auth)/auth/page-f17c755ff0be28a9.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/@authModal/(.)auth/page-8922e062d3d236f0.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/@authModal/default-8d8570799ce6aedd.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/_not-found-9c6c7370ce158928.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/admin/page-ec181f98f070b10b.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-0d1526559c84b979.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/blog/page-db9a905ec23b81eb.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/createpost/page-4fc5628febb15ff6.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/layout-8d95cea856497104.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/page-0278f50f3ab5be95.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/app/profile/page-b8ca3ff0cdb6afab.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/fd9d1056-c426fd48dcbd8614.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/main-31cb30b201d5304e.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/main-app-f75cd99de96b9eea.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4abebb8884bbc742.js",revision:"cTU9ZYcc0gfLNt-zLUsyi"},{url:"/_next/static/css/3cda9c2319d277fa.css",revision:"3cda9c2319d277fa"},{url:"/_next/static/css/8aee48eb52f4c731.css",revision:"8aee48eb52f4c731"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
