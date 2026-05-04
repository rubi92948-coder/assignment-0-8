import React from 'react';
import { MoonLoader } from 'react-spinners';

const loading = () => {
     return (
          <div className="flex items-center justify-center min-h-screen">
   <MoonLoader size={80} color="blue" />
</div>
     );
};

export default loading;