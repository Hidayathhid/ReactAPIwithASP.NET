// import { useState } from "react";

// const useForm = (initialFieldValues) => {

//     const [values, setValues] = useState(initialFieldValues);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value
//         });
//     };

//     return {
//         values,
//         setValues,
//         handleInputChange
//     };
// };

// export default useForm;


import { useState } from "react";

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({}); // initialize as empty object

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });

        // optional: simple required validation
        setErrors({
            ...errors,
            [name]: value.trim() === "" ? "This field is required." : ""
        });
    };

    // optional: validate all fields on submit
    const validate = () => {
        let temp = {};
        for (let key in values) {
            temp[key] = values[key].trim() === "" ? "This field is required." : "";
        }
        setErrors(temp);
        return Object.values(temp).every(x => x === "");
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        validate
    };
};

export default useForm;
