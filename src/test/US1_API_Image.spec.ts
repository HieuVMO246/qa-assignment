import ImageStep from "../step/ImageStep";

let imageStep: ImageStep;

describe('Your API Tests', () => {

  const testData = [
    { imagePath: "data\\image\\cat_image.jpg"},
    { imagePath: "data\\image\\image.avif" },
    { imagePath: "data\\image\\image.webp" },
    { imagePath: "data\\image\\images.png" },
  ];

  beforeAll(() => {
    imageStep = new ImageStep()
  });

  it.each(testData)('TC01: Allow an Anonymous user to upload the valid picture files', async ({imagePath}) => {
    const responseUploadImage = await imageStep.uploadAnImage(imagePath)
    imageStep.assertStatus(responseUploadImage, 200)
    imageStep.assertResponseBodyPropertyToBeDefined(responseUploadImage, "image")
    const imageLink = imageStep.getValueProperty(responseUploadImage, "image")

    const responseGetImage = await imageStep.getLinkImage(await imageLink)

    imageStep.assertStatus(responseGetImage, 200)
  });

  it('TC02: Do not allow an Anonymous user to upload  invalid image format', async () => {
    const responseUploadImage = await imageStep.uploadAnImage("data\\image\\image.docx")
    imageStep.assertResponseBodyPropertyToBeDefined(responseUploadImage, "err")
    imageStep.assertResponseBodyProperty(responseUploadImage, "err", "File isn' an image")
    imageStep.assertStatus(responseUploadImage, 400)
  });

  it('TC04: Upload multiple files at the same time', async () => {
    const responseUploadImage = await imageStep.uploadMutipleImage("data\\image\\cat_image.jpg","data\\image\\images.png")
   
    imageStep.assertStatus(responseUploadImage, 400)
  });

});
