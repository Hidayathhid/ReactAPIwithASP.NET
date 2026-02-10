// // // import React, { useEffect } from "react";
// // // import { connect } from "react-redux";
// // // import Grid from "@mui/material/Grid"; // see note below
// // // import Paper from "@mui/material/Paper";
// // // import {
// // //     Table,
// // //     TableBody,
// // //     TableCell,
// // //     TableContainer,
// // //     TableHead,
// // //     TableRow
// // // } from "@mui/material";
// // // import * as actions from "../actions/dCandidate";

// // // const DCandidates = ({ fetchAllDCandidates, DCandidateList }) => {

// // //     useEffect(() => {
// // //         fetchAllDCandidates();
// // //     }, [fetchAllDCandidates]);

// // //     return (
// // //         <Grid container spacing={2}>
// // //             <Grid item xs={6}>
// // //                 <Paper sx={{ p: 2, m: 2 }}>
// // //                     Form DCandidates hidayath
// // //                 </Paper>
// // //             </Grid>

// // //             <Grid item xs={6}>
// // //                 <Paper sx={{ p: 2, m: 2 }}>
// // //                     <TableContainer>
// // //                         <Table>
// // //                             <TableHead>
// // //                                 <TableRow>
// // //                                     <TableCell>Name</TableCell>
// // //                                     <TableCell>Mobile</TableCell>
// // //                                     <TableCell>Blood Group</TableCell>
// // //                                     <TableCell>Email</TableCell>
// // //                                 </TableRow>
// // //                             </TableHead>
// // //                             <TableBody>
// // //                                 {DCandidateList.map((record, index) => (
// // //                                     <TableRow key={index}>
// // //                                         <TableCell>{record.fullname}</TableCell>
// // //                                         <TableCell>{record.phone}</TableCell>
// // //                                         <TableCell>{record.bloodgroup}</TableCell>
// // //                                         <TableCell>{record.email}</TableCell>
// // //                                     </TableRow>
// // //                                 ))}
// // //                             </TableBody>
// // //                         </Table>
// // //                     </TableContainer>
// // //                 </Paper>
// // //             </Grid>
// // //         </Grid>
// // //     );
// // // };

// // // const mapStateToProps = state => ({
// // //     DCandidateList: state.DCandidate?.list || []
// // // });

// // // const mapActionToProps = {
// // //     fetchAllDCandidates: actions.fetchAll
// // // };

// // // export default connect(mapStateToProps, mapActionToProps)(DCandidates);


// // import React, { useEffect } from "react";
// // import { connect } from "react-redux";
// // import Grid from "@mui/material/Grid";
// // import Paper from "@mui/material/Paper";
// // import {
// //     Table,
// //     TableBody,
// //     TableCell,
// //     TableContainer,
// //     TableHead,
// //     TableRow
// // } from "@mui/material";
// // import * as actions from "../actions/dCandidate";

// // const DCandidates = ({ fetchAllDCandidates, DCandidateList }) => {

// //     useEffect(() => {
// //         fetchAllDCandidates();
// //     }, [fetchAllDCandidates]);

// //     console.log("📦 DCandidateList from Redux:", DCandidateList);

// //     return (
// //         <Grid container spacing={2}>
// //             <Grid item xs={6}>
// //                 <Paper sx={{ p: 2, m: 2 }}>
// //                     Form DCandidates hidayath
// //                 </Paper>
// //             </Grid>

// //             <Grid item xs={6}>
// //                 <Paper sx={{ p: 2, m: 2 }}>
// //                     <TableContainer>
// //                         <Table>
// //                             <TableHead>
// //                                 <TableRow>
// //                                     <TableCell>ID</TableCell>
// //                                     <TableCell>Name</TableCell>
// //                                     <TableCell>Mobile</TableCell>
// //                                     <TableCell>Blood Group</TableCell>
// //                                     <TableCell>Email</TableCell>
// //                                 </TableRow>
// //                             </TableHead>
// //                             <TableBody>
// //                                 {DCandidateList.map((record) => (
// //                                     <TableRow key={record.id || record._id || Math.random()}>
// //                                         <TableCell>{record.id || record._id}</TableCell>
// //                                         <TableCell>{record.fullname}</TableCell>
// //                                         <TableCell>{record.phone}</TableCell>
// //                                         <TableCell>{record.bloodgroup}</TableCell>
// //                                         <TableCell>{record.email}</TableCell>
// //                                     </TableRow>
// //                                 ))}
// //                             </TableBody>
// //                         </Table>
// //                     </TableContainer>
// //                 </Paper>
// //             </Grid>
// //         </Grid>
// //     );
// // };

// // const mapStateToProps = state => ({
// //     DCandidateList: state.DCandidate?.list || []
// // });

// // const mapActionToProps = {
// //     fetchAllDCandidates: actions.fetchAll
// // };

// // export default connect(mapStateToProps, mapActionToProps)(DCandidates);


// // import React, { useEffect } from "react";
// // import { connect } from "react-redux";
// // import Grid from "@mui/material/Grid";
// // import Paper from "@mui/material/Paper";
// // import Table from "@mui/material/Table";
// // import TableBody from "@mui/material/TableBody";
// // import TableCell from "@mui/material/TableCell";
// // import TableContainer from "@mui/material/TableContainer";
// // import TableHead from "@mui/material/TableHead";
// // import TableRow from "@mui/material/TableRow";
// // import * as actions from "../actions/dCandidate";

// // const DCandidates = (props) => {
// //     const { fetchAllDCandidates, DCandidateList } = props;

// //     useEffect(() => {
// //         fetchAllDCandidates();
// //     }, [fetchAllDCandidates]);

// //     return (
// //         <Grid container spacing={2}>
// //             <Grid item xs={6}>
// //                 <div>Form DCandidates hidayath</div>
// //             </Grid>

// //             <Grid item xs={6}>
// //                 <TableContainer
// //                     component={Paper}
// //                     sx={{ m: 2, p: 2 }}
// //                 >
// //                     <Table>
// //                         <TableHead>
// //                             <TableRow>
// //                                 <TableCell>Name</TableCell>
// //                                 <TableCell>Mobile</TableCell>
// //                                 <TableCell>Blood Group</TableCell>
// //                             </TableRow>
// //                         </TableHead>

// //                         <TableBody>
// //                             {DCandidateList.map((record, index) => (
// //                                 <TableRow key={index}>
// //                                     <TableCell>{record.fullName}</TableCell>
// //                                     <TableCell>{record.mobile}</TableCell>
// //                                     <TableCell>{record.bloodGroup}</TableCell>
// //                                 </TableRow>
// //                             ))}
// //                         </TableBody>
// //                     </Table>
// //                 </TableContainer>
// //             </Grid>
// //         </Grid>
// //     );
// // };

// // const mapStateToProps = (state) => ({
// //     DCandidateList: state.DCandidate?.list || []
// // });

// // const mapActionToProps = {
// //     fetchAllDCandidates: actions.fetchAll
// // };

// // export default connect(mapStateToProps, mapActionToProps)(DCandidates);



// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import * as actions from "../actions/dCandidate";


// root: {
//     "& .MuiTableCell-head": {
//         fontSize: "1.25rem"
//     }
// },
// paper: {
//     margin: theme.spacing(2),
//     padding: theme.spacing(2)
// }
// })
// const DCandidates = (props) => {
//     const { fetchAllDCandidates, DCandidateList } = props;

//     // useEffect(() => {
//     //     fetchAllDCandidates();
//     // }, [fetchAllDCandidates]);
//     useEffect(() => {
//         console.log("fetchAllDCandidates called");
//         fetchAllDCandidates();
//     }, [fetchAllDCandidates]);

//     console.log("DCandidateList from Redux:", DCandidateList);
//     return (
//         <Paper className={Classes.paper} elevation={3}>
//             <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                     <div>Form DCandidates hidayath</div>
//                 </Grid>

//                 <Grid item xs={6}>
//                     <TableContainer component={Paper} sx={{ m: 2, p: 2 }}>
//                         <Table>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>fullname</TableCell>
//                                     <TableCell>Mobile</TableCell>
//                                     <TableCell>Blood Group</TableCell>
//                                 </TableRow>
//                             </TableHead>

//                             <TableBody>
//                                 {DCandidateList.length > 0 ? (
//                                     DCandidateList.map((record, index) => (
//                                         <TableRow key={index}>
//                                             <TableCell>{record.fullname}</TableCell>
//                                             <TableCell>{record.Email}</TableCell>
//                                             <TableCell>{record.bloodgroup}</TableCell>
//                                         </TableRow>
//                                     ))
//                                 ) : (
//                                     <TableRow>
//                                         <TableCell colSpan={3} align="center">
//                                             No data found
//                                         </TableCell>
//                                     </TableRow>
//                                 )}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </Grid>
//             </Grid>
//             </Paper>
//             );

// };


// const mapStateToProps = (state) => ({
//                 DCandidateList: state.dCandidate.list   // ✅ CORRECT KEY
// });

//             const mapActionToProps = {
//                 fetchAllDCandidates: actions.fetchAll
// };

//             export default connect(mapStateToProps, mapActionToProps)(DCandidates);

// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import * as actions from "../actions/dCandidate";

// const DCandidates = (props) => {
//     const { fetchAllDCandidates, DCandidateList } = props;

//     useEffect(() => {
//         fetchAllDCandidates();
//     }, [fetchAllDCandidates]);

//     return (
//         <Paper sx={{ m: 2, p: 2 }} elevation={3}>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={6}>
//                     <div>Form DCandidates</div>
//                 </Grid>

//                 <Grid item xs={12} md={6}>
//                     <TableContainer component={Paper}>
//                         <Table
//                             sx={{
//                                 "& .MuiTableCell-head": {
//                                     fontSize: "1.1rem",
//                                     fontWeight: "bold",
//                                 },
//                             }}
//                         >
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>Full Name</TableCell>
//                                     <TableCell>Email</TableCell>
//                                     <TableCell>Blood Group</TableCell>
//                                 </TableRow>
//                             </TableHead>

//                             <TableBody>
//                                 {DCandidateList && DCandidateList.length > 0 ? (
//                                     DCandidateList.map((record) => (
//                                         <TableRow key={record.id}>
//                                             <TableCell>{record.fullname}</TableCell>
//                                             <TableCell>{record.email}</TableCell>
//                                             <TableCell>{record.bloodgroup}</TableCell>
//                                         </TableRow>
//                                     ))
//                                 ) : (
//                                     <TableRow>
//                                         <TableCell colSpan={3} align="center">
//                                             No data found
//                                         </TableCell>
//                                     </TableRow>
//                                 )}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </Grid>
//             </Grid>
//         </Paper>
//     );
// };

// const mapStateToProps = (state) => ({
//     DCandidateList: state.dCandidate.list,
// });

// const mapActionToProps = {
//     fetchAllDCandidates: actions.fetchAll,
// };

// export default connect(mapStateToProps, mapActionToProps)(DCandidates);


import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

import DCandidateForm from "./DCandidateForm"; // your form component
import * as actions from "../actions/dCandidate";

const DCandidates = ({ fetchAllDCandidates, DCandidateList }) => {
  useEffect(() => {
    fetchAllDCandidates();
  }, [fetchAllDCandidates]);

  return (
    <Paper sx={{ m: 2, p: 2 }} elevation={3}>
      <Grid container spacing={2} alignItems="flex-start">
        {/* Left side: Form */}
        

        {/* Right side: Table */}
        <Grid item xs={12} md={6}>
          <TableContainer component={Paper} sx={{ p: 2 }}>
            <Table
              sx={{
                "& .MuiTableCell-head": {
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                },
              }}
              aria-label="Candidate List"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Blood Group</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {DCandidateList && DCandidateList.length > 0 ? (
                  DCandidateList.map((record, index) => (
                    <TableRow key={record.id || index}>
                      <TableCell>{record.fullName || record.fullname}</TableCell>
                      <TableCell>{record.mobile || record.phone}</TableCell>
                      <TableCell>{record.bloodgroup}</TableCell>
                      <TableCell>{record.email}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} align="center">
                      No data found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          
        </Grid>
      </Grid>
    </Paper>
    
  );
};

const mapStateToProps = (state) => ({
  DCandidateList: state.dCandidate?.list || [],
});

const mapActionToProps = {
  fetchAllDCandidates: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionToProps)(DCandidates);
