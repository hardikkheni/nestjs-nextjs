import React, { useState } from 'react';
import { NextPage } from 'next';

import BlankLayout from '@core/layouts/BlankLayout';
import LayoutWrapper from '@core/layouts/components/layout-wrapper';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  return (
    <LayoutWrapper>
      <BlankLayout>
        <div className="container-fluid">
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            Count: {count}
          </button>
        </div>
      </BlankLayout>
    </LayoutWrapper>
  );
};

export default Home;
