// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import HttpStatus from "http-status-codes";
import OAuth from 'oauth';

export default async (req, res) => {
  const { method, url, headers, query, body } = req;
  const data = { method, url, headers, query, body };
  console.log(data);
  res.status(HttpStatus.OK).json({
    success: true,
    accountIdentifier: 1,
    errorCode: "ACCOUNT_NOT_FOUND",
    message: "The account TEST123 could not be found.",
  });
};
