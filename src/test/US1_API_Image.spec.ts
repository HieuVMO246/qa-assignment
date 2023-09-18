// src/tests/YourApi.test.ts

import ImageStep from "../step/ImageStep";

let imageStep: ImageStep;

describe('Your API Tests', () => {
 

  beforeAll(() => {
    imageStep = new ImageStep()
  });

  it('should get a user by ID', async () => {
    const response = await imageStep.uploadAnImage("data\\image\\cat_image.jpg")
    imageStep.assertStatus(response, 200)
    
  });

});
