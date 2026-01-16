function handleResponse_no_res(status, message, results) {
    if (!status) {
        return {
            status: false,
            message: message || "Internal Server Error",
            ResultData: [],
        };
    }

    if (results && results.length > 0) {
        return {
            status: true,
            ResultData: results,
            message: "Query executed successfully.",
        };
    }

    return {
        status: false,
        message: "No records found",
        ResultData: [],
    };
}


function Sp_handleResponse_no_res(results) {
    if (results.Status === "Success") {
        return {
            status: true,
            ResultData: results.resultdata,
            message: results.ResultMessage,
        };
    }

    if (results.Status === "Failure") {
        return {
            status: false,
            ResultData: results.resultdata,
            message: results.ResultMessage,
        };
    }

    return {
        status: false,
        message: "No records found",
        ResultData: results.resultdata,
    };
}

function Sp_handleResponse_header(results) {
    if (results.Status === "Success") {
        return {
            status: true,
            ResultData: results.resultdata,
            message: results.ResultMessage,
            header:results.header,
        };
    }

    if (results.Status === "Failure") {
        return {
            status: false,
            ResultData: results.resultdata,
            message: results.ResultMessage,
            header:results.header,
        };
    }

    return {
        status: false,
        message: "No records found",
        ResultData: results.resultdata,
        header:results.header,
    };
}


function Sp_handleResponse(res, results) {
    const resultData = results.resultdata || [];
    const hasFailedRow = resultData.some(r => String(r.status).toLowerCase() === 'failed');
    if (hasFailedRow) {
        return res.status(400).json({
            status: false,
            ResultData: resultData,
            message: resultData[0]?.message || results.ResultMessage || 'Operation failed'
        });
    }
    if (results.Status == 'Success') {
        return res.status(200).json({
            status: true,
            ResultData: results.resultdata,
            message:results.ResultMessage
        });
    }

    if (results.Status == 'Failure') {
        return res.status(500).json({
            status: false,
            ResultData: results.resultdata,
            message:results.ResultMessage
        });
    }

    return res.status(404).json({ // Use 404 for "No records found"
        status: false,
        message: "No records found",
        ResultData: results.resultdata,
    });
}


function handleResponse(res, status,message, results) {
    if (!status) {
        console.error("Error:", message);
        return res.status(500).json({
            status: false,
            message: message || "Internal Server Error",
            ResultData:[]
        });
    }

    if (results && results.length > 0) {
        return res.status(200).json({
            status: true,
            ResultData: results,
            message:'Query executed successfully.'
        });
    }

    return res.status(404).json({ // Use 404 for "No records found"
        status: false,
        message: "No records found",
        ResultData: [],
    });
}

function utilityhandleResponse(res, status,message,statuscode,ResultData=[]) {
    return res.status(statuscode).json({ 
        status: status,
        message: message || "Something went wrong",
        ResultData : ResultData
    });
}


module.exports = {
    handleResponse,Sp_handleResponse_header,utilityhandleResponse,Sp_handleResponse,Sp_handleResponse_no_res,handleResponse_no_res
};
