import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Gallery() {
  return (
    <div className='text-center mt-5 py-5'>
        <h2 className=' bg-info p-2 text-white'>ภาพกิจกรรม</h2>
       <MDBRow className=' mx-auto'>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src='/images/activity/at02.jpg'
          className='w-50 shadow-1-strong rounded mb-4 px-1'
          alt=''
        />

        <img
          src='/images/activity/at01.jpg'
          className='w-50 shadow-1-strong rounded mb-4 px-1'
          alt=''
        />
      </MDBCol>
    </MDBRow> 
    </div>
    
  );
}