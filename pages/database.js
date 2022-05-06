import * as React from 'react';
import { useEffect, useState } from "react";

export default function DataBase({ customs }) {
    const [currentData, setCurrentData] = useState([]);
    useEffect(() => {
        setCurrentData(customs.data);
    }, [customs])

    return (
        <div style={{ padding: '0 20px' }}>
            {currentData && currentData.map((custom, index) =>
                <div key={custom._id}>
                    <h3 style={{ margin: '20px 0 10px' }}>Submission {index + 1}</h3>
                    <ul style={{ listStyle: 'none', margin: '0' }}>
                        <li><b>Device: </b>{custom.device}</li>
                        <li><b>Product: </b>{custom.product}</li>
                        <li><b>Color: </b>{custom.color}</li>
                        <li><b>Custom Texts: </b>{custom.custom_text.map((text, index) => <p key={index}>Side {index + 1}: {text} </p>)}</li>
                        <li><b>Custom User Manual: </b>{custom.custom_user_manual}</li>
                        <li><b>Custom Package: </b>{custom.custom_package}</li>
                        <li><b>Customer Name: </b>{custom.customer_name}</li>
                        <li><b>Phone Number: </b>{custom.phone_number}</li>
                        <li><b>Email Address: </b>{custom.email}</li>
                        <li><b>Message: </b>{custom.message}</li>
                        <li><b>Custom Logo and Designs: </b>{custom.custom_designs.map((image, index) => <p key={index}><a href={image} target='_blank'>{image}</a></p>)}</li>
                    </ul>
                    <hr></hr>
                </div>
            )}
        </div>
    )
}

export async function getServerSideProps(context) {
    let data = await fetch('https://custom-vapes-app.vercel.app/api/custom', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    let customs = await data.json();

    return {
        props: { customs }
    }
}