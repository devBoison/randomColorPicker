(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        /**
         * Uses the react-transform babel plugin
         * to rewrite modules so that all react components are
         * exported.
         *
         * This allows us to access those components and test them.
         *
         * ex:
         *
         * // component.js
         *
         * var MyComponent = React.createClass({});
         *
         * // component-test.js
         *
         * var components = require('../component.js');
         *
         * console.log(components.__ReactComponents.MyComponent);
         *
         */

        module.exports = function createExport(_ref) {
          var locals = _ref.locals;

          return function (ReactClass, componentId) {
            if (!locals[0].exports) {
              locals[0].exports = {};
            }

            if (!locals[0].exports.__ReactComponents) {
              locals[0].exports.__ReactComponents = [];
            }

            locals[0].exports.__ReactComponents.push(ReactClass);

            return ReactClass;
          };
        };
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        "use strict";

        var _react2 = require("react");

        var _react3 = _interopRequireDefault(_react2);

        var _reactTransformComponentExports = require("/home/ccuser/.babelscripts/react-transform-component-exports");

        var _reactTransformComponentExports2 = _interopRequireDefault(
          _reactTransformComponentExports
        );

        var _createClass = (function () {
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
        })();

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var _components = {
          Random: {
            displayName: "Random",
          },
        };

        var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0,
        _reactTransformComponentExports2.default)({
          filename:
            "/home/ccuser/workspace/react-101-components-interacting-random-color-2/Random.js",
          components: _components,
          locals: [module],
          imports: [_react3.default],
        });

        function _wrapComponent(id) {
          return function (Component) {
            return _homeCcuserBabelscriptsReactTransformComponentExports2(
              Component,
              id
            );
          };
        }

        var Random = _wrapComponent("Random")(
          (function (_Component) {
            _inherits(Random, _Component);

            function Random(props) {
              _classCallCheck(this, Random);

              var _this = _possibleConstructorReturn(
                this,
                (Random.__proto__ || Object.getPrototypeOf(Random)).call(
                  this,
                  props
                )
              );

              _this.state = {
                color: [0, 25, 237],
              };
              _this.handleClick = _this.handleClick.bind(_this);
              return _this;
            }

            _createClass(Random, [
              {
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.applyColor();
                },
              },
              {
                key: "componentDidUpdate",
                value: function componentDidUpdate(prevProps, prevState) {
                  this.applyColor();
                },
                //formats 'rgb' for DOM
              },
              {
                key: "formatColor",
                value: function formatColor(ary) {
                  return "rgb(" + ary.join(", ") + ")";
                },
                //adjusts button color based on this.state.color for background
              },
              {
                key: "isLight",
                value: function isLight() {
                  var rgb = this.state.color;
                  return (
                    rgb.reduce(function (a, b) {
                      return a + b;
                    }) <
                    127 * 3
                  );
                },
                // applies background color to body of document
              },
              {
                key: "applyColor",
                value: function applyColor() {
                  var color = this.formatColor(this.state.color);
                  document.body.style.background = color;
                },
                //chooses random numbers for rgb rendering
              },
              {
                key: "chooseColor",
                value: function chooseColor() {
                  var random = [];
                  for (var i = 0; i < 3; i++) {
                    random.push(Math.floor(Math.random() * 256));
                  }
                  return random;
                },
                // click handler event to choose color when button is clicked
              },
              {
                key: "handleClick",
                value: function handleClick() {
                  this.setState({
                    color: this.chooseColor(),
                  });
                },
              },
              {
                key: "render",
                value: function render() {
                  return React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "h1",
                      { className: this.isLight() ? "white" : "black" },
                      "Your color is ",
                      this.formatColor(this.state.color),
                      "!"
                    ),
                    React.createElement(Button, {
                      onClick: this.handleClick,
                      light: this.isLight(),
                    })
                  );
                },
              },
            ]);

            return Random;
          })(Component)
        );
      },
      {
        "/home/ccuser/.babelscripts/react-transform-component-exports": 1,
        react: undefined,
      },
    ],
  },
  {},
  [2]
);
