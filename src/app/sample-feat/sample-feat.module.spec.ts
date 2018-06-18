import { SampleFeatModule } from './sample-feat.module';

describe('SampleHomeModule', () => {
  let sampleFeatModule: SampleFeatModule;

  beforeEach(() => {
    sampleFeatModule = new SampleFeatModule();
  });

  it('should create an instance', () => {
    expect(sampleFeatModule).toBeTruthy();
  });
});
