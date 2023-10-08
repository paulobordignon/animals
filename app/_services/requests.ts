import { faker } from "@faker-js/faker";

export function getUserLogo() {
  return faker.image.avatarGitHub();
}

export function getAnimals() {
  const getImage = () => faker.image.urlLoremFlickr({ category: "animals" });
  const getType = () => faker.animal.type();
  const getUrl = () => faker.internet.url();
  const getText = () => faker.lorem.sentences();
  //@ts-ignore
  const getTitle = (type) => faker.animal[type]();

  const data = [...new Array(100)].map((item, index) => {
    const type = getType();
    return {
      type,
      id: index + 1,
      url: getUrl(),
      title: getTitle(type),
      description: getText(),
      image: getImage(),
    };
  });

  return data;
}
