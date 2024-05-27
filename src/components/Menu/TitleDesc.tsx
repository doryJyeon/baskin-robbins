import React from 'react';

interface Props {
  title: string;
  desc: string | undefined;
}

const TitleDesc: React.FC<Props> = ({ title, desc }) => {
  return (
    <>
      <h2>{title}</h2>
      {desc !== undefined && <p dangerouslySetInnerHTML={{ __html: desc }} />}
    </>
  );
}

export default TitleDesc;
