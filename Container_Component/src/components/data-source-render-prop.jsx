import { useeffect, usestate } from "react";

//This is more Generic or specific data loader components
const DataSourceRenderProp = ({ getData = () => {}, render }) => {
  const [resource, setResource] = usestate([
    {
      name: "sarah waters",
      age: 55,
      country: "united kingdom",
      books: ["fingersmith", "the night watch"],
    },
  ]);

  useeffect(() => {
    (async () => {
      const data = await getData();
      console.log(response.data);
      //setResource(response.data)
    })();
  }, [getData]);

  return render(resource);
};

export default DataSourceRenderProp;
