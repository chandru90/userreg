import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Highest qualification required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    city: Yup.string().required('city is required'),
  });
  

const Edu = () => {
    const initialValues = {
        name: '',
        email: '',
      };
    
      const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log(values);
      };
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    <Form className='bg-emarald-600 mt-20  mr-96 bg-opacity-50'>
      <div className=' flex-col ml-12 mt-10 sm:flex-row '>
      <div className=' mb-9 mt-4'>
        
        
        
      </div>
      <div className='mb-9 mt-9 '>
        
        <Field type="text" id="name" placeholder="Highest Qualification" name="name" className="w-full md:w-64 h-12 px-4 border rounded-md sm:w-64 placeholder-blue-500 " />
        <ErrorMessage name="name" component="div" className="text-red-500" />
      </div>
      <div className=' mb-9 mt-4  '>
        
        <Field type="text" id="Mobile number"  placeholder="Year on Passing" name="Mobile number" className="w-full md:w-64 h-12 px-4 border rounded-md sm:w-64 placeholder-blue-500"/>
        <ErrorMessage name="Mobile number" component="div" className="text-red-500" />
      </div>

      <div className=' mb-9 mt-4'>
        
        <Field type="text" id="email" placeholder="Skills" name="Skills" className="w-full md:w-64 h-12 px-4 border rounded-md placeholder-blue-500" />
        <ErrorMessage name="email" component="div" className="text-red-500" />
      </div>
      
    
     

     
      </div>
    </Form>
  </Formik>
  )
}

export default Edu