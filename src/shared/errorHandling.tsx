const httpErrorHandling = ({ status, statusText }: Response) => {
  let response = { isSuccess: false, message: "" };
  switch (status) {
    case 404:
      response.message = "Service not found";
      break;
    case 409:
      response.message = "Another login detected";
      break;
  }
  return response;
};

export default httpErrorHandling;
