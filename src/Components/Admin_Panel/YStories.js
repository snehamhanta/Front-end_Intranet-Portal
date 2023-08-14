import React, { useState, useEffect } from 'react'
import axios from "axios";
//const defaultImageSrc = '/img/image_placeholder.png'

const initialFieldValues = {
   
    videoId: 0,
    videoURL: '',
    videoTitle: ''
}

export default function YStories(props) {

    const { vaddOrEdit, recordForEdit } = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    // const showPreview = e => {
    //     if (e.target.files && e.target.files[0]) {
    //         let imageFile = e.target.files[0];
    //         const reader = new FileReader();
    //         reader.onload = x => {
    //             setValues({
    //                 ...values,
    //                 imageFile,
    //                 imageSrc: x.target.result
    //             })
    //         }
    //         reader.readAsDataURL(imageFile)
    //     }
    //     else {
    //         setValues({
    //             ...values
    //         })
    //     }
    // }

    const validate = () => {
        let temp = {}
        temp.videoURL= values.videoURL == "" ? false : true;
        //temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('videoURL').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
          
            formData.append('videoId', values.videoId)
            formData.append('videoURL', values.videoURL)
            formData.append('videoTitle', values.videoTitle)
            
            vaddOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')

    return (
        <>
            {/* <div className="container text-center">
                <p className="lead">An Employee</p>
            </div> */}
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    
                    <div className="card-body">
                       
                        <div className="form-group">
                          <input className={"form-control" + applyErrorClass('videoURL')} placeholder="Video URL" name="videoURL"
                                value={values.videoURL}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('videTitle')} placeholder="Video Title" name="videoTitle"
                                value={values.videoTitle}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                        
                        
                    </div>
                </div>
            </form>
        </>
    )
}