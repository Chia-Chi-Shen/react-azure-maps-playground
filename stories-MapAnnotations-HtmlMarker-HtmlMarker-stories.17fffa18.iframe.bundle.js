"use strict";(self.webpackChunkazure_maps_storybook=self.webpackChunkazure_maps_storybook||[]).push([[375],{"./src/stories/MapAnnotations/HtmlMarker/HtmlMarker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Map Annotations/HTML Marker",component:__webpack_require__("./src/stories/MapAnnotations/HtmlMarker/HtmlMarker.tsx").A,args:{color:"DodgerBlue",text:"10",position:[0,0],draggable:!1},parameters:{storySource:{source:"\nimport { AzureMap, AzureMapHtmlMarker, AzureMapsProvider } from 'react-azure-maps';\nimport { HtmlMarkerOptions } from 'azure-maps-control';\n\nconst HtmlMarker = () => {\n  return (\n    <AzureMapsProvider>\n      <AzureMap options={your_options}>\n        <AzureMapHtmlMarker\n          options={{\n              color: 'DodgerBlue',\n              text: '10',\n              position: [0, 0],\n          }}\n        />\n      </AzureMap>\n    </AzureMapsProvider>\n  );\n};\n"}}},Example={},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{}",...Example.parameters?.docs?.source}}}},"./src/key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>mapOptions});const mapOptions={authOptions:{authType:__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js").h_.subscriptionKey,subscriptionKey:"013GHvO6nMXUbB0yrRDmgizOaO3tRzevKMzPA6Yl4PeFMPgqFuelJQQJ99AGACrJL3JAArohAAAgAZMPQDp7"},center:[0,0],view:"Auto"}},"./src/stories/MapAnnotations/HtmlMarker/HtmlMarker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_azure_maps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js"),_key__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/key.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const HtmlMarker=_ref=>{let{color,text,position,draggable}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_0__.oY,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"defaultMap sb-unstyled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_0__._9,{options:_key__WEBPACK_IMPORTED_MODULE_1__.t,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_0__.VY,{options:{color,text,position,draggable}})})})})},__WEBPACK_DEFAULT_EXPORT__=HtmlMarker;HtmlMarker.__docgenInfo={description:"",methods:[],displayName:"HtmlMarker"}}}]);