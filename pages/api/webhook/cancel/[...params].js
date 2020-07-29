// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import HttpStatus from "http-status-codes";

export default async (req, res) => {
  const { headers, query, body } = req;
  const data = { headers, query, body };
  console.log(data);
  res.status(HttpStatus.OK).json({
    success: true,
    accountIdentifier: 1,
    errorCode: "ACCOUNT_NOT_FOUND",
    message: "The account TEST123 could not be found.",
  });
};
