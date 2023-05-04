

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "react-bootstrap";

const ChefsDetails = () => {
    const { id } = useParams();
    const [chefDetails, setChefDetails] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/catagories/${id}`)
            .then((res) => res.json())
            .then((data) => setChefDetails(data.item));
        console.log(chefDetails)
    }, []);
    // console.log("detail", chefDetails);
    return (
        <div className="container" style={{ paddingTop: "125px" }}>
            <div
                className="container-fluid p-4 rounded"
                style={{
                    background: "linear-gradient(to right, #f2d50f, #da0641)",
                }}
            >
                <div className="container py-5">

                    <div

                        className="row justify-content-center align-items-center mb-4"
                    >
                        <div className=" d-flex justify-content-start col-md-6 order-md-2 mb-3 mb-md-0">
                            <div className="text-start text-md-left">
                                <h2 className="text-light fw-bold mt-2">Name: Asad Khan</h2>
                                <p className="text-light mb-0">
                                    <span className="text-warning fw-bold fs-4">
                                        5
                                    </span>{" "}
                                    years of experience
                                </p>
                                <p className="text-light mb-0">
                                    <span className="text-warning fw-bold fs-4">
                                        20
                                    </span>{" "}
                                    recipes
                                </p>
                                <p className="text-light mb-0">
                                    <span className="text-warning fw-bold fs-4">
                                        25483
                                    </span>{" "}
                                    likes
                                </p>
                                <h1 className="text-success fw-bold fs-4 mt-3">
                                    Top Must-Try BD Food from the Expert Chef Of Our Food Loader
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <div className="d-flex justify-content-end ext-center">
                                <img
                                    src="https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?pid=ImgDet&rs=1"
                                    className="rounded img-fluid d-block d-md-none"
                                    style={{
                                        height: "200px",
                                        width: "200px",
                                        border: "5px solid #fff",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn btn-success w-100 mx-auto mt-3">
                <Nav.Link className="text-light fs-5 fw-bold" as={Link} to="/">
                    Home
                </Nav.Link>
            </div>
        </div>
    );
};

export default ChefsDetails;