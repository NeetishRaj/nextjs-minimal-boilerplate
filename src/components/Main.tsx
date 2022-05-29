import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '../utils/App.config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <header>
          Header content here
      </header>

      <div>{props.children}</div>

     <footer>
         Footer content here
     </footer>
    </div>
  </div>
);

export { Main };
