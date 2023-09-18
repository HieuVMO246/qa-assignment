// src/tests/YourApi.test.ts

import ImageStep from "../step/ImageStep";

let imageStep: ImageStep;

describe('Your API Tests', () => {


  beforeAll(() => {
    imageStep = new ImageStep()
  });

  it('TC01: Allow an Anonymous user to upload the valid picture files', async () => {
    const responseUploadImage = await imageStep.uploadAnImage("data\\image\\cat_image.jpg")
    imageStep.assertStatus(responseUploadImage, 200)
    imageStep.assertResponseBodyPropertyToBeDefined(responseUploadImage, "image")
    const imageLink = imageStep.getValueProperty(responseUploadImage, "image")

    const responseGetImage = await imageStep.getLinkImage(await imageLink)

    imageStep.assertStatus(responseGetImage, 200)
  });

});
