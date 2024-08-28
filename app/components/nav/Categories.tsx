'use client';

import { categories } from '@/utils/Categories';
import Container from '../Container';
import Category from './Category';
import { usePathname, useSearchParams } from 'next/navigation';

const Categories = () => {
  // get category from the params (url)
  const params = useSearchParams();
  const category = params?.get('category');

  const pathname = usePathname;
  console.log('pathname', pathname);
  //const isMainPage = pathname == '/';

  //if (!isMainPage) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <Category
              key={item.label}
              label={item.label}
              icon={item.icon}
              // if that category == item.label, then remake that category is actived
              selected={
                category == item.label ||
                (category == null && item.label == 'All')
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
