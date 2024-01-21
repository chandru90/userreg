import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    city: Yup.string().required('city is required'),
  });
  

const Education = () => {
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
    <Form className='bg-emarald-600  md:ml-48 mt-20  mr-96 bg-opacity-50'>
      <div className='ml-12 mt-10'>
      <div className='ml-96 mb-9 mt-4'>
        
        
        
      </div>
      <div className='mb-9 mt-24 '>
        
        <Field type="text" id="name" placeholder="Pls Enter Full name" name="name" className="w-full md:w-64 h-12 px-4 border rounded-md  placeholder-emerald-500 " />
        <ErrorMessage name="name" component="div" className="text-emerald-900" />
      </div>
      <div className=' mb-9 mt-15 '>
        
        <Field type="text" id="Mobile number"  placeholder="Mobile Number" name="Mobile number" className="w-full md:w-64 h-12 px-4 border rounded-md placeholder-emerald-500"/>
        <ErrorMessage name="Mobile number" component="div" className="text-red-500" />
      </div>

      <div className=' mb-9 mt-4'>
        
        <Field type="text" id="email" placeholder="Email Please" name="email" className="w-full md:w-64 h-12 px-4 border rounded-md placeholder-emerald-500" />
        <ErrorMessage name="email" component="div" className="text-red-500" />
      </div>
      <div className=' mb-9 mt-4' >
        
        <Field type="text" id="country" placeholder="Please Enter Country Name" name="country" className="w-full md:w-64 h-12 px-4 border rounded-md placeholder-emerald-500" />
        <ErrorMessage name="country" component="div" className="text-red-500" />
      </div>
      <div className='mb-9 mt-4' >
        
        <Field type="text" id="city" placeholder ="Please Enter City Name" name="city" className="w-full md:w-64 h-12 px-4 border rounded-md placeholder-emerald-500" />
        <ErrorMessage name="city" component="div" className="text-red-500" />
      </div>
      <div>
      <select
        id="dropdown"
        value={"gender"}
        
        className="border p-2"
      >
        <option value="">Gender</option>
        <option value="option1">Male</option>
        <option value="option2">Female</option>
        <option value="option3">Transgender</option>
      </select>
      </div>
     

     
      </div>
    </Form>
  </Formik>
  )
}

export default Education