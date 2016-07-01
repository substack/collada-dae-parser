// A 3d letter f
//
// TODO: Add a gif of every model

module.exports = {
  keyframes: [ {
    '0': [
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, -0, 0, 0, 0, 1, 0, 0, -0, 0, 1]
    ],
    '1.666667': [
      [-0, 0, 1, 0, 0, 1, 0, 0, -1, 0, -0, 0, 0, 0, 0, 1],
      [-0, 0, 1, 0, 0, 1, 0, 0, -1, 0, -0, 0, 0, -0, 0, 1]
    ],
    '3.333333': [
      [-0, 0, 1, 0, 0, 1, 0, 0, -1, 0, -0, 0, 0, 0, 0, 1],
      [-1, -0, -0, 0, -0, 1, 0, 0, 0, 0, -1, 0, -4.154899, -0, 4.154897, 1]
    ],
    '5': [
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, -0, 0, 0, 0, 1, 0, 0, -0, 0, 1]
    ]
  } ],
  vertexJointWeights: [ [
    { 0: 1 }, { 0: 1 }, { 0: 1 }, { 0: 1 }, { 0: 1 }, { 0: 1 }, { 0: 1 },
    { 0: 1 }, { 0: 0.5292893, 1: 0.4707107 }, { 0: 0.5294948, 1: 0.4705052 },
    { 0: 0.0648294, 1: 0.9351706 }, { 0: 0.06309926, 1: 0.9369007 },
    { 0: 0.8372449, 1: 0.1627551 }, { 0: 0.1417782, 1: 0.8582218 },
    { 0: 0.1399329, 1: 0.860067 }, { 0: 0.8372314, 1: 0.1627686 },
    { 0: 0.7961741, 1: 0.203826 }, { 0: 0.8074434, 1: 0.1925566 },
    { 0: 0.9437921, 1: 0.05620783 }, { 0: 0.9443623, 1: 0.05563777 },
    { 0: 0.9466384, 1: 0.05336165 }, { 0: 0.9455698, 1: 0.05443018 },
    { 0: 1 }, { 0: 1 }, { 0: 0.8626581, 1: 0.1373419 },
    { 0: 0.8650335, 1: 0.1349665 }, { 0: 0.8835545, 1: 0.1164454 },
    { 0: 0.8845795, 1: 0.1154205 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }
  ] ],
  vertexNormalIndices: [
    0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 1, 1, 1, 5, 5, 5, 4, 4, 4, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 2, 2, 5, 5, 5, 4, 4, 4, 1, 1, 1, 2, 2, 2, 3, 3, 3, 5, 5, 5, 1, 1, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 1, 1, 1, 5, 5, 5, 4, 4, 4, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 2, 2, 5, 5, 5, 4, 4, 4, 1, 1, 1, 2, 2, 2, 3, 3, 3, 5, 5, 5, 1, 1, 1
  ],
  vertexNormals: [
    -1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 1
  ],
  vertexPositionIndices: [
    3, 2, 0, 7, 6, 2, 5, 4, 6, 1, 0, 4, 2, 6, 4, 12, 9, 10, 10, 9, 8, 13, 30, 31, 15, 8, 9, 14, 11, 8, 17, 14, 15, 19, 15, 12, 16, 13, 14, 18, 12, 13, 22, 18, 16, 21, 27, 25, 23, 19, 18, 21, 17, 19, 5, 21, 23, 1, 23, 22, 7, 20, 21, 3, 22, 20, 26, 24, 25, 17, 25, 24, 20, 26, 27, 16, 24, 26, 30, 28, 29, 14, 31, 29, 11, 29, 28, 10, 28, 30, 1, 3, 0, 3, 7, 2, 7, 5, 6, 5, 1, 4, 0, 2, 4, 13, 12, 10, 11, 10, 8, 14, 13, 31, 12, 15, 9, 15, 14, 8, 19, 17, 15, 18, 19, 12, 17, 16, 14, 16, 18, 13, 20, 22, 16, 17, 21, 25, 22, 23, 18, 23, 21, 19, 1, 5, 23, 3, 1, 22, 5, 7, 21, 7, 3, 20, 27, 26, 25, 16, 17, 24, 21, 20, 27, 20, 16, 26, 31, 30, 29, 11, 14, 29, 10, 11, 28, 13, 10, 30
  ],
  vertexPositions: [
    -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, -1, 5, -1, 1, 5, 1, 1, 5, 1, -1, 5, -1, 1, 3.86276, 1, 1, 3.86276, 1, -1, 3.86276, -1, -1, 3.86276, 1, 1, 2.909447, 1, -1, 2.909447, -1, 1, 2.909447, -1, -1, 2.909447, 1, 1, 2.01007, 1, -1, 2.01007, -1, 1, 2.01007, -1, -1, 2.01007, 3, 1, 2.909447, 3, -1, 2.909447, 3, 1, 2.01007, 3, -1, 2.01007, 3, 1, 5, 3, -1, 5, 3, 1, 3.86276, 3, -1, 3.86276
  ],
  bindShapeMatrices: [ [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ] ],
  jointBindPoses: [
    {
      Bone: [ 0.2406798, 0, 0, 0, 0, 0, 0.2406798, 0, 0, -0.2406798, 0, 0, 0, 0, 0, 1 ],
      Bone_001: [ 0, -0.2406798, 0, 0, 0.2406798, 0, 0, 0, 0, 0, 0.2406798, -1, 0, 0, 0, 1 ]
    }
  ],
  jointNames: [ [ 'Bone', 'Bone_001' ] ]
}

