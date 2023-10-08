export default interface IResultCard {
  handleShowDetails: (data: any) => void;
  data: {
    id: string;
    url: string;
    title: string;
    description: string;
    image: string;
  };
}
