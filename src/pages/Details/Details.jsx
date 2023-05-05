import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Details = () => {
    const { id } = useParams;
    const [chefsIds, setChefsIds] = useState("");

    // const Details = ({params}) => {
    //     const id = params;
    //     console.log('id',id)
    //     const [chefs_id, setChef_id] = useState([]);
    useEffect(() => {
        fetch(`https://food-loader-sadakatsrabon.vercel.app/${id}`)
            .then(res => res.json())
            .then(data => setChefsIds(data));
        console.log('chefsids', chefsIds);
    }, [])

    return (
        <div>
            <div className="container" style={{ paddingTop: "125px" }}>
                <div
                    className="container-fluid p-4 rounded"
                    style={{
                        background: "linear-gradient(to right, #f2d50f, #da0641)",
                    }}
                >
                    <div className="container py-5">
                        <div
                            key={chefDetails.id}
                            className="row justify-content-center align-items-center mb-4"
                        >
                            <div className=" d-flex justify-content-start col-md-6 order-md-2 mb-3 mb-md-0"></div>
                        </div>
                        );
};

                        export default Details;