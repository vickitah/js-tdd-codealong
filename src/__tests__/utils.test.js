import { currentAgeForBirthYear } from '../utils'; 

describe('currentAgeForBirthYear', () => {
  it('returns the age of a person based on the year of birth', () => {
    const ageOfPerson = currentAgeForBirthYear(1986);
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - 1986;
    expect(ageOfPerson).toBe(expectedAge);
  });

  it('returns the current year for a person born in year 0', () => {
    const ageOfPerson = currentAgeForBirthYear(0);
    const currentYear = new Date().getFullYear();
    expect(ageOfPerson).toBe(currentYear);
  });
});
