import useFetchCategories from '@queries/categories/useFetchCategories';

const ConfigPage = () => {
  // const { isLoading, data, error } = useFetchCategories();
  useFetchCategories();
  return <div>This is the config page!</div>;
};

export default ConfigPage;
