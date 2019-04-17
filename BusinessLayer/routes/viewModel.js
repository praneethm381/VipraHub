modelObj =
  {
    ModelId:1,
    Overview : {
      DESCRIPTION: 'SqueezeNet begins with a standalone convolution layer (conv1',
      APPLICATION:'ImageNet',
      TASK: 'Classification: ImageNet classification',
      TYPE: 'Supervised learning',
      ARCHITECTURE : 'Convolutional Neural Network (CNN)'
    },
    Publication :{
      TITLE: 'SqueezeNet: AlexNet-level accuracy with 50x fewer parameters and <0.5MB model size',
      AUTHORS: 'Forrest N. Iandola, Song Han, Matthew W. Moskewicz, Khalid Ashraf, William J. Dally, Kurt Keutzer',
      ABSTRACT: 'Recent research on deep neural networks has focused primarily on',
      YEAR: '2016'

    },
    Architecture : {}
  }

getModel() {
  return this.modelObj;
}
