import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ResourceLoader = ({ resourceUrl, resourceName , children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/users/${userId}`);
            setData(response.data);
        })()
    }, []);

    return user && React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { [resourceName]: data});
        }
        return child;
    })
}