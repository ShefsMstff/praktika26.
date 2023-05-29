import React from 'react'
import { Formik } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import { Helmet } from 'react-helmet'
import toast, { Toaster } from 'react-hot-toast';
import './Add.scss'

function Add() {
  return (
  <>
   <Helmet>
        <title>Add</title>
    </Helmet>

    {/* Formik */}
    <div className="form">
        <Formik  initialValues={{
            name: "",
            age: 0,
        }}
        // validation schema
        validationSchema = {Yup.object({
          image: Yup.string().required("image is required!"),
            name: Yup.string().required("name is required!"),
            age : Yup.number().required("age is required!")
        })}
        // onSubmit
        onSubmit = {(values, {resetForm}) => {
            axios.post("http://localhost:8080/home" , values).then(res => {
                toast.success('Added new Person')
            })
            resetForm()
        }}
        >
            {
                ({values , handleChange , handleSubmit , dirty}) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" onSubmit={handleSubmit}>Name</label>
                            <input
                                type="text"
                                placeholder="name"
                                id="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                             <label htmlFor="image" onSubmit={handleSubmit}>Image</label>
                            <input
                                type="url"
                                placeholder="image"
                                id="image"
                                value={values.image}
                                onChange={handleChange}
                            />
                        <label htmlFor="age">Age</label>
                            <input
                                min={0}
                                type="number"
                                placeholder="age"
                                id="age"
                                value={values.age}
                                onChange={handleChange}
                            />
                        <button type='submit' disabled={!dirty}>Add</button>
                    </form>
                )
            }
        </Formik>
    </div>
    <Toaster />
  </>
  )
}

export default Add