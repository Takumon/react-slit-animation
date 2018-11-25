"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      position: relative;\n      width: ", "px;\n      height: ", "px;\n      overflow: hidden;\n\n      &:after {\n        top: 0;\n        left: ", "px;\n        position: absolute;\n        content: '';\n        display: block;\n        width: ", "px;\n        height: ", "px;\n        background: ", ";\n        -webkit-clip-path: polygon(", ");\n        clip-path: polygon(", ");\n      }\n\n      &:hover:after {\n        left: ", "px;\n        transition: left ", "s linear;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        position: absolute;\n        width: ", "px;\n        height: ", "px;\n        display: block;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translateX(-50%) translateY(-50%);\n        -ms-transform: translateX(-50%) translateY(-50%);\n        transform: translateX(-50%) translateY(-50%);\n        -webkit-clip-path: polygon(", ");\n        clip-path: polygon(", ");\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SlitAnimation =
/*#__PURE__*/
function (_Component) {
  _inherits(SlitAnimation, _Component);

  function SlitAnimation() {
    _classCallCheck(this, SlitAnimation);

    return _possibleConstructorReturn(this, _getPrototypeOf(SlitAnimation).apply(this, arguments));
  }

  _createClass(SlitAnimation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          images = _this$props.images,
          _this$props$imageWidt = _this$props.imageWidth,
          imageWidth = _this$props$imageWidt === void 0 ? 500 : _this$props$imageWidt,
          _this$props$imageHeig = _this$props.imageHeight,
          imageHeight = _this$props$imageHeig === void 0 ? 500 : _this$props$imageHeig,
          _this$props$coverWidt = _this$props.coverWidth,
          coverWidth = _this$props$coverWidt === void 0 ? imageWidth : _this$props$coverWidt,
          _this$props$coverHeig = _this$props.coverHeight,
          coverHeight = _this$props$coverHeig === void 0 ? imageHeight : _this$props$coverHeig,
          _this$props$coverColo = _this$props.coverColor,
          coverColor = _this$props$coverColo === void 0 ? '#000' : _this$props$coverColo,
          _this$props$coverSlit = _this$props.coverSlitWidth,
          coverSlitWidth = _this$props$coverSlit === void 0 ? 1 : _this$props$coverSlit,
          _this$props$startAt = _this$props.startAt,
          startAt = _this$props$startAt === void 0 ? 0 : _this$props$startAt,
          _this$props$endAt = _this$props.endAt,
          endAt = _this$props$endAt === void 0 ? coverWidth : _this$props$endAt,
          _this$props$duration = _this$props.duration,
          duration = _this$props$duration === void 0 ? 50 : _this$props$duration;

      if (!images || images.length === 0) {
        throw 'You need to set imagesr.';
      }

      var frameCount = images.length;
      var imageDoms = range(frameCount).map(function (frameIndex) {
        var freamePolygonPoints = craeteFramePolygonPoints(coverSlitWidth, imageWidth, imageHeight, frameCount, frameIndex);

        var FrameImage = _styledComponents.default.img(_templateObject(), imageWidth, imageHeight, freamePolygonPoints, freamePolygonPoints);

        return _react.default.createElement(FrameImage, {
          key: frameIndex,
          src: images[frameIndex]
        });
      });
      var coverPolygonPoints = craeteCoverPolygonPoints(coverSlitWidth, coverWidth, coverHeight, frameCount);

      var Container = _styledComponents.default.div(_templateObject2(), coverWidth, coverHeight, startAt, coverWidth, coverHeight, coverColor, coverPolygonPoints, coverPolygonPoints, endAt, duration);

      return _react.default.createElement(Container, null, imageDoms);
    }
  }]);

  return SlitAnimation;
}(_react.Component);

function craeteFramePolygonPoints(coverSlitWidth, coverWidth, coverHeight, frameCount, frameIndex) {
  var unitWidth = coverSlitWidth * frameCount;
  var unitCount = Math.floor(coverWidth / unitWidth);
  return range(unitCount).map(function (i) {
    return range(frameCount, 1).filter(function (i) {
      return i % frameCount === frameIndex % frameCount;
    }).map(function (countInUnit) {
      var offset = i * unitWidth;
      var offsetInUnit = (countInUnit - 1) * coverSlitWidth;
      var xStart = offset + offsetInUnit;
      var xEnd = xStart + coverSlitWidth;
      var yStart = 0;
      var yEnd = coverHeight;
      return "".concat(xStart, "px ").concat(yStart, "px,") + "".concat(xStart, "px ").concat(yEnd, "px,") + "".concat(xEnd, "px ").concat(yEnd, "px,") + "".concat(xEnd, "px ").concat(yStart, "px");
    }).join(",");
  }).join(",");
}

function craeteCoverPolygonPoints(coverSlitWidth, coverWidth, coverHeight, frameCount) {
  var unitWidth = coverSlitWidth * frameCount;
  var unitCount = Math.floor(coverWidth / unitWidth); // if frameCount is 6, like this.
  // |----- |------ |----- |

  return range(unitCount).map(function (i) {
    return range(frameCount, 1).filter(function (countInUnit) {
      return countInUnit === 1;
    }).map(function (countInUnit) {
      var offset = i * unitWidth;
      var offsetInUnit = 0;
      var xStart = offset + offsetInUnit;
      var xEnd = xStart + coverSlitWidth * (frameCount - 1);
      var yStart = 0;
      var yEnd = coverHeight;
      return "".concat(xStart, "px ").concat(yStart, "px,") + "".concat(xStart, "px ").concat(yEnd, "px,") + "".concat(xEnd, "px ").concat(yEnd, "px,") + "".concat(xEnd, "px ").concat(yStart, "px");
    }).join(",");
  }).join(",");
}

function range(size) {
  var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return _toConsumableArray(Array(size).keys()).map(function (i) {
    return i + startAt;
  });
}

var _default = SlitAnimation;
exports.default = _default;