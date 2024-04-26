(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["@meom/block-components"] = factory();
	else
		root["@meom/block-components"] = factory();
})(globalThis, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ImageSelect/index.js":
/*!*********************************************!*\
  !*** ./src/components/ImageSelect/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MediaToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MediaToolbar */ "./src/components/MediaToolbar/index.js");





const SETTINGS_TEXT = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image settings', 'meom-block-components');
const FOCALPOINT_LABEL = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image focalpoint', 'meom-block-components');
const FOCALPOINT_HELP = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pick image focalpoint which is central point of the image.', 'meom-block-components');
const BUTTON_TEXT = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image', 'meom-block-components');

/**
 * Image select control.
 *
 * @param {Object} props - Component props.
 * @return {Node} Component.
 */
function ImageSelect(props) {
  const {
    image,
    onChange,
    settingsText = SETTINGS_TEXT,
    showImageButton = true,
    buttonText = BUTTON_TEXT,
    useFocalPoint = false,
    focalPointLabel = FOCALPOINT_LABEL,
    focalPointHelp = FOCALPOINT_HELP,
    focalPoint = {
      x: 0.5,
      y: 0.5
    },
    onChangeFocalPoint,
    ...rest
  } = props;
  const imageId = image && image.id;
  const imageUrl = image && image.url;
  if (useFocalPoint) {
    const focalPointStyle = {
      objectFit: 'cover',
      objectPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
    };

    // Set style changes from focalPointStyle object and use it with image.
    rest.style = {
      ...rest.style,
      ...focalPointStyle
    };
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !imageId ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaPlaceholder, {
    onSelect: ({
      id,
      url
    }) => {
      onChange({
        id,
        url
      });
    },
    allowedTypes: ['image']
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, useFocalPoint && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: settingsText
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FocalPointPicker, {
    label: focalPointLabel,
    help: focalPointHelp,
    url: imageUrl,
    value: focalPoint,
    onChange: onChangeFocalPoint
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MediaToolbar__WEBPACK_IMPORTED_MODULE_4__.MediaToolbar, {
    id: imageId,
    onSelect: ({
      id,
      url
    }) => {
      onChange({
        id,
        url
      });
    },
    onRemove: () => {
      onChange(null);
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageUrl,
    alt: "",
    ...rest
  }), showImageButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "meom-media-button button button-large",
    onClick: () => onChange(null)
  }, buttonText)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSelect);

/***/ }),

/***/ "./src/components/MediaToolbar/index.js":
/*!**********************************************!*\
  !*** ./src/components/MediaToolbar/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaToolbar: () => (/* binding */ MediaToolbar),
/* harmony export */   useMedia: () => (/* binding */ useMedia)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);






const MEDIA_LABEL = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media', 'meom-block-components');
const REPLACE_BUTTON_TEXT = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace Image', 'meom-block-components');
const REMOVE_BUTTON_TEXT = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image', 'meom-block-components');
const ADD_BUTTON_TEXT = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Image', 'meom-block-components');

/**
 * MediaToolbar
 *
 * This is a helper component that adds the Media Replace Flow
 * with some buttons to add or remove an image.
 *
 * This should be used on components that have optional images.
 *
 * Component got from https://github.com/10up/block-components/tree/develop/components/media-toolbar
 *
 * @param {object} props options
 * @returns {React.ReactElement} markup of the ToolbarGroup
 */
const MediaToolbar = props => {
  const {
    onSelect,
    onRemove,
    isOptional = true,
    id
  } = props;
  const hasImage = !!id;
  const {
    media
  } = useMedia(id);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
    label: MEDIA_LABEL
  }, hasImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaReplaceFlow, {
    mediaUrl: media?.source_url,
    onSelect: onSelect,
    name: REPLACE_BUTTON_TEXT
  }), !!isOptional && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    onClick: onRemove
  }, REMOVE_BUTTON_TEXT)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelect,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
      onClick: open
    }, ADD_BUTTON_TEXT)
  }))));
};
function useMedia(id) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getMedia,
      isResolving,
      hasFinishedResolution
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    const mediaParameters = [id, {
      context: 'view'
    }];
    return {
      media: getMedia(...mediaParameters),
      isResolvingMedia: isResolving('getMedia', mediaParameters),
      hasResolvedMedia: hasFinishedResolution('getMedia', mediaParameters)
    };
  }, [id]);
}

/***/ }),

/***/ "./src/components/PostSelect/index.js":
/*!********************************************!*\
  !*** ./src/components/PostSelect/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * Post picker from wanted post type.
 *
 * @param {Object} props Props for component.
 */
function PostSelect(props) {
  const {
    attributes: {
      postId
    },
    postTypeName,
    queryArgs = {
      per_page: 99
    },
    queryOptions = {
      enabled: true
    },
    setAttributes
  } = props;
  const options = [];

  // See: https://make.wordpress.org/core/2022/10/11/simplified-data-access-with-new-react-hooks-in-wordpress-6-1/
  // See: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useentityrecords
  // See: https://github.com/WordPress/gutenberg/tree/1f47e41d4ce5987f9acf07fab58a7c39ea919c05/packages/core-data/src/hooks
  const {
    records,
    isResolving
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)('postType', postTypeName, queryArgs, queryOptions);
  options.push({
    value: 0,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No post selected', 'meom-block-components')
  });
  if (!isResolving && records && records.length > 0) {
    records.forEach(post => {
      options.push({
        value: post.id,
        label: post.title.raw
      });
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isResolving && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), !isResolving && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose post', 'meom-block-components'),
    options: options,
    onChange: newPostId => {
      setAttributes({
        postId: newPostId
      });
    },
    value: postId
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostSelect);

/***/ }),

/***/ "./src/components/TermSelect/index.js":
/*!********************************************!*\
  !*** ./src/components/TermSelect/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * Term picker from wanted taxonomy.
 *
 * @param {Object} props Props for component.
 */
function TermSelect(props) {
  const {
    attributes: {
      termId
    },
    taxonomyName,
    queryArgs = {
      per_page: 99
    },
    queryOptions = {
      enabled: true
    },
    setAttributes
  } = props;
  const options = [];

  // See: https://make.wordpress.org/core/2022/10/11/simplified-data-access-with-new-react-hooks-in-wordpress-6-1/
  // See: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useentityrecords
  // See: https://github.com/WordPress/gutenberg/tree/1f47e41d4ce5987f9acf07fab58a7c39ea919c05/packages/core-data/src/hooks
  const {
    records,
    isResolving
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)('taxonomy', taxonomyName, queryArgs, queryOptions);
  options.push({
    value: 0,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('From all categories', 'meom-block-components')
  });
  if (!isResolving && records && records.length > 0) {
    records.forEach(term => {
      options.push({
        value: term.id,
        label: term.name
      });
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isResolving && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), !isResolving && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose category', 'meom-block-components'),
    options: options,
    onChange: newTermId => {
      setAttributes({
        termId: newTermId
      });
    },
    value: termId
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermSelect);

/***/ }),

/***/ "./src/components/VideoSelect/index.js":
/*!*********************************************!*\
  !*** ./src/components/VideoSelect/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




const BUTTON_TEXT = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Video', 'meom-block-components');
const VIDEO_ATTRIBUTES = {
  autoPlay: true,
  muted: true,
  loop: true
};
const VIDEO_TYPE = 'video/mp4';

/**
 * Video select control.
 *
 * @param {Object} props - Component props.
 * @return {Node} Component.
 */
function VideoSelect(props) {
  const {
    video,
    onChange,
    buttonText = BUTTON_TEXT,
    videoAttributes = VIDEO_ATTRIBUTES,
    videoType = VIDEO_TYPE
  } = props;
  const videoId = video && video.id;
  const videoUrl = video && video.url;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !videoId ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaPlaceholder, {
    onSelect: ({
      id,
      url
    }) => {
      onChange({
        id,
        url
      });
    },
    allowedTypes: ['video']
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    ...videoAttributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: videoUrl,
    type: videoType
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "meom-media-button button button-large",
    onClick: () => onChange(null)
  }, buttonText)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoSelect);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageSelect: () => (/* reexport safe */ _components_ImageSelect__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   PostSelect: () => (/* reexport safe */ _components_PostSelect__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   TermSelect: () => (/* reexport safe */ _components_TermSelect__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   VideoSelect: () => (/* reexport safe */ _components_VideoSelect__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _components_ImageSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ImageSelect */ "./src/components/ImageSelect/index.js");
/* harmony import */ var _components_PostSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PostSelect */ "./src/components/PostSelect/index.js");
/* harmony import */ var _components_TermSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TermSelect */ "./src/components/TermSelect/index.js");
/* harmony import */ var _components_VideoSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/VideoSelect */ "./src/components/VideoSelect/index.js");
// Components.




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map