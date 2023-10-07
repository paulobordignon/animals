import { faker } from "@faker-js/faker";

export function getUserLogo() {
  return faker.image.avatar();
}
