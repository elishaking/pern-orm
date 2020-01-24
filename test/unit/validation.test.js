const { validateJobInput } = require('../../src/validation/jobs');

describe('validateJobInput() Unit Tests', () => {
  it('validateJobInput() - should validate data as true', () => {
    const data = {
      title: 'React',
      technologies: "React, MongoDB",
      budget: 200000,
      description: 'Build great projects',
      contactEmail: 'mail@mail.com'
    };

    const validationResult = validateJobInput(data);

    expect(validationResult.isValid).toBe(true);
    expect(validationResult.errors).toEqual({});
  });
});
