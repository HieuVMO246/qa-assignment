import ZipStep from "../step/ZipStep";

let zipStep: ZipStep;

/*
    User Story 2 - In order to save my time from uploading my pictures multiple times via https://assessement.onrender.com/api/zip API service: 
      As an Anonymous user, 
      I want to attach a zip file 
      containing multiple images 
      and I want each of these uploaded images to have a permanent link.
*/

describe('US_02 | Upload zip function', () => {

  beforeAll(() => {
    zipStep = new ZipStep()
  });

  it('TC01: Allow user to upload a zip file containing multiple valid image files', async () => {
    const response = await zipStep.uploadAnZip(ZipStep.getPathDataFile("zipfile","3validzip.zip"));

    zipStep.assertStatus(response, 200)
    zipStep.assertResponseBodyHasProperty(response,"images")

    const imgLinks = await zipStep.getValueProperty(response,"images")
    for (let index = 0; index < imgLinks.length; index++) {
    const responseLink = await zipStep.getLinkInZip(imgLinks[index]);
    zipStep.assertStatus(responseLink, 200);
    }

  });

  it('TC02: Do not allow an Anonymous user to upload an empty zip file', async () => {
    const response = await zipStep.uploadAnZip(ZipStep.getPathDataFile("zipfile","empty.zip"));

    zipStep.assertStatus(response, 400);
    zipStep.assertResponseBodyHasProperty(response,"err");
    zipStep.assertResponseBodyProperty(response,"err","no image found in zip file");

  });

  
  it('TC03: Do not allow an Anonymous user to upload invalid zip file', async () => {
    const response = await zipStep.uploadAnZip(ZipStep.getPathDataFile("zipfile","samplePDF.pdf"));

    zipStep.assertStatus(response, 400);
    zipStep.assertResponseBodyHasProperty(response,"err");
    zipStep.assertResponseBodyProperty(response,"err","File isn' a zip");

  });

});