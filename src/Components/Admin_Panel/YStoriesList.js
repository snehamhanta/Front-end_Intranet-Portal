import React, { useState, useEffect } from 'react'

import YStories from './YStories'
import axios from "axios";
export default function YStoriesList() {
    const [YStoriesList, setYStoriesList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshYStoriesList();
    }, [])

    const ystoriesAPI = (url = 'https://localhost:7274/api/YStories') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post("https://localhost:7274/api/YStories", newRecord),
            update: (id, updatedRecord) => axios.put(`https://localhost:7274/api/YStories/${id}`, updatedRecord),
            delete: id => axios.delete(`https://localhost:7274/api/YStories/${id}`)
        }
    }

    function refreshYStoriesList() {
        ystoriesAPI().fetchAll()
            .then(res => {
                setYStoriesList(res.data)
            })
            .catch(err => console.log(err))
    }

    const vaddOrEdit = (formData, onSuccess) => {
        if (formData.get('videoId') == "0")
            ystoriesAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshYStoriesList();
                })
                .catch(err => console.log(err))
        else
            ystoriesAPI().update(formData.get('videoId'), formData)
                .then(res => {
                    onSuccess();
                    refreshYStoriesList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            ystoriesAPI().delete(id)
                .then(res => refreshYStoriesList())
                .catch(err => console.log(err))
    }

    const vCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
           {/* // <img src={data.imageSrc} className="card-img-top rounded-squir" height="200px" width="350px" /> */}
            <div className="card-body">
                <h5>{data.videoId}</h5>
                <span>{data.videoURL}</span> <br />
                <span>{data.videoTitle}</span> <br />
                
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.videoId))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">Youtube URL</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <YStories
                    vaddOrEdit={vaddOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(YStoriesList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{vCard(YStoriesList[3 * i])}</td>
                                    <td>{YStoriesList[3 * i + 1] ? vCard(YStoriesList[3 * i + 1]) : null}</td>
                                    <td>{YStoriesList[3 * i + 2] ? vCard(YStoriesList[3 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}