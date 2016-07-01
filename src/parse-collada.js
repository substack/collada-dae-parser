var xmlparser = require('xml-parser')
var parseLibraryGeometries = require('./library_geometries/parse-library-geometries.js')
var parseLibraryVisualScenes = require('./library_visual_scenes/parse-visual-scenes.js')
var parseLibraryControllers = require('./library_controllers/parse-library-controllers.js')
var parseSkeletalAnimations = require('./library_animations/parse-skeletal-animations.js')
var parseLocRotScaleAnim = require('./library_animations/parse-loc-rot-scale-anim.js')

module.exports = ParseCollada

// TODO:
// Use input, accessor, and param attributes instead of hard coding lookups
// Clean Up Code / less confusing var names
function ParseCollada (colladaXML, callback) {
  var result = compactXML({}, xmlparser(colladaXML.toString()).root)
  result = { COLLADA: result.COLLADA[0] }

  var parsedObject = {}
  var parsedLibraryGeometries = parseLibraryGeometries(result.COLLADA.library_geometries)

  var visualSceneData = parseLibraryVisualScenes(result.COLLADA.library_visual_scenes)

  parsedObject.vertexJointWeights = []
  parsedObject.jointNames = []
  parsedObject.jointBindPoses = []
  parsedObject.bindShapeMatrices = []

  if (result.COLLADA.library_controllers) {
    var controllerData = parseLibraryControllers(result.COLLADA.library_controllers)
    controllerData.forEach(function (controller) {
      parsedObject.jointNames.push(controller.jointNames)
      parsedObject.jointBindPoses.push(controller.jointBindPoses)
      parsedObject.bindShapeMatrices.push(controller.bindShapeMatrix)
      parsedObject.vertexJointWeights.push(controller.vertexJointWeights)
    })
  }

  // TODO: Also parse interpolation/intangent/outtangent
  parsedObject.keyframes = []
  if (result.COLLADA.library_animations) {
    var kf = parseLocRotScaleAnim(result.COLLADA.library_animations[0].animation)
    parsedObject.jointBindPoses.forEach(function (jointBindPoses) {
      var keyframes = parseSkeletalAnimations(result.COLLADA.library_animations, jointBindPoses, visualSceneData)
      if (keyframes) {
        parsedObject.keyframes.push(keyframes)
      } else if (kf) {
        parsedObject.keyframes.push(kf)
      }
    })
  }

  // Return our parsed collada object
  parsedObject.vertexNormalIndices = parsedLibraryGeometries.vertexNormalIndices
  parsedObject.vertexNormals = parsedLibraryGeometries.vertexNormals
  parsedObject.vertexPositionIndices = parsedLibraryGeometries.vertexPositionIndices
  parsedObject.vertexPositions = parsedLibraryGeometries.vertexPositions
  if (parsedLibraryGeometries.vertexUVs.length > 0) {
    parsedObject.vertexUVIndices = parsedLibraryGeometries.vertexUVIndices
    parsedObject.vertexUVs = parsedLibraryGeometries.vertexUVs
  }
  if (callback) callback(null, parsedObject)
  return parsedObject
}

function compactXML (res, xml) {
  var txt = Object.keys(xml.attributes).length === 0 && xml.children.length === 0
  var r = {}
  if (!res[xml.name]) res[xml.name] = []
  if (txt) {
    r = xml.content || ''
  } else {
    r.$ = xml.attributes
    r._ = xml.content || ''
    xml.children.forEach(function (ch) {
      compactXML(r, ch)
    })
  }
  res[xml.name].push(r)
  return res
}
