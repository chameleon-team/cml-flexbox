var manifest = require('./manifest.js');
var cmldefine = manifest.cmldefine;

cmldefine('18', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cmlTtRuntime = require("4");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.data = {};
  }

  _createClass(App, [{
    key: 'created',
    value: function created(res) {}
  }]);

  return App;
}();

exports.default = new App();
exports.default = _cmlTtRuntime2.default.createApp(exports.default).getOptions();
})
cmldefine('4', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("19");

var _index2 = require("40");

var _index3 = require("42");

exports.default = {
  createApp: _index.createApp,
  createPage: _index2.createPage,
  createComponent: _index3.createComponent
};
})
cmldefine('19', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;

var _index = require("20");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createApp(options) {
  return _index2.default.createApp(options);
}
})
cmldefine('20', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _tt = require("5");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-flexbox/node_modules/cml-tt-runtime/src/interfaces/createApp/index.interface";

var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "createAppInterface": {
      "createApp": {
        "input": ["CMLObject"],
        "output": "CMLObject"
      }
    }
  },
  "classes": {
    "Method": ["createAppInterface"]
  }
};

var __OBJECT__WRAPPER__ = require("9"); // 定义模块的interface


var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "createApp",
    value: function createApp(options) {
      return new _tt.App(options);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);

var copyProtoProperty = require("10");

copyProtoProperty(exports.default);
})
cmldefine('5', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = require("21");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _instance.App;
  }
});
Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _instance.Page;
  }
});
Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _instance.Component;
  }
});
})
cmldefine('21', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require("22");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _app.CmlApp;
  }
});

var _page = require("38");

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _page.CmlPage;
  }
});

var _component = require("39");

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _component.CmlComponent;
  }
});
})
cmldefine('22', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CmlApp = undefined;

var _VmAdapter = require("6");

var _VmAdapter2 = _interopRequireDefault(_VmAdapter);

var _MiniRuntimeCore = require("7");

var _MiniRuntimeCore2 = _interopRequireDefault(_MiniRuntimeCore);

var _BaseCtor2 = require("8");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = require("1");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // import BaseCtor from 'chameleon-runtime/src/platform/common/proto/BaseCtor'
// import lifecycle from 'chameleon-runtime/src/platform/common/util/lifecycle'
// import MiniRuntimeCore from 'chameleon-runtime/src/platform/common/proto/MiniRuntimeCore'


var CmlApp = exports.CmlApp = function (_BaseCtor) {
  _inherits(CmlApp, _BaseCtor);

  function CmlApp(options) {
    _classCallCheck(this, CmlApp);

    var _this = _possibleConstructorReturn(this, (CmlApp.__proto__ || Object.getPrototypeOf(CmlApp)).call(this, options));

    _this.cmlType = 'tt';
    var runtimeCore = new _MiniRuntimeCore2.default({
      polyHooks: _lifecycle2.default.get('tt.app.polyHooks'),
      platform: _this.cmlType,
      options: _this.options
    });

    _this.initVmAdapter(_VmAdapter2.default, {
      type: 'app',
      runtimeMixins: {
        onLaunch: function onLaunch() {
          // 初始化
          runtimeCore.setContext(this).init().start('app-view-render');
        }
      },
      needResolveAttrs: ['methods'],
      hooks: _lifecycle2.default.get('tt.app.hooks'),
      hooksMap: _lifecycle2.default.get('tt.app.hooksMap'),
      polyHooks: _lifecycle2.default.get('tt.app.polyHooks'),
      usedHooks: _lifecycle2.default.get('tt.app.usedHooks')
    });

    App(_this.options);
    return _this;
  }

  return CmlApp;
}(_BaseCtor3.default);
})
cmldefine('6', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MiniVmAdapter2 = require("23");

var _MiniVmAdapter3 = _interopRequireDefault(_MiniVmAdapter2);

var _cmlTtMixins = require("29");

var _cmlTtMixins2 = _interopRequireDefault(_cmlTtMixins);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // import MiniVmAdapter from 'chameleon-runtime/src/platform/common/proto/MiniVmAdapter'


var VmAdapter = function (_MiniVmAdapter) {
  _inherits(VmAdapter, _MiniVmAdapter);

  function VmAdapter(config) {
    _classCallCheck(this, VmAdapter);

    var _this = _possibleConstructorReturn(this, (VmAdapter.__proto__ || Object.getPrototypeOf(VmAdapter)).call(this, config));

    _this.platform = 'tt'; // 样式、事件代理 mixins

    _this.baseMixins = _cmlTtMixins2.default.mixins;

    _this.init();

    return _this;
  }

  return VmAdapter;
}(_MiniVmAdapter3.default);

exports.default = VmAdapter;
})
cmldefine('23', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _BaseVmAdapter2 = require("24");

var _BaseVmAdapter3 = _interopRequireDefault(_BaseVmAdapter2);

var _util = require("2");

var _type = require("0");

var _resolve = require("26");

var _mobx = require("3");

var _KEY = require("12");

var _KEY2 = _interopRequireDefault(_KEY);

var _lifecycle = require("1");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _options = require("28");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // 各种小程序options transform 基类


var MiniVmAdapter = function (_BaseVmAdapter) {
  _inherits(MiniVmAdapter, _BaseVmAdapter);

  function MiniVmAdapter(config) {
    _classCallCheck(this, MiniVmAdapter); //小程序特有


    var _this = _possibleConstructorReturn(this, (MiniVmAdapter.__proto__ || Object.getPrototypeOf(MiniVmAdapter)).call(this, config));

    _this.needPropsHandler = config.needPropsHandler;
    _this.needResolveAttrs = config.needResolveAttrs;
    _this.needTransformProperties = config.needTransformProperties;
    return _this;
  }

  _createClass(MiniVmAdapter, [{
    key: 'init',
    value: function init() {
      this.propsName = this.platform ? _KEY2.default.get(this.platform + '.props') : ''; // 处理 CML hooks

      this.initHooks(this.options);
      this.initOptions(this.options); // 处理 mixins 

      this.initMixins(this.options); // 处理 生命周期多态

      this.extendPolyHooks(); // init 顺序很重要、
      // 添加各种mixins
      // this.mergeInjectedMixins()

      this.mergeBuiltinMixins(); // 处理 mixins

      this.resolveOptions(); // 添加 生命周期代理

      this.transformHooks(); // 处理 methods

      this.needResolveAttrs && this.resolveAttrs(); // 处理 props 添加监听

      this.needTransformProperties && this.transformProperties();

      if (this.platform === 'alipay') {
        delete this.options['computed'];
      }
    }
    /**
     * merge cml hooks from mixins
     * handle hooks include:
     * 1. cml hooks
     * 2. platforms hooks in resolveOptions function
     * @param {Object} options 
     */

  }, {
    key: 'initHooks',
    value: function initHooks(options) {
      if (!options.mixins) return;

      var cmlHooks = _lifecycle2.default.get('cml.hooks');

      var mixins = options.mixins;

      var _loop = function _loop(i) {
        var mix = mixins[i];
        Object.keys(mix).forEach(function (key) {
          if (cmlHooks.indexOf(key) !== -1) {
            !Array.isArray(mix[key]) && (mix[key] = [mix[key]]);

            if ((0, _util.hasOwn)(options, key)) {
              !Array.isArray(options[key]) && (options[key] = [options[key]]);
              options[key] = mix[key].concat(options[key]);
            } else {
              options[key] = mix[key];
            }

            delete mix[key];
          }
        });
      };

      for (var i = mixins.length - 1; i >= 0; i--) {
        _loop(i);
      }
    }
  }, {
    key: 'initOptions',
    value: function initOptions(options) {
      // 处理 props
      this.needPropsHandler && this.handleProps(options); // 处理 生命周期映射

      (0, _util.transferLifecycle)(options, this.hooksMap);
    }
    /**
     * 处理组件props属性
     * @param  {Object} options 组件options
     * @return {[type]}     [description]
     */

  }, {
    key: 'handleProps',
    value: function handleProps(options) {
      var _this2 = this;

      if (!options['props']) return;
      Object.getOwnPropertyNames(options['props']).forEach(function (name) {
        var prop = options['props'][name]; // Number: 0
        // Boolean: false
        // Array: false
        // String: ''
        // Object: null
        // null: null

        function make(type) {
          if (!knowType(type)) {
            return;
          }

          switch (type) {
            case Number:
              prop = options['props'][name] = {
                type: Number,
                default: 0
              };
              break;

            case Boolean:
              prop = options['props'][name] = {
                type: Boolean,
                default: false
              };
              break;

            case Array:
              prop = options['props'][name] = {
                type: Array,
                default: []
              };
              break;

            case String:
              prop = options['props'][name] = {
                type: String,
                default: ''
              };
              break;

            case Object:
              prop = options['props'][name] = {
                type: Object,
                default: null
              };
              break;

            case null:
              prop = options['props'][name] = {
                type: null,
                default: null
              };
              break;

            default:
              break;
          }
        }

        function knowType(type) {
          return type === Number || type === Boolean || type === Array || type === String || type === Object || type === null;
        } // 处理 props = { a: String, b: Boolean }


        make(prop);

        if ((0, _type.type)(prop) === 'Object') {
          if (_this2.platform === 'alipay') {
            if (!prop.hasOwnProperty('default')) {
              // alipay 处理 // 处理 props = { a: {type:String}, b: {type:Boolean} }
              make(prop.type);
            }

            options['props'][name] = prop['default'];
          } else {
            (0, _util.rename)(options['props'][name], 'default', 'value');
          }
        }
      });

      if (this.platform !== 'alipay') {
        (0, _util.rename)(options, 'props', 'properties');
      }

      function check(value, type) {
        if (typeof value === 'undefined') {
          console.error(prop + '\u9700\u8981\u4F20\u9ED8\u8BA4\u503C');
          return false;
        } // todo type 校验

      }
    }
  }, {
    key: 'initMixins',
    value: function initMixins(options) {
      var _this3 = this;

      if (!options.mixins) return;
      var mixins = options.mixins;
      mixins.forEach(function (mix) {
        _this3.initOptions(mix);
      });
    }
    /**
     * 小程序端差异化生命周期 hooks mixins
     */

  }, {
    key: 'extendPolyHooks',
    value: function extendPolyHooks() {
      var _this4 = this;

      var methods = this.options.methods;

      if (!methods) {
        return;
      }

      this.polyHooks.forEach(function (hook) {
        if ((0, _type.type)(methods[hook]) === 'Function') {
          if ((0, _type.type)(_this4.options[hook]) === 'Array') {
            _this4.options[hook].push(methods[hook]);
          } else {
            _this4.options[hook] = [methods[hook]];
          }

          delete methods[hook];
        }
      });
    }
  }, {
    key: 'mergeInjectedMixins',
    value: function mergeInjectedMixins() {
      this.options.mixins = this.options.mixins ? this.options.mixins.concat(this.injectMixins) : this.injectMixins;
    }
  }, {
    key: 'mergeBuiltinMixins',
    value: function mergeBuiltinMixins() {
      var btMixin = [this.baseMixins, this.runtimeMixins].filter(function (item) {
        return item;
      });
      this.options.mixins = this.options.mixins ? btMixin.concat(this.options.mixins) : btMixin;
    }
  }, {
    key: 'resolveOptions',
    value: function resolveOptions() {
      var self = this;

      var extractMixins = function extractMixins(mOptions, options) {
        if (options.mixins) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = options.mixins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _mix = _step.value;
              extractMixins(mOptions, _mix);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        mergeMixins(mOptions, options);
      };

      var mergeMixins = function mergeMixins(parent, child) {
        for (var key in child) {
          if (self.hooks.indexOf(key) > -1) {
            (0, _resolve.mergeHooks)(parent, child, key);
          } else if (key === 'data') {
            (0, _resolve.mergeData)(parent, child, key);
          } else if (testProps(key)) {
            (0, _resolve.mergeSimpleProps)(parent, child, key);
          } else if (key === 'watch') {
            (0, _resolve.mergeWatch)(parent, child, key);
          } else if (key !== 'mixins') {
            (0, _resolve.mergeDefault)(parent, child, key);
          }
        }
      };

      var testProps = function testProps(key) {
        var regExp = new RegExp('computed|methods|proto|' + self.propsName);
        return regExp.test(key);
      };

      var newOptions = {};
      extractMixins(newOptions, this.options);
      this.options = newOptions;
    }
  }, {
    key: 'transformHooks',
    value: function transformHooks() {
      if (!this.hooks || !this.hooks.length) return;
      var self = this;
      this.hooks.forEach(function (key) {
        var hooksArr = self.options[key];
        hooksArr && (self.options[key] = function () {
          var result = void 0;
          var asyncQuene = []; // 多态生命周期需要统一回调参数
          // if (self.polyHooks.indexOf(key) > -1) {
          //   let res = args[0]
          //   if (type(res) !== 'Object') {
          //     res = {
          //       'detail': args[0]
          //     }
          //   }
          //   args = [res]
          // }

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if ((0, _type.type)(hooksArr) === 'Function') {
            result = hooksArr.apply(this, args);
          } else if ((0, _type.type)(hooksArr) === 'Array') {
            for (var i = 0; i < hooksArr.length; i++) {
              if ((0, _type.type)(hooksArr[i]) === 'Function') {
                result = hooksArr[i].apply(this, args); // if (result && result.enableAsync) {
                //   asyncQuene = hooksArr.slice(i + 1)
                //   break
                // }
              }
            } // Promise.resolve().then(() => {
            //   asyncQuene.forEach(fn => {
            //     fn.apply(this, args)
            //   })
            // })

          }

          return result;
        });
      });
    }
  }, {
    key: 'resolveAttrs',
    value: function resolveAttrs() {
      var _this5 = this;

      if (!this.needResolveAttrs.length) return;
      var keys = this.needResolveAttrs;

      if ((0, _type.type)(keys) === 'String') {
        keys = [keys];
      }

      keys.forEach(function (key) {
        var value = _this5.options[key];
        if ((0, _type.type)(value) !== 'Object') return;
        (0, _util.extendWithIgnore)(_this5.options, value, _this5.usedHooks);
        delete _this5.options[key];
      });
    }
  }, {
    key: 'transformProperties',
    value: function transformProperties() {
      var originProperties = this.options[this.propsName];
      var newProps = {};
      (0, _util.enumerableKeys)(originProperties).forEach(function (key) {
        var rawFiled = originProperties[key];
        var rawObserver = rawFiled.observer;
        var newFiled = null;

        if (typeof rawFiled === 'function') {
          newFiled = {
            type: rawFiled
          };
        } else {
          newFiled = (0, _util.extend)({}, rawFiled);
        }

        newFiled.observer = function (value, oldValue) {
          // 小程序内部数据使用了JSON.parse(JSON.stringify(x))的方式，导致每次引用都会变化
          if (_mobx.extras.deepEqual(value, oldValue)) return;
          this[key] = value;
          typeof rawObserver === 'function' && rawObserver.call(this, value, oldValue);
        };

        newProps[key] = newFiled;
      });
      this.options[this.propsName] = newProps;
    }
  }]);

  return MiniVmAdapter;
}(_BaseVmAdapter3.default);

exports.default = MiniVmAdapter;
})
cmldefine('24', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _type = require("0");

var _warn = require("11");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
} // options transform 基类


var BaseVmAdapter = function () {
  function BaseVmAdapter(config) {
    _classCallCheck(this, BaseVmAdapter);

    this.type = config.type;
    this.options = config.options;
    this.injectMixins = config.injectMixins || [];
    this.runtimeMixins = config.runtimeMixins;
    this.hooks = config.hooks;
    this.hooksMap = config.hooksMap;
    this.polyHooks = config.polyHooks;
    this.usedHooks = config.usedHooks;
    this.platform = '';

    if ("dev" !== "build") {
      var mix = this.options.mixins;
      (0, _warn.invariant)((0, _type.type)(mix) === 'Undefined' || (0, _type.type)(mix) === "Array", "mixins expects an Array");
    }
  }

  _createClass(BaseVmAdapter, [{
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);

  return BaseVmAdapter;
}();

exports.default = BaseVmAdapter;
})
cmldefine('0', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.type = type;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;
exports.isDef = isDef;
exports.isPromise = isPromise;
var toString = Object.prototype.toString;

function type(n) {
  return toString.call(n).slice(8, -1);
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return type(obj) === 'Object';
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isPromise(v) {
  return isDef(v) && typeof v.then === 'function' && typeof v.catch === 'function';
}
})
cmldefine('11', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fail = fail;
exports.invariant = invariant;
exports.deprecated = deprecated;
var OBFUSCATED_ERROR = exports.OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";

function fail(message) {
  invariant(false, message);
  throw "X"; // unreachable
}

function invariant(check, message) {
  if (!check) throw new Error("[chameleon-runtime] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */


var deprecatedMessages = [];

function deprecated(msg, thing) {
  if ("dev" === "build") return false;

  if (thing) {
    return deprecated("'" + msg + "', use '" + thing + "' instead.");
  }

  if (deprecatedMessages.indexOf(msg) !== -1) return false;
  deprecatedMessages.push(msg);
  console.error("[chameleon-runtime] Deprecated: " + msg);
  return true;
}
})
cmldefine('2', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.hasOwn = hasOwn;
exports.noop = noop;
exports.propToFn = propToFn;
exports.transferLifecycle = transferLifecycle;
exports.rename = rename;
exports.normalizeMap = normalizeMap;
exports.merge = merge;
exports.extend = extend;
exports.extendWithIgnore = extendWithIgnore;
exports.isExistAttr = isExistAttr;
exports.parsePath = parsePath;
exports.getByPath = getByPath;
exports.enumerable = enumerable;
exports.proxy = proxy;
exports.deleteProperties = deleteProperties;
exports.enumerableKeys = enumerableKeys;
exports.flatten = flatten;

var _type = require("0");

var _clone = require("25");
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {} // transfer 对象的`${name}`属性值 to function


function propToFn(obj, name) {
  if (obj && (0, _type.isObject)(obj[name])) {
    var _temp = obj[name];

    obj[name] = function () {
      return (0, _clone.deepClone)(_temp);
    };
  }
}
/**
 * 生命周期映射
 * @param  {Object} options options
 * @param  {Object} hooksMap 映射表
 * @return {Object}     修改后值
 */


function transferLifecycle(options, hooksMap) {
  if (!hooksMap) {
    return;
  }

  var _hooksTemp = [];
  var _mapTemp = {}; // 将生命周期 键名 处理成 [`$_${key}`]

  Object.keys(hooksMap).forEach(function (key) {
    var uniKey = '$_' + key;

    _hooksTemp.push(uniKey);

    _mapTemp[uniKey] = hooksMap[key];

    if (hasOwn(options, key)) {
      options[uniKey] = options[key];
      delete options[key];
    }
  });

  _hooksTemp.forEach(function (uniKey) {
    var mapKey = _mapTemp[uniKey];
    var hook = options[uniKey];
    !Array.isArray(hook) && (hook = [hook]);

    if (hasOwn(options, uniKey) && mapKey && hook) {
      if (hasOwn(options, mapKey)) {
        !Array.isArray(options[mapKey]) && (options[mapKey] = [options[mapKey]]);
        options[mapKey] = options[mapKey].concat(hook);
      } else {
        options[mapKey] = hook;
      }

      delete options[uniKey];
    }
  });
}
/**
 * 对象键名重定义
 * @param  {Object} obj     对象
 * @param  {String} oldKey    原键名
 * @param  {String} newKey 新键名
 * @return {Object}         新对象
 */


function rename(obj, oldKey, newKey) {
  Object.getOwnPropertyNames(obj).forEach(function (key) {
    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[key];
      return obj;
    }
  });
  return obj;
}

function normalizeMap(arr) {
  if ((0, _type.type)(arr) === 'Array') {
    var map = {};
    arr.forEach(function (value) {
      map[value] = value;
    });
    return map;
  }

  return arr;
}

function merge(to, from) {
  if (!from) return to;
  var key = void 0,
      toVal = void 0,
      fromVal = void 0;
  var keys = Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];

    if ((0, _type.type)(toVal) === 'Object' && (0, _type.type)(fromVal) === 'Object') {
      merge(toVal, fromVal);
    } else {
      to[key] = fromVal;
    }
  }

  return to;
}

function extend(target) {
  for (var _len = arguments.length, froms = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    froms[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = froms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var from = _step.value;

      if ((0, _type.type)(from) === 'Object') {
        // for in 能遍历原型链上的属性
        for (var key in from) {
          target[key] = from[key];
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return target;
}

function extendWithIgnore(target, from) {
  var ignore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if ((0, _type.type)(from) === 'Object') {
    // for in 能遍历原型链上的属性
    for (var key in from) {
      if (!~ignore.indexOf(key)) {
        target[key] = from[key];
      }
    }
  }

  return target;
}

function isExistAttr(obj, attr) {
  var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  var isNullOrUndefined = obj === null || obj === undefined;

  if (isNullOrUndefined) {
    return false;
  } else if (type === 'object' || type === 'function') {
    return attr in obj;
  } else {
    return obj[attr] !== undefined;
  }
}

function parsePath(path) {
  return function (obj) {
    return getByPath(obj, path);
  };
}

function getByPath(data, path, notExistOutput) {
  if (!path) return data;
  var segments = path.split('.');
  var notExist = false;
  var value = data;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = segments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;

      if (isExistAttr(value, key)) {
        value = value[key];
      } else {
        value = undefined;
        notExist = true;
        break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (notExistOutput) {
    return notExist ? notExistOutput : value;
  } else {
    // 小程序setData时不允许undefined数据
    return value === undefined ? '' : value;
  }
}

function enumerable(target, keys) {
  keys.forEach(function (key) {
    var descriptor = Object.getOwnPropertyDescriptor(target, key);

    if (!descriptor.enumerable) {
      descriptor.enumerable = true;
      Object.defineProperty(target, key, descriptor);
    }
  });
  return target;
}

function proxy(target, source, mapKeys, readonly) {
  if (typeof mapKeys === 'boolean') {
    readonly = mapKeys;
    mapKeys = null;
  }

  enumerableKeys(source).forEach(function (key, index) {
    var descriptor = {
      get: function get() {
        return source[key];
      },
      configurable: true,
      enumerable: true
    };
    !readonly && (descriptor.set = function (val) {
      source[key] = val;
    });
    Object.defineProperty(target, mapKeys ? mapKeys[index] : key, descriptor);
  });
  return target;
}

function deleteProperties(source) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!props.length) return source;
  var sourceKeys = Object.keys(source);
  var newData = {};
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = sourceKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var key = _step3.value;

      if (props.indexOf(key) < 0) {
        newData[key] = source[key];
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return newData;
}

function enumerableKeys(obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
}

function flatten() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  function check(str) {
    if (!str) {
      console.error('pathStr should not be null!');
      return false;
    }

    return true;
  }

  function flattenRe(d) {
    var pathStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if ((0, _type.type)(d) === 'Array') {
      check(pathStr);
      d.forEach(function (item, i) {
        var path = pathStr + '[' + i + ']';
        flattenRe(item, path);
      });
    } else if ((0, _type.type)(d) === 'Object') {
      Object.keys(d).forEach(function (k) {
        var v = d[k];
        var path = pathStr ? pathStr + '.' + k : k;
        flattenRe(v, path);
      });
    } else {
      check(pathStr);
      ret[pathStr] = d;
    }
  }

  var ret = {};
  flattenRe(obj);
  return ret;
}
})
cmldefine('25', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.deepClone = deepClone;

var _type = require("0");
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */


function find(list, f) {
  return list.filter(f)[0];
}
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


function deepClone(obj) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []; // just return if obj is immutable value

  if ((0, _type.type)(obj) !== 'Object' && (0, _type.type)(obj) !== 'Array') {
    return obj;
  } // if obj is hit, it is in circular structure


  var hit = find(cache, function (c) {
    return c.original === obj;
  });

  if (hit) {
    return hit.copy;
  }

  var copy = Array.isArray(obj) ? [] : {}; // put the copy into cache at first
  // because we want to refer it in recursive deepClone

  cache.push({
    original: obj,
    copy: copy
  });
  Object.keys(obj).forEach(function (key) {
    copy[key] = deepClone(obj[key], cache);
  });
  return copy;
}
})
cmldefine('26', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeDefault = mergeDefault;
exports.mergeHooks = mergeHooks;
exports.mergeSimpleProps = mergeSimpleProps;
exports.mergeData = mergeData;
exports.mergeWatch = mergeWatch;

var _util = require("2");

var _type = require("0");

function mergeDefault(parent, child, key) {
  parent[key] = child[key];
}

function mergeHooks(parent, child, key) {
  var hasKeyParent = parent.hasOwnProperty(key);
  var isArrayChild = (0, _type.type)(child[key]) === 'Array';

  if (!hasKeyParent && !isArrayChild) {
    parent[key] = [child[key]];
  } else if (!hasKeyParent && isArrayChild) {
    parent[key] = child[key];
  } else if (hasKeyParent && !isArrayChild) {
    parent[key].push(child[key]);
  } else if (hasKeyParent && isArrayChild) {
    parent[key] = parent[key].concat(child[key]);
  }
}

function mergeSimpleProps(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];

  if (!parentVal) {
    parent[key] = parentVal = {};
  }

  (0, _util.extend)(parentVal, childVal);
}

function mergeData(parent, child, key) {
  var childVal = child[key];

  if (!parent[key]) {
    parent[key] = {};
  }

  (0, _util.merge)(parent[key], childVal);
}

function mergeWatch(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];
  var ret = [];

  if (!parentVal) {
    parent[key] = parentVal = {};
  }

  Object.keys(childVal).forEach(function (key) {
    if (key in parentVal) {
      parentVal[key] = (0, _type.type)(parentVal[key]) !== 'Array' ? [parentVal[key], childVal[key]] : parentVal[key].concat([childVal[key]]);
    } else {
      parentVal[key] = childVal[key];
    }
  });
}
})
cmldefine('3', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */


var extendStatics = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (d, b) {
  d.__proto__ = b;
} || function (d, b) {
  for (var p in b) {
    if (b.hasOwnProperty(p)) d[p] = b[p];
  }
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */


var BaseAtom = function () {
  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function BaseAtom(name) {
    if (name === void 0) {
      name = "Atom@" + getNextId();
    }

    this.name = name;
    this.isPendingUnobservation = true; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.NOT_TRACKING;
  }

  BaseAtom.prototype.onBecomeUnobserved = function () {// noop
  };
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   */


  BaseAtom.prototype.reportObserved = function () {
    reportObserved(this);
  };
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */


  BaseAtom.prototype.reportChanged = function () {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  BaseAtom.prototype.toString = function () {
    return this.name;
  };

  return BaseAtom;
}();

var Atom = function (_super) {
  __extends(Atom, _super);
  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */


  function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (name === void 0) {
      name = "Atom@" + getNextId();
    }

    if (onBecomeObservedHandler === void 0) {
      onBecomeObservedHandler = noop;
    }

    if (onBecomeUnobservedHandler === void 0) {
      onBecomeUnobservedHandler = noop;
    }

    var _this = _super.call(this, name) || this;

    _this.name = name;
    _this.onBecomeObservedHandler = onBecomeObservedHandler;
    _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
    _this.isPendingUnobservation = false; // for effective unobserving.

    _this.isBeingTracked = false;
    return _this;
  }

  Atom.prototype.reportObserved = function () {
    startBatch();

    _super.prototype.reportObserved.call(this);

    if (!this.isBeingTracked) {
      this.isBeingTracked = true;
      this.onBecomeObservedHandler();
    }

    endBatch();
    return !!globalState.trackingDerivation; // return doesn't really give useful info, because it can be as well calling computed which calls atom (no reactions)
    // also it could not trigger when calculating reaction dependent on Atom because Atom's value was cached by computed called by given reaction.
  };

  Atom.prototype.onBecomeUnobserved = function () {
    this.isBeingTracked = false;
    this.onBecomeUnobservedHandler();
  };

  return Atom;
}(BaseAtom);

var isAtom = createInstanceofPredicate("Atom", BaseAtom);

function hasInterceptors(interceptable) {
  return interceptable.interceptors && interceptable.interceptors.length > 0;
}

function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}

function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    var interceptors = interceptable.interceptors;
    if (interceptors) for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
      if (!change) break;
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners && listenable.changeListeners.length > 0;
}

function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners || (listenable.changeListeners = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}

function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

function isSpyEnabled() {
  return !!globalState.spyListeners.length;
}

function spyReport(event) {
  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}

function spyReportStart(event) {
  var change = objectAssign({}, event, {
    spyReportStart: true
  });
  spyReport(change);
}

var END_EVENT = {
  spyReportEnd: true
};

function spyReportEnd(change) {
  if (change) spyReport(objectAssign({}, change, END_EVENT));else spyReport(END_EVENT);
}

function spy(listener) {
  globalState.spyListeners.push(listener);
  return once(function () {
    var idx = globalState.spyListeners.indexOf(listener);
    if (idx !== -1) globalState.spyListeners.splice(idx, 1);
  });
}

function iteratorSymbol() {
  return typeof Symbol === "function" && Symbol.iterator || "@@iterator";
}

var IS_ITERATING_MARKER = "__$$iterating";

function arrayAsIterator(array) {
  // returning an array for entries(), values() etc for maps was a mis-interpretation of the specs..,
  // yet it is quite convenient to be able to use the response both as array directly and as iterator
  // it is suboptimal, but alas...
  invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
  addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
  var idx = -1;
  addHiddenFinalProp(array, "next", function next() {
    idx++;
    return {
      done: idx >= this.length,
      value: idx < this.length ? this[idx] : undefined
    };
  });
  return array;
}

function declareIterator(prototType, iteratorFactory) {
  addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364

var safariPrototypeSetterInheritanceBug = function () {
  var v = false;
  var p = {};
  Object.defineProperty(p, "0", {
    set: function set() {
      v = true;
    }
  });
  Object.create(p)["0"] = 1;
  return v === false;
}();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */


var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray = function () {
  function StubArray() {}

  return StubArray;
}();

function inherit(ctor, proto) {
  if (typeof Object["setPrototypeOf"] !== "undefined") {
    Object["setPrototypeOf"](ctor.prototype, proto);
  } else if (typeof ctor.prototype.__proto__ !== "undefined") {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor["prototype"] = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529

if (Object.isFrozen(Array)) {
  ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function (key) {
    Object.defineProperty(StubArray.prototype, key, {
      configurable: true,
      writable: true,
      value: Array.prototype[key]
    });
  });
}

var ObservableArrayAdministration = function () {
  function ObservableArrayAdministration(name, enhancer, array, owned) {
    this.array = array;
    this.owned = owned;
    this.values = [];
    this.lastKnownLength = 0;
    this.interceptors = null;
    this.changeListeners = null;
    this.atom = new BaseAtom(name || "ObservableArray@" + getNextId());

    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }

  ObservableArrayAdministration.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableArrayAdministration.prototype.dehanceValues = function (values) {
    if (this.dehancer !== undefined) return values.map(this.dehancer);
    return values;
  };

  ObservableArrayAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        object: this.array,
        type: "splice",
        index: 0,
        added: this.values.slice(),
        addedCount: this.values.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  ObservableArrayAdministration.prototype.getArrayLength = function () {
    this.atom.reportObserved();
    return this.values.length;
  };

  ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
    if (typeof newLength !== "number" || newLength < 0) throw new Error("[mobx.array] Out of range: " + newLength);
    var currentLength = this.values.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray(currentLength, 0, newItems);
    } else this.spliceWithArray(newLength, currentLength - newLength);
  }; // adds / removes the necessary numeric properties to this object


  ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
    if (oldLength !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
    this.lastKnownLength += delta;
    if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE) reserveArrayBuffer(oldLength + delta + 1);
  };

  ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom);
    var length = this.values.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = [];

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.array,
        type: "splice",
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.map(function (v) {
      return _this.enhancer(v, undefined);
    });
    var lengthDelta = newItems.length - deleteCount;
    this.updateArrayLength(length, lengthDelta); // create or remove new entries

    var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice(index, newItems, res);
    return this.dehanceValues(res);
  };

  ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values.slice(index, index + deleteCount);
      this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
      return res;
    }

    var _a;
  };

  ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "update",
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null;
    if (notifySpy) spyReportStart(change);
    this.atom.reportChanged();
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "splice",
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (notifySpy) spyReportStart(change);
    this.atom.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  return ObservableArrayAdministration;
}();

var ObservableArray = function (_super) {
  __extends(ObservableArray, _super);

  function ObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = "ObservableArray@" + getNextId();
    }

    if (owned === void 0) {
      owned = false;
    }

    var _this = _super.call(this) || this;

    var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
    addHiddenFinalProp(_this, "$mobx", adm);

    if (initialValues && initialValues.length) {
      _this.spliceWithArray(0, 0, initialValues);
    }

    if (safariPrototypeSetterInheritanceBug) {
      // Seems that Safari won't use numeric prototype setter untill any * numeric property is
      // defined on the instance. After that it works fine, even if this property is deleted.
      Object.defineProperty(adm.array, "0", ENTRY_0);
    }

    return _this;
  }

  ObservableArray.prototype.intercept = function (handler) {
    return this.$mobx.intercept(handler);
  };

  ObservableArray.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    return this.$mobx.observe(listener, fireImmediately);
  };

  ObservableArray.prototype.clear = function () {
    return this.splice(0);
  };

  ObservableArray.prototype.concat = function () {
    var arrays = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      arrays[_i] = arguments[_i];
    }

    this.$mobx.atom.reportObserved();
    return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) {
      return isObservableArray(a) ? a.peek() : a;
    }));
  };

  ObservableArray.prototype.replace = function (newItems) {
    return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
  };
  /**
   * Converts this array back to a (shallow) javascript structure.
   * For a deep clone use mobx.toJS
   */


  ObservableArray.prototype.toJS = function () {
    return this.slice();
  };

  ObservableArray.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toJS();
  };

  ObservableArray.prototype.peek = function () {
    this.$mobx.atom.reportObserved();
    return this.$mobx.dehanceValues(this.$mobx.values);
  }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


  ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }

    var idx = this.findIndex.apply(this, arguments);
    return idx === -1 ? undefined : this.get(idx);
  }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex


  ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }

    var items = this.peek(),
        l = items.length;

    for (var i = fromIndex; i < l; i++) {
      if (predicate.call(thisArg, items[i], i, this)) return i;
    }

    return -1;
  };
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */


  ObservableArray.prototype.splice = function (index, deleteCount) {
    var newItems = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      newItems[_i - 2] = arguments[_i];
    }

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return this.$mobx.spliceWithArray(index);

      case 2:
        return this.$mobx.spliceWithArray(index, deleteCount);
    }

    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };

  ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };

  ObservableArray.prototype.push = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this.$mobx;
    adm.spliceWithArray(adm.values.length, 0, items);
    return adm.values.length;
  };

  ObservableArray.prototype.pop = function () {
    return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
  };

  ObservableArray.prototype.shift = function () {
    return this.splice(0, 1)[0];
  };

  ObservableArray.prototype.unshift = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this.$mobx;
    adm.spliceWithArray(0, 0, items);
    return adm.values.length;
  };

  ObservableArray.prototype.reverse = function () {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    // so we deviate from the default and just make it an dervitation
    var clone = this.slice();
    return clone.reverse.apply(clone, arguments);
  };

  ObservableArray.prototype.sort = function (compareFn) {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    var clone = this.slice();
    return clone.sort.apply(clone, arguments);
  };

  ObservableArray.prototype.remove = function (value) {
    var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  };

  ObservableArray.prototype.move = function (fromIndex, toIndex) {
    function checkIndex(index) {
      if (index < 0) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
      }

      var length = this.$mobx.values.length;

      if (index >= length) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
      }
    }

    checkIndex.call(this, fromIndex);
    checkIndex.call(this, toIndex);

    if (fromIndex === toIndex) {
      return;
    }

    var oldItems = this.$mobx.values;
    var newItems;

    if (fromIndex < toIndex) {
      newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
    } else {
      // toIndex < fromIndex
      newItems = oldItems.slice(0, toIndex).concat([oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
    }

    this.replace(newItems);
  }; // See #734, in case property accessors are unreliable...


  ObservableArray.prototype.get = function (index) {
    var impl = this.$mobx;

    if (impl) {
      if (index < impl.values.length) {
        impl.atom.reportObserved();
        return impl.dehanceValue(impl.values[index]);
      }

      console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    }

    return undefined;
  }; // See #734, in case property accessors are unreliable...


  ObservableArray.prototype.set = function (index, newValue) {
    var adm = this.$mobx;
    var values = adm.values;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(adm.atom);
      var oldValue = values[index];

      if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
          type: "update",
          object: this,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = adm.enhancer(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        adm.notifyArrayChildUpdate(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      adm.spliceWithArray(index, 0, [newValue]);
    } else {
      // out of bounds
      throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
    }
  };

  return ObservableArray;
}(StubArray);

declareIterator(ObservableArray.prototype, function () {
  return arrayAsIterator(this.slice());
});
Object.defineProperty(ObservableArray.prototype, "length", {
  enumerable: false,
  configurable: true,
  get: function get() {
    return this.$mobx.getArrayLength();
  },
  set: function set(newLength) {
    this.$mobx.setArrayLength(newLength);
  }
});
["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (funcName) {
  var baseFunc = Array.prototype[funcName];
  invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
  addHiddenProp(ObservableArray.prototype, funcName, function () {
    return baseFunc.apply(this.peek(), arguments);
  });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */

makeNonEnumerable(ObservableArray.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]); // See #364

var ENTRY_0 = createArrayEntryDescriptor(0);

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: false,
    get: function get() {
      // TODO: Check `this`?, see #752?
      return this.get(index);
    },
    set: function set(value) {
      this.set(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++) {
    createArrayBufferItem(index);
  }

  OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}

reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);

function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var UNCHANGED = {};

var ObservableValue = function (_super) {
  __extends(ObservableValue, _super);

  function ObservableValue(value, enhancer, name, notifySpy) {
    if (name === void 0) {
      name = "ObservableValue@" + getNextId();
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    var _this = _super.call(this, name) || this;

    _this.enhancer = enhancer;
    _this.hasUnreportedChange = false;
    _this.dehancer = undefined;
    _this.value = enhancer(value, undefined, name);

    if (notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: "create",
        object: _this,
        newValue: _this.value
      });
    }

    return _this;
  }

  ObservableValue.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableValue.prototype.set = function (newValue) {
    var oldValue = this.value;
    newValue = this.prepareNewValue(newValue);

    if (newValue !== UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if (notifySpy) {
        spyReportStart({
          type: "update",
          object: this,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue(newValue);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableValue.prototype.prepareNewValue = function (newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: "update",
        newValue: newValue
      });
      if (!change) return UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value, this.name);
    return this.value !== newValue ? newValue : UNCHANGED;
  };

  ObservableValue.prototype.setNewValue = function (newValue) {
    var oldValue = this.value;
    this.value = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: "update",
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  ObservableValue.prototype.get = function () {
    this.reportObserved();
    return this.dehanceValue(this.value);
  };

  ObservableValue.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableValue.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately) listener({
      object: this,
      type: "update",
      newValue: this.value,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  ObservableValue.prototype.toJSON = function () {
    return this.get();
  };

  ObservableValue.prototype.toString = function () {
    return this.name + "[" + this.value + "]";
  };

  ObservableValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };

  return ObservableValue;
}(BaseAtom);

ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
var messages = {
  m001: "It is not allowed to assign new values to @action fields",
  m002: "`runInAction` expects a function",
  m003: "`runInAction` expects a function without arguments",
  m004: "autorun expects a function",
  m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
  m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
  m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
  m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
  m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
  m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
  m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
  m012: "computed takes one or two arguments if used as function",
  m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
  m014: "extendObservable expected 2 or more arguments",
  m015: "extendObservable expects an object as first argument",
  m016: "extendObservable should not be used on maps, use map.merge instead",
  m017: "all arguments of extendObservable should be objects",
  m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
  m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
  m020: "modifiers can only be used for individual object properties",
  m021: "observable expects zero or one arguments",
  m022: "@observable can not be used on getters, use @computed instead",
  m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
  m025: "whyRun can only be used on reactions and computed values",
  m026: "`action` can only be invoked on functions",
  m028: "It is not allowed to set `useStrict` when a derivation is running",
  m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
  m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
  m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
  m031: "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",
  m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
  m033: "`observe` doesn't support the fire immediately property for observable maps.",
  m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
  m035: "Cannot make the designated object observable; it is not extensible",
  m036: "It is not possible to get index atoms from arrays",
  m037: "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
  m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
};

function getMessage(id) {
  return messages[id];
}

function createAction(actionName, fn) {
  invariant(typeof fn === "function", getMessage("m026"));
  invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");

  var res = function res() {
    return executeAction(actionName, fn, this, arguments);
  };

  res.originalFn = fn;
  res.isMobxAction = true;
  return res;
}

function executeAction(actionName, fn, scope, args) {
  var runInfo = startAction(actionName, fn, scope, args);

  try {
    return fn.apply(scope, args);
  } finally {
    endAction(runInfo);
  }
}

function startAction(actionName, fn, scope, args) {
  var notifySpy = isSpyEnabled() && !!actionName;
  var startTime = 0;

  if (notifySpy) {
    startTime = Date.now();
    var l = args && args.length || 0;
    var flattendArgs = new Array(l);
    if (l > 0) for (var i = 0; i < l; i++) {
      flattendArgs[i] = args[i];
    }
    spyReportStart({
      type: "action",
      name: actionName,
      fn: fn,
      object: scope,
      arguments: flattendArgs
    });
  }

  var prevDerivation = untrackedStart();
  startBatch();
  var prevAllowStateChanges = allowStateChangesStart(true);
  return {
    prevDerivation: prevDerivation,
    prevAllowStateChanges: prevAllowStateChanges,
    notifySpy: notifySpy,
    startTime: startTime
  };
}

function endAction(runInfo) {
  allowStateChangesEnd(runInfo.prevAllowStateChanges);
  endBatch();
  untrackedEnd(runInfo.prevDerivation);
  if (runInfo.notifySpy) spyReportEnd({
    time: Date.now() - runInfo.startTime
  });
}

function useStrict(strict) {
  invariant(globalState.trackingDerivation === null, getMessage("m028"));
  globalState.strictMode = strict;
  globalState.allowStateChanges = !strict;
}

function isStrictModeEnabled() {
  return globalState.strictMode;
}

function allowStateChanges(allowStateChanges, func) {
  // TODO: deprecate / refactor this function in next major
  // Currently only used by `@observer`
  // Proposed change: remove first param, rename to `forbidStateChanges`,
  // require error callback instead of the hardcoded error message now used
  // Use `inAction` instead of allowStateChanges in derivation.ts to check strictMode
  var prev = allowStateChangesStart(allowStateChanges);
  var res;

  try {
    res = func();
  } finally {
    allowStateChangesEnd(prev);
  }

  return res;
}

function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}

function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}
/**
 * Constructs a decorator, that normalizes the differences between
 * TypeScript and Babel. Mainly caused by the fact that legacy-decorator cannot assign
 * values during instance creation to properties that have a getter setter.
 *
 * - Sigh -
 *
 * Also takes care of the difference between @decorator field and @decorator(args) field, and different forms of values.
 * For performance (cpu and mem) reasons the properties are always defined on the prototype (at least initially).
 * This means that these properties despite being enumerable might not show up in Object.keys() (but they will show up in for...in loops).
 */


function createClassPropertyDecorator(
/**
 * This function is invoked once, when the property is added to a new instance.
 * When this happens is not strictly determined due to differences in TS and Babel:
 * Typescript: Usually when constructing the new instance
 * Babel, sometimes Typescript: during the first get / set
 * Both: when calling `runLazyInitializers(instance)`
 */
onInitialize, _get, _set, enumerable,
/**
 * Can this decorator invoked with arguments? e.g. @decorator(args)
 */
allowCustomArguments) {
  function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
    if (argLen === void 0) {
      argLen = 0;
    }

    invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");

    if (!descriptor) {
      // typescript (except for getter / setters)
      var newDescriptor = {
        enumerable: enumerable,
        configurable: true,
        get: function get() {
          if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
          return _get.call(this, key);
        },
        set: function set(v) {
          if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
            typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
          } else {
            _set.call(this, key, v);
          }
        }
      };

      if (arguments.length < 3 || arguments.length === 5 && argLen < 3) {
        // Typescript target is ES3, so it won't define property for us
        // or using Reflect.decorate polyfill, which will return no descriptor
        // (see https://github.com/mobxjs/mobx/issues/333)
        Object.defineProperty(target, key, newDescriptor);
      }

      return newDescriptor;
    } else {
      // babel and typescript getter / setter props
      if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
        addHiddenProp(target, "__mobxLazyInitializers", target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice() || [] // support inheritance
        );
      }

      var value_1 = descriptor.value,
          initializer_1 = descriptor.initializer;

      target.__mobxLazyInitializers.push(function (instance) {
        onInitialize(instance, key, initializer_1 ? initializer_1.call(instance) : value_1, customArgs, descriptor);
      });

      return {
        enumerable: enumerable,
        configurable: true,
        get: function get() {
          if (this.__mobxDidRunLazyInitializers !== true) runLazyInitializers(this);
          return _get.call(this, key);
        },
        set: function set(v) {
          if (this.__mobxDidRunLazyInitializers !== true) runLazyInitializers(this);

          _set.call(this, key, v);
        }
      };
    }
  }

  if (allowCustomArguments) {
    /** If custom arguments are allowed, we should return a function that returns a decorator */
    return function () {
      /** Direct invocation: @decorator bla */
      if (quacksLikeADecorator(arguments)) return classPropertyDecorator.apply(null, arguments);
      /** Indirect invocation: @decorator(args) bla */

      var outerArgs = arguments;
      var argLen = arguments.length;
      return function (target, key, descriptor) {
        return classPropertyDecorator(target, key, descriptor, outerArgs, argLen);
      };
    };
  }

  return classPropertyDecorator;
}

function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
  if (!hasOwnProperty(instance, "__mobxInitializedProps")) addHiddenProp(instance, "__mobxInitializedProps", {});
  instance.__mobxInitializedProps[key] = true;
  onInitialize(instance, key, v, customArgs, baseDescriptor);
}

function runLazyInitializers(instance) {
  if (instance.__mobxDidRunLazyInitializers === true) return;

  if (instance.__mobxLazyInitializers) {
    addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
    instance.__mobxDidRunLazyInitializers && instance.__mobxLazyInitializers.forEach(function (initializer) {
      return initializer(instance);
    });
  }
}

function quacksLikeADecorator(args) {
  return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
}

var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
  var actionName = args && args.length === 1 ? args[0] : value.name || key || "<unnamed action>";
  var wrappedAction = action(actionName, value);
  addHiddenProp(target, key, wrappedAction);
}, function (key) {
  return this[key];
}, function () {
  invariant(false, getMessage("m001"));
}, false, true);
var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
  defineBoundAction(target, key, value);
}, function (key) {
  return this[key];
}, function () {
  invariant(false, getMessage("m001"));
}, false, false);

var action = function action(arg1, arg2, arg3, arg4) {
  if (arguments.length === 1 && typeof arg1 === "function") return createAction(arg1.name || "<unnamed action>", arg1);
  if (arguments.length === 2 && typeof arg2 === "function") return createAction(arg1, arg2);
  if (arguments.length === 1 && typeof arg1 === "string") return namedActionDecorator(arg1);
  return namedActionDecorator(arg2).apply(null, arguments);
};

action.bound = function boundAction(arg1, arg2, arg3) {
  if (typeof arg1 === "function") {
    var action_1 = createAction("<not yet bound action>", arg1);
    action_1.autoBind = true;
    return action_1;
  }

  return boundActionDecorator.apply(null, arguments);
};

function namedActionDecorator(name) {
  return function (target, prop, descriptor) {
    if (descriptor && typeof descriptor.value === "function") {
      // TypeScript @action method() { }. Defined on proto before being decorated
      // Don't use the field decorator if we are just decorating a method
      descriptor.value = createAction(name, descriptor.value);
      descriptor.enumerable = false;
      descriptor.configurable = true;
      return descriptor;
    }

    if (descriptor !== undefined && descriptor.get !== undefined) {
      throw new Error("[mobx] action is not expected to be used with getters");
    } // bound instance methods


    return actionFieldDecorator(name).apply(this, arguments);
  };
}

function runInAction(arg1, arg2, arg3) {
  var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
  var fn = typeof arg1 === "function" ? arg1 : arg2;
  var scope = typeof arg1 === "function" ? arg2 : arg3;
  invariant(typeof fn === "function", getMessage("m002"));
  invariant(fn.length === 0, getMessage("m003"));
  invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
  return executeAction(actionName, fn, scope, undefined);
}

function isAction(thing) {
  return typeof thing === "function" && thing.isMobxAction === true;
}

function defineBoundAction(target, propertyName, fn) {
  var res = function res() {
    return executeAction(propertyName, fn, target, arguments);
  };

  res.isMobxAction = true;
  addHiddenProp(target, propertyName, res);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289


function deepEqual(a, b) {
  return eq(a, b);
} // Internal recursive comparison function for `isEqual`.


function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = typeof a === "undefined" ? "undefined" : _typeof(a);
  if (type !== "function" && type !== "object" && (typeof b === "undefined" ? "undefined" : _typeof(b)) != "object") return false;
  return deepEq(a, b, aStack, bStack);
}

var toString = Object.prototype.toString; // Internal recursive comparison function for `isEqual`.

function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  a = unwrap(a);
  b = unwrap(b); // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
  }

  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if ((typeof a === "undefined" ? "undefined" : _typeof(a)) != "object" || (typeof b === "undefined" ? "undefined" : _typeof(b)) != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(typeof aCtor === "function" && aCtor instanceof aCtor && typeof bCtor === "function" && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a),
        key;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.peek();
  if (isObservableMap(a)) return a.entries();
  if (isES6Map(a)) return iteratorToArray(a.entries());
  return a;
}

function has(a, key) {
  return Object.prototype.hasOwnProperty.call(a, key);
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function defaultComparer(a, b) {
  return areBothNaN(a, b) || identityComparer(a, b);
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  default: defaultComparer
};

function autorun(arg1, arg2, arg3) {
  var name, view, scope;

  if (typeof arg1 === "string") {
    name = arg1;
    view = arg2;
    scope = arg3;
  } else {
    name = arg1.name || "Autorun@" + getNextId();
    view = arg1;
    scope = arg2;
  }

  invariant(typeof view === "function", getMessage("m004"));
  invariant(isAction(view) === false, getMessage("m005"));
  if (scope) view = view.bind(scope);
  var reaction = new Reaction(name, function () {
    this.track(reactionRunner);
  });

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule();
  return reaction.getDisposer();
}

function when(arg1, arg2, arg3, arg4) {
  var name, predicate, effect, scope;

  if (typeof arg1 === "string") {
    name = arg1;
    predicate = arg2;
    effect = arg3;
    scope = arg4;
  } else {
    name = "When@" + getNextId();
    predicate = arg1;
    effect = arg2;
    scope = arg3;
  }

  var disposer = autorun(name, function (r) {
    if (predicate.call(scope)) {
      r.dispose();
      var prevUntracked = untrackedStart();
      effect.call(scope);
      untrackedEnd(prevUntracked);
    }
  });
  return disposer;
}

function autorunAsync(arg1, arg2, arg3, arg4) {
  var name, func, delay, scope;

  if (typeof arg1 === "string") {
    name = arg1;
    func = arg2;
    delay = arg3;
    scope = arg4;
  } else {
    name = arg1.name || "AutorunAsync@" + getNextId();
    func = arg1;
    delay = arg2;
    scope = arg3;
  }

  invariant(isAction(func) === false, getMessage("m006"));
  if (delay === void 0) delay = 1;
  if (scope) func = func.bind(scope);
  var isScheduled = false;
  var r = new Reaction(name, function () {
    if (!isScheduled) {
      isScheduled = true;
      setTimeout(function () {
        isScheduled = false;
        if (!r.isDisposed) r.track(reactionRunner);
      }, delay);
    }
  });

  function reactionRunner() {
    func(r);
  }

  r.schedule();
  return r.getDisposer();
}

function reaction(expression, effect, arg3) {
  if (arguments.length > 3) {
    fail(getMessage("m007"));
  }

  if (isModifierDescriptor(expression)) {
    fail(getMessage("m008"));
  }

  var opts;

  if ((typeof arg3 === "undefined" ? "undefined" : _typeof(arg3)) === "object") {
    opts = arg3;
  } else {
    opts = {};
  }

  opts.name = opts.name || expression.name || effect.name || "Reaction@" + getNextId();
  opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
  opts.delay = opts.delay || 0;
  opts.compareStructural = opts.compareStructural || opts.struct || false; // TODO: creates ugly spy events, use `effect = (r) => runInAction(opts.name, () => effect(r))` instead

  effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);

  if (opts.context) {
    expression = expression.bind(opts.context);
  }

  var firstTime = true;
  var isScheduled = false;
  var value;
  var equals = opts.equals ? opts.equals : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
  var r = new Reaction(opts.name, function () {
    if (firstTime || opts.delay < 1) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      setTimeout(function () {
        isScheduled = false;
        reactionRunner();
      }, opts.delay);
    }
  });

  function reactionRunner() {
    if (r.isDisposed) return;
    var changed = false;
    r.track(function () {
      var nextValue = expression(r);
      changed = firstTime || !equals(value, nextValue);
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effect(value, r);
    if (!firstTime && changed === true) effect(value, r);
    if (firstTime) firstTime = false;
  }

  r.schedule();
  return r.getDisposer();
}
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */


var ComputedValue = function () {
  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce an new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(derivation, scope, equals, name, setter) {
    this.derivation = derivation;
    this.scope = scope;
    this.equals = equals;
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = null; // during tracking it's an array with new observed observers

    this.isPendingUnobservation = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.runId = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.UP_TO_DATE;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.value = new CaughtException(null);
    this.isComputing = false; // to check for cycles

    this.isRunningSetter = false;
    this.isTracing = TraceMode.NONE;
    this.name = name || "ComputedValue@" + getNextId();
    if (setter) this.setter = createAction(name + "-setter", setter);
  }

  ComputedValue.prototype.onBecomeStale = function () {
    propagateMaybeChanged(this);
  };

  ComputedValue.prototype.onBecomeUnobserved = function () {
    clearObserving(this);
    this.value = undefined;
  };
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */


  ComputedValue.prototype.get = function () {
    invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);

    if (globalState.inBatch === 0) {
      // This is an minor optimization which could be omitted to simplify the code
      // The computedValue is accessed outside of any mobx stuff. Batch observing should be enough and don't need
      // tracking as it will never be called again inside this batch.
      startBatch();

      if (shouldCompute(this)) {
        if (this.isTracing !== TraceMode.NONE) {
          console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context and doing a full recompute");
        }

        this.value = this.computeValue(false);
      }

      endBatch();
    } else {
      reportObserved(this);
      if (shouldCompute(this)) if (this.trackAndCompute()) propagateChangeConfirmed(this);
    }

    var result = this.value;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  ComputedValue.prototype.peek = function () {
    var res = this.computeValue(false);
    if (isCaughtException(res)) throw res.cause;
    return res;
  };

  ComputedValue.prototype.set = function (value) {
    if (this.setter) {
      invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
      this.isRunningSetter = true;

      try {
        this.setter.call(this.scope, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else invariant(false, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
  };

  ComputedValue.prototype.trackAndCompute = function () {
    if (isSpyEnabled()) {
      spyReport({
        object: this.scope,
        type: "compute",
        fn: this.derivation
      });
    }

    var oldValue = this.value;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState === IDerivationState.NOT_TRACKING;
    var newValue = this.value = this.computeValue(true);
    return wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals(oldValue, newValue);
  };

  ComputedValue.prototype.computeValue = function (track) {
    this.isComputing = true;
    globalState.computationDepth++;
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope);
    } else {
      try {
        res = this.derivation.call(this.scope);
      } catch (e) {
        res = new CaughtException(e);
      }
    }

    globalState.computationDepth--;
    this.isComputing = false;
    return res;
  };

  ComputedValue.prototype.observe = function (listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          type: "update",
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  ComputedValue.prototype.toJSON = function () {
    return this.get();
  };

  ComputedValue.prototype.toString = function () {
    return this.name + "[" + this.derivation.toString() + "]";
  };

  ComputedValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };

  ComputedValue.prototype.whyRun = function () {
    var isTracking = Boolean(globalState.trackingDerivation);
    var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) {
      return dep.name;
    });
    var observers = unique(getObservers(this).map(function (dep) {
      return dep.name;
    }));
    return "\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking ? "[active] the value of this computation is needed by a reaction" : this.isComputing ? "[get] The value of this computed was requested outside a reaction" : "[idle] not running at the moment") + "\n" + (this.dependenciesState === IDerivationState.NOT_TRACKING ? getMessage("m032") : " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this.isComputing && isTracking ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n    " + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n");
  };

  return ComputedValue;
}();

ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

var ObservableObjectAdministration = function () {
  function ObservableObjectAdministration(target, name) {
    this.target = target;
    this.name = name;
    this.values = {};
    this.changeListeners = null;
    this.interceptors = null;
  }
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
    invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };

  ObservableObjectAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  return ObservableObjectAdministration;
}();

function asObservableObject(target, name) {
  if (isObservableObject(target) && target.hasOwnProperty("$mobx")) return target.$mobx;
  invariant(Object.isExtensible(target), getMessage("m035"));
  if (!isPlainObject(target)) name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
  if (!name) name = "ObservableObject@" + getNextId();
  var adm = new ObservableObjectAdministration(target, name);
  addHiddenFinalProp(target, "$mobx", adm);
  return adm;
}

function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
  if (adm.values[propName] && !isComputedValue(adm.values[propName])) {
    // already observable property
    invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
    adm.target[propName] = descriptor.value; // the property setter will make 'value' reactive if needed.

    return;
  } // not yet observable property


  if ("value" in descriptor) {
    // not a computed value
    if (isModifierDescriptor(descriptor.value)) {
      // x : ref(someValue)
      var modifierDescriptor = descriptor.value;
      defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
    } else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
      defineBoundAction(adm.target, propName, descriptor.value.originalFn);
    } else if (isComputedValue(descriptor.value)) {
      // x: computed(someExpr)
      defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
    } else {
      // x: someValue
      defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
    }
  } else {
    // get x() { return 3 } set x(v) { }
    defineComputedProperty(adm, propName, descriptor.get, descriptor.set, comparer.default, true);
  }
}

function defineObservableProperty(adm, propName, newValue, enhancer) {
  assertPropertyConfigurable(adm.target, propName);

  if (hasInterceptors(adm)) {
    var change = interceptChange(adm, {
      object: adm.target,
      name: propName,
      type: "add",
      newValue: newValue
    });
    if (!change) return;
    newValue = change.newValue;
  }

  var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
  newValue = observable.value; // observableValue might have changed it

  Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
  notifyPropertyAddition(adm, adm.target, propName, newValue);
}

function defineComputedProperty(adm, propName, getter, setter, equals, asInstanceProperty) {
  if (asInstanceProperty) assertPropertyConfigurable(adm.target, propName);
  adm.values[propName] = new ComputedValue(getter, adm.target, equals, adm.name + "." + propName, setter);

  if (asInstanceProperty) {
    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
  }
}

function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
  var name = adm.name + "." + propName;
  computedValue.name = name;
  if (!computedValue.scope) computedValue.scope = adm.target;
  adm.values[propName] = computedValue;
  Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
}

var observablePropertyConfigs = {};
var computedPropertyConfigs = {};

function generateObservablePropConfig(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function get() {
      return this.$mobx.values[propName].get();
    },
    set: function set(v) {
      setPropertyValue(this, propName, v);
    }
  });
}

function generateComputedPropConfig(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: true,
    enumerable: false,
    get: function get() {
      return this.$mobx.values[propName].get();
    },
    set: function set(v) {
      return this.$mobx.values[propName].set(v);
    }
  });
}

function setPropertyValue(instance, name, newValue) {
  var adm = instance.$mobx;
  var observable = adm.values[name]; // intercept

  if (hasInterceptors(adm)) {
    var change = interceptChange(adm, {
      type: "update",
      object: instance,
      name: name,
      newValue: newValue
    });
    if (!change) return;
    newValue = change.newValue;
  }

  newValue = observable.prepareNewValue(newValue); // notify spy & observers

  if (newValue !== UNCHANGED) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy ? {
      type: "update",
      object: instance,
      oldValue: observable.value,
      name: name,
      newValue: newValue
    } : null;
    if (notifySpy) spyReportStart(change);
    observable.setNewValue(newValue);
    if (notify) notifyListeners(adm, change);
    if (notifySpy) spyReportEnd();
  }
}

function notifyPropertyAddition(adm, object, name, newValue) {
  var notify = hasListeners(adm);
  var notifySpy = isSpyEnabled();
  var change = notify || notifySpy ? {
    type: "add",
    object: object,
    name: name,
    newValue: newValue
  } : null;
  if (notifySpy) spyReportStart(change);
  if (notify) notifyListeners(adm, change);
  if (notifySpy) spyReportEnd();
}

var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

function isObservableObject(thing) {
  if (isObject(thing)) {
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    runLazyInitializers(thing);
    return isObservableObjectAdministration(thing.$mobx);
  }

  return false;
}
/**
 * Returns true if the provided value is reactive.
 * @param value object, function or array
 * @param property if property is specified, checks whether value.property is reactive.
 */


function isObservable(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if (isObservableArray(value) || isObservableMap(value)) throw new Error(getMessage("m019"));else if (isObservableObject(value)) {
      var o = value.$mobx;
      return o.values && !!o.values[property];
    }
    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function createDecoratorForEnhancer(enhancer) {
  invariant(!!enhancer, ":(");
  return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
    assertPropertyConfigurable(target, name);
    invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
    var adm = asObservableObject(target, undefined);
    defineObservableProperty(adm, name, baseValue, enhancer);
  }, function (name) {
    var observable = this.$mobx.values[name];
    if (observable === undefined // See #505
    ) return undefined;
    return observable.get();
  }, function (name, value) {
    setPropertyValue(this, name, value);
  }, true, false);
}

function extendObservable(target) {
  var properties = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    properties[_i - 1] = arguments[_i];
  }

  return extendObservableHelper(target, deepEnhancer, properties);
}

function extendShallowObservable(target) {
  var properties = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    properties[_i - 1] = arguments[_i];
  }

  return extendObservableHelper(target, referenceEnhancer, properties);
}

function extendObservableHelper(target, defaultEnhancer, properties) {
  invariant(arguments.length >= 2, getMessage("m014"));
  invariant((typeof target === "undefined" ? "undefined" : _typeof(target)) === "object", getMessage("m015"));
  invariant(!isObservableMap(target), getMessage("m016"));
  properties.forEach(function (propSet) {
    invariant((typeof propSet === "undefined" ? "undefined" : _typeof(propSet)) === "object", getMessage("m017"));
    invariant(!isObservable(propSet), getMessage("m018"));
  });
  var adm = asObservableObject(target);
  var definedProps = {}; // Note could be optimised if properties.length === 1

  for (var i = properties.length - 1; i >= 0; i--) {
    var propSet = properties[i];

    for (var key in propSet) {
      if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
        definedProps[key] = true;
        if (target === propSet && !isPropertyConfigurable(target, key)) continue; // see #111, skip non-configurable or non-writable props for `observable(object)`.

        var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
        defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
      }
    }
  }

  return target;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v) {
  if (v === void 0) {
    v = undefined;
  } // @observable someProp;


  if (typeof arguments[1] === "string") return deepDecorator.apply(null, arguments);
  invariant(arguments.length <= 1, getMessage("m021"));
  invariant(!isModifierDescriptor(v), getMessage("m020")); // it is an observable already, done

  if (isObservable(v)) return v; // something that can be converted and mutated?

  var res = deepEnhancer(v, undefined, undefined); // this value could be converted to a new observable data structure, return it

  if (res !== v) return res; // otherwise, just box it

  return observable.box(v);
}

var observableFactories = {
  box: function box(value, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("box");
    return new ObservableValue(value, deepEnhancer, name);
  },
  shallowBox: function shallowBox(value, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowBox");
    return new ObservableValue(value, referenceEnhancer, name);
  },
  array: function array(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("array");
    return new ObservableArray(initialValues, deepEnhancer, name);
  },
  shallowArray: function shallowArray(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowArray");
    return new ObservableArray(initialValues, referenceEnhancer, name);
  },
  map: function map(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("map");
    return new ObservableMap(initialValues, deepEnhancer, name);
  },
  shallowMap: function shallowMap(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowMap");
    return new ObservableMap(initialValues, referenceEnhancer, name);
  },
  object: function object(props, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("object");
    var res = {}; // convert to observable object

    asObservableObject(res, name); // add properties

    extendObservable(res, props);
    return res;
  },
  shallowObject: function shallowObject(props, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowObject");
    var res = {};
    asObservableObject(res, name);
    extendShallowObservable(res, props);
    return res;
  },
  ref: function ref() {
    if (arguments.length < 2) {
      // although ref creates actually a modifier descriptor, the type of the resultig properties
      // of the object is `T` in the end, when the descriptors are interpreted
      return createModifierDescriptor(referenceEnhancer, arguments[0]);
    } else {
      return refDecorator.apply(null, arguments);
    }
  },
  shallow: function shallow() {
    if (arguments.length < 2) {
      // although ref creates actually a modifier descriptor, the type of the resultig properties
      // of the object is `T` in the end, when the descriptors are interpreted
      return createModifierDescriptor(shallowEnhancer, arguments[0]);
    } else {
      return shallowDecorator.apply(null, arguments);
    }
  },
  deep: function deep() {
    if (arguments.length < 2) {
      // although ref creates actually a modifier descriptor, the type of the resultig properties
      // of the object is `T` in the end, when the descriptors are interpreted
      return createModifierDescriptor(deepEnhancer, arguments[0]);
    } else {
      return deepDecorator.apply(null, arguments);
    }
  },
  struct: function struct() {
    if (arguments.length < 2) {
      // although ref creates actually a modifier descriptor, the type of the resultig properties
      // of the object is `T` in the end, when the descriptors are interpreted
      return createModifierDescriptor(deepStructEnhancer, arguments[0]);
    } else {
      return deepStructDecorator.apply(null, arguments);
    }
  }
};
var observable = createObservable; // weird trick to keep our typings nicely with our funcs, and still extend the observable function

Object.keys(observableFactories).forEach(function (name) {
  return observable[name] = observableFactories[name];
});
observable.deep.struct = observable.struct;

observable.ref.struct = function () {
  if (arguments.length < 2) {
    return createModifierDescriptor(refStructEnhancer, arguments[0]);
  } else {
    return refStructDecorator.apply(null, arguments);
  }
};

function incorrectlyUsedAsDecorator(methodName) {
  fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

function isModifierDescriptor(thing) {
  return (typeof thing === "undefined" ? "undefined" : _typeof(thing)) === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
}

function createModifierDescriptor(enhancer, initialValue) {
  invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
  return {
    isMobxModifierDescriptor: true,
    initialValue: initialValue,
    enhancer: enhancer
  };
}

function deepEnhancer(v, _, name) {
  if (isModifierDescriptor(v)) fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"); // it is an observable already, done

  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, name);
  if (isPlainObject(v)) return observable.object(v, name);
  if (isES6Map(v)) return observable.map(v, name);
  return v;
}

function shallowEnhancer(v, _, name) {
  if (isModifierDescriptor(v)) fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v)) return v;
  if (Array.isArray(v)) return observable.shallowArray(v, name);
  if (isPlainObject(v)) return observable.shallowObject(v, name);
  if (isES6Map(v)) return observable.shallowMap(v, name);
  return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}

function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}

function deepStructEnhancer(v, oldValue, name) {
  // don't confuse structurally compare enhancer with ref enhancer! The latter is probably
  // more suited for immutable objects
  if (deepEqual(v, oldValue)) return oldValue; // it is an observable already, done

  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return new ObservableArray(v, deepStructEnhancer, name);
  if (isES6Map(v)) return new ObservableMap(v, deepStructEnhancer, name);

  if (isPlainObject(v)) {
    var res = {};
    asObservableObject(res, name);
    extendObservableHelper(res, deepStructEnhancer, [v]);
    return res;
  }

  return v;
}

function refStructEnhancer(v, oldValue, name) {
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}
/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */


function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

var ObservableMapMarker = {};

var ObservableMap = function () {
  function ObservableMap(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name === void 0) {
      name = "ObservableMap@" + getNextId();
    }

    this.enhancer = enhancer;
    this.name = name;
    this.$mobx = ObservableMapMarker;
    this._data = Object.create(null);
    this._hasMap = Object.create(null); // hasMap, not hashMap >-).

    this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
    this.interceptors = null;
    this.changeListeners = null;
    this.dehancer = undefined;
    this.merge(initialData);
  }

  ObservableMap.prototype._has = function (key) {
    return typeof this._data[key] !== "undefined";
  };

  ObservableMap.prototype.has = function (key) {
    if (!this.isValidKey(key)) return false;
    key = "" + key;
    if (this._hasMap[key]) return this._hasMap[key].get();
    return this._updateHasMapEntry(key, false).get();
  };

  ObservableMap.prototype.set = function (key, value) {
    this.assertValidKey(key);
    key = "" + key;

    var hasKey = this._has(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? "update" : "add",
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this._updateValue(key, value);
    } else {
      this._addValue(key, value);
    }

    return this;
  };

  ObservableMap.prototype.delete = function (key) {
    var _this = this;

    this.assertValidKey(key);
    key = "" + key;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this._has(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: this._data[key].value,
        name: key
      } : null;
      if (notifySpy) spyReportStart(change);
      transaction(function () {
        _this._keys.remove(key);

        _this._updateHasMapEntry(key, false);

        var observable$$1 = _this._data[key];
        observable$$1.setNewValue(undefined);
        _this._data[key] = undefined;
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
      return true;
    }

    return false;
  };

  ObservableMap.prototype._updateHasMapEntry = function (key, value) {
    // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
    var entry = this._hasMap[key];

    if (entry) {
      entry.setNewValue(value);
    } else {
      entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
    }

    return entry;
  };

  ObservableMap.prototype._updateValue = function (name, newValue) {
    var observable$$1 = this._data[name];
    newValue = observable$$1.prepareNewValue(newValue);

    if (newValue !== UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "update",
        object: this,
        oldValue: observable$$1.value,
        name: name,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(change);
      observable$$1.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableMap.prototype._addValue = function (name, newValue) {
    var _this = this;

    transaction(function () {
      var observable$$1 = _this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false);
      newValue = observable$$1.value; // value might have been changed

      _this._updateHasMapEntry(name, true);

      _this._keys.push(name);
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      type: "add",
      object: this,
      name: name,
      newValue: newValue
    } : null;
    if (notifySpy) spyReportStart(change);
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  ObservableMap.prototype.get = function (key) {
    key = "" + key;
    if (this.has(key)) return this.dehanceValue(this._data[key].get());
    return this.dehanceValue(undefined);
  };

  ObservableMap.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  ObservableMap.prototype.keys = function () {
    return arrayAsIterator(this._keys.slice());
  };

  ObservableMap.prototype.values = function () {
    return arrayAsIterator(this._keys.map(this.get, this));
  };

  ObservableMap.prototype.entries = function () {
    var _this = this;

    return arrayAsIterator(this._keys.map(function (key) {
      return [key, _this.get(key)];
    }));
  };

  ObservableMap.prototype.forEach = function (callback, thisArg) {
    var _this = this;

    this.keys().forEach(function (key) {
      return callback.call(thisArg, _this.get(key), key, _this);
    });
  };
  /** Merge another object into this object, returns this. */


  ObservableMap.prototype.merge = function (other) {
    var _this = this;

    if (isObservableMap(other)) {
      other = other.toJS();
    }

    transaction(function () {
      if (isPlainObject(other)) Object.keys(other).forEach(function (key) {
        return _this.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_a) {
        var key = _a[0],
            value = _a[1];
        return _this.set(key, value);
      });else if (isES6Map(other)) other.forEach(function (value, key) {
        return _this.set(key, value);
      });else if (other !== null && other !== undefined) fail("Cannot initialize map from " + other);
    });
    return this;
  };

  ObservableMap.prototype.clear = function () {
    var _this = this;

    transaction(function () {
      untracked(function () {
        _this.keys().forEach(_this.delete, _this);
      });
    });
  };

  ObservableMap.prototype.replace = function (values) {
    var _this = this;

    transaction(function () {
      // grab all the keys that are present in the new map but not present in the current map
      // and delete them from the map, then merge the new map
      // this will cause reactions only on changed values
      var newKeys = getMapLikeKeys(values);

      var oldKeys = _this.keys();

      var missingKeys = oldKeys.filter(function (k) {
        return newKeys.indexOf(k) === -1;
      });
      missingKeys.forEach(function (k) {
        return _this.delete(k);
      });

      _this.merge(values);
    });
    return this;
  };

  Object.defineProperty(ObservableMap.prototype, "size", {
    get: function get() {
      return this._keys.length;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns a shallow non observable object clone of this map.
   * Note that the values might still be observable. For a deep clone use mobx.toJS.
   */

  ObservableMap.prototype.toJS = function () {
    var _this = this;

    var res = {};
    this.keys().forEach(function (key) {
      return res[key] = _this.get(key);
    });
    return res;
  };

  ObservableMap.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toJS();
  };

  ObservableMap.prototype.isValidKey = function (key) {
    if (key === null || key === undefined) return false;
    if (typeof key === "string" || typeof key === "number" || typeof key === "boolean") return true;
    return false;
  };

  ObservableMap.prototype.assertValidKey = function (key) {
    if (!this.isValidKey(key)) throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
  };

  ObservableMap.prototype.toString = function () {
    var _this = this;

    return this.name + "[{ " + this.keys().map(function (key) {
      return key + ": " + ("" + _this.get(key));
    }).join(", ") + " }]";
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableMap.prototype.observe = function (listener, fireImmediately) {
    invariant(fireImmediately !== true, getMessage("m033"));
    return registerListener(this, listener);
  };

  ObservableMap.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  return ObservableMap;
}();

declareIterator(ObservableMap.prototype, function () {
  return this.entries();
});

function map(initialValues) {
  deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
  return observable.map(initialValues);
}
/* 'var' fixes small-build issue */


var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);

function getGlobal() {
  return typeof window !== "undefined" ? window : global;
}

function getNextId() {
  return ++globalState.mobxGuid;
}

function fail(message, thing) {
  invariant(false, message, thing);
  throw "X"; // unreachable
}

function invariant(check, message, thing) {
  if (!check) throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */


var deprecatedMessages = [];

function deprecated(msg) {
  if (deprecatedMessages.indexOf(msg) !== -1) return false;
  deprecatedMessages.push(msg);
  console.error("[mobx] Deprecated: " + msg);
  return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */


function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}

var noop = function noop() {};

function unique(list) {
  var res = [];
  list.forEach(function (item) {
    if (res.indexOf(item) === -1) res.push(item);
  });
  return res;
}

function joinStrings(things, limit, separator) {
  if (limit === void 0) {
    limit = 100;
  }

  if (separator === void 0) {
    separator = " - ";
  }

  if (!things) return "";
  var sliced = things.slice(0, limit);
  return "" + sliced.join(separator) + (things.length > limit ? " (... and " + (things.length - limit) + "more)" : "");
}

function isObject(value) {
  return value !== null && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object";
}

function isPlainObject(value) {
  if (value === null || (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") return false;
  var proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function objectAssign() {
  var res = arguments[0];

  for (var i = 1, l = arguments.length; i < l; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty(source, key)) {
        res[key] = source[key];
      }
    }
  }

  return res;
}

var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwnProperty(object, propName) {
  return prototypeHasOwnProperty.call(object, propName);
}

function makeNonEnumerable(object, propNames) {
  for (var i = 0; i < propNames.length; i++) {
    addHiddenProp(object, propNames[i], object[propNames[i]]);
  }
}

function addHiddenProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}

function addHiddenFinalProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}

function isPropertyConfigurable(object, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(object, prop);
  return !descriptor || descriptor.configurable !== false && descriptor.writable !== false;
}

function assertPropertyConfigurable(object, prop) {
  invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}

function createInstanceofPredicate(name, clazz) {
  var propName = "isMobX" + name;
  clazz.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}

function areBothNaN(a, b) {
  return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */


function isArrayLike(x) {
  return Array.isArray(x) || isObservableArray(x);
}

function isES6Map(thing) {
  if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map) return true;
  return false;
}

function getMapLikeKeys(map$$1) {
  if (isPlainObject(map$$1)) return Object.keys(map$$1);
  if (Array.isArray(map$$1)) return map$$1.map(function (_a) {
    var key = _a[0];
    return key;
  });
  if (isES6Map(map$$1)) return Array.from(map$$1.keys());
  if (isObservableMap(map$$1)) return map$$1.keys();
  return fail("Cannot get keys from " + map$$1);
}

function iteratorToArray(it) {
  var res = [];

  while (true) {
    var r = it.next();
    if (r.done) break;
    res.push(r.value);
  }

  return res;
}

function primitiveSymbol() {
  return typeof Symbol === "function" && Symbol.toPrimitive || "@@toPrimitive";
}

function toPrimitive(value) {
  return value === null ? null : (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" ? "" + value : value;
}
/**
 * These values will persist if global state is reset
 */


var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];

var MobXGlobals = function () {
  function MobXGlobals() {
    /**
     * MobXGlobals version.
     * MobX compatiblity with other versions loaded in memory as long as this version matches.
     * It indicates that the global state still stores similar information
     */
    this.version = 5;
    /**
     * Currently running derivation
     */

    this.trackingDerivation = null;
    /**
     * Are we running a computation currently? (not a reaction)
     */

    this.computationDepth = 0;
    /**
     * Each time a derivation is tracked, it is assigned a unique run-id
     */

    this.runId = 0;
    /**
     * 'guid' for general purpose. Will be persisted amongst resets.
     */

    this.mobxGuid = 0;
    /**
     * Are we in a batch block? (and how many of them)
     */

    this.inBatch = 0;
    /**
     * Observables that don't have observers anymore, and are about to be
     * suspended, unless somebody else accesses it in the same batch
     *
     * @type {IObservable[]}
     */

    this.pendingUnobservations = [];
    /**
     * List of scheduled, not yet executed, reactions.
     */

    this.pendingReactions = [];
    /**
     * Are we currently processing reactions?
     */

    this.isRunningReactions = false;
    /**
     * Is it allowed to change observables at this point?
     * In general, MobX doesn't allow that when running computations and React.render.
     * To ensure that those functions stay pure.
     */

    this.allowStateChanges = true;
    /**
     * If strict mode is enabled, state changes are by default not allowed
     */

    this.strictMode = false;
    /**
     * Used by createTransformer to detect that the global state has been reset.
     */

    this.resetId = 0;
    /**
     * Spy callbacks
     */

    this.spyListeners = [];
    /**
     * Globally attached error handlers that react specifically to errors in reactions
     */

    this.globalReactionErrorHandlers = [];
  }

  return MobXGlobals;
}();

var globalState = new MobXGlobals();
var shareGlobalStateCalled = false;
var runInIsolationCalled = false;
var warnedAboutMultipleInstances = false;
{
  var global_1 = getGlobal();

  if (!global_1.__mobxInstanceCount) {
    global_1.__mobxInstanceCount = 1;
  } else {
    global_1.__mobxInstanceCount++;
    setTimeout(function () {
      if (!shareGlobalStateCalled && !runInIsolationCalled && !warnedAboutMultipleInstances) {
        warnedAboutMultipleInstances = true;
        console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details.");
      }
    });
  }
}

function isolateGlobalState() {
  runInIsolationCalled = true;
  getGlobal().__mobxInstanceCount--;
}

function shareGlobalState() {
  // TODO: remove in 4.0; just use peer dependencies instead.
  deprecated("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details.");
  shareGlobalStateCalled = true;
  var global = getGlobal();
  var ownState = globalState;
  /**
   * Backward compatibility check
   */

  if (global.__mobservableTrackingStack || global.__mobservableViewStack) throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
  if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version) throw new Error("[mobx] An incompatible version of mobx is already loaded.");
  if (global.__mobxGlobal) globalState = global.__mobxGlobal;else global.__mobxGlobal = ownState;
}

function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */


function resetGlobalState() {
  globalState.resetId++;
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }

  globalState.allowStateChanges = !globalState.strictMode;
}

function getAtom(thing, property) {
  if ((typeof thing === "undefined" ? "undefined" : _typeof(thing)) === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      invariant(property === undefined, getMessage("m036"));
      return thing.$mobx.atom;
    }

    if (isObservableMap(thing)) {
      var anyThing = thing;
      if (property === undefined) return getAtom(anyThing._keys);
      var observable = anyThing._data[property] || anyThing._hasMap[property];
      invariant(!!observable, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
      return observable;
    } // Initializers run lazily when transpiling to babel, so make sure they are run...


    runLazyInitializers(thing);
    if (property && !thing.$mobx) thing[property]; // See #1072 // TODO: remove in 4.0

    if (isObservableObject(thing)) {
      if (!property) return fail("please specify a property");
      var observable = thing.$mobx.values[property];
      invariant(!!observable, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
      return observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (typeof thing === "function") {
    if (isReaction(thing.$mobx)) {
      // disposer function
      return thing.$mobx;
    }
  }

  return fail("Cannot obtain atom from " + thing);
}

function getAdministration(thing, property) {
  invariant(thing, "Expecting some object");
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing)) return thing; // Initializers run lazily when transpiling to babel, so make sure they are run...

  runLazyInitializers(thing);
  if (thing.$mobx) return thing.$mobx;
  invariant(false, "Cannot obtain administration from " + thing);
}

function getDebugName(thing, property) {
  var named;
  if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well

  return named.name;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name
  };
  if (node.observing && node.observing.length > 0) result.dependencies = unique(node.observing).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name
  };
  if (hasObservers(node)) result.observers = getObservers(node).map(nodeToObserverTree);
  return result;
}

function hasObservers(observable) {
  return observable.observers && observable.observers.length > 0;
}

function getObservers(observable) {
  return observable.observers;
}

function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  var l = observable.observers.length;

  if (l) {
    // because object assignment is relatively expensive, let's not store data about index 0.
    observable.observersIndexes[node.__mapid] = l;
  }

  observable.observers[l] = node;
  if (observable.lowestObserverState > node.dependenciesState) observable.lowestObserverState = node.dependenciesState; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}

function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  if (observable.observers.length === 1) {
    // deleting last observer
    observable.observers.length = 0;
    queueForUnobservation(observable);
  } else {
    // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
    var list = observable.observers;
    var map = observable.observersIndexes;
    var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes

    if (filler !== node) {
      // otherwise node was the last element, which already got removed from array
      var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.

      if (index) {
        // map store all indexes but 0, see comment in `addObserver`
        map[filler.__mapid] = index;
      } else {
        delete map[filler.__mapid];
      }

      list[index] = filler;
    }

    delete map[node.__mapid];
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}

function queueForUnobservation(observable) {
  if (!observable.isPendingUnobservation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */


function startBatch() {
  globalState.inBatch++;
}

function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation = false;

      if (observable.observers.length === 0) {
        observable.onBecomeUnobserved(); // NOTE: onBecomeUnobserved might push to `pendingUnobservations`
      }
    }

    globalState.pendingUnobservations = [];
  }
}

function reportObserved(observable) {
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId !== observable.lastAccessedBy) {
      observable.lastAccessedBy = derivation.runId;
      derivation.newObserving[derivation.unboundDepsCount++] = observable;
    }
  } else if (observable.observers.length === 0) {
    queueForUnobservation(observable);
  }
}
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes


function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];

    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale();
    }

    d.dependenciesState = IDerivationState.STALE;
  } // invariantLOS(observable, "changed end");

} // Called by ComputedValue when it recalculate and its value changed


function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];
    if (d.dependenciesState === IDerivationState.POSSIBLY_STALE) d.dependenciesState = IDerivationState.STALE;else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable.lowestObserverState = IDerivationState.UP_TO_DATE;
  } // invariantLOS(observable, "confirmed end");

} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.


function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE) return;
  observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];

    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      d.dependenciesState = IDerivationState.POSSIBLY_STALE;

      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale();
    }
  } // invariantLOS(observable, "maybe end");

}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");

  if (derivation.isTracing === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var IDerivationState;

(function (IDerivationState) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (exports.IDerivationState = IDerivationState = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException = function () {
  function CaughtException(cause) {
    this.cause = cause; // Empty
  }

  return CaughtException;
}();

function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */


function shouldCompute(derivation) {
  switch (derivation.dependenciesState) {
    case IDerivationState.UP_TO_DATE:
      return false;

    case IDerivationState.NOT_TRACKING:
    case IDerivationState.STALE:
      return true;

    case IDerivationState.POSSIBLY_STALE:
      {
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            try {
              obj.get();
            } catch (e) {
              // we are not interested in the value *or* exception at this moment, but if there is one, notify all
              untrackedEnd(prevUntracked);
              return true;
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`


            if (derivation.dependenciesState === IDerivationState.STALE) {
              untrackedEnd(prevUntracked);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        return false;
      }
  }
}

function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}

function checkIfStateModificationsAreAllowed(atom) {
  var hasObservers$$1 = atom.observers.length > 0; // Should never be possible to change an observed observable from inside computed, see #798

  if (globalState.computationDepth > 0 && hasObservers$$1) fail(getMessage("m031") + atom.name); // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && hasObservers$$1) fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */


function trackDerivedFunction(derivation, f, context) {
  // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies
  changeDependenciesStateTo0(derivation);
  derivation.newObserving = new Array(derivation.observing.length + 100);
  derivation.unboundDepsCount = 0;
  derivation.runId = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  var result;

  try {
    result = f.call(context);
  } catch (e) {
    result = new CaughtException(e);
  }

  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing;
  var observing = derivation.observing = derivation.newObserving;
  var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState;
    }
  }

  observing.length = i0;
  derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var dep = prevObserving[l];

    if (dep.diffValue === 0) {
      removeObserver(dep, derivation);
    }

    dep.diffValue = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var dep = observing[i0];

    if (dep.diffValue === 1) {
      dep.diffValue = 0;
      addObserver(dep, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
    derivation.dependenciesState = lowestNewObservingDerivationState;
    derivation.onBecomeStale();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing;
  derivation.observing = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}

function untracked(action) {
  var prev = untrackedStart();
  var res = action();
  untrackedEnd(prev);
  return res;
}

function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}

function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */


function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState === IDerivationState.UP_TO_DATE) return;
  derivation.dependenciesState = IDerivationState.UP_TO_DATE;
  var obs = derivation.observing;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
  }
}

function log(msg) {
  console.log(msg);
  return msg;
}

function whyRun(thing, prop) {
  deprecated("`whyRun` is deprecated in favor of `trace`");
  thing = getAtomFromArgs(arguments);
  if (!thing) return log(getMessage("m024"));
  if (isComputedValue(thing) || isReaction(thing)) return log(thing.whyRun());
  return fail(getMessage("m025"));
}

function trace() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var enterBreakPoint = false;
  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return fail("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
  }

  derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}

var Reaction = function () {
  function Reaction(name, onInvalidate) {
    if (name === void 0) {
      name = "Reaction@" + getNextId();
    }

    this.name = name;
    this.onInvalidate = onInvalidate;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = [];
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.diffValue = 0;
    this.runId = 0;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.isDisposed = false;
    this._isScheduled = false;
    this._isTrackPending = false;
    this._isRunning = false;
    this.isTracing = TraceMode.NONE;
  }

  Reaction.prototype.onBecomeStale = function () {
    this.schedule();
  };

  Reaction.prototype.schedule = function () {
    if (!this._isScheduled) {
      this._isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  Reaction.prototype.isScheduled = function () {
    return this._isScheduled;
  };
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */


  Reaction.prototype.runReaction = function () {
    if (!this.isDisposed) {
      startBatch();
      this._isScheduled = false;

      if (shouldCompute(this)) {
        this._isTrackPending = true;
        this.onInvalidate();

        if (this._isTrackPending && isSpyEnabled()) {
          // onInvalidate didn't trigger track right away..
          spyReport({
            object: this,
            type: "scheduled-reaction"
          });
        }
      }

      endBatch();
    }
  };

  Reaction.prototype.track = function (fn) {
    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if (notify) {
      startTime = Date.now();
      spyReportStart({
        object: this,
        type: "reaction",
        fn: fn
      });
    }

    this._isRunning = true;
    var result = trackDerivedFunction(this, fn, undefined);
    this._isRunning = false;
    this._isTrackPending = false;

    if (this.isDisposed) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation(result.cause);

    if (notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }

    endBatch();
  };

  Reaction.prototype.reportExceptionInDerivation = function (error) {
    var _this = this;

    if (this.errorHandler) {
      this.errorHandler(error, this);
      return;
    }

    var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
    var messageToUser = getMessage("m037");
    console.error(message || messageToUser
    /* latter will not be true, make sure uglify doesn't remove */
    , error);
    /** If debugging brought you here, please, read the above message :-). Tnx! */

    if (isSpyEnabled()) {
      spyReport({
        type: "error",
        message: message,
        error: error,
        object: this
      });
    }

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  Reaction.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;

      if (!this._isRunning) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  Reaction.prototype.getDisposer = function () {
    var r = this.dispose.bind(this);
    r.$mobx = this;
    r.onError = registerErrorHandler;
    return r;
  };

  Reaction.prototype.toString = function () {
    return "Reaction[" + this.name + "]";
  };

  Reaction.prototype.whyRun = function () {
    var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) {
      return dep.name;
    });
    return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this._isRunning ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n";
  };

  Reaction.prototype.trace = function (enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();

function registerErrorHandler(handler) {
  invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
  invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
  this.$mobx.errorHandler = handler;
}

function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */


var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = createInstanceofPredicate("Reaction", Reaction);

function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function asReference(value) {
  deprecated("asReference is deprecated, use observable.ref instead");
  return observable.ref(value);
}

function asStructure(value) {
  deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
  return observable.struct(value);
}

function asFlat(value) {
  deprecated("asFlat is deprecated, use observable.shallow instead");
  return observable.shallow(value);
}

function asMap(data) {
  deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
  return observable.map(data || {});
}

function createComputedDecorator(equals) {
  return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
    invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
    invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
    var adm = asObservableObject(target, "");
    defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, equals, false);
  }, function (name) {
    var observable = this.$mobx.values[name];
    if (observable === undefined // See #505
    ) return undefined;
    return observable.get();
  }, function (name, value) {
    this.$mobx.values[name].set(value);
  }, false, false);
}

var computedDecorator = createComputedDecorator(comparer.default);
var computedStructDecorator = createComputedDecorator(comparer.structural);
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2, arg3) {
  if (typeof arg2 === "string") {
    return computedDecorator.apply(null, arguments);
  }

  invariant(typeof arg1 === "function", getMessage("m011"));
  invariant(arguments.length < 3, getMessage("m012"));
  var opts = (typeof arg2 === "undefined" ? "undefined" : _typeof(arg2)) === "object" ? arg2 : {};
  opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
  var equals = opts.equals ? opts.equals : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
  return new ComputedValue(arg1, opts.context, equals, opts.name || arg1.name || "", opts.setter);
};

computed.struct = computedStructDecorator;
computed.equals = createComputedDecorator;

function isComputed(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value.$mobx.values[property]) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }

  return isComputedValue(value);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (typeof cbOrFire === "function") return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe(listener, fireImmediately);
}

function intercept(thing, propOrHandler, handler) {
  if (typeof handler === "function") return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept(handler);
}
/**
 * expr can be used to create temporarily views inside views.
 * This can be improved to improve performance if a value changes often, but usually doesn't affect the outcome of an expression.
 *
 * In the following example the expression prevents that a component is rerender _each time_ the selection changes;
 * instead it will only rerenders when the current todo is (de)selected.
 *
 * reactiveComponent((props) => {
 *     const todo = props.todo;
 *     const isSelected = mobx.expr(() => props.viewState.selection === todo);
 *     return <div className={isSelected ? "todo todo-selected" : "todo"}>{todo.title}</div>
 * });
 *
 */


function expr(expr, scope) {
  if (!isComputingDerivation()) console.warn(getMessage("m013")); // optimization: would be more efficient if the expr itself wouldn't be evaluated first on the next change, but just a 'changed' signal would be fired

  return computed(expr, {
    context: scope
  }).get();
}

function toJS(source, detectCycles, __alreadySeen) {
  if (detectCycles === void 0) {
    detectCycles = true;
  }

  if (__alreadySeen === void 0) {
    __alreadySeen = [];
  } // optimization: using ES6 map would be more efficient!
  // optimization: lift this function outside toJS, this makes recursion expensive


  function cache(value) {
    if (detectCycles) __alreadySeen.push([source, value]);
    return value;
  }

  if (isObservable(source)) {
    if (detectCycles && __alreadySeen === null) __alreadySeen = [];

    if (detectCycles && source !== null && (typeof source === "undefined" ? "undefined" : _typeof(source)) === "object") {
      for (var i = 0, l = __alreadySeen.length; i < l; i++) {
        if (__alreadySeen[i][0] === source) return __alreadySeen[i][1];
      }
    }

    if (isObservableArray(source)) {
      var res = cache([]);
      var toAdd = source.map(function (value) {
        return toJS(value, detectCycles, __alreadySeen);
      });
      res.length = toAdd.length;

      for (var i = 0, l = toAdd.length; i < l; i++) {
        res[i] = toAdd[i];
      }

      return res;
    }

    if (isObservableObject(source)) {
      var res = cache({});

      for (var key in source) {
        res[key] = toJS(source[key], detectCycles, __alreadySeen);
      }

      return res;
    }

    if (isObservableMap(source)) {
      var res_1 = cache({});
      source.forEach(function (value, key) {
        return res_1[key] = toJS(value, detectCycles, __alreadySeen);
      });
      return res_1;
    }

    if (isObservableValue(source)) return toJS(source.get(), detectCycles, __alreadySeen);
  }

  return source;
}

function createTransformer(transformer, onCleanup) {
  invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument"); // Memoizes: object id -> reactive view that applies transformer to the object

  var objectCache = {}; // If the resetId changes, we will clear the object cache, see #163
  // This construction is used to avoid leaking refs to the objectCache directly

  var resetId = globalState.resetId; // Local transformer class specifically for this transformer

  var Transformer = function (_super) {
    __extends(Transformer, _super);

    function Transformer(sourceIdentifier, sourceObject) {
      var _this = _super.call(this, function () {
        return transformer(sourceObject);
      }, undefined, comparer.default, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;

      _this.sourceIdentifier = sourceIdentifier;
      _this.sourceObject = sourceObject;
      return _this;
    }

    Transformer.prototype.onBecomeUnobserved = function () {
      var lastValue = this.value;

      _super.prototype.onBecomeUnobserved.call(this);

      delete objectCache[this.sourceIdentifier];
      if (onCleanup) onCleanup(lastValue, this.sourceObject);
    };

    return Transformer;
  }(ComputedValue);

  return function (object) {
    if (resetId !== globalState.resetId) {
      objectCache = {};
      resetId = globalState.resetId;
    }

    var identifier = getMemoizationId(object);
    var reactiveTransformer = objectCache[identifier];
    if (reactiveTransformer) return reactiveTransformer.get(); // Not in cache; create a reactive view

    reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
    return reactiveTransformer.get();
  };
}

function getMemoizationId(object) {
  if (typeof object === "string" || typeof object === "number") return object;
  if (object === null || (typeof object === "undefined" ? "undefined" : _typeof(object)) !== "object") throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + object);
  var tid = object.$transformId;

  if (tid === undefined) {
    tid = getNextId();
    addHiddenProp(object, "$transformId", tid);
  }

  return tid;
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (typeof propOrHandler !== "string") return fail("InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration(thing, propOrHandler);
  } else {
    return fail("Expected observable map, object or array as first array");
  }

  if (target.dehancer !== undefined) return fail("An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}
/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */


var extras = {
  allowStateChanges: allowStateChanges,
  deepEqual: deepEqual,
  getAtom: getAtom,
  getDebugName: getDebugName,
  getDependencyTree: getDependencyTree,
  getAdministration: getAdministration,
  getGlobalState: getGlobalState,
  getObserverTree: getObserverTree,
  interceptReads: interceptReads,
  isComputingDerivation: isComputingDerivation,
  isSpyEnabled: isSpyEnabled,
  onReactionError: onReactionError,
  reserveArrayBuffer: reserveArrayBuffer,
  resetGlobalState: resetGlobalState,
  isolateGlobalState: isolateGlobalState,
  shareGlobalState: shareGlobalState,
  spyReport: spyReport,
  spyReportEnd: spyReportEnd,
  spyReportStart: spyReportStart,
  setReactionScheduler: setReactionScheduler
};
var everything = {
  Reaction: Reaction,
  untracked: untracked,
  Atom: Atom,
  BaseAtom: BaseAtom,
  useStrict: useStrict,
  isStrictModeEnabled: isStrictModeEnabled,
  spy: spy,
  comparer: comparer,
  asReference: asReference,
  asFlat: asFlat,
  asStructure: asStructure,
  asMap: asMap,
  isModifierDescriptor: isModifierDescriptor,
  isObservableObject: isObservableObject,
  isBoxedObservable: isObservableValue,
  isObservableArray: isObservableArray,
  ObservableMap: ObservableMap,
  isObservableMap: isObservableMap,
  map: map,
  transaction: transaction,
  observable: observable,
  computed: computed,
  isObservable: isObservable,
  isComputed: isComputed,
  extendObservable: extendObservable,
  extendShallowObservable: extendShallowObservable,
  observe: observe,
  intercept: intercept,
  autorun: autorun,
  autorunAsync: autorunAsync,
  when: when,
  reaction: reaction,
  action: action,
  isAction: isAction,
  runInAction: runInAction,
  expr: expr,
  toJS: toJS,
  createTransformer: createTransformer,
  whyRun: whyRun,
  isArrayLike: isArrayLike,
  extras: extras
};
var warnedAboutDefaultExport = false;

var _loop_1 = function _loop_1(p) {
  var val = everything[p];
  Object.defineProperty(everything, p, {
    get: function get() {
      if (!warnedAboutDefaultExport) {
        warnedAboutDefaultExport = true;
        console.warn("Using default export (`import mobx from 'mobx'`) is deprecated " + "and won’t work in mobx@4.0.0\n" + "Use `import * as mobx from 'mobx'` instead");
      }

      return val;
    }
  });
};

for (var p in everything) {
  _loop_1(p);
}

if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: extras
  });
}

exports.extras = extras;
exports.Reaction = Reaction;
exports.untracked = untracked;
exports.IDerivationState = IDerivationState;
exports.Atom = Atom;
exports.BaseAtom = BaseAtom;
exports.useStrict = useStrict;
exports.isStrictModeEnabled = isStrictModeEnabled;
exports.spy = spy;
exports.comparer = comparer;
exports.asReference = asReference;
exports.asFlat = asFlat;
exports.asStructure = asStructure;
exports.asMap = asMap;
exports.isModifierDescriptor = isModifierDescriptor;
exports.isObservableObject = isObservableObject;
exports.isBoxedObservable = isObservableValue;
exports.isObservableArray = isObservableArray;
exports.ObservableMap = ObservableMap;
exports.isObservableMap = isObservableMap;
exports.map = map;
exports.transaction = transaction;
exports.observable = observable;
exports.computed = computed;
exports.isObservable = isObservable;
exports.isComputed = isComputed;
exports.extendObservable = extendObservable;
exports.extendShallowObservable = extendShallowObservable;
exports.observe = observe;
exports.intercept = intercept;
exports.autorun = autorun;
exports.autorunAsync = autorunAsync;
exports.when = when;
exports.reaction = reaction;
exports.action = action;
exports.isAction = isAction;
exports.runInAction = runInAction;
exports.expr = expr;
exports.toJS = toJS;
exports.createTransformer = createTransformer;
exports.whyRun = whyRun;
exports.trace = trace;
exports.isArrayLike = isArrayLike;
exports.default = everything;
})
cmldefine('12', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("13");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var KEY = {
  tt: {
    instance: tt,
    props: 'properties'
  }
};
exports.default = new _config2.default(KEY);
})
cmldefine('13', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Config = function () {
  function Config(data) {
    _classCallCheck(this, Config);

    this.data = data;
  }

  _createClass(Config, [{
    key: 'get',
    value: function get() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var def = arguments[1];
      var result = this.data;
      path.split('.').forEach(function (key) {
        if (key && typeof result !== 'undefined') {
          result = result[key];
        }
      });

      if (typeof result !== 'undefined') {
        return result;
      } else {
        return def;
      }
    }
  }, {
    key: 'set',
    value: function set(path, value) {
      if (typeof value === 'undefined') {
        this.data = path;
      } else {
        path = String(path || '').trim();

        if (path) {
          var paths = path.split('.');
          var last = paths.pop();
          var data = this.data || {};
          paths.forEach(function (key) {
            var type = data[key];

            if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
              data = data[key];
            } else if (typeof type === 'undefined') {
              data = data[key] = {};
            } else {
              throw new Error('forbidden to set property[' + key + '] of [' + type + '] data');
            }
          });
          data[last] = value;
        }
      }
    }
  }]);

  return Config;
}();

exports.default = Config;
})
cmldefine('1', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("13");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // polyhooks 不同端差异化hooks

/**
 * hooks: all hooks
 * hooksMap: {
 *  [cmlHook]: clientHook
 * },
 * usedHooks: used by hooksMap
 * polyHooks: client hook
 */


var LIFECYCLE = {
  tt: {
    // https://developer.toutiao.com/docs/framework/startupApp.html#app
    app: {
      hooks: ["onLaunch", "onShow", "onHide", "onError", "onPageNotFound"],
      hooksMap: {
        beforeCreate: "onLaunch",
        created: "onLaunch",
        beforeMount: "onLaunch",
        mounted: "onShow",
        beforeDestroy: "onHide",
        destroyed: "onHide"
      },
      usedHooks: ["onLaunch", "onShow", "onHide"],
      polyHooks: ["onError", "onPageNotFound"]
    },
    // https://developer.toutiao.com/docs/framework/startupPage.html#%E5%90%AF%E5%8A%A8%E9%A1%B5%E9%9D%A2
    page: {
      hooks: ["onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap"],
      hooksMap: {
        beforeCreate: "onLoad",
        created: "onLoad",
        beforeMount: "onLoad",
        mounted: "onReady",
        beforeDestroy: "onUnload",
        destroyed: "onUnload",
        onShow: "onShow",
        onHide: "onHide"
      },
      usedHooks: ["onLoad", "onReady", "onShow", "onHide", "onUnload"],
      polyHooks: ["onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap"]
    },
    // https://developer.toutiao.com/docs/framework/custom_component_constructor.html
    component: {
      hooks: ["created", "attached", "ready", "detached", "moved"],
      hooksMap: {
        beforeCreate: "created",
        created: "attached",
        beforeMount: "attached",
        mounted: "ready",
        beforeDestroy: "detached",
        destroyed: "detached"
      },
      usedHooks: ["created", "attached", "ready", "detached"],
      polyHooks: ["moved"]
    }
  },
  cml: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'onShow', 'onHide']
  }
};
exports.default = new _config2.default(LIFECYCLE);
})
cmldefine('28', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeOptions = mergeOptions;

var _util = require("2");

var _lifecycle = require("1");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = {};
/**
 * Hooks are merged as arrays.
 */

function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

_lifecycle2.default.get('cml.hooks').forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Default strategy.
 */


var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (typeof child === 'function') {
    child = child.options;
  }

  if (child.extends) {
    parent = mergeOptions(parent, child.extends, vm);
  }

  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }

  var options = {};
  var key = void 0;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!(0, _util.hasOwn)(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
})
cmldefine('29', function(require, exports, module) {
  var _methods;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

var utils = require("30");

var _ = module.exports = {};

_.eventProxyName = '_cmlEventProxy';
_.modelEventProxyName = '_cmlModelEventProxy'; // c-model的事件代理

_.inlineStatementEventProxy = '_cmlInline'; // 内联语句的事件代理

_.eventEmitName = '$cmlEmit'; // 触发事件的方法

_.mergeStyleName = '$cmlMergeStyle';
_.animationProxy = '_animationCb';

_.isType = function (obj, type) {
  return Object.prototype.toString.call(obj).slice(8, -1) === type;
};

_.mergeStyle = function () {
  // 可以接受字符串或者对象
  function styleToObj(str) {
    var obj = {};
    str.split(';').filter(function (item) {
      return !!item.trim();
    }).forEach(function (item) {
      var _utils$getStyleKeyVal = utils.getStyleKeyValue(item),
          key = _utils$getStyleKeyVal.key,
          value = _utils$getStyleKeyVal.value;

      key = key.replace(/\s+/, '');
      value = value.replace(/\s+/, '');
      obj[key] = value;
    });
    return obj;
  }

  var arr = [];

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    if (typeof arg === 'string') {
      arr.push(styleToObj(arg));
    } else if (Object.prototype.toString.call(arg) === '[object Object]') {
      arr.push(arg);
    }
  });
  var resultObj = Object.assign.apply(Object, arr);
  var resultStr = '';
  Object.keys(resultObj).forEach(function (key) {
    resultStr += key + ':' + resultObj[key] + ';';
  });
  return resultStr;
};

_.trim = function (value) {
  return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

_.isReactive = function (value) {
  var reg = /(?:^'([^']*?)'$)/;
  return _.trim(value).match(reg);
};

_.mixins = {
  methods: (_methods = {}, _defineProperty(_methods, _.inlineStatementEventProxy, function (e) {
    var dataset = e.currentTarget.dataset;
    var eventKey = e.type.toLowerCase();
    var originFuncName = dataset && dataset['event' + eventKey] && dataset['event' + eventKey][0];
    var inlineArgs = dataset && dataset['event' + eventKey] && dataset['event' + eventKey].slice(1);
    var argsArr = []; // 由于百度对于 data-arg="" 在dataset.arg = true 值和微信端不一样所以需要重新处理下这部分逻辑

    if (inlineArgs) {
      argsArr = inlineArgs.reduce(function (result, arg, index) {
        if (arg === "$event") {
          var newEvent = utils.getNewEvent(e);
          result.push(newEvent);
        } else {
          result.push(arg);
        }

        return result;
      }, []);
    }

    if (originFuncName && this[originFuncName] && _.isType(this[originFuncName], 'Function')) {
      this[originFuncName].apply(this, _toConsumableArray(argsArr));
    } else {
      console.log('can not find method ' + originFuncName);
    }
  }), _defineProperty(_methods, _.modelEventProxyName, function (e) {
    var dataset = e.currentTarget && e.currentTarget.dataset;
    var modelKey = dataset && dataset.modelkey;

    if (modelKey) {
      this[modelKey] = e.detail.value;
    }
  }), _defineProperty(_methods, _.eventProxyName, function (e) {
    var dataset = e.currentTarget.dataset;
    var eventKey = e.type.toLowerCase();
    var originFuncName = dataset && dataset['event' + eventKey] && dataset['event' + eventKey][0];

    if (originFuncName && this[originFuncName] && _.isType(this[originFuncName], 'Function')) {
      var newEvent = utils.getNewEvent(e);
      this[originFuncName](newEvent);
    } else {
      console.log('can not find method ' + originFuncName);
    }
  }), _defineProperty(_methods, _.mergeStyleName, function () {
    return _.mergeStyle.apply(_, arguments);
  }), _defineProperty(_methods, _.animationProxy, function () {
    var animationValue = arguments.length <= 0 ? undefined : arguments[0]; // animationValue:{cbs:{0:cb0,1:cb1,length:2},index}

    var animation = this[animationValue]; // 引用值

    if (!animation) {
      return;
    }

    var cbs = animation.cbs,
        index = animation.index; // 配合 解决百度端动画bug

    if (cbs === undefined || index === undefined) {
      return;
    }

    var cb = cbs[index];

    if (cb && typeof cb === 'function') {
      cb();
    }

    delete animation.index;
    animation.index = index + 1;
  }), _defineProperty(_methods, _.eventEmitName, function (eventKey, detail) {
    this.triggerEvent(eventKey, detail);

    if (this.$__checkCmlEmit__) {
      this.$__checkCmlEmit__(eventKey, detail);
    }
  }), _methods)
};
})
cmldefine('30', function(require, exports, module) {
  var _ = module.exports = {};

var _require = require("31"),
    px2cpx = _require.px2cpx;

_.getStyleKeyValue = function (declaration) {
  var colonIndex = declaration.indexOf(':');
  var key = declaration.slice(0, colonIndex);
  var value = declaration.slice(colonIndex + 1);
  return {
    key: key,
    value: value
  };
};

_.handleCompEventType = function (eventType) {
  var aliEventMap = {
    touchstart: 'touchStart',
    touchend: 'touchEnd',
    touchmove: 'touchMove'
  };

  if (Object.keys(aliEventMap).includes(eventType)) {
    return aliEventMap[eventType];
  } else {
    return eventType;
  }
};

_.getNewEvent = function (e) {
  var newEvent = {};
  ['type', 'timeStamp', 'target', 'currentTarget', 'detail', 'touches', 'changedTouches'].forEach(function (key) {
    if (e[key]) {
      if (~['target', 'currentTarget'].indexOf(key)) {
        var newTarget = {};
        newTarget = {
          id: e[key].id,
          dataset: e[key].dataset
        };
        newEvent[key] = newTarget;
      } else if (~['touches', 'changedTouches'].indexOf(key)) {
        if (key == 'touches') {
          var touches = e[key];
          newEvent.touches = [];

          for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            var ret = {};
            ret.identifier = touch.identifier;
            ret.pageX = px2cpx(parseInt(touch.pageX, 10));
            ret.pageY = px2cpx(parseInt(touch.pageY, 10));
            ret.clientX = px2cpx(parseInt(touch.clientX, 10));
            ret.clientY = px2cpx(parseInt(touch.clientY, 10));
            newEvent.touches.push(ret);
          }
        }

        if (key == 'changedTouches') {
          var changedTouches = e[key];
          newEvent.changedTouches = [];

          for (var _i = 0; _i < changedTouches.length; _i++) {
            var _touch = changedTouches[_i];
            var _ret = {};
            _ret.identifier = _touch.identifier;
            _ret.pageX = px2cpx(parseInt(_touch.pageX, 10));
            _ret.pageY = px2cpx(parseInt(_touch.pageY, 10));
            _ret.clientX = px2cpx(parseInt(_touch.clientX, 10));
            _ret.clientY = px2cpx(parseInt(_touch.clientY, 10));
            newEvent.changedTouches.push(_ret);
          }
        }
      } else {
        newEvent[key] = e[key];
      }
    }
  });
  newEvent._originEvent = e;
  return newEvent;
};
})
cmldefine('31', function(require, exports, module) {
  var _ = module.exports = {};

var viewportWidth = void 0;

_.px2cpx = function (px, platform) {
  function getViewportSize() {
    var _tt$getSystemInfoSync = tt.getSystemInfoSync(),
        windowWidth = _tt$getSystemInfoSync.windowWidth;

    return windowWidth;
  }

  viewportWidth = viewportWidth || getViewportSize();
  var cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
};
})
cmldefine('7', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _mobx = require("3");

var _toJS = require("32");

var _toJS2 = _interopRequireDefault(_toJS);

var _util = require("2");

var _type = require("0");

var _lifecycle = require("1");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _KEY = require("12");

var _KEY2 = _interopRequireDefault(_KEY);

var _diff = require("34");

var _diff2 = _interopRequireDefault(_diff);

var _warn = require("11");

var _EventBus = require("35");

var _EventBus2 = _interopRequireDefault(_EventBus);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var MiniRuntimeCore = function () {
  function MiniRuntimeCore(config) {
    _classCallCheck(this, MiniRuntimeCore);

    this.platform = config.platform || '';
    this.options = config.options;
    this.polyHooks = config.polyHooks;
    this.propsName = _KEY2.default.get(this.platform + '.props');
    this.instance = _KEY2.default.get(this.platform + '.instance');
  }

  _createClass(MiniRuntimeCore, [{
    key: 'setOptions',
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: 'setContext',
    value: function setContext(context) {
      this.context = context;
      return this;
    }
  }, {
    key: 'init',
    value: function init() {
      if ("dev" !== "build") {
        (0, _warn.invariant)(!!this.context, "【chameleon-runtime】runtime context should not undefined");
      }

      var context = this.context;
      this.extendContext(); // 属性

      this.initData(); // 方法

      this.initInterface(); // 数据劫持

      this.proxyHandler(); // watch 属性mobx转换

      initWatch(context, context.__cml_originOptions__.watch);
      return this;
    }
  }, {
    key: 'extendContext',
    value: function extendContext() {
      this.context['$cmlEventBus'] = _EventBus2.default;

      this.context['$set'] = function (target, propertyName, value) {// target[propertyName] = value
      };
    }
  }, {
    key: 'initData',
    value: function initData() {
      var context = this.context;
      context.__cml_originOptions__ = this.options; // 清理函数列表

      context.__cml_disposerList__ = []; // update后，回调函数收集器

      context.__cml_cbCollection__ = [];
      context['$cmlPolyHooks'] = this.polyHooks; //  effect computed

      context.__cml_computed__ = transformComputed(context);

      if (this.platform === 'alipay') {
        context.__cml_data__ = (0, _util.extend)({}, context.data, context.props, context.__cml_computed__);
      } else {
        context.__cml_data__ = (0, _util.extend)({}, context.data, context.__cml_computed__);
      }
    }
  }, {
    key: 'initInterface',
    value: function initInterface() {
      var context = this.context; // 构造 watch 能力

      context.$watch = watchFnFactory(context); // 构造 updated callback 收集能力

      context.$collect = updatedCbFactory(context); // 构造数据更新能力

      context.$setData = setDataFactory(context, this); // 构造强制更新能力

      context.$forceUpdate = forceUpdateFactory(context);
    }
  }, {
    key: 'proxyHandler',
    value: function proxyHandler() {
      var context = this.context;
      context.__cml_ob_data__ = (0, _mobx.observable)(context.__cml_data__);
      var origComputed = context.__cml_originOptions__.computed;
      var origComputedKeys = origComputed ? (0, _util.enumerableKeys)(origComputed) : [];
      /* 计算属性在mobx里面是不可枚举的，所以篡改下*/

      (0, _util.enumerable)(context.__cml_ob_data__, origComputedKeys);
      (0, _util.proxy)(context, context.__cml_ob_data__);
    }
    /**
     * 启动器
     * @param  {[type]} context [description]
     * @return {[type]}       [description]
     */

  }, {
    key: 'start',
    value: function start(name) {
      if (!this.context) return;
      var context = this.context;
      var self = this; // 渲染更新监听
      // const disposer = autorunThrottle(context.$setData, name)

      /**
       * [computed description]
       * @return {[type]} [description]
       */

      function dataExprFn() {
        var properties = context.__cml_originOptions__[self.propsName];
        var propKeys = (0, _util.enumerableKeys)(properties); // setData 的数据不包括 props

        var obData = (0, _util.deleteProperties)(context.__cml_ob_data__, propKeys);
        return (0, _toJS2.default)(obData);
      }

      var _cached = false;
      var cacheData = void 0;

      function sideEffect(curVal) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if ((0, _type.type)(r.schedule) !== 'Function') {
          return;
        } // 缓存reaction


        context.__cml_reaction__ = r;
        var diffV = void 0;

        if (_cached) {
          diffV = (0, _diff2.default)(curVal, cacheData); // emit 'beforeUpdate' hook ，第一次不触发

          emit('beforeUpdate', context, curVal, cacheData, diffV);
        } else {
          _cached = true;
          diffV = curVal;
        }

        if ((0, _type.type)(context.setData) === 'Function') {
          context.setData(diffV, walkUpdatedCb(context));
        }

        cacheData = _extends({}, curVal);
      }

      var options = {
        fireImmediately: true,
        name: name,
        onError: function onError() {
          warn('RuntimeCore start reaction error!');
        }
      };
      var disposer = (0, _mobx.reaction)(dataExprFn, sideEffect, options);

      context.__cml_disposerList__.push(disposer);
    }
    /**
     * 销毁器
     * @param  {[type]} context [description]
     * @return {[type]}       [description]
     */

  }, {
    key: 'destory',
    value: function destory() {
      if (!this.context) return;
      var context = this.context;
      disposerFactory(context.__cml_disposerList__)();
    }
  }]);

  return MiniRuntimeCore;
}();
/**
 * watch 工厂函数
 * @param  {[type]} context [description]
 * @return {function}       vm.$watch
 */


exports.default = MiniRuntimeCore;

function watchFnFactory(context) {
  return function (expr, handler) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var exprType = typeof expr === 'undefined' ? 'undefined' : _typeof(expr);
    var curVal = void 0;
    var oldVal = void 0;

    if (!/^function|string$/.test(exprType)) {
      console.warn(new Error('watch expression must be a string or function'));
      return;
    }

    if (typeof handler !== 'function') {
      console.warn(new Error('watch callback must be a function'));
      return;
    }
    /**
     * [computed description]
     * @return {[type]} [description]
     */


    function dataExprFn() {
      oldVal = curVal;
      curVal = exprType === 'string' ? (0, _util.getByPath)(context, expr) : expr.call(context);

      if (options.deep) {
        curVal = (0, _toJS2.default)(curVal);
      } else if ((0, _mobx.isObservableArray)(curVal)) {
        // 转成纯数组
        curVal = curVal.slice();
      }

      return curVal;
    }

    function sideEffect(curVal, reaction) {
      handler.call(context, curVal, oldVal);
    } // 返回清理函数


    var disposer = (0, _mobx.reaction)(dataExprFn, sideEffect, {
      fireImmediately: !!options.immediate,
      delay: options.sync ? 0 : 1
    });

    context.__cml_disposerList__.push(disposer);

    return disposerFactory(context.__cml_disposerList__, disposer);
  };
}
/**
 * 清理函数构造工厂
 * @param  {array} disposerList 清理函数列表
 * @param  {function} disposer     清理函数
 * @return {function}              清理函数包装方法
 */


function disposerFactory(disposerList, disposer) {
  return function () {
    if (disposer) {
      var index = disposerList.indexOf(disposer);
      index > -1 && disposerList.splice(index, 1);
      disposer();
    } else {
      var _disposer = void 0;

      while (_disposer = disposerList.shift()) {
        _disposer();
      }
    }
  };
}
/**
 * 更新后回调 工厂函数
 * @param  {[type]} context [description]
 * @return {[type]}       [description]
 */


function updatedCbFactory(context) {
  return function (cb) {
    context.__cml_cbCollection__.push(cb);
  };
}
/**
 * 设置数据工厂函数
 * @param {[type]} context [description]
 */


function setDataFactory(context, self) {
  var _cached = false;
  var cacheData = void 0;
  return function () {
    var reaction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if ((0, _type.type)(reaction.schedule) !== 'Function') {
      return;
    } // 缓存reaction


    context.__cml_reaction__ = reaction;
    var properties = context.__cml_originOptions__[self.propsName];
    var propKeys = (0, _util.enumerableKeys)(properties);
    var obData = (0, _util.deleteProperties)(context.__cml_ob_data__, propKeys); // setData 的数据不包括 props

    var data = (0, _toJS2.default)(obData);
    var diffV = void 0;

    if (_cached) {
      diffV = (0, _diff2.default)(data, cacheData); // emit 'beforeUpdate' hook ，第一次不触发

      emit('beforeUpdate', context, data, cacheData, diffV);
    } else {
      _cached = true;
      diffV = data;
    }

    update(diffV);
    cacheData = _extends({}, data);
  };

  function update(diff) {
    if ((0, _type.type)(context.setData) === 'Function') {
      context.setData(diff, walkUpdatedCb(context));
    }
  }
}

function emit(name, context) {
  var cmlVM = context.__cml_originOptions__;

  if (typeof cmlVM[name] === 'function') {
    for (var _len = arguments.length, data = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      data[_key - 2] = arguments[_key];
    }

    cmlVM[name].apply(context, data);
  }
}
/**
 * 执行更新后回调列表
 * @param  {[type]} context [description]
 * @return {[type]}       [description]
 */


function walkUpdatedCb(context) {
  // emit 'updated' hook
  emit('updated', context);
  var cb = void 0;

  var pendingList = context.__cml_cbCollection__.slice(0);

  context.__cml_cbCollection__.length = 0;

  while (cb = pendingList.shift()) {
    typeof cb === 'function' && cb.apply(context);
  }
}
/**
 * forceUpdate 工厂函数
 * @param  {[type]} context [description]
 * @return {[type]}       [description]
 */


function forceUpdateFactory(context) {
  return function (data, cb) {
    var dataType = (0, _type.type)(data);

    if (dataType === 'Function') {
      cb = data;
      data = null;
    } else if (dataType === 'Object') {
      (0, _util.extend)(context.__cml_ob_data__, data);
    }

    (0, _type.type)(cb) === 'Function' && context.$collect(cb);
    context.__cml_reaction__.dependenciesState = 2;

    context.__cml_reaction__.schedule();
  };
}
/**
 * computed 属性mobx转换
 * @param  {Object} computedExpr 组件实例computed集合
 * @param  {Object} context      上下文
 * @return {Object}              转换后computed
 */


function transformComputed(context) {
  var options = context.__cml_originOptions__;
  var origComputed = options.computed;
  var origComputedKeys = origComputed ? (0, _util.enumerableKeys)(origComputed) : [];
  var newComputed = {};
  origComputedKeys.forEach(function (key) {
    newComputed[key] = (0, _mobx.computed)(origComputed[key], {
      context: context
    });
  });
  return newComputed;
}
/**
 * watch 属性转换
 * @param  {Object} context 上下文
 * @return {[type]}       [description]
 */


function initWatch(vm, watch) {
  if ((0, _type.type)(watch) !== 'Object') {
    return;
  }

  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      // mobx的reaction执行是倒序的，顾为保证watch正常次序，需倒序注册
      // 这里只解决了watch = {'a':[cb1,cb2]} 的倒序问题，对于$watch方式调用还是倒序
      // 需要改成mobx.observe的方案
      for (var i = handler.length - 1; i >= 0; i--) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if ((0, _type.isPlainObject)(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}
})
cmldefine('32', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.default = toJS;

var _mobx = require("3");

var _type = require("0");

var _style = require("33");

function toJS(source) {
  var detectCycles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var __alreadySeen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var needPxTransfer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  function cache(value) {
    if (detectCycles) {
      __alreadySeen.push([source, value]);
    }

    return value;
  }

  if (detectCycles && __alreadySeen === null) {
    __alreadySeen = [];
  }

  if (detectCycles && source !== null && (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === "object") {
    for (var _i = 0, _l = __alreadySeen.length; _i < _l; _i++) {
      if (__alreadySeen[_i][0] === source) {
        return __alreadySeen[_i][1];
      }
    }
  }

  if ((0, _mobx.isObservable)(source)) {
    if ((0, _mobx.isObservableArray)(source)) {
      var res = cache([]);
      var toAdd = source.map(function (value) {
        return toJS(value, detectCycles, __alreadySeen);
      });
      res.length = toAdd.length;

      for (var i = 0, l = toAdd.length; i < l; i++) {
        res[i] = toAdd[i];
      }

      return res;
    }

    if ((0, _mobx.isObservableObject)(source)) {
      var res = cache({});

      for (var key in source) {
        res[key] = toJS(source[key], detectCycles, __alreadySeen);
      }

      return res;
    }

    if ((0, _mobx.isObservableMap)(source)) {
      var res_1 = cache({});
      source.forEach(function (value, key) {
        return res_1[key] = toJS(value, detectCycles, __alreadySeen);
      });
      return res_1;
    }

    if ((0, _mobx.isBoxedObservable)(source)) return toJS(source.get(), detectCycles, __alreadySeen);
  } else {
    if ((0, _type.type)(source) === 'Array') {
      var _res = cache([]);

      var _toAdd = source.map(function (value) {
        return toJS(value, detectCycles, __alreadySeen);
      });

      _res.length = _toAdd.length;

      for (var _i2 = 0, _l2 = _toAdd.length; _i2 < _l2; _i2++) {
        _res[_i2] = _toAdd[_i2];
      }

      return _res;
    } else if ((0, _type.type)(source) === 'Object') {
      var _res2 = cache({});

      for (var _key in source) {
        _res2[_key] = toJS(source[_key], detectCycles, __alreadySeen);
      }

      return _res2;
    } else if ((0, _type.type)(source) === 'String') {
      // cpx to rpx
      return needPxTransfer ? (0, _style.pxTransform)(source) : source;
    } else {
      return source;
    }
  }
}
})
cmldefine('33', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.styleHandle = styleHandle;
exports.pxTransform = pxTransform;

var _type = require("0");

function styleHandle(source) {
  var detectCycles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var __alreadySeen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  function cache(value) {
    if (detectCycles) {
      __alreadySeen.push([source, value]);
    }

    return value;
  }

  if (detectCycles && __alreadySeen === null) {
    __alreadySeen = [];
  }

  if (detectCycles && source !== null && (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === "object") {
    for (var i = 0, l = __alreadySeen.length; i < l; i++) {
      if (__alreadySeen[i][0] === source) {
        return __alreadySeen[i][1];
      }
    }
  }

  if ((0, _type.type)(source) === 'Array') {
    var res = cache([]);
    var toAdd = source.map(function (value) {
      return styleHandle(value, detectCycles, __alreadySeen);
    });
    res.length = toAdd.length;

    for (var _i = 0, _l = toAdd.length; _i < _l; _i++) {
      res[_i] = toAdd[_i];
    }

    return res;
  } else if ((0, _type.type)(source) === 'Object') {
    var _res = cache({});

    for (var key in source) {
      _res[key] = styleHandle(source[key], detectCycles, __alreadySeen);
    }

    return _res;
  } else if ((0, _type.type)(source) === 'String') {
    return pxTransform(source);
  } else {
    return source;
  }
}

function pxTransform(s) {
  if (!~s.indexOf('cpx')) {
    return s;
  }

  return s.replace(/(([\s:(]|^)-?)(\d*\.?\d+)cpx/ig, function (m) {
    return m.replace('cpx', 'rpx');
  });
}
})
cmldefine('34', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diff;

var _type = require("0");

var _mobx = require("3");

function diff(current, old) {
  var out = {};
  prefill(current, old);
  iDiff(current, old, '', out);

  if (Object.keys(out).length === 1 && out[''] !== undefined) {
    out = out[''];
  } // console.log('diff------:', out)


  return out;
}

function prefill(current, old) {
  if (_mobx.extras.deepEqual(current, old)) return;

  if ((0, _type.type)(current) === 'Object' && (0, _type.type)(old) === 'Object') {
    var curLength = Object.keys(current).length;
    var oldLength = Object.keys(old).length;

    if (curLength >= oldLength) {
      for (var key in old) {
        var curVal = current[key];

        if (curVal === undefined) {
          current[key] = '';
        } else {
          prefill(curVal, old[key]);
        }
      }
    }
  } else if ((0, _type.type)(current) === 'Array' && (0, _type.type)(old) === 'Array') {
    if (current.length >= old.length) {
      old.forEach(function (item, index) {
        prefill(current[index], item);
      });
    }
  }
}

function iDiff(current, old, path, result) {
  if (_mobx.extras.deepEqual(current, old)) return;

  if ((0, _type.type)(current) === 'Object' && (0, _type.type)(old) === 'Object') {
    var curLength = Object.keys(current).length;
    var oldLength = Object.keys(old).length;

    if (curLength >= oldLength) {
      for (var key in current) {
        var curVal = current[key];
        var oldVal = old[key];
        iDiff(curVal, oldVal, getPath(path, key), result);
      }
    } else {
      update(current, path, result);
    }
  } else if ((0, _type.type)(current) === 'Array' && (0, _type.type)(old) === 'Array' && current.length >= old.length) {
    current.forEach(function (item, index) {
      iDiff(item, old[index], getPath(path, index, 'array'), result);
    });
  } else {
    update(current, path, result);
  }
}

function update(item, path, collection) {
  if (item !== undefined) {
    collection[path] = item;
  }
}

function getPath(pathStr, key, type) {
  if (type === 'array') {
    return pathStr + '[' + key + ']';
  }

  return pathStr ? pathStr + '.' + key : key;
}

function isNaN(value) {
  var n = Number(value);
  return n !== n;
}

function isNum(value) {
  return !isNaN(Number(value));
}
})
cmldefine('35', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Event = require("36");

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var EventBus = new _Event2.default();
exports.default = EventBus;
})
cmldefine('36', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 *  事件管理中心，用于监听，派发事件
 */


function call(callback, args) {
  var fn = callback[0];
  var context = callback[1];
  args = callback[2].concat(args);

  try {
    return fn.apply(context, args);
  } catch (e) {
    setTimeout(function () {
      throw e;
    }, 0);
  }
}

function arrayClone(arr, len) {
  var copy = new Array(len);

  while (len--) {
    copy[len] = arr[len];
  }

  return copy;
}

function _emit(type) {
  var listenerList = this._listenerMap[type];

  if (!listenerList) {
    return true;
  }

  var len = listenerList.cbs.length;
  var cbs = arrayClone(listenerList.cbs, len);
  var ret = true;

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  for (var index = 0; index < len; index++) {
    if (!cbs[index]) {
      continue;
    }

    ret = call(cbs[index], args) !== false && ret;
  }

  return !!ret;
}

var Event = function () {
  function Event() {
    _classCallCheck(this, Event);

    this._listenerMap = {};
  }

  _createClass(Event, [{
    key: "on",
    value: function on(type, fn, context) {
      var listenerList = this._listenerMap[type];

      if (!listenerList) {
        this._listenerMap[type] = listenerList = {
          args: null,
          cbs: []
        };
      }

      for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      var callback = [fn, context, rest];
      var args = listenerList.args;

      if (args) {
        call(callback, args);
      } else {
        listenerList.cbs.push(callback);
      }
    }
  }, {
    key: "once",
    value: function once(type, fn, context) {
      for (var _len3 = arguments.length, rest = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        rest[_key3 - 3] = arguments[_key3];
      }

      var fired = false;

      function magic() {
        this.un(type, magic);

        if (!fired) {
          fired = true;

          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          fn.apply(context, args.concat(rest));
        }
      }

      this.on(type, magic, this);
    }
  }, {
    key: "un",
    value: function un(type, fn) {
      var listenerList = this._listenerMap[type];

      if (!listenerList) {
        return true;
      }

      if (arguments.length === 1) {
        listenerList.cbs = [];
      } else {
        var cbs = listenerList.cbs;
        var count = cbs.length;

        while (count--) {
          if (cbs[count] && cbs[count][0] === fn) {
            cbs.splice(count, 1);
          }
        }
      }
    }
  }, {
    key: "emit",
    value: function emit(type, args) {
      return _emit.apply(this, arguments);
    }
  }, {
    key: "done",
    value: function done(type) {
      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      var listenerList = this._listenerMap[type];

      if (!listenerList) {
        this._listenerMap[type] = listenerList = {
          args: args,
          cbs: []
        };
      }

      var cbs = listenerList.cbs;
      var count = cbs.length;

      _emit.apply(this, arguments);

      listenerList.args = args;
      listenerList.cbs = cbs.slice(count);
    }
  }, {
    key: "undo",
    value: function undo(type) {
      var listenerList = this._listenerMap[type];

      if (!listenerList) {
        return false;
      }

      listenerList.args = null;
    }
  }]);

  return Event;
}();

exports.default = Event;
})
cmldefine('8', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _proto = require("37");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var BaseCtor = function () {
  function BaseCtor(options) {
    _classCallCheck(this, BaseCtor); // 拷贝原型链上属性


    (0, _proto.copyProtoProperty)(options);
    this.options = _extends({}, options);
    this.originalOptions = options;
  }

  _createClass(BaseCtor, [{
    key: 'initVmAdapter',
    value: function initVmAdapter(VmAdapter, config) {
      var vmAdapter = new VmAdapter(_extends({
        options: this.options
      }, config));
      this.options = vmAdapter.getOptions();
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);

  return BaseCtor;
}();

exports.default = BaseCtor;
})
cmldefine('37', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyProtoProperty = copyProtoProperty;
/**
 * 原型上的方法放到对象上
 * @param  {Object} obj   待添加属性对象
 * @param  {Object} proto 差异方法
 * @return {Object}       修改后值
 */

function copyProtoProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var EXPORT_OBJ = obj;
  var EXPORT_PROTO = EXPORT_OBJ.__proto__;

  if (EXPORT_PROTO.constructor !== Object) {
    Object.getOwnPropertyNames(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        //原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
}
})
cmldefine('38', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CmlPage = undefined;

var _BaseCtor2 = require("8");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = require("1");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _VmAdapter = require("6");

var _VmAdapter2 = _interopRequireDefault(_VmAdapter);

var _MiniRuntimeCore = require("7");

var _MiniRuntimeCore2 = _interopRequireDefault(_MiniRuntimeCore);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CmlPage = exports.CmlPage = function (_BaseCtor) {
  _inherits(CmlPage, _BaseCtor);

  function CmlPage(options) {
    _classCallCheck(this, CmlPage);

    var _this = _possibleConstructorReturn(this, (CmlPage.__proto__ || Object.getPrototypeOf(CmlPage)).call(this, options));

    _this.cmlType = 'tt';
    var runtimeCore = new _MiniRuntimeCore2.default({
      polyHooks: _lifecycle2.default.get('tt.page.polyHooks'),
      platform: _this.cmlType,
      options: _this.options
    });

    _this.initVmAdapter(_VmAdapter2.default, {
      options: _this.options,
      type: 'page',
      runtimeMixins: {
        onLoad: function onLoad() {
          // 初始化
          runtimeCore.setContext(this).init().start('page-view-render');
        },
        onUnload: function onUnload() {
          // stop
          runtimeCore.setContext(this).destory();
        },
        onPullDownRefresh: function onPullDownRefresh() {
          var path = this.route;
          this.$cmlEventBus.emit(path + '_onPullDownRefresh', {
            path: path
          });
        },
        onReachBottom: function onReachBottom() {
          var path = this.route;
          this.$cmlEventBus.emit(path + '_onReachBottom', {
            path: path
          });
        }
      },
      needResolveAttrs: ['methods'],
      hooks: _lifecycle2.default.get('tt.page.hooks'),
      hooksMap: _lifecycle2.default.get('tt.page.hooksMap'),
      polyHooks: _lifecycle2.default.get('tt.page.polyHooks'),
      usedHooks: _lifecycle2.default.get('tt.page.usedHooks')
    });

    Page(_this.options);
    return _this;
  }

  return CmlPage;
}(_BaseCtor3.default);
})
cmldefine('39', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CmlComponent = undefined;

var _BaseCtor2 = require("8");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = require("1");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _VmAdapter = require("6");

var _VmAdapter2 = _interopRequireDefault(_VmAdapter);

var _MiniRuntimeCore = require("7");

var _MiniRuntimeCore2 = _interopRequireDefault(_MiniRuntimeCore);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CmlComponent = exports.CmlComponent = function (_BaseCtor) {
  _inherits(CmlComponent, _BaseCtor);

  function CmlComponent(options) {
    _classCallCheck(this, CmlComponent);

    var _this = _possibleConstructorReturn(this, (CmlComponent.__proto__ || Object.getPrototypeOf(CmlComponent)).call(this, options));

    _this.cmlType = 'tt';
    var runtimeCore = new _MiniRuntimeCore2.default({
      polyHooks: _lifecycle2.default.get('tt.component.polyHooks'),
      platform: _this.cmlType,
      options: _this.options
    });

    _this.initVmAdapter(_VmAdapter2.default, {
      type: 'component',
      runtimeMixins: {
        created: function created() {
          // 初始化
          runtimeCore.setContext(this).init(); // .addPageHooks()
        },
        attached: function attached() {
          runtimeCore.setContext(this).start('component-view-render');
        },
        ready: function ready() {// runtimeCore
          //   .setContext(this)
          //   .initRefs()
        },
        detached: function detached() {
          // stop
          runtimeCore.setContext(this).destory();
        }
      },
      hooks: _lifecycle2.default.get('tt.component.hooks'),
      hooksMap: _lifecycle2.default.get('tt.component.hooksMap'),
      polyHooks: _lifecycle2.default.get('tt.component.polyHooks'),
      usedHooks: _lifecycle2.default.get('tt.component.usedHooks'),
      needPropsHandler: true,
      needTransformProperties: true
    });

    _this.options['options'] = {
      multipleSlots: true // 在组件定义时的选项中启用多slot支持

    };
    Component(_this.options);
    return _this;
  }

  return CmlComponent;
}(_BaseCtor3.default);
})
cmldefine('9', function(require, exports, module) {
  /**
* 对象包裹器
*运行时的错误信息，根据端传入不同的方法，
* @param  {Object} obj 需要处理的对象
* @return {Object}     对象
*/

/* istanbul ignore next */
module.exports = function (obj, __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__) {
  var className = obj.constructor.name;
  /* eslint-disable no-undef */

  var defines = __CHECK__DEFINES__;
  var enableTypes = __enableTypes__.split(',') || []; // ['Object','Array','Nullable']

  /* eslint-disable no-undef */

  var types = defines.types;
  var interfaceNames = defines.classes[className];
  var methods = {};
  interfaceNames && interfaceNames.forEach(function (interfaceName) {
    var keys = Object.keys(defines.interfaces);
    keys.forEach(function (key) {
      Object.assign(methods, defines.interfaces[key]);
    });
  });
  /**
  * 获取类型
  *
  * @param  {*}      value 值
  * @return {string}       类型
  */

  var getType = function getType(value) {
    if (value instanceof Promise) {
      return "Promise";
    }

    var type = Object.prototype.toString.call(value);
    return type.replace(/\[object\s(.*)\]/g, '$1').replace(/( |^)[a-z]/g, function (L) {
      return L.toUpperCase();
    });
  };
  /**
  * 校验类型  两个loader共用代码
  *
  * @param  {*}      value 实际传入的值
  * @param  {string} type  静态分析时候得到的值得类型
  * @param  {array[string]} errList 校验错误信息  类型
  * @return {bool}         校验结果
  */

  /* eslint complexity:[2,39] */


  var checkType = function checkType(value, originType) {
    var errList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var isNullableReg = /_cml_nullable_lmc_/g;
    var type = originType.replace('_cml_nullable_lmc_', '');
    type === "Void" && (type = "Undefined");
    var currentType = getType(value);
    var canUseNullable = enableTypes.includes("Nullable");
    var canUseObject = enableTypes.includes("Object");

    if (currentType == 'Null') {
      if (type == "Null") {
        // 如果定义的参数的值就是 Null，那么校验通过
        errList = [];
      } else {
        // 那么判断是否是可选参数的情况
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E');
      }

      return errList;
    }

    if (currentType == 'Undefined') {
      // 如果运行时传入的真实值是undefined,那么可能改值在接口处就是被定义为 Undefined类型或者是 ?string 这种可选参数 nullable的情况；
      if (type == "Undefined") {
        errList = [];
      } else {
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E\u6216\u8005\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'String') {
      if (type == 'String') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'Boolean') {
      if (type == 'Boolean') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'Number') {
      if (type == 'Number') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'Object') {
      if (type == 'Object') {
        !canUseObject ? errList.push('\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B' + type + '\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Object \u7C7B\u578B\u53C2\u6570\uFF1B') : errList = [];
      } else if (type == 'CMLObject') {
        errList = [];
      } else {
        // 这种情况的对象就是自定义的对象；
        if (types[type]) {
          var _keys = Object.keys(types[type]); // todo 这里是同样的问题，可能多传递


          _keys.forEach(function (key) {
            var subError = checkType(value[key], types[type][key], []);

            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          });

          if (Object.keys(value).length > _keys.length) {
            errList.push('type [' + type + '] \u53C2\u6570\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26');
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }

      return errList;
    }

    if (currentType == 'Array') {
      if (type == 'Array') {
        !canUseObject ? errList.push('\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B' + type + '\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Array \u7C7B\u578B\u53C2\u6570\uFF1B') : errList = [];
      } else {
        if (types[type]) {
          // 数组元素的类型
          var itemType = types[type][0];

          for (var i = 0; i < value.length; i++) {
            var subError = checkType(value[i], itemType, []);

            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }

      return errList;
    }

    if (currentType == 'Function') {
      // if (type == 'Function') {
      //   errList = [];
      // } else {
      //   errList.push(`定义了${type}类型的参数，传入的却是${currentType},请检查所传参数是否和接口定义的一致`)
      // }
      if (types[type]) {
        if (!types[type].input && !types[type].output) {
          errList.push('\u627E\u4E0D\u5230' + types[type] + ' \u51FD\u6570\u5B9A\u4E49\u7684\u8F93\u5165\u8F93\u51FA');
        }
      } else {
        errList.push('找不到定义的type [' + type + ']!');
      }

      return errList;
    }

    if (currentType == 'Promise') {
      if (type == 'Promise') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'Date') {
      if (type == 'Date') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'RegExp') {
      if (type == 'RegExp') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    return errList;
  };
  /**
  * 校验参数类型
  *
  * @param  {string} methodName 方法名称
  * @param  {Array}  argNames   参数名称列表
  * @param  {Array}  argValues  参数值列表
  * @return {bool}              校验结果
  */


  var checkArgsType = function checkArgsType(methodName, argValues) {
    var argList = void 0;

    if (getType(methodName) == 'Array') {
      // 回调函数的校验    methodName[0] 方法的名字 methodName[1]该回调函数在方法的参数索引
      argList = types[methods[methodName[0]].input[methodName[1]]].input; // 拿到这个回调函数的参数定义
    } else {
      argList = methods[methodName].input;
    } // todo 函数可能多传参数


    argList.forEach(function (argType, index) {
      var errList = checkType(argValues[index], argType, []);

      if (errList && errList.length > 0) {
        __CML_ERROR__('\n       \u6821\u9A8C\u4F4D\u7F6E: \u65B9\u6CD5' + methodName + '\u7B2C' + (index + 1) + '\u4E2A\u53C2\u6570\n       \u9519\u8BEF\u4FE1\u606F: ' + errList.join('\n'));
      }
    });

    if (argValues.length > argList.length) {
      __CML_ERROR__('[' + methodName + ']\u65B9\u6CD5\u53C2\u6570\u4F20\u9012\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26');
    }
  };
  /**
  * 校验返回值类型
  *
  * @param  {string} methodName 方法名称
  * @param  {*}      returnData 返回值
  * @return {bool}              校验结果
  */


  var checkReturnType = function checkReturnType(methodName, returnData) {
    var output = void 0;

    if (getType(methodName) == 'Array') {
      output = types[methods[methodName[0]].input[methodName[1]]].output;
    } else {
      output = methods[methodName].output;
    } // todo output 为什么可以是数组
    // if (output instanceof Array) {
    //   output.forEach(type => {
    //     //todo 而且是要有一个校验不符合就check失败？ 应该是有一个校验通过就可以吧
    //     checkType(returnData, type,[])
    //   });
    // }


    var errList = checkType(returnData, output, []);

    if (errList && errList.length > 0) {
      __CML_ERROR__('\n     \u6821\u9A8C\u4F4D\u7F6E: \u65B9\u6CD5' + methodName + '\u8FD4\u56DE\u503C\n     \u9519\u8BEF\u4FE1\u606F: ' + errList.join('\n'));
    }
  };
  /**
  * 创建warpper
  *
  * @param  {string}   funcName   方法名称
  * @param  {Function} originFunc 原有方法
  * @return {Function}            包裹后的方法
  */


  var createWarpper = function createWarpper(funcName, originFunc) {
    return function () {
      var argValues = Array.prototype.slice.call(arguments).map(function (arg, index) {
        // 对传入的方法要做特殊的处理，这个是传入的callback，对callback函数再做包装
        if (getType(arg) == 'Function') {
          return createWarpper([funcName, index], arg);
        }

        return arg;
      });
      checkArgsType(funcName, argValues);
      var result = originFunc.apply(this, argValues);
      checkReturnType(funcName, result);
      return result;
    };
  }; // 获取所有方法


  var keys = Object.keys(methods); // 处理包装方法

  keys.forEach(function (key) {
    var originFunc = obj[key];

    if (!originFunc) {
      __CML_ERROR__('method [' + key + '] not found!');

      return;
    }

    if (obj.hasOwnProperty(key)) {
      obj[key] = createWarpper(key, originFunc);
    } else {
      Object.getPrototypeOf(obj)[key] = createWarpper(key, originFunc);
    }
  });
  return obj;
};
})
cmldefine('10', function(require, exports, module) {
  module.exports = function copyProtoProperty(obj) {
  var EXPORT_OBJ = obj || {};
  var EXPORT_PROTO = Object.getPrototypeOf(EXPORT_OBJ);

  if (EXPORT_PROTO.constructor !== Object) {
    Object.getOwnPropertyNames(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        // 原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
};
})
cmldefine('40', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _index = require("41");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createPage(options) {
  return _index2.default.createPage(options);
}
})
cmldefine('41', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _tt = require("5");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-flexbox/node_modules/cml-tt-runtime/src/interfaces/createPage/index.interface";

var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "createPgInterface": {
      "createPage": {
        "input": ["CMLObject"],
        "output": "CMLObject"
      }
    }
  },
  "classes": {
    "Method": ["createPageInterface"]
  }
};

var __OBJECT__WRAPPER__ = require("9"); // 定义模块的interface


var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "createPage",
    value: function createPage(options) {
      return new _tt.Page(options);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);

var copyProtoProperty = require("10");

copyProtoProperty(exports.default);
})
cmldefine('42', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = createComponent;

var _index = require("43");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createComponent(options) {
  return _index2.default.createComponent(options);
}
})
cmldefine('43', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _tt = require("5");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-flexbox/node_modules/cml-tt-runtime/src/interfaces/createComponent/index.interface";

var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "createCmptInterface": {
      "createComponent": {
        "input": ["CMLObject"],
        "output": "CMLObject"
      }
    }
  },
  "classes": {
    "Method": ["createComponentInterface"]
  }
};

var __OBJECT__WRAPPER__ = require("9"); // 定义模块的interface


var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "createComponent",
    value: function createComponent(options) {
      return new _tt.Component(options);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);

var copyProtoProperty = require("10");

copyProtoProperty(exports.default);
})
cmldefine('48', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("4");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Row = function Row() {
  _classCallCheck(this, Row);

  this.data = {
    list: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  };
};

exports.default = new Row();
exports.default = _cmlTtRuntime2.default.createPage(exports.default).getOptions();
})
cmldefine('53', function(require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtRuntime = require("4");

var _cmlTtRuntime2 = _interopRequireDefault(_cmlTtRuntime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-flexbox/src/components/polyScroller/polyScroller.interface";

var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {},
  "interfaces": {
    "PolyScrollerInterface": {}
  },
  "classes": {}
};
var __CML__DEFINES__ = {
  "types": {},
  "interfaces": {},
  "classes": {
    "PolyScroller": ["PolyScrollerInterface"]
  }
};

var __CML__WRAPPER__ = require("54");

var PolyScroller = function PolyScroller() {
  _classCallCheck(this, PolyScroller);
};

exports.default = __CML__WRAPPER__(new PolyScroller(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);
exports.default = _cmlTtRuntime2.default.createComponent(exports.default).getOptions();
})
cmldefine('54', function(require, exports, module) {
  /* istanbul ignore next */
module.exports = function (obj, __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__) {
  var className = obj.constructor.name;
  var interfaceDefines = __INTERFAE__DEFINES__;
  var enableTypes = __enableTypes__; // ['Object','Array','Nullable']

  var types = interfaceDefines.types;
  var interfaceKey = Object.keys(interfaceDefines.interfaces)[0]; // interface Name

  var interfaceObj = interfaceDefines.interfaces[interfaceKey];
  var cmlDefines = __CML__DEFINES__;
  var isImplementInterface = false; // 找到class

  if (cmlDefines.classes[className]) {
    // class 的interface数组中有interface中的定义
    if (~cmlDefines.classes[className].indexOf(interfaceKey)) {
      isImplementInterface = true;
    } else {
      console.error('class ' + className + ' not implements interface ' + interfaceKey);
    }
  }

  var props = [];
  var events = {};
  Object.keys(interfaceObj).forEach(function (key) {
    var item = interfaceObj[key];

    if (is(item, 'Object')) {
      // 是事件  有output和input
      events[key] = item;
    } else {
      // 是属性
      props.push({
        key: key,
        value: item
      });
    }
  }); // created 时做props校验  同时建立watch属性检测props类型
  // 包装this.$cmlEmit 校验自定义事件参数类型

  function isFunc(target) {
    return target && is(target, 'Function');
  }

  function is(source, type) {
    return Object.prototype.toString.call(source) === '[object ' + type + ']';
  }

  var getType = function getType(value) {
    var type = Object.prototype.toString.call(value);
    return type.replace(/\[object\s(.*)\]/g, '$1').replace(/( |^)[a-z]/g, function (L) {
      return L.toUpperCase();
    });
  }; // beforeCreate时 vue中还获取不到mixins的this.$cmlEmit方法


  var oldCreated = obj.created || function () {};

  obj.created = function () {
    checkProps.call(this);
    oldCreated.call(this);
  };

  obj.methods = obj.methods || {};

  obj.methods.$__checkCmlEmit__ = function (eventName, eventDetail) {
    if (events[eventName]) {
      var input = events[eventName].input;
      var detailType = input[0];

      var _errList = checkType(eventDetail, detailType, []);

      if (_errList && _errList.length) {
        __CML_ERROR__('errorinfo: event ' + eventName + ' detail verification fails\n           ' + _errList.join('\n') + '\n         ');
      }
    } else {
      __CML_ERROR__('errorinfo:  event ' + eventName + ' is not defined in interface\n           ' + errList.join('\n') + '\n         ');
    }
  };

  function checkProps() {
    var _this = this;

    props.forEach(function (item) {
      var errList = checkType(_this[item.key], item.value, []);

      if (errList && errList.length) {
        __CML_ERROR__('error: prop [' + item.key + '] verification fails\n         ' + errList.join('\n') + '\n       ');
      }
    });
  }

  obj.watch = obj.watch || {};
  props.forEach(function (item) {
    var oldWatch = obj.watch[item.key];

    obj.watch[item.key] = function (newVal, oldVal) {
      var errList = checkType(newVal, item.value, []);

      if (errList && errList.length) {
        __CML_ERROR__('errorinfo: prop [' + item.key + '] verification fails\n           ' + errList.join('\n') + '\n         ');
      }

      if (isFunc(oldWatch)) {
        oldWatch.call(this, newVal, oldVal);
      }
    };
  });
  /**
   * 校验类型  两个loader共用代码
   *
   * @param  {*}      value 实际传入的值
   * @param  {string} type  静态分析时候得到的值得类型
   * @param  {array[string]} errList 校验错误信息  类型
   * @return {bool}         校验结果
   */

  var checkType = function checkType(value, originType) {
    var errList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var isNullableReg = /_cml_nullable_lmc_/g;
    var type = originType.replace('_cml_nullable_lmc_', '');
    type === "Void" && (type = "Undefined");
    var currentType = getType(value); // Undefined Null Object Array Number String  Function只可能是这几种类型；
    // 但是对于type的值则可能是 Undefined Null Number String NullUndefinedStiring
    // Object Array Function EventDetail(...这种自定义的复杂数据类型) 这几种；
    // 判断nullable类型的参数
    // 如果 currentType === type 那么就会直接返回 [];

    var canUseNullable = enableTypes.includes("Nullable");
    var canUseObject = enableTypes.includes("Object");
    var canUseArray = enableTypes.includes("Array");

    if (currentType == 'Null') {
      // 如果传入的值是 null类型，那么可能的情况是该值在接口处的被定义为Null或者是 ?string 这种可选参数的形式；
      if (type == "Null") {
        // 如果定义的参数的值就是 Null，那么校验通过
        errList = [];
      } else {
        // 实际定义的参数的值不是 Null  ?string这种形式的定义，type = new String('String') ?Callback type = new String('Callback')
        // 那么判断是否是可选参数的情况
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E');
      }

      return errList;
    }

    if (currentType == 'Undefined') {
      // 如果运行时传入的真实值是undefined,那么可能改值在接口处就是被定义为 Undefined类型或者是 ?string 这种可选参数 nullable的情况；
      if (type == "Undefined") {
        errList = [];
      } else {
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E\u6216\u8005\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'String') {
      if (type == 'String') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'Boolean') {
      if (type == 'Boolean') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'Number') {
      if (type == 'Number') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'Object') {
      if (type == 'Object') {
        !canUseObject ? errList.push('\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B' + type + '\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Object \u7C7B\u578B\u53C2\u6570\uFF1B') : errList = [];
      } else if (type == 'CMLObject') {
        errList = [];
      } else {
        // 这种情况的对象就是自定义的对象；
        if (types[type]) {
          var keys = Object.keys(types[type]); // todo 这里是同样的问题，可能多传递

          keys.forEach(function (key) {
            var subError = checkType(value[key], types[type][key], []);

            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          });

          if (Object.keys(value).length > keys.length) {
            errList.push('type [' + type + '] \u53C2\u6570\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26');
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }

      return errList;
    }

    if (currentType == 'Array') {
      if (type == 'Array') {
        !canUseObject ? errList.push('\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B' + type + '\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Array \u7C7B\u578B\u53C2\u6570\uFF1B') : errList = [];
      } else {
        if (types[type]) {
          // 数组元素的类型
          var itemType = types[type][0];

          for (var i = 0; i < value.length; i++) {
            var subError = checkType(value[i], itemType, []);

            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }

      return errList;
    }

    if (currentType == 'Function') {
      if (types[type]) {
        if (!types[type].input && !types[type].output) {
          errList.push('\u627E\u4E0D\u5230' + types[type] + ' \u51FD\u6570\u5B9A\u4E49\u7684\u8F93\u5165\u8F93\u51FA');
        }
      } else {
        errList.push('找不到定义的type [' + type + ']!');
      }
    }

    if (currentType == 'Promise') {
      if (type == 'Promise') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'Date') {
      if (type == 'Date') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    if (currentType == 'RegExp') {
      if (type == 'RegExp') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }

      return errList;
    }

    return errList;
  };

  return obj;
};
})