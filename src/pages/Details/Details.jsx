import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


const Details = ({params}) => {
    const { id } = params;
    const [chefs_id, setChef_id] = useState({});

// const Details = ({params}) => {
//     const id = params;
//     console.log('id',id)
//     const [chefs_id, setChef_id] = useState([]);
    useEffect(() => {
        fetch(`https://food-loader-sadakatsrabon.vercel.app/${params.id}`)
            .then(res => res.json())
            .then(data => setChef_id(data));
        console.log(chefs_id);
    },[id])

    return (
        <div>
            detais is shown here
        </div>
    );
};
Details.propTypes = {
    params: PropTypes.object.isRequired
};

export default Details;