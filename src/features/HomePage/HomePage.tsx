import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import uniq from 'lodash/uniq';
// Routes
import { Routes } from '@global/routes/routes';
// Hooks
// import useFetchCategories from '@queries/categories/useFetchCategories';
import useFetchPrompts from '@queries/prompts/useFetchPrompts';
// Types
import { Category } from '@global/types/Category.types';
import { Prompt } from '@global/types/Prompt.types';
// Components
import Grid from '@mui/material/Unstable_Grid2';
import { CategoryCard, CategoryCardContainer } from '@components/CategoryCard';
// import FileDropTarget from '@components/FileDropTarget';
import ReactDropzoneComponent from '@components/ReactDropzoneComponent';

type CategoryAndQty = { [key: string]: number };
const HomePage = () => {
  const [categoriesAndQty, setCategoriesAndQty] = useState<CategoryAndQty>({});
  // const increaseQtyByCategory = (category: string) => {
  //   const newValue = { ...categoriesAndQty, [category]: categoriesAndQty[category] + 1 };
  //   setCategoriesAndQty(newValue);
  // };
  // const decreaseQtyByCategory = (category: string) => {
  //   const newValue = { ...categoriesAndQty, [category]: categoriesAndQty[category] - 1 };
  //   setCategoriesAndQty(newValue);
  // };
  const { data = [], error } = useFetchPrompts();
  console.group('HomePage');
  const categories: string[] = uniq(data.map((prompt: Prompt) => prompt.category.text));
  console.groupEnd();
  useEffect(() => {
    // Set initial values
    // I don't think new categories will be added from here, so the length should never change when this page is mounted
    if (categories.length) {
      setCategoriesAndQty(
        categories.reduce((acc, elem) => {
          acc[elem] = 0;
          return acc;
        }, {} as CategoryAndQty),
      );
    }
  }, [categories.length]);

  useEffect(() => {
    console.log('categoriesAndQty', categoriesAndQty);
  }, [categoriesAndQty]);

  return (
    <Grid container spacing={2} sx={{ marginLeft: 2, marginRight: 2 }}>
      <Grid xs={12}>
        <p>
          <Link to={Routes.CONFIG()}>Go to config page</Link>
        </p>
        {error && <div>Error Occurred</div>}
        {data?.length && data.map((category: Category) => <p key={category.id}>{category.text}</p>)}
        <CategoryCardContainer>
          {categories.map((category, i) => (
            <CategoryCard text={category} key={i} />
          ))}
        </CategoryCardContainer>
        {/* <FileDropTarget /> */}
        <ReactDropzoneComponent />
      </Grid>
    </Grid>
  );
};

export default HomePage;
