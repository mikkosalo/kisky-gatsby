import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title, description }) => {
  return (
    <Helmet title={title + ' - Kirkkonummen Seudun Kiipeilijät Ry'}>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Seo;