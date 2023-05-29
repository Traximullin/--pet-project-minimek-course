import React from "react";
import {useSelector} from "react-redux";

const SampleComponent = () => {
    const data = useSelector(data => data.test.data)
    return (
        <div>
            Data from Redux: {data}
        </div>
    );
}

export default SampleComponent;