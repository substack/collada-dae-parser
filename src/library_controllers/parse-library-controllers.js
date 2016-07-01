var transpose = require('gl-mat4/transpose')
var mat4Multiply = require('gl-mat4/multiply')

module.exports = ParseLibraryControllers

// TODO: Read  technique_commons instead of hard coding attribute locations
function ParseLibraryControllers (library_controllers) {
  var controllers = library_controllers[0].controller || []
  return controllers.map(function (controller) {
    // Number of vertexes that need weights
    // var numVertices = controller[0].skin[0].vertex_weights[0].$.count

    // # of (joint,weight) pairs to read for each vertex
    // TODO: had to trim this.. should I trim everywhere?
    var jointWeightCounts = controller.skin[0].vertex_weights[0].vcount[0].trim().split(' ').map(Number)

    // An array of all possible weights (I think?)
    var weightsArray = controller.skin[0].source[2].float_array[0]._.split(' ').map(Number)

    // Every (joint,weight). Use jointWeightCounts to know how many to read per vertex
    var parsedVertexJointWeights = []
    var jointsAndWeights = controller.skin[0].vertex_weights[0].v[0].split(' ').map(Number)
    jointWeightCounts.forEach(function (_, index) {
      var numJointWeightsToRead = jointWeightCounts[index]
      parsedVertexJointWeights[index] = {}
      for (var i = 0; i < numJointWeightsToRead; i++) {
        parsedVertexJointWeights[index][jointsAndWeights.shift()] = weightsArray[jointsAndWeights.shift()]
      }
    })

    // All of our model's joints
    var orderedJointNames = controller.skin[0].source[0].Name_array[0]._.split(' ')

    // Bind shape matrix (inverse bind matrix)
    var bindShapeMatrix = controller.skin[0].bind_shape_matrix[0].split(' ').map(Number)

    // Joint bind poses
    // TODO: Should we multiply in the bind shape matrix?
    // ^ yes, but wait until we have a test file for it
    var jointBindPoses = {}
    var bindPoses = controller.skin[0].source[1].float_array[0]._.split(' ').map(Number)
    orderedJointNames.forEach(function (jointName, index) {
      var bindPose = bindPoses.slice(16 * index, 16 * index + 16)
      mat4Multiply(bindPose, bindShapeMatrix, bindPose)
      jointBindPoses[jointName] = bindPose
    })

    transpose(bindShapeMatrix, bindShapeMatrix)

    // TODO: Should we also export the greatest number of joints for a vertex?
    // This might allow the consumer to use a shader that expects fewer joints
    // when skinning. i.e. mat4 vs mat3 or mat2 for weights
    return {
      bindShapeMatrix: bindShapeMatrix,
      jointBindPoses: jointBindPoses,
      jointNames: orderedJointNames,
      vertexJointWeights: parsedVertexJointWeights
    }
  })
}
