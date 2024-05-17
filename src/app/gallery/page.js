import Image from 'next/image';
import React from 'react';
import cyberimage from '../../assets/iStock-501549144-1.jpg'

const GalleryPage = () => {
  return (
    <div>
      <h2 className='text-4xl text-center'>Image optimization</h2>
      <h3 className='text-2xl text-center'>Regular Image Tag </h3>
      <img height={500}
        width={500} src="https://cciwa.com/wp-content/uploads/2023/10/iStock-501549144-1.jpg" alt="cyber boy"
        className='mx-auto p-4' />
         <h3 className='text-2xl text-center'>NextJs Image Tag </h3>
      <Image
        height={500}
        width={500}
        className='mx-auto p-4'
        src="https://cciwa.com/wp-content/uploads/2023/10/iStock-501549144-1.jpg" alt="cyber boy" />
        <h3 className='text-2xl text-center'>Imported image</h3>
      <Image
        height={500}
        width={500}
        className='mx-auto p-4'
        src={cyberimage} alt="cyber boy" />
    </div>
  );
};

export default GalleryPage;