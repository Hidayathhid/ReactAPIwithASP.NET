// import { TextField } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import { useState } from "react";
// import useForm from "./useForm";

// const styles = theme => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             minWidth: 230,
//         }
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 230,
//     },
//     smMargin: {
//         margin: theme.spacing(1)
//     }
// })


// const initialFieldValues = {
//     fullname: "",
//     email: "",
//     mobile: "",
//     age: "",
//     address: ""
// };

// const DCandidateForm = (props) => {
//     const { values, setValues } = useState(initialFieldValues)

//     const handleInputChange = e => {
//         const { name, value } = e.target
//         setValues({
//             ...values,


//         })
//     }

//     const {
//         values,
//         setValues,
//         handleInputChange
//     } = useForm(initialFieldValues)



//     return (
//         // <div>form DCandidateForm</div>
//         <form autoComplete="off" noValidate>
//             <Grid container>
//                 <Grid item xs={6}>
//                     <TextField
//                         name="fullname"
//                         variant="outlined"
//                         label="Full Name"
//                         value={values.fullname}
//                         onChange={handleInputChange} />
//                     <TextField
//                         name="email"
//                         variant="outlined"
//                         label="Email"
//                         value={values.email}
//                         onChange={handleInputChange} />
//                     {/* <TextField
//                         name="fullname"
//                         variant="outlined"
//                         label="Full Name"
//                         value={values.fullname}
//                         onChange={handleInputChange} /> */}
//                     <FormControl variant="outlined"
//                         className={classes.formControl}
//                         {...(errors.bloodGroup && { error: true })}
//                     >
//                         <InputLabel ref={inputLabel}>Blood Group</InputLabel>
//                         <Select
//                             name="bloodGroup"
//                             value={values.bloodGroup}
//                             onChange={handleInputChange}
//                             labelWidth={labelWidth}
//                         >
//                             <MenuItem value="">Select Blood Group</MenuItem>
//                             <MenuItem value="A+">A +ve</MenuItem>
//                             <MenuItem value="A-">A -ve</MenuItem>
//                             <MenuItem value="B+">B +ve</MenuItem>
//                             <MenuItem value="B-">B -ve</MenuItem>
//                             <MenuItem value="AB+">AB +ve</MenuItem>
//                             <MenuItem value="AB-">AB -ve</MenuItem>
//                             <MenuItem value="O+">O +ve</MenuItem>
//                             <MenuItem value="O-">O -ve</MenuItem>
//                         </Select>
//                         {errors.bloodGroup && <FormHelperText>{errors.bloodGroup}</FormHelperText>}
//                     </FormControl>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <TextField
//                         name="mobile"
//                         variant="outlined"
//                         label="Mobile"
//                         value={values.mobile}
//                         onChange={handleInputChange} />
//                     <TextField
//                         name="age"
//                         variant="outlined"
//                         label="age"
//                         value={values.age}
//                         onChange={handleInputChange} />
//                     <TextField
//                         name="address"
//                         variant="outlined"
//                         label="Address"
//                         value={values.address}
//                         onChange={handleInputChange} />

//                 </Grid>

//             </Grid>

//         </form>
//     );
// }
// export default DCandidateForm;

// import React from "react";
// import {
//     TextField,
//     Grid,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     FormHelperText,
//     Box,
//     theme
// } from "@mui/material";
// import useForm from "./useForm";


// const inputLabel = React.useRef(null);
// const [labelWidth, setLabelWidth] = React.useState(0);
// React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
// }, []);

// const initialFieldValues = {
//     fullName: '',
//     mobile: '',
//     email: '',
//     age: '',
//     bloodgroup: '',
//     address: ''
// };

// const DCandidateForm = () => {

//     const {
//         values,
//         errors,
//         handleInputChange
//     } = useForm(initialFieldValues);

//     return (
//         <Box
//             component="form"
//             autoComplete="off"
//             noValidate
//             sx={{
//                 '& .MuiTextField-root': {
//                     //margin: 1,

//                     margin: '8px',
//                     minWidth: 230
//                 },
//                 formControl:{
//                     margin:'8px',
//                     minWidth: 230
//                 }
//             }}
//         >
//             <Grid container>
//                 <Grid item xs={6}>
//                     <TextField
//                         name="fullName"
//                         label="Full Name"
//                         variant="outlined"
//                         value={values.fullName}
//                         onChange={handleInputChange}
//                     />

//                     <TextField
//                         name="email"
//                         label="Email"
//                         variant="outlined"
//                         value={values.email}
//                         onChange={handleInputChange}
//                     />

//                     <FormControl
//                         variant="outlined"
//                         sx={{ m: 1, minWidth: 230 }}
//                         error={Boolean(errors.bloodgroup)}
//                     >
//                         <InputLabel>Blood Group</InputLabel>
//                         <Select
//                             name="bloodgroup"
//                             value={values.bloodgroup}
//                             onChange={handleInputChange}
//                             label="Blood Group"
//                         >
//                             <MenuItem value="">Select Blood Group</MenuItem>
//                             <MenuItem value="A+">A +ve</MenuItem>
//                             <MenuItem value="A-">A -ve</MenuItem>
//                             <MenuItem value="B+">B +ve</MenuItem>
//                             <MenuItem value="B-">B -ve</MenuItem>
//                             <MenuItem value="AB+">AB +ve</MenuItem>
//                             <MenuItem value="AB-">AB -ve</MenuItem>
//                             <MenuItem value="O+">O +ve</MenuItem>
//                             <MenuItem value="O-">O -ve</MenuItem>
//                         </Select>
//                         {errors.bloodgroup && (
//                             <FormHelperText>{errors.bloodgroup}</FormHelperText>
//                         )}
//                     </FormControl>
//                 </Grid>

//                 <Grid item xs={6}>
//                     <TextField
//                         name="mobile"
//                         label="Mobile"
//                         variant="outlined"
//                         value={values.mobile}
//                         onChange={handleInputChange}
//                     />

//                     <TextField
//                         name="age"
//                         label="Age"
//                         variant="outlined"
//                         value={values.age}
//                         onChange={handleInputChange}
//                     />

//                     <TextField
//                         name="address"
//                         label="Address"
//                         variant="outlined"
//                         value={values.address}
//                         onChange={handleInputChange}
//                     />
//                     <div>
//                         <button
//                         variant="container"
//                         color="primary"
//                         type="submit">Submit
//                         </button>
//                         <button
//                         variant="container"> Reset
//                         </button>
//                     </div>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default DCandidateForm;


import React from "react";
import api from "../actions/api";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button
} from "@mui/material";
import useForm from "./useForm";

// const initialFieldValues = {
//   fullName: "",
//   mobile: "",
//   email: "",
//   age: "",
//   bloodgroup: "",
//   address: ""
// };
const initialFieldValues = {
    fullname: "",
    phone: "",
    email: "",
    age: "",
    bloodgroup: "",
    address: ""
  };

const DCandidateForm = () => {
  const { values, handleInputChange, resetForm } =
    useForm(initialFieldValues);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ✅ form data available here
//     console.log("Submitted values:", values);

// const handleSubmit = e => {
//     e.preventDefault()
//     if (validate()) {
//         const onSuccess = () => {
//             resetForm()
//             addToast("Submitted successfully", { appearance: 'success' })
//         }
//         if (props.currentId == 0)
//             props.createDCandidate(values, onSuccess)
//         else
//             props.updateDCandidate(props.currentId, values, onSuccess)
//     }
// }

//     // 👉 later:
//    //  dispatch(actions.create(values))
//     // axios.post("/api/candidate", values)

//     resetForm();
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      ...values,
      age: values.age ? Number(values.age) : null
    };
  
    try {
      await api.dCandidate().create(payload);
      alert("Saved successfully");
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Error saving data");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}   // ✅ HERE
      autoComplete="off"
      noValidate
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          minWidth: 230,
        },
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <TextField
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />

          <TextField
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />

          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <InputLabel>Blood Group</InputLabel>
            <Select
              name="bloodgroup"
              value={values.bloodgroup}
              onChange={handleInputChange}
              label="Blood Group"
            >
              <MenuItem value="">Select Blood Group</MenuItem>
              <MenuItem value="A+">A +ve</MenuItem>
              <MenuItem value="A-">A -ve</MenuItem>
              <MenuItem value="B+">B +ve</MenuItem>
              <MenuItem value="B-">B -ve</MenuItem>
              <MenuItem value="AB+">AB +ve</MenuItem>
              <MenuItem value="AB-">AB -ve</MenuItem>
              <MenuItem value="O+">O +ve</MenuItem>
              <MenuItem value="O-">O -ve</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />

          <TextField
            name="age"
            label="Age"
            value={values.age}
            onChange={handleInputChange}
          />

          <TextField
            name="address"
            label="Address"
            value={values.address}
            onChange={handleInputChange}
          />

          <Box sx={{ m: 1 }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>

            <Button
              variant="outlined"
              sx={{ ml: 1 }}
              onClick={resetForm}
            >
              Reset
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DCandidateForm;
