"use strict";(self.webpackChunkazure_maps_storybook=self.webpackChunkazure_maps_storybook||[]).push([[849],{"./src/stories/DataVisualization/SymbolLayer/SymbolLayer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IconOptions:()=>IconOptions,TextOptions:()=>TextOptions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Data Visualization/Symbol Layer",component:__webpack_require__("./src/stories/DataVisualization/SymbolLayer/SymbolLayer.tsx").A,parameters:{layout:"centered"},args:{image:"pin-round-blue",optionsSize:1.3,optionsAnchor:"center",optionsOffset:[0,0]}},IconOptions={parameters:{controls:{exclude:["font","textSize","textOffset","textAnchor","color","haloColor","haloWidth"]},storySource:{source:"\nimport { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';\nimport atlas from 'azure-maps-control';\n\nconst collection = generateRandomPoints();\n\nconst SymbolLayer = () => {\n\n  return (\n    <AzureMapsProvider>\n      <div className=\"defaultMap\">\n        <AzureMap options={your_options}>\n          <AzureMapDataSourceProvider id=\"SymbolLayer DataSourceProvider\" collection={collection}>\n            <AzureMapLayerProvider\n              type=\"SymbolLayer\"\n              options={{\n                iconOptions: {\n                  image: 'pin-round-blue',\n                  size: 1.3,\n                  anchor: 'center',\n                  offset: [0, 0],\n                },\n                textOptions: {\n                  textField: ['get', 'title'],\n                },\n              }}\n            />\n          </AzureMapDataSourceProvider>\n        </AzureMap>\n      </div>\n    </AzureMapsProvider>\n  );\n};\n\nfunction generateRandomPoints() {\n  var layerData = [];\n\n  for (var i = 0; i < 50; i++) {\n    layerData.push(\n      new atlas.data.Feature(new atlas.data.Point([Math.random() * 360 - 180, Math.random() * 170 - 85]), {\n        title: 'Pin_' + i,\n      }),\n    );\n  }\n\n  return layerData;\n}  \n      "}},argTypes:{image:{control:{type:"select"},options:["marker-black","marker-blue","marker-darkblue","marker-red","marker-yellow","pin-blue","pin-darkblue","pin-red","pin-round-blue","pin-round-darkblue","pin-round-red"]},optionsSize:{control:{type:"range",min:0,max:2,step:.1}},optionsAnchor:{control:{type:"select"},options:["center","top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"]}}},TextOptions={parameters:{controls:{exclude:["image","opacity","optionsSize","optionsAnchor","optionsOffset"]},storySource:{source:"\nimport { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';\nimport atlas from 'azure-maps-control';\n\nconst collection = generateRandomPoints();\n\nconst SymbolLayer = () => {\n\n  return (\n    <AzureMapsProvider>\n      <div className=\"defaultMap\">\n        <AzureMap options={your_options}>\n          <AzureMapDataSourceProvider id=\"SymbolLayer DataSourceProvider\" collection={collection}>\n            <AzureMapLayerProvider\n              type=\"SymbolLayer\"\n              options={{\n                iconOptions: {\n                  image: 'pin-round-blue',\n                  size: 1.3,\n                  anchor: 'center',\n                  offset: [0, 0],\n                },\n                textOptions: {\n                  textField: ['get', 'title'],\n                  size: 12,\n                  offset: [0, 2],\n                  anchor: 'center',\n                  color: 'black',\n                  haloColor: 'white',\n                  haloWidth: 1\n                },\n              }}\n            />\n          </AzureMapDataSourceProvider>\n        </AzureMap>\n      </div>\n    </AzureMapsProvider>\n  );\n};\n\nfunction generateRandomPoints() {\n  var layerData = [];\n\n  for (var i = 0; i < 50; i++) {\n    layerData.push(\n      new atlas.data.Feature(new atlas.data.Point([Math.random() * 360 - 180, Math.random() * 170 - 85]), {\n        title: 'Pin_' + i,\n      }),\n    );\n  }\n\n  return layerData;\n}  \n      "}},args:{font:"StandardFont-Bold",textSize:12,textOffset:[0,2],textAnchor:"center",color:"black",haloColor:"white",haloWidth:1},argTypes:{font:{control:{type:"select"},options:["SegoeUi-Bold","SegoeUi-Regular","SegoeUi-Light"]},textSize:{name:"size",control:{type:"range",min:0,max:25,step:1}},textOffset:{name:"offset"},textAnchor:{name:"anchor",control:{type:"select"},options:["center","top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"]},color:{control:{type:"color"}},haloColor:{control:{type:"color"}},haloWidth:{control:{type:"range",min:0,max:15,step:.5}}}},__namedExportsOrder=["IconOptions","TextOptions"];IconOptions.parameters={...IconOptions.parameters,docs:{...IconOptions.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      exclude: ['font', 'textSize', 'textOffset', 'textAnchor', 'color', 'haloColor', 'haloWidth']\n    },\n    storySource: {\n      source: `\nimport { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';\nimport atlas from 'azure-maps-control';\n\nconst collection = generateRandomPoints();\n\nconst SymbolLayer = () => {\n\n  return (\n    <AzureMapsProvider>\n      <div className=\"defaultMap\">\n        <AzureMap options={your_options}>\n          <AzureMapDataSourceProvider id=\"SymbolLayer DataSourceProvider\" collection={collection}>\n            <AzureMapLayerProvider\n              type=\"SymbolLayer\"\n              options={{\n                iconOptions: {\n                  image: 'pin-round-blue',\n                  size: 1.3,\n                  anchor: 'center',\n                  offset: [0, 0],\n                },\n                textOptions: {\n                  textField: ['get', 'title'],\n                },\n              }}\n            />\n          </AzureMapDataSourceProvider>\n        </AzureMap>\n      </div>\n    </AzureMapsProvider>\n  );\n};\n\nfunction generateRandomPoints() {\n  var layerData = [];\n\n  for (var i = 0; i < 50; i++) {\n    layerData.push(\n      new atlas.data.Feature(new atlas.data.Point([Math.random() * 360 - 180, Math.random() * 170 - 85]), {\n        title: 'Pin_' + i,\n      }),\n    );\n  }\n\n  return layerData;\n}  \n      `\n    }\n  },\n  argTypes: {\n    image: {\n      control: {\n        type: 'select'\n      },\n      options: ['marker-black', 'marker-blue', 'marker-darkblue', 'marker-red', 'marker-yellow', 'pin-blue', 'pin-darkblue', 'pin-red', 'pin-round-blue', 'pin-round-darkblue', 'pin-round-red']\n    },\n    optionsSize: {\n      control: {\n        type: 'range',\n        min: 0,\n        max: 2,\n        step: 0.1\n      }\n    },\n    optionsAnchor: {\n      control: {\n        type: 'select'\n      },\n      options: ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']\n    }\n  }\n}",...IconOptions.parameters?.docs?.source}}},TextOptions.parameters={...TextOptions.parameters,docs:{...TextOptions.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      exclude: ['image', 'opacity', 'optionsSize', 'optionsAnchor', 'optionsOffset']\n    },\n    storySource: {\n      source: `\nimport { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';\nimport atlas from 'azure-maps-control';\n\nconst collection = generateRandomPoints();\n\nconst SymbolLayer = () => {\n\n  return (\n    <AzureMapsProvider>\n      <div className=\"defaultMap\">\n        <AzureMap options={your_options}>\n          <AzureMapDataSourceProvider id=\"SymbolLayer DataSourceProvider\" collection={collection}>\n            <AzureMapLayerProvider\n              type=\"SymbolLayer\"\n              options={{\n                iconOptions: {\n                  image: 'pin-round-blue',\n                  size: 1.3,\n                  anchor: 'center',\n                  offset: [0, 0],\n                },\n                textOptions: {\n                  textField: ['get', 'title'],\n                  size: 12,\n                  offset: [0, 2],\n                  anchor: 'center',\n                  color: 'black',\n                  haloColor: 'white',\n                  haloWidth: 1\n                },\n              }}\n            />\n          </AzureMapDataSourceProvider>\n        </AzureMap>\n      </div>\n    </AzureMapsProvider>\n  );\n};\n\nfunction generateRandomPoints() {\n  var layerData = [];\n\n  for (var i = 0; i < 50; i++) {\n    layerData.push(\n      new atlas.data.Feature(new atlas.data.Point([Math.random() * 360 - 180, Math.random() * 170 - 85]), {\n        title: 'Pin_' + i,\n      }),\n    );\n  }\n\n  return layerData;\n}  \n      `\n    }\n  },\n  args: {\n    font: 'StandardFont-Bold',\n    textSize: 12,\n    textOffset: [0, 2],\n    textAnchor: 'center',\n    color: 'black',\n    haloColor: 'white',\n    haloWidth: 1\n  },\n  argTypes: {\n    font: {\n      control: {\n        type: 'select'\n      },\n      options: ['SegoeUi-Bold', 'SegoeUi-Regular', 'SegoeUi-Light']\n    },\n    textSize: {\n      name: 'size',\n      control: {\n        type: 'range',\n        min: 0,\n        max: 25,\n        step: 1\n      }\n    },\n    textOffset: {\n      name: 'offset'\n    },\n    textAnchor: {\n      name: 'anchor',\n      control: {\n        type: 'select'\n      },\n      options: ['center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']\n    },\n    color: {\n      control: {\n        type: 'color'\n      }\n    },\n    haloColor: {\n      control: {\n        type: 'color'\n      }\n    },\n    haloWidth: {\n      control: {\n        type: 'range',\n        min: 0,\n        max: 15,\n        step: 0.5\n      }\n    }\n  }\n}",...TextOptions.parameters?.docs?.source}}}},"./src/key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>key,t:()=>mapOptions});var react_azure_maps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js");const key="013GHvO6nMXUbB0yrRDmgizOaO3tRzevKMzPA6Yl4PeFMPgqFuelJQQJ99AGACrJL3JAArohAAAgAZMPQDp7",mapOptions={authOptions:{authType:react_azure_maps__WEBPACK_IMPORTED_MODULE_0__.h_.subscriptionKey,subscriptionKey:key},center:[0,0],view:"Auto"}},"./src/stories/DataVisualization/SymbolLayer/SymbolLayer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _key__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/key.ts"),react_azure_maps__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js"),azure_maps_control__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/azure-maps-control/dist/atlas-esm.min.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const collection=function generateRandomPoints(){for(var layerData=[],i=0;i<50;i++)layerData.push(new azure_maps_control__WEBPACK_IMPORTED_MODULE_2__.Ay.data.Feature(new azure_maps_control__WEBPACK_IMPORTED_MODULE_2__.Ay.data.Point([360*Math.random()-180,170*Math.random()-85]),{title:"Pin_"+i}));return layerData}(),SymbolLayer=_ref=>{let{image,optionsSize,optionsAnchor,optionsOffset,font,textSize,textOffset,textAnchor,color,haloColor,haloWidth}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.oY,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"defaultMap",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__._9,{options:_key__WEBPACK_IMPORTED_MODULE_0__.t,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.yX,{id:"SymbolLayer DataSourceProvider",collection,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.we,{type:"SymbolLayer",options:{iconOptions:{image,size:optionsSize,anchor:optionsAnchor,offset:optionsOffset},textOptions:{textField:["get","title"],size:textSize,offset:textOffset,anchor:textAnchor,color,haloColor,haloWidth}}})})})})})};const __WEBPACK_DEFAULT_EXPORT__=SymbolLayer;SymbolLayer.__docgenInfo={description:"",methods:[],displayName:"SymbolLayer",props:{image:{required:!1,tsType:{name:"string"},description:""},optionsSize:{required:!1,tsType:{name:"number"},description:""},optionsAnchor:{required:!1,tsType:{name:"string"},description:""},optionsOffset:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},font:{required:!1,tsType:{name:"string"},description:""},textSize:{required:!1,tsType:{name:"number"},description:""},textOffset:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},textAnchor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},haloColor:{required:!1,tsType:{name:"string"},description:""},haloWidth:{required:!1,tsType:{name:"number"},description:""}}}}}]);