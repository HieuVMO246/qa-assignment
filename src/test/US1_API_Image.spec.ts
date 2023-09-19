import ImageStep from "../step/ImageStep";

let imageStep: ImageStep;

/*
    User Story 1 - In order to store and use my pictures through the https://assessement.onrender.com/api/image API service:
        As an Anonymous user,
        I want to attach a picture to the Service
        and I want to have a permanent link to this picture,
        Otherwise, I want to be rejected and informed if the file is not a picture.
*/

describe('US_01 | Upload image function', () => {
 
  beforeAll(() => {
    imageStep = new ImageStep()
  });

  const testData = [
    { imagePath: ImageStep.getPathDataFile("image","cat_image.jpg")},
    { imagePath: ImageStep.getPathDataFile("image","image.avif")},
    { imagePath: ImageStep.getPathDataFile("image","image.webp") },
    { imagePath: ImageStep.getPathDataFile("image","images.png")},
  ];

  it.each(testData)('TC01: Allow an Anonymous user to upload the valid picture files %s', async ({imagePath}) => {
    const responseUploadImage = await imageStep.uploadAnImage(imagePath)
    imageStep.assertStatus(responseUploadImage, 200)
    imageStep.assertResponseBodyPropertyToBeDefined(responseUploadImage, "image")
    const imageLink = imageStep.getValueProperty(responseUploadImage, "image")

    const responseGetImage = await imageStep.getLinkImage(await imageLink)

    imageStep.assertStatus(responseGetImage, 200)
  });

  it('TC02: Do not allow an Anonymous user to upload  invalid image format', async () => {
    const responseUploadImage = await imageStep.uploadAnImage(ImageStep.getPathDataFile("image","image.docx"));
    imageStep.assertResponseBodyPropertyToBeDefined(responseUploadImage, "err")
    imageStep.assertResponseBodyProperty(responseUploadImage, "err", "File isn' an image")
    imageStep.assertStatus(responseUploadImage, 400)
  });

  it('TC03: Upload multiple files at the same time', async () => {
    const responseUploadImage = await imageStep.uploadMutipleImage(
      ImageStep.getPathDataFile("image","cat_image.jpg"),
      ImageStep.getPathDataFile("image","images.png")
      );
    imageStep.assertStatus(responseUploadImage, 400)
  });

});
